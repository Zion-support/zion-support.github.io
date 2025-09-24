#!/bin/bash

# Test comprehensive PR merge with 5 branches
set -e

echo "🧪 Testing comprehensive PR merge with 5 branches..."

# Function to sync with remote
sync_with_remote() {
    echo "  🔄 Syncing with remote..."
    git fetch origin main
    git pull origin main --rebase
}

# Function to process a single branch
process_branch() {
    local branch=$1
    local branch_num=$2
    local total_branches=$3
    
    echo ""
    echo "🔄 [$branch_num/$total_branches] Processing branch: $branch"
    
    # Check if branch exists locally
    if git show-ref --verify --quiet refs/heads/$branch; then
        echo "  ✅ Branch exists locally"
    else
        echo "  📥 Fetching branch from remote..."
        if ! git fetch origin $branch:$branch 2>/dev/null; then
            echo "  ⚠️  Failed to fetch branch $branch, skipping..."
            return 1
        fi
    fi
    
    # Switch to main
    git checkout main
    
    # Try to merge
    echo "  🔀 Attempting to merge $branch into main..."
    
    if git merge $branch --no-ff -m "Merge $branch into main" 2>/dev/null; then
        echo "  ✅ Successfully merged $branch"
        return 0
        
    else
        echo "  ⚠️  Merge conflict detected in $branch"
        
        # Check what files have conflicts
        CONFLICT_FILES=$(git diff --name-only --diff-filter=U 2>/dev/null || echo "")
        if [ -n "$CONFLICT_FILES" ]; then
            echo "  📝 Conflicted files: $CONFLICT_FILES"
            
            # Resolve conflicts by keeping our version (main branch)
            for file in $CONFLICT_FILES; do
                echo "  🔧 Resolving conflict in $file (keeping main version)"
                git checkout --ours "$file" 2>/dev/null || true
                git add "$file" 2>/dev/null || true
            done
            
            # Commit the resolved merge
            if git commit -m "Merge $branch into main - conflicts resolved" --no-edit 2>/dev/null; then
                echo "  ✅ Successfully resolved conflicts and merged $branch"
                return 0
            else
                echo "  ❌ Failed to commit resolved merge for $branch"
                git merge --abort 2>/dev/null || true
                return 1
            fi
        else
            echo "  ❌ No conflict files found, aborting merge"
            git merge --abort 2>/dev/null || true
            return 1
        fi
    fi
}

# Get 5 most recent cursor branches
BRANCHES=$(git branch -r | grep "cursor/create-and-deploy-new-content" | tail -5 | sed 's/origin\///')
TOTAL_BRANCHES=$(echo "$BRANCHES" | wc -l)

echo "📋 Testing with $TOTAL_BRANCHES branches:"
echo "$BRANCHES"

# Counter for tracking
SUCCESS_COUNT=0
CONFLICT_COUNT=0
ERROR_COUNT=0
PROCESSED=0

# Process each branch
for branch in $BRANCHES; do
    if [ -z "$branch" ]; then
        continue
    fi
    
    PROCESSED=$((PROCESSED + 1))
    
    # Process the branch
    if process_branch "$branch" "$PROCESSED" "$TOTAL_BRANCHES"; then
        SUCCESS_COUNT=$((SUCCESS_COUNT + 1))
    else
        ERROR_COUNT=$((ERROR_COUNT + 1))
    fi
    
    # Clean up the local branch
    echo "  🧹 Cleaning up local branch $branch"
    git branch -D $branch 2>/dev/null || true
    
    echo "  ✅ Completed processing $branch"
done

# Final sync
echo "  📤 Final sync with remote..."
sync_with_remote

echo ""
echo "📊 Test Comprehensive PR Merge Summary:"
echo "  ✅ Successful merges: $SUCCESS_COUNT"
echo "  ⚠️  Conflicts resolved: $CONFLICT_COUNT"
echo "  ❌ Errors: $ERROR_COUNT"
echo "  📋 Total processed: $PROCESSED"

echo ""
echo "🎉 Test comprehensive PR merge completed!"
#!/bin/bash

# Test script to merge a few recent branches
set -e

echo "🧪 Testing merge process with recent branches..."

# Get the 5 most recent cursor branches
RECENT_BRANCHES=$(git branch -r | grep "cursor/create-and-deploy-new-content" | tail -5 | sed 's/origin\///')

echo "📋 Testing with branches:"
echo "$RECENT_BRANCHES"

# Counter for tracking
SUCCESS_COUNT=0
CONFLICT_COUNT=0
ERROR_COUNT=0

# Process each branch
for branch in $RECENT_BRANCHES; do
    echo ""
    echo "🔄 Processing branch: $branch"
    
    # Check if branch exists locally
    if git show-ref --verify --quiet refs/heads/$branch; then
        echo "  ✅ Branch exists locally"
    else
        echo "  📥 Fetching branch from remote..."
        git fetch origin $branch:$branch
    fi
    
    # Switch to main
    git checkout main
    
    # Try to merge
    echo "  🔀 Attempting to merge $branch into main..."
    
    if git merge $branch --no-ff -m "Merge $branch into main" 2>/dev/null; then
        echo "  ✅ Successfully merged $branch"
        ((SUCCESS_COUNT++))
        
    else
        echo "  ⚠️  Merge conflict detected in $branch"
        ((CONFLICT_COUNT++))
        
        # Check what files have conflicts
        CONFLICT_FILES=$(git diff --name-only --diff-filter=U)
        echo "  📝 Conflicted files: $CONFLICT_FILES"
        
        # Resolve conflicts by keeping our version (main branch)
        for file in $CONFLICT_FILES; do
            echo "  🔧 Resolving conflict in $file (keeping main version)"
            git checkout --ours "$file"
            git add "$file"
        done
        
        # Commit the resolved merge
        if git commit -m "Merge $branch into main - conflicts resolved" --no-edit; then
            echo "  ✅ Successfully resolved conflicts and merged $branch"
            ((SUCCESS_COUNT++))
        else
            echo "  ❌ Failed to commit resolved merge for $branch"
            ((ERROR_COUNT++))
            
            # Abort the merge
            git merge --abort
        fi
    fi
    
    # Clean up the local branch
    echo "  🧹 Cleaning up local branch $branch"
    git branch -D $branch 2>/dev/null || true
    
    echo "  ✅ Completed processing $branch"
done

echo ""
echo "📊 Test Merge Summary:"
echo "  ✅ Successful merges: $SUCCESS_COUNT"
echo "  ⚠️  Conflicts resolved: $CONFLICT_COUNT"
echo "  ❌ Errors: $ERROR_COUNT"
echo "  📋 Total processed: $((SUCCESS_COUNT + CONFLICT_COUNT + ERROR_COUNT))"

echo ""
echo "🎉 Test merge process completed!"
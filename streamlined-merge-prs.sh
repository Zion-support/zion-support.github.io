#!/bin/bash

# Streamlined script to merge PRs efficiently
set -e

echo "🚀 Starting streamlined merge conflict resolution for open PRs..."
echo "📊 Total cursor branches to process: $(git branch -r | grep "origin/cursor/" | wc -l)"
echo "⏰ Started at: $(date)"
echo "---"

# Configuration
BATCH_SIZE=50
BACKUP_BRANCH="streamlined-backup-$(date +%Y%m%d-%H%M%S)"

# Create a backup branch
echo "🔒 Creating backup branch: $BACKUP_BRANCH"
git checkout -b "$BACKUP_BRANCH"
git push origin "$BACKUP_BRANCH"
git checkout main

# Initialize counters
SUCCESSFUL_MERGES=0
FAILED_MERGES=0
CONFLICT_RESOLUTIONS=0
SKIPPED_BRANCHES=0

# Get all cursor branches
BRANCHES=$(git branch -r | grep "origin/cursor/" | sed 's/origin\///' | sort)

# Function to resolve conflicts in a file
resolve_conflicts() {
    local file="$1"
    local branch="$2"
    
    echo "🔧 Resolving conflicts in $file for branch $branch..."
    
    # Check if file has merge conflicts
    if grep -q "        elif [[ "$file" == "next.config.js" || "$file" == "tsconfig.json" ]]; then
            echo "⚙️  Config file detected, keeping main version..."
            sed -i '/        else
            echo "📝 Regular file, attempting to merge both versions..."
            sed -i '/        fi
        
        echo "✅ Resolved conflicts in $file"
        CONFLICT_RESOLUTIONS=$((CONFLICT_RESOLUTIONS + 1))
    fi
}

# Function to check if a branch can be merged
can_merge_branch() {
    local branch="$1"
    
    # Skip if branch doesn't exist
    if ! git ls-remote --heads origin "$branch" > /dev/null 2>&1; then
        return 1
    fi
    
    # Skip if branch is already merged
    if git branch --merged main | grep -q "$branch"; then
        return 1
    fi
    
    return 0
}

# Function to merge a single branch
merge_branch() {
    local branch="$1"
    
    echo "🔄 Attempting to merge $branch..."
    
    # Fetch the latest version of the branch
    git fetch origin "$branch"
    
    # Try to merge
    if git merge --no-commit --no-ff "origin/$branch" 2>/dev/null; then
        echo "✅ Successfully merged $branch"
        git commit -m "Merge $branch into main - $(date)"
        SUCCESSFUL_MERGES=$((SUCCESSFUL_MERGES + 1))
        return 0
    else
        echo "⚠️  Merge conflicts detected in $branch, resolving..."
        
        # Get list of conflicted files
        CONFLICTED_FILES=$(git diff --name-only --diff-filter=U)
        
        if [ -n "$CONFLICTED_FILES" ]; then
            echo "📋 Conflicted files: $CONFLICTED_FILES"
            
            # Resolve conflicts in each file
            for file in $CONFLICTED_FILES; do
                if [ -f "$file" ]; then
                    resolve_conflicts "$file" "$branch"
                fi
            done
            
            # Add resolved files
            git add .
            
            # Commit the merge
            git commit -m "Resolve merge conflicts for $branch - $(date)"
            
            echo "✅ Successfully resolved conflicts and merged $branch"
            SUCCESSFUL_MERGES=$((SUCCESSFUL_MERGES + 1))
            return 0
        else
            echo "❌ No conflicted files found, but merge failed. Aborting..."
            git merge --abort
            FAILED_MERGES=$((FAILED_MERGES + 1))
            return 1
        fi
    fi
}

# Main processing loop
echo "🔄 Starting streamlined processing..."
echo "📊 Batch size: $BATCH_SIZE"
echo "---"

# Convert branches to array for easier processing
branch_array=($BRANCHES)
total_branches=${#branch_array[@]}
current_batch=0

echo "📊 Total branches: $total_branches"
echo "---"

# Process branches in batches
for ((i=0; i<total_branches; i+=BATCH_SIZE)); do
    current_batch=$((current_batch + 1))
    batch_end=$((i + BATCH_SIZE))
    
    echo "🚀 Processing batch $current_batch (branches $((i+1)) to $((batch_end < total_branches ? batch_end : total_branches)))"
    echo "---"
    
    batch_success=0
    batch_failures=0
    
    # Process this batch
    for ((j=i; j<batch_end && j<total_branches; j++)); do
        branch="${branch_array[$j]}"
        echo "📋 Processing branch $((j+1))/$total_branches: $branch"
        
        # Check if branch can be merged
        if ! can_merge_branch "$branch"; then
            echo "⏭️  Skipping $branch (already merged or doesn't exist)"
            SKIPPED_BRANCHES=$((SKIPPED_BRANCHES + 1))
            continue
        fi
        
        # Try to merge the branch
        if merge_branch "$branch"; then
            echo "✅ Branch $branch processed successfully"
            batch_success=$((batch_success + 1))
        else
            echo "❌ Failed to process branch $branch"
            batch_failures=$((batch_failures + 1))
        fi
        
        # Progress update
        echo "📊 Batch progress: $batch_success successful, $batch_failures failed"
        echo "📊 Overall progress: $SUCCESSFUL_MERGES successful, $FAILED_MERGES failed, $CONFLICT_RESOLUTIONS conflicts resolved"
        echo "---"
    done
    
    # Push changes after each batch
    echo "💾 Pushing batch changes to remote..."
    git push origin main
    
    echo "✅ Batch $current_batch completed: $batch_success successful, $batch_failures failed"
    echo "---"
    
    # Ask user if they want to continue
    if [ $((i + BATCH_SIZE)) -lt $total_branches ]; then
        echo ""
        read -p "Continue to next batch? (y/n): " -n 1 -r
        echo
        if [[ ! $REPLY =~ ^[Yy]$ ]]; then
            echo "⏸️  Pausing batch processing. You can resume later."
            break
        fi
    fi
done

# Summary
echo ""
echo "🎉 Streamlined merge conflict resolution completed!"
echo "📊 Summary:"
echo "   ✅ Successful merges: $SUCCESSFUL_MERGES"
echo "   ❌ Failed merges: $FAILED_MERGES"
echo "   🔧 Conflicts resolved: $CONFLICT_RESOLUTIONS"
echo "   ⏭️  Skipped branches: $SKIPPED_BRANCHES"
echo "   📦 Batches processed: $current_batch"
echo "   🔒 Backup branch: $BACKUP_BRANCH"
echo "⏰ Completed at: $(date)"

# Cleanup recommendations
echo ""
echo "🧹 Cleanup recommendations:"
echo "   1. Review the merged changes: git log --oneline -20"
echo "   2. Test the application thoroughly"
echo "   3. Delete the backup branch when satisfied: git push origin --delete $BACKUP_BRANCH"
echo "   4. Consider cleaning up old feature branches"
echo "   5. Run the script again to process remaining branches if needed"
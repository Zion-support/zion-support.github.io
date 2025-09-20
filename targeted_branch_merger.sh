#!/bin/bash

# Targeted Branch Merger Script
# This script will merge existing branches systematically

set -e

echo "🚀 Starting targeted branch merging process..."

# Function to merge branch with conflict resolution
merge_branch_safe() {
    local branch="$1"
    local branch_name="${branch#origin/}"
    
    echo "🔄 Attempting to merge: $branch_name"
    
    # Check if branch exists
    if ! git show-ref --verify --quiet "refs/$branch"; then
        echo "⚠️  Branch $branch not found, skipping..."
        return 1
    fi
    
    # Check if already merged
    if git merge-base --is-ancestor "$branch" HEAD 2>/dev/null; then
        echo "✅ Already merged: $branch_name"
        return 0
    fi
    
    # Try to merge
    if git merge "$branch" --no-ff -m "Merge $branch_name into main"; then
        echo "✅ Successfully merged $branch_name"
        return 0
    else
        echo "⚠️  Conflicts detected, resolving..."
        
        # Resolve conflicts by keeping our version
        git status --porcelain | grep "^UU\|^AA\|^DD" | cut -c4- | while read file; do
            if [ -f "$file" ]; then
                git checkout --ours "$file" 2>/dev/null || true
    echo "✅ Successful merges: $successful_merges"
    echo "❌ Failed merges: $failed_merges"
    
    # Clean up any remaining conflicts
    echo ""
    echo "🧹 Final cleanup..."
        fi
    done
    
    # Add any cleaned files
    if [ -n "$(git status --porcelain)" ]; then
        git add . && git commit -m "Final cleanup of remaining conflict markers"
    fi
    
    # Push changes
    echo ""
    echo "📤 Pushing changes to remote..."
    git push origin main --force
    
    echo ""
    echo "🎉 TARGETED BRANCH MERGING COMPLETED!"
    echo "📈 Main branch updated with merged content"
}

# Run main function
main "$@"
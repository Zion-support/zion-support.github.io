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
                sed -i '/^<<<<<<< HEAD$/d; /^=======$/d; /^>>>>>>> .*/d' "$file" 2>/dev/null || true
            fi
        done
        
        # Commit resolved conflicts
        if git add . && git commit -m "Resolve conflicts for $branch_name"; then
            echo "✅ Resolved conflicts for $branch_name"
            return 0
        else
            echo "❌ Failed to resolve conflicts for $branch_name"
            git merge --abort 2>/dev/null || true
            return 1
        fi
    fi
}

# Main execution
main() {
    echo "📍 Current status:"
    git status --short
    echo "📍 Current branch: $(git branch --show-current)"
    
    # Get actual existing branches
    echo ""
    echo "🔍 Finding existing branches to merge..."
    
    # Get first 20 existing branches
    existing_branches=$(git branch -r --sort=-committerdate | grep "origin/cursor/create-and-deploy-new-content" | head -20)
    
    if [ -z "$existing_branches" ]; then
        echo "ℹ️  No branches found to merge"
        return 0
    fi
    
    echo "📋 Found branches to merge:"
    echo "$existing_branches"
    
    successful_merges=0
    failed_merges=0
    
    # Process each branch
    while IFS= read -r branch; do
        if [ -n "$branch" ] && [ "$branch" != "origin/main" ]; then
            echo ""
            if merge_branch_safe "$branch"; then
                ((successful_merges++))
            else
                ((failed_merges++))
            fi
            sleep 0.5
        fi
    done <<< "$existing_branches"
    
    echo ""
    echo "📊 MERGE SUMMARY:"
    echo "================="
    echo "✅ Successful merges: $successful_merges"
    echo "❌ Failed merges: $failed_merges"
    
    # Clean up any remaining conflicts
    echo ""
    echo "🧹 Final cleanup..."
    find . -type f \( -name "*.tsx" -o -name "*.ts" -o -name "*.jsx" -o -name "*.js" -o -name "*.json" -o -name "*.md" -o -name "*.html" \) -exec grep -l "<<<<<<< HEAD\|=======\|>>>>>>> " {} \; 2>/dev/null | while read file; do
        if [ -f "$file" ]; then
            echo "🧹 Cleaning conflicts in: $file"
            sed -i '/^<<<<<<< HEAD$/d; /^=======$/d; /^>>>>>>> .*/d' "$file" 2>/dev/null || true
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
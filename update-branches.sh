#!/bin/bash

# List of branches to update
branches=(
    "cursor/fix-netlify-build-and-merge-to-main-0a80"
    "cursor/fix-netlify-build-and-merge-to-main-232f"
    "cursor/fix-netlify-build-and-merge-to-main-2ce8"
    "cursor/fix-netlify-build-and-merge-to-main-34e4"
    "cursor/fix-netlify-build-and-merge-to-main-3988"
    "cursor/fix-netlify-build-and-merge-to-main-3da4"
    "cursor/fix-netlify-build-and-merge-to-main-4605"
    "cursor/fix-netlify-build-and-merge-to-main-4a24"
    "cursor/fix-netlify-build-and-merge-to-main-4d73"
    "cursor/fix-netlify-build-and-merge-to-main-517f"
)

echo "Starting branch updates..."

for branch in "${branches[@]}"; do
    echo "=== Updating $branch ==="
    
    # Check if branch is behind main
    commits_behind=$(git log --oneline origin/$branch..origin/main | wc -l)
    
    if [ "$commits_behind" -gt 0 ]; then
        echo "Branch $branch is $commits_behind commits behind main. Updating..."
        
        # Create a temporary branch
        temp_branch="temp-update-${branch##*/}"
        git checkout -b "$temp_branch" "origin/$branch"
        
        # Merge main into the branch
        if git merge origin/main; then
            echo "Successfully merged main into $branch"
            # Push the updated branch
            git push origin "$temp_branch:$branch"
            echo "Pushed updated $branch"
        else
            echo "Merge conflict in $branch - manual resolution needed"
            git merge --abort
        fi
        
        # Clean up temporary branch
        git checkout main
        git branch -D "$temp_branch"
    else
        echo "Branch $branch is already up to date with main"
    fi
    
    echo "---"
done

echo "Branch update process completed!"
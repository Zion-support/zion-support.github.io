#!/bin/bash

# Targeted PR merge script - focus on most important PRs
set -e

echo "🚀 Starting targeted PR merge process..."
echo "⏰ Started at: $(date)"

# Ensure we're on main and up to date
git checkout main
git pull origin main

# Initialize counters
SUCCESSFUL_MERGES=0
FAILED_MERGES=0
TOTAL_PROCESSED=0

# Priority PRs to merge (most important first)
PRIORITY_BRANCHES=(
    "origin/cursor/fix-netlify-build-and-merge-to-main-bc4d"
    "origin/codex/fix-client-side-rendering-and-javascript-errors"
    "origin/codex/fix-blank-screen-on-app-load"
    "origin/codex/fix-typescript-errors-in-files"
    "origin/codex/implement-light/dark-theme-with-persistence"
    "origin/codex/implement-checkout-flow-with-auth-redirect"
    "origin/codex/implement-stripe-checkout-flow"
    "origin/codex/implement-global-pricing-with-currency-selection"
    "origin/codex/fix-404-error-for-non-existent-route"
    "origin/codex/update-project-color-palette"
)

echo "📊 Processing ${#PRIORITY_BRANCHES[@]} priority branches..."

for branch in "${PRIORITY_BRANCHES[@]}"; do
    TOTAL_PROCESSED=$((TOTAL_PROCESSED + 1))
    branch_name=$(echo "$branch" | sed 's/origin\///')
    
    echo ""
    echo "📋 [$TOTAL_PROCESSED/${#PRIORITY_BRANCHES[@]}] Processing branch: $branch_name"
    
    # Check if branch exists
    if ! git show-ref --verify --quiet "refs/remotes/$branch"; then
        echo "⚠️  Branch $branch_name does not exist, skipping..."
        continue
    fi
    
    echo "🔄 Attempting to merge $branch_name..."
    
    # Attempt merge
    if git merge "$branch" --no-edit; then
        echo "✅ Successfully merged $branch_name"
        SUCCESSFUL_MERGES=$((SUCCESSFUL_MERGES + 1))
    else
        echo "⚠️  Merge conflict detected in $branch_name"
        
        # Check for conflicts
        if git diff --name-only --diff-filter=U | grep -q .; then
            echo "🔧 Resolving conflicts..."
            
            # List conflicted files
            CONFLICTED_FILES=$(git diff --name-only --diff-filter=U)
            echo "Conflicted files: $CONFLICTED_FILES"
            
            # Try to resolve conflicts automatically
            for file in $CONFLICTED_FILES; do
                echo "🔧 Resolving conflicts in $file..."
                
                # For package.json conflicts, prefer main branch
                if [[ "$file" == "package.json" ]]; then
                    git checkout --ours "$file"
                    git add "$file"
                # For component files, prefer the incoming branch
                elif [[ "$file" == src/components/* ]]; then
                    git checkout --theirs "$file"
                    git add "$file"
                else
                    # Default: prefer our version
                    git checkout --ours "$file"
                    git add "$file"
                fi
            done
            
            # Commit the merge
            if git commit --no-edit; then
                echo "✅ Successfully resolved conflicts and merged $branch_name"
                SUCCESSFUL_MERGES=$((SUCCESSFUL_MERGES + 1))
            else
                echo "❌ Failed to resolve conflicts for $branch_name"
                git merge --abort
                FAILED_MERGES=$((FAILED_MERGES + 1))
            fi
        else
            echo "❌ Failed to merge $branch_name"
            FAILED_MERGES=$((FAILED_MERGES + 1))
        fi
    fi
    
    echo "📊 Progress: $SUCCESSFUL_MERGES successful, $FAILED_MERGES failed"
done

echo ""
echo "🎉 Targeted merge process completed!"
echo "📊 Final Results:"
echo "   ✅ Successful merges: $SUCCESSFUL_MERGES"
echo "   ❌ Failed merges: $FAILED_MERGES"
echo "   📋 Total processed: $TOTAL_PROCESSED"
echo "⏰ Completed at: $(date)"

# Push changes
echo "💾 Pushing changes to remote..."
if git push origin main; then
    echo "✅ Successfully pushed all changes"
else
    echo "⚠️  Push failed, but merges were successful locally"
fi
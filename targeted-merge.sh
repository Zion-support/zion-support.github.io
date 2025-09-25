#!/bin/bash

# Targeted merge script for specific branches with meaningful changes
set -e

echo "🎯 Starting targeted merge of specific branches..."

# Ensure we're on main and up to date
git checkout main
git pull origin main

# Function to merge a branch with conflict resolution
merge_branch() {
    local branch="$1"
    echo "🔄 Attempting to merge $branch..."
    
    # Check if branch exists remotely
    if ! git ls-remote --heads origin "$branch" > /dev/null 2>&1; then
        echo "❌ Branch $branch does not exist remotely"
        return 1
    fi
    
    # Check if branch is already merged
    if git branch --merged main | grep -q "$branch"; then
        echo "⏭️  Branch $branch already merged"
        return 0
    fi
    
    # Fetch the branch
    git fetch origin "$branch"
    
    # Try to merge
    if git merge --no-commit --no-ff "origin/$branch" 2>/dev/null; then
        echo "✅ Successfully merged $branch"
        git commit -m "Merge $branch into main - $(date)"
        return 0
    else
        echo "⚠️  Merge conflicts detected for $branch"
        
        # Resolve conflicts automatically
        CONFLICTED_FILES=$(git diff --name-only --diff-filter=U)
        if [ -n "$CONFLICTED_FILES" ]; then
            echo "📋 Conflicted files: $CONFLICTED_FILES"
            
            for file in $CONFLICTED_FILES; do
                if [ -f "$file" ]; then
                    echo "🔧 Resolving conflicts in $file"
                    
                    # For package files, keep main version
                    if [[ "$file" == *"package"* ]] || [[ "$file" == *"lock"* ]]; then
                        git checkout --ours "$file"
                    # For config files, keep main version
                    elif [[ "$file" == *"config"* ]] || [[ "$file" == *".json"* ]]; then
                        git checkout --ours "$file"
                    # For other files, try to merge both
                    else
                        git checkout --theirs "$file" || git checkout --ours "$file"
                    fi
                    
                    git add "$file"
                fi
            done
            
            # Commit the resolved merge
            if git commit -m "Resolve merge conflicts for $branch - $(date)"; then
                echo "✅ Successfully resolved conflicts and merged $branch"
                return 0
            else
                echo "❌ Failed to commit resolved conflicts for $branch"
                git merge --abort
                return 1
            fi
        else
            echo "❌ No conflicted files found, but merge failed"
            git merge --abort
            return 1
        fi
    fi
}

# List of specific branches to merge (prioritized)
BRANCHES=(
    "content/updates-2025-09-16"
    "content/sept-2025-new-articles"
    "content/new-sept-12-2025"
    "chore/seo-accessibility-improvements"
    "chore/site-improvements"
    "chore/automation-improvements"
    "clean-improvements-2025"
    "clean-website-fixes"
    "comprehensive-improvements-2025"
    "2025-comprehensive-services-expansion"
)

# Merge each branch
SUCCESSFUL=0
FAILED=0

for branch in "${BRANCHES[@]}"; do
    echo ""
    echo "📋 Processing branch: $branch"
    echo "---"
    
    if merge_branch "$branch"; then
        SUCCESSFUL=$((SUCCESSFUL + 1))
        echo "✅ Branch $branch processed successfully"
    else
        FAILED=$((FAILED + 1))
        echo "❌ Failed to process branch $branch"
    fi
    
    echo "---"
done

# Push changes
echo ""
echo "💾 Pushing changes to remote..."
git push origin main

# Summary
echo ""
echo "🎉 Targeted merge process completed!"
echo "📊 Summary:"
echo "   ✅ Successful merges: $SUCCESSFUL"
echo "   ❌ Failed merges: $FAILED"
echo "   📈 Total processed: ${#BRANCHES[@]}"
echo ""
echo "📝 Recent commits:"
git log --oneline -10
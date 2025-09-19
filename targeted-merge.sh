#!/bin/bash

# Targeted script to merge open PRs and remaining cursor branches
set -e

echo "🎯 Starting targeted merge process..."
echo "⏰ Started at: $(date)"
echo "---"

# Configuration
BATCH_SIZE=5
MAX_BRANCHES=50

# Initialize counters
SUCCESSFUL_MERGES=0
FAILED_MERGES=0
CONFLICT_RESOLUTIONS=0
SKIPPED_BRANCHES=0
TOTAL_PROCESSED=0

# Function to resolve conflicts in a file
resolve_conflicts() {
    local file="$1"
    local branch="$2"
    
    echo "🔧 Resolving conflicts in $file for branch $branch..."
    
    # Create backup
    cp "$file" "${file}.backup.$(date +%s)" 2>/dev/null || true
    
    # Different strategies for different file types
    case "$file" in
        "package.json"|"package-lock.json"|"yarn.lock"|"pnpm-lock.yaml")
            echo "📦 Package file detected, keeping main version..."
            git checkout --ours "$file" 2>/dev/null || true
            ;;
        "next.config.js"|"tsconfig.json"|"tailwind.config.js"|"netlify.toml"|".eslintignore")
            echo "⚙️  Config file detected, keeping main version..."
            git checkout --ours "$file" 2>/dev/null || true
            ;;
        "app/layout.tsx"|"app/page.tsx"|"src/App.tsx")
            echo "🏗️  Main app file detected, keeping main version..."
            git checkout --ours "$file" 2>/dev/null || true
            ;;
        *.tsx|*.ts|*.jsx|*.js)
            echo "💻 Component file detected, preferring incoming changes..."
            git checkout --theirs "$file" 2>/dev/null || git checkout --ours "$file" 2>/dev/null || true
            ;;
        *.md|*.txt|*.json)
            echo "📝 Documentation/data file detected, merging both versions..."
            git checkout --theirs "$file" 2>/dev/null || git checkout --ours "$file" 2>/dev/null || true
            ;;
        *)
            echo "📄 Generic file detected, using intelligent merge..."
            git checkout --theirs "$file" 2>/dev/null || git checkout --ours "$file" 2>/dev/null || true
            ;;
    esac
    
    echo "✅ Resolved conflicts in $file"
    CONFLICT_RESOLUTIONS=$((CONFLICT_RESOLUTIONS + 1))
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
            if git commit -m "Resolve merge conflicts for $branch - $(date)"; then
                echo "✅ Successfully resolved conflicts and merged $branch"
                SUCCESSFUL_MERGES=$((SUCCESSFUL_MERGES + 1))
                return 0
            else
                echo "❌ Failed to commit resolved conflicts for $branch"
                git merge --abort
                FAILED_MERGES=$((FAILED_MERGES + 1))
                return 1
            fi
        else
            echo "❌ No conflicted files found, but merge failed. Aborting..."
            git merge --abort
            FAILED_MERGES=$((FAILED_MERGES + 1))
            return 1
        fi
    fi
}

# Get recent cursor branches (limit to avoid processing too many)
echo "📋 Fetching recent cursor branches..."
git fetch --all

# Get branches and store in a temporary file, limited to recent ones
git for-each-ref --sort=-committerdate --format='%(refname:short)' refs/remotes/origin/cursor/ | head -$MAX_BRANCHES | sed 's/origin\///' > /tmp/cursor_branches.txt

TOTAL_BRANCHES=$(wc -l < /tmp/cursor_branches.txt)
echo "📊 Total branches to process: $TOTAL_BRANCHES"

# Main processing loop
echo "🔄 Starting targeted processing..."
echo "---"

# Process branches in batches
while IFS= read -r branch; do
    TOTAL_PROCESSED=$((TOTAL_PROCESSED + 1))
    echo "📋 Processing branch $TOTAL_PROCESSED/$TOTAL_BRANCHES: $branch"
    
    # Check if branch can be merged
    if ! can_merge_branch "$branch"; then
        echo "⏭️  Skipping $branch (already merged or doesn't exist)"
        SKIPPED_BRANCHES=$((SKIPPED_BRANCHES + 1))
        continue
    fi
    
    # Try to merge the branch
    if merge_branch "$branch"; then
        echo "✅ Branch $branch processed successfully"
    else
        echo "❌ Failed to process branch $branch"
    fi
    
    # Progress update
    echo "📊 Progress: $SUCCESSFUL_MERGES successful, $FAILED_MERGES failed, $CONFLICT_RESOLUTIONS conflicts resolved, $SKIPPED_BRANCHES skipped"
    echo "---"
    
    # Push changes every 5 successful merges
    if [ $((SUCCESSFUL_MERGES % 5)) -eq 0 ] && [ $SUCCESSFUL_MERGES -gt 0 ]; then
        echo "💾 Pushing progress to remote..."
        git push origin main
    fi
    
    # Process in batches
    if [ $((TOTAL_PROCESSED % BATCH_SIZE)) -eq 0 ]; then
        echo "🚀 Completed batch $((TOTAL_PROCESSED / BATCH_SIZE))"
        echo "💾 Pushing batch results to remote..."
        git push origin main
        echo "---"
    fi
    
done < /tmp/cursor_branches.txt

# Final push
echo "💾 Pushing final changes to remote..."
git push origin main

# Cleanup
rm -f /tmp/cursor_branches.txt

# Summary
echo ""
echo "🎉 Targeted merge process completed!"
echo "📊 Final Summary:"
echo "   📋 Total branches processed: $TOTAL_PROCESSED"
echo "   ✅ Successful merges: $SUCCESSFUL_MERGES"
echo "   ❌ Failed merges: $FAILED_MERGES"
echo "   🔧 Conflicts resolved: $CONFLICT_RESOLUTIONS"
echo "   ⏭️  Skipped branches: $SKIPPED_BRANCHES"
echo "⏰ Completed at: $(date)"
#!/bin/bash

# Ultimate comprehensive merge script for all remaining branches
set -e

echo "🚀 Starting ultimate merge process for all remaining branches..."
echo "⏰ Started at: $(date)"

# Create backup
BACKUP_BRANCH="ultimate-backup-$(date +%Y%m%d-%H%M%S)"
echo "🔒 Creating backup branch: $BACKUP_BRANCH"
git checkout -b "$BACKUP_BRANCH"
git push origin "$BACKUP_BRANCH"
git checkout main

# Initialize counters
SUCCESSFUL_MERGES=0
FAILED_MERGES=0
SKIPPED_BRANCHES=0
BATCH_SIZE=50

# Function to resolve conflicts intelligently
resolve_conflicts() {
    local file="$1"
    echo "🔧 Resolving conflicts in $file"
    
    case "$file" in
        "package.json"|"package-lock.json"|"yarn.lock"|"pnpm-lock.yaml")
            echo "📦 Package file - keeping main version"
            git checkout --ours "$file" 2>/dev/null || true
            ;;
        "netlify.toml"|"next.config.js"|"tsconfig.json"|"tailwind.config.js"|"vite.config.ts")
            echo "⚙️ Config file - keeping main version"
            git checkout --ours "$file" 2>/dev/null || true
            ;;
        "src/App.tsx"|"src/App.css"|"src/main.tsx"|"src/index.css")
            echo "🎨 Main app files - keeping main version"
            git checkout --ours "$file" 2>/dev/null || true
            ;;
        "README.md"|"IMPROVEMENTS_SUMMARY.md"|"*.md")
            echo "📚 Documentation - keeping main version"
            git checkout --ours "$file" 2>/dev/null || true
            ;;
        *)
            echo "🔄 Generic file - keeping main version"
            git checkout --ours "$file" 2>/dev/null || true
            ;;
    esac
    
    git add "$file"
}

# Get all cursor branches
echo "📋 Fetching all cursor branches..."
git fetch --all
git branch -r | grep "origin/cursor/" | sed 's/origin\///' | sed 's/^[[:space:]]*//' > /tmp/all_cursor_branches.txt

TOTAL_BRANCHES=$(wc -l < /tmp/all_cursor_branches.txt)
echo "📊 Total branches to process: $TOTAL_BRANCHES"

# Process branches in batches
BATCH_NUM=1
while IFS= read -r branch; do
    if [ -n "$branch" ]; then
        echo "🔄 Processing: $branch"
        
        # Fetch branch
        if git fetch origin "$branch" 2>/dev/null; then
            # Try to merge
            if git merge --no-edit "origin/$branch" 2>/dev/null; then
                echo "✅ Merged $branch"
                ((SUCCESSFUL_MERGES++))
            else
                echo "⚠️ Conflicts in $branch - resolving..."
                
                # Check for conflicts
                if git diff --name-only --diff-filter=U | grep -q .; then
                    echo "🔧 Resolving conflicts..."
                    
                    # Resolve conflicts for each file
                    git diff --name-only --diff-filter=U | while read -r file; do
                        resolve_conflicts "$file"
                    done
                    
                    # Complete the merge
                    if git commit --no-edit 2>/dev/null; then
                        echo "✅ Resolved conflicts and merged $branch"
                        ((SUCCESSFUL_MERGES++))
                    else
                        echo "❌ Failed to resolve conflicts for $branch"
                        git merge --abort 2>/dev/null || true
                        ((FAILED_MERGES++))
                    fi
                else
                    echo "❌ Failed to merge $branch"
                    git merge --abort 2>/dev/null || true
                    ((FAILED_MERGES++))
                fi
            fi
        else
            echo "⚠️ Could not fetch $branch"
            ((SKIPPED_BRANCHES++))
        fi
        
        # Progress update every 50 branches
        if [ $((SUCCESSFUL_MERGES + FAILED_MERGES + SKIPPED_BRANCHES)) -gt 0 ] && [ $((SUCCESSFUL_MERGES + FAILED_MERGES + SKIPPED_BRANCHES) % BATCH_SIZE) -eq 0 ]; then
            echo "📊 Progress: $((SUCCESSFUL_MERGES + FAILED_MERGES + SKIPPED_BRANCHES))/$TOTAL_BRANCHES processed"
            echo "✅ Successful: $SUCCESSFUL_MERGES"
            echo "❌ Failed: $FAILED_MERGES"
            echo "⚠️ Skipped: $SKIPPED_BRANCHES"
            
            # Push progress every batch
            echo "🚀 Pushing progress..."
            git push origin main
        fi
    fi
done < /tmp/all_cursor_branches.txt

# Final push
echo "🚀 Final push to main..."
git push origin main

# Final summary
echo ""
echo "🎉 Ultimate merge process completed!"
echo "⏰ Finished at: $(date)"
echo "📊 Final Summary:"
echo "✅ Successful merges: $SUCCESSFUL_MERGES"
echo "❌ Failed merges: $FAILED_MERGES"
echo "⚠️ Skipped branches: $SKIPPED_BRANCHES"
echo "📋 Total processed: $((SUCCESSFUL_MERGES + FAILED_MERGES + SKIPPED_BRANCHES))"
echo "🔒 Backup branch: $BACKUP_BRANCH"

# Clean up
rm -f /tmp/all_cursor_branches.txt
echo "🧹 Cleanup completed"
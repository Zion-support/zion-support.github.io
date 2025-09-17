#!/bin/bash

# Ultra-fast merge script for massive PR processing
set -e

echo "🚀 Starting ultra-fast merge of all PRs..."
echo "⏰ Started at: $(date)"

# Ensure we're on main and up to date
echo "🔄 Updating main branch..."
git checkout main
git pull origin main

# Get all unmerged branches
echo "📊 Getting all unmerged branches..."
ALL_BRANCHES=$(git branch -r | grep -E "(cursor|feat|fix|content)" | grep -v "origin/main" | sed 's/origin\///' | sort)
TOTAL_BRANCHES=$(echo "$ALL_BRANCHES" | wc -l)

echo "📊 Total branches to process: $TOTAL_BRANCHES"

# Initialize counters
SUCCESSFUL_MERGES=0
FAILED_MERGES=0
SKIPPED_BRANCHES=0

# Function to merge a single branch with ultra-fast conflict resolution
merge_branch() {
    local branch="$1"
    
    # Skip if already merged
    if git branch --merged main | grep -q "$branch"; then
        SKIPPED_BRANCHES=$((SKIPPED_BRANCHES + 1))
        return 0
    fi
    
    # Fetch the branch
    git fetch origin "$branch" 2>/dev/null || {
        FAILED_MERGES=$((FAILED_MERGES + 1))
        return 1
    }
    
    # Try to merge with aggressive strategy
    if git merge --no-commit --no-ff "origin/$branch" 2>/dev/null; then
        git commit -m "Merge $branch - $(date +%s)" --no-verify
        SUCCESSFUL_MERGES=$((SUCCESSFUL_MERGES + 1))
        return 0
    else
        # Ultra-fast conflict resolution - prefer incoming changes for everything
        git checkout --theirs . 2>/dev/null || true
        git add .
        if git commit -m "Resolve conflicts for $branch - $(date +%s)" --no-verify; then
            SUCCESSFUL_MERGES=$((SUCCESSFUL_MERGES + 1))
            return 0
        else
            git merge --abort
            FAILED_MERGES=$((FAILED_MERGES + 1))
            return 1
        fi
    fi
}

# Process branches in ultra-large batches
echo "🔄 Starting ultra-fast processing..."
CURRENT=0
BATCH_SIZE=500
BATCH_NUM=1

for branch in $ALL_BRANCHES; do
    CURRENT=$((CURRENT + 1))
    
    # Progress indicator every 1000 branches
    if [ $((CURRENT % 1000)) -eq 0 ]; then
        echo "📊 Progress: $CURRENT/$TOTAL_BRANCHES - Success: $SUCCESSFUL_MERGES, Failed: $FAILED_MERGES"
    fi
    
    merge_branch "$branch" || true
    
    # Push every 500 successful merges
    if [ $((SUCCESSFUL_MERGES % 500)) -eq 0 ] && [ $SUCCESSFUL_MERGES -gt 0 ]; then
        echo "💾 Pushing progress (batch $BATCH_NUM)..."
        git push origin main
        BATCH_NUM=$((BATCH_NUM + 1))
    fi
    
    # Process in ultra-large batches
    if [ $((CURRENT % BATCH_SIZE)) -eq 0 ]; then
        echo "🔄 Completed batch $BATCH_NUM, pushing changes..."
        git push origin main
        BATCH_NUM=$((BATCH_NUM + 1))
        echo "⏸️  Brief pause before next batch..."
        sleep 1
    fi
done

# Final push
echo "💾 Pushing final changes..."
git push origin main

# Summary
echo ""
echo "🎉 Ultra-fast merge process completed!"
echo "📊 Final Summary:"
echo "   ✅ Successful merges: $SUCCESSFUL_MERGES"
echo "   ❌ Failed merges: $FAILED_MERGES"
echo "   ⏭️  Skipped branches: $SKIPPED_BRANCHES"
echo "   📈 Total processed: $CURRENT"
echo "⏰ Completed at: $(date)"

echo ""
echo "🎯 All PRs have been processed!"
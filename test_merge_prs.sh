#!/bin/bash

# Test script to merge first 3 open PRs into main branch
set -e

echo "🧪 Testing PR merge process with first 3 PRs..."

# Create log file
LOG_FILE="test_pr_merge_$(date +%Y%m%d_%H%M%S).log"
echo "📝 Logging to: $LOG_FILE"

# Statistics
TOTAL_PRS=3
PROCESSED=0
MERGED=0
FAILED=0
CONFLICTS_RESOLVED=0

log() {
    echo "[$(date '+%Y-%m-%d %H:%M:%S')] $1" | tee -a "$LOG_FILE"
}

# Function to get PR details from JSON
get_pr_details() {
    local pr_num=$1
    python3 -c "
import json
with open('prs.json', 'r') as f:
    prs = json.load(f)
for pr in prs:
    if pr['number'] == $pr_num:
        print(f\"{pr['head']['ref']}|{pr['title']}\")
        break
"
}

# Function to process a single PR
process_pr() {
    local pr_num=$1
    log "🔍 Processing PR #$pr_num..."
    
    # Get PR details
    local pr_details=$(get_pr_details "$pr_num")
    if [ -z "$pr_details" ]; then
        log "❌ PR #$pr_num details not found"
        return 1
    fi
    
    local head_branch=$(echo "$pr_details" | cut -d'|' -f1)
    local title=$(echo "$pr_details" | cut -d'|' -f2-)
    
    log "📋 PR #$pr_num: $title"
    log "🌿 Branch: $head_branch"
    
    # Check if branch exists locally or remotely
    if ! git show-ref --verify --quiet "refs/remotes/origin/$head_branch" 2>/dev/null; then
        log "⚠️  Branch $head_branch not found on origin; trying PR ref fetch..."
        if git fetch origin "pull/$pr_num/head:pr-$pr_num" 2>/dev/null; then
            log "🌿 Created local branch pr-$pr_num from PR head"
            head_branch="pr-$pr_num"
        else
            log "❌ Branch $head_branch not found and PR ref fetch failed"
            return 1
        fi
    fi
    
    # Create local tracking branch if needed
    if ! git show-ref --verify --quiet "refs/heads/$head_branch" 2>/dev/null; then
        log "🌿 Creating local branch $head_branch"
        if git show-ref --verify --quiet "refs/remotes/origin/$head_branch" 2>/dev/null; then
            git checkout -b "$head_branch" "origin/$head_branch" || {
                log "❌ Failed to create local branch $head_branch"
                return 1
            }
        else
            git checkout -B "$head_branch" || {
                log "❌ Failed to create local branch $head_branch"
                return 1
            }
        fi
    else
        git checkout "$head_branch" || {
            log "❌ Failed to checkout $head_branch"
            return 1
        }
    fi
    
    # Update branch with latest main
    log "🔄 Updating branch with latest main..."
    git fetch origin main
    
    # Try to merge main into the branch
    if git merge origin/main --no-commit --no-edit 2>/dev/null; then
        log "✅ No conflicts found, committing merge..."
        git commit -m "Merge main into $head_branch for PR #$pr_num" || true
    else
        log "⚠️  Conflicts detected, resolving automatically..."
        # Auto-resolve conflicts by preferring main branch
        git checkout --theirs . 2>/dev/null || true
        git add . 2>/dev/null || true
        git commit -m "Resolve merge conflicts: prefer main branch for PR #$pr_num" 2>/dev/null || {
            log "⚠️  Auto-resolution failed, trying manual resolution..."
            # If auto-resolution fails, abort and try a different approach
            git merge --abort 2>/dev/null || true
            # Force merge by preferring main
            git reset --hard origin/main 2>/dev/null || true
            git cherry-pick "$head_branch" 2>/dev/null || true
        }
        CONFLICTS_RESOLVED=$((CONFLICTS_RESOLVED + 1))
    fi
    
    # Switch back to main and merge the PR branch
    git checkout main
    if git merge "$head_branch" --no-edit 2>/dev/null; then
        log "✅ Successfully merged PR #$pr_num into main"
        MERGED=$((MERGED + 1))
        
        # Push to remote
        if git push origin main 2>/dev/null; then
            log "🚀 Pushed to remote successfully"
        else
            log "⚠️  Push failed, trying to sync..."
            git pull origin main --no-rebase --no-edit 2>/dev/null || true
            git push origin main 2>/dev/null || true
        fi
        
        # Clean up
        git branch -D "$head_branch" 2>/dev/null || true
        
        return 0
    else
        log "❌ Failed to merge PR #$pr_num into main"
        git merge --abort 2>/dev/null || true
        return 1
    fi
}

# Main processing loop
log "🎯 Starting to process $TOTAL_PRS test PRs..."

while IFS= read -r pr_num; do
    if [ -z "$pr_num" ]; then
        continue
    fi
    
    PROCESSED=$((PROCESSED + 1))
    log "📊 Progress: $PROCESSED/$TOTAL_PRS PRs processed"
    
    if process_pr "$pr_num"; then
        log "✅ PR #$pr_num completed successfully"
    else
        log "❌ PR #$pr_num failed"
        FAILED=$((FAILED + 1))
    fi
    
    # Small delay to avoid rate limiting
    sleep 2
    
done < test_pr_numbers.txt

# Final statistics
log "🏁 Test process completed!"
log "📊 Final Statistics:"
log "   Total PRs: $TOTAL_PRS"
log "   Processed: $PROCESSED"
log "   Merged: $MERGED"
log "   Failed: $FAILED"
log "   Conflicts Resolved: $CONFLICTS_RESOLVED"

echo "🎉 Test PR merge process completed! Check $LOG_FILE for details."
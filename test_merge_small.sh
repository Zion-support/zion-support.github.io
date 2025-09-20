#!/bin/bash

# Test merge with a small subset of branches
set -e

echo "🧪 Testing Merge Strategy with Small Subset"
echo "==========================================="

# Configuration
MAIN_BRANCH="main"
LOG_FILE="test_merge_$(date +%Y%m%d_%H%M%S).log"

# Function to log with timestamp
log() {
    echo "[$(date '+%Y-%m-%d %H:%M:%S')] $1" | tee -a "$LOG_FILE"
}

# Function to merge a single branch safely
test_merge_branch() {
    local branch=$1
    log "Testing merge of: $branch"
    
    # Check if branch exists
    if ! git show-ref --verify --quiet "refs/remotes/origin/$branch"; then
        log "Branch $branch does not exist, skipping"
        return 1
    fi
    
    # Check if already merged
    if git merge-base --is-ancestor "origin/$branch" "origin/$MAIN_BRANCH" 2>/dev/null; then
        log "Branch $branch is already merged, skipping"
        return 0
    fi
    
    # Create temporary branch
    local temp_branch="test_${branch//[^a-zA-Z0-9]/_}_$(date +%s)"
    
    # Fetch the branch
    if ! git fetch origin "$branch"; then
        log "❌ Failed to fetch branch $branch"
        return 1
    fi
    
    # Create temp branch from main
    if ! git checkout -b "$temp_branch" "origin/$MAIN_BRANCH"; then
        log "❌ Failed to create temp branch for $branch"
        return 1
    fi
    
    # Attempt merge
    if git merge "origin/$branch" --no-edit --strategy=recursive -X ours; then
        log "✅ Successfully merged $branch"
        # Clean up
        git checkout "$MAIN_BRANCH"
        git branch -D "$temp_branch"
        return 0
    else
        log "⚠️  Conflict in $branch, attempting resolution..."
        
        # Try to resolve conflicts
        local conflicted_files=$(git diff --name-only --diff-filter=U)
        for file in $conflicted_files; do
            log "Resolving conflict in: $file"
            # Use main branch version
            git checkout --ours "$file" 2>/dev/null || true
            git add "$file"
        done
        
        # Commit resolution
        if git commit --no-edit; then
            log "✅ Resolved conflicts in $branch"
            git checkout "$MAIN_BRANCH"
            git branch -D "$temp_branch"
            return 0
        else
            log "❌ Failed to resolve conflicts in $branch"
            git checkout "$MAIN_BRANCH"
            git branch -D "$temp_branch" 2>/dev/null || true
            return 1
        fi
    fi
}

# Get a small subset of branches for testing
log "Fetching test branches..."
git fetch --all

# Get 5 recent branches for testing
TEST_BRANCHES=$(git branch -r | grep -E "(cursor|codex)" | head -5 | sed 's/origin\///')

log "Testing with branches: $TEST_BRANCHES"

successful=0
failed=0

for branch in $TEST_BRANCHES; do
    if [[ "$branch" != "$MAIN_BRANCH" ]]; then
        if test_merge_branch "$branch"; then
            successful=$((successful + 1))
        else
            failed=$((failed + 1))
        fi
    fi
done

log "Test Results: $successful successful, $failed failed"
log "✅ Test merge completed!"

echo "Test completed. Check $LOG_FILE for details."
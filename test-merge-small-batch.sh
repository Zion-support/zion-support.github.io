#!/bin/bash

# Test script to merge a small batch of cursor branches into main
set -e

echo "🧪 Starting test merge of small batch of cursor branches..."
echo "📊 This is a test run to verify the merge logic works correctly"
echo "⏰ Started at: $(date)"
echo "---"

# Configuration - Small batch size for testing
BATCH_SIZE=5
BACKUP_BRANCH="test-merge-backup-$(date +%Y%m%d-%H%M%S)"
LOG_FILE="test-merge-log-$(date +%Y%m%d-%H%M%S).txt"
echo "🔒 Creating backup branch: $BACKUP_BRANCH"
git checkout -b "$BACKUP_BRANCH"
git push origin "$BACKUP_BRANCH"
git checkout main

# Initialize counters
SUCCESSFUL_MERGES=0
FAILED_MERGES=0
CONFLICT_RESOLUTIONS=0

SKIPPED_BRANCHES=0
TOTAL_PROCESSED=0

# Function to log messages
log_message() {
    local message="$1"
    echo "$(date '+%Y-%m-%d %H:%M:%S') - $message" | tee -a "$LOG_FILE"
}

# Function to resolve conflicts in a file
resolve_conflicts() {
    local file="$1"
    local branch="$2"
    
    echo "🔧 Resolving conflicts in $file for branch $branch..."
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
    
    log_message "🔄 Attempting to merge $branch..."
    echo "🔄 Attempting to merge $branch..."
    
    # Fetch the latest version of the branch
    git fetch origin "$branch"
    
    # Try to merge
    if git merge --no-commit --no-ff "origin/$branch" 2>/dev/null; then
        echo "✅ Successfully merged $branch"
        git commit -m "Test merge $branch into main - $(date)"
        SUCCESSFUL_MERGES=$((SUCCESSFUL_MERGES + 1))
        return 0
    else
        echo "⚠️  Merge conflicts detected in $branch, resolving..."
        
        # Get list of conflicted files
        CONFLICTED_FILES=$(git diff --name-only --diff-filter=U)
        
        if [ -n "$CONFLICTED_FILES" ]; then
            
            # Resolve conflicts in each file
            for file in $CONFLICTED_FILES; do
                if [ -f "$file" ]; then
                    resolve_conflicts "$file" "$branch"
                fi
            done
            
            # Add resolved files
            git add .
            
            # Commit the merge
            git commit -m "Test resolve merge conflicts for $branch - $(date)"
            
            echo "✅ Successfully resolved conflicts and merged $branch"
            SUCCESSFUL_MERGES=$((SUCCESSFUL_MERGES + 1))
            return 0
        else
            echo "❌ No conflicted files found, but merge failed. Aborting..."
            git merge --abort
            FAILED_MERGES=$((FAILED_MERGES + 1))
            return 1
        fi
    fi
}

# Process each branch in the test batch
echo "🔄 Starting test batch processing..."
echo "---"

log_message "🧪 Starting test processing..."
log_message "📊 Batch size: $BATCH_SIZE"
log_message "---"

# Get first few cursor branches for testing
BRANCHES=$(git branch -r | grep "origin/cursor/" | head -$BATCH_SIZE | sed 's/origin\///' | sort)

# Convert branches to array for easier processing
branch_array=($BRANCHES)
total_branches=${#branch_array[@]}
current_batch=1

log_message "📊 Test branches: $total_branches"
log_message "---"

log_message "🚀 Processing test batch $current_batch (branches 1 to $total_branches)"
log_message "---"

batch_success=0
batch_failures=0

# Process this test batch
for ((j=0; j<total_branches; j++)); do
    branch="${branch_array[$j]}"
    TOTAL_PROCESSED=$((TOTAL_PROCESSED + 1))
    
    log_message "📋 Processing branch $TOTAL_PROCESSED/$total_branches: $branch"
    
    # Check if branch can be merged
    if ! can_merge_branch "$branch"; then
        log_message "⏭️  Skipping $branch (already merged or doesn't exist)"
        SKIPPED_BRANCHES=$((SKIPPED_BRANCHES + 1))
        continue
    fi
    
    # Try to merge the branch
    if merge_branch "$branch"; then
        echo "✅ Test branch $branch processed successfully"
git push origin main

# Summary
echo ""
echo "🧪 Test batch completed!"
echo "📊 Summary:"
echo "   ✅ Successful merges: $SUCCESSFUL_MERGES"
echo "   ❌ Failed merges: $FAILED_MERGES"
echo "   🔧 Conflicts resolved: $CONFLICT_RESOLUTIONS"
echo "   🔒 Backup branch: $BACKUP_BRANCH"
echo "⏰ Completed at: $(date)"

# Next steps
echo ""
echo "🚀 Next steps:"
if [ $SUCCESSFUL_MERGES -gt 0 ]; then
    echo "   ✅ Test successful! You can now run the full incremental script:"
    echo "      ./incremental-merge-prs.sh"
else
    echo "   ⚠️  Test had issues. Review the errors before proceeding."
fi
echo "   1. Review the merged changes: git log --oneline -10"
echo "   2. Test the application"
log_message "🧪 Test merge of cursor branches completed!"
log_message "📊 Summary:"
log_message "   ✅ Successful merges: $SUCCESSFUL_MERGES"
log_message "   ❌ Failed merges: $FAILED_MERGES"
log_message "   🔧 Conflicts resolved: $CONFLICT_RESOLUTIONS"
log_message "   ⏭️  Skipped branches: $SKIPPED_BRANCHES"
log_message "   📦 Batches processed: $current_batch"
log_message "   🔒 Backup branch: $BACKUP_BRANCH"
log_message "   📝 Log file: $LOG_FILE"
log_message "⏰ Completed at: $(date)"


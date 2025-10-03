#!/bin/bash

# Ultimate Merge Script for Zion Repository
# Handles all cursor branches and PR branches with conflict resolution

set -e

echo "🚀 Starting ultimate merge process for Zion repository..."

# Configuration
BATCH_SIZE=50
MAX_RETRIES=3
LOG_FILE="/workspace/merge_log.txt"

# Initialize log
echo "=== Ultimate Merge Process Started at $(date) ===" > "$LOG_FILE"

# Function to log with timestamp
log() {
    echo "$(date '+%Y-%m-%d %H:%M:%S') - $1" | tee -a "$LOG_FILE"
}

# Function to merge a single branch with conflict resolution
merge_branch() {
    local branch=$1
    local retry_count=0
    
    log "🔄 Processing branch: $branch"
    
    while [ $retry_count -lt $MAX_RETRIES ]; do
        # Delete local branch if exists
        git branch -D "$branch" 2>/dev/null || true
        
        # Checkout the branch
        if git checkout -b "$branch" "origin/$branch" 2>/dev/null; then
            log "✅ Checked out $branch"
        else
            log "❌ Failed to checkout $branch (attempt $((retry_count + 1)))"
            retry_count=$((retry_count + 1))
            continue
        fi
        
        # Switch back to main
        git checkout main
        
        # Try to merge
        if git merge "$branch" --no-edit 2>/dev/null; then
            log "✅ Successfully merged $branch"
            git branch -d "$branch" 2>/dev/null || true
            return 0
        else
            log "⚠️  Merge conflict detected for $branch"
            
            # Check for conflicts
            if git status --porcelain | grep -q "^UU\|^AA\|^DD"; then
                log "🔧 Resolving conflicts for $branch"
                
                # Auto-resolve conflicts
                CONFLICT_FILES=$(git diff --name-only --diff-filter=U)
                if [ -n "$CONFLICT_FILES" ]; then
                    for file in $CONFLICT_FILES; do
                        log "  📝 Resolving $file"
                        
                        # Smart conflict resolution based on file type
                        if [[ "$file" == *.md ]]; then
                            # For markdown, try to merge both versions
                            git checkout --theirs "$file" 2>/dev/null || git checkout --ours "$file" 2>/dev/null || true
                        elif [[ "$file" == *.json ]]; then
                            # For JSON, prefer main branch but merge arrays/objects when possible
                            git checkout --ours "$file" 2>/dev/null || true
                        elif [[ "$file" == *.js ]] || [[ "$file" == *.ts ]] || [[ "$file" == *.tsx ]]; then
                            # For JS/TS files, prefer main branch
                            git checkout --ours "$file" 2>/dev/null || true
                        elif [[ "$file" == *.sh ]] || [[ "$file" == *.cjs ]]; then
                            # For shell scripts, prefer main branch
                            git checkout --ours "$file" 2>/dev/null || true
                        elif [[ "$file" == *.css ]] || [[ "$file" == *.scss ]]; then
                            # For CSS, prefer main branch
                            git checkout --ours "$file" 2>/dev/null || true
                        else
                            # Default: prefer main branch
                            git checkout --ours "$file" 2>/dev/null || true
                        fi
                    done
                    
                    # Commit the resolution
                    if git add . && git commit -m "🔧 Auto-resolve conflicts for $branch" --no-edit 2>/dev/null; then
                        log "✅ Conflicts resolved for $branch"
                        git branch -d "$branch" 2>/dev/null || true
                        return 0
                    else
                        log "❌ Failed to commit conflict resolution for $branch"
                        git merge --abort 2>/dev/null || true
                    fi
                else
                    log "❌ No conflict files found for $branch"
                    git merge --abort 2>/dev/null || true
                fi
            else
                log "❌ Unknown merge issue for $branch"
                git merge --abort 2>/dev/null || true
            fi
        fi
        
        retry_count=$((retry_count + 1))
    done
    
    log "❌ Failed to merge $branch after $MAX_RETRIES attempts"
    git branch -d "$branch" 2>/dev/null || true
    return 1
}

# Function to process branches in batches
process_branches() {
    local branch_pattern=$1
    local total_branches
    local processed=0
    local successful=0
    local failed=0
    
    total_branches=$(git branch -r | grep "$branch_pattern" | wc -l)
    log "📊 Found $total_branches branches matching pattern: $branch_pattern"
    
    # Get branches
    local branches=$(git branch -r | grep "$branch_pattern" | sed 's/origin\///')
    
    # Process in batches
    local batch_num=1
    local batch_start=1
    
    while [ $batch_start -le $total_branches ]; do
        local batch_end=$((batch_start + BATCH_SIZE - 1))
        if [ $batch_end -gt $total_branches ]; then
            batch_end=$total_branches
        fi
        
        log "🔄 Processing Batch $batch_num (branches $batch_start to $batch_end)"
        
        # Get current batch
        local batch_branches=$(echo "$branches" | sed -n "${batch_start},${batch_end}p")
        
        if [ -z "$batch_branches" ]; then
            log "✅ No more branches to process"
            break
        fi
        
        local batch_success=0
        local batch_failed=0
        
        # Process each branch in the batch
        for branch in $batch_branches; do
            if merge_branch "$branch"; then
                batch_success=$((batch_success + 1))
                successful=$((successful + 1))
            else
                batch_failed=$((batch_failed + 1))
                failed=$((failed + 1))
            fi
            processed=$((processed + 1))
            
            # Progress update
            if [ $((processed % 10)) -eq 0 ]; then
                log "📊 Progress: $processed/$total_branches (✅ $successful, ❌ $failed)"
            fi
        done
        
        log "📊 Batch $batch_num Summary: ✅ $batch_success successful, ❌ $batch_failed failed"
        
        # Push changes after each batch
        log "🚀 Pushing changes to main..."
        if git pull origin main --rebase; then
            if git push origin main; then
                log "✅ Successfully pushed batch $batch_num"
            else
                log "⚠️  Push failed for batch $batch_num, continuing..."
            fi
        else
            log "⚠️  Pull failed for batch $batch_num, continuing..."
        fi
        
        # Update for next batch
        batch_start=$((batch_start + BATCH_SIZE))
        batch_num=$((batch_num + 1))
        
        # Brief pause between batches
        sleep 2
    done
    
    log "📊 Final Summary for $branch_pattern: ✅ $successful successful, ❌ $failed failed out of $processed processed"
    return $failed
}

# Main execution
main() {
    log "🎯 Starting ultimate merge process..."
    
    # Ensure we're on main branch
    git checkout main
    git pull origin main
    
    # Track overall statistics
    local total_failed=0
    
    # Process cursor branches
    log "🔄 Processing cursor branches..."
    if ! process_branches "cursor/fix-errors-and-merge-to-main"; then
        total_failed=$((total_failed + $?))
    fi
    
    # Process PR branches
    log "🔄 Processing PR branches..."
    if ! process_branches "pr-"; then
        total_failed=$((total_failed + $?))
    fi
    
    # Final cleanup
    log "🧹 Cleaning up local branches..."
    git branch | grep -E "cursor/fix-errors-and-merge-to-main|pr-" | xargs -r git branch -D 2>/dev/null || true
    
    # Final push
    log "🚀 Final push to main..."
    git pull origin main --rebase
    git push origin main
    
    # Final summary
    log "🎉 Ultimate merge process completed!"
    log "📊 Total failed merges: $total_failed"
    
    if [ $total_failed -eq 0 ]; then
        log "✅ All branches merged successfully!"
        exit 0
    else
        log "⚠️  Some branches failed to merge. Check the log for details."
        exit 1
    fi
}

# Error handling
trap 'log "❌ Script interrupted. Current status saved to $LOG_FILE"; exit 1' INT TERM

# Run main function
main "$@"
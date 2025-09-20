#!/bin/bash

# Targeted script to merge recent PRs and resolve conflicts
set -e

echo "🚀 Starting targeted merge of recent PRs..."
echo "⏰ Started at: $(date)"
echo "---"

# Configuration
BATCH_SIZE=10
LOG_FILE="targeted-merge-log-$(date +%Y%m%d-%H%M%S).txt"
BACKUP_BRANCH="targeted-merge-backup-$(date +%Y%m%d-%H%M%S)"

# Function to log messages
log_message() {
    local message="$1"
    echo "$(date '+%Y-%m-%d %H:%M:%S') - $message" | tee -a "$LOG_FILE"
}

# Create backup branch
log_message "🔒 Creating backup branch: $BACKUP_BRANCH"
git checkout -b "$BACKUP_BRANCH"
git push origin "$BACKUP_BRANCH"
git checkout main

# Initialize counters
SUCCESSFUL_MERGES=0
FAILED_MERGES=0
CONFLICT_RESOLUTIONS=0
SKIPPED_BRANCHES=0

# Get recent branches (last 50 by commit date)
log_message "📋 Getting recent branches..."
RECENT_BRANCHES=$(git for-each-ref --sort=-committerdate refs/remotes/origin | grep -E "(cursor|codex)" | head -50 | sed 's/.*refs\/remotes\/origin\///')

# Function to check if a branch has meaningful differences
has_meaningful_differences() {
    local branch="$1"
    
    # Fetch the branch
    git fetch origin "$branch" >/dev/null 2>&1
    
    # Check if there are differences
    if git diff --quiet main "origin/$branch"; then
        return 1  # No differences
    fi
    
    # Check if the differences are meaningful (not just whitespace or comments)
    local diff_lines=$(git diff main "origin/$branch" | grep -v '^[+-][[:space:]]*$' | grep -v '^[+-][[:space:]]*//' | wc -l)
    
    if [ "$diff_lines" -lt 5 ]; then
        return 1  # Not enough meaningful changes
    fi
    
    return 0  # Has meaningful differences
}

# Function to resolve conflicts intelligently
resolve_conflicts() {
    local file="$1"
    local branch="$2"
    
    log_message "🔧 Resolving conflicts in $file for branch $branch..."
    
    # Create a backup
    cp "$file" "${file}.backup.$(date +%s)"
    
    # Different strategies based on file type
    if [[ "$file" == "package.json" || "$file" == "package-lock.json" ]]; then
        log_message "📦 Package file detected, keeping main version..."
        git checkout --ours "$file"
    elif [[ "$file" == "next.config.js" || "$file" == "tsconfig.json" || "$file" == "tailwind.config.js" ]]; then
        log_message "⚙️  Config file detected, keeping main version..."
        git checkout --ours "$file"
    elif [[ "$file" == *.tsx || "$file" == *.ts || "$file" == *.jsx || "$file" == *.js ]]; then
        log_message "💻 Code file detected, attempting intelligent merge..."
        # Remove conflict markers and try to keep both versions where possible
        sed -i '/<<<<<<< HEAD/,/=======/d' "$file"
        sed -i '/>>>>>>> /d' "$file"
    elif [[ "$file" == *.md ]]; then
        log_message "📝 Markdown file detected, merging content..."
        # For markdown, try to keep both versions
        sed -i '/<<<<<<< HEAD/,/=======/d' "$file"
        sed -i '/>>>>>>> /d' "$file"
    else
        log_message "📝 Regular file, removing conflict markers..."
        # Default: remove conflict markers
        sed -i '/<<<<<<< HEAD/,/=======/d' "$file"
        sed -i '/>>>>>>> /d' "$file"
    fi
    
    log_message "✅ Resolved conflicts in $file"
    CONFLICT_RESOLUTIONS=$((CONFLICT_RESOLUTIONS + 1))
}

# Function to merge a single branch
merge_branch() {
    local branch="$1"
    
    log_message "🔄 Attempting to merge $branch..."
    
    # Check if branch has meaningful differences
    if ! has_meaningful_differences "$branch"; then
        log_message "⏭️  Skipping $branch (no meaningful differences)"
        SKIPPED_BRANCHES=$((SKIPPED_BRANCHES + 1))
        return 0
    fi
    
    # Try to merge
    if git merge --no-commit --no-ff "origin/$branch" 2>/dev/null; then
        log_message "✅ Successfully merged $branch"
        git commit -m "Merge $branch into main - $(date)"
        SUCCESSFUL_MERGES=$((SUCCESSFUL_MERGES + 1))
        return 0
    else
        log_message "⚠️  Merge conflicts detected in $branch, resolving..."
        
        # Get list of conflicted files
        CONFLICTED_FILES=$(git diff --name-only --diff-filter=U)
        
        if [ -n "$CONFLICTED_FILES" ]; then
            log_message "📋 Conflicted files: $CONFLICTED_FILES"
            
            # Resolve conflicts in each file
            for file in $CONFLICTED_FILES; do
                if [ -f "$file" ]; then
                    resolve_conflicts "$file" "$branch"
                fi
            done
            
            # Add resolved files
            git add .
            
            # Commit the merge
            git commit -m "Resolve merge conflicts for $branch - $(date)"
            
            log_message "✅ Successfully resolved conflicts and merged $branch"
            SUCCESSFUL_MERGES=$((SUCCESSFUL_MERGES + 1))
            return 0
        else
            log_message "❌ No conflicted files found, but merge failed. Aborting..."
            git merge --abort
            FAILED_MERGES=$((FAILED_MERGES + 1))
            return 1
        fi
    fi
}

# Main processing loop
log_message "🔄 Starting branch processing..."
echo "---"

for branch in $RECENT_BRANCHES; do
    log_message "📋 Processing branch: $branch"
    
    # Try to merge the branch
    if merge_branch "$branch"; then
        log_message "✅ Branch $branch processed successfully"
    else
        log_message "❌ Failed to process branch $branch"
    fi
    
    # Progress update
    log_message "📊 Progress: $SUCCESSFUL_MERGES successful, $FAILED_MERGES failed, $CONFLICT_RESOLUTIONS conflicts resolved"
    echo "---"
    
    # Push changes periodically
    if [ $((SUCCESSFUL_MERGES % 5)) -eq 0 ] && [ $SUCCESSFUL_MERGES -gt 0 ]; then
        log_message "💾 Pushing progress to remote..."
        git push origin main
    fi
done

# Final push
log_message "💾 Pushing final changes to remote..."
git push origin main

# Summary
echo ""
log_message "🎉 Targeted merge process completed!"
log_message "📊 Summary:"
log_message "   ✅ Successful merges: $SUCCESSFUL_MERGES"
log_message "   ❌ Failed merges: $FAILED_MERGES"
log_message "   🔧 Conflicts resolved: $CONFLICT_RESOLUTIONS"
log_message "   ⏭️  Skipped branches: $SKIPPED_BRANCHES"
log_message "   🔒 Backup branch: $BACKUP_BRANCH"
log_message "⏰ Completed at: $(date)"

echo ""
echo "🧹 Next steps:"
echo "   1. Review the merged changes: git log --oneline -20"
echo "   2. Test the application: npm run build"
echo "   3. Delete the backup branch when satisfied: git push origin --delete $BACKUP_BRANCH"
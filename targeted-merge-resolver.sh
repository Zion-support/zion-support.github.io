#!/bin/bash

# Targeted Merge Conflict Resolver for Recent PRs
# Focuses on the most recent and important branches first

set -e

echo "🎯 Starting Targeted Merge Conflict Resolution..."
echo "⏰ Started at: $(date)"
echo "=================================================="

# Configuration
LOG_FILE="targeted-merge-$(date +%Y%m%d-%H%M%S).log"
MAX_BRANCHES=50
PRIORITY_KEYWORDS=("netlify" "build" "fix" "merge" "main")

# Initialize counters
SUCCESSFUL_MERGES=0
FAILED_MERGES=0
CONFLICT_RESOLUTIONS=0
SKIPPED_BRANCHES=0

# Logging function
log_message() {
    local message="$1"
    local timestamp=$(date '+%Y-%m-%d %H:%M:%S')
    echo "[$timestamp] $message" | tee -a "$LOG_FILE"
}

# Function to check if branch has priority keywords
has_priority_keywords() {
    local branch="$1"
    for keyword in "${PRIORITY_KEYWORDS[@]}"; do
        if [[ "$branch" == *"$keyword"* ]]; then
            return 0
        fi
    done
    return 1
}

# Function to resolve conflicts intelligently
resolve_conflicts() {
    local file="$1"
    
    log_message "🔧 Resolving conflicts in $file..."
    
    # Strategy 1: Keep main version for critical files
    if [[ "$file" == "package.json" || "$file" == "package-lock.json" || "$file" == "netlify.toml" ]]; then
        log_message "📦 Critical file, keeping main version..."
        git checkout --ours "$file"
        git add "$file"
        return 0
    fi
    
    # Strategy 2: Keep main version for build configs
    if [[ "$file" == "next.config.js" || "$file" == "tsconfig.json" || "$file" == "tailwind.config.js" ]]; then
        log_message "⚙️  Config file, keeping main version..."
        git checkout --ours "$file"
        git add "$file"
        return 0
    fi
    
    # Strategy 3: For component files, try to merge intelligently
    if [[ "$file" == *.tsx || "$file" == *.ts || "$file" == *.jsx || "$file" == *.js ]]; then
        log_message "📝 Component file, attempting merge..."
        
        # Remove conflict markers
        sed -i '/^<<<<<<< HEAD$/,/^=======$/d' "$file" 2>/dev/null || true
        sed -i '/^>>>>>>> /d' "$file" 2>/dev/null || true
        
        # If file is empty, restore from main
        if [[ ! -s "$file" ]]; then
            git checkout --ours "$file"
        fi
        
        git add "$file"
        return 0
    fi
    
    # Strategy 4: Default to main version
    git checkout --ours "$file"
    git add "$file"
    return 0
}

# Function to process a single branch
process_branch() {
    local branch="$1"
    local branch_name=$(basename "$branch")
    
    log_message "🔄 Processing: $branch_name"
    
    # Fetch and checkout
    if ! git fetch origin "$branch_name" 2>/dev/null; then
        log_message "❌ Failed to fetch $branch_name"
        SKIPPED_BRANCHES=$((SKIPPED_BRANCHES + 1))
        return 1
    fi
    
    # Create local branch
    if ! git checkout -b "merge-$branch_name" "origin/$branch_name" 2>/dev/null; then
        log_message "❌ Failed to checkout $branch_name"
        SKIPPED_BRANCHES=$((SKIPPED_BRANCHES + 1))
        return 1
    fi
    
    # Try to merge main
    if git merge main --no-commit 2>/dev/null; then
        log_message "✅ No conflicts in $branch_name"
        git commit -m "Merge main into $branch_name - no conflicts" || true
    else
        log_message "⚠️  Conflicts in $branch_name, resolving..."
        
        # Resolve conflicts
        local conflicted_files=$(git status --porcelain | grep "^UU" | cut -c4- || echo "")
        
        if [[ -n "$conflicted_files" ]]; then
            CONFLICT_RESOLUTIONS=$((CONFLICT_RESOLUTIONS + 1))
            
            echo "$conflicted_files" | while read -r file; do
                if [[ -n "$file" ]]; then
                    resolve_conflicts "$file"
                fi
            done
            
            # Check if resolved
            if [[ $(git status --porcelain | grep "^UU" | wc -l) -eq 0 ]]; then
                git commit -m "Resolve merge conflicts in $branch_name" || true
            else
                log_message "❌ Could not resolve conflicts in $branch_name"
                git merge --abort
                git checkout main
                git branch -D "merge-$branch_name"
                FAILED_MERGES=$((FAILED_MERGES + 1))
                return 1
            fi
        else
            log_message "❌ No conflicted files found but merge failed"
            git merge --abort
            git checkout main
            git branch -D "merge-$branch_name"
            FAILED_MERGES=$((FAILED_MERGES + 1))
            return 1
        fi
    fi
    
    # Test build quickly
    log_message "🏗️  Testing build for $branch_name..."
    if npm ci --legacy-peer-deps --silent 2>/dev/null && npm run build --silent 2>/dev/null; then
        log_message "✅ Build successful for $branch_name"
    else
        log_message "⚠️  Build failed, attempting quick fix..."
        npm install --legacy-peer-deps --silent 2>/dev/null || true
        
        if npm run build --silent 2>/dev/null; then
            log_message "✅ Build fixed for $branch_name"
            git add . && git commit -m "Fix build issues" || true
        else
            log_message "❌ Build still failing, skipping..."
            git checkout main
            git branch -D "merge-$branch_name"
            FAILED_MERGES=$((FAILED_MERGES + 1))
            return 1
        fi
    fi
    
    # Merge to main
    git checkout main
    if git merge "merge-$branch_name" --no-ff -m "Merge $branch_name into main

- Resolved merge conflicts
- Build verified
- Ready for production"; then
        log_message "✅ Successfully merged $branch_name"
        SUCCESSFUL_MERGES=$((SUCCESSFUL_MERGES + 1))
        git branch -D "merge-$branch_name"
        return 0
    else
        log_message "❌ Failed to merge $branch_name to main"
        git checkout main
        git branch -D "merge-$branch_name"
        FAILED_MERGES=$((FAILED_MERGES + 1))
        return 1
    fi
}

# Get priority branches first
log_message "🔍 Finding priority branches..."

PRIORITY_BRANCHES=($(git branch -r | grep -E "(cursor|codex)" | grep -v "HEAD" | while read branch; do
    if has_priority_keywords "$branch"; then
        echo "$branch"
    fi
done | head -20))

# Get recent branches
RECENT_BRANCHES=($(git for-each-ref --sort=-committerdate --format='%(refname)' refs/remotes/origin | grep -E "(cursor|codex)" | head -30))

# Combine and deduplicate
ALL_BRANCHES=($(printf '%s\n' "${PRIORITY_BRANCHES[@]}" "${RECENT_BRANCHES[@]}" | sort -u | head -$MAX_BRANCHES))

log_message "📋 Processing ${#ALL_BRANCHES[@]} branches (priority + recent)"

# Process branches
for i in "${!ALL_BRANCHES[@]}"; do
    branch="${ALL_BRANCHES[$i]}"
    
    if [[ "$branch" == *"HEAD"* ]]; then
        continue
    fi
    
    log_message "🔄 [$((i+1))/${#ALL_BRANCHES[@]}] Processing: $branch"
    
    if process_branch "$branch"; then
        log_message "✅ Success: $branch"
    else
        log_message "❌ Failed: $branch"
    fi
    
    # Push every 5 merges
    if [[ $((i % 5)) -eq 0 && $i -gt 0 ]]; then
        log_message "🚀 Pushing changes..."
        git push origin main || log_message "⚠️  Push failed, continuing..."
    fi
done

# Final push
log_message "🚀 Final push..."
git push origin main

# Summary
echo ""
echo "=================================================="
echo "🎉 Targeted Merge Resolution Complete!"
echo "⏰ Finished at: $(date)"
echo ""
echo "📊 Results:"
echo "  ✅ Successful: $SUCCESSFUL_MERGES"
echo "  ❌ Failed: $FAILED_MERGES"
echo "  🔧 Conflicts resolved: $CONFLICT_RESOLUTIONS"
echo "  ⏭️  Skipped: $SKIPPED_BRANCHES"
echo ""
echo "📝 Log: $LOG_FILE"
echo "=================================================="
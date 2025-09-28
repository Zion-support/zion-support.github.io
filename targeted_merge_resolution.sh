#!/bin/bash

# Targeted merge resolution for critical branches
set -e

echo "🎯 Starting targeted merge resolution for critical branches..."

# Colors
GREEN='\033[0;32m'
BLUE='\033[0;34m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
NC='\033[0m'

log_info() { echo -e "${BLUE}[INFO]${NC} $1"; }
log_success() { echo -e "${GREEN}[SUCCESS]${NC} $1"; }
log_warning() { echo -e "${YELLOW}[WARNING]${NC} $1"; }
log_error() { echo -e "${RED}[ERROR]${NC} $1"; }

# Ensure we're on main
git checkout main
git pull origin main

# Function to merge a specific branch
merge_branch() {
    local branch="$1"
    log_info "Processing: $branch"
    
    if ! git show-ref --verify --quiet "refs/remotes/$branch"; then
        log_warning "Branch $branch does not exist, skipping..."
        return 0
    fi
    
    # Try merge with conflict resolution
    if git merge "$branch" --no-edit --no-ff 2>/dev/null; then
        log_success "Merged $branch successfully"
        return 0
    fi
    
    # Handle conflicts
    log_warning "Conflicts in $branch, resolving..."
    
    # Auto-resolve common conflicts
    git status --porcelain | while read status file; do
        if [[ "$status" =~ ^UU|^AA|^DD ]]; then
            case "$file" in
                "package.json"|"package-lock.json"|"pnpm-lock.yaml")
                    git checkout --theirs "$file" 2>/dev/null || git checkout --ours "$file" 2>/dev/null || true
                    ;;
                *.toml|*.config.js|*.config.ts)
                    git checkout --ours "$file" 2>/dev/null || true
                    ;;
                *.md|*.txt)
                    git checkout --theirs "$file" 2>/dev/null || git checkout --ours "$file" 2>/dev/null || true
                    ;;
                src/*|app/*|pages/*)
                    git checkout --theirs "$file" 2>/dev/null || git checkout --ours "$file" 2>/dev/null || true
                    ;;
                *)
                    git checkout --ours "$file" 2>/dev/null || true
                    ;;
            esac
        fi
    done
    
    git add . 2>/dev/null || true
    
    if git commit --no-edit 2>/dev/null; then
        log_success "Resolved conflicts and merged $branch"
        return 0
    else
        log_error "Failed to merge $branch"
        git merge --abort 2>/dev/null || true
        return 1
    fi
}

# Priority branches to merge first
priority_branches=(
    "origin/cursor/fix-netlify-build-and-merge-to-main"
    "origin/cursor/fix-netlify-build-and-merge-to-main-0001"
    "origin/cursor/fix-netlify-build-and-merge-to-main-0013"
    "origin/cursor/fix-netlify-build-and-merge-to-main-0076"
    "origin/cursor/fix-netlify-build-and-merge-to-main-0084"
    "origin/chore/netlify-build-fix"
    "origin/chore/netlify-build-cleanup"
    "origin/chore/netlify-build-verify"
    "origin/clean-main"
    "origin/clean-main-2"
    "origin/comprehensive-improvements-final"
)

log_info "Processing ${#priority_branches[@]} priority branches..."

for branch in "${priority_branches[@]}"; do
    branch_name="${branch#origin/}"
    merge_branch "$branch_name"
    sleep 1
done

# Process remaining Netlify branches in batches
log_info "Processing remaining Netlify branches..."

netlify_branches=($(git branch -r | grep "cursor/fix-netlify-build-and-merge-to-main-" | head -50))

for branch in "${netlify_branches[@]}"; do
    branch_name="${branch#origin/}"
    merge_branch "$branch_name"
    sleep 0.5
done

# Commit and push
log_info "Committing and pushing changes..."
git add .
git commit -m "Resolved merge conflicts and merged critical branches" || true
git push origin main || log_warning "Failed to push, but local changes are complete"

log_success "🎉 Targeted merge resolution completed!"
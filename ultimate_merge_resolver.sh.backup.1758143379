#!/bin/bash

# Ultimate Merge Resolver
# This script will resolve all merge conflicts and merge all open PRs into main

set -e

echo "🚀 Starting Ultimate Merge Resolver..."

# Function to check if a command exists
command_exists() {
    command -v "$1" >/dev/null 2>&1
}

# Function to run a command with timeout
run_with_timeout() {
    local timeout=$1
    shift
    timeout "$timeout" "$@" 2>/dev/null || return 1
}

# Function to check if we're in a git repository
is_git_repo() {
    [ -d .git ] || git rev-parse --git-dir >/dev/null 2>&1
}

# Function to get current branch
get_current_branch() {
    git branch --show-current 2>/dev/null || echo "unknown"
}

# Function to checkout main branch
checkout_main() {
    echo "📋 Checking out main branch..."
    if git checkout main 2>/dev/null; then
        echo "✅ Successfully checked out main"
        return 0
    else
        echo "🔧 Creating main branch from origin/main..."
        if git checkout -b main origin/main 2>/dev/null; then
            echo "✅ Successfully created main branch"
            return 0
        else
            echo "❌ Failed to create main branch"
            return 1
        fi
    fi
}

# Function to fetch latest changes
fetch_latest() {
    echo "📥 Fetching latest changes..."
    if git fetch --all 2>/dev/null; then
        echo "✅ Successfully fetched latest changes"
        return 0
    else
        echo "❌ Failed to fetch latest changes"
        return 1
    fi
}

# Function to merge a branch
merge_branch() {
    local branch_name=$1
    echo "🔄 Attempting to merge $branch_name..."
    
    if git merge "$branch_name" --no-edit 2>/dev/null; then
        echo "✅ Successfully merged $branch_name"
        return 0
    else
        echo "⚠️  Merge failed for $branch_name, attempting conflict resolution..."
        return 1
    fi
}

# Function to resolve conflicts
resolve_conflicts() {
    echo "🔧 Resolving merge conflicts..."
    
    # List of files that commonly have conflicts
    local conflict_files=(
        "package.json"
        "package-lock.json"
        "App.tsx"
        "vite.config.js"
        "netlify.toml"
        "eslint.config.js"
    )
    
    local resolved_count=0
    
    for file in "${conflict_files[@]}"; do
        if [ -f "$file" ] && grep -q "<<<<<<< HEAD" "$file" 2>/dev/null; then
            echo "🔍 Found conflicts in $file"
            if git checkout --ours "$file" 2>/dev/null; then
                git add "$file" 2>/dev/null
                resolved_count=$((resolved_count + 1))
                echo "✅ Resolved conflicts in $file"
            fi
        fi
    done
    
    return $resolved_count
}

# Function to commit resolved conflicts
commit_resolved_conflicts() {
    echo "💾 Committing resolved conflicts..."
    if git commit -m "Resolve merge conflicts" 2>/dev/null; then
        echo "✅ Successfully committed resolved conflicts"
        return 0
    else
        echo "ℹ️  No conflicts to commit"
        return 1
    fi
}

# Main execution
main() {
    echo "🎯 Ultimate Merge Resolver Starting..."
    
    # Check if we're in a git repository
    if ! is_git_repo; then
        echo "❌ Not in a git repository"
        exit 1
    fi
    
    # Get current branch
    current_branch=$(get_current_branch)
    echo "📍 Current branch: $current_branch"
    
    # Checkout main
    if ! checkout_main; then
        echo "❌ Failed to checkout main branch"
        exit 1
    fi
    
    # Fetch latest changes
    if ! fetch_latest; then
        echo "❌ Failed to fetch latest changes"
        exit 1
    fi
    
    # List of branches to merge
    local branches=(
        "origin/cursor/fix-netlify-build-and-merge-to-main-3149"
        "origin/cursor/fix-netlify-build-and-merge-to-main-84b6"
        "origin/cursor/fix-netlify-build-and-merge-to-main-84cc"
    )
    
    local successful_merges=0
    local total_branches=${#branches[@]}
    
    # Process each branch
    for branch in "${branches[@]}"; do
        echo ""
        echo "📦 Processing branch: $branch"
        
        # Try to merge
        if merge_branch "$branch"; then
            successful_merges=$((successful_merges + 1))
        else
            echo "🔧 Attempting conflict resolution for $branch..."
            
            # Resolve conflicts
            if resolve_conflicts; then
                echo "✅ Resolved conflicts in $branch"
                
                # Try to commit resolved conflicts
                if commit_resolved_conflicts; then
                    echo "✅ Successfully resolved and committed conflicts for $branch"
                    successful_merges=$((successful_merges + 1))
                else
                    echo "❌ Failed to commit resolved conflicts for $branch"
                    git merge --abort 2>/dev/null || true
                fi
            else
                echo "ℹ️  No conflicts found for $branch, but merge still failed"
                git merge --abort 2>/dev/null || true
            fi
        fi
    done
    
    # Show results
    echo ""
    echo "📊 Results: $successful_merges/$total_branches branches merged successfully"
    
    # Show final status
    echo ""
    echo "📋 Final git status:"
    git status --short 2>/dev/null || echo "Unable to get git status"
    
    echo ""
    echo "📝 Recent commits:"
    git log --oneline -5 2>/dev/null || echo "Unable to get git log"
    
    echo ""
    echo "🎉 Ultimate Merge Resolver completed!"
    
    if [ $successful_merges -gt 0 ]; then
        echo "✅ Successfully merged $successful_merges branches"
        exit 0
    else
        echo "❌ No branches were merged successfully"
        exit 1
    fi
}

# Run main function
main "$@"
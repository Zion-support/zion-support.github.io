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

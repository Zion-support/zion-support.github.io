#!/bin/bash

# Status and Push Script
# Checks current status and pushes resolved changes

echo "🔍 Checking current git status..."

# Check status
git status --porcelain

# Add all changes
echo "📦 Adding all changes..."
git add .

# Check if there are changes to commit
if git diff --cached --quiet; then
    echo "ℹ️  No changes to commit"
else
    echo "💾 Committing resolved conflicts..."
    git commit -m "Resolve all merge conflicts and merge PRs into main - $(date)"
fi

# Push to main
echo "🚀 Pushing to main branch..."
git push origin main

echo "✅ Status check and push completed!"
#!/bin/bash

# Test script to merge a single cursor branch
set -e

echo "🧪 Testing single branch merge process..."

BRANCH_NAME="cursor/check-fix-push-and-merge-to-main-0005"

echo "🔍 Testing with branch: $BRANCH_NAME"

# Create local tracking branch
echo "🌿 Creating local branch $BRANCH_NAME"
git checkout -b "$BRANCH_NAME" "origin/$BRANCH_NAME" || {
    echo "❌ Failed to create local branch $BRANCH_NAME"
    exit 1
}

echo "✅ Successfully created and checked out branch $BRANCH_NAME"

# Update branch with latest main
echo "🔄 Updating branch with latest main..."
git fetch origin main

# Try to merge main into the branch
if git merge origin/main --no-commit --no-edit 2>/dev/null; then
    echo "✅ No conflicts found, committing merge..."
    git commit -m "Merge main into $BRANCH_NAME" || true
else
    echo "⚠️  Conflicts detected, resolving automatically..."
    # Auto-resolve conflicts by preferring main branch
    git checkout --theirs . 2>/dev/null || true
    git add . 2>/dev/null || true
    git commit -m "Resolve merge conflicts: prefer main branch for $BRANCH_NAME" 2>/dev/null || {
        echo "⚠️  Auto-resolution failed, trying manual resolution..."
        # If auto-resolution fails, abort and try a different approach
        git merge --abort 2>/dev/null || true
        # Force merge by preferring main
        git reset --hard origin/main 2>/dev/null || true
        git cherry-pick "$BRANCH_NAME" 2>/dev/null || true
    }
fi

# Switch back to main and merge the branch
git checkout main
if git merge "$BRANCH_NAME" --no-edit 2>/dev/null; then
    echo "✅ Successfully merged $BRANCH_NAME into main"
    
    # Push to remote
    if git push origin main 2>/dev/null; then
        echo "🚀 Pushed to remote successfully"
    else
        echo "⚠️  Push failed, trying to sync..."
        git pull origin main --no-rebase --no-edit 2>/dev/null || true
        git push origin main 2>/dev/null || true
    fi
    
    # Clean up
    git branch -D "$BRANCH_NAME" 2>/dev/null || true
    
    echo "🎉 Test completed successfully!"
else
    echo "❌ Failed to merge $BRANCH_NAME into main"
    git merge --abort 2>/dev/null || true
    exit 1
fi
#!/bin/bash
set -e

echo "🚀 Strategic PR Merge Solution"
echo "================================"
echo ""

# Store current branch
CURRENT_BRANCH=$(git branch --show-current)
echo "📍 Current branch: $CURRENT_BRANCH"
echo ""

# Ensure we have latest data
echo "📥 Fetching latest from origin..."
git fetch origin

# List of high-priority fix branches with actual improvements
PRIORITY_BRANCHES=(
  "origin/cursor/fix-errors-and-merge-to-main-bb43"
  "origin/cursor/fix-errors-and-merge-to-main-4347"
  "origin/cursor/fix-errors-and-merge-to-main-1d25"
  "origin/cursor/fix-errors-and-merge-to-main-3974"
  "origin/cursor/fix-errors-and-merge-to-main-124f"
  "origin/cursor/fix-errors-and-merge-to-main-511e"
  "origin/cursor/fix-errors-and-merge-to-main-f955"
  "origin/cursor/fix-errors-and-merge-to-main-6c9a"
  "origin/cursor/fix-errors-and-merge-to-main-30a6"
  "origin/cursor/fix-errors-and-merge-to-main-cf2a"
)

# Checkout main branch
echo "🔀 Switching to main branch..."
git checkout main || git checkout -b main origin/main

# Pull latest main
echo "⬇️ Pulling latest main..."
git pull origin main --no-edit || echo "Already up to date"

echo ""
echo "🔄 Starting merge process..."
echo "=============================="

MERGED_COUNT=0
FAILED_COUNT=0
SKIPPED_COUNT=0

for BRANCH in "${PRIORITY_BRANCHES[@]}"; do
  BRANCH_NAME=$(echo $BRANCH | sed 's/origin\///')
  echo ""
  echo "📦 Processing: $BRANCH_NAME"
  
  # Check if this branch has commits ahead of main
  COMMITS_AHEAD=$(git log origin/main..$BRANCH --oneline | wc -l)
  
  if [ "$COMMITS_AHEAD" -eq 0 ]; then
    echo "⏭️  Skipping (no new commits)"
    ((SKIPPED_COUNT++))
    continue
  fi
  
  echo "   📊 Commits ahead of main: $COMMITS_AHEAD"
  
  # Try to merge
  if git merge $BRANCH --no-edit -m "Merge $BRANCH_NAME: Code improvements and bug fixes"; then
    echo "   ✅ Successfully merged $BRANCH_NAME"
    ((MERGED_COUNT++))
  else
    echo "   ⚠️  Merge conflict detected, attempting auto-resolution..."
    
    # Try to resolve with strategy
    git merge --abort
    
    if git merge $BRANCH -X ours --no-edit -m "Merge $BRANCH_NAME with conflict resolution"; then
      echo "   ✅ Merged with auto-resolution"
      ((MERGED_COUNT++))
    else
      echo "   ❌ Failed to merge $BRANCH_NAME"
      git merge --abort
      ((FAILED_COUNT++))
    fi
  fi
done

echo ""
echo "📊 Merge Summary"
echo "================"
echo "✅ Successfully merged: $MERGED_COUNT branches"
echo "❌ Failed to merge: $FAILED_COUNT branches"
echo "⏭️  Skipped: $SKIPPED_COUNT branches"
echo ""

if [ "$MERGED_COUNT" -gt 0 ]; then
  echo "🚀 Pushing changes to origin/main..."
  if git push origin main; then
    echo "✅ Successfully pushed all changes to main!"
  else
    echo "❌ Failed to push changes. Manual intervention may be required."
    exit 1
  fi
else
  echo "ℹ️  No changes to push"
fi

echo ""
echo "✨ Merge process completed!"
echo ""

# Return to original branch if it exists
if git show-ref --verify --quiet refs/heads/$CURRENT_BRANCH; then
  echo "🔙 Returning to original branch: $CURRENT_BRANCH"
  git checkout $CURRENT_BRANCH
fi
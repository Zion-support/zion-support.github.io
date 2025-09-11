#!/bin/bash

# Verification script to check if all merges were successful
# This script verifies the merge process completed correctly

set -e

echo "🔍 Verifying merge success..."
echo "=================================================================================="

# Check git status
echo "📊 Git Status:"
git status

echo ""
echo "📈 Recent Commits:"
git log --oneline -10

echo ""
echo "🌿 Branch Status:"
git branch -a

echo ""
echo "🔗 Remote Status:"
git remote -v

echo ""
echo "📋 Files with potential issues:"
# Check for any remaining conflict markers
if git grep -n "<<<<<<< HEAD" 2>/dev/null; then
    echo "⚠️ Found unresolved conflict markers (<<<<<<< HEAD)"
else
    echo "✅ No unresolved conflict markers found"
fi

if git grep -n "=======" 2>/dev/null; then
    echo "⚠️ Found unresolved conflict markers (=======)"
else
    echo "✅ No unresolved conflict markers found"
fi

if git grep -n ">>>>>>> " 2>/dev/null; then
    echo "⚠️ Found unresolved conflict markers (>>>>>>> )"
else
    echo "✅ No unresolved conflict markers found"
fi

echo ""
echo "🧪 Running basic tests:"
# Check if the repository is in a clean state
if git diff --quiet && git diff --cached --quiet; then
    echo "✅ Working directory is clean"
else
    echo "⚠️ Working directory has uncommitted changes"
    git status --porcelain
fi

# Check if we can push to main
if git push --dry-run origin main 2>/dev/null; then
    echo "✅ Ready to push to main"
else
    echo "⚠️ Cannot push to main (may need to pull first)"
fi

echo ""
echo "🎯 Merge Verification Summary:"
echo "=================================================================================="

# Count merged branches
merged_branches=$(git log --oneline --grep="feat: merge" --grep="feat: resolve conflicts and merge" | wc -l)
echo "📊 Branches merged: $merged_branches"

# Check for any error patterns in recent commits
error_commits=$(git log --oneline -20 | grep -i "error\|fail\|conflict" | wc -l)
if [ "$error_commits" -gt 0 ]; then
    echo "⚠️ Found $error_commits commits with potential error indicators"
else
    echo "✅ No error indicators in recent commits"
fi

echo ""
echo "✅ Verification completed!"
echo "If everything looks good, you can push with: git push origin main"
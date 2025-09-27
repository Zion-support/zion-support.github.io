#!/bin/bash

# Script to verify merge results and provide summary
echo "🔍 Verifying merge results..."
echo "⏰ Started at: $(date)"

# Check current git status
echo "📊 Current Git Status:"
git status

echo ""
echo "📈 Branch Count:"
TOTAL_BRANCHES=$(git branch -r | grep "cursor/check-fix-push-and-merge-to-main" | wc -l)
echo "   Remaining cursor branches: $TOTAL_BRANCHES"

echo ""
echo "📝 Recent Commits:"
git log --oneline -10

echo ""
echo "🔍 Merge Conflicts Check:"
if git status --porcelain | grep -q "UU\|AA\|DD"; then
    echo "   ⚠️  Merge conflicts detected!"
    git status --porcelain | grep "UU\|AA\|DD"
else
    echo "   ✅ No merge conflicts detected"
fi

echo ""
echo "📊 Repository Statistics:"
echo "   Total commits: $(git rev-list --count HEAD)"
echo "   Total branches: $(git branch -r | wc -l)"
echo "   Main branch commits: $(git rev-list --count main)"

echo ""
echo "🎯 Verification completed!"
echo "⏰ Completed at: $(date)"
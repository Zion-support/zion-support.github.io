#!/bin/bash

# Status check script to monitor merge progress
echo "📊 MERGE PROCESS STATUS CHECK"
echo "⏰ Checked at: $(date)"
echo ""

# Check if master script is running
if pgrep -f "master-merge-script" > /dev/null; then
    echo "🔄 Master merge script is RUNNING"
else
    echo "✅ Master merge script has COMPLETED"
fi

# Check remaining branches
REMAINING_BRANCHES=$(git branch -r | grep "cursor/" | wc -l 2>/dev/null || echo "Unknown")
echo "📋 Remaining cursor branches: $REMAINING_BRANCHES"

# Check git status
echo ""
echo "📊 Git Status:"
git status --porcelain 2>/dev/null || echo "Git status unavailable"

# Check recent commits
echo ""
echo "📝 Recent Commits:"
git log --oneline -5 2>/dev/null || echo "Git log unavailable"

# Check build status
echo ""
echo "🔨 Build Status:"
if npm run build > /dev/null 2>&1; then
    echo "✅ Build successful"
else
    echo "❌ Build failed"
fi

echo ""
echo "🎯 Status check completed!"
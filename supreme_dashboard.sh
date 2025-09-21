#!/bin/bash
echo "🚀 SUPREME MERGE STATUS DASHBOARD"
echo "=================================="
echo "⏰ $(date)"
echo ""

# Get branch count
remaining=$(git branch -r | grep -E "(cursor|codex)" | grep -v "backup" | wc -l)
echo "📊 Remaining branches: $remaining"

# Get recent merges
echo "📝 Recent merges:"
git log --oneline -5 | grep -i merge | head -3

# Check processes
echo "🔄 Active processes:"
ps aux | grep python3 | grep merge | wc -l

# Check build status
if [ -d "out" ]; then
    echo "✅ Build output exists"
else
    echo "⚠️ Build output missing"
fi

echo ""
echo "🎯 System Status: SUPREME OPERATIONAL"

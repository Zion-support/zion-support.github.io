#!/bin/bash

# Status report script
echo "=== Git Repository Status Report ==="
echo ""

echo "Current Status:"
echo "Directory: $(pwd)"
echo "Branch: $(git branch --show-current)"
echo "Last commit: $(git log -1 --oneline)"
echo ""

echo "Remote Status:"
echo "Origin URL: $(git remote get-url origin)"
echo "Main branch status:"
git status -sb
echo ""

echo "Recent Commits:"
git log --oneline -10
echo ""

echo "Open Pull Requests:"
curl -s "https://api.github.com/repos/Zion-Holdings/zion.app/pulls?state=open" | grep -o '"title": "[^"]*"' | head -5
echo ""

echo "Repository Size:"
du -sh . 2>/dev/null || echo "Unable to calculate size"
echo ""

echo "File Counts:"
echo "TypeScript files: $(find . -name "*.ts" | wc -l)"
echo "React files: $(find . -name "*.tsx" | wc -l)"
echo "JavaScript files: $(find . -name "*.js" | wc -l)"
echo "Total files: $(find . -type f | wc -l)"
echo ""

echo "Directory Structure:"
ls -la | head -10
echo ""

echo "=== End of Status Report ==="
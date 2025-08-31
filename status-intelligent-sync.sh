#!/bin/bash

# Intelligent Sync Automation Status Script
# This script shows the status of the intelligent sync automation system

echo "🔍 Intelligent Sync Automation System Status"
echo "============================================"

# Change to project directory
cd "$(dirname "$0")"

# Check PM2 status
echo ""
echo "📊 PM2 Process Status:"
pm2 list | grep -E "(intelligent-sync|Name|Status)"

# Check log files
echo ""
echo "📝 Recent Logs:"
echo "   Main Automation: tail -n 20 logs/intelligent-sync.log"
echo "   PM2 Logs: pm2 logs intelligent-sync-automation --lines 20"

# Check git status
echo ""
echo "🔧 Git Status:"
git status --porcelain | head -10

# Check for rebase issues
if git status | grep -q "interactive rebase in progress"; then
    echo "⚠️  REBASE IN PROGRESS - Use 'node intelligent-sync-automation.js resolve' to fix"
fi

if git status | grep -q "You have unmerged paths"; then
    echo "⚠️  MERGE CONFLICTS DETECTED - Use 'node intelligent-sync-automation.js resolve' to fix"
fi

# Check disk space
echo ""
echo "💾 Disk Space:"
df -h . | tail -1

echo ""
echo "🎯 Quick Commands:"
echo "   Start: ./start-intelligent-sync.sh"
echo "   Stop:  ./stop-intelligent-sync.sh"
echo "   Restart: ./restart-intelligent-sync.sh"
echo "   Manual Sync: node intelligent-sync-automation.js sync"
echo "   Health Check: node intelligent-sync-automation.js health"
echo "   Resolve Conflicts: node intelligent-sync-automation.js resolve"

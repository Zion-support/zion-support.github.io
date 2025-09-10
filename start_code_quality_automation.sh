#!/bin/bash

# Code Quality Automation Startup Script
# This script starts all PM2 automation processes for maintaining code quality

echo "🚀 Starting Code Quality Automation System..."
echo "=============================================="

# Check if PM2 is installed
if ! command -v pm2 &> /dev/null; then
    echo "❌ PM2 is not installed. Installing PM2..."
    npm install -g pm2
fi

# Check if we're in the right directory
if [ ! -f "ecosystem.config.cjs" ]; then
    echo "❌ Please run this script from the project root directory"
    exit 1
fi

# Stop any existing PM2 processes
echo "🛑 Stopping existing PM2 processes..."
pm2 stop all 2>/dev/null || true
pm2 delete all 2>/dev/null || true

# Start the automation ecosystem
echo "🔧 Starting PM2 automation ecosystem..."
pm2 start ecosystem.config.cjs

# Wait a moment for processes to start
sleep 3

# Show status
echo "📊 PM2 Status:"
pm2 status

echo ""
echo "✅ Code Quality Automation System Started!"
echo ""
echo "🔍 Available Commands:"
echo "  pm2 status                    - View all automation processes"
echo "  pm2 logs                      - View all logs"
echo "  pm2 logs [process-name]       - View specific process logs"
echo "  pm2 restart [process-name]    - Restart specific process"
echo "  pm2 stop all                  - Stop all automations"
echo "  pm2 delete all                - Remove all automations"
echo ""
echo "📋 Automation Processes:"
echo "  • eslint-auto-fixer           - Fixes ESLint errors every 15 min"
echo "  • typescript-error-fixer      - Fixes TypeScript errors every 30 min"
echo "  • unused-import-cleaner       - Removes unused imports every hour"
echo "  • comprehensive-code-quality-automator - Full quality check every 2 hours"
echo ""
echo "📈 Monitor Progress:"
echo "  • Check individual reports in project root"
echo "  • View PM2 logs for real-time updates"
echo "  • Run manual quality checks with: node scripts/automation/comprehensive-code-quality-automator.cjs"
echo ""
echo "🎯 Manual Quality Checks:"
echo "  • Quick Fix: node scripts/automation/comprehensive-code-quality-automator.cjs --quick"
echo "  • Full Check: node scripts/automation/comprehensive-code-quality-automator.cjs --full"
echo ""
echo "🚀 Your code quality automation is now running automatically!"
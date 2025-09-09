#!/bin/bash

# 🚀 Zion Tech Group - Error Fixing Automation Startup Script
# This script launches the comprehensive PM2 automation system to automatically fix project errors

echo "🚀 Starting Zion Tech Group Error Fixing Automation System..."
echo "=================================================="

# Check if PM2 is installed
if ! command -v pm2 &> /dev/null; then
    echo "❌ PM2 is not installed. Installing PM2 globally..."
    npm install -g pm2
fi

# Check if we're in the right directory
if [ ! -f "package.json" ]; then
    echo "❌ Error: package.json not found. Please run this script from the project root."
    exit 1
fi

# Install dependencies if needed
if [ ! -d "node_modules" ]; then
    echo "📦 Installing project dependencies..."
    npm install
fi

# Stop any existing PM2 processes
echo "🛑 Stopping existing PM2 processes..."
pm2 stop all 2>/dev/null || true
pm2 delete all 2>/dev/null || true

# Start the enhanced automation system
echo "🚀 Starting Enhanced PM2 Automation System..."
pm2 start ecosystem.enhanced.cjs

# Wait a moment for processes to start
sleep 3

# Show status
echo "📊 PM2 Status:"
pm2 status

# Show logs for key automation processes
echo ""
echo "📋 Key Automation Processes:"
echo "=================================================="
echo "🔧 Code Quality Automator (runs every 10 min)"
echo "🔧 TypeScript Error Fixer (runs every 15 min)"
echo "🧹 Unused Import Cleaner (runs every 30 min)"
echo "🧠 Intelligent Predictive Monitor (runs every 5 min)"
echo "🤖 AI Code Optimizer (runs every hour)"
echo "📦 Smart Dependency Manager (runs every 6 hours)"

echo ""
echo "✅ Error Fixing Automation System is now running!"
echo ""
echo "💡 Useful Commands:"
echo "   pm2 status                    - View all processes"
echo "   pm2 logs                      - View all logs"
echo "   pm2 logs code-quality-automator - View quality automator logs"
echo "   pm2 logs typescript-error-fixer - View TypeScript fixer logs"
echo "   pm2 logs unused-import-cleaner - View import cleaner logs"
echo "   pm2 restart all              - Restart all automations"
echo "   pm2 stop all                 - Stop all automations"
echo ""
echo "📊 Reports will be generated in the project root:"
echo "   - code-quality-automator-report.json"
echo "   - typescript-error-fixer-report.json"
echo "   - unused-import-cleaner-report.json"
echo ""
echo "🎯 The system will automatically:"
echo "   - Fix TypeScript compilation errors"
echo "   - Remove unused imports"
echo "   - Apply ESLint auto-fixes"
echo "   - Monitor code quality continuously"
echo "   - Generate detailed reports"
echo ""
echo "🚀 Automation is now active and will run automatically!"
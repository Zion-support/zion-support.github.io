#!/bin/bash

# Error Fixing Automation Startup Script
# This script starts all PM2 error fixing automations

set -e

echo "🚀 Starting Error Fixing Automation System..."
echo "=============================================="

# Check if PM2 is installed
if ! command -v pm2 &> /dev/null; then
    echo "❌ PM2 is not installed. Installing PM2..."
    npm install -g pm2
fi

# Check if we're in the right directory
if [ ! -f "ecosystem-error-fixing.config.cjs" ]; then
    echo "❌ ecosystem-error-fixing.config.cjs not found. Please run this script from the project root."
    exit 1
fi

# Create necessary directories
echo "📁 Creating necessary directories..."
mkdir -p logs
mkdir -p automation-reports
mkdir -p error-reports

# Stop any existing PM2 processes
echo "🛑 Stopping existing PM2 processes..."
pm2 stop all 2>/dev/null || true
pm2 delete all 2>/dev/null || true

# Start the error fixing automation ecosystem
echo "🚀 Starting Error Fixing Automation Ecosystem..."
pm2 start ecosystem-error-fixing.config.cjs

# Wait a moment for processes to start
sleep 3

# Show status
echo "📊 PM2 Status:"
pm2 status

echo ""
echo "🎉 Error Fixing Automation System Started!"
echo "=============================================="
echo "📋 Available PM2 Applications:"
echo "  • comprehensive-error-fixer"
echo "  • typescript-error-monitor"
echo "  • eslint-error-cleaner"
echo "  • build-error-detector"
echo "  • dependency-error-resolver"
echo "  • config-error-fixer"
echo "  • error-prevention-monitor"
echo "  • error-analytics-dashboard"
echo "  • auto-recovery-manager"
echo "  • critical-error-alert-system"
echo ""
echo "📖 Useful Commands:"
echo "  • pm2 logs                    - View all logs"
echo "  • pm2 logs [app-name]         - View specific app logs"
echo "  • pm2 restart [app-name]      - Restart specific app"
echo "  • pm2 stop [app-name]         - Stop specific app"
echo "  • pm2 delete [app-name]       - Delete specific app"
echo "  • pm2 monit                   - Monitor all processes"
echo "  • pm2 status                  - Show status"
echo ""
echo "📁 Reports and Logs:"
echo "  • automation-reports/         - Automation reports"
echo "  • error-reports/              - Error reports"
echo "  • logs/                       - Process logs"
echo ""
echo "🔄 The system will automatically:"
echo "  • Fix TypeScript errors"
echo "  • Clean ESLint issues"
echo "  • Resolve build problems"
echo "  • Fix dependency conflicts"
echo "  • Monitor for critical errors"
echo "  • Generate analytics reports"
echo "  • Auto-recover from issues"
echo ""
echo "✅ Automation system is now running and monitoring your project!"
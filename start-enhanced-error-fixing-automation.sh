#!/bin/bash

# Enhanced Error Fixing Automation Startup Script
# This script starts all enhanced PM2 error fixing automations

set -e

echo "🚀 Starting Enhanced Error Fixing Automation System..."
echo "======================================================"

# Check if PM2 is installed
if ! command -v pm2 &> /dev/null; then
    echo "❌ PM2 is not installed. Installing PM2..."
    npm install -g pm2
fi

# Check if we're in the right directory
if [ ! -f "ecosystem-enhanced-error-fixing.config.cjs" ]; then
    echo "❌ ecosystem-enhanced-error-fixing.config.cjs not found. Please run this script from the project root."
    exit 1
fi

# Create necessary directories
echo "📁 Creating necessary directories..."
mkdir -p logs
mkdir -p automation-reports
mkdir -p error-reports
mkdir -p enhanced-reports

# Stop any existing PM2 processes
echo "🛑 Stopping existing PM2 processes..."
pm2 stop all 2>/dev/null || true
pm2 delete all 2>/dev/null || true

# Start the enhanced error fixing automation ecosystem
echo "🚀 Starting Enhanced Error Fixing Automation Ecosystem..."
pm2 start ecosystem-enhanced-error-fixing.config.cjs

# Wait a moment for processes to start
sleep 5

# Show status
echo "📊 PM2 Status:"
pm2 status

echo ""
echo "🎉 Enhanced Error Fixing Automation System Started!"
echo "======================================================"
echo "📋 Available Enhanced PM2 Applications:"
echo "  • enhanced-comprehensive-error-fixer"
echo "  • advanced-typescript-error-fixer"
echo "  • intelligent-eslint-error-cleaner"
echo "  • smart-build-error-detector"
echo "  • intelligent-dependency-error-resolver"
echo "  • advanced-config-error-fixer"
echo "  • enhanced-error-prevention-monitor"
echo "  • advanced-error-analytics-dashboard"
echo "  • intelligent-auto-recovery-manager"
echo "  • critical-error-alert-system"
echo "  • jsx-error-fixer"
echo "  • ai-code-quality-enhancer"
echo "  • predictive-issue-detection"
echo "  • targeted-error-resolution"
echo ""
echo "📖 Useful Commands:"
echo "  • pm2 logs                                    - View all logs"
echo "  • pm2 logs [app-name]                         - View specific app logs"
echo "  • pm2 restart [app-name]                      - Restart specific app"
echo "  • pm2 stop [app-name]                         - Stop specific app"
echo "  • pm2 delete [app-name]                       - Delete specific app"
echo "  • pm2 monit                                   - Monitor all processes"
echo "  • pm2 status                                  - Show status"
echo "  • pm2 flush                                   - Clear all logs"
echo ""
echo "📁 Reports and Logs:"
echo "  • automation-reports/                         - Automation reports"
echo "  • error-reports/                              - Error reports"
echo "  • enhanced-reports/                           - Enhanced reports"
echo "  • logs/                                       - Process logs"
echo ""
echo "🔄 The Enhanced System will automatically:"
echo "  • Fix TypeScript errors with advanced algorithms"
echo "  • Clean ESLint issues intelligently"
echo "  • Resolve build problems proactively"
echo "  • Fix dependency conflicts smartly"
echo "  • Monitor for critical errors in real-time"
echo "  • Generate comprehensive analytics reports"
echo "  • Auto-recover from issues intelligently"
echo "  • Fix JSX syntax errors automatically"
echo "  • Enhance code quality with AI assistance"
echo "  • Detect issues before they become problems"
echo "  • Target specific error patterns"
echo ""
echo "⚡ Enhanced Features:"
echo "  • Real-time error monitoring"
echo "  • AI-powered code improvements"
echo "  • Predictive issue detection"
echo "  • Intelligent error resolution"
echo "  • Comprehensive reporting"
echo "  • Automated recovery systems"
echo "  • Advanced analytics dashboard"
echo ""
echo "✅ Enhanced automation system is now running and monitoring your project!"
echo ""
echo "🔍 To monitor progress:"
echo "  • Check logs: pm2 logs"
echo "  • View status: pm2 status"
echo "  • Monitor real-time: pm2 monit"
echo ""
echo "📈 Error fixing progress will be reported in the logs and reports directories."
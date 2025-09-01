#!/bin/bash

# Error Fixing Automation Startup Script
# Starts all PM2 error fixing automations for the Zion Tech Group project

set -e

echo "🚀 Starting Error Fixing Automation System..."
echo "📁 Project: Zion Tech Group"
echo "⏰ Timestamp: $(date)"
echo ""

# Ensure we're in the project root
cd "$(dirname "$0")"

# Create necessary directories
echo "📁 Creating log directories..."
mkdir -p automation/logs
mkdir -p automation/reports
mkdir -p automation/backups

# Check if PM2 is installed
if ! command -v pm2 &> /dev/null; then
    echo "❌ PM2 is not installed. Installing PM2..."
    npm install -g pm2
fi

# Install PM2 logrotate for log management
echo "📊 Setting up PM2 logrotate..."
pm2 install pm2-logrotate || true
pm2 set pm2-logrotate:max_size 10M
pm2 set pm2-logrotate:retain 30
pm2 set pm2-logrotate:compress true
pm2 set pm2-logrotate:workerInterval 60
pm2 set pm2-logrotate:rotateInterval '0 0 * * *'

# Stop any existing error fixing processes
echo "🛑 Stopping existing error fixing processes..."
pm2 stop ecosystem-error-fixing.config.cjs || true
pm2 delete ecosystem-error-fixing.config.cjs || true

# Start the error fixing automation system
echo "🚀 Starting Error Fixing Automation System..."
pm2 start ecosystem-error-fixing.config.cjs --update-env

# Wait a moment for processes to start
sleep 5

# Show status
echo ""
echo "📊 PM2 Status:"
pm2 status

echo ""
echo "📋 Error Fixing Processes Started:"
echo "  ✅ Master Error Detector & Fixer (5min intervals)"
echo "  ✅ Enhanced TypeScript Error Fixer (10min intervals)"
echo "  ✅ Build Error Detector (15min intervals)"
echo "  ✅ ESLint Error Cleaner (30min intervals)"
echo "  ✅ Dependency Error Resolver (1hr intervals)"
echo "  ✅ Enhanced Error Fixer (20min intervals)"
echo "  ✅ Error Prevention Monitor (40min intervals)"
echo "  ✅ Critical Error Alert System (5min intervals)"
echo "  ✅ Error Analytics Dashboard (2hr intervals)"
echo "  ✅ Auto Recovery Manager (10min intervals)"
echo "  ✅ Code Quality Automation (1hr intervals)"
echo "  ✅ Intelligent Automation Orchestrator (5min intervals)"
echo "  ✅ Project Health Monitor (30min intervals)"
echo "  ✅ Unified Automation Dashboard (2hr intervals)"

echo ""
echo "📊 Log Files Location:"
echo "  📁 ./automation/logs/"

echo ""
echo "🔧 Useful Commands:"
echo "  📊 View status: pm2 status"
echo "  📋 View logs: pm2 logs"
echo "  🔄 Restart: pm2 restart ecosystem-error-fixing.config.cjs"
echo "  🛑 Stop: pm2 stop ecosystem-error-fixing.config.cjs"
echo "  📊 Monitor: pm2 monit"

echo ""
echo "✅ Error Fixing Automation System Started Successfully!"
echo "🔄 The system will now continuously monitor and fix project errors"
echo "📊 Check logs in ./automation/logs/ for detailed information"
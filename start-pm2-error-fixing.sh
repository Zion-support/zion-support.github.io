#!/bin/bash

echo "🚀 Starting PM2 Error Fixing Automation System..."

# Create logs directory if it doesn't exist
mkdir -p logs
mkdir -p .pm2

# Install PM2 if not already installed
if ! command -v pm2 &> /dev/null; then
    echo "📦 Installing PM2..."
    npm install -g pm2
fi

# Install PM2 logrotate module
echo "📦 Installing PM2 logrotate..."
pm2 install pm2-logrotate || true

# Configure PM2 logrotate
echo "⚙️  Configuring PM2 logrotate..."
pm2 set pm2-logrotate:max_size 10M
pm2 set pm2-logrotate:retain 30
pm2 set pm2-logrotate:compress true
pm2 set pm2-logrotate:workerInterval 60
pm2 set pm2-logrotate:rotateInterval '0 0 * * *'

# Stop any existing PM2 processes
echo "🛑 Stopping existing PM2 processes..."
pm2 stop all || true
pm2 delete all || true

# Start the enhanced error fixing automation
echo "🚀 Starting enhanced error fixing automation..."
pm2 start ecosystem-enhanced-error-fixing.cjs --update-env

# Start the original error fixing automation as backup
echo "🚀 Starting backup error fixing automation..."
pm2 start ecosystem-error-fixing.config.cjs --update-env

# Show PM2 status
echo "📊 PM2 Status:"
pm2 status

# Show PM2 logs
echo "📋 PM2 Logs (last 50 lines):"
pm2 logs --lines 50

echo "✅ PM2 Error Fixing Automation System started successfully!"
echo ""
echo "📋 Available commands:"
echo "  pm2 status                    - Show status of all processes"
echo "  pm2 logs                      - Show logs from all processes"
echo "  pm2 logs enhanced-error-fixer - Show logs from enhanced error fixer"
echo "  pm2 restart all               - Restart all processes"
echo "  pm2 stop all                  - Stop all processes"
echo "  pm2 delete all                - Delete all processes"
echo ""
echo "🔧 Automation will run automatically based on the configured schedules:"
echo "  - Enhanced Error Fixer: Every 15 minutes"
echo "  - Syntax Error Fixer: Every 10 minutes"
echo "  - Import Cleaner: Every 20 minutes"
echo "  - TypeScript Error Monitor: Every 15 minutes"
echo "  - ESLint Error Cleaner: Every 20 minutes"
echo "  - Build Error Detector: Every 4 hours"
echo "  - Error Prevention Monitor: Every 10 minutes"
echo "  - Auto-Recovery Manager: Every 5 minutes"
echo "  - Critical Error Alert System: Every minute"
echo ""
echo "📊 Error reports will be saved to:"
echo "  - enhanced-error-fixer-report.json"
echo "  - comprehensive-error-fixer-report.json"
echo "  - logs/ directory"
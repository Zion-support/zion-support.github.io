#!/bin/bash

echo "🚀 Starting PM2 Error Automation System..."

# Create logs directory if it doesn't exist
mkdir -p automation/logs

# Check if PM2 is installed
if ! command -v pm2 &> /dev/null; then
    echo "❌ PM2 is not installed. Installing PM2..."
    npm install -g pm2
fi

# Stop any existing PM2 processes
echo "🛑 Stopping existing PM2 processes..."
pm2 stop all 2>/dev/null || true
pm2 delete all 2>/dev/null || true

# Install PM2 logrotate if not already installed
echo "📦 Setting up PM2 logrotate..."
pm2 install pm2-logrotate 2>/dev/null || true
pm2 set pm2-logrotate:max_size 10M
pm2 set pm2-logrotate:retain 30
pm2 set pm2-logrotate:compress true
pm2 set pm2-logrotate:workerInterval 60
pm2 set pm2-logrotate:rotateInterval '0 0 * * *'

# Start the error automation system
echo "🎯 Starting PM2 Error Automation System..."
pm2 start ecosystem-error-automation.config.cjs --update-env

# Save PM2 configuration
echo "💾 Saving PM2 configuration..."
pm2 save

# Show status
echo "📊 PM2 Status:"
pm2 status

echo "📋 PM2 Error Automation System started successfully!"
echo ""
echo "🔧 Available commands:"
echo "  pm2 status                    - Show all processes"
echo "  pm2 logs                      - Show all logs"
echo "  pm2 logs pm2-error-automation-orchestrator - Show orchestrator logs"
echo "  pm2 restart all               - Restart all processes"
echo "  pm2 stop all                  - Stop all processes"
echo "  pm2 delete all                - Delete all processes"
echo ""
echo "📁 Log files are stored in: automation/logs/"
echo "📊 Reports are saved in the project root"
echo ""
echo "🎉 Error automation is now running and will automatically:"
echo "   - Detect errors every 10 minutes"
echo "   - Fix errors every 15 minutes"
echo "   - Monitor critical issues every 5 minutes"
echo "   - Generate reports and analytics"
echo ""
echo "✅ System is ready!"
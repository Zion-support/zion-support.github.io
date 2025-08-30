#!/bin/bash

echo "🚀 Starting Zion Tech Group Error Automation System..."

# Check if PM2 is installed
if ! command -v pm2 &> /dev/null; then
    echo "❌ PM2 is not installed. Installing PM2..."
    npm install -g pm2
fi

# Check if PM2 is running
if ! pm2 ping &> /dev/null; then
    echo "🔄 Starting PM2 daemon..."
    pm2 start
fi

# Stop any existing processes
echo "🛑 Stopping existing processes..."
pm2 stop all 2>/dev/null || true
pm2 delete all 2>/dev/null || true

# Start the automation dashboard first
echo "📊 Starting Automation Dashboard..."
pm2 start ecosystem.config.cjs --only automation-dashboard

# Wait a moment for dashboard to initialize
sleep 5

# Start all other automations
echo "🚀 Starting all error fixing automations..."
pm2 start ecosystem.config.cjs --ignore automation-dashboard

# Save PM2 configuration
echo "💾 Saving PM2 configuration..."
pm2 save

# Display status
echo "📊 PM2 Status:"
pm2 list

echo "✅ Error Automation System started successfully!"
echo ""
echo "🔧 Available automations:"
echo "  • Enhanced Error Fixer (every 15 minutes)"
echo "  • Comprehensive Error Automation (every 2 hours)"
echo "  • Console Error Fixer (every 10 minutes)"
echo "  • TypeScript Syntax Fixer (every 30 minutes)"
echo "  • Smart Dependency Manager (every 6 hours)"
echo ""
echo "📊 Monitor with: pm2 monit"
echo "📋 View logs with: pm2 logs"
echo "🛑 Stop all with: pm2 stop all"
echo "🔄 Restart all with: pm2 restart all"
echo ""
echo "🎯 The system will automatically fix errors as they occur!"
#!/bin/bash

# 🚀 Zion Tech Group - Error Fixing Automation Startup Script
# This script initializes all PM2 automations for automatic error fixing

echo "🚀 Starting Zion Tech Group Error Fixing Automation System..."

# Check if PM2 is installed
if ! command -v pm2 &> /dev/null; then
    echo "❌ PM2 is not installed. Installing PM2 globally..."
    npm install -g pm2
fi

# Check if we're in the right directory
if [ ! -f "ecosystem.config.cjs" ]; then
    echo "❌ Error: ecosystem.config.cjs not found. Please run this script from the project root."
    exit 1
fi

# Create logs directory if it doesn't exist
mkdir -p logs

echo "📁 Created logs directory"

# Stop any existing PM2 processes
echo "🛑 Stopping existing PM2 processes..."
pm2 stop all 2>/dev/null || true
pm2 delete all 2>/dev/null || true

# Start all automations from ecosystem config
echo "🚀 Starting PM2 automations from ecosystem.config.cjs..."
pm2 start ecosystem.config.cjs

# Save PM2 configuration
echo "💾 Saving PM2 configuration..."
pm2 save

# Set PM2 to start on system boot
echo "🔧 Setting PM2 to start on system boot..."
pm2 startup

echo ""
echo "✅ Zion Tech Group Error Fixing Automation System Started Successfully!"
echo ""
echo "📊 PM2 Status:"
pm2 list

echo ""
echo "🔍 Available PM2 Commands:"
echo "  pm2 list                    - Show all running processes"
echo "  pm2 logs                    - Show logs for all processes"
echo "  pm2 logs [process-name]     - Show logs for specific process"
echo "  pm2 restart [process-name]  - Restart specific process"
echo "  pm2 stop [process-name]     - Stop specific process"
echo "  pm2 delete [process-name]   - Delete specific process"
echo "  pm2 stop all                - Stop all processes"
echo "  pm2 delete all              - Delete all processes"
echo "  pm2 save                    - Save current PM2 configuration"
echo "  pm2 startup                 - Generate startup script"
echo ""
echo "🏥 Key Automation Processes:"
echo "  project-health-monitor      - Monitors overall project health (every 5 min)"
echo "  comprehensive-error-fixer   - Fixes TypeScript/import errors (every 10 min)"
echo "  lucide-react-icon-fixer    - Fixes icon import issues (every 30 min)"
echo "  console-error-fixer        - Fixes console errors (every 15 min)"
echo "  intelligent-predictive-monitor - Predictive monitoring (every 5 min)"
echo ""
echo "📁 Logs are stored in the 'logs/' directory"
echo "📊 Health reports are generated automatically"
echo ""
echo "🎯 The system will now automatically:"
echo "  • Monitor project health every 5 minutes"
echo "  • Fix TypeScript errors every 10 minutes"
echo "  • Fix icon import issues every 30 minutes"
echo "  • Generate comprehensive health reports"
echo "  • Commit fixes automatically when successful"
echo ""
echo "🚀 Automation system is now running in the background!"
echo "Check 'pm2 list' to see all running processes."
#!/bin/bash

echo "🚀 Starting Zion Tech Group PM2 Automations..."

# Check if PM2 is installed
if ! command -v pm2 &> /dev/null; then
    echo "❌ PM2 is not installed. Installing PM2..."
    npm install -g pm2
fi

# Stop any existing PM2 processes
echo "🛑 Stopping existing PM2 processes..."
pm2 stop all
pm2 delete all

# Start the automations using the ecosystem file
echo "🚀 Starting PM2 automations from ecosystem.config.cjs..."
pm2 start ecosystem.config.cjs

# Save PM2 configuration
echo "💾 Saving PM2 configuration..."
pm2 save

# Show status
echo "📊 PM2 Status:"
pm2 status

echo "✅ All automations started successfully!"
echo ""
echo "🔧 Available automations:"
echo "  - Enhanced Error Fixer (runs every 10 minutes)"
echo "  - Project Health Monitor (runs every 5 minutes)"
echo "  - Intelligent Predictive Monitor (runs every 5 minutes)"
echo "  - Console Error Fixer (runs every 15 minutes)"
echo "  - Link Checker (runs every 30 minutes)"
echo "  - Security Audit (runs every 4 hours)"
echo "  - Quality Checks (runs every 3 hours)"
echo ""
echo "📋 Useful commands:"
echo "  pm2 logs - View all logs"
echo "  pm2 logs enhanced-error-fixer - View error fixer logs"
echo "  pm2 logs project-health-monitor - View health monitor logs"
echo "  pm2 restart all - Restart all automations"
echo "  pm2 stop all - Stop all automations"
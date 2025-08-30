#!/bin/bash

# 🚀 Error Prevention Automation Startup Script
# This script starts all PM2 automation processes for error prevention

echo "🚀 Starting Error Prevention Automation System..."

# Check if PM2 is installed
if ! command -v pm2 &> /dev/null; then
    echo "❌ PM2 is not installed. Installing PM2..."
    npm install -g pm2
fi

# Navigate to project directory
cd "$(dirname "$0")"

# Start all PM2 processes
echo "📱 Starting PM2 processes..."

# Start the ecosystem
pm2 start ecosystem.config.cjs

# Save PM2 configuration
pm2 save

# Set PM2 to start on system boot
pm2 startup

echo "✅ All error prevention automations started successfully!"
echo ""
echo "📊 PM2 Status:"
pm2 status

echo ""
echo "🔍 Monitoring logs:"
echo "  - pm2 logs comprehensive-error-fixer    # View comprehensive error fixer logs"
echo "  - pm2 logs typescript-error-fixer      # View TypeScript error fixer logs"
echo "  - pm2 logs build-error-prevention      # View build error prevention logs"
echo ""
echo "🛑 To stop all automations: pm2 stop all"
echo "🔄 To restart all automations: pm2 restart all"
echo "🗑️ To delete all automations: pm2 delete all"
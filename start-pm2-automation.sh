#!/bin/bash

# PM2 Error Fixing Automation Startup Script
echo "🚀 Starting PM2 Error Fixing Automation System..."

# Create necessary directories
mkdir -p logs backups/merge-conflicts

# Make scripts executable
chmod +x scripts/*.cjs
chmod +x *.sh

# Install PM2 if not installed
if ! command -v pm2 &> /dev/null; then
    echo "📦 Installing PM2..."
    npm install -g pm2
fi

# Stop any existing PM2 processes
echo "🔄 Stopping existing PM2 processes..."
pm2 delete all 2>/dev/null || true

# Start the PM2 ecosystem
echo "🏁 Starting PM2 ecosystem..."
pm2 start ecosystem-enhanced.config.cjs

# Install PM2 modules for enhanced monitoring
echo "📊 Installing PM2 monitoring modules..."
pm2 install pm2-logrotate
pm2 install pm2-auto-pull

# Configure log rotation
pm2 set pm2-logrotate:max_size 10M
pm2 set pm2-logrotate:retain 7
pm2 set pm2-logrotate:compress true

# Save PM2 configuration
pm2 save

# Set up PM2 to start on boot (optional)
echo "💾 Setting up PM2 startup..."
pm2 startup

echo "✅ PM2 Error Fixing Automation System started successfully!"
echo ""
echo "📊 Monitor with: pm2 monit"
echo "📋 View logs with: pm2 logs"
echo "🔍 Check status with: pm2 status"
echo "📄 View reports in: ./logs/"
echo ""
echo "🤖 Active Services:"
echo "  - error-monitor: Checks for build, lint, and TypeScript errors every 5 minutes"
echo "  - syntax-fixer: Automatically fixes common syntax errors every 10 minutes"
echo "  - build-health-check: Monitors build health and dependencies every 15 minutes"
echo "  - merge-conflict-resolver: Resolves merge conflicts automatically every 30 minutes"
echo ""
echo "🔧 Manual commands:"
echo "  - Restart all: pm2 restart all"
echo "  - Stop all: pm2 stop all"
echo "  - View specific logs: pm2 logs [service-name]"
echo "  - Trigger immediate fixes: pm2 restart syntax-fixer"
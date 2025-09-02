#!/bin/bash

echo "🚀 Starting Zion Tech PM2 Automation System..."

# Create logs directory if it doesn't exist
mkdir -p logs

# Install PM2 globally if not already installed
if ! command -v pm2 &> /dev/null; then
    echo "📦 Installing PM2 globally..."
    npm install -g pm2
fi

# Install PM2 logrotate module
echo "📋 Installing PM2 logrotate module..."
pm2 install pm2-logrotate

# Configure logrotate
pm2 set pm2-logrotate:max_size 10M
pm2 set pm2-logrotate:retain 30
pm2 set pm2-logrotate:compress true
pm2 set pm2-logrotate:dateFormat YYYY-MM-DD_HH-mm-ss

# Start the automation ecosystem
echo "🔧 Starting PM2 automation ecosystem..."
pm2 start ecosystem.config.cjs

# Save PM2 configuration for auto-restart
echo "💾 Saving PM2 configuration..."
pm2 save

# Setup PM2 to start on system boot
echo "🔄 Setting up PM2 startup script..."
pm2 startup

echo "✅ Zion Tech PM2 Automation System is now running!"
echo "📊 Monitor with: pm2 monit"
echo "📝 View logs with: pm2 logs"
echo "🛑 Stop with: pm2 stop all"
echo "🔄 Restart with: pm2 restart all"

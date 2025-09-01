#!/bin/bash

echo "🛡️ Starting Error Prevention & Automation System"
echo "=================================================="

# Check if PM2 is installed
if ! command -v pm2 &> /dev/null; then
    echo "❌ PM2 is not installed. Installing PM2..."
    npm install -g pm2
fi

# Create logs directory
echo "📁 Creating logs directory..."
mkdir -p logs

# Install PM2 logrotate module
echo "🔄 Installing PM2 logrotate module..."
pm2 install pm2-logrotate || true
pm2 set pm2-logrotate:max_size 10M
pm2 set pm2-logrotate:retain 30
pm2 set pm2-logrotate:compress true
pm2 set pm2-logrotate:workerInterval 60
pm2 set pm2-logrotate:rotateInterval '0 0 * * *'

# Stop any existing processes
echo "🛑 Stopping existing PM2 processes..."
pm2 stop ecosystem.error-prevention.cjs || true
pm2 delete ecosystem.error-prevention.cjs || true

# Start the error prevention system
echo "🚀 Starting Error Prevention System..."
pm2 start ecosystem.error-prevention.cjs --update-env

# Save PM2 configuration
echo "💾 Saving PM2 configuration..."
pm2 save

# Setup PM2 startup script
echo "🔧 Setting up PM2 startup script..."
pm2 startup

# Show status
echo "📊 PM2 Status:"
pm2 status

echo ""
echo "✅ Error Prevention System started successfully!"
echo ""
echo "📋 Available commands:"
echo "  pm2 status                    - Show process status"
echo "  pm2 logs                      - Show all logs"
echo "  pm2 logs error-prevention-monitor - Show error prevention logs"
echo "  pm2 restart ecosystem.error-prevention.cjs - Restart all processes"
echo "  pm2 stop ecosystem.error-prevention.cjs   - Stop all processes"
echo ""
echo "📁 Logs are stored in the 'logs/' directory"
echo "🔄 Processes will automatically restart every 1-8 hours based on their schedule"
echo ""
echo "🔍 Monitor the system with: pm2 monit"
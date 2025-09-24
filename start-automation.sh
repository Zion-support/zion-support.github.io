#!/bin/bash

echo "🚀 Starting PM2 Automation System..."

# Create logs directory
mkdir -p logs

# Make scripts executable
chmod +x scripts/*.js

# Start PM2 processes
pm2 start ecosystem.config.cjs

# Save PM2 configuration
pm2 save

# Set up PM2 to start on system boot
pm2 startup

echo "✅ PM2 Automation System started successfully!"
echo "📊 Monitor status with: pm2 status"
echo "📝 View logs with: pm2 logs"
echo "🛑 Stop with: pm2 stop all"

#!/bin/bash

# PM2 Automation Startup Script
# This script starts all PM2 processes for error monitoring and automation

echo "Starting PM2 Automation System..."

# Create logs directory
mkdir -p automation/logs

# Install PM2 if not already installed
if ! command -v pm2 &> /dev/null; then
    echo "Installing PM2..."
    npm install -g pm2
fi

# Stop any existing PM2 processes
echo "Stopping existing PM2 processes..."
pm2 stop all 2>/dev/null || true
pm2 delete all 2>/dev/null || true

# Start PM2 ecosystem
echo "Starting PM2 ecosystem..."
pm2 start ecosystem.config.cjs

# Save PM2 configuration
pm2 save

# Setup PM2 to start on system boot
pm2 startup

# Install PM2 logrotate
echo "Setting up PM2 logrotate..."
pm2 install pm2-logrotate
pm2 set pm2-logrotate:max_size 10M
pm2 set pm2-logrotate:retain 30
pm2 set pm2-logrotate:compress true
pm2 set pm2-logrotate:workerInterval 60
pm2 set pm2-logrotate:rotateInterval '0 0 * * *'

# Show PM2 status
echo "PM2 Status:"
pm2 status

echo "PM2 Automation System started successfully!"
echo "Monitor logs with: pm2 logs"
echo "Check status with: pm2 status"
echo "Stop all with: pm2 stop all"
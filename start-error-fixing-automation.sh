#!/bin/bash

# Error Fixing Automation Startup Script
# This script starts all PM2 error fixing automations

echo "Starting Error Fixing Automation System..."

# Ensure log directories exist
mkdir -p automation/logs

# Stop any existing PM2 processes
pm2 stop all 2>/dev/null || true
pm2 delete all 2>/dev/null || true

# Start the error fixing ecosystem
echo "Starting PM2 error fixing ecosystem..."
pm2 start ecosystem.error-fixing.config.cjs

# Show status
echo "PM2 Status:"
pm2 status

# Show logs
echo "Recent logs:"
pm2 logs --lines 20

echo "Error fixing automation system started successfully!"
echo "Monitor with: pm2 status"
echo "View logs with: pm2 logs"
echo "Stop with: pm2 stop all"
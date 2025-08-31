#!/bin/bash

# Intelligent Sync Automation Startup Script
# This script starts the intelligent sync automation system

LOG_FILE="./logs/intelligent-sync-startup.log"

# Function to log messages
log() {
    echo "[$(date +'%Y-%m-%d %H:%M:%S')] $1" | tee -a "$LOG_FILE"
}

log "Starting Intelligent Sync Automation System..."

# Change to project directory
cd "$(dirname "$0")"

# Check if PM2 is running
if ! pgrep -f "pm2" > /dev/null; then
    log "PM2 not running, starting it..."
    pm2 start ecosystem-intelligent-sync.config.cjs
    log "PM2 started with intelligent sync configuration"
else
    log "PM2 is already running"
fi

# Start the intelligent sync automation
log "Starting intelligent sync automation processes..."
pm2 start ecosystem-intelligent-sync.config.cjs

# Save PM2 configuration
pm2 save
log "PM2 configuration saved"

# Show status
log "Current PM2 processes:"
pm2 list

log "Intelligent Sync Automation System started successfully"
log "Monitor with: pm2 monit"
log "View logs with: pm2 logs intelligent-sync-automation"

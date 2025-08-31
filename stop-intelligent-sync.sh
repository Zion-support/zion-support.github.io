#!/bin/bash

# Intelligent Sync Automation Stop Script
# This script stops the intelligent sync automation system

LOG_FILE="./logs/intelligent-sync-stop.log"

# Function to log messages
log() {
    echo "[$(date +'%Y-%m-%d %H:%M:%S')] $1" | tee -a "$LOG_FILE"
}

log "Stopping Intelligent Sync Automation System..."

# Change to project directory
cd "$(dirname "$0")"

# Stop intelligent sync processes
log "Stopping intelligent sync processes..."
pm2 stop intelligent-sync-automation intelligent-sync-monitor intelligent-sync-backup

# Save PM2 configuration
pm2 save
log "PM2 configuration saved"

log "Intelligent Sync Automation System stopped successfully"

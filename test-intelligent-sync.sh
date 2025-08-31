#!/bin/bash

# Intelligent Sync Automation Test Script
# This script tests all components of the intelligent sync automation system

LOG_FILE="./logs/intelligent-sync-test.log"

# Function to log messages
log() {
    echo "[$(date +'%Y-%m-%d %H:%M:%S')] $1" | tee -a "$LOG_FILE"
}

# Function to test a component
test_component() {
    local name="$1"
    local command="$2"
    
    log "Testing $name..."
    if eval "$command" > /dev/null 2>&1; then
        log "✅ $name test passed"
        return 0
    else
        log "❌ $name test failed"
        return 1
    fi
}

log "Starting Intelligent Sync Automation System Tests..."

# Change to project directory
cd "$(dirname "$0")"

# Test 1: Script execution
log "🧪 Test 1: Script execution"
test_component "Script execution" "node intelligent-sync-automation.js"

# Test 2: Health check
log "🧪 Test 2: Health check"
test_component "Health check" "node intelligent-sync-automation.js health"

# Test 3: Git status
log "🧪 Test 3: Git status"
test_component "Git status" "git status"

# Test 4: PM2 availability
log "🧪 Test 4: PM2 availability"
test_component "PM2 availability" "pm2 --version"

# Test 5: Directory structure
log "🧪 Test 5: Directory structure"
if [ -d "logs" ] && [ -d "backups" ]; then
    log "✅ Directory structure test passed"
else
    log "❌ Directory structure test failed"
fi

# Test 6: File permissions
log "🧪 Test 6: File permissions"
if [ -x "intelligent-sync-automation.js" ]; then
    log "✅ File permissions test passed"
else
    log "❌ File permissions test failed"
fi

log "All tests completed. Check $LOG_FILE for detailed results."

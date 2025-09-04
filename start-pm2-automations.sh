#!/bin/bash

# Start PM2 Automations Script
# This script starts all PM2 automation processes individually

set -e

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Logging functions
log() {
    echo -e "${BLUE}[$(date +'%Y-%m-%d %H:%M:%S')]${NC} $1"
}

success() {
    echo -e "${GREEN}✅ $1${NC}"
}

error() {
    echo -e "${RED}❌ $1${NC}"
}

info() {
    echo -e "${YELLOW}ℹ️  $1${NC}"
}

# Function to start a process
start_process() {
    local name="$1"
    local script="$2"
    local args="$3"
    
    log "Starting $name..."
    
    if pm2 list | grep -q "$name.*online"; then
        info "$name is already running"
        return 0
    fi
    
    if [ -n "$args" ]; then
        pm2 start "$script" --name "$name" -- $args
    else
        pm2 start "$script" --name "$name"
    fi
    
    if pm2 list | grep -q "$name.*online"; then
        success "$name started successfully"
        return 0
    else
        error "$name failed to start"
        return 1
    fi
}

# Main execution
main() {
    echo -e "${BLUE}🚀 Starting PM2 Automation System${NC}"
    echo "====================================="
    echo
    
    # Stop any existing processes
    log "Stopping existing processes..."
    pm2 stop all 2>/dev/null || true
    pm2 delete all 2>/dev/null || true
    
    # Create logs directory
    mkdir -p logs/pm2
    
    # Start processes
    log "Starting automation processes..."
    
    # Core automation processes
    start_process "ci-cd-automation" "scripts/pm2/ci-cd-automation.cjs"
    start_process "health-monitor" "scripts/pm2/health-monitor.cjs"
    start_process "performance-monitor" "scripts/pm2/performance-monitor.cjs"
    start_process "quality-checks" "scripts/pm2/quality-checks.cjs"
    start_process "security-audit" "scripts/pm2/security-audit.cjs"
    start_process "link-checker" "scripts/pm2/link-checker.cjs"
    start_process "dependency-updates" "scripts/pm2/dependency-updates.cjs"
    
    # Intelligent processes
    start_process "ai-process-manager" "scripts/intelligent/ai-process-manager.cjs"
    start_process "intelligent-monitor" "scripts/intelligent/intelligent-monitor.cjs"
    start_process "smart-auto-scaler" "scripts/intelligent/smart-auto-scaler.cjs"
    start_process "error-recovery-system" "scripts/intelligent/error-recovery-system.cjs"
    start_process "smart-resource-manager" "scripts/intelligent/smart-resource-manager.cjs"
    start_process "dashboard-system" "scripts/intelligent/dashboard-system.cjs"
    
    # Main application (if package.json exists and has start script)
    if [ -f "package.json" ] && grep -q '"start"' package.json; then
        start_process "ziontechgroup-web" "npm" "start"
    fi
    
    echo
    log "PM2 Automation System Status:"
    pm2 list
    
    echo
    success "PM2 automation system started successfully!"
    echo
    info "Available commands:"
    echo "  Monitor all: pm2 monit"
    echo "  View logs: pm2 logs"
    echo "  Restart all: pm2 restart all"
    echo "  Stop all: pm2 stop all"
    echo "  Save config: pm2 save"
}

# Run main function
main "$@"
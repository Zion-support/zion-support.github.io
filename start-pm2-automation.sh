#!/bin/bash

# Enhanced PM2 Automation System Startup Script
# This script starts the complete intelligent PM2 automation ecosystem

set -e

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
PURPLE='\033[0;35m'
CYAN='\033[0;36m'
NC='\033[0m' # No Color

# Project configuration
PROJECT_ROOT="/workspace"
ECOSYSTEM_CONFIG="$PROJECT_ROOT/ecosystem.config.cjs"
LOGS_DIR="$PROJECT_ROOT/logs"

# Logging functions
log() {
    echo -e "${BLUE}[$(date +'%Y-%m-%d %H:%M:%S')]${NC} $1"
}

success() {
    echo -e "${GREEN}✅ $1${NC}"
}

warning() {
    echo -e "${YELLOW}⚠️  $1${NC}"
}

error() {
    echo -e "${RED}❌ $1${NC}"
}

info() {
    echo -e "${CYAN}ℹ️  $1${NC}"
}

# Check if PM2 is installed
check_pm2() {
    if ! command -v pm2 &> /dev/null; then
        error "PM2 is not installed. Installing PM2..."
        npm install -g pm2
        success "PM2 installed successfully"
    else
        success "PM2 is already installed"
    fi
}

# Create logs directory
create_logs_dir() {
    if [ ! -d "$LOGS_DIR" ]; then
        log "Creating logs directory..."
        mkdir -p "$LOGS_DIR"
        success "Logs directory created at $LOGS_DIR"
    else
        info "Logs directory already exists at $LOGS_DIR"
    fi
}

# Check ecosystem configuration
check_ecosystem_config() {
    if [ ! -f "$ECOSYSTEM_CONFIG" ]; then
        error "Ecosystem configuration file not found at $ECOSYSTEM_CONFIG"
        exit 1
    fi
    success "Ecosystem configuration found"
}

# Start PM2 processes
start_pm2_processes() {
    log "Starting PM2 automation processes..."
    
    # Stop any existing processes
    pm2 delete all 2>/dev/null || true
    
    # Start all processes from ecosystem config
    pm2 start "$ECOSYSTEM_CONFIG"
    
    if [ $? -eq 0 ]; then
        success "All PM2 automation processes started successfully"
    else
        error "Failed to start PM2 processes"
        exit 1
    fi
}

# Save PM2 configuration
save_pm2_config() {
    log "Saving PM2 configuration..."
    pm2 save
    success "PM2 configuration saved"
}

# Display status
show_status() {
    log "PM2 Automation System Status:"
    echo ""
    pm2 status
    echo ""
    info "Use 'pm2 logs' to view all logs"
    info "Use 'pm2 monit' to monitor processes"
    info "Use 'pm2 restart all' to restart all processes"
}

# Main execution
main() {
    echo -e "${PURPLE}🚀 Starting PM2 Automation System...${NC}"
    echo ""
    
    check_pm2
    create_logs_dir
    check_ecosystem_config
    start_pm2_processes
    save_pm2_config
    show_status
    
    echo ""
    success "PM2 Automation System is now running!"
    echo ""
    info "The system will automatically:"
    info "  • Monitor for errors and fix them"
    info "  • Check system health every 5 minutes"
    info "  • Fix syntax errors every 30 minutes"
    info "  • Manage dependencies every hour"
    info "  • Monitor build health every 15 minutes"
    info "  • Clean logs daily at 2 AM"
    info "  • Monitor performance every 20 minutes"
    info "  • Check links every 6 hours"
    echo ""
}

# Run main function
main "$@"

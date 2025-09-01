#!/bin/bash

# PM2 Error Prevention Automation Startup Script
# This script starts and manages the automated error fixing system

set -e

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Project root
PROJECT_ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"

# Log function
log() {
    echo -e "${GREEN}[$(date +'%Y-%m-%d %H:%M:%S')]${NC} $1"
}

warn() {
    echo -e "${YELLOW}[$(date +'%Y-%m-%d %H:%M:%S')] WARNING:${NC} $1"
}

error() {
    echo -e "${RED}[$(date +'%Y-%m-%d %H:%M:%S')] ERROR:${NC} $1"
}

info() {
    echo -e "${BLUE}[$(date +'%Y-%m-%d %H:%M:%S')] INFO:${NC} $1"
}

# Function to check if PM2 is installed
check_pm2() {
    if ! command -v pm2 &> /dev/null; then
        error "PM2 is not installed. Please install it first:"
        echo "npm install -g pm2"
        exit 1
    fi
}

# Function to create necessary directories
create_directories() {
    log "Creating necessary directories..."
    mkdir -p "$PROJECT_ROOT/automation/logs"
    mkdir -p "$PROJECT_ROOT/reports"
    log "Directories created successfully"
}

# Function to install dependencies
install_dependencies() {
    log "Installing project dependencies..."
    cd "$PROJECT_ROOT"
    npm install
    log "Dependencies installed successfully"
}

# Function to start the error prevention automation
start_automation() {
    log "Starting PM2 Error Prevention Automation..."
    
    # Check if PM2 is installed
    check_pm2
    
    # Create directories
    create_directories
    
    # Install dependencies if needed
    if [ ! -d "node_modules" ]; then
        install_dependencies
    fi
    
    # Start PM2 processes
    cd "$PROJECT_ROOT"
    
    # Start the main error prevention automation
    log "Starting PM2 Error Prevention Automation..."
    pm2 start ecosystem.config.cjs --only pm2-error-prevention --update-env
    
    # Start other error fixers
    log "Starting additional error fixers..."
    pm2 start ecosystem.config.cjs --only console-error-fixer,comprehensive-error-fixer,typescript-error-fixer,jsx-error-fixer,master-error-fixer --update-env
    
    # Save PM2 configuration
    pm2 save
    
    log "PM2 Error Prevention Automation started successfully!"
    log "Use 'pm2 status' to check status"
    log "Use 'pm2 logs pm2-error-prevention' to view logs"
}

# Function to stop the automation
stop_automation() {
    log "Stopping PM2 Error Prevention Automation..."
    cd "$PROJECT_ROOT"
    pm2 stop pm2-error-prevention console-error-fixer comprehensive-error-fixer typescript-error-fixer jsx-error-fixer master-error-fixer
    log "Automation stopped successfully"
}

# Function to restart the automation
restart_automation() {
    log "Restarting PM2 Error Prevention Automation..."
    cd "$PROJECT_ROOT"
    pm2 restart pm2-error-prevention console-error-fixer comprehensive-error-fixer typescript-error-fixer jsx-error-fixer master-error-fixer
    log "Automation restarted successfully"
}

# Function to show status
show_status() {
    log "PM2 Error Prevention Automation Status:"
    echo ""
    pm2 status
    echo ""
    log "Recent logs:"
    pm2 logs pm2-error-prevention --lines 10
}

# Function to show logs
show_logs() {
    local service=${1:-pm2-error-prevention}
    log "Showing logs for $service:"
    pm2 logs "$service" --lines 50
}

# Function to run a one-time error fix
run_error_fix() {
    log "Running one-time error fix..."
    cd "$PROJECT_ROOT"
    node scripts/automation/enhanced-error-fixer.cjs
    log "Error fix completed"
}

# Function to show help
show_help() {
    echo "PM2 Error Prevention Automation Management Script"
    echo ""
    echo "Usage: $0 [COMMAND]"
    echo ""
    echo "Commands:"
    echo "  start           Start the error prevention automation"
    echo "  stop            Stop the error prevention automation"
    echo "  restart         Restart the error prevention automation"
    echo "  status          Show status of all automation processes"
    echo "  logs [service]  Show logs for a specific service (default: pm2-error-prevention)"
    echo "  fix             Run a one-time error fix"
    echo "  install         Install dependencies and setup directories"
    echo "  help            Show this help message"
    echo ""
    echo "Examples:"
    echo "  $0 start                    # Start the automation"
    echo "  $0 logs console-error-fixer # Show logs for console error fixer"
    echo "  $0 fix                      # Run one-time error fix"
}

# Function to install and setup
install_setup() {
    log "Installing and setting up PM2 Error Prevention Automation..."
    
    # Check if PM2 is installed
    check_pm2
    
    # Create directories
    create_directories
    
    # Install dependencies
    install_dependencies
    
    # Install PM2 logrotate
    log "Installing PM2 logrotate..."
    pm2 install pm2-logrotate
    pm2 set pm2-logrotate:max_size 10M
    pm2 set pm2-logrotate:retain 30
    pm2 set pm2-logrotate:compress true
    
    log "Setup completed successfully!"
    log "You can now run '$0 start' to start the automation"
}

# Main script logic
case "${1:-help}" in
    start)
        start_automation
        ;;
    stop)
        stop_automation
        ;;
    restart)
        restart_automation
        ;;
    status)
        show_status
        ;;
    logs)
        show_logs "$2"
        ;;
    fix)
        run_error_fix
        ;;
    install)
        install_setup
        ;;
    help|--help|-h)
        show_help
        ;;
    *)
        error "Unknown command: $1"
        echo ""
        show_help
        exit 1
        ;;
esac
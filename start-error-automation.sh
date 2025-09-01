#!/bin/bash

# Error Automation Management Script
# This script manages PM2 processes for automatic error fixing

set -e

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Configuration
ECOSYSTEM_FILE="ecosystem-error-automation.config.cjs"
LOG_DIR="automation/logs"
ERROR_REPORTS_DIR="error-reports"

# Function to print colored output
print_status() {
    echo -e "${GREEN}[INFO]${NC} $1"
}

print_warning() {
    echo -e "${YELLOW}[WARNING]${NC} $1"
}

print_error() {
    echo -e "${RED}[ERROR]${NC} $1"
}

print_header() {
    echo -e "${BLUE}================================${NC}"
    echo -e "${BLUE}$1${NC}"
    echo -e "${BLUE}================================${NC}"
}

# Function to check if PM2 is installed
check_pm2() {
    if ! command -v pm2 &> /dev/null; then
        print_error "PM2 is not installed. Installing PM2..."
        npm install -g pm2
    fi
}

# Function to create necessary directories
create_directories() {
    print_status "Creating necessary directories..."
    mkdir -p "$LOG_DIR"
    mkdir -p "$ERROR_REPORTS_DIR"
    print_status "Directories created successfully"
}

# Function to install dependencies
install_dependencies() {
    print_status "Installing project dependencies..."
    npm install
    print_status "Dependencies installed successfully"
}

# Function to start error automation
start_automation() {
    print_header "Starting Error Automation System"
    
    check_pm2
    create_directories
    install_dependencies
    
    print_status "Starting PM2 error automation processes..."
    
    # Start the error automation ecosystem
    pm2 start "$ECOSYSTEM_FILE" --update-env
    
    print_status "Error automation started successfully!"
    print_status "Monitoring the following processes:"
    pm2 list
    
    print_status "To view logs, run: pm2 logs"
    print_status "To stop automation, run: ./start-error-automation.sh stop"
}

# Function to stop error automation
stop_automation() {
    print_header "Stopping Error Automation System"
    
    print_status "Stopping PM2 error automation processes..."
    pm2 stop "$ECOSYSTEM_FILE" || true
    pm2 delete "$ECOSYSTEM_FILE" || true
    
    print_status "Error automation stopped successfully!"
}

# Function to restart error automation
restart_automation() {
    print_header "Restarting Error Automation System"
    
    print_status "Restarting PM2 error automation processes..."
    pm2 restart "$ECOSYSTEM_FILE" || pm2 start "$ECOSYSTEM_FILE" --update-env
    
    print_status "Error automation restarted successfully!"
    pm2 list
}

# Function to show status
show_status() {
    print_header "Error Automation Status"
    
    print_status "PM2 Process Status:"
    pm2 list
    
    echo ""
    print_status "Recent Error Reports:"
    if [ -d "$ERROR_REPORTS_DIR" ]; then
        ls -la "$ERROR_REPORTS_DIR" | head -10
    else
        print_warning "No error reports directory found"
    fi
    
    echo ""
    print_status "Recent Logs:"
    if [ -d "$LOG_DIR" ]; then
        ls -la "$LOG_DIR" | head -10
    else
        print_warning "No logs directory found"
    fi
}

# Function to show logs
show_logs() {
    print_header "Error Automation Logs"
    
    if [ -z "$1" ]; then
        print_status "Showing all logs (last 50 lines):"
        pm2 logs --lines 50
    else
        print_status "Showing logs for process: $1"
        pm2 logs "$1" --lines 50
    fi
}

# Function to run manual error fix
run_manual_fix() {
    print_header "Running Manual Error Fix"
    
    print_status "Running comprehensive error fixer..."
    node scripts/automation/comprehensive-error-fixer.cjs
    
    print_status "Manual error fix completed!"
}

# Function to show help
show_help() {
    print_header "Error Automation Management Script"
    echo "Usage: $0 [COMMAND]"
    echo ""
    echo "Commands:"
    echo "  start     - Start the error automation system"
    echo "  stop      - Stop the error automation system"
    echo "  restart   - Restart the error automation system"
    echo "  status    - Show current status and recent reports"
    echo "  logs      - Show logs (all processes or specific process)"
    echo "  fix       - Run manual error fix"
    echo "  help      - Show this help message"
    echo ""
    echo "Examples:"
    echo "  $0 start                    # Start automation"
    echo "  $0 stop                     # Stop automation"
    echo "  $0 logs                     # Show all logs"
    echo "  $0 logs continuous-error-monitor  # Show specific process logs"
    echo "  $0 fix                      # Run manual error fix"
}

# Main script logic
case "${1:-start}" in
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
        run_manual_fix
        ;;
    help|--help|-h)
        show_help
        ;;
    *)
        print_error "Unknown command: $1"
        echo ""
        show_help
        exit 1
        ;;
esac
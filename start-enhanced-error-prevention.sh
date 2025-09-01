#!/bin/bash

# Enhanced Error Prevention Automation Startup Script
# This script manages the comprehensive PM2 automation system for automatic error prevention

set -e

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Configuration
ECOSYSTEM_FILE="ecosystem-enhanced-error-prevention.config.cjs"
REPORTS_DIR="reports"
LOG_DIR="logs"

# Ensure directories exist
mkdir -p $REPORTS_DIR
mkdir -p $LOG_DIR

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

print_success() {
    echo -e "${GREEN}[SUCCESS]${NC} $1"
}

# Function to check if PM2 is installed
check_pm2() {
    if ! command -v pm2 &> /dev/null; then
        print_error "PM2 is not installed. Installing PM2..."
        npm install -g pm2
        print_success "PM2 installed successfully"
    fi
}

# Function to check if ecosystem file exists
check_ecosystem_file() {
    if [ ! -f "$ECOSYSTEM_FILE" ]; then
        print_error "Ecosystem file $ECOSYSTEM_FILE not found!"
        exit 1
    fi
}

# Function to start the enhanced error prevention system
start_system() {
    print_status "Starting Enhanced Error Prevention System..."
    
    check_pm2
    check_ecosystem_file
    
    # Start all automation services
    print_status "Starting all automation services..."
    pm2 start $ECOSYSTEM_FILE
    
    # Wait a moment for services to start
    sleep 5
    
    # Check status
    print_status "Checking service status..."
    pm2 status
    
    print_success "Enhanced Error Prevention System started successfully!"
    
    # Show monitoring commands
    echo
    print_status "Useful commands:"
    echo "  pm2 status                    - Check service status"
    echo "  pm2 logs                      - View all logs"
    echo "  pm2 monit                     - Monitor services in real-time"
    echo "  pm2 restart all               - Restart all services"
    echo "  pm2 stop all                  - Stop all services"
    echo "  pm2 delete all                - Remove all services"
    echo
    print_status "Reports are saved in: $REPORTS_DIR"
    print_status "Logs are saved in: $LOG_DIR"
}

# Function to stop the enhanced error prevention system
stop_system() {
    print_status "Stopping Enhanced Error Prevention System..."
    
    if command -v pm2 &> /dev/null; then
        pm2 stop all
        pm2 delete all
        print_success "All services stopped and removed"
    else
        print_warning "PM2 not found, no services to stop"
    fi
}

# Function to restart the enhanced error prevention system
restart_system() {
    print_status "Restarting Enhanced Error Prevention System..."
    stop_system
    sleep 2
    start_system
}

# Function to check system status
check_status() {
    print_status "Checking Enhanced Error Prevention System status..."
    
    if command -v pm2 &> /dev/null; then
        pm2 status
    else
        print_error "PM2 not installed"
    fi
}

# Function to view logs
view_logs() {
    print_status "Viewing Enhanced Error Prevention System logs..."
    
    if command -v pm2 &> /dev/null; then
        pm2 logs --lines 50
    else
        print_error "PM2 not installed"
    fi
}

# Function to monitor services
monitor_services() {
    print_status "Starting PM2 monitoring..."
    
    if command -v pm2 &> /dev/null; then
        pm2 monit
    else
        print_error "PM2 not installed"
    fi
}

# Function to show health report
show_health() {
    print_status "Generating health report..."
    
    if [ -d "$REPORTS_DIR" ]; then
        echo "=== Recent Reports ==="
        ls -la $REPORTS_DIR/*.json 2>/dev/null | head -10 || echo "No reports found"
        
        echo
        echo "=== Recent Fixes ==="
        if [ -f "$REPORTS_DIR/fix-history.json" ]; then
            jq '.[-5:] | .[] | "\(.timestamp): \(.file) - \(.type)"' "$REPORTS_DIR/fix-history.json" 2>/dev/null || echo "No fix history found"
        else
            echo "No fix history found"
        fi
        
        echo
        echo "=== System Health ==="
        if command -v pm2 &> /dev/null; then
            pm2 status --no-daemon
        else
            echo "PM2 not available"
        fi
    else
        print_error "Reports directory not found"
    fi
}

# Function to run a quick error scan
quick_scan() {
    print_status "Running quick error scan..."
    
    if [ -f "scripts/automation/intelligent-error-prevention-automation.cjs" ]; then
        node scripts/automation/intelligent-error-prevention-automation.cjs --start
    else
        print_error "Intelligent error prevention automation not found"
    fi
}

# Function to run comprehensive error fix
comprehensive_fix() {
    print_status "Running comprehensive error fix..."
    
    if [ -f "scripts/automation/comprehensive-error-fixer.cjs" ]; then
        node scripts/automation/comprehensive-error-fixer.cjs
    else
        print_error "Comprehensive error fixer not found"
    fi
}

# Function to show help
show_help() {
    echo "Enhanced Error Prevention Automation Management Script"
    echo
    echo "Usage: $0 [COMMAND]"
    echo
    echo "Commands:"
    echo "  start       - Start the enhanced error prevention system"
    echo "  stop        - Stop the enhanced error prevention system"
    echo "  restart     - Restart the enhanced error prevention system"
    echo "  status      - Check system status"
    echo "  logs        - View system logs"
    echo "  monit       - Monitor services in real-time"
    echo "  health      - Show system health report"
    echo "  scan        - Run quick error scan"
    echo "  fix         - Run comprehensive error fix"
    echo "  help        - Show this help message"
    echo
    echo "Examples:"
    echo "  $0 start    - Start the system"
    echo "  $0 status   - Check status"
    echo "  $0 logs     - View logs"
}

# Function to cleanup on exit
cleanup() {
    print_status "Cleaning up..."
    # Any cleanup tasks can go here
}

# Set trap for cleanup
trap cleanup EXIT

# Main script logic
case "${1:-help}" in
    start)
        start_system
        ;;
    stop)
        stop_system
        ;;
    restart)
        restart_system
        ;;
    status)
        check_status
        ;;
    logs)
        view_logs
        ;;
    monit)
        monitor_services
        ;;
    health)
        show_health
        ;;
    scan)
        quick_scan
        ;;
    fix)
        comprehensive_fix
        ;;
    help|--help|-h)
        show_help
        ;;
    *)
        print_error "Unknown command: $1"
        show_help
        exit 1
        ;;
esac

exit 0
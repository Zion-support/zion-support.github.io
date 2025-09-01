#!/bin/bash

# Error Fixing Automation Startup Script
# This script manages the PM2 error fixing automation system

set -e

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Configuration
ECOSYSTEM_FILE="ecosystem-error-fixing.config.cjs"
LOG_DIR="./automation/logs"
REPORTS_DIR="./error-reports"

# Function to print colored output
print_status() {
    echo -e "${BLUE}[$(date '+%Y-%m-%d %H:%M:%S')]${NC} $1"
}

print_success() {
    echo -e "${GREEN}✅ $1${NC}"
}

print_warning() {
    echo -e "${YELLOW}⚠️  $1${NC}"
}

print_error() {
    echo -e "${RED}❌ $1${NC}"
}

# Function to create necessary directories
create_directories() {
    print_status "Creating necessary directories..."
    
    mkdir -p "$LOG_DIR"
    mkdir -p "$REPORTS_DIR"
    mkdir -p "./automation/reports"
    
    print_success "Directories created successfully"
}

# Function to check if PM2 is installed
check_pm2() {
    if ! command -v pm2 &> /dev/null; then
        print_error "PM2 is not installed. Please install PM2 first:"
        echo "npm install -g pm2"
        exit 1
    fi
    print_success "PM2 is installed"
}

# Function to check if ecosystem file exists
check_ecosystem_file() {
    if [ ! -f "$ECOSYSTEM_FILE" ]; then
        print_error "Ecosystem file $ECOSYSTEM_FILE not found!"
        exit 1
    fi
    print_success "Ecosystem file found"
}

# Function to start the error fixing automation
start_automation() {
    print_status "Starting error fixing automation..."
    
    # Create directories first
    create_directories
    
    # Start PM2 processes
    pm2 start "$ECOSYSTEM_FILE" --update-env
    
    print_success "Error fixing automation started successfully"
    
    # Show status
    pm2 status
}

# Function to stop the error fixing automation
stop_automation() {
    print_status "Stopping error fixing automation..."
    
    pm2 stop "$ECOSYSTEM_FILE" || true
    pm2 delete "$ECOSYSTEM_FILE" || true
    
    print_success "Error fixing automation stopped"
}

# Function to restart the error fixing automation
restart_automation() {
    print_status "Restarting error fixing automation..."
    
    stop_automation
    sleep 2
    start_automation
}

# Function to show logs
show_logs() {
    print_status "Showing recent logs..."
    pm2 logs --lines 50
}

# Function to show status
show_status() {
    print_status "Current PM2 status:"
    pm2 status
}

# Function to show error reports
show_reports() {
    print_status "Recent error reports:"
    
    if [ -d "$REPORTS_DIR" ]; then
        ls -la "$REPORTS_DIR"/*.json 2>/dev/null || print_warning "No error reports found"
    fi
    
    if [ -d "./automation/reports" ]; then
        ls -la "./automation/reports"/*.json 2>/dev/null || print_warning "No automation reports found"
    fi
}

# Function to run initial error check
run_initial_check() {
    print_status "Running initial error check..."
    
    # Run TypeScript check
    if npm run type-check >/dev/null 2>&1; then
        print_success "TypeScript check passed"
    else
        print_warning "TypeScript errors detected - automation will fix these"
    fi
    
    # Run ESLint check
    if npm run lint >/dev/null 2>&1; then
        print_success "ESLint check passed"
    else
        print_warning "ESLint errors detected - automation will fix these"
    fi
}

# Function to show help
show_help() {
    echo "Error Fixing Automation Management Script"
    echo ""
    echo "Usage: $0 [COMMAND]"
    echo ""
    echo "Commands:"
    echo "  start     - Start the error fixing automation"
    echo "  stop      - Stop the error fixing automation"
    echo "  restart   - Restart the error fixing automation"
    echo "  status    - Show current status"
    echo "  logs      - Show recent logs"
    echo "  reports   - Show error reports"
    echo "  check     - Run initial error check"
    echo "  help      - Show this help message"
    echo ""
    echo "The automation system includes:"
    echo "  - TypeScript error fixing (every 10 minutes)"
    echo "  - ESLint error fixing (every 12 minutes)"
    echo "  - Import error fixing (every 20 minutes)"
    echo "  - Build error detection (every 5 minutes)"
    echo "  - Configuration error fixing (every 30 minutes)"
    echo "  - Error prevention monitoring (every 8 minutes)"
    echo "  - Critical error alerts (every 2 minutes)"
    echo "  - Error analytics dashboard (every 15 minutes)"
    echo "  - Auto recovery management (every 6 minutes)"
}

# Main script logic
main() {
    case "${1:-start}" in
        "start")
            check_pm2
            check_ecosystem_file
            run_initial_check
            start_automation
            ;;
        "stop")
            stop_automation
            ;;
        "restart")
            check_pm2
            check_ecosystem_file
            restart_automation
            ;;
        "status")
            show_status
            ;;
        "logs")
            show_logs
            ;;
        "reports")
            show_reports
            ;;
        "check")
            run_initial_check
            ;;
        "help"|"-h"|"--help")
            show_help
            ;;
        *)
            print_error "Unknown command: $1"
            show_help
            exit 1
            ;;
    esac
}

# Run main function with all arguments
main "$@"
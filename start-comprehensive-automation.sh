#!/bin/bash

# Comprehensive PM2 Automation Startup Script
# This script manages the complete automation system for error fixing and project maintenance

set -e

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Configuration
PROJECT_ROOT=$(pwd)
ECOSYSTEM_CONFIG="ecosystem-comprehensive-automation.config.cjs"
LOG_DIR="./automation/logs"
REPORT_DIR="./automation/reports"

# Function to print colored output
print_status() {
    echo -e "${BLUE}[INFO]${NC} $1"
}

print_success() {
    echo -e "${GREEN}[SUCCESS]${NC} $1"
}

print_warning() {
    echo -e "${YELLOW}[WARNING]${NC} $1"
}

print_error() {
    echo -e "${RED}[ERROR]${NC} $1"
}

# Function to check if PM2 is installed
check_pm2() {
    if ! command -v pm2 &> /dev/null; then
        print_error "PM2 is not installed. Installing PM2..."
        npm install -g pm2
        print_success "PM2 installed successfully"
    else
        print_success "PM2 is already installed"
    fi
}

# Function to create necessary directories
create_directories() {
    print_status "Creating necessary directories..."
    
    mkdir -p "$LOG_DIR"
    mkdir -p "$REPORT_DIR"
    mkdir -p "./automation/reports"
    
    print_success "Directories created successfully"
}

# Function to install dependencies
install_dependencies() {
    print_status "Installing project dependencies..."
    
    if [ -f "package.json" ]; then
        npm install
        print_success "Dependencies installed successfully"
    else
        print_error "package.json not found"
        exit 1
    fi
}

# Function to setup PM2 logrotate
setup_pm2_logrotate() {
    print_status "Setting up PM2 logrotate..."
    
    pm2 install pm2-logrotate || true
    pm2 set pm2-logrotate:max_size 10M
    pm2 set pm2-logrotate:retain 30
    pm2 set pm2-logrotate:compress true
    pm2 set pm2-logrotate:workerInterval 60
    pm2 set pm2-logrotate:rotateInterval '0 0 * * *'
    
    print_success "PM2 logrotate configured successfully"
}

# Function to start the comprehensive automation system
start_automation() {
    print_status "Starting comprehensive automation system..."
    
    # Stop any existing processes
    pm2 stop "$ECOSYSTEM_CONFIG" 2>/dev/null || true
    pm2 delete "$ECOSYSTEM_CONFIG" 2>/dev/null || true
    
    # Start the comprehensive automation system
    pm2 start "$ECOSYSTEM_CONFIG" --update-env
    
    print_success "Comprehensive automation system started successfully"
}

# Function to show status
show_status() {
    print_status "Current PM2 status:"
    pm2 status
    
    print_status "Recent logs from enhanced error fixing automation:"
    if [ -f "$LOG_DIR/enhanced-error-fixing.log" ]; then
        tail -n 20 "$LOG_DIR/enhanced-error-fixing.log"
    else
        print_warning "No logs found yet"
    fi
}

# Function to show automation dashboard
show_dashboard() {
    print_status "Automation Dashboard:"
    echo "=================================="
    
    # Check if automation is running
    if pm2 list | grep -q "enhanced-error-fixing-automation"; then
        print_success "Enhanced Error Fixing Automation: RUNNING"
    else
        print_error "Enhanced Error Fixing Automation: STOPPED"
    fi
    
    if pm2 list | grep -q "typescript-error-monitor"; then
        print_success "TypeScript Error Monitor: RUNNING"
    else
        print_error "TypeScript Error Monitor: STOPPED"
    fi
    
    if pm2 list | grep -q "eslint-error-cleaner"; then
        print_success "ESLint Error Cleaner: RUNNING"
    else
        print_error "ESLint Error Cleaner: STOPPED"
    fi
    
    if pm2 list | grep -q "master-error-fixer"; then
        print_success "Master Error Fixer: RUNNING"
    else
        print_error "Master Error Fixer: STOPPED"
    fi
    
    echo "=================================="
    print_status "Use 'pm2 logs' to view real-time logs"
    print_status "Use 'pm2 monit' to open PM2 monitoring dashboard"
}

# Function to run initial error fixing
run_initial_error_fixing() {
    print_status "Running initial error fixing..."
    
    # Run the enhanced error fixing automation once
    if [ -f "./scripts/automation/enhanced-error-fixing-automation.cjs" ]; then
        node ./scripts/automation/enhanced-error-fixing-automation.cjs
        print_success "Initial error fixing completed"
    else
        print_warning "Enhanced error fixing automation script not found"
    fi
}

# Function to show help
show_help() {
    echo "Comprehensive PM2 Automation Management Script"
    echo ""
    echo "Usage: $0 [COMMAND]"
    echo ""
    echo "Commands:"
    echo "  start     - Start the comprehensive automation system"
    echo "  stop      - Stop all automation processes"
    echo "  restart   - Restart all automation processes"
    echo "  status    - Show current status and logs"
    echo "  dashboard - Show automation dashboard"
    echo "  logs      - Show recent logs"
    echo "  fix       - Run initial error fixing"
    echo "  help      - Show this help message"
    echo ""
    echo "Examples:"
    echo "  $0 start     # Start the automation system"
    echo "  $0 status    # Check status and recent logs"
    echo "  $0 dashboard # View automation dashboard"
}

# Main script logic
case "${1:-start}" in
    "start")
        print_status "Starting Comprehensive PM2 Automation System..."
        check_pm2
        create_directories
        install_dependencies
        setup_pm2_logrotate
        run_initial_error_fixing
        start_automation
        show_dashboard
        print_success "Comprehensive automation system is now running!"
        print_status "The system will automatically fix errors every 15 minutes"
        ;;
    "stop")
        print_status "Stopping all automation processes..."
        pm2 stop "$ECOSYSTEM_CONFIG" || true
        print_success "All automation processes stopped"
        ;;
    "restart")
        print_status "Restarting automation system..."
        pm2 restart "$ECOSYSTEM_CONFIG" || pm2 start "$ECOSYSTEM_CONFIG" --update-env
        print_success "Automation system restarted"
        ;;
    "status")
        show_status
        ;;
    "dashboard")
        show_dashboard
        ;;
    "logs")
        print_status "Recent logs:"
        pm2 logs --lines 50
        ;;
    "fix")
        run_initial_error_fixing
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
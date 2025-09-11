#!/bin/bash
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
<<<<<<< HEAD
>>>>>>> cursor/integrate-build-improve-and-re-verify-8f7d
=======
>>>>>>> origin/automation-improvements-final
>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
# Error Fixing Automation Startup Script
# This script starts all PM2 error fixing automations
echo "Starting Error Fixing Automation System..."
# Ensure log directories exist
mkdir -p automation/logs
# Stop any existing PM2 processes
pm2 stop all 2>/dev/null || true
pm2 delete all 2>/dev/null || true
# Start the error fixing ecosystem
echo "Starting PM2 error fixing ecosystem..."
pm2 start ecosystem.error-fixing.config.cjs
<<<<<<< HEAD
>>>>>>> 7c5570ce863aceb5500c5da6ecbea653a552cacd
=======
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-c7b5
<<<<<<< HEAD
>>>>>>> cursor/integrate-build-improve-and-re-verify-8f7d
=======

>>>>>>> origin/main
=======
>>>>>>> origin/automation-improvements-final
=======

>>>>>>> fd9cd2d2f8d32fcc77768547645dd1d80b314e27
>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
# Error Fixing Automation Startup Script
# This script starts the comprehensive error fixing automation system
# Error Fixing Automation PM2 Management Script
# This script manages the PM2 error fixing automation system
set -e
# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color
echo "🚀 Starting Error Fixing Automation System..."

# Check if PM2 is installed
if ! command -v pm2 &> /dev/null; then
    echo "❌ PM2 is not installed. Installing PM2..."
    npm install -g pm2
fi

# Stop any existing PM2 processes
echo "🛑 Stopping existing PM2 processes..."
pm2 stop all 2>/dev/null || true
pm2 delete all 2>/dev/null || true

# Start the error fixing automations
echo "🔧 Starting error fixing automations..."

# Start merge conflict resolver (highest priority)
echo "🔧 Starting merge conflict resolver..."
pm2 start ecosystem.config.cjs --only merge-conflict-resolver

# Start comprehensive error fixer
echo "🔧 Starting comprehensive error fixer..."
pm2 start ecosystem.config.cjs --only comprehensive-error-fixer

# Start linting error fixer
echo "🔧 Starting linting error fixer..."
pm2 start ecosystem.config.cjs --only linting-error-fixer

# Start TypeScript error fixer
echo "🔧 Starting TypeScript error fixer..."
pm2 start ecosystem.config.cjs --only typescript-error-fixer

# Start console error fixer
echo "🔧 Starting console error fixer..."
pm2 start ecosystem.config.cjs --only console-error-fixer

# Start error fixing orchestrator
echo "🎯 Starting error fixing orchestrator..."
pm2 start ecosystem.config.cjs --only error-fixing-orchestrator

# Show status
echo "📊 PM2 Status:"
pm2 status
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
<<<<<<< HEAD
>>>>>>> cursor/integrate-build-improve-and-re-verify-8f7d
=======
>>>>>>> origin/automation-improvements-final
>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
# Show logs
echo "Recent logs:"
pm2 logs --lines 20
echo "Error fixing automation system started successfully!"
echo "Monitor with: pm2 status"
echo "View logs with: pm2 logs"
echo "Stop with: pm2 stop all"
<<<<<<< HEAD
>>>>>>> 7c5570ce863aceb5500c5da6ecbea653a552cacd
=======
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-c7b5
<<<<<<< HEAD
>>>>>>> cursor/integrate-build-improve-and-re-verify-8f7d
=======

>>>>>>> origin/main
=======
>>>>>>> origin/automation-improvements-final
=======

>>>>>>> fd9cd2d2f8d32fcc77768547645dd1d80b314e27
>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
echo "📋 Available commands:"
echo "  pm2 logs error-fixer-automation          # View main error fixer logs"
echo "  pm2 logs typescript-error-fixer          # View TypeScript error fixer logs"
echo "  pm2 logs eslint-error-fixer              # View ESLint error fixer logs"
echo "  pm2 logs build-error-fixer               # View build error fixer logs"
echo "  pm2 status                               # View all processes status"
echo "  pm2 restart ecosystem-error-fixing.config.cjs  # Restart all error fixers"
echo "  pm2 stop ecosystem-error-fixing.config.cjs     # Stop all error fixers"
echo ""
echo "✅ Error Fixing Automation System started successfully!"
echo "🔧 The system will automatically detect and fix errors every 5-30 minutes"
echo "📊 Check the logs directory for detailed reports"
echo "📈 Monitor progress in the error-reports directory"
# Configuration
ECOSYSTEM_FILE="ecosystem-error-fixing-automation.config.cjs"
LOG_DIR="./automation/logs"
REPORTS_DIR="./error-reports"
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
    echo -e "${CYAN}====${NC}"
    echo -e "${CYAN}$1${NC}"
    echo -e "${CYAN}====${NC}"
}
# Function to check if PM2 is installed
check_pm2() {
    if ! command -v pm2 &> /dev/null; then
        print_error "PM2 is not installed. Please install it first:"
        echo "npm install -g pm2"
        exit 1
    fi
}
# Function to create necessary directories
create_directories() {
    print_status "Creating necessary directories..."
    mkdir -p "$LOG_DIR"
    mkdir -p "$REPORTS_DIR"
    mkdir -p "./automation"
    print_status "Directories created successfully"
}
# Function to install PM2 logrotate
install_pm2_logrotate() {
    print_status "Installing PM2 logrotate..."
    pm2 install pm2-logrotate || true
    pm2 set pm2-logrotate:max_size 10M
    pm2 set pm2-logrotate:retain 30
    pm2 set pm2-logrotate:compress true
    pm2 set pm2-logrotate:workerInterval 60
    pm2 set pm2-logrotate:rotateInterval '0 0 * * *'
    print_status "PM2 logrotate configured successfully"
}
# Function to start the automation
start_automation() {
    print_header "Starting Error Fixing Automation"
    check_pm2
    create_directories
    install_pm2_logrotate
    print_status "Starting PM2 processes..."
    # Start the automation
    pm2 start "$ECOSYSTEM_FILE" --update-env
    print_status "Automation started successfully"
    print_status "Use 'pm2 status' to check status"
    print_status "Use 'pm2 logs' to view logs"
}
# Function to stop the automation
stop_automation() {
    print_header "Stopping Error Fixing Automation"
    check_pm2
    print_status "Stopping PM2 processes..."
    pm2 stop "$ECOSYSTEM_FILE" || true
    pm2 delete "$ECOSYSTEM_FILE" || true
    print_status "Automation stopped successfully"
}
# Function to restart the automation
restart_automation() {
    print_header "Restarting Error Fixing Automation"
    check_pm2
    create_directories
    print_status "Restarting PM2 processes..."
    pm2 restart "$ECOSYSTEM_FILE" || pm2 start "$ECOSYSTEM_FILE" --update-env
    print_status "Automation restarted successfully"
}
# Function to show status
show_status() {
    print_header "Error Fixing Automation Status"
    check_pm2
    echo ""
    print_status "PM2 Status:"
    pm2 status
    echo ""
    print_status "Recent Logs:"
    pm2 logs --lines 20
    echo ""
    print_status "Recent Error Reports:"
    if [ -d "$REPORTS_DIR" ]; then
        ls -la "$REPORTS_DIR" | head -10
    else
        print_warning "No error reports directory found"
    fi
}
# Function to show logs
show_logs() {
    print_header "Error Fixing Automation Logs"
    check_pm2
    local lines=${1:-50}
    print_status "Showing last $lines lines of logs:"
    pm2 logs --lines "$lines"
}
# Function to run a single error fix
run_single_fix() {
    print_header "Running Single Error Fix"
    print_status "Running error fixer automation..."
    node automation/error-fixer-automation.js
    print_status "Single error fix completed"
}
# Function to run a single health check
run_health_check() {
    print_header "Running Health Check"
    print_status "Running error monitor..."
    node automation/error-monitor.js &
    local monitor_pid=$!
    # Wait for initial health check
    sleep 10
    # Stop the monitor
    kill $monitor_pid 2>/dev/null || true
    print_status "Health check completed"
}
# Function to clean up old reports and logs
cleanup() {
    print_header "Cleaning Up Old Reports and Logs"
    print_status "Cleaning up old error reports..."
    if [ -d "$REPORTS_DIR" ]; then
        find "$REPORTS_DIR" -name "*.json" -mtime +7 -delete
        print_status "Old error reports cleaned up"
    fi
    print_status "Cleaning up old logs..."
    if [ -d "$LOG_DIR" ]; then
        find "$LOG_DIR" -name "*.log" -mtime +7 -delete
        print_status "Old logs cleaned up"
    fi
    print_status "Cleanup completed"
}
# Function to show help
show_help() {
    print_header "Error Fixing Automation Help"
    echo "Usage: $0 [COMMAND]"
    echo ""
    echo "Commands:"
    echo "  start           Start the error fixing automation"
    echo "  stop            Stop the error fixing automation"
    echo "  restart         Restart the error fixing automation"
    echo "  status          Show status of automation processes"
    echo "  logs [lines]    Show logs (default: 50 lines)"
    echo "  fix             Run a single error fix"
    echo "  health          Run a single health check"
    echo "  cleanup         Clean up old reports and logs"
    echo "  help            Show this help message"
    echo ""
    echo "Examples:"
    echo "  $0 start        # Start the automation"
    echo "  $0 logs 100     # Show last 100 lines of logs"
    echo "  $0 fix          # Run a single error fix"
    echo ""
    echo "PM2 Commands:"
    echo "  pm2 status      # Check PM2 process status"
    echo "  pm2 logs        # View all PM2 logs"
    echo "  pm2 monit       # Monitor PM2 processes"
    echo "  pm2 reload all  # Reload all processes"
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
        run_single_fix
        ;;
    health)
        run_health_check
        ;;
    cleanup)
        cleanup
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
<<<<<<< HEAD
=======
esac
<<<<<<< HEAD
>>>>>>> 7c5570ce863aceb5500c5da6ecbea653a552cacd
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-c7b5
<<<<<<< HEAD
>>>>>>> cursor/integrate-build-improve-and-re-verify-8f7d
=======
>>>>>>> origin/main
=======
>>>>>>> origin/automation-improvements-final
=======
>>>>>>> fd9cd2d2f8d32fcc77768547645dd1d80b314e27
>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127

#!/bin/bash

# 🚨 Comprehensive Error Fixing Automation System Startup Script
# This script starts the PM2-based error fixing automation system

set -e

echo "🚨 Starting Comprehensive Error Fixing Automation System..."

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

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

# Check if PM2 is installed
check_pm2() {
    if ! command -v pm2 &> /dev/null; then
        print_error "PM2 is not installed. Installing PM2..."
        npm install -g pm2
        if [ $? -ne 0 ]; then
            print_error "Failed to install PM2. Please install it manually: npm install -g pm2"
            exit 1
        fi
        print_success "PM2 installed successfully"
    else
        print_success "PM2 is already installed"
    fi
}

# Check if required directories exist
setup_directories() {
    print_status "Setting up required directories..."
    
    mkdir -p logs
    mkdir -p reports
    mkdir -p .pm2
    
    print_success "Directories created"
}

# Check if required dependencies are installed
check_dependencies() {
    print_status "Checking project dependencies..."
    
    if [ ! -d "node_modules" ]; then
        print_warning "node_modules not found. Installing dependencies..."
        npm install
        if [ $? -ne 0 ]; then
            print_error "Failed to install dependencies"
            exit 1
        fi
        print_success "Dependencies installed"
    else
        print_success "Dependencies are already installed"
    fi
}

# Check if required automation scripts exist
check_automation_scripts() {
    print_status "Checking automation scripts..."
    
    local missing_scripts=()
    
    if [ ! -f "scripts/automation/comprehensive-error-fixer.cjs" ]; then
        missing_scripts+=("comprehensive-error-fixer.cjs")
    fi
    
    if [ ! -f "scripts/automation/typescript-error-monitor.cjs" ]; then
        missing_scripts+=("typescript-error-monitor.cjs")
    fi
    
    if [ ! -f "scripts/automation/eslint-error-cleaner.cjs" ]; then
        missing_scripts+=("eslint-error-cleaner.cjs")
    fi
    
    if [ ${#missing_scripts[@]} -ne 0 ]; then
        print_error "Missing automation scripts: ${missing_scripts[*]}"
        print_error "Please ensure all automation scripts are present before starting"
        exit 1
    fi
    
    print_success "All automation scripts are present"
}

# Stop any existing PM2 processes
stop_existing_processes() {
    print_status "Stopping any existing PM2 processes..."
    
    if pm2 list | grep -q "error-fixing"; then
        pm2 stop ecosystem-error-fixing.config.cjs
        pm2 delete ecosystem-error-fixing.config.cjs
        print_success "Existing processes stopped"
    else
        print_status "No existing error fixing processes found"
    fi
}

# Start the error fixing automation system
start_automation_system() {
    print_status "Starting error fixing automation system..."
    
    # Start with the main ecosystem configuration
    pm2 start ecosystem-error-fixing.config.cjs
    
    if [ $? -eq 0 ]; then
        print_success "Error fixing automation system started successfully"
    else
        print_error "Failed to start error fixing automation system"
        exit 1
    fi
}

# Show status of all processes
show_status() {
    print_status "Current PM2 status:"
    pm2 status
    
    print_status "Error fixing automation processes:"
    pm2 list | grep "error-fixing" || echo "No error fixing processes found"
}

# Show logs
show_logs() {
    print_status "Recent logs from error fixing processes:"
    
    echo "=== Comprehensive Error Fixer Logs ==="
    if [ -f "logs/comprehensive-error-fixer.log" ]; then
        tail -n 20 logs/comprehensive-error-fixer.log
    else
        echo "No logs found yet"
    fi
    
    echo -e "\n=== TypeScript Error Monitor Logs ==="
    if [ -f "logs/typescript-error-monitor.log" ]; then
        tail -n 20 logs/typescript-error-monitor.log
    else
        echo "No logs found yet"
    fi
    
    echo -e "\n=== ESLint Error Cleaner Logs ==="
    if [ -f "logs/eslint-error-cleaner.log" ]; then
        tail -n 20 logs/eslint-error-cleaner.log
    else
        echo "No logs found yet"
    fi
}

# Main execution
main() {
    print_status "🚨 Comprehensive Error Fixing Automation System"
    print_status "================================================"
    
    # Check prerequisites
    check_pm2
    check_dependencies
    check_automation_scripts
    setup_directories
    
    # Stop existing processes
    stop_existing_processes
    
    # Start automation system
    start_automation_system
    
    # Wait a moment for processes to start
    sleep 3
    
    # Show status
    show_status
    
    print_success "🎉 Error fixing automation system is now running!"
    print_status "The system will automatically:"
    print_status "  • Monitor for TypeScript errors every 15 minutes"
    print_status "  • Clean ESLint errors every 20 minutes"
    print_status "  • Run comprehensive error fixes every 2 hours"
    print_status "  • Generate detailed reports in the 'reports' directory"
    print_status "  • Log all activities in the 'logs' directory"
    
    echo ""
    print_status "Useful commands:"
    print_status "  pm2 status                    - Show process status"
    print_status "  pm2 logs                      - Show real-time logs"
    print_status "  pm2 monit                     - Monitor processes"
    print_status "  pm2 stop ecosystem-error-fixing.config.cjs  - Stop automation"
    print_status "  pm2 restart ecosystem-error-fixing.config.cjs - Restart automation"
    
    echo ""
    print_status "Logs and reports are available in:"
    print_status "  • logs/                       - Process logs"
    print_status "  • reports/                    - Error fix reports"
    print_status "  • .pm2/                      - PM2 configuration"
}

# Handle script arguments
case "${1:-}" in
    "status")
        show_status
        ;;
    "logs")
        show_logs
        ;;
    "stop")
        print_status "Stopping error fixing automation system..."
        pm2 stop ecosystem-error-fixing.config.cjs
        pm2 delete ecosystem-error-fixing.config.cjs
        print_success "Automation system stopped"
        ;;
    "restart")
        print_status "Restarting error fixing automation system..."
        pm2 restart ecosystem-error-fixing.config.cjs
        print_success "Automation system restarted"
        ;;
    "help"|"-h"|"--help")
        echo "Usage: $0 [command]"
        echo ""
        echo "Commands:"
        echo "  (no args)  - Start the error fixing automation system"
        echo "  status     - Show current process status"
        echo "  logs       - Show recent logs"
        echo "  stop       - Stop the automation system"
        echo "  restart    - Restart the automation system"
        echo "  help       - Show this help message"
        ;;
    *)
        main
        ;;
esac
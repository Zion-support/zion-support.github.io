#!/bin/bash

# 🚀 Zion PM2 Intelligent Automation System - Startup Script
# This script sets up and starts the complete PM2 automation system

set -e

echo "🚀 Starting Zion PM2 Intelligent Automation System..."

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
        print_warning "PM2 not found. Installing PM2..."
        npm install -g pm2
        print_success "PM2 installed successfully"
    else
        print_success "PM2 is already installed"
    fi
}

# Setup PM2 log rotation
setup_pm2_logrotate() {
    print_status "Setting up PM2 log rotation..."
    pm2 install pm2-logrotate
    pm2 set pm2-logrotate:max_size 10M
    pm2 set pm2-logrotate:retain 30
    pm2 set pm2-logrotate:compress true
    print_success "PM2 log rotation configured"
}

# Create necessary directories
create_directories() {
    print_status "Creating necessary directories..."
    mkdir -p logs backups
    print_success "Directories created"
}

# Check if ecosystem config exists
check_ecosystem() {
    if [ ! -f "ecosystem.config.cjs" ]; then
        print_error "ecosystem.config.cjs not found!"
        print_error "Please ensure you have the PM2 ecosystem configuration file."
        exit 1
    fi
}

# Start the automation system
start_automation() {
    print_status "Starting Zion PM2 automation system..."
    
    # Start the main processes
    print_status "Starting development environment..."
    pm2 start ecosystem.config.cjs --env development
    
    # Start monitoring systems
    print_status "Starting intelligent monitoring..."
    pm2 start scripts/pm2-monitor.js --name zion-monitor
    
    print_status "Starting build watcher..."
    pm2 start scripts/pm2-build-watcher.js --name zion-build-watcher
    
    print_status "Starting PM2 manager..."
    pm2 start scripts/pm2-manager.js --name zion-pm2-manager
    
    # Save PM2 configuration
    pm2 save
    
    print_success "All processes started successfully!"
}

# Show status
show_status() {
    echo ""
    print_status "Current PM2 status:"
    pm2 status
    
    echo ""
    print_status "PM2 logs (last 20 lines):"
    pm2 logs --lines 20
}

# Main execution
main() {
    echo "=========================================="
    echo "🚀 Zion PM2 Intelligent Automation System"
    echo "=========================================="
    echo ""
    
    # Check prerequisites
    check_pm2
    setup_pm2_logrotate
    create_directories
    check_ecosystem
    
    # Start the system
    start_automation
    
    # Show status
    show_status
    
    echo ""
    echo "=========================================="
    print_success "Zion PM2 automation system is now running!"
    echo "=========================================="
    echo ""
    echo "📊 Available commands:"
    echo "  pm2 status                    - Show process status"
    echo "  pm2 monit                     - Open PM2 monitor"
    echo "  pm2 logs                      - Show all logs"
    echo "  npm run health:check          - Perform health check"
    echo "  npm run deploy:staging        - Deploy to staging"
    echo "  npm run deploy:production     - Deploy to production"
    echo ""
    echo "📚 For more information, see: PM2_AUTOMATION_README.md"
    echo ""
    echo "🛑 To stop the system: pm2 stop all"
    echo "🔄 To restart: pm2 restart all"
    echo "🗑️  To remove: pm2 delete all"
}

# Run main function
main "$@"
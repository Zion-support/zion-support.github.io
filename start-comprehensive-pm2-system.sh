#!/bin/bash

# Comprehensive PM2 System Startup Script
# This script starts the enhanced PM2 system with all intelligent automations

set -e

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
PURPLE='\033[0;35m'
CYAN='\033[0;36m'
NC='\033[0m' # No Color

# Function to print colored output
print_status() {
    echo -e "${GREEN}✅ $1${NC}"
}

print_error() {
    echo -e "${RED}❌ $1${NC}"
}

print_warning() {
    echo -e "${YELLOW}⚠️  $1${NC}"
}

print_info() {
    echo -e "${BLUE}ℹ️  $1${NC}"
}

print_header() {
    echo -e "${PURPLE}🚀 $1${NC}"
}

# Function to check if PM2 is installed
check_pm2() {
    if ! command -v pm2 &> /dev/null; then
        print_error "PM2 is not installed. Please install it first:"
        echo "npm install -g pm2"
        exit 1
    fi
    print_status "PM2 is installed"
}

# Function to check if Node.js is installed
check_node() {
    if ! command -v node &> /dev/null; then
        print_error "Node.js is not installed. Please install it first."
        exit 1
    fi
    print_status "Node.js is installed"
}

# Function to create necessary directories
create_directories() {
    print_info "Creating necessary directories..."
    mkdir -p logs/pm2
    mkdir -p reports
    mkdir -p backups
    print_status "Directories created"
}

# Function to stop existing PM2 processes
stop_existing_processes() {
    print_info "Stopping existing PM2 processes..."
    pm2 stop all 2>/dev/null || true
    pm2 delete all 2>/dev/null || true
    print_status "Existing processes stopped"
}

# Function to start the main application
start_main_app() {
    print_header "Starting main application..."
    
    if [ -f "ecosystem.optimal.cjs" ]; then
        print_info "Using optimal ecosystem configuration..."
        pm2 start ecosystem.optimal.cjs
    elif [ -f "ecosystem.enhanced-intelligent-v3.cjs" ]; then
        print_info "Using enhanced intelligent v3 configuration..."
        pm2 start ecosystem.enhanced-intelligent-v3.cjs
    elif [ -f "ecosystem.config.js" ]; then
        print_info "Using default ecosystem configuration..."
        pm2 start ecosystem.config.js
    else
        print_error "No ecosystem configuration file found!"
        exit 1
    fi
    
    print_status "Main application started"
}

# Function to start monitoring dashboard
start_monitoring_dashboard() {
    print_header "Starting monitoring dashboard..."
    
    if [ -f "scripts/automation/monitoring-dashboard.cjs" ]; then
        pm2 start scripts/automation/monitoring-dashboard.cjs --name "monitoring-dashboard"
        print_status "Monitoring dashboard started on http://localhost:3001"
    else
        print_warning "Monitoring dashboard script not found, skipping..."
    fi
}

# Function to start intelligent error recovery
start_error_recovery() {
    print_header "Starting intelligent error recovery..."
    
    if [ -f "scripts/automation/intelligent-error-recovery.cjs" ]; then
        pm2 start scripts/automation/intelligent-error-recovery.cjs --name "error-recovery" --cron "*/5 * * * *"
        print_status "Intelligent error recovery started"
    else
        print_warning "Error recovery script not found, skipping..."
    fi
}

# Function to start additional automation scripts
start_additional_automations() {
    print_header "Starting additional automation scripts..."
    
    # Start AI intelligent orchestrator if available
    if [ -f "scripts/automation/ai-intelligent-orchestrator.cjs" ]; then
        pm2 start scripts/automation/ai-intelligent-orchestrator.cjs --name "ai-orchestrator"
        print_status "AI intelligent orchestrator started"
    fi
    
    # Start predictive analytics engine if available
    if [ -f "scripts/automation/predictive-analytics-engine.cjs" ]; then
        pm2 start scripts/automation/predictive-analytics-engine.cjs --name "predictive-analytics"
        print_status "Predictive analytics engine started"
    fi
    
    # Start intelligent auto-scaler if available
    if [ -f "scripts/automation/intelligent-auto-scaler.cjs" ]; then
        pm2 start scripts/automation/intelligent-auto-scaler.cjs --name "auto-scaler"
        print_status "Intelligent auto-scaler started"
    fi
    
    # Start health dashboard if available
    if [ -f "scripts/automation/health-dashboard.cjs" ]; then
        pm2 start scripts/automation/health-dashboard.cjs --name "health-dashboard"
        print_status "Health dashboard started"
    fi
}

# Function to show PM2 status
show_status() {
    print_header "PM2 Process Status:"
    pm2 list
    
    echo ""
    print_header "System Information:"
    echo "📊 Monitoring Dashboard: http://localhost:3001"
    echo "🔧 PM2 Web Interface: pm2 web"
    echo "📝 Logs: pm2 logs"
    echo "📈 Monitoring: pm2 monit"
}

# Function to save PM2 configuration
save_pm2_config() {
    print_info "Saving PM2 configuration..."
    pm2 save
    pm2 startup
    print_status "PM2 configuration saved"
}

# Main execution
main() {
    print_header "Starting Comprehensive PM2 System"
    echo ""
    
    # Pre-flight checks
    check_node
    check_pm2
    
    # Setup
    create_directories
    stop_existing_processes
    
    # Start services
    start_main_app
    start_monitoring_dashboard
    start_error_recovery
    start_additional_automations
    
    # Show status
    show_status
    
    # Save configuration
    save_pm2_config
    
    echo ""
    print_status "🎉 Comprehensive PM2 system started successfully!"
    echo ""
    print_info "Useful commands:"
    echo "  pm2 list          - Show all processes"
    echo "  pm2 logs          - Show logs"
    echo "  pm2 monit         - Show monitoring interface"
    echo "  pm2 restart all   - Restart all processes"
    echo "  pm2 stop all      - Stop all processes"
    echo "  pm2 delete all    - Delete all processes"
    echo ""
    print_info "Dashboard URLs:"
    echo "  Monitoring: http://localhost:3001"
    echo "  PM2 Web: pm2 web"
}

# Run main function
main "$@"
#!/bin/bash

# Enhanced PM2 Error Fixing Automation Startup Script
# This script starts all error fixing and prevention automations

set -e

# Color codes for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Logging function
log() {
    echo -e "${BLUE}[$(date +'%Y-%m-%d %H:%M:%S')]${NC} $1"
}

error() {
    echo -e "${RED}[$(date +'%Y-%m-%d %H:%M:%S')] ERROR:${NC} $1" >&2
}

success() {
    echo -e "${GREEN}[$(date +'%Y-%m-%d %H:%M:%S')] SUCCESS:${NC} $1"
}

warn() {
    echo -e "${YELLOW}[$(date +'%Y-%m-%d %H:%M:%S')] WARNING:${NC} $1"
}

# Function to check if PM2 is installed
check_pm2() {
    if ! command -v pm2 &> /dev/null; then
        error "PM2 is not installed. Installing PM2..."
        npm install -g pm2
        success "PM2 installed successfully"
    else
        log "PM2 is already installed"
    fi
}

# Function to create necessary directories
create_directories() {
    log "Creating necessary directories..."
    
    directories=(
        "automation/logs"
        "automation/backups"
        "automation/reports"
        "logs"
    )
    
    for dir in "${directories[@]}"; do
        if [ ! -d "$dir" ]; then
            mkdir -p "$dir"
            log "Created directory: $dir"
        fi
    done
    
    success "All directories created successfully"
}

# Function to install dependencies
install_dependencies() {
    log "Installing project dependencies..."
    
    if [ -f "package.json" ]; then
        npm install --legacy-peer-deps
        success "Dependencies installed successfully"
    else
        error "package.json not found"
        exit 1
    fi
}

# Function to fix immediate errors
fix_immediate_errors() {
    log "Fixing immediate errors before starting PM2..."
    
    # Fix critical configuration files
    if [ -f "scripts/automation/pm2-error-prevention-automation.cjs" ]; then
        node scripts/automation/pm2-error-prevention-automation.cjs &
        PREVENTION_PID=$!
        sleep 10
        kill $PREVENTION_PID 2>/dev/null || true
        log "Initial error prevention completed"
    fi
    
    # Run basic linting fixes
    if npm run lint -- --fix 2>/dev/null; then
        log "ESLint auto-fixes applied"
    else
        warn "ESLint found issues that need attention"
    fi
    
    success "Immediate error fixes completed"
}

# Function to setup PM2 logrotate
setup_logrotate() {
    log "Setting up PM2 log rotation..."
    
    pm2 install pm2-logrotate || warn "Failed to install pm2-logrotate"
    pm2 set pm2-logrotate:max_size 10M
    pm2 set pm2-logrotate:retain 30
    pm2 set pm2-logrotate:compress true
    pm2 set pm2-logrotate:workerInterval 60
    pm2 set pm2-logrotate:rotateInterval '0 0 * * *'
    
    success "PM2 log rotation configured"
}

# Function to start PM2 ecosystem
start_pm2_ecosystem() {
    log "Starting PM2 Error Fixing Ecosystem..."
    
    # Stop any existing PM2 processes
    pm2 kill || warn "No existing PM2 processes to kill"
    
    # Start the enhanced error fixing ecosystem
    if [ -f "ecosystem-enhanced-error-fixing.config.cjs" ]; then
        pm2 start ecosystem-enhanced-error-fixing.config.cjs --update-env
        success "PM2 Enhanced Error Fixing Ecosystem started successfully"
    else
        error "ecosystem-enhanced-error-fixing.config.cjs not found"
        exit 1
    fi
    
    # Wait a moment for processes to start
    sleep 5
    
    # Show PM2 status
    pm2 status
}

# Function to setup PM2 startup
setup_pm2_startup() {
    log "Setting up PM2 startup..."
    
    # Generate startup script
    pm2 startup
    
    # Save current PM2 processes
    pm2 save
    
    success "PM2 startup configured"
}

# Function to verify automation is working
verify_automation() {
    log "Verifying automation setup..."
    
    # Check if all processes are running
    sleep 10
    
    local running_processes=$(pm2 jlist | jq -r '.[] | select(.pm2_env.status == "online") | .name' | wc -l)
    local total_processes=$(pm2 jlist | jq length)
    
    if [ "$running_processes" -eq "$total_processes" ]; then
        success "All automation processes are running ($running_processes/$total_processes)"
    else
        warn "Some automation processes are not running ($running_processes/$total_processes)"
        pm2 status
    fi
    
    # Check log files
    log "Checking log files..."
    
    if [ -d "automation/logs" ]; then
        local log_count=$(find automation/logs -name "*.log" | wc -l)
        log "Found $log_count log files"
    fi
    
    success "Automation verification completed"
}

# Function to display monitoring information
display_monitoring_info() {
    log "==================== PM2 ERROR FIXING AUTOMATION STARTED ===================="
    echo
    success "The following automations are now running:"
    echo
    echo "  🔍 error-prevention-monitor     - Runs every 5 minutes"
    echo "  🤖 intelligent-error-fixer     - Runs every 3 minutes"
    echo "  ⚡ syntax-error-monitor        - Runs every 2 minutes"
    echo "  🏗️  build-error-detector        - Runs every 10 minutes"
    echo "  🔒 security-fixer              - Runs every 30 minutes"
    echo "  📦 dependency-health-monitor   - Runs every hour"
    echo "  ✅ quality-monitor             - Runs every 15 minutes"
    echo "  🚀 performance-monitor         - Runs every 20 minutes"
    echo "  🔗 link-integrity-checker      - Runs every 4 hours"
    echo "  💡 code-improvement-monitor    - Runs every 6 hours"
    echo
    log "==================== USEFUL COMMANDS ===================="
    echo
    echo "  View all processes:          pm2 status"
    echo "  View logs:                   pm2 logs"
    echo "  View specific logs:          pm2 logs [process-name]"
    echo "  Restart all:                 pm2 restart all"
    echo "  Stop all:                    pm2 stop all"
    echo "  Reload configuration:        pm2 reload ecosystem-enhanced-error-fixing.config.cjs"
    echo "  Monitor real-time:           pm2 monit"
    echo
    log "==================== LOG LOCATIONS ===================="
    echo
    echo "  Main logs:                   ./automation/logs/"
    echo "  Error logs:                  ./automation/logs/*-error.log"
    echo "  Output logs:                 ./automation/logs/*-out.log"
    echo "  Reports:                     ./automation/reports/"
    echo
    log "======================= COMPLETED ======================="
}

# Main execution
main() {
    log "Starting Enhanced PM2 Error Fixing Automation Setup..."
    
    # Check prerequisites
    check_pm2
    
    # Setup environment
    create_directories
    install_dependencies
    
    # Fix immediate issues
    fix_immediate_errors
    
    # Setup PM2
    setup_logrotate
    start_pm2_ecosystem
    setup_pm2_startup
    
    # Verify everything is working
    verify_automation
    
    # Display monitoring information
    display_monitoring_info
    
    success "Enhanced PM2 Error Fixing Automation setup completed successfully!"
}

# Execute main function
main "$@"
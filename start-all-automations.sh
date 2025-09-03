#!/bin/bash

# Start All PM2 Automations Script
# This script starts all the key automation processes individually

set -e

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
PURPLE='\033[0;35m'
CYAN='\033[0;36m'
NC='\033[0m' # No Color

# Logging functions
log() {
    echo -e "${BLUE}[$(date +'%Y-%m-%d %H:%M:%S')]${NC} $1"
}

success() {
    echo -e "${GREEN}✅ $1${NC}"
}

warning() {
    echo -e "${YELLOW}⚠️  $1${NC}"
}

error() {
    echo -e "${RED}❌ $1${NC}"
}

info() {
    echo -e "${CYAN}ℹ️  $1${NC}"
}

# Check if PM2 is installed
check_pm2() {
    if ! command -v pm2 &> /dev/null; then
        error "PM2 is not installed. Installing PM2 globally..."
        npm install -g pm2
        success "PM2 installed successfully"
    else
        info "PM2 is already installed: $(pm2 --version)"
    fi
}

# Stop existing processes
stop_existing_processes() {
    log "Stopping existing PM2 processes..."
    
    if pm2 list | grep -q "online\|stopped"; then
        pm2 stop all
        pm2 delete all
        success "Existing PM2 processes stopped and deleted"
    else
        info "No existing PM2 processes found"
    fi
}

# Create logs directory
setup_logs() {
    log "Setting up logs directory..."
    mkdir -p logs
    success "Logs directory created"
}

# Start individual automation processes
start_automations() {
    log "Starting PM2 automation processes..."
    
    # AI Code Analyzer
    log "Starting AI Code Analyzer..."
    pm2 start scripts/automation/ai-code-analyzer.cjs --name "ai-code-analyzer" --log logs/ai-code-analyzer.log --error logs/ai-code-analyzer-error.log --out logs/ai-code-analyzer-out.log
    success "AI Code Analyzer started"
    
    # Smart Performance Optimizer
    log "Starting Smart Performance Optimizer..."
    pm2 start scripts/automation/smart-performance-optimizer.cjs --name "smart-performance-optimizer" --log logs/smart-performance-optimizer.log --error logs/smart-performance-optimizer-error.log --out logs/smart-performance-optimizer-out.log
    success "Smart Performance Optimizer started"
    
    # Intelligent Dependency Manager
    log "Starting Intelligent Dependency Manager..."
    pm2 start scripts/automation/intelligent-dependency-manager.cjs --name "intelligent-dependency-manager" --log logs/intelligent-dependency-manager.log --error logs/intelligent-dependency-manager-error.log --out logs/intelligent-dependency-manager-out.log
    success "Intelligent Dependency Manager started"
    
    # Smart Deployment Automation
    log "Starting Smart Deployment Automation..."
    pm2 start scripts/automation/smart-deployment-automation.cjs --name "smart-deployment-automation" --log logs/smart-deployment-automation.log --error logs/smart-deployment-automation-error.log --out logs/smart-deployment-automation-out.log
    success "Smart Deployment Automation started"
    
    # Enhanced Security Automation
    log "Starting Enhanced Security Automation..."
    pm2 start scripts/automation/enhanced-security-automation.cjs --name "enhanced-security-automation" --log logs/enhanced-security-automation.log --error logs/enhanced-security-automation-error.log --out logs/enhanced-security-automation-out.log
    success "Enhanced Security Automation started"
    
    # Project Health Monitor
    log "Starting Project Health Monitor..."
    pm2 start scripts/automation/project-health-monitor.cjs --name "project-health-monitor" --log logs/project-health-monitor.log --error logs/project-health-monitor-error.log --out logs/project-health-monitor-out.log
    success "Project Health Monitor started"
    
    # PM2 Sync Automation
    log "Starting PM2 Sync Automation..."
    pm2 start scripts/automation/pm2-sync-automation.cjs --name "pm2-sync-automation" --log logs/pm2-sync-automation.log --error logs/pm2-sync-automation-error.log --out logs/pm2-sync-automation-out.log
    success "PM2 Sync Automation started"
    
    # Link Checker Automation
    log "Starting Link Checker Automation..."
    pm2 start scripts/automation/link-checker-automation.cjs --name "link-checker-automation" --log logs/link-checker-automation.log --error logs/link-checker-automation-error.log --out logs/link-checker-automation-out.log
    success "Link Checker Automation started"
    
    # TypeScript Syntax Fixer
    log "Starting TypeScript Syntax Fixer..."
    pm2 start scripts/automation/typescript-syntax-fixer.cjs --name "typescript-syntax-fixer" --log logs/typescript-syntax-fixer.log --error logs/typescript-syntax-fixer-error.log --out logs/typescript-syntax-fixer-out.log
    success "TypeScript Syntax Fixer started"
    
    # Console Error Fixer
    log "Starting Console Error Fixer..."
    pm2 start scripts/automation/console-error-fixer.cjs --name "console-error-fixer" --log logs/console-error-fixer.log --error logs/console-error-fixer-error.log --out logs/console-error-fixer-out.log
    success "Console Error Fixer started"
    
    success "All automation processes started successfully!"
}

# Setup PM2 logrotate
setup_pm2_logrotate() {
    log "Setting up PM2 log rotation..."
    
    # Install pm2-logrotate if not already installed
    if ! pm2 list | grep -q "pm2-logrotate"; then
        pm2 install pm2-logrotate
        success "PM2 logrotate installed"
    fi
    
    # Configure log rotation
    pm2 set pm2-logrotate:max_size 10M
    pm2 set pm2-logrotate:retain 7
    pm2 set pm2-logrotate:compress true
    pm2 set pm2-logrotate:date_format YYYY-MM-DD_HH-mm-ss
    
    success "PM2 log rotation configured"
}

# Setup PM2 monitoring
setup_pm2_monitoring() {
    log "Setting up PM2 monitoring..."
    
    # Save PM2 configuration
    pm2 save
    
    # Setup PM2 startup script
    pm2 startup
    
    success "PM2 monitoring and startup configured"
}

# Display system status
display_system_status() {
    log "PM2 Automation System Status:"
    echo
    
    # Show PM2 process list
    pm2 list
    
    echo
    info "System Information:"
    echo "  PM2 Version: $(pm2 --version)"
    echo "  Node Version: $(node --version)"
    echo "  NPM Version: $(npm --version)"
    
    echo
    info "Available Commands:"
    echo "  View logs: pm2 logs"
    echo "  Monitor processes: pm2 monit"
    echo "  Restart system: pm2 restart all"
    echo "  Stop system: pm2 stop all"
    echo "  Delete system: pm2 delete all"
    echo "  Save configuration: pm2 save"
    echo "  Setup startup: pm2 startup"
    
    echo
    info "Log Files Location: ./logs/"
    echo "  - AI Code Analyzer: logs/ai-code-analyzer.log"
    echo "  - Performance Optimizer: logs/smart-performance-optimizer.log"
    echo "  - Dependency Manager: logs/intelligent-dependency-manager.log"
    echo "  - Deployment Automation: logs/smart-deployment-automation.log"
    echo "  - And many more..."
}

# Main execution
main() {
    echo -e "${PURPLE}🚀 Starting All PM2 Automations${NC}"
    echo "=========================================="
    echo
    
    # Check prerequisites
    check_pm2
    
    # Setup system
    setup_logs
    stop_existing_processes
    
    # Start automations
    start_automations
    
    # Setup additional features
    setup_pm2_logrotate
    setup_pm2_monitoring
    
    # Display status
    display_system_status
    
    echo
    success "All PM2 automations are now running!"
    echo
    info "Next steps:"
    echo "  1. Monitor the system: pm2 monit"
    echo "  2. Check logs: pm2 logs"
    echo "  3. View specific process: pm2 logs <process-name>"
    echo
    info "The system will automatically:"
    echo "  - Analyze and fix code issues"
    echo "  - Optimize performance and bundle size"
    echo "  - Manage dependencies and security"
    echo "  - Handle deployments intelligently"
    echo "  - Monitor project health continuously"
    echo
}

# Run main function
main "$@"
#!/bin/bash

# Simple PM2 Automation Startup Script
# This script starts key automation processes directly

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

# Create logs directory
create_logs_directory() {
    log "Creating logs directory..."
    mkdir -p logs
    success "Logs directory created"
}

# Stop existing processes
stop_existing_processes() {
    log "Stopping existing PM2 processes..."
    
    # Always try to stop and delete, ignore errors
    pm2 stop all 2>/dev/null || true
    pm2 delete all 2>/dev/null || true
    info "Existing PM2 processes cleaned up"
}

# Start automation processes
start_automation_processes() {
    log "Starting PM2 automation processes..."
    
    # Start AI Code Analyzer
    info "Starting AI Code Analyzer..."
    if pm2 start ./scripts/automation/ai-code-analyzer.cjs --name "ai-code-analyzer" --log ./logs/ai-code-analyzer.log --error ./logs/ai-code-analyzer-error.log; then
        success "AI Code Analyzer started"
    else
        warning "Failed to start AI Code Analyzer"
    fi
    
    # Start Performance Monitor
    info "Starting Performance Monitor..."
    if pm2 start ./scripts/automation/performance-monitor.cjs --name "performance-monitor" --log ./logs/performance-monitor.log --error ./logs/performance-monitor-error.log; then
        success "Performance Monitor started"
    else
        warning "Failed to start Performance Monitor"
    fi
    
    # Start Dependency Manager
    info "Starting Dependency Manager..."
    if pm2 start ./scripts/automation/dependency-manager.cjs --name "dependency-manager" --log ./logs/dependency-manager.log --error ./logs/dependency-manager-error.log; then
        success "Dependency Manager started"
    else
        warning "Failed to start Dependency Manager"
    fi
    
    # Start TypeScript Syntax Fixer
    info "Starting TypeScript Syntax Fixer..."
    if pm2 start ./scripts/automation/typescript-syntax-fixer.cjs --name "typescript-syntax-fixer" --log ./logs/typescript-syntax-fixer.log --error ./logs/typescript-syntax-fixer-error.log; then
        success "TypeScript Syntax Fixer started"
    else
        warning "Failed to start TypeScript Syntax Fixer"
    fi
    
    # Start Console Error Fixer
    info "Starting Console Error Fixer..."
    if pm2 start ./scripts/automation/console-error-fixer.cjs --name "console-error-fixer" --log ./logs/console-error-fixer.log --error ./logs/console-error-fixer-error.log; then
        success "Console Error Fixer started"
    else
        warning "Failed to start Console Error Fixer"
    fi
    
    # Start Link Checker Automation
    info "Starting Link Checker Automation..."
    if pm2 start ./scripts/automation/link-checker-automation.cjs --name "link-checker-automation" --log ./logs/link-checker-automation.log --error ./logs/link-checker-automation-error.log; then
        success "Link Checker Automation started"
    else
        warning "Failed to start Link Checker Automation"
    fi
    
    # Start Quality Checks
    info "Starting Quality Checks..."
    if pm2 start ./scripts/automation/quality-checks.cjs --name "quality-checks" --log ./logs/quality-checks.log --error ./logs/quality-checks-error.log; then
        success "Quality Checks started"
    else
        warning "Failed to start Quality Checks"
    fi
    
    # Start Security Audit
    info "Starting Security Audit..."
    if pm2 start ./scripts/automation/security-audit.cjs --name "security-audit" --log ./logs/security-audit.log --error ./logs/security-audit-error.log; then
        success "Security Audit started"
    else
        warning "Failed to start Security Audit"
    fi
    
    success "All automation processes started"
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
    echo "  - Performance Monitor: logs/performance-monitor.log"
    echo "  - Dependency Manager: logs/dependency-manager.log"
    echo "  - TypeScript Syntax Fixer: logs/typescript-syntax-fixer.log"
    echo "  - Console Error Fixer: logs/console-error-fixer.log"
    echo "  - Link Checker Automation: logs/link-checker-automation.log"
    echo "  - Quality Checks: logs/quality-checks.log"
    echo "  - Security Audit: logs/security-audit.log"
}

# Main execution
main() {
    echo -e "${PURPLE}🚀 PM2 Automation System Startup${NC}"
    echo "=========================================="
    echo
    
    # Check prerequisites
    check_pm2
    
    # Setup system
    create_logs_directory
    stop_existing_processes
    
    # Start automation processes
    start_automation_processes
    
    # Setup additional features
    setup_pm2_logrotate
    
    # Display status
    display_system_status
    
    echo
    success "PM2 Automation System is now running!"
    echo
    info "Next steps:"
    echo "  1. Monitor the system: pm2 monit"
    echo "  2. Check logs: pm2 logs"
    echo "  3. View specific process: pm2 logs <process-name>"
    echo
    info "The system will automatically:"
    echo "  - Analyze and fix code issues"
    echo "  - Monitor performance and dependencies"
    echo "  - Check code quality and security"
    echo "  - Monitor project health continuously"
    echo
}

# Run main function
main "$@"
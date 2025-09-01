#!/bin/bash

# Zion Tech Group - Error Automation System Startup Script
# This script fixes current project errors and starts PM2 automations to prevent future errors

set -e

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Configuration
PROJECT_ROOT="/workspace"
LOG_DIR="$PROJECT_ROOT/automation/logs"
REPORT_DIR="$PROJECT_ROOT/automation/reports"
BACKUP_DIR="$PROJECT_ROOT/automation/backups"

# Create necessary directories
mkdir -p "$LOG_DIR" "$REPORT_DIR" "$BACKUP_DIR"

# Logging function
log() {
    echo -e "${BLUE}[$(date '+%Y-%m-%d %H:%M:%S')]${NC} $1"
}

log_success() {
    echo -e "${GREEN}[$(date '+%Y-%m-%d %H:%M:%S')] SUCCESS:${NC} $1"
}

log_warning() {
    echo -e "${YELLOW}[$(date '+%Y-%m-%d %H:%M:%S')] WARNING:${NC} $1"
}

log_error() {
    echo -e "${RED}[$(date '+%Y-%m-%d %H:%M:%S')] ERROR:${NC} $1"
}

# Function to check if a command exists
command_exists() {
    command -v "$1" >/dev/null 2>&1
}

# Function to install dependencies
install_dependencies() {
    log "Installing project dependencies..."
    
    if [ -f "package.json" ]; then
        npm install
        log_success "Dependencies installed successfully"
    else
        log_error "package.json not found"
        exit 1
    fi
}

# Function to install PM2 globally
install_pm2() {
    log "Checking PM2 installation..."
    
    if ! command_exists pm2; then
        log "Installing PM2 globally..."
        npm install -g pm2
        log_success "PM2 installed successfully"
    else
        log_success "PM2 is already installed"
    fi
    
    # Configure PM2 logrotate
    log "Configuring PM2 logrotate..."
    pm2 install pm2-logrotate || true
    pm2 set pm2-logrotate:max_size 10M || true
    pm2 set pm2-logrotate:retain 30 || true
    pm2 set pm2-logrotate:compress true || true
    pm2 set pm2-logrotate:workerInterval 60 || true
    pm2 set pm2-logrotate:rotateInterval '0 0 * * *' || true
    log_success "PM2 logrotate configured"
}

# Function to run comprehensive error fixer
run_error_fixer() {
    log "Running comprehensive error fixer..."
    
    if [ -f "scripts/automation/comprehensive-error-fixer-enhanced.cjs" ]; then
        node scripts/automation/comprehensive-error-fixer-enhanced.cjs
        log_success "Comprehensive error fixer completed"
    else
        log_error "Comprehensive error fixer script not found"
        exit 1
    fi
}

# Function to check current errors
check_current_errors() {
    log "Checking current project errors..."
    
    # Check TypeScript errors
    log "Checking TypeScript errors..."
    if npm run type-check >/dev/null 2>&1; then
        log_success "No TypeScript errors found"
    else
        log_warning "TypeScript errors detected"
    fi
    
    # Check ESLint errors
    log "Checking ESLint errors..."
    if npm run lint >/dev/null 2>&1; then
        log_success "No ESLint errors found"
    else
        log_warning "ESLint errors detected"
    fi
    
    # Check build errors
    log "Checking build errors..."
    if npm run build >/dev/null 2>&1; then
        log_success "No build errors found"
    else
        log_warning "Build errors detected"
    fi
}

# Function to start PM2 error automation system
start_pm2_automation() {
    log "Starting PM2 error automation system..."
    
    # Stop any existing PM2 processes
    log "Stopping existing PM2 processes..."
    pm2 stop all || true
    pm2 delete all || true
    
    # Start the error automation ecosystem
    if [ -f "ecosystem-error-automation.config.cjs" ]; then
        pm2 start ecosystem-error-automation.config.cjs
        log_success "PM2 error automation system started"
    else
        log_error "Error automation ecosystem config not found"
        exit 1
    fi
    
    # Save PM2 configuration
    pm2 save
    log_success "PM2 configuration saved"
}

# Function to start PM2 orchestrator
start_orchestrator() {
    log "Starting PM2 error automation orchestrator..."
    
    if [ -f "scripts/automation/pm2-error-automation-orchestrator.cjs" ]; then
        pm2 start scripts/automation/pm2-error-automation-orchestrator.cjs --name "error-automation-orchestrator"
        log_success "PM2 error automation orchestrator started"
    else
        log_error "PM2 error automation orchestrator script not found"
    fi
}

# Function to display status
display_status() {
    log "Displaying PM2 status..."
    pm2 status
    
    log "Displaying automation logs directory:"
    ls -la "$LOG_DIR"
    
    log "Displaying automation reports directory:"
    ls -la "$REPORT_DIR"
}

# Function to create health check
create_health_check() {
    log "Creating health check script..."
    
    cat > "$PROJECT_ROOT/check-automation-health.sh" << 'EOF'
#!/bin/bash

# Health check script for error automation system

echo "=== Error Automation System Health Check ==="
echo "Timestamp: $(date)"
echo

# Check PM2 status
echo "PM2 Status:"
pm2 status
echo

# Check automation logs
echo "Recent Automation Logs:"
find automation/logs -name "*.log" -type f -exec ls -la {} \; | head -10
echo

# Check error reports
echo "Recent Error Reports:"
find automation/reports -name "*.json" -type f -exec ls -la {} \; | head -5
echo

# Check system resources
echo "System Resources:"
echo "Memory Usage:"
free -h
echo
echo "Disk Usage:"
df -h
echo

echo "Health check completed at $(date)"
EOF

    chmod +x "$PROJECT_ROOT/check-automation-health.sh"
    log_success "Health check script created"
}

# Function to create management script
create_management_script() {
    log "Creating automation management script..."
    
    cat > "$PROJECT_ROOT/manage-error-automation.sh" << 'EOF'
#!/bin/bash

# Error Automation Management Script

case "$1" in
    start)
        echo "Starting error automation system..."
        pm2 start ecosystem-error-automation.config.cjs
        pm2 save
        ;;
    stop)
        echo "Stopping error automation system..."
        pm2 stop ecosystem-error-automation.config.cjs
        ;;
    restart)
        echo "Restarting error automation system..."
        pm2 restart ecosystem-error-automation.config.cjs
        ;;
    status)
        echo "Error automation system status:"
        pm2 status
        ;;
    logs)
        echo "Recent automation logs:"
        pm2 logs --lines 50
        ;;
    fix)
        echo "Running manual error fix..."
        node scripts/automation/comprehensive-error-fixer-enhanced.cjs
        ;;
    health)
        echo "Running health check..."
        ./check-automation-health.sh
        ;;
    *)
        echo "Usage: $0 {start|stop|restart|status|logs|fix|health}"
        echo
        echo "Commands:"
        echo "  start   - Start the error automation system"
        echo "  stop    - Stop the error automation system"
        echo "  restart - Restart the error automation system"
        echo "  status  - Show current status"
        echo "  logs    - Show recent logs"
        echo "  fix     - Run manual error fix"
        echo "  health  - Run health check"
        exit 1
        ;;
esac
EOF

    chmod +x "$PROJECT_ROOT/manage-error-automation.sh"
    log_success "Management script created"
}

# Main execution
main() {
    log "Starting Zion Tech Group Error Automation System..."
    log "Project Root: $PROJECT_ROOT"
    
    # Change to project directory
    cd "$PROJECT_ROOT"
    
    # Install dependencies
    install_dependencies
    
    # Install PM2
    install_pm2
    
    # Check current errors
    check_current_errors
    
    # Run comprehensive error fixer
    run_error_fixer
    
    # Check errors again after fixing
    log "Checking errors after fixing..."
    check_current_errors
    
    # Start PM2 automation system
    start_pm2_automation
    
    # Start orchestrator
    start_orchestrator
    
    # Create management scripts
    create_health_check
    create_management_script
    
    # Display final status
    display_status
    
    log_success "Error automation system setup completed successfully!"
    log "Use './manage-error-automation.sh' to manage the system"
    log "Use './check-automation-health.sh' to check system health"
    log "Logs are available in: $LOG_DIR"
    log "Reports are available in: $REPORT_DIR"
}

# Run main function
main "$@"
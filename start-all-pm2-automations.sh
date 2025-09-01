#!/bin/bash

# Comprehensive PM2 Automation Startup Script
# This script starts all automation scripts individually since ecosystem files aren't working properly

set -e

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
PURPLE='\033[0;35m'
CYAN='\033[0;36m'
NC='\033[0m' # No Color

# Project configuration
PROJECT_ROOT="$(pwd)"
LOG_DIR="$PROJECT_ROOT/logs"

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
    mkdir -p "$LOG_DIR"
    success "Logs directory created: $LOG_DIR"
}

# Stop existing PM2 processes
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

# Start automation scripts
start_automation_scripts() {
    log "Starting PM2 automation scripts..."
    
    local scripts=(
        "ai-code-analyzer:./scripts/automation/ai-code-analyzer.cjs:512M:AI_ANALYSIS_MODE=true"
        "smart-performance-optimizer:./scripts/automation/smart-performance-optimizer.cjs:1G:PERFORMANCE_OPTIMIZATION_MODE=true"
        "intelligent-dependency-manager:./scripts/automation/intelligent-dependency-manager.cjs:512M:DEPENDENCY_MANAGEMENT_MODE=true"
        "smart-deployment-automation:./scripts/automation/smart-deployment-automation.cjs:1G:DEPLOYMENT_AUTOMATION_MODE=true"
        "enhanced-ci-cd-automation:./scripts/automation/enhanced-ci-cd-automation.cjs:1G:CI_CD_MODE=true"
        "enhanced-security-automation:./scripts/automation/enhanced-security-automation.cjs:512M:SECURITY_MODE=true"
        "enhanced-testing-automation:./scripts/automation/enhanced-testing-automation.cjs:1G:TESTING_MODE=true"
        "project-health-monitor:./scripts/automation/project-health-monitor.cjs:512M:HEALTH_MONITORING_MODE=true"
        "pm2-sync-automation:./scripts/automation/pm2-sync-automation.cjs:1G:SYNC_MODE=true"
        "pm2-sync-monitor:./scripts/automation/pm2-sync-monitor.cjs:512M:MONITORING_MODE=true"
        "link-checker-automation:./scripts/automation/link-checker-automation.cjs:512M:LINK_CHECKING_MODE=true"
        "typescript-syntax-fixer:./scripts/automation/typescript-syntax-fixer.cjs:256M:SYNTAX_FIXING_MODE=true"
        "console-error-fixer:./scripts/automation/console-error-fixer.cjs:256M:ERROR_FIXING_MODE=true"
        "dependency-manager:./scripts/automation/dependency-manager.cjs:512M:DEPENDENCY_MANAGEMENT_MODE=true"
        "performance-monitor:./scripts/automation/performance-monitor.cjs:512M:PERFORMANCE_MONITORING_MODE=true"
        "front-maximizer:./scripts/automation/front-maximizer.cjs:512M:FRONTEND_OPTIMIZATION_MODE=true"
        "sitemap-runner:./scripts/automation/sitemap-runner.cjs:256M:SITEMAP_MODE=true"
        "quality-checks:./scripts/automation/quality-checks.cjs:256M:QUALITY_CHECK_MODE=true"
        "security-audit:./scripts/automation/security-audit.cjs:512M:SECURITY_AUDIT_MODE=true"
        "continuous-improvement:./scripts/automation/continuous-improvement.cjs:256M:CONTINUOUS_IMPROVEMENT_MODE=true"
        "daily-build-test:./scripts/automation/daily-build-test.cjs:512M:BUILD_TEST_MODE=true"
    )
    
    local started_count=0
    local failed_count=0
    
    for script_info in "${scripts[@]}"; do
        IFS=':' read -r name script_path memory_limit env_var <<< "$script_info"
        
        log "Starting $name..."
        
        if pm2 start "$script_path" --name "$name" --max-memory-restart "$memory_limit" --env production; then
            success "$name started successfully"
            ((started_count++))
        else
            error "Failed to start $name"
            ((failed_count++))
        fi
        
        # Small delay between starts
        sleep 1
    done
    
    echo
    success "Started $started_count automation scripts successfully"
    if [ $failed_count -gt 0 ]; then
        warning "$failed_count scripts failed to start"
    fi
    
    return $failed_count
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
    echo "  Project Root: $PROJECT_ROOT"
    echo "  Logs Directory: $LOG_DIR"
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
    info "Log Files Location: $LOG_DIR"
    echo "  - All automation scripts will log to this directory"
    echo "  - PM2 also maintains logs in ~/.pm2/logs/"
    
    echo
    info "Automation Scripts Running:"
    pm2 list --format table | grep -E "(ai-code-analyzer|performance|health|security|quality|dependency|deployment|testing|monitor)" || echo "  No automation scripts found"
}

# Create management scripts
create_management_scripts() {
    log "Creating management scripts..."
    
    # Start script
    cat > "$PROJECT_ROOT/scripts/pm2-start-all.sh" << 'EOF'
#!/bin/bash
# Start all PM2 automations
cd "$(dirname "$0")/.."
./start-all-pm2-automations.sh
EOF
    
    # Stop script
    cat > "$PROJECT_ROOT/scripts/pm2-stop-all.sh" << 'EOF'
#!/bin/bash
# Stop all PM2 automations
cd "$(dirname "$0")/.."
pm2 stop all
pm2 delete all
echo "All PM2 automations stopped"
EOF
    
    # Restart script
    cat > "$PROJECT_ROOT/scripts/pm2-restart-all.sh" << 'EOF'
#!/bin/bash
# Restart all PM2 automations
cd "$(dirname "$0")/.."
pm2 restart all
echo "All PM2 automations restarted"
EOF
    
    # Logs script
    cat > "$PROJECT_ROOT/scripts/pm2-logs.sh" << 'EOF'
#!/bin/bash
# Show PM2 logs
cd "$(dirname "$0")/.."
pm2 logs
EOF
    
    # Monitor script
    cat > "$PROJECT_ROOT/scripts/pm2-monitor.sh" << 'EOF'
#!/bin/bash
# Monitor PM2 processes
cd "$(dirname "$0")/.."
pm2 monit
EOF
    
    # Make scripts executable
    chmod +x "$PROJECT_ROOT/scripts/pm2-"*.sh
    
    success "Management scripts created in scripts/ directory"
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
    
    # Start automation scripts
    if start_automation_scripts; then
        success "All automation scripts started successfully"
    else
        warning "Some scripts failed to start. Check logs for details."
    fi
    
    # Setup additional features
    setup_pm2_logrotate
    setup_pm2_monitoring
    
    # Create management scripts
    create_management_scripts
    
    # Display status
    display_system_status
    
    echo
    success "PM2 Automation System is now running!"
    echo
    info "Next steps:"
    echo "  1. Monitor the system: pm2 monit"
    echo "  2. Check logs: pm2 logs"
    echo "  3. View specific process: pm2 logs <process-name>"
    echo "  4. Use management scripts in scripts/ directory"
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
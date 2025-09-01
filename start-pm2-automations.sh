#!/bin/bash

# 🚀 PM2 Automation Startup Script - Individual App Launcher
# This script starts all PM2 automation processes individually

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
PROJECT_ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
LOGS_DIR="$PROJECT_ROOT/logs"

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

# Create necessary directories
create_directories() {
    log "Creating necessary directories..."
    mkdir -p "$LOGS_DIR"
    success "Directories created successfully"
}

# Stop existing PM2 processes
stop_existing_processes() {
    log "Stopping existing PM2 processes..."
    
    if pm2 list | grep -q "online\|stopped"; then
        pm2 stop all || true
        pm2 delete all || true
        success "Existing PM2 processes stopped and deleted"
    else
        info "No existing PM2 processes found"
    fi
}

# Start individual automation apps
start_automation_apps() {
    log "Starting PM2 automation applications..."
    
    # AI and Code Analysis
    pm2 start scripts/automation/ai-code-analyzer.cjs --name "ai-code-analyzer" --log "$LOGS_DIR/ai-code-analyzer.log" --error "$LOGS_DIR/ai-code-analyzer-error.log"
    pm2 start scripts/automation/ai-code-optimizer.cjs --name "ai-code-optimizer" --log "$LOGS_DIR/ai-code-optimizer.log" --error "$LOGS_DIR/ai-code-optimizer-error.log"
    pm2 start scripts/automation/ai-code-quality-enhancer.cjs --name "ai-code-quality-enhancer" --log "$LOGS_DIR/ai-code-quality-enhancer.log" --error "$LOGS_DIR/ai-code-quality-enhancer-error.log"
    pm2 start scripts/automation/ai-code-review-automation.cjs --name "ai-code-review-automation" --log "$LOGS_DIR/ai-code-review-automation.log" --error "$LOGS_DIR/ai-code-review-automation-error.log"
    
    # Performance and Optimization
    pm2 start scripts/automation/smart-performance-optimizer.cjs --name "smart-performance-optimizer" --log "$LOGS_DIR/smart-performance-optimizer.log" --error "$LOGS_DIR/smart-performance-optimizer-error.log"
    pm2 start scripts/automation/intelligent-performance-optimizer.cjs --name "intelligent-performance-optimizer" --log "$LOGS_DIR/intelligent-performance-optimizer.log" --error "$LOGS_DIR/intelligent-performance-optimizer-error.log"
    pm2 start scripts/automation/advanced-performance-monitor.cjs --name "advanced-performance-monitor" --log "$LOGS_DIR/advanced-performance-monitor.log" --error "$LOGS_DIR/advanced-performance-monitor-error.log"
    
    # Dependency Management
    pm2 start scripts/automation/intelligent-dependency-manager.cjs --name "intelligent-dependency-manager" --log "$LOGS_DIR/intelligent-dependency-manager.log" --error "$LOGS_DIR/intelligent-dependency-manager-error.log"
    pm2 start scripts/automation/smart-dependency-manager.cjs --name "smart-dependency-manager" --log "$LOGS_DIR/smart-dependency-manager.log" --error "$LOGS_DIR/smart-dependency-manager-error.log"
    pm2 start scripts/automation/smart-dependency-intelligence.cjs --name "smart-dependency-intelligence" --log "$LOGS_DIR/smart-dependency-intelligence.log" --error "$LOGS_DIR/smart-dependency-intelligence-error.log"
    
    # Deployment and CI/CD
    pm2 start scripts/automation/smart-deployment-automation.cjs --name "smart-deployment-automation" --log "$LOGS_DIR/smart-deployment-automation.log" --error "$LOGS_DIR/smart-deployment-automation-error.log"
    pm2 start scripts/automation/enhanced-ci-cd-automation.cjs --name "enhanced-ci-cd-automation" --log "$LOGS_DIR/enhanced-ci-cd-automation.log" --error "$LOGS_DIR/enhanced-ci-cd-automation-error.log"
    
    # Security
    pm2 start scripts/automation/enhanced-security-automation.cjs --name "enhanced-security-automation" --log "$LOGS_DIR/enhanced-security-automation.log" --error "$LOGS_DIR/enhanced-security-automation-error.log"
    pm2 start scripts/automation/security-audit.cjs --name "security-audit" --log "$LOGS_DIR/security-audit.log" --error "$LOGS_DIR/security-audit-error.log"
    
    # Testing
    pm2 start scripts/automation/enhanced-testing-automation.cjs --name "enhanced-testing-automation" --log "$LOGS_DIR/enhanced-testing-automation.log" --error "$LOGS_DIR/enhanced-testing-automation-error.log"
    pm2 start scripts/automation/smart-testing-automation.cjs --name "smart-testing-automation" --log "$LOGS_DIR/smart-testing-automation.log" --error "$LOGS_DIR/smart-testing-automation-error.log"
    pm2 start scripts/automation/adaptive-test-generator.cjs --name "adaptive-test-generator" --log "$LOGS_DIR/adaptive-test-generator.log" --error "$LOGS_DIR/adaptive-test-generator-error.log"
    
    # Project Health and Monitoring
    pm2 start scripts/automation/project-health-monitor.cjs --name "project-health-monitor" --log "$LOGS_DIR/project-health-monitor.log" --error "$LOGS_DIR/project-health-monitor-error.log"
    pm2 start scripts/automation/project-health-dashboard.cjs --name "project-health-dashboard" --log "$LOGS_DIR/project-health-dashboard.log" --error "$LOGS_DIR/project-health-dashboard-error.log"
    
    # PM2 Sync and Monitoring
    pm2 start scripts/automation/pm2-sync-automation.cjs --name "pm2-sync-automation" --log "$LOGS_DIR/pm2-sync-automation.log" --error "$LOGS_DIR/pm2-sync-automation-error.log"
    pm2 start scripts/automation/pm2-sync-monitor.cjs --name "pm2-sync-monitor" --log "$LOGS_DIR/pm2-sync-monitor.log" --error "$LOGS_DIR/pm2-sync-monitor-error.log"
    
    # Link Checking
    pm2 start scripts/automation/link-checker-automation.cjs --name "link-checker-automation" --log "$LOGS_DIR/link-checker-automation.log" --error "$LOGS_DIR/link-checker-automation-error.log"
    pm2 start scripts/automation/enhanced-link-checker.cjs --name "enhanced-link-checker" --log "$LOGS_DIR/enhanced-link-checker.log" --error "$LOGS_DIR/enhanced-link-checker-error.log"
    
    # Error Fixing
    pm2 start scripts/automation/typescript-syntax-fixer.cjs --name "typescript-syntax-fixer" --log "$LOGS_DIR/typescript-syntax-fixer.log" --error "$LOGS_DIR/typescript-syntax-fixer-error.log"
    pm2 start scripts/automation/console-error-fixer.cjs --name "console-error-fixer" --log "$LOGS_DIR/console-error-fixer.log" --error "$LOGS_DIR/console-error-fixer-error.log"
    pm2 start scripts/automation/eslint-error-fixer.cjs --name "eslint-error-fixer" --log "$LOGS_DIR/eslint-error-fixer.log" --error "$LOGS_DIR/eslint-error-fixer-error.log"
    pm2 start scripts/automation/comprehensive-error-fixer.cjs --name "comprehensive-error-fixer" --log "$LOGS_DIR/comprehensive-error-fixer.log" --error "$LOGS_DIR/comprehensive-error-fixer-error.log"
    
    # Other Utilities
    pm2 start scripts/automation/dependency-manager.cjs --name "dependency-manager" --log "$LOGS_DIR/dependency-manager.log" --error "$LOGS_DIR/dependency-manager-error.log"
    pm2 start scripts/automation/performance-monitor.cjs --name "performance-monitor" --log "$LOGS_DIR/performance-monitor.log" --error "$LOGS_DIR/performance-monitor-error.log"
    pm2 start scripts/automation/front-maximizer.cjs --name "front-maximizer" --log "$LOGS_DIR/front-maximizer.log" --error "$LOGS_DIR/front-maximizer-error.log"
    pm2 start scripts/automation/sitemap-runner.cjs --name "sitemap-runner" --log "$LOGS_DIR/sitemap-runner.log" --error "$LOGS_DIR/sitemap-runner-error.log"
    pm2 start scripts/automation/quality-checks.cjs --name "quality-checks" --log "$LOGS_DIR/quality-checks.log" --error "$LOGS_DIR/quality-checks-error.log"
    pm2 start scripts/automation/continuous-improvement.cjs --name "continuous-improvement" --log "$LOGS_DIR/continuous-improvement.log" --error "$LOGS_DIR/continuous-improvement-error.log"
    pm2 start scripts/automation/daily-build-test.cjs --name "daily-build-test" --log "$LOGS_DIR/daily-build-test.log" --error "$LOGS_DIR/daily-build-test-error.log"
    
    success "All automation applications started successfully"
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
    echo "  Logs Directory: $LOGS_DIR"
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
    info "Log Files Location: $LOGS_DIR"
    echo "  - AI Code Analyzer: logs/ai-code-analyzer.log"
    echo "  - Performance Optimizer: logs/smart-performance-optimizer.log"
    echo "  - Dependency Manager: logs/intelligent-dependency-manager.log"
    echo "  - Deployment Automation: logs/smart-deployment-automation.log"
    echo "  - And many more..."
}

# Create management scripts
create_management_scripts() {
    log "Creating management scripts..."
    
    # Start script
    cat > "$PROJECT_ROOT/scripts/pm2-start.sh" << 'EOF'
#!/bin/bash
# PM2 Start Script
cd "$(dirname "$0")/.."
./start-pm2-automations.sh
echo "PM2 automation system started"
EOF
    
    # Stop script
    cat > "$PROJECT_ROOT/scripts/pm2-stop.sh" << 'EOF'
#!/bin/bash
# PM2 Stop Script
cd "$(dirname "$0")/.."
pm2 stop all
pm2 delete all
echo "PM2 automation system stopped"
EOF
    
    # Restart script
    cat > "$PROJECT_ROOT/scripts/pm2-restart.sh" << 'EOF'
#!/bin/bash
# PM2 Restart Script
cd "$(dirname "$0")/.."
pm2 restart all
echo "PM2 automation system restarted"
EOF
    
    # Logs script
    cat > "$PROJECT_ROOT/scripts/pm2-logs.sh" << 'EOF'
#!/bin/bash
# PM2 Logs Script
cd "$(dirname "$0")/.."
pm2 logs
EOF
    
    # Monitor script
    cat > "$PROJECT_ROOT/scripts/pm2-monitor.sh" << 'EOF'
#!/bin/bash
# PM2 Monitor Script
cd "$(dirname "$0")/.."
pm2 monit
EOF
    
    # Make scripts executable
    chmod +x "$PROJECT_ROOT/scripts/pm2-"*.sh
    
    success "Management scripts created"
}

# Main execution
main() {
    echo -e "${PURPLE}🚀 PM2 Automation System Startup${NC}"
    echo "=========================================="
    echo
    
    # Check prerequisites
    check_pm2
    
    # Setup system
    create_directories
    stop_existing_processes
    
    # Start automation apps
    start_automation_apps
    
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
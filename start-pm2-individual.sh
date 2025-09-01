#!/bin/bash

# Individual PM2 Automation Startup Script
# This script starts the PM2 automation processes individually

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

# Check if dependencies are installed
check_dependencies() {
    if [ ! -d "node_modules" ]; then
        warning "Node dependencies not found. Installing..."
        npm install
        success "Dependencies installed successfully"
    else
        info "Dependencies are already installed"
    fi
}

# Check if app is built
check_build() {
    if [ ! -d ".next" ]; then
        warning "Next.js app not built. Building..."
        npm run build
        success "App built successfully"
    else
        info "App is already built"
    fi
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

# Start main application
start_main_app() {
    log "Starting main application (zion-app)..."
    pm2 start npm --name "zion-app" -- start
    success "Main application started"
}

# Start core automation processes
start_core_automation() {
    log "Starting core automation processes..."
    
    # Error Monitor
    pm2 start scripts/error-monitor.cjs --name "error-monitor"
    success "Error monitor started"
    
    # Syntax Fixer
    pm2 start scripts/syntax-fixer.cjs --name "syntax-fixer"
    success "Syntax fixer started"
    
    # Build Health Check
    pm2 start scripts/build-health-check.cjs --name "build-health-check"
    success "Build health check started"
    
    # Merge Conflict Resolver
    pm2 start scripts/merge-conflict-resolver.cjs --name "merge-conflict-resolver"
    success "Merge conflict resolver started"
}

# Start enhanced automation processes
start_enhanced_automation() {
    log "Starting enhanced automation processes..."
    
    # AI Code Analyzer
    pm2 start scripts/automation/ai-code-analyzer.cjs --name "ai-code-analyzer"
    success "AI code analyzer started"
    
    # Performance Monitor
    pm2 start scripts/performance-monitor.js --name "performance-monitor"
    success "Performance monitor started"
    
    # Link Checker
    pm2 start scripts/link-checker.js --name "link-checker"
    success "Link checker started"
    
    # Security Audit
    pm2 start scripts/automation/security-audit.cjs --name "security-audit"
    success "Security audit started"
    
    # Quality Checks
    pm2 start scripts/automation/quality-checks.cjs --name "quality-checks"
    success "Quality checks started"
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
    log "Individual PM2 Automation System Status:"
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
    echo "  - Main App: logs/app-combined.log"
    echo "  - Error Monitor: logs/error-monitor-combined.log"
    echo "  - Syntax Fixer: logs/syntax-fixer-combined.log"
    echo "  - Build Health: logs/build-health-combined.log"
    echo "  - Merge Resolver: logs/merge-resolver-combined.log"
    echo "  - AI Code Analyzer: logs/ai-code-analyzer.log"
    echo "  - And many more..."
}

# Create management scripts
create_management_scripts() {
    log "Creating management scripts..."
    
    # Enhanced start script
    cat > "scripts/pm2-individual-start.sh" << 'EOF'
#!/bin/bash
# Individual PM2 Start Script
cd "$(dirname "$0")/.."
./start-pm2-individual.sh
echo "Individual PM2 system started"
EOF
    
    # Enhanced stop script
    cat > "scripts/pm2-individual-stop.sh" << 'EOF'
#!/bin/bash
# Individual PM2 Stop Script
cd "$(dirname "$0")/.."
pm2 stop all
pm2 delete all
echo "Individual PM2 system stopped"
EOF
    
    # Enhanced restart script
    cat > "scripts/pm2-individual-restart.sh" << 'EOF'
#!/bin/bash
# Individual PM2 Restart Script
cd "$(dirname "$0")/.."
pm2 restart all
echo "Individual PM2 system restarted"
EOF
    
    # Enhanced logs script
    cat > "scripts/pm2-individual-logs.sh" << 'EOF'
#!/bin/bash
# Individual PM2 Logs Script
cd "$(dirname "$0")/.."
pm2 logs
EOF
    
    # Enhanced monitor script
    cat > "scripts/pm2-individual-monitor.sh" << 'EOF'
#!/bin/bash
# Individual PM2 Monitor Script
cd "$(dirname "$0")/.."
pm2 monit
EOF
    
    # Make scripts executable
    chmod +x "scripts/pm2-individual-"*.sh
    
    success "Management scripts created"
}

# Main execution
main() {
    echo -e "${PURPLE}🚀 Individual PM2 Automation System Startup${NC}"
    echo "=================================================="
    echo
    
    # Check prerequisites
    check_pm2
    check_dependencies
    check_build
    
    # Stop existing processes
    stop_existing_processes
    
    # Start processes individually
    start_main_app
    start_core_automation
    start_enhanced_automation
    
    # Setup additional features
    setup_pm2_logrotate
    setup_pm2_monitoring
    
    # Create management scripts
    create_management_scripts
    
    # Display status
    display_system_status
    
    echo
    success "Individual PM2 Automation System is now running!"
    echo
    info "Next steps:"
    echo "  1. Monitor the system: pm2 monit"
    echo "  2. Check logs: pm2 logs"
    echo "  3. View specific process: pm2 logs <process-name>"
    echo "  4. Use management scripts in scripts/ directory"
    echo
    info "The system will automatically:"
    echo "  - Monitor and fix code issues"
    echo "  - Check build health and dependencies"
    echo "  - Resolve merge conflicts"
    echo "  - Analyze code with AI assistance"
    echo "  - Monitor project health continuously"
    echo
}

# Run main function
main "$@"
#!/bin/bash

# Zion Tech Group - Error Prevention Automation Startup Script
# This script starts the comprehensive error prevention automation system

set -e

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Configuration
PROJECT_ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
PM2_CONFIG="ecosystem-error-prevention.config.cjs"
LOG_DIR="$PROJECT_ROOT/logs"
REPORTS_DIR="$PROJECT_ROOT/reports"

# Functions
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

check_dependencies() {
    log "Checking dependencies..."
    
    # Check if Node.js is installed
    if ! command -v node &> /dev/null; then
        error "Node.js is not installed. Please install Node.js first."
        exit 1
    fi
    
    # Check if npm is installed
    if ! command -v npm &> /dev/null; then
        error "npm is not installed. Please install npm first."
        exit 1
    fi
    
    # Check if PM2 is installed
    if ! command -v pm2 &> /dev/null; then
        warning "PM2 is not installed. Installing PM2..."
        npm install -g pm2
    fi
    
    success "All dependencies are satisfied"
}

setup_directories() {
    log "Setting up directories..."
    
    # Create logs directory
    if [ ! -d "$LOG_DIR" ]; then
        mkdir -p "$LOG_DIR"
        success "Created logs directory: $LOG_DIR"
    fi
    
    # Create reports directory
    if [ ! -d "$REPORTS_DIR" ]; then
        mkdir -p "$REPORTS_DIR"
        success "Created reports directory: $REPORTS_DIR"
    fi
    
    success "Directories are ready"
}

install_project_dependencies() {
    log "Installing project dependencies..."
    
    if [ -f "package.json" ]; then
        npm install
        success "Project dependencies installed"
    else
        warning "No package.json found, skipping dependency installation"
    fi
}

check_automation_scripts() {
    log "Checking automation scripts..."
    
    local scripts=(
        "scripts/automation/automation-orchestrator.cjs"
        "scripts/automation/error-prevention-automation.cjs"
        "scripts/automation/typescript-fix-automation.cjs"
        "scripts/automation/linting-fix-automation.cjs"
    )
    
    local missing_scripts=()
    
    for script in "${scripts[@]}"; do
        if [ ! -f "$script" ]; then
            missing_scripts+=("$script")
        fi
    done
    
    if [ ${#missing_scripts[@]} -eq 0 ]; then
        success "All automation scripts are present"
    else
        error "Missing automation scripts:"
        for script in "${missing_scripts[@]}"; do
            error "  - $script"
        done
        exit 1
    fi
}

stop_existing_processes() {
    log "Stopping existing PM2 processes..."
    
    # Stop all PM2 processes
    pm2 stop all 2>/dev/null || true
    pm2 delete all 2>/dev/null || true
    
    success "Existing processes stopped"
}

start_error_prevention_automation() {
    log "Starting Error Prevention Automation system..."
    
    # Start the main ecosystem
    pm2 start "$PM2_CONFIG"
    
    if [ $? -eq 0 ]; then
        success "Error Prevention Automation started successfully"
    else
        error "Failed to start Error Prevention Automation"
        exit 1
    fi
}

show_status() {
    log "Showing PM2 status..."
    pm2 status
    
    log "Showing recent logs..."
    pm2 logs --lines 10
}

setup_log_rotation() {
    log "Setting up PM2 log rotation..."
    
    # Install PM2 logrotate module if not already installed
    pm2 install pm2-logrotate 2>/dev/null || true
    
    # Configure log rotation
    pm2 set pm2-logrotate:max_size 10M
    pm2 set pm2-logrotate:retain 30
    pm2 set pm2-logrotate:compress true
    pm2 set pm2-logrotate:date_format YYYY-MM-DD_HH-mm-ss
    
    success "Log rotation configured"
}

create_monitoring_script() {
    log "Creating monitoring script..."
    
    cat > "$PROJECT_ROOT/monitor-error-prevention.sh" << 'EOF'
#!/bin/bash

# Error Prevention Automation Monitoring Script

echo "🔍 Error Prevention Automation Status"
echo "====================================="

# Show PM2 status
pm2 status

echo ""
echo "📊 Recent Logs"
echo "=============="

# Show recent logs for each process
for process in error-prevention-orchestrator typescript-fix-automation linting-fix-automation error-prevention-monitor scheduled-error-prevention; do
    echo ""
    echo "📝 $process logs:"
    pm2 logs $process --lines 5 2>/dev/null || echo "  No logs available"
done

echo ""
echo "📁 Reports Directory:"
ls -la reports/ 2>/dev/null || echo "  No reports directory found"

echo ""
echo "📁 Logs Directory:"
ls -la logs/ 2>/dev/null || echo "  No logs directory found"
EOF

    chmod +x "$PROJECT_ROOT/monitor-error-prevention.sh"
    success "Monitoring script created: monitor-error-prevention.sh"
}

create_management_script() {
    log "Creating management script..."
    
    cat > "$PROJECT_ROOT/manage-error-prevention.sh" << 'EOF'
#!/bin/bash

# Error Prevention Automation Management Script

case "$1" in
    start)
        echo "🚀 Starting Error Prevention Automation..."
        pm2 start ecosystem-error-prevention.config.cjs
        ;;
    stop)
        echo "⏹️  Stopping Error Prevention Automation..."
        pm2 stop ecosystem-error-prevention.config.cjs
        ;;
    restart)
        echo "🔄 Restarting Error Prevention Automation..."
        pm2 restart ecosystem-error-prevention.config.cjs
        ;;
    reload)
        echo "🔄 Reloading Error Prevention Automation..."
        pm2 reload ecosystem-error-prevention.config.cjs
        ;;
    status)
        echo "📊 Error Prevention Automation Status:"
        pm2 status
        ;;
    logs)
        echo "📝 Error Prevention Automation Logs:"
        pm2 logs --lines 50
        ;;
    monitor)
        echo "📊 Error Prevention Automation Monitor:"
        pm2 monit
        ;;
    run-once)
        echo "🎯 Running Error Prevention Automation once..."
        node scripts/automation/automation-orchestrator.cjs run
        ;;
    *)
        echo "Usage: $0 {start|stop|restart|reload|status|logs|monitor|run-once}"
        echo ""
        echo "Commands:"
        echo "  start     - Start the automation system"
        echo "  stop      - Stop the automation system"
        echo "  restart   - Restart the automation system"
        echo "  reload    - Reload the automation system"
        echo "  status    - Show status of all processes"
        echo "  logs      - Show recent logs"
        echo "  monitor   - Open PM2 monitoring interface"
        echo "  run-once  - Run automation once manually"
        exit 1
        ;;
esac
EOF

    chmod +x "$PROJECT_ROOT/manage-error-prevention.sh"
    success "Management script created: manage-error-prevention.sh"
}

main() {
    echo -e "${BLUE}"
    echo "🚀 Zion Tech Group - Error Prevention Automation"
    echo "================================================"
    echo -e "${NC}"
    
    # Change to project directory
    cd "$PROJECT_ROOT"
    
    # Run setup steps
    check_dependencies
    setup_directories
    install_project_dependencies
    check_automation_scripts
    stop_existing_processes
    setup_log_rotation
    
    # Start the automation system
    start_error_prevention_automation
    
    # Create utility scripts
    create_monitoring_script
    create_management_script
    
    # Show status
    show_status
    
    echo ""
    success "Error Prevention Automation system is now running!"
    echo ""
    echo "📋 Useful commands:"
    echo "  ./manage-error-prevention.sh status    - Check status"
    echo "  ./manage-error-prevention.sh logs      - View logs"
    echo "  ./manage-error-prevention.sh monitor   - Open monitoring"
    echo "  ./monitor-error-prevention.sh          - Quick status check"
    echo ""
    echo "📁 Logs are stored in: $LOG_DIR"
    echo "📁 Reports are stored in: $REPORTS_DIR"
    echo ""
    echo "🔄 The system will automatically:"
    echo "  - Monitor files for changes"
    echo "  - Fix TypeScript syntax errors"
    echo "  - Fix linting errors"
    echo "  - Generate comprehensive reports"
    echo "  - Restart on failures"
    echo ""
}

# Run main function
main "$@"
#!/bin/bash

# Enhanced PM2 Automation System Startup Script
# This script starts the complete intelligent PM2 automation ecosystem

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
ENHANCED_ECOSYSTEM="$PROJECT_ROOT/ecosystem.enhanced.cjs"
ORIGINAL_ECOSYSTEM="$PROJECT_ROOT/ecosystem.config.cjs"
BACKUP_ECOSYSTEM="$PROJECT_ROOT/ecosystem.config.backup.$(date +%s).cjs"

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

# Backup original ecosystem
backup_original_ecosystem() {
    if [ -f "$ORIGINAL_ECOSYSTEM" ]; then
        log "Backing up original ecosystem configuration..."
        cp "$ORIGINAL_ECOSYSTEM" "$BACKUP_ECOSYSTEM"
        success "Original ecosystem backed up to: $BACKUP_ECOSYSTEM"
    fi
}

# Setup enhanced ecosystem
setup_enhanced_ecosystem() {
    if [ ! -f "$ENHANCED_ECOSYSTEM" ]; then
        error "Enhanced ecosystem configuration not found: $ENHANCED_ECOSYSTEM"
        exit 1
    fi
    
    log "Setting up enhanced PM2 ecosystem..."
    
    # Create logs directory
    mkdir -p "$PROJECT_ROOT/logs"
    
    # Set proper permissions
    chmod +x "$PROJECT_ROOT/scripts/automation/"*.cjs
    
    success "Enhanced ecosystem setup completed"
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

# Start enhanced PM2 system
start_enhanced_system() {
    log "Starting Enhanced PM2 Automation System..."
    
    # Start the enhanced ecosystem
    pm2 start "$ENHANCED_ECOSYSTEM"
    
    # Wait for processes to start
    sleep 5
    
    # Check if processes started successfully
    local failed_processes=()
    local running_processes=()
    
    while IFS= read -r line; do
        if [[ $line =~ ^[[:space:]]*([0-9]+)[[:space:]]+([^[:space:]]+)[[:space:]]+([^[:space:]]+)[[:space:]]+([^[:space:]]+)[[:space:]]+([^[:space:]]+)[[:space:]]+([^[:space:]]+) ]]; then
            local id="${BASH_REMATCH[1]}"
            local name="${BASH_REMATCH[2]}"
            local status="${BASH_REMATCH[6]}"
            
            if [ "$status" = "online" ]; then
                running_processes+=("$name")
            else
                failed_processes+=("$name")
            fi
        fi
    done < <(pm2 list)
    
    # Report results
    if [ ${#running_processes[@]} -gt 0 ]; then
        success "Successfully started ${#running_processes[@]} processes:"
        for process in "${running_processes[@]}"; do
            echo "  - $process"
        done
    fi
    
    if [ ${#failed_processes[@]} -gt 0 ]; then
        warning "Failed to start ${#failed_processes[@]} processes:"
        for process in "${failed_processes[@]}"; do
            echo "  - $process"
        done
    fi
    
    return ${#failed_processes[@]}
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
    log "Enhanced PM2 Automation System Status:"
    echo
    
    # Show PM2 process list
    pm2 list
    
    echo
    info "System Information:"
    echo "  Project Root: $PROJECT_ROOT"
    echo "  Enhanced Ecosystem: $ENHANCED_ECOSYSTEM"
    echo "  Original Ecosystem: $ORIGINAL_ECOSYSTEM"
    echo "  Backup Ecosystem: $BACKUP_ECOSYSTEM"
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
    info "Log Files Location: $PROJECT_ROOT/logs/"
    echo "  - AI Code Analyzer: logs/ai-code-analyzer.log"
    echo "  - Performance Optimizer: logs/smart-performance-optimizer.log"
    echo "  - Dependency Manager: logs/intelligent-dependency-manager.log"
    echo "  - Deployment Automation: logs/smart-deployment-automation.log"
    echo "  - And many more..."
}

# Create management scripts
create_management_scripts() {
    log "Creating management scripts..."
    
    # Enhanced start script
    cat > "$PROJECT_ROOT/scripts/enhanced-pm2-start.sh" << 'EOF'
#!/bin/bash
# Enhanced PM2 Start Script
cd "$(dirname "$0")/.."
pm2 start ecosystem.enhanced.cjs
echo "Enhanced PM2 system started"
EOF
    
    # Enhanced stop script
    cat > "$PROJECT_ROOT/scripts/enhanced-pm2-stop.sh" << 'EOF'
#!/bin/bash
# Enhanced PM2 Stop Script
cd "$(dirname "$0")/.."
pm2 stop all
pm2 delete all
echo "Enhanced PM2 system stopped"
EOF
    
    # Enhanced restart script
    cat > "$PROJECT_ROOT/scripts/enhanced-pm2-restart.sh" << 'EOF'
#!/bin/bash
# Enhanced PM2 Restart Script
cd "$(dirname "$0")/.."
pm2 restart all
echo "Enhanced PM2 system restarted"
EOF
    
    # Enhanced logs script
    cat > "$PROJECT_ROOT/scripts/enhanced-pm2-logs.sh" << 'EOF'
#!/bin/bash
# Enhanced PM2 Logs Script
cd "$(dirname "$0")/.."
pm2 logs
EOF
    
    # Enhanced monitor script
    cat > "$PROJECT_ROOT/scripts/enhanced-pm2-monitor.sh" << 'EOF'
#!/bin/bash
# Enhanced PM2 Monitor Script
cd "$(dirname "$0")/.."
pm2 monit
EOF
    
    # Make scripts executable
    chmod +x "$PROJECT_ROOT/scripts/enhanced-pm2-"*.sh
    
    success "Management scripts created"
}

# Main execution
main() {
    echo -e "${PURPLE}🚀 Enhanced PM2 Automation System Startup${NC}"
    echo "=================================================="
    echo
    
    # Check prerequisites
    check_pm2
    
    # Setup system
    backup_original_ecosystem
    setup_enhanced_ecosystem
    
    # Stop existing processes
    stop_existing_processes
    
    # Start enhanced system
    if start_enhanced_system; then
        success "Enhanced PM2 system started successfully"
    else
        warning "Some processes failed to start. Check logs for details."
    fi
    
    # Setup additional features
    setup_pm2_logrotate
    setup_pm2_monitoring
    
    # Create management scripts
    create_management_scripts
    
    # Display status
    display_system_status
    
    echo
    success "Enhanced PM2 Automation System is now running!"
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
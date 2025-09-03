#!/bin/bash

# Enhanced Intelligent PM2 Automation System Startup Script
# This script starts the complete intelligent PM2 automation ecosystem with new advanced systems

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
PROJECT_ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
ENHANCED_ECOSYSTEM="ecosystem.enhanced.cjs"
MASTER_CONTROLLER="scripts/automation/master-intelligent-automation-controller.cjs"
BACKUP_ECOSYSTEM="ecosystem.config.backup.$(date +%s).cjs"

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

# Check if Node.js is installed
check_node() {
    if ! command -v node &> /dev/null; then
        error "Node.js is not installed. Please install Node.js first."
        exit 1
    else
        info "Node.js is already installed: $(node --version)"
    fi
}

# Check if npm is installed
check_npm() {
    if ! command -v npm &> /dev/null; then
        error "npm is not installed. Please install npm first."
        exit 1
    else
        info "npm is already installed: $(npm --version)"
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
    mkdir -p "logs"
    
    # Set proper permissions
    chmod +x "scripts/automation/"*.cjs
    
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

# Start Master Intelligent Automation Controller
start_master_controller() {
    log "Starting Master Intelligent Automation Controller..."
    
    if [ ! -f "$MASTER_CONTROLLER" ]; then
        error "Master controller not found: $MASTER_CONTROLLER"
        return 1
    fi
    
    # Start the master controller in the background
    nohup node "$MASTER_CONTROLLER" > "logs/master-controller.log" 2>&1 &
    local master_pid=$!
    
    # Wait a moment for it to start
    sleep 3
    
    # Check if it's running
    if kill -0 "$master_pid" 2>/dev/null; then
        success "Master Intelligent Automation Controller started (PID: $master_pid)"
        echo "$master_pid" > "logs/master-controller.pid"
    else
        error "Failed to start Master Intelligent Automation Controller"
        return 1
    fi
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
    log "Enhanced Intelligent PM2 Automation System Status:"
    echo
    
    # Show PM2 process list
    pm2 list
    
    echo
    info "System Information:"
    echo "  Project Root: $PROJECT_ROOT"
    echo "  Enhanced Ecosystem: $ENHANCED_ECOSYSTEM"
    echo "  Master Controller: $MASTER_CONTROLLER"
    echo "  PM2 Version: $(pm2 --version)"
    echo "  Node Version: $(node --version)"
    echo "  NPM Version: $(npm --version)"
    
    echo
    info "Intelligent Automation Systems:"
    echo "  🧠 Intelligent Repository Manager - Auto-merge and conflict resolution"
    echo "  🔍 Advanced Development Intelligence - Code analysis and optimization"
    echo "  🚀 Intelligent Deployment Orchestrator - Advanced deployment strategies"
    echo "  🎯 Master Controller - Orchestrates all systems"
    
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
    echo "  - Master Controller: logs/master-controller.log"
    echo "  - Repository Manager: logs/intelligent-repository-manager.log"
    echo "  - Development Intelligence: logs/advanced-development-intelligence.log"
    echo "  - Deployment Orchestrator: logs/intelligent-deployment-orchestrator.log"
    echo "  - And many more..."
    
    echo
    info "New Intelligent Features:"
    echo "  🔄 Automatic branch merging with conflict resolution"
    echo "  📊 AI-powered code analysis and pattern recognition"
    echo "  🚀 Blue-green, canary, and rolling deployments"
    echo "  🎯 Predictive issue detection and prevention"
    echo "  📈 Cross-system optimization and health monitoring"
}

# Create management scripts
create_management_scripts() {
    log "Creating intelligent management scripts..."
    
    # Intelligent start script
    cat > "$PROJECT_ROOT/scripts/intelligent-pm2-start.sh" << 'EOF'
#!/bin/bash
# Intelligent PM2 Start Script
cd "$(dirname "$0")/.."
pm2 start ecosystem.enhanced.cjs
nohup node scripts/automation/master-intelligent-automation-controller.cjs > logs/master-controller.log 2>&1 &
echo $! > logs/master-controller.pid
echo "Intelligent PM2 system started"
EOF
    
    # Intelligent stop script
    cat > "$PROJECT_ROOT/scripts/intelligent-pm2-stop.sh" << 'EOF'
#!/bin/bash
# Intelligent PM2 Stop Script
cd "$(dirname "$0")/.."
if [ -f "logs/master-controller.pid" ]; then
    kill $(cat logs/master-controller.pid) 2>/dev/null || true
    rm -f logs/master-controller.pid
fi
pm2 stop all
pm2 delete all
echo "Intelligent PM2 system stopped"
EOF
    
    # Intelligent restart script
    cat > "$PROJECT_ROOT/scripts/intelligent-pm2-restart.sh" << 'EOF'
#!/bin/bash
# Intelligent PM2 Restart Script
cd "$(dirname "$0")/.."
./scripts/intelligent-pm2-stop.sh
sleep 5
./scripts/intelligent-pm2-start.sh
echo "Intelligent PM2 system restarted"
EOF
    
    # Intelligent logs script
    cat > "$PROJECT_ROOT/scripts/intelligent-pm2-logs.sh" << 'EOF'
#!/bin/bash
# Intelligent PM2 Logs Script
cd "$(dirname "$0")/.."
echo "=== PM2 Process Logs ==="
pm2 logs --lines 50
echo ""
echo "=== Master Controller Logs ==="
tail -n 50 logs/master-controller.log
EOF
    
    # Intelligent monitor script
    cat > "$PROJECT_ROOT/scripts/intelligent-pm2-monitor.sh" << 'EOF'
#!/bin/bash
# Intelligent PM2 Monitor Script
cd "$(dirname "$0")/.."
echo "=== PM2 Process Monitor ==="
pm2 monit
EOF
    
    # Intelligent status script
    cat > "$PROJECT_ROOT/scripts/intelligent-pm2-status.sh" << 'EOF'
#!/bin/bash
# Intelligent PM2 Status Script
cd "$(dirname "$0")/.."
echo "=== PM2 Process Status ==="
pm2 list
echo ""
echo "=== Master Controller Status ==="
if [ -f "logs/master-controller.pid" ]; then
    PID=$(cat logs/master-controller.pid)
    if kill -0 $PID 2>/dev/null; then
        echo "✅ Master Controller is running (PID: $PID)"
    else
        echo "❌ Master Controller is not running"
        rm -f logs/master-controller.pid
    fi
else
    echo "❌ Master Controller PID file not found"
fi
EOF
    
    # Make scripts executable
    chmod +x "$PROJECT_ROOT/scripts/intelligent-pm2-"*.sh
    
    success "Intelligent management scripts created"
}

# Run health checks
run_health_checks() {
    log "Running system health checks..."
    
    local health_score=0
    local total_checks=0
    
    # Check PM2 processes
    if pm2 list | grep -q "online"; then
        health_score=$((health_score + 1))
        success "PM2 processes are running"
    else
        warning "No PM2 processes are running"
    fi
    total_checks=$((total_checks + 1))
    
    # Check master controller
    if [ -f "logs/master-controller.pid" ]; then
        local pid=$(cat logs/master-controller.pid)
        if kill -0 "$pid" 2>/dev/null; then
            health_score=$((health_score + 1))
            success "Master controller is running"
        else
            warning "Master controller is not running"
        fi
    else
        warning "Master controller PID file not found"
    fi
    total_checks=$((total_checks + 1))
    
    # Check log files
    if [ -d "logs" ] && [ "$(ls -A logs)" ]; then
        health_score=$((health_score + 1))
        success "Log files are being generated"
    else
        warning "No log files found"
    fi
    total_checks=$((total_checks + 1))
    
    # Calculate health percentage
    local health_percentage=$((health_score * 100 / total_checks))
    
    if [ $health_percentage -ge 80 ]; then
        success "System health: ${health_percentage}% (Excellent)"
    elif [ $health_percentage -ge 60 ]; then
        warning "System health: ${health_percentage}% (Good)"
    else
        error "System health: ${health_percentage}% (Needs attention)"
    fi
    
    return $health_percentage
}

# Main execution
main() {
    echo -e "${PURPLE}🧠 Enhanced Intelligent PM2 Automation System Startup${NC}"
    echo "================================================================"
    echo
    
    # Check prerequisites
    check_node
    check_npm
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
    
    # Start master controller
    if start_master_controller; then
        success "Master Intelligent Automation Controller started successfully"
    else
        warning "Master controller failed to start. Check logs for details."
    fi
    
    # Setup additional features
    setup_pm2_logrotate
    setup_pm2_monitoring
    
    # Create management scripts
    create_management_scripts
    
    # Run health checks
    run_health_checks
    
    # Display status
    display_system_status
    
    echo
    success "Enhanced Intelligent PM2 Automation System is now running!"
    echo
    info "Next steps:"
    echo "  1. Monitor the system: ./scripts/intelligent-pm2-monitor.sh"
    echo "  2. Check status: ./scripts/intelligent-pm2-status.sh"
    echo "  3. View logs: ./scripts/intelligent-pm2-logs.sh"
    echo "  4. Use management scripts in scripts/ directory"
    echo
    info "The intelligent system will automatically:"
    echo "  🧠 Analyze and merge pull requests intelligently"
    echo "  🔍 Detect code patterns and predict issues"
    echo "  🚀 Manage deployments with advanced strategies"
    echo "  🎯 Orchestrate all automation systems"
    echo "  📊 Generate comprehensive reports and insights"
    echo
    info "New Intelligent Features:"
    echo "  🔄 Smart conflict resolution and auto-merge"
    echo "  📈 Predictive maintenance and issue prevention"
    echo "  🚀 Blue-green, canary, and rolling deployments"
    echo "  🎯 Cross-system optimization and health monitoring"
    echo "  📊 AI-powered code analysis and recommendations"
    echo
}

# Run main function
main "$@"
#!/bin/bash

# PM2 Automation System Startup Script
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
PROJECT_ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
ECOSYSTEM_CONFIG="ecosystem.config.cjs"
ENHANCED_ECOSYSTEM="ecosystem.enhanced.cjs"
LOGS_DIR="logs"

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

print_header() {
    echo -e "${PURPLE}$1${NC}"
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
setup_directories() {
    log "Setting up directories..."
    
    mkdir -p "$LOGS_DIR"
    mkdir -p "error-reports"
    mkdir -p "backups"
    mkdir -p "scripts/automation"
    
    success "Directories created"
}

# Install dependencies if not already installed
install_dependencies() {
    if [ ! -d "node_modules" ]; then
        log "Installing dependencies..."
        npm install --legacy-peer-deps
        success "Dependencies installed"
    else
        info "Dependencies already installed"
    fi
}

# Build the project
build_project() {
    log "Building the project..."
    if npm run build; then
        success "Build completed successfully"
    else
        warning "Build failed, but continuing with automation setup"
    fi
}

# Install PM2 modules if needed
install_pm2_modules() {
    log "Setting up PM2 modules..."
    
    # Install PM2 log rotation
    if ! pm2 list | grep -q "pm2-logrotate"; then
        pm2 install pm2-logrotate
        pm2 set pm2-logrotate:max_size 10M
        pm2 set pm2-logrotate:retain 7
        pm2 set pm2-logrotate:compress true
        pm2 set pm2-logrotate:dateFormat 'YYYY-MM-DD_HH-mm-ss'
        success "PM2 logrotate installed and configured"
    fi
}

# Stop existing PM2 processes
stop_existing_processes() {
    log "Stopping existing PM2 processes..."
    
    if pm2 list | grep -q "online\|stopped"; then
        pm2 stop all 2>/dev/null || true
        pm2 delete all 2>/dev/null || true
        success "Existing PM2 processes stopped and deleted"
    else
        info "No existing PM2 processes found"
    fi
}

# Start PM2 ecosystem
start_pm2_ecosystem() {
    log "Starting PM2 automation ecosystem..."
    
    # Choose ecosystem file based on availability
    local ecosystem_file="$ECOSYSTEM_CONFIG"
    if [ ! -f "$ecosystem_file" ] && [ -f "$ENHANCED_ECOSYSTEM" ]; then
        ecosystem_file="$ENHANCED_ECOSYSTEM"
        info "Using enhanced ecosystem configuration"
    fi
    
    if [ ! -f "$ecosystem_file" ]; then
        error "No ecosystem configuration found"
        exit 1
    fi
    
    # Start all processes
    pm2 start "$ecosystem_file"
    
    # Wait for processes to start
    sleep 5
    
    # Check process status
    local failed_count=0
    local success_count=0
    
    while IFS= read -r line; do
        if echo "$line" | grep -q "online"; then
            ((success_count++))
        elif echo "$line" | grep -q "error\|stopped"; then
            ((failed_count++))
        fi
    done < <(pm2 list | grep -E "zion-website|error-monitor|syntax-fixer|dependency-manager|build-monitor")
    
    if [ $success_count -gt 0 ]; then
        success "Successfully started $success_count processes"
    fi
    
    if [ $failed_count -gt 0 ]; then
        warning "$failed_count processes failed to start"
        return 1
    fi
    
    return 0
}

# Create health endpoint if it doesn't exist
create_health_endpoint() {
    log "Creating health endpoint..."
    cat > health-endpoint.js << 'EOF'
const http = require('http');
const port = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  if (req.url === '/health') {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({
      status: 'healthy',
      timestamp: new Date().toISOString(),
      uptime: process.uptime(),
      memory: process.memoryUsage(),
      pid: process.pid
    }));
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Not Found');
  }
});

server.listen(port, () => {
  console.log(`Health endpoint server running on port ${port}`);
});
EOF

    # Start health endpoint server
    log "Starting health endpoint server..."
    pm2 start health-endpoint.js --name health-endpoint
    success "Health endpoint created and started"
}

# Run initial fixes
run_initial_fixes() {
    log "Running initial error detection and fixes..."
    
    # Run syntax fixer immediately
    if pm2 list | grep -q "syntax-fixer.*online"; then
        pm2 restart syntax-fixer
        success "Syntax fixer triggered"
    fi
    
    # Run dependency manager
    if pm2 list | grep -q "dependency-manager.*online"; then
        pm2 restart dependency-manager
        success "Dependency manager triggered"
    fi
    
    # Give processes time to work
    sleep 10
}

# Setup PM2 startup and monitoring
setup_pm2_persistence() {
    log "Setting up PM2 persistence and monitoring..."
    
    # Save PM2 configuration
    pm2 save
    
    # Setup startup script (this may require sudo)
    pm2 startup || warning "PM2 startup setup may require manual configuration"
    
    success "PM2 persistence configured"
}

# Display system status
display_status() {
    log "PM2 Automation System Status:"
    echo
    
    # Show PM2 process list
    pm2 list
    
    echo
    info "System Information:"
    echo "  Project Root: $PROJECT_ROOT"
    echo "  Ecosystem Config: $ECOSYSTEM_CONFIG"
    echo "  Enhanced Ecosystem: $ENHANCED_ECOSYSTEM"
    echo "  Logs Directory: $LOGS_DIR"
    echo "  PM2 Version: $(pm2 --version)"
    echo "  Node Version: $(node --version)"
    echo "  NPM Version: $(npm --version)"
    
    echo
    info "Available Commands:"
    echo "  View all logs: pm2 logs"
    echo "  View specific log: pm2 logs <process-name>"
    echo "  Monitor processes: pm2 monit"
    echo "  Restart all: pm2 restart all"
    echo "  Stop automation: pm2 stop all"
    echo "  Check status: pm2 status"
    
    echo
    info "Automation Processes:"
    echo "  - zion-website: Main application server"
    echo "  - error-monitor: Continuously monitors for errors"
    echo "  - syntax-fixer: Automatically fixes syntax errors"
    echo "  - dependency-manager: Manages dependencies and vulnerabilities"
    echo "  - build-monitor: Monitors build health and performance"
    echo "  - health-endpoint: Provides health check endpoint"
    
    echo
    info "Log Files:"
    echo "  - Error Monitor: $LOGS_DIR/error-monitor.log"
    echo "  - Syntax Fixer: $LOGS_DIR/syntax-fixer.log"
    echo "  - Dependency Manager: $LOGS_DIR/dependency-manager.log"
    echo "  - Build Monitor: $LOGS_DIR/build-monitor.log"
    echo "  - Main App: $LOGS_DIR/zion-website.log"
}

# Create management commands
create_management_commands() {
    log "Creating management commands..."
    
    # Create restart command
    cat > "$PROJECT_ROOT/restart-automation.sh" << 'EOF'
#!/bin/bash
echo "Restarting PM2 automation system..."
pm2 restart all
echo "PM2 automation system restarted"
EOF
    
    # Create stop command
    cat > "$PROJECT_ROOT/stop-automation.sh" << 'EOF'
#!/bin/bash
echo "Stopping PM2 automation system..."
pm2 stop all
echo "PM2 automation system stopped"
EOF
    
    # Create status command
    cat > "$PROJECT_ROOT/check-automation.sh" << 'EOF'
#!/bin/bash
echo "PM2 Automation System Status:"
pm2 status
echo ""
echo "Recent Error Reports:"
ls -la error-reports/ | tail -5
EOF
    
    # Create logs command
    cat > "$PROJECT_ROOT/view-logs.sh" << 'EOF'
#!/bin/bash
if [ "$1" ]; then
    pm2 logs "$1" --lines 50
else
    echo "Usage: ./view-logs.sh <process-name>"
    echo "Available processes:"
    pm2 list | grep -E "│.*│" | awk '{print $2}' | grep -v "name"
fi
EOF
    
    # Make scripts executable
    chmod +x "$PROJECT_ROOT"/*.sh
    
    success "Management commands created"
}

# Test automation system
test_automation_system() {
    print_header "🧪 Testing Automation System..."
    
    # Test error monitor
    log "Testing error monitor..."
    if pm2 list | grep -q "error-monitor.*online"; then
        pm2 restart error-monitor
        sleep 5
        success "Error monitor test completed"
    fi
    
    # Test health checker
    log "Testing health checker..."
    if pm2 list | grep -q "health-checker.*online"; then
        pm2 restart health-checker
        sleep 5
        success "Health checker test completed"
    fi
    
    # Show recent logs
    print_header "📋 Recent Logs:"
    if [ -f "$LOGS_DIR/error-monitor.log" ]; then
        echo -e "${GREEN}Error Monitor Logs:${NC}"
        tail -5 "$LOGS_DIR/error-monitor.log" 2>/dev/null || echo "No error monitor logs yet"
    fi
    
    if [ -f "$LOGS_DIR/health-checker.log" ]; then
        echo -e "${GREEN}Health Checker Logs:${NC}"
        tail -5 "$LOGS_DIR/health-checker.log" 2>/dev/null || echo "No health checker logs yet"
    fi
}

# Main execution
main() {
    echo -e "${PURPLE}🚀 Starting PM2 Automation System${NC}"
    echo "=================================================="
    echo
    
    # Check prerequisites
    check_pm2
    
    # Setup environment
    setup_directories
    install_dependencies
    build_project
    install_pm2_modules
    
    # Stop existing processes
    stop_existing_processes
    
    # Start automation system
    if start_pm2_ecosystem; then
        success "PM2 automation system started successfully"
        
        # Create health endpoint
        create_health_endpoint
        
        # Run initial fixes
        run_initial_fixes
        
        # Setup persistence
        setup_pm2_persistence
        
        # Create management commands
        create_management_commands
        
        # Test the system
        test_automation_system
        
        # Display status
        display_status
        
        echo
        success "🎉 PM2 Automation System is now running!"
        echo
        info "The system will automatically:"
        echo "  ✅ Monitor for errors every 5-10 minutes"
        echo "  ✅ Fix syntax errors automatically"
        echo "  ✅ Manage dependencies and security"
        echo "  ✅ Monitor build health"
        echo "  ✅ Restart failed processes"
        echo "  ✅ Rotate and manage logs"
        echo
        info "Use './check-automation.sh' to view system status"
        info "Use './view-logs.sh <process>' to view specific logs"
        info "Use 'pm2 monit' for real-time monitoring"
        
    else
        error "Failed to start PM2 automation system"
        echo
        warning "Check the logs for more information:"
        echo "  pm2 logs"
        exit 1
    fi
}

# Handle script arguments
case "${1:-}" in
    "stop")
        pm2 stop all
        success "PM2 automation system stopped"
        ;;
    "restart")
        pm2 restart all
        success "PM2 automation system restarted"
        ;;
    "status")
        pm2 status
        ;;
    "logs")
        pm2 logs
        ;;
    *)
        main "$@"
        ;;
esac

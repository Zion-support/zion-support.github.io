#!/bin/bash

<<<<<<< HEAD
# PM2 Automation Startup Script
# This script starts the complete PM2 automation system for error monitoring and fixing

set -e

echo "🚀 Starting PM2 Automation System..."

=======
# PM2 Automation System Startup Script
# This script starts the complete error monitoring and fixing automation system

set -e

>>>>>>> f7db7ceeeca70e96601169c4adc70ab97d4c7057
# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
<<<<<<< HEAD
NC='\033[0m' # No Color

# Function to print colored output
print_status() {
    echo -e "${GREEN}[INFO]${NC} $1"
}

print_warning() {
    echo -e "${YELLOW}[WARNING]${NC} $1"
}

print_error() {
    echo -e "${RED}[ERROR]${NC} $1"
}

print_header() {
    echo -e "${BLUE}$1${NC}"
}

# Check if PM2 is installed
if ! command -v pm2 &> /dev/null; then
    print_error "PM2 is not installed. Installing PM2..."
    npm install -g pm2
else
    print_status "PM2 is already installed"
fi

# Create necessary directories
print_status "Creating necessary directories..."
mkdir -p logs
mkdir -p error-reports
mkdir -p scripts

# Make scripts executable
print_status "Making scripts executable..."
chmod +x scripts/*.js
chmod +x scripts/*.sh 2>/dev/null || true

# Install dependencies if not already installed
if [ ! -d "node_modules" ]; then
    print_status "Installing dependencies..."
    npm install --legacy-peer-deps
else
    print_status "Dependencies already installed"
fi

# Build the project
print_status "Building the project..."
if npm run build; then
    print_status "Build completed successfully"
else
    print_warning "Build failed, but continuing with automation setup"
fi

# Stop any existing PM2 processes
print_status "Stopping existing PM2 processes..."
pm2 delete all 2>/dev/null || true

# Start PM2 processes using ecosystem file
print_header "🔧 Starting PM2 Ecosystem..."
if pm2 start ecosystem.config.js; then
    print_status "PM2 ecosystem started successfully"
else
    print_error "Failed to start PM2 ecosystem"
    exit 1
fi

# Install PM2 logrotate module
print_status "Installing PM2 logrotate..."
pm2 install pm2-logrotate 2>/dev/null || true

# Configure PM2 logrotate
print_status "Configuring PM2 logrotate..."
pm2 set pm2-logrotate:max_size 10M
pm2 set pm2-logrotate:retain 7
pm2 set pm2-logrotate:compress true
pm2 set pm2-logrotate:dateFormat 'YYYY-MM-DD_HH-mm-ss'

# Save PM2 configuration
print_status "Saving PM2 configuration..."
pm2 save

# Setup PM2 startup (optional - only if running as system service)
if [ "$1" = "--startup" ]; then
    print_status "Setting up PM2 startup..."
    pm2 startup | tail -1 | bash
fi

# Create health endpoint if it doesn't exist
print_status "Creating health endpoint..."
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
print_status "Starting health endpoint server..."
pm2 start health-endpoint.js --name health-endpoint

# Display PM2 status
print_header "📊 PM2 Process Status:"
pm2 list

# Display monitoring information
print_header "🔍 Monitoring Information:"
echo -e "${GREEN}PM2 Monitor:${NC} pm2 monit"
echo -e "${GREEN}View Logs:${NC} pm2 logs"
echo -e "${GREEN}Restart All:${NC} pm2 restart all"
echo -e "${GREEN}Stop All:${NC} pm2 stop all"
echo -e "${GREEN}Health Check:${NC} curl http://localhost:${PORT:-3000}/health"

# Show automation schedule
print_header "⏰ Automation Schedule:"
echo -e "${BLUE}Error Monitor:${NC} Every 10 minutes"
echo -e "${BLUE}Health Checker:${NC} Every 5 minutes"
echo -e "${BLUE}Auto Fixer:${NC} Every 2 hours"
echo -e "${BLUE}Log Cleaner:${NC} Daily at 2 AM"
echo -e "${BLUE}App Restart:${NC} Daily at 4 AM"

# Create a quick test of the automation system
print_header "🧪 Testing Automation System..."

# Test error monitor
print_status "Testing error monitor..."
node scripts/error-monitor.js &
ERROR_MONITOR_PID=$!
sleep 5
kill $ERROR_MONITOR_PID 2>/dev/null || true
print_status "Error monitor test completed"

# Test health checker
print_status "Testing health checker..."
node scripts/health-checker.js &
HEALTH_CHECKER_PID=$!
sleep 5
kill $HEALTH_CHECKER_PID 2>/dev/null || true
print_status "Health checker test completed"

# Show recent logs
print_header "📋 Recent Logs:"
if [ -f "logs/error-monitor.log" ]; then
    echo -e "${GREEN}Error Monitor Logs:${NC}"
    tail -5 logs/error-monitor.log 2>/dev/null || echo "No error monitor logs yet"
fi

if [ -f "logs/health-checker.log" ]; then
    echo -e "${GREEN}Health Checker Logs:${NC}"
    tail -5 logs/health-checker.log 2>/dev/null || echo "No health checker logs yet"
fi

# Final status
print_header "✅ PM2 Automation System Started Successfully!"
echo ""
echo -e "${GREEN}The following automation processes are now running:${NC}"
echo -e "  • ${BLUE}zion-app${NC} - Main application"
echo -e "  • ${BLUE}error-monitor${NC} - Monitors and detects errors"
echo -e "  • ${BLUE}health-checker${NC} - Performs health checks"
echo -e "  • ${BLUE}auto-fixer${NC} - Automatically fixes detected errors"
echo -e "  • ${BLUE}log-cleaner${NC} - Manages log files and cleanup"
echo -e "  • ${BLUE}health-endpoint${NC} - Provides health check endpoint"
echo ""
echo -e "${GREEN}Log files are stored in:${NC} ./logs/"
echo -e "${GREEN}Error reports are stored in:${NC} ./error-reports/"
echo ""
echo -e "${YELLOW}To monitor the system:${NC}"
echo -e "  pm2 monit           - Real-time monitoring dashboard"
echo -e "  pm2 logs            - View all logs"
echo -e "  pm2 logs <app-name> - View specific app logs"
echo ""
echo -e "${YELLOW}To manage the system:${NC}"
echo -e "  pm2 restart all     - Restart all processes"
echo -e "  pm2 stop all        - Stop all processes"
echo -e "  pm2 delete all      - Delete all processes"
echo ""
echo "🎉 Your project now has automated error monitoring and fixing!"
=======
PURPLE='\033[0;35m'
CYAN='\033[0;36m'
NC='\033[0m' # No Color

# Project configuration
PROJECT_ROOT="/workspace"
ECOSYSTEM_CONFIG="$PROJECT_ROOT/ecosystem.config.cjs"
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
setup_directories() {
    log "Setting up directories..."
    
    mkdir -p "$LOGS_DIR"
    mkdir -p "$PROJECT_ROOT/error-reports"
    mkdir -p "$PROJECT_ROOT/backups"
    mkdir -p "$PROJECT_ROOT/scripts/automation"
    
    success "Directories created"
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
        success "PM2 logrotate installed and configured"
    fi
}

# Stop existing PM2 processes
stop_existing_processes() {
    log "Stopping existing PM2 processes..."
    
    if pm2 list | grep -q "online\|stopped"; then
        pm2 stop all 2>/dev/null || true
        pm2 delete all 2>/dev/null || true
        success "Existing PM2 processes stopped"
    else
        info "No existing PM2 processes found"
    fi
}

# Start PM2 ecosystem
start_pm2_ecosystem() {
    log "Starting PM2 automation ecosystem..."
    
    if [ ! -f "$ECOSYSTEM_CONFIG" ]; then
        error "Ecosystem configuration not found: $ECOSYSTEM_CONFIG"
        exit 1
    fi
    
    # Start all processes
    pm2 start "$ECOSYSTEM_CONFIG"
    
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
    echo "  - error-monitor: Continuously monitors for errors"
    echo "  - syntax-fixer: Automatically fixes syntax errors"
    echo "  - dependency-manager: Manages dependencies and vulnerabilities"
    echo "  - build-monitor: Monitors build health and performance"
    echo "  - zion-website: Main application server"
    
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

# Main execution
main() {
    echo -e "${PURPLE}🚀 Starting PM2 Automation System${NC}"
    echo "=================================================="
    echo
    
    # Check prerequisites
    check_pm2
    
    # Setup environment
    setup_directories
    install_pm2_modules
    
    # Stop existing processes
    stop_existing_processes
    
    # Start automation system
    if start_pm2_ecosystem; then
        success "PM2 automation system started successfully"
        
        # Run initial fixes
        run_initial_fixes
        
        # Setup persistence
        setup_pm2_persistence
        
        # Create management commands
        create_management_commands
        
        # Display status
        display_status
        
        echo
        success "🎉 PM2 Automation System is now running!"
        echo
        info "The system will automatically:"
        echo "  ✅ Monitor for errors every 5 minutes"
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
>>>>>>> f7db7ceeeca70e96601169c4adc70ab97d4c7057

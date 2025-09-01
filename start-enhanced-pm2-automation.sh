#!/bin/bash

# Enhanced PM2 Automation System Startup Script
# This script starts the complete intelligent PM2 automation ecosystem with new features

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
PROJECT_ROOT="/workspace"
ECOSYSTEM_CONFIG="$PROJECT_ROOT/ecosystem.config.cjs"
LOGS_DIR="$PROJECT_ROOT/logs"
REPORTS_DIR="$PROJECT_ROOT/reports"
BACKUP_DIR="$PROJECT_ROOT/backups"

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
    mkdir -p "$REPORTS_DIR"
    mkdir -p "$BACKUP_DIR"
    mkdir -p "$PROJECT_ROOT/quality-reports"
    mkdir -p "$PROJECT_ROOT/deployments"
    mkdir -p "$PROJECT_ROOT/scripts/automation"
    
    success "Directories created"
}

# Install dependencies if not already installed
install_dependencies() {
    if [ ! -d "node_modules" ]; then
        print_status "Installing dependencies..."
        npm install --legacy-peer-deps
    else
        print_status "Dependencies already installed"
    fi
}

# Build the project
build_project() {
    print_status "Building the project..."
    if npm run build; then
        print_status "Build completed successfully"
    else
        print_warning "Build failed, but continuing with automation setup"
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
        success "PM2 logrotate installed and configured"
    fi
    
    # Install PM2 monitoring
    if ! pm2 list | grep -q "pm2-server-monit"; then
        pm2 install pm2-server-monit
        success "PM2 server monitoring installed"
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
    log "Starting enhanced PM2 automation ecosystem..."
    
    if [ ! -f "$ECOSYSTEM_CONFIG" ]; then
        error "Ecosystem configuration not found: $ECOSYSTEM_CONFIG"
        exit 1
    fi
    
    # Start all processes
    pm2 start "$ECOSYSTEM_CONFIG"
    
    # Wait for processes to start
    sleep 10
    
    # Check process status
    local failed_count=0
    local success_count=0
    
    while IFS= read -r line; do
        if echo "$line" | grep -q "online"; then
            ((success_count++))
        elif echo "$line" | grep -q "error\|stopped"; then
            ((failed_count++))
        fi
    done < <(pm2 list | grep -E "zion-website|error-monitor|syntax-fixer|dependency-manager|build-monitor|git-automation-manager|intelligent-deployment-pipeline|code-quality-automation|performance-optimization-automation|security-automation|repository-health-monitor")
    
    if [ $success_count -gt 0 ]; then
        success "Successfully started $success_count processes"
    fi
    
    if [ $failed_count -gt 0 ]; then
        warning "$failed_count processes failed to start"
        return 1
    fi
    
    return 0
}

# Run initial automation triggers
run_initial_automations() {
    log "Running initial automation triggers..."
    
    # Trigger Git automation
    if pm2 list | grep -q "git-automation-manager.*online"; then
        pm2 restart git-automation-manager
        success "Git automation manager triggered"
    fi
    
    # Trigger code quality automation
    if pm2 list | grep -q "code-quality-automation.*online"; then
        pm2 restart code-quality-automation
        success "Code quality automation triggered"
    fi
    
    # Trigger deployment pipeline
    if pm2 list | grep -q "intelligent-deployment-pipeline.*online"; then
        pm2 restart intelligent-deployment-pipeline
        success "Intelligent deployment pipeline triggered"
    fi
    
    # Give processes time to work
    sleep 15
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

# Create health endpoint if it doesn't exist
create_health_endpoint() {
    print_status "Creating enhanced health endpoint..."
    cat > health-endpoint.js << 'EOF'
const http = require('http');
const fs = require('fs');
const path = require('path');
const port = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  if (req.url === '/health') {
    // Basic health check
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({
      status: 'healthy',
      timestamp: new Date().toISOString(),
      uptime: process.uptime(),
      memory: process.memoryUsage(),
      pid: process.pid
    }));
  } else if (req.url === '/automation-status') {
    // Automation status endpoint
    try {
      const statusFile = path.join(__dirname, 'reports', 'automation-status.json');
      if (fs.existsSync(statusFile)) {
        const status = JSON.parse(fs.readFileSync(statusFile, 'utf8'));
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify(status));
      } else {
        res.writeHead(404, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ error: 'Status file not found' }));
      }
    } catch (error) {
      res.writeHead(500, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ error: error.message }));
    }
  } else if (req.url === '/quality-report') {
    // Code quality report endpoint
    try {
      const qualityFile = path.join(__dirname, 'reports', 'code-quality-report.json');
      if (fs.existsSync(qualityFile)) {
        const quality = JSON.parse(fs.readFileSync(qualityFile, 'utf8'));
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify(quality));
      } else {
        res.writeHead(404, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ error: 'Quality report not found' }));
      }
    } catch (error) {
      res.writeHead(500, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ error: error.message }));
    }
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Not Found');
  }
});

server.listen(port, () => {
  console.log(`Enhanced health endpoint server running on port ${port}`);
});
EOF

    # Start health endpoint server
    print_status "Starting enhanced health endpoint server..."
    pm2 start health-endpoint.js --name health-endpoint
}

# Display system status
display_status() {
    log "Enhanced PM2 Automation System Status:"
    echo
    
    # Show PM2 process list
    pm2 list
    
    echo
    info "System Information:"
    echo "  Project Root: $PROJECT_ROOT"
    echo "  Ecosystem Config: $ECOSYSTEM_CONFIG"
    echo "  Logs Directory: $LOGS_DIR"
    echo "  Reports Directory: $REPORTS_DIR"
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
    info "Core Automation Processes:"
    echo "  - zion-website: Main application server"
    echo "  - error-monitor: Continuously monitors for errors"
    echo "  - syntax-fixer: Automatically fixes syntax errors"
    echo "  - dependency-manager: Manages dependencies and vulnerabilities"
    echo "  - build-monitor: Monitors build health and performance"
    echo "  - health-endpoint: Provides health check endpoints"
    
    echo
    info "NEW: Intelligent Automation Processes:"
    echo "  - git-automation-manager: Handles repository operations automatically"
    echo "  - intelligent-deployment-pipeline: Smart deployment with rollback"
    echo "  - code-quality-automation: Automated linting, formatting, and testing"
    echo "  - performance-optimization-automation: Optimizes app performance"
    echo "  - security-automation: Automated security scanning and fixes"
    echo "  - repository-health-monitor: Monitors repository health"
    
    echo
    info "Log Files:"
    echo "  - Error Monitor: $LOGS_DIR/error-monitor.log"
    echo "  - Syntax Fixer: $LOGS_DIR/syntax-fixer.log"
    echo "  - Git Automation: $LOGS_DIR/git-automation-manager.log"
    echo "  - Deployment Pipeline: $LOGS_DIR/intelligent-deployment-pipeline.log"
    echo "  - Code Quality: $LOGS_DIR/code-quality-automation.log"
    echo "  - Main App: $LOGS_DIR/zion-website.log"
    
    echo
    info "Health Endpoints:"
    echo "  - Basic Health: http://localhost:3000/health"
    echo "  - Automation Status: http://localhost:3000/automation-status"
    echo "  - Quality Report: http://localhost:3000/quality-report"
}

# Create enhanced management commands
create_management_commands() {
    log "Creating enhanced management commands..."
    
    # Create restart command
    cat > "$PROJECT_ROOT/restart-automation.sh" << 'EOF'
#!/bin/bash
echo "🔄 Restarting enhanced PM2 automation system..."
pm2 restart all
echo "✅ PM2 automation system restarted"
EOF
    
    # Create stop command
    cat > "$PROJECT_ROOT/stop-automation.sh" << 'EOF'
#!/bin/bash
echo "🛑 Stopping enhanced PM2 automation system..."
pm2 stop all
echo "✅ PM2 automation system stopped"
EOF
    
    # Create status command
    cat > "$PROJECT_ROOT/check-automation.sh" << 'EOF'
#!/bin/bash
echo "📊 Enhanced PM2 Automation System Status:"
pm2 status
echo ""
echo "📋 Recent Reports:"
ls -la reports/ | tail -5
echo ""
echo "🔍 Recent Quality Reports:"
ls -la quality-reports/ | tail -3
echo ""
echo "📈 Recent Deployment Reports:"
ls -la reports/ | grep deployment | tail -3
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
    echo ""
    echo "Quick commands:"
    echo "  ./view-logs.sh git-automation-manager    # View Git automation logs"
    echo "  ./view-logs.sh code-quality-automation   # View quality automation logs"
    echo "  ./view-logs.sh intelligent-deployment-pipeline # View deployment logs"
fi
EOF
    
    # Create automation dashboard command
    cat > "$PROJECT_ROOT/automation-dashboard.sh" << 'EOF'
#!/bin/bash
echo "🎯 Enhanced PM2 Automation Dashboard"
echo "===================================="
echo ""
echo "📊 Process Status:"
pm2 status
echo ""
echo "📈 Recent Activity:"
echo "  - Git Automation: $(pm2 logs git-automation-manager --lines 1 | tail -1)"
echo "  - Code Quality: $(pm2 logs code-quality-automation --lines 1 | tail -1)"
echo "  - Deployment: $(pm2 logs intelligent-deployment-pipeline --lines 1 | tail -1)"
echo ""
echo "🔍 Health Status:"
curl -s http://localhost:3000/health | jq . 2>/dev/null || echo "Health endpoint not accessible"
echo ""
echo "📋 Quick Actions:"
echo "  pm2 monit                    # Real-time monitoring"
echo "  pm2 logs --lines 100        # Recent logs"
echo "  ./check-automation.sh       # Detailed status"
EOF
    
    # Create git automation command
    cat > "$PROJECT_ROOT/git-automation.sh" << 'EOF'
#!/bin/bash
echo "🤖 Git Automation Commands:"
echo "==========================="
echo ""
echo "📊 Status:"
pm2 status git-automation-manager
echo ""
echo "📋 Recent Activity:"
pm2 logs git-automation-manager --lines 10
echo ""
echo "🔄 Manual Triggers:"
echo "  pm2 restart git-automation-manager    # Restart Git automation"
echo "  pm2 logs git-automation-manager       # View Git automation logs"
echo "  cat reports/repository-health.json    # View repository health"
EOF
    
    # Create quality automation command
    cat > "$PROJECT_ROOT/quality-automation.sh" << 'EOF'
#!/bin/bash
echo "🎯 Code Quality Automation Commands:"
echo "===================================="
echo ""
echo "📊 Status:"
pm2 status code-quality-automation
echo ""
echo "📋 Recent Activity:"
pm2 logs code-quality-automation --lines 10
echo ""
echo "🔄 Manual Triggers:"
echo "  pm2 restart code-quality-automation   # Restart quality automation"
echo "  pm2 logs code-quality-automation      # View quality logs"
echo "  cat reports/code-quality-report.json  # View quality report"
EOF
    
    # Make scripts executable
    chmod +x "$PROJECT_ROOT"/*.sh
    
    success "Enhanced management commands created"
}

# Test automation system
test_automation_system() {
    print_header "🧪 Testing Enhanced Automation System..."

    # Test health endpoints
    print_status "Testing health endpoints..."
    if curl -s http://localhost:3000/health > /dev/null 2>&1; then
        print_status "Health endpoint is accessible"
    else
        print_warning "Health endpoint not accessible yet"
    fi

    # Test automation status
    print_status "Testing automation status endpoint..."
    if curl -s http://localhost:3000/automation-status > /dev/null 2>&1; then
        print_status "Automation status endpoint is accessible"
    else
        print_warning "Automation status endpoint not accessible yet"
    fi

    # Show recent logs
    print_header "📋 Recent Logs:"
    if [ -f "logs/git-automation-manager.log" ]; then
        echo -e "${GREEN}Git Automation Logs:${NC}"
        tail -3 logs/git-automation-manager.log 2>/dev/null || echo "No Git automation logs yet"
    fi

    if [ -f "logs/code-quality-automation.log" ]; then
        echo -e "${GREEN}Code Quality Logs:${NC}"
        tail -3 logs/code-quality-automation.log 2>/dev/null || echo "No quality automation logs yet"
    fi

    if [ -f "logs/intelligent-deployment-pipeline.log" ]; then
        echo -e "${GREEN}Deployment Pipeline Logs:${NC}"
        tail -3 logs/intelligent-deployment-pipeline.log 2>/dev/null || echo "No deployment logs yet"
    fi
}

# Main execution
main() {
    echo -e "${PURPLE}🚀 Starting Enhanced PM2 Automation System${NC}"
    echo "========================================================"
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
        success "Enhanced PM2 automation system started successfully"
        
        # Create health endpoint
        create_health_endpoint
        
        # Run initial automations
        run_initial_automations
        
        # Setup persistence
        setup_pm2_persistence
        
        # Create management commands
        create_management_commands
        
        # Test automation system
        test_automation_system
        
        # Display status
        display_status
        
        echo
        success "🎉 Enhanced PM2 Automation System is now running!"
        echo
        info "The system will automatically:"
        echo "  ✅ Monitor for errors every 5 minutes"
        echo "  ✅ Fix syntax errors automatically"
        echo "  ✅ Manage dependencies and security"
        echo "  ✅ Monitor build health"
        echo "  ✅ Restart failed processes"
        echo "  ✅ Rotate and manage logs"
        echo "  🆕 Manage Git operations automatically"
        echo "  🆕 Handle intelligent deployments"
        echo "  🆕 Maintain code quality standards"
        echo "  🆕 Optimize performance continuously"
        echo "  🆕 Monitor repository health"
        echo
        info "Use './check-automation.sh' to view system status"
        info "Use './automation-dashboard.sh' for quick overview"
        info "Use './git-automation.sh' for Git automation info"
        info "Use './quality-automation.sh' for quality automation info"
        info "Use './view-logs.sh <process>' to view specific logs"
        info "Use 'pm2 monit' for real-time monitoring"
        
    else
        error "Failed to start enhanced PM2 automation system"
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
        success "Enhanced PM2 automation system stopped"
        ;;
    "restart")
        pm2 restart all
        success "Enhanced PM2 automation system restarted"
        ;;
    "status")
        pm2 status
        ;;
    "logs")
        pm2 logs
        ;;
    "dashboard")
        if [ -f "./automation-dashboard.sh" ]; then
            ./automation-dashboard.sh
        else
            echo "Dashboard not available yet. Run the script first to create it."
        fi
        ;;
    *)
        main "$@"
        ;;
esac
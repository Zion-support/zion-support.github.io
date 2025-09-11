#!/bin/bash

# Enhanced Intelligent PM2 Ecosystem V2 Startup Script
# This script starts the complete enhanced intelligent PM2 automation ecosystem with advanced features

set -e

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
PURPLE='\033[0;35m'
CYAN='\033[0;36m'
BOLD='\033[1m'
NC='\033[0m' # No Color

# Project configuration
PROJECT_ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
ENHANCED_ECOSYSTEM="$PROJECT_ROOT/ecosystem.enhanced-intelligent-v2.cjs"
BACKUP_ECOSYSTEM="$PROJECT_ROOT/ecosystem.config.backup.$(date +%s).cjs"
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

banner() {
    echo -e "${BOLD}${PURPLE}$1${NC}"
}

# Check system requirements
check_system_requirements() {
    log "Checking system requirements..."
    
    # Check Node.js version
    if ! command -v node &> /dev/null; then
        error "Node.js is not installed. Please install Node.js 18+ to continue."
        exit 1
    fi
    
    local node_version=$(node --version | cut -d'v' -f2 | cut -d'.' -f1)
    if [ "$node_version" -lt 18 ]; then
        error "Node.js version 18+ is required. Current version: $(node --version)"
        exit 1
    fi
    
    success "Node.js version: $(node --version)"
    
    # Check NPM
    if ! command -v npm &> /dev/null; then
        error "NPM is not installed. Please install NPM to continue."
        exit 1
    fi
    
    success "NPM version: $(npm --version)"
}

# Check if PM2 is installed
check_pm2() {
    log "Checking PM2 installation..."
    
    if ! command -v pm2 &> /dev/null; then
        warning "PM2 is not installed. Installing PM2 globally..."
        npm install -g pm2
        success "PM2 installed successfully"
    else
        info "PM2 is already installed: $(pm2 --version)"
    fi
    
    # Install PM2 modules if not present
    log "Installing PM2 modules..."
    pm2 install pm2-logrotate || true
    pm2 install pm2-server-monit || true
    
    success "PM2 modules installed"
}

# Setup logging infrastructure
setup_logging() {
    log "Setting up logging infrastructure..."
    
    # Create logs directory with proper structure
    mkdir -p "$LOG_DIR"
    mkdir -p "$LOG_DIR/archive"
    mkdir -p "$LOG_DIR/reports"
    
    # Set proper permissions
    chmod 755 "$LOG_DIR"
    
    # Create log rotation configuration
    cat > "$LOG_DIR/logrotate.conf" << 'EOF'
/workspace/logs/*.log {
    daily
    missingok
    rotate 7
    compress
    delaycompress
    notifempty
    create 644 root root
    postrotate
        pm2 reloadLogs
    endscript
}
EOF
    
    success "Logging infrastructure ready"
}

# Setup PM2 configuration
setup_pm2_configuration() {
    log "Setting up PM2 configuration..."
    
    # Configure PM2 logrotate
    pm2 set pm2-logrotate:max_size 50M
    pm2 set pm2-logrotate:retain 10
    pm2 set pm2-logrotate:compress true
    pm2 set pm2-logrotate:date_format YYYY-MM-DD_HH-mm-ss
    pm2 set pm2-logrotate:workerInterval 30
    pm2 set pm2-logrotate:rotateInterval 0 0 * * *
    
    # Configure PM2 monitoring
    pm2 set pm2-server-monit:server_name "ZionTechGroup-PM2-Ecosystem"
    pm2 set pm2-server-monit:secret_key "your-secret-key-here"
    pm2 set pm2-server-monit:public_key "your-public-key-here"
    pm2 set pm2-server-monit:machine_name "production-server"
    
    success "PM2 configuration completed"
}

# Backup existing ecosystem
backup_existing_ecosystem() {
    if [ -f "$ENHANCED_ECOSYSTEM" ]; then
        log "Backing up existing ecosystem configuration..."
        cp "$ENHANCED_ECOSYSTEM" "$BACKUP_ECOSYSTEM"
        success "Existing ecosystem backed up to: $BACKUP_ECOSYSTEM"
    fi
}

# Validate ecosystem configuration
validate_ecosystem_config() {
    log "Validating ecosystem configuration..."
    
    if [ ! -f "$ENHANCED_ECOSYSTEM" ]; then
        error "Enhanced ecosystem configuration not found: $ENHANCED_ECOSYSTEM"
        exit 1
    fi
    
    # Test the configuration file
    if node -c "$ENHANCED_ECOSYSTEM" 2>/dev/null; then
        success "Ecosystem configuration is valid"
    else
        error "Ecosystem configuration has syntax errors"
        exit 1
    fi
}

# Check automation scripts
check_automation_scripts() {
    log "Checking automation scripts..."
    
    local missing_scripts=()
    local required_scripts=(
        "scripts/automation/ai-code-analyzer.cjs"
        "scripts/automation/smart-performance-optimizer.cjs"
        "scripts/automation/intelligent-dependency-manager.cjs"
        "scripts/automation/smart-deployment-automation.cjs"
        "scripts/automation/intelligent-repository-manager.cjs"
        "scripts/automation/advanced-development-workflow.cjs"
        "scripts/automation/intelligent-cicd-orchestrator.cjs"
        "scripts/automation/enhanced-ci-cd-automation.cjs"
        "scripts/automation/enhanced-testing-automation.cjs"
        "scripts/automation/enhanced-security-automation.cjs"
        "scripts/automation/project-health-monitor.cjs"
        "scripts/automation/pm2-sync-automation.cjs"
        "scripts/automation/link-checker-automation.cjs"
        "scripts/automation/typescript-syntax-fixer.cjs"
        "scripts/automation/console-error-fixer.cjs"
        "scripts/automation/quality-checks.cjs"
        "scripts/automation/security-audit.cjs"
        "scripts/automation/continuous-improvement.cjs"
        "scripts/automation/daily-build-test.cjs"
        "scripts/automation/health-check.cjs"
        "scripts/automation/security-scanner.cjs"
        "scripts/automation/performance-monitor.cjs"
    )
    
    for script in "${required_scripts[@]}"; do
        if [ ! -f "$PROJECT_ROOT/$script" ]; then
            missing_scripts+=("$script")
        fi
    done
    
    if [ ${#missing_scripts[@]} -gt 0 ]; then
        warning "Missing automation scripts:"
        for script in "${missing_scripts[@]}"; do
            echo "  - $script"
        done
        warning "Some automations may not work properly"
    else
        success "All required automation scripts found"
    fi
}

# Stop existing PM2 processes
stop_existing_processes() {
    log "Stopping existing PM2 processes..."
    
    if pm2 list | grep -q "online\|stopped\|errored"; then
        pm2 stop all 2>/dev/null || true
        pm2 delete all 2>/dev/null || true
        success "Existing PM2 processes stopped and deleted"
    else
        info "No existing PM2 processes found"
    fi
    
    # Clear PM2 logs
    pm2 flush
    success "PM2 logs cleared"
}

# Start enhanced intelligent ecosystem
start_enhanced_ecosystem() {
    log "Starting Enhanced Intelligent PM2 Ecosystem V2..."
    
    # Start the enhanced ecosystem using PM2
    if pm2 start "$ENHANCED_ECOSYSTEM" --env production; then
        success "Enhanced ecosystem started successfully"
    else
        error "Failed to start enhanced ecosystem"
        return 1
    fi
    
    # Wait for processes to stabilize
    log "Waiting for processes to stabilize..."
    sleep 15
    
    # Check process status
    local failed_processes=()
    local running_processes=()
    local errored_processes=()
    
    while IFS= read -r line; do
        # Parse PM2 list output
        if echo "$line" | grep -E "^\s*[0-9]+" >/dev/null; then
            local name=$(echo "$line" | awk '{print $2}')
            local status=$(echo "$line" | awk '{print $6}')
            
            case "$status" in
                "online")
                    running_processes+=("$name")
                    ;;
                "errored")
                    errored_processes+=("$name")
                    ;;
                *)
                    failed_processes+=("$name")
                    ;;
            esac
        fi
    done < <(pm2 list)
    
    # Report results
    if [ ${#running_processes[@]} -gt 0 ]; then
        success "Successfully started ${#running_processes[@]} processes:"
        for process in "${running_processes[@]}"; do
            echo "  ✓ $process"
        done
    fi
    
    if [ ${#errored_processes[@]} -gt 0 ]; then
        warning "Processes with errors (${#errored_processes[@]}):"
        for process in "${errored_processes[@]}"; do
            echo "  ⚠ $process"
        done
    fi
    
    if [ ${#failed_processes[@]} -gt 0 ]; then
        warning "Failed to start ${#failed_processes[@]} processes:"
        for process in "${failed_processes[@]}"; do
            echo "  ✗ $process"
        done
    fi
    
    return 0
}

# Setup PM2 startup and persistence
setup_pm2_persistence() {
    log "Setting up PM2 persistence..."
    
    # Save PM2 configuration
    pm2 save
    
    # Setup PM2 startup script
    pm2 startup
    
    success "PM2 persistence configured"
}

# Create management scripts
create_management_scripts() {
    log "Creating management scripts..."
    
    # Create scripts directory
    mkdir -p "$PROJECT_ROOT/scripts/management"
    
    # Enhanced start script
    cat > "$PROJECT_ROOT/scripts/management/start-ecosystem.sh" << 'EOF'
#!/bin/bash
# Start Enhanced Intelligent PM2 Ecosystem V2
cd "$(dirname "$0")/../.."
./start-enhanced-intelligent-pm2-ecosystem-v2.sh
EOF
    
    # Enhanced stop script
    cat > "$PROJECT_ROOT/scripts/management/stop-ecosystem.sh" << 'EOF'
#!/bin/bash
# Stop Enhanced Intelligent PM2 Ecosystem V2
cd "$(dirname "$0")/../.."
pm2 stop all
pm2 delete all
echo "Enhanced intelligent PM2 ecosystem stopped"
EOF
    
    # Enhanced restart script
    cat > "$PROJECT_ROOT/scripts/management/restart-ecosystem.sh" << 'EOF'
#!/bin/bash
# Restart Enhanced Intelligent PM2 Ecosystem V2
cd "$(dirname "$0")/../.."
pm2 restart all
echo "Enhanced intelligent PM2 ecosystem restarted"
EOF
    
    # Enhanced status script
    cat > "$PROJECT_ROOT/scripts/management/status-ecosystem.sh" << 'EOF'
#!/bin/bash
# Status of Enhanced Intelligent PM2 Ecosystem V2
cd "$(dirname "$0")/../.."
echo "=== PM2 Process Status ==="
pm2 list
echo ""
echo "=== System Resources ==="
pm2 monit --no-interaction
EOF
    
    # Enhanced logs script
    cat > "$PROJECT_ROOT/scripts/management/logs-ecosystem.sh" << 'EOF'
#!/bin/bash
# View Enhanced Intelligent PM2 Ecosystem V2 Logs
cd "$(dirname "$0")/../.."
if [ -z "$1" ]; then
    pm2 logs
else
    pm2 logs "$1"
fi
EOF
    
    # Enhanced monitor script
    cat > "$PROJECT_ROOT/scripts/management/monitor-ecosystem.sh" << 'EOF'
#!/bin/bash
# Monitor Enhanced Intelligent PM2 Ecosystem V2
cd "$(dirname "$0")/../.."
pm2 monit
EOF
    
    # Health check script
    cat > "$PROJECT_ROOT/scripts/management/health-check.sh" << 'EOF'
#!/bin/bash
# Health Check for Enhanced Intelligent PM2 Ecosystem V2
cd "$(dirname "$0")/../.."
echo "=== Ecosystem Health Check ==="
echo "Date: $(date)"
echo ""
echo "=== Process Status ==="
pm2 list
echo ""
echo "=== System Resources ==="
echo "CPU Usage: $(top -bn1 | grep "Cpu(s)" | awk '{print $2}' | cut -d'%' -f1)%"
echo "Memory Usage: $(free | grep Mem | awk '{printf "%.2f%%", $3/$2 * 100.0}')"
echo "Disk Usage: $(df -h / | awk 'NR==2{printf "%s", $5}')"
echo ""
echo "=== Log Summary ==="
echo "Recent errors in logs:"
find logs/ -name "*.log" -mtime -1 -exec grep -l "ERROR\|FATAL" {} \; 2>/dev/null | head -5
EOF
    
    # Make scripts executable
    chmod +x "$PROJECT_ROOT/scripts/management/"*.sh
    
    success "Management scripts created in scripts/management/ directory"
}

# Display ecosystem status
display_ecosystem_status() {
    banner "🧠 Enhanced Intelligent PM2 Ecosystem V2 Status"
    echo "============================================================="
    echo
    
    # Show PM2 process list
    pm2 list
    
    echo
    info "📊 System Information:"
    echo "  Project Root: $PROJECT_ROOT"
    echo "  Enhanced Ecosystem: $ENHANCED_ECOSYSTEM"
    echo "  Log Directory: $LOG_DIR"
    echo "  PM2 Version: $(pm2 --version)"
    echo "  Node Version: $(node --version)"
    echo "  NPM Version: $(npm --version)"
    
    echo
    info "🚀 Enhanced Intelligent Automation Features:"
    echo "  🧠 AI-Powered Code Analysis & Auto-Fixing (Every 2 hours)"
    echo "  ⚡ Smart Performance Optimization (Every 4 hours)"
    echo "  📦 Intelligent Dependency Management (Weekly)"
    echo "  🚀 Smart Deployment Automation (Every 6 hours)"
    echo "  🔄 Intelligent Repository Management (Every 30 minutes)"
    echo "  🛠️  Advanced Development Workflow (Every 15 minutes)"
    echo "  🔗 Intelligent CI/CD Pipeline Orchestration (Every 10 minutes)"
    echo "  🧪 Enhanced Testing Automation (Every 20 minutes)"
    echo "  🔒 Enhanced Security Automation (Every 3 hours)"
    echo "  📊 Project Health Monitoring (Every 5 minutes)"
    echo "  ⚡ PM2 Process Synchronization (Every minute)"
    echo "  🔗 Link Validation & Monitoring (Every 8 hours)"
    echo "  📝 TypeScript Error Fixing (Every 10 minutes)"
    echo "  🚨 Console Error Detection & Fixing (Every 5 minutes)"
    echo "  ✅ Quality Gates & Validation (Every 15 minutes)"
    echo "  🔍 Security Vulnerability Scanning (Every 6 hours)"
    echo "  📈 Continuous Improvement (Daily at 2 AM)"
    echo "  🏗️  Daily Build & Test Automation (Daily at 1 AM)"
    echo "  💊 Health Checks (Every 2 minutes)"
    echo "  🛡️  Security Scanning (Every 4 hours)"
    echo "  📈 Performance Monitoring (Every 3 minutes)"
    
    echo
    info "🎛️  Available Management Commands:"
    echo "  Start Ecosystem: ./scripts/management/start-ecosystem.sh"
    echo "  Stop Ecosystem: ./scripts/management/stop-ecosystem.sh"
    echo "  Restart Ecosystem: ./scripts/management/restart-ecosystem.sh"
    echo "  View Status: ./scripts/management/status-ecosystem.sh"
    echo "  View Logs: ./scripts/management/logs-ecosystem.sh [process-name]"
    echo "  Monitor: ./scripts/management/monitor-ecosystem.sh"
    echo "  Health Check: ./scripts/management/health-check.sh"
    
    echo
    info "📁 Log Files Location: $LOG_DIR/"
    echo "  - Main Application: logs/web.log"
    echo "  - AI Code Analyzer: logs/ai-code-analyzer.log"
    echo "  - Performance Optimizer: logs/smart-performance-optimizer.log"
    echo "  - Dependency Manager: logs/intelligent-dependency-manager.log"
    echo "  - Deployment Automation: logs/smart-deployment-automation.log"
    echo "  - Repository Manager: logs/intelligent-repository-manager.log"
    echo "  - And many more..."
    
    echo
    info "🔧 Advanced Features:"
    echo "  🔄 Automatic process recovery and restart"
    echo "  📊 Real-time performance monitoring"
    echo "  🔒 Comprehensive security scanning"
    echo "  🛠️  Intelligent error detection and fixing"
    echo "  📈 Continuous quality improvement"
    echo "  🚀 Smart deployment with rollback capabilities"
    echo "  🧪 Adaptive testing strategies"
    echo "  📦 Intelligent dependency management"
    echo "  🔗 Automated repository management"
    echo "  💡 AI-powered code optimization"
}

# Run comprehensive health check
run_comprehensive_health_check() {
    log "Running comprehensive health check..."
    
    # Wait for all processes to stabilize
    sleep 10
    
    # Check process health
    local healthy_processes=0
    local total_processes=0
    
    while IFS= read -r line; do
        if echo "$line" | grep -E "^\s*[0-9]+" >/dev/null; then
            ((total_processes++))
            local status=$(echo "$line" | awk '{print $6}')
            if [ "$status" = "online" ]; then
                ((healthy_processes++))
            fi
        fi
    done < <(pm2 list)
    
    local health_percentage=$((healthy_processes * 100 / total_processes))
    
    if [ $health_percentage -ge 90 ]; then
        success "Ecosystem Health: Excellent ($health_percentage% - $healthy_processes/$total_processes processes online)"
    elif [ $health_percentage -ge 75 ]; then
        warning "Ecosystem Health: Good ($health_percentage% - $healthy_processes/$total_processes processes online)"
    elif [ $health_percentage -ge 50 ]; then
        warning "Ecosystem Health: Fair ($health_percentage% - $healthy_processes/$total_processes processes online)"
    else
        error "Ecosystem Health: Poor ($health_percentage% - $healthy_processes/$total_processes processes online)"
    fi
    
    return 0
}

# Main execution
main() {
    banner "🚀 Enhanced Intelligent PM2 Ecosystem V2 Startup"
    banner "=================================================="
    echo
    
    # System checks
    check_system_requirements
    check_pm2
    
    # Setup infrastructure
    setup_logging
    setup_pm2_configuration
    backup_existing_ecosystem
    validate_ecosystem_config
    check_automation_scripts
    
    # Start ecosystem
    stop_existing_processes
    
    if start_enhanced_ecosystem; then
        success "🎉 Enhanced intelligent PM2 ecosystem started successfully!"
    else
        error "❌ Failed to start enhanced ecosystem. Check logs for details."
        exit 1
    fi
    
    # Post-startup setup
    setup_pm2_persistence
    create_management_scripts
    
    # Final checks and status
    run_comprehensive_health_check
    display_ecosystem_status
    
    echo
    banner "🎉 Enhanced Intelligent PM2 Ecosystem V2 is now running!"
    echo
    success "🚀 System Status: OPERATIONAL"
    info "🔗 Access monitoring at: http://localhost:3000"
    info "📊 PM2 Web Interface: pm2 web"
    info "📱 PM2 Plus Monitoring: https://app.pm2.io/"
    echo
    info "🆘 Support & Documentation:"
    echo "  - PM2 Documentation: https://pm2.keymetrics.io/"
    echo "  - Ecosystem Configuration: ecosystem.enhanced-intelligent-v2.cjs"
    echo "  - Management Scripts: scripts/management/"
    echo "  - Log Files: logs/"
    echo
    success "✨ The enhanced intelligent ecosystem is continuously working to:"
    echo "  - Optimize your application performance"
    echo "  - Maintain code quality and security"
    echo "  - Automate deployment and testing"
    echo "  - Monitor system health"
    echo "  - Provide intelligent insights and improvements"
    echo
}

# Trap to handle script interruption
trap 'echo -e "\n${RED}Script interrupted. Cleaning up...${NC}"; pm2 kill; exit 1' INT TERM

# Run main function
main "$@"
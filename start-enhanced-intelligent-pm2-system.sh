#!/bin/bash

# Enhanced Intelligent PM2 System Startup Script
# This script starts the complete enhanced intelligent PM2 automation ecosystem

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
ENHANCED_ECOSYSTEM="$PROJECT_ROOT/ecosystem.enhanced-intelligent.cjs"
LOGS_DIR="$PROJECT_ROOT/logs"
SCRIPTS_DIR="$PROJECT_ROOT/scripts"

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
        info "PM2 is already installed"
    fi
}

# Check if we're in the project directory
check_project_directory() {
    if [[ ! -f "$PROJECT_ROOT/package.json" ]]; then
        error "package.json not found. Please run this script from the project root."
        exit 1
    fi
    
    if [[ ! -f "$ENHANCED_ECOSYSTEM" ]]; then
        error "Enhanced ecosystem config not found: $ENHANCED_ECOSYSTEM"
        exit 1
    fi
    
    success "Project directory validated"
}

# Create necessary directories
create_directories() {
    log "Creating necessary directories..."
    
    mkdir -p "$LOGS_DIR"
    mkdir -p "$PROJECT_ROOT/automation-reports"
    mkdir -p "$PROJECT_ROOT/security-reports"
    mkdir -p "$PROJECT_ROOT/quality-reports"
    mkdir -p "$PROJECT_ROOT/backups"
    mkdir -p "$PROJECT_ROOT/performance-reports"
    mkdir -p "$PROJECT_ROOT/dashboard"
    mkdir -p "$PROJECT_ROOT/pipelines"
    mkdir -p "$PROJECT_ROOT/artifacts"
    
    success "Directories created successfully"
}

# Install dependencies
install_dependencies() {
    log "Installing dependencies..."
    
    if [[ -f "$PROJECT_ROOT/package-lock.json" ]]; then
        npm ci
    else
        npm install
    fi
    
    # Install additional dependencies for enhanced features
    npm install express ws --save
    
    success "Dependencies installed successfully"
}

# Setup PM2 log rotation
setup_log_rotation() {
    log "Setting up PM2 log rotation..."
    
    pm2 install pm2-logrotate || true
    pm2 set pm2-logrotate:max_size 10M
    pm2 set pm2-logrotate:retain 30
    pm2 set pm2-logrotate:compress true
    pm2 set pm2-logrotate:workerInterval 60
    pm2 set pm2-logrotate:rotateInterval '0 0 * * *'
    
    success "PM2 log rotation configured"
}

# Stop existing PM2 processes
stop_existing_processes() {
    log "Stopping existing PM2 processes..."
    
    pm2 stop all 2>/dev/null || true
    pm2 delete all 2>/dev/null || true
    
    success "Existing processes stopped"
}

# Start enhanced PM2 ecosystem
start_enhanced_ecosystem() {
    log "Starting enhanced PM2 ecosystem..."
    
    # Start the enhanced ecosystem
    pm2 start "$ENHANCED_ECOSYSTEM" --update-env
    
    # Wait a moment for processes to start
    sleep 10
    
    # Check status
    pm2 status
    
    success "Enhanced PM2 ecosystem started"
}

# Setup monitoring
setup_monitoring() {
    log "Setting up monitoring..."
    
    # Save PM2 configuration
    pm2 save
    
    # Setup PM2 startup script
    pm2 startup || true
    
    success "Monitoring setup completed"
}

# Display system information
display_system_info() {
    log "System Information:"
    
    echo -e "${CYAN}Project Root:${NC} $PROJECT_ROOT"
    echo -e "${CYAN}Ecosystem Config:${NC} $ENHANCED_ECOSYSTEM"
    echo -e "${CYAN}Logs Directory:${NC} $LOGS_DIR"
    echo -e "${CYAN}Node Version:${NC} $(node --version)"
    echo -e "${CYAN}NPM Version:${NC} $(npm --version)"
    echo -e "${CYAN}PM2 Version:${NC} $(pm2 --version)"
    echo -e "${CYAN}System:${NC} $(uname -a)"
}

# Display running processes
display_processes() {
    log "Running Processes:"
    
    pm2 status
    
    echo -e "\n${CYAN}Process Details:${NC}"
    pm2 list
}

# Display useful commands
display_commands() {
    log "Useful Commands:"
    
    echo -e "${CYAN}View logs:${NC} pm2 logs"
    echo -e "${CYAN}Restart all:${NC} pm2 restart all"
    echo -e "${CYAN}Stop all:${NC} pm2 stop all"
    echo -e "${CYAN}Delete all:${NC} pm2 delete all"
    echo -e "${CYAN}Monitor:${NC} pm2 monit"
    echo -e "${CYAN}Save config:${NC} pm2 save"
    echo -e "${CYAN}Reload config:${NC} pm2 reload all"
    echo -e "${CYAN}Dashboard:${NC} http://localhost:3001"
    echo -e "${CYAN}WebSocket:${NC} ws://localhost:8080"
}

# Health check
health_check() {
    log "Performing health check..."
    
    # Check if all processes are online
    local offline_processes=$(pm2 jlist | jq -r '.[] | select(.pm2_env.status != "online") | .name' 2>/dev/null || echo "")
    
    if [[ -n "$offline_processes" ]]; then
        warning "Some processes are offline: $offline_processes"
        return 1
    else
        success "All processes are online"
        return 0
    fi
}

# Display enhanced features
display_enhanced_features() {
    log "Enhanced Features:"
    
    echo -e "${CYAN}🤖 AI Health Monitor:${NC} Real-time system monitoring with AI analysis"
    echo -e "${CYAN}🔀 Git Automation:${NC} Intelligent merge and conflict resolution"
    echo -e "${CYAN}🚀 Deployment Automation:${NC} Automated deployment with rollback"
    echo -e "${CYAN}📊 Performance Optimizer:${NC} Automatic performance optimization"
    echo -e "${CYAN}🔒 Security Automation:${NC} Automated security scanning and patching"
    echo -e "${CYAN}🧪 Code Quality Monitor:${NC} Continuous code quality monitoring"
    echo -e "${CYAN}💾 Resource Monitor:${NC} Intelligent resource usage monitoring"
    echo -e "${CYAN}🔄 Error Recovery:${NC} Automatic error detection and recovery"
    echo -e "${CYAN}💾 Backup Automation:${NC} Automated backup and disaster recovery"
    echo -e "${CYAN}📊 Monitoring Dashboard:${NC} Real-time monitoring dashboard"
    echo -e "${CYAN}🔄 CI/CD Pipeline:${NC} Intelligent continuous integration/deployment"
}

# Main execution
main() {
    echo -e "${PURPLE}🚀 Starting Enhanced Intelligent PM2 System${NC}"
    echo -e "${PURPLE}============================================${NC}"
    
    # Pre-flight checks
    check_pm2
    check_project_directory
    
    # Setup
    create_directories
    install_dependencies
    setup_log_rotation
    
    # Stop existing processes
    stop_existing_processes
    
    # Start enhanced ecosystem
    start_enhanced_ecosystem
    
    # Setup monitoring
    setup_monitoring
    
    # Display information
    echo -e "\n${PURPLE}📊 System Status${NC}"
    echo -e "${PURPLE}================${NC}"
    
    display_system_info
    echo ""
    display_processes
    echo ""
    display_commands
    echo ""
    display_enhanced_features
    
    # Health check
    echo -e "\n${PURPLE}🏥 Health Check${NC}"
    echo -e "${PURPLE}================${NC}"
    
    if health_check; then
        success "Enhanced Intelligent PM2 System started successfully!"
        echo -e "\n${GREEN}🎉 Your enhanced intelligent automation system is now running!${NC}"
        echo -e "${GREEN}   All processes are monitored and will auto-recover from failures.${NC}"
        echo -e "${GREEN}   Check the logs directory for detailed monitoring information.${NC}"
        echo -e "${GREEN}   Access the monitoring dashboard at http://localhost:3001${NC}"
    else
        warning "Some processes may not be running correctly. Check the logs for details."
    fi
    
    echo -e "\n${CYAN}📝 Next Steps:${NC}"
    echo -e "${CYAN}1. Monitor the system: pm2 monit${NC}"
    echo -e "${CYAN}2. Check logs: pm2 logs${NC}"
    echo -e "${CYAN}3. View monitoring dashboard: http://localhost:3001${NC}"
    echo -e "${CYAN}4. View automation reports in the logs/ directory${NC}"
    echo -e "${CYAN}5. Configure additional settings in ecosystem.enhanced-intelligent.cjs${NC}"
}

# Handle script arguments
case "${1:-}" in
    "stop")
        log "Stopping enhanced intelligent PM2 system..."
        pm2 stop all
        pm2 delete all
        success "Enhanced intelligent PM2 system stopped"
        ;;
    "restart")
        log "Restarting enhanced intelligent PM2 system..."
        pm2 restart all
        success "Enhanced intelligent PM2 system restarted"
        ;;
    "status")
        log "Enhanced intelligent PM2 system status:"
        pm2 status
        ;;
    "logs")
        pm2 logs --lines 100
        ;;
    "monitor")
        pm2 monit
        ;;
    "health")
        health_check
        ;;
    "dashboard")
        log "Opening monitoring dashboard..."
        if command -v open &> /dev/null; then
            open http://localhost:3001
        elif command -v xdg-open &> /dev/null; then
            xdg-open http://localhost:3001
        else
            echo "Please open http://localhost:3001 in your browser"
        fi
        ;;
    *)
        main
        ;;
esac
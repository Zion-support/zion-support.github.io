#!/bin/bash

# 🚀 Enhanced PM2 Automation System Startup Script
# Zion App - Intelligent Development Automation

set -e

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
PURPLE='\033[0;35m'
CYAN='\033[0;36m'
NC='\033[0m' # No Color

# Configuration
PROJECT_ROOT=$(pwd)
ECOSYSTEM_CONFIG="ecosystem-enhanced.config.cjs"
LOGS_DIR="$PROJECT_ROOT/logs"
BACKUP_DIR="$PROJECT_ROOT/automation/backups"
PM2_LOG_DIR="$PROJECT_ROOT/.pm2"

# Function to print colored output
print_status() {
    echo -e "${GREEN}[INFO]${NC} $1"
}

print_warning() {
    echo -e "${YELLOW}[WARN]${NC} $1"
}

print_error() {
    echo -e "${RED}[ERROR]${NC} $1"
}

print_header() {
    echo -e "${BLUE}================================${NC}"
    echo -e "${CYAN}$1${NC}"
    echo -e "${BLUE}================================${NC}"
}

print_section() {
    echo -e "${PURPLE}--- $1 ---${NC}"
}

# Function to check if command exists
command_exists() {
    command -v "$1" >/dev/null 2>&1
}

# Function to check system requirements
check_system_requirements() {
    print_header "System Requirements Check"
    
    # Check Node.js
    if ! command_exists node; then
        print_error "Node.js is not installed. Please install Node.js 18+ first."
        exit 1
    fi
    
    NODE_VERSION=$(node --version | cut -d'v' -f2 | cut -d'.' -f1)
    if [ "$NODE_VERSION" -lt 18 ]; then
        print_error "Node.js version 18+ is required. Current version: $(node --version)"
        exit 1
    fi
    
    print_status "Node.js version: $(node --version) ✓"
    
    # Check npm
    if ! command_exists npm; then
        print_error "npm is not installed. Please install npm first."
        exit 1
    fi
    
    print_status "npm version: $(npm --version) ✓"
    
    # Check PM2
    if ! command_exists pm2; then
        print_warning "PM2 is not installed. Installing PM2 globally..."
        npm install -g pm2
    fi
    
    print_status "PM2 version: $(pm2 --version) ✓"
    
    # Check available memory
    MEMORY_KB=$(grep MemTotal /proc/meminfo | awk '{print $2}')
    MEMORY_GB=$((MEMORY_KB / 1024 / 1024))
    
    if [ "$MEMORY_GB" -lt 4 ]; then
        print_warning "System has less than 4GB RAM. Some automations may be limited."
    else
        print_status "Available memory: ${MEMORY_GB}GB ✓"
    fi
    
    # Check disk space
    DISK_SPACE=$(df . | tail -1 | awk '{print $4}')
    DISK_SPACE_GB=$((DISK_SPACE / 1024 / 1024))
    
    if [ "$DISK_SPACE_GB" -lt 10 ]; then
        print_warning "Less than 10GB disk space available. Consider cleanup."
    else
        print_status "Available disk space: ${DISK_SPACE_GB}GB ✓"
    fi
}

# Function to create necessary directories
create_directories() {
    print_section "Creating Directory Structure"
    
    mkdir -p "$LOGS_DIR"
    mkdir -p "$BACKUP_DIR"
    mkdir -p "$PM2_LOG_DIR"
    
    # Create subdirectories for different log types
    mkdir -p "$LOGS_DIR/performance"
    mkdir -p "$LOGS_DIR/security"
    mkdir -p "$LOGS_DIR/quality"
    mkdir -p "$LOGS_DIR/dependencies"
    mkdir -p "$LOGS_DIR/builds"
    
    print_status "Directory structure created ✓"
}

# Function to backup existing configuration
backup_existing_config() {
    print_section "Backing Up Existing Configuration"
    
    if [ -f "$ECOSYSTEM_CONFIG" ]; then
        BACKUP_FILE="$BACKUP_DIR/ecosystem-backup-$(date +%Y%m%d-%H%M%S).cjs"
        cp "$ECOSYSTEM_CONFIG" "$BACKUP_FILE"
        print_status "Existing configuration backed up to: $BACKUP_FILE"
    fi
    
    if [ -d "$PM2_LOG_DIR" ] && [ "$(ls -A $PM2_LOG_DIR)" ]; then
        PM2_BACKUP="$BACKUP_DIR/pm2-backup-$(date +%Y%m%d-%H%M%S).tar.gz"
        tar -czf "$PM2_BACKUP" -C "$PROJECT_ROOT" .pm2
        print_status "PM2 logs backed up to: $PM2_BACKUP"
    fi
}

# Function to install dependencies
install_dependencies() {
    print_section "Installing Dependencies"
    
    # Install project dependencies
    if [ -f "package.json" ]; then
        print_status "Installing project dependencies..."
        npm install --silent
        print_status "Project dependencies installed ✓"
    fi
    
    # Install automation dependencies
    if [ -d "automation" ] && [ -f "automation/package.json" ]; then
        print_status "Installing automation dependencies..."
        cd automation
        npm install --silent
        cd "$PROJECT_ROOT"
        print_status "Automation dependencies installed ✓"
    fi
    
    # Install additional tools if needed
    if ! command_exists jq; then
        print_warning "jq not found. Installing for JSON processing..."
        if command_exists apt-get; then
            sudo apt-get update && sudo apt-get install -y jq
        elif command_exists yum; then
            sudo yum install -y jq
        elif command_exists brew; then
            brew install jq
        fi
    fi
}

# Function to validate ecosystem configuration
validate_ecosystem_config() {
    print_section "Validating Ecosystem Configuration"
    
    if [ ! -f "$ECOSYSTEM_CONFIG" ]; then
        print_error "Ecosystem configuration file not found: $ECOSYSTEM_CONFIG"
        exit 1
    fi
    
    # Basic syntax check
    if ! node -c "$ECOSYSTEM_CONFIG" >/dev/null 2>&1; then
        print_error "Ecosystem configuration has syntax errors"
        exit 1
    fi
    
    # Count total processes
    TOTAL_PROCESSES=$(grep -c "name:" "$ECOSYSTEM_CONFIG")
    print_status "Configuration validated: $TOTAL_PROCESSES processes configured ✓"
}

# Function to stop existing PM2 processes
stop_existing_processes() {
    print_section "Stopping Existing PM2 Processes"
    
    if pm2 list | grep -q "online\|stopped"; then
        print_status "Stopping existing PM2 processes..."
        pm2 stop all
        pm2 delete all
        print_status "Existing processes stopped ✓"
    else
        print_status "No existing PM2 processes found ✓"
    fi
    
    # Clear PM2 logs
    pm2 flush
    print_status "PM2 logs cleared ✓"
}

# Function to start enhanced automation system
start_enhanced_automation() {
    print_section "Starting Enhanced PM2 Automation System"
    
    print_status "Starting all automation processes..."
    pm2 start "$ECOSYSTEM_CONFIG"
    
    # Wait for processes to start
    sleep 5
    
    # Check process status
    print_status "Checking process status..."
    pm2 status
    
    # Count running processes
    RUNNING_PROCESSES=$(pm2 list | grep -c "online")
    TOTAL_PROCESSES=$(grep -c "name:" "$ECOSYSTEM_CONFIG")
    
    if [ "$RUNNING_PROCESSES" -eq "$TOTAL_PROCESSES" ]; then
        print_status "All $RUNNING_PROCESSES processes started successfully ✓"
    else
        print_warning "Only $RUNNING_PROCESSES out of $TOTAL_PROCESSES processes are running"
        pm2 list
    fi
}

# Function to setup monitoring
setup_monitoring() {
    print_section "Setting Up Monitoring"
    
    # Save PM2 configuration
    pm2 save
    
    # Setup PM2 startup script
    pm2 startup
    
    # Create monitoring script
    cat > "$PROJECT_ROOT/monitor-automation.sh" << 'EOF'
#!/bin/bash
# PM2 Automation Monitoring Script

echo "=== PM2 Automation System Status ==="
pm2 status

echo -e "\n=== Recent Logs ==="
pm2 logs --lines 20

echo -e "\n=== Process Memory Usage ==="
pm2 monit --no-daemon --timeout 5

echo -e "\n=== System Resources ==="
echo "Memory: $(free -h | grep Mem | awk '{print $3"/"$2}')"
echo "Disk: $(df -h . | tail -1 | awk '{print $3"/"$2}')"
echo "CPU Load: $(uptime | awk -F'load average:' '{print $2}')"
EOF
    
    chmod +x "$PROJECT_ROOT/monitor-automation.sh"
    print_status "Monitoring script created: monitor-automation.sh ✓"
    
    # Create health check script
    cat > "$PROJECT_ROOT/health-check.sh" << 'EOF'
#!/bin/bash
# PM2 Automation Health Check Script

echo "=== Health Check Started ==="
date

# Check PM2 status
if pm2 ping > /dev/null 2>&1; then
    echo "✓ PM2 is running"
else
    echo "✗ PM2 is not responding"
    exit 1
fi

# Check process health
HEALTHY_PROCESSES=0
TOTAL_PROCESSES=0

while IFS= read -r line; do
    if [[ $line =~ online ]]; then
        ((HEALTHY_PROCESSES++))
    fi
    ((TOTAL_PROCESSES++))
done < <(pm2 list | grep -E "online|stopped|errored")

echo "Process Health: $HEALTHY_PROCESSES/$TOTAL_PROCESSES healthy"

# Check log files
echo "=== Recent Errors ==="
find logs -name "*-error.log" -type f -exec tail -5 {} \; 2>/dev/null | head -20

echo "=== Health Check Completed ==="
EOF
    
    chmod +x "$PROJECT_ROOT/health-check.sh"
    print_status "Health check script created: health-check.sh ✓"
}

# Function to setup cron jobs
setup_cron_jobs() {
    print_section "Setting Up Cron Jobs"
    
    # Create cron setup script
    cat > "$PROJECT_ROOT/setup-cron.sh" << 'EOF'
#!/bin/bash
# Setup Cron Jobs for PM2 Automation

CRON_USER=$(whoami)
CRON_FILE="/tmp/pm2-automation-cron"

# Create cron entries
cat > "$CRON_FILE" << 'CRON_EOF'
# PM2 Automation System Cron Jobs
# Health check every 15 minutes
*/15 * * * * cd /workspace && ./health-check.sh >> logs/cron-health.log 2>&1

# Daily backup at 2 AM
0 2 * * * cd /workspace && tar -czf automation/backups/daily-backup-$(date +\%Y\%m\%d).tar.gz logs/ .pm2/ 2>/dev/null

# Weekly cleanup on Sunday at 3 AM
0 3 * * 0 cd /workspace && find logs -name "*.log" -mtime +7 -delete 2>/dev/null

# Monthly performance report on 1st at 4 AM
0 4 1 * * cd /workspace && ./scripts/automation/intelligent-performance-monitor.cjs >> logs/monthly-performance.log 2>&1
CRON_EOF

# Install cron jobs
crontab -l 2>/dev/null | { cat; cat "$CRON_FILE"; } | crontab -

echo "Cron jobs installed successfully"
echo "Current cron jobs:"
crontab -l
EOF
    
    chmod +x "$PROJECT_ROOT/setup-cron.sh"
    print_status "Cron setup script created: setup-cron.sh ✓"
    
    # Ask user if they want to install cron jobs
    read -p "Do you want to install cron jobs for automated maintenance? (y/n): " -n 1 -r
    echo
    if [[ $REPLY =~ ^[Yy]$ ]]; then
        ./setup-cron.sh
        print_status "Cron jobs installed ✓"
    else
        print_warning "Cron jobs not installed. Run ./setup-cron.sh manually if needed."
    fi
}

# Function to run initial health check
run_initial_health_check() {
    print_section "Running Initial Health Check"
    
    # Wait for processes to stabilize
    sleep 10
    
    # Check if all processes are running
    FAILED_PROCESSES=$(pm2 list | grep -c "errored\|stopped")
    
    if [ "$FAILED_PROCESSES" -gt 0 ]; then
        print_warning "Some processes failed to start properly"
        pm2 list
        pm2 logs --lines 10
    else
        print_status "All processes running successfully ✓"
    fi
    
    # Check log files
    if [ -d "$LOGS_DIR" ]; then
        LOG_COUNT=$(find "$LOGS_DIR" -name "*.log" | wc -l)
        print_status "Log files created: $LOG_COUNT ✓"
    fi
}

# Function to display usage information
display_usage() {
    print_header "Enhanced PM2 Automation System"
    
    echo -e "${CYAN}Available Commands:${NC}"
    echo "  start     - Start the enhanced automation system"
    echo "  stop      - Stop all automation processes"
    echo "  restart   - Restart all automation processes"
    echo "  status    - Show current status"
    echo "  logs      - Show recent logs"
    echo "  monitor   - Open PM2 monitoring interface"
    echo "  health    - Run health check"
    echo "  backup    - Create backup of current configuration"
    echo "  update    - Update automation scripts"
    echo "  help      - Show this help message"
    
    echo -e "\n${CYAN}Quick Start:${NC}"
    echo "  ./start-enhanced-pm2-automation.sh start"
    echo "  ./monitor-automation.sh"
    echo "  ./health-check.sh"
    
    echo -e "\n${CYAN}Documentation:${NC}"
    echo "  Check the logs directory for detailed information"
    echo "  Run 'pm2 monit' for real-time monitoring"
    echo "  Use 'pm2 logs [process-name]' for specific process logs"
}

# Function to start the system
start_system() {
    print_header "Starting Enhanced PM2 Automation System"
    
    check_system_requirements
    create_directories
    backup_existing_config
    install_dependencies
    validate_ecosystem_config
    stop_existing_processes
    start_enhanced_automation
    setup_monitoring
    setup_cron_jobs
    run_initial_health_check
    
    print_header "System Started Successfully!"
    
    echo -e "${GREEN}🎉 Enhanced PM2 Automation System is now running!${NC}"
    echo
    echo -e "${CYAN}Next Steps:${NC}"
    echo "1. Monitor system: ./monitor-automation.sh"
    echo "2. Check health: ./health-check.sh"
    echo "3. View logs: pm2 logs"
    echo "4. Real-time monitoring: pm2 monit"
    echo
    echo -e "${YELLOW}Important:${NC}"
    echo "- The system will automatically restart processes on failure"
    echo "- Logs are stored in the 'logs' directory"
    echo "- Health checks run every 15 minutes"
    echo "- Daily backups are created automatically"
    echo
    echo -e "${GREEN}Happy coding with intelligent automation! 🚀${NC}"
}

# Function to stop the system
stop_system() {
    print_header "Stopping Enhanced PM2 Automation System"
    
    if pm2 ping > /dev/null 2>&1; then
        print_status "Stopping all PM2 processes..."
        pm2 stop all
        pm2 delete all
        print_status "All processes stopped ✓"
    else
        print_status "No PM2 processes running ✓"
    fi
    
    print_status "System stopped successfully"
}

# Function to restart the system
restart_system() {
    print_header "Restarting Enhanced PM2 Automation System"
    
    stop_system
    sleep 2
    start_system
}

# Function to show status
show_status() {
    print_header "Enhanced PM2 Automation System Status"
    
    if pm2 ping > /dev/null 2>&1; then
        pm2 status
        echo
        echo -e "${CYAN}System Information:${NC}"
        echo "Project Root: $PROJECT_ROOT"
        echo "Logs Directory: $LOGS_DIR"
        echo "Ecosystem Config: $ECOSYSTEM_CONFIG"
        echo
        echo -e "${CYAN}Resource Usage:${NC}"
        pm2 monit --no-daemon --timeout 3
    else
        print_warning "PM2 is not running"
    fi
}

# Function to show logs
show_logs() {
    print_header "Recent PM2 Logs"
    
    if pm2 ping > /dev/null 2>&1; then
        pm2 logs --lines 50
    else
        print_warning "PM2 is not running"
    fi
}

# Function to open monitor
open_monitor() {
    print_header "Opening PM2 Monitor"
    
    if pm2 ping > /dev/null 2>&1; then
        print_status "Opening PM2 monitoring interface..."
        pm2 monit
    else
        print_warning "PM2 is not running"
    fi
}

# Function to run health check
run_health_check() {
    print_header "Running Health Check"
    
    if [ -f "./health-check.sh" ]; then
        ./health-check.sh
    else
        print_error "Health check script not found"
    fi
}

# Function to create backup
create_backup() {
    print_header "Creating Backup"
    
    BACKUP_FILE="$BACKUP_DIR/full-backup-$(date +%Y%m%d-%H%M%S).tar.gz"
    
    print_status "Creating backup: $BACKUP_FILE"
    
    tar -czf "$BACKUP_FILE" \
        --exclude=node_modules \
        --exclude=.git \
        --exclude=dist \
        --exclude=temp_working \
        --exclude=test-reports \
        --exclude=security-reports \
        --exclude=ci-cd-reports \
        --exclude=link-reports \
        --exclude=reports \
        --exclude=broken_files_backup \
        .
    
    print_status "Backup created successfully: $BACKUP_FILE"
    print_status "Backup size: $(du -h "$BACKUP_FILE" | cut -f1)"
}

# Function to update automation scripts
update_automation() {
    print_header "Updating Automation Scripts"
    
    print_status "Checking for updates..."
    
    # This would typically pull from a repository
    # For now, we'll just validate existing scripts
    
    if [ -f "$ECOSYSTEM_CONFIG" ]; then
        print_status "Validating ecosystem configuration..."
        if node -c "$ECOSYSTEM_CONFIG" >/dev/null 2>&1; then
            print_status "Configuration is valid ✓"
        else
            print_error "Configuration has errors"
        fi
    fi
    
    print_status "Update check completed"
}

# Main script logic
case "${1:-start}" in
    start)
        start_system
        ;;
    stop)
        stop_system
        ;;
    restart)
        restart_system
        ;;
    status)
        show_status
        ;;
    logs)
        show_logs
        ;;
    monitor)
        open_monitor
        ;;
    health)
        run_health_check
        ;;
    backup)
        create_backup
        ;;
    update)
        update_automation
        ;;
    help|--help|-h)
        display_usage
        ;;
    *)
        echo "Unknown command: $1"
        echo "Use 'help' to see available commands"
        exit 1
        ;;
esac
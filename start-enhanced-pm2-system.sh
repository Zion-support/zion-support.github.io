#!/bin/bash

# Enhanced PM2 System Startup Script
# Intelligent PM2 automation system with advanced features

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
PROJECT_ROOT="/workspace"
ECOSYSTEM_FILE="ecosystem.enhanced-intelligent-v3.cjs"
LOG_DIR="$PROJECT_ROOT/logs"
BACKUP_DIR="$PROJECT_ROOT/backups"

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
    echo -e "${BLUE}================================${NC}"
    echo -e "${BLUE}$1${NC}"
    echo -e "${BLUE}================================${NC}"
}

# Function to check if PM2 is installed
check_pm2() {
    if ! command -v pm2 &> /dev/null; then
        print_error "PM2 is not installed. Please install PM2 first:"
        echo "npm install -g pm2"
        exit 1
    fi
    print_status "PM2 is installed and available"
}

# Function to check if Node.js is installed
check_node() {
    if ! command -v node &> /dev/null; then
        print_error "Node.js is not installed. Please install Node.js first"
        exit 1
    fi
    print_status "Node.js is installed: $(node --version)"
}

# Function to create necessary directories
create_directories() {
    print_status "Creating necessary directories..."
    
    mkdir -p "$LOG_DIR"
    mkdir -p "$BACKUP_DIR"
    mkdir -p "$PROJECT_ROOT/logs/pm2"
    mkdir -p "$PROJECT_ROOT/logs/automation"
    mkdir -p "$PROJECT_ROOT/logs/reports"
    
    print_status "Directories created successfully"
}

# Function to backup existing PM2 processes
backup_existing_processes() {
    print_status "Backing up existing PM2 processes..."
    
    if pm2 list | grep -q "online\|stopped"; then
        BACKUP_FILE="$BACKUP_DIR/pm2-backup-$(date +%Y%m%d-%H%M%S).json"
        pm2 save --force
        cp ~/.pm2/dump.heapdump "$BACKUP_FILE" 2>/dev/null || true
        print_status "PM2 processes backed up to $BACKUP_FILE"
    else
        print_status "No existing PM2 processes to backup"
    fi
}

# Function to stop existing PM2 processes
stop_existing_processes() {
    print_status "Stopping existing PM2 processes..."
    
    if pm2 list | grep -q "online\|stopped"; then
        pm2 kill
        print_status "All PM2 processes stopped"
    else
        print_status "No existing PM2 processes to stop"
    fi
}

# Function to install dependencies
install_dependencies() {
    print_status "Installing project dependencies..."
    
    cd "$PROJECT_ROOT"
    
    if [ -f "package.json" ]; then
        npm install
        print_status "Dependencies installed successfully"
    else
        print_warning "No package.json found, skipping dependency installation"
    fi
}

# Function to validate ecosystem file
validate_ecosystem() {
    print_status "Validating ecosystem configuration..."
    
    if [ ! -f "$PROJECT_ROOT/$ECOSYSTEM_FILE" ]; then
        print_error "Ecosystem file $ECOSYSTEM_FILE not found"
        exit 1
    fi
    
    # Basic syntax check
    if ! node -c "$PROJECT_ROOT/$ECOSYSTEM_FILE"; then
        print_error "Ecosystem file has syntax errors"
        exit 1
    fi
    
    print_status "Ecosystem configuration is valid"
}

# Function to start PM2 processes
start_pm2_processes() {
    print_status "Starting PM2 processes with enhanced configuration..."
    
    cd "$PROJECT_ROOT"
    
    # Start with the enhanced ecosystem
    pm2 start "$ECOSYSTEM_FILE" --env production
    
    print_status "PM2 processes started successfully"
}

# Function to display process status
show_status() {
    print_header "PM2 Process Status"
    pm2 list
    
    print_header "System Resources"
    echo "Memory Usage:"
    free -h
    echo ""
    echo "Disk Usage:"
    df -h /
    echo ""
    echo "CPU Info:"
    top -bn1 | grep "Cpu(s)"
}

# Function to setup monitoring
setup_monitoring() {
    print_status "Setting up monitoring and logging..."
    
    # Create log rotation script
    cat > "$PROJECT_ROOT/rotate-logs.sh" << 'EOF'
#!/bin/bash
# Log rotation script for PM2 processes

LOG_DIR="/workspace/logs"
MAX_SIZE="100M"
MAX_FILES=5

find "$LOG_DIR" -name "*.log" -size +$MAX_SIZE -exec gzip {} \;
find "$LOG_DIR" -name "*.log.gz" -mtime +7 -delete
find "$LOG_DIR" -name "*.log" -mtime +30 -delete
EOF
    
    chmod +x "$PROJECT_ROOT/rotate-logs.sh"
    
    # Setup cron job for log rotation (daily at 2 AM)
    (crontab -l 2>/dev/null; echo "0 2 * * * $PROJECT_ROOT/rotate-logs.sh") | crontab -
    
    print_status "Monitoring and log rotation configured"
}

# Function to create health check script
create_health_check() {
    print_status "Creating health check script..."
    
    cat > "$PROJECT_ROOT/health-check.sh" << 'EOF'
#!/bin/bash
# Health check script for PM2 processes

LOG_FILE="/workspace/logs/health-check.log"
TIMESTAMP=$(date '+%Y-%m-%d %H:%M:%S')

echo "[$TIMESTAMP] Starting health check..." >> "$LOG_FILE"

# Check PM2 status
if ! pm2 list | grep -q "online"; then
    echo "[$TIMESTAMP] ERROR: No PM2 processes are online" >> "$LOG_FILE"
    exit 1
fi

# Check system resources
MEMORY_USAGE=$(free | grep Mem | awk '{printf "%.2f", $3/$2 * 100.0}')
if (( $(echo "$MEMORY_USAGE > 90" | bc -l) )); then
    echo "[$TIMESTAMP] WARNING: High memory usage: ${MEMORY_USAGE}%" >> "$LOG_FILE"
fi

# Check disk space
DISK_USAGE=$(df / | tail -1 | awk '{print $5}' | sed 's/%//')
if [ "$DISK_USAGE" -gt 90 ]; then
    echo "[$TIMESTAMP] WARNING: High disk usage: ${DISK_USAGE}%" >> "$LOG_FILE"
fi

echo "[$TIMESTAMP] Health check completed successfully" >> "$LOG_FILE"
EOF
    
    chmod +x "$PROJECT_ROOT/health-check.sh"
    
    # Setup cron job for health checks (every 5 minutes)
    (crontab -l 2>/dev/null; echo "*/5 * * * * $PROJECT_ROOT/health-check.sh") | crontab -
    
    print_status "Health check script created and scheduled"
}

# Function to create maintenance script
create_maintenance_script() {
    print_status "Creating maintenance script..."
    
    cat > "$PROJECT_ROOT/maintenance.sh" << 'EOF'
#!/bin/bash
# Maintenance script for PM2 processes

LOG_FILE="/workspace/logs/maintenance.log"
TIMESTAMP=$(date '+%Y-%m-%d %H:%M:%S')

echo "[$TIMESTAMP] Starting maintenance..." >> "$LOG_FILE"

# Restart processes that have been running for more than 24 hours
pm2 list | grep "online" | while read line; do
    PROCESS_NAME=$(echo $line | awk '{print $2}')
    UPTIME=$(echo $line | awk '{print $8}')
    
    if [[ "$UPTIME" =~ ^[0-9]+h$ ]]; then
        HOURS=$(echo $UPTIME | sed 's/h//')
        if [ "$HOURS" -gt 24 ]; then
            echo "[$TIMESTAMP] Restarting $PROCESS_NAME (uptime: $UPTIME)" >> "$LOG_FILE"
            pm2 restart "$PROCESS_NAME"
        fi
    fi
done

# Clean up old logs
find /workspace/logs -name "*.log" -mtime +7 -exec gzip {} \;
find /workspace/logs -name "*.log.gz" -mtime +30 -delete

# Save PM2 configuration
pm2 save

echo "[$TIMESTAMP] Maintenance completed" >> "$LOG_FILE"
EOF
    
    chmod +x "$PROJECT_ROOT/maintenance.sh"
    
    # Setup cron job for maintenance (daily at 3 AM)
    (crontab -l 2>/dev/null; echo "0 3 * * * $PROJECT_ROOT/maintenance.sh") | crontab -
    
    print_status "Maintenance script created and scheduled"
}

# Function to display dashboard information
show_dashboard_info() {
    print_header "Dashboard Information"
    
    echo -e "${CYAN}Health Dashboard:${NC} http://localhost:3001"
    echo -e "${CYAN}PM2 Web Interface:${NC} pm2 web"
    echo -e "${CYAN}Log Directory:${NC} $LOG_DIR"
    echo -e "${CYAN}Ecosystem File:${NC} $ECOSYSTEM_FILE"
    echo ""
    echo -e "${YELLOW}Useful Commands:${NC}"
    echo "  pm2 list                    - Show all processes"
    echo "  pm2 logs                    - Show logs for all processes"
    echo "  pm2 logs <process-name>     - Show logs for specific process"
    echo "  pm2 restart <process-name>  - Restart specific process"
    echo "  pm2 stop <process-name>     - Stop specific process"
    echo "  pm2 delete <process-name>   - Delete specific process"
    echo "  pm2 monit                   - Show real-time monitoring"
    echo "  pm2 web                     - Start web interface"
    echo ""
    echo -e "${YELLOW}Maintenance Commands:${NC}"
    echo "  $PROJECT_ROOT/health-check.sh    - Run health check"
    echo "  $PROJECT_ROOT/maintenance.sh     - Run maintenance"
    echo "  $PROJECT_ROOT/rotate-logs.sh     - Rotate logs"
}

# Function to create quick start script
create_quick_start() {
    print_status "Creating quick start script..."
    
    cat > "$PROJECT_ROOT/quick-start.sh" << 'EOF'
#!/bin/bash
# Quick start script for PM2 processes

echo "🚀 Starting PM2 processes..."

# Start all processes
pm2 start ecosystem.enhanced-intelligent-v3.cjs --env production

# Show status
pm2 list

echo "✅ PM2 processes started successfully!"
echo "🌐 Health Dashboard: http://localhost:3001"
echo "📊 PM2 Web Interface: pm2 web"
EOF
    
    chmod +x "$PROJECT_ROOT/quick-start.sh"
    
    print_status "Quick start script created: ./quick-start.sh"
}

# Main execution
main() {
    print_header "Enhanced PM2 System Startup"
    
    # Pre-flight checks
    check_node
    check_pm2
    
    # Setup
    create_directories
    backup_existing_processes
    stop_existing_processes
    install_dependencies
    validate_ecosystem
    
    # Start processes
    start_pm2_processes
    
    # Setup monitoring and maintenance
    setup_monitoring
    create_health_check
    create_maintenance_script
    create_quick_start
    
    # Display information
    show_status
    show_dashboard_info
    
    print_header "Enhanced PM2 System Started Successfully!"
    print_status "The system is now running with intelligent automation features"
    print_status "Check the health dashboard at http://localhost:3001"
}

# Run main function
main "$@"
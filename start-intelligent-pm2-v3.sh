#!/bin/bash

# Zion Tech Group - Intelligent PM2 System v3.0 Startup Script
# Advanced process management with AI-powered optimization

set -e

echo "🚀 Starting Zion Tech Group Intelligent PM2 System v3.0..."

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
PURPLE='\033[0;35m'
CYAN='\033[0;36m'
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

print_success() {
    echo -e "${GREEN}[SUCCESS]${NC} $1"
}

print_header() {
    echo -e "${BLUE}====${NC}"
    echo -e "${BLUE}$1${NC}"
    echo -e "${BLUE}====${NC}"
}

# Check if PM2 is installed
check_pm2() {
    print_status "Checking PM2 installation..."
    if ! command -v pm2 &> /dev/null; then
        print_error "PM2 is not installed. Please install PM2 first:"
        echo "npm install -g pm2"
        exit 1
    fi
    print_success "PM2 is installed"
}

# Check if Node.js is installed
check_node() {
    print_status "Checking Node.js installation..."
    if ! command -v node &> /dev/null; then
        print_error "Node.js is not installed. Please install Node.js first."
        exit 1
    fi
    print_success "Node.js is installed"
}

# Create necessary directories
create_directories() {
    print_status "Creating necessary directories..."
    mkdir -p logs
    mkdir -p ai-reports
    mkdir -p monitoring-reports
    mkdir -p scaling-reports
    mkdir -p error-recovery-reports
    mkdir -p scripts/intelligent
    print_success "Directories created"
}

# Install dependencies
install_dependencies() {
    print_status "Installing dependencies..."
    if [ -f "package.json" ]; then
        npm install
        print_success "Dependencies installed"
    else
        print_warning "No package.json found, skipping dependency installation"
    fi
}

# Stop existing PM2 processes
stop_existing_processes() {
    print_status "Stopping existing PM2 processes..."
    pm2 stop all 2>/dev/null || true
    pm2 delete all 2>/dev/null || true
    print_success "Existing processes stopped"
}

# Start the intelligent PM2 ecosystem
start_ecosystem() {
    print_header "Starting Intelligent PM2 Ecosystem v3.0"
    
    print_status "Starting main application processes..."
    pm2 start ecosystem.intelligent-v3.cjs --env production
    
    print_status "Waiting for processes to initialize..."
    sleep 10
    
    print_status "Checking process status..."
    pm2 status
    
    print_success "Intelligent PM2 Ecosystem started successfully!"
}

# Display system information
display_system_info() {
    print_header "System Information"
    
    echo -e "${CYAN}PM2 Version:${NC} $(pm2 --version)"
    echo -e "${CYAN}Node.js Version:${NC} $(node --version)"
    echo -e "${CYAN}NPM Version:${NC} $(npm --version)"
    echo -e "${CYAN}System:${NC} $(uname -a)"
    echo -e "${CYAN}Memory:${NC} $(free -h | grep Mem | awk '{print $2}')"
    echo -e "${CYAN}Disk:${NC} $(df -h / | tail -1 | awk '{print $2}')"
}

# Display process information
display_process_info() {
    print_header "Process Information"
    
    echo -e "${CYAN}Active Processes:${NC}"
    pm2 list
    
    echo -e "\n${CYAN}Process Logs:${NC}"
    echo "To view logs, use: pm2 logs"
    echo "To view specific process logs: pm2 logs <process-name>"
    echo "To monitor in real-time: pm2 monit"
}

# Display management commands
display_management_commands() {
    print_header "Management Commands"
    
    echo -e "${CYAN}Process Management:${NC}"
    echo "  pm2 status                    - Show process status"
    echo "  pm2 logs                      - Show all logs"
    echo "  pm2 logs <name>               - Show specific process logs"
    echo "  pm2 restart <name>            - Restart specific process"
    echo "  pm2 stop <name>               - Stop specific process"
    echo "  pm2 delete <name>             - Delete specific process"
    echo "  pm2 reload <name>             - Reload specific process"
    echo "  pm2 monit                     - Monitor processes in real-time"
    
    echo -e "\n${CYAN}System Management:${NC}"
    echo "  pm2 save                      - Save current process list"
    echo "  pm2 resurrect                 - Restore saved process list"
    echo "  pm2 startup                   - Generate startup script"
    echo "  pm2 unstartup                 - Remove startup script"
    
    echo -e "\n${CYAN}Intelligent Features:${NC}"
    echo "  pm2 logs ai-process-manager   - View AI process management logs"
    echo "  pm2 logs intelligent-monitor  - View intelligent monitoring logs"
    echo "  pm2 logs smart-auto-scaler    - View auto-scaling logs"
    echo "  pm2 logs error-recovery-system - View error recovery logs"
}

# Setup monitoring
setup_monitoring() {
    print_status "Setting up monitoring..."
    
    # Create monitoring script
    cat > monitor-intelligent-pm2.sh << 'EOF'
#!/bin/bash
echo "📊 Intelligent PM2 System Monitor"
echo "====="
echo "Process Status:"
pm2 status
echo ""
echo "System Resources:"
echo "Memory Usage:"
free -h
echo ""
echo "Disk Usage:"
df -h /
echo ""
echo "CPU Load:"
uptime
echo ""
echo "Recent Logs:"
pm2 logs --lines 10
EOF
    
    chmod +x monitor-intelligent-pm2.sh
    print_success "Monitoring script created: monitor-intelligent-pm2.sh"
}

# Main execution
main() {
    print_header "Zion Tech Group - Intelligent PM2 System v3.0"
    
    # Pre-flight checks
    check_node
    check_pm2
    create_directories
    install_dependencies
    
    # Stop existing processes
    stop_existing_processes
    
    # Start the ecosystem
    start_ecosystem
    
    # Display information
    display_system_info
    display_process_info
    display_management_commands
    
    # Setup monitoring
    setup_monitoring
    
    print_header "Intelligent PM2 System v3.0 Started Successfully!"
    
    echo -e "${GREEN}🎉 Your intelligent PM2 system is now running!${NC}"
    echo -e "${CYAN}Key Features:${NC}"
    echo "  • AI-powered process management"
    echo "  • Intelligent monitoring and alerting"
    echo "  • Smart auto-scaling"
    echo "  • Automated error recovery"
    echo "  • Performance optimization"
    echo "  • Security scanning"
    echo "  • Resource management"
    
    echo -e "\n${YELLOW}Next Steps:${NC}"
    echo "  1. Monitor processes: pm2 monit"
    echo "  2. Check logs: pm2 logs"
    echo "  3. View reports in the reports directories"
    echo "  4. Use the monitoring script: ./monitor-intelligent-pm2.sh"
    
    echo -e "\n${PURPLE}For support, check the logs and reports directories for detailed information.${NC}"
}

# Handle script interruption
trap 'print_warning "Script interrupted. Stopping processes..."; pm2 stop all; exit 1' INT TERM

# Run main function
main "$@"
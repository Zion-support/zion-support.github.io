#!/bin/bash

# Intelligent PM2 v4 Startup Script
# Advanced PM2 automation system with AI capabilities

set -e

echo "🚀 Starting Intelligent PM2 v4 System..."

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
    echo -e "${YELLOW}[WARN]${NC} $1"
}

print_error() {
    echo -e "${RED}[ERROR]${NC} $1"
}

print_success() {
    echo -e "${GREEN}[SUCCESS]${NC} $1"
}

print_header() {
    echo -e "${PURPLE}====${NC}"
    echo -e "${PURPLE}$1${NC}"
    echo -e "${PURPLE}====${NC}"
}

# Check if PM2 is installed
check_pm2() {
    print_status "Checking PM2 installation..."
    if ! command -v pm2 &> /dev/null; then
        print_error "PM2 is not installed. Installing PM2..."
        npm install -g pm2
        print_success "PM2 installed successfully"
    else
        print_success "PM2 is already installed"
    fi
}

# Check Node.js version
check_node() {
    print_status "Checking Node.js version..."
    NODE_VERSION=$(node --version)
    print_success "Node.js version: $NODE_VERSION"
    
    # Check if version is >= 16
    NODE_MAJOR=$(echo $NODE_VERSION | cut -d'.' -f1 | sed 's/v//')
    if [ "$NODE_MAJOR" -lt 16 ]; then
        print_warning "Node.js version $NODE_VERSION is older than recommended (16+)"
    fi
}

# Create necessary directories
create_directories() {
    print_status "Creating necessary directories..."
    
    mkdir -p logs
    mkdir -p logs/pm2
    mkdir -p automation-reports
    mkdir -p monitoring
    mkdir -p backups
    
    print_success "Directories created successfully"
}

# Install dependencies
install_dependencies() {
    print_status "Installing project dependencies..."
    
    if [ -f "package.json" ]; then
        npm install
        print_success "Dependencies installed successfully"
    else
        print_warning "No package.json found, skipping dependency installation"
    fi
}

# Check system resources
check_system_resources() {
    print_status "Checking system resources..."
    
    # Check available memory
    TOTAL_MEM=$(free -m | awk 'NR==2{printf "%.0f", $2}')
    AVAILABLE_MEM=$(free -m | awk 'NR==2{printf "%.0f", $7}')
    
    print_status "Total Memory: ${TOTAL_MEM}MB"
    print_status "Available Memory: ${AVAILABLE_MEM}MB"
    
    if [ "$AVAILABLE_MEM" -lt 1000 ]; then
        print_warning "Low available memory (${AVAILABLE_MEM}MB). Consider freeing up memory."
    fi
    
    # Check disk space
    DISK_USAGE=$(df -h . | awk 'NR==2{print $5}' | sed 's/%//')
    print_status "Disk Usage: ${DISK_USAGE}%"
    
    if [ "$DISK_USAGE" -gt 80 ]; then
        print_warning "High disk usage (${DISK_USAGE}%). Consider cleaning up disk space."
    fi
}

# Setup environment variables
setup_environment() {
    print_status "Setting up environment variables..."
    
    # Create .env file if it doesn't exist
    if [ ! -f ".env" ]; then
        cat > .env << EOF
# Intelligent PM2 v4 Environment Variables
NODE_ENV=production
ENABLE_AI_FEATURES=true
LEARNING_ENABLED=true
AUTO_SCALING=true
PREDICTIVE_MODE=true
SECURITY_MODE=true
PERFORMANCE_MODE=true
DEPLOYMENT_MODE=true
AUTO_MERGE=false
CONFLICT_RESOLUTION=intelligent
BRANCH_CLEANUP=true
PR_AUTOMATION=true
CODE_REVIEW_AI=true
BRANCH_STRATEGY=gitflow
AUTO_COMMIT=true
EOF
        print_success "Environment file created"
    else
        print_success "Environment file already exists"
    fi
}

# Start PM2 processes
start_pm2_processes() {
    print_status "Starting PM2 processes..."
    
    # Stop any existing PM2 processes
    pm2 stop all 2>/dev/null || true
    pm2 delete all 2>/dev/null || true
    
    # Start the intelligent ecosystem
    pm2 start ecosystem.intelligent-v4.cjs --env production
    
    print_success "PM2 processes started successfully"
}

# Verify processes are running
verify_processes() {
    print_status "Verifying processes are running..."
    
    sleep 5
    
    # Get process list
    PROCESSES=$(pm2 list --format json | jq -r '.[] | select(.pm2_env.status == "online") | .name')
    
    if [ -z "$PROCESSES" ]; then
        print_error "No processes are running"
        return 1
    fi
    
    print_success "Running processes:"
    echo "$PROCESSES" | while read -r process; do
        echo "  - $process"
    done
}

# Display system status
display_status() {
    print_header "System Status"
    
    echo -e "${CYAN}PM2 Status:${NC}"
    pm2 list
    
    echo -e "\n${CYAN}System Resources:${NC}"
    echo "Memory Usage:"
    free -h
    echo -e "\nDisk Usage:"
    df -h .
    
    echo -e "\n${CYAN}Process Logs:${NC}"
    echo "Recent logs from AI Enhanced Orchestrator:"
    pm2 logs ai-enhanced-orchestrator --lines 5 2>/dev/null || echo "No logs available yet"
}

# Setup monitoring
setup_monitoring() {
    print_status "Setting up monitoring..."
    
    # Create monitoring script
    cat > monitor-intelligent-pm2.sh << 'EOF'
#!/bin/bash
echo "🔍 Intelligent PM2 v4 Monitoring Dashboard"
echo ""
echo ""

echo "📊 Process Status:"
pm2 list

echo ""
echo "📈 System Resources:"
echo "Memory:"
free -h | head -2
echo "Disk:"
df -h . | head -2

echo ""
echo "🔍 Recent Logs:"
pm2 logs --lines 10

echo ""
echo "📋 Health Checks:"
curl -s http://localhost:3000/api/health 2>/dev/null && echo "✅ Web app healthy" || echo "❌ Web app unhealthy"
curl -s http://localhost:3001/api/health 2>/dev/null && echo "✅ Dashboard healthy" || echo "❌ Dashboard unhealthy"
EOF
    
    chmod +x monitor-intelligent-pm2.sh
    print_success "Monitoring script created: monitor-intelligent-pm2.sh"
}

# Create management scripts
create_management_scripts() {
    print_status "Creating management scripts..."
    
    # Stop script
    cat > stop-intelligent-pm2.sh << 'EOF'
#!/bin/bash
echo "🛑 Stopping Intelligent PM2 v4 System..."
pm2 stop all
pm2 delete all
echo "✅ All processes stopped"
EOF
    chmod +x stop-intelligent-pm2.sh
    
    # Restart script
    cat > restart-intelligent-pm2.sh << 'EOF'
#!/bin/bash
echo "🔄 Restarting Intelligent PM2 v4 System..."
pm2 restart all
echo "✅ All processes restarted"
EOF
    chmod +x restart-intelligent-pm2.sh
    
    # Logs script
    cat > logs-intelligent-pm2.sh << 'EOF'
#!/bin/bash
echo "📋 Intelligent PM2 v4 Logs"
echo "====="
pm2 logs --lines 50
EOF
    chmod +x logs-intelligent-pm2.sh
    
    print_success "Management scripts created"
}

# Main execution
main() {
    print_header "Intelligent PM2 v4 System Startup"
    
    check_pm2
    check_node
    create_directories
    install_dependencies
    check_system_resources
    setup_environment
    start_pm2_processes
    verify_processes
    setup_monitoring
    create_management_scripts
    display_status
    
    print_header "Startup Complete"
    print_success "Intelligent PM2 v4 System is now running!"
    print_status "Available commands:"
    echo "  - ./monitor-intelligent-pm2.sh  # Monitor system status"
    echo "  - ./stop-intelligent-pm2.sh     # Stop all processes"
    echo "  - ./restart-intelligent-pm2.sh  # Restart all processes"
    echo "  - ./logs-intelligent-pm2.sh     # View logs"
    echo "  - pm2 monit                      # PM2 monitoring dashboard"
    echo "  - pm2 logs                       # View all logs"
    
    print_status "System is ready for intelligent automation!"
}

# Run main function
main "$@"
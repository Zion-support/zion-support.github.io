#!/bin/bash

echo "🚀 Starting Intelligent PM2 Automation System..."
echo "================================================"

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Function to print colored output
print_status() {
    echo -e "${BLUE}[INFO]${NC} $1"
}

print_success() {
    echo -e "${GREEN}[SUCCESS]${NC} $1"
}

print_warning() {
    echo -e "${YELLOW}[WARNING]${NC} $1"
}

print_error() {
    echo -e "${RED}[ERROR]${NC} $1"
}

# Check if PM2 is installed
check_pm2() {
    if ! command -v pm2 &> /dev/null; then
        print_error "PM2 is not installed. Installing PM2..."
        npm install -g pm2
        if [ $? -eq 0 ]; then
            print_success "PM2 installed successfully"
        else
            print_error "Failed to install PM2"
            exit 1
        fi
    else
        print_success "PM2 is already installed"
    fi
}

# Check if required dependencies are installed
check_dependencies() {
    print_status "Checking required dependencies..."
    
    # Check for node-cron
    if ! npm list node-cron &> /dev/null; then
        print_warning "node-cron not found, installing..."
        npm install node-cron
    fi
    
    # Check for other required packages
    local required_packages=("chokidar" "fs-extra")
    for package in "${required_packages[@]}"; do
        if ! npm list $package &> /dev/null; then
            print_warning "$package not found, installing..."
            npm install $package
        fi
    done
    
    print_success "Dependencies check completed"
}

# Create necessary directories
create_directories() {
    print_status "Creating necessary directories..."
    
    local directories=(
        "logs"
        "ai-review-reports"
        "performance-reports"
        "dependency-reports"
        "master-automation-reports"
        "dependency-backups"
        "bundle-analysis"
    )
    
    for dir in "${directories[@]}"; do
        if [ ! -d "$dir" ]; then
            mkdir -p "$dir"
            print_status "Created directory: $dir"
        fi
    done
    
    print_success "Directories created successfully"
}

# Install PM2 log rotation
install_pm2_logrotate() {
    print_status "Installing PM2 log rotation..."
    
    if ! pm2 list | grep -q "pm2-logrotate"; then
        pm2 install pm2-logrotate
        print_success "PM2 log rotation installed"
    else
        print_success "PM2 log rotation already installed"
    fi
}

# Start the master automation controller
start_master_controller() {
    print_status "Starting Master Automation Controller..."
    
    # Check if already running
    if pm2 list | grep -q "master-automation-controller"; then
        print_warning "Master controller already running, restarting..."
        pm2 restart master-automation-controller
    else
        pm2 start automation/master-automation-controller.js --name master-automation-controller
    fi
    
    if [ $? -eq 0 ]; then
        print_success "Master Automation Controller started"
    else
        print_error "Failed to start Master Automation Controller"
        return 1
    fi
}

# Start all automation processes
start_automation_processes() {
    print_status "Starting all automation processes..."
    
    # Start the ecosystem
    pm2 start ecosystem.config.cjs
    
    if [ $? -eq 0 ]; then
        print_success "All automation processes started"
    else
        print_error "Failed to start automation processes"
        return 1
    fi
}

# Verify all processes are running
verify_processes() {
    print_status "Verifying all processes are running..."
    
    local expected_processes=(
        "zion-app"
        "zion-backend"
        "build-health-monitor"
        "code-quality-monitor"
        "dependency-monitor"
        "build-automation"
        "file-integrity-monitor"
        "ai-code-review"
        "intelligent-performance-optimizer"
        "smart-dependency-manager"
        "master-automation-controller"
    )
    
    local running_count=0
    local total_count=${#expected_processes[@]}
    
    for process in "${expected_processes[@]}"; do
        if pm2 list | grep -q "$process.*online"; then
            print_success "$process is running"
            ((running_count++))
        else
            print_warning "$process is not running"
        fi
    done
    
    echo ""
    if [ $running_count -eq $total_count ]; then
        print_success "All $total_count processes are running successfully!"
    else
        print_warning "$running_count out of $total_count processes are running"
        print_status "Some processes may need manual attention"
    fi
}

# Show PM2 status
show_status() {
    echo ""
    echo "📊 PM2 Status:"
    echo "=============="
    pm2 status
    
    echo ""
    echo "📋 PM2 Logs (last 20 lines):"
    echo "============================="
    pm2 logs --lines 20
}

# Show automation dashboard
show_dashboard() {
    echo ""
    echo "🎛️  Automation Dashboard:"
    echo "========================="
    echo "Available commands:"
    echo "  pm2 status                    - Show all process status"
    echo "  pm2 logs                      - Show all logs"
    echo "  pm2 logs [process-name]       - Show logs for specific process"
    echo "  pm2 restart [process-name]    - Restart specific process"
    echo "  pm2 stop [process-name]       - Stop specific process"
    echo "  pm2 delete [process-name]     - Remove specific process"
    echo "  pm2 monit                     - Monitor processes in real-time"
    echo ""
    echo "  npm run automation:setup      - Setup automation processes"
    echo "  npm run automation:stop       - Stop automation processes"
    echo ""
    echo "Report directories:"
    echo "  ai-review-reports/            - AI code review reports"
    echo "  performance-reports/          - Performance optimization reports"
    echo "  dependency-reports/           - Dependency management reports"
    echo "  master-automation-reports/    - Master controller reports"
}

# Main execution
main() {
    echo "Starting setup process..."
    
    # Check PM2
    check_pm2
    
    # Check dependencies
    check_dependencies
    
    # Create directories
    create_directories
    
    # Install PM2 log rotation
    install_pm2_logrotate
    
    # Start master controller
    if start_master_controller; then
        # Start all automation processes
        if start_automation_processes; then
            # Wait a moment for processes to start
            sleep 5
            
            # Verify processes
            verify_processes
            
            # Show status
            show_status
            
            # Show dashboard
            show_dashboard
            
            print_success "🎉 Intelligent PM2 Automation System is now running!"
            echo ""
            echo "The system will automatically:"
            echo "  • Review code changes every 5 minutes"
            echo "  • Optimize performance every 30 minutes"
            echo "  • Manage dependencies every hour"
            echo "  • Monitor build health every 15 minutes"
            echo "  • Coordinate all processes intelligently"
            echo ""
            echo "Check the logs and reports directories for detailed information."
            
        else
            print_error "Failed to start automation processes"
            exit 1
        fi
    else
        print_error "Failed to start master controller"
        exit 1
    fi
}

# Run main function
main "$@"
#!/bin/bash

# Error Automation System Startup Script
# This script sets up and starts the complete PM2 error automation ecosystem

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
ECOSYSTEM_CONFIG="$PROJECT_ROOT/ecosystem.error-automation.config.cjs"
PM2_SCRIPTS_DIR="$PROJECT_ROOT/scripts/pm2"

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

# Install required dependencies
install_dependencies() {
    log "Installing required dependencies..."
    
    # Install chokidar for file watching
    if ! npm list chokidar &> /dev/null; then
        npm install --save-dev chokidar
        success "chokidar installed"
    else
        info "chokidar already installed"
    fi
    
    # Install other required packages
    local packages=("globals" "eslint-plugin-react" "eslint-plugin-react-hooks" "eslint-plugin-react-refresh" "@typescript-eslint/eslint-plugin" "@typescript-eslint/parser")
    
    for package in "${packages[@]}"; do
        if ! npm list "$package" &> /dev/null; then
            npm install --save-dev "$package"
            success "$package installed"
        else
            info "$package already installed"
        fi
    done
}

# Create necessary directories
create_directories() {
    log "Creating necessary directories..."
    
    local dirs=(
        "logs/pm2"
        "error-reports"
        "backups/syntax-fixes"
        "temp"
        "fixed-files"
    )
    
    for dir in "${dirs[@]}"; do
        local full_path="$PROJECT_ROOT/$dir"
        if [ ! -d "$full_path" ]; then
            mkdir -p "$full_path"
            success "Created directory: $dir"
        else
            info "Directory already exists: $dir"
        fi
    done
}

# Set proper permissions
set_permissions() {
    log "Setting proper permissions..."
    
    # Make PM2 scripts executable
    if [ -d "$PM2_SCRIPTS_DIR" ]; then
        chmod +x "$PM2_SCRIPTS_DIR"/*.js
        success "Set executable permissions on PM2 scripts"
    fi
    
    # Set permissions on log directories
    chmod 755 "$PROJECT_ROOT/logs"
    chmod 755 "$PROJECT_ROOT/error-reports"
    chmod 755 "$PROJECT_ROOT/backups"
    success "Set permissions on directories"
}

# Stop existing PM2 processes
stop_existing_processes() {
    log "Stopping existing PM2 processes..."
    
    if pm2 list | grep -q "online\|stopped"; then
        pm2 stop all
        pm2 delete all
        success "Existing PM2 processes stopped and deleted"
    else
        info "No existing PM2 processes found"
    fi
}

# Start the error automation system
start_error_automation() {
    log "Starting Error Automation System..."
    
    if [ ! -f "$ECOSYSTEM_CONFIG" ]; then
        error "Ecosystem configuration not found: $ECOSYSTEM_CONFIG"
        exit 1
    fi
    
    # Start the ecosystem
    pm2 start "$ECOSYSTEM_CONFIG"
    
    if [ $? -eq 0 ]; then
        success "Error Automation System started successfully"
        
        # Show status
        pm2 list
        
        # Save PM2 configuration
        pm2 save
        
        # Setup PM2 startup script
        pm2 startup
        
        info "PM2 startup script generated. Run the displayed command as root if needed."
        
    else
        error "Failed to start Error Automation System"
        exit 1
    fi
}

# Verify services are running
verify_services() {
    log "Verifying services are running..."
    
    local expected_services=(
        "error-detection-service"
        "syntax-error-fixer"
        "typescript-error-fixer"
        "eslint-error-fixer"
        "file-extension-normalizer"
        "import-cleaner"
        "code-quality-monitor"
        "build-health-monitor"
        "error-report-aggregator"
        "intelligent-error-prevention"
    )
    
    local running_services=0
    local total_services=${#expected_services[@]}
    
    for service in "${expected_services[@]}"; do
        if pm2 list | grep -q "$service.*online"; then
            success "$service is running"
            ((running_services++))
        else
            warning "$service is not running"
        fi
    done
    
    if [ $running_services -eq $total_services ]; then
        success "All $total_services services are running successfully"
    else
        warning "$running_services out of $total_services services are running"
    fi
}

# Show monitoring information
show_monitoring_info() {
    log "Error Automation System Monitoring Information:"
    
    echo -e "${CYAN}📊 PM2 Status:${NC}"
    pm2 list
    
    echo -e "\n${CYAN}📁 Log Files:${NC}"
    echo "Logs are stored in: $PROJECT_ROOT/logs/pm2/"
    echo "Error reports: $PROJECT_ROOT/error-reports/"
    echo "Backups: $PROJECT_ROOT/backups/"
    
    echo -e "\n${CYAN}🔧 Useful Commands:${NC}"
    echo "View logs: pm2 logs"
    echo "Monitor: pm2 monit"
    echo "Restart all: pm2 restart all"
    echo "Stop all: pm2 stop all"
    echo "Delete all: pm2 delete all"
    
    echo -e "\n${CYAN}📋 Service Details:${NC}"
    echo "Error Detection Service: Scans every 5 minutes"
    echo "Syntax Error Fixer: Runs every 10 minutes"
    echo "TypeScript Error Fixer: Runs every 15 minutes"
    echo "ESLint Error Fixer: Runs every 10 minutes"
    echo "File Extension Normalizer: Runs every 30 minutes"
    echo "Import Cleaner: Runs every 20 minutes"
    echo "Code Quality Monitor: Runs every 5 minutes"
    echo "Build Health Monitor: Runs every 30 minutes"
    echo "Error Report Aggregator: Runs every 10 minutes"
    echo "Intelligent Error Prevention: Runs every 15 minutes"
}

# Main execution
main() {
    echo -e "${PURPLE}🚀 Starting Error Automation System Setup...${NC}\n"
    
    # Check if we're in the right directory
    if [ ! -f "$PROJECT_ROOT/package.json" ]; then
        error "This script must be run from the project root directory"
        exit 1
    fi
    
    # Change to project directory
    cd "$PROJECT_ROOT"
    
    # Run setup steps
    check_pm2
    install_dependencies
    create_directories
    set_permissions
    stop_existing_processes
    start_error_automation
    verify_services
    
    echo -e "\n${GREEN}🎉 Error Automation System Setup Complete!${NC}\n"
    
    show_monitoring_info
    
    echo -e "\n${GREEN}✅ The system will now automatically detect and fix errors in your project.${NC}"
    echo -e "${GREEN}✅ Check the logs and error reports for detailed information.${NC}"
    echo -e "${GREEN}✅ The system will restart automatically if any services fail.${NC}"
}

# Run main function
main "$@"
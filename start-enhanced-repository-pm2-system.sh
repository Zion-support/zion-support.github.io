#!/bin/bash

# Enhanced PM2 System Startup Script with Intelligent Repository Management
# Zion Tech Group - Advanced Automation System

set -e

echo "🚀 Starting Enhanced PM2 System with Intelligent Repository Management..."
echo "================================================================"

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
    echo -e "${CYAN}[SUCCESS]${NC} $1"
}

print_header() {
    echo -e "${PURPLE}[HEADER]${NC} $1"
}

# Check if running as root
if [[ $EUID -eq 0 ]]; then
   print_error "This script should not be run as root for security reasons"
   exit 1
fi

# Function to check if command exists
command_exists() {
    command -v "$1" >/dev/null 2>&1
}

# Function to install PM2 if not present
install_pm2() {
    if ! command_exists pm2; then
        print_status "Installing PM2 globally..."
        npm install -g pm2
        
        if ! command_exists pm2; then
            print_error "Failed to install PM2"
            exit 1
        fi
        print_success "PM2 installed successfully"
    else
        print_status "PM2 is already installed"
    fi
}

# Function to setup PM2 logrotate
setup_pm2_logrotate() {
    print_status "Setting up PM2 logrotate module..."
    
    # Install logrotate module
    pm2 install pm2-logrotate || print_warning "pm2-logrotate already installed"
    
    # Configure logrotate settings
    pm2 set pm2-logrotate:max_size 10M
    pm2 set pm2-logrotate:retain 30
    pm2 set pm2-logrotate:compress true
    pm2 set pm2-logrotate:dateFormat YYYY-MM-DD_HH-mm-ss
    pm2 set pm2-logrotate:workerInterval 60
    pm2 set pm2-logrotate:rotateInterval '0 0 * * *'
    
    print_success "PM2 logrotate configured"
}

# Function to create necessary directories
create_directories() {
    print_status "Creating necessary directories..."
    
    # Create logs directory
    mkdir -p logs
    mkdir -p automation/logs
    mkdir -p automation/reports
    
    # Create backup directories
    mkdir -p backups/automation
    mkdir -p backups/configs
    
    print_success "Directories created"
}

# Function to backup existing PM2 configuration
backup_existing_config() {
    if [ -f "ecosystem.config.cjs" ]; then
        print_status "Backing up existing PM2 configuration..."
        cp ecosystem.config.cjs "backups/configs/ecosystem.config.cjs.backup.$(date +%Y%m%d_%H%M%S)"
        print_success "Existing configuration backed up"
    fi
}

# Function to check repository status
check_repository_status() {
    print_header "Checking Repository Status..."
    
    if [ -d ".git" ]; then
        print_status "Git repository detected"
        
        # Check current branch
        CURRENT_BRANCH=$(git branch --show-current 2>/dev/null || echo "unknown")
        print_status "Current branch: $CURRENT_BRANCH"
        
        # Check for uncommitted changes
        if [ -n "$(git status --porcelain)" ]; then
            print_warning "Uncommitted changes detected"
            git status --short
        else
            print_success "Working directory is clean"
        fi
        
        # Check remote status
        if git remote -v | grep -q origin; then
            print_status "Remote origin configured"
            REMOTE_URL=$(git remote get-url origin)
            print_status "Remote URL: $REMOTE_URL"
        else
            print_warning "No remote origin configured"
        fi
    else
        print_warning "No Git repository detected"
    fi
}

# Function to analyze repository branches
analyze_repository_branches() {
    print_header "Analyzing Repository Branches..."
    
    if [ -d ".git" ]; then
        # Fetch latest changes
        print_status "Fetching latest changes from remote..."
        git fetch origin 2>/dev/null || print_warning "Failed to fetch from remote"
        
        # Count branches
        LOCAL_BRANCHES=$(git branch | wc -l)
        REMOTE_BRANCHES=$(git branch -r | grep -v HEAD | wc -l)
        
        print_status "Local branches: $LOCAL_BRANCHES"
        print_status "Remote branches: $REMOTE_BRANCHES"
        
        # Analyze cursor branches
        CURSOR_BRANCHES=$(git branch -r | grep "cursor/" | wc -l)
        if [ "$CURSOR_BRANCHES" -gt 0 ]; then
            print_warning "Found $CURSOR_BRANCHES cursor branches that may need attention"
            
            # Show some examples
            echo "Example cursor branches:"
            git branch -r | grep "cursor/" | head -5 | sed 's/^/  /'
        fi
        
        # Check for merge conflicts
        MERGE_CONFLICTS=$(git diff --name-only --diff-filter=U 2>/dev/null | wc -l)
        if [ "$MERGE_CONFLICTS" -gt 0 ]; then
            print_error "Found $MERGE_CONFLICTS files with merge conflicts"
            git diff --name-only --diff-filter=U | sed 's/^/  /'
        fi
    fi
}

# Function to start the enhanced PM2 system
start_enhanced_pm2_system() {
    print_header "Starting Enhanced PM2 System..."
    
    # Stop any existing PM2 processes
    print_status "Stopping existing PM2 processes..."
    pm2 stop all 2>/dev/null || true
    pm2 delete all 2>/dev/null || true
    
    # Start the enhanced ecosystem
    print_status "Starting enhanced PM2 ecosystem..."
    pm2 start ecosystem-enhanced-repository-manager.cjs
    
    if [ $? -eq 0 ]; then
        print_success "Enhanced PM2 ecosystem started successfully"
    else
        print_error "Failed to start enhanced PM2 ecosystem"
        exit 1
    fi
}

# Function to verify PM2 processes
verify_pm2_processes() {
    print_header "Verifying PM2 Processes..."
    
    # Wait a moment for processes to start
    sleep 5
    
    # Check PM2 status
    print_status "PM2 Status:"
    pm2 status
    
    # Check if all processes are running
    RUNNING_PROCESSES=$(pm2 list | grep "online" | wc -l)
    TOTAL_PROCESSES=$(pm2 list | grep -v "PM2" | grep -v "┌─" | grep -v "└─" | grep -v "│" | grep -v "─" | wc -l)
    
    print_status "Running processes: $RUNNING_PROCESSES / $TOTAL_PROCESSES"
    
    if [ "$RUNNING_PROCESSES" -eq "$TOTAL_PROCESSES" ]; then
        print_success "All PM2 processes are running"
    else
        print_warning "Some PM2 processes may not be running properly"
        pm2 logs --lines 10
    fi
}

# Function to setup monitoring
setup_monitoring() {
    print_header "Setting up Monitoring..."
    
    # Save PM2 configuration
    print_status "Saving PM2 configuration..."
    pm2 save
    
    # Setup PM2 startup script
    print_status "Setting up PM2 startup script..."
    pm2 startup -u $(whoami) --hp $HOME
    
    print_success "Monitoring setup completed"
}

# Function to display system information
display_system_info() {
    print_header "System Information..."
    
    echo "System: $(uname -a)"
    echo "Node.js: $(node --version)"
    echo "NPM: $(npm --version)"
    echo "PM2: $(pm2 --version)"
    echo "Working Directory: $(pwd)"
    echo "User: $(whoami)"
    echo "Date: $(date)"
}

# Function to display next steps
display_next_steps() {
    print_header "Next Steps & Commands..."
    
    echo ""
    echo "🎯 Your Enhanced PM2 System is now running!"
    echo ""
    echo "📊 Monitor your system:"
    echo "   pm2 monit                    # Interactive monitoring dashboard"
    echo "   pm2 logs                     # View all logs"
    echo "   pm2 status                   # Check process status"
    echo ""
    echo "🔧 Manage your system:"
    echo "   pm2 restart all             # Restart all processes"
    echo "   pm2 stop all                # Stop all processes"
    echo "   pm2 reload all              # Reload all processes"
    echo ""
    echo "📝 View specific logs:"
    echo "   pm2 logs intelligent-repository-manager    # Repository manager logs"
    echo "   pm2 logs enhanced-pm2-error-prevention     # Error prevention logs"
    echo "   pm2 logs smart-deployment-automation       # Deployment logs"
    echo ""
    echo "🔄 Repository Management:"
    echo "   The intelligent repository manager will automatically:"
    echo "   - Resolve merge conflicts every 30 minutes"
    echo "   - Merge PRs automatically when possible"
    echo "   - Clean up old branches"
    echo "   - Generate merge reports"
    echo ""
    echo "📈 Automation Schedule:"
    echo "   - Repository Management: Every 30 minutes"
    echo "   - Error Prevention: Every 3 minutes"
    echo "   - AI Code Review: Every 30 minutes"
    echo "   - Security Audits: Every 2 hours"
    echo "   - Performance Monitoring: Every 2 hours"
    echo ""
    echo "🚨 For emergencies:"
    echo "   pm2 stop all && pm2 delete all    # Stop everything"
    echo "   pm2 resurrect                      # Restore saved processes"
}

# Main execution
main() {
    echo "================================================================"
    print_header "Enhanced PM2 System Startup - Zion Tech Group"
    echo "================================================================"
    
    # Display system information
    display_system_info
    
    # Check repository status
    check_repository_status
    
    # Analyze repository branches
    analyze_repository_branches
    
    # Install PM2 if needed
    install_pm2
    
    # Setup PM2 logrotate
    setup_pm2_logrotate
    
    # Create necessary directories
    create_directories
    
    # Backup existing configuration
    backup_existing_config
    
    # Start enhanced PM2 system
    start_enhanced_pm2_system
    
    # Verify processes
    verify_pm2_processes
    
    # Setup monitoring
    setup_monitoring
    
    echo ""
    echo "================================================================"
    print_success "Enhanced PM2 System Started Successfully!"
    echo "================================================================"
    
    # Display next steps
    display_next_steps
    
    echo ""
    print_success "Setup completed! Your intelligent automation system is now running."
    echo ""
}

# Run main function
main "$@"
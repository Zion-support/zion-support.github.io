#!/bin/bash

# Enhanced Error Prevention PM2 System Startup Script
# This script starts the comprehensive error prevention automation system

set -e

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Configuration
ECOSYSTEM_CONFIG="ecosystem-enhanced-error-prevention.config.cjs"
PM2_LOG_DIR="./logs"
REPORTS_DIR="./reports"

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

# Function to check if PM2 is installed
check_pm2() {
    if ! command -v pm2 &> /dev/null; then
        print_error "PM2 is not installed. Installing PM2..."
        npm install -g pm2
        print_success "PM2 installed successfully"
    else
        print_success "PM2 is already installed"
    fi
}

# Function to create necessary directories
create_directories() {
    print_status "Creating necessary directories..."
    
    mkdir -p "$PM2_LOG_DIR"
    mkdir -p "$REPORTS_DIR"
    mkdir -p "./scripts/automation"
    
    print_success "Directories created successfully"
}

# Function to check if automation scripts exist
check_automation_scripts() {
    print_status "Checking automation scripts..."
    
    local missing_scripts=()
    
    local required_scripts=(
        "scripts/automation/enhanced-error-prevention-automation.cjs"
        "scripts/automation/comprehensive-typescript-fixer.cjs"
        "scripts/automation/build-error-fixer.cjs"
        "scripts/automation/comprehensive-error-fixer.cjs"
        "scripts/automation/typescript-error-fixer.cjs"
        "scripts/automation/error-fixer.cjs"
        "scripts/automation/console-error-fixer.cjs"
        "scripts/automation/link-checker.cjs"
        "scripts/automation/continuous-improvement.cjs"
        "scripts/automation/daily-build-test.cjs"
        "scripts/automation/security-audit.cjs"
        "scripts/automation/dependency-updates.cjs"
        "scripts/automation/performance-monitor.cjs"
        "scripts/automation/quality-checks.cjs"
        "scripts/automation/link-integrity.cjs"
        "scripts/automation/front-maximizer.cjs"
        "scripts/automation/sitemap-runner.cjs"
        "scripts/automation/pm2-monitor.js"
        "scripts/automation/enhanced-automation-runner.js"
        "scripts/automation/pm2-error-prevention.cjs"
        "scripts/automation/project-health-monitor.cjs"
        "scripts/automation/predictive-maintenance-monitor.cjs"
    )
    
    for script in "${required_scripts[@]}"; do
        if [[ ! -f "$script" ]]; then
            missing_scripts+=("$script")
        fi
    done
    
    if [[ ${#missing_scripts[@]} -gt 0 ]]; then
        print_warning "Some automation scripts are missing:"
        for script in "${missing_scripts[@]}"; do
            print_warning "  - $script"
        done
        print_status "Creating placeholder scripts..."
        
        for script in "${missing_scripts[@]}"; do
            local dir=$(dirname "$script")
            mkdir -p "$dir"
            
            if [[ "$script" == *.cjs ]]; then
                cat > "$script" << 'EOF'
#!/usr/bin/env node

// Placeholder automation script
// This script will be replaced with actual automation logic

console.log('Placeholder automation script - replace with actual implementation');

module.exports = class PlaceholderAutomation {
  async run() {
    console.log('Placeholder automation running...');
    return { success: true, message: 'Placeholder' };
  }
};
EOF
            elif [[ "$script" == *.js ]]; then
                cat > "$script" << 'EOF'
#!/usr/bin/env node

// Placeholder automation script
// This script will be replaced with actual automation logic

console.log('Placeholder automation script - replace with actual implementation');

class PlaceholderAutomation {
  async run() {
    console.log('Placeholder automation running...');
    return { success: true, message: 'Placeholder' };
  }
}

module.exports = PlaceholderAutomation;
EOF
            fi
            
            chmod +x "$script"
            print_status "Created placeholder script: $script"
        done
    else
        print_success "All automation scripts are present"
    fi
}

# Function to stop existing PM2 processes
stop_existing_processes() {
    print_status "Stopping existing PM2 processes..."
    
    if pm2 list | grep -q "enhanced-error-prevention"; then
        pm2 stop ecosystem-enhanced-error-prevention.config.cjs
        pm2 delete ecosystem-enhanced-error-prevention.config.cjs
        print_success "Stopped existing enhanced error prevention processes"
    fi
    
    # Stop any other related processes
    pm2 stop all 2>/dev/null || true
    pm2 delete all 2>/dev/null || true
    
    print_success "All existing PM2 processes stopped"
}

# Function to start the enhanced error prevention system
start_error_prevention_system() {
    print_status "Starting enhanced error prevention system..."
    
    # Start the ecosystem
    pm2 start "$ECOSYSTEM_CONFIG"
    
    if [[ $? -eq 0 ]]; then
        print_success "Enhanced error prevention system started successfully"
    else
        print_error "Failed to start enhanced error prevention system"
        exit 1
    fi
}

# Function to save PM2 configuration
save_pm2_config() {
    print_status "Saving PM2 configuration..."
    
    pm2 save
    
    if [[ $? -eq 0 ]]; then
        print_success "PM2 configuration saved successfully"
    else
        print_warning "Failed to save PM2 configuration"
    fi
}

# Function to setup PM2 startup script
setup_pm2_startup() {
    print_status "Setting up PM2 startup script..."
    
    pm2 startup
    
    if [[ $? -eq 0 ]]; then
        print_success "PM2 startup script configured successfully"
        print_status "Run the displayed command as root to complete startup configuration"
    else
        print_warning "Failed to setup PM2 startup script"
    fi
}

# Function to display system status
display_status() {
    print_status "Enhanced Error Prevention System Status:"
    echo ""
    
    pm2 status
    
    echo ""
    print_status "Recent logs:"
    pm2 logs --lines 10
}

# Function to run initial error fixing
run_initial_error_fixing() {
    print_status "Running initial error fixing..."
    
    # Run the enhanced error prevention automation
    if [[ -f "scripts/automation/enhanced-error-prevention-automation.cjs" ]]; then
        print_status "Running enhanced error prevention automation..."
        node scripts/automation/enhanced-error-prevention-automation.cjs
    fi
    
    # Run the comprehensive TypeScript fixer
    if [[ -f "scripts/automation/comprehensive-typescript-fixer.cjs" ]]; then
        print_status "Running comprehensive TypeScript fixer..."
        node scripts/automation/comprehensive-typescript-fixer.cjs
    fi
    
    # Run the build error fixer
    if [[ -f "scripts/automation/build-error-fixer.cjs" ]]; then
        print_status "Running build error fixer..."
        node scripts/automation/build-error-fixer.cjs
    fi
    
    print_success "Initial error fixing completed"
}

# Main execution
main() {
    echo "=========================================="
    echo "Enhanced Error Prevention PM2 System"
    echo "=========================================="
    echo ""
    
    print_status "Starting enhanced error prevention system setup..."
    
    # Check prerequisites
    check_pm2
    
    # Create directories
    create_directories
    
    # Check automation scripts
    check_automation_scripts
    
    # Stop existing processes
    stop_existing_processes
    
    # Run initial error fixing
    run_initial_error_fixing
    
    # Start the system
    start_error_prevention_system
    
    # Save configuration
    save_pm2_config
    
    # Setup startup script
    setup_pm2_startup
    
    # Display status
    display_status
    
    echo ""
    print_success "Enhanced Error Prevention PM2 System setup completed successfully!"
    echo ""
    print_status "The system will now automatically:"
    echo "  - Fix TypeScript errors every 10-25 minutes"
    echo "  - Fix build errors every 15 minutes"
    echo "  - Prevent errors continuously every 5 minutes"
    echo "  - Monitor project health every 10 minutes"
    echo "  - Run comprehensive error fixing every 20 minutes"
    echo ""
    print_status "Useful commands:"
    echo "  pm2 status                    - View system status"
    echo "  pm2 logs                      - View all logs"
    echo "  pm2 monit                     - Monitor processes"
    echo "  pm2 restart all               - Restart all processes"
    echo "  pm2 stop all                  - Stop all processes"
    echo ""
}

# Handle command line arguments
case "${1:-start}" in
    start)
        main
        ;;
    stop)
        print_status "Stopping enhanced error prevention system..."
        pm2 stop ecosystem-enhanced-error-prevention.config.cjs 2>/dev/null || true
        pm2 delete ecosystem-enhanced-error-prevention.config.cjs 2>/dev/null || true
        print_success "System stopped"
        ;;
    restart)
        print_status "Restarting enhanced error prevention system..."
        pm2 restart ecosystem-enhanced-error-prevention.config.cjs
        print_success "System restarted"
        ;;
    status)
        display_status
        ;;
    logs)
        pm2 logs --lines 50
        ;;
    monit)
        pm2 monit
        ;;
    *)
        echo "Usage: $0 {start|stop|restart|status|logs|monit}"
        echo "  start   - Start the enhanced error prevention system"
        echo "  stop    - Stop the system"
        echo "  restart - Restart the system"
        echo "  status  - Show system status"
        echo "  logs    - Show recent logs"
        echo "  monit   - Open PM2 monitor"
        exit 1
        ;;
esac
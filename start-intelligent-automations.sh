#!/bin/bash

# 🚀 Intelligent PM2 Automations Quick Start Script
# This script sets up and starts all the new intelligent PM2 automations

set -e

echo "🚀 Starting Intelligent PM2 Automations Setup..."
echo "=================================================="

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
    print_status "Checking if PM2 is installed..."
    if ! command -v pm2 &> /dev/null; then
        print_error "PM2 is not installed. Installing PM2 globally..."
        npm install -g pm2
        print_success "PM2 installed successfully"
    else
        print_success "PM2 is already installed"
    fi
}

# Check if required tools are installed
check_dependencies() {
    print_status "Checking required dependencies..."
    
    # Check for depcheck
    if ! command -v depcheck &> /dev/null; then
        print_warning "depcheck not found. Installing globally..."
        npm install -g depcheck
    else
        print_success "depcheck is available"
    fi
    
    # Check for lighthouse (optional)
    if ! command -v lighthouse &> /dev/null; then
        print_warning "lighthouse not found. Install with: npm install -g lighthouse"
    else
        print_success "lighthouse is available"
    fi
}

# Make automation scripts executable
make_scripts_executable() {
    print_status "Making automation scripts executable..."
    
    if [ -d "scripts/automation" ]; then
        chmod +x scripts/automation/*.cjs
        print_success "Made automation scripts executable"
    else
        print_error "scripts/automation directory not found"
        exit 1
    fi
}

# Check if ecosystem.config.cjs exists
check_ecosystem_config() {
    print_status "Checking ecosystem configuration..."
    
    if [ ! -f "ecosystem.config.cjs" ]; then
        print_error "ecosystem.config.cjs not found in current directory"
        exit 1
    fi
    
    print_success "Ecosystem configuration found"
}

# Stop existing PM2 processes
stop_existing_processes() {
    print_status "Stopping existing PM2 processes..."
    
    if pm2 list | grep -q "zion"; then
        print_warning "Found existing Zion processes. Stopping them..."
        pm2 stop ecosystem.config.cjs 2>/dev/null || true
        pm2 delete ecosystem.config.cjs 2>/dev/null || true
        print_success "Stopped existing processes"
    else
        print_success "No existing processes found"
    fi
}

# Start intelligent automations
start_intelligent_automations() {
    print_status "Starting intelligent PM2 automations..."
    
    # Start the ecosystem
    pm2 start ecosystem.config.cjs
    
    if [ $? -eq 0 ]; then
        print_success "Intelligent automations started successfully"
    else
        print_error "Failed to start automations"
        exit 1
    fi
}

# Show status
show_status() {
    print_status "Current PM2 status:"
    echo ""
    pm2 list
    echo ""
    
    print_status "Recent logs (last 10 lines):"
    echo ""
    pm2 logs --lines 10 --nostream
}

# Show next steps
show_next_steps() {
    echo ""
    echo "🎉 Setup Complete! Here are your next steps:"
    echo "============================================="
    echo ""
    echo "1. 📊 Monitor your automations:"
    echo "   pm2 monit"
    echo ""
    echo "2. 📋 View specific automation logs:"
    echo "   pm2 logs intelligent-code-analyzer"
    echo "   pm2 logs intelligent-dependency-manager"
    echo "   pm2 logs intelligent-testing-automation"
    echo "   pm2 logs enhanced-console-error-fixer"
    echo ""
    echo "3. 📁 Check generated reports:"
    echo "   ls -la *.json *.md"
    echo ""
    echo "4. ⚙️  Configure automatic fixes (optional):"
    echo "   # Edit ecosystem.config.cjs and set:"
    echo "   AUTO_FIX_ERRORS: 'true'"
    echo "   AUTO_UPDATE_SAFE: 'true'"
    echo "   AUTO_FIX_TESTS: 'true'"
    echo ""
    echo "5. 🛑 Stop automations when needed:"
    echo "   pm2 stop ecosystem.config.cjs"
    echo ""
    echo "📚 For detailed documentation, see: INTELLIGENT_PM2_AUTOMATIONS_README.md"
    echo ""
}

# Main execution
main() {
    echo "Starting setup at $(date)"
    echo ""
    
    # Run setup steps
    check_pm2
    check_dependencies
    make_scripts_executable
    check_ecosystem_config
    stop_existing_processes
    start_intelligent_automations
    
    # Wait a moment for processes to start
    sleep 3
    
    # Show status and next steps
    show_status
    show_next_steps
    
    print_success "Setup completed successfully!"
}

# Handle script interruption
trap 'echo -e "\n${RED}Setup interrupted. Cleaning up...${NC}"; pm2 stop ecosystem.config.cjs 2>/dev/null || true; exit 1' INT TERM

# Run main function
main "$@"
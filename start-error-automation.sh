#!/bin/bash

# Error Automation Startup Script
# This script starts the comprehensive error fixing automation system

set -e

echo "🚀 Starting Error Automation System..."

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

# Check if we're in the right directory
if [ ! -f "package.json" ]; then
    print_error "package.json not found. Please run this script from the project root."
    exit 1
fi

# Create logs directory if it doesn't exist
print_status "Creating logs directory..."
mkdir -p logs
mkdir -p automation/logs

# Check if PM2 is installed
if ! command -v pm2 &> /dev/null; then
    print_error "PM2 is not installed. Installing PM2..."
    npm install -g pm2
fi

# Install dependencies if needed
if [ ! -d "node_modules" ]; then
    print_status "Installing dependencies..."
    npm install
fi

# Stop any existing PM2 processes
print_status "Stopping existing PM2 processes..."
pm2 stop all 2>/dev/null || true
pm2 delete all 2>/dev/null || true

# Install PM2 logrotate
print_status "Installing PM2 logrotate..."
pm2 install pm2-logrotate 2>/dev/null || print_warning "PM2 logrotate already installed or failed to install"

# Configure PM2 logrotate
print_status "Configuring PM2 logrotate..."
pm2 set pm2-logrotate:max_size 10M
pm2 set pm2-logrotate:retain 30
pm2 set pm2-logrotate:compress true
pm2 set pm2-logrotate:workerInterval 60
pm2 set pm2-logrotate:rotateInterval '0 0 * * *'

# Start the error automation system
print_status "Starting error automation system..."

# First, run a quick error analysis
print_status "Running initial error analysis..."
node scripts/automation/error-analyzer.cjs

# Start the main orchestrator
print_status "Starting error automation orchestrator..."
pm2 start ecosystem-error-automation.config.cjs --update-env

# Wait a moment for processes to start
sleep 5

# Check PM2 status
print_status "Checking PM2 status..."
pm2 status

# Show logs
print_status "Recent logs:"
pm2 logs --lines 20

# Save PM2 configuration
print_status "Saving PM2 configuration..."
pm2 save

# Set up PM2 startup script
print_status "Setting up PM2 startup script..."
pm2 startup 2>/dev/null || print_warning "PM2 startup already configured"

print_success "Error automation system started successfully!"
echo ""
echo "📋 Available commands:"
echo "  pm2 status                    - Check process status"
echo "  pm2 logs                      - View logs"
echo "  pm2 restart all               - Restart all processes"
echo "  pm2 stop all                  - Stop all processes"
echo "  pm2 delete all                - Delete all processes"
echo ""
echo "📊 Monitoring:"
echo "  pm2 monit                     - Monitor processes in real-time"
echo "  pm2 logs --lines 100          - View last 100 log lines"
echo "  pm2 logs error-automation-orchestrator - View orchestrator logs"
echo ""
echo "🔧 Management:"
echo "  ./stop-error-automation.sh    - Stop the automation system"
echo "  ./restart-error-automation.sh - Restart the automation system"
echo ""
echo "📄 Reports:"
echo "  error-analysis-report.json    - Current error analysis"
echo "  error-fix-report.json         - Latest fix report"
echo "  automation-summary-report.json - Automation summary"
echo "  automation-status.json        - System status"
echo ""

# Check if there are any immediate errors
print_status "Checking for immediate errors..."
if [ -f "error-analysis-report.json" ]; then
    ERROR_COUNT=$(node -e "const report = require('./error-analysis-report.json'); console.log(report.totalErrors || 0);")
    if [ "$ERROR_COUNT" -gt 0 ]; then
        print_warning "Found $ERROR_COUNT errors. The automation system will work on fixing them."
    else
        print_success "No errors found! The project is clean."
    fi
fi

print_success "Error automation system is now running and will automatically fix errors every 30 minutes!"
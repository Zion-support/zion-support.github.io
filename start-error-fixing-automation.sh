#!/bin/bash

# Enhanced Error Fixing Automation Startup Script
# This script starts the comprehensive error fixing automation system

set -e

echo "🚀 Starting Enhanced Error Fixing Automation System..."

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
if ! command -v pm2 &> /dev/null; then
    print_error "PM2 is not installed. Installing PM2..."
    npm install -g pm2
fi

# Check if we're in the project root
if [ ! -f "package.json" ]; then
    print_error "This script must be run from the project root directory"
    exit 1
fi

# Create necessary directories
print_status "Creating necessary directories..."
mkdir -p automation/logs
mkdir -p error-reports

# Install dependencies if needed
if [ ! -d "node_modules" ]; then
    print_status "Installing dependencies..."
    npm install
fi

# Stop any existing PM2 processes
print_status "Stopping existing PM2 processes..."
pm2 stop ecosystem-error-fixing-automation.config.cjs 2>/dev/null || true
pm2 delete ecosystem-error-fixing-automation.config.cjs 2>/dev/null || true

# Start the error fixing automation
print_status "Starting Enhanced Error Fixing Automation..."
pm2 start ecosystem-error-fixing-automation.config.cjs --update-env

# Wait a moment for processes to start
sleep 3

# Check status
print_status "Checking automation status..."
pm2 status

# Show logs
print_status "Recent logs from error fixing automation:"
pm2 logs enhanced-error-fixing-automation --lines 10

print_success "Enhanced Error Fixing Automation started successfully!"
echo ""
echo "📊 Automation Status:"
echo "   - Enhanced Error Fixing: Runs every 10 minutes"
echo "   - TypeScript Monitor: Runs every 15 minutes"
echo "   - ESLint Monitor: Runs every 15 minutes"
echo "   - Merge Conflict Resolver: Runs every 20 minutes"
echo "   - Import Error Fixer: Runs every 25 minutes"
echo "   - File Extension Fixer: Runs every 30 minutes"
echo "   - Master Coordinator: Runs every hour"
echo "   - Critical Alerts: Runs every 5 minutes"
echo ""
echo "🔧 Useful Commands:"
echo "   pm2 status                    - Check all automation status"
echo "   pm2 logs                      - View all logs"
echo "   pm2 logs enhanced-error-fixing-automation - View error fixing logs"
echo "   pm2 restart enhanced-error-fixing-automation - Restart main automation"
echo "   pm2 stop ecosystem-error-fixing-automation.config.cjs - Stop all automations"
echo ""
echo "📁 Logs and Reports:"
echo "   - Logs: automation/logs/"
echo "   - Reports: error-reports/"
echo "   - PM2 Logs: ~/.pm2/logs/"
echo ""
print_success "Error fixing automation is now running and will automatically fix issues!"
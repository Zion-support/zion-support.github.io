#!/bin/bash

# Error Fixing Automation Startup Script
# This script initializes and starts the PM2 error fixing automation system

set -e

echo "🚀 Starting Error Fixing Automation System..."

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

# Check if PM2 is installed
if ! command -v pm2 &> /dev/null; then
    print_warning "PM2 not found. Installing PM2..."
    npm install -g pm2
fi

# Create necessary directories
print_status "Creating necessary directories..."
mkdir -p logs
mkdir -p error-reports
mkdir -p automation/logs

# Install dependencies if needed
if [ ! -d "node_modules" ]; then
    print_status "Installing dependencies..."
    npm install
fi

# Stop any existing PM2 processes
print_status "Stopping existing PM2 processes..."
pm2 stop all 2>/dev/null || true
pm2 delete all 2>/dev/null || true

# Install PM2 logrotate module
print_status "Installing PM2 logrotate module..."
pm2 install pm2-logrotate || true

# Configure PM2 logrotate
print_status "Configuring PM2 logrotate..."
pm2 set pm2-logrotate:max_size 10M
pm2 set pm2-logrotate:retain 30
pm2 set pm2-logrotate:compress true
pm2 set pm2-logrotate:workerInterval 60
pm2 set pm2-logrotate:rotateInterval '0 0 * * *'

# Start the error fixing automation
print_status "Starting Error Fixing Automation with PM2..."
pm2 start ecosystem-error-fixing-automation.config.cjs --update-env

# Save PM2 configuration
print_status "Saving PM2 configuration..."
pm2 save

# Show status
print_status "PM2 Status:"
pm2 status

# Show logs
print_status "Recent logs:"
pm2 logs --lines 10

print_success "Error Fixing Automation System started successfully!"
print_status "The system will now automatically:"
echo "  • Fix TypeScript errors every 10 minutes"
echo "  • Fix import/export issues every 15 minutes"
echo "  • Run ESLint auto-fix every 30 minutes"
echo "  • Monitor build errors every 20 minutes"
echo "  • Check code quality every hour"
echo "  • Scan for security vulnerabilities every 6 hours"
echo ""
print_status "Useful commands:"
echo "  • pm2 status                    - Check process status"
echo "  • pm2 logs                      - View logs"
echo "  • pm2 restart all               - Restart all processes"
echo "  • pm2 stop all                  - Stop all processes"
echo "  • pm2 delete all                - Remove all processes"
echo "  • pm2 monit                     - Monitor processes in real-time"
echo ""
print_status "Log files are stored in:"
echo "  • ./logs/                       - PM2 logs"
echo "  • ./error-reports/              - Error fixing reports"
echo ""
print_success "Error Fixing Automation is now running! 🎉"
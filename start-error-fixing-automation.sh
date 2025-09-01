#!/bin/bash

# Error Fixing Automation Startup Script
# This script starts the comprehensive PM2 error fixing automation system

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
mkdir -p scripts/automation

# Make automation scripts executable
print_status "Making automation scripts executable..."
chmod +x scripts/automation/*.cjs 2>/dev/null || true

# Install dependencies if needed
if [ ! -d "node_modules" ]; then
    print_status "Installing dependencies..."
    npm install
fi

# Stop any existing PM2 processes
print_status "Stopping existing PM2 processes..."
pm2 stop ecosystem-error-fixing.config.cjs 2>/dev/null || true
pm2 delete ecosystem-error-fixing.config.cjs 2>/dev/null || true

# Start the error fixing automation
print_status "Starting error fixing automation..."
pm2 start ecosystem-error-fixing.config.cjs --update-env

# Wait a moment for processes to start
sleep 3

# Show status
print_status "PM2 Status:"
pm2 status

# Show logs
print_status "Recent logs:"
pm2 logs --lines 10

# Set up log rotation
print_status "Setting up log rotation..."
pm2 install pm2-logrotate 2>/dev/null || true
pm2 set pm2-logrotate:max_size 10M
pm2 set pm2-logrotate:retain 30
pm2 set pm2-logrotate:compress true
pm2 set pm2-logrotate:workerInterval 60
pm2 set pm2-logrotate:rotateInterval '0 0 * * *'

# Save PM2 configuration
print_status "Saving PM2 configuration..."
pm2 save

# Set up PM2 to start on system boot
print_status "Setting up PM2 startup script..."
pm2 startup 2>/dev/null || true

print_success "Error Fixing Automation System started successfully!"
echo ""
echo "📊 Available commands:"
echo "  pm2 status                    - Check process status"
echo "  pm2 logs                      - View all logs"
echo "  pm2 logs [process-name]       - View specific process logs"
echo "  pm2 restart all               - Restart all processes"
echo "  pm2 stop all                  - Stop all processes"
echo "  pm2 delete all                - Delete all processes"
echo ""
echo "🔧 Automation Scripts Running:"
echo "  - merge-conflict-fixer        (every 5 minutes)"
echo "  - typescript-error-fixer      (every 10 minutes)"
echo "  - eslint-error-fixer          (every 15 minutes)"
echo "  - import-export-fixer         (every 20 minutes)"
echo "  - syntax-error-fixer          (every 30 minutes)"
echo "  - dependency-fixer            (every 30 minutes)"
echo "  - file-extension-fixer        (every hour)"
echo "  - component-error-fixer       (every hour)"
echo "  - master-error-coordinator    (every 2 hours)"
echo "  - error-monitor               (every 5 minutes)"
echo "  - build-tester                (every 30 minutes)"
echo ""
echo "📁 Logs and Reports:"
echo "  - Logs: ./logs/"
echo "  - Error Reports: ./error-reports/"
echo ""
print_success "The automation system will continuously monitor and fix errors!"
#!/bin/bash

# 🚨 Error Automation Startup Script
# This script starts all error fixing automations using PM2

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
    echo -e "${BLUE}[$(date +'%Y-%m-%d %H:%M:%S')]${NC} $1"
}

print_success() {
    echo -e "${GREEN}✅ $1${NC}"
}

print_warning() {
    echo -e "${YELLOW}⚠️  $1${NC}"
}

print_error() {
    echo -e "${RED}❌ $1${NC}"
}

# Check if PM2 is installed
if ! command -v pm2 &> /dev/null; then
    print_error "PM2 is not installed. Installing PM2..."
    npm install -g pm2
    print_success "PM2 installed successfully"
fi

# Check if we're in the right directory
if [ ! -f "package.json" ]; then
    print_error "package.json not found. Please run this script from the project root."
    exit 1
fi

# Create necessary directories
print_status "Creating necessary directories..."
mkdir -p automation/logs
mkdir -p error-reports
print_success "Directories created"

# Install dependencies if needed
if [ ! -d "node_modules" ]; then
    print_status "Installing dependencies..."
    npm install
    print_success "Dependencies installed"
fi

# Install chokidar for file watching
print_status "Installing chokidar for file watching..."
npm install chokidar --save-dev
print_success "Chokidar installed"

# Stop any existing PM2 processes
print_status "Stopping existing PM2 processes..."
pm2 stop all 2>/dev/null || true
pm2 delete all 2>/dev/null || true
print_success "Existing processes stopped"

# Start the error automation system
print_status "Starting Error Automation System with PM2..."

# Start the main error automation ecosystem
pm2 start ecosystem-error-automation.config.cjs --update-env

# Wait a moment for processes to start
sleep 3

# Check status
print_status "Checking PM2 status..."
pm2 status

# Show logs
print_status "Recent logs from error automation processes:"
pm2 logs --lines 10

print_success "Error Automation System started successfully!"
echo ""
echo "📊 Available commands:"
echo "  pm2 status                    - Check status of all processes"
echo "  pm2 logs                      - View real-time logs"
echo "  pm2 logs --lines 50           - View last 50 lines of logs"
echo "  pm2 restart all               - Restart all processes"
echo "  pm2 stop all                  - Stop all processes"
echo "  pm2 delete all                - Delete all processes"
echo ""
echo "🔧 Individual process commands:"
echo "  pm2 restart comprehensive-error-fixer"
echo "  pm2 restart typescript-error-monitor"
echo "  pm2 restart eslint-error-cleaner"
echo "  pm2 restart build-error-detector"
echo ""
echo "📁 Log files are stored in:"
echo "  ./automation/logs/"
echo "  ./error-reports/"
echo ""
echo "🌐 Error Analytics Dashboard: http://localhost:3001 (if running)"
echo ""
print_success "Error automation is now running and will automatically fix issues!"
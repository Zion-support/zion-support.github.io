#!/bin/bash

# Error Prevention System Startup Script
# This script starts the comprehensive PM2-based error prevention and monitoring system

set -e

echo "🚀 Starting Zion Tech Group Error Prevention System..."

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Function to print colored output
print_status() {
    echo -e "${GREEN}[INFO]${NC} $1"
}

print_warning() {
    echo -e "${YELLOW}[WARN]${NC} $1"
}

print_error() {
    echo -e "${RED}[ERROR]${NC} $1"
}

print_header() {
    echo -e "${BLUE}[SYSTEM]${NC} $1"
}

# Check if PM2 is installed
if ! command -v pm2 &> /dev/null; then
    print_error "PM2 is not installed. Installing PM2..."
    npm install -g pm2
    print_status "PM2 installed successfully"
fi

# Create necessary directories
print_status "Creating automation directories..."
mkdir -p automation/logs
mkdir -p automation/reports
mkdir -p automation/alerts
mkdir -p automation/backups

# Set up log rotation for PM2
print_status "Setting up PM2 log rotation..."
pm2 install pm2-logrotate || true
pm2 set pm2-logrotate:max_size 10M
pm2 set pm2-logrotate:retain 30
pm2 set pm2-logrotate:compress true
pm2 set pm2-logrotate:workerInterval 60
pm2 set pm2-logrotate:rotateInterval '0 0 * * *'

# Install required dependencies
print_status "Installing required dependencies..."
if ! npm list chokidar &>/dev/null; then
    yarn add chokidar
fi

# Stop any existing PM2 processes
print_status "Stopping existing error prevention processes..."
pm2 stop ecosystem-error-prevention.config.cjs || true
pm2 delete ecosystem-error-prevention.config.cjs || true

# Start the error prevention ecosystem
print_header "Starting Error Prevention Ecosystem..."
pm2 start ecosystem-error-prevention.config.cjs

# Wait for processes to start
sleep 5

# Check process status
print_status "Checking process status..."
pm2 status

# Run initial error fix
print_status "Running initial error detection and fixing..."
node automation/intelligent-error-fixer.js

# Display startup summary
print_header "🎉 Error Prevention System Started Successfully!"
echo ""
echo "Active Processes:"
echo "  📊 intelligent-error-fixer: Runs every 30 minutes"
echo "  🔍 build-monitor: Checks build health every 5 minutes"
echo "  📦 dependency-health-checker: Checks dependencies hourly"
echo "  🎯 code-quality-monitor: Monitors code quality every 2 hours"
echo "  👀 file-watcher: Real-time file monitoring"
echo "  📋 error-report-aggregator: Generates reports every 6 hours"
echo ""
echo "Management Commands:"
echo "  📈 View logs: pm2 logs"
echo "  📊 Check status: pm2 status"
echo "  🔄 Restart system: pm2 restart ecosystem-error-prevention.config.cjs"
echo "  ⏹️  Stop system: pm2 stop ecosystem-error-prevention.config.cjs"
echo ""
echo "Reports Location: automation/reports/"
echo "Logs Location: automation/logs/"
echo "Alerts Location: automation/alerts/"
echo ""

# Set up auto-startup on system reboot
print_status "Setting up auto-startup on system reboot..."
pm2 startup || print_warning "Could not set up auto-startup. Run 'pm2 startup' manually if needed."
pm2 save

print_header "✅ Error Prevention System is now active and monitoring your project!"

# Optionally run a quick health check
if [ "$1" = "--health-check" ]; then
    print_status "Running health check..."
    sleep 10
    node automation/build-monitor.js
fi
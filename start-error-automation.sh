#!/bin/bash

# Error Automation System Startup Script
# This script starts the PM2 error automation system with comprehensive error fixing capabilities

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

print_status "Setting up Error Automation System..."

# Create necessary directories
print_status "Creating log directories..."
mkdir -p logs
mkdir -p error-reports
mkdir -p automation/logs

# Install dependencies if needed
if [ ! -d "node_modules" ]; then
    print_status "Installing dependencies..."
    npm install
fi

# Check if PM2 is installed globally
if ! command -v pm2 &> /dev/null; then
    print_status "Installing PM2 globally..."
    npm install -g pm2
fi

# Stop any existing PM2 processes
print_status "Stopping existing PM2 processes..."
pm2 stop all 2>/dev/null || true
pm2 delete all 2>/dev/null || true

# Install PM2 logrotate module
print_status "Setting up PM2 logrotate..."
pm2 install pm2-logrotate 2>/dev/null || true
pm2 set pm2-logrotate:max_size 10M
pm2 set pm2-logrotate:retain 30
pm2 set pm2-logrotate:compress true
pm2 set pm2-logrotate:workerInterval 60
pm2 set pm2-logrotate:rotateInterval '0 0 * * *'

# Start the error automation system
print_status "Starting Error Automation System with PM2..."
pm2 start ecosystem-error-automation.config.cjs --update-env

# Wait a moment for processes to start
sleep 5

# Check PM2 status
print_status "Checking PM2 status..."
pm2 status

# Show logs for key processes
print_status "Showing recent logs for error automation processes..."
echo ""
echo "=== Error Monitor Logs ==="
pm2 logs error-monitor --lines 10 --nostream 2>/dev/null || echo "No logs yet"

echo ""
echo "=== Comprehensive Error Fixer Logs ==="
pm2 logs comprehensive-error-fixer --lines 10 --nostream 2>/dev/null || echo "No logs yet"

echo ""
echo "=== Error Fixer Orchestrator Logs ==="
pm2 logs error-fixer-orchestrator --lines 10 --nostream 2>/dev/null || echo "No logs yet"

# Save PM2 configuration
print_status "Saving PM2 configuration..."
pm2 save

# Set up PM2 startup script
print_status "Setting up PM2 startup script..."
pm2 startup 2>/dev/null || true

print_success "Error Automation System started successfully!"
echo ""
echo "📊 System Overview:"
echo "  • Error Monitor: Real-time error detection (30s intervals)"
echo "  • Comprehensive Error Fixer: Full error resolution (5min intervals)"
echo "  • TypeScript Error Fixer: TypeScript-specific fixes (3min intervals)"
echo "  • ESLint Error Fixer: Linting fixes (4min intervals)"
echo "  • JSX Error Fixer: JSX syntax fixes (5min intervals)"
echo "  • Import Error Fixer: Import path fixes (6min intervals)"
echo "  • Merge Conflict Resolver: Conflict resolution (10min intervals)"
echo "  • Build Error Detector: Build issue detection (15min intervals)"
echo "  • Dependency Error Resolver: Dependency fixes (30min intervals)"
echo "  • Error Fixer Orchestrator: Coordinates all fixers (1min intervals)"
echo ""
echo "🔧 Useful Commands:"
echo "  • pm2 status                    - Check system status"
echo "  • pm2 logs                      - View all logs"
echo "  • pm2 logs error-monitor        - View error monitor logs"
echo "  • pm2 restart all               - Restart all processes"
echo "  • pm2 stop all                  - Stop all processes"
echo "  • pm2 delete all                - Remove all processes"
echo ""
echo "📁 Log Files:"
echo "  • ./logs/                       - PM2 log files"
echo "  • ./error-reports/              - Error reports and analytics"
echo ""
echo "🎯 The system will automatically:"
echo "  • Monitor for errors every 30 seconds"
echo "  • Fix TypeScript errors every 3 minutes"
echo "  • Fix ESLint errors every 4 minutes"
echo "  • Resolve merge conflicts every 10 minutes"
echo "  • Generate comprehensive reports"
echo "  • Alert on critical issues"
echo ""
print_success "Error Automation System is now running and will automatically fix errors!"
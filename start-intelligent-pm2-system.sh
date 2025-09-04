#!/bin/bash

# Intelligent PM2 System Startup Script
# This script starts all intelligent PM2 automations with proper configuration

set -e

echo "🚀 Starting Intelligent PM2 System..."

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Function to print colored output
print_status() {
    echo -e "${BLUE}[$(date '+%Y-%m-%d %H:%M:%S')]${NC} $1"
}

print_success() {
    echo -e "${GREEN}[$(date '+%Y-%m-%d %H:%M:%S')]${NC} ✅ $1"
}

print_warning() {
    echo -e "${YELLOW}[$(date '+%Y-%m-%d %H:%M:%S')]${NC} ⚠️  $1"
}

print_error() {
    echo -e "${RED}[$(date '+%Y-%m-%d %H:%M:%S')]${NC} ❌ $1"
}

# Check if PM2 is installed
if ! command -v pm2 &> /dev/null; then
    print_error "PM2 is not installed. Please install PM2 first:"
    echo "npm install -g pm2"
    exit 1
fi

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    print_error "Node.js is not installed. Please install Node.js first."
    exit 1
fi

# Create logs directory
print_status "Creating logs directory..."
mkdir -p logs

# Check if ecosystem file exists
if [ ! -f "ecosystem.intelligent-enhanced.cjs" ]; then
    print_error "Ecosystem file not found: ecosystem.intelligent-enhanced.cjs"
    exit 1
fi

# Stop existing PM2 processes
print_status "Stopping existing PM2 processes..."
pm2 delete all 2>/dev/null || true

# Install dependencies if needed
if [ ! -d "node_modules" ]; then
    print_status "Installing dependencies..."
    npm install
fi

# Start PM2 processes with the intelligent ecosystem
print_status "Starting intelligent PM2 ecosystem..."
pm2 start ecosystem.intelligent-enhanced.cjs

# Wait a moment for processes to start
sleep 5

# Check PM2 status
print_status "Checking PM2 status..."
pm2 status

# Show logs for a few seconds
print_status "Showing recent logs..."
pm2 logs --lines 20

# Generate initial status report
print_status "Generating initial status report..."
node scripts/automation/master-orchestrator.cjs status

# Show system information
print_status "System Information:"
echo "  - Node.js version: $(node --version)"
echo "  - PM2 version: $(pm2 --version)"
echo "  - Available memory: $(free -h | grep '^Mem:' | awk '{print $2}')"
echo "  - Disk space: $(df -h . | tail -1 | awk '{print $4}')"

# Show running processes
print_status "Running PM2 processes:"
pm2 list

print_success "Intelligent PM2 System started successfully!"
print_status "You can monitor the system with:"
echo "  - pm2 status"
echo "  - pm2 logs"
echo "  - pm2 monit"
echo "  - node scripts/automation/master-orchestrator.cjs status"

print_status "To stop the system:"
echo "  - pm2 stop all"
echo "  - pm2 delete all"

print_status "To restart the system:"
echo "  - ./start-intelligent-pm2-system.sh"

# Save PM2 configuration
print_status "Saving PM2 configuration..."
pm2 save

# Setup PM2 startup (optional)
if [ "$1" = "--setup-startup" ]; then
    print_status "Setting up PM2 startup..."
    pm2 startup
    print_warning "Please run the command shown above to complete PM2 startup setup"
fi

print_success "Intelligent PM2 System is now running!"
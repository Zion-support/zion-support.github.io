#!/bin/bash

echo "🚀 Starting PM2 Error Fixing Automation System..."

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

print_status "Setting up PM2 Error Fixing Automation System..."

# Create logs directory if it doesn't exist
if [ ! -d "logs" ]; then
    print_status "Creating logs directory..."
    mkdir -p logs
fi

# Create automation logs directory if it doesn't exist
if [ ! -d "automation/logs" ]; then
    print_status "Creating automation logs directory..."
    mkdir -p automation/logs
fi

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
print_status "Installing PM2 logrotate module..."
pm2 install pm2-logrotate || true

# Configure PM2 logrotate
print_status "Configuring PM2 logrotate..."
pm2 set pm2-logrotate:max_size 10M || true
pm2 set pm2-logrotate:retain 30 || true
pm2 set pm2-logrotate:compress true || true
pm2 set pm2-logrotate:workerInterval 60 || true
pm2 set pm2-logrotate:rotateInterval '0 0 * * *' || true

# Start the error fixing automation system
print_status "Starting error fixing automation system..."
pm2 start ecosystem-error-fixing.config.cjs --update-env

# Check if the processes started successfully
sleep 3
pm2_status=$(pm2 status --no-daemon)

if echo "$pm2_status" | grep -q "online"; then
    print_success "Error fixing automation system started successfully!"
else
    print_error "Failed to start error fixing automation system"
    pm2 logs --lines 20
    exit 1
fi

# Display status
print_status "PM2 Error Fixing Automation System Status:"
pm2 status

# Display running processes
print_status "Running automation processes:"
pm2 list

# Show logs for the first few seconds
print_status "Showing recent logs (press Ctrl+C to stop):"
echo "----------------------------------------"
pm2 logs --lines 50

# Keep the script running and show real-time logs
print_status "Monitoring error fixing automation system..."
print_status "Press Ctrl+C to stop monitoring (processes will continue running)"
print_status "Use 'pm2 status' to check process status"
print_status "Use 'pm2 logs' to view logs"
print_status "Use 'pm2 stop all' to stop all processes"

# Function to handle script termination
cleanup() {
    print_status "Stopping monitoring..."
    print_success "Error fixing automation system is running in the background"
    print_status "Use 'pm2 status' to check status"
    print_status "Use 'pm2 logs' to view logs"
    print_status "Use 'pm2 stop all' to stop all processes"
    exit 0
}

# Set up signal handlers
trap cleanup SIGINT SIGTERM

# Keep the script running
while true; do
    sleep 10
    # Check if processes are still running
    if ! pm2 ping >/dev/null 2>&1; then
        print_error "PM2 daemon is not responding"
        break
    fi
done
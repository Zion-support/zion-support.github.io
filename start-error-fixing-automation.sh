#!/bin/bash

# Error Fixing Automation Startup Script
# This script starts the PM2 error fixing automation system

set -e

echo "🚀 Starting Error Fixing Automation System..."

# Colors for output
RED='\\033[0;31m'
GREEN='\\033[0;32m'
YELLOW='\\033[1;33m'
NC='\\033[0m' # No Color

# Function to print colored output
print_status() {
    echo -e "${GREEN}[INFO]${NC} $1"
}

print_warning() {
    echo -e "${YELLOW}[WARNING]${NC} $1"
}

print_error() {
    echo -e "${RED}[ERROR]${NC} $1"
}

# Check if PM2 is installed
if ! command -v pm2 &> /dev/null; then
    print_warning "PM2 not found. Installing PM2..."
    npm install -g pm2
fi

# Create necessary directories
print_status "Creating necessary directories..."
mkdir -p logs/pm2
mkdir -p error-reports
mkdir -p scripts/pm2

# Make PM2 scripts executable
print_status "Making PM2 scripts executable..."
chmod +x scripts/pm2/*.js

# Stop any existing PM2 processes for error fixing
print_status "Stopping existing error fixing processes..."
pm2 delete ecosystem-error-fixing || true

# Start the error fixing ecosystem
print_status "Starting error fixing ecosystem..."
pm2 start ecosystem-error-fixing.config.js

# Save PM2 configuration
print_status "Saving PM2 configuration..."
pm2 save

# Setup PM2 startup script (optional)
if [[ "$1" == "--startup" ]]; then
    print_status "Setting up PM2 startup script..."
    pm2 startup
fi

# Display status
print_status "Displaying PM2 status..."
pm2 status

# Show logs briefly
print_status "Showing recent logs..."
pm2 logs --lines 20

echo ""
print_status "✅ Error Fixing Automation System started successfully!"
echo ""
echo "Available commands:"
echo "  pm2 status                    - Show process status"
echo "  pm2 logs                      - Show all logs"
echo "  pm2 logs syntax-error-fixer   - Show syntax fixer logs"
echo "  pm2 logs typescript-error-monitor - Show TypeScript monitor logs"
echo "  pm2 logs build-error-monitor  - Show build monitor logs"
echo "  pm2 restart all               - Restart all processes"
echo "  pm2 stop all                  - Stop all processes"
echo ""
echo "Reports are saved in: error-reports/"
echo "Logs are saved in: logs/pm2/"
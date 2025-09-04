#!/bin/bash

# Intelligent PM2 Automation System Startup Script
# This script starts all PM2 automations with intelligent monitoring and management

set -e

echo "🚀 Starting Intelligent PM2 Automation System..."
echo "=============================================="

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
    echo -e "${GREEN}[$(date '+%Y-%m-%d %H:%M:%S')] ✅${NC} $1"
}

print_warning() {
    echo -e "${YELLOW}[$(date '+%Y-%m-%d %H:%M:%S')] ⚠️${NC} $1"
}

print_error() {
    echo -e "${RED}[$(date '+%Y-%m-%d %H:%M:%S')] ❌${NC} $1"
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

# Create necessary directories
print_status "Creating necessary directories..."
mkdir -p logs/pm2
mkdir -p logs/automation
mkdir -p logs/reports
mkdir -p backups

# Stop any existing PM2 processes
print_status "Stopping existing PM2 processes..."
pm2 stop all 2>/dev/null || true
pm2 delete all 2>/dev/null || true

# Install dependencies if needed
if [ ! -d "node_modules" ]; then
    print_status "Installing dependencies..."
    npm install
fi

# Start the PM2 ecosystem
print_status "Starting PM2 ecosystem..."
pm2 start ecosystem.config.js

# Wait for processes to start
print_status "Waiting for processes to initialize..."
sleep 10

# Check process status
print_status "Checking process status..."
pm2 status

# Start the master orchestrator
print_status "Starting master orchestrator..."
node scripts/pm2/master-orchestrator.js &

# Wait a moment for orchestrator to complete
sleep 5

# Display system information
echo ""
echo "🎯 INTELLIGENT PM2 SYSTEM STARTED"
echo "=================================="
echo ""
echo "📊 System Status:"
pm2 status
echo ""

echo "🌐 Health Dashboard: http://localhost:3001"
echo "📁 Logs Directory: ./logs/pm2/"
echo "📄 Configuration: ./ecosystem.config.js"
echo ""

echo "🔧 Available Commands:"
echo "  pm2 status          - Check process status"
echo "  pm2 logs            - View all logs"
echo "  pm2 logs <name>     - View specific process logs"
echo "  pm2 restart <name>  - Restart specific process"
echo "  pm2 stop all        - Stop all processes"
echo "  pm2 delete all      - Delete all processes"
echo ""

echo "📋 Process Information:"
echo "  intelligent-monitor    - System monitoring with predictive analytics"
echo "  ai-code-analyzer       - AI-powered code analysis and optimization"
echo "  smart-git-automator    - Intelligent git workflow automation"
echo "  deployment-pipeline    - Automated deployment with rollback"
echo "  performance-optimizer  - Performance monitoring and optimization"
echo "  security-monitor       - Security vulnerability scanning"
echo "  backup-manager         - Automated backup and disaster recovery"
echo "  health-dashboard       - Real-time health monitoring dashboard"
echo ""

print_success "Intelligent PM2 Automation System is now running!"
print_status "Monitor the system at http://localhost:3001"
print_status "Check logs in ./logs/pm2/ for detailed information"

# Keep the script running to show real-time status
echo ""
echo "🔄 Real-time monitoring (Press Ctrl+C to stop)..."
echo ""

# Function to handle script termination
cleanup() {
    echo ""
    print_warning "Shutting down Intelligent PM2 System..."
    pm2 stop all
    print_success "System stopped gracefully"
    exit 0
}

# Set up signal handlers
trap cleanup SIGINT SIGTERM

# Monitor system status
while true; do
    sleep 30
    echo ""
    print_status "System Status Check:"
    pm2 status --no-colors | head -10
    echo ""
done
#!/bin/bash

# Error Automation System Startup Script
# This script initializes and starts the complete error automation system

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

print_status "Checking prerequisites..."

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    print_error "Node.js is not installed. Please install Node.js first."
    exit 1
fi

# Check if npm is installed
if ! command -v npm &> /dev/null; then
    print_error "npm is not installed. Please install npm first."
    exit 1
fi

# Check if PM2 is installed
if ! command -v pm2 &> /dev/null; then
    print_warning "PM2 is not installed. Installing PM2..."
    npm install -g pm2
    print_success "PM2 installed successfully"
fi

print_status "Installing dependencies..."

# Install project dependencies
if npm install --legacy-peer-deps; then
    print_success "Dependencies installed successfully"
else
    print_error "Failed to install dependencies"
    exit 1
fi

print_status "Creating necessary directories..."

# Create logs directory
mkdir -p logs
mkdir -p automation/logs

print_status "Setting up PM2 log rotation..."

# Install and configure PM2 log rotation
pm2 install pm2-logrotate || true
pm2 set pm2-logrotate:max_size 10M
pm2 set pm2-logrotate:retain 30
pm2 set pm2-logrotate:compress true
pm2 set pm2-logrotate:workerInterval 60
pm2 set pm2-logrotate:rotateInterval '0 0 * * *'

print_success "PM2 log rotation configured"

print_status "Starting error automation system..."

# Stop any existing PM2 processes
print_status "Stopping existing PM2 processes..."
pm2 stop ecosystem.error-automation.config.cjs || true
pm2 delete ecosystem.error-automation.config.cjs || true

# Start the error automation system
if pm2 start ecosystem.error-automation.config.cjs --update-env; then
    print_success "Error automation system started successfully"
else
    print_error "Failed to start error automation system"
    exit 1
fi

print_status "Waiting for processes to initialize..."
sleep 5

# Check PM2 status
print_status "Checking PM2 status..."
pm2 status

print_status "Setting up monitoring..."

# Create a simple monitoring script
cat > monitor-error-automation.sh << 'EOF'
#!/bin/bash
echo "🔍 Error Automation System Status:"
echo "=================================="
pm2 status
echo ""
echo "📊 Recent Logs:"
echo "==============="
pm2 logs --lines 20
echo ""
echo "📈 Error Fixing Statistics:"
echo "==========================="
if [ -f "master-error-coordinator-report.json" ]; then
    cat master-error-coordinator-report.json | jq '.summary' 2>/dev/null || echo "No statistics available yet"
else
    echo "No statistics available yet"
fi
EOF

chmod +x monitor-error-automation.sh

print_status "Creating quick access scripts..."

# Create quick access scripts
cat > stop-error-automation.sh << 'EOF'
#!/bin/bash
echo "🛑 Stopping Error Automation System..."
pm2 stop ecosystem.error-automation.config.cjs
pm2 delete ecosystem.error-automation.config.cjs
echo "✅ Error automation system stopped"
EOF

chmod +x stop-error-automation.sh

cat > restart-error-automation.sh << 'EOF'
#!/bin/bash
echo "🔄 Restarting Error Automation System..."
pm2 restart ecosystem.error-automation.config.cjs
echo "✅ Error automation system restarted"
EOF

chmod +x restart-error-automation.sh

cat > logs-error-automation.sh << 'EOF'
#!/bin/bash
echo "📋 Error Automation System Logs:"
echo "================================"
pm2 logs ecosystem.error-automation.config.cjs --lines 50
EOF

chmod +x logs-error-automation.sh

print_success "Error automation system setup completed!"

echo ""
echo "🎯 Error Automation System is now running!"
echo ""
echo "📋 Available commands:"
echo "  ./monitor-error-automation.sh  - Check system status and recent logs"
echo "  ./stop-error-automation.sh     - Stop the error automation system"
echo "  ./restart-error-automation.sh  - Restart the error automation system"
echo "  ./logs-error-automation.sh     - View recent logs"
echo "  pm2 status                     - Check PM2 process status"
echo "  pm2 logs                       - View all PM2 logs"
echo ""
echo "🔧 The system will automatically:"
echo "  • Detect and fix TypeScript errors every 20 minutes"
echo "  • Fix ESLint errors every 25 minutes"
echo "  • Fix build errors every 30 minutes"
echo "  • Fix syntax errors every 15 minutes"
echo "  • Fix dependency issues every hour"
echo "  • Monitor for new errors every 5 minutes"
echo "  • Generate analytics reports every 2 hours"
echo ""
echo "📊 Reports will be saved to:"
echo "  • master-error-coordinator-report.json"
echo "  • enhanced-error-detection-report.json"
echo "  • Various log files in the logs/ directory"
echo ""

# Show initial status
print_status "Initial system status:"
pm2 status

print_success "Error automation system is ready! 🚀"
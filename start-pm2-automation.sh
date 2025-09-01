#!/bin/bash

# PM2 Automation Startup Script
# This script starts the complete PM2 automation system for error monitoring and fixing

set -e

echo "🚀 Starting PM2 Automation System..."

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
    echo -e "${YELLOW}[WARNING]${NC} $1"
}

print_error() {
    echo -e "${RED}[ERROR]${NC} $1"
}

print_header() {
    echo -e "${BLUE}$1${NC}"
}

# Check if PM2 is installed
if ! command -v pm2 &> /dev/null; then
    print_error "PM2 is not installed. Installing PM2..."
    npm install -g pm2
else
    print_status "PM2 is already installed"
fi

# Create necessary directories
print_status "Creating necessary directories..."
mkdir -p logs
mkdir -p error-reports
mkdir -p scripts

# Make scripts executable
print_status "Making scripts executable..."
chmod +x scripts/*.js 2>/dev/null || true
chmod +x scripts/*.sh 2>/dev/null || true

# Install dependencies if not already installed
if [ ! -d "node_modules" ]; then
    print_status "Installing dependencies..."
    npm install --legacy-peer-deps
else
    print_status "Dependencies already installed"
fi

# Build the project
print_status "Building the project..."
if npm run build; then
    print_status "Build completed successfully"
else
    print_warning "Build failed, but continuing with automation setup"
fi

# Stop any existing PM2 processes
print_status "Stopping existing PM2 processes..."
pm2 delete all 2>/dev/null || true

# Start PM2 processes using ecosystem file
print_header "🔧 Starting PM2 Ecosystem..."
if pm2 start ecosystem.config.cjs; then
    print_status "PM2 ecosystem started successfully"
else
    print_error "Failed to start PM2 ecosystem"
    exit 1
fi

# Install PM2 logrotate module
print_status "Installing PM2 logrotate..."
pm2 install pm2-logrotate 2>/dev/null || true

# Configure PM2 logrotate
print_status "Configuring PM2 logrotate..."
pm2 set pm2-logrotate:max_size 10M
pm2 set pm2-logrotate:retain 7
pm2 set pm2-logrotate:compress true
pm2 set pm2-logrotate:dateFormat 'YYYY-MM-DD_HH-mm-ss'

# Save PM2 configuration
print_status "Saving PM2 configuration..."
pm2 save

# Setup PM2 startup (optional - only if running as system service)
if [ "$1" = "--startup" ]; then
    print_status "Setting up PM2 startup..."
    pm2 startup | tail -1 | bash
fi

# Create health endpoint if it doesn't exist
print_status "Creating health endpoint..."
cat > health-endpoint.js << 'EOF'
const http = require('http');
const port = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  if (req.url === '/health') {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({
      status: 'healthy',
      timestamp: new Date().toISOString(),
      uptime: process.uptime(),
      memory: process.memoryUsage(),
      pid: process.pid
    }));
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Not Found');
  }
});

server.listen(port, () => {
  console.log(`Health endpoint server running on port ${port}`);
});
EOF

# Start health endpoint server
print_status "Starting health endpoint server..."
pm2 start health-endpoint.js --name health-endpoint

# Display PM2 status
print_header "📊 PM2 Process Status:"
pm2 list

# Display monitoring information
print_header "🔍 Monitoring Information:"
echo -e "${GREEN}PM2 Monitor:${NC} pm2 monit"
echo -e "${GREEN}View Logs:${NC} pm2 logs"
echo -e "${GREEN}Restart All:${NC} pm2 restart all"
echo -e "${GREEN}Stop All:${NC} pm2 stop all"
echo -e "${GREEN}Health Check:${NC} curl http://localhost:${PORT:-3000}/health"

# Show automation schedule
print_header "⏰ Automation Schedule:"
echo -e "${BLUE}Error Monitor:${NC} Every 2 hours"
echo -e "${BLUE}Health Checker:${NC} Every 5 minutes"
echo -e "${BLUE}Auto Fixer:${NC} Every 2 hours"
echo -e "${BLUE}Log Cleaner:${NC} Daily at 2 AM"
echo -e "${BLUE}App Restart:${NC} Daily at 4 AM"

# Create a quick test of the automation system
print_header "🧪 Testing Automation System..."

# Test error monitor
print_status "Testing error monitor..."
if pm2 list | grep -q "error-monitor.*online"; then
    print_status "Error monitor is running"
else
    print_warning "Error monitor is not running"
fi

# Test health checker
print_status "Testing health checker..."
if pm2 list | grep -q "health-checker.*online"; then
    print_status "Health checker is running"
else
    print_warning "Health checker is not running"
fi

# Show recent logs
print_header "📋 Recent Logs:"
if [ -f "logs/error-monitor.log" ]; then
    echo -e "${GREEN}Error Monitor Logs:${NC}"
    tail -5 logs/error-monitor.log 2>/dev/null || echo "No error monitor logs yet"
fi

if [ -f "logs/health-checker.log" ]; then
    echo -e "${GREEN}Health Checker Logs:${NC}"
    tail -5 logs/health-checker.log 2>/dev/null || echo "No health checker logs yet"
fi

# Final status
print_header "✅ PM2 Automation System Started Successfully!"
echo ""
echo -e "${GREEN}The following automation processes are now running:${NC}"
echo -e "  • ${BLUE}zion-website${NC} - Main application"
echo -e "  • ${BLUE}error-monitor${NC} - Monitors and detects errors"
echo -e "  • ${BLUE}health-checker${NC} - Performs health checks"
echo -e "  • ${BLUE}auto-fixer${NC} - Automatically fixes detected errors"
echo -e "  • ${BLUE}log-cleaner${NC} - Manages log files and cleanup"
echo -e "  • ${BLUE}health-endpoint${NC} - Provides health check endpoint"
echo ""
echo -e "${GREEN}Log files are stored in:${NC} ./logs/"
echo -e "${GREEN}Error reports are stored in:${NC} ./error-reports/"
echo ""
echo -e "${YELLOW}To monitor the system:${NC}"
echo -e "  pm2 monit           - Real-time monitoring dashboard"
echo -e "  pm2 logs            - View all logs"
echo -e "  pm2 logs <app-name> - View specific app logs"
echo ""
echo -e "${YELLOW}To manage the system:${NC}"
echo -e "  pm2 restart all     - Restart all processes"
echo -e "  pm2 stop all        - Stop all processes"
echo -e "  pm2 delete all      - Delete all processes"
echo ""
echo "🎉 Your project now has automated error monitoring and fixing!"

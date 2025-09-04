#!/bin/bash

# Error Automation System Startup Script
# This script starts the comprehensive PM2 error automation system

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
    echo -e "${BLUE}[$(date '+%Y-%m-%d %H:%M:%S')]${NC} $1"
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

# Check if we're in the project directory
if [ ! -f "package.json" ]; then
    print_error "package.json not found. Please run this script from the project root directory."
    exit 1
fi

# Create necessary directories
print_status "Creating necessary directories..."
mkdir -p automation/logs
mkdir -p error-reports
mkdir -p reports

print_success "Directories created"

# Install dependencies if needed
if [ ! -d "node_modules" ]; then
    print_status "Installing dependencies..."
    npm install --legacy-peer-deps
    print_success "Dependencies installed"
fi

# Stop any existing PM2 processes
print_status "Stopping existing PM2 processes..."
pm2 stop ecosystem.error-automation.config.cjs 2>/dev/null || true
pm2 delete ecosystem.error-automation.config.cjs 2>/dev/null || true

# Install PM2 logrotate module
print_status "Installing PM2 logrotate module..."
pm2 install pm2-logrotate 2>/dev/null || true

# Configure PM2 logrotate
print_status "Configuring PM2 logrotate..."
pm2 set pm2-logrotate:max_size 10M 2>/dev/null || true
pm2 set pm2-logrotate:retain 30 2>/dev/null || true
pm2 set pm2-logrotate:compress true 2>/dev/null || true
pm2 set pm2-logrotate:workerInterval 60 2>/dev/null || true
pm2 set pm2-logrotate:rotateInterval '0 0 * * *' 2>/dev/null || true

print_success "PM2 logrotate configured"

# Start the error automation system
print_status "Starting Error Automation System with PM2..."
pm2 start ecosystem.error-automation.config.cjs --update-env

# Wait a moment for processes to start
sleep 3

# Check PM2 status
print_status "Checking PM2 status..."
pm2 status

# Show logs
print_status "Recent logs from error automation processes:"
pm2 logs --lines 20

# Create a monitoring script
cat > monitor-error-automation.sh << 'EOF'
#!/bin/bash
echo "🔍 Error Automation System Status:"
echo "=================================="
pm2 status
echo ""
echo "📊 Recent Error Reports:"
if [ -d "error-reports" ]; then
    ls -la error-reports/ | head -10
fi
echo ""
echo "📋 Recent Logs:"
pm2 logs --lines 10
EOF

chmod +x monitor-error-automation.sh

# Create a stop script
cat > stop-error-automation.sh << 'EOF'
#!/bin/bash
echo "🛑 Stopping Error Automation System..."
pm2 stop ecosystem.error-automation.config.cjs
pm2 delete ecosystem.error-automation.config.cjs
echo "✅ Error Automation System stopped"
EOF

chmod +x stop-error-automation.sh

# Create a restart script
cat > restart-error-automation.sh << 'EOF'
#!/bin/bash
echo "🔄 Restarting Error Automation System..."
pm2 restart ecosystem.error-automation.config.cjs
echo "✅ Error Automation System restarted"
EOF

chmod +x restart-error-automation.sh

print_success "Error Automation System started successfully!"
echo ""
echo "📋 Available commands:"
echo "  ./monitor-error-automation.sh  - Monitor system status and logs"
echo "  ./stop-error-automation.sh     - Stop the automation system"
echo "  ./restart-error-automation.sh  - Restart the automation system"
echo "  pm2 logs                       - View real-time logs"
echo "  pm2 status                     - View process status"
echo ""
echo "🔧 The system will automatically:"
echo "  • Detect TypeScript, ESLint, Build, and Dependency errors"
echo "  • Apply intelligent fixes to common issues"
echo "  • Generate detailed reports in error-reports/"
echo "  • Monitor system health continuously"
echo ""
print_success "Error Automation System is now running and monitoring your project!"
#!/bin/bash

# Error Automation System Startup Script
# This script initializes and starts the comprehensive PM2 error automation system

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

# Check if we're in the right directory
if [ ! -f "package.json" ]; then
    print_error "package.json not found. Please run this script from the project root."
    exit 1
fi

print_status "Setting up Error Automation System..."

# Create necessary directories
print_status "Creating automation directories..."
mkdir -p automation/logs
mkdir -p error-reports
mkdir -p reports

# Install dependencies if needed
if [ ! -d "node_modules" ]; then
    print_status "Installing dependencies..."
    npm install
fi

# Install PM2 globally if not already installed
if ! command -v pm2 &> /dev/null; then
    print_status "Installing PM2 globally..."
    npm install -g pm2
fi

# Setup PM2 logrotate
print_status "Setting up PM2 logrotate..."
pm2 install pm2-logrotate || true
pm2 set pm2-logrotate:max_size 10M
pm2 set pm2-logrotate:retain 30
pm2 set pm2-logrotate:compress true
pm2 set pm2-logrotate:workerInterval 60
pm2 set pm2-logrotate:rotateInterval '0 0 * * *'

# Stop any existing PM2 processes
print_status "Stopping existing PM2 processes..."
pm2 stop all || true
pm2 delete all || true

# Start the error automation system
print_status "Starting Error Automation System with PM2..."
pm2 start ecosystem-error-automation.config.cjs --update-env

# Save PM2 configuration
print_status "Saving PM2 configuration..."
pm2 save

# Setup PM2 startup script
print_status "Setting up PM2 startup script..."
pm2 startup || true

# Display status
print_status "Error Automation System Status:"
pm2 status

print_status "PM2 Logs:"
pm2 logs --lines 10

# Create a monitoring script
cat > monitor-error-automation.sh << 'EOF'
#!/bin/bash

# Error Automation Monitoring Script

echo "🔍 Error Automation System Status:"
echo "=================================="

# Show PM2 status
pm2 status

echo ""
echo "📊 Recent Logs:"
echo "==============="

# Show recent logs from key processes
echo "Enhanced Error Fixer:"
pm2 logs enhanced-error-fixer --lines 5 --nostream

echo ""
echo "TypeScript Error Monitor:"
pm2 logs typescript-error-monitor --lines 5 --nostream

echo ""
echo "Master Error Controller:"
pm2 logs master-error-controller --lines 5 --nostream

echo ""
echo "📈 Error Reports:"
echo "================="

# Show recent error reports
if [ -d "error-reports" ]; then
    echo "Recent error fixer reports:"
    ls -la error-reports/ | head -5
fi

if [ -d "reports" ]; then
    echo "Recent automation reports:"
    ls -la reports/ | head -5
fi

echo ""
echo "💾 Disk Usage:"
echo "=============="
du -sh automation/logs/ 2>/dev/null || echo "No logs directory found"
du -sh error-reports/ 2>/dev/null || echo "No error reports directory found"
EOF

chmod +x monitor-error-automation.sh

# Create a restart script
cat > restart-error-automation.sh << 'EOF'
#!/bin/bash

# Error Automation Restart Script

echo "🔄 Restarting Error Automation System..."

# Stop all processes
pm2 stop all

# Delete all processes
pm2 delete all

# Start the system again
pm2 start ecosystem-error-automation.config.cjs --update-env

# Save configuration
pm2 save

echo "✅ Error Automation System restarted successfully!"
pm2 status
EOF

chmod +x restart-error-automation.sh

# Create a stop script
cat > stop-error-automation.sh << 'EOF'
#!/bin/bash

# Error Automation Stop Script

echo "🛑 Stopping Error Automation System..."

# Stop all processes
pm2 stop all

# Delete all processes
pm2 delete all

echo "✅ Error Automation System stopped successfully!"
EOF

chmod +x stop-error-automation.sh

print_success "Error Automation System started successfully!"
print_status "System includes:"
echo "  • Enhanced Error Fixer (every 5 minutes)"
echo "  • TypeScript Error Monitor (every 10 minutes)"
echo "  • ESLint Error Fixer (every 15 minutes)"
echo "  • Comprehensive Error Fixer (every 30 minutes)"
echo "  • JSX Error Fixer (every 20 minutes)"
echo "  • Master Error Controller (every 10 minutes)"
echo "  • Error Analytics Dashboard (every hour)"
echo "  • Predictive Issue Detection (every 2 hours)"
echo "  • Continuous Build Test (every hour)"
echo "  • Quality Checks (every 3 hours)"
echo "  • Security Audit (every 4 hours)"
echo "  • Performance Monitor (every 2 hours)"
echo "  • Dependency Updates (every 6 hours)"
echo "  • Link Checker (every 2 hours)"
echo "  • Sitemap Runner (every 6 hours)"
echo "  • AI Code Review (every 4 hours)"
echo "  • Smart Dependency Intelligence (every 6 hours)"
echo "  • Intelligent Build Pipeline (every 8 hours)"

print_status "Available commands:"
echo "  • ./monitor-error-automation.sh - Monitor system status"
echo "  • ./restart-error-automation.sh - Restart the system"
echo "  • ./stop-error-automation.sh - Stop the system"
echo "  • pm2 status - Show PM2 status"
echo "  • pm2 logs - Show all logs"
echo "  • pm2 logs [process-name] - Show specific process logs"

print_success "Error Automation System is now running and will automatically fix errors!"
print_warning "Check the logs in automation/logs/ for detailed information"
print_warning "Error reports are saved in error-reports/ directory"
#!/bin/bash

# Enhanced Error Fixing Automation Startup Script
# This script starts the comprehensive error fixing automation system

set -e

echo "🚀 Starting Enhanced Error Fixing Automation System..."

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

# Create necessary directories
print_status "Creating log directories..."
mkdir -p logs
mkdir -p error-reports
mkdir -p automation/logs

# Check if PM2 is installed
if ! command -v pm2 &> /dev/null; then
    print_warning "PM2 not found. Installing PM2..."
    npm install -g pm2
fi

# Install dependencies if needed
if [ ! -d "node_modules" ]; then
    print_status "Installing dependencies..."
    npm install
fi

# Install missing automation dependencies
print_status "Installing automation dependencies..."
npm install --save-dev glob @eslint/js globals eslint-plugin-react eslint-plugin-react-hooks eslint-plugin-react-refresh @typescript-eslint/eslint-plugin @typescript-eslint/parser

# Stop any existing PM2 processes
print_status "Stopping existing PM2 processes..."
pm2 stop ecosystem-enhanced-error-fixing.config.cjs 2>/dev/null || true
pm2 delete ecosystem-enhanced-error-fixing.config.cjs 2>/dev/null || true

# Start the enhanced error fixing automation
print_status "Starting Enhanced Error Fixing Automation..."
pm2 start ecosystem-enhanced-error-fixing.config.cjs --update-env

# Wait a moment for processes to start
sleep 3

# Show status
print_status "PM2 Status:"
pm2 status

# Show logs for the main error fixing automation
print_status "Enhanced Error Fixing Automation logs:"
pm2 logs enhanced-error-fixing-automation --lines 10

print_success "Enhanced Error Fixing Automation started successfully!"
print_status "The system will now automatically:"
echo "  • Fix TypeScript errors every 10 minutes"
echo "  • Fix ESLint errors every 15 minutes"
echo "  • Resolve merge conflicts every 20 minutes"
echo "  • Fix dependency issues every 30 minutes"
echo "  • Monitor build errors every 30 minutes"
echo "  • Prevent errors proactively every hour"
echo "  • Generate error analytics every 2 hours"

print_status "Useful commands:"
echo "  • pm2 status                    - Check all automation status"
echo "  • pm2 logs                      - View all logs"
echo "  • pm2 logs enhanced-error-fixing-automation - View main error fixing logs"
echo "  • pm2 restart enhanced-error-fixing-automation - Restart main automation"
echo "  • pm2 stop ecosystem-enhanced-error-fixing.config.cjs - Stop all automations"
echo "  • pm2 delete ecosystem-enhanced-error-fixing.config.cjs - Remove all automations"

# Create a monitoring script
cat > monitor-error-fixing.sh << 'EOF'
#!/bin/bash
echo "🔍 Monitoring Enhanced Error Fixing Automation..."
echo ""
echo "PM2 Status:"
pm2 status
echo ""
echo "Recent Error Fixing Logs:"
pm2 logs enhanced-error-fixing-automation --lines 20
echo ""
echo "Error Reports Directory:"
ls -la error-reports/ | tail -5
echo ""
echo "Recent Fixes Applied:"
if [ -f "error-reports/$(ls -t error-reports/ | head -1)" ]; then
    jq '.fixesApplied | length' "error-reports/$(ls -t error-reports/ | head -1)" 2>/dev/null || echo "No recent fixes found"
fi
EOF

chmod +x monitor-error-fixing.sh

print_success "Monitoring script created: ./monitor-error-fixing.sh"
print_success "Enhanced Error Fixing Automation is now running! 🎉"
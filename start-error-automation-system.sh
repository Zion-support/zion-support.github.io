#!/bin/bash

# Error Automation System Startup Script
# This script starts the comprehensive error fixing automation system

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

# Create logs directory
print_status "Creating logs directory..."
mkdir -p logs
mkdir -p error-reports

# Install dependencies if needed
if [ ! -d "node_modules" ]; then
    print_status "Installing dependencies..."
    npm install --legacy-peer-deps
    print_success "Dependencies installed"
fi

# Stop any existing error automation processes
print_status "Stopping existing error automation processes..."
pm2 stop ecosystem.error-automation.config.cjs 2>/dev/null || true
pm2 delete ecosystem.error-automation.config.cjs 2>/dev/null || true

# Start the error automation system
print_status "Starting error automation system..."
pm2 start ecosystem.error-automation.config.cjs --update-env

# Wait a moment for processes to start
sleep 3

# Check status
print_status "Checking automation status..."
pm2 status

# Show logs
print_status "Recent logs from error automation processes:"
echo ""

# Show logs from key processes
print_status "Console Error Fixer logs:"
pm2 logs console-error-fixer --lines 5 2>/dev/null || print_warning "No logs available yet"

echo ""
print_status "Comprehensive Error Fixer logs:"
pm2 logs error-fixing-orchestrator --lines 5 2>/dev/null || print_warning "No logs available yet"

echo ""
print_status "TypeScript Error Fixer logs:"
pm2 logs typescript-error-fixer --lines 5 2>/dev/null || print_warning "No logs available yet"

# Create monitoring script
cat > monitor-error-automation.sh << 'EOF'
#!/bin/bash
echo "🔍 Error Automation System Monitor"
echo "=================================="
echo ""
echo "PM2 Status:"
pm2 status
echo ""
echo "Recent Logs:"
pm2 logs --lines 20
echo ""
echo "Error Reports:"
ls -la error-reports/ 2>/dev/null || echo "No error reports yet"
echo ""
echo "Log Files:"
ls -la logs/ 2>/dev/null || echo "No log files yet"
EOF

chmod +x monitor-error-automation.sh

# Create quick restart script
cat > restart-error-automation.sh << 'EOF'
#!/bin/bash
echo "🔄 Restarting Error Automation System..."
pm2 restart ecosystem.error-automation.config.cjs
echo "✅ Error automation system restarted"
EOF

chmod +x restart-error-automation.sh

# Create stop script
cat > stop-error-automation.sh << 'EOF'
#!/bin/bash
echo "🛑 Stopping Error Automation System..."
pm2 stop ecosystem.error-automation.config.cjs
echo "✅ Error automation system stopped"
EOF

chmod +x stop-error-automation.sh

print_success "Error automation system started successfully!"
echo ""
echo "📋 Available commands:"
echo "  ./monitor-error-automation.sh  - Monitor the system"
echo "  ./restart-error-automation.sh  - Restart the system"
echo "  ./stop-error-automation.sh     - Stop the system"
echo "  pm2 logs                       - View all logs"
echo "  pm2 status                     - View process status"
echo ""
echo "🔄 The system will automatically:"
echo "  • Fix TypeScript errors every 10 minutes"
echo "  • Fix JSX errors every 12 minutes"
echo "  • Fix build errors every 20 minutes"
echo "  • Fix dependency issues every 30 minutes"
echo "  • Run comprehensive error fixing every 15 minutes"
echo "  • Monitor for critical errors every 3 minutes"
echo ""
print_success "Error automation system is now running and will automatically fix project errors!"
#!/bin/bash

# Enhanced Error Fixing Automation Startup Script
# This script starts the comprehensive error fixing automation system

set -e

echo "🚀 Starting Enhanced Error Fixing Automation System..."
echo "📁 Project: Zion Tech Group"
echo "⏰ Timestamp: $(date)"
echo ""

# Ensure we're in the project root
cd "$(dirname "$0")"

# Create necessary directories
echo "📁 Creating log directories..."
mkdir -p automation/logs
mkdir -p automation/reports
mkdir -p automation/backups

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

# Check if PM2 is installed
if ! command -v pm2 &> /dev/null; then
    print_warning "PM2 not found. Installing PM2..."
    npm install -g pm2
fi

# Create necessary directories
print_status "Creating automation directories..."
mkdir -p automation/logs
mkdir -p automation/reports

# Install dependencies if needed
if [ ! -d "node_modules" ]; then
    print_status "Installing dependencies..."
    npm install
fi

# Install PM2 logrotate for log management
echo "📊 Setting up PM2 logrotate..."
pm2 install pm2-logrotate || true
pm2 set pm2-logrotate:max_size 10M
pm2 set pm2-logrotate:retain 30
pm2 set pm2-logrotate:compress true
pm2 set pm2-logrotate:workerInterval 60
pm2 set pm2-logrotate:rotateInterval '0 0 * * *'

# Stop any existing PM2 processes
print_status "Stopping existing PM2 processes..."
pm2 stop ecosystem-error-fixing.config.cjs 2>/dev/null || true
pm2 delete ecosystem-error-fixing.config.cjs 2>/dev/null || true

# Start the error fixing automation
print_status "Starting error fixing automation with PM2..."
pm2 start ecosystem-error-fixing.config.cjs --update-env

# Wait a moment for processes to start
sleep 5

# Show status
echo ""
echo "📊 PM2 Status:"
pm2 status

# Show logs
print_status "Recent logs from error fixing automation:"
pm2 logs --lines 20

# Create a monitoring script
cat > monitor-error-fixing.sh << 'EOF'
#!/bin/bash
echo "🔍 Monitoring Error Fixing Automation..."
echo "========================================"
pm2 status
echo ""
echo "📊 Recent Logs:"
pm2 logs --lines 10
echo ""
echo "📈 Error Fixing Reports:"
ls -la *.json | grep -E "(error|fixing|report)" || echo "No reports found yet"
EOF

chmod +x monitor-error-fixing.sh

# Create a stop script
cat > stop-error-fixing.sh << 'EOF'
#!/bin/bash
echo "🛑 Stopping Error Fixing Automation..."
pm2 stop ecosystem-error-fixing.config.cjs
pm2 delete ecosystem-error-fixing.config.cjs
echo "✅ Error fixing automation stopped"
EOF

chmod +x stop-error-fixing.sh

# Create a restart script
cat > restart-error-fixing.sh << 'EOF'
#!/bin/bash
echo "🔄 Restarting Error Fixing Automation..."
pm2 restart ecosystem-error-fixing.config.cjs
echo "✅ Error fixing automation restarted"
EOF

chmod +x restart-error-fixing.sh

print_success "Error fixing automation system started successfully!"
print_status "Useful commands:"
echo "  ./monitor-error-fixing.sh  - Monitor the automation"
echo "  ./stop-error-fixing.sh     - Stop the automation"
echo "  ./restart-error-fixing.sh  - Restart the automation"
echo "  pm2 logs                   - View all logs"
echo "  pm2 status                 - Check process status"

print_status "The automation will now continuously fix errors in your project:"
echo "  • TypeScript errors (every 5-10 minutes)"
echo "  • ESLint errors (every 15 minutes)"
echo "  • Build errors (every 15 minutes)"
echo "  • Dependency issues (every 30 minutes)"
echo "  • Performance monitoring (every 30 minutes)"
echo "  • Code quality analysis (every hour)"
echo "  • Security scanning (every 2 hours)"
echo "  • Link health checking (every 2 hours)"
echo "  • Automated testing (every 4 hours)"
echo "  • Backup management (every 8 hours)"
echo "  • System health reporting (every hour)"

print_success "Your project errors will be automatically fixed! 🎉"

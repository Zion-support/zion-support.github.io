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
fi

# Create logs directory
print_status "Creating logs directory..."
mkdir -p automation/logs

# Stop any existing PM2 processes
print_status "Stopping existing PM2 processes..."
pm2 stop all 2>/dev/null || true
pm2 delete all 2>/dev/null || true

# Install PM2 logrotate module
print_status "Installing PM2 logrotate module..."
pm2 install pm2-logrotate || true
pm2 set pm2-logrotate:max_size 10M
pm2 set pm2-logrotate:retain 30
pm2 set pm2-logrotate:compress true
pm2 set pm2-logrotate:workerInterval 60
pm2 set pm2-logrotate:rotateInterval '0 0 * * *'

# Start the enhanced ecosystem
print_status "Starting enhanced error fixing automation ecosystem..."
pm2 start ecosystem-enhanced.config.cjs --update-env

# Wait a moment for processes to start
sleep 5

# Check status
print_status "Checking PM2 status..."
pm2 status

<<<<<<< HEAD
# Show logs for error fixing processes
print_status "Showing recent logs for error fixing processes..."
echo ""
echo "=== Master Error Fixer Logs ==="
pm2 logs master-error-fixer --lines 10 --nostream || true

echo ""
echo "=== TypeScript Error Fixer Logs ==="
pm2 logs typescript-error-fixer --lines 10 --nostream || true

echo ""
echo "=== ESLint Error Fixer Logs ==="
pm2 logs eslint-error-fixer --lines 10 --nostream || true

echo ""
echo "=== Console Error Fixer Logs ==="
pm2 logs console-error-fixer --lines 10 --nostream || true

# Save PM2 configuration
print_status "Saving PM2 configuration..."
pm2 save

# Setup PM2 startup script
print_status "Setting up PM2 startup script..."
pm2 startup || true

print_success "Enhanced Error Fixing Automation System started successfully!"
print_success "All error fixing automations are now running with PM2"

echo ""
echo "📊 Available PM2 Commands:"
echo "  pm2 status                    - Show all processes"
echo "  pm2 logs                      - Show all logs"
echo "  pm2 logs [process-name]       - Show logs for specific process"
echo "  pm2 restart [process-name]    - Restart specific process"
echo "  pm2 stop [process-name]       - Stop specific process"
echo "  pm2 delete [process-name]     - Delete specific process"
echo "  pm2 monit                     - Monitor processes in real-time"
echo "  pm2 reload all               - Reload all processes"
echo "  pm2 stop all                 - Stop all processes"
echo "  pm2 delete all               - Delete all processes"

echo ""
echo "🔧 Error Fixing Automation Schedule:"
echo "  • Console Error Fixer:        Every 10 minutes"
echo "  • TypeScript Error Fixer:     Every 15 minutes"
echo "  • ESLint Error Fixer:         Every 20 minutes"
echo "  • JSX Error Fixer:            Every 25 minutes"
echo "  • Master Error Fixer:         Every 30 minutes"
echo "  • Comprehensive Error Fixer:  Every 45 minutes"
echo "  • Build Error Detector:       Every 30 minutes"
echo "  • Error Prevention Monitor:   Every 5 minutes"
echo "  • Critical Error Alerts:      Every minute"

echo ""
echo "📁 Log files are stored in: automation/logs/"
echo "📄 Reports are generated in the project root"

print_success "Error fixing automation system is ready!"
=======
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
echo "  • TypeScript errors (every 15-30 minutes)"
echo "  • ESLint errors (every 20 minutes)"
echo "  • JSX errors (every 30 minutes)"
echo "  • Console statements (every 15 minutes)"
echo "  • Build errors (every 10 minutes)"
echo "  • Import/export errors (continuous)"
echo "  • Unused variables (continuous)"

print_success "Your project errors will be automatically fixed! 🎉"
>>>>>>> cursor/fix-project-errors-and-automate-future-fixes-1571

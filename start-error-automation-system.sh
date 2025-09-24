#!/bin/bash

# Error Automation System Startup Script
# This script initializes and starts the complete error fixing automation system

set -e

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Logging function
log() {
    echo -e "${BLUE}[$(date +'%Y-%m-%d %H:%M:%S')]${NC} $1"
}

error() {
    echo -e "${RED}[ERROR]${NC} $1"
}

success() {
    echo -e "${GREEN}[SUCCESS]${NC} $1"
}

warning() {
    echo -e "${YELLOW}[WARNING]${NC} $1"
}

# Check if we're in the right directory
if [ ! -f "package.json" ]; then
    error "package.json not found. Please run this script from the project root."
    exit 1
fi

log "Starting Error Automation System..."

# Step 1: Install dependencies
log "Installing dependencies..."
if npm install; then
    success "Dependencies installed successfully"
else
    error "Failed to install dependencies"
    exit 1
fi

# Step 2: Install PM2 globally if not already installed
log "Checking PM2 installation..."
if ! command -v pm2 &> /dev/null; then
    log "Installing PM2 globally..."
    npm install -g pm2
    success "PM2 installed successfully"
else
    success "PM2 already installed"
fi

# Step 3: Install required npm packages for automation
log "Installing automation dependencies..."
npm install --save-dev node-cron glob

# Step 4: Create necessary directories
log "Creating automation directories..."
mkdir -p automation/logs
mkdir -p automation/reports
mkdir -p scripts/automation

# Step 5: Set up PM2 logrotate
log "Configuring PM2 logrotate..."
pm2 install pm2-logrotate || true
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

print_status "Checking project structure..."

# Create necessary directories
print_status "Creating automation directories..."
mkdir -p automation/logs
mkdir -p automation/reports
mkdir -p automation/backups
mkdir -p scripts/automation

print_success "Directories created"

# Check if PM2 is installed
if ! command -v pm2 &> /dev/null; then
    print_warning "PM2 not found. Installing PM2..."
    npm install -g pm2
    print_success "PM2 installed"
else
    print_success "PM2 is already installed"
fi

# Install project dependencies if needed
if [ ! -d "node_modules" ]; then
    print_status "Installing project dependencies..."
    npm install --legacy-peer-deps
    print_success "Dependencies installed"
else
    print_status "Dependencies already installed"
fi

# Make automation scripts executable
print_status "Making automation scripts executable..."
chmod +x scripts/automation/*.cjs 2>/dev/null || true
chmod +x scripts/automation/*.js 2>/dev/null || true

# Stop any existing PM2 processes
print_status "Stopping existing PM2 processes..."
pm2 stop all 2>/dev/null || true
pm2 delete all 2>/dev/null || true

# Install PM2 logrotate if not already installed
echo "📦 Setting up PM2 logrotate..."
pm2 install pm2-logrotate 2>/dev/null || true
pm2 set pm2-logrotate:max_size 10M
pm2 set pm2-logrotate:retain 30
pm2 set pm2-logrotate:compress true
pm2 set pm2-logrotate:workerInterval 60
pm2 set pm2-logrotate:rotateInterval '0 0 * * *'

# Step 6: Stop any existing PM2 processes
log "Stopping existing PM2 processes..."
pm2 stop all || true
pm2 delete all || true

# Step 7: Start the error automation system
log "Starting error automation system..."
pm2 start ecosystem-error-automation.config.cjs --update-env

# Step 8: Save PM2 configuration
log "Saving PM2 configuration..."
pm2 save

# Step 9: Set up PM2 startup script
log "Setting up PM2 startup script..."
pm2 startup || true

# Step 10: Display status
log "Displaying PM2 status..."
pm2 status

# Step 11: Show logs
log "Recent logs:"
pm2 logs --lines 20

# Step 12: Create management scripts
log "Creating management scripts..."

# Create start script
cat > start-error-automation.sh << 'EOF'
#!/bin/bash
pm2 start ecosystem-error-automation.config.cjs --update-env
pm2 status
EOF
chmod +x start-error-automation.sh

# Create stop script
cat > stop-error-automation.sh << 'EOF'
#!/bin/bash
pm2 stop ecosystem-error-automation.config.cjs
pm2 status
EOF
chmod +x stop-error-automation.sh

# Create restart script
cat > restart-error-automation.sh << 'EOF'
#!/bin/bash
pm2 restart ecosystem-error-automation.config.cjs --update-env
pm2 status
EOF
chmod +x restart-error-automation.sh

# Create logs script
cat > view-error-automation-logs.sh << 'EOF'
#!/bin/bash
pm2 logs --lines 100
EOF
chmod +x view-error-automation-logs.sh

# Create status script
cat > error-automation-status.sh << 'EOF'
#!/bin/bash
echo "=== PM2 Status ==="
pm2 status
echo ""
echo "=== Recent Logs ==="
pm2 logs --lines 20
EOF
chmod +x error-automation-status.sh

success "Error Automation System started successfully!"

# Display helpful information
echo ""
echo "=== Error Automation System Management ==="
echo "Start automation:   ./start-error-automation.sh"
echo "Stop automation:    ./stop-error-automation.sh"
echo "Restart automation: ./restart-error-automation.sh"
echo "View logs:          ./view-error-automation-logs.sh"
echo "Check status:       ./error-automation-status.sh"
echo ""
echo "=== PM2 Commands ==="
echo "View all processes: pm2 status"
echo "View logs:          pm2 logs"
echo "Monitor:            pm2 monit"
echo "Restart all:        pm2 restart all"
echo "Stop all:           pm2 stop all"
echo ""

# Run initial error check
log "Running initial error check..."
if node scripts/automation/comprehensive-error-fixer-enhanced.cjs; then
    success "Initial error check completed"
else
    warning "Initial error check encountered issues"
fi

success "Error Automation System is now running and monitoring your project!"
success "The system will automatically detect and fix errors every few minutes."# Start the error automation system
print_status "Starting Error Automation System with PM2..."

# Start the main error automation ecosystem
if [ -f "ecosystem.error-automation.config.cjs" ]; then
    pm2 start ecosystem.error-automation.config.cjs
    print_success "Error automation ecosystem started"
else
    print_error "ecosystem.error-automation.config.cjs not found"
    exit 1
fi

# Wait a moment for processes to start
sleep 3

# Check PM2 status
print_status "Checking PM2 status..."
pm2 status

# Show logs
print_status "Recent logs:"
pm2 logs --lines 10

# Create a monitoring script
cat > monitor-error-automation.sh << 'EOF'
#!/bin/bash

echo "🔍 Error Automation System Monitor"
echo "=================================="

echo ""
echo "📊 PM2 Status:"
pm2 status

echo ""
echo "📈 Recent Logs:"
pm2 logs --lines 20

echo ""
echo "📋 Error Reports:"
if [ -f "automation/reports/error-report.json" ]; then
    echo "Error Report: automation/reports/error-report.json"
fi

if [ -f "automation/reports/coordination-report.json" ]; then
    echo "Coordination Report: automation/reports/coordination-report.json"
fi

if [ -f "automation/reports/health-report.json" ]; then
    echo "Health Report: automation/reports/health-report.json"
fi

echo ""
echo "🛠️  Quick Commands:"
echo "  pm2 status                    - Show all processes"
echo "  pm2 logs                      - Show all logs"
echo "  pm2 restart all               - Restart all processes"
echo "  pm2 stop all                  - Stop all processes"
echo "  pm2 delete all                - Delete all processes"
echo "  node scripts/automation/project-error-automation.cjs  - Run manual error check"
echo "  node scripts/automation/master-error-coordinator.cjs  - Run manual coordination"
EOF

chmod +x monitor-error-automation.sh

# Create a quick fix script
cat > quick-fix-errors.sh << 'EOF'
#!/bin/bash

echo "🔧 Quick Error Fix Script"
echo "========================="

echo "Running quick error check..."
node scripts/automation/quick-error-checker.cjs

echo ""
echo "Running TypeScript error fix..."
node scripts/automation/typescript-error-fixer.cjs

echo ""
echo "Running linting fix..."
node scripts/automation/linting-error-fixer.cjs

echo ""
echo "✅ System is ready!"
>>>>>>> main
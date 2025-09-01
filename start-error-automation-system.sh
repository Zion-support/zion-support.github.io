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
success "The system will automatically detect and fix errors every few minutes."
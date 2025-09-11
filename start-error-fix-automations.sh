#!/bin/bash

# Error Fix Automation Startup Script
# This script installs dependencies and starts all PM2 error fixing automations

set -e

echo "🚀 Starting Error Fix Automation System..."

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

print_status "Project root confirmed: $(pwd)"

# Step 1: Install dependencies
print_status "Installing project dependencies..."
if npm install; then
    print_success "Dependencies installed successfully"
else
    print_error "Failed to install dependencies"
    exit 1
fi

# Step 2: Install PM2 globally if not present
print_status "Checking PM2 installation..."
if ! command -v pm2 &> /dev/null; then
    print_status "PM2 not found. Installing globally..."
    if npm install -g pm2; then
        print_success "PM2 installed successfully"
    else
        print_error "Failed to install PM2"
        exit 1
    fi
else
    print_success "PM2 already installed"
fi

# Step 3: Check if PM2 is running
print_status "Checking PM2 status..."
if pm2 ping &> /dev/null; then
    print_success "PM2 daemon is running"
else
    print_status "Starting PM2 daemon..."
    pm2 start
fi

# Step 4: Stop any existing automations
print_status "Stopping existing automations..."
pm2 stop all 2>/dev/null || true
pm2 delete all 2>/dev/null || true

# Step 5: Start the error fix automation orchestrator
print_status "Starting Error Fix Automation Orchestrator..."
if pm2 start ecosystem.config.cjs --only error-fix-orchestrator; then
    print_success "Error Fix Orchestrator started successfully"
else
    print_error "Failed to start Error Fix Orchestrator"
    exit 1
fi

# Step 6: Start the core error fixer
print_status "Starting Core Error Fixer..."
if pm2 start ecosystem.config.cjs --only core-error-fixer; then
    print_success "Core Error Fixer started successfully"
else
    print_error "Failed to start Core Error Fixer"
    exit 1
fi

# Step 7: Start other error fixing automations
print_status "Starting additional error fixing automations..."

# Start TypeScript syntax fixer
if pm2 start ecosystem.config.cjs --only typescript-syntax-fixer; then
    print_success "TypeScript Syntax Fixer started"
else
    print_warning "Failed to start TypeScript Syntax Fixer"
fi

# Start console error fixer
if pm2 start ecosystem.config.cjs --only console-error-fixer; then
    print_success "Console Error Fixer started"
else
    print_warning "Failed to start Console Error Fixer"
fi

# Start quality checks
if pm2 start ecosystem.config.cjs --only quality-checks; then
    print_success "Quality Checks started"
else
    print_warning "Failed to start Quality Checks"
fi

# Step 8: Start the intelligent predictive monitor
print_status "Starting Intelligent Predictive Monitor..."
if pm2 start ecosystem.config.cjs --only intelligent-predictive-monitor; then
    print_success "Intelligent Predictive Monitor started"
else
    print_warning "Failed to start Intelligent Predictive Monitor"
fi

# Step 9: Save PM2 configuration
print_status "Saving PM2 configuration..."
pm2 save

# Step 10: Set up PM2 startup script
print_status "Setting up PM2 startup script..."
pm2 startup

# Step 11: Display status
print_status "Current PM2 processes:"
pm2 list

# Step 12: Show logs
print_status "Showing recent logs (press Ctrl+C to exit):"
echo "----------------------------------------"
pm2 logs --lines 20

print_success "🎉 Error Fix Automation System started successfully!"
print_status "All automations are now running and will automatically fix errors"
print_status "Check PM2 status with: pm2 list"
print_status "View logs with: pm2 logs"
print_status "Monitor with: pm2 monit"

# Optional: Open PM2 monitoring interface
read -p "Would you like to open the PM2 monitoring interface? (y/n): " -n 1 -r
echo
if [[ $REPLY =~ ^[Yy]$ ]]; then
    print_status "Opening PM2 monitoring interface..."
    pm2 monit
fi
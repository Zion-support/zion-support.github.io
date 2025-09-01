#!/bin/bash

# Error Automation Stop Script
# This script stops the comprehensive error fixing automation system

set -e

echo "🛑 Stopping Error Automation System..."

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

# Check if PM2 is installed
if ! command -v pm2 &> /dev/null; then
    print_error "PM2 is not installed. Nothing to stop."
    exit 1
fi

# Stop all PM2 processes
print_status "Stopping all PM2 processes..."
pm2 stop all 2>/dev/null || print_warning "No PM2 processes to stop"

# Delete all PM2 processes
print_status "Deleting all PM2 processes..."
pm2 delete all 2>/dev/null || print_warning "No PM2 processes to delete"

# Save PM2 configuration
print_status "Saving PM2 configuration..."
pm2 save 2>/dev/null || print_warning "No PM2 configuration to save"

# Show final status
print_status "Final PM2 status:"
pm2 status

print_success "Error automation system stopped successfully!"
echo ""
echo "📋 To restart the system, run:"
echo "  ./start-error-automation.sh"
echo ""
echo "📋 To restart individual processes, run:"
echo "  pm2 start ecosystem-error-automation.config.cjs"
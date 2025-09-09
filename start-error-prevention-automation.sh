#!/bin/bash

# Error Prevention Automation Startup Script
# This script starts the comprehensive error prevention automation system using PM2

set -e

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Project root directory
PROJECT_ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
cd "$PROJECT_ROOT"

echo -e "${BLUE}🚀 Starting Error Prevention Automation System...${NC}"
echo "Project root: $PROJECT_ROOT"
echo ""

# Check if PM2 is installed
if ! command -v pm2 &> /dev/null; then
    echo -e "${RED}❌ PM2 is not installed. Installing PM2 globally...${NC}"
    npm install -g pm2
fi

# Check if required dependencies are installed
echo -e "${BLUE}📦 Checking dependencies...${NC}"
if [ ! -d "node_modules" ]; then
    echo -e "${YELLOW}⚠️  Node modules not found. Installing dependencies...${NC}"
    npm install
fi

# Create necessary directories
echo -e "${BLUE}📁 Creating necessary directories...${NC}"
mkdir -p logs
mkdir -p reports
mkdir -p scripts/automation

# Check if automation scripts exist
echo -e "${BLUE}🔍 Checking automation scripts...${NC}"
REQUIRED_SCRIPTS=(
    "scripts/automation/error-prevention-orchestrator.cjs"
    "scripts/automation/typescript-error-fixer.cjs"
    "scripts/automation/linting-fix-automation.cjs"
)

for script in "${REQUIRED_SCRIPTS[@]}"; do
    if [ ! -f "$script" ]; then
        echo -e "${RED}❌ Required script not found: $script${NC}"
        exit 1
    fi
done

echo -e "${GREEN}✅ All required scripts found${NC}"

# Stop any existing PM2 processes
echo -e "${BLUE}🛑 Stopping existing PM2 processes...${NC}"
pm2 stop all 2>/dev/null || true
pm2 delete all 2>/dev/null || true

# Start the error prevention automation system
echo -e "${BLUE}🚀 Starting PM2 error prevention automation...${NC}"
pm2 start ecosystem-error-prevention-automation.cjs

# Wait a moment for processes to start
sleep 3

# Check status
echo -e "${BLUE}📊 Checking PM2 status...${NC}"
pm2 status

# Show logs
echo -e "${BLUE}📋 Recent logs from error prevention orchestrator:${NC}"
pm2 logs error-prevention-orchestrator --lines 10

echo ""
echo -e "${GREEN}✅ Error Prevention Automation System started successfully!${NC}"
echo ""
echo -e "${BLUE}📋 Available commands:${NC}"
echo "  pm2 status                    - Show all processes status"
echo "  pm2 logs                      - Show all logs"
echo "  pm2 logs [process-name]       - Show logs for specific process"
echo "  pm2 monit                     - Open PM2 monitoring dashboard"
echo "  pm2 restart all               - Restart all processes"
echo "  pm2 stop all                  - Stop all processes"
echo "  pm2 delete all                - Remove all processes"
echo ""
echo -e "${BLUE}🔧 Individual automation commands:${NC}"
echo "  pm2 restart error-prevention-orchestrator    - Restart main orchestrator"
echo "  pm2 restart typescript-error-fixer           - Restart TypeScript fixer"
echo "  pm2 restart linting-error-fixer              - Restart linting fixer"
echo ""
echo -e "${BLUE}📁 Log files location:${NC}"
echo "  ./logs/ - All automation logs"
echo "  ./reports/ - Generated reports"
echo ""
echo -e "${GREEN}🎯 The system will now automatically:${NC}"
echo "  • Monitor for TypeScript errors every minute"
echo "  • Monitor for linting errors every 2 minutes"
echo "  • Run comprehensive scans every 5 minutes"
echo "  • Monitor file corruption every 30 seconds"
echo "  • Generate reports every 15 minutes"
echo ""
echo -e "${YELLOW}💡 Tip: Run 'pm2 monit' to see real-time monitoring dashboard${NC}"
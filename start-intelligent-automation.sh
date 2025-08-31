#!/bin/bash

# 🚀 Zion.app Intelligent PM2 Automation System - Quick Start
# This script launches all the new intelligent automation systems

set -e

# Colors for output
GREEN='\033[0;32m'
BLUE='\033[0;34m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
NC='\033[0m' # No Color

echo -e "${BLUE}🚀 Zion.app Intelligent PM2 Automation System${NC}"
echo "=================================================="
echo ""

# Check if PM2 is installed
if ! command -v pm2 &> /dev/null; then
    echo -e "${RED}❌ PM2 is not installed. Please install it first:${NC}"
    echo "npm install -g pm2"
    exit 1
fi

# Check if we're in the project root
if [ ! -f "ecosystem.config.cjs" ]; then
    echo -e "${RED}❌ Please run this script from the project root directory${NC}"
    exit 1
fi

# Check if logs directory exists
if [ ! -d "logs" ]; then
    echo -e "${YELLOW}📁 Creating logs directory...${NC}"
    mkdir -p logs
fi

echo -e "${BLUE}🔍 Checking current PM2 status...${NC}"
pm2 status

echo ""
echo -e "${BLUE}🚀 Starting Intelligent PM2 Automation System...${NC}"
echo ""

# Start the ecosystem
echo -e "${YELLOW}📦 Starting all automation processes...${NC}"
pm2 start ecosystem.config.cjs

echo ""
echo -e "${GREEN}✅ Intelligent Automation System started successfully!${NC}"
echo ""

# Show status
echo -e "${BLUE}📊 Current PM2 Status:${NC}"
pm2 status

echo ""
echo -e "${BLUE}🔧 Available Commands:${NC}"
echo "  pm2 monit                    - Monitor all processes"
echo "  pm2 logs                     - View all logs"
echo "  pm2 logs [process-name]      - View specific process logs"
echo "  pm2 restart [process-name]   - Restart specific process"
echo "  pm2 stop [process-name]      - Stop specific process"
echo "  pm2 delete [process-name]    - Remove specific process"
echo "  pm2 delete all               - Remove all processes"
echo ""

# Show intelligent automation processes
echo -e "${BLUE}🧠 Intelligent Automation Processes:${NC}"
echo "  • ai-code-review-automation      - AI-powered code review"
echo "  • smart-dependency-intelligence  - Smart dependency management"
echo "  • predictive-issue-detection     - Predictive issue detection"
echo "  • intelligent-build-pipeline     - Intelligent build optimization"
echo ""

# Show monitoring options
echo -e "${BLUE}📈 Monitoring Options:${NC}"
echo "  • pm2 monit                     - Real-time monitoring dashboard"
echo "  • pm2 logs --lines 100          - Last 100 log lines"
echo "  • pm2 logs --err                - Error logs only"
echo "  • pm2 logs --out                - Output logs only"
echo ""

# Show log file locations
echo -e "${BLUE}📁 Log Files Location:${NC}"
echo "  • ./logs/ai-code-review.log"
echo "  • ./logs/smart-dependency-intelligence.log"
echo "  • ./logs/predictive-issue-detection.log"
echo "  • ./logs/intelligent-build-pipeline.log"
echo ""

# Show automation schedules
echo -e "${BLUE}⏰ Automation Schedules:${NC}"
echo "  • AI Code Review:           Every 4 hours"
echo "  • Smart Dependency:         Every 6 hours"
echo "  • Predictive Detection:     Every 3 hours"
echo "  • Build Pipeline:           Every 8 hours"
echo ""

# Show manual execution options
echo -e "${BLUE}🔄 Manual Execution:${NC}"
echo "  • node scripts/automation/ai-code-review-automation.cjs"
echo "  • node scripts/automation/smart-dependency-intelligence.cjs"
echo "  • node scripts/automation/predictive-issue-detection.cjs"
echo "  • node scripts/automation/intelligent-build-pipeline.cjs"
echo ""

# Show quick actions
echo -e "${BLUE}⚡ Quick Actions:${NC}"
echo "  • pm2 monit                    - Open monitoring dashboard"
echo "  • pm2 restart all              - Restart all automations"
echo "  • pm2 reload ecosystem.config.cjs - Reload configuration"
echo ""

echo -e "${GREEN}🎉 Your Intelligent PM2 Automation System is now running!${NC}"
echo ""
echo -e "${YELLOW}💡 Pro tip: Run 'pm2 monit' to see the real-time monitoring dashboard${NC}"
echo ""

# Check if user wants to open monitoring
read -p "Would you like to open the PM2 monitoring dashboard now? (y/n): " -n 1 -r
echo ""
if [[ $REPLY =~ ^[Yy]$ ]]; then
    echo -e "${BLUE}📊 Opening PM2 monitoring dashboard...${NC}"
    pm2 monit
fi

echo ""
echo -e "${GREEN}✨ Enjoy your enhanced development experience!${NC}"
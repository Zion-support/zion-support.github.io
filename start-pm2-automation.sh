#!/bin/bash

# Zion PM2 Automation System Startup Script
# This script initializes the complete PM2 automation system

set -e

# Colors for output
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
CYAN='\033[0;36m'
NC='\033[0m' # No Color

echo -e "${CYAN}🚀 Starting Zion PM2 Intelligent Automation System...${NC}"
echo ""

# Check if PM2 is installed
if ! command -v pm2 &> /dev/null; then
    echo -e "${YELLOW}⚠️  PM2 is not installed. Installing PM2...${NC}"
    npm install -g pm2
    echo -e "${GREEN}✅ PM2 installed successfully${NC}"
else
    echo -e "${GREEN}✅ PM2 is already installed${NC}"
fi

# Check if ecosystem config exists
if [[ ! -f "ecosystem.config.js" ]]; then
    echo -e "${YELLOW}⚠️  ecosystem.config.js not found. Please ensure it exists.${NC}"
    exit 1
fi

# Install dependencies
echo -e "${CYAN}📦 Installing project dependencies...${NC}"
npm run install:all

# Create necessary directories
echo -e "${CYAN}📁 Creating necessary directories...${NC}"
mkdir -p logs
mkdir -p automation

# Make scripts executable
echo -e "${CYAN}🔧 Making scripts executable...${NC}"
chmod +x pm2-manager.sh
chmod +x automation/*.js 2>/dev/null || true

# Start PM2 processes
echo -e "${CYAN}🚀 Starting PM2 processes...${NC}"
./pm2-manager.sh start dev

# Start automation processes
echo -e "${CYAN}🤖 Starting automation processes...${NC}"
./pm2-manager.sh automation start

# Start health monitoring
echo -e "${CYAN}🏥 Starting health monitoring...${NC}"
./pm2-manager.sh health start

# Start performance monitoring
echo -e "${CYAN}📊 Starting performance monitoring...${NC}"
./pm2-manager.sh performance start

# Save PM2 configuration
echo -e "${CYAN}💾 Saving PM2 configuration...${NC}"
pm2 save

# Show status
echo -e "${CYAN}📋 Current system status:${NC}"
./pm2-manager.sh status

echo ""
echo -e "${GREEN}🎉 Zion PM2 Automation System started successfully!${NC}"
echo ""
echo -e "${CYAN}📋 Available commands:${NC}"
echo "  ./pm2-manager.sh help          # Show all available commands"
echo "  ./pm2-manager.sh monit         # Open monitoring dashboard"
echo "  ./pm2-manager.sh logs          # View system logs"
echo "  ./pm2-manager.sh health check  # Run health checks"
echo "  ./pm2-manager.sh deploy dev    # Deploy to development"
echo ""
echo -e "${CYAN}🔗 Quick access:${NC}"
echo "  Frontend: http://localhost:3000"
echo "  Backend:  http://localhost:5000"
echo "  PM2 Dashboard: pm2 monit"
echo ""
echo -e "${GREEN}🚀 Your intelligent automation system is ready!${NC}"
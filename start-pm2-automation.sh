#!/bin/bash

# Zion Tech Group - PM2 Automation System Startup
# Quick access to all PM2 automation features

set -e

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
PURPLE='\033[0;35m'
CYAN='\033[0;36m'
NC='\033[0m' # No Color

echo -e "${BLUE}🚀 Zion Tech Group - PM2 Automation System${NC}"
echo "=================================================="
echo ""

# Function to show menu
show_menu() {
    echo -e "${CYAN}Available Automation Options:${NC}"
    echo "=================================="
    echo ""
    echo "1. 🚀 Start Development Environment"
    echo "2. 🚀 Start Production Deployment"
    echo "3. 🔍 Start Intelligent Monitoring"
    echo "4. 🔄 Run Development Workflow"
    echo "5. 📊 Show System Status"
    echo "6. 🛠️  Setup Environment"
    echo "7. 📚 Show Documentation"
    echo "8. 🚪 Exit"
    echo ""
}

# Function to start development environment
start_dev() {
    echo -e "${BLUE}🚀 Starting Development Environment...${NC}"
    echo ""
    ./scripts/pm2-dev.sh
}

# Function to start production deployment
start_prod() {
    echo -e "${BLUE}🚀 Starting Production Deployment...${NC}"
    echo ""
    ./scripts/pm2-prod.sh
}

# Function to start monitoring
start_monitoring() {
    echo -e "${BLUE}🔍 Starting Intelligent Monitoring...${NC}"
    echo ""
    ./scripts/pm2-monitor.sh --monitor
}

# Function to run workflow
run_workflow() {
    echo -e "${BLUE}🔄 Running Development Workflow...${NC}"
    echo ""
    ./scripts/pm2-workflow.sh --dev
}

# Function to show status
show_status() {
    echo -e "${BLUE}📊 System Status${NC}"
    echo "================"
    echo ""
    
    # Check if PM2 is running
    if command -v pm2 &> /dev/null; then
        echo -e "${GREEN}✅ PM2 is installed${NC}"
        pm2 list 2>/dev/null || echo -e "${YELLOW}⚠️  No PM2 processes running${NC}"
    else
        echo -e "${RED}❌ PM2 is not installed${NC}"
    fi
    
    echo ""
    echo -e "${CYAN}Process Status:${NC}"
    echo "=================="
    
    # Check if processes are running
    if pm2 list | grep -q "zion-frontend-dev"; then
        echo -e "${GREEN}✅ Frontend Dev: Running${NC}"
    else
        echo -e "${YELLOW}⚠️  Frontend Dev: Not running${NC}"
    fi
    
    if pm2 list | grep -q "zion-backend-dev"; then
        echo -e "${GREEN}✅ Backend Dev: Running${NC}"
    else
        echo -e "${YELLOW}⚠️  Backend Dev: Not running${NC}"
    fi
    
    echo ""
    echo -e "${CYAN}Port Status:${NC}"
    echo "=============="
    
    # Check ports
    if lsof -Pi :3000 -sTCP:LISTEN -t >/dev/null 2>&1; then
        echo -e "${GREEN}✅ Port 3000: In use (Frontend)${NC}"
    else
        echo -e "${YELLOW}⚠️  Port 3000: Available${NC}"
    fi
    
    if lsof -Pi :5000 -sTCP:LISTEN -t >/dev/null 2>&1; then
        echo -e "${GREEN}✅ Port 5000: In use (Backend)${NC}"
    else
        echo -e "${YELLOW}⚠️  Port 5000: Available${NC}"
    fi
}

# Function to setup environment
setup_environment() {
    echo -e "${BLUE}🛠️  Setting up Environment...${NC}"
    echo ""
    ./scripts/pm2-workflow.sh --setup
}

# Function to show documentation
show_documentation() {
    echo -e "${BLUE}📚 PM2 Automation Documentation${NC}"
    echo "====================================="
    echo ""
    echo -e "${CYAN}Quick Commands:${NC}"
    echo "=================="
    echo ""
    echo "Development:"
    echo "  ./scripts/pm2-dev.sh              # Start dev environment"
    echo "  ./scripts/pm2-workflow.sh --dev   # Run dev workflow"
    echo ""
    echo "Production:"
    echo "  ./scripts/pm2-prod.sh             # Deploy to production"
    echo "  ./scripts/pm2-workflow.sh --prod  # Run prod workflow"
    echo ""
    echo "Monitoring:"
    echo "  ./scripts/pm2-monitor.sh --monitor    # Start monitoring"
    echo "  ./scripts/pm2-monitor.sh --health     # Health check"
    echo "  ./scripts/pm2-monitor.sh --maintenance # Auto maintenance"
    echo ""
    echo "Workflow:"
    echo "  ./scripts/pm2-workflow.sh --interactive # Interactive mode"
    echo "  ./scripts/pm2-workflow.sh --quality    # Code quality check"
    echo "  ./scripts/pm2-workflow.sh --fix        # Auto-fix issues"
    echo ""
    echo -e "${CYAN}Useful PM2 Commands:${NC}"
    echo "========================"
    echo "  pm2 list                           # List all processes"
    echo "  pm2 logs                           # View all logs"
    echo "  pm2 monit                          # Monitor processes"
    echo "  pm2 restart all                    # Restart all processes"
    echo "  pm2 stop all                       # Stop all processes"
    echo "  pm2 delete all                     # Remove all processes"
    echo ""
    echo -e "${YELLOW}For detailed documentation, see: PM2_AUTOMATION_README.md${NC}"
}

# Function to check system requirements
check_requirements() {
    echo -e "${BLUE}🔍 Checking System Requirements...${NC}"
    echo ""
    
    local missing_deps=()
    
    # Check Node.js
    if command -v node &> /dev/null; then
        echo -e "${GREEN}✅ Node.js: $(node --version)${NC}"
    else
        echo -e "${RED}❌ Node.js: Not installed${NC}"
        missing_deps+=("nodejs")
    fi
    
    # Check npm
    if command -v npm &> /dev/null; then
        echo -e "${GREEN}✅ npm: $(npm --version)${NC}"
    else
        echo -e "${RED}❌ npm: Not installed${NC}"
        missing_deps+=("npm")
    fi
    
    # Check PM2
    if command -v pm2 &> /dev/null; then
        echo -e "${GREEN}✅ PM2: $(pm2 --version)${NC}"
    else
        echo -e "${YELLOW}⚠️  PM2: Not installed (will install automatically)${NC}"
    fi
    
    # Check curl
    if command -v curl &> /dev/null; then
        echo -e "${GREEN}✅ curl: Available${NC}"
    else
        echo -e "${RED}❌ curl: Not installed${NC}"
        missing_deps+=("curl")
    fi
    
    # Check jq
    if command -v jq &> /dev/null; then
        echo -e "${GREEN}✅ jq: Available${NC}"
    else
        echo -e "${YELLOW}⚠️  jq: Not installed (will install automatically)${NC}"
    fi
    
    if [ ${#missing_deps[@]} -gt 0 ]; then
        echo ""
        echo -e "${RED}❌ Missing dependencies: ${missing_deps[*]}${NC}"
        echo "Please install missing dependencies and try again."
        return 1
    fi
    
    echo ""
    echo -e "${GREEN}✅ All system requirements met${NC}"
    return 0
}

# Main menu loop
main() {
    # Check requirements first
    if ! check_requirements; then
        echo ""
        echo -e "${RED}❌ System requirements not met. Please fix and try again.${NC}"
        exit 1
    fi
    
    echo ""
    echo -e "${GREEN}✅ System ready for PM2 automation!${NC}"
    echo ""
    
    while true; do
        show_menu
        read -p "Enter your choice (1-8): " choice
        
        case $choice in
            1)
                start_dev
                ;;
            2)
                start_prod
                ;;
            3)
                start_monitoring
                ;;
            4)
                run_workflow
                ;;
            5)
                show_status
                ;;
            6)
                setup_environment
                ;;
            7)
                show_documentation
                ;;
            8)
                echo -e "${GREEN}👋 Thank you for using Zion Tech Group PM2 Automation!${NC}"
                exit 0
                ;;
            *)
                echo -e "${RED}❌ Invalid choice. Please enter a number between 1-8.${NC}"
                ;;
        esac
        
        echo ""
        read -p "Press Enter to continue..."
        echo ""
    done
}

# Run main function
main "$@"
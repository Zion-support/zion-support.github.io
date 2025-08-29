#!/bin/bash

# Zion Console Error Capture Quick Start Script
# This script provides easy access to the console error capture automation

set -e

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Project root directory
PROJECT_ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
AUTOMATION_DIR="$PROJECT_ROOT/automation"

echo -e "${BLUE}🚀 Zion Console Error Capture Automation${NC}"
echo -e "${BLUE}==========================================${NC}"
echo ""

# Check if automation directory exists
if [ ! -d "$AUTOMATION_DIR" ]; then
    echo -e "${RED}❌ Automation directory not found!${NC}"
    echo "Please run the integration first:"
    echo "  node automation/integrate-with-zion.js"
    exit 1
fi

# Function to show menu
show_menu() {
    echo -e "${YELLOW}Select an option:${NC}"
    echo ""
    echo "1) 🎯 Run automated error capture (headless)"
    echo "2) 🔍 Run error capture with browser visible"
    echo "3) 📊 Generate error report from existing data"
    echo "4) 🧪 Test with local test page"
    echo "5) 📝 Show help and options"
    echo "6) 🚪 Exit"
    echo ""
    read -p "Enter your choice (1-6): " choice
}

# Function to run error capture
run_error_capture() {
    local headless=$1
    echo -e "${GREEN}🔍 Starting console error capture...${NC}"
    
    cd "$AUTOMATION_DIR"
    
    if [ "$headless" = true ]; then
        echo -e "${BLUE}Running in headless mode...${NC}"
        node console-error-capture.js --headless
    else
        echo -e "${BLUE}Opening browser for visible capture...${NC}"
        node console-error-capture.js
    fi
    
    cd "$PROJECT_ROOT"
}

# Function to test with local page
test_local_page() {
    echo -e "${GREEN}🧪 Testing with local test page...${NC}"
    
    # Check if test page exists
    if [ ! -f "$AUTOMATION_DIR/test-errors.html" ]; then
        echo -e "${RED}❌ Test page not found!${NC}"
        return
    fi
    
    # Start a simple HTTP server
    echo -e "${BLUE}Starting local HTTP server...${NC}"
    echo -e "${YELLOW}Open http://localhost:8000/automation/test-errors.html in your browser${NC}"
    echo -e "${YELLOW}Press Ctrl+C to stop the server${NC}"
    
    cd "$PROJECT_ROOT"
    python3 -m http.server 8000 2>/dev/null || python -m SimpleHTTPServer 8000 2>/dev/null || echo -e "${RED}❌ Could not start HTTP server. Please install Python or use another method.${NC}"
}

# Function to show help
show_help() {
    echo -e "${BLUE}📝 Console Error Capture Help${NC}"
    echo ""
    echo -e "${GREEN}Available Commands:${NC}"
    echo "  node automation/console-error-capture.js --help"
    echo "  node automation/integrate-with-zion.js --help"
    echo ""
    echo -e "${GREEN}Quick Commands:${NC}"
    echo "  # Run automated capture"
    echo "  node automation/console-error-capture.js --headless"
    echo ""
    echo "  # Custom URLs"
    echo "  node automation/console-error-capture.js --urls \"https://example.com,https://test.com\""
    echo ""
    echo "  # Custom output directory"
    echo "  node automation/console-error-capture.js --output ./custom-reports"
    echo ""
    echo -e "${GREEN}Integration:${NC}"
    echo "  # Full integration"
    echo "  node automation/integrate-with-zion.js --full"
    echo ""
    echo "  # API only"
    echo "  node automation/integrate-with-zion.js --api-only"
    echo ""
    echo "  # React only"
    echo "  node automation/integrate-with-zion.js --react-only"
}

# Main menu loop
while true; do
    show_menu
    
    case $choice in
        1)
            run_error_capture true
            ;;
        2)
            run_error_capture false
            ;;
        3)
            echo -e "${GREEN}📊 Checking for existing error reports...${NC}"
            if [ -d "$PROJECT_ROOT/reports" ]; then
                echo -e "${BLUE}Reports directory found:${NC}"
                ls -la "$PROJECT_ROOT/reports"
            else
                echo -e "${YELLOW}No reports directory found. Run error capture first.${NC}"
            fi
            ;;
        4)
            test_local_page
            ;;
        5)
            show_help
            ;;
        6)
            echo -e "${GREEN}👋 Goodbye!${NC}"
            exit 0
            ;;
        *)
            echo -e "${RED}❌ Invalid option. Please try again.${NC}"
            ;;
    esac
    
    echo ""
    read -p "Press Enter to continue..."
    echo ""
done

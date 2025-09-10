#!/bin/bash

# 🚀 Bolt Zion PM2 Automation Startup Script
# This script helps you get started with the intelligent PM2 automation system

set -e

echo "🚀 Welcome to Bolt Zion PM2 Automation System!"
echo "================================================"
echo ""

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
check_pm2() {
    if ! command -v pm2 &> /dev/null; then
        print_warning "PM2 is not installed globally"
        echo "Installing PM2 globally..."
        npm install -g pm2
        print_success "PM2 installed successfully"
    else
        print_success "PM2 is already installed"
    fi
}

# Check if dependencies are installed
check_dependencies() {
    if [ ! -d "node_modules" ]; then
        print_status "Installing dependencies..."
        npm run install:all
        print_success "Dependencies installed successfully"
    else
        print_success "Dependencies are already installed"
    fi
}

# Create necessary directories
create_directories() {
    print_status "Creating necessary directories..."
    mkdir -p logs backups reports
    print_success "Directories created successfully"
}

# Check environment file
check_env() {
    if [ ! -f ".env" ]; then
        print_warning ".env file not found"
        echo "Creating .env file with default values..."
        cat > .env << EOF
# Environment
NODE_ENV=development

# Ports
PORT=3000
BACKEND_PORT=5000
GATEWAY_PORT=80
MONITOR_PORT=3002

# Database
DATABASE_URL=mongodb://localhost:27017/bolt-zion

# Security
JWT_SECRET=your-secret-key-change-this
CORS_ORIGIN=http://localhost:3000

# Deployment
PROD_HOST=localhost
STAGING_HOST=localhost
REPO_URL=git@github.com:your-username/bolt-zion.git
EOF
        print_success ".env file created with default values"
        print_warning "Please update the .env file with your actual values"
    else
        print_success ".env file found"
    fi
}

# Show menu
show_menu() {
    echo ""
    echo "🎯 What would you like to do?"
    echo "1) Start Development Environment (Recommended for development)"
    echo "2) Start Staging Environment"
    echo "3) Start Production Environment"
    echo "4) Start Monitoring Dashboard Only"
    echo "5) Start API Gateway Only"
    echo "6) Run QA Automation"
    echo "7) Deploy to Staging"
    echo "8) Deploy to Production"
    echo "9) Show PM2 Status"
    echo "10) Stop All Services"
    echo "11) View Logs"
    echo "12) Exit"
    echo ""
    read -p "Enter your choice (1-12): " choice
}

# Handle menu choice
handle_choice() {
    case $choice in
        1)
            print_status "Starting development environment..."
            npm run pm2:start:dev
            print_success "Development environment started!"
            echo "🌐 Frontend: http://localhost:3000"
            echo "🔧 Backend: http://localhost:5000"
            echo "📊 Monitor: http://localhost:3002/dashboard"
            ;;
        2)
            print_status "Starting staging environment..."
            npm run pm2:start:staging
            print_success "Staging environment started!"
            ;;
        3)
            print_status "Starting production environment..."
            npm run pm2:start:production
            print_success "Production environment started!"
            ;;
        4)
            print_status "Starting monitoring dashboard..."
            npm run monitor:start
            ;;
        5)
            print_status "Starting API gateway..."
            npm run gateway:start
            ;;
        6)
            print_status "Running QA automation..."
            npm run qa
            ;;
        7)
            print_status "Deploying to staging..."
            npm run deploy:staging
            ;;
        8)
            print_status "Deploying to production..."
            npm run deploy:production
            ;;
        9)
            print_status "PM2 Status:"
            npm run pm2:status
            ;;
        10)
            print_status "Stopping all services..."
            npm run pm2:stop
            print_success "All services stopped"
            ;;
        11)
            print_status "Viewing logs..."
            npm run pm2:logs
            ;;
        12)
            print_success "Goodbye! 👋"
            exit 0
            ;;
        *)
            print_error "Invalid choice. Please try again."
            ;;
    esac
}

# Main function
main() {
    print_status "Checking system requirements..."
    
    # Check Node.js version
    if ! command -v node &> /dev/null; then
        print_error "Node.js is not installed. Please install Node.js 18+ first."
        exit 1
    fi
    
    NODE_VERSION=$(node -v | cut -d'v' -f2 | cut -d'.' -f1)
    if [ "$NODE_VERSION" -lt 18 ]; then
        print_error "Node.js version 18+ is required. Current version: $(node -v)"
        exit 1
    fi
    
    print_success "Node.js version: $(node -v)"
    
    # Check npm version
    print_success "npm version: $(npm -v)"
    
    # Check PM2
    check_pm2
    
    # Check dependencies
    check_dependencies
    
    # Create directories
    create_directories
    
    # Check environment file
    check_env
    
    print_success "System check completed successfully!"
    
    # Show menu and handle choices
    while true; do
        show_menu
        handle_choice
        
        echo ""
        read -p "Press Enter to continue..."
    done
}

# Run main function
main "$@"
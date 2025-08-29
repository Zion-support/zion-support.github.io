#!/bin/bash

# PM2 Error Automation System Startup Script
# This script manages the comprehensive error fixing and prevention automation system

set -e

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Project root
PROJECT_ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
cd "$PROJECT_ROOT"

log() {
    echo -e "${BLUE}[$(date +'%Y-%m-%d %H:%M:%S')]${NC} $1"
}

success() {
    echo -e "${GREEN}✅ $1${NC}"
}

warning() {
    echo -e "${YELLOW}⚠️  $1${NC}"
}

error() {
    echo -e "${RED}❌ $1${NC}"
}

check_requirements() {
    log "Checking system requirements..."
    
    # Check if Node.js is installed
    if ! command -v node &> /dev/null; then
        error "Node.js is not installed. Please install Node.js first."
        exit 1
    fi
    
    # Check if npm is installed
    if ! command -v npm &> /dev/null; then
        error "npm is not installed. Please install npm first."
        exit 1
    fi
    
    # Check if PM2 is installed
    if ! command -v pm2 &> /dev/null; then
        warning "PM2 is not installed. Installing PM2 globally..."
        npm install -g pm2
    fi
    
    success "All requirements met"
}

install_dependencies() {
    log "Installing project dependencies..."
    
    if [ ! -d "node_modules" ]; then
        npm install
        success "Dependencies installed"
    else
        log "Dependencies already installed, checking for updates..."
        npm update
        success "Dependencies updated"
    fi
}

start_automation_system() {
    log "Starting PM2 Error Automation System..."
    
    # Check if PM2 is running
    if pm2 list | grep -q "pm2-error-automation-orchestrator"; then
        warning "Automation system is already running. Restarting..."
        pm2 restart pm2-error-automation-orchestrator
    else
        # Start the automation system
        pm2 start ecosystem.config.cjs
        success "Automation system started"
    fi
    
    # Show status
    pm2 status
}

stop_automation_system() {
    log "Stopping PM2 Error Automation System..."
    
    if pm2 list | grep -q "pm2-error-automation-orchestrator"; then
        pm2 stop pm2-error-automation-orchestrator
        success "Automation system stopped"
    else
        warning "Automation system is not running"
    fi
}

restart_automation_system() {
    log "Restarting PM2 Error Automation System..."
    
    if pm2 list | grep -q "pm2-error-automation-orchestrator"; then
        pm2 restart pm2-error-automation-orchestrator
        success "Automation system restarted"
    else
        warning "Automation system is not running. Starting it..."
        start_automation_system
    fi
}

show_status() {
    log "PM2 Error Automation System Status:"
    echo ""
    
    if pm2 list | grep -q "pm2-error-automation-orchestrator"; then
        pm2 status
        echo ""
        log "Recent logs:"
        pm2 logs pm2-error-automation-orchestrator --lines 10
    else
        warning "Automation system is not running"
    fi
}

show_logs() {
    log "Showing logs for PM2 Error Automation System..."
    
    if pm2 list | grep -q "pm2-error-automation-orchestrator"; then
        pm2 logs pm2-error-automation-orchestrator --lines 50
    else
        error "Automation system is not running"
    fi
}

run_manual_fix() {
    log "Running manual error fix..."
    
    if [ -f "scripts/automation/comprehensive-error-fixer.cjs" ]; then
        node scripts/automation/comprehensive-error-fixer.cjs
        success "Manual error fix completed"
    else
        error "Error fixer script not found"
    fi
}

run_manual_prevention() {
    log "Running manual error prevention..."
    
    if [ -f "scripts/automation/intelligent-error-prevention.cjs" ]; then
        node scripts/automation/intelligent-error-prevention.cjs
        success "Manual error prevention completed"
    else
        error "Error prevention script not found"
    fi
}

show_help() {
    echo "PM2 Error Automation System Management Script"
    echo ""
    echo "Usage: $0 [COMMAND]"
    echo ""
    echo "Commands:"
    echo "  start     - Start the automation system"
    echo "  stop      - Stop the automation system"
    echo "  restart   - Restart the automation system"
    echo "  status    - Show system status"
    echo "  logs      - Show recent logs"
    echo "  fix       - Run manual error fix"
    echo "  prevent   - Run manual error prevention"
    echo "  install   - Install dependencies"
    echo "  help      - Show this help message"
    echo ""
    echo "Examples:"
    echo "  $0 start          # Start the automation system"
    echo "  $0 status         # Check system status"
    echo "  $0 fix            # Run manual error fix"
    echo ""
}

# Main script logic
case "${1:-help}" in
    start)
        check_requirements
        install_dependencies
        start_automation_system
        ;;
    stop)
        stop_automation_system
        ;;
    restart)
        restart_automation_system
        ;;
    status)
        show_status
        ;;
    logs)
        show_logs
        ;;
    fix)
        run_manual_fix
        ;;
    prevent)
        run_manual_prevention
        ;;
    install)
        check_requirements
        install_dependencies
        ;;
    help|--help|-h)
        show_help
        ;;
    *)
        error "Unknown command: $1"
        echo ""
        show_help
        exit 1
        ;;
esac
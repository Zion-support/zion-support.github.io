#!/bin/bash

# 🚀 PM2 Intelligent Automation System Startup Script
# This script starts the complete PM2 automation system for Zion Tech Group

set -e

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
PURPLE='\033[0;35m'
CYAN='\033[0;36m'
NC='\033[0m' # No Color

# Configuration
LOG_DIR="./logs"
DASHBOARD_PORT=3001
FRONTEND_PORT=3000
BACKEND_PORT=5000

# Function to print colored output
print_status() {
    echo -e "${GREEN}[INFO]${NC} $1"
}

print_warning() {
    echo -e "${YELLOW}[WARNING]${NC} $1"
}

print_error() {
    echo -e "${RED}[ERROR]${NC} $1"
}

print_header() {
    echo -e "${CYAN}================================${NC}"
    echo -e "${CYAN}$1${NC}"
    echo -e "${CYAN}================================${NC}"
}

# Function to check if command exists
command_exists() {
    command -v "$1" >/dev/null 2>&1
}

# Function to check if port is available
port_available() {
    ! nc -z localhost $1 2>/dev/null
}

# Function to wait for port to be available
wait_for_port() {
    local port=$1
    local service=$2
    local max_attempts=30
    local attempt=1
    
    print_status "Waiting for $service to be ready on port $port..."
    
    while [ $attempt -le $max_attempts ]; do
        if port_available $port; then
            print_status "$service is ready on port $port"
            return 0
        fi
        
        echo -n "."
        sleep 2
        attempt=$((attempt + 1))
    done
    
    print_error "$service failed to start on port $port after $max_attempts attempts"
    return 1
}

# Function to create log directory
create_log_directory() {
    if [ ! -d "$LOG_DIR" ]; then
        print_status "Creating log directory: $LOG_DIR"
        mkdir -p "$LOG_DIR"
    fi
}

# Function to check dependencies
check_dependencies() {
    print_header "Checking Dependencies"
    
    # Check if PM2 is installed
    if ! command_exists pm2; then
        print_error "PM2 is not installed. Please install it first:"
        echo "npm install -g pm2"
        exit 1
    fi
    
    # Check if Node.js is available
    if ! command_exists node; then
        print_error "Node.js is not installed or not in PATH"
        exit 1
    fi
    
    # Check if npm is available
    if ! command_exists npm; then
        print_error "npm is not installed or not in PATH"
        exit 1
    fi
    
    print_status "All dependencies are available"
}

# Function to install required packages
install_packages() {
    print_header "Installing Required Packages"
    
    # Check if express is installed
    if ! node -e "require('express')" 2>/dev/null; then
        print_status "Installing express..."
        npm install express
    fi
    
    # Check if chokidar is installed
    if ! node -e "require('chokidar')" 2>/dev/null; then
        print_status "Installing chokidar..."
        npm install chokidar
    fi
    
    print_status "All required packages are installed"
}

# Function to stop existing processes
stop_existing_processes() {
    print_header "Stopping Existing Processes"
    
    # Stop all PM2 processes
    if pm2 list | grep -q "online\|stopped"; then
        print_status "Stopping existing PM2 processes..."
        pm2 stop all 2>/dev/null || true
        pm2 delete all 2>/dev/null || true
    fi
    
    # Kill any processes using our ports
    for port in $DASHBOARD_PORT $FRONTEND_PORT $BACKEND_PORT; do
        if ! port_available $port; then
            print_warning "Port $port is in use, killing existing process..."
            lsof -ti:$port | xargs kill -9 2>/dev/null || true
        fi
    done
    
    print_status "Existing processes stopped"
}

# Function to start PM2 processes
start_pm2_processes() {
    print_header "Starting PM2 Processes"
    
    # Start the hybrid development environment
    print_status "Starting hybrid development environment..."
    node scripts/pm2-intelligent-manager.js start:hybrid
    
    # Wait a moment for processes to start
    sleep 5
    
    # Check PM2 status
    print_status "PM2 Status:"
    pm2 status
    
    print_status "PM2 processes started successfully"
}

# Function to start automation orchestrator
start_automation_orchestrator() {
    print_header "Starting Automation Orchestrator"
    
    # Start the orchestrator in the background
    print_status "Starting automation orchestrator..."
    nohup node automation/pm2-automation-orchestrator.cjs start > "$LOG_DIR/orchestrator.log" 2>&1 &
    ORCHESTRATOR_PID=$!
    
    # Save PID for cleanup
    echo $ORCHESTRATOR_PID > "$LOG_DIR/orchestrator.pid"
    
    print_status "Automation orchestrator started (PID: $ORCHESTRATOR_PID)"
}

# Function to start web dashboard
start_web_dashboard() {
    print_header "Starting Web Dashboard"
    
    # Check if dashboard port is available
    if ! port_available $DASHBOARD_PORT; then
        print_warning "Dashboard port $DASHBOARD_PORT is in use, using next available port..."
        DASHBOARD_PORT=$((DASHBOARD_PORT + 1))
    fi
    
    # Start the dashboard in the background
    print_status "Starting web dashboard on port $DASHBOARD_PORT..."
    PORT=$DASHBOARD_PORT nohup node automation/pm2-dashboard.cjs start > "$LOG_DIR/dashboard.log" 2>&1 &
    DASHBOARD_PID=$!
    
    # Save PID for cleanup
    echo $DASHBOARD_PID > "$LOG_DIR/dashboard.pid"
    
    # Wait for dashboard to be ready
    if wait_for_port $DASHBOARD_PORT "Web Dashboard"; then
        print_status "Web dashboard started successfully (PID: $DASHBOARD_PID)"
        print_status "Dashboard URL: http://localhost:$DASHBOARD_PORT"
    else
        print_error "Failed to start web dashboard"
        return 1
    fi
}

# Function to show system status
show_system_status() {
    print_header "System Status"
    
    echo -e "${BLUE}PM2 Processes:${NC}"
    pm2 status
    
    echo -e "\n${BLUE}System Resources:${NC}"
    echo "Memory: $(free -h | awk 'NR==2{printf "%.1f%%", $3*100/$2 }')"
    echo "CPU Load: $(uptime | awk -F'load average:' '{ print $2 }')"
    echo "Uptime: $(uptime -p)"
    
    echo -e "\n${BLUE}Port Status:${NC}"
    echo "Frontend (Vite): $(port_available $FRONTEND_PORT && echo "Available" || echo "In Use")"
    echo "Backend (Express): $(port_available $BACKEND_PORT && echo "Available" || echo "In Use")"
    echo "Dashboard: $(port_available $DASHBOARD_PORT && echo "Available" || echo "In Use")"
    
    echo -e "\n${BLUE}Process PIDs:${NC}"
    if [ -f "$LOG_DIR/orchestrator.pid" ]; then
        echo "Orchestrator: $(cat "$LOG_DIR/orchestrator.pid")"
    fi
    if [ -f "$LOG_DIR/dashboard.pid" ]; then
        echo "Dashboard: $(cat "$LOG_DIR/dashboard.pid")"
    fi
    
    echo -e "\n${BLUE}Log Files:${NC}"
    echo "Orchestrator: $LOG_DIR/orchestrator.log"
    echo "Dashboard: $LOG_DIR/dashboard.log"
    echo "PM2 Logs: $LOG_DIR/"
}

# Function to cleanup on exit
cleanup() {
    print_header "Cleanup"
    
    # Stop background processes
    if [ -f "$LOG_DIR/orchestrator.pid" ]; then
        local pid=$(cat "$LOG_DIR/orchestrator.pid")
        if kill -0 $pid 2>/dev/null; then
            print_status "Stopping orchestrator (PID: $pid)..."
            kill $pid
        fi
        rm -f "$LOG_DIR/orchestrator.pid"
    fi
    
    if [ -f "$LOG_DIR/dashboard.pid" ]; then
        local pid=$(cat "$LOG_DIR/dashboard.pid")
        if kill -0 $pid 2>/dev/null; then
            print_status "Stopping dashboard (PID: $pid)..."
            kill $pid
        fi
        rm -f "$LOG_DIR/dashboard.pid"
    fi
    
    print_status "Cleanup completed"
}

# Function to show help
show_help() {
    echo "Usage: $0 [OPTION]"
    echo ""
    echo "Options:"
    echo "  start     Start the complete PM2 automation system"
    echo "  stop      Stop all PM2 processes and background services"
    echo "  restart   Restart the complete system"
    echo "  status    Show system status and process information"
    echo "  logs      Show recent logs from all services"
    echo "  help      Show this help message"
    echo ""
    echo "Examples:"
    echo "  $0 start      # Start the complete system"
    echo "  $0 status     # Check system status"
    echo "  $0 stop       # Stop all services"
}

# Function to stop all services
stop_all_services() {
    print_header "Stopping All Services"
    
    # Stop PM2 processes
    if command_exists pm2; then
        print_status "Stopping PM2 processes..."
        pm2 stop all 2>/dev/null || true
        pm2 delete all 2>/dev/null || true
    fi
    
    # Stop background processes
    cleanup
    
    print_status "All services stopped"
}

# Function to restart system
restart_system() {
    print_header "Restarting System"
    
    stop_all_services
    sleep 2
    start_system
}

# Function to show logs
show_logs() {
    print_header "Recent Logs"
    
    echo -e "${BLUE}Orchestrator Logs (last 20 lines):${NC}"
    if [ -f "$LOG_DIR/orchestrator.log" ]; then
        tail -n 20 "$LOG_DIR/orchestrator.log"
    else
        echo "No orchestrator logs found"
    fi
    
    echo -e "\n${BLUE}Dashboard Logs (last 20 lines):${NC}"
    if [ -f "$LOG_DIR/dashboard.log" ]; then
        tail -n 20 "$LOG_DIR/dashboard.log"
    else
        echo "No dashboard logs found"
    fi
    
    echo -e "\n${BLUE}PM2 Logs:${NC}"
    if command_exists pm2; then
        pm2 logs --lines 10
    fi
}

# Function to start the complete system
start_system() {
    print_header "Starting PM2 Intelligent Automation System"
    
    # Check dependencies
    check_dependencies
    
    # Install required packages
    install_packages
    
    # Create log directory
    create_log_directory
    
    # Stop existing processes
    stop_existing_processes
    
    # Start PM2 processes
    start_pm2_processes
    
    # Start automation orchestrator
    start_automation_orchestrator
    
    # Start web dashboard
    start_web_dashboard
    
    # Show final status
    show_system_status
    
    print_header "System Started Successfully!"
    echo -e "${GREEN}🎉 Your PM2 Intelligent Automation System is now running!${NC}"
    echo ""
    echo -e "${BLUE}Access Points:${NC}"
    echo -e "  Frontend: ${CYAN}http://localhost:$FRONTEND_PORT${NC}"
    echo -e "  Backend:  ${CYAN}http://localhost:$BACKEND_PORT${NC}"
    echo -e "  Dashboard: ${CYAN}http://localhost:$DASHBOARD_PORT${NC}"
    echo ""
    echo -e "${BLUE}Useful Commands:${NC}"
    echo -e "  $0 status    # Check system status"
    echo -e "  $0 logs      # View recent logs"
    echo -e "  $0 stop      # Stop all services"
    echo ""
    echo -e "${YELLOW}Press Ctrl+C to stop the system${NC}"
}

# Main execution
main() {
    local command=${1:-start}
    
    # Set up cleanup on script exit
    trap cleanup EXIT INT TERM
    
    case $command in
        start)
            start_system
            ;;
        stop)
            stop_all_services
            ;;
        restart)
            restart_system
            ;;
        status)
            show_system_status
            ;;
        logs)
            show_logs
            ;;
        help|--help|-h)
            show_help
            ;;
        *)
            print_error "Unknown command: $command"
            show_help
            exit 1
            ;;
    esac
}

# Run main function with all arguments
main "$@"
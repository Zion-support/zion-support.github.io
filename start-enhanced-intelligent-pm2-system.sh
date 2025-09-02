#!/bin/bash

# Enhanced Intelligent PM2 Automation System Startup Script
# This script starts the comprehensive PM2 automation ecosystem with intelligent features

set -e

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
PURPLE='\033[0;35m'
CYAN='\033[0;36m'
NC='\033[0m' # No Color

# Logging functions
log_info() {
    echo -e "${BLUE}[INFO]${NC} $1"
}

log_success() {
    echo -e "${GREEN}[SUCCESS]${NC} $1"
}

log_warning() {
    echo -e "${YELLOW}[WARNING]${NC} $1"
}

log_error() {
    echo -e "${RED}[ERROR]${NC} $1"
}

log_header() {
    echo -e "${PURPLE}================================${NC}"
    echo -e "${PURPLE}$1${NC}"
    echo -e "${PURPLE}================================${NC}"
}

# Configuration
PROJECT_ROOT="/workspace"
PM2_CONFIG="ecosystem-intelligent-enhanced.config.cjs"
LOG_DIR="./logs"
BACKUP_DIR="./backups"

# Ensure we're in the right directory
cd "$PROJECT_ROOT" || {
    log_error "Failed to change to project directory: $PROJECT_ROOT"
    exit 1
}

log_header "Enhanced Intelligent PM2 Automation System"
log_info "Starting Zion Tech Group's enhanced PM2 automation ecosystem..."

# Check if PM2 is installed
if ! command -v pm2 &> /dev/null; then
    log_warning "PM2 not found. Installing PM2 globally..."
    npm install -g pm2
    log_success "PM2 installed successfully"
else
    log_info "PM2 found: $(pm2 --version)"
fi

# Install PM2 logrotate module
log_info "Installing PM2 logrotate module..."
pm2 install pm2-logrotate || log_warning "Failed to install pm2-logrotate (may already be installed)"

# Configure PM2 logrotate
log_info "Configuring PM2 logrotate..."
pm2 set pm2-logrotate:max_size 10M
pm2 set pm2-logrotate:retain 30
pm2 set pm2-logrotate:compress true
pm2 set pm2-logrotate:dateFormat YYYY-MM-DD_HH-mm-ss
pm2 set pm2-logrotate:workerInterval 60
pm2 set pm2-logrotate:rotateInterval '0 0 * * *'

# Create necessary directories
log_info "Creating necessary directories..."
mkdir -p "$LOG_DIR"
mkdir -p "$BACKUP_DIR"
mkdir -p "./automation/logs"

# Backup existing PM2 configuration if it exists
if pm2 list | grep -q "ecosystem"; then
    log_info "Backing up existing PM2 configuration..."
    pm2 save
    cp ~/.pm2/dump.pm2 "$BACKUP_DIR/pm2-backup-$(date +%Y%m%d-%H%M%S).pm2"
    log_success "Existing configuration backed up"
fi

# Stop any existing PM2 processes
log_info "Stopping existing PM2 processes..."
pm2 stop all 2>/dev/null || true
pm2 delete all 2>/dev/null || true

# Wait a moment for processes to stop
sleep 2

# Check if the enhanced ecosystem config exists
if [ ! -f "$PM2_CONFIG" ]; then
    log_error "Enhanced ecosystem configuration not found: $PM2_CONFIG"
    log_info "Available ecosystem files:"
    ls -la ecosystem*.cjs ecosystem*.js 2>/dev/null || log_warning "No ecosystem files found"
    exit 1
fi

# Validate the ecosystem configuration
log_info "Validating ecosystem configuration..."
if ! node -c "$PM2_CONFIG"; then
    log_error "Invalid ecosystem configuration file"
    exit 1
fi
log_success "Ecosystem configuration is valid"

# Start the enhanced PM2 automation system
log_header "Starting Enhanced Intelligent PM2 Automation System"
log_info "Starting PM2 with configuration: $PM2_CONFIG"

# Start PM2 with the enhanced configuration
pm2 start "$PM2_CONFIG" --update-env

# Check if PM2 started successfully
if [ $? -eq 0 ]; then
    log_success "PM2 automation system started successfully"
else
    log_error "Failed to start PM2 automation system"
    exit 1
fi

# Wait a moment for processes to initialize
sleep 3

# Display PM2 status
log_header "PM2 Status"
pm2 status

# Save PM2 configuration for auto-restart
log_info "Saving PM2 configuration..."
pm2 save

# Setup PM2 to start on system boot
log_info "Setting up PM2 startup script..."
pm2 startup

# Display automation information
log_header "Automation System Information"
log_info "The following intelligent automations are now running:"

# List all running processes with descriptions
pm2 list | while IFS= read -r line; do
    if [[ $line =~ ^[0-9]+ ]]; then
        process_name=$(echo "$line" | awk '{print $2}')
        case $process_name in
            "intelligent-repository-manager")
                echo "  🔄 Intelligent Repository Manager - Automated Git operations and conflict resolution"
                ;;
            "smart-development-pipeline")
                echo "  🚀 Smart Development Pipeline - Code quality improvements and testing automation"
                ;;
            "ai-code-enhancement")
                echo "  🤖 AI-Powered Code Enhancement - Intelligent code optimization and refactoring"
                ;;
            "automated-deployment-orchestrator")
                echo "  🚢 Automated Deployment Orchestrator - Smart deployment with rollback capabilities"
                ;;
            "enhanced-error-prevention")
                echo "  🛡️ Enhanced Error Prevention - Predictive error detection and prevention"
                ;;
            "intelligent-code-review")
                echo "  🔍 Intelligent Code Review - Automated code quality analysis and review"
                ;;
            "smart-dependency-intelligence")
                echo "  📦 Smart Dependency Intelligence - Intelligent dependency management and updates"
                ;;
            "performance-optimization-engine")
                echo "  ⚡ Performance Optimization Engine - Continuous performance monitoring and optimization"
                ;;
            "intelligent-testing-automation")
                echo "  🧪 Intelligent Testing Automation - Automated test generation and execution"
                ;;
            "security-intelligence-system")
                echo "  🔒 Security Intelligence System - Automated security scanning and vulnerability detection"
                ;;
            "continuous-improvement-engine")
                echo "  📈 Continuous Improvement Engine - Learning-based optimization and improvement"
                ;;
            "unified-automation-dashboard")
                echo "  📊 Unified Automation Dashboard - Real-time monitoring and analytics"
                ;;
            "predictive-maintenance-system")
                echo "  🔮 Predictive Maintenance System - Anticipatory maintenance and issue prevention"
                ;;
            "intelligent-build-pipeline")
                echo "  🏗️ Intelligent Build Pipeline - Optimized build processes and optimization"
                ;;
            "dev-watcher")
                echo "  👀 Development Watcher - File watching and auto-rebuild for development"
                ;;
            *)
                echo "  📋 $process_name"
                ;;
        esac
    fi
done

# Display monitoring commands
log_header "Monitoring and Control Commands"
echo "📊 Monitor all processes: pm2 monit"
echo "📝 View logs: pm2 logs"
echo "📋 View status: pm2 status"
echo "🔄 Restart all: pm2 restart all"
echo "⏹️ Stop all: pm2 stop all"
echo "💾 Save configuration: pm2 save"
echo "🚀 View specific logs: pm2 logs [process-name]"

# Display log file locations
log_header "Log File Locations"
echo "📁 Main logs directory: $LOG_DIR"
echo "📁 Automation logs: ./automation/logs"
echo "📁 PM2 logs: ~/.pm2/logs"

# Check system resources
log_header "System Resource Check"
log_info "Checking system resources..."

# Check available memory
if command -v free &> /dev/null; then
    MEMORY_INFO=$(free -h | grep Mem)
    log_info "Memory: $MEMORY_INFO"
fi

# Check disk space
if command -v df &> /dev/null; then
    DISK_INFO=$(df -h . | tail -1)
    log_info "Disk space: $DISK_INFO"
fi

# Check Node.js version
if command -v node &> /dev/null; then
    NODE_VERSION=$(node --version)
    log_info "Node.js version: $NODE_VERSION"
fi

# Check npm version
if command -v npm &> /dev/null; then
    NPM_VERSION=$(npm --version)
    log_info "npm version: $NPM_VERSION"
fi

# Display next steps
log_header "Next Steps"
echo "1. 🧪 Test the automation system by making changes to your code"
echo "2. 📊 Monitor the system with: pm2 monit"
echo "3. 📝 Check logs for any issues: pm2 logs"
echo "4. 🔄 The system will automatically run every 15 minutes"
echo "5. 🚀 Deployments can be triggered automatically or manually"

# Display automation schedule
log_header "Automation Schedule"
echo "🕐 Repository Management: Every 15 minutes"
echo "🕑 Development Pipeline: Every 2 hours"
echo "🕒 AI Code Enhancement: Every 4 hours"
echo "🕓 Deployment Orchestration: Every 6 hours"
echo "🕔 Error Prevention: Every 10 minutes"
echo "🕕 Code Review: Every 3 hours"
echo "🕖 Dependency Intelligence: Every 8 hours"
echo "🕗 Performance Optimization: Every 2 hours"
echo "🕘 Testing Automation: Every 4 hours"
echo "🕙 Security Intelligence: Every 6 hours"
echo "🕚 Continuous Improvement: Every 12 hours"
echo "🕛 Unified Dashboard: Every 5 minutes"
echo "🕜 Predictive Maintenance: Every 8 hours"
echo "🕝 Build Pipeline: Every 4 hours"
echo "🕞 Development Watcher: Real-time (file watching)"

# Final status check
log_header "Final Status Check"
if pm2 list | grep -q "online"; then
    log_success "✅ Enhanced Intelligent PM2 Automation System is running successfully!"
    log_success "🚀 Your Zion Tech Group application is now powered by intelligent automation!"
else
    log_error "❌ Some processes may not be running properly. Check with: pm2 status"
    exit 1
fi

# Display completion message
log_header "Setup Complete"
echo "🎉 Enhanced Intelligent PM2 Automation System is now running!"
echo ""
echo "🌟 Features enabled:"
echo "   • Intelligent repository management with automated conflict resolution"
echo "   • Smart development pipeline with code quality improvements"
echo "   • AI-powered code enhancement and optimization"
echo "   • Automated deployment with intelligent rollback"
echo "   • Enhanced error prevention and monitoring"
echo "   • Intelligent code review and quality assurance"
echo "   • Performance optimization and monitoring"
echo "   • Security intelligence and vulnerability detection"
echo "   • Continuous improvement and learning"
echo "   • Unified monitoring dashboard"
echo ""
echo "🔧 The system will automatically:"
echo "   • Merge PRs and resolve conflicts intelligently"
echo "   • Improve code quality and performance"
echo "   • Run tests and generate coverage reports"
echo "   • Monitor and optimize your application"
echo "   • Deploy updates safely with rollback capabilities"
echo ""
echo "📊 Monitor your automation system with: pm2 monit"
echo "📝 View detailed logs with: pm2 logs"
echo "🔄 Restart the system with: pm2 restart all"

log_success "Enhanced Intelligent PM2 Automation System startup completed successfully!"
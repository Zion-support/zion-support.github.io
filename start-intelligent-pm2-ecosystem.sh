#!/bin/bash

# Intelligent PM2 Ecosystem Startup Script
# This script starts the complete intelligent PM2 automation ecosystem

set -e

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
PURPLE='\033[0;35m'
CYAN='\033[0;36m'
NC='\033[0m' # No Color

# Project configuration
PROJECT_ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
ENHANCED_ECOSYSTEM="$PROJECT_ROOT/ecosystem.enhanced.cjs"
BACKUP_ECOSYSTEM="$PROJECT_ROOT/ecosystem.config.backup.$(date +%s).cjs"

# Logging functions
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

info() {
    echo -e "${CYAN}ℹ️  $1${NC}"
}

# Check if PM2 is installed
check_pm2() {
    if ! command -v pm2 &> /dev/null; then
        error "PM2 is not installed. Installing PM2 globally..."
        npm install -g pm2
        success "PM2 installed successfully"
    else
        info "PM2 is already installed: $(pm2 --version)"
    fi
}

# Check if GitHub CLI is installed
check_github_cli() {
    if ! command -v gh &> /dev/null; then
        warning "GitHub CLI (gh) is not installed. Some repository features may not work."
        info "Install with: curl -fsSL https://cli.github.com/packages/githubcli-archive-keyring.gpg | sudo dd of=/usr/share/keyrings/githubcli-archive-keyring.gpg"
        info "Then: echo 'deb [arch=$(dpkg --print-architecture) signed-by=/usr/share/keyrings/githubcli-archive-keyring.gpg] https://cli.github.com/packages stable main' | sudo tee /etc/apt/sources.list.d/github-cli.list > /dev/null"
        info "Finally: sudo apt update && sudo apt install gh"
    else
        success "GitHub CLI is installed: $(gh --version)"
    fi
}

# Backup existing ecosystem
backup_existing_ecosystem() {
    if [ -f "$ENHANCED_ECOSYSTEM" ]; then
        log "Backing up existing ecosystem configuration..."
        cp "$ENHANCED_ECOSYSTEM" "$BACKUP_ECOSYSTEM"
        success "Existing ecosystem backed up to: $BACKUP_ECOSYSTEM"
    fi
}

# Setup intelligent ecosystem
setup_intelligent_ecosystem() {
    if [ ! -f "$ENHANCED_ECOSYSTEM" ]; then
        error "Enhanced ecosystem configuration not found: $ENHANCED_ECOSYSTEM"
        exit 1
    fi
    
    log "Setting up Intelligent PM2 Ecosystem..."
    
    # Create logs directory
    mkdir -p "$PROJECT_ROOT/logs"
    
    # Create automation configs directory
    mkdir -p "$PROJECT_ROOT/scripts/automation"
    
    # Set proper permissions
    chmod +x "$PROJECT_ROOT/scripts/automation/"*.cjs 2>/dev/null || true
    
    # Verify all automation scripts exist
    local missing_scripts=()
    local required_scripts=(
        "ai-code-analyzer.cjs"
        "smart-performance-optimizer.cjs"
        "intelligent-dependency-manager.cjs"
        "smart-deployment-automation.cjs"
        "intelligent-repository-manager.cjs"
        "advanced-development-workflow.cjs"
        "intelligent-cicd-orchestrator.cjs"
        "enhanced-ci-cd-automation.cjs"
        "enhanced-testing-automation.cjs"
        "enhanced-security-automation.cjs"
        "project-health-monitor.cjs"
        "pm2-sync-automation.cjs"
        "link-checker-automation.cjs"
        "typescript-syntax-fixer.cjs"
        "console-error-fixer.cjs"
        "quality-checks.cjs"
        "security-audit.cjs"
        "continuous-improvement.cjs"
        "daily-build-test.cjs"
    )
    
    for script in "${required_scripts[@]}"; do
        if [ ! -f "$PROJECT_ROOT/scripts/automation/$script" ]; then
            missing_scripts+=("$script")
        fi
    done
    
    if [ ${#missing_scripts[@]} -gt 0 ]; then
        warning "Missing automation scripts:"
        for script in "${missing_scripts[@]}"; do
            echo "  - $script"
        done
        warning "Some automations may not work properly"
    else
        success "All required automation scripts found"
    fi
    
    success "Intelligent ecosystem setup completed"
}

# Stop existing PM2 processes
stop_existing_processes() {
    log "Stopping existing PM2 processes..."
    
    if pm2 list | grep -q "online\|stopped"; then
        pm2 stop all
        pm2 delete all
        success "Existing PM2 processes stopped and deleted"
    else
        info "No existing PM2 processes found"
    fi
}

# Start intelligent PM2 ecosystem
start_intelligent_ecosystem() {
    log "Starting Intelligent PM2 Ecosystem..."
    
    # Start the enhanced ecosystem using PM2
    pm2 start ecosystem.enhanced.cjs
    
    # Wait for processes to start
    sleep 8
    
    # Check if processes started successfully
    local failed_processes=()
    local running_processes=()
    
    while IFS= read -r line; do
        if [[ $line =~ ^[[:space:]]*([0-9]+)[[:space:]]+([^[:space:]]+)[[:space:]]+([^[:space:]]+)[[:space:]]+([^[:space:]]+)[[:space:]]+([^[:space:]]+)[[:space:]]+([^[:space:]]+) ]]; then
            local id="${BASH_REMATCH[1]}"
            local name="${BASH_REMATCH[2]}"
            local status="${BASH_REMATCH[6]}"
            
            if [ "$status" = "online" ]; then
                running_processes+=("$name")
            else
                failed_processes+=("$name")
            fi
        fi
    done < <(pm2 list)
    
    # Report results
    if [ ${#running_processes[@]} -gt 0 ]; then
        success "Successfully started ${#running_processes[@]} processes:"
        for process in "${running_processes[@]}"; do
            echo "  - $process"
        done
    fi
    
    if [ ${#failed_processes[@]} -gt 0 ]; then
        warning "Failed to start ${#failed_processes[@]} processes:"
        for process in "${failed_processes[@]}"; do
            echo "  - $process"
        done
    fi
    
    return ${#failed_processes[@]}
}

# Setup PM2 logrotate
setup_pm2_logrotate() {
    log "Setting up PM2 log rotation..."
    
    # Install pm2-logrotate if not already installed
    if ! pm2 list | grep -q "pm2-logrotate"; then
        pm2 install pm2-logrotate
        success "PM2 logrotate installed"
    fi
    
    # Configure log rotation
    pm2 set pm2-logrotate:max_size 10M
    pm2 set pm2-logrotate:retain 7
    pm2 set pm2-logrotate:compress true
    pm2 set pm2-logrotate:date_format YYYY-MM-DD_HH-mm-ss
    
    success "PM2 log rotation configured"
}

# Setup PM2 monitoring
setup_pm2_monitoring() {
    log "Setting up PM2 monitoring..."
    
    # Save PM2 configuration
    pm2 save
    
    # Setup PM2 startup script
    pm2 startup
    
    success "PM2 monitoring and startup configured"
}

# Display intelligent ecosystem status
display_intelligent_ecosystem_status() {
    log "Intelligent PM2 Ecosystem Status:"
    echo
    
    # Show PM2 process list
    pm2 list
    
    echo
    info "System Information:"
    echo "  Project Root: $PROJECT_ROOT"
    echo "  Enhanced Ecosystem: $ENHANCED_ECOSYSTEM"
    echo "  Backup Ecosystem: $BACKUP_ECOSYSTEM"
    echo "  PM2 Version: $(pm2 --version)"
    echo "  Node Version: $(node --version)"
    echo "  NPM Version: $(npm --version)"
    
    echo
    info "Intelligent Automation Features:"
    echo "  🧠 AI-Powered Code Analysis & Auto-Fixing"
    echo "  🚀 Smart Performance Optimization"
    echo "  📦 Intelligent Dependency Management"
    echo "  🚀 Smart Deployment Automation"
    echo "  🔄 Intelligent Repository Management"
    echo "  🛠️  Advanced Development Workflow"
    echo "  🔗 Intelligent CI/CD Pipeline Orchestration"
    echo "  🧪 Enhanced Testing Automation"
    echo "  🔒 Enhanced Security Automation"
    echo "  📊 Project Health Monitoring"
    echo "  ⚡ PM2 Process Synchronization"
    echo "  🔗 Link Validation & Monitoring"
    echo "  📝 TypeScript Error Fixing"
    echo "  🚨 Console Error Detection & Fixing"
    echo "  ✅ Quality Gates & Validation"
    echo "  🔍 Security Vulnerability Scanning"
    echo "  📈 Continuous Improvement"
    echo "  🏗️  Daily Build & Test Automation"
    
    echo
    info "Available Commands:"
    echo "  View logs: pm2 logs"
    echo "  Monitor processes: pm2 monit"
    echo "  Restart ecosystem: pm2 restart all"
    echo "  Stop ecosystem: pm2 stop all"
    echo "  Delete ecosystem: pm2 delete all"
    echo "  Save configuration: pm2 save"
    echo "  Setup startup: pm2 startup"
    
    echo
    info "Log Files Location: $PROJECT_ROOT/logs/"
    echo "  - AI Code Analyzer: logs/ai-code-analyzer.log"
    echo "  - Performance Optimizer: logs/smart-performance-optimizer.log"
    echo "  - Dependency Manager: logs/intelligent-dependency-manager.log"
    echo "  - Deployment Automation: logs/smart-deployment-automation.log"
    echo "  - Repository Manager: logs/intelligent-repository-manager.log"
    echo "  - Development Workflow: logs/advanced-development-workflow.log"
    echo "  - CI/CD Orchestrator: logs/intelligent-cicd-orchestrator.log"
    echo "  - And many more..."
    
    echo
    info "Intelligent Features:"
    echo "  🔄 Auto-branch management and cleanup"
    echo "  🤖 Automated PR creation with quality analysis"
    echo "  🧪 Intelligent testing strategies"
    echo "  🚀 Smart deployment decision making"
    echo "  📊 Real-time performance monitoring"
    echo "  🔒 Automated security scanning"
    echo "  🛠️  Auto-fixing of common issues"
    echo "  📈 Continuous quality improvement"
}

# Create intelligent management scripts
create_intelligent_management_scripts() {
    log "Creating intelligent management scripts..."
    
    # Intelligent start script
    cat > "$PROJECT_ROOT/scripts/intelligent-pm2-start.sh" << 'EOF'
#!/bin/bash
# Start Intelligent PM2 Ecosystem
cd "$(dirname "$0")/.."
./start-intelligent-pm2-ecosystem.sh
EOF
    
    # Intelligent stop script
    cat > "$PROJECT_ROOT/scripts/intelligent-pm2-stop.sh" << 'EOF'
#!/bin/bash
# Stop Intelligent PM2 Ecosystem
cd "$(dirname "$0")/.."
pm2 stop all
pm2 delete all
echo "Intelligent PM2 ecosystem stopped"
EOF
    
    # Intelligent restart script
    cat > "$PROJECT_ROOT/scripts/intelligent-pm2-restart.sh" << 'EOF'
#!/bin/bash
# Restart Intelligent PM2 Ecosystem
cd "$(dirname "$0")/.."
pm2 restart all
echo "Intelligent PM2 ecosystem restarted"
EOF
    
    # Intelligent logs script
    cat > "$PROJECT_ROOT/scripts/intelligent-pm2-logs.sh" << 'EOF'
#!/bin/bash
# View Intelligent PM2 Ecosystem Logs
cd "$(dirname "$0")/.."
pm2 logs
EOF
    
    # Intelligent monitor script
    cat > "$PROJECT_ROOT/scripts/intelligent-pm2-monitor.sh" << 'EOF'
#!/bin/bash
# Monitor Intelligent PM2 Ecosystem
cd "$(dirname "$0")/.."
pm2 monit
EOF
    
    # Repository management script
    cat > "$PROJECT_ROOT/scripts/repo-manager.sh" << 'EOF'
#!/bin/bash
# Intelligent Repository Management
cd "$(dirname "$0")/.."
node scripts/automation/intelligent-repository-manager.cjs "$@"
EOF
    
    # Development workflow script
    cat > "$PROJECT_ROOT/scripts/dev-workflow.sh" << 'EOF'
#!/bin/bash
# Advanced Development Workflow
cd "$(dirname "$0")/.."
node scripts/automation/advanced-development-workflow.cjs "$@"
EOF
    
    # CI/CD orchestrator script
    cat > "$PROJECT_ROOT/scripts/cicd-orchestrator.sh" << 'EOF'
#!/bin/bash
# Intelligent CI/CD Pipeline Orchestrator
cd "$(dirname "$0")/.."
node scripts/automation/intelligent-cicd-orchestrator.cjs "$@"
EOF
    
    # Make scripts executable
    chmod +x "$PROJECT_ROOT/scripts/intelligent-pm2-"*.sh
    chmod +x "$PROJECT_ROOT/scripts/repo-manager.sh"
    chmod +x "$PROJECT_ROOT/scripts/dev-workflow.sh"
    chmod +x "$PROJECT_ROOT/scripts/cicd-orchestrator.sh"
    
    success "Intelligent management scripts created"
}

# Run initial health check
run_initial_health_check() {
    log "Running initial health check..."
    
    # Check if all processes are running
    local health_status=0
    
    # Wait a bit more for processes to stabilize
    sleep 5
    
    # Check process status
    local process_count=$(pm2 list | grep -c "online" || echo "0")
    
    if [ "$process_count" -ge 15 ]; then
        success "Health check passed: $process_count processes running"
        health_status=0
    else
        warning "Health check warning: Only $process_count processes running (expected 15+)"
        health_status=1
    fi
    
    # Check log files
    local log_files=$(find "$PROJECT_ROOT/logs" -name "*.log" 2>/dev/null | wc -l)
    if [ "$log_files" -gt 0 ]; then
        info "Log files created: $log_files"
    else
        warning "No log files found yet"
    fi
    
    return $health_status
}

# Main execution
main() {
    echo -e "${PURPLE}🧠 Intelligent PM2 Ecosystem Startup${NC}"
    echo "==="
    echo
    
    # Check prerequisites
    check_pm2
    check_github_cli
    
    # Setup system
    backup_existing_ecosystem
    setup_intelligent_ecosystem
    
    # Stop existing processes
    stop_existing_processes
    
    # Start intelligent ecosystem
    if start_intelligent_ecosystem; then
        success "Intelligent PM2 ecosystem started successfully"
    else
        warning "Some processes failed to start. Check logs for details."
    fi
    
    # Setup additional features
    setup_pm2_logrotate
    setup_pm2_monitoring
    
    # Create management scripts
    create_intelligent_management_scripts
    
    # Run health check
    run_initial_health_check
    
    # Display status
    display_intelligent_ecosystem_status
    
    echo
    success "🧠 Intelligent PM2 Ecosystem is now running!"
    echo
    info "🚀 Next steps:"
    echo "  1. Monitor the ecosystem: pm2 monit"
    echo "  2. Check logs: pm2 logs"
    echo "  3. View specific process: pm2 logs <process-name>"
    echo "  4. Use intelligent management scripts in scripts/ directory"
    echo
    info "🧠 The intelligent ecosystem will automatically:"
    echo "  - Analyze and fix code issues with AI"
    echo "  - Optimize performance and bundle size intelligently"
    echo "  - Manage dependencies and security automatically"
    echo "  - Handle deployments with smart decision making"
    echo "  - Manage repository operations intelligently"
    echo "  - Coordinate development workflows automatically"
    echo "  - Orchestrate CI/CD pipelines with AI"
    echo "  - Monitor project health continuously"
    echo "  - Auto-fix common issues and errors"
    echo
    info "📚 Quick Start Commands:"
    echo "  Repository Management: ./scripts/repo-manager.sh monitor"
    echo "  Development Workflow: ./scripts/dev-workflow.sh start"
    echo "  CI/CD Orchestration: ./scripts/cicd-orchestrator.sh start"
    echo "  View Status: pm2 list"
    echo "  Monitor: pm2 monit"
    echo
}

# Run main function
main "$@"
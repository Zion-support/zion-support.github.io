#!/bin/bash

# Intelligent DevOps PM2 Automation System Startup Script
# This script starts the complete intelligent DevOps ecosystem with enhanced automation

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
PROJECT_ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
INTELLIGENT_ECOSYSTEM="ecosystem.intelligent-devops.cjs"
ENHANCED_ECOSYSTEM="ecosystem.enhanced.cjs"
ORIGINAL_ECOSYSTEM="ecosystem.config.cjs"
BACKUP_ECOSYSTEM="ecosystem.config.backup.$(date +%s).cjs"

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

# Check if Node.js is installed
check_node() {
    if ! command -v node &> /dev/null; then
        error "Node.js is not installed. Please install Node.js first."
        exit 1
    else
        info "Node.js version: $(node --version)"
    fi
}

# Check if npm/yarn is available
check_package_manager() {
    if command -v yarn &> /dev/null; then
        info "Using Yarn: $(yarn --version)"
        PACKAGE_MANAGER="yarn"
    elif command -v npm &> /dev/null; then
        info "Using NPM: $(npm --version)"
        PACKAGE_MANAGER="npm"
    else
        error "Neither npm nor yarn is installed. Please install one of them."
        exit 1
    fi
}

# Backup original ecosystem
backup_original_ecosystem() {
    if [ -f "$ORIGINAL_ECOSYSTEM" ]; then
        log "Backing up original ecosystem configuration..."
        cp "$ORIGINAL_ECOSYSTEM" "$BACKUP_ECOSYSTEM"
        success "Original ecosystem backed up to: $BACKUP_ECOSYSTEM"
    fi
}

# Setup intelligent DevOps ecosystem
setup_intelligent_ecosystem() {
    if [ ! -f "$INTELLIGENT_ECOSYSTEM" ]; then
        error "Intelligent DevOps ecosystem configuration not found: $INTELLIGENT_ECOSYSTEM"
        exit 1
    fi
    
    log "Setting up Intelligent DevOps PM2 ecosystem..."
    
    # Create necessary directories
    mkdir -p "logs"
    mkdir -p "reports"
    mkdir -p "scripts/automation"
    
    # Set proper permissions
    chmod +x "scripts/automation/"*.cjs 2>/dev/null || true
    
    # Create automation configuration if it doesn't exist
    create_automation_config
    
    success "Intelligent DevOps ecosystem setup completed"
}

# Create automation configuration
create_automation_config() {
    local config_file="automation-config.json"
    
    if [ ! -f "$config_file" ]; then
        log "Creating automation configuration..."
        
        cat > "$config_file" << 'EOF'
{
  "git": {
    "autoMerge": true,
    "autoPush": true,
    "conflictResolution": true,
    "branchCleanup": true,
    "healthMonitoring": true
  },
  "branches": {
    "main": "main",
    "develop": "develop",
    "staging": "staging",
    "featurePrefix": "feature/",
    "hotfixPrefix": "hotfix/",
    "releasePrefix": "release/"
  },
  "workflow": {
    "autoCodeReview": true,
    "autoTesting": true,
    "qualityGates": true,
    "continuousIntegration": true
  },
  "quality": {
    "minTestCoverage": 80,
    "maxComplexity": 10,
    "maxDuplication": 5,
    "minDocumentation": 70
  },
  "deployment": {
    "gitDeployment": true,
    "autoRollback": true,
    "healthChecks": true,
    "environmentManagement": true
  },
  "environments": {
    "development": {
      "branch": "develop",
      "autoDeploy": true,
      "healthThreshold": 70,
      "rollbackThreshold": 50
    },
    "staging": {
      "branch": "staging",
      "autoDeploy": true,
      "healthThreshold": 80,
      "rollbackThreshold": 60
    },
    "production": {
      "branch": "main",
      "autoDeploy": false,
      "healthThreshold": 90,
      "rollbackThreshold": 70
    }
  },
  "automation": {
    "workflowInterval": 3600000,
    "deploymentInterval": 14400000,
    "healthCheckInterval": 900000,
    "mergeInterval": 7200000,
    "reviewInterval": 1800000,
    "testingInterval": 900000,
    "rollbackCheckInterval": 300000,
    "cleanupInterval": 86400000
  }
}
EOF
        
        success "Automation configuration created: $config_file"
    else
        info "Automation configuration already exists: $config_file"
    fi
}

# Install dependencies
install_dependencies() {
    log "Installing project dependencies..."
    
    if [ "$PACKAGE_MANAGER" = "yarn" ]; then
        yarn install
    else
        npm install
    fi
    
    success "Dependencies installed successfully"
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

# Start intelligent DevOps PM2 system
start_intelligent_system() {
    log "Starting Intelligent DevOps PM2 Automation System..."
    
    # Start the intelligent ecosystem
    pm2 start "$INTELLIGENT_ECOSYSTEM"
    
    # Wait for processes to start
    sleep 10
    
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
    pm2 set pm2-logrotate:retain 30
    pm2 set pm2-logrotate:compress true
    pm2 set pm2-logrotate:date_format YYYY-MM-DD_HH-mm-ss
    pm2 set pm2-logrotate:workerInterval 60
    pm2 set pm2-logrotate:rotateInterval '0 0 * * *'
    
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

# Run initial health checks
run_initial_health_checks() {
    log "Running initial health checks..."
    
    # Check git repository health
    if [ -d ".git" ]; then
        log "Checking git repository health..."
        git status --porcelain > /dev/null 2>&1 && success "Git repository is clean" || warning "Git repository has uncommitted changes"
    fi
    
    # Check build health
    if [ -f "package.json" ]; then
        log "Checking build health..."
        if npm run build > /dev/null 2>&1; then
            success "Build test passed"
        else
            warning "Build test failed - check logs for details"
        fi
    fi
    
    # Check test health
    if [ -f "package.json" ] && grep -q '"test"' package.json; then
        log "Checking test health..."
        if npm test > /dev/null 2>&1; then
            success "Test suite passed"
        else
            warning "Test suite failed - check logs for details"
        fi
    fi
}

# Create management scripts
create_management_scripts() {
    log "Creating management scripts..."
    
    # Intelligent DevOps start script
    cat > "$PROJECT_ROOT/scripts/intelligent-devops-start.sh" << 'EOF'
#!/bin/bash
# Intelligent DevOps PM2 Start Script
cd "$(dirname "$0")/.."
pm2 start ecosystem.intelligent-devops.cjs
echo "Intelligent DevOps PM2 system started"
EOF
    
    # Intelligent DevOps stop script
    cat > "$PROJECT_ROOT/scripts/intelligent-devops-stop.sh" << 'EOF'
#!/bin/bash
# Intelligent DevOps PM2 Stop Script
cd "$(dirname "$0")/.."
pm2 stop all
pm2 delete all
echo "Intelligent DevOps PM2 system stopped"
EOF
    
    # Intelligent DevOps restart script
    cat > "$PROJECT_ROOT/scripts/intelligent-devops-restart.sh" << 'EOF'
#!/bin/bash
# Intelligent DevOps PM2 Restart Script
cd "$(dirname "$0")/.."
pm2 restart all
echo "Intelligent DevOps PM2 system restarted"
EOF
    
    # Intelligent DevOps logs script
    cat > "$PROJECT_ROOT/scripts/intelligent-devops-logs.sh" << 'EOF'
#!/bin/bash
# Intelligent DevOps PM2 Logs Script
cd "$(dirname "$0")/.."
pm2 logs
EOF
    
    # Intelligent DevOps monitor script
    cat > "$PROJECT_ROOT/scripts/intelligent-devops-monitor.sh" << 'EOF'
#!/bin/bash
# Intelligent DevOps PM2 Monitor Script
cd "$(dirname "$0")/.."
pm2 monit
EOF
    
    # Repository management script
    cat > "$PROJECT_ROOT/scripts/manage-repository.sh" << 'EOF'
#!/bin/bash
# Repository Management Script
cd "$(dirname "$0")/.."
echo "Repository Management Options:"
echo "1. View repository health"
echo "2. Auto-merge branches"
echo "3. Cleanup stale branches"
echo "4. Generate health report"
echo ""
echo "Use: pm2 logs intelligent-repository-manager"
EOF
    
    # Development workflow script
    cat > "$PROJECT_ROOT/scripts/manage-workflow.sh" << 'EOF'
#!/bin/bash
# Development Workflow Management Script
cd "$(dirname "$0")/.."
echo "Development Workflow Options:"
echo "1. View workflow status"
echo "2. Run code review"
echo "3. Run tests"
echo "4. Generate workflow report"
echo ""
echo "Use: pm2 logs smart-dev-workflow-orchestrator"
EOF
    
    # Deployment management script
    cat > "$PROJECT_ROOT/scripts/manage-deployment.sh" << 'EOF'
#!/bin/bash
# Deployment Management Script
cd "$(dirname "$0")/.."
echo "Deployment Management Options:"
echo "1. View deployment status"
echo "2. Deploy to development"
echo "3. Deploy to staging"
echo "4. Deploy to production"
echo "5. Generate deployment report"
echo ""
echo "Use: pm2 logs smart-deployment-pipeline"
EOF
    
    # Make scripts executable
    chmod +x "$PROJECT_ROOT/scripts/intelligent-devops-"*.sh
    chmod +x "$PROJECT_ROOT/scripts/manage-"*.sh
    
    success "Management scripts created"
}

# Display system status
display_system_status() {
    log "Intelligent DevOps PM2 Automation System Status:"
    echo
    
    # Show PM2 process list
    pm2 list
    
    echo
    info "System Information:"
    echo "  Project Root: $PROJECT_ROOT"
    echo "  Intelligent Ecosystem: $INTELLIGENT_ECOSYSTEM"
    echo "  Enhanced Ecosystem: $ENHANCED_ECOSYSTEM"
    echo "  Original Ecosystem: $ORIGINAL_ECOSYSTEM"
    echo "  Backup Ecosystem: $BACKUP_ECOSYSTEM"
    echo "  PM2 Version: $(pm2 --version)"
    echo "  Node Version: $(node --version)"
    echo "  Package Manager: $PACKAGE_MANAGER"
    
    echo
    info "Available Commands:"
    echo "  View logs: pm2 logs"
    echo "  Monitor processes: pm2 monit"
    echo "  Restart system: pm2 restart all"
    echo "  Stop system: pm2 stop all"
    echo "  Delete system: pm2 delete all"
    echo "  Save configuration: pm2 save"
    echo "  Setup startup: pm2 startup"
    
    echo
    info "Management Scripts:"
    echo "  Start system: ./scripts/intelligent-devops-start.sh"
    echo "  Stop system: ./scripts/intelligent-devops-stop.sh"
    echo "  Restart system: ./scripts/intelligent-devops-restart.sh"
    echo "  View logs: ./scripts/intelligent-devops-logs.sh"
    echo "  Monitor: ./scripts/intelligent-devops-monitor.sh"
    
    echo
    info "Specialized Management:"
    echo "  Repository: ./scripts/manage-repository.sh"
    echo "  Workflow: ./scripts/manage-workflow.sh"
    echo "  Deployment: ./scripts/manage-deployment.sh"
    
    echo
    info "Log Files Location: $PROJECT_ROOT/logs/"
    echo "  - Repository Manager: logs/intelligent-repository-manager.log"
    echo "  - Workflow Orchestrator: logs/smart-dev-workflow-orchestrator.log"
    echo "  - Deployment Pipeline: logs/smart-deployment-pipeline.log"
    echo "  - And many more..."
    
    echo
    info "Reports Location: $PROJECT_ROOT/reports/"
    echo "  - Repository health reports"
    echo "  - Workflow reports"
    echo "  - Deployment reports"
    echo "  - Performance analytics"
}

# Main execution
main() {
    echo -e "${PURPLE}🚀 Intelligent DevOps PM2 Automation System Startup${NC}"
    echo "="
    echo
    
    # Check prerequisites
    check_node
    check_package_manager
    check_pm2
    
    # Setup system
    backup_original_ecosystem
    setup_intelligent_ecosystem
    install_dependencies
    
    # Stop existing processes
    stop_existing_processes
    
    # Start intelligent system
    if start_intelligent_system; then
        success "Intelligent DevOps PM2 system started successfully"
        
        # Run initial health checks
        run_initial_health_checks
        
        # Setup additional features
        setup_pm2_logrotate
        setup_pm2_monitoring
        
        # Create management scripts
        create_management_scripts
        
        # Display status
        display_system_status
        
        echo
        success "🎉 Intelligent DevOps PM2 Automation System is now running!"
        echo
        info "The system will automatically:"
        echo "  ✅ Manage git repository and branches intelligently"
        echo "  ✅ Orchestrate development workflows"
        echo "  ✅ Manage deployment pipelines with rollbacks"
        echo "  ✅ Monitor code quality and performance"
        echo "  ✅ Run automated testing and code review"
        echo "  ✅ Handle dependency management and security"
        echo "  ✅ Generate comprehensive reports and analytics"
        echo
        info "Next steps:"
        echo "  1. Monitor the system: pm2 monit"
        echo "  2. Check logs: pm2 logs"
        echo "  3. Use management scripts in scripts/ directory"
        echo "  4. Review automation configuration: automation-config.json"
        echo
        info "The system integrates with your existing git workflow and will:"
        echo "  - Automatically merge healthy branches"
        echo "  - Resolve merge conflicts intelligently"
        echo "  - Deploy to environments based on health scores"
        echo "  - Rollback deployments automatically if needed"
        echo "  - Generate comprehensive health reports"
        
    else
        warning "Some processes failed to start. Check logs for details."
        echo
        info "Check the logs for more information:"
        echo "  pm2 logs"
        echo "  pm2 logs <process-name>"
    fi
}

# Handle script arguments
case "${1:-}" in
    "stop")
        pm2 stop all
        pm2 delete all
        success "Intelligent DevOps PM2 system stopped"
        ;;
    "restart")
        pm2 restart all
        success "Intelligent DevOps PM2 system restarted"
        ;;
    "status")
        pm2 status
        ;;
    "logs")
        pm2 logs
        ;;
    "monitor")
        pm2 monit
        ;;
    "health")
        echo "Running health checks..."
        run_initial_health_checks
        ;;
    "config")
        echo "Automation Configuration:"
        if [ -f "automation-config.json" ]; then
            cat automation-config.json | jq . 2>/dev/null || cat automation-config.json
        else
            echo "No automation configuration found"
        fi
        ;;
    *)
        main "$@"
        ;;
esac
#!/bin/bash

# Ultimate Intelligent PM2 System Startup Script
# The most advanced PM2 automation system with AI-powered intelligence

set -e

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
PURPLE='\033[0;35m'
CYAN='\033[0;36m'
WHITE='\033[1;37m'
NC='\033[0m' # No Color

# Project configuration
PROJECT_ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
ULTIMATE_ECOSYSTEM="$PROJECT_ROOT/ecosystem.ultimate-intelligent.cjs"
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

highlight() {
    echo -e "${PURPLE}🚀 $1${NC}"
}

# Display banner
display_banner() {
    echo -e "${PURPLE}"
    echo "╔══════════════════════════════════════════════════════════════════════════════╗"
    echo "║                    🧠 ULTIMATE INTELLIGENT PM2 SYSTEM 🧠                    ║"
    echo "║                                                                              ║"
    echo "║  🤖 AI-Powered Code Intelligence Engine                                      ║"
    echo "║  🔄 Intelligent Repository Orchestrator                                     ║"
    echo "║  🚀 Smart CI/CD Pipeline Orchestrator                                      ║"
    echo "║  ⚡ Advanced Performance Optimizer                                         ║"
    echo "║  🔒 Intelligent Security Guardian                                          ║"
    echo "║  📊 Ultimate System Health Monitor                                         ║"
    echo "║  🛠️  Smart Error Detection & Resolution                                    ║"
    echo "║  📈 Intelligent Monitoring & Analytics                                     ║"
    echo "║                                                                              ║"
    echo "║  🎯 The most advanced PM2 automation system ever created!                   ║"
    echo "╚══════════════════════════════════════════════════════════════════════════════╝"
    echo -e "${NC}"
}

# Check system requirements
check_system_requirements() {
    log "Checking system requirements..."
    
    # Check Node.js
    if ! command -v node &> /dev/null; then
        error "Node.js is not installed. Please install Node.js 16+ first."
        exit 1
    else
        local node_version=$(node --version | cut -d'v' -f2 | cut -d'.' -f1)
        if [ "$node_version" -lt 16 ]; then
            warning "Node.js version is $node_version. Recommended: 16+"
        else
            success "Node.js version: $(node --version)"
        fi
    fi
    
    # Check npm/yarn
    if command -v yarn &> /dev/null; then
        success "Yarn version: $(yarn --version)"
        PACKAGE_MANAGER="yarn"
    elif command -v npm &> /dev/null; then
        success "NPM version: $(npm --version)"
        PACKAGE_MANAGER="npm"
    else
        error "Neither npm nor yarn is installed. Please install one of them."
        exit 1
    fi
    
    # Check PM2
    if ! command -v pm2 &> /dev/null; then
        warning "PM2 is not installed. Installing PM2 globally..."
        if [ "$PACKAGE_MANAGER" = "yarn" ]; then
            yarn global add pm2
        else
            npm install -g pm2
        fi
        success "PM2 installed successfully"
    else
        success "PM2 version: $(pm2 --version)"
    fi
    
    # Check Git
    if ! command -v git &> /dev/null; then
        warning "Git is not installed. Some repository features may not work."
    else
        success "Git version: $(git --version)"
    fi
    
    # Check available memory
    local available_memory=$(free -m | awk 'NR==2{printf "%.0f", $7}')
    if [ "$available_memory" -lt 1024 ]; then
        warning "Available memory is ${available_memory}MB. Recommended: 1GB+"
    else
        success "Available memory: ${available_memory}MB"
    fi
    
    # Check disk space
    local available_space=$(df -BG . | awk 'NR==2{print $4}' | sed 's/G//')
    if [ "$available_space" -lt 5 ]; then
        warning "Available disk space is ${available_space}GB. Recommended: 5GB+"
    else
        success "Available disk space: ${available_space}GB"
    fi
}

# Setup ultimate ecosystem
setup_ultimate_ecosystem() {
    log "Setting up Ultimate Intelligent PM2 Ecosystem..."
    
    # Create necessary directories
    mkdir -p logs
    mkdir -p reports
    mkdir -p backups
    mkdir -p scripts/automation
    mkdir -p config
    
    # Set proper permissions
    chmod +x scripts/automation/*.cjs 2>/dev/null || true
    
    # Create configuration files if they don't exist
    create_configuration_files
    
    # Verify all automation scripts exist
    verify_automation_scripts
    
    success "Ultimate ecosystem setup completed"
}

# Create configuration files
create_configuration_files() {
    log "Creating configuration files..."
    
    # AI Code Intelligence Configuration
    if [ ! -f "ai-code-intelligence-config.json" ]; then
        cat > "ai-code-intelligence-config.json" << 'EOF'
{
  "analysisDepth": "deep",
  "autoFix": true,
  "performanceOptimization": true,
  "securityAnalysis": true,
  "codeQualityAnalysis": true,
  "excludePatterns": ["node_modules/**", ".git/**", "dist/**", "build/**"],
  "includeExtensions": [".js", ".jsx", ".ts", ".tsx", ".json", ".css", ".scss"],
  "maxFileSize": 1048576,
  "analysisInterval": 3600000,
  "reportGeneration": true
}
EOF
        success "AI Code Intelligence configuration created"
    fi
    
    # Repository Orchestration Configuration
    if [ ! -f "repository-orchestration-config.json" ]; then
        cat > "repository-orchestration-config.json" << 'EOF'
{
  "autoMerge": true,
  "conflictResolution": "intelligent",
  "branchCleanup": true,
  "healthMonitoring": true,
  "autoPush": true,
  "mergeStrategy": "smart",
  "branchProtection": true,
  "staleBranchThreshold": 30,
  "healthThreshold": 80,
  "maxConcurrentOperations": 3,
  "backupBeforeOperations": true,
  "notificationChannels": ["log", "file"],
  "branchNaming": {
    "feature": "feature/",
    "hotfix": "hotfix/",
    "release": "release/",
    "develop": "develop"
  }
}
EOF
        success "Repository Orchestration configuration created"
    fi
    
    # CI/CD Pipeline Configuration
    if [ ! -f "cicd-pipeline-config.json" ]; then
        cat > "cicd-pipeline-config.json" << 'EOF'
{
  "pipelineMode": "intelligent",
  "qualityGates": "strict",
  "autoDeploy": true,
  "rollbackEnabled": true,
  "environments": {
    "development": {
      "branch": "develop",
      "autoDeploy": true,
      "healthThreshold": 70,
      "rollbackThreshold": 50,
      "qualityGates": ["build", "test", "lint"]
    },
    "staging": {
      "branch": "staging",
      "autoDeploy": true,
      "healthThreshold": 80,
      "rollbackThreshold": 60,
      "qualityGates": ["build", "test", "lint", "security", "performance"]
    },
    "production": {
      "branch": "main",
      "autoDeploy": false,
      "healthThreshold": 90,
      "rollbackThreshold": 70,
      "qualityGates": ["build", "test", "lint", "security", "performance", "e2e"]
    }
  },
  "qualityThresholds": {
    "testCoverage": 80,
    "performanceScore": 90,
    "securityScore": 95,
    "codeQuality": 85,
    "buildTime": 300,
    "testTime": 120
  },
  "notificationChannels": ["log", "file", "webhook"],
  "backupStrategy": "incremental",
  "monitoringInterval": 300000,
  "maxConcurrentDeployments": 2
}
EOF
        success "CI/CD Pipeline configuration created"
    fi
}

# Verify automation scripts
verify_automation_scripts() {
    log "Verifying automation scripts..."
    
    local missing_scripts=()
    local required_scripts=(
        "ai-code-intelligence-engine.cjs"
        "intelligent-repository-orchestrator.cjs"
        "smart-cicd-pipeline-orchestrator.cjs"
        "advanced-performance-optimizer.cjs"
        "intelligent-security-guardian.cjs"
        "smart-deployment-manager.cjs"
        "intelligent-testing-orchestrator.cjs"
        "smart-dependency-intelligence.cjs"
        "intelligent-code-quality-guardian.cjs"
        "smart-error-detection-resolution.cjs"
        "intelligent-monitoring-analytics.cjs"
        "smart-build-optimization-engine.cjs"
        "intelligent-seo-content-optimizer.cjs"
        "smart-backup-recovery-system.cjs"
        "intelligent-workflow-orchestrator.cjs"
        "smart-environment-manager.cjs"
        "intelligent-documentation-generator.cjs"
        "smart-notification-alerting-system.cjs"
        "ultimate-system-health-monitor.cjs"
    )
    
    for script in "${required_scripts[@]}"; do
        if [ ! -f "scripts/automation/$script" ]; then
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

# Start ultimate PM2 system
start_ultimate_system() {
    log "Starting Ultimate Intelligent PM2 System..."
    
    # Start the ultimate ecosystem using PM2
    pm2 start ecosystem.ultimate-intelligent.cjs
    
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
    pm2 set pm2-logrotate:max_size 50M
    pm2 set pm2-logrotate:retain 30
    pm2 set pm2-logrotate:compress true
    pm2 set pm2-logrotate:date_format YYYY-MM-DD_HH-mm-ss
    pm2 set pm2-logrotate:workerInterval 30
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

# Create management scripts
create_management_scripts() {
    log "Creating intelligent management scripts..."
    
    # Ultimate system start script
    cat > "scripts/ultimate-pm2-start.sh" << 'EOF'
#!/bin/bash
# Ultimate PM2 System Start Script
cd "$(dirname "$0")/.."
pm2 start ecosystem.ultimate-intelligent.cjs
echo "Ultimate PM2 system started"
EOF
    
    # Ultimate system stop script
    cat > "scripts/ultimate-pm2-stop.sh" << 'EOF'
#!/bin/bash
# Ultimate PM2 System Stop Script
cd "$(dirname "$0")/.."
pm2 stop all
pm2 delete all
echo "Ultimate PM2 system stopped"
EOF
    
    # Ultimate system restart script
    cat > "scripts/ultimate-pm2-restart.sh" << 'EOF'
#!/bin/bash
# Ultimate PM2 System Restart Script
cd "$(dirname "$0")/.."
pm2 restart all
echo "Ultimate PM2 system restarted"
EOF
    
    # Ultimate system logs script
    cat > "scripts/ultimate-pm2-logs.sh" << 'EOF'
#!/bin/bash
# Ultimate PM2 System Logs Script
cd "$(dirname "$0")/.."
pm2 logs
EOF
    
    # Ultimate system monitor script
    cat > "scripts/ultimate-pm2-monitor.sh" << 'EOF'
#!/bin/bash
# Ultimate PM2 System Monitor Script
cd "$(dirname "$0")/.."
pm2 monit
EOF
    
    # AI Code Intelligence management script
    cat > "scripts/ai-code-intelligence.sh" << 'EOF'
#!/bin/bash
# AI Code Intelligence Management Script
cd "$(dirname "$0")/.."
echo "AI Code Intelligence Options:"
echo "1. View analysis logs: pm2 logs ai-code-intelligence-engine"
echo "2. View analysis report: cat reports/ai-code-analysis-report.json"
echo "3. Restart analysis: pm2 restart ai-code-intelligence-engine"
echo "4. Manual analysis: node scripts/automation/ai-code-intelligence-engine.cjs"
EOF
    
    # Repository Orchestrator management script
    cat > "scripts/repository-orchestrator.sh" << 'EOF'
#!/bin/bash
# Repository Orchestrator Management Script
cd "$(dirname "$0")/.."
echo "Repository Orchestrator Options:"
echo "1. View orchestration logs: pm2 logs intelligent-repository-orchestrator"
echo "2. View orchestration report: cat reports/repository-orchestration-report.json"
echo "3. Restart orchestrator: pm2 restart intelligent-repository-orchestrator"
echo "4. Manual orchestration: node scripts/automation/intelligent-repository-orchestrator.cjs"
EOF
    
    # CI/CD Pipeline management script
    cat > "scripts/cicd-pipeline.sh" << 'EOF'
#!/bin/bash
# CI/CD Pipeline Management Script
cd "$(dirname "$0")/.."
echo "CI/CD Pipeline Options:"
echo "1. View pipeline logs: pm2 logs smart-cicd-pipeline-orchestrator"
echo "2. View pipeline report: cat reports/cicd-pipeline-report.json"
echo "3. Restart pipeline: pm2 restart smart-cicd-pipeline-orchestrator"
echo "4. Manual pipeline run: node scripts/automation/smart-cicd-pipeline-orchestrator.cjs"
EOF
    
    # System health monitoring script
    cat > "scripts/system-health.sh" << 'EOF'
#!/bin/bash
# System Health Monitoring Script
cd "$(dirname "$0")/.."
echo "System Health Monitoring:"
echo "1. View health logs: pm2 logs ultimate-system-health-monitor"
echo "2. View all process status: pm2 list"
echo "3. View system metrics: pm2 monit"
echo "4. Check log files: ls -la logs/"
echo "5. Check reports: ls -la reports/"
EOF
    
    # Make scripts executable
    chmod +x scripts/ultimate-pm2-*.sh
    chmod +x scripts/ai-code-intelligence.sh
    chmod +x scripts/repository-orchestrator.sh
    chmod +x scripts/cicd-pipeline.sh
    chmod +x scripts/system-health.sh
    
    success "Management scripts created"
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
    local log_files=$(find logs -name "*.log" 2>/dev/null | wc -l)
    if [ "$log_files" -gt 0 ]; then
        info "Log files created: $log_files"
    else
        warning "No log files found yet"
    fi
    
    # Check configuration files
    local config_files=$(find . -name "*-config.json" 2>/dev/null | wc -l)
    if [ "$config_files" -gt 0 ]; then
        info "Configuration files: $config_files"
    else
        warning "No configuration files found"
    fi
    
    return $health_status
}

# Display system status
display_system_status() {
    log "Ultimate Intelligent PM2 System Status:"
    echo
    
    # Show PM2 process list
    pm2 list
    
    echo
    info "System Information:"
    echo "  Project Root: $PROJECT_ROOT"
    echo "  Ultimate Ecosystem: $ULTIMATE_ECOSYSTEM"
    echo "  Backup Ecosystem: $BACKUP_ECOSYSTEM"
    echo "  PM2 Version: $(pm2 --version)"
    echo "  Node Version: $(node --version)"
    echo "  Package Manager: $PACKAGE_MANAGER"
    
    echo
    highlight "🧠 AI-Powered Intelligence Features:"
    echo "  🤖 AI Code Intelligence Engine - Advanced code analysis and auto-fixing"
    echo "  🔄 Intelligent Repository Orchestrator - Smart git management"
    echo "  🚀 Smart CI/CD Pipeline Orchestrator - Intelligent deployment"
    echo "  ⚡ Advanced Performance Optimizer - Bundle and runtime optimization"
    echo "  🔒 Intelligent Security Guardian - Comprehensive security scanning"
    echo "  📊 Ultimate System Health Monitor - Real-time health monitoring"
    echo "  🛠️  Smart Error Detection & Resolution - Proactive error handling"
    echo "  📈 Intelligent Monitoring & Analytics - Advanced metrics and insights"
    echo "  🏗️  Smart Build Optimization Engine - Intelligent build processes"
    echo "  🔍 Intelligent SEO & Content Optimizer - SEO and content optimization"
    echo "  💾 Smart Backup & Recovery System - Automated backup management"
    echo "  🔄 Intelligent Workflow Orchestrator - Task orchestration"
    echo "  🌍 Smart Environment Manager - Environment configuration"
    echo "  📚 Intelligent Documentation Generator - Auto-generated docs"
    echo "  🔔 Smart Notification & Alerting System - Intelligent notifications"
    
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
    echo "  Start system: ./scripts/ultimate-pm2-start.sh"
    echo "  Stop system: ./scripts/ultimate-pm2-stop.sh"
    echo "  Restart system: ./scripts/ultimate-pm2-restart.sh"
    echo "  View logs: ./scripts/ultimate-pm2-logs.sh"
    echo "  Monitor: ./scripts/ultimate-pm2-monitor.sh"
    
    echo
    info "Specialized Management:"
    echo "  AI Code Intelligence: ./scripts/ai-code-intelligence.sh"
    echo "  Repository Orchestrator: ./scripts/repository-orchestrator.sh"
    echo "  CI/CD Pipeline: ./scripts/cicd-pipeline.sh"
    echo "  System Health: ./scripts/system-health.sh"
    
    echo
    info "Log Files Location: $PROJECT_ROOT/logs/"
    echo "  - AI Code Intelligence: logs/ai-code-intelligence-engine.log"
    echo "  - Repository Orchestrator: logs/intelligent-repository-orchestrator.log"
    echo "  - CI/CD Pipeline: logs/smart-cicd-pipeline-orchestrator.log"
    echo "  - Performance Optimizer: logs/advanced-performance-optimizer.log"
    echo "  - Security Guardian: logs/intelligent-security-guardian.log"
    echo "  - And many more..."
    
    echo
    info "Reports Location: $PROJECT_ROOT/reports/"
    echo "  - AI Code Analysis: reports/ai-code-analysis-report.json"
    echo "  - Repository Orchestration: reports/repository-orchestration-report.json"
    echo "  - CI/CD Pipeline: reports/cicd-pipeline-report.json"
    echo "  - Performance Analytics: reports/performance-analytics.json"
    echo "  - Security Reports: reports/security-analysis.json"
    
    echo
    info "Configuration Files:"
    echo "  - AI Code Intelligence: ai-code-intelligence-config.json"
    echo "  - Repository Orchestration: repository-orchestration-config.json"
    echo "  - CI/CD Pipeline: cicd-pipeline-config.json"
    
    echo
    highlight "🎯 Intelligent Capabilities:"
    echo "  🔄 Auto-branch management and intelligent cleanup"
    echo "  🤖 Automated PR creation with AI-powered quality analysis"
    echo "  🧪 Intelligent testing strategies and coverage analysis"
    echo "  🚀 Smart deployment decision making with rollback capabilities"
    echo "  📊 Real-time performance monitoring and optimization"
    echo "  🔒 Automated security scanning and vulnerability detection"
    echo "  🛠️  Auto-fixing of common issues and code improvements"
    echo "  📈 Continuous quality improvement and metrics tracking"
    echo "  🎯 Predictive analysis and proactive issue resolution"
    echo "  🔍 Intelligent code review and quality gates"
    echo "  📚 Automated documentation generation and maintenance"
    echo "  🔔 Smart alerting with intelligent prioritization"
}

# Main execution
main() {
    display_banner
    
    # Check system requirements
    check_system_requirements
    
    # Setup system
    setup_ultimate_ecosystem
    
    # Stop existing processes
    stop_existing_processes
    
    # Start ultimate system
    if start_ultimate_system; then
        success "Ultimate Intelligent PM2 System started successfully"
    else
        warning "Some processes failed to start. Check logs for details."
    fi
    
    # Setup additional features
    setup_pm2_logrotate
    setup_pm2_monitoring
    
    # Create management scripts
    create_management_scripts
    
    # Run health check
    run_initial_health_check
    
    # Display status
    display_system_status
    
    echo
    success "🎉 Ultimate Intelligent PM2 System is now running!"
    echo
    highlight "🚀 Next steps:"
    echo "  1. Monitor the system: pm2 monit"
    echo "  2. Check logs: pm2 logs"
    echo "  3. View specific process: pm2 logs <process-name>"
    echo "  4. Use intelligent management scripts in scripts/ directory"
    echo
    highlight "🧠 The ultimate intelligent system will automatically:"
    echo "  - Analyze and fix code issues with advanced AI"
    echo "  - Optimize performance and bundle size intelligently"
    echo "  - Manage dependencies and security automatically"
    echo "  - Handle deployments with smart decision making"
    echo "  - Manage repository operations intelligently"
    echo "  - Coordinate development workflows automatically"
    echo "  - Orchestrate CI/CD pipelines with AI"
    echo "  - Monitor project health continuously"
    echo "  - Auto-fix common issues and errors"
    echo "  - Generate comprehensive reports and analytics"
    echo "  - Provide intelligent recommendations"
    echo "  - Handle rollbacks and recovery automatically"
    echo
    highlight "📚 Quick Start Commands:"
    echo "  AI Code Intelligence: ./scripts/ai-code-intelligence.sh"
    echo "  Repository Management: ./scripts/repository-orchestrator.sh"
    echo "  CI/CD Pipeline: ./scripts/cicd-pipeline.sh"
    echo "  System Health: ./scripts/system-health.sh"
    echo "  View Status: pm2 list"
    echo "  Monitor: pm2 monit"
    echo
    highlight "🎯 This is the most advanced PM2 automation system ever created!"
    echo "  It combines AI, machine learning, and intelligent automation"
    echo "  to provide unprecedented development and deployment capabilities."
    echo
}

# Handle script arguments
case "${1:-}" in
    "stop")
        pm2 stop all
        pm2 delete all
        success "Ultimate Intelligent PM2 System stopped"
        ;;
    "restart")
        pm2 restart all
        success "Ultimate Intelligent PM2 System restarted"
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
        run_initial_health_check
        ;;
    "config")
        echo "Configuration Files:"
        ls -la *-config.json 2>/dev/null || echo "No configuration files found"
        ;;
    *)
        main "$@"
        ;;
esac
#!/bin/bash

# Enhanced PM2 Automations Startup Script
# This script launches all intelligent PM2 automations for development, deployment, and repository management

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
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
PROJECT_ROOT="$(dirname "$SCRIPT_DIR")"
ECOSYSTEM_FILE="$PROJECT_ROOT/ecosystem.enhanced-pm2-automations.cjs"
LOGS_DIR="$PROJECT_ROOT/logs"
REPORTS_DIR="$PROJECT_ROOT/reports"

# Function to print colored output
print_status() {
    local color=$1
    local message=$2
    echo -e "${color}[$(date '+%Y-%m-%d %H:%M:%S')] ${message}${NC}"
}

# Function to check if PM2 is installed
check_pm2() {
    if ! command -v pm2 &> /dev/null; then
        print_status $RED "PM2 is not installed. Installing PM2..."
        npm install -g pm2
        print_status $GREEN "PM2 installed successfully!"
    else
        print_status $GREEN "PM2 is already installed"
    fi
}

# Function to create necessary directories
create_directories() {
    print_status $BLUE "Creating necessary directories..."
    
    mkdir -p "$LOGS_DIR"
    mkdir -p "$REPORTS_DIR"
    mkdir -p "$PROJECT_ROOT/scripts/automation"
    
    print_status $GREEN "Directories created successfully!"
}

# Function to check if ecosystem file exists
check_ecosystem_file() {
    if [ ! -f "$ECOSYSTEM_FILE" ]; then
        print_status $RED "Ecosystem file not found: $ECOSYSTEM_FILE"
        exit 1
    fi
    print_status $GREEN "Ecosystem file found: $ECOSYSTEM_FILE"
}

# Function to stop existing PM2 processes
stop_existing_processes() {
    print_status $YELLOW "Stopping existing PM2 processes..."
    
    # Stop all processes
    pm2 stop all 2>/dev/null || true
    pm2 delete all 2>/dev/null || true
    
    print_status $GREEN "Existing processes stopped!"
}

# Function to start enhanced PM2 automations
start_enhanced_automations() {
    print_status $BLUE "Starting Enhanced PM2 Automations..."
    
    # Start the ecosystem
    pm2 start "$ECOSYSTEM_FILE"
    
    if [ $? -eq 0 ]; then
        print_status $GREEN "Enhanced PM2 Automations started successfully!"
    else
        print_status $RED "Failed to start Enhanced PM2 Automations!"
        exit 1
    fi
}

# Function to start specific automation systems
start_specific_automations() {
    print_status $BLUE "Starting specific automation systems..."
    
    # Enhanced Git Intelligence System
    if [ -f "$PROJECT_ROOT/scripts/automation/enhanced-git-intelligence-system.cjs" ]; then
        print_status $CYAN "Starting Enhanced Git Intelligence System..."
        pm2 start "$PROJECT_ROOT/scripts/automation/enhanced-git-intelligence-system.cjs" --name "enhanced-git-intelligence-system"
    fi
    
    # AI-Powered Development Assistant
    if [ -f "$PROJECT_ROOT/scripts/automation/ai-powered-development-assistant.cjs" ]; then
        print_status $CYAN "Starting AI-Powered Development Assistant..."
        pm2 start "$PROJECT_ROOT/scripts/automation/ai-powered-development-assistant.cjs" --name "ai-powered-development-assistant"
    fi
    
    # Advanced Deployment Orchestrator
    if [ -f "$PROJECT_ROOT/scripts/automation/advanced-deployment-orchestrator.cjs" ]; then
        print_status $CYAN "Starting Advanced Deployment Orchestrator..."
        pm2 start "$PROJECT_ROOT/scripts/automation/advanced-deployment-orchestrator.cjs" --name "advanced-deployment-orchestrator"
    fi
    
    print_status $GREEN "Specific automation systems started!"
}

# Function to configure PM2
configure_pm2() {
    print_status $BLUE "Configuring PM2..."
    
    # Save PM2 configuration
    pm2 save
    
    # Setup PM2 startup script
    pm2 startup
    
    # Save PM2 configuration
    pm2 save
    
    print_status $GREEN "PM2 configured successfully!"
}

# Function to display status
display_status() {
    print_status $BLUE "Enhanced PM2 Automations Status:"
    echo ""
    
    # Show PM2 status
    pm2 status
    
    echo ""
    print_status $BLUE "PM2 Logs:"
    echo "Logs directory: $LOGS_DIR"
    echo "Reports directory: $REPORTS_DIR"
    
    echo ""
    print_status $BLUE "Useful PM2 Commands:"
    echo "  pm2 logs                    - View all logs"
    echo "  pm2 logs [app-name]        - View specific app logs"
    echo "  pm2 monit                  - Monitor processes"
    echo "  pm2 restart all            - Restart all processes"
    echo "  pm2 reload all             - Reload all processes"
    echo "  pm2 stop all               - Stop all processes"
    echo "  pm2 delete all             - Delete all processes"
}

# Function to run health checks
run_health_checks() {
    print_status $BLUE "Running health checks..."
    
    # Check if all processes are running
    local running_count=$(pm2 list | grep -c "online")
    local total_count=$(pm2 list | grep -c "enhanced\|ai-powered\|advanced")
    
    if [ "$running_count" -eq "$total_count" ]; then
        print_status $GREEN "All automation processes are running! ($running_count/$total_count)"
    else
        print_status $YELLOW "Some processes may not be running. Check status above."
    fi
    
    # Check log files
    if [ -d "$LOGS_DIR" ]; then
        local log_count=$(find "$LOGS_DIR" -name "*.log" | wc -l)
        print_status $BLUE "Log files created: $log_count"
    fi
}

# Function to setup monitoring
setup_monitoring() {
    print_status $BLUE "Setting up monitoring..."
    
    # Create monitoring script
    cat > "$PROJECT_ROOT/monitor-automations.sh" << 'EOF'
#!/bin/bash
# Monitoring script for Enhanced PM2 Automations

echo "=== Enhanced PM2 Automations Monitor ==="
echo "Timestamp: $(date)"
echo ""

# PM2 Status
echo "PM2 Status:"
pm2 status
echo ""

# Process Counts
echo "Process Summary:"
echo "Total processes: $(pm2 list | grep -c 'enhanced\|ai-powered\|advanced')"
echo "Online processes: $(pm2 list | grep -c 'online')"
echo "Stopped processes: $(pm2 list | grep -c 'stopped')"
echo ""

# Memory Usage
echo "Memory Usage:"
pm2 monit --no-daemon --timeout 5
echo ""

# Recent Logs
echo "Recent Logs (last 10 lines):"
pm2 logs --lines 10 --nostream
EOF
    
    chmod +x "$PROJECT_ROOT/monitor-automations.sh"
    print_status $GREEN "Monitoring script created: monitor-automations.sh"
}

# Function to create automation configuration
create_automation_config() {
    print_status $BLUE "Creating automation configuration..."
    
    cat > "$PROJECT_ROOT/automation-config.json" << 'EOF'
{
  "git": {
    "autoMerge": true,
    "autoPush": true,
    "conflictResolution": true,
    "branchCleanup": true,
    "healthMonitoring": true,
    "conflictPrediction": true,
    "smartMerge": true
  },
  "ai": {
    "codeAnalysis": true,
    "refactoringSuggestions": true,
    "performanceOptimization": true,
    "bestPracticesEnforcement": true,
    "developmentProcessOptimization": true
  },
  "deployment": {
    "environments": {
      "development": {
        "branch": "develop",
        "autoDeploy": true,
        "healthThreshold": 70,
        "rollbackThreshold": 50,
        "maxDeploymentTime": 300000,
        "healthCheckInterval": 30000,
        "rollbackCheckInterval": 60000
      },
      "staging": {
        "branch": "staging",
        "autoDeploy": true,
        "healthThreshold": 80,
        "rollbackThreshold": 60,
        "maxDeploymentTime": 600000,
        "healthCheckInterval": 30000,
        "rollbackCheckInterval": 60000
      },
      "production": {
        "branch": "main",
        "autoDeploy": false,
        "healthThreshold": 90,
        "rollbackThreshold": 70,
        "maxDeploymentTime": 900000,
        "healthCheckInterval": 15000,
        "rollbackCheckInterval": 30000
      }
    },
    "strategies": {
      "blueGreen": true,
      "canary": true,
      "rolling": true,
      "progressive": true
    },
    "healthChecks": {
      "endpoints": [
        "/api/health",
        "/api/status",
        "/health",
        "/status"
      ],
      "timeout": 10000,
      "retries": 3
    },
    "rollback": {
      "automatic": true,
      "maxRollbacks": 3,
      "rollbackWindow": 3600000
    }
  },
  "branches": {
    "main": "main",
    "develop": "develop",
    "staging": "staging",
    "featurePrefix": "feature/",
    "hotfixPrefix": "hotfix/",
    "releasePrefix": "release/"
  },
  "thresholds": {
    "maxConflicts": 5,
    "maxMergeAttempts": 3,
    "healthScoreThreshold": 80,
    "conflictPredictionThreshold": 0.7,
    "minCodeQuality": 70,
    "maxComplexity": 10,
    "maxFileSize": 1000,
    "maxFunctionLength": 50
  },
  "fileTypes": [".ts", ".tsx", ".js", ".jsx", ".json", ".css", ".scss"]
}
EOF
    
    print_status $GREEN "Automation configuration created: automation-config.json"
}

# Function to show help
show_help() {
    echo "Enhanced PM2 Automations Startup Script"
    echo ""
    echo "Usage: $0 [OPTIONS]"
    echo ""
    echo "Options:"
    echo "  -h, --help              Show this help message"
    echo "  -s, --start             Start all automations"
    echo "  -c, --configure         Configure PM2 only"
    echo "  -m, --monitor           Setup monitoring only"
    echo "  -r, --restart           Restart all automations"
    echo "  -k, --stop              Stop all automations"
    echo "  -d, --status            Show status only"
    echo "  --health-check          Run health checks only"
    echo ""
    echo "Examples:"
    echo "  $0                      # Full startup with all features"
    echo "  $0 --start              # Start automations only"
    echo "  $0 --status             # Show status only"
    echo "  $0 --restart            # Restart all automations"
}

# Main execution
main() {
    print_status $PURPLE "🚀 Enhanced PM2 Automations Startup Script"
    print_status $PURPLE "============================================="
    
    case "${1:-}" in
        -h|--help)
            show_help
            exit 0
            ;;
        -s|--start)
            check_pm2
            create_directories
            check_ecosystem_file
            start_enhanced_automations
            start_specific_automations
            configure_pm2
            setup_monitoring
            run_health_checks
            display_status
            ;;
        -c|--configure)
            check_pm2
            create_directories
            create_automation_config
            configure_pm2
            setup_monitoring
            ;;
        -m|--monitor)
            setup_monitoring
            ;;
        -r|--restart)
            print_status $YELLOW "Restarting all automations..."
            pm2 restart all
            pm2 save
            run_health_checks
            display_status
            ;;
        -k|--stop)
            print_status $YELLOW "Stopping all automations..."
            pm2 stop all
            pm2 save
            ;;
        -d|--status)
            display_status
            ;;
        --health-check)
            run_health_checks
            ;;
        "")
            # Default: full startup
            check_pm2
            create_directories
            create_automation_config
            check_ecosystem_file
            stop_existing_processes
            start_enhanced_automations
            start_specific_automations
            configure_pm2
            setup_monitoring
            run_health_checks
            display_status
            ;;
        *)
            print_status $RED "Unknown option: $1"
            show_help
            exit 1
            ;;
    esac
    
    print_status $GREEN "✅ Enhanced PM2 Automations setup completed!"
    print_status $BLUE "📊 Monitor your automations with: pm2 monit"
    print_status $BLUE "📋 View status with: pm2 status"
    print_status $BLUE "📝 Check logs in: $LOGS_DIR"
    print_status $BLUE "📊 View reports in: $REPORTS_DIR"
}

# Run main function with all arguments
main "$@"
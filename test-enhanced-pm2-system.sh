#!/bin/bash

# Test Enhanced PM2 Automation System
# This script tests the various components of the enhanced automation system

set -e

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Logging functions
log_info() {
    echo -e "${BLUE}[TEST]${NC} $1"
}

log_success() {
    echo -e "${GREEN}[PASS]${NC} $1"
}

log_warning() {
    echo -e "${YELLOW}[WARN]${NC} $1"
}

log_error() {
    echo -e "${RED}[FAIL]${NC} $1"
}

log_header() {
    echo -e "${BLUE}================================${NC}"
    echo -e "${BLUE}$1${NC}"
    echo -e "${BLUE}================================${NC}"
}

# Test counters
TESTS_PASSED=0
TESTS_FAILED=0
TESTS_TOTAL=0

# Test function
run_test() {
    local test_name="$1"
    local test_command="$2"
    
    TESTS_TOTAL=$((TESTS_TOTAL + 1))
    log_info "Running test: $test_name"
    
    if eval "$test_command" >/dev/null 2>&1; then
        log_success "$test_name passed"
        TESTS_PASSED=$((TESTS_PASSED + 1))
        return 0
    else
        log_error "$test_name failed"
        TESTS_FAILED=$((TESTS_FAILED + 1))
        return 1
    fi
}

# Test PM2 installation
test_pm2_installation() {
    log_header "Testing PM2 Installation"
    
    run_test "PM2 is installed" "command -v pm2"
    run_test "PM2 version check" "pm2 --version"
    
    echo ""
}

# Test PM2 processes
test_pm2_processes() {
    log_header "Testing PM2 Processes"
    
    run_test "PM2 processes are running" "pm2 list | grep -q online"
    run_test "Intelligent Repository Manager is running" "pm2 list | grep -q intelligent-repository-manager"
    run_test "Smart Development Pipeline is running" "pm2 list | grep -q smart-development-pipeline"
    run_test "AI Code Enhancement is running" "pm2 list | grep -q ai-code-enhancement"
    run_test "Automated Deployment Orchestrator is running" "pm2 list | grep -q automated-deployment-orchestrator"
    
    echo ""
}

# Test automation scripts
test_automation_scripts() {
    log_header "Testing Automation Scripts"
    
    run_test "Intelligent Repository Manager script exists" "test -f scripts/automation/intelligent-repository-manager.cjs"
    run_test "Smart Development Pipeline script exists" "test -f scripts/automation/smart-development-pipeline.cjs"
    run_test "AI Code Enhancement script exists" "test -f scripts/automation/ai-code-enhancement.cjs"
    run_test "Automated Deployment Orchestrator script exists" "test -f scripts/automation/automated-deployment-orchestrator.cjs"
    
    echo ""
}

# Test configuration files
test_configuration_files() {
    log_header "Testing Configuration Files"
    
    run_test "Enhanced ecosystem config exists" "test -f ecosystem-intelligent-enhanced.config.cjs"
    run_test "Enhanced ecosystem config is valid" "node -c ecosystem-intelligent-enhanced.config.cjs"
    run_test "Startup script exists" "test -f start-enhanced-intelligent-pm2-system.sh"
    run_test "Startup script is executable" "test -x start-enhanced-intelligent-pm2-system.sh"
    
    echo ""
}

# Test directory structure
test_directory_structure() {
    log_header "Testing Directory Structure"
    
    run_test "Logs directory exists" "test -d logs"
    run_test "Automation logs directory exists" "test -d automation/logs"
    run_test "Scripts automation directory exists" "test -d scripts/automation"
    
    echo ""
}

# Test Git repository
test_git_repository() {
    log_header "Testing Git Repository"
    
    run_test "Git repository exists" "test -d .git"
    run_test "Git remote origin exists" "git remote -v | grep -q origin"
    run_test "Git can fetch from remote" "git fetch origin --dry-run >/dev/null 2>&1"
    
    echo ""
}

# Test Node.js environment
test_nodejs_environment() {
    log_header "Testing Node.js Environment"
    
    run_test "Node.js is installed" "command -v node"
    run_test "npm is installed" "command -v npm"
    run_test "package.json exists" "test -f package.json"
    run_test "node_modules exists" "test -d node_modules"
    
    echo ""
}

# Test automation functionality
test_automation_functionality() {
    log_header "Testing Automation Functionality"
    
    # Test if automation scripts can be required
    run_test "Intelligent Repository Manager can be required" "node -e \"require('./scripts/automation/intelligent-repository-manager.cjs')\""
    run_test "Smart Development Pipeline can be required" "node -e \"require('./scripts/automation/smart-development-pipeline.cjs')\""
    run_test "AI Code Enhancement can be required" "node -e \"require('./scripts/automation/ai-code-enhancement.cjs')\""
    run_test "Automated Deployment Orchestrator can be required" "node -e \"require('./scripts/automation/automated-deployment-orchestrator.cjs')\""
    
    echo ""
}

# Test PM2 logs
test_pm2_logs() {
    log_header "Testing PM2 Logs"
    
    run_test "PM2 logs can be accessed" "pm2 logs --lines 1 >/dev/null 2>&1"
    run_test "Intelligent Repository Manager has logs" "pm2 logs intelligent-repository-manager --lines 1 >/dev/null 2>&1"
    run_test "Smart Development Pipeline has logs" "pm2 logs smart-development-pipeline --lines 1 >/dev/null 2>&1"
    
    echo ""
}

# Test system resources
test_system_resources() {
    log_header "Testing System Resources"
    
    # Check available memory
    if command -v free &> /dev/null; then
        MEMORY_AVAILABLE=$(free -m | grep Mem | awk '{print $7}')
        if [ "$MEMORY_AVAILABLE" -gt 100 ]; then
            log_success "Sufficient memory available: ${MEMORY_AVAILABLE}MB"
            TESTS_PASSED=$((TESTS_PASSED + 1))
        else
            log_warning "Low memory available: ${MEMORY_AVAILABLE}MB"
        fi
        TESTS_TOTAL=$((TESTS_TOTAL + 1))
    fi
    
    # Check disk space
    if command -v df &> /dev/null; then
        DISK_AVAILABLE=$(df -m . | tail -1 | awk '{print $4}')
        if [ "$DISK_AVAILABLE" -gt 1000 ]; then
            log_success "Sufficient disk space available: ${DISK_AVAILABLE}MB"
            TESTS_PASSED=$((TESTS_PASSED + 1))
        else
            log_warning "Low disk space available: ${DISK_AVAILABLE}MB"
        fi
        TESTS_TOTAL=$((TESTS_TOTAL + 1))
    fi
    
    echo ""
}

# Test automation reports
test_automation_reports() {
    log_header "Testing Automation Reports"
    
    # Check if log files are being created
    run_test "Logs directory is writable" "touch logs/test-file && rm logs/test-file"
    run_test "Automation logs directory is writable" "touch automation/logs/test-file && rm automation/logs/test-file"
    
    echo ""
}

# Display test summary
display_test_summary() {
    log_header "Test Summary"
    
    echo "Total Tests: $TESTS_TOTAL"
    echo "Passed: $TESTS_PASSED"
    echo "Failed: $TESTS_FAILED"
    
    if [ $TESTS_FAILED -eq 0 ]; then
        log_success "All tests passed! Enhanced PM2 system is working correctly."
        echo ""
        echo "🎉 Your Enhanced Intelligent PM2 Automation System is ready!"
        echo "🚀 Start using it with: pm2 monit"
        echo "📝 View logs with: pm2 logs"
        echo "📊 Monitor status with: pm2 status"
    else
        log_error "Some tests failed. Please check the issues above."
        echo ""
        echo "🔧 Troubleshooting tips:"
        echo "1. Check PM2 status: pm2 status"
        echo "2. View PM2 logs: pm2 logs"
        echo "3. Restart PM2: pm2 restart all"
        echo "4. Check file permissions and paths"
    fi
    
    echo ""
}

# Main test execution
main() {
    log_header "Enhanced PM2 Automation System Test Suite"
    echo "This script will test all components of the enhanced automation system."
    echo ""
    
    # Run all tests
    test_pm2_installation
    test_pm2_processes
    test_automation_scripts
    test_configuration_files
    test_directory_structure
    test_git_repository
    test_nodejs_environment
    test_automation_functionality
    test_pm2_logs
    test_system_resources
    test_automation_reports
    
    # Display summary
    display_test_summary
    
    # Exit with appropriate code
    if [ $TESTS_FAILED -eq 0 ]; then
        exit 0
    else
        exit 1
    fi
}

# Run main function
main
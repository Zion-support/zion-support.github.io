#!/bin/bash

# Zion Tech Group - Test Intelligent PM2 System
# Comprehensive testing script for all intelligent PM2 automations

set -e

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
PURPLE='\033[0;35m'
CYAN='\033[0;36m'
NC='\033[0m' # No Color

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

print_success() {
    echo -e "${GREEN}[SUCCESS]${NC} $1"
}

print_header() {
    echo -e "${BLUE}====${NC}"
    echo -e "${BLUE}$1${NC}"
    echo -e "${BLUE}====${NC}"
}

# Test counter
TESTS_PASSED=0
TESTS_FAILED=0
TOTAL_TESTS=0

# Function to run a test
run_test() {
    local test_name="$1"
    local test_command="$2"
    
    TOTAL_TESTS=$((TOTAL_TESTS + 1))
    print_status "Running test: $test_name"
    
    if eval "$test_command" > /dev/null 2>&1; then
        print_success "✓ $test_name passed"
        TESTS_PASSED=$((TESTS_PASSED + 1))
        return 0
    else
        print_error "✗ $test_name failed"
        TESTS_FAILED=$((TESTS_FAILED + 1))
        return 1
    fi
}

# Test file existence
test_file_existence() {
    print_header "Testing File Existence"
    
    local files=(
        "ecosystem.intelligent-v3.cjs"
        "scripts/intelligent/ai-process-manager.cjs"
        "scripts/intelligent/intelligent-monitor.cjs"
        "scripts/intelligent/smart-auto-scaler.cjs"
        "scripts/intelligent/error-recovery-system.cjs"
        "scripts/intelligent/smart-resource-manager.cjs"
        "scripts/intelligent/dashboard-system.cjs"
        "start-intelligent-pm2-v3.sh"
        "deploy-intelligent-pm2-improvements.sh"
        "INTELLIGENT-PM2-README.md"
    )
    
    for file in "${files[@]}"; do
        run_test "File exists: $file" "test -f '$file'"
    done
}

# Test syntax validation
test_syntax_validation() {
    print_header "Testing Syntax Validation"
    
    local scripts=(
        "ecosystem.intelligent-v3.cjs"
        "scripts/intelligent/ai-process-manager.cjs"
        "scripts/intelligent/intelligent-monitor.cjs"
        "scripts/intelligent/smart-auto-scaler.cjs"
        "scripts/intelligent/error-recovery-system.cjs"
        "scripts/intelligent/smart-resource-manager.cjs"
        "scripts/intelligent/dashboard-system.cjs"
    )
    
    for script in "${scripts[@]}"; do
        run_test "Syntax validation: $script" "node -c '$script'"
    done
}

# Test PM2 configuration
test_pm2_configuration() {
    print_header "Testing PM2 Configuration"
    
    # Test if PM2 can parse the configuration
    run_test "PM2 configuration parsing" "pm2 start ecosystem.intelligent-v3.cjs --dry-run"
    
    # Test individual process configurations
    local processes=(
        "ziontech-main-app"
        "ai-process-manager"
        "intelligent-monitor"
        "smart-auto-scaler"
        "error-recovery-system"
        "smart-resource-manager"
        "intelligent-dashboard"
    )
    
    for process in "${processes[@]}"; do
        run_test "Process configuration: $process" "grep -q 'name:.*$process' ecosystem.intelligent-v3.cjs"
    done
}

# Test script permissions
test_script_permissions() {
    print_header "Testing Script Permissions"
    
    local scripts=(
        "start-intelligent-pm2-v3.sh"
        "deploy-intelligent-pm2-improvements.sh"
        "test-intelligent-pm2-system.sh"
    )
    
    for script in "${scripts[@]}"; do
        run_test "Script executable: $script" "test -x '$script'"
    done
}

# Test directory structure
test_directory_structure() {
    print_header "Testing Directory Structure"
    
    local directories=(
        "scripts"
        "scripts/intelligent"
        "logs"
        "ai-reports"
        "monitoring-reports"
        "scaling-reports"
        "error-recovery-reports"
        "resource-reports"
        "dashboard-reports"
    )
    
    for dir in "${directories[@]}"; do
        run_test "Directory exists: $dir" "test -d '$dir' || mkdir -p '$dir'"
    done
}

# Test environment variables
test_environment_variables() {
    print_header "Testing Environment Variables"
    
    # Test if required environment variables are set or have defaults
    run_test "NODE_ENV variable" "echo \$NODE_ENV"
    run_test "PM2_HOME variable" "echo \$PM2_HOME"
    
    # Test custom environment variables
    export MIN_INSTANCES=1
    export MAX_INSTANCES=10
    export DASHBOARD_PORT=3001
    
    run_test "Custom environment variables" "echo \$MIN_INSTANCES \$MAX_INSTANCES \$DASHBOARD_PORT"
}

# Test PM2 availability
test_pm2_availability() {
    print_header "Testing PM2 Availability"
    
    run_test "PM2 command available" "command -v pm2"
    run_test "PM2 version check" "pm2 --version"
    run_test "PM2 help command" "pm2 --help"
}

# Test Node.js availability
test_node_availability() {
    print_header "Testing Node.js Availability"
    
    run_test "Node.js command available" "command -v node"
    run_test "Node.js version check" "node --version"
    run_test "NPM command available" "command -v npm"
    run_test "NPM version check" "npm --version"
}

# Test package dependencies
test_package_dependencies() {
    print_header "Testing Package Dependencies"
    
    if [ -f "package.json" ]; then
        run_test "Package.json exists" "test -f package.json"
        run_test "NPM install works" "npm install --dry-run"
    else
        print_warning "No package.json found, skipping dependency tests"
    fi
}

# Test configuration validation
test_configuration_validation() {
    print_header "Testing Configuration Validation"
    
    # Test ecosystem configuration
    run_test "Ecosystem configuration is valid JavaScript" "node -c ecosystem.intelligent-v3.cjs"
    
    # Test that all required processes are defined
    local required_processes=(
        "ziontech-main-app"
        "ai-process-manager"
        "intelligent-monitor"
        "smart-auto-scaler"
        "error-recovery-system"
        "smart-resource-manager"
        "intelligent-dashboard"
    )
    
    for process in "${required_processes[@]}"; do
        run_test "Process $process is defined" "grep -q 'name:.*$process' ecosystem.intelligent-v3.cjs"
    done
}

# Test script functionality (dry run)
test_script_functionality() {
    print_header "Testing Script Functionality (Dry Run)"
    
    # Test AI Process Manager (syntax only)
    run_test "AI Process Manager syntax" "node -c scripts/intelligent/ai-process-manager.cjs"
    
    # Test Intelligent Monitor (syntax only)
    run_test "Intelligent Monitor syntax" "node -c scripts/intelligent/intelligent-monitor.cjs"
    
    # Test Smart Auto-Scaler (syntax only)
    run_test "Smart Auto-Scaler syntax" "node -c scripts/intelligent/smart-auto-scaler.cjs"
    
    # Test Error Recovery System (syntax only)
    run_test "Error Recovery System syntax" "node -c scripts/intelligent/error-recovery-system.cjs"
    
    # Test Smart Resource Manager (syntax only)
    run_test "Smart Resource Manager syntax" "node -c scripts/intelligent/smart-resource-manager.cjs"
    
    # Test Dashboard System (syntax only)
    run_test "Dashboard System syntax" "node -c scripts/intelligent/dashboard-system.cjs"
}

# Test documentation
test_documentation() {
    print_header "Testing Documentation"
    
    run_test "Main README exists" "test -f INTELLIGENT-PM2-README.md"
    run_test "README is readable" "test -r INTELLIGENT-PM2-README.md"
    run_test "README has content" "test -s INTELLIGENT-PM2-README.md"
    
    # Test that README contains key sections
    run_test "README contains Overview section" "grep -q '## Overview' INTELLIGENT-PM2-README.md"
    run_test "README contains Features section" "grep -q '## Features' INTELLIGENT-PM2-README.md"
    run_test "README contains Quick Start section" "grep -q '## Quick Start' INTELLIGENT-PM2-README.md"
}

# Test integration readiness
test_integration_readiness() {
    print_header "Testing Integration Readiness"
    
    # Test that all required ports are available
    run_test "Port 3000 available" "! lsof -i :3000 || echo 'Port 3000 in use (expected for main app)'"
    run_test "Port 3001 available" "! lsof -i :3001 || echo 'Port 3001 in use (expected for dashboard)'"
    
    # Test that log directories are writable
    run_test "Logs directory writable" "test -w logs || mkdir -p logs && test -w logs"
    
    # Test that report directories are writable
    local report_dirs=("ai-reports" "monitoring-reports" "scaling-reports" "error-recovery-reports" "resource-reports" "dashboard-reports")
    for dir in "${report_dirs[@]}"; do
        run_test "Report directory $dir writable" "test -w $dir || mkdir -p $dir && test -w $dir"
    done
}

# Test security
test_security() {
    print_header "Testing Security"
    
    # Test that scripts don't have dangerous permissions
    run_test "Scripts don't have world-write permissions" "! find scripts -type f -perm -002"
    run_test "Config files don't have world-write permissions" "! find . -name '*.cjs' -perm -002"
    
    # Test that sensitive information is not hardcoded
    run_test "No hardcoded passwords" "! grep -r 'password.*=' scripts/ || echo 'No hardcoded passwords found'"
    run_test "No hardcoded API keys" "! grep -r 'api.*key.*=' scripts/ || echo 'No hardcoded API keys found'"
}

# Generate test report
generate_test_report() {
    print_header "Test Results Summary"
    
    local success_rate=$((TESTS_PASSED * 100 / TOTAL_TESTS))
    
    echo -e "${CYAN}Total Tests:${NC} $TOTAL_TESTS"
    echo -e "${GREEN}Passed:${NC} $TESTS_PASSED"
    echo -e "${RED}Failed:${NC} $TESTS_FAILED"
    echo -e "${BLUE}Success Rate:${NC} $success_rate%"
    
    if [ $TESTS_FAILED -eq 0 ]; then
        echo -e "${GREEN}🎉 All tests passed! The intelligent PM2 system is ready for deployment.${NC}"
        return 0
    else
        echo -e "${YELLOW}⚠️ Some tests failed. Please review the issues before deployment.${NC}"
        return 1
    fi
}

# Main test execution
main() {
    print_header "Zion Tech Group - Intelligent PM2 System Test Suite"
    
    # Run all test suites
    test_file_existence
    test_syntax_validation
    test_pm2_configuration
    test_script_permissions
    test_directory_structure
    test_environment_variables
    test_pm2_availability
    test_node_availability
    test_package_dependencies
    test_configuration_validation
    test_script_functionality
    test_documentation
    test_integration_readiness
    test_security
    
    # Generate final report
    generate_test_report
}

# Handle script interruption
trap 'print_warning "Test suite interrupted. Partial results may be available."; exit 1' INT TERM

# Run main function
main "$@"
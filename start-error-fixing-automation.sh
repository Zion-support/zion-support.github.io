#!/bin/bash

# Enhanced Error Fixing Automation Startup Script
# This script initializes and starts the comprehensive error fixing automation system

set -e

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Configuration
PROJECT_ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
ECOSYSTEM_FILE="ecosystem-error-fixing-automation.config.cjs"
LOG_DIR="$PROJECT_ROOT/automation/logs"
REPORTS_DIR="$PROJECT_ROOT/error-reports"

echo -e "${BLUE}🚀 Starting Enhanced Error Fixing Automation System${NC}"
echo "=================================================="

# Function to log messages
log() {
    echo -e "${GREEN}[$(date '+%Y-%m-%d %H:%M:%S')] $1${NC}"
}

warn() {
    echo -e "${YELLOW}[$(date '+%Y-%m-%d %H:%M:%S')] WARNING: $1${NC}"
}

error() {
    echo -e "${RED}[$(date '+%Y-%m-%d %H:%M:%S')] ERROR: $1${NC}"
}

# Check if PM2 is installed
check_pm2() {
    if ! command -v pm2 &> /dev/null; then
        error "PM2 is not installed. Installing PM2..."
        npm install -g pm2
        if [ $? -ne 0 ]; then
            error "Failed to install PM2. Please install it manually: npm install -g pm2"
            exit 1
        fi
    fi
    log "PM2 is available"
}

# Create necessary directories
create_directories() {
    log "Creating necessary directories..."
    
    mkdir -p "$LOG_DIR"
    mkdir -p "$REPORTS_DIR"
    mkdir -p "$PROJECT_ROOT/automation/backups"
    
    log "Directories created successfully"
}

# Install dependencies
install_dependencies() {
    log "Installing project dependencies..."
    
    if [ -f "package.json" ]; then
        npm install
        if [ $? -ne 0 ]; then
            warn "Some dependencies may have failed to install"
        fi
    else
        warn "No package.json found, skipping dependency installation"
    fi
}

# Check and fix ESLint configuration
fix_eslint_config() {
    log "Checking ESLint configuration..."
    
    # Backup old config if it exists
    if [ -f ".eslintrc.js" ]; then
        mv .eslintrc.js .eslintrc.js.backup
        log "Backed up old ESLint configuration"
    fi
    
    # Ensure new config exists
    if [ ! -f "eslint.config.js" ]; then
        warn "eslint.config.js not found, creating basic configuration..."
        cat > eslint.config.js << 'EOF'
import js from '@eslint/js';
import globals from 'globals';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import tseslint from '@typescript-eslint/eslint-plugin';
import tsparser from '@typescript-eslint/parser';

export default [
  js.configs.recommended,
  {
    files: ['**/*.{js,jsx,ts,tsx}'],
    languageOptions: {
      ecmaVersion: 2021,
      sourceType: 'module',
      globals: {
        ...globals.browser,
        ...globals.node,
        React: 'readonly',
        process: 'readonly',
        console: 'readonly',
        module: 'readonly',
        exports: 'readonly',
        require: 'readonly',
        __dirname: 'readonly',
        setTimeout: 'readonly',
        setInterval: 'readonly',
        clearTimeout: 'readonly',
        clearInterval: 'readonly',
        jest: 'readonly',
        describe: 'readonly',
        it: 'readonly',
        test: 'readonly',
        expect: 'readonly',
        vi: 'readonly',
      },
      parser: tsparser,
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
        project: './tsconfig.json',
      },
    },
    plugins: {
      react,
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
      '@typescript-eslint': tseslint,
    },
    rules: {
      'react/jsx-uses-react': 'error',
      'react/jsx-uses-vars': 'error',
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'warn',
      'react-refresh/only-export-components': 'warn',
      '@typescript-eslint/no-unused-vars': 'error',
      '@typescript-eslint/no-explicit-any': 'warn',
      '@typescript-eslint/explicit-function-return-type': 'off',
      '@typescript-eslint/explicit-module-boundary-types': 'off',
      'no-console': 'warn',
      'no-debugger': 'error',
      'prefer-const': 'error',
      'no-var': 'error',
    },
  },
  {
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      parser: tsparser,
      parserOptions: {
        project: './tsconfig.json',
      },
    },
    rules: {
      '@typescript-eslint/no-unused-vars': 'error',
      '@typescript-eslint/no-explicit-any': 'warn',
    },
  },
];
EOF
    fi
}

# Run initial error fixing
run_initial_fix() {
    log "Running initial error fixing..."
    
    if [ -f "scripts/automation/enhanced-error-fixing-automation.cjs" ]; then
        node scripts/automation/enhanced-error-fixing-automation.cjs
        if [ $? -eq 0 ]; then
            log "Initial error fixing completed successfully"
        else
            warn "Initial error fixing completed with some issues"
        fi
    else
        warn "Enhanced error fixing script not found, skipping initial fix"
    fi
}

# Start PM2 processes
start_pm2_processes() {
    log "Starting PM2 error fixing automation processes..."
    
    # Stop any existing processes
    pm2 stop ecosystem-error-fixing-automation.config.cjs 2>/dev/null || true
    pm2 delete ecosystem-error-fixing-automation.config.cjs 2>/dev/null || true
    
    # Start the ecosystem
    pm2 start ecosystem-error-fixing-automation.config.cjs --update-env
    
    if [ $? -eq 0 ]; then
        log "PM2 processes started successfully"
    else
        error "Failed to start PM2 processes"
        exit 1
    fi
}

# Setup PM2 log rotation
setup_pm2_logrotate() {
    log "Setting up PM2 log rotation..."
    
    pm2 install pm2-logrotate 2>/dev/null || true
    pm2 set pm2-logrotate:max_size 10M
    pm2 set pm2-logrotate:retain 30
    pm2 set pm2-logrotate:compress true
    pm2 set pm2-logrotate:workerInterval 60
    pm2 set pm2-logrotate:rotateInterval '0 0 * * *'
    
    log "PM2 log rotation configured"
}

# Display status
show_status() {
    echo ""
    echo -e "${BLUE}📊 Error Fixing Automation Status${NC}"
    echo "=================================="
    
    pm2 status
    
    echo ""
    echo -e "${BLUE}📁 Log Files Location${NC}"
    echo "========================"
    echo "Logs: $LOG_DIR"
    echo "Reports: $REPORTS_DIR"
    
    echo ""
    echo -e "${BLUE}🔧 Useful Commands${NC}"
    echo "=================="
    echo "View logs: pm2 logs"
    echo "Restart: pm2 restart ecosystem-error-fixing-automation.config.cjs"
    echo "Stop: pm2 stop ecosystem-error-fixing-automation.config.cjs"
    echo "Status: pm2 status"
}

# Main execution
main() {
    log "Initializing Enhanced Error Fixing Automation System..."
    
    check_pm2
    create_directories
    install_dependencies
    fix_eslint_config
    run_initial_fix
    start_pm2_processes
    setup_pm2_logrotate
    show_status
    
    log "Enhanced Error Fixing Automation System started successfully! 🎉"
    log "The system will automatically detect and fix errors every 15 minutes"
}

# Run main function
main "$@"
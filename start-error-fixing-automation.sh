#!/bin/bash

# Error Fixing Automation Startup Script
# This script starts the comprehensive error fixing automation system

set -e

echo "🚀 Starting Error Fixing Automation System..."

# Ensure we're in the project root
cd "$(dirname "$0")"

# Create necessary directories
mkdir -p automation/logs
mkdir -p error-reports
mkdir -p logs

# Install dependencies if needed
if [ ! -d "node_modules" ]; then
    echo "📦 Installing dependencies..."
    npm install
fi

# Install PM2 globally if not already installed
if ! command -v pm2 &> /dev/null; then
    echo "📦 Installing PM2..."
    npm install -g pm2
fi

# Setup PM2 logrotate
echo "📊 Setting up PM2 logrotate..."
pm2 install pm2-logrotate || true
pm2 set pm2-logrotate:max_size 10M
pm2 set pm2-logrotate:retain 30
pm2 set pm2-logrotate:compress true
pm2 set pm2-logrotate:workerInterval 60
pm2 set pm2-logrotate:rotateInterval '0 0 * * *'

# Stop any existing error fixing processes
echo "🛑 Stopping existing error fixing processes..."
pm2 stop ecosystem-error-fixing.config.cjs || true
pm2 delete ecosystem-error-fixing.config.cjs || true

# Start the error fixing automation
echo "🚀 Starting Error Fixing Automation..."
pm2 start ecosystem-error-fixing.config.cjs --update-env

# Show status
echo "📊 Error Fixing Automation Status:"
pm2 status

echo "📋 Available commands:"
echo "  pm2 logs error-fixer-automation          # View main error fixer logs"
echo "  pm2 logs typescript-error-fixer          # View TypeScript error fixer logs"
echo "  pm2 logs eslint-error-fixer              # View ESLint error fixer logs"
echo "  pm2 logs build-error-fixer               # View build error fixer logs"
echo "  pm2 status                               # View all processes status"
echo "  pm2 restart ecosystem-error-fixing.config.cjs  # Restart all error fixers"
echo "  pm2 stop ecosystem-error-fixing.config.cjs     # Stop all error fixers"

echo ""
echo "✅ Error Fixing Automation System started successfully!"
echo "🔧 The system will automatically detect and fix errors every 5-30 minutes"
echo "📊 Check the logs directory for detailed reports"
echo "📈 Monitor progress in the error-reports directory"
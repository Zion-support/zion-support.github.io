#!/bin/bash

# 🚀 Intelligent PM2 Automations - Quick Start Script
# This script starts all the new intelligent PM2 automations

echo "🤖 Starting Intelligent PM2 Automations..."
echo "=========================================="

# Check if PM2 is installed
if ! command -v pm2 &> /dev/null; then
    echo "❌ PM2 is not installed. Installing PM2..."
    npm install -g pm2
fi

# Check if logs directory exists
if [ ! -d "./logs" ]; then
    echo "📁 Creating logs directory..."
    mkdir -p ./logs
fi

# Check if automation scripts exist
echo "🔍 Checking automation scripts..."

# AI Code Review
if [ ! -f "./scripts/automation/ai-code-review-automation.cjs" ]; then
    echo "❌ AI Code Review automation not found!"
    exit 1
fi

# Smart Build Optimization
if [ ! -f "./scripts/automation/smart-build-optimization.cjs" ]; then
    echo "❌ Smart Build Optimization automation not found!"
    exit 1
fi

# Intelligent Error Prediction
if [ ! -f "./scripts/automation/intelligent-error-prediction.cjs" ]; then
    echo "❌ Intelligent Error Prediction automation not found!"
    exit 1
fi

echo "✅ All automation scripts found!"

# Stop any existing PM2 processes
echo "🛑 Stopping existing PM2 processes..."
pm2 stop ecosystem.config.cjs 2>/dev/null || true
pm2 delete ecosystem.config.cjs 2>/dev/null || true

# Start the enhanced ecosystem
echo "🚀 Starting enhanced PM2 ecosystem..."
pm2 start ecosystem.config.cjs

# Wait a moment for processes to start
sleep 3

# Check status
echo "📊 PM2 Status:"
pm2 status

echo ""
echo "🎉 Intelligent PM2 Automations started successfully!"
echo ""
echo "📋 Available Commands:"
echo "  pm2 status                    - View all processes"
echo "  pm2 monit                     - Monitor in real-time"
echo "  pm2 logs                      - View all logs"
echo "  pm2 logs ai-code-review      - View AI code review logs"
echo "  pm2 logs smart-build-optimization - View build optimization logs"
echo "  pm2 logs error-prediction     - View error prediction logs"
echo ""
echo "📁 Logs are stored in: ./logs/"
echo "📊 Reports are stored in: ./logs/[automation-name]-reports/"
echo ""
echo "🔄 To restart all automations: pm2 restart ecosystem.config.cjs"
echo "🛑 To stop all automations: pm2 stop ecosystem.config.cjs"
echo ""
echo "📚 For more information, see: INTELLIGENT_PM2_AUTOMATIONS_README.md"
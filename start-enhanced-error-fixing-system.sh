#!/bin/bash

# Enhanced Error Fixing PM2 System Startup Script
# This script launches a comprehensive PM2 automation system that continuously fixes project errors

set -e

echo "🚀 Starting Enhanced Error Fixing PM2 System..."
echo "================================================"

# Check if PM2 is installed
if ! command -v pm2 &> /dev/null; then
    echo "❌ PM2 is not installed. Installing PM2..."
    npm install -g pm2
fi

# Check if we're in the right directory
if [ ! -f "package.json" ]; then
    echo "❌ Please run this script from the project root directory"
    exit 1
fi

# Install dependencies if needed
if [ ! -d "node_modules" ]; then
    echo "📦 Installing project dependencies..."
    npm install
fi

# Stop any existing PM2 processes
echo "🛑 Stopping existing PM2 processes..."
pm2 stop all 2>/dev/null || true
pm2 delete all 2>/dev/null || true

# Start the enhanced error fixing system
echo "🚀 Starting Enhanced Error Fixing PM2 System..."
pm2 start ecosystem.enhanced-error-fixing.cjs

# Save PM2 configuration
echo "💾 Saving PM2 configuration..."
pm2 save

# Set PM2 to start on system boot
echo "🔧 Setting PM2 to start on system boot..."
pm2 startup

# Show status
echo "📊 PM2 Status:"
pm2 status

echo ""
echo "✅ Enhanced Error Fixing PM2 System is now running!"
echo ""
echo "🔍 Key Automation Services:"
echo "   • Comprehensive Error Fixer (every 10 minutes)"
echo "   • TypeScript Syntax Fixer (every 15 minutes)"
echo "   • Import/Export Fixer (every 20 minutes)"
echo "   • Code Cleanup Automator (every 30 minutes)"
echo "   • Intelligent Predictive Monitor (every 5 minutes)"
echo "   • AI Code Optimizer (every hour)"
echo ""
echo "📋 Useful Commands:"
echo "   pm2 status                    - View all processes"
echo "   pm2 logs comprehensive-error-fixer - View error fixer logs"
echo "   pm2 restart all              - Restart all processes"
echo "   pm2 stop all                 - Stop all processes"
echo "   pm2 delete all               - Remove all processes"
echo ""
echo "📁 Reports are saved to: error-fix-reports/"
echo "📊 Monitor progress with: pm2 logs"
echo ""
echo "🎯 The system will automatically fix errors and maintain code quality!"
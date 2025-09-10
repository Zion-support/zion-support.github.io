#!/bin/bash

echo "🚀 Starting Error Fixing Automation System..."

# Check if PM2 is installed
if ! command -v pm2 &> /dev/null; then
    echo "❌ PM2 is not installed. Installing PM2..."
    npm install -g pm2
fi

# Stop any existing PM2 processes
echo "🛑 Stopping existing PM2 processes..."
pm2 stop all 2>/dev/null || true
pm2 delete all 2>/dev/null || true

# Start the error fixing automations
echo "🔧 Starting error fixing automations..."

# Start merge conflict resolver (highest priority)
echo "🔧 Starting merge conflict resolver..."
pm2 start ecosystem.config.cjs --only merge-conflict-resolver

# Start comprehensive error fixer
echo "🔧 Starting comprehensive error fixer..."
pm2 start ecosystem.config.cjs --only comprehensive-error-fixer

# Start linting error fixer
echo "🔧 Starting linting error fixer..."
pm2 start ecosystem.config.cjs --only linting-error-fixer

# Start TypeScript error fixer
echo "🔧 Starting TypeScript error fixer..."
pm2 start ecosystem.config.cjs --only typescript-error-fixer

# Start console error fixer
echo "🔧 Starting console error fixer..."
pm2 start ecosystem.config.cjs --only console-error-fixer

# Start error fixing orchestrator
echo "🎯 Starting error fixing orchestrator..."
pm2 start ecosystem.config.cjs --only error-fixing-orchestrator

# Show status
echo "📊 PM2 Status:"
pm2 status

echo "📊 Error Fixing Automation Status:"
pm2 status | grep -E "(merge-conflict-resolver|comprehensive-error-fixer|linting-error-fixer|typescript-error-fixer|console-error-fixer|error-fixing-orchestrator)"

echo ""
echo "✅ Error Fixing Automation System Started Successfully!"
echo ""
echo "📋 Automation Schedule:"
echo "  - Merge Conflict Resolver: Every 10 minutes"
echo "  - Comprehensive Error Fixer: Every 30 minutes"
echo "  - Linting Error Fixer: Every 20 minutes"
echo "  - TypeScript Error Fixer: Every 25 minutes"
echo "  - Console Error Fixer: Every 15 minutes"
echo "  - Error Fixing Orchestrator: Every hour"
echo ""
echo "📊 Monitor with: pm2 monit"
echo "📋 View logs with: pm2 logs"
echo "🛑 Stop all with: pm2 stop all"
echo "🔄 Restart all with: pm2 restart all"
echo ""
echo "📁 Reports will be generated in the project root:"
echo "  - ERROR_FIXING_DASHBOARD.md"
echo "  - error-fixing-orchestrator-report.json"
echo "  - merge-conflict-resolver-report.json"
echo "  - comprehensive-error-fixer-report.json"
echo "  - linting-error-fixer-report.json"
echo "  - typescript-error-fixer-report.json"
echo "  - console-error-fixer-report.json"
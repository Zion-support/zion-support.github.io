#!/bin/bash

echo "🛡️  Starting Error Prevention System..."

# Ensure logs directory exists
mkdir -p automation/logs

# Make scripts executable
chmod +x automation/error-prevention-monitor.cjs
chmod +x automation/linting-automation.cjs
chmod +x automation/type-check-automation.cjs
chmod +x automation/build-health-monitor.cjs
chmod +x automation/auto-fix-orchestrator.cjs

# Start PM2 error prevention system
echo "🚀 Starting PM2 Error Prevention System..."
pm2 start ecosystem.error-prevention.pm2.cjs

# Save PM2 configuration
pm2 save

# Show status
echo "📊 Error Prevention System Status:"
pm2 status

echo "✅ Error Prevention System started successfully!"
echo "📝 Logs are available in automation/logs/"
echo "🔧 Use 'pm2 logs' to view real-time logs"
echo "🛑 Use 'pm2 stop ecosystem.error-prevention.pm2.cjs' to stop"
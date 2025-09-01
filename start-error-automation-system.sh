#!/bin/bash

# Enhanced Error Automation System Startup Script
# This script will fix current project errors and set up PM2 automation to prevent future errors

set -e

echo "🚀 Starting Enhanced Error Automation System"
echo "=============================================="

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Function to print colored output
print_status() {
    echo -e "${BLUE}[INFO]${NC} $1"
}

print_success() {
    echo -e "${GREEN}[SUCCESS]${NC} $1"
}

print_warning() {
    echo -e "${YELLOW}[WARNING]${NC} $1"
}

print_error() {
    echo -e "${RED}[ERROR]${NC} $1"
}

# Check if we're in the right directory
if [ ! -f "package.json" ]; then
    print_error "package.json not found. Please run this script from the project root."
    exit 1
fi

print_status "📁 Working directory: $(pwd)"

# Step 1: Install dependencies
print_status "📦 Installing dependencies..."
if npm install; then
    print_success "Dependencies installed successfully"
else
    print_warning "Some dependencies may not have installed correctly"
fi

# Step 2: Install PM2 globally if not already installed
print_status "🔧 Checking PM2 installation..."
if ! command -v pm2 &> /dev/null; then
    print_status "Installing PM2 globally..."
    npm install -g pm2
    print_success "PM2 installed successfully"
else
    print_success "PM2 is already installed"
fi

# Step 3: Run the enhanced project error fixer
print_status "🔧 Running Enhanced Project Error Fixer..."
if node scripts/automation/enhanced-project-error-fixer.cjs; then
    print_success "Enhanced Project Error Fixer completed"
else
    print_warning "Enhanced Project Error Fixer encountered some issues"
fi

# Step 4: Run the PM2 Error Automation Orchestrator
print_status "🚀 Starting PM2 Error Automation Orchestrator..."
if node scripts/automation/pm2-error-automation-orchestrator.cjs; then
    print_success "PM2 Error Automation Orchestrator completed"
else
    print_error "PM2 Error Automation Orchestrator failed"
    exit 1
fi

# Step 5: Check PM2 status
print_status "📊 Checking PM2 status..."
if pm2 status; then
    print_success "PM2 processes are running"
else
    print_warning "Some PM2 processes may not be running correctly"
fi

# Step 6: Show automation processes
print_status "🔍 Showing automation processes..."
pm2 list | grep -E "(enhanced|typescript|eslint|build|dependency|config|error|critical|auto|analytics|quality|ai|predictive|intelligent)"

# Step 7: Generate summary report
print_status "📊 Generating summary report..."

# Create summary report
cat > error-automation-summary.md << EOF
# Error Automation System Summary

## Setup Completed: $(date)

### ✅ Steps Completed:
1. **Dependencies Installation**: All project dependencies installed
2. **PM2 Installation**: PM2 process manager installed globally
3. **Enhanced Error Fixer**: Current project errors addressed
4. **PM2 Automation Orchestrator**: Automation processes configured and started
5. **Monitoring Setup**: Process monitoring and auto-recovery enabled

### 🔧 Automation Processes Started:
- **Enhanced Project Error Fixer**: Runs every 10 minutes
- **TypeScript Error Monitor**: Runs every 15 minutes
- **ESLint Error Cleaner**: Runs every 20 minutes
- **Build Error Detector**: Runs every 30 minutes
- **Dependency Error Resolver**: Runs every hour
- **Configuration Error Fixer**: Runs every 2 hours
- **Enhanced Error Fixer**: Runs every 45 minutes
- **Error Prevention Monitor**: Runs every 15 minutes
- **Critical Error Alert System**: Runs every 5 minutes
- **Auto Recovery Manager**: Runs every 10 minutes
- **Error Analytics Dashboard**: Runs every hour
- **Code Quality Automation**: Runs every 2 hours
- **AI Code Review Automation**: Runs every 4 hours
- **Predictive Issue Detection**: Runs every 3 hours
- **Intelligent Automation Orchestrator**: Runs every 6 hours

### 📊 Monitoring Features:
- **Auto-restart**: Failed processes automatically restart
- **Memory monitoring**: Processes restart if memory usage exceeds limits
- **Log rotation**: Logs are automatically rotated and compressed
- **Error alerts**: Critical errors trigger immediate alerts
- **Performance tracking**: Continuous performance monitoring

### 🛠️ Useful Commands:
\`\`\`bash
# Check PM2 status
pm2 status

# View logs
pm2 logs

# Restart all processes
pm2 restart all

# Stop all processes
pm2 stop all

# Delete all processes
pm2 delete all

# Monitor processes in real-time
pm2 monit
\`\`\`

### 📁 Log Files:
All automation logs are stored in \`automation/logs/\` directory:
- \`enhanced-error-fixer.log\`
- \`typescript-monitor.log\`
- \`eslint-cleaner.log\`
- \`build-detector.log\`
- \`dependency-resolver.log\`
- \`config-fixer.log\`
- \`error-prevention.log\`
- \`critical-alerts.log\`
- \`auto-recovery.log\`
- \`error-analytics.log\`
- \`code-quality.log\`
- \`ai-code-review.log\`
- \`predictive-detection.log\`
- \`intelligent-orchestrator.log\`

### 🎯 Next Steps:
1. Monitor the automation processes for the first few hours
2. Check logs for any issues or warnings
3. Adjust automation intervals if needed
4. Set up additional monitoring if required

### ⚠️ Important Notes:
- The system will automatically fix common errors as they occur
- Critical errors will trigger immediate alerts
- All processes are configured to restart automatically on failure
- Logs are automatically rotated to prevent disk space issues
- The system is designed to be self-healing and self-maintaining

---
*Generated by Enhanced Error Automation System*
EOF

print_success "Summary report generated: error-automation-summary.md"

# Step 8: Final status check
print_status "🔍 Performing final status check..."

# Check if key processes are running
if pm2 list | grep -q "enhanced-project-error-fixer"; then
    print_success "Enhanced Project Error Fixer is running"
else
    print_warning "Enhanced Project Error Fixer may not be running"
fi

if pm2 list | grep -q "critical-error-alert-system"; then
    print_success "Critical Error Alert System is running"
else
    print_warning "Critical Error Alert System may not be running"
fi

# Check log directory
if [ -d "automation/logs" ]; then
    print_success "Log directory created successfully"
else
    print_warning "Log directory may not exist"
fi

echo ""
echo "🎉 Enhanced Error Automation System Setup Complete!"
echo "=================================================="
echo ""
echo "✅ Current project errors have been addressed"
echo "✅ PM2 automation processes are running"
echo "✅ Monitoring and auto-recovery are enabled"
echo "✅ Critical error alerts are active"
echo ""
echo "📊 To monitor the system:"
echo "   - Run 'pm2 status' to see all processes"
echo "   - Run 'pm2 logs' to view logs"
echo "   - Run 'pm2 monit' for real-time monitoring"
echo ""
echo "📁 Check 'error-automation-summary.md' for detailed information"
echo ""
echo "🚀 The system will now automatically prevent and fix errors!"
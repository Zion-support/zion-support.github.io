#!/bin/bash

# Intelligent PM2 System Startup Script
# This script initializes and starts all intelligent PM2 automations

set -e

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
PURPLE='\033[0;35m'
CYAN='\033[0;36m'
NC='\033[0m' # No Color

# Logging function
log() {
    echo -e "${GREEN}[$(date +'%Y-%m-%d %H:%M:%S')] $1${NC}"
}

warn() {
    echo -e "${YELLOW}[$(date +'%Y-%m-%d %H:%M:%S')] WARNING: $1${NC}"
}

error() {
    echo -e "${RED}[$(date +'%Y-%m-%d %H:%M:%S')] ERROR: $1${NC}"
}

info() {
    echo -e "${BLUE}[$(date +'%Y-%m-%d %H:%M:%S')] INFO: $1${NC}"
}

# Banner
echo -e "${PURPLE}"
echo "╔══════════════════════════════════════════════════════════════════════════════╗"
echo "║                    INTELLIGENT PM2 AUTOMATION SYSTEM                        ║"
echo "║                           Enhanced Version 3.0                              ║"
echo "╚══════════════════════════════════════════════════════════════════════════════╝"
echo -e "${NC}"

# Check if PM2 is installed
if ! command -v pm2 &> /dev/null; then
    error "PM2 is not installed. Please install PM2 first:"
    echo "npm install -g pm2"
    exit 1
fi

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    error "Node.js is not installed. Please install Node.js first."
    exit 1
fi

# Check if we're in the right directory
if [ ! -f "package.json" ]; then
    error "package.json not found. Please run this script from the project root directory."
    exit 1
fi

log "Starting Intelligent PM2 System initialization..."

# Create necessary directories
log "Creating necessary directories..."
mkdir -p logs/{ai,automation,performance,profiles,backups}
mkdir -p scripts/{automation,pm2}
mkdir -p optimizations

# Set proper permissions
chmod +x scripts/automation/*.cjs 2>/dev/null || true
chmod +x scripts/pm2/*.cjs 2>/dev/null || true

# Install dependencies if needed
if [ ! -d "node_modules" ]; then
    log "Installing dependencies..."
    npm install
fi

# Stop any existing PM2 processes
log "Stopping existing PM2 processes..."
pm2 stop all 2>/dev/null || true
pm2 delete all 2>/dev/null || true

# Clear PM2 logs
log "Clearing PM2 logs..."
pm2 flush 2>/dev/null || true

# Start the intelligent PM2 system
log "Starting Intelligent PM2 System with enhanced ecosystem configuration..."

# Use the enhanced ecosystem configuration
if [ -f "ecosystem.enhanced-intelligent-v3.cjs" ]; then
    pm2 start ecosystem.enhanced-intelligent-v3.cjs
    log "Started with ecosystem.enhanced-intelligent-v3.cjs"
else
    warn "Enhanced ecosystem configuration not found, using default..."
    pm2 start ecosystem.config.cjs
fi

# Wait a moment for processes to start
sleep 5

# Show PM2 status
log "PM2 Status:"
pm2 status

# Show PM2 logs
log "Recent PM2 logs:"
pm2 logs --lines 10

# Create a monitoring script
log "Creating monitoring script..."
cat > monitor-intelligent-pm2.sh << 'EOF'
#!/bin/bash

# Intelligent PM2 Monitoring Script

echo "╔══════════════════════════════════════════════════════════════════════════════╗"
echo "║                    INTELLIGENT PM2 SYSTEM MONITORING                        ║"
echo "╚══════════════════════════════════════════════════════════════════════════════╝"

echo ""
echo "📊 PM2 Process Status:"
pm2 status

echo ""
echo "📈 System Resources:"
echo "CPU Usage:"
top -bn1 | grep "Cpu(s)" | sed "s/.*, *\([0-9.]*\)%* id.*/\1/" | awk '{print "CPU Usage: " 100 - $1 "%"}'

echo ""
echo "Memory Usage:"
free -h | grep -E "Mem|Swap"

echo ""
echo "Disk Usage:"
df -h | grep -E "/$|/workspace"

echo ""
echo "🔍 Recent Logs (Last 20 lines):"
pm2 logs --lines 20

echo ""
echo "📋 Process Details:"
pm2 jlist | jq '.[] | {name: .name, status: .pm2_env.status, cpu: .monit.cpu, memory: .monit.memory, uptime: .pm2_env.pm_uptime}' 2>/dev/null || pm2 jlist

echo ""
echo "🔄 To restart all processes: pm2 restart all"
echo "🛑 To stop all processes: pm2 stop all"
echo "📊 To view real-time logs: pm2 logs"
echo "🔧 To restart specific process: pm2 restart <process-name>"
EOF

chmod +x monitor-intelligent-pm2.sh

# Create a health check script
log "Creating health check script..."
cat > health-check-intelligent-pm2.sh << 'EOF'
#!/bin/bash

# Intelligent PM2 Health Check Script

echo "🏥 Running Intelligent PM2 Health Check..."

# Check PM2 processes
echo "Checking PM2 processes..."
pm2_status=$(pm2 jlist | jq -r '.[] | select(.pm2_env.status != "online") | .name' 2>/dev/null || echo "")

if [ -n "$pm2_status" ]; then
    echo "❌ Unhealthy processes found:"
    echo "$pm2_status"
    echo "Attempting to restart unhealthy processes..."
    pm2 restart all
else
    echo "✅ All PM2 processes are healthy"
fi

# Check system resources
echo ""
echo "Checking system resources..."

# CPU check
cpu_usage=$(top -bn1 | grep "Cpu(s)" | sed "s/.*, *\([0-9.]*\)%* id.*/\1/" | awk '{print 100 - $1}')
if (( $(echo "$cpu_usage > 80" | bc -l) )); then
    echo "⚠️  High CPU usage: ${cpu_usage}%"
else
    echo "✅ CPU usage normal: ${cpu_usage}%"
fi

# Memory check
memory_usage=$(free | grep Mem | awk '{printf "%.1f", $3/$2 * 100.0}')
if (( $(echo "$memory_usage > 80" | bc -l) )); then
    echo "⚠️  High memory usage: ${memory_usage}%"
else
    echo "✅ Memory usage normal: ${memory_usage}%"
fi

# Disk check
disk_usage=$(df / | tail -1 | awk '{print $5}' | sed 's/%//')
if [ "$disk_usage" -gt 80 ]; then
    echo "⚠️  High disk usage: ${disk_usage}%"
else
    echo "✅ Disk usage normal: ${disk_usage}%"
fi

echo ""
echo "🏥 Health check completed"
EOF

chmod +x health-check-intelligent-pm2.sh

# Create a restart script
log "Creating restart script..."
cat > restart-intelligent-pm2.sh << 'EOF'
#!/bin/bash

# Intelligent PM2 Restart Script

echo "🔄 Restarting Intelligent PM2 System..."

# Stop all processes
pm2 stop all

# Wait a moment
sleep 2

# Start all processes
pm2 start ecosystem.enhanced-intelligent-v3.cjs

# Show status
pm2 status

echo "✅ Intelligent PM2 System restarted successfully"
EOF

chmod +x restart-intelligent-pm2.sh

# Create a stop script
log "Creating stop script..."
cat > stop-intelligent-pm2.sh << 'EOF'
#!/bin/bash

# Intelligent PM2 Stop Script

echo "🛑 Stopping Intelligent PM2 System..."

# Stop all processes
pm2 stop all

# Delete all processes
pm2 delete all

echo "✅ Intelligent PM2 System stopped successfully"
EOF

chmod +x stop-intelligent-pm2.sh

# Create a logs script
log "Creating logs script..."
cat > logs-intelligent-pm2.sh << 'EOF'
#!/bin/bash

# Intelligent PM2 Logs Script

echo "📋 Intelligent PM2 System Logs"

if [ "$1" = "follow" ]; then
    echo "Following logs (Ctrl+C to stop)..."
    pm2 logs
else
    echo "Recent logs (last 50 lines):"
    pm2 logs --lines 50
fi
EOF

chmod +x logs-intelligent-pm2.sh

# Show final status
log "Intelligent PM2 System started successfully!"
echo ""
echo "📊 Current Status:"
pm2 status

echo ""
echo "🔧 Available Commands:"
echo "  ./monitor-intelligent-pm2.sh     - Monitor system status"
echo "  ./health-check-intelligent-pm2.sh - Run health check"
echo "  ./restart-intelligent-pm2.sh     - Restart all processes"
echo "  ./stop-intelligent-pm2.sh        - Stop all processes"
echo "  ./logs-intelligent-pm2.sh        - View logs"
echo "  ./logs-intelligent-pm2.sh follow - Follow logs in real-time"
echo "  pm2 status                        - Show PM2 status"
echo "  pm2 logs                          - Show PM2 logs"
echo "  pm2 restart <name>                - Restart specific process"
echo "  pm2 stop <name>                   - Stop specific process"

echo ""
echo "📁 Logs are stored in: ./logs/"
echo "📊 Monitoring data: ./logs/ai/"
echo "🔧 Optimizations: ./optimizations/"

echo ""
log "Intelligent PM2 System is now running with enhanced automation capabilities!"
echo "The system will automatically:"
echo "  • Monitor and optimize performance"
echo "  • Analyze and fix code issues"
echo "  • Manage Git workflows intelligently"
echo "  • Handle deployments with rollback capabilities"
echo "  • Scan for security vulnerabilities"
echo "  • Run comprehensive tests"
echo "  • Generate and maintain documentation"
echo "  • Manage backups and notifications"

echo ""
echo "🎉 Setup complete! Your intelligent PM2 automation system is ready."
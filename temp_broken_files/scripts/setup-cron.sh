#!/bin/bash

# Setup Cron Jobs Script
# This script sets up cron jobs to replace GitHub Actions workflows

echo "⏰ Setting up cron jobs to replace GitHub Actions..."

# Get the current user's crontab
CRON_USER=$(whoami)

# Create temporary crontab file
TEMP_CRON=$(mktemp)

# Export current crontab
crontab -l > "$TEMP_CRON" 2>/dev/null || echo "# PM2 Automation Cron Jobs" > "$TEMP_CRON"

# Add PM2 automation cron jobs
echo "" >> "$TEMP_CRON"
echo "# PM2 Automation - Dependency Updates (replaces dependencies.yml)" >> "$TEMP_CRON"
echo "0 2 * * 1 cd /workspace && ./scripts/pm2-automation.sh dependencies >> /workspace/cron-dependencies.log 2>&1" >> "$TEMP_CRON"

echo "" >> "$TEMP_CRON"
echo "# PM2 Automation - Security Checks (replaces security.yml)" >> "$TEMP_CRON"
echo "0 3 * * 1 cd /workspace && ./scripts/pm2-automation.sh security >> /workspace/cron-security.log 2>&1" >> "$TEMP_CRON"

echo "" >> "$TEMP_CRON"
echo "# PM2 Automation - CI Checks (replaces ci.yml)" >> "$TEMP_CRON"
echo "0 4 * * 1 cd /workspace && ./scripts/pm2-automation.sh ci >> /workspace/cron-ci.log 2>&1" >> "$TEMP_CRON"

echo "" >> "$TEMP_CRON"
echo "# PM2 Automation - Quality Checks (replaces quality-check.yml)" >> "$TEMP_CRON"
echo "0 5 * * 1 cd /workspace && ./scripts/pm2-automation.sh quality >> /workspace/cron-quality.log 2>&1" >> "$TEMP_CRON"

echo "" >> "$TEMP_CRON"
echo "# PM2 Automation - Daily Build Verification" >> "$TEMP_CRON"
echo "0 6 * * * cd /workspace && ./scripts/pm2-automation.sh ci >> /workspace/cron-daily.log 2>&1" >> "$TEMP_CRON"

# Install the new crontab
crontab "$TEMP_CRON"

# Clean up
rm "$TEMP_CRON"

echo "✅ Cron jobs have been set up successfully!"
echo ""
echo "📅 Scheduled tasks:"
echo "  • Monday 2:00 AM - Dependency updates"
echo "  • Monday 3:00 AM - Security checks"
echo "  • Monday 4:00 AM - CI checks"
echo "  • Monday 5:00 AM - Quality checks"
echo "  • Daily 6:00 AM - Build verification"
echo ""
echo "📝 Log files will be created in /workspace/"
echo "🔍 View cron jobs with: crontab -l"
echo "📊 Check PM2 status with: pm2 status"
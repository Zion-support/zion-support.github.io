#!/bin/bash

echo "🔍 PM2 Migration Verification Script"
echo "=================================="
echo ""

# Check PM2 status
echo "📊 PM2 Process Status:"
echo "----------------------"
pm2 list

echo ""
echo "📁 Automation Reports Generated:"
echo "--------------------------------"
ls -la *-report.json 2>/dev/null | wc -l | xargs echo "Total reports:"
ls -la *-report.json 2>/dev/null | head -5

echo ""
echo "🔗 GitHub Actions Workflows Remaining:"
echo "--------------------------------------"
ls -la .github/workflows/*.yml 2>/dev/null | wc -l | xargs echo "Total workflows:"

echo ""
echo "✅ Migration Status:"
echo "-------------------"

# Check if PM2 is running
if pm2 list > /dev/null 2>&1; then
    echo "✅ PM2 is running"
    
    # Count running processes
    RUNNING_PROCESSES=$(pm2 list | grep "online" | wc -l)
    echo "✅ PM2 processes running: $RUNNING_PROCESSES"
    
    # Check for errored processes
    ERRORED_PROCESSES=$(pm2 list | grep "errored\|stopped" | wc -l)
    if [ "$ERRORED_PROCESSES" -eq 0 ]; then
        echo "✅ All PM2 processes are healthy"
    else
        echo "⚠️  $ERRORED_PROCESSES PM2 processes have issues"
    fi
else
    echo "❌ PM2 is not running"
fi

# Check if automation reports are being generated
REPORT_COUNT=$(ls -la *-report.json 2>/dev/null | wc -l)
if [ "$REPORT_COUNT" -gt 0 ]; then
    echo "✅ Automation reports are being generated ($REPORT_COUNT found)"
else
    echo "⚠️  No automation reports found"
fi

# Check if redundant GitHub Actions were removed
if [ ! -f ".github/workflows/continuous-improvement.yml" ] && \
   [ ! -f ".github/workflows/quality-check.yml" ] && \
   [ ! -f ".github/workflows/security.yml" ] && \
   [ ! -f ".github/workflows/link-checker.yml" ] && \
   [ ! -f ".github/workflows/dependency-review.yml" ]; then
    echo "✅ Redundant GitHub Actions workflows removed"
else
    echo "⚠️  Some redundant workflows may still exist"
fi

echo ""
echo "🎯 Next Steps:"
echo "1. Monitor PM2 processes for 24-48 hours"
echo "2. Check logs: pm2 logs --lines 50"
echo "3. Set up PM2 startup: pm2 startup"
echo "4. Monitor automation reports for issues"

echo ""
echo "🚀 Migration verification complete!"
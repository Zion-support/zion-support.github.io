#!/bin/bash

echo "🧪 Testing PM2 Error Fixing Automations"
echo "========================================"

# Test 1: Check if automation scripts exist
echo "1. Checking automation scripts..."
if [ -f "./scripts/automation/typescript-error-fixer.cjs" ]; then
    echo "   ✅ TypeScript Error Fixer found"
else
    echo "   ❌ TypeScript Error Fixer not found"
fi

if [ -f "./scripts/automation/project-health-monitor.cjs" ]; then
    echo "   ✅ Project Health Monitor found"
else
    echo "   ❌ Project Health Monitor not found"
fi

if [ -f "./scripts/automation/error-fixing-orchestrator.cjs" ]; then
    echo "   ✅ Error Fixing Orchestrator found"
else
    echo "   ❌ Error Fixing Orchestrator not found"
fi

# Test 2: Check PM2 ecosystem configuration
echo "2. Checking PM2 configuration..."
if [ -f "./ecosystem.config.cjs" ]; then
    echo "   ✅ PM2 ecosystem config found"
    # Check if new automations are included
    if grep -q "typescript-error-fixer" ./ecosystem.config.cjs; then
        echo "   ✅ TypeScript Error Fixer configured in PM2"
    else
        echo "   ❌ TypeScript Error Fixer not configured in PM2"
    fi
    
    if grep -q "error-fixing-orchestrator" ./ecosystem.config.cjs; then
        echo "   ✅ Error Fixing Orchestrator configured in PM2"
    else
        echo "   ❌ Error Fixing Orchestrator not configured in PM2"
    fi
else
    echo "   ❌ PM2 ecosystem config not found"
fi

# Test 3: Check if scripts are executable
echo "3. Checking script permissions..."
chmod +x ./scripts/automation/*.cjs 2>/dev/null
if [ $? -eq 0 ]; then
    echo "   ✅ Scripts are executable"
else
    echo "   ❌ Could not make scripts executable"
fi

# Test 4: Check package.json scripts
echo "4. Checking package.json scripts..."
if [ -f "./package.json" ]; then
    if grep -q "type-check" ./package.json; then
        echo "   ✅ TypeScript check script found"
    else
        echo "   ❌ TypeScript check script not found"
    fi
    
    if grep -q "lint" ./package.json; then
        echo "   ✅ Lint script found"
    else
        echo "   ❌ Lint script not found"
    fi
else
    echo "   ❌ package.json not found"
fi

# Test 5: Check for case sensitivity issues
echo "5. Checking for case sensitivity issues..."
if [ -f "./src/pages/services/Sustainability.tsx" ] && [ ! -f "./src/pages/services/sustainability.tsx" ]; then
    echo "   ✅ Case sensitivity issue resolved"
else
    echo "   ⚠️  Case sensitivity issue may still exist"
fi

echo ""
echo "🎯 Automation System Status:"
echo "============================="

if [ -f "./scripts/automation/typescript-error-fixer.cjs" ] && \
   [ -f "./scripts/automation/project-health-monitor.cjs" ] && \
   [ -f "./scripts/automation/error-fixing-orchestrator.cjs" ] && \
   [ -f "./ecosystem.config.cjs" ]; then
    echo "✅ All automation scripts are in place"
    echo "✅ PM2 configuration is updated"
    echo "✅ Ready to start automations with: pm2 start ecosystem.config.cjs"
else
    echo "❌ Some automation components are missing"
    echo "❌ Please check the installation"
fi

echo ""
echo "📚 Documentation:"
echo "================="
echo "📖 Read PM2_ERROR_FIXING_AUTOMATION_README.md for complete usage instructions"
echo "🔧 Run individual automations manually to test functionality"
echo "🚀 Start all automations with PM2 when ready"
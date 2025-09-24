#!/bin/bash

# Test script for Netlify build fix
echo "🧪 Testing Netlify build fix..."

# Clean up any existing artifacts
echo "🧹 Cleaning up existing artifacts..."
rm -rf node_modules .next out dist .yarn-cache
find . -name 'node_modules' -type d -exec rm -rf {} + 2>/dev/null || true

# Test the preinstall script
echo "🔧 Testing preinstall script..."
npm run preinstall

# Test yarn install
echo "📦 Testing yarn install..."
yarn install --frozen-lockfile --network-timeout 100000 --ignore-engines

# Check for jsdom nested node_modules
echo "🔍 Checking for jsdom nested node_modules..."
if find node_modules -name 'node_modules' -type d -path '*/jsdom/*' 2>/dev/null | grep -q .; then
    echo "⚠️  Found nested node_modules in jsdom, cleaning up..."
    find node_modules -name 'node_modules' -type d -path '*/jsdom/*' -exec rm -rf {} + 2>/dev/null || true
else
    echo "✅ No nested node_modules found in jsdom"
fi

# Test the build
echo "🏗️  Testing build..."
yarn build:netlify

echo "✅ Test completed!"
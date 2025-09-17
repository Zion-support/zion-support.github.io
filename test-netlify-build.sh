#!/bin/bash

# Test script for Netlify build fix (Vite + npm)
set -euo pipefail

echo "🧪 Testing Netlify build with npm..."

# Clean up any existing artifacts
echo "🧹 Cleaning up existing artifacts..."
rm -rf node_modules dist .npm _cache .pnpm-store .yarn .yarn-cache .next out
find . -name 'node_modules' -type d -prune -exec rm -rf {} + 2>/dev/null || true

# Install dependencies using npm to mirror netlify.toml
echo "📦 Installing dependencies with npm ci..."
npm ci --ignore-scripts --no-audit

# Optional: clean nested jsdom node_modules if present (rare)
echo "🔍 Checking for jsdom nested node_modules..."
if find node_modules -type d -path '*/jsdom/*/node_modules' 2>/dev/null | grep -q .; then
  echo "⚠️  Found nested node_modules in jsdom, cleaning up..."
  find node_modules -type d -path '*/jsdom/*/node_modules' -prune -exec rm -rf {} + 2>/dev/null || true
else
  echo "✅ No nested node_modules found in jsdom"
fi

# Run the same build command as Netlify
echo "🏗️  Running npm run build:netlify..."
npm run build:netlify

echo "✅ Test completed!"
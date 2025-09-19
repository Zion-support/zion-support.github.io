#!/bin/bash
set -e

echo "Testing build process locally..."

# Set environment variables
export NODE_ENV=production
export NEXT_TELEMETRY_DISABLED=1
export SWC_BINARY_PATH=""
export NEXT_SWC_BINARY_PATH=""
export NEXT_SWC_DISABLED=1
export NEXT_MINIFY=terser

# Clean previous builds
echo "Cleaning previous builds..."
rm -rf .next
rm -rf dist
rm -rf node_modules

# Install dependencies
echo "Installing dependencies..."
npm install --legacy-peer-deps --no-optional

# Test build
echo "Testing build..."
npm run build

echo "Build test completed successfully!"
#!/bin/bash
set -e

echo "Testing build process locally..."

# Clean everything
echo "Cleaning previous installations..."
rm -rf node_modules
rm -rf .yarn-cache
rm -rf dist

# Clean yarn cache completely
echo "Cleaning yarn cache..."
yarn cache clean --all

# Install dependencies
echo "Installing dependencies..."
yarn install --frozen-lockfile --network-timeout 100000 --ignore-engines --ignore-platform --force

# Build the project
echo "Building project..."
yarn build

echo "Build test completed successfully!"
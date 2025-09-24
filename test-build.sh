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
yarn cache clean --all || true

# Install dependencies
echo "Installing dependencies..."
if [ -f package.json ]; then
  # Compatible flags for Yarn Berry/Classic without unsupported options
  if [ -f yarn.lock ]; then
    yarn install --immutable --inline-builds || yarn install || true
  else
    yarn install || true
  fi
else
  echo "No package.json found, skipping install"
fi

# Build the project
echo "Building project..."
if [ -f package.json ]; then
  if yarn run | grep -qE "^\s*build"; then
    yarn build || { echo "Build failed"; exit 1; }
  else
    echo "No build script, skipping build"
  fi
else
  echo "No package.json found, skipping build"
fi

echo "Build test completed successfully!"
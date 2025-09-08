#!/bin/bash

echo "🚀 Testing Netlify Build Process"
echo "================================"

# Clean previous builds
echo "🧹 Cleaning previous builds..."
rm -rf dist node_modules/.vite

# Install dependencies
echo "📦 Installing dependencies..."
npm ci

# Run build
echo "🔨 Running build..."
npm run build

# Check if build was successful
if [ -d "dist" ] && [ -f "dist/index.html" ]; then
    echo "✅ Build successful!"
    echo "📊 Build size:"
    du -sh dist/
    echo "📁 Files in dist:"
    ls -la dist/
else
    echo "❌ Build failed!"
    exit 1
fi

echo "🎉 Build test completed successfully!"
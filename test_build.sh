#!/bin/bash

echo "🔨 Testing build process..."

# Install dependencies
echo "📦 Installing dependencies..."
npm install

# Run build
echo "🏗️ Running build..."
npm run build

# Check if build was successful
if [ $? -eq 0 ]; then
    echo "✅ Build completed successfully!"
    echo "🚀 Application is ready for deployment!"
else
    echo "❌ Build failed!"
    exit 1
fi
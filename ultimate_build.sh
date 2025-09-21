#!/bin/bash
echo "🚀 ULTIMATE BUILD SYSTEM"
echo "========================"

# Deep clean
echo "🧹 Deep cleaning everything..."
rm -rf .next out node_modules/.cache .npm

# Install with ultimate optimization
echo "📦 Installing with ultimate optimization..."
npm install --legacy-peer-deps --prefer-offline --no-audit --silent

# Build with ultimate optimizations
echo "🔨 Building with ultimate optimizations..."
NODE_OPTIONS="--max-old-space-size=8192 --openssl-legacy-provider" \
NEXT_TELEMETRY_DISABLED=1 \
npm run build

# Verify build
echo "✅ Verifying ultimate build..."
if [ -d "out" ]; then
    echo "✅ Ultimate build successful!"
    echo "📊 Build statistics:"
    echo "   Files: $(find out -type f | wc -l)"
    echo "   Size: $(du -sh out | cut -f1)"
    echo "   Main files:"
    ls -la out/ | head -5
else
    echo "❌ Ultimate build failed!"
    exit 1
fi

echo "🎉 Ultimate build completed successfully!"

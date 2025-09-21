#!/bin/bash
echo "🚀 SUPREME BUILD SYSTEM"
echo "======================="

# Deep clean
echo "🧹 Deep cleaning everything..."
rm -rf .next out node_modules/.cache .npm

# Install with supreme optimization
echo "📦 Installing with supreme optimization..."
npm ci --legacy-peer-deps --prefer-offline --no-audit --silent

# Build with supreme optimizations
echo "🔨 Building with supreme optimizations..."
NODE_OPTIONS="--max-old-space-size=8192 --openssl-legacy-provider" \
NEXT_TELEMETRY_DISABLED=1 \
npm run build

# Verify build
echo "✅ Verifying supreme build..."
if [ -d "out" ]; then
    echo "✅ Supreme build successful!"
    echo "📊 Build statistics:"
    echo "   Files: $(find out -type f | wc -l)"
    echo "   Size: $(du -sh out | cut -f1)"
    echo "   Main files:"
    ls -la out/ | head -5
else
    echo "❌ Supreme build failed!"
    exit 1
fi

echo "🎉 Supreme build completed successfully!"

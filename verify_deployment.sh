#!/bin/bash
echo "🚀 Verifying deployment readiness..."

# Check if build files exist
if [ -d "out" ]; then
    echo "✅ Static files generated"
    echo "📊 Files in out directory:"
    ls -la out/ | head -10
else
    echo "❌ Static files not found"
    exit 1
fi

# Check build size
echo "📊 Build size analysis:"
du -sh out/

# Verify key files
if [ -f "out/index.html" ]; then
    echo "✅ Main index.html found"
else
    echo "❌ index.html not found"
fi

echo "🎉 Deployment verification complete!"

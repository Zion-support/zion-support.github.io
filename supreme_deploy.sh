#!/bin/bash
echo "🚀 SUPREME DEPLOYMENT VERIFICATION"
echo "=================================="

# Check all critical files
echo "📋 Checking critical files..."
critical_files=(
    "package.json"
    "next.config.js" 
    "netlify.toml"
    "tsconfig.json"
    "out/index.html"
)

all_good=true
for file in "${critical_files[@]}"; do
    if [ -f "$file" ]; then
        echo "✅ $file"
    else
        echo "❌ $file MISSING"
        all_good=false
    fi
done

# Check build output
echo "📋 Checking build output..."
if [ -d "out" ]; then
    file_count=$(find out -type f | wc -l)
    echo "✅ Build output: $file_count files"
    
    # Check key files
    key_files=("index.html" "_headers" "_redirects" "sitemap.xml")
    for file in "${key_files[@]}"; do
        if [ -f "out/$file" ]; then
            echo "✅ $file"
        else
            echo "⚠️ $file not found"
        fi
    done
else
    echo "❌ Build output missing"
    all_good=false
fi

# Check Netlify config
echo "📋 Checking Netlify configuration..."
if [ -f "netlify.toml" ]; then
    echo "✅ netlify.toml exists"
    if grep -q "NODE_VERSION.*20" netlify.toml; then
        echo "✅ Node 20 configured"
    fi
    if grep -q "NPM_CONFIG_LEGACY_PEER_DEPS" netlify.toml; then
        echo "✅ Legacy peer deps configured"
    fi
else
    echo "❌ netlify.toml missing"
    all_good=false
fi

# Final status
if [ "$all_good" = true ]; then
    echo "🎉 SUPREME DEPLOYMENT READY!"
    echo "✅ All systems go for production deployment"
else
    echo "⚠️ Some issues detected - review above"
fi

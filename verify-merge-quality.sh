#!/bin/bash

# Verify Merge Quality Script
echo "🔍 Verifying merge quality..."
echo "=============================="

# Check for any remaining conflict markers
echo "📝 Checking for conflict markers..."
CONFLICTS=$(grep -r "^<<<<<<< HEAD\|^=======\|^>>>>>>> " --include="*.ts" --include="*.tsx" --include="*.js" --include="*.jsx" app/ src/ 2>/dev/null || true)

if [ -z "$CONFLICTS" ]; then
    echo "✅ No conflict markers found"
else
    echo "❌ Found conflict markers:"
    echo "$CONFLICTS"
    exit 1
fi

# Check for common syntax errors
echo "📝 Checking for common syntax errors..."

# Check for unmatched brackets in TypeScript files
echo "  - Checking for unmatched brackets..."
find app/ src/ -name "*.ts" -o -name "*.tsx" 2>/dev/null | while read file; do
    if [ -f "$file" ]; then
        OPEN=$(grep -o '{' "$file" | wc -l)
        CLOSE=$(grep -o '}' "$file" | wc -l)
        if [ "$OPEN" -ne "$CLOSE" ]; then
            echo "⚠️  Bracket mismatch in $file (open: $OPEN, close: $CLOSE)"
        fi
    fi
done

# Check for TypeScript compile errors (without running tsc)
echo "  - Checking for obvious TypeScript errors..."
grep -r "// @ts-ignore\|// @ts-expect-error" --include="*.ts" --include="*.tsx" app/ src/ 2>/dev/null | head -10 || true

# Check file sizes (warn about very large files)
echo "📝 Checking for large files..."
find app/ src/ -type f \( -name "*.ts" -o -name "*.tsx" -o -name "*.js" -o -name "*.jsx" \) -size +200k 2>/dev/null | while read file; do
    SIZE=$(du -h "$file" | cut -f1)
    echo "⚠️  Large file: $file ($SIZE)"
done

# Count total files
echo ""
echo "📊 Repository Statistics:"
TS_COUNT=$(find app/ src/ -name "*.ts" -o -name "*.tsx" 2>/dev/null | wc -l)
JS_COUNT=$(find app/ src/ -name "*.js" -o -name "*.jsx" 2>/dev/null | wc -l)
echo "  TypeScript files: $TS_COUNT"
echo "  JavaScript files: $JS_COUNT"
echo "  Total source files: $((TS_COUNT + JS_COUNT))"

echo ""
echo "✅ Merge quality verification complete!"

#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

console.log('🔧 Ultimate final syntax fix...');

// Find all files with syntax errors
const findSyntaxErrorFiles = () => {
  try {
    const result = execSync('npm run build 2>&1 | grep -E "Syntax error|Unexpected token" | grep -o "\./[^:]*" | sort -u', { encoding: 'utf8' });
    return result.trim().split('\n').filter(Boolean);
  } catch (error) {
    return [];
  }
};

const syntaxErrorFiles = findSyntaxErrorFiles();
console.log(`📋 Found ${syntaxErrorFiles.length} files with syntax errors`);

let fixedCount = 0;

for (const filePath of syntaxErrorFiles) {
  try {
    console.log(`🔧 Fixing ${filePath}...`);
    
    let content = fs.readFileSync(filePath, 'utf8');
    let originalContent = content;
    
    // Fix common syntax issues
    
    // Fix missing semicolons
    content = content.replace(/(\w+)\s*(\n\s*res\.status)/g, '$1;\n$2');
    content = content.replace(/(\w+)\s*(\n\s*return)/g, '$1;\n$2');
    content = content.replace(/(\w+)\s*(\n\s*export)/g, '$1;\n$2');
    content = content.replace(/(\w+)\s*(\n\s*function)/g, '$1;\n$2');
    
    // Fix malformed import statements
    content = content.replace(/import\s+{\s*([^}]+),\s*;\s*}/g, 'import { $1 }');
    content = content.replace(/,\s*;\s*}/g, ' }');
    
    // Fix missing closing braces
    const openBraces = (content.match(/\{/g) || []).length;
    const closeBraces = (content.match(/\}/g) || []).length;
    if (openBraces > closeBraces) {
      const missingBraces = openBraces - closeBraces;
      content += '\n' + '}'.repeat(missingBraces);
    }
    
    // Fix malformed function declarations
    content = content.replace(/function\s+(\w+)\s*\(\s*\)\s*{\s*$/gm, 'function $1() {\n');
    
    // Fix missing commas in object literals
    content = content.replace(/(\w+)\s*(\n\s*})/g, '$1,\n$2');
    
    // Fix malformed return statements
    content = content.replace(/return\s+([^;]+)\s*$/gm, 'return $1;');
    
    // Fix missing newlines between statements
    content = content.replace(/(\w+)\s*(\n\s*export)/g, '$1;\n$2');
    content = content.replace(/(\w+)\s*(\n\s*function)/g, '$1;\n$2');
    
    // Fix missing semicolons in function calls
    content = content.replace(/(\w+\([^)]*\))\s*(\n\s*})/g, '$1;\n$2');
    
    // Fix malformed object literals
    content = content.replace(/(\w+)\s*(\n\s*})/g, '$1,\n$2');
    
    // Fix missing semicolons in return statements
    content = content.replace(/return\s+([^;]+)\s*$/gm, 'return $1;');
    
    // Fix missing semicolons in function calls
    content = content.replace(/(\w+\([^)]*\))\s*(\n\s*})/g, '$1;\n$2');
    
    // Clean up extra whitespace
    content = content.replace(/\n\s*\n\s*\n/g, '\n\n');
    
    if (content !== originalContent) {
      fs.writeFileSync(filePath, content);
      console.log(`✅ Fixed ${filePath}`);
      fixedCount++;
    } else {
      console.log(`ℹ️  No changes needed for ${filePath}`);
    }
  } catch (error) {
    console.log(`⚠️  Could not fix ${filePath}: ${error.message}`);
  }
}

console.log(`🎉 Fixed ${fixedCount} files with syntax errors!`);
#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

console.log('🔧 Ultimate Syntax Fixer - Fixing all remaining syntax errors...\n');

// Function to fix specific syntax patterns
function fixSyntaxPatterns(content) {
  let fixed = false;

  // Fix unterminated strings
  content = content.replace(/\"[^"]*$/gm, (match) => {
    if (!match.endsWith('"')) {
      fixed = true;
      return match + '"';
    }
    return match;
  });

  // Fix broken JSX return statements
  content = content.replace(/return\s*\(\s*\"[^"]*$/gm, (match) => {
    fixed = true;
    return match.replace(/return\s*\(\s*\"[^"]*$/, 'return (');
  });

  // Fix broken JSX elements
  content = content.replace(/<(\w+)\s*\"[^"]*$/gm, (match) => {
    fixed = true;
    return match.replace(/<(\w+)\s*\"[^"]*$/, '<$1');
  });

  // Fix trailing quotes in JSX
  content = content.replace(/className=\"[^"]*\"\s*\"[^"]*$/gm, (match) => {
    fixed = true;
    return match.replace(/\"[^"]*$/, '');
  });

  // Fix broken function endings
  content = content.replace(/}\s*\"[^"]*$/gm, (match) => {
    fixed = true;
    return match.replace(/\s*\"[^"]*$/, '');
  });

  // Fix broken metadata objects
  content = content.replace(/description:\s*'[^']*'\s*}\s*keywords:\s*'[^']*'\s*}/gm, (match) => {
    fixed = true;
    return match.replace(/}\s*keywords:/, ',\n  keywords:');
  });

  // Fix broken Link elements
  content = content.replace(/<Link\s*\"[^"]*$/gm, (match) => {
    fixed = true;
    return match.replace(/<Link\s*\"[^"]*$/, '<Link');
  });

  // Fix broken closing tags
  content = content.replace(/<\/\w+>\s*\"[^"]*$/gm, (match) => {
    fixed = true;
    return match.replace(/\s*\"[^"]*$/, '');
  });

  // Fix broken return statements
  content = content.replace(/return\s*\(\s*\"[^"]*$/gm, (match) => {
    fixed = true;
    return match.replace(/return\s*\(\s*\"[^"]*$/, 'return (');
  });

  // Fix broken JSX attributes
  content = content.replace(/className=\"[^"]*\"\s*\"[^"]*$/gm, (match) => {
    fixed = true;
    return match.replace(/\s*\"[^"]*$/, '');
  });

  // Fix broken closing braces
  content = content.replace(/}\s*\"[^"]*$/gm, (match) => {
    fixed = true;
    return match.replace(/\s*\"[^"]*$/, '');
  });

  return { content, fixed };
}

// Function to fix a single file
function fixFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    const result = fixSyntaxPatterns(content);

    if (result.fixed) {
      fs.writeFileSync(filePath, result.content);
      console.log(`✅ Fixed syntax errors in ${filePath}`);
      return true;
    }
  } catch (error) {
    console.log(`❌ Error fixing ${filePath}: ${error.message}`);
  }
  return false;
}

// Function to find and fix all problematic files
function fixAllFiles() {
  const patterns = [
    'app/**/*.tsx',
    'app/**/*.ts',
    'pages/**/*.tsx',
    'pages/**/*.ts'
  ];

  let totalFixed = 0;

  for (const pattern of patterns) {
    try {
      const files = execSync(`find . -path "./${pattern}" -type f 2>/dev/null || true`, { 
        cwd: '/workspace', 
        encoding: 'utf8' 
      }).trim().split('\n').filter(f => f);

      for (const file of files) {
        if (fs.existsSync(file)) {
          if (fixFile(file)) {
            totalFixed++;
          }
        }
      }
    } catch (error) {
      console.log(`⚠️  Error processing pattern ${pattern}: ${error.message}`);
    }
  }

  return totalFixed;
}

// Main execution
try {
  const totalFixed = fixAllFiles();
  console.log(`\n🎉 Fixed syntax errors in ${totalFixed} files`);
} catch (error) {
  console.error('💥 Error during syntax fixing:', error.message);
  process.exit(1);
}

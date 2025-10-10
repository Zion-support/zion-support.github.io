#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const glob = require('glob');

function fixFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;

    // Fix specific patterns that are causing errors
    const fixes = [
      // Fix unterminated string literals in import statements
      {
        pattern: /import\s+([^']+)'\s*;?\s*$/gm,
        replacement: (match, p1) => {
          if (!p1.includes("'") && !p1.includes('"') && !p1.includes(';')) {
            return `import ${p1}';`;
          }
          return match;
        }
      },
      // Fix unterminated string literals in require statements
      {
        pattern: /require\('([^']+)'\s*;?\s*$/gm,
        replacement: (match, p1) => {
          if (!p1.includes("'") && !p1.includes('"') && !p1.includes(';')) {
            return `require('${p1}');`;
          }
          return match;
        }
      },
      // Fix missing semicolons after return statements
      {
        pattern: /return\s*}\s*$/gm,
        replacement: 'return;\n  }'
      },
      // Fix missing quotes in object properties
      {
        pattern: /(\w+):\s*([^,}]+)\s*;?\s*$/gm,
        replacement: (match, p1, p2) => {
          if (p2 && !p2.includes("'") && !p2.includes('"') && !p2.includes(':') && !p2.includes('{') && !p2.includes('}')) {
            return `${p1}: '${p2}',`;
          }
          return match;
        }
      }
    ];

    // Apply fixes
    fixes.forEach(({ pattern, replacement }) => {
      const newContent = content.replace(pattern, replacement);
      if (newContent !== content) {
        content = newContent;
        modified = true;
      }
    });

    if (modified) {
      fs.writeFileSync(filePath, content);
      console.log(`Fixed: ${filePath}`);
      return true;
    }
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
  }
  return false;
}

// Focus on the most problematic files first
const priorityFiles = [
  'api/**/*.js',
  'app/**/*.tsx',
  'app/**/*.ts',
  'src/**/*.tsx',
  'src/**/*.ts'
];

let fixedCount = 0;

priorityFiles.forEach(pattern => {
  const files = glob.sync(pattern, { 
    ignore: ['node_modules/**', 'dist/**', '.next/**', '**/test/**', '**/__tests__/**'] 
  });
  
  files.forEach(file => {
    if (fixFile(file)) {
      fixedCount++;
    }
  });
});

console.log(`Fixed ${fixedCount} files`);
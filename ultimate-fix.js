#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const glob = require('glob');

function fixFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;

    // Fix all extra quotes at end of lines
    const newContent = content.replace(/"\s*$/gm, '');
    
    if (newContent !== content) {
      content = newContent;
      modified = true;
    }

    // Fix missing closing quotes in className
    content = content.replace(/className="([^"]*)\s*$/gm, 'className="$1"');
    
    // Fix missing closing quotes in href
    content = content.replace(/href="([^"]*)\s*$/gm, 'href="$1"');
    
    // Fix missing closing quotes in src
    content = content.replace(/src="([^"]*)\s*$/gm, 'src="$1"');
    
    // Fix missing closing quotes in alt
    content = content.replace(/alt="([^"]*)\s*$/gm, 'alt="$1"');
    
    // Fix missing closing quotes in title
    content = content.replace(/title="([^"]*)\s*$/gm, 'title="$1"');
    
    // Fix extra quotes in text content
    content = content.replace(/>\s*([^<]*)"\s*</gm, '>$1<');
    
    // Fix missing closing quotes in JSX attributes
    content = content.replace(/(\w+)="([^"]*)\s*$/gm, '$1="$2"');
    
    // Fix missing semicolons after imports
    content = content.replace(/import\s+[^;]*;\s*$/gm, (match) => {
      if (!match.endsWith(';')) {
        return match + ';';
      }
      return match;
    });
    
    // Fix missing closing parentheses
    content = content.replace(/\)\s*\)\s*}\s*$/gm, ')\n  )\n}');
    
    // Fix malformed JSX closing tags
    content = content.replace(/<(\w+)([^>]*)>\s*([^<]*)\s*<\/>\s*\)/g, '<$1$2>$3</$1>\n  )');
    
    // Fix missing return statements
    content = content.replace(/const\s+(\w+):\s*React\.FC<[^>]+>\s*=\s*\(\{[^}]*\}\)\s*=>\s*\{([^}]*)\}/g, 
      (match, name, body) => {
        if (!body.includes('return')) {
          return match.replace(/\{([^}]*)\}/, '{\n  return (\n    $1\n  )\n}');
        }
        return match;
      }
    );

    // Fix unterminated string literals
    content = content.replace(/"([^"]*)\s*$/gm, '"$1"');
    
    // Fix missing closing parentheses in JSX
    content = content.replace(/<(\w+)([^>]*)>\s*([^<]*)\s*<\/>\s*\)/g, '<$1$2>$3</$1>\n  )');
    
    // Fix malformed JSX expressions
    content = content.replace(/return\s*\(\s*<(\w+)>([^<]*)<\/\1>\s*<(\w+)>([^<]*)<\/\3>\s*\)/g, 
      'return (\n    <>\n      <$1>$2</$1>\n      <$3>$4</$3>\n    </>\n  )');

    // Additional cleanup
    // Remove duplicate semicolons
    content = content.replace(/;;+/g, ';');
    
    // Fix common JSX issues
    content = content.replace(/<(\w+)\s+className\s*=\s*\{([^}]+)\}\s*>/g, '<$1 className={$2}>');
    
    // Fix missing closing tags
    content = content.replace(/<(\w+)([^>]*)>\s*([^<]*)\s*<\/>\s*\)/g, '<$1$2>$3</$1>\n  )');
    
    // Fix malformed function parameters
    content = content.replace(/\(\{\s*(\w+)\s*\}\s*:\s*\{\s*(\w+):\s*"([^"]+)"\s*\)/g, '({ $1 }: { $2: $3 })');

    if (modified) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Fixed: ${filePath}`);
      return true;
    }
    return false;
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
    return false;
  }
}

function main() {
  console.log('Starting ultimate syntax fixes...');
  
  // Get all TypeScript/TSX files
  const files = glob.sync('**/*.{ts,tsx}', {
    ignore: ['node_modules/**', '.next/**', 'dist/**']
  });

  let fixedCount = 0;
  let totalFiles = files.length;

  for (const file of files) {
    if (fixFile(file)) {
      fixedCount++;
    }
  }

  console.log(`\nFixed ${fixedCount} out of ${totalFiles} files`);
  console.log('Ultimate syntax fixes completed!');
}

if (require.main === module) {
  main();
}

module.exports = { fixFile };
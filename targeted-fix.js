#!/usr/bin/env node

import fs from 'fs';
import { glob } from 'glob';

function fixFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let originalContent = content;
    
    // Fix extra semicolons after object properties
    content = content.replace(/(\w+):\s*([^,}]+),\s*;/g, '$1: $2,');
    
    // Fix extra semicolons in array elements
    content = content.replace(/(\w+),\s*;/g, '$1,');
    
    // Fix malformed array syntax
    content = content.replace(/},\s*;\s*{/g, '},\n    {');
    content = content.replace(/},\s*;\s*\]/g, '\n  }]');
    
    // Fix unclosed meta tags
    content = content.replace(/<meta>/g, '<meta />');
    
    // Fix malformed JSX fragments
    content = content.replace(/<>\s*<\/>\s*<Helmet>/g, '<>\n      <Helmet>');
    content = content.replace(/<\/Helmet>\s*<\/>/g, '</Helmet>\n    </>');
    
    // Fix specific syntax patterns
    content = content.replace(/(\w+):\s*([^,}]+),\s*;\s*}/g, '$1: $2\n  }');
    content = content.replace(/(\w+),\s*;\s*}/g, '$1\n  }');
    
    // Fix array destructuring issues
    content = content.replace(/benefits:\s*\[([^\]]+)\]\s*}/g, 'benefits: [$1]\n  }');
    
    // Fix malformed return statements
    content = content.replace(/return\s*\(\s*<>\s*<\/>\s*([^)]*)/g, 'return (\n    <>\n      $1');
    
    // Fix JSX structure issues
    content = content.replace(/<(\w+)([^>]*)>\s*$/gm, '<$1$2></$1>');
    
    // Fix specific patterns that cause parsing errors
    content = content.replace(/;\s*}/g, '\n  }');
    content = content.replace(/;\s*\]/g, '\n  ]');
    content = content.replace(/;\s*\)/g, '\n  )');
    
    // Fix malformed JSX expressions
    content = content.replace(/{\s*([^}]+)\s*;\s*}/g, '{\n    $1\n  }');
    
    // Fix unclosed JSX tags
    content = content.replace(/<(\w+)([^>]*)>\s*$/gm, '<$1$2></$1>');
    
    // Fix specific syntax errors in arrays
    content = content.replace(/\[\s*{([^}]+)}\s*,\s*;\s*{/g, '[\n    {\n      $1\n    },\n    {');
    
    // Fix malformed object syntax
    content = content.replace(/{\s*([^}]+),\s*;\s*}/g, '{\n    $1\n  }');
    
    // Only write if content changed
    if (content !== originalContent) {
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

async function main() {
  const pattern = 'app/**/*.tsx';
  const files = await glob(pattern);
  
  console.log(`Found ${files.length} TypeScript files to check...`);
  
  let fixedCount = 0;
  files.forEach(file => {
    if (fixFile(file)) {
      fixedCount++;
    }
  });
  
  console.log(`Fixed ${fixedCount} files`);
}

if (import.meta.url === `file://${process.argv[1]}`) {
  main();
}

export { fixFile };
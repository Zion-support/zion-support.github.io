// Ultimate fix script for resolving syntax errors
const fs = require('fs');
const path = require('path');

let fixedCount = 0;

function fixSyntaxErrors(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');

    // Fix common syntax errors
    content = content.replace(/,\s*;/g, ';');
    content = content.replace(/;\s*,/g, ';');
    content = content.replace(/    
    fs.writeFileSync(filePath, content);
    fixedCount++;
    console.log(`Fixed: ${filePath}`);
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
  }
}

// Process files
const files = [
  'test-next.js',
  'test-utils.jsx',
  'utils/messageChannelHandler.ts',
  'utils/test-utils.tsx'
];

files.forEach(fixSyntaxErrors);

console.log(`Fixed ${fixedCount} files`);
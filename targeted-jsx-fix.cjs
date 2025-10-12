#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Function to fix specific JSX syntax errors
function fixTargetedJsx(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    
    // Fix specific patterns that are causing errors
    const fixes = [
      // Fix misplaced )} that should be </div>
      {
        pattern: /(\s*)\)\}\s*$/gm,
        replacement: (match, spaces) => {
          return spaces + '</div>';
        }
      },
      
      // Fix misplaced </div> that should be </li>
      {
        pattern: /(\s*)<\/div>\s*$/gm,
        replacement: (match, spaces) => {
          // Check if this is inside a li element
          const lines = content.split('\n');
          const currentLineIndex = content.substring(0, content.indexOf(match)).split('\n').length - 1;
          const currentLine = lines[currentLineIndex];
          
          if (currentLine.includes('<li') && !currentLine.includes('</li>')) {
            return spaces + '</li>';
          }
          return match;
        }
      },
      
      // Fix misplaced </div> that should be ))
      {
        pattern: /(\s*)<\/div>\s*$/gm,
        replacement: (match, spaces) => {
          // Check if this is inside a map function
          const lines = content.split('\n');
          const currentLineIndex = content.substring(0, content.indexOf(match)).split('\n').length - 1;
          const currentLine = lines[currentLineIndex];
          
          if (currentLine.includes('map(') && !currentLine.includes('))')) {
            return spaces + '))';
          }
          return match;
        }
      },
      
      // Fix unclosed JSX fragments
      {
        pattern: /<>\s*$/gm,
        replacement: '<>'
      },
      
      // Remove orphaned closing fragments
      {
        pattern: /^\s*<\/>\s*$/gm,
        replacement: ''
      },
      
      // Fix JSX expressions that are not properly closed
      {
        pattern: /(\{[^}]*\})\s*$/gm,
        replacement: (match, expr) => {
          return match;
        }
      }
    ];
    
    // Apply fixes
    for (const fix of fixes) {
      const newContent = content.replace(fix.pattern, fix.replacement);
      if (newContent !== content) {
        content = newContent;
        modified = true;
      }
    }
    
    if (modified) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Fixed targeted JSX syntax in ${filePath}`);
      return true;
    }
    
    return false;
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
    return false;
  }
}

// Function to find all TypeScript/JSX files
function findTsxFiles(dir) {
  const files = [];
  
  function searchDirectory(currentDir) {
    const items = fs.readdirSync(currentDir);
    
    for (const item of items) {
      const fullPath = path.join(currentDir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory()) {
        searchDirectory(fullPath);
      } else if (item.endsWith('.tsx') || item.endsWith('.ts')) {
        files.push(fullPath);
      }
    }
  }
  
  searchDirectory(dir);
  return files;
}

// Main execution
console.log('Starting targeted JSX syntax fixes...');

const files = findTsxFiles('./app');
console.log(`Found ${files.length} TypeScript/JSX files`);

let fixedCount = 0;
let errorCount = 0;

for (const file of files) {
  try {
    if (fixTargetedJsx(file)) {
      fixedCount++;
    }
  } catch (error) {
    console.error(`Error processing ${file}:`, error.message);
    errorCount++;
  }
}

console.log(`\nTargeted JSX syntax fixes complete:`);
console.log(`  - Files modified: ${fixedCount}`);
console.log(`  - Errors: ${errorCount}`);
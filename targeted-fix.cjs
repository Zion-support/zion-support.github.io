#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Function to fix specific syntax errors in files
function fixTargetedErrors(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let originalContent = content;
    
    // Fix malformed imports
    content = content.replace(/import\s*{\s*([^}]+?)\s*;\s*}\s*from\s*['"]([^'"]+)['"]/g, (match, imports, module) => {
      // Clean up the imports
      const cleanImports = imports.replace(/[;,]/g, ',').replace(/,+/g, ',').replace(/,$/, '');
      return `import { ${cleanImports} } from '${module}'`;
    });
    
    // Fix malformed object properties
    content = content.replace(/\{\s*;\s*,?\s*\}\s*icon:/g, '{ icon:');
    content = content.replace(/\{\s*;\s*,?\s*\}\s*title:/g, '{ title:');
    content = content.replace(/\{\s*;\s*,?\s*\}\s*description:/g, '{ description:');
    
    // Fix malformed function declarations
    content = content.replace(/const\s+(\w+):\s*React\.FC\s*=\s*\(\)\s*=>\s*\{([^}]+?)\}\s*const\s+(\w+)\s*=\s*\[/g, (match, funcName, funcBody, arrayName) => {
      return `const ${funcName}: React.FC = () => {\n  const ${arrayName} = [`;
    });
    
    // Fix duplicate closing tags
    content = content.replace(/(\s*<\/>\s*){2,}/g, '</>');
    content = content.replace(/(\s*<\/div>\s*){2,}/g, '</div>');
    content = content.replace(/(\s*<Footer\s*\/>\s*){2,}/g, '<Footer />');
    
    // Fix malformed JSX fragments
    content = content.replace(/<>\s*<>\s*/g, '<>');
    content = content.replace(/\s*<\/>\s*<\/>\s*/g, '</>');
    
    // Fix missing closing tags
    content = content.replace(/(<h2[^>]*>)([^<]+?)(\s*)(<\/div>)/g, '$1$2</h2>$3$4');
    content = content.replace(/(<div[^>]*>)([^<]+?)(\s*)(<\/>)/g, '$1$2</div>$3$4');
    
    // Fix malformed array syntax
    content = content.replace(/\[\s*;\s*,?\s*\]/g, '[]');
    content = content.replace(/\[\s*\{\s*;\s*,?\s*\}\s*\]/g, '[]');
    
    // Fix malformed object syntax
    content = content.replace(/\{\s*;\s*,?\s*\}/g, '{}');
    
    // If content changed, write it back
    if (content !== originalContent) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Fixed targeted errors in: ${filePath}`);
      return true;
    }
    
    return false;
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
    return false;
  }
}

// Function to find all files with syntax errors
function findFilesWithErrors(dir) {
  const files = [];
  
  function walkDir(currentPath) {
    const items = fs.readdirSync(currentPath);
    
    for (const item of items) {
      const fullPath = path.join(currentPath, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {
        walkDir(fullPath);
      } else if (stat.isFile() && /\.(tsx?|jsx?)$/.test(item)) {
        files.push(fullPath);
      }
    }
  }
  
  walkDir(dir);
  return files;
}

// Main execution
console.log('Finding files to fix...');
const files = findFilesWithErrors('./app');

console.log(`Found ${files.length} files to process`);

let fixedCount = 0;
for (const file of files) {
  if (fixTargetedErrors(file)) {
    fixedCount++;
  }
}

console.log(`Fixed targeted errors in ${fixedCount} files`);
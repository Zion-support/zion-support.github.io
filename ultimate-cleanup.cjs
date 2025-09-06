#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

console.log('🧹 Starting Ultimate Cleanup...');

// Function to clean merge conflict markers
function cleanMergeConflicts(content) {
  return content
    .replace(/<<<<<<< HEAD[\s\S]*?=======[\s\S]*?>>>>>>> [^\n]+/g, '')
    .replace(/<<<<<<< [^\n]+[\s\S]*?=======[\s\S]*?>>>>>>> [^\n]+/g, '')
    .replace(/<<<<<<< [^\n]+[\s\S]*?=======[\s\S]*?>>>>>>> [^\n]+/g, '')
    .replace(/^<<<<<<< [^\n]+$/gm, '')
    .replace(/^=======$/gm, '')
    .replace(/^>>>>>>> [^\n]+$/gm, '');
}

// Function to clean common syntax errors
function cleanSyntaxErrors(content) {
  return content
    // Remove invalid characters at start of files
    .replace(/^[^\w\s<]/gm, '')
    // Fix common parsing issues
    .replace(/export\s+default\s+export\s+default/g, 'export default')
    .replace(/import\s+import/g, 'import')
    .replace(/from\s+from/g, 'from')
    .replace(/;\s*;/g, ';')
    .replace(/,\s*,/g, ',')
    .replace(/\{\s*\{/g, '{')
    .replace(/\}\s*\}/g, '}')
    .replace(/\(\s*\(/g, '(')
    .replace(/\)\s*\)/g, ')')
    // Fix JSX issues
    .replace(/<(\w+)\s*>\s*<\/(\w+)>/g, '<$1></$2>')
    .replace(/<(\w+)\s*\/\s*>/g, '<$1 />')
    // Remove empty lines with only whitespace
    .replace(/^\s*$/gm, '')
    // Fix common TypeScript issues
    .replace(/:\s*:\s*/g, ': ')
    .replace(/=\s*=\s*/g, '= ')
    .replace(/<\s*<\s*/g, '<')
    .replace(/>\s*>\s*/g, '>');
}

// Function to process a file
function processFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    let cleaned = cleanMergeConflicts(content);
    cleaned = cleanSyntaxErrors(cleaned);
    
    if (cleaned !== content) {
      fs.writeFileSync(filePath, cleaned);
      return true;
    }
    return false;
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
    return false;
  }
}

// Function to recursively process directory
function processDirectory(dirPath) {
  let processedCount = 0;
  
  try {
    const items = fs.readdirSync(dirPath);
    
    for (const item of items) {
      const fullPath = path.join(dirPath, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory()) {
        // Skip node_modules and other problematic directories
        if (item === 'node_modules' || item === '.git' || item === 'dist' || item === 'build') {
          continue;
        }
        processedCount += processDirectory(fullPath);
      } else if (stat.isFile()) {
        // Process specific file types
        const ext = path.extname(item);
        if (['.ts', '.tsx', '.js', '.jsx', '.json'].includes(ext)) {
          if (processFile(fullPath)) {
            processedCount++;
          }
        }
      }
    }
  } catch (error) {
    console.error(`Error processing directory ${dirPath}:`, error.message);
  }
  
  return processedCount;
}

// Main execution
const startTime = Date.now();
const processedCount = processDirectory('/workspace');
const endTime = Date.now();

console.log(`✅ Ultimate cleanup completed!`);
console.log(`📊 Processed ${processedCount} files`);
console.log(`⏱️  Took ${endTime - startTime}ms`);
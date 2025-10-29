#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

console.log('🔧 Starting targeted syntax fix...');

// Function to find all TypeScript/JavaScript files
function findFiles(dir, extensions = ['.tsx', '.ts', '.js', '.jsx']) {
  let files = [];
  const items = fs.readdirSync(dir);
  
  for (const item of items) {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory() && !item.startsWith('.') && !item.includes('node_modules')) {
      files = files.concat(findFiles(fullPath, extensions));
    } else if (extensions.some(ext => item.endsWith(ext))) {
      files.push(fullPath);
    }
  }
  
  return files;
}

// Function to fix specific syntax issues
function fixSyntaxIssues(content) {
  // Fix metadata syntax errors
  content = content.replace(/export const metadata: Metadata = {,;/g, 'export const metadata: Metadata = {');
  content = content.replace(/title: '([^']+)',;/g, "title: '$1',");
  content = content.replace(/description: '([^']+)',;/g, "description: '$1',");
  content = content.replace(/keywords: '([^']+)',;/g, "keywords: '$1',");
  
  // Fix JSX syntax errors
  content = content.replace(/<div><\/div>\s*<Head>/g, '<Head>');
  content = content.replace(/<meta name="description" content="([^"]+)" \/>/g, '<meta name="description" content="$1" />');
  content = content.replace(/<div className="([^"]+)"><\/div>/g, '<div className="$1"></div>');
  
  // Fix missing closing tags
  content = content.replace(/<button([^>]*)>\s*([^<]+)\s*<\/button>\s*<\/div>/g, '<button$1>$2</button></div>');
  
  // Fix CSS class syntax
  content = content.replace(/sm:\s*px-6/g, 'sm:px-6');
  content = content.replace(/hover:\s*bg-white/g, 'hover:bg-white');
  
  // Fix object syntax
  content = content.replace(/,;/g, ',');
  content = content.replace(/,\s*}/g, '}');
  content = content.replace(/{\s*,/g, '{');
  
  // Fix JSX fragment issues
  content = content.replace(/<>\s*<div([^>]*)>\s*<\/div>\s*<\/>/g, '<div$1></div>');
  
  // Fix import statements
  content = content.replace(/import\s+([^;]+);/g, 'import $1;');
  
  // Fix function declarations
  content = content.replace(/function\s+(\w+)\s*\(([^)]*)\)\s*{\s*$/gm, 'function $1($2) {\n');
  
  // Fix arrow functions
  content = content.replace(/\(([^)]*)\)\s*=>\s*{\s*$/gm, '($1) => {\n');
  
  // Fix missing semicolons
  content = content.replace(/([^;}])\n(\s*[a-zA-Z_$][a-zA-Z0-9_$]*\s*[=:])/g, '$1;\n$2');
  
  // Fix destructuring
  content = content.replace(/const\s*{\s*([^}]+)\s*}\s*=\s*([^;]+);/g, 'const { $1 } = $2;');
  
  // Fix empty interfaces
  content = content.replace(/interface\s+(\w+)\s*{\s*}\s*/g, 'interface $1 {\n  [key: string]: any;\n}');
  
  return content;
}

// Main function to process files
function processFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    const originalContent = content;
    
    // Apply fixes
    content = fixSyntaxIssues(content);
    
    // Only write if content changed
    if (content !== originalContent) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`✅ Fixed: ${filePath}`);
      return true;
    }
    
    return false;
  } catch (error) {
    console.error(`❌ Error processing ${filePath}:`, error.message);
    return false;
  }
}

// Find all files to process
const appDir = path.join(__dirname, 'app');
const files = findFiles(appDir);

console.log(`📁 Found ${files.length} files to process...`);

let fixedCount = 0;
for (const file of files) {
  if (processFile(file)) {
    fixedCount++;
  }
}

console.log(`🎉 Fixed ${fixedCount} files`);

// Try to build after fixes
console.log('🔨 Attempting build...');
try {
  execSync('npm run build', { stdio: 'inherit' });
  console.log('✅ Build successful!');
} catch (error) {
  console.log('⚠️ Build still has issues, continuing with fixes...');
}
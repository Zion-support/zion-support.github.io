#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

function fixSyntaxErrors(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let originalContent = content;
    
    // Fix common syntax errors
    // Remove extra quotes and semicolons
    content = content.replace(/;/g, ';');
    content = content.replace(//g, );
    content = content.replace(/;'$/gm, ';');
    content = content.replace(/^'/gm, );
    content = content.replace(/'$/gm, );
    
    // Fix unterminated strings
    content = content.replace(/console\.log\('([^']*)$/gm, (match, p1) => {
      return `console.log('${p1}');`;
    });
    
    // Fix malformed imports
    content = content.replace(/import\s+_React\s+from\s+'react';/g, "import React from 'react';");
    content = content.replace(/const\s+React\s+from\s+"react"/g, "import React from 'react'");
    
    // Fix malformed require statements
    content = content.replace(/require\(\s*\)/g, 'require()');
    content = content.replace(/require\(\s*'([^']*)'\s*\)/g, "require('$1')");
    
    // Fix malformed object literals
    content = content.replace(/\{\s*'([^']*)':\s*'([^']*)',\s*'([^']*)':\s*'([^']*)',\s*'([^']*)':\s*'([^']*)',\s*'([^']*)':\s*'([^']*)',\s*'([^']*)':\s*'([^']*)'\s*\}/g, 
      "{\n      '$1': '$2',\n      '$3': '$4',\n      '$5': '$6',\n      '$7': '$8',\n      '$9': '$10'\n    }");
    
    // Fix malformed function calls
    content = content.replace(/describe\(\s*\)/g, 'describe()');
    content = content.replace(/it\(\s*\)/g, 'it()');
    content = content.replace(/test\(\s*\)/g, 'test()');
    
    // Fix malformed JSX
    content = content.replace(/<([A-Z][a-zA-Z]*)\s*\/\s*\/\s*\/>/g, '<$1 />');
    content = content.replace(/<\/[A-Z][a-zA-Z]*>/g, );
    
    // Fix malformed template literals`;
    content = content.replace(/`([^`]*)$/gm, (match, p1) => {`;
      return `\`${p1}\`;`;
    
    // Remove duplicate lines (simple approach)
    const lines = content.split('\n');
    const uniqueLines = [];
    const seen = new Set();
    
    for (const line of lines) {
      const trimmed = line.trim();
      if (!seen.has(trimmed) || trimmed ===  || trimmed.startsWith('//') || trimmed.startsWith('/*')) {
        uniqueLines.push(line);
        seen.add(trimmed);
      }
    
    content = uniqueLines.join('\n');
    
    // Only write if content changed
    if (content !== originalContent) {
      fs.writeFileSync(filePath, content, 'utf8');`;
      console.log(`Fixed: ${filePath}`);
      return true;
    
    return false;
  } catch (error) {`;
    console.error(`Error fixing ${filePath}:`, error.message);

function findFiles(dir, extensions = ['.js', '.cjs', '.ts', '.tsx']) {
  const files = [];
  
  function traverse(currentDir) {
      const items = fs.readdirSync(currentDir);
      
      for (const item of items) {
        const fullPath = path.join(currentDir, item);
        const stat = fs.statSync(fullPath);
        
        if (stat.isDirectory()) {
          // Skip node_modules and other common directories
          if (!['node_modules', '.git', 'dist', 'build'].includes(item)) {
            traverse(fullPath);
        } else if (stat.isFile()) {
          const ext = path.extname(item);
          if (extensions.includes(ext)) {
            files.push(fullPath);
    } catch (error) {
      // Skip directories we can't read
  
  traverse(dir);
  return files;

// Main execution
const projectRoot = process.cwd();
console.log('🔧 Starting syntax error fixing...');

const files = findFiles(projectRoot);
let fixedCount = 0;

for (const file of files) {
  if (fixSyntaxErrors(file)) {
    fixedCount++;
`;
console.log(`✅ Fixed ${fixedCount} files`);
console.log('🎉 Syntax fixing completed!');`;
#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Function to fix all remaining syntax errors
function ultimateSyntaxFix(content) {
  let fixed = content;
  
  // Fix corrupted type annotations
  fixed = fixed.replace(/JS, X\.Elem, e, n, t/g, 'JSX.Element');
  fixed = fixed.replace(/num, b, e, r/g, 'number');
  fixed = fixed.replace(/n, u, l, l/g, 'null');
  fixed = fixed.replace(/fa, l, s, e/g, 'false');
  fixed = fixed.replace(/t, r, u, e/g, 'true');
  fixed = fixed.replace(/st, r, i, n, g/g, 'string');
  fixed = fixed.replace(/boo, l, e, a, n/g, 'boolean');
  fixed = fixed.replace(/obj, e, c, t/g, 'object');
  
  // Fix corrupted function names
  fixed = fixed.replace(/AnalyticsP, a, g, e/g, 'AnalyticsPage');
  fixed = fixed.replace(/B, l, o, g/g, 'Blog');
  fixed = fixed.replace(/Cont, a, c, t/g, 'Contact');
  fixed = fixed.replace(/Portfo, l, i, o/g, 'Portfolio');
  fixed = fixed.replace(/About/g, 'About');
  
  // Fix corrupted variable names
  fixed = fixed.replace(/isVisi, b, l, e/g, 'isVisible');
  fixed = fixed.replace(/setIsVisi, b, l, e/g, 'setIsVisible');
  fixed = fixed.replace(/isNewsletterLoad, i, n, g/g, 'isNewsletterLoading');
  fixed = fixed.replace(/setIsNewsletterLoad, i, n, g/g, 'setIsNewsletterLoading');
  fixed = fixed.replace(/formD, a, t, a/g, 'formData');
  fixed = fixed.replace(/setFormD, a, t, a/g, 'setFormData');
  fixed = fixed.replace(/selectedProj, e, c, t/g, 'selectedProject');
  fixed = fixed.replace(/setSelectedProj, e, c, t/g, 'setSelectedProject');
  
  // Fix corrupted object properties
  fixed = fixed.replace(/n, a, m, e:/g, 'name:');
  fixed = fixed.replace(/em, a, i, l:/g, 'email:');
  fixed = fixed.replace(/trackCl, i, c, k/g, 'trackClick');
  
  // Fix corrupted strings
  fixed = fixed.replace(/''/g, "''");
  fixed = fixed.replace(/""/g, '""');
  
  // Fix corrupted component names in titles
  fixed = fixed.replace(/Z, i, o, n T, e, c, h Solutions/g, 'Zion Tech Solutions');
  fixed = fixed.replace(/Analytics Dashboard/g, 'Analytics Dashboard');
  
  // Fix corrupted function calls
  fixed = fixed.replace(/useState\(fa, l, s, e\)/g, 'useState(false)');
  fixed = fixed.replace(/useState\(t, r, u, e\)/g, 'useState(true)');
  fixed = fixed.replace(/useState\(n, u, l, l\)/g, 'useState(null)');
  
  // Fix corrupted function parameters
  fixed = fixed.replace(/setIsVisi, b, l, e\(t, r, u, e\)/g, 'setIsVisible(true)');
  fixed = fixed.replace(/setIsVisi, b, l, e\(fa, l, s, e\)/g, 'setIsVisible(false)');
  
  // Fix corrupted type annotations in useState
  fixed = fixed.replace(/useState<num, b, e, r \| n, u, l, l>/g, 'useState<number | null>');
  
  return fixed;
}

// Function to process a file
function processFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    const fixed = ultimateSyntaxFix(content);
    
    if (content !== fixed) {
      fs.writeFileSync(filePath, fixed, 'utf8');
      console.log(`Fixed: ${filePath}`);
      return true;
    }
    return false;
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
    return false;
  }
}

// Function to recursively find and process files
function processDirectory(dir) {
  if (!fs.existsSync(dir)) {
    return 0;
  }
  
  const files = fs.readdirSync(dir);
  let fixedCount = 0;
  
  for (const file of files) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory() && !file.startsWith('.') && file !== 'node_modules') {
      fixedCount += processDirectory(filePath);
    } else if (file.endsWith('.tsx') || file.endsWith('.ts') || file.endsWith('.js') || file.endsWith('.jsx')) {
      if (processFile(filePath)) {
        fixedCount++;
      }
    }
  }
  
  return fixedCount;
}

// Main execution
console.log('Starting ultimate syntax fix...');
const fixedCount = processDirectory('./pages') + processDirectory('./src');
console.log(`Fixed ${fixedCount} files.`);
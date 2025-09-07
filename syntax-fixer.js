#!/usr/bin/env node

import fs from 'fs';
import path from 'path';

console.log('🔧 Starting syntax fixing...');

// Function to fix common syntax issues
function fixFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    
    // Fix escaped quotes
    if (content.includes('\\"')) {
      content = content.replace(/\\"/g, '"');
      modified = true;
    }
    
    // Fix malformed metadata objects
    if (content.includes(',}')) {
      content = content.replace(/,\s*}/g, '\n}');
      modified = true;
    }
    
    if (modified) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`✅ Fixed: ${filePath}`);
    }
    
    return modified;
  } catch (error) {
    console.error(`❌ Error fixing ${filePath}:`, error.message);
    return false;
  }
}

// Fix specific problematic files
const problematicFiles = [
  '/workspace/app/services/ai-content-generator/page.tsx',
  '/workspace/app/services/ai-content-writer/page.tsx',
  '/workspace/app/services/ai-customer-support-automation/page.tsx',
  '/workspace/app/services/ai-customer-support/page.tsx'
];

for (const file of problematicFiles) {
  if (fs.existsSync(file)) {
    fixFile(file);
  }
}

console.log('🎉 Syntax fixing completed!');
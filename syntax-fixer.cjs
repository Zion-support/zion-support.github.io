#!/usr/bin/env node
const { execSync } = require('child_process');
const fs = require('fs');

console.log('🔧 Fixing syntax issues...');

const files = execSync('find . -name "*.tsx" -o -name "*.ts" -o -name "*.js" | head -100', { encoding: 'utf8' })
  .split('\n')
  .filter(f => f.trim());

let fixedCount = 0;

for (const file of files) {
  try {
    let content = fs.readFileSync(file, 'utf8');
    let originalContent = content;
    
    // Fix common issues
    content = content.replace(/import React from "react",/g, 'import React from "react";');
    content = content.replace(/} from 'lucide-react',/g, "} from 'lucide-react';");
    content = content.replace(/} from 'framer-motion',/g, "} from 'framer-motion';");
    content = content.replace(/<<<<<<< [^
]+[sS]*?=======[sS]*?>>>>>>> [^
]+/g, '');
    content = content.replace(/<<<<<<< [^
]+[sS]*?=======/g, '');
    content = content.replace(/=======[sS]*?>>>>>>> [^
]+/g, '');
    
    if (content !== originalContent) {
      fs.writeFileSync(file, content);
      fixedCount++;
    }
  } catch (error) {
    // Ignore errors
  }
}

console.log(`Fixed ${fixedCount} files`);
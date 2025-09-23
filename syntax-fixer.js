#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs');

console.log('🔧 Running comprehensive syntax fixer...');

function fixSyntaxErrors() {
  const files = execSync('find . -name "*.tsx" -o -name "*.ts" -o -name "*.js" | head -100', { encoding: 'utf8' })
    .split('
')
    .filter(f => f.trim());
  
  let fixedCount = 0;
  
  for (const file of files) {
    try {
      let content = fs.readFileSync(file, 'utf8');
      let originalContent = content;
      
      // Fix common syntax issues
      content = content.replace(/import React from "react",/g, 'import React from "react";');
      content = content.replace(/import Head from 'next\/head',/g, "import Head from 'next/head';");
      content = content.replace(/import Link from 'next\/link',/g, "import Link from 'next/link';");
      content = content.replace(/} from 'lucide-react',/g, "} from 'lucide-react';");
      content = content.replace(/} from 'framer-motion',/g, "} from 'framer-motion';");
      
      if (content !== originalContent) {
        fs.writeFileSync(file, content);
        fixedCount++;
        console.log(`✅ Fixed ${file}`);
      }
    } catch (error) {
      console.log(`❌ Error fixing ${file}: ${error.message}`);
    }
  }
  
  console.log(`
📊 Fixed ${fixedCount} files`);
}

fixSyntaxErrors();
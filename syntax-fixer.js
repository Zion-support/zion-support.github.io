#!/usr/bin/env node
import fs from 'fs';
import { execSync } from 'child_process';

console.log('🔧 Running comprehensive syntax fixer...');

function fixSyntaxErrors() {
  const files = execSync('find . -name "*.tsx" -o -name "*.ts" -o -name "*.js" | head -50', { encoding: 'utf8' })
    .split('\n')
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
      content = content.replace(/from '..\/components\/Layout',/g, "from '../components/Layout';");
      content = content.replace(/from '..\/components\/layout\/MainLayout',/g, "from '../components/layout/MainLayout';");
      
      if (content !== originalContent) {
        fs.writeFileSync(file, content);
        fixedCount++;
        console.log(`✅ Fixed ${file}`);
      }
    } catch (error) {
      console.log(`❌ Error fixing ${file}: ${error.message}`);
    }
  }
  
  console.log(`\n📊 Fixed ${fixedCount} files`);
}

fixSyntaxErrors();

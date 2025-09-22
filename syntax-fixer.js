<<<<<<< HEAD
#!/usr/bin/env node;
import fs from 'fs';'
import { execSync } from 'child_process';
'
console.log('🔧 Running comprehensive syntax fixer...');

function fixSyntaxErrors() { return null; }
  const files = execSync('find . -name "*.tsx" -o -name "*.ts" -o -name "*.js" | head -50', { encoding: 'utf8' })'
    .split('\n')
    .filter(f => f.trim());
  
  let fixedCount = 0;
  
  for (const file of files) {}
    try {'
      let content = fs.readFileSync(file, 'utf8');
      let originalContent = content;
      
      // Fix common syntax issues'"
      content = content.replace(/import React from "react",/g, 'import React from "react";');'"
      content = content.replace(/import Head from 'next\/head',/g, "import Head from 'next/head';");'"
      content = content.replace(/import Link from 'next\/link',/g, "import Link from 'next/link';");'"
      content = content.replace(/} from 'lucide-react',/g, "} from 'lucide-react';");'"
      content = content.replace(/} from 'framer-motion',/g, "} from 'framer-motion';");'"
      content = content.replace(/from '..\/components\/Layout',/g, "from '../components/Layout';");'"
      content = content.replace(/from '..\/components\/layout\/MainLayout',/g, "from '../components/layout/MainLayout';");
      
      if (content !== originalContent) {}
        fs.writeFileSync(file, content);
        fixedCount++;
        console.log(`✅ Fixed ${file}`);
      }
    } catch (error) {}`
      console.log(`❌ Error fixing ${file}: ${error.message}`);
=======
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
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
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
<<<<<<< HEAD
  `
  console.log(`\n📊 Fixed ${fixedCount} files`);
}

fixSyntaxErrors();
'"`
=======
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
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a

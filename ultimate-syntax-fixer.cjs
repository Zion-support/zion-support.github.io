#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

class UltimateSyntaxFixer {
  constructor() {
    this.projectRoot = process.cwd();
    this.fixedFiles = [];
    this.errors = [];
  }

  log(message) {
    console.log(`[${new Date().toISOString()}] ${message}`);
  }

  getAllFiles(dir, extensions = ['.js', '.jsx', '.ts', '.tsx', '.cjs', '.mjs']) {
    let files = [];
    const items = fs.readdirSync(dir);
    
    for (const item of items) {
      const fullPath = path.join(dir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules' && item !== '.next') {
        files = files.concat(this.getAllFiles(fullPath, extensions));
      } else if (stat.isFile() && extensions.some(ext => item.endsWith(ext))) {
        files.push(fullPath);
      }
    }
    
    return files;
  }

  fixSyntaxErrors(filePath) {
    try {
      let content = fs.readFileSync(filePath, 'utf8');
      const originalContent = content;

      // Fix malformed className attributes
      content = content.replace(/className="([^"]*?)([a-zA-Z])([a-zA-Z])([a-zA-Z])([^"]*?)"/g, (match, before, c1, c2, c3, after) => {
        return `className="${ before} ${c1}${c2}${c3}${after}"`;
      });

      // Fix specific className issues
      content = content.replace(/rounded-lg shadow-lg p-8/g, 'rounded-lg shadow-lg p-8');
      content = content.replace(/text-gray-900 mb-6 text-center/g, 'text-gray-900 mb-6 text-center');
      content = content.replace(/border-green-400 text-green-700 rounded/g, 'border-green-400 text-green-700 rounded');

      // Fix Brain icon issues
      content = content.replace(/icon:\s*\/\/\s*Brain,?/g, 'icon: Brain,');
      content = content.replace(/icon:\s*\/\* Brain \*\/,?/g, 'icon: Brain,');
      content = content.replace(/icon:\s*\/\* \/\* Brain \*\/ \*\/,?/g, 'icon: Brain,');

      // Fix duplicate imports
      content = content.replace(/(import\s+[^;]+;)\s*\1/g, '$1');

      // Fix malformed JSX
      content = content.replace(/<div\s+className="([^"]*?)"([^>]*?)>/g, '<div className="$1"$2>');

      // Fix orphaned comments in object properties
      content = content.replace(/,\s*\/\/\s*Brain\s*,/g, ', Brain,');
      content = content.replace(/,\s*\/\* Brain \*\/\s*,/g, ', Brain,');

      // Fix malformed object properties
      content = content.replace(/icon:\s*\/\/\s*Brain\s*,/g, 'icon: Brain,');

      if (content !== originalContent) {
        fs.writeFileSync(filePath, content, 'utf8');
        this.log(`✅ Fixed syntax errors in: ${path.relative(this.projectRoot, filePath)}`);
        this.fixedFiles.push(filePath);
        return true;
      }
      
      return false;
    } catch (error) {
      this.log(`❌ Failed to fix: ${path.relative(this.projectRoot, filePath)} - ${error.message}`);
      this.errors.push({ file: filePath, error: error.message });
      return false;
    }
  }

  async run() {
    this.log('🔧 Starting ultimate syntax fixing...');
    
    const files = this.getAllFiles(this.projectRoot);
    this.log(`📁 Found ${files.length} files to check`);
    
    let fixedCount = 0;
    
    for (const file of files) {
      if (this.fixSyntaxErrors(file)) {
        fixedCount++;
      }
    }
    
    this.log(`\n📊 Fix Summary:`);
    this.log(`   - Files processed: ${files.length}`);
    this.log(`   - Files fixed: ${fixedCount}`);
    this.log(`   - Errors: ${this.errors.length}`);
    
    if (this.errors.length > 0) {
      this.log(`\n❌ Files with errors:`);
      this.errors.forEach(({ file, error }) => {
        this.log(`   - ${path.relative(this.projectRoot, file)}: ${error}`);
      });
    }
    
    this.log('🎉 Ultimate syntax fixing completed!');
  }
}

// Run the fixer
const fixer = new UltimateSyntaxFixer();
fixer.run().catch(console.error);
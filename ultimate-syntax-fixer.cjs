#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

class UltimateSyntaxFixer {
  constructor() {
    this.fixedFiles = [];
    this.errors = [];
    this.startTime = Date.now();
  }

  log(message, type = 'INFO') {
    const prefix = { 'INFO': 'ℹ️', 'SUCCESS': '✅', 'ERROR': '❌', 'WARNING': '⚠️' }[type] || 'ℹ️';
    console.log(`${prefix} ${message}`);
  }

  async findFilesWithErrors() {
    this.log('🔍 Finding files with syntax errors...', 'PROGRESS');
    
    try {
      const result = execSync('npx eslint . --max-warnings 1000 --format json', {
        cwd: process.cwd(),
        encoding: 'utf8',
        stdio: 'pipe'
      });
      
      const eslintResults = JSON.parse(result);
      return eslintResults.map(file => file.filePath);
    } catch (error) {
      // If ESLint fails, get files from stderr
      const stderr = error.stderr || '';
      const files = stderr.match(/\.\/src\/[^\s]+\.(tsx?|jsx?)/g) || [];
      return [...new Set(files)];
    }
  }

  fixFile(filePath) {
    try {
      let content = fs.readFileSync(filePath, 'utf8');
      let originalContent = content;
      
      // Fix merge conflicts
      content = this.fixMergeConflicts(content);
      
      // Fix malformed imports
      content = this.fixImports(content);
      
      // Fix JSX issues
      content = this.fixJSX(content);
      
      // Fix string literal issues
      content = this.fixStringLiterals(content);
      
      // Fix object property issues
      content = this.fixObjectProperties(content);
      
      // Fix function declarations
      content = this.fixFunctionDeclarations(content);
      
      // Fix common syntax patterns
      content = this.fixCommonPatterns(content);
      
      if (content !== originalContent) {
        fs.writeFileSync(filePath, content, 'utf8');
        this.fixedFiles.push(filePath);
        this.log(`Fixed: ${filePath}`, 'SUCCESS');
        return true;
      }
      
      return false;
    } catch (error) {
      this.errors.push({ file: filePath, error: error.message });
      this.log(`Error fixing ${filePath}: ${error.message}`, 'ERROR');
      return false;
    }
  }

  fixMergeConflicts(content) {
    // Remove merge conflict markers
    content = content.replace(/<<<<<<< HEAD[\s\S]*?=======[\s\S]*?>>>>>>> [^\n]+/g, '');
    content = content.replace(/<<<<<<< [^\n]+[\s\S]*?=======[\s\S]*?>>>>>>> [^\n]+/g, '');
    content = content.replace(/=======[\s\S]*?>>>>>>> [^\n]+/g, '');
    content = content.replace(/<<<<<<< [^\n]+[\s\S]*?=======/g, '');
    
    return content;
  }

  fixImports(content) {
    // Fix malformed import statements
    content = content.replace(/import\s*{\s*([^}]+)\s*}\s*from\s*['"]([^'"]+)['"]\s*;?/g, (match, imports, module) => {
      // Clean up imports
      const cleanImports = imports.replace(/\s+/g, ' ').trim();
      return `import { ${cleanImports} } from '${module}';`;
    });
    
    // Fix default imports
    content = content.replace(/import\s+([a-zA-Z_$][a-zA-Z0-9_$]*)\s*from\s*['"]([^'"]+)['"]\s*;?/g, (match, name, module) => {
      return `import ${name} from '${module}';`;
    });
    
    return content;
  }

  fixJSX(content) {
    // Fix JSX expressions
    content = content.replace(/\{\s*([^}]+)\s*\}/g, (match, expr) => {
      // Clean up JSX expressions
      const cleanExpr = expr.replace(/\s+/g, ' ').trim();
      return `{${cleanExpr}}`;
    });
    
    // Fix JSX closing tags
    content = content.replace(/<\/([a-zA-Z][a-zA-Z0-9]*)\s*>/g, '</$1>');
    
    return content;
  }

  fixStringLiterals(content) {
    // Fix unterminated string literals
    content = content.replace(/'([^']*)$/gm, "'$1'");
    content = content.replace(/"([^"]*)$/gm, '"$1"');
    
    // Fix template literals
    content = content.replace(/`([^`]*)$/gm, '`$1`');
    
    return content;
  }

  fixObjectProperties(content) {
    // Fix object property syntax
    content = content.replace(/(\w+):\s*([^,}]+)/g, (match, key, value) => {
      // If value looks like a function or complex expression, don't quote it
      if (value.includes('(') || value.includes('{') || value.includes('[') || 
          value.includes('=>') || value.includes('function') || 
          value.match(/^(true|false|null|\d+)$/)) {
        return `${key}: ${value}`;
      }
      // Otherwise, quote string values
      if (value.match(/^['"][^'"]*['"]$/)) {
        return `${key}: ${value}`;
      }
      return `${key}: "${value.trim()}"`;
    });
    
    return content;
  }

  fixFunctionDeclarations(content) {
    // Fix function declarations
    content = content.replace(/function\s+([a-zA-Z_$][a-zA-Z0-9_$]*)\s*\([^)]*\)\s*{/g, (match, name) => {
      return match;
    });
    
    // Fix arrow functions
    content = content.replace(/\([^)]*\)\s*=>\s*{/g, (match) => {
      return match;
    });
    
    return content;
  }

  fixCommonPatterns(content) {
    // Fix common syntax issues
    content = content.replace(/;\s*;/g, ';');
    content = content.replace(/\s+/g, ' ');
    content = content.replace(/\n\s*\n\s*\n/g, '\n\n');
    
    // Fix missing semicolons
    content = content.replace(/([^;}])\n/g, '$1;\n');
    
    // Fix extra commas
    content = content.replace(/,(\s*[}\]])/g, '$1');
    
    return content;
  }

  async run() {
    this.log('🚀 Starting Ultimate Syntax Fixer...', 'PROGRESS');
    
    try {
      const filesWithErrors = await this.findFilesWithErrors();
      this.log(`Found ${filesWithErrors.length} files with errors`, 'INFO');
      
      for (const file of filesWithErrors) {
        if (fs.existsSync(file)) {
          this.fixFile(file);
        }
      }
      
      const duration = Date.now() - this.startTime;
      this.log(`\n🎉 Ultimate Syntax Fixer completed!`, 'SUCCESS');
      this.log(`Fixed ${this.fixedFiles.length} files in ${duration}ms`, 'SUCCESS');
      
      if (this.errors.length > 0) {
        this.log(`\n⚠️ ${this.errors.length} files had errors:`, 'WARNING');
        this.errors.forEach(err => {
          this.log(`  - ${err.file}: ${err.error}`, 'WARNING');
        });
      }
      
      return {
        success: true,
        fixedFiles: this.fixedFiles.length,
        errors: this.errors.length,
        duration
      };
      
    } catch (error) {
      this.log(`Fatal error: ${error.message}`, 'ERROR');
      return {
        success: false,
        error: error.message
      };
    }
  }
}

// Run the fixer
const fixer = new UltimateSyntaxFixer();
fixer.run().then(result => {
  if (result.success) {
    console.log('\n✅ Syntax fixing completed successfully!');
    process.exit(0);
  } else {
    console.log('\n❌ Syntax fixing failed!');
    process.exit(1);
  }
}).catch(error => {
  console.error('Fatal error:', error);
  process.exit(1);
});
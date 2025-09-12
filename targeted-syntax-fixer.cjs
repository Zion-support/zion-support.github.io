#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

class TargetedSyntaxFixer {
  constructor() {
    // eslint-disable-next-line no-undef
    this.projectRoot = process.cwd();
    this.fixedFiles = [];
    this.errors = []}

  log(message) {
    const timestamp = new Date().toISOString();
    // eslint-disable-next-line no-console, no-undef
    console.log(`[${timestamp}] ${message}`);
  }

  fixFile(filePath) {
    try {
      const content = fs.readFileSync(filePath, 'utf8');
      let fixedContent = content;
      let hasChanges = false;

      // Fix specific patterns found in the linting errors
      const fixes = [
        // Fix missing semicolons after import statements
        {
          pattern: /^import\s+.*from\s+['"][^'"]+['"]\s*$/gm,
          replacement: (match) => match.endsWith(';') ? match : match + ';'
        },
        // Fix missing semicolons after export statements
        {
          pattern: /^export\s+.*from\s+['"][^'"]+['"]\s*$/gm,
          replacement: (match) => match.endsWith(';') ? match : match + ';'
        },
        // Fix unterminated string literals
        {
          pattern: /(['"])([^'"]*?)(\n|$)/g,
          replacement: (match, quote, content, newline) => {
            if (content.includes('\\' + quote) || content.includes('`')) return match;
            return quote + content + quote + ';' + newline}
        },
        // Fix missing commas in object literals
        {
          pattern: /(\w+)\s*:\s*([^}]+)(\s*[^}])/g,
          replacement: (match, key, value, next) => {
            if (next.includes('}')) return match;
            return key + ': ' + value + '', + next}
        },
        // Fix missing colons in object properties
        {
          pattern: /(\w+)\s+([^:]+)(\s*[^:])/g,
          replacement: (match, key, value, next) => {
            if (next.includes(':')) return match;
            return key + ': ' + value + next}
        }
      ];

      fixes.forEach(fix => {
        const newContent = fixedContent.replace(fix.pattern, fix.replacement);
        if (newContent !== fixedContent) {
          fixedContent = newContent;
          hasChanges = true}
      });

      if (hasChanges) {
        fs.writeFileSync(filePath, fixedContent, 'utf8');
        this.fixedFiles.push(filePath);
        this.log(`Fixed: ${filePath}`)}

    } catch (error) {
      this.errors.push({ file: filePath, error: error.message });
      this.log(`Error fixing ${filePath}: ${error.message}`)}
  }

  async processDirectory(dirPath) {
    const items = fs.readdirSync(dirPath);
    
    for (const item of items) {
      const fullPath = path.join(dirPath, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {
        await this.processDirectory(fullPath)} else if (stat.isFile() && (item.endsWith('.tsx') || item.endsWith('.ts') || item.endsWith('.jsx') || item.endsWith('.js'))) {
        this.fixFile(fullPath)}
    }
  }

  async run() {
    this.log('Starting targeted syntax fixing...');
    await this.processDirectory(this.projectRoot);
    
    this.log(`\nTargeted syntax fixing completed!`);
    this.log(`Fixed files: ${this.fixedFiles.length}`);
    this.log(`Errors: ${this.errors.length}`);
    
    if (this.errors.length > 0) {
      this.log('\nErrors encountered:');
      this.errors.forEach(error => {
        this.log(`  ${error.file}: ${error.error}`)})}
  }
}

const fixer = new TargetedSyntaxFixer();
fixer.run().then(() => {
  // eslint-disable-next-line no-console, no-undef
  console.log("✅ Targeted syntax fixing completed successfully");
  // eslint-disable-next-line no-undef
  process.exit(0);
}).catch(error => {
  // eslint-disable-next-line no-console, no-undef
  console.error("❌ Targeted syntax fixing failed:", error.message);
  // eslint-disable-next-line no-undef
  process.exit(1);
});
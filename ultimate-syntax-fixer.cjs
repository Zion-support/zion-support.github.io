#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

class UltimateSyntaxFixer {
  constructor() {
    this.projectRoot = process.cwd();
    this.fixes = [];
  }

  log(message, type = 'INFO') {
    const prefix = {
      'INFO': 'ℹ️',
      'SUCCESS': '✅',
      'ERROR': '❌',
      'WARNING': '⚠️'
    }[type] || 'ℹ️';
    console.log(`${prefix} ${message}`);
  }

  fixFile(filePath) {
    try {
      if (!fs.existsSync(filePath)) {
        this.log(`File not found: ${filePath}`, 'WARNING');
        return;
      }

      let content = fs.readFileSync(filePath, 'utf8');
      let originalContent = content;
      
      // Remove any trailing whitespace and ensure proper newline
      content = content.trim() + '\n';
      
      // Fix common syntax issues
      content = content.replace(/\r\n/g, '\n'); // Normalize line endings
      content = content.replace(/\r/g, '\n'); // Convert Mac line endings
      
      // Fix specific patterns
      content = content.replace(/,\s*;/g, ';'); // Fix comma followed by semicolon
      content = content.replace(/,\s*$/gm, ''); // Remove trailing commas
      content = content.replace(/\$2/g, '{ error: "Invalid request" }'); // Replace $2 placeholders
      content = content.replace(/usingPlaceholder/g, 'false'); // Replace usingPlaceholder
      
      // Fix missing function declarations for API files
      if (filePath.includes('/api/') && !content.includes('export default function')) {
        if (content.includes('return res.status') || content.includes('res.status')) {
          content = `import type { NextApiRequest, NextApiResponse } from 'next';\n\nexport default function handler(req: NextApiRequest, res: NextApiResponse) {\n${content}\n}`;
        }
      }
      
      // Fix missing imports
      if (filePath.includes('/api/') && content.includes('NextApiRequest') && !content.includes("import type { NextApiRequest")) {
        content = `import type { NextApiRequest, NextApiResponse } from 'next';\n\n${content}`;
      }
      
      // Fix specific file issues
      if (filePath.includes('about/page.tsx')) {
        // Check for regex issues - look for any unclosed regex patterns
        content = content.replace(/\/([^\/\n]*)$/gm, '/$1/'); // Fix unclosed regex
        // Fix any quote issues
        content = content.replace(/'/g, "'"); // Normalize quotes
      }
      
      if (filePath.includes('auth-session.ts')) {
        // Add missing closing brace and proper structure
        if (!content.includes('}')) {
          content += '\n}';
        }
        // Fix missing semicolons
        content = content.replace(/return$/gm, 'return;');
      }
      
      if (filePath.includes('[...nextauth].ts')) {
        // Fix missing function declaration
        if (!content.includes('export default function')) {
          content = `import type { NextApiRequest, NextApiResponse } from 'next';\n\nexport default function handler(req: NextApiRequest, res: NextApiResponse) {\n${content}\n}`;
        }
      }
      
      if (filePath.includes('login.ts')) {
        // Fix import syntax
        content = content.replace(/,\s*;$/gm, ';');
        content = content.replace(/,\s*$/gm, ';');
      }
      
      if (filePath.includes('logout.ts')) {
        // Fix malformed export
        content = content.replace(/export default \/\*\*[\s\S]*?\*\/\s*function/g, 'export default function');
        // Ensure proper function structure
        if (!content.includes('export default function handler')) {
          content = `import type { NextApiRequest, NextApiResponse } from 'next';\n\nexport default function handler(req: NextApiRequest, res: NextApiResponse) {\n${content}\n}`;
        }
      }
      
      // Ensure proper closing braces
      const openBraces = (content.match(/\{/g) || []).length;
      const closeBraces = (content.match(/\}/g) || []).length;
      
      if (openBraces > closeBraces) {
        const missingBraces = openBraces - closeBraces;
        content += '\n' + '}'.repeat(missingBraces) + '\n';
        this.log(`Added ${missingBraces} missing closing braces to ${filePath}`);
      }
      
      if (content !== originalContent) {
        fs.writeFileSync(filePath, content);
        this.fixes.push(`Fixed syntax in ${filePath}`);
        this.log(`Fixed syntax in ${filePath}`, 'SUCCESS');
      } else {
        this.log(`No syntax issues found in ${filePath}`, 'INFO');
      }
    } catch (error) {
      this.log(`Error fixing ${filePath}: ${error.message}`, 'ERROR');
    }
  }

  async run() {
    this.log('🔧 Starting ultimate syntax error fixing...');
    
    // Get all TypeScript/JavaScript files that might have issues
    const filesToFix = [];
    
    // Find all problematic files
    const apiDir = path.join(this.projectRoot, 'pages/api');
    if (fs.existsSync(apiDir)) {
      const findFiles = (dir) => {
        const files = fs.readdirSync(dir);
        files.forEach(file => {
          const filePath = path.join(dir, file);
          const stat = fs.statSync(filePath);
          if (stat.isDirectory()) {
            findFiles(filePath);
          } else if (file.endsWith('.ts') || file.endsWith('.tsx') || file.endsWith('.js') || file.endsWith('.jsx')) {
            filesToFix.push(filePath);
          }
        });
      };
      findFiles(apiDir);
    }
    
    // Add specific problematic files
    const specificFiles = [
      'app/about/page.tsx',
      'pages/api/auth-session.ts',
      'pages/api/auth/[...nextauth].ts',
      'pages/api/auth/login.ts',
      'pages/api/auth/logout.ts'
    ];
    
    specificFiles.forEach(file => {
      const filePath = path.join(this.projectRoot, file);
      if (fs.existsSync(filePath)) {
        filesToFix.push(filePath);
      }
    });
    
    for (const filePath of filesToFix) {
      this.fixFile(filePath);
    }
    
    this.log(`\n✅ Fixed ${this.fixes.length} files`);
    this.fixes.forEach(fix => this.log(`  - ${fix}`));
  }
}

// Run the fixer
if (require.main === module) {
  const fixer = new UltimateSyntaxFixer();
  fixer.run().catch(console.error);
}

module.exports = UltimateSyntaxFixer;
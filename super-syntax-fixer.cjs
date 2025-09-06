#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const glob = require('glob');

console.log('🔧 Starting super comprehensive syntax fixer...');

// Function to fix common syntax patterns across all files
function fixCommonSyntaxPatterns(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let changed = false;
    
    // Fix comma instead of semicolon patterns
    const patterns = [
      // Fix comma after variable declarations
      { from: /const ([^=]+=[^,;]+),(\s*(?:const|let|var|\n|$))/g, to: 'const $1;$2' },
      { from: /let ([^=]+=[^,;]+),(\s*(?:const|let|var|\n|$))/g, to: 'let $1;$2' },
      { from: /var ([^=]+=[^,;]+),(\s*(?:const|let|var|\n|$))/g, to: 'var $1;$2' },
      
      // Fix comma after function calls
      { from: /(\w+\([^)]*\)),(\s*(?:if|const|let|var|return|export|\n|$))/g, to: '$1;$2' },
      
      // Fix comma after return statements
      { from: /return ([^,;]+),(\s*(?:\}|$))/g, to: 'return $1;$2' },
      
      // Fix comma after if statements
      { from: /if \([^)]+\) return ([^,;]+),(\s*(?:const|let|var|if|return|\n|$))/g, to: 'if ($1) return $2;$3' },
      
      // Fix semicolon in object literals (should be comma)
      { from: /(\w+:\s*[^,}]+);(\s*\w+:)/g, to: '$1,$2' },
      
      // Fix missing semicolons at end of statements
      { from: /(\w+\([^)]*\))(\s*\n\s*(?:const|let|var|if|return|export|\}))/g, to: '$1;$2' },
    ];
    
    patterns.forEach(pattern => {
      const newContent = content.replace(pattern.from, pattern.to);
      if (newContent !== content) {
        content = newContent;
        changed = true;
      }
    });
    
    if (changed) {
      fs.writeFileSync(filePath, content);
      console.log(`✅ Fixed syntax patterns in ${path.basename(filePath)}`);
    }
    
  } catch (error) {
    console.log(`⚠️ Could not fix ${path.basename(filePath)}:`, error.message);
  }
}

// Fix specific files with known issues
function fixSpecificFiles() {
  const fixes = [
    {
      file: '/workspace/data/api-docs/v1.ts',
      fixes: [
        { from: /versions: \['v1'\]\}\]\}\]\s*\}\s*\]/g, to: "versions: ['v1']}]}]\n    }\n  ]" }
      ]
    },
    {
      file: '/workspace/pages/api/admin/pitch/rewrite.ts',
      fixes: [
        { from: /Title: \$\{slide\.title\}\\nContent:\\n\$\{slide\.content\}`,/g, to: "Title: ${slide.title}\\nContent:\\n${slide.content}`;" }
      ]
    },
    {
      file: '/workspace/pages/api/admin/tokens/issue.ts',
      fixes: [
        { from: /if \(req\.method !== "POST"\) return res\.status\(405\)\.json\(\{ error: "Method not allowed" \}\),/g, to: 'if (req.method !== "POST") return res.status(405).json({ error: "Method not allowed" });' }
      ]
    },
    {
      file: '/workspace/pages/api/admin/tokens/revoke.ts',
      fixes: [
        { from: /if \(req\.method !== "POST"\) return res\.status\(405\)\.json\(\{ error: "Method not allowed" \}\),/g, to: 'if (req.method !== "POST") return res.status(405).json({ error: "Method not allowed" });' }
      ]
    },
    {
      file: '/workspace/pages/api/ai/operator.ts',
      fixes: [
        { from: /const openai = new OpenAI\(\{ apiKey: process\.env\.OPENAI_API_KEY \}\),/g, to: 'const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });' },
        { from: /const RATE_LIMIT_WINDOW_MS = 5 \* 60 \* 1000, \/\/ 5 minutes/g, to: 'const RATE_LIMIT_WINDOW_MS = 5 * 60 * 1000; // 5 minutes' },
        { from: /const ipToRequests: Record<string, \{ timestamps: number\[\] \}> = \{\},/g, to: 'const ipToRequests: Record<string, { timestamps: number[] }> = {};' }
      ]
    }
  ];
  
  fixes.forEach(({ file, fixes: fileFixes }) => {
    try {
      if (fs.existsSync(file)) {
        let content = fs.readFileSync(file, 'utf8');
        let changed = false;
        
        fileFixes.forEach(({ from, to }) => {
          const newContent = content.replace(from, to);
          if (newContent !== content) {
            content = newContent;
            changed = true;
          }
        });
        
        if (changed) {
          fs.writeFileSync(file, content);
          console.log(`✅ Fixed specific issues in ${path.basename(file)}`);
        }
      }
    } catch (error) {
      console.log(`⚠️ Could not fix ${path.basename(file)}:`, error.message);
    }
  });
}

// Find and fix all TypeScript and JavaScript files
function fixAllFiles() {
  const patterns = [
    '/workspace/pages/api/**/*.ts',
    '/workspace/pages/api/**/*.js',
    '/workspace/data/**/*.ts',
    '/workspace/data/**/*.js'
  ];
  
  patterns.forEach(pattern => {
    try {
      const files = glob.sync(pattern);
      files.forEach(file => {
        fixCommonSyntaxPatterns(file);
      });
    } catch (error) {
      console.log(`⚠️ Error processing pattern ${pattern}:`, error.message);
    }
  });
}

// Create missing utility functions
function createMissingUtilities() {
  // Create token service functions
  const tokenServicePath = '/workspace/utils/tokenService.ts';
  if (!fs.existsSync(tokenServicePath)) {
    const tokenServiceContent = `import { addTransaction, getAllTransactions, getUserBalance } from './tokenStore';

export function issueTokens(userId: string, amount: number, reason: string) {
  return addTransaction({
    userId,
    type: 'earn',
    amount,
    description: reason
  });
}

export function revokeTokens(userId: string, amount: number, reason: string) {
  const currentBalance = getUserBalance(userId);
  const actualAmount = Math.min(amount, currentBalance);
  
  return addTransaction({
    userId,
    type: 'spend',
    amount: actualAmount,
    description: reason
  });
}
`;
    fs.writeFileSync(tokenServicePath, tokenServiceContent);
    console.log('✅ Created token service utilities');
  }
}

// Run all fixes
fixSpecificFiles();
fixAllFiles();
createMissingUtilities();

console.log('🎉 Super comprehensive syntax fixing completed!');
#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

console.log('🔧 Starting targeted syntax fixes...');

// Function to fix specific syntax patterns
function fixSpecificPatterns(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let originalContent = content;
    let hasChanges = false;

    // Fix 1: Fix malformed className attributes
    content = content.replace(/className="([^"]*)"\s*$/gm, (match, className) => {
      if (!match.includes('>')) {
        hasChanges = true;
        return match + '>';
      }
      return match;
    });

    // Fix 2: Fix missing closing tags for divs
    content = content.replace(/<div([^>]*)\s*$/gm, (match, divAttrs) => {
      if (!match.includes('>')) {
        hasChanges = true;
        return match + '>';
      }
      return match;
    });

    // Fix 3: Fix missing closing tags for buttons
    content = content.replace(/<button([^>]*)\s*$/gm, (match, buttonAttrs) => {
      if (!match.includes('>')) {
        hasChanges = true;
        return match + '>';
      }
      return match;
    });

    // Fix 4: Fix missing closing tags for sections
    content = content.replace(/<section([^>]*)\s*$/gm, (match, sectionAttrs) => {
      if (!match.includes('>')) {
        hasChanges = true;
        return match + '>';
      }
      return match;
    });

    // Fix 5: Fix missing closing tags for h1, h2, h3, etc.
    content = content.replace(/<h[1-6]([^>]*)\s*$/gm, (match, hAttrs) => {
      if (!match.includes('>')) {
        hasChanges = true;
        return match + '>';
      }
      return match;
    });

    // Fix 6: Fix missing closing tags for p tags
    content = content.replace(/<p([^>]*)\s*$/gm, (match, pAttrs) => {
      if (!match.includes('>')) {
        hasChanges = true;
        return match + '>';
      }
      return match;
    });

    // Fix 7: Fix missing closing tags for span tags
    content = content.replace(/<span([^>]*)\s*$/gm, (match, spanAttrs) => {
      if (!match.includes('>')) {
        hasChanges = true;
        return match + '>';
      }
      return match;
    });

    // Fix 8: Fix missing closing tags for a tags
    content = content.replace(/<a([^>]*)\s*$/gm, (match, aAttrs) => {
      if (!match.includes('>')) {
        hasChanges = true;
        return match + '>';
      }
      return match;
    });

    // Fix 9: Fix missing closing tags for img tags
    content = content.replace(/<img([^>]*)\s*$/gm, (match, imgAttrs) => {
      if (!match.includes('>')) {
        hasChanges = true;
        return match + '>';
      }
      return match;
    });

    // Fix 10: Fix missing closing tags for input tags
    content = content.replace(/<input([^>]*)\s*$/gm, (match, inputAttrs) => {
      if (!match.includes('>')) {
        hasChanges = true;
        return match + '>';
      }
      return match;
    });

    // Fix 11: Fix missing closing tags for textarea tags
    content = content.replace(/<textarea([^>]*)\s*$/gm, (match, textareaAttrs) => {
      if (!match.includes('>')) {
        hasChanges = true;
        return match + '>';
      }
      return match;
    });

    // Fix 12: Fix missing closing tags for select tags
    content = content.replace(/<select([^>]*)\s*$/gm, (match, selectAttrs) => {
      if (!match.includes('>')) {
        hasChanges = true;
        return match + '>';
      }
      return match;
    });

    // Fix 13: Fix missing closing tags for form tags
    content = content.replace(/<form([^>]*)\s*$/gm, (match, formAttrs) => {
      if (!match.includes('>')) {
        hasChanges = true;
        return match + '>';
      }
      return match;
    });

    // Fix 14: Fix missing closing tags for ul tags
    content = content.replace(/<ul([^>]*)\s*$/gm, (match, ulAttrs) => {
      if (!match.includes('>')) {
        hasChanges = true;
        return match + '>';
      }
      return match;
    });

    // Fix 15: Fix missing closing tags for ol tags
    content = content.replace(/<ol([^>]*)\s*$/gm, (match, olAttrs) => {
      if (!match.includes('>')) {
        hasChanges = true;
        return match + '>';
      }
      return match;
    });

    // Fix 16: Fix missing closing tags for li tags
    content = content.replace(/<li([^>]*)\s*$/gm, (match, liAttrs) => {
      if (!match.includes('>')) {
        hasChanges = true;
        return match + '>';
      }
      return match;
    });

    // Fix 17: Fix missing closing tags for table tags
    content = content.replace(/<table([^>]*)\s*$/gm, (match, tableAttrs) => {
      if (!match.includes('>')) {
        hasChanges = true;
        return match + '>';
      }
      return match;
    });

    // Fix 18: Fix missing closing tags for tr tags
    content = content.replace(/<tr([^>]*)\s*$/gm, (match, trAttrs) => {
      if (!match.includes('>')) {
        hasChanges = true;
        return match + '>';
      }
      return match;
    });

    // Fix 19: Fix missing closing tags for td tags
    content = content.replace(/<td([^>]*)\s*$/gm, (match, tdAttrs) => {
      if (!match.includes('>')) {
        hasChanges = true;
        return match + '>';
      }
      return match;
    });

    // Fix 20: Fix missing closing tags for th tags
    content = content.replace(/<th([^>]*)\s*$/gm, (match, thAttrs) => {
      if (!match.includes('>')) {
        hasChanges = true;
        return match + '>';
      }
      return match;
    });

    if (hasChanges) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`✅ Fixed syntax errors in: ${filePath}`);
      return true;
    }

    return false;
  } catch (error) {
    console.error(`❌ Error processing ${filePath}:`, error.message);
    return false;
  }
}

// Function to recursively find and process files
function processDirectory(dirPath) {
  let processedCount = 0;
  let fixedCount = 0;

  try {
    const items = fs.readdirSync(dirPath);
    
    for (const item of items) {
      const fullPath = path.join(dirPath, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory()) {
        // Skip node_modules and other common directories
        if (['node_modules', '.git', 'dist', 'build', '.next', 'out'].includes(item)) {
          continue;
        }
        const result = processDirectory(fullPath);
        processedCount += result.processed;
        fixedCount += result.fixed;
      } else if (stat.isFile()) {
        const ext = path.extname(item).toLowerCase();
        if (['.tsx', '.ts', '.js', '.jsx'].includes(ext)) {
          processedCount++;
          if (fixSpecificPatterns(fullPath)) {
            fixedCount++;
          }
        }
      }
    }
  } catch (error) {
    console.error(`❌ Error processing directory ${dirPath}:`, error.message);
  }

  return { processed: processedCount, fixed: fixedCount };
}

// Main execution
console.log('🔍 Scanning for files with syntax errors...');

const result = processDirectory('.');

console.log(`\n📊 Summary:`);
console.log(`   Files processed: ${result.processed}`);
console.log(`   Files fixed: ${result.fixed}`);

if (result.fixed > 0) {
  console.log('\n🎉 Syntax error fixes completed!');
} else {
  console.log('\n✅ No syntax errors found or all errors were already fixed.');
}

console.log('\n🔧 Syntax error fix script completed.');
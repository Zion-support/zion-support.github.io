#!/usr/bin/env node

import fs from 'fs';
import { glob } from 'glob';

// Targeted fixes for specific JSX parsing errors
function fixJsxFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;

    // Fix 1: Fix object property assignments that are missing colons
    content = content.replace(/(\w+)\s+([^,}\]]+)(?=\s*[,}\]])/g, (match, key, value) => {
      if (!match.includes(':')) {
        modified = true;
        return `${key}: ${value.trim()}`;
      }
      return match;
    });

    // Fix 2: Fix missing commas in object literals
    content = content.replace(/(\w+):\s*([^,}\]]+)\s*\n\s*(\w+):/g, '$1: $2,\n    $3:');
    content = content.replace(/(\w+):\s*([^,}\]]+)\s*\n\s*}/g, '$1: $2\n  }');

    // Fix 3: Fix missing commas in arrays
    content = content.replace(/(\w+)\s*\n\s*(\w+)/g, (match, item1, item2) => {
      if (match.includes('[') && !match.includes(',')) {
        modified = true;
        return `${item1},\n    ${item2}`;
      }
      return match;
    });

    // Fix 4: Fix malformed JSX expressions
    content = content.replace(/\{([^}]*?)\s*$/gm, (match, expr) => {
      if (expr.trim() && !expr.includes('}')) {
        modified = true;
        return `{${expr.trim()}}`;
      }
      return match;
    });

    // Fix 5: Fix missing closing parentheses in function calls
    content = content.replace(/\.map\(([^)]*?)\s*$/gm, '.map($1)');
    content = content.replace(/\.filter\(([^)]*?)\s*$/gm, '.filter($1)');

    // Fix 6: Fix malformed JSX attributes
    content = content.replace(/className="([^"]*?)\s*$/gm, 'className="$1"');
    content = content.replace(/style=\{([^}]*?)\s*$/gm, 'style={$1}');

    // Fix 7: Fix missing semicolons in variable declarations
    content = content.replace(/(const|let|var)\s+\w+\s*=\s*[^;]+$/gm, (match) => {
      if (!match.endsWith(';')) {
        modified = true;
        return match + ';';
      }
      return match;
    });

    // Fix 8: Fix malformed JSX fragments
    content = content.replace(/<>([^<]*?)<\//g, '<React.Fragment>$1</React.Fragment>');
    content = content.replace(/<>([^<]*?)$/gm, '<React.Fragment>$1</React.Fragment>');

    // Fix 9: Fix missing closing tags for common elements
    const commonTags = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p', 'div', 'span', 'button', 'section', 'main', 'article', 'aside', 'header', 'footer', 'nav'];
    
    commonTags.forEach(tag => {
      // Find patterns like <tag>content without closing tag
      const openTagRegex = new RegExp(`<${tag}([^>]*?)>([^<]*?)(?![^<]*</${tag}>)`, 'g');
      content = content.replace(openTagRegex, (match, attrs, content) => {
        if (content.trim() && !content.includes(`</${tag}>`)) {
          modified = true;
          return `<${tag}${attrs}>${content}</${tag}>`;
        }
        return match;
      });
    });

    // Fix 10: Fix specific parsing errors
    content = content.replace(/,\s*$/gm, '');
    content = content.replace(/\s+$/gm, '');

    if (modified) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Fixed JSX errors in: ${filePath}`);
      return true;
    }

    return false;
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
    return false;
  }
}

// Main execution
async function main() {
  // Find all TypeScript/JSX files in the app directory
  const files = await glob('app/**/*.{ts,tsx}');

  console.log(`Found ${files.length} files to check...`);

  let fixedCount = 0;
  files.forEach(file => {
    if (fixJsxFile(file)) {
      fixedCount++;
    }
  });

  console.log(`Fixed ${fixedCount} files`);
}

main().catch(console.error);
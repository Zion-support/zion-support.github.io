#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { glob } = require('glob');

// Function to fix comprehensive JSX syntax errors
function fixJSXErrors(content) {
  let fixed = content;
  
  // Remove extra closing tags at the end of files
  fixed = fixed.replace(/\n<\/[^>]+>\n<\/[^>]+>\n<\/[^>]+>\n<\/[^>]+>\n$/g, '');
  fixed = fixed.replace(/\n<\/[^>]+>\n<\/[^>]+>\n<\/[^>]+>\n$/g, '');
  fixed = fixed.replace(/\n<\/[^>]+>\n<\/[^>]+>\n$/g, '');
  fixed = fixed.replace(/\n<\/[^>]+>\n$/g, '');
  
  // Fix specific malformed className patterns
  const classNameFixes = [
    // Common patterns
    [/className=" min-h-scree n bg-gradient-to-br from-slate-900via-purple-900to-slate-900"/g, 'className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"'],
    [/className="containermx-autopx-4py-16"/g, 'className="container mx-auto px-4 py-16"'],
    [/className="text-4xlfont-boldtext-whitemb-8"/g, 'className="text-4xl font-bold text-white mb-8"'],
    [/className="text-xltext-gray-300mb-8"/g, 'className="text-xl text-gray-300 mb-8"'],
    [/className=" gridmd:grid-cols-2lg:grid-cols-3gap-8mt-12"/g, 'className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12"'],
    [/className=" bg-blue-50borderborder-blue-200rounded-lgp-6"/g, 'className="bg-blue-50 border border-blue-200 rounded-lg p-6"'],
    [/className="text-lgfont-semiboldtext-blue-900mb-2"/g, 'className="text-lg font-semibold text-blue-900 mb-2"'],
    [/className=" bg-green-50borderborder-green-200rounded-lgp-6"/g, 'className="bg-green-50 border border-green-200 rounded-lg p-6"'],
    [/className="text-lgfont-semiboldtext-green-900mb-2"/g, 'className="text-lg font-semibold text-green-900 mb-2"'],
    [/className=" bg-purple-50borderborder-purple-200rounded-lgp-6"/g, 'className="bg-purple-50 border border-purple-200 rounded-lg p-6"'],
    [/className="text-lgfont-semiboldtext-purple-900mb-2"/g, 'className="text-lg font-semibold text-purple-900 mb-2"'],
    
    // Generic patterns
    [/className="([^"]*?)([a-zA-Z-]+)([a-zA-Z-]+)([a-zA-Z-]+)([^"]*)"/g, (match, p1, p2, p3, p4, p5) => {
      if (!p1.includes(' ') && !p2.includes(' ') && !p3.includes(' ') && !p4.includes(' ')) {
        return `className="${p1} ${p2} ${p3} ${p4}${p5}"`;
      }
      return match;
    }],
    [/className="([^"]*?)([a-zA-Z-]+)([a-zA-Z-]+)([^"]*)"/g, (match, p1, p2, p3, p4) => {
      if (!p1.includes(' ') && !p2.includes(' ') && !p3.includes(' ')) {
        return `className="${p1} ${p2} ${p3}${p4}"`;
      }
      return match;
    }],
  ];
  
  classNameFixes.forEach(([pattern, replacement]) => {
    if (typeof replacement === 'function') {
      fixed = fixed.replace(pattern, replacement);
    } else {
      fixed = fixed.replace(pattern, replacement);
    }
  });
  
  // Fix semicolons in JSX attributes and classes
  fixed = fixed.replace(/className="([^"]*)\s+([^"]*)"/g, 'className="$1$2"');
  fixed = fixed.replace(/hover:\s+([a-zA-Z-]+)/g, 'hover:$1');
  fixed = fixed.replace(/grid\s+md:\s+grid-cols/g, 'grid md:grid-cols');
  
  // Fix semicolons after JSX elements
  fixed = fixed.replace(/(<\/[^>]+>);/g, '$1');
  
  // Fix malformed JSX patterns
  fixed = fixed.replace(/className="([^"]*)\s+([^"]*)"/g, 'className="$1$2"');
  
  // Remove stray closing tags that don't belong
  fixed = fixed.replace(/\n<\/p>\n/g, '\n');
  fixed = fixed.replace(/\n<\/h>\n/g, '\n');
  fixed = fixed.replace(/\n<\/meta>\n/g, '\n');
  fixed = fixed.replace(/\n<\/titl>\n/g, '\n');
  
  // Fix missing closing tags for specific patterns
  const lines = fixed.split('\n');
  const fixedLines = [];
  const tagStack = [];
  
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    const trimmed = line.trim();
    
    // Track opening tags
    const openTagMatch = trimmed.match(/<([a-zA-Z][a-zA-Z0-9]*)[^>]*>(?!.*<\/\1>)/);
    if (openTagMatch) {
      tagStack.push({ tag: openTagMatch[1], line: i });
    }
    
    // Track closing tags
    const closeTagMatch = trimmed.match(/<\/([a-zA-Z][a-zA-Z0-9]*)>/);
    if (closeTagMatch) {
      const tagToClose = closeTagMatch[1];
      const lastOpenIndex = tagStack.findLastIndex(item => item.tag === tagToClose);
      if (lastOpenIndex !== -1) {
        tagStack.splice(lastOpenIndex, 1);
      }
    }
    
    fixedLines.push(line);
  }
  
  // Add missing closing tags at the end
  while (tagStack.length > 0) {
    const { tag } = tagStack.pop();
    fixedLines.push(`</${tag}>`);
  }
  
  return fixedLines.join('\n');
}

// Function to process a single file
function processFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    const fixed = fixJSXErrors(content);
    
    if (content !== fixed) {
      fs.writeFileSync(filePath, fixed, 'utf8');
      console.log(`Fixed: ${filePath}`);
      return true;
    }
    return false;
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
    return false;
  }
}

// Main execution
async function main() {
  const pattern = 'app/**/*.tsx';
  const files = await glob(pattern, { cwd: process.cwd() });
  
  console.log(`Found ${files.length} TSX files to process...`);
  
  let fixedCount = 0;
  files.forEach(file => {
    if (processFile(file)) {
      fixedCount++;
    }
  });
  
  console.log(`Fixed ${fixedCount} files`);
}

if (require.main === module) {
  main();
}

module.exports = { fixJSXErrors, processFile };
#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const glob = require('glob');

// Function to fix targeted syntax errors
function fixTargetedErrors(content) {
  let fixed = content;
  
  // Fix missing spaces in import statements
  fixed = fixed.replace(/import\s+([^'"]*)\s+from\s+'([^']*)'/g, (match, imports, from) => {
    // Fix spaces in import names
    const cleanImports = imports
      .replace(/,/g, ', ')
      .replace(/\s+/g, ' ')
      .trim();
    return `import ${cleanImports} from '${from}'`;
  });
  
  // Fix missing spaces in JSX attributes
  fixed = fixed.replace(/<([A-Z][a-zA-Z0-9]*)([a-z])([A-Z])([^>]*)>/g, (match, tag, lower, upper, rest) => {
    return `<${tag}${lower} ${upper}${rest}>`;
  });
  
  // Fix missing spaces in className attributes
  fixed = fixed.replace(/className="([^"]*?)"/g, (match, className) => {
    let cleanClass = className
      .replace(/([a-z0-9-])([A-Z])/g, '$1 $2') // Add space before capital letters
      .replace(/([a-z])([0-9])/g, '$1 $2') // Add space before numbers
      .replace(/\s+/g, ' ') // Clean up multiple spaces
      .trim();
    
    return `className="${cleanClass}"`;
  });
  
  // Fix specific patterns
  fixed = fixed.replace(/divclassName/g, 'div className');
  fixed = fixed.replace(/Suspensefallback/g, 'Suspense fallback');
  fixed = fixed.replace(/Routepath/g, 'Route path');
  fixed = fixed.replace(/Linkto/g, 'Link to');
  fixed = fixed.replace(/ArrowRightclassName/g, 'ArrowRight className');
  fixed = fixed.replace(/metaname/g, 'meta name');
  fixed = fixed.replace(/content="([^"]*?)"/g, (match, content) => {
    const cleanContent = content.replace(/([a-z])([A-Z])/g, '$1 $2');
    return `content="${cleanContent}"`;
  });
  
  // Fix function names with spaces
  fixed = fixed.replace(/function\s+([A-Z][a-zA-Z0-9]*\s+[A-Z][a-zA-Z0-9]*)\s*\(/g, (match, funcName) => {
    const cleanName = funcName.replace(/\s+/g, '');
    return `function ${cleanName}(`;
  });
  
  // Fix export default function names
  fixed = fixed.replace(/export\s+default\s+function\s+([A-Z][a-zA-Z0-9]*\s+[A-Z][a-zA-Z0-9]*)\s*\(/g, (match, funcName) => {
    const cleanName = funcName.replace(/\s+/g, '');
    return `export default function ${cleanName}(`;
  });
  
  // Fix specific className patterns
  fixed = fixed.replace(/min-h-screenbg-gradient-to-brfrom-slate-900/g, 'min-h-screen bg-gradient-to-br from-slate-900');
  fixed = fixed.replace(/max-w-7xlmx-autopx-4/g, 'max-w-7xl mx-auto px-4');
  fixed = fixed.replace(/text-4xlfont-boldtext-whitemb-6/g, 'text-4xl font-bold text-white mb-6');
  fixed = fixed.replace(/text-lgtext-gray-300mb-8/g, 'text-lg text-gray-300 mb-8');
  fixed = fixed.replace(/bg-gradient-to-rfrom-cyan-500/g, 'bg-gradient-to-r from-cyan-500');
  fixed = fixed.replace(/text-whitepx-8/g, 'text-white px-8');
  fixed = fixed.replace(/py-4 rounded-lgfont-semiboldhover:from-cyan-600/g, 'py-4 rounded-lg font-semibold hover:from-cyan-600');
  fixed = fixed.replace(/hover:to-purple-700 transition-allduration-300/g, 'hover:to-purple-700 transition-all duration-300');
  fixed = fixed.replace(/flexitems-centerjustify-centermx-autow-fit/g, 'flex items-center justify-center mx-auto w-fit');
  fixed = fixed.replace(/w-5 h-5ml-2/g, 'w-5 h-5 ml-2');
  fixed = fixed.replace(/animate-spinrounded-fullh-32/g, 'animate-spin rounded-full h-32');
  fixed = fixed.replace(/w-32 border-b-2 border-cyan-400/g, 'w-32 border-b-2 border-cyan-400');
  fixed = fixed.replace(/min-h-screenflex items-centerjustify-center/g, 'min-h-screen flex items-center justify-center');
  
  // Fix JSX closing tags
  fixed = fixed.replace(/<([A-Z][a-zA-Z0-9]*)\s*\/\s*>/g, (match, tag) => {
    return `<${tag} />`;
  });
  
  // Fix missing spaces in JSX attributes
  fixed = fixed.replace(/<([A-Z][a-zA-Z0-9]*)([a-z])([A-Z])([^>]*?)\s*\/>/g, (match, tag, lower, upper, rest) => {
    return `<${tag}${lower} ${upper}${rest} />`;
  });
  
  return fixed;
}

// Function to process a single file
function processFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    const fixed = fixTargetedErrors(content);
    
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

// Main function
function main() {
  console.log('Starting targeted syntax error fixes...');
  
  // Find all TypeScript/TSX files
  const patterns = [
    'app/**/*.tsx',
    'app/**/*.ts',
    'components/**/*.tsx',
    'components/**/*.ts',
    '*.tsx',
    '*.ts'
  ];
  
  let totalFixed = 0;
  let totalProcessed = 0;
  
  patterns.forEach(pattern => {
    const files = glob.sync(pattern, { cwd: process.cwd() });
    files.forEach(file => {
      totalProcessed++;
      if (processFile(file)) {
        totalFixed++;
      }
    });
  });
  
  console.log(`\nProcessed ${totalProcessed} files`);
  console.log(`Fixed ${totalFixed} files`);
  console.log('Targeted syntax error fixes completed!');
}

if (require.main === module) {
  main();
}

module.exports = { fixTargetedErrors, processFile };
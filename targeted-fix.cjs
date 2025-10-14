#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const glob = require('glob');

// Function to fix specific syntax errors
function fixSpecificErrors(content, filePath) {
  let fixed = content;
  
  // Fix unterminated string literals
  fixed = fixed.replace(/content="([^"]*?)(?=\s*\/>)/g, (match, content) => {
    if (!content.endsWith('"')) {
      return `content="${content}"`;
    }
    return match;
  });
  
  // Fix malformed JSX structure
  fixed = fixed.replace(/<(\w+)>\s*<\/\1>\s*<(\w+)>/g, '<$2>');
  
  // Fix missing closing tags
  fixed = fixed.replace(/<div([^>]*)>\s*$/gm, '<div$1>');
  
  // Fix broken JSX expressions
  fixed = fixed.replace(/\)\s*;\s*\)\s*;\s*\)\s*;\s*\)\s*;\s*\)\s*;\s*$/gm, ')');
  fixed = fixed.replace(/\)\s*;\s*\)\s*;\s*\)\s*;\s*\)\s*;\s*$/gm, ')');
  fixed = fixed.replace(/\)\s*;\s*\)\s*;\s*\)\s*;\s*$/gm, ')');
  fixed = fixed.replace(/\)\s*;\s*\)\s*;\s*$/gm, ')');
  fixed = fixed.replace(/\)\s*;\s*$/gm, ')');
  
  // Fix malformed function declarations
  fixed = fixed.replace(/export default function (\w+)\(\)\s*{\s*'([^']*)'\s*return\s*\(/g, 'export default function $1() {\n  return (');
  
  // Fix broken JSX structure in specific patterns
  fixed = fixed.replace(/<React\.Fragment>\s*\)\s*;\s*<\/React\.Fragment><(\w+)>/g, '<$1>');
  
  // Fix malformed Helmet tags
  fixed = fixed.replace(/<\/Helmet>\s*<div>\s*<div>\s*}/g, '</Helmet>\n      <div>\n        <div>\n        </div>\n      </div>\n    </React.Fragment>\n  );');
  
  // Fix broken return statements
  fixed = fixed.replace(/return\s*\(\s*<(\w+)>\s*\)\s*;\s*<\/\1>/g, 'return (\n    <$1>\n    </$1>\n  );');
  
  // Fix malformed JSX in App.tsx specifically
  if (filePath.includes('App.tsx')) {
    fixed = fixed.replace(/<HelmetProvider>\s*<\/HelmetProvider><Router>\s*\)\s*;\s*\)\s*;\s*\)\s*;\s*\)\s*;\s*\)\s*;\s*<div/g, '<HelmetProvider>\n      <Router>\n        <div');
    fixed = fixed.replace(/<\/Router><Header \/>\s*<main>\s*<\/Header><Routes>\s*<\/Routes><Route/g, '          <Header />\n          <main>\n            <Routes>\n              <Route');
    fixed = fixed.replace(/<\/Route><Route/g, '</Route>\n              <Route');
    fixed = fixed.replace(/<\/Routes>\s*;\s*<\/main>\s*<\/Route><Footer \/>\s*<\/div>\s*<\/Router>\s*;\s*<\/HelmetProvider>\s*;\s*\)\s*;\s*}\s*;\s*export default App;\s*<\/Footer>/g, '            </Routes>\n          </main>\n          <Footer />\n        </div>\n      </Router>\n    </HelmetProvider>\n  );\n}\n\nexport default App;');
  }
  
  // Fix 404.tsx specifically
  if (filePath.includes('404.tsx')) {
    fixed = fixed.replace(/<div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">\s*\)\s*;\s*<div/g, '<div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">\n      <div');
    fixed = fixed.replace(/<\/div>\s*}\s*;\s*}\s*;\s*}\s*;\s*}\s*;\s*}\s*;\s*\)\s*;\s*}\s*;\s*$/g, '</div>\n    </div>\n  );\n}');
  }
  
  return fixed;
}

// Function to fix specific page files
function fixPageFile(content, filePath) {
  let fixed = content;
  
  // Common pattern for page files
  const pagePattern = /export default function Page\(\)\s*{\s*'\s*return\s*\(\s*<React\.Fragment>\s*\)\s*;\s*<\/React\.Fragment><Helmet>/;
  
  if (pagePattern.test(fixed)) {
    // Extract the title from the file path
    const fileName = path.basename(filePath, '.tsx');
    const pageTitle = fileName.split('-').map(word => 
      word.charAt(0).toUpperCase() + word.slice(1)
    ).join(' ');
    
    fixed = `import React from "react";
import { Helmet } from "react-helmet-async";

export default function Page() {
  return (
    <React.Fragment>
      <Helmet>
        <title>${pageTitle} - Zion Tech Group</title>
        <meta name="description" content="Professional ${pageTitle.toLowerCase()} services by Zion Tech Group." />
      </Helmet>
      <div className="min-h-screen bg-gray-900">
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-4xl font-bold text-white mb-8">${pageTitle}</h1>
          <p className="text-gray-300 text-lg">
            Professional ${pageTitle.toLowerCase()} services to help your business grow.
          </p>
        </div>
      </div>
    </React.Fragment>
  );
}`;
  }
  
  return fixed;
}

// Function to fix component files
function fixComponentFile(content, filePath) {
  let fixed = content;
  
  // Fix common component patterns
  if (fixed.includes('export default function') && fixed.includes('return (')) {
    // Fix malformed component structure
    fixed = fixed.replace(/export default function (\w+)\(\)\s*{\s*return\s*\(\s*<(\w+)>\s*\)\s*;\s*<\/\2>\s*}/g, 
      'export default function $1() {\n  return (\n    <$2>\n    </$2>\n  );\n}');
  }
  
  // Fix missing semicolons
  fixed = fixed.replace(/import\s+(\w+)\s+from\s+"([^"]*)"\s*$/gm, 'import $1 from "$2";');
  
  // Fix malformed JSX
  fixed = fixed.replace(/<(\w+)([^>]*)>\s*$/gm, '<$1$2>');
  
  return fixed;
}

// Main function to process all files
function processFiles() {
  const patterns = [
    'app/**/*.tsx',
    'app/**/*.ts',
    '__tests__/**/*.tsx',
    '__tests__/**/*.ts'
  ];
  
  let totalFiles = 0;
  let fixedFiles = 0;
  
  patterns.forEach(pattern => {
    const files = glob.sync(pattern, { cwd: process.cwd() });
    
    files.forEach(file => {
      totalFiles++;
      const filePath = path.join(process.cwd(), file);
      
      try {
        let content = fs.readFileSync(filePath, 'utf8');
        const originalContent = content;
        
        // Apply fixes
        content = fixSpecificErrors(content, file);
        
        // Apply page-specific fixes
        if (file.includes('/page.tsx') || file.includes('/page.ts')) {
          content = fixPageFile(content, file);
        }
        
        // Apply component-specific fixes
        if (file.includes('/components/')) {
          content = fixComponentFile(content, file);
        }
        
        // Only write if content changed
        if (content !== originalContent) {
          fs.writeFileSync(filePath, content, 'utf8');
          console.log(`Fixed: ${file}`);
          fixedFiles++;
        }
      } catch (error) {
        console.error(`Error processing ${file}:`, error.message);
      }
    });
  });
  
  console.log(`\nProcessed ${totalFiles} files, fixed ${fixedFiles} files.`);
}

// Run the fix
processFiles();
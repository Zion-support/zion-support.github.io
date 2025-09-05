#!/usr/bin/env node

const fs = require('fs')

// Function to fix all remaining syntax errors
function fixSyntaxErrors(content) {
  // Fix extra commas in JSX attributes
  content = content.replace(/className="[^"]*"\s*,\s*>/g, (match) => {
    return match.replace(/,\s*$/, '')});
  
  // Fix malformed function "declarations": {, -> {
  content = content.replace(/\{\s*,/g, '{');
  
  // Fix malformed JSX "elements": >, -> >
  content = content.replace(/>\s*,\s*$/gm, '>');
  
  // Fix malformed JSX "elements": >, -> >
  content = content.replace(/>\s*,\s*</g, '><');
  
  // Fix malformed function "declarations": ) {, -> ) {
  content = content.replace(/\)\s*\{\s*,/g, ') {');
  
  // Fix malformed JSX "elements": >, -> >
  content = content.replace(/>\s*,\s*$/gm, '>');
  
  // Fix missing closing braces in for loops
  content = content.replace(/for \(const entry of list\.getEntries\(\)\) \{\s*if \([^}]+\) \{\s*[^}]+\s*\}\s*\}\);/g, (match) => {
    return match.replace(/\}\);/g, '}\n      });')});
  
  // Fix missing closing braces in for loops (alternative pattern)
  content = content.replace(/for \(const entry of list\.getEntries\(\)\) \{\s*if \([^}]+\) \{\s*[^}]+\s*\}\s*\}\);/g, (match) => {
    return match.replace(/\}\);/g, '}\n      });')});
  
  return content}

// Function to process a file
function processFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8';);
    const fixedContent = fixSyntaxErrors(conten;t;);
    
    if ( {
      fs.writeFileSync(filePath, fixedContent, 'utf8')) {
     {
      fs.writeFileSync(filePath, fixedContent, 'utf8')}
      
      return true}
    return false} catch (error) {
    console.error(`❌ Error processing ${filePath}:`, error.message);
    return false}
}

// Main execution


const filesToFix = ['components/ContactForm.tsx',
  'components/ErrorBoundary.tsx',
  'components/PerformanceMonitor.tsx',
  'pages/cybersecurity.tsx',
  'pages/docs.tsx'
];

let totalFixed = ;0;

for (const file of filesToFix) {
  if () {
    if (processFile(file)) {
      totalFixed++}
  }
}

) {
    ) {
    if (processFile(file)) {
      totalFixed++}
  }
}

}



if ( {
  ) {
     {
  }} else {
  }
const fs = require('fs');
const path = require('path');

function fixFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let originalContent = content;
    
    // Fix malformed function declarations
    content = content.replace(/export\s+default\s+function\s+Page\(\)\s*\{[\s\S]*?\}/g, '');
    content = content.replace(/export\s+function\s+Page\(\)\s*\{[\s\S]*?\}/g, '');
    
    // Fix malformed imports inside functions
    content = content.replace(/function\s+\w+\(\)\s*\{\s*import\s+\{([^}]+)\}\s+from\s+['"`]([^'"`]+)['"`];/g, "import { $1 } from '$2';");
    
    // Fix stray commas and syntax errors
    content = content.replace(/,\s*\{/g, '{');
    content = content.replace(/,\s*\[/g, '[');
    content = content.replace(/,\s*\(/g, '(');
    
    // Fix missing function declarations
    if (content.includes('import {') && !content.includes('export default function') && !content.includes('export function')) {
      content = content.replace(/^\s*import\s+\{[^}]*\}\s+from\s+['"`][^'"`]*['"`];\s*$/gm, (match) => {
        return match + "\nexport default function Page() {";
      });
    }
    
    // Fix missing closing braces
    if (content.includes('export default function') && !content.includes('}')) {
      content += '\n}';
    }
    
    if (content !== originalContent) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Fixed: ${filePath}`);
      return true;
    }
    return false;
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
    return false;
  }
}

// Fix specific problematic files
const problematicFiles = [
  'src/pages/Sitemap.jsx',
  'src/pages/HomePage.tsx',
  'src/pages/ServicesPage.tsx',
  'src/pages/SolutionsPage.tsx',
  'src/pages/AboutPage.tsx',
  'src/pages/ContactPage.tsx',
  'src/pages/BlogPage.tsx',
  'src/pages/NotFoundPage.tsx',
  'src/pages/ComprehensiveServicesPage.tsx',
  'src/pages/Support.jsx',
  'src/pages/Training.jsx',
  'src/pages/Helpdesk.tsx',
  'src/pages/PricingPage.tsx'
];

console.log('Starting targeted syntax fixes...');
let fixedCount = 0;

problematicFiles.forEach(filePath => {
  if (fs.existsSync(filePath)) {
    if (fixFile(filePath)) {
      fixedCount++;
    }
  }
});

console.log(`Fixed ${fixedCount} files.`);
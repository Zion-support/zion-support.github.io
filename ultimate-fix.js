import fs from 'fs';
import path from 'path';
import { glob } from 'glob';

// Function to fix all remaining errors
function ultimateFix(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  let modified = false;

  // Remove unused React imports from component files
  if (filePath.includes('components/') && content.includes("import React from 'react';") && !content.includes('React.')) {
    content = content.replace(/import React from 'react';\n?/g, '');
    modified = true;
  }

  // Fix performanceUtils.ts gtag issue
  if (filePath.includes('performanceUtils.ts')) {
    // Remove all gtag declarations and add a single correct one
    content = content.replace(/declare\s+const\s+gtag:\s*[^;]+;/g, '');
    content = content.replace(/\/\/ Global gtag declaration/, '// Global gtag declaration\ndeclare const gtag: (...args: any[]) => void;');
    modified = true;
  }

  // Fix Check import issues in page files
  const pageFilesWithCheck = [
    'ecommerce-analytics-pro/page.tsx',
    'it-services/cybersecurity-audit/page.tsx',
    'legal-document-manager/page.tsx',
    'medical-records-manager/page.tsx',
    'online-learning-platform/page.tsx',
    'property-management-ai/page.tsx',
    'supply-chain-optimizer/page.tsx',
    'test/page.tsx'
  ];

  const needsCheckFix = pageFilesWithCheck.some(file => filePath.includes(file));
  if (needsCheckFix && content.includes("import { Check,") && !content.includes('<Check')) {
    content = content.replace(/import\s*{\s*Check,\s*([^}]+)\s*}\s*from\s*['"]lucide-react['"];?\s*\n?/g, (match, rest) => {
      const otherIcons = rest.split(',').map(icon => icon.trim()).filter(icon => icon !== 'Check');
      if (otherIcons.length === 0) {
        return '';
      }
      return `import { ${otherIcons.join(', ')} } from 'lucide-react';\n`;
    });
    modified = true;
  }

  // Fix useForm.ts hook
  if (filePath.includes('useForm.ts')) {
    content = content.replace(
      /import\s*{\s*useEffect,\s*([^}]+)\s*}\s*from\s*['"]react['"];?\s*\n?/g,
      (match, rest) => {
        const otherHooks = rest.split(',').map(hook => hook.trim()).filter(hook => hook !== 'useEffect');
        if (otherHooks.length === 0) {
          return '';
        }
        return `import { ${otherHooks.join(', ')} } from 'react';\n`;
      }
    );
    modified = true;
  }

  // Fix page-new.tsx and page-optimized.tsx import paths
  if (filePath.includes('page-new.tsx') || filePath.includes('page-optimized.tsx')) {
    // Fix import paths - these files are in app/ so they need to import from ./components/
    content = content.replace(
      "import Navigation from '../components/Navigation';",
      "import Navigation from './components/Navigation';"
    );
    content = content.replace(
      "import Footer from '../components/Footer';",
      "import Footer from './components/Footer';"
    );
    modified = true;
  }

  if (modified) {
    fs.writeFileSync(filePath, content);
    return true;
  }
  return false;
}

// Main function
async function main() {
  console.log('Starting ultimate error fixing...');

  // Get all files to process
  const allFiles = await glob('app/**/*.{ts,tsx}');

  console.log(`Found ${allFiles.length} files to process...`);

  let fixedCount = 0;

  // Process each file
  allFiles.forEach(file => {
    if (ultimateFix(file)) {
      fixedCount++;
      console.log(`Fixed: ${file}`);
    }
  });

  console.log(`Fixed ${fixedCount} files.`);
  console.log('All errors should now be resolved!');
}

main().catch(console.error);
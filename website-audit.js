#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Website audit script for Zion Tech Group
console.log('🔍 Starting comprehensive website audit...\n');

// Define all expected routes based on App.tsx
const expectedRoutes = [
  '/',
  '/about',
  '/contact',
  '/services',
  '/pricing',
  '/blog',
  '/ai-services',
  '/tutorials',
  '/demo',
  '/support',
  '/privacy',
  '/terms',
  '/cookies',
  '/sitemap'
];

// Check if page files exist
function checkPageExists(route) {
  const pagePath = route === '/' ? '/app/page.tsx' : `/app${route}/page.tsx`;
  const fullPath = path.join(__dirname, pagePath);
  return fs.existsSync(fullPath);
}

// Check for missing pages
console.log('📄 Checking for missing pages...\n');
const missingPages = [];
const existingPages = [];

expectedRoutes.forEach(route => {
  if (checkPageExists(route)) {
    existingPages.push(route);
    console.log(`✅ ${route} - Page exists`);
  } else {
    missingPages.push(route);
    console.log(`❌ ${route} - Page missing`);
  }
});

console.log(`\n📊 Summary:`);
console.log(`✅ Existing pages: ${existingPages.length}`);
console.log(`❌ Missing pages: ${missingPages.length}`);

// Check for additional pages in app directory
console.log('\n🔍 Scanning for additional pages...\n');
const appDir = path.join(__dirname, 'app');
const additionalPages = [];

function scanDirectory(dir, basePath = '') {
  const items = fs.readdirSync(dir);
  
  items.forEach(item => {
    const itemPath = path.join(dir, item);
    const stat = fs.statSync(itemPath);
    
    if (stat.isDirectory()) {
      const newBasePath = basePath + '/' + item;
      // Check if this directory has a page.tsx file
      const pageFile = path.join(itemPath, 'page.tsx');
      if (fs.existsSync(pageFile)) {
        additionalPages.push(newBasePath);
        console.log(`📄 Found additional page: ${newBasePath}`);
      }
      // Recursively scan subdirectories
      scanDirectory(itemPath, newBasePath);
    }
  });
}

scanDirectory(appDir);

// Check for broken imports and missing components
console.log('\n🔧 Checking for broken imports and missing components...\n');

const brokenImports = [];
const componentFiles = [];

function checkFileForBrokenImports(filePath, relativePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    const importMatches = content.match(/import.*from\s+['"]([^'"]+)['"]/g);
    
    if (importMatches) {
      importMatches.forEach(importStatement => {
        const match = importStatement.match(/import.*from\s+['"]([^'"]+)['"]/);
        if (match) {
          const importPath = match[1];
          
          // Check if it's a relative import
          if (importPath.startsWith('./') || importPath.startsWith('../')) {
            const resolvedPath = path.resolve(path.dirname(filePath), importPath);
            const possibleExtensions = ['.tsx', '.ts', '.jsx', '.js', '/index.tsx', '/index.ts', '/index.jsx', '/index.js'];
            
            let found = false;
            for (const ext of possibleExtensions) {
              if (fs.existsSync(resolvedPath + ext)) {
                found = true;
                break;
              }
            }
            
            if (!found && !fs.existsSync(resolvedPath)) {
              brokenImports.push({
                file: relativePath,
                import: importPath,
                resolvedPath: resolvedPath
              });
            }
          }
        }
      });
    }
  } catch (error) {
    console.log(`⚠️  Error reading file ${relativePath}: ${error.message}`);
  }
}

function scanForComponents(dir, basePath = '') {
  const items = fs.readdirSync(dir);
  
  items.forEach(item => {
    const itemPath = path.join(dir, item);
    const stat = fs.statSync(itemPath);
    
    if (stat.isDirectory()) {
      scanForComponents(itemPath, basePath + '/' + item);
    } else if (item.endsWith('.tsx') || item.endsWith('.ts')) {
      const relativePath = basePath + '/' + item;
      componentFiles.push(relativePath);
      checkFileForBrokenImports(itemPath, relativePath);
    }
  });
}

scanForComponents(appDir);

if (brokenImports.length > 0) {
  console.log('❌ Broken imports found:');
  brokenImports.forEach(broken => {
    console.log(`   ${broken.file}: ${broken.import}`);
  });
} else {
  console.log('✅ No broken imports found');
}

// Check navigation links
console.log('\n🧭 Checking navigation links...\n');

const navigationFile = path.join(__dirname, 'app/components/Navigation.tsx');
let navigationLinks = [];

try {
  const navContent = fs.readFileSync(navigationFile, 'utf8');
  const linkMatches = navContent.match(/to=['"]([^'"]+)['"]/g);
  
  if (linkMatches) {
    linkMatches.forEach(match => {
      const link = match.match(/to=['"]([^'"]+)['"]/)[1];
      navigationLinks.push(link);
    });
  }
  
  console.log('Navigation links found:');
  navigationLinks.forEach(link => {
    const exists = checkPageExists(link);
    console.log(`${exists ? '✅' : '❌'} ${link}`);
  });
} catch (error) {
  console.log(`⚠️  Error reading navigation file: ${error.message}`);
}

// Generate audit report
const auditReport = {
  timestamp: new Date().toISOString(),
  summary: {
    totalExpectedRoutes: expectedRoutes.length,
    existingPages: existingPages.length,
    missingPages: missingPages.length,
    additionalPages: additionalPages.length,
    brokenImports: brokenImports.length,
    navigationLinks: navigationLinks.length
  },
  missingPages,
  existingPages,
  additionalPages,
  brokenImports,
  navigationLinks
};

fs.writeFileSync(
  path.join(__dirname, 'audit-report.json'),
  JSON.stringify(auditReport, null, 2)
);

console.log('\n📋 Audit Report Generated: audit-report.json');
console.log('\n🎯 Next Steps:');
console.log('1. Create missing pages');
console.log('2. Fix broken imports');
console.log('3. Update navigation links');
console.log('4. Test all routes');
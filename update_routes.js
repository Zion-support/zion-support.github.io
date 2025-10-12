#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Read all page files
const appDir = '/workspace/app';
const pages = [];

function findPages(dir) {
  const items = fs.readdirSync(dir);
  
  for (const item of items) {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory()) {
      // Check if this directory has a page.tsx file
      const pageFile = path.join(fullPath, 'page.tsx');
      if (fs.existsSync(pageFile)) {
        const relativePath = path.relative(appDir, fullPath);
        pages.push(relativePath);
      }
      
      // Recursively search subdirectories
      findPages(fullPath);
    }
  }
}

findPages(appDir);

// Sort pages for consistent output
pages.sort();

// Read current App.tsx
const appTsxPath = '/workspace/App.tsx';
let appContent = fs.readFileSync(appTsxPath, 'utf8');

// Generate dynamic imports for all pages
let dynamicImports = '';
let routeComponents = '';

pages.forEach((page) => {
  const routePath = '/' + page;
  const componentName = page
    .split('/')
    .map(part => part
      .split('-')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join('')
    )
    .join('') + 'Page';
  
  const importPath = `./app/${page}/page`;
  
  // Skip if it's the root page (already handled)
  if (page === 'page') return;
  
  dynamicImports += `const ${componentName} = React.lazy(() => import('${importPath}'))\n`;
  routeComponents += `                <Route path="${routePath}" element={<${componentName} />} />\n`;
});

// Find the position to insert new imports (after existing lazy imports)
const importInsertionPoint = appContent.lastIndexOf('// Lazy load pages for better performance');
if (importInsertionPoint !== -1) {
  const nextLine = appContent.indexOf('\n', importInsertionPoint) + 1;
  appContent = appContent.slice(0, nextLine) + '\n' + dynamicImports + appContent.slice(nextLine);
}

// Find the position to insert new routes (before the 404 route)
const routeInsertionPoint = appContent.lastIndexOf('                {/* 404 Route */}');
if (routeInsertionPoint !== -1) {
  appContent = appContent.slice(0, routeInsertionPoint) + routeComponents + '\n                ' + appContent.slice(routeInsertionPoint);
}

// Write the updated App.tsx
fs.writeFileSync(appTsxPath, appContent);

console.log(`Updated App.tsx with ${pages.length} routes`);
console.log('All pages should now be accessible via routing');
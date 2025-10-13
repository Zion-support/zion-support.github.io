import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Read the comprehensive audit report
const auditReport = JSON.parse(fs.readFileSync(path.join(__dirname, 'comprehensive_audit_report.json'), 'utf8'));

const allPages = auditReport.existingPages;

// Read the current App.tsx
const appTsxPath = path.join(__dirname, 'App.tsx');
let appContent = fs.readFileSync(appTsxPath, 'utf8');

// Generate lazy imports for all pages
const lazyImports = [];
const routes = [];

// Filter out pages that already have routes in App.tsx
const existingRoutes = [
  '/', '/about', '/contact', '/services', '/pricing', '/blog', '/ai-services', 
  '/tutorials', '/demo', '/support', '/privacy', '/terms', '/cookies', '/sitemap',
  '/case-studies', '/consultation', '/it-services', '/cloud-services', '/cybersecurity',
  '/custom-development', '/web-development', '/mobile-development', '/database-management',
  '/network-infrastructure', '/data-analytics', '/careers'
];

// Generate lazy imports and routes for new pages
for (const page of allPages) {
  if (!existingRoutes.includes(page) && page !== '/page.tsx') {
    // Fix component names that start with numbers or special characters
    let componentName = page.charAt(1).toUpperCase() + page.slice(1).replace(/-/g, '').replace(/\//g, '');
    
    // Handle special cases for component names
    if (componentName.match(/^\d/)) {
      componentName = 'Page' + componentName;
    }
    if (componentName.includes('5g')) {
      componentName = componentName.replace('5g', 'FiveG');
    }
    if (componentName.includes('ai-')) {
      componentName = componentName.replace('ai-', 'Ai');
    }
    if (componentName.includes('zion-')) {
      componentName = componentName.replace('zion-', 'Zion');
    }
    
    const importPath = `./app${page}/page`;
    
    lazyImports.push(`const ${componentName}Page = React.lazy(() => import("${importPath}"));`);
    routes.push(`                        <Route path="${page}" element={<${componentName}Page />} />`);
  }
}

// Insert lazy imports after the existing ones
const lazyImportInsertionPoint = 'const CareersPage = React.lazy(() => import("./app/careers/page"));';
const newLazyImports = lazyImports.join('\n');

if (appContent.includes(lazyImportInsertionPoint)) {
  appContent = appContent.replace(
    lazyImportInsertionPoint,
    lazyImportInsertionPoint + '\n\n' + newLazyImports
  );
}

// Insert routes after the existing ones
const routesInsertionPoint = '                        <Route path="/careers" element={<CareersPage />} />';
const newRoutes = routes.join('\n');

if (appContent.includes(routesInsertionPoint)) {
  appContent = appContent.replace(
    routesInsertionPoint,
    routesInsertionPoint + '\n                        \n                        {/* Auto-generated routes */}\n' + newRoutes
  );
}

// Write the updated App.tsx
fs.writeFileSync(appTsxPath, appContent);

console.log(`Updated App.tsx with ${lazyImports.length} new lazy imports and ${routes.length} new routes`);
console.log('Routes added:', routes.length);
console.log('Lazy imports added:', lazyImports.length);
import fs from 'fs';

// Read the current App.tsx
const appPath = '/workspace/App.tsx';
let appContent = fs.readFileSync(appPath, 'utf8');

// Read the missing pages analysis
const analysis = JSON.parse(fs.readFileSync('/workspace/missing-pages-analysis.json', 'utf8'));
const missingPages = analysis.missingPagesList;

// Generate import statements for missing pages
const imports = [];
const routes = [];

for (const route of missingPages) {
  const serviceName = route.replace('/', '');
  const componentName = serviceName.replace(/-/g, '').replace(/^ai/, 'Ai').replace(/^it/, 'It').replace(/^zion/, 'Zion');
  
  // Add import
  imports.push(`const ${componentName}Page = React.lazy(() => import('./app${route}/page'));`);
  
  // Add route
  routes.push(`                            <Route path="${route}" element={<${componentName}Page />} />`);
}

// Find the position to insert imports (after the existing lazy imports)
const importInsertionPoint = appContent.lastIndexOf('const SitemapPage = React.lazy(() => import(\'./app/sitemap/page\'));');
const insertAfterImport = appContent.indexOf('\n', importInsertionPoint) + 1;

// Insert new imports
const newImports = '\n' + imports.join('\n') + '\n';
appContent = appContent.slice(0, insertAfterImport) + newImports + appContent.slice(insertAfterImport);

// Find the position to insert routes (after the existing routes)
const routeInsertionPoint = appContent.lastIndexOf('<Route path="/team" element={<TeamPage />} />');
const insertAfterRoute = appContent.indexOf('\n', routeInsertionPoint) + 1;

// Insert new routes
const newRoutes = '\n                            ' + routes.join('\n                            ') + '\n';
appContent = appContent.slice(0, insertAfterRoute) + newRoutes + appContent.slice(insertAfterRoute);

// Write the updated App.tsx
fs.writeFileSync(appPath, appContent);

console.log('App.tsx updated with new routes!');
console.log(`Added ${imports.length} new imports and ${routes.length} new routes.`);
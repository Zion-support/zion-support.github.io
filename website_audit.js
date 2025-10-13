import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Website audit script to check all links and identify missing content
console.log('Starting comprehensive website audit...');

// Read the broken links file
const brokenLinksFile = path.join(__dirname, 'broken_links.txt');
let brokenLinks = [];
if (fs.existsSync(brokenLinksFile)) {
  brokenLinks = fs.readFileSync(brokenLinksFile, 'utf8').split('\n').filter(line => line.trim());
}

// Read the audit results
const auditResultsFile = path.join(__dirname, 'audit-results.json');
let auditResults = { working: [], broken: [], missing: [], errors: [] };
if (fs.existsSync(auditResultsFile)) {
  auditResults = JSON.parse(fs.readFileSync(auditResultsFile, 'utf8'));
}

// Get all page.tsx files
const appDir = path.join(__dirname, 'app');
const pages = [];

function findPages(dir) {
  const items = fs.readdirSync(dir);
  for (const item of items) {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory()) {
      findPages(fullPath);
    } else if (item === 'page.tsx') {
      const relativePath = path.relative(appDir, fullPath);
      const route = '/' + relativePath.replace(/\\/g, '/').replace('/page.tsx', '');
      pages.push(route);
    }
  }
}

findPages(appDir);

console.log(`Found ${pages.length} pages:`);
pages.forEach(page => console.log(`  - ${page}`));

// Check for missing pages that are referenced in broken_links.txt
const missingPages = [];
const existingPages = new Set(pages);

brokenLinks.forEach(link => {
  if (!existingPages.has(link)) {
    missingPages.push(link);
  }
});

console.log(`\nMissing pages (${missingPages.length}):`);
missingPages.forEach(page => console.log(`  - ${page}`));

// Check for pages that exist but might have issues
const potentiallyBrokenPages = [];
pages.forEach(page => {
  const pageFile = path.join(appDir, page.substring(1), 'page.tsx');
  if (fs.existsSync(pageFile)) {
    const content = fs.readFileSync(pageFile, 'utf8');
    
    // Check for common issues
    if (content.includes('export default') && content.includes('function') || content.includes('const') && content.includes('=')) {
      // Page seems to have proper export
    } else {
      potentiallyBrokenPages.push(page);
    }
  }
});

console.log(`\nPotentially broken pages (${potentiallyBrokenPages.length}):`);
potentiallyBrokenPages.forEach(page => console.log(`  - ${page}`));

// Generate comprehensive report
const report = {
  timestamp: new Date().toISOString(),
  totalPages: pages.length,
  missingPages: missingPages,
  potentiallyBrokenPages: potentiallyBrokenPages,
  existingPages: pages,
  brokenLinksFromFile: brokenLinks,
  auditResults: auditResults
};

// Write comprehensive report
fs.writeFileSync(path.join(__dirname, 'comprehensive_audit_report.json'), JSON.stringify(report, null, 2));

console.log('\n=== AUDIT SUMMARY ===');
console.log(`Total pages found: ${pages.length}`);
console.log(`Missing pages: ${missingPages.length}`);
console.log(`Potentially broken pages: ${potentiallyBrokenPages.length}`);
console.log(`Working links from previous audit: ${auditResults.working.length}`);
console.log(`Broken links from previous audit: ${auditResults.broken.length}`);

console.log('\nDetailed report saved to: comprehensive_audit_report.json');
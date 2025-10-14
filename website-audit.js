import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Website audit script to check all links and identify broken/missing content
class WebsiteAuditor {
  constructor() {
    this.baseUrl = 'https://ziontechgroup.com';
    this.localUrl = 'http://localhost:3000';
    this.brokenLinks = [];
    this.missingPages = [];
    this.auditResults = {
      totalPages: 0,
      brokenLinks: [],
      missingPages: [],
      navigationIssues: [],
      seoIssues: [],
      performanceIssues: [],
      accessibilityIssues: []
    };
  }

  // Get all routes from App.tsx
  extractRoutesFromApp() {
    const appPath = path.join(__dirname, 'App.tsx');
    const appContent = fs.readFileSync(appPath, 'utf8');
    
    const routes = [];
    const routeRegex = /<Route\s+path="([^"]+)"\s+element={<[^>]+>}\s*\/>/g;
    let match;
    
    while ((match = routeRegex.exec(appContent)) !== null) {
      routes.push(match[1]);
    }
    
    return routes;
  }

  // Get all pages from app directory
  getPagesFromAppDirectory() {
    const appDir = path.join(__dirname, 'app');
    const pages = [];
    
    const scanDirectory = (dir, basePath = '') => {
      const items = fs.readdirSync(dir);
      
      for (const item of items) {
        const fullPath = path.join(dir, item);
        const stat = fs.statSync(fullPath);
        
        if (stat.isDirectory()) {
          const newBasePath = basePath ? `${basePath}/${item}` : item;
          scanDirectory(fullPath, newBasePath);
        } else if (item === 'page.tsx') {
          const route = basePath ? `/${basePath}` : '/';
          pages.push(route);
        }
      }
    };
    
    scanDirectory(appDir);
    return pages;
  }

  // Check if a page exists
  checkPageExists(route) {
    const appDir = path.join(__dirname, 'app');
    const pagePath = route === '/' ? 
      path.join(appDir, 'page.tsx') : 
      path.join(appDir, route.substring(1), 'page.tsx');
    
    return fs.existsSync(pagePath);
  }

  // Extract links from a file
  extractLinksFromFile(filePath) {
    const content = fs.readFileSync(filePath, 'utf8');
    const links = [];
    
    // Extract Link components
    const linkRegex = /<Link\s+to="([^"]+)"/g;
    let match;
    while ((match = linkRegex.exec(content)) !== null) {
      links.push(match[1]);
    }
    
    // Extract href attributes
    const hrefRegex = /href="([^"]+)"/g;
    while ((match = hrefRegex.exec(content)) !== null) {
      links.push(match[1]);
    }
    
    return [...new Set(links)]; // Remove duplicates
  }

  // Check navigation consistency
  checkNavigationConsistency() {
    const layoutPath = path.join(__dirname, 'app', 'layout.tsx');
    const homePagePath = path.join(__dirname, 'app', 'page.tsx');
    
    const layoutLinks = this.extractLinksFromFile(layoutPath);
    const homePageLinks = this.extractLinksFromFile(homePagePath);
    
    const allLinks = [...new Set([...layoutLinks, ...homePageLinks])];
    
    for (const link of allLinks) {
      if (link.startsWith('/') && !link.startsWith('http')) {
        if (!this.checkPageExists(link)) {
          this.auditResults.missingPages.push({
            link,
            foundIn: ['layout.tsx', 'page.tsx'],
            type: 'navigation'
          });
        }
      }
    }
  }

  // Check for missing pages referenced in routes
  checkMissingPages() {
    const routes = this.extractRoutesFromApp();
    const existingPages = this.getPagesFromAppDirectory();
    
    for (const route of routes) {
      if (!existingPages.includes(route)) {
        this.auditResults.missingPages.push({
          route,
          type: 'routing',
          description: 'Route defined in App.tsx but page.tsx not found'
        });
      }
    }
  }

  // Check for orphaned pages (pages without routes)
  checkOrphanedPages() {
    const routes = this.extractRoutesFromApp();
    const existingPages = this.getPagesFromAppDirectory();
    
    for (const page of existingPages) {
      if (!routes.includes(page)) {
        this.auditResults.navigationIssues.push({
          page,
          type: 'orphaned',
          description: 'Page exists but no route defined in App.tsx'
        });
      }
    }
  }

  // Check footer links
  checkFooterLinks() {
    const layoutPath = path.join(__dirname, 'app', 'layout.tsx');
    const content = fs.readFileSync(layoutPath, 'utf8');
    
    // Extract footer links
    const footerSection = content.match(/<footer[^>]*>([\s\S]*?)<\/footer>/);
    if (footerSection) {
      const footerLinks = this.extractLinksFromFile(layoutPath);
      
      for (const link of footerLinks) {
        if (link.startsWith('/') && !link.startsWith('http')) {
          if (!this.checkPageExists(link)) {
            this.auditResults.missingPages.push({
              link,
              foundIn: ['footer'],
              type: 'footer'
            });
          }
        }
      }
    }
  }

  // Check for SEO issues
  checkSEOIssues() {
    const homePagePath = path.join(__dirname, 'app', 'page.tsx');
    const content = fs.readFileSync(homePagePath, 'utf8');
    
    // Check for meta tags
    if (!content.includes('SEOOptimizer')) {
      this.auditResults.seoIssues.push({
        type: 'missing_seo_optimizer',
        description: 'Home page missing SEOOptimizer component'
      });
    }
    
    // Check for proper heading structure
    if (!content.includes('<h1') && !content.includes('className="text-4xl')) {
      this.auditResults.seoIssues.push({
        type: 'missing_h1',
        description: 'Home page missing H1 tag'
      });
    }
  }

  // Generate comprehensive audit report
  generateAuditReport() {
    console.log('🔍 Starting comprehensive website audit...\n');
    
    // Check navigation consistency
    console.log('📋 Checking navigation consistency...');
    this.checkNavigationConsistency();
    
    // Check missing pages
    console.log('📄 Checking for missing pages...');
    this.checkMissingPages();
    
    // Check orphaned pages
    console.log('🔗 Checking for orphaned pages...');
    this.checkOrphanedPages();
    
    // Check footer links
    console.log('🦶 Checking footer links...');
    this.checkFooterLinks();
    
    // Check SEO issues
    console.log('🔍 Checking SEO issues...');
    this.checkSEOIssues();
    
    // Generate report
    const report = {
      timestamp: new Date().toISOString(),
      summary: {
        totalRoutes: this.extractRoutesFromApp().length,
        totalPages: this.getPagesFromAppDirectory().length,
        brokenLinks: this.auditResults.brokenLinks.length,
        missingPages: this.auditResults.missingPages.length,
        navigationIssues: this.auditResults.navigationIssues.length,
        seoIssues: this.auditResults.seoIssues.length
      },
      details: this.auditResults
    };
    
    // Save report
    fs.writeFileSync(
      path.join(__dirname, 'website-audit-report.json'),
      JSON.stringify(report, null, 2)
    );
    
    // Print summary
    console.log('\n📊 AUDIT SUMMARY:');
    console.log(`Total Routes: ${report.summary.totalRoutes}`);
    console.log(`Total Pages: ${report.summary.totalPages}`);
    console.log(`Missing Pages: ${report.summary.missingPages}`);
    console.log(`Navigation Issues: ${report.summary.navigationIssues}`);
    console.log(`SEO Issues: ${report.summary.seoIssues}`);
    
    if (report.summary.missingPages > 0) {
      console.log('\n❌ MISSING PAGES:');
      report.details.missingPages.forEach(page => {
        console.log(`  - ${page.link || page.route}: ${page.description || 'Missing page'}`);
      });
    }
    
    if (report.summary.navigationIssues > 0) {
      console.log('\n⚠️  NAVIGATION ISSUES:');
      report.details.navigationIssues.forEach(issue => {
        console.log(`  - ${issue.page}: ${issue.description}`);
      });
    }
    
    if (report.summary.seoIssues > 0) {
      console.log('\n🔍 SEO ISSUES:');
      report.details.seoIssues.forEach(issue => {
        console.log(`  - ${issue.type}: ${issue.description}`);
      });
    }
    
    console.log('\n✅ Audit completed! Report saved to website-audit-report.json');
    
    return report;
  }
}

// Run the audit
const auditor = new WebsiteAuditor();
const report = auditor.generateAuditReport();
import axios from 'axios';
import * as cheerio from 'cheerio';
import fs from 'fs';
import path from 'path';

class WebsiteAuditor {
  constructor() {
    this.baseUrl = 'https://ziontechgroup.com';
    this.visitedUrls = new Set();
    this.brokenLinks = [];
    this.missingPages = [];
    this.validPages = [];
    this.allLinks = new Set();
    this.auditResults = {
      totalPages: 0,
      workingPages: 0,
      brokenLinks: 0,
      missingPages: 0,
      issues: []
    };
  }

  async auditWebsite() {
    console.log('🔍 Starting comprehensive website audit...');
    console.log(`📡 Base URL: ${this.baseUrl}`);
    
    try {
      // Start with the homepage
      await this.auditPage(this.baseUrl);
      
      // Audit all discovered links
      const linksToAudit = Array.from(this.allLinks);
      console.log(`\n📊 Found ${linksToAudit.length} total links to audit`);
      
      for (const link of linksToAudit) {
        if (!this.visitedUrls.has(link)) {
          await this.auditPage(link);
          // Add delay to be respectful
          await new Promise(resolve => setTimeout(resolve, 1000));
        }
      }
      
      this.generateReport();
      
    } catch (error) {
      console.error('❌ Audit failed:', error.message);
    }
  }

  async auditPage(url) {
    if (this.visitedUrls.has(url)) {
      return;
    }
    
    this.visitedUrls.add(url);
    console.log(`\n🔍 Auditing: ${url}`);
    
    try {
      const response = await axios.get(url, {
        timeout: 10000,
        headers: {
          'User-Agent': 'Mozilla/5.0 (compatible; WebsiteAuditor/1.0)'
        }
      });
      
      if (response.status === 200) {
        this.validPages.push(url);
        this.auditResults.workingPages++;
        
        // Parse HTML and extract links
        const $ = cheerio.load(response.data);
        this.extractLinks($, url);
        
        // Check for common issues
        this.checkPageIssues($, url);
        
        console.log(`✅ ${url} - OK`);
      } else {
        this.brokenLinks.push({ url, status: response.status, error: 'HTTP Error' });
        this.auditResults.brokenLinks++;
        console.log(`❌ ${url} - HTTP ${response.status}`);
      }
      
    } catch (error) {
      if (error.response) {
        this.brokenLinks.push({ 
          url, 
          status: error.response.status, 
          error: error.response.statusText 
        });
        console.log(`❌ ${url} - HTTP ${error.response.status}`);
      } else {
        this.brokenLinks.push({ 
          url, 
          status: 'ERROR', 
          error: error.message 
        });
        console.log(`❌ ${url} - ${error.message}`);
      }
      this.auditResults.brokenLinks++;
    }
    
    this.auditResults.totalPages++;
  }

  extractLinks($, currentUrl) {
    // Extract all internal links
    $('a[href]').each((i, element) => {
      const href = $(element).attr('href');
      if (href) {
        let fullUrl;
        
        if (href.startsWith('http')) {
          // External link
          if (href.includes('ziontechgroup.com')) {
            fullUrl = href;
            this.allLinks.add(fullUrl);
          }
        } else if (href.startsWith('/')) {
          // Internal absolute path
          fullUrl = `${this.baseUrl}${href}`;
          this.allLinks.add(fullUrl);
        } else if (href.startsWith('#') || href.startsWith('mailto:') || href.startsWith('tel:')) {
          // Skip anchors, email, and phone links
          return;
        } else {
          // Relative path
          const basePath = currentUrl.replace(/\/[^\/]*$/, '');
          fullUrl = `${basePath}/${href}`;
          this.allLinks.add(fullUrl);
        }
      }
    });

    // Extract links from navigation menus
    $('nav a[href], .navigation a[href]').each((i, element) => {
      const href = $(element).attr('href');
      if (href && !href.startsWith('http') && !href.startsWith('#')) {
        const fullUrl = href.startsWith('/') ? `${this.baseUrl}${href}` : `${this.baseUrl}/${href}`;
        this.allLinks.add(fullUrl);
      }
    });

    // Extract links from footer
    $('footer a[href]').each((i, element) => {
      const href = $(element).attr('href');
      if (href && !href.startsWith('http') && !href.startsWith('#')) {
        const fullUrl = href.startsWith('/') ? `${this.baseUrl}${href}` : `${this.baseUrl}/${href}`;
        this.allLinks.add(fullUrl);
      }
    });
  }

  checkPageIssues($, url) {
    const issues = [];
    
    // Check for missing title
    if (!$('title').text().trim()) {
      issues.push('Missing page title');
    }
    
    // Check for missing meta description
    if (!$('meta[name="description"]').attr('content')) {
      issues.push('Missing meta description');
    }
    
    // Check for missing h1
    if ($('h1').length === 0) {
      issues.push('Missing H1 heading');
    }
    
    // Check for images without alt text
    const imagesWithoutAlt = $('img:not([alt])').length;
    if (imagesWithoutAlt > 0) {
      issues.push(`${imagesWithoutAlt} images missing alt text`);
    }
    
    // Check for broken internal links (404s)
    $('a[href]').each((i, element) => {
      const href = $(element).attr('href');
      if (href && !href.startsWith('http') && !href.startsWith('#') && !href.startsWith('mailto:') && !href.startsWith('tel:')) {
        // This is an internal link that should be checked
        const fullUrl = href.startsWith('/') ? `${this.baseUrl}${href}` : `${this.baseUrl}/${href}`;
        if (!this.visitedUrls.has(fullUrl) && !this.allLinks.has(fullUrl)) {
          this.allLinks.add(fullUrl);
        }
      }
    });
    
    if (issues.length > 0) {
      this.auditResults.issues.push({
        url,
        issues
      });
    }
  }

  generateReport() {
    console.log('\n' + '='.repeat(60));
    console.log('📊 WEBSITE AUDIT REPORT');
    console.log('='.repeat(60));
    
    console.log(`\n📈 SUMMARY:`);
    console.log(`Total Pages Audited: ${this.auditResults.totalPages}`);
    console.log(`Working Pages: ${this.auditResults.workingPages}`);
    console.log(`Broken Links: ${this.auditResults.brokenLinks}`);
    console.log(`Pages with Issues: ${this.auditResults.issues.length}`);
    
    if (this.brokenLinks.length > 0) {
      console.log(`\n❌ BROKEN LINKS:`);
      this.brokenLinks.forEach(link => {
        console.log(`  - ${link.url} (${link.status}) - ${link.error}`);
      });
    }
    
    if (this.auditResults.issues.length > 0) {
      console.log(`\n⚠️  PAGES WITH ISSUES:`);
      this.auditResults.issues.forEach(page => {
        console.log(`  ${page.url}:`);
        page.issues.forEach(issue => {
          console.log(`    - ${issue}`);
        });
      });
    }
    
    console.log(`\n✅ WORKING PAGES:`);
    this.validPages.forEach(page => {
      console.log(`  - ${page}`);
    });
    
    // Save detailed report
    const report = {
      timestamp: new Date().toISOString(),
      summary: this.auditResults,
      brokenLinks: this.brokenLinks,
      validPages: this.validPages,
      issues: this.auditResults.issues,
      allLinks: Array.from(this.allLinks)
    };
    
    fs.writeFileSync('website-audit-report.json', JSON.stringify(report, null, 2));
    console.log(`\n💾 Detailed report saved to: website-audit-report.json`);
    
    return report;
  }
}

// Run the audit
const auditor = new WebsiteAuditor();
auditor.auditWebsite().catch(console.error);
import https from 'https';
import http from 'http';
import { JSDOM } from 'jsdom';
import fs from 'fs';

class WebsiteAuditor {
  constructor(baseUrl) {
    this.baseUrl = baseUrl;
    this.visitedUrls = new Set();
    this.brokenLinks = [];
    this.workingLinks = [];
    this.missingPages = [];
    this.allLinks = new Set();
  }

  async fetchPage(url) {
    return new Promise((resolve, reject) => {
      const protocol = url.startsWith('https') ? https : http;
      
      const request = protocol.get(url, {
        timeout: 10000,
        headers: {
          'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
        }
      }, (response) => {
        let data = '';
        
        response.on('data', (chunk) => {
          data += chunk;
        });
        
        response.on('end', () => {
          resolve({
            statusCode: response.statusCode,
            headers: response.headers,
            body: data
          });
        });
      });
      
      request.on('error', (error) => {
        reject(error);
      });
      
      request.on('timeout', () => {
        request.destroy();
        reject(new Error('Request timeout'));
      });
    });
  }

  extractLinks(html, baseUrl) {
    const dom = new JSDOM(html);
    const document = dom.window.document;
    const links = [];
    
    // Extract all href attributes
    const anchorTags = document.querySelectorAll('a[href]');
    anchorTags.forEach(anchor => {
      const href = anchor.getAttribute('href');
      if (href) {
        const absoluteUrl = this.resolveUrl(baseUrl, href);
        links.push({
          text: anchor.textContent.trim(),
          href: href,
          absoluteUrl: absoluteUrl,
          element: anchor.outerHTML
        });
      }
    });
    
    return links;
  }

  resolveUrl(baseUrl, href) {
    if (href.startsWith('http://') || href.startsWith('https://')) {
      return href;
    }
    
    if (href.startsWith('//')) {
      return 'https:' + href;
    }
    
    if (href.startsWith('/')) {
      const url = new URL(baseUrl);
      return url.origin + href;
    }
    
    if (href.startsWith('#')) {
      return baseUrl + href;
    }
    
    if (href.startsWith('mailto:') || href.startsWith('tel:')) {
      return href;
    }
    
    // Relative URL
    const base = new URL(baseUrl);
    return new URL(href, base).href;
  }

  async checkLink(link) {
    const { absoluteUrl, text, href } = link;
    
    // Skip external links, mailto, tel, and anchors for now
    if (absoluteUrl.startsWith('mailto:') || 
        absoluteUrl.startsWith('tel:') || 
        absoluteUrl.startsWith('#') ||
        !absoluteUrl.includes('ziontechgroup.com')) {
      return { status: 'skipped', reason: 'External or special link' };
    }
    
    try {
      const response = await this.fetchPage(absoluteUrl);
      
      if (response.statusCode >= 200 && response.statusCode < 400) {
        this.workingLinks.push({
          url: absoluteUrl,
          text: text,
          statusCode: response.statusCode
        });
        return { status: 'working', statusCode: response.statusCode };
      } else {
        this.brokenLinks.push({
          url: absoluteUrl,
          text: text,
          statusCode: response.statusCode,
          originalHref: href
        });
        return { status: 'broken', statusCode: response.statusCode };
      }
    } catch (error) {
      this.brokenLinks.push({
        url: absoluteUrl,
        text: text,
        error: error.message,
        originalHref: href
      });
      return { status: 'error', error: error.message };
    }
  }

  async auditWebsite() {
    console.log('🔍 Starting comprehensive website audit...');
    console.log(`📡 Base URL: ${this.baseUrl}`);
    
    try {
      // Start with the homepage
      const response = await this.fetchPage(this.baseUrl);
      
      if (response.statusCode !== 200) {
        throw new Error(`Homepage returned status ${response.statusCode}`);
      }
      
      console.log('✅ Homepage is accessible');
      
      // Extract links from homepage
      const links = this.extractLinks(response.body, this.baseUrl);
      console.log(`🔗 Found ${links.length} links on homepage`);
      
      // Check all links
      for (const link of links) {
        if (!this.visitedUrls.has(link.absoluteUrl)) {
          this.visitedUrls.add(link.absoluteUrl);
          this.allLinks.add(link.absoluteUrl);
          
          console.log(`🔍 Checking: ${link.absoluteUrl}`);
          const result = await this.checkLink(link);
          console.log(`   ${result.status === 'working' ? '✅' : '❌'} ${result.status} ${result.statusCode || result.error || ''}`);
          
          // If it's a working internal page, crawl it for more links
          if (result.status === 'working' && link.absoluteUrl.includes('ziontechgroup.com')) {
            try {
              const pageResponse = await this.fetchPage(link.absoluteUrl);
              const pageLinks = this.extractLinks(pageResponse.body, link.absoluteUrl);
              
              for (const pageLink of pageLinks) {
                if (!this.visitedUrls.has(pageLink.absoluteUrl) && 
                    pageLink.absoluteUrl.includes('ziontechgroup.com')) {
                  this.visitedUrls.add(pageLink.absoluteUrl);
                  this.allLinks.add(pageLink.absoluteUrl);
                  
                  console.log(`🔍 Checking sub-page: ${pageLink.absoluteUrl}`);
                  const subResult = await this.checkLink(pageLink);
                  console.log(`   ${subResult.status === 'working' ? '✅' : '❌'} ${subResult.status} ${subResult.statusCode || subResult.error || ''}`);
                }
              }
            } catch (error) {
              console.log(`   ⚠️  Could not crawl sub-page: ${error.message}`);
            }
          }
        }
      }
      
      // Generate report
      this.generateReport();
      
    } catch (error) {
      console.error('❌ Audit failed:', error.message);
    }
  }

  generateReport() {
    console.log('\n📊 AUDIT REPORT');
    console.log('================');
    
    console.log(`\n✅ Working Links: ${this.workingLinks.length}`);
    this.workingLinks.forEach(link => {
      console.log(`   ${link.statusCode} - ${link.url}`);
    });
    
    console.log(`\n❌ Broken Links: ${this.brokenLinks.length}`);
    this.brokenLinks.forEach(link => {
      console.log(`   ${link.statusCode || 'ERROR'} - ${link.url}`);
      if (link.error) console.log(`      Error: ${link.error}`);
    });
    
    // Save detailed report
    const report = {
      timestamp: new Date().toISOString(),
      baseUrl: this.baseUrl,
      totalLinks: this.allLinks.size,
      workingLinks: this.workingLinks.length,
      brokenLinks: this.brokenLinks.length,
      workingLinksList: this.workingLinks,
      brokenLinksList: this.brokenLinks
    };
    
    fs.writeFileSync('website-audit-report.json', JSON.stringify(report, null, 2));
    console.log('\n💾 Detailed report saved to website-audit-report.json');
  }
}

// Run the audit
const auditor = new WebsiteAuditor('https://ziontechgroup.com');
auditor.auditWebsite().catch(console.error);
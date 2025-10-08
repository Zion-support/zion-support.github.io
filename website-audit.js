import https from 'https';
import http from 'http';
import { URL } from 'url';
import fs from 'fs';

class WebsiteAuditor {
  constructor(baseUrl) {
    this.baseUrl = baseUrl;
    this.visitedUrls = new Set();
    this.brokenLinks = [];
    this.validLinks = [];
    this.missingPages = [];
    this.allLinks = new Set();
    this.maxDepth = 3;
    this.currentDepth = 0;
  }

  async checkUrl(url) {
    return new Promise((resolve) => {
      const urlObj = new URL(url);
      const options = {
        hostname: urlObj.hostname,
        port: urlObj.port || (urlObj.protocol === 'https:' ? 443 : 80),
        path: urlObj.pathname + urlObj.search,
        method: 'HEAD',
        timeout: 10000,
        headers: {
          'User-Agent': 'Mozilla/5.0 (compatible; WebsiteAuditor/1.0)'
        }
      };

      const client = urlObj.protocol === 'https:' ? https : http;
      
      const req = client.request(options, (res) => {
        resolve({
          url,
          status: res.statusCode,
          statusText: res.statusMessage,
          valid: res.statusCode >= 200 && res.statusCode < 400
        });
      });

      req.on('error', (error) => {
        resolve({
          url,
          status: 0,
          statusText: error.message,
          valid: false,
          error: error.message
        });
      });

      req.on('timeout', () => {
        req.destroy();
        resolve({
          url,
          status: 0,
          statusText: 'Timeout',
          valid: false,
          error: 'Request timeout'
        });
      });

      req.setTimeout(10000);
      req.end();
    });
  }

  async fetchPage(url) {
    return new Promise((resolve) => {
      const urlObj = new URL(url);
      const options = {
        hostname: urlObj.hostname,
        port: urlObj.port || (urlObj.protocol === 'https:' ? 443 : 80),
        path: urlObj.pathname + urlObj.search,
        method: 'GET',
        timeout: 15000,
        headers: {
          'User-Agent': 'Mozilla/5.0 (compatible; WebsiteAuditor/1.0)'
        }
      };

      const client = urlObj.protocol === 'https:' ? https : http;
      
      const req = client.request(options, (res) => {
        let data = '';
        res.on('data', chunk => data += chunk);
        res.on('end', () => {
          resolve({
            url,
            status: res.statusCode,
            content: data,
            valid: res.statusCode >= 200 && res.statusCode < 400
          });
        });
      });

      req.on('error', (error) => {
        resolve({
          url,
          status: 0,
          content: '',
          valid: false,
          error: error.message
        });
      });

      req.on('timeout', () => {
        req.destroy();
        resolve({
          url,
          status: 0,
          content: '',
          valid: false,
          error: 'Request timeout'
        });
      });

      req.setTimeout(15000);
      req.end();
    });
  }

  extractLinks(html, baseUrl) {
    const links = new Set();
    const linkRegex = /<a[^>]+href=["']([^"']+)["'][^>]*>/gi;
    const routeRegex = /<Route[^>]+path=["']([^"']+)["'][^>]*>/gi;
    const linkRegex2 = /href=["']([^"']+)["']/gi;
    
    let match;
    
    // Extract href attributes
    while ((match = linkRegex.exec(html)) !== null) {
      const href = match[1];
      if (href && !href.startsWith('#') && !href.startsWith('mailto:') && !href.startsWith('tel:')) {
        try {
          const absoluteUrl = new URL(href, baseUrl).href;
          links.add(absoluteUrl);
        } catch (e) {
          // Invalid URL, skip
        }
      }
    }
    
    // Extract Route paths
    while ((match = routeRegex.exec(html)) !== null) {
      const path = match[1];
      if (path && path !== '*') {
        try {
          const absoluteUrl = new URL(path, baseUrl).href;
          links.add(absoluteUrl);
        } catch (e) {
          // Invalid URL, skip
        }
      }
    }
    
    // Extract more href patterns
    while ((match = linkRegex2.exec(html)) !== null) {
      const href = match[1];
      if (href && !href.startsWith('#') && !href.startsWith('mailto:') && !href.startsWith('tel:')) {
        try {
          const absoluteUrl = new URL(href, baseUrl).href;
          links.add(absoluteUrl);
        } catch (e) {
          // Invalid URL, skip
        }
      }
    }
    
    return Array.from(links);
  }

  async auditPage(url, depth = 0) {
    if (depth > this.maxDepth || this.visitedUrls.has(url)) {
      return;
    }

    this.visitedUrls.add(url);
    console.log(`🔍 Auditing: ${url} (depth: ${depth})`);

    const pageResult = await this.fetchPage(url);
    
    if (!pageResult.valid) {
      this.brokenLinks.push({
        url,
        status: pageResult.status,
        statusText: pageResult.statusText,
        error: pageResult.error,
        depth
      });
      return;
    }

    this.validLinks.push({
      url,
      status: pageResult.status,
      depth
    });

    // Extract links from the page
    const links = this.extractLinks(pageResult.content, url);
    
    for (const link of links) {
      this.allLinks.add(link);
      
      // Only follow internal links
      if (link.startsWith(this.baseUrl)) {
        await this.auditPage(link, depth + 1);
      } else {
        // Check external links
        const linkResult = await this.checkUrl(link);
        if (!linkResult.valid) {
          this.brokenLinks.push({
            url: link,
            status: linkResult.status,
            statusText: linkResult.statusText,
            error: linkResult.error,
            depth: depth + 1,
            external: true
          });
        } else {
          this.validLinks.push({
            url: link,
            status: linkResult.status,
            depth: depth + 1,
            external: true
          });
        }
      }
    }
  }

  async generateReport() {
    const report = {
      timestamp: new Date().toISOString(),
      baseUrl: this.baseUrl,
      summary: {
        totalPages: this.visitedUrls.size,
        validLinks: this.validLinks.length,
        brokenLinks: this.brokenLinks.length,
        allLinksFound: this.allLinks.size
      },
      brokenLinks: this.brokenLinks,
      validLinks: this.validLinks,
      missingPages: this.missingPages,
      recommendations: []
    };

    // Generate recommendations
    if (this.brokenLinks.length > 0) {
      report.recommendations.push('Fix broken links found in the audit');
    }
    
    if (this.visitedUrls.size < 10) {
      report.recommendations.push('Consider adding more content pages');
    }

    return report;
  }

  async run() {
    console.log(`🚀 Starting website audit for ${this.baseUrl}`);
    console.log(`📊 Maximum depth: ${this.maxDepth}`);
    
    await this.auditPage(this.baseUrl);
    
    const report = await this.generateReport();
    
    // Save report
    fs.writeFileSync('website-audit-report.json', JSON.stringify(report, null, 2));
    
    console.log('\n📋 AUDIT SUMMARY:');
    console.log(`✅ Valid links: ${report.summary.validLinks}`);
    console.log(`❌ Broken links: ${report.summary.brokenLinks}`);
    console.log(`📄 Pages visited: ${report.summary.totalPages}`);
    console.log(`🔗 Total links found: ${report.summary.allLinksFound}`);
    
    if (report.brokenLinks.length > 0) {
      console.log('\n❌ BROKEN LINKS:');
      report.brokenLinks.forEach(link => {
        console.log(`  - ${link.url} (${link.status} ${link.statusText})`);
        if (link.error) {
          console.log(`    Error: ${link.error}`);
        }
      });
    }
    
    console.log('\n💡 RECOMMENDATIONS:');
    report.recommendations.forEach(rec => {
      console.log(`  - ${rec}`);
    });
    
    return report;
  }
}

// Run the audit
const auditor = new WebsiteAuditor('https://ziontechgroup.com');
auditor.run().catch(console.error);
#!/usr/bin/env node

import https from 'https';
import http from 'http';
import { URL } from 'url';
import fs from 'fs';

class WebsiteAuditor {
  constructor(baseUrl) {
    this.baseUrl = baseUrl;
    this.visitedUrls = new Set();
    this.brokenLinks = [];
    this.workingLinks = [];
    this.missingPages = [];
    this.allLinks = new Set();
    this.maxDepth = 3;
    this.currentDepth = 0;
  }

  async fetchPage(url) {
    return new Promise((resolve, reject) => {
      const urlObj = new URL(url);
      const options = {
        hostname: urlObj.hostname,
        port: urlObj.port || (urlObj.protocol === 'https:' ? 443 : 80),
        path: urlObj.pathname + urlObj.search,
        method: 'GET',
        headers: {
          'User-Agent': 'Mozilla/5.0 (compatible; WebsiteAuditor/1.0)',
          'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8',
          'Accept-Language': 'en-US,en;q=0.5',
          'Accept-Encoding': 'gzip, deflate',
          'Connection': 'keep-alive',
        }
      };

      const protocol = urlObj.protocol === 'https:' ? https : http;
      
      const req = protocol.request(options, (res) => {
        let data = '';
        
        res.on('data', (chunk) => {
          data += chunk;
        });
        
        res.on('end', () => {
          resolve({
            url,
            statusCode: res.statusCode,
            headers: res.headers,
            content: data,
            success: res.statusCode >= 200 && res.statusCode < 400
          });
        });
      });

      req.on('error', (error) => {
        reject({ url, error: error.message, success: false });
      });

      req.setTimeout(10000, () => {
        req.destroy();
        reject({ url, error: 'Request timeout', success: false });
      });

      req.end();
    });
  }

  extractLinks(html, baseUrl) {
    const links = [];
    
    // Extract href attributes
    const hrefRegex = /href\s*=\s*["']([^"']+)["']/gi;
    let match;
    while ((match = hrefRegex.exec(html)) !== null) {
      const link = match[1];
      const absoluteUrl = this.resolveUrl(link, baseUrl);
      if (absoluteUrl && this.isInternalLink(absoluteUrl)) {
        links.push(absoluteUrl);
      }
    }

    // Extract src attributes
    const srcRegex = /src\s*=\s*["']([^"']+)["']/gi;
    while ((match = srcRegex.exec(html)) !== null) {
      const link = match[1];
      const absoluteUrl = this.resolveUrl(link, baseUrl);
      if (absoluteUrl && this.isInternalLink(absoluteUrl)) {
        links.push(absoluteUrl);
      }
    }

    return [...new Set(links)]; // Remove duplicates
  }

  resolveUrl(link, baseUrl) {
    try {
      if (link.startsWith('http://') || link.startsWith('https://')) {
        return link;
      }
      
      if (link.startsWith('//')) {
        return 'https:' + link;
      }
      
      if (link.startsWith('/')) {
        const base = new URL(baseUrl);
        return `${base.protocol}//${base.host}${link}`;
      }
      
      if (link.startsWith('#')) {
        return null; // Skip anchor links
      }
      
      const base = new URL(baseUrl);
      const path = base.pathname.endsWith('/') ? base.pathname : base.pathname + '/';
      return `${base.protocol}//${base.host}${path}${link}`;
    } catch (error) {
      return null;
    }
  }

  isInternalLink(url) {
    try {
      const urlObj = new URL(url);
      const baseObj = new URL(this.baseUrl);
      return urlObj.hostname === baseObj.hostname;
    } catch (error) {
      return false;
    }
  }

  async checkLink(url) {
    if (this.visitedUrls.has(url)) {
      return;
    }

    this.visitedUrls.add(url);
    console.log(`Checking: ${url}`);

    try {
      const result = await this.fetchPage(url);
      
      if (result.success) {
        this.workingLinks.push({
          url,
          statusCode: result.statusCode,
          title: this.extractTitle(result.content)
        });
        
        // Extract links from this page
        const links = this.extractLinks(result.content, url);
        for (const link of links) {
          this.allLinks.add(link);
        }
        
        // Recursively check links if we haven't reached max depth
        if (this.currentDepth < this.maxDepth) {
          this.currentDepth++;
          for (const link of links) {
            if (!this.visitedUrls.has(link)) {
              await this.checkLink(link);
            }
          }
          this.currentDepth--;
        }
      } else {
        this.brokenLinks.push({
          url,
          statusCode: result.statusCode,
          error: result.error || 'Unknown error'
        });
      }
    } catch (error) {
      this.brokenLinks.push({
        url,
        error: error.error || error.message || 'Unknown error',
        statusCode: error.statusCode || 0
      });
    }
  }

  extractTitle(html) {
    const titleMatch = html.match(/<title[^>]*>([^<]+)<\/title>/i);
    return titleMatch ? titleMatch[1].trim() : 'No title found';
  }

  async audit() {
    console.log(`Starting website audit for: ${this.baseUrl}`);
    console.log(`Max depth: ${this.maxDepth}`);
    console.log('='.repeat(50));
    
    await this.checkLink(this.baseUrl);
    
    // Check all discovered links
    for (const link of this.allLinks) {
      if (!this.visitedUrls.has(link)) {
        await this.checkLink(link);
      }
    }
    
    this.generateReport();
  }

  generateReport() {
    console.log('\n' + '='.repeat(50));
    console.log('WEBSITE AUDIT REPORT');
    console.log('='.repeat(50));
    
    console.log(`\nTotal URLs checked: ${this.visitedUrls.size}`);
    console.log(`Working links: ${this.workingLinks.length}`);
    console.log(`Broken links: ${this.brokenLinks.length}`);
    
    if (this.brokenLinks.length > 0) {
      console.log('\nBROKEN LINKS:');
      console.log('-'.repeat(30));
      this.brokenLinks.forEach(link => {
        console.log(`❌ ${link.url}`);
        console.log(`   Status: ${link.statusCode || 'N/A'}`);
        console.log(`   Error: ${link.error}`);
        console.log('');
      });
    }
    
    if (this.workingLinks.length > 0) {
      console.log('\nWORKING LINKS:');
      console.log('-'.repeat(30));
      this.workingLinks.forEach(link => {
        console.log(`✅ ${link.url}`);
        console.log(`   Status: ${link.statusCode}`);
        console.log(`   Title: ${link.title}`);
        console.log('');
      });
    }
    
    // Save detailed report
    const report = {
      timestamp: new Date().toISOString(),
      baseUrl: this.baseUrl,
      totalUrls: this.visitedUrls.size,
      workingLinks: this.workingLinks,
      brokenLinks: this.brokenLinks,
      allLinks: Array.from(this.allLinks)
    };
    
    fs.writeFileSync('website-audit-report.json', JSON.stringify(report, null, 2));
    console.log('\nDetailed report saved to: website-audit-report.json');
  }
}

// Run the audit
const auditor = new WebsiteAuditor('https://ziontechgroup.com');
auditor.audit().catch(console.error);
#!/usr/bin/env node

import https from 'https';
import http from 'http';
import { JSDOM } from 'jsdom';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

class WebsiteLinkAnalyzer {
  constructor(baseUrl = 'https://ziontechgroup.com') {
    this.baseUrl = baseUrl;
    this.visitedUrls = new Set();
    this.brokenLinks = [];
    this.workingLinks = [];
    this.missingPages = [];
    this.externalLinks = [];
    this.maxDepth = 3;
    this.currentDepth = 0;
    this.results = {
      totalLinks: 0,
      workingLinks: 0,
      brokenLinks: 0,
      missingPages: 0,
      externalLinks: 0,
      analysisDate: new Date().toISOString(),
      baseUrl: this.baseUrl
    };
  }

  async checkUrl(url) {
    return new Promise((resolve) => {
      const protocol = url.startsWith('https:') ? https : http;
      const request = protocol.get(url, { timeout: 10000 }, (response) => {
        resolve({
          url,
          status: response.statusCode,
          working: response.statusCode >= 200 && response.statusCode < 400,
          redirect: response.statusCode >= 300 && response.statusCode < 400
        });
      });

      request.on('error', (error) => {
        resolve({
          url,
          status: 'ERROR',
          working: false,
          error: error.message
        });
      });

      request.on('timeout', () => {
        request.destroy();
        resolve({
          url,
          status: 'TIMEOUT',
          working: false,
          error: 'Request timeout'
        });
      });
    });
  }

  async fetchPage(url) {
    try {
      const response = await this.checkUrl(url);
      if (!response.working) {
        return null;
      }

      return new Promise((resolve) => {
        const protocol = url.startsWith('https:') ? https : http;
        const request = protocol.get(url, (res) => {
          let data = '';
          res.on('data', chunk => data += chunk);
          res.on('end', () => {
            try {
              const dom = new JSDOM(data);
              resolve({
                url,
                content: data,
                dom: dom.window.document,
                status: res.statusCode
              });
            } catch (error) {
              resolve(null);
            }
          });
        });

        request.on('error', () => resolve(null));
        request.setTimeout(10000, () => {
          request.destroy();
          resolve(null);
        });
      });
    } catch (error) {
      return null;
    }
  }

  extractLinks(document, currentUrl) {
    const links = [];
    const baseUrl = new URL(currentUrl);

    // Extract all links
    const linkElements = document.querySelectorAll('a[href]');
    linkElements.forEach(link => {
      const href = link.getAttribute('href');
      if (!href) return;

      try {
        const absoluteUrl = new URL(href, currentUrl).href;
        const isExternal = !absoluteUrl.startsWith(this.baseUrl);
        
        links.push({
          href,
          absoluteUrl,
          text: link.textContent.trim(),
          isExternal,
          element: link.outerHTML
        });
      } catch (error) {
        // Invalid URL
        links.push({
          href,
          absoluteUrl: null,
          text: link.textContent.trim(),
          isExternal: false,
          error: 'Invalid URL',
          element: link.outerHTML
        });
      }
    });

    return links;
  }

  async analyzePage(url) {
    if (this.visitedUrls.has(url) || this.currentDepth >= this.maxDepth) {
      return;
    }

    this.visitedUrls.add(url);
    console.log(`Analyzing: ${url} (depth: ${this.currentDepth})`);

    const page = await this.fetchPage(url);
    if (!page) {
      this.brokenLinks.push({
        url,
        reason: 'Failed to fetch page',
        depth: this.currentDepth
      });
      return;
    }

    this.workingLinks.push({
      url,
      status: page.status,
      depth: this.currentDepth
    });

    const links = this.extractLinks(page.dom, url);
    console.log(`Found ${links.length} links on ${url}`);

    for (const link of links) {
      this.results.totalLinks++;

      if (link.isExternal) {
        this.externalLinks.push({
          url: link.absoluteUrl,
          text: link.text,
          sourcePage: url
        });
        this.results.externalLinks++;
        continue;
      }

      if (!link.absoluteUrl) {
        this.brokenLinks.push({
          url: link.href,
          reason: link.error || 'Invalid URL',
          sourcePage: url,
          depth: this.currentDepth
        });
        this.results.brokenLinks++;
        continue;
      }

      // Check if it's a local page that should exist
      if (link.absoluteUrl.startsWith(this.baseUrl)) {
        const linkResult = await this.checkUrl(link.absoluteUrl);
        
        if (linkResult.working) {
          this.results.workingLinks++;
          this.workingLinks.push({
            url: link.absoluteUrl,
            status: linkResult.status,
            sourcePage: url,
            depth: this.currentDepth
          });

          // Recursively analyze if it's a new page
          if (!this.visitedUrls.has(link.absoluteUrl)) {
            this.currentDepth++;
            await this.analyzePage(link.absoluteUrl);
            this.currentDepth--;
          }
        } else {
          this.results.brokenLinks++;
          this.brokenLinks.push({
            url: link.absoluteUrl,
            reason: `HTTP ${linkResult.status}`,
            sourcePage: url,
            depth: this.currentDepth,
            error: linkResult.error
          });
        }
      }
    }
  }

  async generateReport() {
    const report = {
      ...this.results,
      brokenLinks: this.brokenLinks,
      workingLinks: this.workingLinks,
      externalLinks: this.externalLinks,
      visitedPages: Array.from(this.visitedUrls),
      recommendations: this.generateRecommendations()
    };

    // Save detailed report
    fs.writeFileSync(
      path.join(__dirname, 'website-analysis-report.json'),
      JSON.stringify(report, null, 2)
    );

    // Generate summary
    console.log('\n=== WEBSITE ANALYSIS SUMMARY ===');
    console.log(`Base URL: ${this.baseUrl}`);
    console.log(`Total Links Found: ${this.results.totalLinks}`);
    console.log(`Working Links: ${this.results.workingLinks}`);
    console.log(`Broken Links: ${this.results.brokenLinks}`);
    console.log(`External Links: ${this.results.externalLinks}`);
    console.log(`Pages Visited: ${this.visitedUrls.size}`);
    
    if (this.brokenLinks.length > 0) {
      console.log('\n=== BROKEN LINKS ===');
      this.brokenLinks.forEach(link => {
        console.log(`❌ ${link.url} - ${link.reason} (from: ${link.sourcePage})`);
      });
    }

    return report;
  }

  generateRecommendations() {
    const recommendations = [];

    if (this.brokenLinks.length > 0) {
      recommendations.push({
        priority: 'HIGH',
        category: 'Broken Links',
        description: `Found ${this.brokenLinks.length} broken links that need immediate attention`,
        action: 'Fix or remove broken links to improve user experience and SEO'
      });
    }

    const commonBrokenPatterns = this.analyzeBrokenLinkPatterns();
    if (commonBrokenPatterns.length > 0) {
      recommendations.push({
        priority: 'MEDIUM',
        category: 'Link Patterns',
        description: 'Common patterns in broken links detected',
        patterns: commonBrokenPatterns,
        action: 'Review and fix common link patterns'
      });
    }

    return recommendations;
  }

  analyzeBrokenLinkPatterns() {
    const patterns = {};
    
    this.brokenLinks.forEach(link => {
      const path = new URL(link.url).pathname;
      const segments = path.split('/').filter(s => s);
      
      if (segments.length > 0) {
        const pattern = segments[0];
        patterns[pattern] = (patterns[pattern] || 0) + 1;
      }
    });

    return Object.entries(patterns)
      .filter(([_, count]) => count > 1)
      .map(([pattern, count]) => ({ pattern, count }));
  }

  async run() {
    console.log(`Starting analysis of ${this.baseUrl}...`);
    console.log(`Max depth: ${this.maxDepth}`);
    
    try {
      await this.analyzePage(this.baseUrl);
      const report = await this.generateReport();
      
      console.log('\n=== ANALYSIS COMPLETE ===');
      console.log('Detailed report saved to: website-analysis-report.json');
      
      return report;
    } catch (error) {
      console.error('Analysis failed:', error);
      throw error;
    }
  }
}

// Run the analyzer
const analyzer = new WebsiteLinkAnalyzer('https://ziontechgroup.com');
analyzer.run().catch(console.error);

export default WebsiteLinkAnalyzer;
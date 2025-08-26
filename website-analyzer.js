import axios from 'axios';
import * as cheerio from 'cheerio';
import fs from 'fs';
import path from 'path';

class WebsiteAnalyzer {
  constructor(baseUrl) {
    this.baseUrl = baseUrl;
    this.visited = new Set();
    this.brokenLinks = [];
    this.workingLinks = [];
    this.missingPages = [];
    this.externalLinks = [];
    this.images = [];
    this.scripts = [];
    this.stylesheets = [];
    this.maxDepth = 5;
    this.currentDepth = 0;
    this.sitemapUrls = [];
  }

  async analyze() {
    console.log(`🔍 Starting comprehensive analysis of ${this.baseUrl}`);
    console.log('=' .repeat(60));
    
    try {
      await this.loadSitemap();
      if (this.sitemapUrls.length > 0) {
        console.log(`🗺️  Found ${this.sitemapUrls.length} URLs in sitemap.xml`);
        for (const url of this.sitemapUrls) {
          await this.crawlPage(url, 0);
        }
      } else {
        console.log('⚠️  No sitemap URLs found; falling back to base URL crawl');
        await this.crawlPage(this.baseUrl, 0);
      }
      this.generateReport();
    } catch (error) {
      console.error('❌ Analysis failed:', error.message);
    }
  }

  async loadSitemap() {
    const sitemapUrl = new URL('/sitemap.xml', this.baseUrl).href;
    try {
      const response = await axios.get(sitemapUrl, {
        timeout: 10000,
        headers: { 'User-Agent': 'Mozilla/5.0 (compatible; ZionTechGroup-Bot/1.0)' }
      });
      if (response.status !== 200 || typeof response.data !== 'string') {
        return;
      }
      const locMatches = response.data.match(/<loc>(.*?)<\/loc>/g) || [];
      const urls = locMatches
        .map(tag => tag.replace('<loc>', '').replace('</loc>', '').trim())
        .filter(u => u.startsWith('http'));
      // Deduplicate and only include internal URLs
      const base = this.baseUrl.replace(/\/$/, '');
      this.sitemapUrls = Array.from(new Set(urls)).filter(u => u.startsWith(base));
    } catch (err) {
      console.warn(`⚠️  Failed to load sitemap.xml: ${err.message}`);
      this.sitemapUrls = [];
    }
  }

  async crawlPage(url, depth) {
    if (depth > this.maxDepth || this.visited.has(url)) {
      return;
    }

    this.visited.add(url);
    console.log(`📄 Crawling: ${url} (depth: ${depth})`);

    try {
      const response = await axios.get(url, {
        timeout: 10000,
        headers: {
          'User-Agent': 'Mozilla/5.0 (compatible; ZionTechGroup-Bot/1.0)'
        }
      });

      if (response.status === 200) {
        this.workingLinks.push(url);
        const $ = cheerio.load(response.data);
        
        // Extract all links
        const links = $('a[href]');
        links.each((i, element) => {
          const href = $(element).attr('href');
          if (href) {
            this.processLink(href, url, depth + 1);
          }
        });

        // Extract images
        const images = $('img[src]');
        images.each((i, element) => {
          const src = $(element).attr('src');
          if (src) {
            this.images.push({
              url: this.resolveUrl(src, url),
              page: url
            });
          }
        });

        // Extract scripts
        const scripts = $('script[src]');
        scripts.each((i, element) => {
          const src = $(element).attr('src');
          if (src) {
            this.scripts.push({
              url: this.resolveUrl(src, url),
              page: url
            });
          }
        });

        // Extract stylesheets
        const stylesheets = $('link[rel="stylesheet"], link[href*=".css"]');
        stylesheets.each((i, element) => {
          const href = $(element).attr('href');
          if (href) {
            this.stylesheets.push({
              url: this.resolveUrl(href, url),
              page: url
            });
          }
        });

        // Check for common missing content indicators
        this.checkMissingContent($, url);

      } else {
        this.brokenLinks.push({
          url,
          status: response.status,
          error: `HTTP ${response.status}`
        });
      }
    } catch (error) {
      this.brokenLinks.push({
        url,
        status: 'ERROR',
        error: error.message
      });
    }
  }

  processLink(href, baseUrl, depth) {
    const fullUrl = this.resolveUrl(href, baseUrl);
    
    if (fullUrl.startsWith(this.baseUrl)) {
      // Internal link
      if (!this.visited.has(fullUrl)) {
        setTimeout(() => this.crawlPage(fullUrl, depth), 100);
      }
    } else if (fullUrl.startsWith('http')) {
      // External link
      this.externalLinks.push({
        url: fullUrl,
        source: baseUrl
      });
    }
  }

  resolveUrl(href, baseUrl) {
    if (href.startsWith('http')) {
      return href;
    }
    
    try {
      return new URL(href, baseUrl).href;
    } catch {
      return href;
    }
  }

  checkMissingContent($, url) {
    const content = $.text();
    
    // Check for common missing content indicators
    if (content.includes('404') || content.includes('Page Not Found')) {
      this.missingPages.push({
        url,
        type: '404 Error'
      });
    }
    
    if (content.includes('Under Construction') || content.includes('Coming Soon')) {
      this.missingPages.push({
        url,
        type: 'Under Construction'
      });
    }
    
    if (content.length < 100) {
      this.missingPages.push({
        url,
        type: 'Minimal Content'
      });
    }
  }

  async checkExternalLinks() {
    console.log('\n🔗 Checking external links...');
    
    for (const link of this.externalLinks.slice(0, 20)) { // Limit to 20 for performance
      try {
        const response = await axios.head(link.url, { timeout: 5000 });
        if (response.status >= 400) {
          this.brokenLinks.push({
            url: link.url,
            status: response.status,
            error: `External link broken`,
            source: link.source
          });
        }
      } catch (error) {
        this.brokenLinks.push({
          url: link.url,
          status: 'ERROR',
          error: `External link error: ${error.message}`,
          source: link.source
        });
      }
    }
  }

  generateReport() {
    console.log('\n📊 Generating comprehensive analysis report...');
    
    const report = {
      timestamp: new Date().toISOString(),
      baseUrl: this.baseUrl,
      summary: {
        totalPages: this.workingLinks.length,
        brokenLinks: this.brokenLinks.length,
        missingPages: this.missingPages.length,
        externalLinks: this.externalLinks.length,
        images: this.images.length,
        scripts: this.scripts.length,
        stylesheets: this.stylesheets.length
      },
      workingLinks: this.workingLinks,
      brokenLinks: this.brokenLinks,
      missingPages: this.missingPages,
      externalLinks: this.externalLinks,
      images: this.images,
      scripts: this.scripts,
      stylesheets: this.stylesheets
    };

    // Save detailed report
    fs.writeFileSync('zion-website-analysis.json', JSON.stringify(report, null, 2));
    
    // Generate markdown report
    const markdownReport = this.generateMarkdownReport(report);
    fs.writeFileSync('zion-website-analysis-report.md', markdownReport);
    
    console.log('\n✅ Analysis complete! Reports generated:');
    console.log('   - zion-website-analysis.json (detailed data)');
    console.log('   - zion-website-analysis-report.md (readable report)');
    
    this.printSummary(report);
  }

  generateMarkdownReport(report) {
    return `# Zion Tech Group Website Analysis Report

**Generated:** ${new Date().toLocaleString()}
**Base URL:** ${report.baseUrl}

## 📊 Executive Summary

- **Total Pages Analyzed:** ${report.summary.totalPages}
- **Broken Links Found:** ${report.summary.brokenLinks}
- **Missing/Incomplete Pages:** ${report.summary.missingPages}
- **External Links:** ${report.summary.externalLinks}
- **Images:** ${report.summary.images}
- **Scripts:** ${report.summary.scripts}
- **Stylesheets:** ${report.summary.stylesheets}

## 🚨 Critical Issues

### Broken Links (${report.brokenLinks.length})
${report.brokenLinks.map(link => `- **${link.url}** - ${link.error}${link.source ? ` (from ${link.source})` : ''}`).join('\n')}

### Missing/Incomplete Pages (${report.missingPages.length})
${report.missingPages.map(page => `- **${page.url}** - ${page.type}`).join('\n')}

## ✅ Working Pages (${report.workingLinks.length})
${report.workingLinks.map(url => `- ${url}`).join('\n')}

## 🔗 External Links (${report.externalLinks.length})
${report.externalLinks.map(link => `- ${link.url} (from ${link.source})`).join('\n')}

## 🖼️ Images (${report.images.length})
${report.images.map(img => `- ${img.url}`).join('\n')}

## 📜 Scripts (${report.scripts.length})
${report.scripts.map(script => `- ${script.url}`).join('\n')}

## 🎨 Stylesheets (${report.stylesheets.length})
${report.stylesheets.map(css => `- ${css.url}`).join('\n')}

## 🎯 Recommendations

1. **Fix all broken links immediately**
2. **Complete missing page content**
3. **Verify external link validity**
4. **Optimize image loading**
5. **Review and optimize scripts and stylesheets**

---
*Report generated by Zion Tech Group Website Analyzer*
`;
  }

  printSummary(report) {
    console.log('\n📋 QUICK SUMMARY:');
    console.log('=' .repeat(40));
    console.log(`✅ Working Pages: ${report.summary.totalPages}`);
    console.log(`❌ Broken Links: ${report.summary.brokenLinks}`);
    console.log(`⚠️  Missing Pages: ${report.summary.missingPages}`);
    console.log(`🔗 External Links: ${report.summary.externalLinks}`);
    console.log(`🖼️  Images: ${report.summary.images}`);
    console.log(`📜 Scripts: ${report.summary.scripts}`);
    console.log(`🎨 Stylesheets: ${report.summary.stylesheets}`);
    
    if (report.summary.brokenLinks > 0) {
      console.log('\n🚨 CRITICAL: Broken links detected!');
      console.log('Top broken links:');
      report.brokenLinks.slice(0, 5).forEach(link => {
        console.log(`   - ${link.url}: ${link.error}`);
      });
    }
    
    if (report.summary.missingPages > 0) {
      console.log('\n⚠️  WARNING: Missing/incomplete pages detected!');
      console.log('Pages needing attention:');
      report.missingPages.slice(0, 5).forEach(page => {
        console.log(`   - ${page.url}: ${page.type}`);
      });
    }
  }
}

// Run the analysis
async function main() {
  const analyzer = new WebsiteAnalyzer('https://ziontechgroup.com');
  await analyzer.analyze();
}

// Check if this is the main module
const isMainModule = process.argv[1] === new URL(import.meta.url).pathname;
if (isMainModule) {
  main().catch(console.error);
}

export default WebsiteAnalyzer;
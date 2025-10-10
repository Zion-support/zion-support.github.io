import axios from 'axios';
import * as cheerio from 'cheerio';
import fs from 'fs';
import path from 'path';

class WebsiteAuditor {
  constructor() {
    this.baseUrl = 'https://ziontechgroup.com';
    this.localUrl = 'http://localhost:3000';
    this.visitedUrls = new Set();
    this.brokenLinks = [];
    this.missingPages = [];
==');
    console.log(`Total Links Found: ${this.auditResults.totalLinks}`);
    console.log(`Valid Links: ${this.auditResults.validLinks}`);
    console.log(`Broken Links: ${this.auditResults.brokenLinks}`);
    console.log(`Missing Pages: ${this.auditResults.missingPages}`);

    if (this.brokenLinks.length > 0) {
      console.log('\n❌ BROKEN LINKS:');
      this.brokenLinks.forEach(link => {
        console.log(`  - ${link}`);
      });
    }

    if (this.auditResults.issues.length > 0) {
      console.log('\n⚠️  ISSUES FOUND:');
      this.auditResults.issues.forEach(issue => {
        console.log(`  - ${issue.type.toUpperCase()}: ${issue.url}`);
        if (issue.message) console.log(`    Message: ${issue.message}`);
        if (issue.status) console.log(`    Status: ${issue.status}`);
      });
    }

    // Save detailed report
    const report = {
      timestamp: new Date().toISOString(),
      summary: this.auditResults,
      brokenLinks: this.brokenLinks,
      validLinks: this.validLinks,
      issues: this.auditResults.issues,
      recommendations: this.generateRecommendations()
    };

    fs.writeFileSync('website-audit-report.json', JSON.stringify(report, null, 2));
    console.log('\n💾 Detailed report saved to: website-audit-report.json');

    this.allLinks = new Set();
    this.pageContent = new Map();
    this.auditResults = {
      totalPages: 0,
      brokenLinks: [],
      missingPages: [],
      workingLinks: [],
      contentIssues: [],
      navigationIssues: [],
      seoIssues: []
    };
  }

  async auditWebsite() {
    console.log('🔍 Starting comprehensive website audit...');
    console.log('📊 Analyzing navigation structure...');
    
    // First, let's check the local development server
    try {
      await this.auditLocalSite();
    } catch (error) {
      console.log('⚠️ Local server not available, checking live site...');
      await this.auditLiveSite();
    }
    
    // Generate comprehensive report
    this.generateReport();
  }

  async auditLocalSite() {
    console.log('🏠 Auditing local development site...');
    
    // Get the main page
    const mainPage = await this.fetchPage(this.localUrl);
    if (mainPage) {
      this.analyzePage(mainPage, this.localUrl);
      
      // Extract all navigation links
      const navLinks = this.extractNavigationLinks(mainPage);
      console.log(`📋 Found ${navLinks.length} navigation links`);
      
      // Check each navigation link
      for (const link of navLinks) {
        await this.checkLink(link);
      }
      
      // Check footer links
      const footerLinks = this.extractFooterLinks(mainPage);
      console.log(`🦶 Found ${footerLinks.length} footer links`);
      
      for (const link of footerLinks) {
        await this.checkLink(link);
      }
    }
  }

  async auditLiveSite() {
    console.log('🌐 Auditing live website...');
    
    try {
      const mainPage = await this.fetchPage(this.baseUrl);
      if (mainPage) {
        this.analyzePage(mainPage, this.baseUrl);
        
        // Extract and check all links
        const allLinks = this.extractAllLinks(mainPage);
        console.log(`🔗 Found ${allLinks.length} total links`);
        
        for (const link of allLinks) {
          await this.checkLink(link);
        }
      }
    } catch (error) {
      console.error('❌ Error auditing live site:', error.message);
    }
  }

  async fetchPage(url) {
    try {
      const response = await axios.get(url, {
        timeout: 10000,
        headers: {
          'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
        }
      });
      return {
        url,
        content: response.data,
        status: response.status,
        headers: response.headers
      };
    } catch (error) {
      console.error(`❌ Failed to fetch ${url}:`, error.message);
      return null;
    }
  }

  analyzePage(page, baseUrl) {
    if (!page) return;
    
    this.visitedUrls.add(page.url);
    this.auditResults.totalPages++;
    
    const $ = cheerio.load(page.content);
    
    // Check for common content issues
    this.checkContentIssues($, page.url);
    
    // Check for SEO issues
    this.checkSEOIssues($, page.url);
    
    // Store page content for analysis
    this.pageContent.set(page.url, {
      title: $('title').text(),
      description: $('meta[name="description"]').attr('content'),
      headings: this.extractHeadings($),
      links: this.extractAllLinksFromPage($, baseUrl),
      images: this.extractImages($),
      scripts: this.extractScripts($)
    });
  }

  extractNavigationLinks(page) {
    const $ = cheerio.load(page.content);
    const navLinks = [];
    
    // Extract from main navigation
    $('nav a[href]').each((i, el) => {
      const href = $(el).attr('href');
      if (href && !href.startsWith('#') && !href.startsWith('mailto:') && !href.startsWith('tel:')) {
        navLinks.push(this.normalizeUrl(href, page.url));
      }
    });
    
    // Extract from header navigation
    $('header a[href]').each((i, el) => {
      const href = $(el).attr('href');
      if (href && !href.startsWith('#') && !href.startsWith('mailto:') && !href.startsWith('tel:')) {
        navLinks.push(this.normalizeUrl(href, page.url));
      }
    });
    
    return [...new Set(navLinks)]; // Remove duplicates
  }

  extractFooterLinks(page) {
    const $ = cheerio.load(page.content);
    const footerLinks = [];
    
    $('footer a[href]').each((i, el) => {
      const href = $(el).attr('href');
      if (href && !href.startsWith('#') && !href.startsWith('mailto:') && !href.startsWith('tel:')) {
        footerLinks.push(this.normalizeUrl(href, page.url));
      }
    });
    
    return [...new Set(footerLinks)];
  }

  extractAllLinks(page) {
    const $ = cheerio.load(page.content);
    return this.extractAllLinksFromPage($, page.url);
  }

  extractAllLinksFromPage($, baseUrl) {
    const links = [];
    
    $('a[href]').each((i, el) => {
      const href = $(el).attr('href');
      if (href && !href.startsWith('#') && !href.startsWith('mailto:') && !href.startsWith('tel:')) {
        links.push(this.normalizeUrl(href, baseUrl));
      }
    });
    
    return [...new Set(links)];
  }

  extractHeadings($) {
    const headings = [];
    $('h1, h2, h3, h4, h5, h6').each((i, el) => {
      headings.push({
        level: el.tagName,
        text: $(el).text().trim()
      });
    });
    return headings;
  }

  extractImages($) {
    const images = [];
    $('img').each((i, el) => {
      images.push({
        src: $(el).attr('src'),
        alt: $(el).attr('alt'),
        title: $(el).attr('title')
      });
    });
    return images;
  }

  extractScripts($) {
    const scripts = [];
    $('script[src]').each((i, el) => {
      scripts.push($(el).attr('src'));
    });
    return scripts;
  }

  normalizeUrl(href, baseUrl) {
    if (href.startsWith('http')) {
      return href;
    }
    
    if (href.startsWith('/')) {
      const base = baseUrl.includes('localhost') ? 'http://localhost:3000' : 'https://ziontechgroup.com';
      return base + href;
    }
    
    return new URL(href, baseUrl).href;
  }

  async checkLink(url) {
    if (this.visitedUrls.has(url)) {
      return;
    }
    
    this.allLinks.add(url);
    
    try {
      const response = await axios.head(url, {
        timeout: 5000,
        headers: {
          'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
        }
      });
      
      if (response.status >= 200 && response.status < 400) {
        this.auditResults.workingLinks.push({
          url,
          status: response.status,
          type: 'working'
        });
        
        // If it's a page on our site, analyze it
        if (url.includes('ziontechgroup.com') || url.includes('localhost:3000')) {
          const page = await this.fetchPage(url);
          if (page) {
            this.analyzePage(page, url);
          }
        }
      } else {
        this.auditResults.brokenLinks.push({
          url,
          status: response.status,
          type: 'broken'
        });
      }
    } catch (error) {
      this.auditResults.brokenLinks.push({
        url,
        status: error.response?.status || 'ERROR',
        error: error.message,
        type: 'broken'
      });
    }
  }

  checkContentIssues($, url) {
    const issues = [];
    
    // Check for missing titles
    if (!$('title').text().trim()) {
      issues.push('Missing page title');
    }
    
    // Check for missing meta descriptions
    if (!$('meta[name="description"]').attr('content')) {
      issues.push('Missing meta description');
    }
    
    // Check for empty headings
    $('h1, h2, h3, h4, h5, h6').each((i, el) => {
      if (!$(el).text().trim()) {
        issues.push(`Empty heading: ${el.tagName}`);
      }
    });
    
    // Check for images without alt text
    $('img').each((i, el) => {
      if (!$(el).attr('alt')) {
        issues.push('Image missing alt text');
      }
    });
    
    if (issues.length > 0) {
      this.auditResults.contentIssues.push({
        url,
        issues
      });
    }
  }

  checkSEOIssues($, url) {
    const issues = [];
    
    // Check for multiple H1 tags
    const h1Count = $('h1').length;
    if (h1Count > 1) {
      issues.push(`Multiple H1 tags found (${h1Count})`);
    }
    
    // Check for missing H1
    if (h1Count === 0) {
      issues.push('Missing H1 tag');
    }
    
    // Check for title length
    const title = $('title').text();
    if (title && (title.length < 30 || title.length > 60)) {
      issues.push(`Title length issue: ${title.length} characters (should be 30-60)`);
    }
    
    // Check for meta description length
    const description = $('meta[name="description"]').attr('content');
    if (description && (description.length < 120 || description.length > 160)) {
      issues.push(`Meta description length issue: ${description.length} characters (should be 120-160)`);
    }
    
    if (issues.length > 0) {
      this.auditResults.seoIssues.push({
        url,
        issues
      });
    }
  }

  generateReport() {
    console.log('\n📊 AUDIT RESULTS SUMMARY');
    console.log('='.repeat(50));
    
    console.log(`📄 Total pages analyzed: ${this.auditResults.totalPages}`);
    console.log(`✅ Working links: ${this.auditResults.workingLinks.length}`);
    console.log(`❌ Broken links: ${this.auditResults.brokenLinks.length}`);
    console.log(`📝 Content issues: ${this.auditResults.contentIssues.length}`);
    console.log(`🔍 SEO issues: ${this.auditResults.seoIssues.length}`);
    
    // Detailed broken links report
    if (this.auditResults.brokenLinks.length > 0) {
      console.log('\n❌ BROKEN LINKS:');
      this.auditResults.brokenLinks.forEach(link => {
        console.log(`  - ${link.url} (Status: ${link.status})`);
        if (link.error) {
          console.log(`    Error: ${link.error}`);
        }
      });
    }
    
    // Content issues report
    if (this.auditResults.contentIssues.length > 0) {
      console.log('\n📝 CONTENT ISSUES:');
      this.auditResults.contentIssues.forEach(page => {
        console.log(`  - ${page.url}:`);
        page.issues.forEach(issue => {
          console.log(`    • ${issue}`);
        });
      });
    }
    
    // SEO issues report
    if (this.auditResults.seoIssues.length > 0) {
      console.log('\n🔍 SEO ISSUES:');
      this.auditResults.seoIssues.forEach(page => {
        console.log(`  - ${page.url}:`);
        page.issues.forEach(issue => {
          console.log(`    • ${issue}`);
        });
      });
    }
    
    // Save detailed report to file
    const report = {
      timestamp: new Date().toISOString(),
      summary: {
        totalPages: this.auditResults.totalPages,
        workingLinks: this.auditResults.workingLinks.length,
        brokenLinks: this.auditResults.brokenLinks.length,
        contentIssues: this.auditResults.contentIssues.length,
        seoIssues: this.auditResults.seoIssues.length
      },
      details: this.auditResults,
      recommendations: this.generateRecommendations()
    };
    
    fs.writeFileSync('website-audit-report.json', JSON.stringify(report, null, 2));
    console.log('\n💾 Detailed report saved to website-audit-report.json');

  }

  generateRecommendations() {
    const recommendations = [];

    
    if (this.auditResults.brokenLinks.length > 0) {
      recommendations.push({
        priority: 'HIGH',
        category: 'Broken Links',
        action: 'Fix all broken links identified in the audit',
        count: this.auditResults.brokenLinks.length
      });
    }
    
    if (this.auditResults.contentIssues.length > 0) {
      recommendations.push({
        priority: 'MEDIUM',
        category: 'Content Issues',
        action: 'Add missing titles, descriptions, and alt text',
        count: this.auditResults.contentIssues.length
      });
    }
    
    if (this.auditResults.seoIssues.length > 0) {
      recommendations.push({
        priority: 'MEDIUM',
        category: 'SEO Issues',
        action: 'Optimize page titles, descriptions, and heading structure',
        count: this.auditResults.seoIssues.length
      });
    }
    

    return recommendations;
  }
}

// Run the audit
const auditor = new WebsiteAuditor();

auditor.auditWebsite().catch(console.error);


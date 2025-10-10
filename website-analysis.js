#!/usr/bin/env node

import https from 'https';
import http from 'http';
import { URL } from 'url';
import fs from 'fs';

class WebsiteAnalyzer {
  constructor(baseUrl) {
    this.baseUrl = baseUrl;
    this.visitedUrls = new Set();
    this.brokenLinks = [];
    this.missingPages = [];
    this.workingLinks = [];
    this.redirects = [];
    this.errors = [];
    this.maxDepth = 3;
    this.currentDepth = 0;
  }

  async checkUrl(url, depth = 0) {
    if (depth > this.maxDepth || this.visitedUrls.has(url)) {
      return;
    }

    this.visitedUrls.add(url);
    console.log(`Checking: ${url} (depth: ${depth})`);

    try {
      const response = await this.makeRequest(url);
      
      if (response.statusCode >= 200 && response.statusCode < 300) {
        this.workingLinks.push({
          url,
          status: response.statusCode,
          depth,
          title: response.title || 'No title'
        });
        
        // If it's an HTML page, extract links
        if (response.contentType && response.contentType.includes('text/html')) {
          const links = this.extractLinks(response.body, url);
          for (const link of links) {
            if (link.startsWith('/') || link.startsWith(this.baseUrl)) {
              const fullUrl = link.startsWith('/') ? this.baseUrl + link : link;
              await this.checkUrl(fullUrl, depth + 1);
            }
          }
        }
      } else if (response.statusCode >= 300 && response.statusCode < 400) {
        this.redirects.push({
          url,
          status: response.statusCode,
          depth,
          redirectTo: response.headers.location
        });
      } else {
        this.brokenLinks.push({
          url,
          status: response.statusCode,
          depth,
          error: `HTTP ${response.statusCode}`
        });
      }
    } catch (error) {
      this.errors.push({
        url,
        error: error.message,
        depth
      });
      this.brokenLinks.push({
        url,
        status: 'ERROR',
        depth,
        error: error.message
      });
    }
  }

  async makeRequest(url) {
    return new Promise((resolve, reject) => {
      const urlObj = new URL(url);
      const options = {
        hostname: urlObj.hostname,
        port: urlObj.port || (urlObj.protocol === 'https:' ? 443 : 80),
        path: urlObj.pathname + urlObj.search,
        method: 'GET',
        headers: {
          'User-Agent': 'Mozilla/5.0 (compatible; WebsiteAnalyzer/1.0)',
          'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8',
          'Accept-Language': 'en-US,en;q=0.5',
          'Accept-Encoding': 'gzip, deflate',
          'Connection': 'keep-alive',
        },
        timeout: 10000
      };

      const client = urlObj.protocol === 'https:' ? https : http;
      
      const req = client.request(options, (res) => {
        let body = '';
        let title = '';
        
        res.on('data', (chunk) => {
          body += chunk;
          // Extract title if not already found
          if (!title && body.includes('<title>')) {
            const titleMatch = body.match(/<title[^>]*>([^<]+)<\/title>/i);
            if (titleMatch) {
              title = titleMatch[1].trim();
            }
          }
        });

        res.on('end', () => {
          resolve({
            statusCode: res.statusCode,
            headers: res.headers,
            body,
            title,
            contentType: res.headers['content-type']
          });
        });
      });

      req.on('error', (error) => {
        reject(error);
      });

      req.on('timeout', () => {
        req.destroy();
        reject(new Error('Request timeout'));
      });

      req.end();
    });
  }

  extractLinks(html, baseUrl) {
    const links = [];
    const linkRegex = /<a[^>]+href=["']([^"']+)["'][^>]*>/gi;
    let match;
    
    while ((match = linkRegex.exec(html)) !== null) {
      const href = match[1];
      if (href && !href.startsWith('#') && !href.startsWith('mailto:') && !href.startsWith('tel:')) {
        links.push(href);
      }
    }

    // Also extract from navigation components (React Router links)
    const reactLinkRegex = /to=["']([^"']+)["']/gi;
    while ((match = reactLinkRegex.exec(html)) !== null) {
      const href = match[1];
      if (href && !href.startsWith('#') && !href.startsWith('mailto:') && !href.startsWith('tel:')) {
        links.push(href);
      }
    }

    return [...new Set(links)]; // Remove duplicates
  }

  async analyze() {
    console.log(`Starting analysis of ${this.baseUrl}...`);
    await this.checkUrl(this.baseUrl);
    
    // Check common pages that should exist
    const commonPages = [
      '/about',
      '/services',
      '/contact',
      '/pricing',
      '/blog',
      '/case-studies',
      '/careers',
      '/ai-services',
      '/it-services',
      '/micro-saas',
      '/tutorials',
      '/team',
      '/partners',
      '/support',
      '/status',
      '/faq',
      '/docs',
      '/api-docs',
      '/community',
      '/demo',
      '/compliance',
      '/enterprise',
      '/digital-transformation',
      '/business-intelligence',
      '/edge-computing',
      '/consultation',
      '/privacy',
      '/terms',
      '/cookies',
      '/sitemap'
    ];

    for (const page of commonPages) {
      const fullUrl = this.baseUrl + page;
      if (!this.visitedUrls.has(fullUrl)) {
        await this.checkUrl(fullUrl);
      }
    }

    // Check AI services pages
    const aiServices = [
      '/ai-analytics', '/ai-automation', '/ai-chatbot-builder', '/ai-crm',
      '/ai-cybersecurity', '/ai-data-analytics', '/ai-healthcare',
      '/ai-financial-services', '/ai-computer-vision', '/ai-voice-solutions',
      '/ai-ecommerce-solutions', '/ai-hr-solutions', '/ai-content-generation',
      '/ai-workflow-automation', '/ai-document-processing', '/ai-predictive-analytics',
      '/ai-edge-computing', '/ai-video-analysis', '/ai-speech-synthesis',
      '/ai-recommendation-engine', '/ai-sentiment-analysis', '/ai-chatbot-enterprise',
      '/ai-content-moderation', '/ai-predictive-modeling', '/ai-document-intelligence',
      '/ai-conversation-analytics', '/ai-supply-chain-ai', '/ai-healthcare-diagnostics',
      '/ai-financial-forecasting', '/ai-iot-analytics', '/ai-conversational-ai',
      '/ai-automated-testing', '/ai-knowledge-management', '/ai-customer-churn',
      '/ai-automated-reporting', '/ai-voice-assistant', '/ai-content-generation-pro'
    ];

    for (const service of aiServices) {
      const fullUrl = this.baseUrl + service;
      if (!this.visitedUrls.has(fullUrl)) {
        await this.checkUrl(fullUrl);
      }
    }

    // Check IT services pages
    const itServices = [
      '/cloud-infrastructure', '/api-development', '/cybersecurity-solutions',
      '/database-management', '/mobile-development', '/web-development',
      '/devops-cicd', '/it-support', '/data-analytics-bi', '/custom-software',
      '/network-infrastructure', '/it-asset-management', '/it-security-services',
      '/it-project-management', '/cloud-native-development', '/ai-integration-services',
      '/blockchain-development', '/iot-development', '/e-commerce-development',
      '/api-development-advanced', '/data-engineering', '/cybersecurity-advanced',
      '/cloud-migration-advanced', '/devops-advanced', '/machine-learning-ops',
      '/enterprise-integration', '/performance-optimization', '/disaster-recovery-advanced',
      '/compliance-automation', '/cloud-cost-optimization', '/security-automation',
      '/data-visualization', '/workflow-automation', '/cloud-native-security'
    ];

    for (const service of itServices) {
      const fullUrl = this.baseUrl + service;
      if (!this.visitedUrls.has(fullUrl)) {
        await this.checkUrl(fullUrl);
      }
    }

    // Check Micro SAAS pages
    const microSaasServices = [
      '/zion-analytics-pro', '/zion-chat-ai', '/zion-security-shield',
      '/zion-cloud-vault', '/zion-content-studio', '/zion-crm-intelligence',
      '/zion-data-sync', '/zion-lead-magnet', '/zion-project-master',
      '/zion-email-automation', '/zion-inventory-smart', '/zion-invoice-genius',
      '/zion-workflow-automation', '/zion-performance-monitor', '/zion-compliance-manager',
      '/zion-social-scheduler', '/zion-ai-video-editor', '/zion-ai-translator-pro',
      '/zion-ai-code-reviewer', '/zion-customer-insights', '/zion-ai-email-assistant',
      '/zion-ai-meeting-assistant', '/zion-ai-seo-optimizer', '/zion-ai-data-cleaner',
      '/zion-ai-contract-analyzer', '/zion-ai-survey-builder', '/zion-ai-accounting-assistant',
      '/zion-ai-recruitment-pro', '/zion-ai-content-moderation', '/zion-ai-predictive-maintenance',
      '/zion-ai-energy-manager', '/zion-ai-supply-chain-optimizer', '/zion-ai-fraud-detector',
      '/zion-ai-customer-service-pro', '/zion-ai-marketing-automation', '/zion-ai-document-ai'
    ];

    for (const service of microSaasServices) {
      const fullUrl = this.baseUrl + service;
      if (!this.visitedUrls.has(fullUrl)) {
        await this.checkUrl(fullUrl);
      }
    }

    // Check emerging tech pages
    const emergingTech = [
      '/5g-implementation', '/ai-3d-generation', '/ai-holographic-workspace',
      '/ai-autonomous-systems', '/ai-blockchain-solutions', '/ai-edge-computing',
      '/quantum-computing', '/ar-vr-solutions', '/iot-integration', '/machine-learning'
    ];

    for (const tech of emergingTech) {
      const fullUrl = this.baseUrl + tech;
      if (!this.visitedUrls.has(fullUrl)) {
        await this.checkUrl(fullUrl);
      }
    }

    this.generateReport();
  }

  generateReport() {
    const report = {
      timestamp: new Date().toISOString(),
      baseUrl: this.baseUrl,
      summary: {
        totalUrls: this.visitedUrls.size,
        workingLinks: this.workingLinks.length,
        brokenLinks: this.brokenLinks.length,
        redirects: this.redirects.length,
        errors: this.errors.length
      },
      workingLinks: this.workingLinks,
      brokenLinks: this.brokenLinks,
      redirects: this.redirects,
      errors: this.errors,
      missingPages: this.identifyMissingPages()
    };

    // Save detailed report
    fs.writeFileSync('website-analysis-report.json', JSON.stringify(report, null, 2));
    
    // Save summary
    const summary = {
      timestamp: new Date().toISOString(),
      baseUrl: this.baseUrl,
      totalUrlsChecked: this.visitedUrls.size,
      workingLinks: this.workingLinks.length,
      brokenLinks: this.brokenLinks.length,
      redirects: this.redirects.length,
      errors: this.errors.length,
      brokenLinksList: this.brokenLinks.map(link => ({
        url: link.url,
        status: link.status,
        error: link.error
      })),
      missingPagesList: this.identifyMissingPages()
    };

    fs.writeFileSync('website-analysis-summary.json', JSON.stringify(summary, null, 2));

    console.log('\n=== WEBSITE ANALYSIS COMPLETE ===');
    console.log(`Total URLs checked: ${this.visitedUrls.size}`);
    console.log(`Working links: ${this.workingLinks.length}`);
    console.log(`Broken links: ${this.brokenLinks.length}`);
    console.log(`Redirects: ${this.redirects.length}`);
    console.log(`Errors: ${this.errors.length}`);
    
    if (this.brokenLinks.length > 0) {
      console.log('\n=== BROKEN LINKS ===');
      this.brokenLinks.forEach(link => {
        console.log(`${link.url} - ${link.status} - ${link.error}`);
      });
    }

    if (this.redirects.length > 0) {
      console.log('\n=== REDIRECTS ===');
      this.redirects.forEach(redirect => {
        console.log(`${redirect.url} -> ${redirect.redirectTo} (${redirect.status})`);
      });
    }

    console.log('\nReports saved to:');
    console.log('- website-analysis-report.json (detailed)');
    console.log('- website-analysis-summary.json (summary)');
  }

  identifyMissingPages() {
    const expectedPages = [
      '/about', '/services', '/contact', '/pricing', '/blog', '/case-studies',
      '/careers', '/ai-services', '/it-services', '/micro-saas', '/tutorials',
      '/team', '/partners', '/support', '/status', '/faq', '/docs', '/api-docs',
      '/community', '/demo', '/compliance', '/enterprise', '/digital-transformation',
      '/business-intelligence', '/edge-computing', '/consultation', '/privacy',
      '/terms', '/cookies', '/sitemap'
    ];

    const missing = [];
    for (const page of expectedPages) {
      const fullUrl = this.baseUrl + page;
      const isWorking = this.workingLinks.some(link => link.url === fullUrl);
      const isRedirect = this.redirects.some(redirect => redirect.url === fullUrl);
      
      if (!isWorking && !isRedirect) {
        missing.push(page);
      }
    }

    return missing;
  }
}

// Run the analysis
const analyzer = new WebsiteAnalyzer('https://ziontechgroup.com');
analyzer.analyze().catch(console.error);
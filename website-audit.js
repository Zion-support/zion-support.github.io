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
    this.validLinks = [];
    this.allLinks = new Set();
    this.auditResults = {
      totalLinks: 0,
      brokenLinks: 0,
      missingPages: 0,
      validLinks: 0,
      issues: []
    };
  }

  async checkUrl(url, isLocal = false) {
    try {
      const baseUrl = isLocal ? this.localUrl : this.baseUrl;
      const fullUrl = url.startsWith('http') ? url : `${baseUrl}${url}`;
      
      if (this.visitedUrls.has(fullUrl)) {
        return { status: 'visited', url: fullUrl };
      }

      this.visitedUrls.add(fullUrl);
      
      const response = await axios.get(fullUrl, {
        timeout: 10000,
        validateStatus: (status) => status < 500
      });

      if (response.status === 200) {
        this.validLinks.push(fullUrl);
        return { status: 'valid', url: fullUrl, content: response.data };
      } else if (response.status === 404) {
        this.brokenLinks.push(fullUrl);
        this.auditResults.issues.push({
          type: 'broken_link',
          url: fullUrl,
          status: response.status,
          message: 'Page not found'
        });
        return { status: 'broken', url: fullUrl, statusCode: response.status };
      } else {
        this.auditResults.issues.push({
          type: 'error',
          url: fullUrl,
          status: response.status,
          message: `HTTP ${response.status}`
        });
        return { status: 'error', url: fullUrl, statusCode: response.status };
      }
    } catch (error) {
      this.brokenLinks.push(url);
      this.auditResults.issues.push({
        type: 'error',
        url: url,
        error: error.message,
        message: 'Connection failed or timeout'
      });
      return { status: 'error', url: url, error: error.message };
    }
  }

  extractLinks(html, baseUrl) {
    const $ = cheerio.load(html);
    const links = [];

    // Extract all links
    $('a[href]').each((i, element) => {
      const href = $(element).attr('href');
      if (href && !href.startsWith('#') && !href.startsWith('mailto:') && !href.startsWith('tel:')) {
        let link = href;
        if (href.startsWith('/')) {
          link = `${baseUrl}${href}`;
        } else if (!href.startsWith('http')) {
          link = `${baseUrl}/${href}`;
        }
        links.push(link);
        this.allLinks.add(link);
      }
    });

    return links;
  }

  async auditPage(url, isLocal = false) {
    console.log(`🔍 Auditing: ${url}`);
    
    const result = await this.checkUrl(url, isLocal);
    
    if (result.status === 'valid' && result.content) {
      const links = this.extractLinks(result.content, isLocal ? this.localUrl : this.baseUrl);
      
      // Check each link found on this page
      for (const link of links) {
        if (!this.visitedUrls.has(link)) {
          await this.checkUrl(link, isLocal);
          await new Promise(resolve => setTimeout(resolve, 100)); // Rate limiting
        }
      }
    }
    
    return result;
  }

  async performComprehensiveAudit() {
    console.log('🚀 Starting comprehensive website audit...\n');
    
    // Start with local development server
    console.log('📱 Testing local development server...');
    try {
      await this.auditPage('/', true);
      console.log('✅ Local server is running\n');
    } catch (error) {
      console.log('❌ Local server not accessible, testing production site...\n');
    }

    // Test production site
    console.log('🌐 Testing production website...');
    
    // Main pages to test
    const mainPages = [
      '/',
      '/about',
      '/services',
      '/pricing',
      '/contact',
      '/ai-services',
      '/it-services',
      '/micro-saas',
      '/blog',
      '/case-studies',
      '/team',
      '/careers',
      '/privacy',
      '/terms',
      '/cookies',
      '/docs',
      '/api-docs',
      '/support',
      '/status',
      '/demo',
      '/consultation'
    ];

    // Test each main page
    for (const page of mainPages) {
      await this.auditPage(page, false);
      await new Promise(resolve => setTimeout(resolve, 200)); // Rate limiting
    }

    // Test AI service pages
    const aiServicePages = [
      '/ai-workflow-automation',
      '/ai-customer-support',
      '/ai-data-analytics',
      '/ai-content-generation',
      '/ai-healthcare',
      '/ai-fintech',
      '/ai-computer-vision',
      '/ai-ml-platform',
      '/ai-quantum-computing',
      '/ai-drug-discovery-pro',
      '/ai-climate-solutions-pro',
      '/ai-space-technology-pro',
      '/ai-project-manager',
      '/ai-social-media-manager',
      '/ai-analytics-dashboard',
      '/ai-email-marketing',
      '/ai-customer-support-bot',
      '/ai-content-studio',
      '/ai-financial-advisor',
      '/ai-smart-calendar',
      '/ai-content-writer',
      '/ai-video-generator',
      '/ai-crm-assistant'
    ];

    console.log('\n🤖 Testing AI service pages...');
    for (const page of aiServicePages) {
      await this.auditPage(page, false);
      await new Promise(resolve => setTimeout(resolve, 150));
    }

    // Test IT service pages
    const itServicePages = [
      '/cloud-migration',
      '/cybersecurity',
      '/it-infrastructure',
      '/it-support',
      '/custom-development',
      '/devops-cicd',
      '/database-management',
      '/network-design',
      '/ai-infrastructure-monitoring',
      '/blockchain-integration-services',
      '/ai-api-management',
      '/smart-contract-security-audit'
    ];

    console.log('\n💻 Testing IT service pages...');
    for (const page of itServicePages) {
      await this.auditPage(page, false);
      await new Promise(resolve => setTimeout(resolve, 150));
    }

    // Test emerging technology pages
    const emergingTechPages = [
      '/autonomous-systems',
      '/blockchain-web3',
      '/iot-edge-computing',
      '/ar-vr-solutions',
      '/smart-cities',
      '/digital-transformation',
      '/innovation-labs',
      '/business-intelligence',
      '/robotics'
    ];

    console.log('\n⚡ Testing emerging technology pages...');
    for (const page of emergingTechPages) {
      await this.auditPage(page, false);
      await new Promise(resolve => setTimeout(resolve, 150));
    }

    this.generateReport();
  }

  generateReport() {
    this.auditResults.totalLinks = this.allLinks.size;
    this.auditResults.brokenLinks = this.brokenLinks.length;
    this.auditResults.validLinks = this.validLinks.length;
    this.auditResults.missingPages = this.missingPages.length;

    console.log('\n📊 AUDIT RESULTS');
    console.log('================');
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
  }

  generateRecommendations() {
    const recommendations = [];

    if (this.brokenLinks.length > 0) {
      recommendations.push({
        priority: 'high',
        category: 'broken_links',
        title: 'Fix Broken Links',
        description: `Found ${this.brokenLinks.length} broken links that need to be fixed or redirected`,
        action: 'Review and fix all broken links identified in the audit'
      });
    }

    if (this.auditResults.issues.some(issue => issue.type === 'error')) {
      recommendations.push({
        priority: 'high',
        category: 'connectivity',
        title: 'Fix Connection Issues',
        description: 'Some pages are not accessible due to connection issues',
        action: 'Check server configuration and ensure all pages are properly deployed'
      });
    }

    recommendations.push({
      priority: 'medium',
      category: 'navigation',
      title: 'Improve Navigation Structure',
      description: 'Ensure all main navigation links are working and properly organized',
      action: 'Review navigation components and ensure consistent routing'
    });

    recommendations.push({
      priority: 'low',
      category: 'performance',
      title: 'Optimize Page Load Times',
      description: 'Consider implementing lazy loading and performance optimizations',
      action: 'Implement code splitting and optimize images and assets'
    });

    return recommendations;
  }
}

// Run the audit
const auditor = new WebsiteAuditor();
auditor.performComprehensiveAudit().catch(console.error);
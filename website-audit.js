#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { JSDOM } from 'jsdom';

// Website audit configuration
const CONFIG = {
  baseUrl: 'https://ziontechgroup.com',
  localDevUrl: 'http://localhost:3001',
  maxDepth: 3,
  timeout: 10000,
  userAgent: 'Mozilla/5.0 (compatible; WebsiteAuditBot/1.0)',
  excludePatterns: [
    /\.(pdf|jpg|jpeg|png|gif|svg|ico|css|js|woff|woff2|ttf|eot)$/i,
    /#/,
    /mailto:/,
    /tel:/,
    /javascript:/,
    /data:/
  ]
};

// Audit results storage
const auditResults = {
  totalPages: 0,
  workingLinks: 0,
  brokenLinks: 0,
  missingPages: [],
  brokenLinks: [],
  navigationIssues: [],
  contentIssues: [],
  seoIssues: [],
  accessibilityIssues: [],
  performanceIssues: [],
  startTime: new Date(),
  endTime: null
};

// Helper function to check if URL should be excluded
function shouldExcludeUrl(url) {
  return CONFIG.excludePatterns.some(pattern => pattern.test(url));
}

// Helper function to normalize URL
function normalizeUrl(url, baseUrl) {
  try {
    if (url.startsWith('http')) {
      return new URL(url).href;
    }
    if (url.startsWith('/')) {
      return new URL(url, baseUrl).href;
    }
    return new URL(url, baseUrl).href;
  } catch (error) {
    return null;
  }
}

// Function to check if a page exists locally
function checkLocalPageExists(url) {
  const urlObj = new URL(url);
  const pathname = urlObj.pathname;
  
  // Handle root path
  if (pathname === '/' || pathname === '') {
    const rootPagePath = path.join('/workspace/app', 'page.tsx');
    if (fs.existsSync(rootPagePath)) {
      return { exists: true, path: rootPagePath };
    }
  }
  
  // Check for exact page matches
  const possiblePaths = [
    pathname + '/page.tsx',
    pathname + '/index.tsx',
    pathname + '.tsx',
    pathname + '/index.tsx'
  ];
  
  for (const possiblePath of possiblePaths) {
    const fullPath = path.join('/workspace/app', possiblePath);
    if (fs.existsSync(fullPath)) {
      return { exists: true, path: fullPath };
    }
  }
  
  // Check for dynamic routes
  const segments = pathname.split('/').filter(Boolean);
  if (segments.length > 0) {
    const lastSegment = segments[segments.length - 1];
    const parentPath = segments.slice(0, -1).join('/');
    const dynamicPath = path.join('/workspace/app', parentPath, `[${lastSegment}].tsx`);
    if (fs.existsSync(dynamicPath)) {
      return { exists: true, path: dynamicPath };
    }
  }
  
  return { exists: false, path: null };
}

// Function to extract links from HTML content
function extractLinks(html, baseUrl) {
  const dom = new JSDOM(html);
  const document = dom.window.document;
  const links = [];
  
  // Extract all anchor tags
  const anchorTags = document.querySelectorAll('a[href]');
  anchorTags.forEach(anchor => {
    const href = anchor.getAttribute('href');
    if (href && !shouldExcludeUrl(href)) {
      const normalizedUrl = normalizeUrl(href, baseUrl);
      if (normalizedUrl) {
        links.push({
          url: normalizedUrl,
          text: anchor.textContent.trim(),
          title: anchor.getAttribute('title') || '',
          isExternal: normalizedUrl.startsWith('http') && !normalizedUrl.includes('ziontechgroup.com')
        });
      }
    }
  });
  
  // Extract navigation items from React components
  const navItems = document.querySelectorAll('[data-nav-item], .nav-item, .navigation-item');
  navItems.forEach(item => {
    const href = item.getAttribute('href') || item.getAttribute('data-href');
    if (href && !shouldExcludeUrl(href)) {
      const normalizedUrl = normalizeUrl(href, baseUrl);
      if (normalizedUrl) {
        links.push({
          url: normalizedUrl,
          text: item.textContent.trim(),
          title: item.getAttribute('title') || '',
          isExternal: normalizedUrl.startsWith('http') && !normalizedUrl.includes('ziontechgroup.com'),
          isNavigation: true
        });
      }
    }
  });
  
  return links;
}

// Function to analyze page content
function analyzePageContent(html, url) {
  const dom = new JSDOM(html);
  const document = dom.window.document;
  const issues = [];
  
  // Check for missing meta tags
  const title = document.querySelector('title');
  if (!title || !title.textContent.trim()) {
    issues.push({ type: 'seo', message: 'Missing or empty title tag', severity: 'high' });
  }
  
  const description = document.querySelector('meta[name="description"]');
  if (!description || !description.getAttribute('content')?.trim()) {
    issues.push({ type: 'seo', message: 'Missing or empty meta description', severity: 'high' });
  }
  
  // Check for missing alt attributes on images
  const images = document.querySelectorAll('img');
  images.forEach((img, index) => {
    if (!img.getAttribute('alt')) {
      issues.push({ 
        type: 'accessibility', 
        message: `Image ${index + 1} missing alt attribute`, 
        severity: 'medium' 
      });
    }
  });
  
  // Check for missing heading structure
  const headings = document.querySelectorAll('h1, h2, h3, h4, h5, h6');
  if (headings.length === 0) {
    issues.push({ type: 'seo', message: 'No heading tags found', severity: 'medium' });
  }
  
  // Check for missing main content
  const mainContent = document.querySelector('main, .main-content, #main, .content');
  if (!mainContent) {
    issues.push({ type: 'accessibility', message: 'No main content area found', severity: 'medium' });
  }
  
  // Check for broken internal links (404s)
  const internalLinks = document.querySelectorAll('a[href^="/"], a[href*="ziontechgroup.com"]');
  internalLinks.forEach(link => {
    const href = link.getAttribute('href');
    const normalizedUrl = normalizeUrl(href, CONFIG.baseUrl);
    if (normalizedUrl) {
      const localCheck = checkLocalPageExists(normalizedUrl);
      if (!localCheck.exists) {
        issues.push({ 
          type: 'broken-link', 
          message: `Broken internal link: ${href}`, 
          severity: 'high',
          url: normalizedUrl
        });
      }
    }
  });
  
  return issues;
}

// Function to scan all pages in the app directory
function scanAppDirectory() {
  const appDir = '/workspace/app';
  const pages = [];
  
  function scanDirectory(dir, basePath = '') {
    const items = fs.readdirSync(dir);
    
    for (const item of items) {
      const fullPath = path.join(dir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory()) {
        // Skip certain directories
        if (['components', 'hooks', 'utils', 'types', 'config', 'middleware'].includes(item)) {
          continue;
        }
        scanDirectory(fullPath, path.join(basePath, item));
      } else if (item.endsWith('.tsx') && !item.startsWith('_')) {
        const relativePath = path.join(basePath, item);
        const urlPath = relativePath
          .replace(/\\/g, '/')
          .replace(/\/page\.tsx$/, '')
          .replace(/\/index\.tsx$/, '')
          .replace(/\.tsx$/, '');
        
        const url = `${CONFIG.baseUrl}/${urlPath}`.replace(/\/+/g, '/').replace(/\/$/, '') || CONFIG.baseUrl;
        
        pages.push({
          file: fullPath,
          url: url,
          path: urlPath || '/',
          exists: true
        });
      }
    }
  }
  
  scanDirectory(appDir);
  return pages;
}

// Function to check navigation structure
function checkNavigationStructure() {
  const issues = [];
  
  // Check Navigation component
  const navFile = '/workspace/app/components/Navigation.tsx';
  if (fs.existsSync(navFile)) {
    const navContent = fs.readFileSync(navFile, 'utf8');
    
    // Check for merge conflicts
    if (navContent.includes('<<<<<<< HEAD') || navContent.includes('>>>>>>>')) {
      issues.push({
        type: 'navigation',
        message: 'Navigation component has merge conflicts',
        severity: 'high',
        file: navFile
      });
    }
    
    // Check for missing navigation items
    const hasHomeLink = navContent.includes('href="/"');
    const hasAboutLink = navContent.includes('href="/about"');
    const hasContactLink = navContent.includes('href="/contact"');
    const hasServicesLink = navContent.includes('href="/services"');
    
    if (!hasHomeLink) issues.push({ type: 'navigation', message: 'Missing home link', severity: 'high' });
    if (!hasAboutLink) issues.push({ type: 'navigation', message: 'Missing about link', severity: 'medium' });
    if (!hasContactLink) issues.push({ type: 'navigation', message: 'Missing contact link', severity: 'high' });
    if (!hasServicesLink) issues.push({ type: 'navigation', message: 'Missing services link', severity: 'medium' });
  }
  
  // Check Footer component
  const footerFile = '/workspace/app/components/Footer.tsx';
  if (fs.existsSync(footerFile)) {
    const footerContent = fs.readFileSync(footerFile, 'utf8');
    
    // Check for merge conflicts
    if (footerContent.includes('<<<<<<< HEAD') || footerContent.includes('>>>>>>>')) {
      issues.push({
        type: 'navigation',
        message: 'Footer component has merge conflicts',
        severity: 'high',
        file: footerFile
      });
    }
  }
  
  return issues;
}

// Main audit function
async function performAudit() {
  console.log('🔍 Starting comprehensive website audit...\n');
  
  // Step 1: Scan all pages in the app directory
  console.log('📁 Scanning app directory for pages...');
  const pages = scanAppDirectory();
  auditResults.totalPages = pages.length;
  console.log(`Found ${pages.length} pages\n`);
  
  // Step 2: Check navigation structure
  console.log('🧭 Checking navigation structure...');
  const navIssues = checkNavigationStructure();
  auditResults.navigationIssues.push(...navIssues);
  console.log(`Found ${navIssues.length} navigation issues\n`);
  
  // Step 3: Check for missing critical pages
  console.log('📄 Checking for missing critical pages...');
  const criticalPages = [
    { path: '/', name: 'Home' },
    { path: '/about', name: 'About' },
    { path: '/contact', name: 'Contact' },
    { path: '/services', name: 'Services' },
    { path: '/ai-services', name: 'AI Services' },
    { path: '/it-services', name: 'IT Services' },
    { path: '/micro-saas', name: 'Micro SAAS' },
    { path: '/pricing', name: 'Pricing' },
    { path: '/blog', name: 'Blog' },
    { path: '/case-studies', name: 'Case Studies' },
    { path: '/team', name: 'Team' },
    { path: '/careers', name: 'Careers' },
    { path: '/privacy', name: 'Privacy Policy' },
    { path: '/terms', name: 'Terms of Service' },
    { path: '/support', name: 'Support' }
  ];
  
  for (const criticalPage of criticalPages) {
    const exists = pages.some(page => page.path === criticalPage.path);
    if (!exists) {
      // Double-check by looking for the actual file
      const url = CONFIG.baseUrl + criticalPage.path;
      const localCheck = checkLocalPageExists(url);
      if (!localCheck.exists) {
        auditResults.missingPages.push({
          path: criticalPage.path,
          name: criticalPage.name,
          severity: criticalPage.path === '/' ? 'critical' : 'high'
        });
      }
    }
  }
  
  console.log(`Found ${auditResults.missingPages.length} missing critical pages\n`);
  
  // Step 4: Analyze each page for issues
  console.log('🔍 Analyzing page content...');
  for (const page of pages.slice(0, 10)) { // Limit to first 10 pages for now
    try {
      const content = fs.readFileSync(page.file, 'utf8');
      const issues = analyzePageContent(content, page.url);
      
      // Categorize issues
      issues.forEach(issue => {
        switch (issue.type) {
          case 'seo':
            auditResults.seoIssues.push({ ...issue, page: page.url });
            break;
          case 'accessibility':
            auditResults.accessibilityIssues.push({ ...issue, page: page.url });
            break;
          case 'broken-link':
            auditResults.brokenLinks.push({ ...issue, page: page.url });
            break;
          default:
            auditResults.contentIssues.push({ ...issue, page: page.url });
        }
      });
    } catch (error) {
      console.error(`Error analyzing ${page.file}:`, error.message);
    }
  }
  
  // Step 5: Generate audit report
  auditResults.endTime = new Date();
  generateAuditReport();
}

// Function to generate audit report
function generateAuditReport() {
  const report = {
    summary: {
      totalPages: auditResults.totalPages,
      missingPages: auditResults.missingPages.length,
      brokenLinks: auditResults.brokenLinks.length,
      navigationIssues: auditResults.navigationIssues.length,
      seoIssues: auditResults.seoIssues.length,
      accessibilityIssues: auditResults.accessibilityIssues.length,
      contentIssues: auditResults.contentIssues.length,
      auditDuration: auditResults.endTime - auditResults.startTime
    },
    missingPages: auditResults.missingPages,
    brokenLinks: auditResults.brokenLinks,
    navigationIssues: auditResults.navigationIssues,
    seoIssues: auditResults.seoIssues,
    accessibilityIssues: auditResults.accessibilityIssues,
    contentIssues: auditResults.contentIssues,
    recommendations: generateRecommendations()
  };
  
  // Save report to file
  const reportPath = '/workspace/website-audit-report.json';
  fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
  
  // Print summary
  console.log('\n📊 AUDIT SUMMARY');
  console.log('================');
  console.log(`Total Pages: ${report.summary.totalPages}`);
  console.log(`Missing Pages: ${report.summary.missingPages}`);
  console.log(`Broken Links: ${report.summary.brokenLinks}`);
  console.log(`Navigation Issues: ${report.summary.navigationIssues}`);
  console.log(`SEO Issues: ${report.summary.seoIssues}`);
  console.log(`Accessibility Issues: ${report.summary.accessibilityIssues}`);
  console.log(`Content Issues: ${report.summary.contentIssues}`);
  console.log(`Audit Duration: ${report.summary.auditDuration}ms`);
  
  console.log('\n🚨 CRITICAL ISSUES');
  console.log('==================');
  
  if (report.missingPages.length > 0) {
    console.log('\nMissing Critical Pages:');
    report.missingPages.forEach(page => {
      console.log(`  ❌ ${page.path} (${page.name}) - ${page.severity}`);
    });
  }
  
  if (report.brokenLinks.length > 0) {
    console.log('\nBroken Links:');
    report.brokenLinks.forEach(link => {
      console.log(`  ❌ ${link.url} - ${link.message}`);
    });
  }
  
  if (report.navigationIssues.length > 0) {
    console.log('\nNavigation Issues:');
    report.navigationIssues.forEach(issue => {
      console.log(`  ❌ ${issue.message} - ${issue.severity}`);
    });
  }
  
  console.log('\n📋 RECOMMENDATIONS');
  console.log('==================');
  report.recommendations.forEach((rec, index) => {
    console.log(`${index + 1}. ${rec}`);
  });
  
  console.log(`\n📄 Full report saved to: ${reportPath}`);
}

// Function to generate recommendations
function generateRecommendations() {
  const recommendations = [];
  
  if (auditResults.missingPages.length > 0) {
    recommendations.push('Create missing critical pages identified in the audit');
  }
  
  if (auditResults.brokenLinks.length > 0) {
    recommendations.push('Fix all broken internal links');
  }
  
  if (auditResults.navigationIssues.length > 0) {
    recommendations.push('Resolve navigation component merge conflicts and missing links');
  }
  
  if (auditResults.seoIssues.length > 0) {
    recommendations.push('Add missing meta tags and improve SEO structure');
  }
  
  if (auditResults.accessibilityIssues.length > 0) {
    recommendations.push('Add alt attributes to images and improve accessibility');
  }
  
  recommendations.push('Implement comprehensive testing for all navigation links');
  recommendations.push('Add proper error handling for missing pages');
  recommendations.push('Optimize page loading performance');
  recommendations.push('Implement proper sitemap generation');
  
  return recommendations;
}

// Run the audit
if (import.meta.url === `file://${process.argv[1]}`) {
  performAudit().catch(console.error);
}

export { performAudit, auditResults };
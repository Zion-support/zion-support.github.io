#!/usr/bin/env node

/**
 * Comprehensive Website Audit Script for Zion Tech Group
 * This script analyzes the website structure, identifies broken links, missing pages, and provides recommendations
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Configuration
const BASE_URL = 'https://ziontechgroup.com';
const APP_DIR = './app';
const OUTPUT_FILE = './website-audit-report.json';

// Track all pages and links
const pages = new Map();
const links = new Set();
const brokenLinks = new Set();
const missingPages = new Set();

// Service categories and their expected pages
const serviceCategories = {
  'AI Services': [
    'ai-services',
    'ai-marketing', 
    'ai-automation',
    'ai-healthcare',
    'ai-fintech',
    'ai-content-generation',
    'ai-data-analytics',
    'ai-cybersecurity',
    'ai-workflow-automation',
    'ai-mobile-app-development',
    'ai-ecommerce-solutions',
    'ai-customer-support',
    'ai-sales-automation',
    'ai-data-visualization',
    'ai-lead-generation',
    'ai-document-processing',
    'ai-email-assistant'
  ],
  'IT Services': [
    'it-services',
    'it-infrastructure',
    'cybersecurity',
    'cloud-services',
    'devops',
    'database',
    'networking',
    'system-admin',
    'it-consulting',
    'managed-it',
    'it-training',
    'it-project-management'
  ],
  'Micro SAAS': [
    'micro-saas',
    'developer-tools',
    'business-apps',
    'marketing-tools',
    'analytics-tools',
    'communication-tools',
    'productivity',
    'hr-recruitment-tools',
    'customer-support-tools',
    'sales-crm-tools',
    'project-management-tools',
    'content-creation-tools'
  ],
  'Specialized': [
    'quantum-computing',
    'autonomous-systems',
    'blockchain-web3',
    'iot-edge-computing',
    'business-intelligence',
    'robotics',
    'ar-vr-solutions',
    'smart-cities',
    'digital-transformation',
    'innovation-labs',
    'sustainability-tech',
    'future-technologies'
  ]
};

// Core pages that should exist
const corePages = [
  '',
  'about',
  'contact',
  'blog',
  'case-studies',
  'careers',
  'news',
  'team',
  'privacy',
  'terms',
  'cookies',
  'gdpr',
  'compliance',
  'docs',
  'api-docs',
  'support',
  'status',
  'sitemap'
];

/**
 * Scan directory for page files
 */
function scanDirectory(dir, basePath = '') {
  const items = fs.readdirSync(dir, { withFileTypes: true });
  
  for (const item of items) {
    const fullPath = path.join(dir, item.name);
    const relativePath = path.join(basePath, item.name);
    
    if (item.isDirectory()) {
      // Check if directory has a page.tsx file
      const pageFile = path.join(fullPath, 'page.tsx');
      if (fs.existsSync(pageFile)) {
        const route = relativePath.replace(/\\/g, '/');
        pages.set(route, {
          path: fullPath,
          file: pageFile,
          exists: true,
          type: 'page'
        });
      }
      // Recursively scan subdirectories
      scanDirectory(fullPath, relativePath);
    } else if (item.name === 'page.tsx' && basePath === '') {
      // Handle root page.tsx file
      pages.set('', {
        path: fullPath,
        file: fullPath,
        exists: true,
        type: 'page'
      });
    }
  }
}

/**
 * Extract links from a file
 */
function extractLinksFromFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    const linkRegex = /href=["']([^"']+)["']/g;
    const matches = content.match(linkRegex);
    
    if (matches) {
      matches.forEach(match => {
        const link = match.replace(/href=["']([^"']+)["']/, '$1');
        if (link.startsWith('/') && !link.startsWith('//')) {
          links.add(link);
        }
      });
    }
  } catch (error) {
    console.error(`Error reading file ${filePath}:`, error.message);
  }
}

/**
 * Check if a page exists
 */
function checkPageExists(route) {
  if (route === '' || route === '/') return pages.has('') || pages.has('/') || pages.has('page.tsx');
  
  const cleanRoute = route.startsWith('/') ? route.slice(1) : route;
  return pages.has(cleanRoute);
}

/**
 * Validate all links
 */
function validateLinks() {
  for (const link of links) {
    if (!checkPageExists(link)) {
      brokenLinks.add(link);
    }
  }
}

/**
 * Check for missing expected pages
 */
function checkMissingPages() {
  // Check core pages
  for (const page of corePages) {
    if (!checkPageExists(page)) {
      missingPages.add(page);
    }
  }
  
  // Check service pages
  for (const [category, services] of Object.entries(serviceCategories)) {
    for (const service of services) {
      if (!checkPageExists(service)) {
        missingPages.add(service);
      }
    }
  }
}

/**
 * Generate audit report
 */
function generateReport() {
  const report = {
    timestamp: new Date().toISOString(),
    baseUrl: BASE_URL,
    summary: {
      totalPages: pages.size,
      totalLinks: links.size,
      brokenLinks: brokenLinks.size,
      missingPages: missingPages.size
    },
    pages: Array.from(pages.keys()).sort(),
    brokenLinks: Array.from(brokenLinks).sort(),
    missingPages: Array.from(missingPages).sort(),
    serviceCategories: serviceCategories,
    recommendations: generateRecommendations()
  };
  
  return report;
}

/**
 * Generate recommendations
 */
function generateRecommendations() {
  const recommendations = [];
  
  if (brokenLinks.size > 0) {
    recommendations.push({
      priority: 'HIGH',
      category: 'Broken Links',
      description: `Found ${brokenLinks.size} broken internal links that need to be fixed`,
      action: 'Fix or remove broken links to improve user experience'
    });
  }
  
  if (missingPages.size > 0) {
    recommendations.push({
      priority: 'HIGH', 
      category: 'Missing Pages',
      description: `Found ${missingPages.size} expected pages that are missing`,
      action: 'Create missing pages or update navigation to remove references'
    });
  }
  
  // Check navigation structure
  recommendations.push({
    priority: 'MEDIUM',
    category: 'Navigation',
    description: 'Review and optimize navigation structure for better user experience',
    action: 'Ensure all main navigation items have corresponding pages and are properly organized'
  });
  
  // Check SEO
  recommendations.push({
    priority: 'MEDIUM',
    category: 'SEO',
    description: 'Ensure all pages have proper SEO metadata and structured data',
    action: 'Add meta descriptions, titles, and structured data to all pages'
  });
  
  return recommendations;
}

/**
 * Main audit function
 */
function runAudit() {
  console.log('🔍 Starting comprehensive website audit...');
  
  // Scan for all pages
  console.log('📁 Scanning for pages...');
  scanDirectory(APP_DIR);
  
  // Extract links from all files
  console.log('🔗 Extracting links...');
  for (const [route, pageInfo] of pages) {
    if (pageInfo.file) {
      extractLinksFromFile(pageInfo.file);
    }
  }
  
  // Validate links
  console.log('✅ Validating links...');
  validateLinks();
  
  // Check for missing pages
  console.log('❌ Checking for missing pages...');
  checkMissingPages();
  
  // Generate report
  console.log('📊 Generating report...');
  const report = generateReport();
  
  // Save report
  fs.writeFileSync(OUTPUT_FILE, JSON.stringify(report, null, 2));
  
  // Print summary
  console.log('\n📋 AUDIT SUMMARY');
  console.log('================');
  console.log(`Total Pages Found: ${report.summary.totalPages}`);
  console.log(`Total Links Found: ${report.summary.totalLinks}`);
  console.log(`Broken Links: ${report.summary.brokenLinks}`);
  console.log(`Missing Pages: ${report.summary.missingPages}`);
  
  if (brokenLinks.size > 0) {
    console.log('\n❌ BROKEN LINKS:');
    Array.from(brokenLinks).forEach(link => console.log(`  - ${link}`));
  }
  
  if (missingPages.size > 0) {
    console.log('\n❌ MISSING PAGES:');
    Array.from(missingPages).forEach(page => console.log(`  - ${page || '/'}`));
  }
  
  console.log('\n💡 RECOMMENDATIONS:');
  report.recommendations.forEach((rec, index) => {
    console.log(`  ${index + 1}. [${rec.priority}] ${rec.description}`);
    console.log(`     Action: ${rec.action}`);
  });
  
  console.log(`\n📄 Full report saved to: ${OUTPUT_FILE}`);
  console.log('\n✅ Audit completed!');
}

// Run the audit
runAudit();

export { runAudit, generateReport };
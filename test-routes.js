#!/usr/bin/env node

import http from 'http';
import https from 'https';
import { URL } from 'url';

// Test configuration
const BASE_URL = 'http://localhost:3000';
const PRODUCTION_URL = 'https://ziontechgroup.com';

// All routes from the App.tsx file
const routes = [
  // Main routes
  '/',
  '/about',
  '/contact',
  '/services',
  '/pricing',
  '/blog',
  '/case-studies',
  '/careers',
  '/ai-services',
  '/it-services',
  '/micro-saas',
  '/tutorials',
  '/consultation',
  '/demo',
  '/support',
  '/privacy',
  '/terms',
  '/cookies',
  '/sitemap',

  // AI Service Routes
  '/ai-analytics',
  '/ai-automation',
  '/ai-business-intelligence',
  '/ai-content-generation',
  '/ai-customer-service',
  '/ai-data-analytics',
  '/ai-email-automation',
  '/ai-fraud-detection',
  '/ai-healthcare',
  '/ai-marketing',
  '/ai-predictive-analytics',
  '/ai-project-management',
  '/ai-recommendation-engine',
  '/ai-sales-automation',
  '/ai-workflow-automation',
  '/ai-marketing-automation',

  // IT Service Routes
  '/cloud-infrastructure',
  '/cybersecurity-solutions',
  '/web-development',
  '/mobile-development',
  '/database-management',
  '/custom-software',
  '/network-infrastructure',
  '/cloud-native-development',
  '/blockchain-development',
  '/e-commerce-development',
  '/data-engineering',
  '/cybersecurity-advanced',
  '/cloud-migration-advanced',
  '/machine-learning-ops',
  '/enterprise-integration',
  '/performance-optimization',
  '/disaster-recovery-advanced',
  '/compliance-automation',
  '/cloud-cost-optimization',
  '/security-automation',
  '/data-visualization',
  '/workflow-automation',
  '/cloud-native-security',
  '/data-analytics',
  '/iot-solutions',
  '/devops-solutions',
  '/machine-learning',
  '/quantum-computing',
  '/robotics',
  '/cloud-services',
  '/cybersecurity',
  '/custom-development',

  // Micro SAAS Routes
  '/zion-analytics-pro',
  '/zion-security-shield',
  '/zion-cloud-vault',
  '/zion-content-studio',
  '/zion-data-sync',
  '/zion-lead-magnet',
  '/zion-project-master',
  '/zion-email-automation',
  '/zion-social-scheduler',
  '/zion-workflow-automation',
  '/zion-invoice-genius',
  '/zion-inventory-smart',
  '/zion-compliance-manager',
  '/zion-performance-monitor',

  // 5G Solutions Routes
  '/5g-data-analytics',
  '/5g-edge-computing',
  '/5g-implementation',
  '/5g-mobile-applications',
  '/5g-network-infrastructure',
  '/5g-private-networks',
  '/5g-smart-city-solutions',
  '/5g-solutions'
];

// Function to make HTTP request
function makeRequest(url) {
  return new Promise((resolve) => {
    const urlObj = new URL(url);
    const options = {
      hostname: urlObj.hostname,
      port: urlObj.port || (urlObj.protocol === 'https:' ? 443 : 80),
      path: urlObj.pathname + urlObj.search,
      method: 'GET',
      timeout: 10000,
      headers: {
        'User-Agent': 'Mozilla/5.0 (compatible; LinkChecker/1.0)'
      }
    };

    const client = urlObj.protocol === 'https:' ? https : http;
    
    const req = client.request(options, (res) => {
      resolve({
        url,
        status: res.statusCode,
        statusText: res.statusMessage,
        success: res.statusCode >= 200 && res.statusCode < 400
      });
    });

    req.on('error', (err) => {
      resolve({
        url,
        status: 0,
        statusText: err.message,
        success: false,
        error: err.message
      });
    });

    req.on('timeout', () => {
      req.destroy();
      resolve({
        url,
        status: 0,
        statusText: 'Request timeout',
        success: false,
        error: 'Request timeout'
      });
    });

    req.end();
  });
}

// Test all routes
async function testRoutes() {
  console.log('🔍 Testing all routes...\n');
  
  const results = {
    working: [],
    broken: [],
    errors: []
  };

  for (const route of routes) {
    const localUrl = BASE_URL + route;
    const prodUrl = PRODUCTION_URL + route;
    
    console.log(`Testing: ${route}`);
    
    // Test local first
    const localResult = await makeRequest(localUrl);
    if (localResult.success) {
      results.working.push({ route, url: localUrl, status: localResult.status });
      console.log(`  ✅ Local: ${localResult.status} ${localResult.statusText}`);
    } else {
      results.broken.push({ route, url: localUrl, status: localResult.status, error: localResult.error });
      console.log(`  ❌ Local: ${localResult.status} ${localResult.statusText} - ${localResult.error || ''}`);
    }

    // Test production
    const prodResult = await makeRequest(prodUrl);
    if (prodResult.success) {
      results.working.push({ route, url: prodUrl, status: prodResult.status });
      console.log(`  ✅ Production: ${prodResult.status} ${prodResult.statusText}`);
    } else {
      results.broken.push({ route, url: prodUrl, status: prodResult.status, error: prodResult.error });
      console.log(`  ❌ Production: ${prodResult.status} ${prodResult.statusText} - ${prodResult.error || ''}`);
    }
    
    console.log('');
  }

  // Summary
  console.log('\n📊 SUMMARY');
  console.log('==========');
  console.log(`✅ Working routes: ${results.working.length}`);
  console.log(`❌ Broken routes: ${results.broken.length}`);
  
  if (results.broken.length > 0) {
    console.log('\n🔧 BROKEN ROUTES:');
    results.broken.forEach(item => {
      console.log(`  - ${item.route} (${item.url}) - ${item.status} ${item.error || ''}`);
    });
  }

  return results;
}

// Run the test
testRoutes().catch(console.error);
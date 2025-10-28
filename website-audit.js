#!/usr/bin/env node
import https from 'https';
import http from 'http';
import { URL } from 'url';
import fs from 'fs';

// List of all routes from App.tsx
const routes = [
  // Main Pages
  '/',
  '/about',
  '/contact',
  '/pricing',
  '/services',
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
  '/consultation',
  '/health',
  '/security',
  '/compliance',
  '/gdpr',

  // Service Category Pages
  '/ai-services',
  '/it-services',
  '/micro-saas',

  // AI Services Pages
  '/ai-3d-generation',
  '/ai-agricultural-intelligence-pro',
  '/ai-analytics-dashboard',
  '/ai-api-management',
  '/ai-autonomous-systems',
  '/ai-blockchain-solutions',
  '/ai-climate-solutions-pro',
  '/ai-computer-vision',
  '/ai-content-generation',
  '/ai-content-studio',
  '/ai-content-writer',
  '/ai-crm-assistant',
  '/ai-customer-support',
  '/ai-customer-support-bot',
  '/ai-data-analytics',
  '/ai-drug-discovery-pro',
  '/ai-email-marketing',
  '/ai-energy',
  '/ai-energy-grid-management-pro',
  '/ai-fashion-design',
  '/ai-financial-advisor',
  '/ai-financial-crime-detection-pro',
  '/ai-fintech',
  '/ai-healthcare',
  '/ai-holographic-workspace',
  '/ai-infrastructure-monitoring',
  '/ai-logo-designer',
  '/ai-ml-platform',
  '/ai-mobile-app-builder',
  '/ai-music-composition',
  '/ai-neural-memory-assistant',
  '/ai-ops',
  '/ai-project-manager',
  '/ai-quantum-computing',
  '/ai-quantum-financial-oracle',
  '/ai-smart-calendar',
  '/ai-social-media-manager',
  '/ai-space-technology-pro',
  '/ai-supply-chain-optimization-pro',
  '/ai-video-generator',
  '/ai-workflow-automation',

  // IT Services Pages
  '/cloud-migration',
  '/cybersecurity',
  '/it-infrastructure',
  '/it-support',
  '/custom-development',
  '/devops-cicd',
  '/database-management',
  '/network-design',
  '/blockchain-integration-services',
  '/smart-contract-security-audit',

  // Emerging Technologies Pages
  '/autonomous-systems',
  '/blockchain-web3',
  '/iot-edge-computing',
  '/ar-vr-solutions',
  '/smart-cities',
  '/digital-transformation',
  '/innovation-labs',
  '/business-intelligence',
  '/robotics',

  // Additional Pages
  '/edge-computing',
  '/financial-it',
  '/healthcare-it',
  '/iot-platform',
  '/5g-implementation'
];

const baseUrl = 'https://ziontechgroup.com';
const results = {
  working: [],
  broken: [],
  missing: [],
  errors: []
};

function checkUrl(url) {
  return new Promise((resolve) => {
    const parsedUrl = new URL(url);
    const client = parsedUrl.protocol === 'https:' ? https : http;
    
    const req = client.request(url, { method: 'HEAD' }, (res) => {
      resolve({
        url,
        status: res.statusCode,
        working: res.statusCode >= 200 && res.statusCode < 400
      });
    });
    
    req.on('error', (error) => {
      resolve({
        url,
        status: 0,
        working: false,
        error: error.message
      });
    });
    
    req.setTimeout(10000, () => {
      req.destroy();
      resolve({
        url,
        status: 0,
        working: false,
        error: 'Timeout'
      });
    });
    
    req.end();
  });
}

async function auditWebsite() {
  console.log('🔍 Starting website audit...');
  console.log(`Checking ${routes.length} routes...`);
  
  for (const route of routes) {
    const url = `${baseUrl}${route}`;
    console.log(`Checking: ${url}`);
    
    const result = await checkUrl(url);
    
    if (result.working) {
      results.working.push(result);
      console.log(`✅ ${url} - ${result.status}`);
    } else {
      results.broken.push(result);
      console.log(`❌ ${url} - ${result.status} ${result.error || ''}`);
    }
    
    // Add delay to avoid overwhelming the server
    await new Promise(resolve => setTimeout(resolve, 100));
  }
  
  // Generate report
  const report = {
    timestamp: new Date().toISOString(),
    totalRoutes: routes.length,
    working: results.working.length,
    broken: results.broken.length,
    successRate: ((results.working.length / routes.length) * 100).toFixed(2),
    results: results
  };
  
  // Save report
  fs.writeFileSync('website-audit-report.json', JSON.stringify(report, null, 2));
  
  console.log('\n📊 Audit Results:');
  console.log(`Total routes: ${report.totalRoutes}`);
  console.log(`Working: ${report.working}`);
  console.log(`Broken: ${report.broken}`);
  console.log(`Success rate: ${report.successRate}%`);
  
  if (results.broken.length > 0) {
    console.log('\n❌ Broken routes:');
    results.broken.forEach(result => {
      console.log(`  ${result.url} - ${result.status} ${result.error || ''}`);
    });
  }
}

// Run the audit
auditWebsite().catch(console.error);
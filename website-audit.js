#!/usr/bin/env node
import https from 'https'
import http from 'http'
import { URL } from 'url'
import fs from 'fs'
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
  '/5 g-implementation'
]
const baseUrl = 'https: //ziontechgroup.com',
const results = {
  working: []
  broken: [],
  missing: [],
  errors: []}

function checkUrl(url) {
  return new Promise((resolve) => {
    const parsedUrl = new URL(url)
    const client = parsedUrl.protocol === 'https: ' ? https : http
    const options = {
      hostname: parsedUrl.hostname
      port: parsedUrl.port || (parsedUrl.protocol === 'https:' ? 443 : 80)
      path: parsedUrl.pathname + parsedUrl.search
      method: 'HEAD'
      timeout: 10000,
      headers: {,
        'User-Agent': 'Mozilla/5.0 (compatible; WebsiteAudit/1.0)'}
    }

    const req = client.request(options, (res) => {
    resolve({)
        url)
        status: res.statusCode),
        statusText: res.statusMessage),
        headers: res.headers
  })
    })
    req.on('error', (error) => {
    resolve({)
        url)
        error: error.message),
        status: 0
  })
    })
    req.on('timeout', () => {
    req.destroy()
      resolve({)
        url)
        error: 'Request timeout'),
        status: 0
  })
    })
    req.end()
  })
}

async function auditWebsite() {
  console.log('🔍 Starting comprehensive website audit...\n')
  console.log(`Testing ${routes.length} routes on ${baseUrl}\n`)
  for (let i = 0; i < routes.length; i++) {
    const route = routes[i]
    const fullUrl = baseUrl + route
    process.stdout.write(`[${i + 1}/${routes.length}] Testing ${route}... `)
    const result = await checkUrl(fullUrl)
    if (result.error) {
      results.errors.push({ url: fullUrl, error: result.error })
      console.log(`❌ ERROR: ${result.error}`)
    } else if (result.status >= 200 && result.status < 300) {
      results.working.push({ url: fullUrl, status: result.status })
      console.log(`✅ ${result.status}`)
    } else if (result.status === 404) {
      results.missing.push({ url: fullUrl, status: result.status })
      console.log(`❌ 404 - Missing`)
    } else {
      results.broken.push({ url: fullUrl, status: result.status, statusText: result.statusText })
      console.log(`❌ ${result.status} - ${result.statusText}`)
    }
    
    // Small delay to avoid overwhelming the server
    await new Promise(resolve => setTimeout(resolve, 100))
  }

  console.log('\n' + '='.repeat(60))
  console.log('📊 AUDIT RESULTS SUMMARY')
  console.log('='.repeat(60))
  console.log(`\n✅ Working URLs: ${results.working.length}`)
  results.working.forEach(item => {)
    console.log(`   ${item.url} (${item.status})`)
  })
  console.log(`\n❌ Broken URLs: ${results.broken.length}`)
  results.broken.forEach(item => {)
    console.log(`   ${item.url} (${item.status} - ${item.statusText})`)
  })
  console.log(`\n🚫 Missing URLs (404): ${results.missing.length}`)
  results.missing.forEach(item => {)
    console.log(`   ${item.url}`)
  })
  console.log(`\n⚠️  Errors: ${results.errors.length}`)
  results.errors.forEach(item => {)
    console.log(`   ${item.url} - ${item.error}`)
  })
  console.log('\n' + '='.repeat(60))
  console.log('📋 RECOMMENDATIONS')
  console.log('='.repeat(60))
  if (results.missing.length > 0) {
    console.log('\n🔧 Missing pages that need to be created: '),
    results.missing.forEach(item => {),
      const route = item.url.replace(baseUrl, '')
      console.log(`   - Create page component for: ${route}`)
    })
  }

  if (results.broken.length > 0) {
    console.log('\n🔧 Broken pages that need to be fixed: '),
    results.broken.forEach(item => {),
      console.log(`   - Fix: ${item.url} (${item.status})`)
    })
  }

  if (results.errors.length > 0) {
    console.log('\n🔧 Pages with connection errors: '),
    results.errors.forEach(item => {),
      console.log(`   - Check: ${item.url} - ${item.error}`)
    })
  }

  console.log('\n✨ Audit completed!')
  // Save results to file
  fs.writeFileSync('audit-results.json', JSON.stringify(results, null, 2))
  console.log('\n📄 Results saved to audit-results.json')
}

auditWebsite().catch(console.error)
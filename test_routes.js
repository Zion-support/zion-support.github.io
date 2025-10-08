#!/usr/bin/env node

import http from 'http';

const routes = [
  '/',
  '/about',
  '/services',
  '/contact',
  '/team',
  '/privacy',
  '/terms',
  '/enterprise',
  '/services-advertising',
  '/case-studies',
  '/ai-services',
  '/it-services',
  '/micro-saas',
  '/blog',
  '/guides/autonomous-business-processes-implementation-guide-2026',
  '/guides/ai-2026-implementation-roadmap',
  '/guides/ai-2027-implementation-roadmap',
  '/offline'
];

const testRoute = (route) => {
  return new Promise((resolve) => {
    const options = {
      hostname: 'localhost',
      port: 4173,
      path: route,
      method: 'GET'
    };

    const req = http.request(options, (res) => {
      let data = '';
      res.on('data', (chunk) => {
        data += chunk;
      });
      res.on('end', () => {
        resolve({
          route,
          status: res.statusCode,
          contentLength: data.length,
          hasError: data.includes('error') || data.includes('Error') || data.includes('404'),
          hasContent: data.length > 1000
        });
      });
    });

    req.on('error', (err) => {
      resolve({
        route,
        status: 'ERROR',
        error: err.message,
        hasError: true,
        hasContent: false
      });
    });

    req.end();
  });
};

const testAllRoutes = async () => {
  console.log('Testing all routes...\n');
  
  const results = [];
  for (const route of routes) {
    const result = await testRoute(route);
    results.push(result);
    
    const status = result.status === 200 ? '✓' : '✗';
    const content = result.hasContent ? '✓' : '✗';
    const error = result.hasError ? '✗' : '✓';
    
    console.log(`${status} ${route.padEnd(60)} | Status: ${result.status} | Content: ${content} | Error: ${error}`);
  }
  
  console.log('\n=== SUMMARY ===');
  const working = results.filter(r => r.status === 200 && r.hasContent && !r.hasError);
  const broken = results.filter(r => r.status !== 200 || r.hasError || !r.hasContent);
  
  console.log(`Working routes: ${working.length}/${results.length}`);
  console.log(`Broken routes: ${broken.length}/${results.length}`);
  
  if (broken.length > 0) {
    console.log('\nBroken routes:');
    broken.forEach(r => {
      console.log(`  - ${r.route} (Status: ${r.status})`);
    });
  }
};

testAllRoutes().catch(console.error);
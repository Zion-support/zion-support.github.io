import https from 'https';
import http from 'http';

// Function to test a URL
function testUrl(url) {
  return new Promise((resolve) => {
    const client = url.startsWith('https:') ? https : http;
    
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
        status: 'ERROR',
        working: false,
        error: error.message
      });
    });
    
    req.setTimeout(10000, () => {
      req.destroy();
      resolve({
        url,
        status: 'TIMEOUT',
        working: false,
        error: 'Request timeout'
      });
    });
    
    req.end();
  });
}

// Test the main website and key pages
async function testLiveWebsite() {
  console.log('🌐 Testing Live Website: https://ziontechgroup.com\n');
  
  const baseUrl = 'https://ziontechgroup.com';
  const testPages = [
    '/',
    '/about',
    '/services',
    '/pricing',
    '/blog',
    '/contact',
    '/ai-services',
    '/it-services',
    '/micro-saas',
    '/consultation',
    '/demo',
    '/support',
    '/privacy',
    '/terms',
    '/cookies',
    '/docs',
    '/community',
    '/api',
    '/tutorials',
    '/sitemap'
  ];
  
  const results = [];
  
  for (const page of testPages) {
    const url = baseUrl + page;
    console.log(`Testing: ${url}`);
    const result = await testUrl(url);
    results.push(result);
    
    if (result.working) {
      console.log(`✅ ${result.status} - ${url}`);
    } else {
      console.log(`❌ ${result.status} - ${url} ${result.error ? `(${result.error})` : ''}`);
    }
  }
  
  console.log('\n📊 SUMMARY:');
  console.log('===========');
  
  const working = results.filter(r => r.working);
  const broken = results.filter(r => !r.working);
  
  console.log(`✅ Working: ${working.length}`);
  console.log(`❌ Broken: ${broken.length}`);
  
  if (broken.length > 0) {
    console.log('\n🚨 BROKEN PAGES:');
    broken.forEach(result => {
      console.log(`❌ ${result.url} - ${result.status} ${result.error ? `(${result.error})` : ''}`);
    });
  }
  
  return results;
}

// Run the test
testLiveWebsite().catch(console.error);
import https from 'https';
import http from 'http';
import { JSDOM } from 'jsdom';
import fs from 'fs';

// Configuration
const BASE_URL = 'https://ziontechgroup.com';
const MAX_DEPTH = 3;
const TIMEOUT = 10000;

// Track visited URLs and results
const visitedUrls = new Set();
const brokenLinks = [];
const workingLinks = [];
const missingPages = [];
const analysisResults = {
  totalLinks: 0,
  workingLinks: 0,
  brokenLinks: 0,
  missingPages: 0,
  analysisTime: 0,
  errors: []
};

// Helper function to make HTTP requests
function makeRequest(url, options = {}) {
  return new Promise((resolve, reject) => {
    const protocol = url.startsWith('https:') ? https : http;
    const requestOptions = {
      timeout: TIMEOUT,
      headers: {
        'User-Agent': 'Mozilla/5.0 (compatible; WebsiteAnalyzer/1.0)',
        'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8',
        'Accept-Language': 'en-US,en;q=0.5',
        'Accept-Encoding': 'gzip, deflate',
        'Connection': 'keep-alive',
        'Upgrade-Insecure-Requests': '1'
      },
      ...options
    };

    const req = protocol.request(url, requestOptions, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        resolve({
          statusCode: res.statusCode,
          headers: res.headers,
          body: data,
          url: url
        });
      });
    });

    req.on('error', (err) => {
      reject(err);
    });

    req.on('timeout', () => {
      req.destroy();
      reject(new Error('Request timeout'));
    });

    req.end();
  });
}

// Extract links from HTML content
function extractLinks(html, baseUrl) {
  const dom = new JSDOM(html);
  const document = dom.window.document;
  const links = [];

  // Extract all anchor tags
  const anchorTags = document.querySelectorAll('a[href]');
  anchorTags.forEach(anchor => {
    const href = anchor.getAttribute('href');
    if (href) {
      try {
        const absoluteUrl = new URL(href, baseUrl).href;
        links.push({
          url: absoluteUrl,
          text: anchor.textContent.trim(),
          element: 'a'
        });
      } catch (e) {
        // Invalid URL, skip
      }
    }
  });

  // Extract navigation links from React Router
  const navElements = document.querySelectorAll('[data-testid*="nav"], nav a, .navigation a');
  navElements.forEach(element => {
    const href = element.getAttribute('href');
    if (href) {
      try {
        const absoluteUrl = new URL(href, baseUrl).href;
        links.push({
          url: absoluteUrl,
          text: element.textContent.trim(),
          element: 'nav'
        });
      } catch (e) {
        // Invalid URL, skip
      }
    }
  });

  return links;
}

// Check if URL is internal
function isInternalUrl(url, baseUrl) {
  try {
    const urlObj = new URL(url);
    const baseObj = new URL(baseUrl);
    return urlObj.hostname === baseObj.hostname;
  } catch (e) {
    return false;
  }
}

// Normalize URL for comparison
function normalizeUrl(url) {
  try {
    const urlObj = new URL(url);
    return urlObj.href.replace(/\/$/, ''); // Remove trailing slash
  } catch (e) {
    return url;
  }
}

// Check if a page exists
async function checkPageExists(url) {
  try {
    const response = await makeRequest(url);
    
    if (response.statusCode >= 200 && response.statusCode < 400) {
      return {
        exists: true,
        statusCode: response.statusCode,
        contentType: response.headers['content-type'] || 'unknown'
      };
    } else {
      return {
        exists: false,
        statusCode: response.statusCode,
        contentType: response.headers['content-type'] || 'unknown'
      };
    }
  } catch (error) {
    return {
      exists: false,
      error: error.message,
      statusCode: 0
    };
  }
}

// Analyze a single page
async function analyzePage(url, depth = 0) {
  if (depth > MAX_DEPTH || visitedUrls.has(normalizeUrl(url))) {
    return;
  }

  visitedUrls.add(normalizeUrl(url));
  console.log(`Analyzing: ${url} (depth: ${depth})`);

  try {
    const response = await makeRequest(url);
    
    if (response.statusCode >= 200 && response.statusCode < 400) {
      workingLinks.push({
        url: url,
        statusCode: response.statusCode,
        depth: depth
      });

      // Extract and analyze links from this page
      const links = extractLinks(response.body, url);
      console.log(`Found ${links.length} links on ${url}`);

      for (const link of links) {
        analysisResults.totalLinks++;
        
        if (isInternalUrl(link.url, BASE_URL)) {
          const normalizedLink = normalizeUrl(link.url);
          
          if (!visitedUrls.has(normalizedLink)) {
            // Check if this internal page exists
            const pageCheck = await checkPageExists(link.url);
            
            if (pageCheck.exists) {
              workingLinks.push({
                url: link.url,
                statusCode: pageCheck.statusCode,
                depth: depth + 1,
                parentUrl: url,
                linkText: link.text
              });
              
              // Recursively analyze this page
              await analyzePage(link.url, depth + 1);
            } else {
              brokenLinks.push({
                url: link.url,
                statusCode: pageCheck.statusCode,
                error: pageCheck.error,
                depth: depth + 1,
                parentUrl: url,
                linkText: link.text,
                type: 'broken'
              });
            }
          }
        } else {
          // External link - just check if it's accessible
          try {
            const externalCheck = await makeRequest(link.url);
            if (externalCheck.statusCode >= 200 && externalCheck.statusCode < 400) {
              workingLinks.push({
                url: link.url,
                statusCode: externalCheck.statusCode,
                depth: depth + 1,
                parentUrl: url,
                linkText: link.text,
                type: 'external'
              });
            } else {
              brokenLinks.push({
                url: link.url,
                statusCode: externalCheck.statusCode,
                depth: depth + 1,
                parentUrl: url,
                linkText: link.text,
                type: 'external_broken'
              });
            }
          } catch (error) {
            brokenLinks.push({
              url: link.url,
              error: error.message,
              depth: depth + 1,
              parentUrl: url,
              linkText: link.text,
              type: 'external_error'
            });
          }
        }
      }
    } else {
      brokenLinks.push({
        url: url,
        statusCode: response.statusCode,
        depth: depth,
        type: 'main_page_error'
      });
    }
  } catch (error) {
    brokenLinks.push({
      url: url,
      error: error.message,
      depth: depth,
      type: 'main_page_error'
    });
    analysisResults.errors.push({
      url: url,
      error: error.message,
      depth: depth
    });
  }
}

// Generate missing pages report
function generateMissingPagesReport() {
  const expectedPages = [
    '/',
    '/about',
    '/contact',
    '/services',
    '/ai-services',
    '/micro-saas',
    '/5g-solutions',
    '/blog',
    '/tutorials',
    '/demo',
    '/consultation',
    '/support',
    '/privacy',
    '/terms',
    '/accessibility',
    // AI Services
    '/ai-analytics',
    '/ai-content-generation',
    '/ai-customer-support',
    '/ai-cybersecurity',
    '/ai-data-analytics',
    '/ai-document-processing',
    '/ai-marketing-automation',
    '/ai-predictive-analytics',
    '/ai-voice-assistant',
    '/ai-workflow-automation',
    // 5G Services
    '/5g-network-infrastructure',
    '/5g-edge-computing',
    '/5g-iot-solutions',
    '/5g-smart-city-solutions',
    '/5g-private-networks',
    '/5g-mobile-applications',
    '/5g-data-analytics',
    '/5g-implementation',
    // Micro SAAS Services
    '/zion-ai-video-generator',
    '/zion-ai-invoice-generator',
    '/zion-ai-customer-insights',
    '/zion-ai-email-analyzer',
    '/zion-smart-inventory-optimizer',
    '/zion-ai-customer-sentiment-tracker',
    '/zion-smart-expense-categorizer',
    '/zion-ai-voice-assistant-pro',
    '/zion-ai-code-reviewer',
    '/zion-ai-social-media-manager',
    '/zion-ai-contract-analyzer',
    '/zion-ai-performance-optimizer',
    '/zion-ai-customer-churn-predictor',
    '/zion-ai-supply-chain-optimizer',
    '/zion-ai-financial-forecaster',
    '/zion-ai-content-moderator',
    '/zion-ai-translator-pro',
    '/zion-ai-data-cleaner',
    '/zion-ai-task-scheduler',
    '/zion-ai-customer-support-pro',
    // IT Services
    '/cloud-migration',
    '/devops',
    '/it-consulting',
    '/network-security',
    '/custom-software',
    '/system-integration',
    '/web-development'
  ];

  const visitedUrlsSet = new Set(Array.from(visitedUrls));
  
  for (const expectedPage of expectedPages) {
    const fullUrl = BASE_URL + expectedPage;
    const normalizedExpected = normalizeUrl(fullUrl);
    
    if (!visitedUrlsSet.has(normalizedExpected)) {
      missingPages.push({
        url: fullUrl,
        path: expectedPage,
        type: 'missing_page'
      });
    }
  }
}

// Main analysis function
async function analyzeWebsite() {
  const startTime = Date.now();
  console.log(`Starting analysis of ${BASE_URL}...`);
  
  try {
    // Start analysis from the homepage
    await analyzePage(BASE_URL, 0);
    
    // Generate missing pages report
    generateMissingPagesReport();
    
    // Calculate final statistics
    analysisResults.workingLinks = workingLinks.length;
    analysisResults.brokenLinks = brokenLinks.length;
    analysisResults.missingPages = missingPages.length;
    analysisResults.analysisTime = Date.now() - startTime;
    
    // Generate comprehensive report
    const report = {
      summary: analysisResults,
      brokenLinks: brokenLinks,
      missingPages: missingPages,
      workingLinks: workingLinks.slice(0, 50), // Limit to first 50 for readability
      recommendations: generateRecommendations()
    };
    
    // Save report to file
    fs.writeFileSync('website-analysis-report.json', JSON.stringify(report, null, 2));
    
    // Print summary
    console.log('\n=== WEBSITE ANALYSIS COMPLETE ===');
    console.log(`Total Links Found: ${analysisResults.totalLinks}`);
    console.log(`Working Links: ${analysisResults.workingLinks}`);
    console.log(`Broken Links: ${analysisResults.brokenLinks}`);
    console.log(`Missing Pages: ${analysisResults.missingPages}`);
    console.log(`Analysis Time: ${(analysisResults.analysisTime / 1000).toFixed(2)}s`);
    console.log(`Errors: ${analysisResults.errors.length}`);
    
    if (brokenLinks.length > 0) {
      console.log('\n=== BROKEN LINKS ===');
      brokenLinks.forEach(link => {
        console.log(`❌ ${link.url} (${link.statusCode || 'ERROR'}) - ${link.linkText || 'No text'}`);
      });
    }
    
    if (missingPages.length > 0) {
      console.log('\n=== MISSING PAGES ===');
      missingPages.forEach(page => {
        console.log(`⚠️  ${page.path} - Missing page`);
      });
    }
    
    console.log('\nReport saved to: website-analysis-report.json');
    
  } catch (error) {
    console.error('Analysis failed:', error);
    analysisResults.errors.push({
      type: 'analysis_error',
      error: error.message
    });
  }
}

// Generate recommendations
function generateRecommendations() {
  const recommendations = [];
  
  if (brokenLinks.length > 0) {
    recommendations.push({
      priority: 'high',
      category: 'broken_links',
      title: 'Fix Broken Links',
      description: `Found ${brokenLinks.length} broken links that need to be fixed or removed.`,
      action: 'Review and fix all broken internal and external links.'
    });
  }
  
  if (missingPages.length > 0) {
    recommendations.push({
      priority: 'high',
      category: 'missing_pages',
      title: 'Create Missing Pages',
      description: `Found ${missingPages.length} expected pages that are missing.`,
      action: 'Create the missing pages or update navigation to remove references to them.'
    });
  }
  
  if (analysisResults.errors.length > 0) {
    recommendations.push({
      priority: 'medium',
      category: 'errors',
      title: 'Fix Analysis Errors',
      description: `Encountered ${analysisResults.errors.length} errors during analysis.`,
      action: 'Review and fix any server-side issues that may be causing errors.'
    });
  }
  
  recommendations.push({
    priority: 'medium',
    category: 'performance',
    title: 'Optimize Page Load Times',
    description: 'Consider implementing lazy loading and optimizing images.',
    action: 'Implement performance optimizations for better user experience.'
  });
  
  recommendations.push({
    priority: 'low',
    category: 'seo',
    title: 'Improve SEO',
    description: 'Add meta descriptions, alt tags, and structured data.',
    action: 'Enhance SEO elements across all pages.'
  });
  
  return recommendations;
}

// Run the analysis
analyzeWebsite().catch(console.error);

export { analyzeWebsite, checkPageExists };
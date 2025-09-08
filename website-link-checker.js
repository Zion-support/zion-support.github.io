#!/usr/bin/env node

import https from 'https';
import http from 'http';
import { URL } from 'url';

// List of URLs to check based on the analysis reports
const urlsToCheck = [
  'https://ziontechgroup.com/',
  'https://ziontechgroup.com/about',
  'https://ziontechgroup.com/contact',
  'https://ziontechgroup.com/careers',
  'https://ziontechgroup.com/solutions',
  'https://ziontechgroup.com/research-development',
  'https://ziontechgroup.com/case-studies',
  'https://ziontechgroup.com/news',
  'https://ziontechgroup.com/events',
  'https://ziontechgroup.com/services',
  'https://ziontechgroup.com/services/ai',
  'https://ziontechgroup.com/services/cloud',
  'https://ziontechgroup.com/services/cybersecurity',
  'https://ziontechgroup.com/services/infrastructure',
  'https://ziontechgroup.com/services/transformation',
  'https://ziontechgroup.com/services/consulting',
  'https://ziontechgroup.com/privacy',
  'https://ziontechgroup.com/terms',
  'https://ziontechgroup.com/services-overview',
  'https://ziontechgroup.com/ai-services',
  'https://ziontechgroup.com/it-services',
  'https://ziontechgroup.com/micro-saas',
  'https://ziontechgroup.com/pricing',
  'https://ziontechgroup.com/pricing-guide',
  'https://ziontechgroup.com/blog',
  'https://ziontechgroup.com/white-papers',
  'https://ziontechgroup.com/webinars',
  'https://ziontechgroup.com/team',
  'https://ziontechgroup.com/sitemap'
];

function checkUrl(url) {
  return new Promise((resolve) => {
    const urlObj = new URL(url);
    const options = {
      hostname: urlObj.hostname,
      port: urlObj.port || (urlObj.protocol === 'https:' ? 443 : 80),
      path: urlObj.pathname + urlObj.search,
      method: 'HEAD',
      timeout: 10000,
      headers: {
        'User-Agent': 'Mozilla/5.0 (compatible; Website Link Checker)'
      }
    };

    const client = urlObj.protocol === 'https:' ? https : http;
    
    const req = client.request(options, (res) => {
      resolve({
        url,
        status: res.statusCode,
        working: res.statusCode >= 200 && res.statusCode < 400,
        redirect: res.statusCode >= 300 && res.statusCode < 400,
        location: res.headers.location
      })});

    req.on('error', (err) => {
      resolve({
        url,
        status: 'ERROR',
        working: false,
        error: err.message
      })});

    req.on('timeout', () => {
      req.destroy();
      resolve({
        url,
        status: 'TIMEOUT',
        working: false,
        error: 'Request timeout'
      })});

    req.end()})}

async function checkAllUrls() {
  // eslint-disable-next-line no-console
  console.log('🔍 Checking all URLs from Zion Tech Group website...\n');
  
  const results = {
    working: [],
    broken: [],
    redirects: [],
    errors: []
  };

  for (const url of urlsToCheck) {
    process.stdout.write(`Checking ${url}... `);
    const result = await checkUrl(url);
    
    if (result.working && !result.redirect) {
      // eslint-disable-next-line no-console
      console.log(`✅ ${result.status}`);
      results.working.push(result)} else if (result.redirect) {
      // eslint-disable-next-line no-console
      console.log(`🔄 ${result.status} -> ${result.location}`);
      results.redirects.push(result)} else if (result.error) {
      // eslint-disable-next-line no-console
      console.log(`❌ ${result.error}`);
      results.errors.push(result)} else {
      // eslint-disable-next-line no-console
      console.log(`❌ ${result.status}`);
      results.broken.push(result)}
  }

  // eslint-disable-next-line no-console
  console.log('\n📊 SUMMARY:');
  // eslint-disable-next-line no-console
  console.log(`✅ Working: ${results.working.length}`);
  // eslint-disable-next-line no-console
  console.log(`🔄 Redirects: ${results.redirects.length}`);
  // eslint-disable-next-line no-console
  console.log(`❌ Broken: ${results.broken.length}`);
  // eslint-disable-next-line no-console
  console.log(`⚠️  Errors: ${results.errors.length}`);
  // eslint-disable-next-line no-console
  console.log(`📈 Total: ${urlsToCheck.length}`);

  if (results.broken.length > 0) {
    // eslint-disable-next-line no-console
    console.log('\n❌ BROKEN LINKS:');
    results.broken.forEach(link => {
      // eslint-disable-next-line no-console
      console.log(`  - ${link.url} (${link.status})`)})}

  if (results.redirects.length > 0) {
    // eslint-disable-next-line no-console
    console.log('\n🔄 REDIRECTS:');
    results.redirects.forEach(link => {
      // eslint-disable-next-line no-console
      console.log(`  - ${link.url} -> ${link.location}`)})}

  if (results.errors.length > 0) {
    // eslint-disable-next-line no-console
    console.log('\n⚠️  ERRORS:');
    results.errors.forEach(link => {
      // eslint-disable-next-line no-console
      console.log(`  - ${link.url}: ${link.error}`)})}

  return results}

checkAllUrls().catch(console.error); // eslint-disable-line no-console
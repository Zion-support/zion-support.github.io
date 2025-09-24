#!/usr/bin/env node
// Simple test script to verify environment without failing hard on missing deps
/* eslint-disable no-console */

function safeRequire(moduleName) {
  try {
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    return require(moduleName);
  } catch (err) {
    return null;
  }
}

try {
  const pkg = safeRequire('./package.json');
  const next = safeRequire('next');
  if (pkg && pkg.dependencies && pkg.dependencies.next) {
    console.log(`Next.js declared: ${pkg.dependencies.next}`);
  } else {
    console.log('Next.js not declared in package.json or package.json missing');
  }
  if (next) {
    console.log('Next.js module can be required');
  } else {
    console.log('Next.js module not available');
  }
  const swc = safeRequire('@next/swc-linux-x64-gnu') || safeRequire('@next/swc-linux-x64-musl');
  if (swc) {
    console.log('SWC native binary available');
  } else {
    console.log('SWC native binary not available');
  }
  console.log('Configuration probe completed');
  process.exit(0);
} catch (error) {
  console.error('Configuration probe failed:', error && error.message ? error.message : error);
  process.exit(0);
}
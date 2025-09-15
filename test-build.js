#!/usr/bin/env node

// Simple test script to verify Next.js configuration
const { execSync } = require('child_process');

console.log('Testing Next.js configuration...');

try {
  // Check if Next.js can be imported
  const next = require('next');
  console.log('✓ Next.js can be imported');
  
  // Check Next.js version
  const packageJson = require('./package.json');
  console.log(`✓ Next.js version: ${packageJson.dependencies.next}`);
  
  // Check if SWC is available
  try {
    const swc = require('@next/swc-linux-x64-gnu');
    console.log('✓ SWC native binary available');
  } catch (e) {
    console.log('⚠ SWC native binary not available, will use JavaScript fallback');
  }
  
  console.log('✓ Configuration test passed');
} catch (error) {
  console.error('✗ Configuration test failed:', error.message);
  process.exit(1);
}
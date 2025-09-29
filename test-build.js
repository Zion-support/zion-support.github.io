#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs');

console.log('Testing build process...');

try {
  // Check if we're in the right directory
  if (!fs.existsSync('package.json')) {
    console.error('package.json not found. Are we in the right directory?');
    process.exit(1);
  }

  console.log('✅ package.json found');
  
  // Check if node_modules exists
  if (!fs.existsSync('node_modules')) {
    console.log('Installing dependencies...');
    execSync('pnpm install', { stdio: 'inherit', timeout: 60000 });
  }
  
  console.log('✅ Dependencies ready');
  
  // Try a simple type check
  console.log('Running type check...');
  execSync('pnpm run type-check', { stdio: 'inherit', timeout: 30000 });
  console.log('✅ Type check passed');
  
  // Try a simple build
  console.log('Running build...');
  execSync('pnpm run build:no-check', { stdio: 'inherit', timeout: 60000 });
  console.log('✅ Build successful');
  
  console.log('🎉 All tests passed!');
  
} catch (error) {
  console.error('❌ Test failed:', error.message);
  process.exit(1);
}
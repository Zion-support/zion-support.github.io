#!/usr/bin/env node

const { execSync } = require('child_process');

console.log('🏃 Test Runner Starting...\n');

// Run tests
async function runTests() {
  console.log('🧪 Running tests...');
  
  try {
    execSync('npm run test', { stdio: 'inherit' });
    console.log('✅ Tests passed!');
  } catch (error) {
    console.error('❌ Tests failed!');
    process.exit(1);
  }
}

runTests();

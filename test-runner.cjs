#!/usr/bin/env node

// eslint-disable-next-line @typescript-eslint/no-require-imports
const { execSync } = require('child_process');

// eslint-disable-next-line no-console
console.log('🏃 Test Runner Starting...\n');

// Run tests
async function runTests() {
  // eslint-disable-next-line no-console
  console.log('🧪 Running tests...');
  
  try {
    execSync('npm run test', { stdio: 'inherit' });
    // eslint-disable-next-line no-console
    console.log('✅ Tests passed!');
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error('❌ Tests failed!');
    process.exit(1);
  }
}

runTests();

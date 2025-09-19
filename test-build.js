#!/usr/bin/env node,
const { execSync } = require('child_process');
const fs = require('fs');
console.log('Testing build process...');
try {,
  // Check if node_modules exists,
  if (!fs.existsSync('node_modules')) {,
    console.log('Installing dependencies...');
    execSync('npm install --no-audit --no-fund', { stdio: 'inherit' ,});
  }
,
  // Try to run the build,
  console.log('Running build...');
  execSync('npm run build', { stdio: 'inherit' ,});
  console.log('Build completed successfully!');
} catch (error) {,
  console.error('Build failed:', error.message);
  process.exit(1);
}
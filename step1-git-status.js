#!/usr/bin/env node

const { execSync } = require('child_process');

console.log('🔍 Checking git status...');

try {
  const status = execSync('git status --porcelain', {
    cwd: '/workspace',
    encoding: 'utf8',
    timeout: 10000,
  });
  console.log('Git status:', status);
} catch (error) {
  console.log('Error checking git status:', error.message);
}

try {
  const branches = execSync('git branch -a', {
    cwd: '/workspace',
    encoding: 'utf8',
    timeout: 10000,
  });
  console.log('Branches:', branches);
} catch (error) {
  console.log('Error checking branches:', error.message);
}

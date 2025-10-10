#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

console.log('🧪 Testing minimal build...');

// Create a minimal test page
const minimalPage = `'use client';
import React from 'react';

const TestPage = () => {
  return (
    <div>
      <h1>Test Page</h1>
      <p>This is a minimal test page.</p>
    </div>
  );
};

export default TestPage;
`;

// Write the test page
fs.writeFileSync(path.join(__dirname, 'app', 'test-page.tsx'), minimalPage);

console.log('✅ Minimal test page created');

// Check if the main page compiles
try {
  const { execSync } = require('child_process');
  console.log('🔍 Testing main page compilation...');
  execSync('npx tsc --noEmit app/page.tsx', { stdio: 'inherit' });
  console.log('✅ Main page compiles successfully');
} catch (error) {
  console.log('❌ Main page compilation failed:', error.message);
}

// Clean up
fs.unlinkSync(path.join(__dirname, 'app', 'test-page.tsx'));
console.log('🧹 Cleaned up test files');
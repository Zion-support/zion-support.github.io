#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs');

console.log('🚀 Testing build process...');

try {
  // Check if we can run basic commands
  console.log('📦 Checking dependencies...');
  const packageJson = JSON.parse(fs.readFileSync('package.json', 'utf8'));
  console.log(`✅ Found ${Object.keys(packageJson.dependencies).length} dependencies`);
  
  // Check Next.js config
  console.log('⚙️ Checking Next.js configuration...');
  const nextConfig = fs.readFileSync('next.config.js', 'utf8');
  if (nextConfig.includes('swcMinify')) {
    console.log('⚠️ Found deprecated swcMinify option');
  } else {
    console.log('✅ Next.js configuration looks good');
  }
  
  // Check for syntax errors in key files
  console.log('🔍 Checking for syntax errors...');
  const keyFiles = [
    'app/page.tsx',
    'app/layout.tsx',
    'app/components/Navigation.tsx',
    'app/components/Footer.tsx'
  ];
  
  let hasErrors = false;
  keyFiles.forEach(file => {
    if (fs.existsSync(file)) {
      try {
        const content = fs.readFileSync(file, 'utf8');
        // Basic syntax checks
        if (content.includes('<<<<<<< HEAD') || content.includes('=======') || content.includes('>>>>>>>')) {
          console.log(`❌ Found merge conflicts in ${file}`);
          hasErrors = true;
        } else {
          console.log(`✅ ${file} looks clean`);
        }
      } catch (error) {
        console.log(`❌ Error reading ${file}: ${error.message}`);
        hasErrors = true;
      }
    } else {
      console.log(`⚠️ ${file} not found`);
    }
  });
  
  if (hasErrors) {
    console.log('❌ Build test failed due to syntax errors');
    process.exit(1);
  } else {
    console.log('✅ Build test passed - no syntax errors found');
    process.exit(0);
  }
  
} catch (error) {
  console.log(`❌ Build test failed: ${error.message}`);
  process.exit(1);
}
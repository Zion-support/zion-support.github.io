#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

console.log('🔧 Testing Build Configuration...\n');

try {
  // Check if package.json exists
  if (!fs.existsSync('package.json')) {
    throw new Error('package.json not found');
  }

  // Check if vite.config.ts exists
  if (!fs.existsSync('vite.config.ts')) {
    throw new Error('vite.config.ts not found');
  }

  // Check if netlify.toml exists
  if (!fs.existsSync('netlify.toml')) {
    throw new Error('netlify.toml not found');
  }

  // Read configurations
  const packageJson = JSON.parse(fs.readFileSync('package.json', 'utf8'));
  const viteConfig = fs.readFileSync('vite.config.ts', 'utf8');
  const netlifyConfig = fs.readFileSync('netlify.toml', 'utf8');

  console.log('✅ Configuration files found');

  // Check build script
  const buildScript = packageJson.scripts?.build;
  if (!buildScript || !buildScript.includes('vite build')) {
    throw new Error('Build script not configured for Vite');
  }
  console.log('✅ Build script configured for Vite');

  // Check Vite output directory
  const viteOutDir = viteConfig.match(/outDir:\s*['"`]([^'"`]+)['"`]/);
  if (!viteOutDir) {
    throw new Error('Vite output directory not found in config');
  }
  console.log(`✅ Vite output directory: ${viteOutDir[1]}`);

  // Check Netlify publish directory
  const netlifyPublish = netlifyConfig.match(/publish\s*=\s*['"`]([^'"`]+)['"`]/);
  if (!netlifyPublish) {
    throw new Error('Netlify publish directory not found in config');
  }
  console.log(`✅ Netlify publish directory: ${netlifyPublish[1]}`);

  // Check if directories match
  if (viteOutDir[1] !== netlifyPublish[1]) {
    throw new Error(`Directory mismatch: Vite outputs to '${viteOutDir[1]}' but Netlify expects '${netlifyPublish[1]}'`);
  }
  console.log('✅ Directory configuration matches');

  // Test build
  console.log('\n🚀 Testing build...');
  execSync('npm run build', { stdio: 'inherit' });

  // Check if build output exists
  const buildDir = viteOutDir[1];
  if (!fs.existsSync(buildDir)) {
    throw new Error(`Build output directory '${buildDir}' not found after build`);
  }

  const buildFiles = fs.readdirSync(buildDir);
  if (buildFiles.length === 0) {
    throw new Error('Build output directory is empty');
  }

  console.log(`✅ Build successful! Output in '${buildDir}' directory`);
  console.log(`📁 Build files: ${buildFiles.join(', ')}`);

  console.log('\n🎉 All tests passed! Build configuration is correct.');

} catch (error) {
  console.error('\n❌ Build test failed:', error.message);
  process.exit(1);
}
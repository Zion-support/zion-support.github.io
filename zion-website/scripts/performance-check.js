#!/usr/bin/env node

/**
 * Performance check script for Zion Website
 * Monitors build performance and provides optimization recommendations
 */

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

console.log('🚀 Starting performance check...\n');

// Check build size
function checkBuildSize() {
  console.log('📊 Checking build size...');
  try {
    const buildDir = path.join(__dirname, '..', '.next');
    if (fs.existsSync(buildDir)) {
      const { execSync } = require('child_process');
      const size = execSync(`du -sh ${buildDir}`, { encoding: 'utf8' }).trim();
      console.log(`   Build size: ${size}`);
      
      // Check for large files
      const largeFiles = execSync(`find ${buildDir} -type f -size +1M -exec ls -lh {} \\;`, { encoding: 'utf8' });
      if (largeFiles.trim()) {
        console.log('   ⚠️  Large files detected:');
        console.log(largeFiles);
      } else {
        console.log('   ✅ No large files detected');
      }
    } else {
      console.log('   ⚠️  Build directory not found. Run "npm run build" first.');
    }
  } catch (error) {
    console.log('   ❌ Error checking build size:', error.message);
  }
}

// Check bundle analysis
function checkBundleAnalysis() {
  console.log('\n📦 Checking bundle analysis...');
  try {
    const buildDir = path.join(__dirname, '..', '.next');
    if (fs.existsSync(buildDir)) {
      const staticDir = path.join(buildDir, 'static');
      if (fs.existsSync(staticDir)) {
        const chunks = fs.readdirSync(staticDir).filter(f => f.startsWith('chunks'));
        console.log(`   Found ${chunks.length} chunk files`);
        
        // Check for duplicate dependencies
        const packageJson = JSON.parse(fs.readFileSync(path.join(__dirname, '..', 'package.json'), 'utf8'));
        const deps = Object.keys(packageJson.dependencies || {});
        const devDeps = Object.keys(packageJson.devDependencies || {});
        
        console.log(`   Dependencies: ${deps.length}`);
        console.log(`   Dev dependencies: ${devDeps.length}`);
        
        // Check for potential duplicates
        const allDeps = [...deps, ...devDeps];
        const duplicates = allDeps.filter((dep, index) => allDeps.indexOf(dep) !== index);
        if (duplicates.length > 0) {
          console.log('   ⚠️  Potential duplicate dependencies:', duplicates);
        } else {
          console.log('   ✅ No duplicate dependencies found');
        }
      }
    }
  } catch (error) {
    console.log('   ❌ Error checking bundle analysis:', error.message);
  }
}

// Check performance metrics
function checkPerformanceMetrics() {
  console.log('\n⚡ Checking performance metrics...');
  try {
    // Check if we can run lighthouse
    try {
      execSync('which lighthouse', { stdio: 'ignore' });
      console.log('   ✅ Lighthouse available for performance testing');
    } catch {
      console.log('   ℹ️  Lighthouse not available (install with: npm install -g lighthouse)');
    }
    
    // Check Next.js build output
    const buildDir = path.join(__dirname, '..', '.next');
    if (fs.existsSync(buildDir)) {
      const buildManifest = path.join(buildDir, 'build-manifest.json');
      if (fs.existsSync(buildManifest)) {
        const manifest = JSON.parse(fs.readFileSync(buildManifest, 'utf8'));
        console.log(`   Pages built: ${Object.keys(manifest.pages).length}`);
        console.log(`   Static pages: ${Object.keys(manifest.pages).filter(p => p.startsWith('/_')).length}`);
      }
    }
  } catch (error) {
    console.log('   ❌ Error checking performance metrics:', error.message);
  }
}

// Check security
function checkSecurity() {
  console.log('\n🔒 Checking security...');
  try {
    execSync('npm audit --audit-level=moderate', { stdio: 'pipe' });
    console.log('   ✅ No security vulnerabilities found');
  } catch (error) {
    console.log('   ⚠️  Security vulnerabilities detected. Run "npm audit fix" to resolve.');
  }
}

// Main execution
async function main() {
  checkBuildSize();
  checkBundleAnalysis();
  checkPerformanceMetrics();
  checkSecurity();
  
  console.log('\n🎉 Performance check completed!');
  console.log('\n💡 Recommendations:');
  console.log('   - Run "npm run build:analyze" for detailed bundle analysis');
  console.log('   - Use "npm run clean" before building for fresh builds');
  console.log('   - Monitor the /api/health endpoint for runtime metrics');
  console.log('   - Consider implementing service worker for caching');
}

main().catch(console.error);
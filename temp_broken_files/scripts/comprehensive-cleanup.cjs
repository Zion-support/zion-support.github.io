#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

console.log('🧹 Starting comprehensive cleanup...');

// Directories to clean up
const cleanupDirs = [
  'automation_backup',
  'data_backup',
  'pages._archive_corrupted',
  'pages.disabled.full'
];

// Files to remove (corrupted or unnecessary)
const filesToRemove = [
  'automation/intelligent-orchestrator.js',
  'automation/lint-automation-manager.js',
  'automation/lint-error-fixer.js',
  'automation/lint-monitor.js',
  'automation/linting-automation.js',
  'automation/performance-optimizer.js',
  'automation/security-scanner.js',
  'automation/test-cursor-automation.js',
  'basic-test.js',
  'code-quality-checker.js',
  'code-quality-improvements.js',
  'commit-and-push.js',
  'comprehensive-automation-runner.js',
  'comprehensive-automation.js',
  'comprehensive-fix.js',
  'comprehensive-merge-resolver.js',
  'comprehensive-syntax-fix.js',
  'critical-fix.js',
  'ecosystem.working.js',
  'eslint.config.disabled.js',
  'execute-automation.js',
  'final-comprehensive-fix.js',
  'final-fix.js',
  'fix_all_function_names.js',
  'fix_corrupted_files.js',
  'fix_empty_pages.js',
  'fix_typescript_syntax_errors.jsx',
  'fix_utils_files.js',
  'fix_variable_names.js',
  'health-endpoint.js',
  'improve-app.js',
  'maintenance-scheduler.js',
  'merge-fix.js',
  'merge-resolver.js',
  'monitoring-system.js',
  'optimized-build.js',
  'performance-optimization.js',
  'performance-optimizations.js',
  'seo-improvements.js',
  'simple-test.js',
  'test-automation.js'
];

// Remove directories
console.log('📁 Removing backup directories...');
cleanupDirs.forEach(dir => {
  const dirPath = path.join(process.cwd(), dir);
  if (fs.existsSync(dirPath)) {
    try {
      fs.rmSync(dirPath, { recursive: true, force: true });
      console.log(`✅ Removed directory: ${dir}`);
    } catch (error) {
      console.log(`⚠️  Could not remove directory ${dir}: ${error.message}`);
    }
  }
});

// Remove corrupted files
console.log('🗑️  Removing corrupted files...');
filesToRemove.forEach(file => {
  const filePath = path.join(process.cwd(), file);
  if (fs.existsSync(filePath)) {
    try {
      fs.unlinkSync(filePath);
      console.log(`✅ Removed file: ${file}`);
    } catch (error) {
      console.log(`⚠️  Could not remove file ${file}: ${error.message}`);
    }
  }
});

// Fix remaining automation files
console.log('🔧 Fixing remaining automation files...');
const automationFiles = [
  'automation/intelligent-error-fixer.js',
  'automation/comprehensive-source-fixer.js'
];

automationFiles.forEach(file => {
  const filePath = path.join(process.cwd(), file);
  if (fs.existsSync(filePath)) {
    try {
      let content = fs.readFileSync(filePath, 'utf8');
      
      // Add Node.js environment comment at the top
      if (!content.includes('/* eslint-env node */')) {
        content = '/* eslint-env node */\n' + content;
      }
      
      // Fix module.exports issues
      content = content.replace(/module\.exports\s*=/g, 'module.exports =');
      
      fs.writeFileSync(filePath, content);
      console.log(`✅ Fixed file: ${file}`);
    } catch (error) {
      console.log(`⚠️  Could not fix file ${file}: ${error.message}`);
    }
  }
});

// Clean up scripts directory
console.log('🧽 Cleaning up scripts directory...');
const scriptsToClean = [
  'scripts/advanced-build-optimizer.js',
  'scripts/advanced-monitor.js',
  'scripts/analyze-bundle.js',
  'scripts/app-health-monitor.js',
  'scripts/auto-fixer.js',
  'scripts/automated-testing-suite.js',
  'scripts/automation-dashboard.js',
  'scripts/automation-manager.js',
  'scripts/automation-orchestrator-improved.js',
  'scripts/automation-wrapper.js',
  'scripts/ci-cd-pipeline.js',
  'scripts/clean-console-statements.js',
  'scripts/comprehensive-app-improver.js',
  'scripts/comprehensive-link-checker.js',
  'scripts/comprehensive-test-automation.js',
  'scripts/comprehensive-website-analysis.js',
  'scripts/comprehensive-website-analyzer.js',
  'scripts/continuous-improvement.js',
  'scripts/dependency-manager.js',
  'scripts/dependency-updater.js',
  'scripts/deployment-automation-improved.js',
  'scripts/deployment-automation.js',
  'scripts/error-monitor-broken.js',
  'scripts/error-monitor.js',
  'scripts/final-automation-suite.js',
  'scripts/fix-all-syntax-errors.js',
  'scripts/fix-layout-conflicts.js',
  'scripts/fix-linting-issues.js',
  'scripts/front-maximizer.js',
  'scripts/generate-search-index.js',
  'scripts/health-check.js',
  'scripts/health-checker.js',
  'scripts/link-checker.js',
  'scripts/link-integrity-checker.js',
  'scripts/lint-checker.js',
  'scripts/log-cleaner.js',
  'scripts/log-manager.js',
  'scripts/optimize-build.js',
  'scripts/optimize-images.js',
  'scripts/optimize-imports.js',
  'scripts/performance-monitor-improved.js',
  'scripts/performance-monitor.js',
  'scripts/performance-optimizer-enhanced.js',
  'scripts/performance-optimizer.js',
  'scripts/pm2-start.js',
  'scripts/prerender.js',
  'scripts/resolve-merge-conflicts.js',
  'scripts/security-auditor.js',
  'scripts/security-monitor.js',
  'scripts/seo-optimizer.js',
  'scripts/syntax-fixer.js',
  'scripts/test-runner.js',
  'scripts/typescript-improver.js',
  'scripts/website-analyzer.js'
];

scriptsToClean.forEach(file => {
  const filePath = path.join(process.cwd(), file);
  if (fs.existsSync(filePath)) {
    try {
      fs.unlinkSync(filePath);
      console.log(`✅ Removed script: ${file}`);
    } catch (error) {
      console.log(`⚠️  Could not remove script ${file}: ${error.message}`);
    }
  }
});

// Clean up PM2 automation directory
console.log('🧹 Cleaning up PM2 automation directory...');
const pm2Dir = path.join(process.cwd(), 'scripts/pm2');
if (fs.existsSync(pm2Dir)) {
  try {
    fs.rmSync(pm2Dir, { recursive: true, force: true });
    console.log('✅ Removed PM2 automation directory');
  } catch (error) {
    console.log(`⚠️  Could not remove PM2 directory: ${error.message}`);
  }
}

// Clean up automation directory
console.log('🧹 Cleaning up automation directory...');
const automationDir = path.join(process.cwd(), 'automation');
if (fs.existsSync(automationDir)) {
  try {
    fs.rmSync(automationDir, { recursive: true, force: true });
    console.log('✅ Removed automation directory');
  } catch (error) {
    console.log(`⚠️  Could not remove automation directory: ${error.message}`);
  }
}

// Clean up PM2 automation root directory
console.log('🧹 Cleaning up PM2 automation root directory...');
const pm2AutomationDir = path.join(process.cwd(), 'pm2-automation');
if (fs.existsSync(pm2AutomationDir)) {
  try {
    fs.rmSync(pm2AutomationDir, { recursive: true, force: true });
    console.log('✅ Removed PM2 automation root directory');
  } catch (error) {
    console.log(`⚠️  Could not remove PM2 automation directory: ${error.message}`);
  }
}

// Remove other problematic files
const otherFilesToRemove = [
  'build-verification.js',
  'check-syntax.js',
  'clean-conflicts.js',
  'comprehensive-source-fixer.js',
  'merge-prs.js',
  'resolve-conflicts.js',
  'run-automation-safely.js',
  'run-automation.js',
  'run-complete-automation.js',
  'security-config.js',
  'tests/performance.test.js'
];

otherFilesToRemove.forEach(file => {
  const filePath = path.join(process.cwd(), file);
  if (fs.existsSync(filePath)) {
    try {
      fs.unlinkSync(filePath);
      console.log(`✅ Removed file: ${file}`);
    } catch (error) {
      console.log(`⚠️  Could not remove file ${file}: ${error.message}`);
    }
  }
});

console.log('✅ Comprehensive cleanup completed!');
console.log('🎯 Next steps:');
console.log('1. Run npm run lint:check to verify remaining issues');
console.log('2. Run npm run build to test the application');
console.log('3. Commit the cleanup changes');
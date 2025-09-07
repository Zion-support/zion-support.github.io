#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs');

console.log('🚀 Running comprehensive automation...');

// Function to run a command safely
function runCommand(command, description) {
  try {
    console.log(`🔄 ${description}...`);
    const result = execSync(command, { cwd: '/workspace', stdio: 'pipe' });
    console.log(`✅ ${description} completed`);
    return { success: true, output: result.toString() };
  } catch (error) {
    console.log(`❌ ${description} failed: ${error.message}`);
    return { success: false, error: error.message };
  }
}

// Main automation tasks
async function runAutomation() {
  const results = [];
  
  // Run linting
  results.push(runCommand('npm run lint:fix', 'Linting'));
  
  // Run type checking
  results.push(runCommand('npm run type-check', 'Type checking'));
  
  // Run tests
  results.push(runCommand('npm run test:smoke', 'Smoke tests'));
  
  // Run build
  results.push(runCommand('npm run build', 'Build'));
  
  // Generate report
  const report = {
    timestamp: new Date().toISOString(),
    results: results,
    summary: {
      total: results.length,
      successful: results.filter(r => r.success).length,
      failed: results.filter(r => !r.success).length
    }
  };
  
  fs.writeFileSync('/workspace/automation-report.json', JSON.stringify(report, null, 2));
  console.log('📄 Report saved to automation-report.json');
  
  console.log(`\n📊 Summary: ${report.summary.successful}/${report.summary.total} tasks completed successfully`);
}

runAutomation().catch(console.error);

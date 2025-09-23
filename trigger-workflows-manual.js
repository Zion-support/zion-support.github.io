#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

class WorkflowTriggerGuide {
  constructor() {
    this.workflowsDir = path.join(__dirname, '.github', 'workflows');
    this.categories = {
      'ci-cd': ['ci', 'build', 'deploy', 'release'],
      'testing': ['test', 'playwright', 'smoke'],
      'security': ['security', 'audit', 'scan', 'gitleaks'],
      'quality': ['lint', 'type-check', 'format'],
      'performance': ['performance', 'lighthouse', 'pa11y'],
      'automation': ['auto', 'autonomous', 'workflow'],
      'maintenance': ['maintenance', 'cleanup', 'deps'],
      'monitoring': ['monitor', 'health', 'watchdog']
    };
  }

  categorizeWorkflow(filename) {
    const lowerName = filename.toLowerCase();
    
    for (const [category, keywords] of Object.entries(this.categories)) {
      if (keywords.some(keyword => lowerName.includes(keyword))) {
        return category;
      }
    }
    
    return 'other';
  }

  generateTriggerGuide() {
    console.log('🚀 GitHub Actions Workflow Trigger Guide\n');
    console.log('This guide shows you how to trigger workflows manually once they\'re pushed to GitHub.\n');
    
    const workflowFiles = fs.readdirSync(this.workflowsDir)
      .filter(f => f.endsWith('.yml') || f.endsWith('.yaml'))
      .filter(f => !f.startsWith('backup-'))
      .sort();

    const categorizedWorkflows = {};
    
    // Categorize workflows
    workflowFiles.forEach(filename => {
      const category = this.categorizeWorkflow(filename);
      if (!categorizedWorkflows[category]) {
        categorizedWorkflows[category] = [];
      }
      categorizedWorkflows[category].push(filename);
    });

    // Display categorized workflows with trigger instructions
    Object.entries(categorizedWorkflows)
      .sort(([,a], [,b]) => b.length - a.length)
      .forEach(([category, workflows]) => {
        console.log(`📁 ${category.toUpperCase()} WORKFLOWS (${workflows.length}):`);
        workflows.forEach(workflow => {
          console.log(`  • ${workflow}`);
        });
        console.log('');
      });

    console.log('='.repeat(60));
    console.log('🔧 HOW TO TRIGGER WORKFLOWS');
    console.log('='.repeat(60));
    console.log('');
    console.log('1. PUSH TO GITHUB:');
    console.log('   git add .github/workflows/');
    console.log('   git commit -m "Fix GitHub Actions workflows - add missing runs_on"');
    console.log('   git push origin cursor/run-and-fix-github-actions-workflows-46b5');
    console.log('');
    console.log('2. MANUAL TRIGGER (GitHub UI):');
    console.log('   • Go to Actions tab in your GitHub repository');
    console.log('   • Select a workflow from the left sidebar');
    console.log('   • Click "Run workflow" button');
    console.log('   • Choose branch and click "Run workflow"');
    console.log('');
    console.log('3. MANUAL TRIGGER (GitHub CLI):');
    console.log('   • Install GitHub CLI: https://cli.github.com/');
    console.log('   • Authenticate: gh auth login');
    console.log('   • Trigger workflow: gh workflow run <workflow-name>');
    console.log('');
    console.log('4. RECOMMENDED TESTING ORDER:');
    console.log('   1. test.yml (basic functionality)');
    console.log('   2. security-scan.yml (security checks)');
    console.log('   3. ci.yml (CI/CD pipeline)');
    console.log('   4. playwright-smoke.yml (end-to-end tests)');
    console.log('   5. Other workflows as needed');
    console.log('');
    console.log('5. MONITORING:');
    console.log('   • Check Actions tab for workflow runs');
    console.log('   • Review logs for any errors');
    console.log('   • Fix any remaining issues');
    console.log('');
    console.log('6. AUTOMATION:');
    console.log('   • Use the trigger-workflows.cjs script with a GitHub token');
    console.log('   • Set GH_TOKEN environment variable');
    console.log('   • Run: node scripts/trigger-workflows.cjs --wait');
    console.log('');

    // Generate a simple test script
    this.generateTestScript();
  }

  generateTestScript() {
    const testScript = `#!/bin/bash
# Simple script to test workflows locally before pushing to GitHub

echo "🧪 Testing GitHub Actions Workflows Locally"

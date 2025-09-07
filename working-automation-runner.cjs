#!/usr/bin/env node
const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

class WorkingAutomationRunner {
  constructor() {
    this.projectRoot = process.cwd();
    this.results = [];
    this.startTime = Date.now();
  }

  log(message, type = 'INFO') {
    const timestamp = new Date().toISOString();
    const prefix = {
      'INFO': 'ℹ️',
      'SUCCESS': '✅',
      'ERROR': '❌',
      'WARNING': '⚠️',
      'PROGRESS': '🔄'
    }[type] || 'ℹ️';
    console.log(`${prefix} [${timestamp}] ${message}`);
  }

  async runCommand(command, description) {
    this.log(`Running: ${description}`, 'PROGRESS');
    try {
      const result = execSync(command, {
        cwd: this.projectRoot,
        stdio: 'pipe',
        encoding: 'utf8',
        timeout: 300000
      });
      this.log(`${description} completed successfully`, 'SUCCESS');
      this.results.push({ command, description, success: true, output: result });
      return { success: true, output: result };
    } catch (error) {
      this.log(`${description} failed: ${error.message}`, 'ERROR');
      this.results.push({ command, description, success: false, error: error.message });
      return { success: false, error: error.message };
    }
  }

  async runScript(scriptPath, description) {
    this.log(`Running script: ${description}`, 'PROGRESS');
    try {
      if (fs.existsSync(scriptPath)) {
        const result = execSync(`node ${scriptPath}`, {
          cwd: this.projectRoot,
          stdio: 'pipe',
          encoding: 'utf8',
          timeout: 300000
        });
        this.log(`${description} completed successfully`, 'SUCCESS');
        this.results.push({ script: scriptPath, success: true, description });
        return { success: true, output: result };
      } else {
        this.log(`Script not found: ${scriptPath}`, 'WARNING');
        this.results.push({ script: scriptPath, success: false, description, error: 'File not found' });
        return { success: false, error: 'File not found' };
      }
    } catch (error) {
      this.log(`${description} failed: ${error.message}`, 'ERROR');
      this.results.push({ script: scriptPath, success: false, description, error: error.message });
      return { success: false, error: error.message };
    }
  }

  async runAllAutomations() {
    this.log('🚀 Starting Working Automation Runner');
    this.log('='.repeat(60));

    // First, let's run basic npm commands
    const npmCommands = [
      { cmd: 'npm install', desc: 'Install dependencies' },
      { cmd: 'npm run lint:fix', desc: 'Fix linting issues' },
      { cmd: 'npm run type-check', desc: 'Type check' },
      { cmd: 'npm run build', desc: 'Build application' },
      { cmd: 'npm test -- --passWithNoTests', desc: 'Run tests' }
    ];

    for (const cmd of npmCommands) {
      await this.runCommand(cmd.cmd, cmd.desc);
    }

    // Now let's try to run some working automation scripts
    const workingScripts = [
      { path: 'comprehensive-syntax-fixer.cjs', desc: 'Comprehensive Syntax Fixer' },
      { path: 'comprehensive-test-runner.cjs', desc: 'Comprehensive Test Runner' },
      { path: 'deployment-automation.cjs', desc: 'Deployment Automation' },
      { path: 'system-monitor.cjs', desc: 'System Monitor' }
    ];

    for (const script of workingScripts) {
      await this.runScript(script.path, script.desc);
    }

    this.generateReport();
  }

  generateReport() {
    const totalDuration = Date.now() - this.startTime;
    const successful = this.results.filter(r => r.success).length;
    const failed = this.results.filter(r => !r.success).length;

    this.log('\n📊 AUTOMATION RUNNER REPORT');
    this.log('='.repeat(60));
    this.log(`Total Duration: ${Math.round(totalDuration / 1000)}s`);
    this.log(`Successful: ${successful}`);
    this.log(`Failed: ${failed}`);

    if (failed > 0) {
      this.log('\n❌ Failed operations:');
      this.results.filter(r => !r.success).forEach(result => {
        this.log(`  - ${result.description}: ${result.error}`);
      });
    }

    const report = {
      timestamp: new Date().toISOString(),
      duration: `${Math.round(totalDuration / 1000)}s`,
      summary: {
        total: this.results.length,
        successful,
        failed,
        successRate: Math.round((successful / this.results.length) * 100)
      },
      results: this.results
    };

    fs.writeFileSync('working-automation-report.json', JSON.stringify(report, null, 2));
    this.log(`\n📊 Report saved to: working-automation-report.json`);
  }
}

const runner = new WorkingAutomationRunner();
runner.runAllAutomations().catch(console.error);

module.exports = WorkingAutomationRunner;
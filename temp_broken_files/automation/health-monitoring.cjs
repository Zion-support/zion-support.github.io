#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

console.log('🏥 Health Monitoring System Starting...');

class HealthMonitoring {
  constructor() {
    this.logFile = '/workspace/automation/logs/health-monitoring.log';
    this.ensureLogDir();
  }

  ensureLogDir() {
    const logDir = path.dirname(this.logFile);
    if (!fs.existsSync(logDir)) {
      fs.mkdirSync(logDir, { recursive: true });
    }
  }

  log(message) {
    const timestamp = new Date().toISOString();
    const logMessage = `[${timestamp}] ${message}\n`;
    console.log(message);
    fs.appendFileSync(this.logFile, logMessage);
  }

  async runCommand(command, description) {
    try {
      this.log(`Running: ${description}`);
      const result = execSync(command, {
        cwd: '/workspace',
        encoding: 'utf8',
        stdio: 'pipe',
      });
      this.log(`✅ ${description} completed successfully`);
      return { success: true, output: result };
    } catch (error) {
      this.log(`❌ ${description} failed: ${error.message}`);
      return { success: false, error: error.message };
    }
  }

  async checkSystemHealth() {
    this.log('🔍 Checking system health...');

    const healthChecks = [
      { cmd: 'npm run automation:status', desc: 'Automation Status' },
      { cmd: 'npm run test:smoke', desc: 'Smoke Tests' },
      { cmd: 'npm run build', desc: 'Build Health' },
      { cmd: 'npm run lint:check', desc: 'Code Quality' },
    ];

    const results = [];
    for (const check of healthChecks) {
      const result = await this.runCommand(check.cmd, check.desc);
      results.push({ ...check, ...result });
    }

    return results;
  }

  async checkDependencies() {
    this.log('📦 Checking dependencies...');

    const depChecks = [
      { cmd: 'npm list --depth=0', desc: 'Dependency List' },
      { cmd: 'npm audit --audit-level moderate', desc: 'Security Audit' },
    ];

    const results = [];
    for (const check of depChecks) {
      const result = await this.runCommand(check.cmd, check.desc);
      results.push({ ...check, ...result });
    }

    return results;
  }

  async checkPerformance() {
    this.log('⚡ Checking performance...');

    const perfChecks = [
      { cmd: 'npm run build:analyze', desc: 'Bundle Analysis' },
      { cmd: 'npm run perf:audit', desc: 'Performance Audit' },
    ];

    const results = [];
    for (const check of perfChecks) {
      const result = await this.runCommand(check.cmd, check.desc);
      results.push({ ...check, ...result });
    }

    return results;
  }

  async generateHealthReport(results) {
    this.log('📋 Generating health report...');

    const report = {
      timestamp: new Date().toISOString(),
      summary: {
        totalChecks: results.length,
        passed: results.filter(r => r.success).length,
        failed: results.filter(r => !r.success).length,
        healthScore: Math.round(
          (results.filter(r => r.success).length / results.length) * 100
        ),
      },
      details: results,
    };

    const reportFile = '/workspace/automation/logs/health-report.json';
    fs.writeFileSync(reportFile, JSON.stringify(report, null, 2));

    this.log(`📊 Health report generated: ${reportFile}`);
    return report;
  }

  async run() {
    try {
      this.log('🏥 Starting Health Monitoring System');

      // Run all health checks
      const healthResults = await this.checkSystemHealth();
      const depResults = await this.checkDependencies();
      const perfResults = await this.checkPerformance();

      // Combine all results
      const allResults = [...healthResults, ...depResults, ...perfResults];

      // Generate health report
      const report = await this.generateHealthReport(allResults);

      this.log('✅ Health Monitoring System completed successfully');
      return report;
    } catch (error) {
      this.log(`❌ Health Monitoring System failed: ${error.message}`);
      throw error;
    }
  }
}

// Run the health monitoring
if (require.main === module) {
  const monitoring = new HealthMonitoring();
  monitoring
    .run()
    .then(report => {
      console.log('📊 Health Report:', JSON.stringify(report.summary, null, 2));
      process.exit(0);
    })
    .catch(error => {
      console.error('❌ Health monitoring failed:', error.message);
      process.exit(1);
    });
}

module.exports = HealthMonitoring;

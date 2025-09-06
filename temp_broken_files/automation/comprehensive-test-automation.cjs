#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

console.log('🧪 Starting Comprehensive Test Automation...');

class ComprehensiveTestAutomation {
  constructor() {
    this.results = {
      timestamp: new Date().toISOString(),
      tests: {},
      coverage: {},
      performance: {},
      accessibility: {},
      security: {},
      overall: { status: 'unknown', score: 0 }
    };
    this.reportPath = path.join(__dirname, '..', 'automation-reports', 'test-automation-report.json');
    this.ensureReportDir();
  }

  ensureReportDir() {
    const reportDir = path.dirname(this.reportPath);
    if (!fs.existsSync(reportDir)) {
      fs.mkdirSync(reportDir, { recursive: true });
    }
  }

  async runCommand(command, description) {
    try {
      console.log(`🚀 ${description}`);
      const result = execSync(command, {
        encoding: 'utf8',
        stdio: 'pipe',
        cwd: path.join(__dirname, '..'),
        timeout: 300000 // 5 minutes
      });
      console.log(`✅ ${description} - Success`);
      return { success: true, result };
    } catch (error) {
      console.log(`❌ ${description} - Failed: ${error.message}`);
      return { success: false, error: error.message };
    }
  }

  async runUnitTests() {
    console.log('🔬 Running Unit Tests...');
    
    const testCommands = [
      { cmd: 'npm run test:smoke', desc: 'Smoke tests' },
      { cmd: 'npm run test:unit', desc: 'Unit tests' },
      { cmd: 'npm run test:coverage', desc: 'Test coverage' }
    ];

    for (const { cmd, desc } of testCommands) {
      const result = await this.runCommand(cmd, desc);
      this.results.tests[desc] = result;
    }
  }

  async runIntegrationTests() {
    console.log('🔗 Running Integration Tests...');
    
    const integrationCommands = [
      { cmd: 'npm run test:integration', desc: 'Integration tests' },
      { cmd: 'npm run test:e2e', desc: 'End-to-end tests' }
    ];

    for (const { cmd, desc } of integrationCommands) {
      const result = await this.runCommand(cmd, desc);
      this.results.tests[desc] = result;
    }
  }

  async runPerformanceTests() {
    console.log('⚡ Running Performance Tests...');
    
    const perfCommands = [
      { cmd: 'npm run build:analyze', desc: 'Bundle analysis' },
      { cmd: 'npm run perf:audit', desc: 'Performance audit' },
      { cmd: 'npm run perf:lighthouse', desc: 'Lighthouse audit' }
    ];

    for (const { cmd, desc } of perfCommands) {
      const result = await this.runCommand(cmd, desc);
      this.results.performance[desc] = result;
    }
  }

  async runAccessibilityTests() {
    console.log('♿ Running Accessibility Tests...');
    
    const a11yCommands = [
      { cmd: 'npm run test:accessibility', desc: 'Accessibility tests' },
      { cmd: 'npm run automation:accessibility', desc: 'Accessibility automation' }
    ];

    for (const { cmd, desc } of a11yCommands) {
      const result = await this.runCommand(cmd, desc);
      this.results.accessibility[desc] = result;
    }
  }

  async runSecurityTests() {
    console.log('🔒 Running Security Tests...');
    
    const securityCommands = [
      { cmd: 'npm audit', desc: 'Security audit' },
      { cmd: 'npm run security:audit', desc: 'Enhanced security audit' },
      { cmd: 'npm run automation:security-audit', desc: 'Security automation' }
    ];

    for (const { cmd, desc } of securityCommands) {
      const result = await this.runCommand(cmd, desc);
      this.results.security[desc] = result;
    }
  }

  calculateOverallScore() {
    let totalScore = 0;
    let maxScore = 0;

    // Test results (40% weight)
    const testScore = this.calculateCategoryScore(this.results.tests);
    totalScore += testScore * 0.4;
    maxScore += 100 * 0.4;

    // Performance results (25% weight)
    const perfScore = this.calculateCategoryScore(this.results.performance);
    totalScore += perfScore * 0.25;
    maxScore += 100 * 0.25;

    // Accessibility results (20% weight)
    const a11yScore = this.calculateCategoryScore(this.results.accessibility);
    totalScore += a11yScore * 0.2;
    maxScore += 100 * 0.2;

    // Security results (15% weight)
    const securityScore = this.calculateCategoryScore(this.results.security);
    totalScore += securityScore * 0.15;
    maxScore += 100 * 0.15;

    const finalScore = Math.round((totalScore / maxScore) * 100);
    this.results.overall.score = finalScore;
    this.results.overall.status = finalScore >= 80 ? 'excellent' :
                                 finalScore >= 60 ? 'good' :
                                 finalScore >= 40 ? 'fair' : 'poor';

    return finalScore;
  }

  calculateCategoryScore(category) {
    if (!category || Object.keys(category).length === 0) return 0;

    const results = Object.values(category);
    const successCount = results.filter(r => r.success).length;
    return Math.round((successCount / results.length) * 100);
  }

  generateRecommendations() {
    const recommendations = [];

    // Test recommendations
    Object.entries(this.results.tests).forEach(([test, result]) => {
      if (!result.success) {
        recommendations.push(`Fix ${test}: ${result.error}`);
      }
    });

    // Performance recommendations
    Object.entries(this.results.performance).forEach(([test, result]) => {
      if (!result.success) {
        recommendations.push(`Optimize ${test}: ${result.error}`);
      }
    });

    // Accessibility recommendations
    Object.entries(this.results.accessibility).forEach(([test, result]) => {
      if (!result.success) {
        recommendations.push(`Improve accessibility in ${test}: ${result.error}`);
      }
    });

    // Security recommendations
    Object.entries(this.results.security).forEach(([test, result]) => {
      if (!result.success) {
        recommendations.push(`Address security issue in ${test}: ${result.error}`);
      }
    });

    return recommendations;
  }

  async saveReport() {
    this.results.recommendations = this.generateRecommendations();
    this.results.overall.score = this.calculateOverallScore();

    fs.writeFileSync(this.reportPath, JSON.stringify(this.results, null, 2));
    console.log(`📊 Report saved to: ${this.reportPath}`);
  }

  async run() {
    try {
      console.log('🎯 Starting comprehensive test automation...');

      await this.runUnitTests();
      await this.runIntegrationTests();
      await this.runPerformanceTests();
      await this.runAccessibilityTests();
      await this.runSecurityTests();

      const score = this.calculateOverallScore();
      await this.saveReport();

      console.log('='.repeat(50));
      console.log(`🎯 Overall Test Score: ${score}/100 (${this.results.overall.status})`);
      console.log('📊 Detailed results saved to automation-reports/test-automation-report.json');

      if (score < 80) {
        console.log('⚠️  Some tests need attention. Check recommendations.');
      } else {
        console.log('✅ All tests performing well!');
      }

    } catch (error) {
      console.error(`❌ Test automation failed: ${error.message}`);
      throw error;
    }
  }
}

// Run the test automation
const testAutomation = new ComprehensiveTestAutomation();
testAutomation.run().catch(console.error);
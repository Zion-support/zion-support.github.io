#!/usr/bin/env node

/**
 * Comprehensive Test Suite
 * Tests all aspects of the application
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

class TestSuite {
  constructor() {
    this.results = {
      passed: 0,
      failed: 0,
      tests: []
    };
  }

  log(message, type = 'INFO') {
    const icons = {
      'INFO': 'ℹ️',
      'SUCCESS': '✅',
      'ERROR': '❌',
      'WARNING': '⚠️'
    };
    
    console.log(`${icons[type]} ${message}`);
  }

  test(name, testFn) {
    try {
      const result = testFn();
      if (result) {
        this.results.passed++;
        this.results.tests.push({ name, status: 'PASS' });
        this.log(`${name} - PASSED`, 'SUCCESS');
      } else {
        this.results.failed++;
        this.results.tests.push({ name, status: 'FAIL' });
        this.log(`${name} - FAILED`, 'ERROR');
      }
    } catch (error) {
      this.results.failed++;
      this.results.tests.push({ name, status: 'ERROR', error: error.message });
      this.log(`${name} - ERROR: ${error.message}`, 'ERROR');
    }
  }

  testFileExists(description, filePath) {
    this.test(`${description} - File exists`, () => {
      return fs.existsSync(filePath);
    });
  }

  testFileContent(description, filePath, validator) {
    this.test(`${description} - File content valid`, () => {
      if (!fs.existsSync(filePath)) return false;
      const content = fs.readFileSync(filePath, 'utf8');
      return validator(content);
    });
  }

  testCommand(description, command) {
    this.test(`${description} - Command execution`, () => {
      try {
        execSync(command, { stdio: 'pipe' });
        return true;
      } catch (error) {
        return false;
      }
    });
  }

  async runAllTests() {
    console.log('🧪 Starting Comprehensive Test Suite...\n');

    // Test package.json
    this.testFileExists('Package.json exists', 'package.json');
    this.testFileContent('Package.json is valid JSON', 'package.json', (content) => {
      try {
        JSON.parse(content);
        return true;
      } catch {
        return false;
      }
    });

    // Test Next.js configuration
    this.testFileExists('Next.js config exists', 'next.config.js');
    this.testFileExists('TypeScript config exists', 'tsconfig.json');

    // Test automation scripts
    this.testFileExists('Master orchestrator exists', 'automation/master-orchestrator.cjs');
    this.testFileExists('Automation status checker exists', 'automation/check_automation_status.js');

    // Test build process
    this.testCommand('TypeScript compilation', 'npx tsc --noEmit');
    this.testCommand('ESLint check', 'npx eslint . --max-warnings 0');

    // Test automation scripts execution
    this.testCommand('Automation status check', 'node automation/check_automation_status.js');

    // Test PM2 availability
    this.testCommand('PM2 is available', 'pm2 --version');

    // Test file permissions
    this.test('Automation scripts are executable', () => {
      const scripts = [
        'automation/master-orchestrator.cjs',
        'automation/check_automation_status.js'
      ];
      
      return scripts.every(script => {
        if (!fs.existsSync(script)) return false;
        const stats = fs.statSync(script);
        return (stats.mode & parseInt('111', 8)) !== 0;
      });
    });

    // Test directory structure
    this.test('Required directories exist', () => {
      const dirs = ['pages', 'automation', 'tests', 'lib'];
      return dirs.every(dir => fs.existsSync(dir) && fs.statSync(dir).isDirectory());
    });

    // Test environment
    this.test('Node.js version is compatible', () => {
      const version = process.version;
      const majorVersion = parseInt(version.slice(1).split('.')[0]);
      return majorVersion >= 18;
    });

    // Test memory usage
    this.test('Memory usage is reasonable', () => {
      const memUsage = process.memoryUsage();
      const heapUsedMB = memUsage.heapUsed / 1024 / 1024;
      return heapUsedMB < 1000; // Less than 1GB
    });

    this.generateReport();
  }

  generateReport() {
    const totalTests = this.results.passed + this.results.failed;
    const successRate = totalTests > 0 ? (this.results.passed / totalTests * 100).toFixed(2) : 0;

    console.log('\n📊 Test Results Summary:');
    console.log(`   Total Tests: ${totalTests}`);
    console.log(`   Passed: ${this.results.passed}`);
    console.log(`   Failed: ${this.results.failed}`);
    console.log(`   Success Rate: ${successRate}%`);

    // Save detailed report
    const report = {
      timestamp: new Date().toISOString(),
      summary: {
        total: totalTests,
        passed: this.results.passed,
        failed: this.results.failed,
        successRate: parseFloat(successRate)
      },
      tests: this.results.tests,
      environment: {
        nodeVersion: process.version,
        platform: process.platform,
        memoryUsage: process.memoryUsage()
      }
    };

    const reportPath = 'test-results.json';
    fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
    console.log(`\n📄 Detailed report saved to: ${reportPath}`);

    if (this.results.failed > 0) {
      console.log('\n❌ Some tests failed. Please check the details above.');
      process.exit(1);
    } else {
      console.log('\n✅ All tests passed!');
      process.exit(0);
    }
  }
}

// Run tests if called directly
if (require.main === module) {
  const testSuite = new TestSuite();
  testSuite.runAllTests().catch(error => {
    console.error('Fatal error in test suite:', error);
    process.exit(1);
  });
}

module.exports = TestSuite;
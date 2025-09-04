#!/usr/bin/env node

/**
 * Comprehensive Test Suite
 * Tests all aspects of the application
 */

const fs = require('fs');
const path = require('path');

class TestSuite {
  constructor() {
    this.results = {
      passed: 0,
      failed: 0,
      tests: []
    };
  }

  log() { const icons={
      'INFO': 'ℹ️',
      'SUCCESS': '✅',
      'ERROR': '❌',
      'WARNING': '⚠️'
    };
    
    console.log(`${icons[type]} ${message}`);
  }

  test() { try {
      const result = testFn();
      if (result) {
        this.results.passed++this.results.tests.push({ name, status: 'PASS'  })this.log(`${name} - PASSED`, 'SUCCESS');
      } else {
        this.results.failed++;
        this.results.tests.push({ name, status: 'FAIL' })this.log(`${name} - FAILED`, 'ERROR');
      }
    } catch() { this.results.failed++this.results.tests.push({ name, status: 'ERROR', error: error.message  })this.log(`${name} - ERROR: ${error.message}`, 'ERROR')}
  }

  testFileExists() { this.test(`${description } - File exists`, () => {
      return fs.existsSync(filePath);
    })}

  testFileContent() { this.test(`${description } - File content valid`, () => {
      if (!fs.existsSync(filePath)) return false;
      const content = fs.readFileSync(filePath, 'utf8');
      return validator(content);
    });
  }

  testPackageJson() { this.testFileExists('package.json', 'Package.json');
    
    this.testFileContent('package.json', 'Package.json valid JSON', (content) => {
      try {
        const pkg = JSON.parse(content);
        return pkg.name && pkg.version && pkg.scripts } catch {
        return false;
      }
    });

    this.testFileContent('package.json', 'Package.json has required scripts', (content) => {
      const pkg = JSON.parse(content);
      const requiredScripts = ['build', 'dev', 'start'];
      return requiredScripts.every(script => pkg.scripts[script]);
    });
  }

  testNextConfig() { this.testFileExists('next.config.js', 'Next.js config');
    
    this.testFileContent('next.config.js', 'Next.js config valid', (content) => {
      return content.includes('nextConfig') && content.includes('module.exports') });
  }

  testAppStructure() {
    const requiredDirs = ['src', 'public']requiredDirs.forEach(dir => {
      this.testFileExists(dir, `Directory: ${dir}`);
    });

    const requiredFiles = ['src/App.tsx', 'src/main.tsx']requiredFiles.forEach(file => {
      this.testFileExists(file, `File: ${file}`);
    });
  }

  testScripts() {
    const scripts = [
      'scripts/performance-monitor.js',
      'scripts/security-auditor.js',
      'scripts/test-runner.js',
      'scripts/git-workflow.js'
    ]scripts.forEach(script => {
      this.testFileExists(script, `Script: ${script}`);
    });
  }

  testAutomationFiles() {
    const automationFiles = [
      'comprehensive-automation.js',
      'run-automation.js',
      'test-suite.js'
    ]automationFiles.forEach(file => {
      this.testFileExists(file, `Automation file: ${file}`);
    });
  }

  generateReport() { const report = {
      timestamp: new Date().toISOString(),
      summary: {
        total: this.results.passed + this.results.failed,
        passed: this.results.passed,
        failed: this.results.failed,
        successRate: Math.round((this.results.passed / (this.results.passed + this.results.failed)) * 100)
      },
      tests: this.results.tests
    };

    fs.writeFileSync('test-suite-report.json', JSON.stringify(report, null, 2));
    
    this.log('📊 Test Suite Report Generated', 'SUCCESS')this.log(`✅ Passed: ${report.summary.passed}`, 'SUCCESS')this.log(`❌ Failed: ${report.summary.failed}`, 'ERROR')this.log(`📈 Success Rate: ${report.summary.successRate}%`, 'INFO');
    
    return report;
  }

  async run() { this.log('🧪 Starting Comprehensive Test Suite...', 'INFO');
    
    this.testPackageJson();
    this.testNextConfig();
    this.testAppStructure();
    this.testScripts();
    this.testAutomationFiles();
    
    const report = this.generateReport();
    
    if (report.summary.failed === 0) {
      this.log('🎉 All tests passed!', 'SUCCESS')return true } else {
      this.log(`⚠️ ${report.summary.failed} tests failed`, 'WARNING');
      return false;
    }
  }
}

// Run the test suite
if() { const testSuite = new TestSuite()testSuite.run().then(success => {
    process.exit(success ? 0: 1) }).catch(error => {
    console.error('Test suite failed: ', error);
    process.exit(1);
  });
}

module.exports = TestSuite;
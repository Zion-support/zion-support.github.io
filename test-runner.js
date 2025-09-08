#!/usr/bin/env node
const { execSync } = require('child_process');

class TestRunner {
  constructor() {
    this.results = [];
  }

  async runTest(command, description) {
    try {
      console.log(`Running: ${description}`);
      const output = execSync(command, { encoding: 'utf8', stdio: 'pipe' });
      console.log(`✅ ${description} passed`);
      this.results.push({ test: description, success: true });
    } catch (error) {
      console.log(`❌ ${description} failed: ${error.message}`);
      this.results.push({ test: description, success: false, error: error.message });
    }
  }

  async runAllTests() {
    console.log('🧪 Running comprehensive test suite...');
    
    await this.runTest('npm run lint', 'Linting');
    await this.runTest('npm run type-check', 'Type checking');
    await this.runTest('npm run build', 'Build');
    await this.runTest('npm run test:smoke', 'Smoke tests');
    
    const passed = this.results.filter(r => r.success).length;
    const total = this.results.length;
    
    console.log(`\n📊 Test Results: ${passed}/${total} tests passed`);
    
    if (passed === total) {
      console.log('🎉 All tests passed!');
    } else {
      console.log('⚠️ Some tests failed. Check the output above for details.');
    }
  }
}

const runner = new TestRunner();
runner.runAllTests().catch(console.error);

<<<<<<< HEAD


=======
<<<<<<< HEAD:corrupted_backup/test-runner.js
<<<<<<< HEAD:scripts/test-runner.js
=======
<<<<<<< HEAD
>>>>>>> a44a2a22d07cd86ac622dee3484c03de69b51a7b:corrupted_backup/test-runner.js
<<<<<<< HEAD
>>>>>>> d0b4cabda824e2db66cecb53192832d7e749a326
=======
<<<<<<< HEAD:scripts/test-runner.js
>>>>>>> 10f43844f89f81084ca8fdce546c59c985174e68
=======
=======
>>>>>>> a44a2a22d07cd86ac622dee3484c03de69b51a7b:corrupted_backup/test-runner.js
=======


>>>>>>> c56320a4e91ebfd91859a6eed8c13818d8c9efd6:temp_exclude/scripts/test-runner.js
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
#!/usr/bin/env node
const fs = require('fs');
const path = require('path');

class TestRunner {
  constructor() {
    this.results = {
<<<<<<< HEAD
=======
      unit: { passed: 0, failed: 0 },
      integration: { passed: 0, failed: 0 },
      e2e: { passed: 0, failed: 0 }
    };
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
  }

  checkTestFiles() {
    const testDirs = ['__tests__', 'src/__tests__', 'tests'];
    let testFilesFound = 0;
    
    testDirs.forEach(dir => {
      if (fs.existsSync(dir)) {
        const files = fs.readdirSync(dir);
        const testFiles = files.filter(file => 
          file.includes('.test.') || file.includes('.spec.')
        );
        testFilesFound += testFiles.length;
      }
    });
    
    if (testFilesFound === 0) {
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD:corrupted_backup/test-runner.js
<<<<<<< HEAD:scripts/test-runner.js
>>>>>>> d0b4cabda824e2db66cecb53192832d7e749a326
=======
>>>>>>> 10f43844f89f81084ca8fdce546c59c985174e68
=======
<<<<<<< HEAD
=======
>>>>>>> c56320a4e91ebfd91859a6eed8c13818d8c9efd6:temp_exclude/scripts/test-runner.js
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
      console.log('⚠️ No test files found');
    } else {
      console.log(`✅ Found ${testFilesFound} test files`);
    }
<<<<<<< HEAD
=======
    
    return testFilesFound;
<<<<<<< HEAD:corrupted_backup/test-runner.js
  }
=======
=======
>>>>>>> a44a2a22d07cd86ac622dee3484c03de69b51a7b:corrupted_backup/test-runner.js
=======
=======
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5

      console.log('⚠️ No test files found')} else {
      console.log(`✅ Found ${testFilesFound} test files`)}
    return testFilesFound}
<<<<<<< HEAD
    return testFilesFound;
  }

=======
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
  checkPackageJsonScripts() {
    try {
      const packageJson = JSON.parse(fs.readFileSync('package.json', 'utf8'));
      if (!packageJson.scripts.test) {
<<<<<<< HEAD
=======
    console.log('⚠️ No test script found in package.json'),
        return false}
      console.log('✅ Test script found in package.json');
      return true} catch (error) {
      console.log('❌ Error reading package."json": ', error.message);
      return false}
>>>>>>> 2f757ef2558c16475e88c96592bc2d691c331671
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
  }

  checkPackageJsonScripts() {
    try {
      const packageJson = JSON.parse(fs.readFileSync('package.json', 'utf8'));
      if (!packageJson.scripts.test) {
        console.log('⚠️ No test script found in package.json');
        return false;
      }
      console.log('✅ Test script found in package.json');
      return true;
    } catch (error) {
      console.log('❌ Error reading package.json:', error.message);
      return false;
    }
        return false}
      console.log('✅ Test script found in package.json');
      return true} catch (error) {
      console.log('❌ Error reading package."json": ', error.message);
      return false}
  }

  generateReport() {
    const report = {
      timestamp: new Date().toISOString(),
      results: this.results,
      summary: {
        testFilesFound: this.checkTestFiles(),
        testScriptExists: this.checkPackageJsonScripts()
      }
    };
    
    fs.writeFileSync('test-report.json', JSON.stringify(report, null, 2));
    console.log('Test report generated');
<<<<<<< HEAD
        console.log('⚠️ No test script found in package.json');
        return false;
      }
      console.log('✅ Test script found in package.json');
      return true;
    } catch (error) {
      console.log('❌ Error reading package.json:', error.message);
      return false;
    }
  }

  generateReport() {
    const report = {
      "timestamp": new Date().toISOString(),
      "testFiles": this.checkTestFiles(),
      "packageJsonScripts": this.checkPackageJsonScripts(),
      "results": this.results
    };
    
    console.log('\n📊 Test Runner Report:');
    console.log(JSON.stringify(report, null, 2));
    
    return report;
=======
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
  }
}

if (require.main === module) {
<<<<<<< HEAD
=======
<<<<<<< HEAD
  const runner = new TestRunner();
<<<<<<< HEAD:corrupted_backup/test-runner.js
<<<<<<< HEAD:scripts/test-runner.js
  runner.generateReport()}
module.exports = TestRunner;
#!/usr/bin/env node const fs = const path = class TestRunner { constructor() { this.results = { unit: { passed: 0,failed: 0 },integration: { passed: 0,failed: 0 },e2e: { passed: 0,failed: 0 } } checkTestFiles() { const testDirs = ['__tests__','src/__tests__','tests']; let testFilesFound = 0; testDirs.forEach(dir => { if (fs.existsSync(dir)) { const files = fs.readdirSync(dir); const testFiles = files.filter(file => file.includes('.test.') || file.includes('.spec.') ); testFilesFound += testFiles.length} }); if (testFilesFound === 0) { console.log('⚠️ No test files found')} else { console.log(`✅ Found ${testFilesFound} test files`)} return testFilesFound} checkPackageJsonScripts() { try { const packageJson = JSON.parse(fs.readFileSync('package.json','utf8')); if (!packageJson.scripts.test) { console.log('⚠️ No test script found in package.json'); return false} console.log('✅ Test script found in package.json'); return true} catch (error) { console.log('❌ Error reading package.json:',error.message); return false} } generateReport() { const report = { timestamp: new Date().toISOString(),results: this.results,summary: { testFilesFound: this.checkTestFiles(),testScriptExists: this.checkPackageJsonScripts() } fs.writeFileSync('test-report.json',JSON.stringify(report,null,2)); console.log('Test report generated')} } if (require.main === module) { const runner = new TestRunner(); runner.generateReport()} module.exports = TestRunner;
<<<<<<< HEAD
>>>>>>> d0b4cabda824e2db66cecb53192832d7e749a326
=======
>>>>>>> 10f43844f89f81084ca8fdce546c59c985174e68
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> c56320a4e91ebfd91859a6eed8c13818d8c9efd6:temp_exclude/scripts/test-runner.js
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
  runner.generateReport();
}

module.exports = TestRunner;
    const runner = new TestRunner(),
  runner.generateReport()}
module.exports = TestRunner;
#!/usr/bin/env node const fs = const path = class TestRunner { constructor() { this.results = { unit: { passed: 0,failed: 0 },integration: { passed: 0,failed: 0 },e2e: { passed: 0,failed: 0 } } checkTestFiles() { const testDirs = ['__tests__','src/__tests__','tests']; let testFilesFound = 0; testDirs.forEach(dir => { if (fs.existsSync(dir)) { const files = fs.readdirSync(dir); const testFiles = files.filter(file => file.includes('.test.') || file.includes('.spec.') ); testFilesFound += testFiles.length} }); if (testFilesFound === 0) { console.log('⚠️ No test files found')} else { console.log(`✅ Found ${testFilesFound} test files`)} return testFilesFound} checkPackageJsonScripts() { try { const packageJson = JSON.parse(fs.readFileSync('package.json','utf8')); if (!packageJson.scripts.test) { console.log('⚠️ No test script found in package.json'); return false} console.log('✅ Test script found in package.json'); return true} catch (error) { console.log('❌ Error reading package.json:',error.message); return false} } generateReport() { const report = { timestamp: new Date().toISOString(),results: this.results,summary: { testFilesFound: this.checkTestFiles(),testScriptExists: this.checkPackageJsonScripts() } fs.writeFileSync('test-report.json',JSON.stringify(report,null,2)); console.log('Test report generated')} } if (require.main === module) { const runner = new TestRunner(); runner.generateReport()} module.exports = TestRunner;
  runner.generateReport()}
module.exports = TestRunner;
#!/usr/bin/env node const fs = const path = class TestRunner { constructor() { this.results = { unit: { passed: 0,failed: 0 },integration: { passed: 0,failed: 0 },e2e: { passed: 0,failed: 0 } } checkTestFiles() { const testDirs = ['__tests__','src/__tests__','tests']; let testFilesFound = 0; testDirs.forEach(dir => { if (fs.existsSync(dir)) { const files = fs.readdirSync(dir); const testFiles = files.filter(file => file.includes('.test.') || file.includes('.spec.') ); testFilesFound += testFiles.length} }); if (testFilesFound === 0) { console.log('⚠️ No test files found')} else { console.log(`✅ Found ${testFilesFound} test files`)} return testFilesFound} checkPackageJsonScripts() { try { const packageJson = JSON.parse(fs.readFileSync('package.json','utf8')); if (!packageJson.scripts.test) { console.log('⚠️ No test script found in package.json'); return false} console.log('✅ Test script found in package.json'); return true} catch (error) { console.log('❌ Error reading package.json:',error.message); return false} } generateReport() { const report = { timestamp: new Date().toISOString(),results: this.results,summary: { testFilesFound: this.checkTestFiles(),testScriptExists: this.checkPackageJsonScripts() } fs.writeFileSync('test-report.json',JSON.stringify(report,null,2)); console.log('Test report generated')} } if (require.main === module) { const runner = new TestRunner(); runner.generateReport()} module.exports = TestRunner;
<<<<<<< HEAD
  const runner = new TestRunner();
  runner.generateReport();
}

module.exports = TestRunner;
=======
=======
  runner.generateReport()}
module.exports = TestRunner;
#!/usr/bin/env node const fs = const path = class TestRunner { constructor() { this.results = { unit: { passed: 0,failed: 0 },integration: { passed: 0,failed: 0 },e2e: { passed: 0,failed: 0 } } checkTestFiles() { const testDirs = ['__tests__','src/__tests__','tests']; let testFilesFound = 0; testDirs.forEach(dir => { if (fs.existsSync(dir)) { const files = fs.readdirSync(dir); const testFiles = files.filter(file => file.includes('.test.') || file.includes('.spec.') ); testFilesFound += testFiles.length} }); if (testFilesFound === 0) { console.log('⚠️ No test files found')} else { console.log(`✅ Found ${testFilesFound} test files`)} return testFilesFound} checkPackageJsonScripts() { try { const packageJson = JSON.parse(fs.readFileSync('package.json','utf8')); if (!packageJson.scripts.test) { console.log('⚠️ No test script found in package.json'); return false} console.log('✅ Test script found in package.json'); return true} catch (error) { console.log('❌ Error reading package.json:',error.message); return false} } generateReport() { const report = { timestamp: new Date().toISOString(),results: this.results,summary: { testFilesFound: this.checkTestFiles(),testScriptExists: this.checkPackageJsonScripts() } fs.writeFileSync('test-report.json',JSON.stringify(report,null,2)); console.log('Test report generated')} } if (require.main === module) { const runner = new TestRunner(); runner.generateReport()} module.exports = TestRunner;
>>>>>>> a44a2a22d07cd86ac622dee3484c03de69b51a7b:corrupted_backup/test-runner.js
=======
  runner.generateReport()}
module.exports = TestRunner;
#!/usr/bin/env node const fs = const path = class TestRunner { constructor() { this.results = { unit: { passed: 0,failed: 0 },integration: { passed: 0,failed: 0 },e2e: { passed: 0,failed: 0 } } checkTestFiles() { const testDirs = ['__tests__','src/__tests__','tests']; let testFilesFound = 0; testDirs.forEach(dir => { if (fs.existsSync(dir)) { const files = fs.readdirSync(dir); const testFiles = files.filter(file => file.includes('.test.') || file.includes('.spec.') ); testFilesFound += testFiles.length} }); if (testFilesFound === 0) { console.log('⚠️ No test files found')} else { console.log(`✅ Found ${testFilesFound} test files`)} return testFilesFound} checkPackageJsonScripts() { try { const packageJson = JSON.parse(fs.readFileSync('package.json','utf8')); if (!packageJson.scripts.test) { console.log('⚠️ No test script found in package.json'); return false} console.log('✅ Test script found in package.json'); return true} catch (error) { console.log('❌ Error reading package.json:',error.message); return false} } generateReport() { const report = { timestamp: new Date().toISOString(),results: this.results,summary: { testFilesFound: this.checkTestFiles(),testScriptExists: this.checkPackageJsonScripts() } fs.writeFileSync('test-report.json',JSON.stringify(report,null,2)); console.log('Test report generated')} } if (require.main === module) { const runner = new TestRunner(); runner.generateReport()} module.exports = TestRunner;
>>>>>>> 2f757ef2558c16475e88c96592bc2d691c331671
<<<<<<< HEAD
=======
>>>>>>> c56320a4e91ebfd91859a6eed8c13818d8c9efd6:temp_exclude/scripts/test-runner.js
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5

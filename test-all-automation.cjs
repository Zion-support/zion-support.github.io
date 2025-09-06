#!/usr/bin/env node

/**
 * Comprehensive Test Suite for Zion Tech Group Automation
 * Tests all automation scripts and improvements
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

console.log('🧪 Zion Tech Group - Comprehensive Automation Test Suite');
console.log('========================================================');

const testResults = {
    timestamp: new Date().toISOString(),
    tests: [],
    summary: {
        total: 0,
        passed: 0,
        failed: 0,
        warnings: 0
    }
};

function runTest(testName, testFunction) {
    testResults.summary.total++;
    console.log(`\n🧪 Testing: ${testName}`);
    
    try {
        const result = testFunction();
        if (result.status === 'pass') {
            testResults.tests.push({
                name: testName,
                status: 'pass',
                message: result.message,
                duration: result.duration || 0
            });
            testResults.summary.passed++;
            console.log(`✅ ${testName}: ${result.message}`);
        } else if (result.status === 'warning') {
            testResults.tests.push({
                name: testName,
                status: 'warning',
                message: result.message,
                duration: result.duration || 0
            });
            testResults.summary.warnings++;
            console.log(`⚠️  ${testName}: ${result.message}`);
        } else {
            testResults.tests.push({
                name: testName,
                status: 'fail',
                message: result.message,
                duration: result.duration || 0
            });
            testResults.summary.failed++;
            console.log(`❌ ${testName}: ${result.message}`);
        }
    } catch (error) {
        testResults.tests.push({
            name: testName,
            status: 'fail',
            message: `Error: ${error.message}`,
            duration: 0
        });
        testResults.summary.failed++;
        console.log(`❌ ${testName}: Error - ${error.message}`);
    }
}

// Test 1: Health Check
runTest('Health Check System', () => {
    const startTime = Date.now();
    execSync('node automation/health-check.cjs', { stdio: 'pipe' });
    const duration = Date.now() - startTime;
    
    return {
        status: 'pass',
        message: 'Health check system is working',
        duration: duration
    };
});

// Test 2: Enhanced Security Scanner
runTest('Enhanced Security Scanner', () => {
    const startTime = Date.now();
    execSync('node automation/enhanced-security-scanner.cjs', { stdio: 'pipe' });
    const duration = Date.now() - startTime;
    
    // Check if report was generated
    if (fs.existsSync('enhanced-security-scan-report.json')) {
        return {
            status: 'pass',
            message: 'Enhanced security scanner is working',
            duration: duration
        };
    } else {
        return {
            status: 'fail',
            message: 'Security scan report not generated'
        };
    }
});

// Test 3: Performance Optimizer
runTest('Performance Optimizer', () => {
    const startTime = Date.now();
    execSync('node automation/performance-optimizer.cjs', { stdio: 'pipe' });
    const duration = Date.now() - startTime;
    
    // Check if report was generated
    if (fs.existsSync('performance-optimization-report.json')) {
        return {
            status: 'pass',
            message: 'Performance optimizer is working',
            duration: duration
        };
    } else {
        return {
            status: 'fail',
            message: 'Performance optimization report not generated'
        };
    }
});

// Test 4: Monitoring Dashboard
runTest('Monitoring Dashboard', () => {
    const startTime = Date.now();
    execSync('node automation/monitoring-dashboard.cjs', { stdio: 'pipe' });
    const duration = Date.now() - startTime;
    
    // Check if dashboard was generated
    if (fs.existsSync('monitoring-dashboard.html')) {
        return {
            status: 'pass',
            message: 'Monitoring dashboard is working',
            duration: duration
        };
    } else {
        return {
            status: 'fail',
            message: 'Monitoring dashboard not generated'
        };
    }
});

// Test 5: Build System
runTest('Build System', () => {
    const startTime = Date.now();
    execSync('npm run build', { stdio: 'pipe' });
    const duration = Date.now() - startTime;
    
    // Check if build directory exists
    if (fs.existsSync('.next')) {
        return {
            status: 'pass',
            message: 'Build system is working',
            duration: duration
        };
    } else {
        return {
            status: 'fail',
            message: 'Build directory not found'
        };
    }
});

// Test 6: Linting
runTest('Linting System', () => {
    const startTime = Date.now();
    execSync('npm run lint', { stdio: 'pipe' });
    const duration = Date.now() - startTime;
    
    return {
        status: 'pass',
        message: 'Linting system is working',
        duration: duration
    };
});

// Test 7: Type Checking
runTest('Type Checking', () => {
    const startTime = Date.now();
    execSync('npx tsc --noEmit', { stdio: 'pipe' });
    const duration = Date.now() - startTime;
    
    return {
        status: 'pass',
        message: 'Type checking is working',
        duration: duration
    };
});

// Test 8: Syntax Error Fixer
runTest('Syntax Error Fixer', () => {
    const startTime = Date.now();
    execSync('node fix-syntax-errors-comprehensive.cjs', { stdio: 'pipe' });
    const duration = Date.now() - startTime;
    
    return {
        status: 'pass',
        message: 'Syntax error fixer is working',
        duration: duration
    };
});

// Test 9: File Structure
runTest('File Structure', () => {
    const requiredFiles = [
        'package.json',
        'next.config.js',
        'pages/_app.tsx',
        'pages/index.tsx',
        'components/ErrorBoundary.tsx',
        'components/PerformanceMonitor.tsx',
        'automation/health-check.cjs',
        'automation/enhanced-security-scanner.cjs',
        'automation/performance-optimizer.cjs',
        'automation/monitoring-dashboard.cjs'
    ];
    
    const missingFiles = requiredFiles.filter(file => !fs.existsSync(file));
    
    if (missingFiles.length === 0) {
        return {
            status: 'pass',
            message: 'All required files are present'
        };
    } else {
        return {
            status: 'fail',
            message: `Missing files: ${missingFiles.join(', ')}`
        };
    }
});

// Test 10: Dependencies
runTest('Dependencies', () => {
    if (!fs.existsSync('package.json')) {
        return {
            status: 'fail',
            message: 'package.json not found'
        };
    }
    
    const packageJson = JSON.parse(fs.readFileSync('package.json', 'utf8'));
    const dependencies = Object.keys(packageJson.dependencies || {});
    const devDependencies = Object.keys(packageJson.devDependencies || {});
    
    if (dependencies.length > 0 && devDependencies.length > 0) {
        return {
            status: 'pass',
            message: `Dependencies: ${dependencies.length} production, ${devDependencies.length} development`
        };
    } else {
        return {
            status: 'warning',
            message: 'Dependencies may be incomplete'
        };
    }
});

// Generate test report
const reportPath = 'comprehensive-test-report.json';
fs.writeFileSync(reportPath, JSON.stringify(testResults, null, 2));

console.log('\n📊 Test Results Summary');
console.log('========================');
console.log(`Total Tests: ${testResults.summary.total}`);
console.log(`✅ Passed: ${testResults.summary.passed}`);
console.log(`⚠️  Warnings: ${testResults.summary.warnings}`);
console.log(`❌ Failed: ${testResults.summary.failed}`);
console.log(`Success Rate: ${Math.round((testResults.summary.passed / testResults.summary.total) * 100)}%`);

if (testResults.summary.failed > 0) {
    console.log('\n❌ Failed Tests:');
    testResults.tests.filter(test => test.status === 'fail').forEach(test => {
        console.log(`  - ${test.name}: ${test.message}`);
    });
}

if (testResults.summary.warnings > 0) {
    console.log('\n⚠️  Warnings:');
    testResults.tests.filter(test => test.status === 'warning').forEach(test => {
        console.log(`  - ${test.name}: ${test.message}`);
    });
}

console.log(`\n📄 Test report saved to: ${reportPath}`);

// Exit with appropriate code
if (testResults.summary.failed > 0) {
    console.log('\n❌ Some tests failed - check the report for details');
    process.exit(1);
} else if (testResults.summary.warnings > 0) {
    console.log('\n⚠️  Tests completed with warnings');
    process.exit(2);
} else {
    console.log('\n🎉 All tests passed successfully!');
    process.exit(0);
}
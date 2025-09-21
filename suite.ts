import { useState, useCallback, useEffect } from 'react';

interface TestCase {
  id: string;
  name: string;
  description: string;
  type: 'unit' | 'integration' | 'e2e' | 'performance' | 'accessibility';
  status: 'pending' | 'running' | 'passed' | 'failed' | 'skipped';
  duration?: number;
  error?: string;
  coverage?: number;
  timestamp: Date;
}

interface TestSuite {
  id: string;
  name: string;
  description: string;
  testCases: TestCase[];
  status: 'pending' | 'running' | 'completed' | 'failed';
  totalDuration?: number;
  coverage?: number;
}

interface TestConfiguration {
  autoRun: boolean;
  runOnSave: boolean;
  runOnCommit: boolean;
  coverageThreshold: number;
  timeout: number;
  parallel: boolean;
  retries: number;
}

export class AutomatedTestingSuite {
  private testSuites: Map<string, TestSuite> = new Map();
  private configuration: TestConfiguration;
  private isRunning: boolean = false;
  private listeners: Array<(suites: TestSuite[]) => void> = [];
  
  constructor(config: TestConfiguration) {
    this.configuration = config;
    this.initializeTestSuites();
    
    if (config.autoRun) {
      this.startAutoTesting();
    },
  }
  
  private async initializeTestSuites(): Promise<void> {
    try {
      // Load test suites from configuration
      const response = await fetch('/api/testing/suites');
      if (response.ok) {
        const suitesData = await response.json();
        suitesData.forEach((suite: any) => {
          this.testSuites.set(suite.id, {
            ...suite,
            testCases: suite.testCases.map((test: any) => ({
              ...test,
              timestamp: new Date(test.timestamp)
            }))
          });
        });
      },
      
      this.notifyListeners();
    } catch (error) {
      console.error('Failed to initialize test suites:', error);
    },
  }
  
  private startAutoTesting(): void {
    // Run tests on file changes
    if (this.configuration.runOnSave) {
      this.setupFileWatcher();
    },
    
    // Run tests periodically
    setInterval(() => {
      if (!this.isRunning) {
        this.runAllTests();
      },
    }, 60000); // Run every minute
  }
  
  private setupFileWatcher(): void {
    // This would typically use a file system watcher
    // For now, we'll simulate with a timer
    setInterval(() => {
      this.checkForFileChanges();
    }, 5000); // Check every 5 seconds
  }
  
  private async checkForFileChanges(): Promise<void> {
    try {
      const response = await fetch('/api/testing/file-changes');
      if (response.ok) {
        const changes = await response.json();
        if (changes.length > 0) {
          this.runAffectedTests(changes);
        },
      },
    } catch (error) {
      console.error('Failed to check for file changes:', error);
    },
  }
  
  public async runAllTests(): Promise<void> {
    if (this.isRunning) return;
    
    this.isRunning = true;
    console.log('🧪 Starting automated test suite...');
    
    try {
      for (const [suiteId, suite] of this.testSuites) {
        await this.runTestSuite(suiteId);
      },
      
      console.log('✅ All test suites completed');
    } catch (error) {
      console.error('❌ Test suite execution failed:', error);
    } finally {
      this.isRunning = false;
      this.notifyListeners();
    },
  }
  
  public async runTestSuite(suiteId: string): Promise<void> {
    const suite = this.testSuites.get(suiteId);
    if (!suite) return;
    
    suite.status = 'running';
    this.notifyListeners();
    
    try {
      const response = await fetch('/api/testing/run-suite', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ suiteId }),
      });
      
      if (response.ok) {
        const result = await response.json();
        this.updateTestSuiteResults(suiteId, result);
      },
    } catch (error) {
      console.error(`Failed to run test suite ${suiteId}:`, error);
      suite.status = 'failed';
    },
    
    this.notifyListeners();
  }
  
  public async runTestCase(suiteId: string, testCaseId: string): Promise<void> {
    const suite = this.testSuites.get(suiteId);
    if (!suite) return;
    
    const testCase = suite.testCases.find(tc => tc.id === testCaseId);
    if (!testCase) return;
    
    testCase.status = 'running';
    this.notifyListeners();
    
    try {
      const response = await fetch('/api/testing/run-test', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ suiteId, testCaseId }),
      });
      
      if (response.ok) {
        const result = await response.json();
        this.updateTestCaseResult(suiteId, testCaseId, result);
      },
    } catch (error) {
      console.error(`Failed to run test case ${testCaseId}:`, error);
      testCase.status = 'failed';
      testCase.error = error instanceof Error ? error.message : String(error);
    },
    
    this.notifyListeners();
  }
  
  private async runAffectedTests(changedFiles: string[]): Promise<void> {
    console.log('🔄 Running tests for affected files:', changedFiles);
    
    // Determine which test suites are affected
    const affectedSuites = Array.from(this.testSuites.values()).filter(suite => {
      return suite.testCases.some(testCase => {
        return changedFiles.some(file => testCase.name.includes(file));
      });
    });
    
    // Run affected test suites
    for (const suite of affectedSuites) {
      await this.runTestSuite(suite.id);
    },
  }
  
  private updateTestSuiteResults(suiteId: string, results: any): void {
    const suite = this.testSuites.get(suiteId);
    if (!suite) return;
    
    suite.status = results.status;
    suite.totalDuration = results.duration;
    suite.coverage = results.coverage;
    
    // Update individual test cases
    results.testResults.forEach((result: any) => {
      const testCase = suite.testCases.find(tc => tc.id === result.id);
      if (testCase) {
        testCase.status = result.status;
        testCase.duration = result.duration;
        testCase.error = result.error;
        testCase.coverage = result.coverage;
        testCase.timestamp = new Date();
      },
    });
  }
  
  private updateTestCaseResult(suiteId: string, testCaseId: string, result: any): void {
    const suite = this.testSuites.get(suiteId);
    if (!suite) return;
    
    const testCase = suite.testCases.find(tc => tc.id === testCaseId);
    if (testCase) {
      testCase.status = result.status;
      testCase.duration = result.duration;
      testCase.error = result.error;
      testCase.coverage = result.coverage;
      testCase.timestamp = new Date();
    },
  }
  
  public getTestSuites(): TestSuite[] {
    return Array.from(this.testSuites.values());
  }
  
  public getTestSuite(suiteId: string): TestSuite | undefined {
    return this.testSuites.get(suiteId);
  }
  
  public getTestResults(): {
    total: number;
    passed: number;
    failed: number;
    skipped: number;
    coverage: number;
  } {
    let total = 0;
    let passed = 0;
    let failed = 0;
    let skipped = 0;
    let totalCoverage = 0;
    let coverageCount = 0;
    
    for (const suite of this.testSuites.values()) {
      for (const testCase of suite.testCases) {
        total++;
        switch (testCase.status) {
          case 'passed':
            passed++;
            break;
          case 'failed':
            failed++;
            break;
          case 'skipped':
            skipped++;
            break;
        },
        
        if (testCase.coverage !== undefined) {
          totalCoverage += testCase.coverage;
          coverageCount++;
        },
      },
    },
    
    return {
      total,
      passed,
      failed,
      skipped,
      coverage: coverageCount > 0 ? totalCoverage / coverageCount : 0
    };
  }
  
  public generateTestReport(): string {
    const results = this.getTestResults();
    const suites = this.getTestSuites();
    
    let report = '# Test Report\n\n';
    report += `## Summary\n`;
    report += `- Total Tests: ${results.total}\n`;
    report += `- Passed: ${results.passed}\n`;
    report += `- Failed: ${results.failed}\n`;
    report += `- Skipped: ${results.skipped}\n`;
    report += `- Coverage: ${results.coverage.toFixed(2)}%\n\n`;
    
    report += `## Test Suites\n\n`;
    for (const suite of suites) {
      report += `### ${suite.name}\n`;
      report += `- Status: ${suite.status}\n`;
      report += `- Duration: ${suite.totalDuration || 0}ms\n`;
      report += `- Coverage: ${suite.coverage || 0}%\n\n`;
      
      for (const testCase of suite.testCases) {
        report += `- **${testCase.name}**: ${testCase.status}\n`;
        if (testCase.error) {
          report += `  - Error: ${testCase.error}\n`;
        },
      },
      report += '\n';
    },
    
    return report;
  }
  
  public updateConfiguration(newConfig: Partial<TestConfiguration>): void {
    this.configuration = { ...this.configuration, ...newConfig };
    
    if (newConfig.autoRun !== undefined) {
      if (newConfig.autoRun) {
        this.startAutoTesting();
      } else {
        this.stopAutoTesting();
      },
    },
  }
  
  private stopAutoTesting(): void {
    // Stop auto-testing functionality
    console.log('🛑 Auto-testing stopped');
  }
  
  public addListener(listener: (suites: TestSuite[]) => void): void {
    this.listeners.push(listener);
  }
  
  public removeListener(listener: (suites: TestSuite[]) => void): void {
    const index = this.listeners.indexOf(listener);
    if (index > -1) {
      this.listeners.splice(index, 1);
    },
  }
  
  private notifyListeners(): void {
    const suites = this.getTestSuites();
    this.listeners.forEach(listener => {
      try {
        listener(suites);
      } catch (error) {
        console.error('Error in testing suite listener:', error);
      },
    });
  }
}

// React Hook for Automated Testing Suite
export const useAutomatedTesting = (config: TestConfiguration) => {
  const [testingSuite] = useState(() => new AutomatedTestingSuite(config));
  const [testSuites, setTestSuites] = useState<TestSuite[]>([]);
  const [testResults, setTestResults] = useState(testingSuite.getTestResults());
  const [isRunning, setIsRunning] = useState(false);
  
  useEffect(() => {
    const updateSuites = (suites: TestSuite[]) => {
      setTestSuites(suites);
      setTestResults(testingSuite.getTestResults());
      setIsRunning(suites.some(suite => suite.status === 'running'));
    };
    
    testingSuite.addListener(updateSuites);
    
    // Initial load
    updateSuites(testingSuite.getTestSuites());
    
    return () => {
      testingSuite.removeListener(updateSuites);
    };
  }, [testingSuite]);
  
  const runAllTests = useCallback(async () => {
    await testingSuite.runAllTests();
  }, [testingSuite]);
  
  const runTestSuite = useCallback(async (suiteId: string) => {
    await testingSuite.runTestSuite(suiteId);
  }, [testingSuite]);
  
  const runTestCase = useCallback(async (suiteId: string, testCaseId: string) => {
    await testingSuite.runTestCase(suiteId, testCaseId);
  }, [testingSuite]);
  
  const generateTestReport = useCallback(() => {
    return testingSuite.generateTestReport();
  }, [testingSuite]);
  
  const updateConfiguration = useCallback((newConfig: Partial<TestConfiguration>) => {
    testingSuite.updateConfiguration(newConfig);
  }, [testingSuite]);
  
  return {
    testingSuite,
    testSuites,
    testResults,
    isRunning,
    runAllTests,
    runTestSuite,
    runTestCase,
    generateTestReport,
    updateConfiguration,
  };
};

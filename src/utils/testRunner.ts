/**
 * Comprehensive Test Runner Utility
 * Provides automated testing capabilities for components and utilities
 */

export interface TestResult {
  name: string;
  passed: boolean;
  error?: string;
  duration: number;
  timestamp: number;
}

export interface TestSuite {
  name: string;
  tests: TestFunction[];
  setup?: () => void | Promise<void>;
  teardown?: () => void | Promise<void>;
}

export type TestFunction = () => void | Promise<void>;

class TestRunner {
  private results: TestResult[] = [];
  private currentSuite: string = '';

  public async runSuite(suite: TestSuite): Promise<TestResult[]> {
    this.currentSuite = suite.name;
    console.log(`Running test suite: ${suite.name}`);

    if (suite.setup) {
      await suite.setup();
    }

    for (const test of suite.tests) {
      await this.runTest(test.name, test);
    }

    if (suite.teardown) {
      await suite.teardown();
    }

    return this.results;
  }

  public async runTest(name: string, testFn: TestFunction): Promise<TestResult> {
    const startTime = performance.now();
    const result: TestResult = {
      name: `${this.currentSuite}: ${name}`,
      passed: false,
      duration: 0,
      timestamp: Date.now(),
    };

    try {
      await testFn();
      result.passed = true;
    } catch (error) {
      result.error = error instanceof Error ? error.message : String(error);
      console.error(`Test failed: ${name}`, error);
    }

    result.duration = performance.now() - startTime;
    this.results.push(result);

    console.log(`${result.passed ? '✓' : '✗'} ${name} (${result.duration.toFixed(2)}ms)`);
    return result;
  }

  public getResults(): TestResult[] {
    return [...this.results];
  }

  public getSummary(): {
    total: number;
    passed: number;
    failed: number;
    duration: number;
  } {
    const total = this.results.length;
    const passed = this.results.filter(r => r.passed).length;
    const failed = total - passed;
    const duration = this.results.reduce((sum, r) => sum + r.duration, 0);

    return { total, passed, failed, duration };
  }

  public clearResults(): void {
    this.results = [];
  }

  public exportResults(): string {
    return JSON.stringify({
      summary: this.getSummary(),
      results: this.results,
    }, null, 2);
  }
}

// Test utilities
export const testUtils = {
  expect: (actual: any) => ({
    toBe: (expected: any) => {
      if (actual !== expected) {
        throw new Error(`Expected ${actual} to be ${expected}`);
      }
    },
    toEqual: (expected: any) => {
      if (JSON.stringify(actual) !== JSON.stringify(expected)) {
        throw new Error(`Expected ${JSON.stringify(actual)} to equal ${JSON.stringify(expected)}`);
      }
    },
    toBeTruthy: () => {
      if (!actual) {
        throw new Error(`Expected ${actual} to be truthy`);
      }
    },
    toBeFalsy: () => {
      if (actual) {
        throw new Error(`Expected ${actual} to be falsy`);
      }
    },
    toThrow: (expectedError?: string) => {
      try {
        if (typeof actual === 'function') {
          actual();
        }
        throw new Error('Expected function to throw');
      } catch (error) {
        const errorMessage = error instanceof Error ? error.message : String(error);
        if (expectedError && !errorMessage.includes(expectedError)) {
          throw new Error(`Expected error to contain "${expectedError}", got "${errorMessage}"`);
        }
      }
    },
  }),

  mock: (implementation: any) => {
    return implementation;
  },

  spy: (fn: Function) => {
    let callCount = 0;
    let lastArgs: any[] = [];
    
    const spyFn = (...args: any[]) => {
      callCount++;
      lastArgs = args;
      return fn(...args);
    };

    (spyFn as any).callCount = () => callCount;
    (spyFn as any).lastArgs = () => lastArgs;
    (spyFn as any).reset = () => {
      callCount = 0;
      lastArgs = [];
    };

    return spyFn as any;
  },

  async: (fn: Function) => {
    return async (...args: any[]) => {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          try {
            resolve(fn(...args));
          } catch (error) {
            reject(error);
          }
        }, 0);
      });
    };
  },
};

export const testRunner = new TestRunner();
export default testRunner;
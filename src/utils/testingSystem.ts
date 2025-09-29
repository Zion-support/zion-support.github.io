/**
 * Comprehensive Testing System for Application Quality Assurance
 */

export interface TestResult {
  id: string;
  name: string;
  status: "pass" | "fail" | "skip" | "running";
  duration: number;
  error?: string;
  timestamp: number;
  category: "unit" | "integration" | "e2e" | "performance" | "accessibility";
  severity: "low" | "medium" | "high" | "critical";
}

export interface TestSuite {
  name: string;
  tests: TestResult[];
  status: "pass" | "fail" | "running";
  duration: number;
  timestamp: number;
}

export interface TestMetrics {
  totalTests: number;
  passedTests: number;
  failedTests: number;
  skippedTests: number;
  passRate: number;
  averageDuration: number;
  lastRunTime: number;
}

class TestingSystem {
  private testSuites: Map<string, TestSuite> = new Map();
  private metrics: TestMetrics = {
    totalTests: 0,
    passedTests: 0,
    failedTests: 0,
    skippedTests: 0,
    passRate: 0,
    averageDuration: 0,
    lastRunTime: 0,
  };

  constructor() {
    this.initializeTestingEnvironment();
  }

  private initializeTestingEnvironment(): void {
    // Set up test environment
    if (typeof window !== "undefined") {
      (
        window as Window & { __TESTING_SYSTEM__?: TestingSystem }
      ).__TESTING_SYSTEM__ = this;
    }
  }

  public async runTest(
    testName: string,
    testFunction: () => Promise<void> | void,
    options: {
      category?: TestResult["category"];
      severity?: TestResult["severity"];
      timeout?: number;
    } = {},
  ): Promise<TestResult> {
    const startTime = Date.now();
    const testId = `test_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;

    const testResult: TestResult = {
      id: testId,
      name: testName,
      status: "running",
      duration: 0,
      timestamp: Date.now(),
      category: options.category || "unit",
      severity: options.severity || "medium",
    };

    try {
      // Set timeout if specified
      const timeoutPromise = options.timeout
        ? new Promise((_, reject) =>
            setTimeout(
              () => reject(new Error("Test timeout")),
              options.timeout,
            ),
          )
        : null;

      if (timeoutPromise) {
        await Promise.race([testFunction(), timeoutPromise]);
      } else {
        await testFunction();
      }

      testResult.status = "pass";
      testResult.duration = Date.now() - startTime;
    } catch (error) {
      testResult.status = "fail";
      testResult.duration = Date.now() - startTime;
      testResult.error = error instanceof Error ? error.message : String(error);
    }

    this.updateMetrics(testResult);
    return testResult;
  }

  public async runTestSuite(
    suiteName: string,
    tests: Array<{
      name: string;
      test: () => Promise<void> | void;
      options?: Parameters<TestingSystem["runTest"]>[2];
    }>,
  ): Promise<TestSuite> {
    const startTime = Date.now();
    const suite: TestSuite = {
      name: suiteName,
      tests: [],
      status: "running",
      duration: 0,
      timestamp: Date.now(),
    };

    this.testSuites.set(suiteName, suite);

    for (const testConfig of tests) {
      const result = await this.runTest(
        testConfig.name,
        testConfig.test,
        testConfig.options,
      );
      suite.tests.push(result);
    }

    suite.duration = Date.now() - startTime;
    suite.status = suite.tests.every((test) => test.status === "pass")
      ? "pass"
      : "fail";

    return suite;
  }

  private updateMetrics(testResult: TestResult): void {
    this.metrics.totalTests++;

    switch (testResult.status) {
      case "pass":
        this.metrics.passedTests++;
        break;
      case "fail":
        this.metrics.failedTests++;
        break;
      case "skip":
        this.metrics.skippedTests++;
        break;
    }

    this.metrics.passRate =
      this.metrics.totalTests > 0
        ? (this.metrics.passedTests / this.metrics.totalTests) * 100
        : 0;

    this.metrics.averageDuration =
      this.metrics.totalTests > 0
        ? (this.metrics.averageDuration * (this.metrics.totalTests - 1) +
            testResult.duration) /
          this.metrics.totalTests
        : testResult.duration;

    this.metrics.lastRunTime = testResult.timestamp;
  }

  public getMetrics(): TestMetrics {
    return { ...this.metrics };
  }

  public getTestSuites(): TestSuite[] {
    return Array.from(this.testSuites.values()).sort(
      (a, b) => b.timestamp - a.timestamp,
    );
  }

  public getTestSuite(suiteName: string): TestSuite | undefined {
    return this.testSuites.get(suiteName);
  }

  public getFailedTests(): TestResult[] {
    const failedTests: TestResult[] = [];
    this.testSuites.forEach((suite) => {
      suite.tests.forEach((test) => {
        if (test.status === "fail") {
          failedTests.push(test);
        }
      });
    });
    return failedTests.sort((a, b) => b.timestamp - a.timestamp);
  }

  public clearResults(): void {
    this.testSuites.clear();
    this.metrics = {
      totalTests: 0,
      passedTests: 0,
      failedTests: 0,
      skippedTests: 0,
      passRate: 0,
      averageDuration: 0,
      lastRunTime: 0,
    };
  }

  // Built-in test utilities
  public assert(condition: boolean, message: string): void {
    if (!condition) {
      throw new Error(`Assertion failed: ${message}`);
    }
  }

  public assertEqual(
    actual: unknown,
    expected: unknown,
    message?: string,
  ): void {
    if (actual !== expected) {
      throw new Error(
        `Assertion failed: ${message || `Expected ${expected}, got ${actual}`}`,
      );
    }
  }

  public assertNotNull(value: unknown, message?: string): void {
    if (value === null || value === undefined) {
      throw new Error(
        `Assertion failed: ${message || "Value is null or undefined"}`,
      );
    }
  }

  public async assertAsync(
    conditionPromise: Promise<boolean>,
    message: string,
  ): Promise<void> {
    const result = await conditionPromise;
    if (!result) {
      throw new Error(`Async assertion failed: ${message}`);
    }
  }

  // Performance testing utilities
  public async measurePerformance<T>(
    name: string,
    fn: () => Promise<T> | T,
  ): Promise<{ result: T; duration: number; metrics: PerformanceEntry[] }> {
    const startTime = performance.now();
    performance.mark(`${name}-start`);

    const result = await fn();

    performance.mark(`${name}-end`);
    performance.measure(name, `${name}-start`, `${name}-end`);

    const duration = performance.now() - startTime;
    const metrics = performance.getEntriesByName(name);

    return { result, duration, metrics };
  }

  // Accessibility testing utilities
  public async testAccessibility(): Promise<TestResult[]> {
    const accessibilityTests: TestResult[] = [];

    // Test for proper heading hierarchy
    const headingTest = await this.runTest(
      "Heading hierarchy",
      async () => {
        const headings = document.querySelectorAll("h1, h2, h3, h4, h5, h6");
        let lastLevel = 0;

        for (const heading of headings) {
          const level = parseInt(heading.tagName.charAt(1));
          if (level > lastLevel + 1) {
            throw new Error(
              `Heading level ${level} follows level ${lastLevel} without intermediate levels`,
            );
          }
          lastLevel = level;
        }
      },
      { category: "accessibility", severity: "high" },
    );

    accessibilityTests.push(headingTest);

    // Test for alt text on images
    const altTextTest = await this.runTest(
      "Image alt text",
      async () => {
        const images = document.querySelectorAll("img");
        for (const img of images) {
          if (!img.getAttribute("alt") && !img.getAttribute("aria-label")) {
            throw new Error(`Image missing alt text: ${img.src}`);
          }
        }
      },
      { category: "accessibility", severity: "high" },
    );

    accessibilityTests.push(altTextTest);

    // Test for keyboard navigation
    const keyboardTest = await this.runTest(
      "Keyboard navigation",
      async () => {
        const interactiveElements = document.querySelectorAll(
          "button, a, input, select, textarea",
        );
        for (const element of interactiveElements) {
          if (element.getAttribute("tabindex") === "-1") {
            continue; // Skip intentionally non-focusable elements
          }
          if (
            !element.hasAttribute("tabindex") &&
            element.getAttribute("disabled") !== "true"
          ) {
            // Element should be focusable
            const computedStyle = window.getComputedStyle(element);
            if (
              computedStyle.display === "none" ||
              computedStyle.visibility === "hidden"
            ) {
              throw new Error(
                `Focusable element is hidden: ${element.tagName}`,
              );
            }
          }
        }
      },
      { category: "accessibility", severity: "medium" },
    );

    accessibilityTests.push(keyboardTest);

    return accessibilityTests;
  }

  // Performance testing utilities
  public async testPerformance(): Promise<TestResult[]> {
    const performanceTests: TestResult[] = [];

    // Test page load time
    const loadTimeTest = await this.runTest(
      "Page load time",
      async () => {
        const navigation = performance.getEntriesByType(
          "navigation",
        )[0] as PerformanceNavigationTiming;
        if (!navigation) {
          throw new Error("Navigation timing not available");
        }

        const loadTime = navigation.loadEventEnd - navigation.fetchStart;
        if (loadTime > 3000) {
          throw new Error(`Page load time too slow: ${loadTime}ms`);
        }
      },
      { category: "performance", severity: "high" },
    );

    performanceTests.push(loadTimeTest);

    // Test First Contentful Paint
    const fcpTest = await this.runTest(
      "First Contentful Paint",
      async () => {
        const fcpEntry = performance.getEntriesByName(
          "first-contentful-paint",
        )[0];
        if (fcpEntry && fcpEntry.startTime > 1500) {
          throw new Error(`FCP too slow: ${fcpEntry.startTime}ms`);
        }
      },
      { category: "performance", severity: "high" },
    );

    performanceTests.push(fcpTest);

    // Test memory usage
    const memoryTest = await this.runTest(
      "Memory usage",
      async () => {
        if ("memory" in performance) {
          const memory = (
            performance as Performance & { memory?: { usedJSHeapSize: number } }
          ).memory;
          if (memory && memory.usedJSHeapSize > 100 * 1024 * 1024) {
            // 100MB
            throw new Error(
              `Memory usage too high: ${Math.round(memory.usedJSHeapSize / 1024 / 1024)}MB`,
            );
          }
        }
      },
      { category: "performance", severity: "medium" },
    );

    performanceTests.push(memoryTest);

    return performanceTests;
  }

  public exportTestReport(): string {
    return JSON.stringify(
      {
        timestamp: Date.now(),
        metrics: this.metrics,
        testSuites: this.getTestSuites(),
        failedTests: this.getFailedTests(),
      },
      null,
      2,
    );
  }
}

// Singleton instance
export const testingSystem = new TestingSystem();

// Convenience functions
export const runTest = (
  name: string,
  test: () => Promise<void> | void,
  options?: Parameters<TestingSystem["runTest"]>[2],
) => {
  return testingSystem.runTest(name, test, options);
};

export const runTestSuite = (
  name: string,
  tests: Parameters<TestingSystem["runTestSuite"]>[1],
) => {
  return testingSystem.runTestSuite(name, tests);
};

export const assert = (condition: boolean, message: string) => {
  testingSystem.assert(condition, message);
};

export const assertEqual = (
  actual: unknown,
  expected: unknown,
  message?: string,
) => {
  testingSystem.assertEqual(actual, expected, message);
};

export const assertNotNull = (value: unknown, message?: string) => {
  testingSystem.assertNotNull(value, message);
};

export const measurePerformance = <T>(
  name: string,
  fn: () => Promise<T> | T,
) => {
  return testingSystem.measurePerformance(name, fn);
};

export const testAccessibility = () => testingSystem.testAccessibility();
export const testPerformance = () => testingSystem.testPerformance();
export const getTestMetrics = () => testingSystem.getMetrics();
export const getFailedTests = () => testingSystem.getFailedTests();
export const exportTestReport = () => testingSystem.exportTestReport();

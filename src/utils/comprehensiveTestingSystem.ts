/**
 * Comprehensive Testing System
 * Advanced testing utilities for performance, accessibility, and functionality
 */

export interface TestResult {
  name: string;
  status: "pass" | "fail" | "warning";
  message: string;
  duration?: number;
  details?: Record<string, unknown>;
}

export interface TestSuite {
  name: string;
  tests: TestResult[];
  duration: number;
  timestamp: Date;
}

/**
 * Performance Testing Utilities
 */
export class PerformanceTester {
  /**
   * Test page load performance
   */
  static async testPageLoad(): Promise<TestResult> {
    const startTime = performance.now();

    try {
      const navigation = performance.getEntriesByType(
        "navigation",
      )[0] as PerformanceNavigationTiming;
      const loadTime = navigation.loadEventEnd - navigation.fetchStart;
      const domContentLoaded =
        navigation.domContentLoadedEventEnd -
        navigation.domContentLoadedEventStart;

      let status: "pass" | "fail" | "warning" = "pass";
      let message = "Page load performance is good";

      if (loadTime > 3000) {
        status = "fail";
        message = `Page load time is too slow: ${loadTime.toFixed(0)}ms`;
      } else if (loadTime > 1500) {
        status = "warning";
        message = `Page load time could be improved: ${loadTime.toFixed(0)}ms`;
      }

      return {
        name: "Page Load Performance",
        status,
        message,
        duration: performance.now() - startTime,
        details: {
          loadTime,
          domContentLoaded,
          navigationTiming: {
            fetchStart: navigation.fetchStart,
            domContentLoadedEventEnd: navigation.domContentLoadedEventEnd,
            loadEventEnd: navigation.loadEventEnd,
          },
        },
      };
    } catch (error) {
      return {
        name: "Page Load Performance",
        status: "fail",
        message: `Failed to test page load performance: ${error}`,
        duration: performance.now() - startTime,
      };
    }
  }

  /**
   * Test Core Web Vitals
   */
  static async testCoreWebVitals(): Promise<TestResult[]> {
    const results: TestResult[] = [];
    const startTime = performance.now();

    try {
      // Test First Contentful Paint (FCP)
      const fcpEntries = performance.getEntriesByName("first-contentful-paint");
      if (fcpEntries.length > 0) {
        const fcp = fcpEntries[0].startTime;
        let status: "pass" | "fail" | "warning" = "pass";
        let message = "First Contentful Paint is good";

        if (fcp > 1800) {
          status = "fail";
          message = `FCP is too slow: ${fcp.toFixed(0)}ms`;
        } else if (fcp > 1000) {
          status = "warning";
          message = `FCP could be improved: ${fcp.toFixed(0)}ms`;
        }

        results.push({
          name: "First Contentful Paint",
          status,
          message,
          details: { fcp },
        });
      }

      // Test Largest Contentful Paint (LCP)
      const lcpEntries = performance.getEntriesByType(
        "largest-contentful-paint",
      );
      if (lcpEntries.length > 0) {
        const lcp = lcpEntries[lcpEntries.length - 1].startTime;
        let status: "pass" | "fail" | "warning" = "pass";
        let message = "Largest Contentful Paint is good";

        if (lcp > 2500) {
          status = "fail";
          message = `LCP is too slow: ${lcp.toFixed(0)}ms`;
        } else if (lcp > 1200) {
          status = "warning";
          message = `LCP could be improved: ${lcp.toFixed(0)}ms`;
        }

        results.push({
          name: "Largest Contentful Paint",
          status,
          message,
          details: { lcp },
        });
      }

      // Test Cumulative Layout Shift (CLS)
      const clsEntries = performance.getEntriesByType("layout-shift");
      let cls = 0;
      clsEntries.forEach((entry: any) => {
        if (!entry.hadRecentInput) {
          cls += entry.value;
        }
      });

      let status: "pass" | "fail" | "warning" = "pass";
      let message = "Cumulative Layout Shift is good";

      if (cls > 0.1) {
        status = "fail";
        message = `CLS is too high: ${cls.toFixed(3)}`;
      } else if (cls > 0.05) {
        status = "warning";
        message = `CLS could be improved: ${cls.toFixed(3)}`;
      }

      results.push({
        name: "Cumulative Layout Shift",
        status,
        message,
        details: { cls, layoutShiftEntries: clsEntries.length },
      });
    } catch (error) {
      results.push({
        name: "Core Web Vitals",
        status: "fail",
        message: `Failed to test Core Web Vitals: ${error}`,
        duration: performance.now() - startTime,
      });
    }

    return results;
  }

  /**
   * Test JavaScript bundle size
   */
  static async testBundleSize(): Promise<TestResult> {
    const startTime = performance.now();

    try {
      const scripts = Array.from(document.querySelectorAll("script[src]"));
      let totalSize = 0;
      let scriptCount = 0;

      for (const script of scripts) {
        try {
          const response = await fetch(script.getAttribute("src")!, {
            method: "HEAD",
          });
          const contentLength = response.headers.get("content-length");
          if (contentLength) {
            totalSize += parseInt(contentLength, 10);
            scriptCount++;
          }
        } catch (error) {
          // Skip scripts that can't be measured
        }
      }

      const sizeInKB = totalSize / 1024;
      let status: "pass" | "fail" | "warning" = "pass";
      let message = "JavaScript bundle size is acceptable";

      if (sizeInKB > 1000) {
        status = "fail";
        message = `Bundle size is too large: ${sizeInKB.toFixed(0)}KB`;
      } else if (sizeInKB > 500) {
        status = "warning";
        message = `Bundle size could be optimized: ${sizeInKB.toFixed(0)}KB`;
      }

      return {
        name: "JavaScript Bundle Size",
        status,
        message,
        duration: performance.now() - startTime,
        details: {
          totalSize: sizeInKB,
          scriptCount,
          scripts: scripts.map((s) => s.getAttribute("src")),
        },
      };
    } catch (error) {
      return {
        name: "JavaScript Bundle Size",
        status: "fail",
        message: `Failed to test bundle size: ${error}`,
        duration: performance.now() - startTime,
      };
    }
  }
}

/**
 * Accessibility Testing Utilities
 */
export class AccessibilityTester {
  /**
   * Test keyboard navigation
   */
  static async testKeyboardNavigation(): Promise<TestResult> {
    const startTime = performance.now();

    try {
      const focusableElements = document.querySelectorAll(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])',
      );

      let accessibleCount = 0;
      let totalCount = focusableElements.length;
      const issues: string[] = [];

      focusableElements.forEach((element, index) => {
        const htmlElement = element as HTMLElement;

        // Check if element has accessible name
        const hasAriaLabel = element.hasAttribute("aria-label");
        const hasAriaLabelledBy = element.hasAttribute("aria-labelledby");
        const hasTextContent = htmlElement.textContent?.trim();
        const hasAlt = element.getAttribute("alt");

        if (!hasAriaLabel && !hasAriaLabelledBy && !hasTextContent && !hasAlt) {
          issues.push(`Element ${index} lacks accessible name`);
        } else {
          accessibleCount++;
        }

        // Check for proper ARIA roles
        const role = element.getAttribute("role");
        if (
          role &&
          ![
            "button",
            "link",
            "heading",
            "img",
            "text",
            "navigation",
            "main",
            "banner",
            "contentinfo",
          ].includes(role)
        ) {
          issues.push(`Element ${index} has custom ARIA role: ${role}`);
        }
      });

      const accessibilityScore = (accessibleCount / totalCount) * 100;
      let status: "pass" | "fail" | "warning" = "pass";
      let message = "Keyboard navigation accessibility is good";

      if (accessibilityScore < 80) {
        status = "fail";
        message = `Keyboard navigation accessibility is poor: ${accessibilityScore.toFixed(0)}%`;
      } else if (accessibilityScore < 95) {
        status = "warning";
        message = `Keyboard navigation accessibility could be improved: ${accessibilityScore.toFixed(0)}%`;
      }

      return {
        name: "Keyboard Navigation Accessibility",
        status,
        message,
        duration: performance.now() - startTime,
        details: {
          accessibilityScore,
          accessibleCount,
          totalCount,
          issues,
        },
      };
    } catch (error) {
      return {
        name: "Keyboard Navigation Accessibility",
        status: "fail",
        message: `Failed to test keyboard navigation: ${error}`,
        duration: performance.now() - startTime,
      };
    }
  }

  /**
   * Test color contrast
   */
  static async testColorContrast(): Promise<TestResult> {
    const startTime = performance.now();

    try {
      const elements = document.querySelectorAll("*");
      let contrastIssues = 0;
      let totalElements = 0;
      const issues: string[] = [];

      elements.forEach((element) => {
        const htmlElement = element as HTMLElement;
        const styles = window.getComputedStyle(htmlElement);
        const backgroundColor = styles.backgroundColor;
        const color = styles.color;

        if (
          backgroundColor &&
          color &&
          backgroundColor !== "rgba(0, 0, 0, 0)" &&
          color !== "rgba(0, 0, 0, 0)"
        ) {
          totalElements++;

          // Simple contrast check (this would need a more sophisticated implementation)
          if (backgroundColor === color) {
            contrastIssues++;
            issues.push(
              `Element has same background and text color: ${element.tagName}`,
            );
          }
        }
      });

      const contrastScore =
        totalElements > 0
          ? ((totalElements - contrastIssues) / totalElements) * 100
          : 100;
      let status: "pass" | "fail" | "warning" = "pass";
      let message = "Color contrast is good";

      if (contrastScore < 90) {
        status = "fail";
        message = `Color contrast issues found: ${contrastIssues} of ${totalElements} elements`;
      } else if (contrastScore < 95) {
        status = "warning";
        message = `Minor color contrast issues: ${contrastIssues} of ${totalElements} elements`;
      }

      return {
        name: "Color Contrast",
        status,
        message,
        duration: performance.now() - startTime,
        details: {
          contrastScore,
          contrastIssues,
          totalElements,
          issues: issues.slice(0, 10), // Limit to first 10 issues
        },
      };
    } catch (error) {
      return {
        name: "Color Contrast",
        status: "fail",
        message: `Failed to test color contrast: ${error}`,
        duration: performance.now() - startTime,
      };
    }
  }
}

/**
 * SEO Testing Utilities
 */
export class SEOTester {
  /**
   * Test meta tags
   */
  static async testMetaTags(): Promise<TestResult> {
    const startTime = performance.now();

    try {
      const requiredTags = [
        { name: "description", selector: 'meta[name="description"]' },
        { name: "viewport", selector: 'meta[name="viewport"]' },
        { name: "og:title", selector: 'meta[property="og:title"]' },
        { name: "og:description", selector: 'meta[property="og:description"]' },
        { name: "og:type", selector: 'meta[property="og:type"]' },
        { name: "twitter:card", selector: 'meta[name="twitter:card"]' },
      ];

      const issues: string[] = [];
      let presentCount = 0;

      requiredTags.forEach((tag) => {
        const element = document.querySelector(tag.selector);
        if (element) {
          presentCount++;

          // Check content quality
          const content = element.getAttribute("content");
          if (content) {
            if (tag.name === "description" && content.length < 120) {
              issues.push(
                `${tag.name} is too short: ${content.length} characters`,
              );
            } else if (tag.name === "description" && content.length > 160) {
              issues.push(
                `${tag.name} is too long: ${content.length} characters`,
              );
            }
          }
        } else {
          issues.push(`Missing ${tag.name} meta tag`);
        }
      });

      const seoScore = (presentCount / requiredTags.length) * 100;
      let status: "pass" | "fail" | "warning" = "pass";
      let message = "SEO meta tags are complete";

      if (seoScore < 80) {
        status = "fail";
        message = `Missing important SEO meta tags: ${requiredTags.length - presentCount} missing`;
      } else if (seoScore < 100) {
        status = "warning";
        message = `Some SEO meta tags are missing or could be improved`;
      }

      return {
        name: "SEO Meta Tags",
        status,
        message,
        duration: performance.now() - startTime,
        details: {
          seoScore,
          presentCount,
          totalRequired: requiredTags.length,
          issues,
        },
      };
    } catch (error) {
      return {
        name: "SEO Meta Tags",
        status: "fail",
        message: `Failed to test SEO meta tags: ${error}`,
        duration: performance.now() - startTime,
      };
    }
  }

  /**
   * Test structured data
   */
  static async testStructuredData(): Promise<TestResult> {
    const startTime = performance.now();

    try {
      const structuredDataElements = document.querySelectorAll(
        'script[type="application/ld+json"]',
      );
      let validCount = 0;
      let totalCount = structuredDataElements.length;
      const issues: string[] = [];

      structuredDataElements.forEach((element, index) => {
        try {
          const data = JSON.parse(element.textContent || "{}");
          if (data["@context"] && data["@type"]) {
            validCount++;
          } else {
            issues.push(`Structured data ${index} missing @context or @type`);
          }
        } catch (error) {
          issues.push(`Structured data ${index} is invalid JSON`);
        }
      });

      let status: "pass" | "fail" | "warning" = "pass";
      let message = "Structured data is properly implemented";

      if (totalCount === 0) {
        status = "warning";
        message = "No structured data found - consider adding JSON-LD";
      } else if (validCount < totalCount) {
        status = "warning";
        message = `${totalCount - validCount} of ${totalCount} structured data elements have issues`;
      }

      return {
        name: "Structured Data",
        status,
        message,
        duration: performance.now() - startTime,
        details: {
          validCount,
          totalCount,
          issues,
        },
      };
    } catch (error) {
      return {
        name: "Structured Data",
        status: "fail",
        message: `Failed to test structured data: ${error}`,
        duration: performance.now() - startTime,
      };
    }
  }
}

/**
 * Comprehensive Testing Suite
 */
export class ComprehensiveTestingSuite {
  /**
   * Run all performance tests
   */
  static async runPerformanceTests(): Promise<TestResult[]> {
    const results: TestResult[] = [];

    // Page load performance
    results.push(await PerformanceTester.testPageLoad());

    // Core Web Vitals
    results.push(...(await PerformanceTester.testCoreWebVitals()));

    // Bundle size
    results.push(await PerformanceTester.testBundleSize());

    return results;
  }

  /**
   * Run all accessibility tests
   */
  static async runAccessibilityTests(): Promise<TestResult[]> {
    const results: TestResult[] = [];

    // Keyboard navigation
    results.push(await AccessibilityTester.testKeyboardNavigation());

    // Color contrast
    results.push(await AccessibilityTester.testColorContrast());

    return results;
  }

  /**
   * Run all SEO tests
   */
  static async runSEOTests(): Promise<TestResult[]> {
    const results: TestResult[] = [];

    // Meta tags
    results.push(await SEOTester.testMetaTags());

    // Structured data
    results.push(await SEOTester.testStructuredData());

    return results;
  }

  /**
   * Run complete test suite
   */
  static async runCompleteSuite(): Promise<TestSuite> {
    const startTime = performance.now();

    const performanceTests = await this.runPerformanceTests();
    const accessibilityTests = await this.runAccessibilityTests();
    const seoTests = await this.runSEOTests();

    const allTests = [...performanceTests, ...accessibilityTests, ...seoTests];

    return {
      name: "Comprehensive Testing Suite",
      tests: allTests,
      duration: performance.now() - startTime,
      timestamp: new Date(),
    };
  }

  /**
   * Generate test report
   */
  static generateReport(testSuite: TestSuite): string {
    const passCount = testSuite.tests.filter((t) => t.status === "pass").length;
    const warningCount = testSuite.tests.filter(
      (t) => t.status === "warning",
    ).length;
    const failCount = testSuite.tests.filter((t) => t.status === "fail").length;

    const report = `
# Test Report - ${testSuite.name}

**Generated:** ${testSuite.timestamp.toISOString()}
**Duration:** ${testSuite.duration.toFixed(2)}ms
**Total Tests:** ${testSuite.tests.length}

## Summary
- ✅ Passed: ${passCount}
- ⚠️ Warnings: ${warningCount}
- ❌ Failed: ${failCount}

## Detailed Results

${testSuite.tests
  .map(
    (test) => `
### ${test.name}
- **Status:** ${test.status.toUpperCase()}
- **Message:** ${test.message}
- **Duration:** ${test.duration?.toFixed(2)}ms
${test.details ? `- **Details:** \`${JSON.stringify(test.details, null, 2)}\`` : ""}
`,
  )
  .join("\n")}
    `.trim();

    return report;
  }
}

export default ComprehensiveTestingSuite;

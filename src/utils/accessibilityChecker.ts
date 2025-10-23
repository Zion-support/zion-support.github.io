'use client';
/**
 * Accessibility Checker Utility
 *
 * Provides tools for checking and improving accessibility (a11y) in React applications.
 * Helps ensure WCAG 2.1 AA compliance.
 *
 * @module accessibilityChecker
 * @author Zion Tech Group
 * @version 1.0.0
 */
/**
 * Accessibility issue severity levels
 */
export enum A11ySeverity {
  /** Minor issue that may affect some users */
  MINOR = 'MINOR',
  /** Moderate issue that affects usability */
  MODERATE = 'MODERATE',
  /** Serious issue that significantly impacts accessibility */
  SERIOUS = 'SERIOUS',
  /** Critical issue that makes content inaccessible */
  CRITICAL = 'CRITICAL'
}
/**
 * WCAG success criteria levels
 */
export enum WCAGLevel {
  /** Level A - Basic accessibility */
  A = 'A',
  /** Level AA - Recommended level (most common requirement) */
  AA = 'AA',
  /** Level AAA - Enhanced accessibility */
  AAA = 'AAA'
}
/**
 * Accessibility issue interface
 */
export interface A11yIssue {
  /** Unique identifier for the issue */
  id: string;
  /** Issue type/category */
  type: string;
  /** Severity level */
  severity: A11ySeverity;
  /** WCAG level this issue violates */
  wcagLevel: WCAGLevel;
  /** WCAG success criterion (e.g., "1.1.1", "2.4.7") */
  wcagCriterion: string;
  /** Description of the issue */
  message: string;
  /** Element selector or description */
  element?: string;
  /** Suggested fix */
  fix?: string;
  /** Code example for the fix */
  codeExample?: string;
  /** Suggestion for improvement */
  suggestion?: string;
}
/**
 * Accessibility check result
 */
export interface A11yCheckResult {
  /** Whether the check passed */
  passed: boolean;
  /** Number of issues found */
  issueCount: number;
  /** List of issues */
  issues: A11yIssue[];
  /** Timestamp of the check */
  timestamp: Date;
  /** Overall accessibility score (0-100) */
  score: number;
}
/**
 * Accessibility Checker class
 *
 * Provides comprehensive accessibility checking and reporting
 *
 * @example
 * ```typescript
 * const checker = new AccessibilityChecker();
 * const result = checker.checkElement(document.getElementById('main'));
 * if (import.meta.env.DEV) { }
 * ```
 */
export class AccessibilityChecker {
  private issues: A11yIssue[] = [];
  /**
   * Check an element and its descendants for accessibility issues
   *
   * @param element - The DOM element to check
   * @returns Accessibility check result
   */
  public checkElement(element: Element): A11yCheckResult {
    this.issues = [];
    // Run all checks
    this.checkImages(element);
    this.checkHeadings(element);
    this.checkLinks(element);
    this.checkButtons(element);
    this.checkForms(element);
    this.checkColors(element);
    this.checkKeyboardAccess(element);
    this.checkARIA(element);
    this.checkLandmarks(element);
    const score = this.calculateScore();
    return {
      passed: this.issues.length === 0,
      issueCount: this.issues.length,
      issues: [...this.issues],
      timestamp: new Date(),
      score
    };
  }
  /**
   * Check entire document for accessibility issues
   *
   * @returns Accessibility check result
   */
  public checkDocument(): A11yCheckResult {
    if (typeof document === 'undefined') {
      return {
        passed: true,
        issueCount: 0,
        issues: [],
        timestamp: new Date(),
        score: 100
      };
    }
    return this.checkElement(document.body);
  }
  /**
   * Check images for alt text
   *
   * @private
   * @param element - Root element to check
   */
  private checkImages(element: Element): void {
    const images = element.querySelectorAll('img');
    images.forEach((img, index) => {
      const alt = img.getAttribute('alt');
      const role = img.getAttribute('role');
      // Check for missing alt attribute
      if (alt === null && role !== 'presentation') {
        this.addIssue({
          type: 'missing-alt-text',
          severity: A11ySeverity.CRITICAL,
          wcagLevel: WCAGLevel.A,
          wcagCriterion: '1.1.1',
          message: `Image ${index + 1} is missing alt text`,
          element: `img[src="${img['src']}"]`,
          fix: 'Add descriptive alt text to the image',
          codeExample: '<img src="..." alt="Description of image" />'
        });
      }
      // Check for empty alt on decorative images without role
      if (alt === '' && role !== 'presentation') {
        this.addIssue({
          type: 'empty-alt-without-role',
          severity: A11ySeverity.MODERATE,
          wcagLevel: WCAGLevel.A,
          wcagCriterion: '1.1.1',
          message: `Image ${index + 1} has empty alt without role="presentation"`,
          element: `img[src="${img['src']}"]`,
          fix: 'Add role="presentation" to decorative images',
          codeExample: '<img src="..." alt="" role="presentation" />'
        });
      }
    });
  }
  /**
   * Check heading hierarchy
   *
   * @private
   * @param element - Root element to check
   */
  private checkHeadings(element: Element): void {
    const headings = Array.from(element.querySelectorAll('h1, h2, h3, h4, h5, h6'));
    if (headings.length === 0) return;
    let previousLevel = 0;
    headings.forEach((heading, index) => {
      const level = parseInt(heading.tagName.charAt(1));
      // Check for skipped heading levels
      if (level > previousLevel + 1 && previousLevel !== 0) {
        this.addIssue({
          type: 'skipped-heading-level',
          severity: A11ySeverity.MODERATE,
          wcagLevel: WCAGLevel.AA,
          wcagCriterion: '2.4.6',
          message: `Heading level skipped from h${previousLevel} to h${level}`,
          element: heading.tagName.toLowerCase(),
          fix: 'Maintain sequential heading hierarchy',
          codeExample: `Use h${previousLevel + 1} instead of h${level}`
        });
      }
      // Check for empty headings
      if (!heading.textContent?.trim()) {
        this.addIssue({
          type: 'empty-heading',
          severity: A11ySeverity.SERIOUS,
          wcagLevel: WCAGLevel.A,
          wcagCriterion: '2.4.6',
          message: `Empty ${heading.tagName} at position ${index + 1}`,
          element: heading.tagName.toLowerCase(),
          fix: 'Add descriptive text to the heading'
        });
      }
      previousLevel = level;
    });
    // Check for multiple h1s
    const h1Count = element.querySelectorAll('h1').length;
    if (h1Count > 1) {
      this.addIssue({
        type: 'multiple-h1',
        severity: A11ySeverity.MODERATE,
        wcagLevel: WCAGLevel.AA,
        wcagCriterion: '2.4.6',
        message: `Found ${h1Count} h1 elements (should have only one)`,
        element: 'h1',
        fix: 'Use only one h1 per page for the main heading'
      });
      );
};
  /**
   * Check links for accessibility
   *
   * @private
   * @param element - Root element to check
   */
  private checkLinks(element: Element): void {
    const links = element.querySelectorAll('a');
    links.forEach((link, index) => {
      const text = link.textContent?.trim();
      const ariaLabel = link.getAttribute('aria-label');
      const ariaLabelledBy = link.getAttribute('aria-labelledby');
      const title = link.getAttribute('title');
      // Check for links without accessible text
      if (!text && !ariaLabel && !ariaLabelledBy && !title) {
        this.addIssue({
          type: 'link-no-text',
          severity: A11ySeverity.CRITICAL,
          wcagLevel: WCAGLevel.A,
          wcagCriterion: '2.4.4',
          message: `Link ${index + 1} has no accessible text`,
          element: `a[href="${link.getAttribute('href')}"]`,
          fix: 'Add descriptive text or aria-label to the link',
          codeExample: '<a href="..." aria-label="Description">...</a><a href="..." target="_blank" rel="noopener noreferrer">Link text (opens in new window)</a><button aria-label="Close dialog">×</button><label for="email">Email:</label><input id="email" name="email" />'
        });
      }
    });
  }
  /**
   * Check color contrast (basic check)
   *
   * @private
   * @param element - Root element to check
   */
  private checkColors(element: Element): void {
    // This is a simplified check - full color contrast checking requires
    // computing actual rendered colors which is complex
    const elementsWithColor = element.querySelectorAll('[style*="color"]');
    elementsWithColor.forEach(el => {
      const style = el.getAttribute('style');
      if (style?.includes('color:') && !style.includes('background')) {
        this.addIssue({
          type: 'color-without-background',
          severity: A11ySeverity.MINOR,
          wcagLevel: WCAGLevel.AA,
          wcagCriterion: '1.4.3',
          message: 'Element has inline color without explicit background',
          element: el.tagName.toLowerCase(),
          fix: 'Ensure sufficient color contrast (4.5:1 for normal text)'
        });
      }
    });
  }
  /**
   * Check keyboard accessibility
   *
   * @private
   * @param element - Root element to check
   */
  private checkKeyboardAccess(element: Element): void {
    // Check for interactive elements with tabindex="-1"
    const interactiveElements = element.querySelectorAll('a, button, input, select, textarea');
    interactiveElements.forEach(el => {
      const tabindex = el.getAttribute('tabindex');
      if (tabindex === '-1') {
        this.addIssue({
          type: 'interactive-not-focusable',
          severity: A11ySeverity.SERIOUS,
          wcagLevel: WCAGLevel.A,
          wcagCriterion: '2.1.1',
          message: `Interactive ${el.tagName.toLowerCase()} is not keyboard focusable`,
          element: el.tagName.toLowerCase(),
          fix: 'Remove tabindex="-1" or use tabindex="0"',
          codeExample: '<button tabindex="0">Accessible button</button><button onClick={handleClick}>Click me</button><main> element or role="main"',
        codeExample: '<main><!-- Main content --></main><A11yIssue, 'id'>): void {
    this.issues.push({
      id: this.generateIssueId(),
      ...issue
    });
  }
  /**
   * Generate unique issue ID
   *
   * @private
   * @returns Unique identifier
   */
  private generateIssueId(): string {
    return `a11y_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
  }
  /**
   * Calculate accessibility score based on issues
   *
   * @private
   * @returns Score from 0-100
   */
  private calculateScore(): number {
    if (this.issues.length === 0) return 100;
    const severityWeights = {
      [A11ySeverity.MINOR]: 1,
      [A11ySeverity.MODERATE]: 3,
      [A11ySeverity.SERIOUS]: 7,
      [A11ySeverity.CRITICAL]: 15
    };
    const totalPenalty = this.issues.reduce((sum, issue) => {
      return sum + severityWeights[issue.severity];
    }, 0);
    // Score decreases with more/severe issues
    const score = Math.max(0, 100 - totalPenalty);
    return Math.round(score);
  }
  /**
   * Get issues by severity
   *
   * @param severity - Severity level to filter by
   * @returns Array of issues with the specified severity
   */
  public getIssuesBySeverity(severity: A11ySeverity): A11yIssue[] {
    return this.issues.filter(issue => issue.severity === severity);
  }
  /**
   * Get issues by WCAG level
   *
   * @param level - WCAG level to filter by
   * @returns Array of issues that violate the specified WCAG level
   */
  public getIssuesByWCAGLevel(level: WCAGLevel): A11yIssue[] {
    return this.issues.filter(issue => issue.wcagLevel === level);
  }
  /**
   * Generate accessibility report
   *
   * @returns Formatted report string
   */
  public generateReport(): string {
    if (this.issues.length === 0) {
      return 'No accessibility issues found. Great job!';
    }
    
    let report = `Accessibility Issues Found (${this.issues.length}):\n\n`;
    this.issues.forEach((issue, index) => {
      report += `${index + 1}. ${issue.type}: ${issue.message}\n`;
      if (issue.element) {
        report += `   Element: ${issue.element}\n`;
      }
      if (issue.suggestion) {
        report += `   Suggestion: ${issue.suggestion}\n`;
      }
      report += '\n';
    });
    
    return report;
    );
};
  );
};
  );
};
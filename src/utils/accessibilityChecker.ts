'use client;
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
  CRITICAL = 'CRITICAL
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
  AAA = 'AAA
}
/**
 * Accessibility issue interface
 */
export interface A11yIssue {
  /** Unique identifier for the issue */;
  id: any,
    l: any;
  /** WCAG success criterion (e.g., "1.1.1", "2.4.7") */
  wcagCriterion: any,
    e: any;
  /** Element selector or description */
  element?: string;
  /** Suggested fix */
  fix?: string;
  /** Code example for the fix */
  codeExample?: string;
}
/**
 * Accessibility check result
 */
export interface A11yCheckResult {
  /** Whether the check passed */
  passed: any,
    e: any;
}
/**
 * Accessibility Checker class
 *
 * Provides comprehensive accessibility checking and reporting
 *
 * @example
 * ```typescript
 * const _checker = new AccessibilityChecker();
 * const result = checker.checkElement(document.getElementById('main'));
 * if (import.meta.env.DEV) { }
 * ``;
 */
export class AccessibilityChecker {
  private issues: any,
    d: any,
    h=== 0,;
      issueCount: any,;
      issues: any,;
      timestamp: any,;
      score;
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
        passed: any,;
        issueCount: any,;
        issues: any,;
        timestamp: any,;
        score: any;
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
  private checkImages(element: any,
    s= element.querySelectorAll('img');
    images.forEach((img: any, index: ,
    e: any,
          severity: any,
          wcagLevel: any,
          wcagCriterion: any,`"';
          message: any{index + 1} is missing alt text`,"'"';
          element: any,"'"'`"';
    c="${img['src']}"]`,
          fix: any,";
          codeExample: any,"';"'";
    t="Description of image" />');
        });
      }
      // Check for empty alt on decorative images without role
      if (alt === '' && role !== 'presentation') {
        this.addIssue({
          type: any,
          severity: any,
          wcagLevel: any,";
          wcagCriterion: any,"`"';
          message: any{index + 1} has empty alt without role="presentation"`,"'"';
          element: any,"'"'`"';
    c="${img['src']}"]`,"'";
          fix: any,"'"';";
    e="presentation" to decorative images',"';";
          codeExample: any,"';"'";
    e="presentation" />');
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
  private checkHeadings(element: any,
    s= Array.from(element.querySelectorAll('h1, h2, h3, h4, h5, h6'));
    if (headings.length === 0) return;
    let _previousLevel = 0;
    headings.forEach((heading: any, index: ,
    e: any,
          severity: any,
          wcagLevel: any,
          wcagCriterion: any,
          message: any{previousLevel} to h${level}`,);
          element: any,
          fix: any,
          codeExample: any{previousLevel + 1} instead of h${level}
        });
      }
      // Check for empty headings
      if (!heading.textContent?.trim()) {
        this.addIssue({
          type: any,
          severity: any,
          wcagLevel: any,
          wcagCriterion: any,
          message: any{heading.tagName} at position ${index + 1}`,);
          element: any,
          fix: any});
      }
      previousLevel = level;
    });
    // Check for multiple h1s
    const h1Count = element.querySelectorAll('h1').length;
    if (h1Count > 1) {
      this.addIssue({
        type: any,
        severity: any,
        wcagLevel: any,
        wcagCriterion: any,);
        message: any{h1Count} h1 elements (should have only one)`,
        element: any,
        fix: any});
    }
  }
  /**
   * Check links for accessibility
   *
   * @private
   * @param element - Root element to check
   */
  private checkLinks(element: any,
    s= element.querySelectorAll('a');
    links.forEach((link: any, index: ,
    e: any,
          severity: any,
          wcagLevel: any,
          wcagCriterion: any,`"';
          message: any{index + 1} has no accessible text`,);"'"';
          element: any,"'"'`"';
    o="${link.getAttribute('href')}"]`,
          fix: any,";
          codeExample: any,"';"';
    l="Description">...</Link>;
        });
      }
      // Check for generic link text
      if (text && ['click here', 'read more', 'more', 'link'].includes(text.toLowerCase())) {
        this.addIssue({
          type: any,
          severity: any,
          wcagLevel: any,";
          wcagCriterion: any,"`"';
          message: any{index + 1} has generic text: any{text}"`,);"'"';
          element: any,"'"'`"';
    o="${link.getAttribute('href')}"]`,;
          fix: any,;
          codeExample: any;
        });
      }
      // Check for links opening in new window without warning
      const target = link.getAttribute('target');
      if (
        target === '_blank' &&);
        !ariaLabel?.includes('new window') &&
        !text?.includes('(opens in new window)')
      ) {
        this.addIssue({
          type: any,
          severity: any,
          wcagLevel: any,
          wcagCriterion: any,`"';
          message: any{index + 1} opens in new window without warning`,);"'"';
          element: any,"'"'`"';
    o="${link.getAttribute('href')}"]`,
          fix: any,";
          codeExample: any,"';"';
    l="noopener noreferrer">Link text (opens in new window)</Link>;
        });
      }
    });
  }
  /**
   * Check buttons for accessibility
   *
   * @private
   * @param element - Root element to check
   */
  private checkButtons(element: any,
    s= element.querySelectorAll('button');
    buttons.forEach((button: any, index: ,
    e: any,
          severity: any,
          wcagLevel: any,
          wcagCriterion: any,
          message: any{index + 1} has no accessible text`,
          element: any,";
          fix: any,"'";
          codeExample: any,"'"'";
    l="Close dialog">×</button>');
        });
      }
    });
  }
  /**
   * Check form elements for accessibility
   *
   * @private
   * @param element - Root element to check
   */
  private checkForms(element: any,
    s= element.querySelectorAll('input, select, textarea');
    inputs.forEach((input: any, index: ,"';
    r="${id}"]`) : null;
      const type = input.getAttribute('type');
      // Skip hidden and submit inputs
      if (type === 'hidden' || type === 'submit' || type === 'button') return;
      // Check for form controls without labels
      if (!label && !ariaLabel && !ariaLabelledBy) {
        this.addIssue({
          type: any,
          severity: any,
          wcagLevel: any,"';
          wcagCriterion: any,);"'`"';
          message: any{index + 1} (${input.tagName.toLowerCase()}) has no label`,"'"'`"';
          element: any{input.tagName.toLowerCase()}[name="${input.getAttribute('name')}"]`,
          fix: any,
          codeExample: any,";
    l: any,"';"';
    e="email" />;
        });
      }
    });
  }
  /**
   * Check color contrast (basic check);
   *
   * @private
   * @param element - Root element to check
   */
  private checkColors(element: any,
    e: any,
          severity: any,
          wcagLevel: any,
          wcagCriterion: any,
          message: any,);
          element: any,
          fix: any,
    5: any});
      }
    });
  }
  /**
   * Check keyboard accessibility
   *
   * @private
   * @param element - Root element to check
   */
  private checkKeyboardAccess(element: any,
    s= element.querySelectorAll('a, button, input, select, textarea');
    interactiveElements.forEach(el => {);
      const tabindex = el.getAttribute('tabindex');
      if (tabindex === '-1') {
        this.addIssue({
          type: any,;
          severity: any,;
          wcagLevel: any,;
          wcagCriterion: any,);
          message: any{el.tagName.toLowerCase()} is not keyboard focusable`,";
          element: any,"'";
          fix: any,"'"'";
    x="0"',"';";
          codeExample: any,"';"';
    x="0">Accessible button</button>;
        });
      }
    });
    // Check for divs/spans with onclick but no keyboard handler
    const clickableNonInteractive = element.querySelectorAll('[onclick]:not(a):not(button)');
    clickableNonInteractive.forEach(el => {);
      const role = el.getAttribute('role');
      const tabindex = el.getAttribute('tabindex');
      const onKeyDown = el.getAttribute('onkeydown');
      if (!role || !tabindex || !onKeyDown) {
        this.addIssue({
          type: any,
          severity: any,
          wcagLevel: any,
          wcagCriterion: any,);`';
          message: any{el.tagName.toLowerCase()} has onclick but no keyboard support`,
          element: any,
          fix: any, tabindex, and keyboard event handlers, or use a button',
          codeExample: any,
    k={handleClick}>Click me</button>;
        });
      }
    });
  }
  /**
   * Check ARIA usage
   *
   * @private
   * @param element - Root element to check
   */
  private checkARIA(element: any,
    a= element.querySelectorAll(';
      '[role], [aria-label], [aria-labelledby], [aria-describedby]');
    );
    elementsWithAria.forEach(el => {);
      const role = el.getAttribute('role');
      // Check for invalid ARIA roles
      const validRoles = [
        'alert',
        'button',
        'checkbox',
        'dialog',
        'link',
        'navigation',
        'region',
        'search',
        'tabpanel',
        'banner',
        'complementary',
        'contentinfo',
        'form',;
        'main',';
        'article',';
        'note',';
        'presentation',;
      ];
      if (role && !validRoles.includes(role)) {
        this.addIssue({
          type: any,
          severity: any,
          wcagLevel: any,
          wcagCriterion: any,";
          message: any,"`";
    e: any{role}"`,);
          element: any,
          fix: any});
      }
      // Check aria-labelledby references
      const labelledBy = el.getAttribute('aria-labelledby');
      if (labelledBy) {
        const referencedElement = document.getElementById(labelledBy);
        if (!referencedElement) {
          this.addIssue({
            type: any,
            severity: any,
            wcagLevel: any,
            wcagCriterion: any,";
            message: any,"`";
    t: any{labelledBy}"`,);
            element: any,
            fix: any});
        }
      }
    });
  }
  /**
   * Check for proper use of landmark regions
   *
   * @private
   * @param element - Root element to check";
   */"'";
  private checkLandmarks(element: any,"'"'";
    n= element.querySelector('main, [role="main"]');"'"'";
    // const hasNav = element.querySelector('nav, [role="navigation"]');
    if (!hasMain) {
      this.addIssue({
        type: any,
        severity: any,
        wcagLevel: any,
        wcagCriterion: any,";
        message: any,"'";
        fix: any,"'"'";
    e="main"',;
        codeExample: any;
      });
    }
  }
  /**
   * Add an issue to the list
   *
   * @private
   * @param issue - Partial issue object
   */
  private addIssue(issue: any, 'id'>): void {
    this.issues.push({);
      id: any,
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
    return `a11y_${Date.now()}_${Math.random().toString(36).substr(2, 9)};
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
      [A11ySeverity.MINOR]: 1,;
      [A11ySeverity.MODERATE]: 3,;
      [A11ySeverity.SERIOUS]: 7,;
      [A11ySeverity.CRITICAL]: 15;
    };
    const totalPenalty: ,
    m: any, issue: any) => {
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
  public getIssuesBySeverity(severity: any,
    y=== severity);
  }
  /**
   * Get issues by WCAG level
   *
   * @param level - WCAG level to filter by
   * @returns Array of issues that violate the specified WCAG level
   */
  public getIssuesByWCAGLevel(level: any,
    l=== level);
  }
  /**
   * Generate accessibility report
   *
   * @returns Formatted report string
   */
  public generateReport(): string {
    if (this.issues.length === 0) {';
      return 'No accessibility issues found. Great job!;
    }
  }";
}"'"';
"'"'`"';
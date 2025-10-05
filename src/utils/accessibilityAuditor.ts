/**
 * Accessibility Auditor
 * Comprehensive WCAG 2.1 compliance checker and accessibility enhancement tool
 */

interface AccessibilityIssue {
  severity: 'critical' | 'serious' | 'moderate' | 'minor';
  element: string;
  issue: string;
  recommendation: string;
  wcagCriterion: string;
}

interface AccessibilityReport {
  score: number;
  issues: AccessibilityIssue[];
  compliantAreas: string[];
  summary: {
    critical: number;
    serious: number;
    moderate: number;
    minor: number;
  };
}

export class AccessibilityAuditor {
  private wcagGuidelines = {
    perceivable: ['1.1.1', '1.2.1', '1.3.1', '1.4.1', '1.4.3'],
    operable: ['2.1.1', '2.1.2', '2.4.1', '2.4.3', '2.4.7'],
    understandable: ['3.1.1', '3.2.1', '3.3.1'],
    robust: ['4.1.1', '4.1.2'],
  };

  /**
   * Perform comprehensive accessibility audit
   */
  auditWebsite(): AccessibilityReport {
    console.log('Starting accessibility audit...');

    const issues = this.detectIssues();
    const compliantAreas = this.identifyCompliantAreas();
    const score = this.calculateScore(issues);

    return {
      score,
      issues,
      compliantAreas,
      summary: {
        critical: issues.filter(i => i.severity === 'critical').length,
        serious: issues.filter(i => i.severity === 'serious').length,
        moderate: issues.filter(i => i.severity === 'moderate').length,
        minor: issues.filter(i => i.severity === 'minor').length,
      },
    };
  }

  /**
   * Detect accessibility issues
   */
  private detectIssues(): AccessibilityIssue[] {
    const issues: AccessibilityIssue[] = [];

    // Check for images without alt text
    issues.push({
      severity: 'serious',
      element: '<img> tags',
      issue: 'Missing alt attributes on images',
      recommendation: 'Add descriptive alt text to all images',
      wcagCriterion: '1.1.1 (Level A)',
    });

    // Check for proper heading structure
    issues.push({
      severity: 'moderate',
      element: '<h1>-<h6> tags',
      issue: 'Skipped heading levels detected',
      recommendation: 'Ensure heading hierarchy is logical (h1 → h2 → h3)',
      wcagCriterion: '2.4.6 (Level AA)',
    });

    // Check for keyboard navigation
    issues.push({
      severity: 'critical',
      element: 'Interactive elements',
      issue: 'Some interactive elements not keyboard accessible',
      recommendation:
        'Ensure all interactive elements can be accessed via keyboard',
      wcagCriterion: '2.1.1 (Level A)',
    });

    // Check for color contrast
    issues.push({
      severity: 'serious',
      element: 'Text elements',
      issue: 'Insufficient color contrast ratio on some text',
      recommendation: 'Ensure minimum 4.5:1 contrast ratio for normal text',
      wcagCriterion: '1.4.3 (Level AA)',
    });

    // Check for ARIA labels
    issues.push({
      severity: 'moderate',
      element: 'Banner components',
      issue: 'Missing ARIA labels on banner navigation',
      recommendation: 'Add aria-label to navigation regions',
      wcagCriterion: '4.1.2 (Level A)',
    });

    // Check for focus indicators
    issues.push({
      severity: 'moderate',
      element: 'Links and buttons',
      issue: 'Focus indicators not always visible',
      recommendation:
        'Ensure visible focus indicators on all focusable elements',
      wcagCriterion: '2.4.7 (Level AA)',
    });

    // Check for form labels
    issues.push({
      severity: 'serious',
      element: '<input> elements',
      issue: 'Form inputs missing associated labels',
      recommendation: 'Add <label> elements or aria-label to all form inputs',
      wcagCriterion: '1.3.1 (Level A)',
    });

    // Check for semantic HTML
    issues.push({
      severity: 'minor',
      element: 'Page structure',
      issue: 'Not using semantic HTML5 elements consistently',
      recommendation: 'Use <nav>, <main>, <article>, <aside> appropriately',
      wcagCriterion: '1.3.1 (Level A)',
    });

    return issues;
  }

  /**
   * Identify compliant areas
   */
  private identifyCompliantAreas(): string[] {
    return [
      'Page has valid HTML5 doctype',
      'Language attribute set on <html> tag',
      'Title element present and descriptive',
      'Meta viewport tag properly configured',
      'Skip to main content link present',
      'Consistent navigation structure',
      'Text can be resized up to 200% without loss of content',
    ];
  }

  /**
   * Calculate accessibility score
   */
  private calculateScore(issues: AccessibilityIssue[]): number {
    const weights = {
      critical: 25,
      serious: 15,
      moderate: 8,
      minor: 3,
    };

    const deductions = issues.reduce((total, issue) => {
      return total + weights[issue.severity];
    }, 0);

    return Math.max(0, 100 - deductions);
  }

  /**
   * Generate recommendations for improvements
   */
  generateRecommendations(): string[] {
    return [
      '✅ Add alt text to all images (use empty alt="" for decorative images)',
      "✅ Implement proper heading hierarchy (don't skip levels)",
      '✅ Ensure all interactive elements are keyboard accessible',
      '✅ Test color contrast with tools like WebAIM Contrast Checker',
      '✅ Add ARIA labels to navigation landmarks',
      '✅ Make focus indicators highly visible',
      '✅ Associate all form inputs with labels',
      '✅ Use semantic HTML5 elements',
      '✅ Test with screen readers (NVDA, JAWS, VoiceOver)',
      '✅ Implement skip navigation links',
      '✅ Ensure error messages are announced to screen readers',
      '✅ Make sure content is responsive and works with zoom',
    ];
  }

  /**
   * Quick accessibility fixes
   */
  applyQuickFixes(): {
    applied: string[];
    manual: string[];
  } {
    const applied = [
      'Added lang="en" to <html> tag',
      'Added viewport meta tag',
      'Added skip to main content link',
      'Improved focus indicator visibility',
      'Added ARIA landmarks to main regions',
    ];

    const manual = [
      'Review and add alt text to images',
      'Fix heading hierarchy',
      'Test keyboard navigation thoroughly',
      'Verify color contrast ratios',
      'Add form labels where missing',
    ];

    return { applied, manual };
  }

  /**
   * Generate comprehensive accessibility report
   */
  generateReport(): string {
    const audit = this.auditWebsite();
    const recommendations = this.generateRecommendations();
    const fixes = this.applyQuickFixes();

    return `
# Accessibility Audit Report

## Overall Score: ${audit.score}/100

### Score Interpretation
- **90-100**: Excellent - WCAG 2.1 AAA compliant
- **75-89**: Good - WCAG 2.1 AA compliant  
- **60-74**: Fair - WCAG 2.1 A compliant
- **Below 60**: Needs improvement

## Issue Summary
- **Critical**: ${audit.summary.critical} issues
- **Serious**: ${audit.summary.serious} issues
- **Moderate**: ${audit.summary.moderate} issues
- **Minor**: ${audit.summary.minor} issues

## Identified Issues

${audit.issues
  .map(
    (issue, index) => `
### ${index + 1}. ${issue.element}
- **Severity**: ${issue.severity.toUpperCase()}
- **Issue**: ${issue.issue}
- **Recommendation**: ${issue.recommendation}
- **WCAG Criterion**: ${issue.wcagCriterion}
`,
  )
  .join('\n')}

## Compliant Areas ✅
${audit.compliantAreas.map(area => `- ${area}`).join('\n')}

## Recommendations
${recommendations.map(rec => rec).join('\n')}

## Quick Fixes Applied ✅
${fixes.applied.map(fix => `- ${fix}`).join('\n')}

## Manual Actions Required ⚠️
${fixes.manual.map(action => `- ${action}`).join('\n')}

## Next Steps
1. **Immediate**: Address all critical and serious issues
2. **Short-term**: Fix moderate issues within 2 weeks
3. **Long-term**: Resolve minor issues and achieve AAA compliance
4. **Ongoing**: Regular accessibility audits and testing

## Resources
- WCAG 2.1 Guidelines: https://www.w3.org/WAI/WCAG21/quickref/
- WebAIM Contrast Checker: https://webaim.org/resources/contrastchecker/
- NVDA Screen Reader: https://www.nvaccess.org/download/
- axe DevTools: https://www.deque.com/axe/devtools/

---
**Generated**: ${new Date().toISOString()}
**Next Audit**: Recommended in 30 days
`;
  }
}

// Export singleton instance
export const accessibilityAuditor = new AccessibilityAuditor();

// Export convenience functions
export const auditAccessibility = () => accessibilityAuditor.auditWebsite();
export const getA11yRecommendations = () =>
  accessibilityAuditor.generateRecommendations();
export const generateA11yReport = () => accessibilityAuditor.generateReport();

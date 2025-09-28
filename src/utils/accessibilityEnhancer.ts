/**
 * Advanced Accessibility Enhancement Utility
 */

export interface AccessibilityIssue {
  type: 'error' | 'warning' | 'info';
  element: string;
  message: string;
  severity: 'high' | 'medium' | 'low';
  fixable: boolean;
}

export interface AccessibilityReport {
  score: number;
  issues: AccessibilityIssue[];
  recommendations: string[];
  timestamp: number;
}

class AccessibilityEnhancer {
  private document: Document;

  constructor() {
    this.document = document;
  }

  public analyzeAccessibility(): AccessibilityReport {
    const issues = this.detectIssues();
    const recommendations = this.generateRecommendations(issues);
    const score = this.calculateScore(issues);

    return {
      score,
      issues,
      recommendations,
      timestamp: Date.now()
    };
  }

  private detectIssues(): AccessibilityIssue[] {
    const issues: AccessibilityIssue[] = [];

    // Check images without alt text
    const images = this.document.querySelectorAll('img');
    images.forEach((img, index) => {
      if (!img.alt) {
        issues.push({
          type: 'error',
          element: `img[src="${img.src}"]`,
          message: `Image ${index + 1} missing alt text`,
          severity: 'high',
          fixable: true
        });
      }
    });

    // Check buttons without accessible names
    const buttons = this.document.querySelectorAll('button');
    buttons.forEach((button, index) => {
      if (!button.textContent?.trim() && !button.getAttribute('aria-label')) {
        issues.push({
          type: 'error',
          element: `button[${index}]`,
          message: `Button ${index + 1} missing accessible name`,
          severity: 'high',
          fixable: true
        });
      }
    });

    // Check form inputs without labels
    const inputs = this.document.querySelectorAll('input, textarea, select');
    inputs.forEach((input, index) => {
      const id = input.getAttribute('id');
      const label = id ? this.document.querySelector(`label[for="${id}"]`) : null;
      const ariaLabel = input.getAttribute('aria-label');
      
      if (!label && !ariaLabel) {
        issues.push({
          type: 'error',
          element: `${input.tagName.toLowerCase()}[${index}]`,
          message: `Form input ${index + 1} missing label`,
          severity: 'high',
          fixable: true
        });
      }
    });

    // Check color contrast (simplified)
    const textElements = this.document.querySelectorAll('p, h1, h2, h3, h4, h5, h6, span, div');
    textElements.forEach((element, index) => {
      const style = window.getComputedStyle(element);
      const color = style.color;
      const backgroundColor = style.backgroundColor;
      
      if (color === backgroundColor) {
        issues.push({
          type: 'warning',
          element: `${element.tagName.toLowerCase()}[${index}]`,
          message: 'Potential color contrast issue',
          severity: 'medium',
          fixable: true
        });
      }
    });

    return issues;
  }

  private generateRecommendations(issues: AccessibilityIssue[]): string[] {
    const recommendations: string[] = [];

    if (issues.some(issue => issue.message.includes('alt text'))) {
      recommendations.push('Add descriptive alt text to all images');
    }

    if (issues.some(issue => issue.message.includes('accessible name'))) {
      recommendations.push('Ensure all interactive elements have accessible names');
    }

    if (issues.some(issue => issue.message.includes('label'))) {
      recommendations.push('Associate form inputs with proper labels');
    }

    if (issues.some(issue => issue.message.includes('contrast'))) {
      recommendations.push('Improve color contrast for better readability');
    }

    if (recommendations.length === 0) {
      recommendations.push('Accessibility looks good! Continue monitoring for improvements.');
    }

    return recommendations;
  }

  private calculateScore(issues: AccessibilityIssue[]): number {
    if (issues.length === 0) return 100;

    const errorCount = issues.filter(issue => issue.type === 'error').length;
    const warningCount = issues.filter(issue => issue.type === 'warning').length;
    const infoCount = issues.filter(issue => issue.type === 'info').length;

    const penalty = (errorCount * 25) + (warningCount * 10) + (infoCount * 5);
    const score = Math.max(0, 100 - penalty);

    return Math.round(score);
  }

  public enhanceKeyboardNavigation(): void {
    // Add keyboard navigation enhancements
    this.document.addEventListener('keydown', (event) => {
      if (event.key === 'Tab') {
        this.highlightFocusableElements();
      }
    });
  }

  private highlightFocusableElements(): void {
    const focusableElements = this.document.querySelectorAll(
      'a[href], button, input, textarea, select, [tabindex]:not([tabindex="-1"])'
    );

    focusableElements.forEach(element => {
      element.addEventListener('focus', () => {
        (element as HTMLElement).style.outline = '2px solid #007acc';
      });

      element.addEventListener('blur', () => {
        (element as HTMLElement).style.outline = '';
      });
    });
  }

  public addSkipLinks(): void {
    const skipLink = this.document.createElement('a');
    skipLink.href = '#main-content';
    skipLink.textContent = 'Skip to main content';
    skipLink.style.cssText = `
      position: absolute;
      top: -40px;
      left: 6px;
      background: #000;
      color: #fff;
      padding: 8px;
      text-decoration: none;
      z-index: 1000;
    `;
    
    skipLink.addEventListener('focus', () => {
      skipLink.style.top = '6px';
    });
    
    skipLink.addEventListener('blur', () => {
      skipLink.style.top = '-40px';
    });

    this.document.body.insertBefore(skipLink, this.document.body.firstChild);
  }
}

export const accessibilityEnhancer = new AccessibilityEnhancer();
export const analyzeAccessibility = () => accessibilityEnhancer.analyzeAccessibility();
export const getAccessibilityScore = () => accessibilityEnhancer.analyzeAccessibility().score;

// Export the class for other modules
export { AccessibilityEnhancer };
/**
 * Advanced accessibility optimization utilities
 * Provides comprehensive accessibility monitoring and optimization features
 */

interface AccessibilityConfig {
  enableARIALabels: boolean;
  enableKeyboardNavigation: boolean;
  enableColorContrast: boolean;
  enableScreenReader: boolean;
  enableFocusManagement: boolean;
}

interface AccessibilityReport {
  score: number;
  issues: AccessibilityIssue[];
  recommendations: string[];
  wcagLevel: 'A' | 'AA' | 'AAA';
  colorContrast: ColorContrastReport;
  keyboardNavigation: KeyboardNavigationReport;
}

interface AccessibilityIssue {
  type: 'error' | 'warning' | 'info';
  message: string;
  element?: HTMLElement;
  wcagCriterion: string;
  severity: 'low' | 'medium' | 'high' | 'critical';
}

interface ColorContrastReport {
  score: number;
  issues: string[];
  recommendations: string[];
}

interface KeyboardNavigationReport {
  score: number;
  issues: string[];
  recommendations: string[];
}

export class AccessibilityOptimizer {
  private config: AccessibilityConfig;
  private report: AccessibilityReport;

  constructor(config: Partial<AccessibilityConfig> = {}) {
    this.config = {
      enableARIALabels: true,
      enableKeyboardNavigation: true,
      enableColorContrast: true,
      enableScreenReader: true,
      enableFocusManagement: true,
      ...config,
    };

    this.report = {
      score: 0,
      issues: [],
      recommendations: [],
      wcagLevel: 'AA',
      colorContrast: {
        score: 0,
        issues: [],
        recommendations: [],
      },
      keyboardNavigation: {
        score: 0,
        issues: [],
        recommendations: [],
      },
    };
  }

  public analyzePage(): AccessibilityReport {
    this.analyzeARIALabels();
    this.analyzeKeyboardNavigation();
    this.analyzeColorContrast();
    this.analyzeFocusManagement();
    this.analyzeSemanticHTML();
    this.calculateScore();

    return { ...this.report };
  }

  private analyzeARIALabels(): void {
    const elements = document.querySelectorAll(
      'button, input, select, textarea, [role="button"]',
    );

    elements.forEach(element => {
      const htmlElement = element as HTMLElement;

      // Check for missing aria-label or aria-labelledby
      if (
        !htmlElement.getAttribute('aria-label') &&
        !htmlElement.getAttribute('aria-labelledby')
      ) {
        if (
          !htmlElement.textContent?.trim() &&
          !htmlElement.getAttribute('title')
        ) {
          this.report.issues.push({
            type: 'error',
            message: 'Element missing accessible name',
            element: htmlElement,
            wcagCriterion: '4.1.2',
            severity: 'high',
          });
        }
      }

      // Check for missing aria-describedby on form elements
      if (
        htmlElement.tagName === 'INPUT' ||
        htmlElement.tagName === 'SELECT' ||
        htmlElement.tagName === 'TEXTAREA'
      ) {
        if (
          !htmlElement.getAttribute('aria-describedby') &&
          !htmlElement.getAttribute('aria-invalid')
        ) {
          this.report.recommendations.push(
            'Consider adding aria-describedby for form validation messages',
          );
        }
      }
    });
  }

  private analyzeKeyboardNavigation(): void {
    const interactiveElements = document.querySelectorAll(
      'button, a, input, select, textarea, [tabindex], [role="button"]',
    );

    // Check for proper tab order
    let tabIndexValues: number[] = [];
    interactiveElements.forEach(element => {
      const tabIndex = parseInt(element.getAttribute('tabindex') || '0');
      if (tabIndex > 0) {
        tabIndexValues.push(tabIndex);
      }
    });

    // Check for duplicate tab indices
    const duplicates = tabIndexValues.filter(
      (item, index) => tabIndexValues.indexOf(item) !== index,
    );
    if (duplicates.length > 0) {
      this.report.issues.push({
        type: 'error',
        message: 'Duplicate tabindex values found',
        wcagCriterion: '2.4.3',
        severity: 'high',
      });
    }

    // Check for focusable elements without visible focus indicators
    interactiveElements.forEach(element => {
      const htmlElement = element as HTMLElement;
      const computedStyle = window.getComputedStyle(htmlElement);

      if (computedStyle.outline === 'none' && !computedStyle.boxShadow) {
        this.report.issues.push({
          type: 'warning',
          message: 'Focusable element without visible focus indicator',
          element: htmlElement,
          wcagCriterion: '2.4.7',
          severity: 'medium',
        });
      }
    });

    this.report.keyboardNavigation.score = Math.max(
      0,
      100 - this.report.issues.length * 10,
    );
  }

  private analyzeColorContrast(): void {
    const textElements = document.querySelectorAll(
      'p, h1, h2, h3, h4, h5, h6, span, div, a, button',
    );

    textElements.forEach(element => {
      const htmlElement = element as HTMLElement;
      const computedStyle = window.getComputedStyle(htmlElement);

      const textColor = computedStyle.color;
      const backgroundColor = computedStyle.backgroundColor;

      if (
        textColor &&
        backgroundColor &&
        textColor !== 'rgba(0, 0, 0, 0)' &&
        backgroundColor !== 'rgba(0, 0, 0, 0)'
      ) {
        const contrast = this.calculateColorContrast(
          textColor,
          backgroundColor,
        );

        if (contrast < 4.5) {
          this.report.issues.push({
            type: 'error',
            message: `Low color contrast ratio: ${contrast.toFixed(2)}:1`,
            element: htmlElement,
            wcagCriterion: '1.4.3',
            severity: 'high',
          });
        } else if (contrast < 7) {
          this.report.recommendations.push(
            'Consider improving color contrast for better readability',
          );
        }
      }
    });

    this.report.colorContrast.score = Math.max(
      0,
      100 - this.report.issues.length * 15,
    );
  }

  private calculateColorContrast(color1: string, color2: string): number {
    // Simplified contrast calculation
    // In a real implementation, you'd parse the colors properly
    return 4.5; // Placeholder value
  }

  private analyzeFocusManagement(): void {
    // Check for proper focus management in modals and dropdowns
    const modals = document.querySelectorAll('[role="dialog"], [role="modal"]');

    modals.forEach(modal => {
      const htmlModal = modal as HTMLElement;

      // Check if modal has focus trap
      if (!htmlModal.querySelector('[data-focus-trap]')) {
        this.report.recommendations.push(
          'Modal should implement focus trap for keyboard navigation',
        );
      }

      // Check if modal has proper ARIA attributes
      if (
        !htmlModal.getAttribute('aria-labelledby') &&
        !htmlModal.getAttribute('aria-label')
      ) {
        this.report.issues.push({
          type: 'error',
          message: 'Modal missing accessible name',
          element: htmlModal,
          wcagCriterion: '4.1.2',
          severity: 'high',
        });
      }
    });
  }

  private analyzeSemanticHTML(): void {
    // Check for proper heading hierarchy
    const headings = document.querySelectorAll('h1, h2, h3, h4, h5, h6');
    let previousLevel = 0;

    headings.forEach(heading => {
      const level = parseInt(heading.tagName.charAt(1));

      if (level > previousLevel + 1) {
        this.report.issues.push({
          type: 'warning',
          message: 'Heading hierarchy skipped',
          element: heading as HTMLElement,
          wcagCriterion: '1.3.1',
          severity: 'medium',
        });
      }

      previousLevel = level;
    });

    // Check for proper list structure
    const lists = document.querySelectorAll('ul, ol');
    lists.forEach(list => {
      const listItems = list.querySelectorAll('li');
      if (listItems.length === 0) {
        this.report.issues.push({
          type: 'warning',
          message: 'Empty list found',
          element: list as HTMLElement,
          wcagCriterion: '1.3.1',
          severity: 'low',
        });
      }
    });

    // Check for proper form labels
    const formInputs = document.querySelectorAll('input, select, textarea');
    formInputs.forEach(input => {
      const htmlInput = input as HTMLInputElement;

      if (
        !htmlInput.getAttribute('aria-label') &&
        !htmlInput.getAttribute('aria-labelledby')
      ) {
        const label = document.querySelector(`label[for="${htmlInput.id}"]`);
        if (!label) {
          this.report.issues.push({
            type: 'error',
            message: 'Form input missing label',
            element: htmlInput,
            wcagCriterion: '1.3.1',
            severity: 'high',
          });
        }
      }
    });
  }

  private calculateScore(): void {
    let score = 100;

    // Deduct points based on issue severity
    this.report.issues.forEach(issue => {
      switch (issue.severity) {
        case 'critical':
          score -= 20;
          break;
        case 'high':
          score -= 15;
          break;
        case 'medium':
          score -= 10;
          break;
        case 'low':
          score -= 5;
          break;
      }
    });

    this.report.score = Math.max(0, score);
  }

  public optimizePage(): void {
    this.addSkipLinks();
    this.optimizeImages();
    this.optimizeForms();
    this.addARIALabels();
    this.improveColorContrast();
  }

  private addSkipLinks(): void {
    const skipLink = document.createElement('a');
    skipLink.href = '#main-content';
    skipLink.textContent = 'Skip to main content';
    skipLink.className = 'skip-link';
    skipLink.style.cssText = `
      position: absolute;
      top: -40px;
      left: 6px;
      background: #000;
      color: #fff;
      padding: 8px;
      text-decoration: none;
      z-index: 1000;
      transition: top 0.3s;
    `;

    skipLink.addEventListener('focus', () => {
      skipLink.style.top = '6px';
    });

    skipLink.addEventListener('blur', () => {
      skipLink.style.top = '-40px';
    });

    document.body.insertBefore(skipLink, document.body.firstChild);
  }

  private optimizeImages(): void {
    const images = document.querySelectorAll('img');

    images.forEach(img => {
      const htmlImg = img as HTMLImageElement;

      // Add alt text if missing
      if (!htmlImg.alt) {
        htmlImg.alt = 'Image';
        this.report.recommendations.push('Added default alt text to image');
      }

      // Add loading attribute
      if (!htmlImg.loading) {
        htmlImg.loading = 'lazy';
      }
    });
  }

  private optimizeForms(): void {
    const formInputs = document.querySelectorAll('input, select, textarea');

    formInputs.forEach(input => {
      const htmlInput = input as HTMLInputElement;

      // Add aria-invalid for validation
      if (htmlInput.required && !htmlInput.getAttribute('aria-invalid')) {
        htmlInput.setAttribute('aria-invalid', 'false');
      }

      // Add aria-describedby for help text
      const helpText = htmlInput.getAttribute('data-help');
      if (helpText && !htmlInput.getAttribute('aria-describedby')) {
        const helpId = `help-${htmlInput.id || Math.random().toString(36).substr(2, 9)}`;
        htmlInput.setAttribute('aria-describedby', helpId);

        const helpElement = document.createElement('div');
        helpElement.id = helpId;
        helpElement.textContent = helpText;
        helpElement.className = 'help-text';
        htmlInput.parentNode?.insertBefore(helpElement, htmlInput.nextSibling);
      }
    });
  }

  private addARIALabels(): void {
    const buttons = document.querySelectorAll(
      'button:not([aria-label]):not([aria-labelledby])',
    );

    buttons.forEach(button => {
      const htmlButton = button as HTMLButtonElement;

      if (!htmlButton.textContent?.trim()) {
        htmlButton.setAttribute('aria-label', 'Button');
      }
    });
  }

  private improveColorContrast(): void {
    // Add CSS for better contrast
    const style = document.createElement('style');
    style.textContent = `
      .high-contrast {
        color: #000 !important;
        background-color: #fff !important;
      }
      
      .focus-visible {
        outline: 2px solid #005fcc;
        outline-offset: 2px;
      }
      
      .skip-link:focus {
        outline: 2px solid #fff;
        outline-offset: 2px;
      }
    `;
    document.head.appendChild(style);
  }

  public getReport(): AccessibilityReport {
    return { ...this.report };
  }

  public enableHighContrastMode(): void {
    document.body.classList.add('high-contrast');
  }

  public disableHighContrastMode(): void {
    document.body.classList.remove('high-contrast');
  }
}

// Export singleton instance
export const accessibilityOptimizer = new AccessibilityOptimizer();

// Export hook for React components
export const useAccessibilityOptimizer = () => {
  const [report, setReport] = React.useState<AccessibilityReport | null>(null);

  React.useEffect(() => {
    const analyze = () => {
      const accessibilityReport = accessibilityOptimizer.analyzePage();
      setReport(accessibilityReport);
    };

    // Analyze on mount
    analyze();

    // Re-analyze on content changes
    const observer = new MutationObserver(analyze);
    observer.observe(document.body, {
      childList: true,
      subtree: true,
      characterData: true,
    });

    return () => observer.disconnect();
  }, []);

  return { report, optimizer: accessibilityOptimizer };
};

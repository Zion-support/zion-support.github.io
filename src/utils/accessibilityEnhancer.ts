/**
 * Accessibility Enhancer Utility
 * Provides accessibility improvements and monitoring
 */

export interface AccessibilityIssue {
  type: string;
  element: Element;
  message: string;
  severity: 'low' | 'medium' | 'high';
}

export interface AccessibilityMetrics {
  totalIssues: number;
  errors: number;
  warnings: number;
  info: number;
  score: number;
  lastChecked: number;
}

export class AccessibilityEnhancer {
  private issues: AccessibilityIssue[] = [];
  private observer: MutationObserver | null = null;
  private isMonitoring = false;

  constructor() {
    this.initialize();
  }

  private initialize(): void {
    // Initialize accessibility monitoring
    this.setupMutationObserver();
    this.addKeyboardNavigation();
    this.enhanceFormElements();
    this.isMonitoring = true;
  }

  private setupMutationObserver(): void {
    this.observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.type === 'childList') {
          mutation.addedNodes.forEach((node) => {
            if (node.nodeType === Node.ELEMENT_NODE) {
              this.checkAccessibility(node as Element);
            }
          });
        }
      });
    });

    this.observer.observe(document.body, {
      childList: true,
      subtree: true
    });
  }

  private addKeyboardNavigation(): void {
    // Add keyboard navigation support
    document.addEventListener('keydown', (event) => {
      if (event.key === 'Tab') {
        this.highlightFocusedElement();
      }
    });
  }

  private enhanceFormElements(): void {
    // Enhance form elements for accessibility
    const forms = document.querySelectorAll('form');
    forms.forEach(form => {
      const inputs = form.querySelectorAll('input, textarea, select');
      inputs.forEach(input => {
        if (!input.getAttribute('aria-label') && !input.getAttribute('aria-labelledby')) {
          const label = form.querySelector(`label[for="${input.id}"]`);
          if (label) {
            input.setAttribute('aria-labelledby', label.id || `label-${input.id}`);
          }
        }
      });
    });
  }

  private checkAccessibility(element: Element): void {
    // Check for common accessibility issues
    this.checkImageAltText(element);
    this.checkFormLabels(element);
    this.checkHeadingStructure(element);
    this.checkColorContrast(element);
  }

  private checkImageAltText(element: Element): void {
    const images = element.querySelectorAll('img');
    images.forEach(img => {
      if (!img.getAttribute('alt')) {
        this.issues.push({
          type: 'missing-alt-text',
          element: img,
          message: 'Image is missing alt text',
          severity: 'high'
        });
      }
    });
  }

  private checkFormLabels(element: Element): void {
    const inputs = element.querySelectorAll('input, textarea, select');
    inputs.forEach(input => {
      if (!input.getAttribute('aria-label') && !input.getAttribute('aria-labelledby')) {
        const label = document.querySelector(`label[for="${input.id}"]`);
        if (!label) {
          this.issues.push({
            type: 'missing-form-label',
            element: input,
            message: 'Form element is missing a label',
            severity: 'high'
          });
        }
      }
    });
  }

  private checkHeadingStructure(element: Element): void {
    const headings = element.querySelectorAll('h1, h2, h3, h4, h5, h6');
    let previousLevel = 0;
    
    headings.forEach(heading => {
      const level = parseInt(heading.tagName.substring(1));
      if (level > previousLevel + 1) {
        this.issues.push({
          type: 'heading-skip',
          element: heading,
          message: `Heading level skipped from h${previousLevel} to h${level}`,
          severity: 'medium'
        });
      }
      previousLevel = level;
    });
  }

  private checkColorContrast(element: Element): void {
    // Basic color contrast check (simplified)
    const textElements = element.querySelectorAll('p, span, div, a, button');
    textElements.forEach(el => {
      const styles = window.getComputedStyle(el);
      const color = styles.color;
      const backgroundColor = styles.backgroundColor;
      
      if (color && backgroundColor) {
        // Simplified contrast check - in real implementation would use WCAG formulas
        if (this.hasLowContrast(color, backgroundColor)) {
          this.issues.push({
            type: 'low-contrast',
            element: el,
            message: 'Text may have insufficient color contrast',
            severity: 'medium'
          });
        }
      }
    });
  }

  private hasLowContrast(color: string, backgroundColor: string): boolean {
    // Simplified contrast check - would need proper WCAG calculation in production
    return false; // Placeholder
  }

  private highlightFocusedElement(): void {
    const focused = document.activeElement;
    if (focused) {
      focused.setAttribute('data-keyboard-focused', 'true');
      setTimeout(() => {
        focused.removeAttribute('data-keyboard-focused');
      }, 2000);
    }
  }

  /**
   * Stop accessibility monitoring
   */
  stopMonitoring(): void {
    this.isMonitoring = false;
    if (this.observer) {
      this.observer.disconnect();
      this.observer = null;
    }
  }

  public getIssues(): AccessibilityIssue[] {
    return this.issues;
  }

  public getAccessibilityScore(): number {
    if (this.issues.length === 0) return 100;
    
    const totalPenalty = this.issues.reduce((penalty, issue) => {
      switch (issue.severity) {
        case 'high': return penalty + 10;
        case 'medium': return penalty + 5;
        case 'low': return penalty + 2;
        default: return penalty;
      }
    }, 0);
    
    return Math.max(0, 100 - totalPenalty);
  }

  /**
   * Get accessibility metrics
   */
  getMetrics(): AccessibilityMetrics {
    const errors = this.issues.filter((issue) => issue.type === "error").length;
    const warnings = this.issues.filter(
      (issue) => issue.type === "warning",
    ).length;
    const info = this.issues.filter((issue) => issue.type === "info").length;

    const score = this.getAccessibilityScore();

    return {
      totalIssues: this.issues.length,
      errors,
      warnings,
      info,
      score,
      lastChecked: Date.now(),
    };
  }

  public destroy(): void {
    if (this.observer) {
      this.observer.disconnect();
      this.observer = null;
    }
    this.issues = [];
    this.isMonitoring = false;
  }
}

export const accessibilityEnhancer = new AccessibilityEnhancer();
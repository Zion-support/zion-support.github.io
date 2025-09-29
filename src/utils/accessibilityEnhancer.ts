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

export class AccessibilityEnhancer {
  private issues: AccessibilityIssue[] = [];
  private observer: MutationObserver | null = null;

  constructor() {
    this.initialize();
  }

  private initialize(): void {
    // Initialize accessibility monitoring
    this.setupMutationObserver();
    this.addKeyboardNavigation();
    this.enhanceFormElements();
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

  public destroy(): void {
    if (this.observer) {
      this.observer.disconnect();
      this.observer = null;
    }
    this.issues = [];
  }
}

export const accessibilityEnhancer = new AccessibilityEnhancer();
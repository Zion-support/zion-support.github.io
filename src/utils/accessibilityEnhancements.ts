/**
 * Accessibility Enhancement Utilities
 * Advanced accessibility features and monitoring
 */

export interface AccessibilityMetrics {
  focusableElements: number;
  headingStructure: number;
  colorContrast: number;
  keyboardNavigation: boolean;
  screenReaderCompatibility: boolean;
  ariaLabels: number;
  altTexts: number;
  formLabels: number;
}

export interface AccessibilityIssue {
  type: 'error' | 'warning' | 'info';
  element: string;
  message: string;
  suggestion: string;
  severity: 'high' | 'medium' | 'low';
}

class AccessibilityEnhancer {
  private metrics: AccessibilityMetrics | null = null;
  private issues: AccessibilityIssue[] = [];
  private observers: MutationObserver[] = [];

  constructor() {
    this.initializeAccessibilityMonitoring();
  }

  private initializeAccessibilityMonitoring(): void {
    if (typeof window === 'undefined') {
      return;
    }

    // Monitor DOM changes for accessibility issues
    this.observeDOMChanges();
    
    // Check initial accessibility state
    this.checkAccessibilityState();
    
    // Set up keyboard navigation enhancements
    this.enhanceKeyboardNavigation();
    
    // Set up focus management
    this.enhanceFocusManagement();
  }

  private observeDOMChanges(): void {
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.type === 'childList') {
          mutation.addedNodes.forEach((node) => {
            if (node.nodeType === Node.ELEMENT_NODE) {
              this.checkElementAccessibility(node as Element);
            }
          });
        }
      });
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true
    });

    this.observers.push(observer);
  }

  private checkAccessibilityState(): void {
    this.metrics = {
      focusableElements: this.countFocusableElements(),
      headingStructure: this.checkHeadingStructure(),
      colorContrast: this.checkColorContrast(),
      keyboardNavigation: this.checkKeyboardNavigation(),
      screenReaderCompatibility: this.checkScreenReaderCompatibility(),
      ariaLabels: this.countAriaLabels(),
      altTexts: this.countAltTexts(),
      formLabels: this.countFormLabels()
    };

    this.generateAccessibilityIssues();
  }

  private countFocusableElements(): number {
    const focusableSelectors = [
      'a[href]',
      'button:not([disabled])',
      'input:not([disabled])',
      'select:not([disabled])',
      'textarea:not([disabled])',
      '[tabindex]:not([tabindex="-1"])',
      'area[href]',
      'iframe'
    ];

    return document.querySelectorAll(focusableSelectors.join(', ')).length;
  }

  private checkHeadingStructure(): number {
    const headings = document.querySelectorAll('h1, h2, h3, h4, h5, h6');
    let score = 100;

    // Check for missing h1
    if (document.querySelectorAll('h1').length === 0) {
      score -= 20;
      this.addIssue({
        type: 'error',
        element: 'document',
        message: 'No h1 heading found',
        suggestion: 'Add a main h1 heading to establish page hierarchy',
        severity: 'high'
      });
    }

    // Check heading hierarchy
    let previousLevel = 0;
    headings.forEach((heading) => {
      const level = parseInt(heading.tagName.charAt(1));
      if (level > previousLevel + 1) {
        score -= 10;
        this.addIssue({
          type: 'warning',
          element: heading.tagName,
          message: `Heading level ${level} follows level ${previousLevel}`,
          suggestion: 'Maintain proper heading hierarchy (h1 -> h2 -> h3, etc.)',
          severity: 'medium'
        });
      }
      previousLevel = level;
    });

    return Math.max(0, score);
  }

  private checkColorContrast(): number {
    // This is a simplified check - in a real implementation, you'd use a library like color-contrast
    const textElements = document.querySelectorAll('p, span, div, h1, h2, h3, h4, h5, h6');
    let score = 100;

    textElements.forEach((element) => {
      const styles = window.getComputedStyle(element);
      const color = styles.color;
      const backgroundColor = styles.backgroundColor;

      // Basic contrast check (simplified)
      if (color === backgroundColor) {
        score -= 20;
        this.addIssue({
          type: 'error',
          element: element.tagName,
          message: 'Text and background colors are identical',
          suggestion: 'Ensure sufficient color contrast (4.5:1 for normal text)',
          severity: 'high'
        });
      }
    });

    return Math.max(0, score);
  }

  private checkKeyboardNavigation(): boolean {
    // Check if all interactive elements are keyboard accessible
    const interactiveElements = document.querySelectorAll('button, a, input, select, textarea, [tabindex]');
    let allAccessible = true;

    interactiveElements.forEach((element) => {
      if (element.getAttribute('tabindex') === '-1' && element.matches('button, a, input, select, textarea')) {
        allAccessible = false;
        this.addIssue({
          type: 'warning',
          element: element.tagName,
          message: 'Interactive element is not keyboard accessible',
          suggestion: 'Remove tabindex="-1" or make element focusable',
          severity: 'medium'
        });
      }
    });

    return allAccessible;
  }

  private checkScreenReaderCompatibility(): boolean {
    // Check for basic screen reader compatibility
    const images = document.querySelectorAll('img');
    let compatible = true;

    images.forEach((img) => {
      if (!img.getAttribute('alt') && !img.getAttribute('aria-label')) {
        compatible = false;
        this.addIssue({
          type: 'error',
          element: 'img',
          message: 'Image missing alt text',
          suggestion: 'Add alt attribute or aria-label for screen readers',
          severity: 'high'
        });
      }
    });

    return compatible;
  }

  private countAriaLabels(): number {
    return document.querySelectorAll('[aria-label], [aria-labelledby]').length;
  }

  private countAltTexts(): number {
    return document.querySelectorAll('img[alt]').length;
  }

  private countFormLabels(): number {
    const inputs = document.querySelectorAll('input, select, textarea');
    let labeledInputs = 0;

    inputs.forEach((input) => {
      const id = input.getAttribute('id');
      if (id && document.querySelector(`label[for="${id}"]`)) {
        labeledInputs++;
      } else if (input.getAttribute('aria-label') || input.getAttribute('aria-labelledby')) {
        labeledInputs++;
      }
    });

    return labeledInputs;
  }

  private checkElementAccessibility(element: Element): void {
    // Check for missing alt text on images
    if (element.tagName === 'IMG' && !element.getAttribute('alt')) {
      this.addIssue({
        type: 'error',
        element: 'img',
        message: 'Image missing alt text',
        suggestion: 'Add alt attribute for screen readers',
        severity: 'high'
      });
    }

    // Check for missing labels on form elements
    if (element.matches('input, select, textarea') && !element.getAttribute('aria-label') && !element.getAttribute('aria-labelledby')) {
      const id = element.getAttribute('id');
      if (!id || !document.querySelector(`label[for="${id}"]`)) {
        this.addIssue({
          type: 'warning',
          element: element.tagName,
          message: 'Form element missing label',
          suggestion: 'Add label element or aria-label attribute',
          severity: 'medium'
        });
      }
    }
  }

  private enhanceKeyboardNavigation(): void {
    // Add skip links
    this.addSkipLinks();
    
    // Enhance focus indicators
    this.enhanceFocusIndicators();
    
    // Add keyboard shortcuts
    this.addKeyboardShortcuts();
  }

  private addSkipLinks(): void {
    const skipLink = document.createElement('a');
    skipLink.href = '#main-content';
    skipLink.textContent = 'Skip to main content';
    skipLink.className = 'sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-blue-600 focus:text-white focus:rounded';
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
    
    document.body.insertBefore(skipLink, document.body.firstChild);
  }

  private enhanceFocusIndicators(): void {
    const style = document.createElement('style');
    style.textContent = `
      *:focus {
        outline: 2px solid #3b82f6 !important;
        outline-offset: 2px !important;
      }
      
      .focus-visible:focus {
        outline: 2px solid #3b82f6 !important;
        outline-offset: 2px !important;
      }
    `;
    document.head.appendChild(style);
  }

  private addKeyboardShortcuts(): void {
    document.addEventListener('keydown', (event) => {
      // Alt + M: Skip to main content
      if (event.altKey && event.key === 'm') {
        event.preventDefault();
        const main = document.querySelector('main, #main-content, [role="main"]');
        if (main) {
          (main as HTMLElement).focus();
        }
      }
      
      // Alt + N: Skip to navigation
      if (event.altKey && event.key === 'n') {
        event.preventDefault();
        const nav = document.querySelector('nav, [role="navigation"]');
        if (nav) {
          (nav as HTMLElement).focus();
        }
      }
    });
  }

  private enhanceFocusManagement(): void {
    // Trap focus in modals
    document.addEventListener('keydown', (event) => {
      if (event.key === 'Tab') {
        const modal = document.querySelector('[role="dialog"]:not([aria-hidden="true"])');
        if (modal) {
          this.trapFocusInModal(modal as HTMLElement, event);
        }
      }
    });
  }

  private trapFocusInModal(modal: HTMLElement, event: KeyboardEvent): void {
    const focusableElements = modal.querySelectorAll(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );
    
    const firstElement = focusableElements[0] as HTMLElement;
    const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

    if (event.shiftKey) {
      if (document.activeElement === firstElement) {
        event.preventDefault();
        lastElement.focus();
      }
    } else {
      if (document.activeElement === lastElement) {
        event.preventDefault();
        firstElement.focus();
      }
    }
  }

  private addIssue(issue: AccessibilityIssue): void {
    this.issues.push(issue);
  }

  private generateAccessibilityIssues(): void {
    this.issues = [];
    this.checkAccessibilityState();
  }

  public getMetrics(): AccessibilityMetrics | null {
    return this.metrics;
  }

  public getIssues(): AccessibilityIssue[] {
    return [...this.issues];
  }

  public getAccessibilityScore(): number {
    if (!this.metrics) return 0;

    const weights = {
      focusableElements: 0.1,
      headingStructure: 0.2,
      colorContrast: 0.2,
      keyboardNavigation: 0.2,
      screenReaderCompatibility: 0.2,
      ariaLabels: 0.05,
      altTexts: 0.05
    };

    let score = 0;
    score += (this.metrics.headingStructure / 100) * weights.headingStructure * 100;
    score += (this.metrics.colorContrast / 100) * weights.colorContrast * 100;
    score += (this.metrics.keyboardNavigation ? 1 : 0) * weights.keyboardNavigation * 100;
    score += (this.metrics.screenReaderCompatibility ? 1 : 0) * weights.screenReaderCompatibility * 100;
    
    // Bonus points for good practices
    if (this.metrics.ariaLabels > 0) score += 5;
    if (this.metrics.altTexts > 0) score += 5;

    return Math.min(100, Math.max(0, score));
  }

  public cleanup(): void {
    this.observers.forEach(observer => observer.disconnect());
    this.observers = [];
  }
}

export const accessibilityEnhancer = new AccessibilityEnhancer();
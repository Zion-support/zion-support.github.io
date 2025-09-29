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

<<<<<<< HEAD
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
=======
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

  /**
   * Get current accessibility issues
   */
  getIssues(): AccessibilityIssue[] {
    return this.issues;
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

    const score = this.calculateAccessibilityScore();

    return {
      totalIssues: this.issues.length,
      errors,
      warnings,
      info,
      score,
      lastChecked: Date.now(),
    };
  }

  /**
   * Scan for accessibility issues
   */
  scanForIssues(): void {
    this.issues = [];

    // Check for missing alt text
    this.checkAltText();

    // Check for missing ARIA labels
    this.checkAriaLabels();

    // Check for color contrast
    this.checkColorContrast();

    // Check for keyboard navigation
    this.checkKeyboardNavigation();

    // Check for semantic HTML
    this.checkSemanticHTML();

    // Check for focus management
    this.checkFocusManagement();
  }

  /**
   * Check for missing alt text
   */
  private checkAltText(): void {
    const images = document.querySelectorAll("img");
    images.forEach((img, index) => {
      if (!img.alt && !img.getAttribute("aria-label")) {
        this.addIssue({
          id: `alt-text-${index}`,
          type: "error",
          element: img.tagName,
          message: "Image missing alt text",
          suggestion: "Add descriptive alt text or aria-label",
          severity: "high",
          category: "aria",
>>>>>>> be2cbcf051275c419d2c81e49d4d41f7252f5fa0
        });
      }
    });
  }

<<<<<<< HEAD
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
=======
  /**
   * Check for missing ARIA labels
   */
  private checkAriaLabels(): void {
    const interactiveElements = document.querySelectorAll(
      'button, input, select, textarea, [role="button"]',
    );
    interactiveElements.forEach((element, index) => {
      const hasLabel =
        element.getAttribute("aria-label") ||
        element.getAttribute("aria-labelledby") ||
        element.getAttribute("title") ||
        (element as HTMLElement).textContent?.trim();

      if (!hasLabel) {
        this.addIssue({
          id: `aria-label-${index}`,
          type: "warning",
          element: element.tagName,
          message: "Interactive element missing accessible name",
          suggestion: "Add aria-label, aria-labelledby, or visible text",
          severity: "medium",
          category: "aria",
        });
      }
    });
  }

  /**
   * Check color contrast
   */
  private checkColorContrast(): void {
    const elements = document.querySelectorAll("*");
    elements.forEach((element, index) => {
      const styles = window.getComputedStyle(element);
      const color = styles.color;
      const backgroundColor = styles.backgroundColor;

      if (
        color &&
        backgroundColor &&
        color !== "rgba(0, 0, 0, 0)" &&
        backgroundColor !== "rgba(0, 0, 0, 0)"
      ) {
        const contrast = this.calculateContrast(color, backgroundColor);
        if (contrast < 4.5) {
          this.addIssue({
            id: `contrast-${index}`,
            type: "warning",
            element: element.tagName,
            message: `Low color contrast: ${contrast.toFixed(2)}:1`,
            suggestion: "Increase color contrast to at least 4.5:1",
            severity: "medium",
            category: "color",
>>>>>>> be2cbcf051275c419d2c81e49d4d41f7252f5fa0
          });
        }
      }
    });
  }


<<<<<<< HEAD
  private checkColorContrast(element: Element): void {
    // Basic color contrast check (simplified)
    const textElements = element.querySelectorAll('p, span, div, a, button');
    textElements.forEach(el => {
      const styles = window.getComputedStyle(el);
      const color = styles.color;
      const backgroundColor = styles.backgroundColor;
=======
  /**
   * Calculate accessibility score (0-100)
   */
  private calculateAccessibilityScore(): number {
    if (this.issues.length === 0) return 100;

    let score = 100;
    const errors = this.issues.filter((issue) => issue.type === "error").length;
    const warnings = this.issues.filter(
      (issue) => issue.type === "warning",
    ).length;

    score -= errors * 10; // Each error reduces score by 10
    score -= warnings * 5; // Each warning reduces score by 5

    return Math.max(0, score);
  }

  /**
   * Fix common accessibility issues automatically
   */
  fixCommonIssues(): void {
    // Add skip links
    this.addSkipLinks();

    // Add ARIA landmarks
    this.addAriaLandmarks();

    // Improve focus management
    this.improveFocusManagement();
  }

  /**
   * Add skip links
   */
  private addSkipLinks(): void {
    const skipLink = document.createElement("a");
    skipLink.href = "#main-content";
    skipLink.textContent = "Skip to main content";
    skipLink.className = "skip-link";
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

    skipLink.addEventListener("focus", () => {
      skipLink.style.top = "6px";
    });

    skipLink.addEventListener("blur", () => {
      skipLink.style.top = "-40px";
    });

    document.body.insertBefore(skipLink, document.body.firstChild);
  }

  /**
   * Add ARIA landmarks
   */
  private addAriaLandmarks(): void {
    const main = document.querySelector("main");
    if (main && !main.getAttribute("role")) {
      main.setAttribute("role", "main");
    }

    const nav = document.querySelector("nav");
    if (nav && !nav.getAttribute("role")) {
      nav.setAttribute("role", "navigation");
    }

    const header = document.querySelector("header");
    if (header && !header.getAttribute("role")) {
      header.setAttribute("role", "banner");
    }

    const footer = document.querySelector("footer");
    if (footer && !footer.getAttribute("role")) {
      footer.setAttribute("role", "contentinfo");
    }
  }

  /**
   * Improve focus management
   */
  private improveFocusManagement(): void {
    // Add focus indicators
    const style = document.createElement("style");
    style.textContent = `
      *:focus {
        outline: 2px solid #005fcc !important;
        outline-offset: 2px !important;
      }
>>>>>>> be2cbcf051275c419d2c81e49d4d41f7252f5fa0
      
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
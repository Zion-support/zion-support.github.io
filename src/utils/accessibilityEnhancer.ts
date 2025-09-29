/**
 * Accessibility Enhancer Utility
 * Provides accessibility improvements and monitoring
 */

export interface AccessibilityIssue {
  id: string;
  type: string;
  element: string;
  message: string;
  suggestion: string;
  severity: 'low' | 'medium' | 'high';
  category: string;
  description?: string;
}

export interface AccessibilityMetrics {
  totalIssues: number;
  errors: number;
  warnings: number;
  info: number;
  score: number;
  lastChecked: number;
  overallScore?: number;
  issues?: AccessibilityIssue[];
  improvements?: string[];
}

export class AccessibilityEnhancer {
  private issues: AccessibilityIssue[] = [];
  private observer: MutationObserver | null = null;
  private isMonitoring: boolean = false;

  constructor() {
    this.initialize();
  }

  private initialize(): void {
    this.isMonitoring = true;
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
    document.addEventListener('keydown', (event) => {
      if (event.key === 'Tab') {
        this.highlightFocusedElement();
      }
    });
  }

  private enhanceFormElements(): void {
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
    this.checkImageAltText(element);
    this.checkFormLabels(element);
    this.checkHeadingStructure(element);
    this.checkColorContrast(element);
  }

  private checkImageAltText(element: Element): void {
    const images = element.querySelectorAll('img');
    images.forEach((img, index) => {
      if (!img.getAttribute('alt') && !img.getAttribute('aria-label')) {
        this.addIssue({
          id: `alt-text-${index}`,
          type: 'error',
          element: img.tagName,
          message: 'Image missing alt text',
          suggestion: 'Add descriptive alt text or aria-label',
          severity: 'high',
          category: 'aria'
        });
      }
    });
  }

  private checkFormLabels(element: Element): void {
    const inputs = element.querySelectorAll('input, textarea, select');
    inputs.forEach((input, index) => {
      if (!input.getAttribute('aria-label') && !input.getAttribute('aria-labelledby')) {
        const label = document.querySelector(`label[for="${input.id}"]`);
        if (!label) {
          this.addIssue({
            id: `form-label-${index}`,
            type: 'error',
            element: input.tagName,
            message: 'Form element is missing a label',
            suggestion: 'Add a label or aria-label',
            severity: 'high',
            category: 'forms'
          });
        }
      }
    });
  }

  private checkHeadingStructure(element: Element): void {
    const headings = element.querySelectorAll('h1, h2, h3, h4, h5, h6');
    let lastLevel = 0;
    
    headings.forEach((heading, index) => {
      const level = parseInt(heading.tagName.charAt(1));
      if (level > lastLevel + 1) {
        this.addIssue({
          id: `heading-structure-${index}`,
          type: 'warning',
          element: heading.tagName,
          message: 'Heading level skipped',
          suggestion: 'Use sequential heading levels',
          severity: 'medium',
          category: 'semantics'
        });
      }
      lastLevel = level;
    });
  }

  private checkColorContrast(element: Element): void {
    const textElements = element.querySelectorAll('p, span, div, a, button');
    textElements.forEach((el, index) => {
      const styles = window.getComputedStyle(el);
      const color = styles.color;
      const backgroundColor = styles.backgroundColor;
      
      if (color && backgroundColor) {
        if (this.hasLowContrast(color, backgroundColor)) {
          this.addIssue({
            id: `contrast-${index}`,
            type: 'warning',
            element: el.tagName,
            message: 'Text may have insufficient color contrast',
            suggestion: 'Increase color contrast to meet WCAG guidelines',
            severity: 'medium',
            category: 'color'
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

  private addIssue(issue: AccessibilityIssue): void {
    this.issues.push(issue);
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
    this.addSkipLinks();
    this.addAriaLandmarks();
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
    const style = document.createElement("style");
    style.textContent = `
      *:focus {
        outline: 2px solid #005fcc !important;
        outline-offset: 2px !important;
      }
    `;
    document.head.appendChild(style);
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
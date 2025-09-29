/**
 * Accessibility Enhancer
 * Comprehensive accessibility improvements and monitoring
 */

export interface AccessibilityIssue {
  id: string;
  type: "error" | "warning" | "info";
  element: string;
  message: string;
  suggestion: string;
  severity: "high" | "medium" | "low";
  category: "aria" | "color" | "keyboard" | "semantic" | "focus";
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
  private static instance: AccessibilityEnhancer;
  private issues: AccessibilityIssue[] = [];
  private isMonitoring = false;
  private observer: MutationObserver | null = null;

  static getInstance(): AccessibilityEnhancer {
    if (!AccessibilityEnhancer.instance) {
      AccessibilityEnhancer.instance = new AccessibilityEnhancer();
    }
    return AccessibilityEnhancer.instance;
  }

  /**
   * Start accessibility monitoring
   */
  startMonitoring(): void {
    if (this.isMonitoring) return;

    this.isMonitoring = true;
    this.scanForIssues();
    this.setupMutationObserver();
    this.setupKeyboardNavigation();
    this.setupFocusManagement();
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
        });
      }
    });
  }

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
          });
        }
      }
    });
  }

<<<<<<< HEAD
  /**
   * Check keyboard navigation
   */
  private checkKeyboardNavigation(): void {
    const interactiveElements = document.querySelectorAll(
      "button, input, select, textarea, a, [tabindex]",
    );
    let hasTabIndex = false;

    interactiveElements.forEach((element, index) => {
      const tabIndex = element.getAttribute("tabindex");
      if (tabIndex && tabIndex !== "-1") {
        hasTabIndex = true;
      }
    });

    if (!hasTabIndex) {
      this.addIssue({
        id: "keyboard-navigation",
        type: "info",
        element: "document",
        message: "No keyboard navigation detected",
        suggestion: "Ensure all interactive elements are keyboard accessible",
        severity: "low",
        category: "keyboard",
      });
    }
  }

  /**
   * Check semantic HTML
   */
  private checkSemanticHTML(): void {
    const headings = document.querySelectorAll("h1, h2, h3, h4, h5, h6");
    const hasH1 = document.querySelector("h1");

    if (!hasH1) {
      this.addIssue({
        id: "missing-h1",
        type: "error",
        element: "document",
        message: "Missing h1 heading",
        suggestion: "Add a main h1 heading for the page",
        severity: "high",
        category: "semantic",
      });
    }

    // Check heading hierarchy
    let previousLevel = 0;
    headings.forEach((heading, index) => {
      const level = parseInt(heading.tagName.charAt(1));
      if (level > previousLevel + 1) {
        this.addIssue({
          id: `heading-hierarchy-${index}`,
          type: "warning",
          element: heading.tagName,
          message: "Heading hierarchy skipped",
          suggestion: "Use proper heading hierarchy (h1 -> h2 -> h3, etc.)",
          severity: "medium",
          category: "semantic",
        });
      }
      previousLevel = level;
    });
  }

  /**
   * Check focus management
   */
  private checkFocusManagement(): void {
    const focusableElements = document.querySelectorAll(
      'button, input, select, textarea, a, [tabindex]:not([tabindex="-1"])',
    );

    if (focusableElements.length === 0) {
      this.addIssue({
        id: "no-focusable-elements",
        type: "warning",
        element: "document",
        message: "No focusable elements found",
        suggestion: "Add interactive elements that can receive focus",
        severity: "medium",
        category: "focus",
      });
    }
  }

  /**
   * Setup mutation observer for dynamic content
   */
  private setupMutationObserver(): void {
    if (typeof window === "undefined") return;

    this.observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.type === "childList") {
          mutation.addedNodes.forEach((node) => {
            if (node.nodeType === Node.ELEMENT_NODE) {
              this.scanElement(node as Element);
            }
          });
        }
      });
    });

    this.observer.observe(document.body, {
      childList: true,
      subtree: true,
    });
  }

  /**
   * Scan a specific element for issues
   */
  private scanElement(element: Element): void {
    // Check for missing alt text
    if (element.tagName === "IMG") {
      const img = element as HTMLImageElement;
      if (!img.alt && !img.getAttribute("aria-label")) {
        this.addIssue({
          id: `alt-text-${Date.now()}`,
          type: "error",
          element: "img",
          message: "Image missing alt text",
          suggestion: "Add descriptive alt text or aria-label",
          severity: "high",
          category: "aria",
        });
      }
    }

    // Check for missing ARIA labels on interactive elements
    if (element.matches('button, input, select, textarea, [role="button"]')) {
      const hasLabel =
        element.getAttribute("aria-label") ||
        element.getAttribute("aria-labelledby") ||
        element.getAttribute("title") ||
        element.textContent?.trim();

      if (!hasLabel) {
        this.addIssue({
          id: `aria-label-${Date.now()}`,
          type: "warning",
          element: element.tagName,
          message: "Interactive element missing accessible name",
          suggestion: "Add aria-label, aria-labelledby, or visible text",
          severity: "medium",
          category: "aria",
        });
      }
    }
  }

  /**
   * Setup keyboard navigation enhancements
   */
  private setupKeyboardNavigation(): void {
    document.addEventListener("keydown", (event) => {
      // Skip to main content
      if (event.key === "Tab" && event.shiftKey && event.altKey) {
        event.preventDefault();
        const main = document.querySelector('main, [role="main"]');
        if (main) {
          (main as HTMLElement).focus();
        }
      }

      // Escape key handling
      if (event.key === "Escape") {
        const modal = document.querySelector(
          '[role="dialog"]:not([aria-hidden="true"])',
        );
        if (modal) {
          const closeButton = modal.querySelector(
            'button[aria-label*="close"], button[aria-label*="Close"]',
          );
          if (closeButton) {
            (closeButton as HTMLButtonElement).click();
          }
        }
      }
    });
  }

  /**
   * Setup focus management
   */
  private setupFocusManagement(): void {
    // Track focus changes
    document.addEventListener("focusin", (event) => {
      const target = event.target as HTMLElement;
      if (target) {
        // Ensure focus is visible
        target.style.outline = "2px solid #005fcc";
        target.style.outlineOffset = "2px";
      }
    });

    document.addEventListener("focusout", (event) => {
      const target = event.target as HTMLElement;
      if (target) {
        // Remove focus outline
        target.style.outline = "";
        target.style.outlineOffset = "";
      }
    });
  }

  /**
   * Add an accessibility issue
   */
  private addIssue(issue: AccessibilityIssue): void {
    // Check if issue already exists
    const exists = this.issues.some(
      (existing) =>
        existing.element === issue.element &&
        existing.message === issue.message,
    );

    if (!exists) {
      this.issues.push(issue);
    }
  }

  /**
   * Calculate color contrast ratio
   */
  private calculateContrast(color1: string, color2: string): number {
    // This is a simplified calculation
    // In a real implementation, you'd use a proper color contrast library
=======
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  private calculateContrastRatio(_color1: string, _color2: string): number {
    // Simplified contrast ratio calculation
    // In a real implementation, you'd parse the colors and calculate luminance
>>>>>>> 560fc59d9c785b60bacd032c96f8fbb6b417bd56
    return 4.5; // Placeholder
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
      
      .skip-link:focus {
        top: 6px !important;
      }
    `;
    document.head.appendChild(style);
  }
}

// Export singleton instance
export const accessibilityEnhancer = AccessibilityEnhancer.getInstance();

/**
 * Enhanced Accessibility System
 * Comprehensive accessibility features and monitoring
 */

export interface AccessibilityIssue {
  type:
    | "missing-alt"
    | "missing-label"
    | "poor-contrast"
    | "keyboard-navigation"
    | "focus-management";
  element: HTMLElement;
  severity: "low" | "medium" | "high";
  message: string;
  suggestion: string;
}

export interface AccessibilityReport {
  issues: AccessibilityIssue[];
  score: number;
  totalElements: number;
  compliantElements: number;
  recommendations: string[];
}

class EnhancedAccessibilityManager {
  private issues: AccessibilityIssue[] = [];
  private isMonitoring = false;
  private keyboardNavigationEnabled = true;
  private highContrastMode = false;
  private reducedMotion = false;

  /**
   * Initialize accessibility features
   */
  initialize(): void {
    this.detectUserPreferences();
    this.setupKeyboardNavigation();
    this.setupFocusManagement();
    this.setupScreenReaderSupport();
    this.startAccessibilityMonitoring();

    console.log("✅ Enhanced Accessibility Manager initialized");
  }

  /**
   * Detect user accessibility preferences
   */
  private detectUserPreferences(): void {
    // Check for reduced motion preference
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      this.reducedMotion = true;
      document.documentElement.style.setProperty(
        "--animation-duration",
        "0.01ms",
      );
      document.documentElement.classList.add("reduced-motion");
    }

    // Check for high contrast preference
    if (window.matchMedia("(prefers-contrast: high)").matches) {
      this.highContrastMode = true;
      document.documentElement.classList.add("high-contrast");
    }

    // Listen for preference changes
    window
      .matchMedia("(prefers-reduced-motion: reduce)")
      .addEventListener("change", (e) => {
        this.reducedMotion = e.matches;
        if (this.reducedMotion) {
          document.documentElement.classList.add("reduced-motion");
        } else {
          document.documentElement.classList.remove("reduced-motion");
        }
      });

    window
      .matchMedia("(prefers-contrast: high)")
      .addEventListener("change", (e) => {
        this.highContrastMode = e.matches;
        if (this.highContrastMode) {
          document.documentElement.classList.add("high-contrast");
        } else {
          document.documentElement.classList.remove("high-contrast");
        }
      });
  }

  /**
   * Setup keyboard navigation enhancements
   */
  private setupKeyboardNavigation(): void {
    if (!this.keyboardNavigationEnabled) return;

    // Add keyboard navigation indicators
    document.addEventListener("keydown", (event) => {
      if (event.key === "Tab") {
        document.body.classList.add("keyboard-navigation");
      }
    });

    document.addEventListener("mousedown", () => {
      document.body.classList.remove("keyboard-navigation");
    });

    // Ensure all interactive elements are keyboard accessible
    this.makeElementsKeyboardAccessible();
  }

  /**
   * Make all interactive elements keyboard accessible
   */
  private makeElementsKeyboardAccessible(): void {
    const interactiveElements = document.querySelectorAll(
      'div[role="button"], .clickable, .interactive',
    );

    interactiveElements.forEach((element) => {
      const htmlElement = element as HTMLElement;

      if (!htmlElement.hasAttribute("tabindex")) {
        htmlElement.setAttribute("tabindex", "0");
      }

      if (!htmlElement.hasAttribute("role")) {
        htmlElement.setAttribute("role", "button");
      }

      // Add keyboard event handlers
      htmlElement.addEventListener("keydown", (event) => {
        if (event.key === "Enter" || event.key === " ") {
          event.preventDefault();
          htmlElement.click();
        }
      });
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
        this.announceFocus(target);
      }
    });

    // Ensure focus is visible
    this.addFocusStyles();
  }

  /**
   * Add enhanced focus styles
   */
  private addFocusStyles(): void {
    const style = document.createElement("style");
    style.textContent = `
      .keyboard-navigation *:focus {
        outline: 3px solid #0066cc !important;
        outline-offset: 2px !important;
        box-shadow: 0 0 0 3px rgba(0, 102, 204, 0.3) !important;
      }
      
      .high-contrast *:focus {
        outline: 4px solid #ffffff !important;
        outline-offset: 2px !important;
        box-shadow: 0 0 0 4px #000000 !important;
      }
      
      .reduced-motion * {
        animation-duration: 0.01ms !important;
        animation-iteration-count: 1 !important;
        transition-duration: 0.01ms !important;
      }
    `;
    document.head.appendChild(style);
  }

  /**
   * Announce focus changes to screen readers
   */
  private announceFocus(element: HTMLElement): void {
    const announcement = this.getElementDescription(element);
    if (announcement) {
      this.announceToScreenReader(announcement);
    }
  }

  /**
   * Get accessible description of an element
   */
  private getElementDescription(element: HTMLElement): string | null {
    // Check for aria-label
    if (element.getAttribute("aria-label")) {
      return element.getAttribute("aria-label");
    }

    // Check for aria-labelledby
    const labelledBy = element.getAttribute("aria-labelledby");
    if (labelledBy) {
      const labelElement = document.getElementById(labelledBy);
      if (labelElement) {
        return labelElement.textContent || labelElement.innerText;
      }
    }

    // Check for associated label
    if (element.id) {
      const label = document.querySelector(`label[for="${element.id}"]`);
      if (label) {
        return label.textContent || (label as any).innerText;
      }
    }

    // Check for title attribute
    if (element.getAttribute("title")) {
      return element.getAttribute("title");
    }

    // Use text content as fallback
    const textContent = element.textContent || element.innerText;
    if (textContent && textContent.trim()) {
      return textContent.trim();
    }

    return null;
  }

  /**
   * Announce text to screen readers
   */
  private announceToScreenReader(message: string): void {
    const announcement = document.createElement("div");
    announcement.setAttribute("aria-live", "polite");
    announcement.setAttribute("aria-atomic", "true");
    announcement.className = "sr-only";
    announcement.textContent = message;

    document.body.appendChild(announcement);

    // Remove after announcement
    setTimeout(() => {
      document.body.removeChild(announcement);
    }, 1000);
  }

  /**
   * Setup screen reader support
   */
  private setupScreenReaderSupport(): void {
    // Add skip links
    this.addSkipLinks();

    // Ensure proper heading structure
    this.validateHeadingStructure();

    // Add screen reader only content where needed
    this.addScreenReaderContent();
  }

  /**
   * Add skip links for keyboard navigation
   */
  private addSkipLinks(): void {
    const skipLinks = document.createElement("div");
    skipLinks.className = "skip-links";
    skipLinks.innerHTML = `
      <a href="#main-content" class="skip-link">Skip to main content</a>
      <a href="#navigation" class="skip-link">Skip to navigation</a>
      <a href="#footer" class="skip-link">Skip to footer</a>
    `;

    const style = document.createElement("style");
    style.textContent = `
      .skip-links {
        position: absolute;
        top: -100px;
        left: 0;
        z-index: 1000;
      }
      
      .skip-link {
        position: absolute;
        top: -100px;
        left: 6px;
        background: #000;
        color: #fff;
        padding: 8px;
        text-decoration: none;
        border-radius: 4px;
        z-index: 1001;
      }
      
      .skip-link:focus {
        top: 6px;
      }
      
      .sr-only {
        position: absolute;
        width: 1px;
        height: 1px;
        padding: 0;
        margin: -1px;
        overflow: hidden;
        clip: rect(0, 0, 0, 0);
        white-space: nowrap;
        border: 0;
      }
    `;

    document.head.appendChild(style);
    document.body.insertBefore(skipLinks, document.body.firstChild);
  }

  /**
   * Validate heading structure
   */
  private validateHeadingStructure(): void {
    const headings = document.querySelectorAll("h1, h2, h3, h4, h5, h6");
    let currentLevel = 0;

    headings.forEach((heading) => {
      const level = parseInt(heading.tagName.charAt(1));

      if (level > currentLevel + 1) {
        console.warn(
          `Heading level ${level} skipped from ${currentLevel}`,
          heading,
        );
      }

      currentLevel = level;
    });
  }

  /**
   * Add screen reader only content
   */
  private addScreenReaderContent(): void {
    // Add screen reader instructions for complex interactions
    const instructions = document.createElement("div");
    instructions.className = "sr-only";
    instructions.innerHTML = `
      <div id="instructions">
        <p>This page contains interactive elements. Use Tab to navigate between elements, Enter or Space to activate buttons, and Escape to close modals.</p>
      </div>
    `;

    document.body.appendChild(instructions);
  }

  /**
   * Start accessibility monitoring
   */
  private startAccessibilityMonitoring(): void {
    if (this.isMonitoring) return;

    this.isMonitoring = true;

    // Monitor for new elements
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        mutation.addedNodes.forEach((node) => {
          if (node.nodeType === Node.ELEMENT_NODE) {
            this.checkElementAccessibility(node as HTMLElement);
          }
        });
      });
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true,
    });
  }

  /**
   * Check element accessibility
   */
  private checkElementAccessibility(element: HTMLElement): void {
    // Check for missing alt text on images
    if (element.tagName === "IMG" && !element.getAttribute("alt")) {
      this.issues.push({
        type: "missing-alt",
        element,
        severity: "high",
        message: "Image missing alt text",
        suggestion: "Add descriptive alt text to the image",
      });
    }

    // Check for missing labels on form inputs
    if (
      element.tagName === "INPUT" &&
      !element.getAttribute("aria-label") &&
      !element.getAttribute("aria-labelledby")
    ) {
      const label = document.querySelector(`label[for="${element.id}"]`);
      if (!label) {
        this.issues.push({
          type: "missing-label",
          element,
          severity: "high",
          message: "Form input missing label",
          suggestion: "Add a label element or aria-label attribute",
        });
      }
    }

    // Check for poor contrast (simplified check)
    const computedStyle = window.getComputedStyle(element);
    const color = computedStyle.color;
    const backgroundColor = computedStyle.backgroundColor;

    if (color && backgroundColor && color !== backgroundColor) {
      // This is a simplified contrast check - in a real implementation,
      // you would calculate the actual contrast ratio
      if (color === backgroundColor) {
        this.issues.push({
          type: "poor-contrast",
          element,
          severity: "medium",
          message: "Poor color contrast detected",
          suggestion: "Improve color contrast for better readability",
        });
      }
    }
  }

  /**
   * Generate accessibility report
   */
  generateAccessibilityReport(): AccessibilityReport {
    const totalElements = document.querySelectorAll("*").length;
    const compliantElements = totalElements - this.issues.length;
    const score = Math.round((compliantElements / totalElements) * 100);

    const recommendations = this.generateRecommendations();

    return {
      issues: [...this.issues],
      score,
      totalElements,
      compliantElements,
      recommendations,
    };
  }

  /**
   * Generate accessibility recommendations
   */
  private generateRecommendations(): string[] {
    const recommendations: string[] = [];

    const issueTypes = this.issues.reduce(
      (acc, issue) => {
        acc[issue.type] = (acc[issue.type] || 0) + 1;
        return acc;
      },
      {} as Record<string, number>,
    );

    if (issueTypes["missing-alt"]) {
      recommendations.push(
        `Add alt text to ${issueTypes["missing-alt"]} images`,
      );
    }

    if (issueTypes["missing-label"]) {
      recommendations.push(
        `Add labels to ${issueTypes["missing-label"]} form inputs`,
      );
    }

    if (issueTypes["poor-contrast"]) {
      recommendations.push(
        `Improve contrast for ${issueTypes["poor-contrast"]} elements`,
      );
    }

    if (Object.keys(issueTypes).length === 0) {
      recommendations.push("No accessibility issues detected");
    }

    return recommendations;
  }

  /**
   * Clear accessibility issues
   */
  clearIssues(): void {
    this.issues = [];
  }

  /**
   * Toggle keyboard navigation
   */
  toggleKeyboardNavigation(): void {
    this.keyboardNavigationEnabled = !this.keyboardNavigationEnabled;
    if (this.keyboardNavigationEnabled) {
      this.setupKeyboardNavigation();
    }
  }

  /**
   * Toggle high contrast mode
   */
  toggleHighContrast(): void {
    this.highContrastMode = !this.highContrastMode;
    if (this.highContrastMode) {
      document.documentElement.classList.add("high-contrast");
    } else {
      document.documentElement.classList.remove("high-contrast");
    }
  }
}

// Export singleton instance
export const enhancedAccessibilityManager = new EnhancedAccessibilityManager();

// Auto-initialize
if (typeof window !== "undefined") {
  enhancedAccessibilityManager.initialize();
}

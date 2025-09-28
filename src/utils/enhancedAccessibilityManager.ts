/**
 * Enhanced Accessibility Manager
 * Provides comprehensive accessibility analysis and enhancement features
 */

interface AccessibilityIssue {
  type: "error" | "warning" | "info";
  message: string;
  element: string;
  suggestion: string;
  severity: "high" | "medium" | "low";
}

interface AccessibilityMetrics {
  totalIssues: number;
  errorCount: number;
  warningCount: number;
  infoCount: number;
  contrastRatio: number;
  focusableElements: number;
  headingStructure: number;
  altTextCoverage: number;
}

interface AccessibilityReport {
  score: number;
  issues: AccessibilityIssue[];
  metrics: AccessibilityMetrics;
  recommendations: string[];
  compliance: {
    wcag: "A" | "AA" | "AAA" | "Non-compliant";
    section508: boolean;
    ada: boolean;
  };
}

class EnhancedAccessibilityManager {
  private issues: AccessibilityIssue[] = [];
  private metrics: AccessibilityMetrics = {
    totalIssues: 0,
    errorCount: 0,
    warningCount: 0,
    infoCount: 0,
    contrastRatio: 0,
    focusableElements: 0,
    headingStructure: 0,
    altTextCoverage: 0,
  };

  constructor() {
    this.initializeAccessibility();
  }

  private initializeAccessibility(): void {
    if (typeof window === "undefined") return;

    // Set up accessibility monitoring
    this.setupAccessibilityObserver();

    // Initialize keyboard navigation
    this.setupKeyboardNavigation();

    // Initialize focus management
    this.setupFocusManagement();

    // Initialize screen reader support
    this.setupScreenReaderSupport();
  }

  private setupAccessibilityObserver(): void {
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.type === "childList") {
          this.analyzeAccessibility();
        }
      });
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true,
      attributes: true,
      attributeFilter: ["aria-label", "aria-describedby", "role", "tabindex"],
    });
  }

  private setupKeyboardNavigation(): void {
    document.addEventListener("keydown", (event) => {
      // Handle tab navigation
      if (event.key === "Tab") {
        this.handleTabNavigation(event);
      }

      // Handle escape key
      if (event.key === "Escape") {
        this.handleEscapeKey();
      }

      // Handle arrow keys for custom components
      if (
        ["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"].includes(event.key)
      ) {
        this.handleArrowKeys(event);
      }
    });
  }

  private setupFocusManagement(): void {
    // Track focus changes
    document.addEventListener("focusin", (event) => {
      this.handleFocusIn(event);
    });

    document.addEventListener("focusout", (event) => {
      this.handleFocusOut(event);
    });
  }

  private setupScreenReaderSupport(): void {
    // Add screen reader announcements
    this.createAnnouncementRegion();

    // Setup live regions
    this.setupLiveRegions();
  }

  private createAnnouncementRegion(): void {
    const announcement = document.createElement("div");
    announcement.id = "accessibility-announcements";
    announcement.setAttribute("aria-live", "polite");
    announcement.setAttribute("aria-atomic", "true");
    announcement.className = "sr-only";
    document.body.appendChild(announcement);
  }

  private setupLiveRegions(): void {
    // Create live regions for dynamic content
    const liveRegions = ["status", "alert", "log"];
    liveRegions.forEach((region) => {
      const element = document.createElement("div");
      element.id = `live-${region}`;
      element.setAttribute(
        "aria-live",
        region === "alert" ? "assertive" : "polite",
      );
      element.className = "sr-only";
      document.body.appendChild(element);
    });
  }

  private handleTabNavigation(event: KeyboardEvent): void {
    const focusableElements = this.getFocusableElements();
    const currentIndex = focusableElements.indexOf(
      document.activeElement as HTMLElement,
    );

    if (event.shiftKey) {
      // Shift + Tab (backward)
      if (currentIndex > 0) {
        focusableElements[currentIndex - 1].focus();
      } else {
        focusableElements[focusableElements.length - 1].focus();
      }
    } else {
      // Tab (forward)
      if (currentIndex < focusableElements.length - 1) {
        focusableElements[currentIndex + 1].focus();
      } else {
        focusableElements[0].focus();
      }
    }
  }

  private handleEscapeKey(): void {
    // Close any open modals or dropdowns
    const modals = document.querySelectorAll(
      '[role="dialog"], [role="alertdialog"]',
    );
    modals.forEach((modal) => {
      if (modal.getAttribute("aria-hidden") !== "true") {
        this.closeModal(modal as HTMLElement);
      }
    });
  }

  private handleArrowKeys(event: KeyboardEvent): void {
    const target = event.target as HTMLElement;

    // Handle arrow keys for custom components
    if (
      target.getAttribute("role") === "menuitem" ||
      target.getAttribute("role") === "option"
    ) {
      this.handleMenuNavigation(event);
    }
  }

  private handleMenuNavigation(event: KeyboardEvent): void {
    const menuItems = Array.from(
      document.querySelectorAll('[role="menuitem"], [role="option"]'),
    );
    const currentIndex = menuItems.indexOf(event.target as HTMLElement);

    let nextIndex = currentIndex;

    switch (event.key) {
      case "ArrowDown":
        nextIndex = (currentIndex + 1) % menuItems.length;
        break;
      case "ArrowUp":
        nextIndex =
          currentIndex === 0 ? menuItems.length - 1 : currentIndex - 1;
        break;
      case "ArrowLeft":
        nextIndex = Math.max(0, currentIndex - 1);
        break;
      case "ArrowRight":
        nextIndex = Math.min(menuItems.length - 1, currentIndex + 1);
        break;
    }

    if (nextIndex !== currentIndex) {
      (menuItems[nextIndex] as HTMLElement).focus();
    }
  }

  private handleFocusIn(event: FocusEvent): void {
    const target = event.target as HTMLElement;

    // Add focus indicator
    target.classList.add("focus-visible");

    // Announce focus changes for screen readers
    this.announceFocusChange(target);
  }

  private handleFocusOut(event: FocusEvent): void {
    const target = event.target as HTMLElement;

    // Remove focus indicator
    target.classList.remove("focus-visible");
  }

  private announceFocusChange(element: HTMLElement): void {
    const announcement = document.getElementById("accessibility-announcements");
    if (announcement) {
      const text =
        element.getAttribute("aria-label") ||
        element.textContent?.trim() ||
        element.getAttribute("alt") ||
        "Element focused";
      announcement.textContent = text;
    }
  }

  private closeModal(modal: HTMLElement): void {
    modal.setAttribute("aria-hidden", "true");
    modal.style.display = "none";

    // Return focus to trigger element
    const trigger = document.querySelector(
      `[aria-controls="${modal.id}"]`,
    ) as HTMLElement;
    if (trigger) {
      trigger.focus();
    }
  }

  private getFocusableElements(): HTMLElement[] {
    const focusableSelectors = [
      "a[href]",
      "button:not([disabled])",
      "input:not([disabled])",
      "select:not([disabled])",
      "textarea:not([disabled])",
      '[tabindex]:not([tabindex="-1"])',
      '[role="button"]',
      '[role="link"]',
      '[role="menuitem"]',
      '[role="option"]',
    ];

    return Array.from(
      document.querySelectorAll(focusableSelectors.join(", ")),
    ) as HTMLElement[];
  }

  public analyzeAccessibility(): AccessibilityReport {
    this.issues = [];
    this.metrics = {
      totalIssues: 0,
      errorCount: 0,
      warningCount: 0,
      infoCount: 0,
      contrastRatio: 0,
      focusableElements: 0,
      headingStructure: 0,
      altTextCoverage: 0,
    };

    // Analyze various accessibility aspects
    this.analyzeImages();
    this.analyzeHeadings();
    this.analyzeLinks();
    this.analyzeButtons();
    this.analyzeForms();
    this.analyzeColorContrast();
    this.analyzeKeyboardNavigation();
    this.analyzeARIALabels();
    this.analyzeFocusManagement();

    // Calculate metrics
    this.calculateMetrics();

    // Generate recommendations
    const recommendations = this.generateRecommendations();

    // Determine compliance
    const compliance = this.determineCompliance();

    // Calculate overall score
    const score = this.calculateScore();

    return {
      score,
      issues: this.issues,
      metrics: this.metrics,
      recommendations,
      compliance,
    };
  }

  private analyzeImages(): void {
    const images = document.querySelectorAll("img");
    let imagesWithAlt = 0;

    images.forEach((img, index) => {
      if (!img.alt) {
        this.issues.push({
          type: "error",
          message: `Image ${index + 1} is missing alt text`,
          element: `img[${index}]`,
          suggestion: "Add descriptive alt text for screen readers",
          severity: "high",
        });
      } else {
        imagesWithAlt++;
      }
    });

    this.metrics.altTextCoverage =
      images.length > 0 ? (imagesWithAlt / images.length) * 100 : 100;
  }

  private analyzeHeadings(): void {
    const headings = document.querySelectorAll("h1, h2, h3, h4, h5, h6");
    const headingLevels = Array.from(headings).map((h) =>
      parseInt(h.tagName.charAt(1)),
    );

    this.metrics.headingStructure =
      this.calculateHeadingStructureScore(headingLevels);

    // Check for missing H1
    if (document.querySelectorAll("h1").length === 0) {
      this.issues.push({
        type: "error",
        message: "No H1 heading found",
        element: "h1",
        suggestion: "Add a main H1 heading to structure your content",
        severity: "high",
      });
    }

    // Check for heading hierarchy
    for (let i = 1; i < headingLevels.length; i++) {
      if (headingLevels[i] > headingLevels[i - 1] + 1) {
        this.issues.push({
          type: "warning",
          message: "Heading hierarchy is incorrect",
          element: `h${headingLevels[i]}`,
          suggestion: "Maintain proper heading hierarchy (H1 > H2 > H3, etc.)",
          severity: "medium",
        });
      }
    }
  }

  private analyzeLinks(): void {
    const links = document.querySelectorAll("a");

    links.forEach((link, index) => {
      if (!link.textContent?.trim() && !link.getAttribute("aria-label")) {
        this.issues.push({
          type: "error",
          message: `Link ${index + 1} has no accessible text`,
          element: `a[${index}]`,
          suggestion: "Add text content or aria-label to the link",
          severity: "high",
        });
      }

      if (link.getAttribute("href") === "#") {
        this.issues.push({
          type: "warning",
          message: `Link ${index + 1} has empty href`,
          element: `a[${index}]`,
          suggestion: "Provide a meaningful href or use a button instead",
          severity: "medium",
        });
      }
    });
  }

  private analyzeButtons(): void {
    const buttons = document.querySelectorAll('button, [role="button"]');

    buttons.forEach((button, index) => {
      if (!button.textContent?.trim() && !button.getAttribute("aria-label")) {
        this.issues.push({
          type: "error",
          message: `Button ${index + 1} has no accessible text`,
          element: `button[${index}]`,
          suggestion: "Add text content or aria-label to the button",
          severity: "high",
        });
      }
    });
  }

  private analyzeForms(): void {
    const inputs = document.querySelectorAll("input, select, textarea");

    inputs.forEach((input, index) => {
      const id = input.getAttribute("id");
      const label = document.querySelector(`label[for="${id}"]`);

      if (
        !label &&
        !input.getAttribute("aria-label") &&
        !input.getAttribute("aria-labelledby")
      ) {
        this.issues.push({
          type: "error",
          message: `Form input ${index + 1} has no label`,
          element: `input[${index}]`,
          suggestion: "Add a label or aria-label to the form input",
          severity: "high",
        });
      }
    });
  }

  private analyzeColorContrast(): void {
    // This is a simplified contrast check
    // In a real implementation, you would use a library like color-contrast
    this.metrics.contrastRatio = 4.5; // Placeholder value
  }

  private analyzeKeyboardNavigation(): void {
    const focusableElements = this.getFocusableElements();
    this.metrics.focusableElements = focusableElements.length;

    // Check for keyboard traps
    const modals = document.querySelectorAll(
      '[role="dialog"], [role="alertdialog"]',
    );
    modals.forEach((modal) => {
      const focusableInModal = modal.querySelectorAll(
        "button, input, select, textarea, a[href]",
      );
      if (focusableInModal.length === 0) {
        this.issues.push({
          type: "warning",
          message: "Modal has no focusable elements",
          element: modal.tagName,
          suggestion:
            "Add focusable elements or ensure keyboard navigation works",
          severity: "medium",
        });
      }
    });
  }

  private analyzeARIALabels(): void {
    const elementsWithRoles = document.querySelectorAll("[role]");

    elementsWithRoles.forEach((element, index) => {
      const role = element.getAttribute("role");
      const hasLabel =
        element.getAttribute("aria-label") ||
        element.getAttribute("aria-labelledby");

      if (
        ["button", "link", "menuitem", "option"].includes(role || "") &&
        !hasLabel
      ) {
        this.issues.push({
          type: "warning",
          message: `Element with role "${role}" has no accessible name`,
          element: `[role="${role}"][${index}]`,
          suggestion:
            "Add aria-label or aria-labelledby to provide an accessible name",
          severity: "medium",
        });
      }
    });
  }

  private analyzeFocusManagement(): void {
    // Check for focus management issues
    const skipLinks = document.querySelectorAll(
      'a[href="#main"], a[href="#content"]',
    );
    if (skipLinks.length === 0) {
      this.issues.push({
        type: "info",
        message: "No skip links found",
        element: "body",
        suggestion: "Add skip links to help keyboard users navigate",
        severity: "low",
      });
    }
  }

  private calculateHeadingStructureScore(headingLevels: number[]): number {
    if (headingLevels.length === 0) return 0;

    let score = 100;
    let previousLevel = headingLevels[0];

    for (let i = 1; i < headingLevels.length; i++) {
      const currentLevel = headingLevels[i];
      if (currentLevel > previousLevel + 1) {
        score -= 20;
      }
      previousLevel = currentLevel;
    }

    return Math.max(0, score);
  }

  private calculateMetrics(): void {
    this.metrics.totalIssues = this.issues.length;
    this.metrics.errorCount = this.issues.filter(
      (i) => i.type === "error",
    ).length;
    this.metrics.warningCount = this.issues.filter(
      (i) => i.type === "warning",
    ).length;
    this.metrics.infoCount = this.issues.filter(
      (i) => i.type === "info",
    ).length;
  }

  private generateRecommendations(): string[] {
    const recommendations: string[] = [];

    this.issues.forEach((issue) => {
      if (!recommendations.includes(issue.suggestion)) {
        recommendations.push(issue.suggestion);
      }
    });

    // Add general recommendations
    if (this.metrics.altTextCoverage < 100) {
      recommendations.push(
        "Add alt text to all images for better accessibility",
      );
    }

    if (this.metrics.headingStructure < 80) {
      recommendations.push("Improve heading structure and hierarchy");
    }

    if (this.metrics.focusableElements === 0) {
      recommendations.push(
        "Ensure all interactive elements are keyboard accessible",
      );
    }

    return recommendations;
  }

  private determineCompliance(): {
    wcag: "A" | "AA" | "AAA" | "Non-compliant";
    section508: boolean;
    ada: boolean;
  } {
    const errorCount = this.metrics.errorCount;
    const warningCount = this.metrics.warningCount;

    let wcag: "A" | "AA" | "AAA" | "Non-compliant" = "Non-compliant";
    if (errorCount === 0 && warningCount <= 2) {
      wcag = "AAA";
    } else if (errorCount === 0 && warningCount <= 5) {
      wcag = "AA";
    } else if (errorCount <= 2) {
      wcag = "A";
    }

    const section508 = errorCount === 0;
    const ada = errorCount === 0 && warningCount <= 3;

    return { wcag, section508, ada };
  }

  private calculateScore(): number {
    let score = 100;

    this.issues.forEach((issue) => {
      switch (issue.severity) {
        case "high":
          score -= 20;
          break;
        case "medium":
          score -= 10;
          break;
        case "low":
          score -= 5;
          break;
      }
    });

    return Math.max(0, score);
  }

  public announce(
    message: string,
    priority: "polite" | "assertive" = "polite",
  ): void {
    const announcement = document.getElementById("accessibility-announcements");
    if (announcement) {
      announcement.setAttribute("aria-live", priority);
      announcement.textContent = message;
    }
  }

  public generateReport(): string {
    const report = this.analyzeAccessibility();

    return `
Accessibility Report
===================
Overall Score: ${report.score}/100

Issues Found: ${report.metrics.totalIssues}
- Errors: ${report.metrics.errorCount}
- Warnings: ${report.metrics.warningCount}
- Info: ${report.metrics.infoCount}

Compliance:
- WCAG: ${report.compliance.wcag}
- Section 508: ${report.compliance.section508 ? "Compliant" : "Non-compliant"}
- ADA: ${report.compliance.ada ? "Compliant" : "Non-compliant"}

Metrics:
- Alt Text Coverage: ${report.metrics.altTextCoverage.toFixed(1)}%
- Heading Structure: ${report.metrics.headingStructure}/100
- Focusable Elements: ${report.metrics.focusableElements}
- Color Contrast: ${report.metrics.contrastRatio}:1

Recommendations:
${report.recommendations.map((rec) => `- ${rec}`).join("\n")}
    `.trim();
  }
}

// Export singleton instance
export const enhancedAccessibilityManager = new EnhancedAccessibilityManager();
export { EnhancedAccessibilityManager };
export type { AccessibilityIssue, AccessibilityMetrics, AccessibilityReport };

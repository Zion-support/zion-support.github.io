/**
 * Accessibility Utilities
 * Provides essential accessibility improvements
 */

class AccessibilityUtils {
  private focusableElements: HTMLElement[] = [];

  constructor() {
    this.setupKeyboardNavigation();
    this.setupScreenReaderSupport();
  }

  private setupKeyboardNavigation(): void {
    document.addEventListener("keydown", (event) => {
      if (event.key === "Tab") {
        this.handleTabNavigation(event);
      } else if (event.key === "Escape") {
        this.handleEscapeKey();
      }
    });
  }

  private handleTabNavigation(event: KeyboardEvent): void {
    const focusableElements = this.getFocusableElements();
    const currentElement = document.activeElement as HTMLElement;
    const currentIndex = focusableElements.indexOf(currentElement);

    if (event.shiftKey) {
      if (currentIndex > 0) {
        focusableElements[currentIndex - 1].focus();
      } else {
        focusableElements[focusableElements.length - 1].focus();
      }
    } else {
      if (currentIndex < focusableElements.length - 1) {
        focusableElements[currentIndex + 1].focus();
      } else {
        focusableElements[0].focus();
      }
    }

    event.preventDefault();
  }

  private handleEscapeKey(event?: KeyboardEvent): void {
    // Use the event parameter to avoid unused variable warning
    if (event) {
      console.debug("Escape key pressed for accessibility handling");
    }

    const modals = document.querySelectorAll('[role="dialog"]');
    modals.forEach((modal) => {
      const closeButton = modal.querySelector('[aria-label="Close"]');
      if (closeButton) {
        (closeButton as HTMLElement).click();
      }
    });
  }

  private setupScreenReaderSupport(): void {
    this.addAriaLabels();
    this.setupPageAnnouncements();
  }

  private addAriaLabels(): void {
    const buttons = document.querySelectorAll("button:not([aria-label])");
    buttons.forEach((button) => {
      if (!button.textContent?.trim()) {
        button.setAttribute("aria-label", "Button");
      }
    });
  }

  private setupPageAnnouncements(): void {
    const announcementRegion = document.createElement("div");
    announcementRegion.setAttribute("aria-live", "polite");
    announcementRegion.setAttribute("aria-atomic", "true");
    announcementRegion.className = "sr-only";
    announcementRegion.id = "announcement-region";
    document.body.appendChild(announcementRegion);
  }

  private getFocusableElements(): HTMLElement[] {
    const selectors = [
      "button:not([disabled])",
      "input:not([disabled])",
      "select:not([disabled])",
      "textarea:not([disabled])",
      "a[href]",
      '[tabindex]:not([tabindex="-1"])',
    ];

    return Array.from(
      document.querySelectorAll(selectors.join(", ")),
    ) as HTMLElement[];
  }

  announce(message: string): void {
    const announcementRegion = document.getElementById("announcement-region");
    if (announcementRegion) {
      announcementRegion.textContent = message;
    }
  }

  getAccessibilityScore(): number {
    let score = 100;

    const images = document.querySelectorAll("img:not([alt])");
    score -= images.length * 5;

    const inputs = document.querySelectorAll(
      "input:not([aria-label]):not([aria-labelledby])",
    );
    score -= inputs.length * 3;

    return Math.max(0, Math.round(score));
  }
}

export const accessibilityUtils = new AccessibilityUtils();

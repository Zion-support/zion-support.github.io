export const accessibilityUtils = {
  // Setup keyboard navigation
  setupKeyboardNavigation: (): void => {
    document.addEventListener("keydown", (e: KeyboardEvent) => {
      // Escape key to close modals
      if (e.key === "Escape") {
        const activeElement = document.activeElement as HTMLElement;
        if (
          activeElement &&
          activeElement.getAttribute("aria-expanded") === "true"
        ) {
          activeElement.click();
        }
      }
    });
  },

  // Setup screen reader support
  setupScreenReaderSupport: (): void => {
    // Add ARIA labels to interactive elements
    const buttons = document.querySelectorAll("button:not([aria-label])");
    buttons.forEach((button) => {
      if (!button.getAttribute("aria-label")) {
        button.setAttribute("aria-label", button.textContent || "Button");
      }
    });
  },

  // Setup high contrast mode
  setupHighContrastMode: (): void => {
    // Check for high contrast preference
    if (window.matchMedia("(prefers-contrast: high)").matches) {
      document.body.classList.add("high-contrast");
    }
  },

  // Setup focus management
  setupFocusManagement: (): void => {
    // Trap focus in modals
    const modals = document.querySelectorAll('[role="dialog"]');
    modals.forEach((modal) => {
      const focusableElements = modal.querySelectorAll(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])',
      );
      const firstElement = focusableElements[0] as HTMLElement;
      const lastElement = focusableElements[
        focusableElements.length - 1
      ] as HTMLElement;

      modal.addEventListener("keydown", (e: Event) => {
        const keyEvent = e as KeyboardEvent;
        if (keyEvent.key === "Tab") {
          if (keyEvent.shiftKey) {
            if (document.activeElement === firstElement) {
              lastElement.focus();
              keyEvent.preventDefault();
            }
          } else {
            if (document.activeElement === lastElement) {
              firstElement.focus();
              keyEvent.preventDefault();
            }
          }
        }
      });
    });
  },

  // Setup reduced motion
  setupReducedMotion: (): void => {
    // Check for reduced motion preference
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      document.body.classList.add("reduced-motion");
    }
  },
};

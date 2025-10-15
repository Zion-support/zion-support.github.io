// Accessibility utilities for the Zion Tech Group website

export const accessibilityManager = {
  init(): void {
    this.setupKeyboardNavigation();
    this.setupScreenReaderSupport();
    this.setupHighContrastMode();
    this.setupFocusManagement();
    this.setupReducedMotion();
  },

  setupKeyboardNavigation(): void {
    document.addEventListener('keydown', (e: KeyboardEvent) => {
      // Escape key to close modals
      if (e.key === 'Escape') {
        const activeElement = document.activeElement as HTMLElement;
        if (activeElement && activeElement.getAttribute('aria-expanded') === 'true') {
          activeElement.click();
        }
      }
    });
  },

  setupScreenReaderSupport(): void {
    const announceToScreenReader = (message: string): void => {
      const announcement = document.createElement('div');
      announcement.setAttribute('aria-live', 'polite');
      announcement.setAttribute('aria-atomic', 'true');
      announcement.className = 'sr-only';
      announcement.textContent = message;
      document.body.appendChild(announcement);
      setTimeout(() => {
        document.body.removeChild(announcement);
      }, 1000);
    };

    // Store the function globally for use by other components
    (window as any).announceToScreenReader = announceToScreenReader;
  },

  setupFocusManagement(): void {
    // Focus management for modals and dropdowns
    const trapFocus = (element: HTMLElement): void => {
      const focusableElements = element.querySelectorAll(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      );
      const firstElement = focusableElements[0] as HTMLElement;
      const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

      element.addEventListener('keydown', (e: KeyboardEvent) => {
        if (e.key === 'Tab') {
          if (e.shiftKey) {
            if (document.activeElement === firstElement) {
              lastElement.focus();
              e.preventDefault();
            }
          } else {
            if (document.activeElement === lastElement) {
              firstElement.focus();
              e.preventDefault();
            }
          }
        }
      });
    };

    (window as any).trapFocus = trapFocus;
  },

  setupHighContrastMode(): void {
    // Check for high contrast mode preference
    const prefersHighContrast = window.matchMedia('(prefers-contrast: high)');
    
    const updateHighContrast = (): void => {
      if (prefersHighContrast.matches) {
        document.body.classList.add('high-contrast');
      } else {
        document.body.classList.remove('high-contrast');
      }
    };

    updateHighContrast();
    prefersHighContrast.addEventListener('change', updateHighContrast);
  },

  setupReducedMotion(): void {
    // Respect user's motion preferences
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    
    const updateMotionPreference = (): void => {
      if (prefersReducedMotion.matches) {
        document.body.classList.add('reduced-motion');
      } else {
        document.body.classList.remove('reduced-motion');
      }
    };

    updateMotionPreference();
    prefersReducedMotion.addEventListener('change', updateMotionPreference);
  },

  // Utility functions
  announceToScreenReader(message: string): void {
    if ((window as any).announceToScreenReader) {
      (window as any).announceToScreenReader(message);
    }
  },

  trapFocus(element: HTMLElement): void {
    if ((window as any).trapFocus) {
      (window as any).trapFocus(element);
    }
  }
};

// Initialize accessibility features when the DOM is loaded
if (typeof window !== 'undefined') {
  document.addEventListener('DOMContentLoaded', () => {
    accessibilityManager.init();
  });
}
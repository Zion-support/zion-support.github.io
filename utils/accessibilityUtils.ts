// Accessibility utilities
export const accessibilityManager = {
  init() {
    if (typeof window !== 'undefined') {
      this.setupKeyboardNavigation();
      this.setupScreenReaderSupport();
      this.setupHighContrastMode();
      this.setupFocusManagement();
      this.setupReducedMotion();
    }
  },

  setupKeyboardNavigation() {
    // Add keyboard navigation support
    document.addEventListener('keydown', (e) => {
      // Skip to main content
      if (e.key === 'Tab' && e.shiftKey && e.altKey) {
        e.preventDefault();
        const mainContent = document.getElementById('main-content');
        if (mainContent) {
          mainContent.focus();
          mainContent.scrollIntoView({ behavior: 'smooth' });
        }
      }
      
      // Escape key to close modals/dropdowns
      if (e.key === 'Escape') {
        const activeElement = document.activeElement as HTMLElement;
        if (activeElement && activeElement.getAttribute('aria-expanded') === 'true') {
          activeElement.click();
        }
      }
    });
  },

  setupScreenReaderSupport() {
    // Add screen reader announcements
    const announceToScreenReader = (message: string) => {
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

    // Make announcements available globally
    (window as any).announceToScreenReader = announceToScreenReader;
  },

  setupHighContrastMode() {
    // Detect high contrast mode preference
    const prefersHighContrast = window.matchMedia('(prefers-contrast: high)');
    
    const updateHighContrastMode = (matches: boolean) => {
      document.documentElement.classList.toggle('high-contrast', matches);
    };

    updateHighContrastMode(prefersHighContrast.matches);
    prefersHighContrast.addEventListener('change', updateHighContrastMode);
  },

  setupFocusManagement() {
    // Improve focus indicators
    const style = document.createElement('style');
    style.textContent = `
      .focus-visible:focus {
        outline: 2px solid #00ffff;
        outline-offset: 2px;
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

    // Trap focus in modals
    const trapFocus = (element: HTMLElement) => {
      const focusableElements = element.querySelectorAll(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      );
      const firstElement = focusableElements[0] as HTMLElement;
      const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

      element.addEventListener('keydown', (e) => {
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

  setupReducedMotion() {
    // Respect reduced motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    
    const updateReducedMotion = (matches: boolean) => {
      document.documentElement.classList.toggle('reduce-motion', matches);
    };

    updateReducedMotion(prefersReducedMotion.matches);
    prefersReducedMotion.addEventListener('change', updateReducedMotion);
  },

  // Utility functions
  announceToScreenReader: (message: string) => {
    if (typeof window !== 'undefined' && (window as any).announceToScreenReader) {
      (window as any).announceToScreenReader(message);
    }
  },

  trapFocus: (element: HTMLElement) => {
    if (typeof window !== 'undefined' && (window as any).trapFocus) {
      (window as any).trapFocus(element);
    }
  },

  // ARIA helpers
  setAriaExpanded: (element: HTMLElement, expanded: boolean) => {
    element.setAttribute('aria-expanded', expanded.toString());
  },

  setAriaSelected: (element: HTMLElement, selected: boolean) => {
    element.setAttribute('aria-selected', selected.toString());
  },

  setAriaHidden: (element: HTMLElement, hidden: boolean) => {
    element.setAttribute('aria-hidden', hidden.toString());
  },

  // Focus management
  focusElement: (selector: string) => {
    const element = document.querySelector(selector) as HTMLElement;
    if (element) {
      element.focus();
    }
  },

  // Skip links
  addSkipLink: (href: string, text: string) => {
    const skipLink = document.createElement('a');
    skipLink.href = href;
    skipLink.textContent = text;
    skipLink.className = 'sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-cyan-500 text-white px-4 py-2 rounded z-50';
    document.body.insertBefore(skipLink, document.body.firstChild);
  }
};

// Color contrast utilities
export const colorContrast = {
  // Calculate contrast ratio between two colors
  getContrastRatio: (color1: string, color2: string): number => {
    const getLuminance = (color: string): number => {
      const rgb = color.match(/\d+/g);
      if (!rgb) return 0;
      
      const [r, g, b] = rgb.map(c => {
        const val = parseInt(c) / 255;
        return val <= 0.03928 ? val / 12.92 : Math.pow((val + 0.055) / 1.055, 2.4);
      });
      
      return 0.2126 * r + 0.7152 * g + 0.0722 * b;
    };

    const lum1 = getLuminance(color1);
    const lum2 = getLuminance(color2);
    const brightest = Math.max(lum1, lum2);
    const darkest = Math.min(lum1, lum2);
    
    return (brightest + 0.05) / (darkest + 0.05);
  },

  // Check if contrast meets WCAG standards
  meetsWCAG: (color1: string, color2: string, level: 'AA' | 'AAA' = 'AA'): boolean => {
    const ratio = colorContrast.getContrastRatio(color1, color2);
    return level === 'AA' ? ratio >= 4.5 : ratio >= 7;
  }
};

// Screen reader utilities
export const screenReader = {
  // Announce text to screen readers
  announce: (text: string, priority: 'polite' | 'assertive' = 'polite') => {
    const announcement = document.createElement('div');
    announcement.setAttribute('aria-live', priority);
    announcement.setAttribute('aria-atomic', 'true');
    announcement.className = 'sr-only';
    announcement.textContent = text;
    document.body.appendChild(announcement);
    
    setTimeout(() => {
      if (document.body.contains(announcement)) {
        document.body.removeChild(announcement);
      }
    }, 1000);
  },

  // Hide element from screen readers
  hideFromScreenReader: (element: HTMLElement) => {
    element.setAttribute('aria-hidden', 'true');
  },

  // Show element to screen readers
  showToScreenReader: (element: HTMLElement) => {
    element.removeAttribute('aria-hidden');
  }
};

export default accessibilityManager;
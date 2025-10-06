/**
 * Accessibility utilities for improving web accessibility
 */

// Focus management utilities
export const focusManagement = {
  // Trap focus within an element
  trapFocus: (element: HTMLElement): (() => void) => {
    const focusableElements = element.querySelectorAll(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])',
    );
    const firstElement = focusableElements[0] as HTMLElement;
    const lastElement = focusableElements[
      focusableElements.length - 1
    ] as HTMLElement;

    const handleKeyDown = (e: KeyboardEvent) => {
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
    };

    element.addEventListener('keydown', handleKeyDown);
    firstElement?.focus();

    return () => {
      element.removeEventListener('keydown', handleKeyDown);
    };
  },

  // Restore focus to previous element
  restoreFocus: (element: HTMLElement): void => {
    element.focus();
  },

  // Skip to main content
  skipToMain: (): void => {
    const mainElement = document.querySelector('main') as HTMLElement;
    if (mainElement) {
      mainElement.focus();
      mainElement.scrollIntoView();
    }
  },
};

// ARIA utilities
export const ariaUtils = {
  // Generate unique IDs for ARIA relationships
  generateId: (prefix: string = 'aria'): string => {
    return `${prefix}-${Math.random().toString(36).substr(2, 9)}`;
  },

  // Set ARIA attributes
  setAriaAttributes: (element: HTMLElement, attributes: Record<string, string>): void => {
    Object.entries(attributes).forEach(([key, value]) => {
      element.setAttribute(key, value);
    });
  },

  // Announce to screen readers
  announce: (message: string, priority: 'polite' | 'assertive' = 'polite'): void => {
    const announcement = document.createElement('div');
    announcement.setAttribute('aria-live', priority);
    announcement.setAttribute('aria-atomic', 'true');
    announcement.className = 'sr-only';
    announcement.textContent = message;
    
    document.body.appendChild(announcement);
    
    setTimeout(() => {
      document.body.removeChild(announcement);
    }, 1000);
  },
};

// Keyboard navigation utilities
export const keyboardUtils = {
  // Handle arrow key navigation
  handleArrowKeys: (
    event: KeyboardEvent,
    items: HTMLElement[],
    currentIndex: number,
    orientation: 'horizontal' | 'vertical' = 'horizontal'
  ): number => {
    const { key } = event;
    const isHorizontal = orientation === 'horizontal';
    const isVertical = orientation === 'vertical';

    if (
      (isHorizontal && (key === 'ArrowLeft' || key === 'ArrowRight')) ||
      (isVertical && (key === 'ArrowUp' || key === 'ArrowDown'))
    ) {
      event.preventDefault();

      let nextIndex = currentIndex;
      if (
        (isHorizontal && key === 'ArrowLeft') ||
        (isVertical && key === 'ArrowUp')
      ) {
        nextIndex = currentIndex > 0 ? currentIndex - 1 : items.length - 1;
      } else {
        nextIndex = currentIndex < items.length - 1 ? currentIndex + 1 : 0;
      }

      items[nextIndex]?.focus();
      return nextIndex;
    }

    return currentIndex;
  },

  // Handle home/end keys
  handleHomeEndKeys: (
    event: KeyboardEvent,
    items: HTMLElement[],
    currentIndex: number
  ): number => {
    const { key } = event;

    if (key === 'Home') {
      event.preventDefault();
      items[0]?.focus();
      return 0;
    }

    if (key === 'End') {
      event.preventDefault();
      items[items.length - 1]?.focus();
      return items.length - 1;
    }

    return currentIndex;
  },
};

// Color contrast utilities
export const contrastUtils = {
  // Calculate relative luminance
  getLuminance: (r: number, g: number, b: number): number => {
    const [rs, gs, bs] = [r, g, b].map(c => {
      c = c / 255;
      return c <= 0.03928 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4);
    });
    return 0.2126 * (rs || 0) + 0.7152 * (gs || 0) + 0.0722 * (bs || 0);
  },

  // Calculate contrast ratio
  getContrastRatio: (color1: string, color2: string): number => {
    const hexToRgb = (hex: string): [number, number, number] => {
      const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
      return result
        ? [
            parseInt(result[1] || '0', 16),
            parseInt(result[2] || '0', 16),
            parseInt(result[3] || '0', 16),
          ]
        : [0, 0, 0];
    };

    const [r1, g1, b1] = hexToRgb(color1);
    const [r2, g2, b2] = hexToRgb(color2);

    const lum1 = contrastUtils.getLuminance(r1, g1, b1);
    const lum2 = contrastUtils.getLuminance(r2, g2, b2);

    const brightest = Math.max(lum1, lum2);
    const darkest = Math.min(lum1, lum2);

    return (brightest + 0.05) / (darkest + 0.05);
  },

  // Check if contrast meets WCAG standards
  meetsWCAG: (color1: string, color2: string, level: 'AA' | 'AAA' = 'AA'): boolean => {
    const ratio = contrastUtils.getContrastRatio(color1, color2);
    return level === 'AA' ? ratio >= 4.5 : ratio >= 7;
  },
};

// Screen reader utilities
export const screenReaderUtils = {
  // Hide element from screen readers
  hideFromScreenReader: (element: HTMLElement): void => {
    element.setAttribute('aria-hidden', 'true');
  },

  // Show element to screen readers
  showToScreenReader: (element: HTMLElement): void => {
    element.removeAttribute('aria-hidden');
  },

  // Check if element is visible to screen readers
  isVisibleToScreenReader: (element: HTMLElement): boolean => {
    return element.getAttribute('aria-hidden') !== 'true' && 
           !element.classList.contains('sr-only');
  },
};

// Form accessibility utilities
export const formUtils = {
  // Associate label with input
  associateLabel: (input: HTMLElement, label: HTMLElement): void => {
    const inputId = input.id || ariaUtils.generateId('input');
    const labelId = label.id || ariaUtils.generateId('label');

    input.id = inputId;
    label.id = labelId;
    label.setAttribute('for', inputId);
  },

  // Add error message association
  addErrorMessage: (input: HTMLElement, errorMessage: string): void => {
    const errorId = ariaUtils.generateId('error');
    const errorElement = document.createElement('div');
    
    errorElement.id = errorId;
    errorElement.textContent = errorMessage;
    errorElement.setAttribute('role', 'alert');
    errorElement.setAttribute('aria-live', 'polite');
    
    input.setAttribute('aria-describedby', errorId);
    input.setAttribute('aria-invalid', 'true');
    
    input.parentNode?.insertBefore(errorElement, input.nextSibling);
  },

  // Remove error message
  removeErrorMessage: (input: HTMLElement): void => {
    const errorId = input.getAttribute('aria-describedby');
    if (errorId) {
      const errorElement = document.getElementById(errorId);
      errorElement?.remove();
      input.removeAttribute('aria-describedby');
      input.removeAttribute('aria-invalid');
    }
  },
};

// Animation utilities
export const animationUtils = {
  // Respect user's motion preferences
  respectsMotionPreference: (): boolean => {
    return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  },

  // Apply reduced motion styles
  applyReducedMotion: (element: HTMLElement): void => {
    if (animationUtils.respectsMotionPreference()) {
      element.style.animation = 'none';
      element.style.transition = 'none';
    }
  },
};

// High contrast utilities
export const highContrastUtils = {
  // Check if high contrast mode is enabled
  isHighContrastMode: (): boolean => {
    return window.matchMedia('(prefers-contrast: high)').matches;
  },

  // Apply high contrast styles
  applyHighContrast: (element: HTMLElement): void => {
    if (highContrastUtils.isHighContrastMode()) {
      element.style.border = '2px solid';
      element.style.outline = '2px solid';
    }
  },
};

export default {
  focusManagement,
  ariaUtils,
  keyboardUtils,
  contrastUtils,
  screenReaderUtils,
  formUtils,
  animationUtils,
  highContrastUtils,
};

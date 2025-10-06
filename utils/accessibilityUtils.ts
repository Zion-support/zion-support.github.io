/**
 * Accessibility utilities for improving web accessibility
 */

// Focus management utilities
export const focusManagement = {
  // Trap focus within an element
  trapFocus: (element: HTMLElement): (() => void) => {
    const focusableElements = element.querySelectorAll(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
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

  // Move focus to next focusable element
  focusNext: (currentElement: HTMLElement): HTMLElement | null => {
    const focusableElements = document.querySelectorAll(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );
    const currentIndex = Array.from(focusableElements).indexOf(currentElement);
    const nextElement = focusableElements[currentIndex + 1] as HTMLElement;
    nextElement?.focus();
    return nextElement || null;
  },

  // Move focus to previous focusable element
  focusPrevious: (currentElement: HTMLElement): HTMLElement | null => {
    const focusableElements = document.querySelectorAll(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );
    const currentIndex = Array.from(focusableElements).indexOf(currentElement);
    const previousElement = focusableElements[currentIndex - 1] as HTMLElement;
    previousElement?.focus();
    return previousElement || null;
  }
};

// ARIA utilities
export const ariaUtils = {
  // Set ARIA attributes
  setAria: (element: HTMLElement, attributes: Record<string, string>): void => {
    Object.entries(attributes).forEach(([key, value]) => {
      element.setAttribute(key, value);
    });
  },

  // Remove ARIA attributes
  removeAria: (element: HTMLElement, attributes: string[]): void => {
    attributes.forEach(attr => {
      element.removeAttribute(attr);
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
  }
};

// Color contrast utilities
export const colorContrast = {
  // Check if color combination meets WCAG standards
  checkContrast: (foreground: string, background: string): {
    ratio: number;
    meetsAA: boolean;
    meetsAAA: boolean;
  } => {
    const fgLuminance = getLuminance(foreground);
    const bgLuminance = getLuminance(background);
    const ratio = (Math.max(fgLuminance, bgLuminance) + 0.05) / 
                  (Math.min(fgLuminance, bgLuminance) + 0.05);
    
    return {
      ratio: Math.round(ratio * 100) / 100,
      meetsAA: ratio >= 4.5,
      meetsAAA: ratio >= 7
    };
  }
};

// Helper function to calculate luminance
function getLuminance(color: string): number {
  const rgb = hexToRgb(color);
  if (!rgb) return 0;
  
  const { r, g, b } = rgb;
  const [rs, gs, bs] = [r, g, b].map(c => {
    c = c / 255;
    return c <= 0.03928 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4);
  });
  
  return 0.2126 * (rs || 0) + 0.7152 * (gs || 0) + 0.0722 * (bs || 0);
}

// Helper function to convert hex to RGB
function hexToRgb(hex: string): { r: number; g: number; b: number } | null {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result ? {
    r: parseInt(result[1] || '0', 16),
    g: parseInt(result[2] || '0', 16),
    b: parseInt(result[3] || '0', 16)
  } : null;
}

// Keyboard navigation utilities
export const keyboardNavigation = {
  // Handle arrow key navigation
  handleArrowKeys: (
    event: KeyboardEvent,
    elements: HTMLElement[],
    currentIndex: number,
    orientation: 'horizontal' | 'vertical' = 'horizontal'
  ): number => {
    const { key } = event;
    const isHorizontal = orientation === 'horizontal';
    
    if (isHorizontal) {
      if (key === 'ArrowLeft') {
        event.preventDefault();
        return Math.max(0, currentIndex - 1);
      } else if (key === 'ArrowRight') {
        event.preventDefault();
        return Math.min(elements.length - 1, currentIndex + 1);
      }
    } else {
      if (key === 'ArrowUp') {
        event.preventDefault();
        return Math.max(0, currentIndex - 1);
      } else if (key === 'ArrowDown') {
        event.preventDefault();
        return Math.min(elements.length - 1, currentIndex + 1);
      }
    }
    
    return currentIndex;
  },

  // Handle home/end keys
  handleHomeEnd: (
    event: KeyboardEvent,
    elements: HTMLElement[],
    currentIndex: number
  ): number => {
    if (event.key === 'Home') {
      event.preventDefault();
      return 0;
    } else if (event.key === 'End') {
      event.preventDefault();
      return elements.length - 1;
    }
    
    return currentIndex;
  }
};

// Screen reader utilities
export const screenReader = {
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
  }
};

// Form accessibility utilities
export const formAccessibility = {
  // Add required field indicators
  markRequiredFields: (form: HTMLFormElement): void => {
    const requiredFields = form.querySelectorAll('[required]');
    requiredFields.forEach(field => {
      const label = form.querySelector(`label[for="${field.id}"]`);
      if (label && !label.textContent?.includes('*')) {
        label.textContent += ' *';
      }
    });
  },

  // Add error messages with proper ARIA attributes
  addErrorMessage: (
    field: HTMLElement,
    message: string,
    id: string
  ): void => {
    const errorElement = document.createElement('div');
    errorElement.id = id;
    errorElement.className = 'error-message';
    errorElement.textContent = message;
    errorElement.setAttribute('role', 'alert');
    
    field.setAttribute('aria-describedby', id);
    field.setAttribute('aria-invalid', 'true');
    
    field.parentNode?.insertBefore(errorElement, field.nextSibling);
  },

  // Remove error messages
  removeErrorMessage: (field: HTMLElement): void => {
    const describedBy = field.getAttribute('aria-describedby');
    if (describedBy) {
      const errorElement = document.getElementById(describedBy);
      errorElement?.remove();
      field.removeAttribute('aria-describedby');
      field.removeAttribute('aria-invalid');
    }
  }
};

// Animation and motion utilities
export const motionAccessibility = {
  // Check if user prefers reduced motion
  prefersReducedMotion: (): boolean => {
    return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  },

  // Disable animations if user prefers reduced motion
  respectMotionPreference: (element: HTMLElement): void => {
    if (motionAccessibility.prefersReducedMotion()) {
      element.style.animation = 'none';
      element.style.transition = 'none';
    }
  }
};

// Export all utilities as a single object
export const accessibility = {
  focusManagement,
  ariaUtils,
  colorContrast,
  keyboardNavigation,
  screenReader,
  formAccessibility,
  motionAccessibility
};

export default accessibility;
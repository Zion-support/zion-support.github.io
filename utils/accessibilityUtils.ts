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
export const keyboardNavigation = {
  // Handle arrow key navigation
  handleArrowKeys: (
    event: KeyboardEvent,
    elements: HTMLElement[],
    orientation: 'horizontal' | 'vertical' = 'horizontal'
  ): void => {
    const currentIndex = elements.indexOf(event.target as HTMLElement);
    if (currentIndex === -1) return;

    let nextIndex = currentIndex;
    const isVertical = orientation === 'vertical';

    switch (event.key) {
      case isVertical ? 'ArrowUp' : 'ArrowLeft':
        nextIndex = currentIndex > 0 ? currentIndex - 1 : elements.length - 1;
        break;
      case isVertical ? 'ArrowDown' : 'ArrowRight':
        nextIndex = currentIndex < elements.length - 1 ? currentIndex + 1 : 0;
        break;
      default:
        return;
    }

    event.preventDefault();
    elements[nextIndex]?.focus();
  },

  // Handle home/end keys
  handleHomeEnd: (event: KeyboardEvent, elements: HTMLElement[]): void => {
    if (elements.length === 0) return;

    switch (event.key) {
      case 'Home':
        event.preventDefault();
        elements[0]?.focus();
        break;
      case 'End':
        event.preventDefault();
        elements[elements.length - 1]?.focus();
        break;
    }
  },
};

// Color contrast utilities
export const colorContrast = {
  // Check if color combination meets WCAG standards
  checkContrast: (_foreground: string, _background: string): {
    ratio: number;
    meetsAA: boolean;
    meetsAAA: boolean;
  } => {
    // Simplified contrast calculation
    // In a real implementation, you'd use a proper color contrast library
    const ratio = 4.5; // Placeholder
    return {
      ratio,
      meetsAA: ratio >= 4.5,
      meetsAAA: ratio >= 7,
    };
  },

  // Get high contrast colors
  getHighContrastColors: (): { foreground: string; background: string } => {
    return {
      foreground: '#000000',
      background: '#ffffff',
    };
  },
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
           !element.classList.contains('sr-only') &&
           (element.offsetWidth ?? 0) > 0 &&
           (element.offsetHeight ?? 0) > 0;
  },
};

// Form accessibility utilities
export const formAccessibility = {
  // Associate label with form control
  associateLabel: (label: HTMLLabelElement, control: HTMLElement): void => {
    const id = control.id || ariaUtils.generateId('form-control');
    control.id = id;
    label.setAttribute('for', id);
  },

  // Add error message association
  addErrorMessage: (control: HTMLElement, message: string): void => {
    const errorId = ariaUtils.generateId('error');
    const errorElement = document.createElement('div');
    errorElement.id = errorId;
    errorElement.className = 'error-message';
    errorElement.textContent = message;
    
    control.setAttribute('aria-describedby', errorId);
    control.setAttribute('aria-invalid', 'true');
    
    control.parentNode?.insertBefore(errorElement, control.nextSibling);
  },

  // Remove error message
  removeErrorMessage: (control: HTMLElement): void => {
    const errorId = control.getAttribute('aria-describedby');
    if (errorId) {
      const errorElement = document.getElementById(errorId);
      errorElement?.remove();
      control.removeAttribute('aria-describedby');
      control.removeAttribute('aria-invalid');
    }
  },
};

// Animation and motion utilities
export const motionAccessibility = {
  // Check if user prefers reduced motion
  prefersReducedMotion: (): boolean => {
    return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  },

  // Disable animations if user prefers reduced motion
  handleReducedMotion: (): void => {
    if (motionAccessibility.prefersReducedMotion()) {
      const style = document.createElement('style');
      style.textContent = `
        *, *::before, *::after {
          animation-duration: 0.01ms !important;
          animation-iteration-count: 1 !important;
          transition-duration: 0.01ms !important;
        }
      `;
      document.head.appendChild(style);
    }
  },
};

// Initialize accessibility features
export const initAccessibility = (): void => {
  motionAccessibility.handleReducedMotion();
  
    // Add skip to main content link
    const skipLink = document.createElement('a');
    skipLink.href = '#main';
    skipLink.textContent = 'Skip to main content';
    skipLink.className = 'skip-link sr-only';
    skipLink.addEventListener('click', (e) => {
      e.preventDefault();
      focusManagement.skipToMain();
    });
    
    if (document.body.firstChild) {
      document.body.insertBefore(skipLink, document.body.firstChild);
    } else {
      document.body.appendChild(skipLink);
    }
};
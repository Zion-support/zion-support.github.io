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
  setAriaAttributes: (
    element: HTMLElement,
    attributes: Record<string, string>
  ): void => {
    Object.entries(attributes).forEach(([key, value]) => {
      element.setAttribute(key, value);
    });
  },

  // Announce to screen readers
  announce: (
    message: string,
    priority: 'polite' | 'assertive' = 'polite'
  ): void => {
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
  // Handle arrow key navigation for lists
  handleArrowKeys: (
    event: KeyboardEvent,
    items: HTMLElement[],
    currentIndex: number,
    orientation: 'horizontal' | 'vertical' = 'vertical'
  ): number => {
    const isVertical = orientation === 'vertical';
    const isHorizontal = orientation === 'horizontal';

    switch (event.key) {
      case isVertical ? 'ArrowDown' : 'ArrowRight':
        event.preventDefault();
        return Math.min(currentIndex + 1, items.length - 1);
      case isVertical ? 'ArrowUp' : 'ArrowLeft':
        event.preventDefault();
        return Math.max(currentIndex - 1, 0);
      case 'Home':
        event.preventDefault();
        return 0;
      case 'End':
        event.preventDefault();
        return items.length - 1;
      default:
        return currentIndex;
    }
  },

  // Handle Enter and Space key activation
  handleActivation: (
    event: KeyboardEvent,
    callback: () => void
  ): void => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      callback();
    }
  },
};

// Color and contrast utilities
export const colorUtils = {
  // Check if color meets WCAG contrast requirements
  getContrastRatio: (color1: string, color2: string): number => {
    // This is a simplified implementation
    // In a real application, you'd use a proper color contrast library
    return 4.5; // Placeholder value
  },

  // Check if text color meets accessibility standards
  isAccessibleTextColor: (
    textColor: string,
    backgroundColor: string,
    level: 'AA' | 'AAA' = 'AA'
  ): boolean => {
    const ratio = colorUtils.getContrastRatio(textColor, backgroundColor);
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

  // Make element visible only to screen readers
  srOnly: (element: HTMLElement): void => {
    element.className = 'sr-only';
  },
};

// Form accessibility utilities
export const formUtils = {
  // Associate label with form control
  associateLabel: (label: HTMLLabelElement, control: HTMLElement): void => {
    const id = control.id || ariaUtils.generateId('form-control');
    control.id = id;
    label.setAttribute('for', id);
  },

  // Add error message to form control
  addErrorMessage: (
    control: HTMLElement,
    message: string
  ): HTMLElement => {
    const errorId = ariaUtils.generateId('error');
    const errorElement = document.createElement('div');
    errorElement.id = errorId;
    errorElement.className = 'error-message';
    errorElement.textContent = message;
    errorElement.setAttribute('role', 'alert');
    
    control.setAttribute('aria-describedby', errorId);
    control.setAttribute('aria-invalid', 'true');
    
    control.parentNode?.insertBefore(errorElement, control.nextSibling);
    return errorElement;
  },

  // Remove error message from form control
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
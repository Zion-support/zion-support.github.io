/**
 * Accessibility utilities for improving web accessibility
 */

// Focus management utilities
export const focusManagement = {
  // Trap focus within an element
  trapFocus: (element: HTMLElement): (() => void) => {
    const focusableElements = element.querySelectorAll(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
=======
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])',
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-3fed
=======
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])',
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-1f83
=======
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-9d58
=======
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-2051
=======
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-7a0d
=======
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-efe9
=======
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-6abd
=======
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-ee0f
    );
    const firstElement = focusableElements[0] as HTMLElement;
    const lastElement = focusableElements[
      focusableElements.length - 1
    ] as HTMLElement;
=======
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-6abd
=======
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-ee0f

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
=======
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-9008
=======
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-6abd
=======
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-ee0f

    element.addEventListener('keydown', handleKeyDown);
    firstElement?.focus();

=======
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-efe9
=======
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-9008
=======
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-6abd
=======
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-ee0f
    return () => {
      element.removeEventListener('keydown', handleKeyDown);
    };
  },
=======

>>>>>>> origin/cursor/fix-errors-and-merge-to-main-2051
=======

>>>>>>> origin/cursor/fix-errors-and-merge-to-main-9008
=======

>>>>>>> origin/cursor/fix-errors-and-merge-to-main-6abd
=======

>>>>>>> origin/cursor/fix-errors-and-merge-to-main-ee0f
  // Restore focus to previous element
  restoreFocus: (element: HTMLElement): void => {
    element.focus();
  },
=======
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-2051
=======
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-9008
=======
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-6abd
=======
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-ee0f

  // Skip to main content
  skipToMain: (): void => {
    const mainElement = document.querySelector('main') as HTMLElement;
    if (mainElement) {
      mainElement.focus();
      mainElement.scrollIntoView();
    }
=======

  // Move focus to next focusable element
  focusNext: (currentElement: HTMLElement): void => {
    const focusableElements = document.querySelectorAll(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])',
=======
=======
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-efe9

  // Move focus to next focusable element
  focusNext: (currentElement: HTMLElement): HTMLElement | null => {
    const focusableElements = document.querySelectorAll(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
=======
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-efe9
    );
    const currentIndex = Array.from(focusableElements).indexOf(currentElement);
    const nextElement = focusableElements[currentIndex + 1] as HTMLElement;
    nextElement?.focus();
  },

  // Move focus to previous focusable element
  focusPrevious: (currentElement: HTMLElement): void => {
    const focusableElements = document.querySelectorAll(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])',
=======
    return nextElement;
  },

  // Move focus to previous focusable element
  focusPrevious: (currentElement: HTMLElement): HTMLElement | null => {
    const focusableElements = document.querySelectorAll(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-9d58
=======
    return nextElement || null;
  },

  // Move focus to previous focusable element
  focusPrevious: (currentElement: HTMLElement): HTMLElement | null => {
    const focusableElements = document.querySelectorAll(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-efe9
    );
    const currentIndex = Array.from(focusableElements).indexOf(currentElement);
    const previousElement = focusableElements[currentIndex - 1] as HTMLElement;
    previousElement?.focus();
=======
    return previousElement || null;
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-efe9
  }
};

// ARIA utilities
export const ariaUtils = {
=======
=======
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-7a0d
=======
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-6abd
=======
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-ee0f
  setAriaAttributes: (
    element: HTMLElement,
    attributes: Record<string, string>
  ): void => {
=======
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-7a0d
=======
  setAriaAttributes: (element: HTMLElement, attributes: Record<string, string>): void => {
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-698a
=======
  // Set ARIA attributes
  setAria: (element: HTMLElement, attributes: Record<string, string>): void => {
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-efe9
=======
  setAriaAttributes: (element: HTMLElement, attributes: Record<string, string>): void => {
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-9008
=======
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-6abd
=======
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-ee0f
    Object.entries(attributes).forEach(([key, value]) => {
      element.setAttribute(key, value);
    });
  },

=======
  announce: (message: string, priority: 'polite' | 'assertive' = 'polite') => {
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-9d58
=======
=======
  // Announce to screen readers
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-6abd
=======
  // Announce to screen readers
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-ee0f
  announce: (
    message: string,
    priority: 'polite' | 'assertive' = 'polite'
  ): void => {
=======
  announce: (
    message: string,
    priority: 'polite' | 'assertive' = 'polite'
  )
  ): void => {
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-7a0d
=======
  announce: (message: string, priority: 'polite' | 'assertive' = 'polite'): void => {
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-698a
=======
  // Remove ARIA attributes
  removeAria: (element: HTMLElement, attributes: string[]): void => {
    attributes.forEach(attr => {
      element.removeAttribute(attr);
    });
  },

  // Announce to screen readers
  announce: (message: string, priority: 'polite' | 'assertive' = 'polite'): void => {
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-efe9
=======
  // Announce to screen readers
  announce: (message: string, priority: 'polite' | 'assertive' = 'polite'): void => {
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-9008
=======
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-6abd
=======
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-ee0f
    const announcement = document.createElement('div');
    announcement.setAttribute('aria-live', priority);
    announcement.setAttribute('aria-atomic', 'true');
    announcement.className = 'sr-only';
=======
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-7a0d
=======
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-6abd
=======
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-ee0f
    announcement.textContent = message;
    
    document.body.appendChild(announcement);
=======
    
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-3fed
=======
    announcement.textContent = text;
    
    document.body.appendChild(announcement);
    
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-1f83
=======
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-2051
=======
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-7a0d
=======
    announcement.textContent = message;
    
    document.body.appendChild(announcement);
    
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-9008
=======
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-6abd
=======
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-ee0f
    setTimeout(() => {
      document.body.removeChild(announcement);
    }, 1000);
  },

  // Set focus to element and announce it
  focusAndAnnounce: (element: HTMLElement, announcement?: string): void => {
    element.focus();
    if (announcement) {
      ariaUtils.announce(announcement);
    }
  }
};

=======
// Keyboard navigation utilities
export const keyboardNavigation = {
  // Handle arrow key navigation for lists
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-2051
=======
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-7a0d
=======
// Keyboard navigation utilities
export const keyboardNavigation = {
  // Handle arrow key navigation for lists
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-6abd
=======
// Keyboard navigation utilities
export const keyboardNavigation = {
  // Handle arrow key navigation for lists
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-ee0f
  handleArrowKeys: (
    event: KeyboardEvent,
    items: HTMLElement[],
    currentIndex: number,
=======
    orientation: 'horizontal' | 'vertical' = 'vertical'
  ): number => {
    const isVertical = orientation === 'vertical';
    const isHorizontal = orientation === 'horizontal';
    
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-7a0d
=======
    orientation: 'horizontal' | 'vertical' = 'vertical'
  ): number => {
    const isVertical = orientation === 'vertical';
    const isHorizontal = orientation === 'horizontal';

>>>>>>> origin/cursor/fix-errors-and-merge-to-main-6abd
=======
    orientation: 'horizontal' | 'vertical' = 'vertical'
  ): number => {
    const isVertical = orientation === 'vertical';
    const isHorizontal = orientation === 'horizontal';

>>>>>>> origin/cursor/fix-errors-and-merge-to-main-ee0f
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
=======
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-2051
=======
      default:
        return currentIndex;
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-6abd
=======
      default:
        return currentIndex;
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-ee0f
    }

    return currentIndex;
=======
      default: 
        return currentIndex;
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-7a0d
  },
=======

>>>>>>> origin/cursor/fix-errors-and-merge-to-main-6abd
  // Handle Enter and Space key activation
  handleActivation: (event: KeyboardEvent, callback: () => void): void => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      callback();
=======
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-2051
=======
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-7a0d
=======
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-6abd
=======

  // Handle Enter and Space key activation
  handleActivation: (
    event: KeyboardEvent,
    callback: () => void
  ): void => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      callback();
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-ee0f
    }

    if (key === 'End') {
      event.preventDefault();
      items[items.length - 1]?.focus();
      return items.length - 1;
    }

    return currentIndex;
  },
};
=======

>>>>>>> origin/cursor/fix-errors-and-merge-to-main-6231
=======

>>>>>>> origin/cursor/fix-errors-and-merge-to-main-698a
// Color contrast utilities
export const colorContrast = {
=======
// Keyboard navigation utilities
export const keyboardNavigation = {
  // Handle arrow key navigation for custom components
  handleArrowKeys: (
    event: KeyboardEvent,
    elements: HTMLElement[],
    currentIndex: number,
    orientation: 'horizontal' | 'vertical' = 'horizontal'
  ): number => {
    const isVertical = orientation === 'vertical';
    const isHorizontal = orientation === 'horizontal';
    
    let newIndex = currentIndex;
    
    if (isVertical && (event.key === 'ArrowUp' || event.key === 'ArrowDown')) {
      event.preventDefault();
      newIndex = event.key === 'ArrowUp' 
        ? Math.max(0, currentIndex - 1)
        : Math.min(elements.length - 1, currentIndex + 1);
    } else if (isHorizontal && (event.key === 'ArrowLeft' || event.key === 'ArrowRight')) {
      event.preventDefault();
      newIndex = event.key === 'ArrowLeft'
        ? Math.max(0, currentIndex - 1)
        : Math.min(elements.length - 1, currentIndex + 1);
    }
    
    if (newIndex !== currentIndex) {
      elements[newIndex]?.focus();
    }
    
    return newIndex;
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
  }
};

// Color contrast utilities
export const colorContrast = {
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-1f83
  // Calculate relative luminance
  getLuminance: (r: number, g: number, b: number): number => {
    const [rs, gs, bs] = [r, g, b].map(c => {
      c = c / 255;
      return c <= 0.03928 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4);
    });
=======
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-1f83
    return 0.2126 * (rs || 0) + 0.7152 * (gs || 0) + 0.0722 * (bs || 0);
  },

  // Calculate contrast ratio
=======
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-6231
  getContrastRatio: (color1: [number, number, number], color2: [number, number, number]): number => {
    const lum1 = colorContrast.getLuminance(...color1);
    const lum2 = colorContrast.getLuminance(...color2);
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0a61
=======
    return 0.2126 * (rs ?? 0) + 0.7152 * (gs ?? 0) + 0.0722 * (bs ?? 0);
  },

  // Calculate contrast ratio
  getContrastRatio: (color1: string, color2: string): number => {
    const hexToRgb = (hex: string) => {
      const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
      return result ? {
        r: parseInt(result[1]!, 16),
        g: parseInt(result[2]!, 16),
        b: parseInt(result[3]!, 16)
      } : null;
    };

    const rgb1 = hexToRgb(color1);
    const rgb2 = hexToRgb(color2);
    
    if (!rgb1 || !rgb2) return 0;

    const lum1 = colorContrast.getLuminance(rgb1.r ?? 0, rgb1.g ?? 0, rgb1.b ?? 0);
    const lum2 = colorContrast.getLuminance(rgb2.r ?? 0, rgb2.g ?? 0, rgb2.b ?? 0);
    
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-4854
    const brightest = Math.max(lum1, lum2);
    const darkest = Math.min(lum1, lum2);
=======
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

>>>>>>> origin/cursor/fix-errors-and-merge-to-main-3fed
=======

// Color contrast utilities
export const colorContrast = {
=======
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-7a0d
=======
// Keyboard navigation utilities
export const keyboardNavigation = {
  // Handle arrow key navigation
  handleArrowKeys: (container: HTMLElement, orientation: 'horizontal' | 'vertical' = 'horizontal') => {
    const focusableElements = Array.from(container.querySelectorAll(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    )) as HTMLElement[];

    const handleKeyDown = (e: KeyboardEvent) => {
      const currentIndex = focusableElements.indexOf(document.activeElement as HTMLElement);
      
      if (currentIndex === -1) return;

      let nextIndex = currentIndex;

      if (orientation === 'horizontal') {
        if (e.key === 'ArrowLeft') {
          nextIndex = currentIndex > 0 ? currentIndex - 1 : focusableElements.length - 1;
        } else if (e.key === 'ArrowRight') {
          nextIndex = currentIndex < focusableElements.length - 1 ? currentIndex + 1 : 0;
        }
      } else {
        if (e.key === 'ArrowUp') {
          nextIndex = currentIndex > 0 ? currentIndex - 1 : focusableElements.length - 1;
        } else if (e.key === 'ArrowDown') {
          nextIndex = currentIndex < focusableElements.length - 1 ? currentIndex + 1 : 0;
        }
      }

      if (nextIndex !== currentIndex) {
        e.preventDefault();
        focusableElements[nextIndex].focus();
      }
    };

    container.addEventListener('keydown', handleKeyDown);
    
    return () => {
      container.removeEventListener('keydown', handleKeyDown);
    };
  },
};

// Color contrast utilities
export const colorContrast = {
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-9008
=======

// Color contrast utilities
export const colorContrast = {
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-6abd
  // Calculate relative luminance
  getLuminance: (r: number, g: number, b: number): number => {
    const [rs, gs, bs] = [r, g, b].map(c => {
      c = c / 255;
      return c <= 0.03928 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4);
    });
    return 0.2126 * rs + 0.7152 * gs + 0.0722 * bs;
  },

  // Calculate contrast ratio
  ): number => {
=======
  getContrastRatio: (color1: [number, number, number], color2: [number, number, number]): number => {
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-698a
=======
  getContrastRatio: (color1: [number, number, number], color2: [number, number, number]): number => {
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-9008
=======
  getContrastRatio: (
    color1: [number, number, number],
    color2: [number, number, number]
  ): number => {
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-6abd
    const lum1 = colorContrast.getLuminance(...color1);
    const lum2 = colorContrast.getLuminance(...color2);
    const brightest = Math.max(lum1, lum2);
    const darkest = Math.min(lum1, lum2);
=======
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-7a0d
=======
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-9008
=======
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-6abd
    return (brightest + 0.05) / (darkest + 0.05);
  },

  // Check if contrast meets WCAG standards
// Motion and animation utilities
export const motionUtils = {
  // Check if user prefers reduced motion
  prefersReducedMotion: (): boolean => {
    return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-7a0d
  },
=======
  meetsWCAG: (contrastRatio: number, level: 'AA' | 'AAA' = 'AA'): boolean => {
    return level === 'AA' ? contrastRatio >= 4.5 : contrastRatio >= 7;
  }
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-2051
};
=======
  meetsWCAG: (contrastRatio: number, level: 'AA' | 'AAA' = 'AA'): boolean => {
    return level === 'AA' ? contrastRatio >= 4.5 : contrastRatio >= 7;
  },
};
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-6abd

// Motion and animation utilities
export const motionUtils = {
  // Check if user prefers reduced motion
  prefersReducedMotion: (): boolean => {
    return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  },

  // Apply reduced motion styles
  applyReducedMotion: (element: HTMLElement): void => {
    if (motionUtils.prefersReducedMotion()) {
      element.style.animation = 'none';
      element.style.transition = 'none';
    }

    event.preventDefault();
    items[nextIndex]?.focus();
=======
  // Respect user's motion preferences
  conditionalAnimation: (animation: string, fallback: string = ''): string => {
    return motionUtils.prefersReducedMotion() ? fallback : animation;
  },
};

// Form accessibility utilities
export const formAccessibility = {
  // Generate unique input ID
  generateInputId: (): string => {
    return `input-${Math.random().toString(36).substr(2, 9)}`;
  },
  // Associate label with input
  associateLabel: (input: HTMLInputElement, labelText: string): HTMLLabelElement => {
=======
    }
  },

  // Respect user's motion preferences
  conditionalAnimation: (animation: string, fallback: string = ''): string => {
    return motionUtils.prefersReducedMotion() ? fallback : animation;
  },
};

// Form accessibility utilities
export const formAccessibility = {
  // Associate label with input
  associateLabel: (
    input: HTMLInputElement,
    labelText: string
  ): HTMLLabelElement => {
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-6abd
    const label = document.createElement('label');
    label.textContent = labelText;
    label.setAttribute('for', input.id || formAccessibility.generateInputId());
    if (!input.id) {
      input.id = label.getAttribute('for')!;
    }
    return label;
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-698a
  },
  },
};

// Form accessibility utilities
    }
  },

  // Respect user's motion preferences
  conditionalAnimation: (animation: string, fallback: string = ''): string => {
    return motionUtils.prefersReducedMotion() ? fallback : animation;
export const formAccessibility = {
  // Associate label with input
  associateLabel: (
    input: HTMLInputElement,
=======
  },
};

// Form accessibility utilities
export const formAccessibility = {
  // Associate label with input
  associateLabel: (input: HTMLInputElement, labelText: string)
  ): HTMLLabelElement => {
    const label = document.createElement('label');
    label.textContent = labelText;
    label.setAttribute('for', input.id || formAccessibility.generateInputId());
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-7a0d
    if (!input.id) {
      input.id = label.getAttribute('for')!;
    }
    return label;
  },
=======
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-6abd

  // Generate unique input ID
  generateInputId: (): string => {
    return `input-${Math.random().toString(36).substr(2, 9)}`;
  },

=======

  // Handle Enter and Space key activation
  handleActivation: (event: KeyboardEvent, callback: () => void): void => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      callback();
=======
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
=======
  // Add error message association
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-6abd
  addErrorMessage: (input: HTMLInputElement, errorMessage: string): void => {
    const errorId = `error-${input.id}`;
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-2051
=======

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
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-ee0f
    const errorElement = document.createElement('div');
    
    errorElement.id = errorId;
=======
    errorElement.className = 'error-message';
    errorElement.textContent = errorMessage;
    errorElement.setAttribute('role', 'alert');
    input.setAttribute('aria-describedby', errorId);
    input.setAttribute('aria-invalid', 'true');
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-7a0d
=======
    errorElement.className = 'error-message';
    errorElement.textContent = errorMessage;
    errorElement.setAttribute('role', 'alert');
    input.setAttribute('aria-describedby', errorId);
    input.setAttribute('aria-invalid', 'true');
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-6abd
    input.parentNode?.insertBefore(errorElement, input.nextSibling);
  },

  // Remove error message
=======
  removeErrorMessage: (input: HTMLInputElement): void => {
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-7a0d
=======
  removeErrorMessage: (input: HTMLInputElement): void => {
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-6abd
    const errorId = input.getAttribute('aria-describedby');
    if (errorId) {
      const errorElement = document.getElementById(errorId);
      errorElement?.remove();
      input.removeAttribute('aria-describedby');
      input.removeAttribute('aria-invalid');
=======
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-2051
=======
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-7a0d
=======
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-6abd
=======
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
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-ee0f
    }
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-98a8
  },
=======
// Screen reader utilities
export const screenReaderUtils = {
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-2051
=======
export const screenReaderUtils = {
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-7a0d
=======
  meetsWCAG: (color1: [number, number, number], color2: [number, number, number], level: 'AA' | 'AAA' = 'AA'): boolean => {
    const ratio = colorContrast.getContrastRatio(color1, color2);
    return level === 'AA' ? ratio >= 4.5 : ratio >= 7;
  },
};

// Screen reader utilities
export const screenReaderUtils = {
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-9008
  // Hide element from screen readers
  hideFromScreenReader: (element: HTMLElement): void => {
    element.setAttribute('aria-hidden', 'true');
  },

  // Show element to screen readers
  showToScreenReader: (element: HTMLElement): void => {
    element.removeAttribute('aria-hidden');
  },
  // Create screen reader only text
  createScreenReaderText: (text: string): HTMLElement => {
    const element = document.createElement('span');
    element.textContent = text;
    element.className = 'sr-only';
    return element;
=======
  },
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-7a0d
};

=======
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

  // Create screen reader only text
  createScreenReaderText: (text: string): HTMLElement => {
    const element = document.createElement('span');
    element.textContent = text;
    element.className = 'sr-only';
    return element;
  },
};

>>>>>>> origin/cursor/fix-errors-and-merge-to-main-6abd
// Accessibility testing utilities
export const accessibilityTesting = {
  // Check for missing alt text on images
  checkImageAltText: (): {
    missing: HTMLImageElement[];
    empty: HTMLImageElement[];
  } => {
    const images = Array.from(document.querySelectorAll('img'));
    const missing = images.filter(img => !img.hasAttribute('alt'));
    const empty = images.filter(img => img.getAttribute('alt') === '');
    return { missing, empty };
  },

  // Check for missing form labels
  checkFormLabels: (): HTMLInputElement[] => {
=======
    const inputs = Array.from(document.querySelectorAll('input, select, textarea'));
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-7a0d
=======
    const inputs = Array.from(
      document.querySelectorAll('input, select, textarea')
    );
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-6abd
    return inputs.filter(input => {
      const id = input.id;
      const label = id ? document.querySelector(`label[for="${id}"]`) : null;
      const ariaLabel = input.getAttribute('aria-label');
      const ariaLabelledBy = input.getAttribute('aria-labelledby');
      return !label && !ariaLabel && !ariaLabelledBy;
    }) as HTMLInputElement[];
  },

  // Check for proper heading hierarchy
  checkHeadingHierarchy: (): { issues: string[]; structure: string[] } => {
    );
    const issues: string[] = [];
    const structure: string[] = [];
    let previousLevel = 0;

    headings.forEach((heading, index) => {
      const level = parseInt(heading.tagName[1]);
      structure.push(`${heading.tagName}: ${heading.textContent?.trim()}`);
=======
    const headings = Array.from(document.querySelectorAll('h1, h2, h3, h4, h5, h6'));
    const issues: string[] = [];
    const structure: string[] = [];
    let previousLevel = 0;
    
    headings.forEach((heading, index) => {
      const level = parseInt(heading.tagName[1]);
      structure.push(`${heading.tagName}: ${heading.textContent?.trim()}`);
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-7a0d
=======
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-6abd
      if (index === 0 && level !== 1) {
        issues.push('First heading should be h1');
      }
      
      if (level > previousLevel + 1) {
=======
        issues.push(`Heading level skipped from h${previousLevel} to h${level}`);
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-7a0d
=======
        issues.push(`Heading level skipped from h${previousLevel} to h${level}`);
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-6abd
      }
      
      previousLevel = level;
    });
=======
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-7a0d
=======

>>>>>>> origin/cursor/fix-errors-and-merge-to-main-6abd
    return { issues, structure };
  },

  // Generate accessibility report
  generateReport: (): {
    images: { missing: number; empty: number };
    forms: { unlabeled: number };
    headings: { issues: string[]; structure: string[] };
=======
    score: number;
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-6abd
  } => {
    const imageCheck = accessibilityTesting.checkImageAltText();
    const formCheck = accessibilityTesting.checkFormLabels();
    const headingCheck = accessibilityTesting.checkHeadingHierarchy();
    
    const totalIssues =
      imageCheck.missing.length +
      imageCheck.empty.length +
      formCheck.length +
      headingCheck.issues.length;
    const score = Math.max(0, 100 - totalIssues * 10);
    return {
      images: {
        missing: imageCheck.missing.length,
        empty: imageCheck.empty.length,
      },
      forms: { unlabeled: formCheck.length },
      headings: headingCheck,
      score,
=======
        empty: imageCheck.empty.length
      },
      forms: { unlabeled: formCheck.length },
      headings: headingCheck,
      score
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-7a0d
=======
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-6abd
    };
=======

  // Create screen reader only text
  createScreenReaderText: (text: string): HTMLElement => {
    const element = document.createElement('span');
    element.className = 'sr-only';
    element.textContent = text;
    return element;
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-9008
  },
=======
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-bcb8
=======
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-6231
=======
  },
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-698a
  // Check if element is focusable
  isFocusable: (element: HTMLElement): boolean => {
    const focusableSelectors = [
      'button:not([disabled])',
      'input:not([disabled])',
      'select:not([disabled])',
      'textarea:not([disabled])',
      'a[href]',
      '[tabindex]:not([tabindex="-1"])'
    ];
    return focusableSelectors.some(selector => element.matches(selector));
  }
};
=======
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
=======
    announcement.textContent = message;
    
    document.body.appendChild(announcement);
    
    setTimeout(() => {
      document.body.removeChild(announcement);
    }, 1000);
  }
};

// Keyboard navigation utilities
export const keyboardUtils = {
  // Handle arrow key navigation
  handleArrowNavigation: (
    event: KeyboardEvent,
    elements: HTMLElement[],
    currentIndex: number,
    orientation: 'horizontal' | 'vertical' = 'horizontal'
  ): number => {
    const isHorizontal = orientation === 'horizontal';
    const isVertical = orientation === 'vertical';
    
    let newIndex = currentIndex;
    
    if (isHorizontal) {
      if (event.key === 'ArrowLeft') {
        newIndex = currentIndex > 0 ? currentIndex - 1 : elements.length - 1;
      } else if (event.key === 'ArrowRight') {
        newIndex = currentIndex < elements.length - 1 ? currentIndex + 1 : 0;
      }
    }
    
    if (isVertical) {
      if (event.key === 'ArrowUp') {
        newIndex = currentIndex > 0 ? currentIndex - 1 : elements.length - 1;
      } else if (event.key === 'ArrowDown') {
        newIndex = currentIndex < elements.length - 1 ? currentIndex + 1 : 0;
      }
    }
    
    if (newIndex !== currentIndex) {
      event.preventDefault();
      elements[newIndex]?.focus();
    }
    
    return newIndex;
  },

  // Handle escape key
  handleEscape: (event: KeyboardEvent, callback: () => void) => {
    if (event.key === 'Escape') {
      event.preventDefault();
      callback();
    }
  },

  // Handle enter/space key activation
  handleActivation: (event: KeyboardEvent, callback: () => void) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      callback();
    }
  }
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-9d58
};

export default {
  focusManagement,
  ariaUtils,
=======
  getContrastRatio: (color1: string, color2: string): number => {
    // This is a simplified version - in production, use a proper color parsing library
    const parseColor = (color: string) => {
      const hex = color.replace('#', '');
      return {
        r: parseInt(hex.substr(0, 2), 16),
        g: parseInt(hex.substr(2, 2), 16),
        b: parseInt(hex.substr(4, 2), 16)
      };
    };

    const c1 = parseColor(color1);
    const c2 = parseColor(color2);
    
    const l1 = colorContrast.getLuminance(c1.r, c1.g, c1.b);
    const l2 = colorContrast.getLuminance(c2.r, c2.g, c2.b);
    
    const lighter = Math.max(l1, l2);
    const darker = Math.min(l1, l2);
    
    return (lighter + 0.05) / (darker + 0.05);
  },

  // Check if contrast meets WCAG standards
  meetsWCAG: (color1: string, color2: string, level: 'AA' | 'AAA' = 'AA'): boolean => {
    const ratio = colorContrast.getContrastRatio(color1, color2);
    return level === 'AA' ? ratio >= 4.5 : ratio >= 7;
=======
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
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-efe9
  }
};

// Screen reader utilities
  // Hide element from screen readers
  hideFromScreenReader: (element: HTMLElement): void => {
    element.setAttribute('aria-hidden', 'true');
  },

  // Show element to screen readers
  showToScreenReader: (element: HTMLElement): void => {
    element.removeAttribute('aria-hidden');
  },

=======
  keyboardUtils
};
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-9d58
=======
};
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-698a
=======
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
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-efe9
=======
};
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-ee0f

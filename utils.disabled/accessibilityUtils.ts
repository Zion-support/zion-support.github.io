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

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Tab') {
        if (event.shiftKey) {
          if (document.activeElement === firstElement) {
            event.preventDefault();
            lastElement.focus();
          }
        } else {
          if (document.activeElement === lastElement) {
            event.preventDefault();
            firstElement.focus();
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])',
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])',
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
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
    
    // Focus first element
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

  // Move focus to next focusable element
  focusNext: (currentElement: HTMLElement): void => {
    const focusableElements = document.querySelectorAll(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])',

  // Move focus to next focusable element
  focusNext: (currentElement: HTMLElement): HTMLElement | null => {
    const focusableElements = document.querySelectorAll(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );
    
//     const currentIndex = Array.from(focusableElements).indexOf(currentElement);
//     const nextElement = focusableElements[currentIndex + 1] as HTMLElement;
  },

  // Move focus to previous focusable element
  focusPrevious: (currentElement: HTMLElement): HTMLElement | null => {
    const focusableElements = document.querySelectorAll(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );
    
//     const currentIndex = Array.from(focusableElements).indexOf(currentElement);
//     const previousElement = focusableElements[currentIndex - 1] as HTMLElement;
  }
};

// ARIA utilities
export const ariaUtils = {
  setAriaAttributes: (
    element: HTMLElement,
    attributes: Record<string, string>
  ): void => {
    Object.entries(attributes).forEach(([key, value]) => {
      element.setAttribute(key, value);
    });
  },

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

  // Set ARIA live region
  setLiveRegion: (element: HTMLElement, live: 'off' | 'polite' | 'assertive'): void => {
    element.setAttribute('aria-live', live);
  },

  // Set ARIA role
  setRole: (element: HTMLElement, role: string): void => {
    element.setAttribute('role', role);
  },

  // Set ARIA state
  setState: (element: HTMLElement, state: string, value: string | boolean): void => {
    element.setAttribute(`aria-${state}`, value.toString());
  // Generate unique IDs for ARIA relationships
  generateId: (prefix: string = 'aria'): string => {
    return `${prefix}-${Math.random().toString(36).substr(2, 9)}`;
  },

  // Set ARIA attributes
  setAriaAttributes: (element: HTMLElement, attributes: Record<string, string>): void => {
  setAriaAttributes: (
    element: HTMLElement,
    attributes: Record<string, string>
  ): void => {
  setAriaAttributes: (element: HTMLElement, attributes: Record<string, string>): void => {
  // Set ARIA attributes
  setAria: (element: HTMLElement, attributes: Record<string, string>): void => {
  setAriaAttributes: (element: HTMLElement, attributes: Record<string, string>): void => {
    Object.entries(attributes).forEach(([key, value]) => {
      element.setAttribute(key, value);
    });
  },

  // Announce to screen readers
  announce: (message: string, priority: 'polite' | 'assertive' = 'polite'): void => {
  announce: (message: string, priority: 'polite' | 'assertive' = 'polite') => {
  // Announce to screen readers
  // Announce to screen readers
  announce: (
    message: string,
    priority: 'polite' | 'assertive' = 'polite'
  ): void => {
  announce: (
    message: string,
    priority: 'polite' | 'assertive' = 'polite'
  )
  ): void => {
  announce: (message: string, priority: 'polite' | 'assertive' = 'polite'): void => {
  // Remove ARIA attributes
  removeAria: (element: HTMLElement, attributes: string[]): void => {
    attributes.forEach(attr => {
      element.removeAttribute(attr);
    });
  },

  // Announce to screen readers
  announce: (message: string, priority: 'polite' | 'assertive' = 'polite'): void => {
  // Announce to screen readers
  announce: (message: string, priority: 'polite' | 'assertive' = 'polite'): void => {
    const announcement = document.createElement('div');
    announcement.setAttribute('aria-live', priority);
    announcement.setAttribute('aria-atomic', 'true');
    announcement.className = 'sr-only';
    announcement.textContent = message;
    
    document.body.appendChild(announcement);
    
    announcement.textContent = text;
    
    document.body.appendChild(announcement);
    
    announcement.textContent = message;
    
    document.body.appendChild(announcement);
    
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

  handleArrowKeys: (
    event: KeyboardEvent,
    items: HTMLElement[],
    currentIndex: number,
    orientation: 'horizontal' | 'vertical' = 'vertical'
  ): number => {
//     const isVertical = orientation === 'vertical';
//     const isHorizontal = orientation === 'horizontal';
    
    orientation: 'horizontal' | 'vertical' = 'vertical'
  ): number => {
//     const isVertical = orientation === 'vertical';
//     const isHorizontal = orientation === 'horizontal';

    orientation: 'horizontal' | 'vertical' = 'vertical'
  ): number => {
//     const isVertical = orientation === 'vertical';
//     const isHorizontal = orientation === 'horizontal';

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
      default:
        return currentIndex;
    }

    return currentIndex;
      default: 
        return currentIndex;
  },
  // Handle Enter and Space key activation
  handleActivation: (event: KeyboardEvent, callback: () => void): void => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      callback();

  // Handle Enter and Space key activation
  handleActivation: (
    event: KeyboardEvent,
    callback: () => void
  ): void => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      callback();
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
export const colorContrast = {
// Keyboard navigation utilities
export const keyboardNavigation = {
  // Handle arrow key navigation for custom components
  handleArrowKeys: (
    event: KeyboardEvent,
    elements: HTMLElement[],
    currentIndex: number,
    orientation: 'horizontal' | 'vertical' = 'horizontal'
  ): number => {
//     const isVertical = orientation === 'vertical';
//     const isHorizontal = orientation === 'horizontal';
    
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
  // Calculate relative luminance
  getLuminance: (r: number, g: number, b: number): number => {
    const [rs, gs, bs] = [r, g, b].map(c => {
      c = c / 255;
      return c <= 0.03928 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4);
    });
    return 0.2126 * (rs || 0) + 0.7152 * (gs || 0) + 0.0722 * (bs || 0);
  },

  // Calculate contrast ratio
  getContrastRatio: (color1: [number, number, number], color2: [number, number, number]): number => {
//     const lum1 = colorContrast.getLuminance(...color1);
//     const lum2 = colorContrast.getLuminance(...color2);
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

//     const lum1 = colorContrast.getLuminance(rgb1.r ?? 0, rgb1.g ?? 0, rgb1.b ?? 0);
//     const lum2 = colorContrast.getLuminance(rgb2.r ?? 0, rgb2.g ?? 0, rgb2.b ?? 0);
    
//     const brightest = Math.max(lum1, lum2);
//     const darkest = Math.min(lum1, lum2);
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

//     const lum1 = contrastUtils.getLuminance(r1, g1, b1);
//     const lum2 = contrastUtils.getLuminance(r2, g2, b2);

//     const brightest = Math.max(lum1, lum2);
//     const darkest = Math.min(lum1, lum2);


// Color contrast utilities
export const colorContrast = {
// Keyboard navigation utilities
export const keyboardNavigation = {
  // Handle arrow key navigation
  handleArrowKeys: (container: HTMLElement, orientation: 'horizontal' | 'vertical' = 'horizontal') => {
    const focusableElements = Array.from(container.querySelectorAll(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    )) as HTMLElement[];

    const handleKeyDown = (e: KeyboardEvent) => {
//       const currentIndex = focusableElements.indexOf(document.activeElement as HTMLElement);
      
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

// Color contrast utilities
export const colorContrast = {
  // Calculate relative luminance
  getLuminance: (r: number, g: number, b: number): number => {
    const [rs, gs, bs] = [r, g, b].map(c => {
      c = c / 255;
      return c <= 0.03928 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4);
    });
    return 0.2126 * rs + 0.7152 * gs + 0.0722 * bs;
  },

  // Calculate contrast ratio
  getContrastRatio: (
    color1: [number, number, number],
    color2: [number, number, number]
  ): number => {
  getContrastRatio: (color1: [number, number, number], color2: [number, number, number]): number => {
  getContrastRatio: (color1: [number, number, number], color2: [number, number, number]): number => {
  getContrastRatio: (
    color1: [number, number, number],
    color2: [number, number, number]
  ): number => {
//     const lum1 = colorContrast.getLuminance(...color1);
//     const lum2 = colorContrast.getLuminance(...color2);
//     const brightest = Math.max(lum1, lum2);
//     const darkest = Math.min(lum1, lum2);
    return (brightest + 0.05) / (darkest + 0.05);
  },

  // Check if contrast meets WCAG standards
// Motion and animation utilities
export const motionUtils = {
  // Check if user prefers reduced motion
  prefersReducedMotion: (): boolean => {
    return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  },
  meetsWCAG: (contrastRatio: number, level: 'AA' | 'AAA' = 'AA'): boolean => {
    return level === 'AA' ? contrastRatio >= 4.5 : contrastRatio >= 7;
  }
};
  meetsWCAG: (contrastRatio: number, level: 'AA' | 'AAA' = 'AA'): boolean => {
    return level === 'AA' ? contrastRatio >= 4.5 : contrastRatio >= 7;
  },
};

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
    const label = document.createElement('label');
    label.textContent = labelText;
    label.setAttribute('for', input.id || formAccessibility.generateInputId());
    if (!input.id) {
      input.id = label.getAttribute('for')!;
    }
    return label;
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
    if (!input.id) {
      input.id = label.getAttribute('for')!;
    }
    return label;
  },

  // Generate unique input ID
  generateInputId: (): string => {
    return `input-${Math.random().toString(36).substr(2, 9)}`;
  },


  // Handle Enter and Space key activation
  handleActivation: (event: KeyboardEvent, callback: () => void): void => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      callback();
export const formUtils = {
  // Associate label with input
  associateLabel: (input: HTMLElement, label: HTMLElement): void => {
//     const inputId = input.id || ariaUtils.generateId('input');
//     const labelId = label.id || ariaUtils.generateId('label');

    input.id = inputId;
    label.id = labelId;
    label.setAttribute('for', inputId);
  },

  // Add error message association
  addErrorMessage: (input: HTMLInputElement, errorMessage: string): void => {
//     const errorId = `error-${input.id}`;

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
//     const ratio = colorUtils.getContrastRatio(textColor, backgroundColor);
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
//     const id = control.id || ariaUtils.generateId('form-control');
    control.id = id;
    label.setAttribute('for', id);
  },

  // Add error message to form control
  addErrorMessage: (
    control: HTMLElement,
    message: string
  ): HTMLElement => {
//     const errorId = ariaUtils.generateId('error');
    const errorElement = document.createElement('div');
    
    errorElement.id = errorId;
    errorElement.className = 'error-message';
    errorElement.textContent = errorMessage;
    errorElement.setAttribute('role', 'alert');
    input.setAttribute('aria-describedby', errorId);
    input.setAttribute('aria-invalid', 'true');
    input.parentNode?.insertBefore(errorElement, input.nextSibling);
  },

  // Remove error message
  removeErrorMessage: (input: HTMLInputElement): void => {
//     const errorId = input.getAttribute('aria-describedby');
    if (errorId) {
      const errorElement = document.getElementById(errorId);
      errorElement?.remove();
      input.removeAttribute('aria-describedby');
      input.removeAttribute('aria-invalid');
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
//     const errorId = control.getAttribute('aria-describedby');
    if (errorId) {
      const errorElement = document.getElementById(errorId);
      errorElement?.remove();
      control.removeAttribute('aria-describedby');
      control.removeAttribute('aria-invalid');
    }
  },
// Screen reader utilities
export const screenReaderUtils = {
// Screen reader utilities
export const screenReaderUtils = {
export const screenReaderUtils = {
  meetsWCAG: (color1: [number, number, number], color2: [number, number, number], level: 'AA' | 'AAA' = 'AA'): boolean => {
//     const ratio = colorContrast.getContrastRatio(color1, color2);
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
  // Create screen reader only text
  createScreenReaderText: (text: string): HTMLElement => {
    const element = document.createElement('span');
    element.textContent = text;
    element.className = 'sr-only';
    return element;
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

  // Create screen reader only text
  createScreenReaderText: (text: string): HTMLElement => {
    const element = document.createElement('span');
    element.textContent = text;
    element.className = 'sr-only';
    return element;
  },
};

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
    const inputs = Array.from(
      document.querySelectorAll('input, select, textarea')
    );
    return inputs.filter(input => {
//       const id = input.id;
      const label = id ? document.querySelector(`label[for="${id}"]`) : null;
//       const ariaLabel = input.getAttribute('aria-label');
//       const ariaLabelledBy = input.getAttribute('aria-labelledby');
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
//       const level = parseInt(heading.tagName[1]);
      structure.push(`${heading.tagName}: ${heading.textContent?.trim()}`);
    const headings = Array.from(document.querySelectorAll('h1, h2, h3, h4, h5, h6'));
    const issues: string[] = [];
    const structure: string[] = [];
    let previousLevel = 0;
    
    headings.forEach((heading, index) => {
//       const level = parseInt(heading.tagName[1]);
      structure.push(`${heading.tagName}: ${heading.textContent?.trim()}`);
      if (index === 0 && level !== 1) {
        issues.push('First heading should be h1');
      }
      
      if (level > previousLevel + 1) {
        issues.push(`Heading level skipped from h${previousLevel} to h${level}`);
      }
      
      previousLevel = level;
    });
    return { issues, structure };
  },

  // Generate accessibility report
  generateReport: (): {
    images: { missing: number; empty: number };
    forms: { unlabeled: number };
    headings: { issues: string[]; structure: string[] };
    score: number;
  } => {
    const imageCheck = accessibilityTesting.checkImageAltText();
    const formCheck = accessibilityTesting.checkFormLabels();
    const headingCheck = accessibilityTesting.checkHeadingHierarchy();
    
    const totalIssues =
      imageCheck.missing.length +
      imageCheck.empty.length +
      formCheck.length +
      headingCheck.issues.length;
//     const score = Math.max(0, 100 - totalIssues * 10);
    return {
      images: {
        missing: imageCheck.missing.length,
        empty: imageCheck.empty.length,
      },
      forms: { unlabeled: formCheck.length },
      headings: headingCheck,
      score,
        empty: imageCheck.empty.length
      },
      forms: { unlabeled: formCheck.length },
      headings: headingCheck,
      score
    };

  // Create screen reader only text
  createScreenReaderText: (text: string): HTMLElement => {
    const element = document.createElement('span');
    element.className = 'sr-only';
    element.textContent = text;
    return element;
  },
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
//     const isHorizontal = orientation === 'horizontal';
//     const isVertical = orientation === 'vertical';
    
    let newIndex = currentIndex;
    
    if (isHorizontal) {
      if (event.key === 'ArrowLeft') {
        newIndex = currentIndex > 0 ? currentIndex - 1 : elements.length - 1;
      } else if (event.key === 'ArrowRight') {
        newIndex = currentIndex < elements.length - 1 ? currentIndex + 1 : 0;
      }
    } else if (isVertical) {
      if (event.key === 'ArrowUp') {
        newIndex = currentIndex > 0 ? currentIndex - 1 : elements.length - 1;
      } else if (event.key === 'ArrowDown') {
        newIndex = currentIndex < elements.length - 1 ? currentIndex + 1 : 0;
      }
    }
    
    if (newIndex !== currentIndex) {
      event.preventDefault();
      elements[newIndex]?.focus();
      return newIndex;
    }
    
    return currentIndex;
  },

  // Handle Enter and Space key activation
  handleActivation: (event: KeyboardEvent, callback: () => void): void => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      callback();
    }
  },

  // Handle Escape key
  handleEscape: (event: KeyboardEvent, callback: () => void): void => {
    if (event.key === 'Escape') {
      event.preventDefault();
      callback();
    }
  },
};

  getContrastRatio: (color1: string, color2: string): number => {
    const parseColor = (color: string): [number, number, number] => {
      const hex = color.replace('#', '');
      return [
        parseInt(hex.substr(0, 2), 16),
        parseInt(hex.substr(2, 2), 16),
        parseInt(hex.substr(4, 2), 16),
      ];
    };

    const [r1, g1, b1] = parseColor(color1);
    const [r2, g2, b2] = parseColor(color2);
    
//     const l1 = colorContrast.getLuminance(r1, g1, b1);
//     const l2 = colorContrast.getLuminance(r2, g2, b2);
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
    
//     const l1 = colorContrast.getLuminance(c1.r, c1.g, c1.b);
//     const l2 = colorContrast.getLuminance(c2.r, c2.g, c2.b);
    
//     const lighter = Math.max(l1, l2);
//     const darker = Math.min(l1, l2);
    
    return (lighter + 0.05) / (darker + 0.05);
  },

  // Check if contrast meets WCAG standards
  meetsWCAG: (color1: string, color2: string, level: 'AA' | 'AAA' = 'AA'): boolean => {
//     const ratio = colorContrast.getContrastRatio(color1, color2);
    return level === 'AA' ? ratio >= 4.5 : ratio >= 7;
  },
};

// Screen reader utilities
export const screenReader = {
  // Announce message to screen readers
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

  keyboardUtils
};
};
  // Check if element is visible to screen readers
  isVisibleToScreenReader: (element: HTMLElement): boolean => {
    return element.getAttribute('aria-hidden') !== 'true' && 
           !element.classList.contains('sr-only');
  }
};

// Form accessibility utilities
export const formAccessibility = {
  // Associate label with input
  associateLabel: (input: HTMLInputElement, label: HTMLElement): void => {
//     const id = input.id || `input-${Math.random().toString(36).substr(2, 9)}`;
    input.id = id;
    label.setAttribute('for', id);
  },

  // Set up fieldset and legend
  createFieldset: (legend: string): HTMLFieldSetElement => {
    const fieldset = document.createElement('fieldset');
    const legendElement = document.createElement('legend');
    legendElement.textContent = legend;
    fieldset.appendChild(legendElement);
    return fieldset;
  },

  // Add error message to input
  addErrorMessage: (input: HTMLInputElement, message: string): void => {
//     const errorId = `error-${input.id || Math.random().toString(36).substr(2, 9)}`;
    const errorElement = document.createElement('div');
    errorElement.id = errorId;
    errorElement.className = 'error-message';
    errorElement.textContent = message;
    errorElement.setAttribute('role', 'alert');
    
    input.setAttribute('aria-invalid', 'true');
    input.setAttribute('aria-describedby', errorId);
    
    input.parentNode?.insertBefore(errorElement, input.nextSibling);
  },

  // Remove error message from input
  removeErrorMessage: (input: HTMLInputElement): void => {
    input.removeAttribute('aria-invalid');
    input.removeAttribute('aria-describedby');
    
    const errorElement = input.parentNode?.querySelector('.error-message');
    if (errorElement) {
      errorElement.remove();
    }
  },
};

// Motion accessibility utilities
export const motionAccessibility = {
  // Check if user prefers reduced motion
  prefersReducedMotion: (): boolean => {
    return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  },

  // Apply reduced motion styles
  applyReducedMotion: (element: HTMLElement): void => {
    if (motionAccessibility.prefersReducedMotion()) {
      element.style.animation = 'none';
      element.style.transition = 'none';
    }
  },

  // Pause animations
  pauseAnimations: (): void => {
    document.documentElement.style.setProperty('--animation-duration', '0s');
    document.documentElement.style.setProperty('--transition-duration', '0s');
  },

  // Resume animations
  resumeAnimations: (): void => {
    document.documentElement.style.removeProperty('--animation-duration');
    document.documentElement.style.removeProperty('--transition-duration');
  },
};

// Motion utilities
export const motionUtils = {
  // Get motion preferences
  getMotionPreferences: () => ({
    prefersReducedMotion: motionAccessibility.prefersReducedMotion(),
    prefersHighContrast: window.matchMedia('(prefers-contrast: high)').matches,
  }),

  // Apply motion-safe styles
  applyMotionSafeStyles: (element: HTMLElement, styles: Record<string, string>): void => {
    if (!motionAccessibility.prefersReducedMotion()) {
      Object.assign(element.style, styles);
    }
  },
};

// Initialize accessibility features
export const initAccessibility = (): void => {
  // Add screen reader only class if not exists
  if (!document.querySelector('style[data-accessibility]')) {
    const style = document.createElement('style');
    style.setAttribute('data-accessibility', 'true');
    style.textContent = `
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
      
      .error-message {
        color: #dc2626;
        font-size: 0.875rem;
        margin-top: 0.25rem;
      }
      
      @media (prefers-reduced-motion: reduce) {
        *,
        *::before,
        *::after {
          animation-duration: 0.01ms !important;
          animation-iteration-count: 1 !important;
          transition-duration: 0.01ms !important;
        }
      }
    `;
    document.head.appendChild(style);
  }
};

// Accessibility testing utilities
export const accessibilityTesting = {
  // Run basic accessibility checks
  runChecks: (): string[] => {
    const issues: string[] = [];
    
    // Check for missing alt text on images
    const images = document.querySelectorAll('img');
    images.forEach((img, index) => {
      if (!img.alt) {
        issues.push(`Image ${index + 1} is missing alt text`);
      }
    });
    
    // Check for missing form labels
    const inputs = document.querySelectorAll('input, select, textarea');
    inputs.forEach((input, index) => {
//       const id = input.id;
      const label = document.querySelector(`label[for="${id}"]`);
      if (!label && !input.getAttribute('aria-label')) {
        issues.push(`Form input ${index + 1} is missing a label`);
      }
    });
    
    // Check for missing heading hierarchy
    const headings = document.querySelectorAll('h1, h2, h3, h4, h5, h6');
    let lastLevel = 0;
    headings.forEach((heading, index) => {
//       const level = parseInt(heading.tagName.charAt(1));
      if (level > lastLevel + 1) {
        issues.push(`Heading hierarchy skip detected at heading ${index + 1}`);
      }
      lastLevel = level;
    });
    
    return issues;
  },

  // Get accessibility score
  getScore: (): number => {
    const issues = accessibilityTesting.runChecks();
    const totalChecks = 10; // Adjust based on number of checks
//     const passedChecks = totalChecks - issues.length;
    return Math.round((passedChecks / totalChecks) * 100);
  },
};

export default {
  focusManagement,
  ariaUtils,
  keyboardNavigation,
  colorContrast,
  screenReader,
  formAccessibility,
  motionAccessibility,
  motionUtils,
  initAccessibility,
  accessibilityTesting,

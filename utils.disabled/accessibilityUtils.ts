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
    const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

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

  // Move focus to next focusable element
  focusNext: (currentElement: HTMLElement): HTMLElement | null => {
    const focusableElements = document.querySelectorAll(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );
    
    const currentIndex = Array.from(focusableElements).indexOf(currentElement);
    const nextElement = focusableElements[currentIndex + 1] as HTMLElement;
    
    if (nextElement) {
      nextElement.focus();
      return nextElement;
    }
    
    return null;
  },

  // Move focus to previous focusable element
  focusPrevious: (currentElement: HTMLElement): HTMLElement | null => {
    const focusableElements = document.querySelectorAll(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );
    
    const currentIndex = Array.from(focusableElements).indexOf(currentElement);
    const previousElement = focusableElements[currentIndex - 1] as HTMLElement;
    
    if (previousElement) {
      previousElement.focus();
      return previousElement;
    }
    
    return null;
  },

  // Focus first focusable element in container
  focusFirst: (container: HTMLElement): HTMLElement | null => {
    const firstElement = container.querySelector(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    ) as HTMLElement;
    
    if (firstElement) {
      firstElement.focus();
      return firstElement;
    }
    
    return null;
  },
};

// ARIA utilities
export const ariaUtils = {
  // Set ARIA label
  setLabel: (element: HTMLElement, label: string): void => {
    element.setAttribute('aria-label', label);
  },

  // Set ARIA described by
  setDescribedBy: (element: HTMLElement, describedBy: string): void => {
    element.setAttribute('aria-describedby', describedBy);
  },

  // Set ARIA expanded
  setExpanded: (element: HTMLElement, expanded: boolean): void => {
    element.setAttribute('aria-expanded', expanded.toString());
  },

  // Set ARIA hidden
  setHidden: (element: HTMLElement, hidden: boolean): void => {
    element.setAttribute('aria-hidden', hidden.toString());
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
  },
};

// Keyboard navigation utilities
export const keyboardNavigation = {
  // Handle arrow key navigation
  handleArrowKeys: (
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
    
    const l1 = colorContrast.getLuminance(r1, g1, b1);
    const l2 = colorContrast.getLuminance(r2, g2, b2);
    
    const lighter = Math.max(l1, l2);
    const darker = Math.min(l1, l2);
    
    return (lighter + 0.05) / (darker + 0.05);
  },

  // Check if contrast meets WCAG standards
  meetsWCAG: (color1: string, color2: string, level: 'AA' | 'AAA' = 'AA'): boolean => {
    const ratio = colorContrast.getContrastRatio(color1, color2);
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

  // Create screen reader only text
  createScreenReaderText: (text: string): HTMLElement => {
    const element = document.createElement('span');
    element.className = 'sr-only';
    element.textContent = text;
    return element;
  },
};

// Form accessibility utilities
export const formAccessibility = {
  // Associate label with input
  associateLabel: (input: HTMLInputElement, label: HTMLElement): void => {
    const id = input.id || `input-${Math.random().toString(36).substr(2, 9)}`;
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
    const errorId = `error-${input.id || Math.random().toString(36).substr(2, 9)}`;
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
      const id = input.id;
      const label = document.querySelector(`label[for="${id}"]`);
      if (!label && !input.getAttribute('aria-label')) {
        issues.push(`Form input ${index + 1} is missing a label`);
      }
    });
    
    // Check for missing heading hierarchy
    const headings = document.querySelectorAll('h1, h2, h3, h4, h5, h6');
    let lastLevel = 0;
    headings.forEach((heading, index) => {
      const level = parseInt(heading.tagName.charAt(1));
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
    const passedChecks = totalChecks - issues.length;
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
};
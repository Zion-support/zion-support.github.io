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
<<<<<<< HEAD
  setAriaAttributes: (element: HTMLElement, attributes: Record<string, string>): void => {
=======
  setAriaAttributes: (
    element: HTMLElement,
    attributes: Record<string, string>
  ): void => {
>>>>>>> cursor/fix-errors-and-merge-to-main-13eb
    Object.entries(attributes).forEach(([key, value]) => {
      element.setAttribute(key, value);
    });
  },

  // Announce to screen readers
<<<<<<< HEAD
  announce: (message: string, priority: 'polite' | 'assertive' = 'polite'): void => {
=======
  announce: (
    message: string,
    priority: 'polite' | 'assertive' = 'polite'
  ): void => {
>>>>>>> cursor/fix-errors-and-merge-to-main-13eb
    const announcement = document.createElement('div');
    announcement.setAttribute('aria-live', priority);
    announcement.setAttribute('aria-atomic', 'true');
    announcement.className = 'sr-only';
    announcement.textContent = message;
    
    document.body.appendChild(announcement);
<<<<<<< HEAD
    
=======
>>>>>>> cursor/fix-errors-and-merge-to-main-13eb
    setTimeout(() => {
      document.body.removeChild(announcement);
    }, 1000);
  },
};

// Keyboard navigation utilities
export const keyboardNavigation = {
<<<<<<< HEAD
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
=======
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
>>>>>>> cursor/fix-errors-and-merge-to-main-13eb
      case 'Home':
        event.preventDefault();
        elements[0]?.focus();
        break;
      case 'End':
        event.preventDefault();
<<<<<<< HEAD
        elements[elements.length - 1]?.focus();
        break;
=======
        return items.length - 1;
      default:
        return currentIndex;
    }
  },

  // Handle Enter and Space key activation
  handleActivation: (event: KeyboardEvent, callback: () => void): void => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      callback();
>>>>>>> cursor/fix-errors-and-merge-to-main-13eb
    }
  },
};

// Color contrast utilities
export const colorContrast = {
<<<<<<< HEAD
  // Check if color combination meets WCAG standards
  checkContrast: (foreground: string, background: string): {
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
=======
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
    const lum1 = colorContrast.getLuminance(...color1);
    const lum2 = colorContrast.getLuminance(...color2);
    const brightest = Math.max(lum1, lum2);
    const darkest = Math.min(lum1, lum2);
    return (brightest + 0.05) / (darkest + 0.05);
  },

  // Check if contrast meets WCAG standards
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
  },

  // Respect user's motion preferences
  conditionalAnimation: (animation: string, fallback: string = ''): string => {
    return motionUtils.prefersReducedMotion() ? fallback : animation;
  },
>>>>>>> cursor/fix-errors-and-merge-to-main-13eb
};

// Form accessibility utilities
export const formAccessibility = {
<<<<<<< HEAD
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
=======
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

  // Generate unique input ID
  generateInputId: (): string => {
    return `input-${Math.random().toString(36).substr(2, 9)}`;
  },

  // Add error message association
  addErrorMessage: (input: HTMLInputElement, errorMessage: string): void => {
    const errorId = `error-${input.id}`;
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
    const errorId = input.getAttribute('aria-describedby');
    if (errorId) {
      const errorElement = document.getElementById(errorId);
      errorElement?.remove();
      input.removeAttribute('aria-describedby');
      input.removeAttribute('aria-invalid');
>>>>>>> cursor/fix-errors-and-merge-to-main-13eb
    }
  },
};

<<<<<<< HEAD
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
      const id = input.id;
      const label = id ? document.querySelector(`label[for="${id}"]`) : null;
      const ariaLabel = input.getAttribute('aria-label');
      const ariaLabelledBy = input.getAttribute('aria-labelledby');
      return !label && !ariaLabel && !ariaLabelledBy;
    }) as HTMLInputElement[];
  },

  // Check for proper heading hierarchy
  checkHeadingHierarchy: (): { issues: string[]; structure: string[] } => {
    const headings = Array.from(
      document.querySelectorAll('h1, h2, h3, h4, h5, h6')
    );
    const issues: string[] = [];
    const structure: string[] = [];
    let previousLevel = 0;

    headings.forEach((heading, index) => {
      const level = parseInt(heading.tagName[1]);
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
    const score = Math.max(0, 100 - totalIssues * 10);

    return {
      images: {
        missing: imageCheck.missing.length,
        empty: imageCheck.empty.length,
      },
      forms: { unlabeled: formCheck.length },
      headings: headingCheck,
      score,
    };
  },
>>>>>>> cursor/fix-errors-and-merge-to-main-13eb
};
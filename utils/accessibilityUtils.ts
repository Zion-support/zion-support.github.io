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
    // const isHorizontal = orientation === 'horizontal';

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
  handleActivation: (event: KeyboardEvent, callback: () => void): void => {
    if (event.key === 'Enter' || event.key === ' ') {
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
    return 0.2126 * (rs ?? 0) + 0.7152 * (gs ?? 0) + 0.0722 * (bs ?? 0);
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

  // Generate unique input ID
  generateInputId: (): string => {
    return `input-${Math.random().toString(36).substr(2, 9)}`;
  },

  // Check color contrast
  checkContrast: (
    _foreground: string,
    _background: string,
    level: 'AA' | 'AAA' = 'AA'
  ): boolean => {
    const thresholds = { AA: 4.5, AAA: 7 };
    // Simplified contrast calculation - in real implementation, use a proper color contrast library
    const contrastRatio = 4.5; // Placeholder
    return contrastRatio >= thresholds[level];
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
        issues.push(
          `Heading level skipped from h${previousLevel} to h${level}`
        );
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

  // Check if element is focusable
  isFocusable: (element: HTMLElement): boolean => {
    const focusableSelectors = [
      'button:not([disabled])',
      'input:not([disabled])',
      'select:not([disabled])',
      'textarea:not([disabled])',
      'a[href]',
      '[tabindex]:not([tabindex="-1"])',
    ];
    return focusableSelectors.some(selector => element.matches(selector));
  },
};

// Initialize accessibility features
export const initAccessibility = (): void => {
  // Add skip links
  const skipLink = document.createElement('a');
  skipLink.href = '#main-content';
  skipLink.textContent = 'Skip to main content';
  skipLink.className = 'skip-link';
  skipLink.style.cssText = `
    position: absolute;
    top: -40px;
    left: 6px;
    background: #000;
    color: #fff;
    padding: 8px;
    text-decoration: none;
    z-index: 1000;
    transition: top 0.3s;
  `;
  skipLink.addEventListener('focus', () => {
    skipLink.style.top = '6px';
  });
  skipLink.addEventListener('blur', () => {
    skipLink.style.top = '-40px';
  });
  document.body.insertBefore(skipLink, document.body.firstChild);
};

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

  // Move focus to next focusable element
  focusNext: (currentElement: HTMLElement): void => {
    const focusableElements = document.querySelectorAll(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])',
    );
    const currentIndex = Array.from(focusableElements).indexOf(currentElement);
    const nextElement = focusableElements[currentIndex + 1] as HTMLElement;
    nextElement?.focus();
  },

  // Move focus to previous focusable element
  focusPrevious: (currentElement: HTMLElement): void => {
    const focusableElements = document.querySelectorAll(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])',
    );
    const currentIndex = Array.from(focusableElements).indexOf(currentElement);
    const previousElement = focusableElements[currentIndex - 1] as HTMLElement;
    previousElement?.focus();
  }
};

// ARIA utilities
export const ariaUtils = {
  // Announce text to screen readers
  announce: (text: string, priority: 'polite' | 'assertive' = 'polite'): void => {
    const announcement = document.createElement('div');
    announcement.setAttribute('aria-live', priority);
    announcement.setAttribute('aria-atomic', 'true');
    announcement.className = 'sr-only';
    announcement.textContent = text;
    
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
  }
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

  // Make element focusable for screen readers
  makeFocusable: (element: HTMLElement): void => {
    element.setAttribute('tabindex', '0');
  },

  // Remove element from tab order but keep it accessible to screen readers
  removeFromTabOrder: (element: HTMLElement): void => {
    element.setAttribute('tabindex', '-1');
  },

  // Improve ARIA labels
  improveAriaLabels: (): void => {
    // Implementation for improving ARIA labels
    console.log('Improving ARIA labels');
  }
};
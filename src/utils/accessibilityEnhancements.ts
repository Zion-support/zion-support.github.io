/**
 * Accessibility Enhancement Utilities
 * Comprehensive accessibility improvements for the Zion website
 */

// Focus management utilities
export const manageFocus = {
  // Trap focus within an element
  trapFocus: (element: HTMLElement): (() => void) => {
    const focusableElements = element.querySelectorAll(
      'a[href], button, textarea, input[type="text"], input[type="radio"], input[type="checkbox"], select'
    );
    const firstFocusableElement = focusableElements[0] as HTMLElement;
    const lastFocusableElement = focusableElements[focusableElements.length - 1] as HTMLElement;

    const handleTabKey = (e: KeyboardEvent) => {
      if (e.key === 'Tab') {
        if (e.shiftKey) {
          if (document.activeElement === firstFocusableElement) {
            lastFocusableElement.focus();
            e.preventDefault();
          }
        } else {
          if (document.activeElement === lastFocusableElement) {
            firstFocusableElement.focus();
            e.preventDefault();
          }
        }
      }
    };

    element.addEventListener('keydown', handleTabKey);
    firstFocusableElement?.focus();

    return () => {
      element.removeEventListener('keydown', handleTabKey);
    };
  },

  // Restore focus to a specific element
  restoreFocus: (element: HTMLElement): void => {
    element.focus();
  },

  // Skip to main content
  createSkipLink: (): HTMLElement => {
    const skipLink = document.createElement('a');
    skipLink.href = '#main-content';
    skipLink.textContent = 'Skip to main content';
    skipLink.className = 'sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-blue-600 text-white px-4 py-2 rounded z-50';
    return skipLink;
  }
};

// ARIA utilities
export const ariaUtils = {
  // Announce changes to screen readers
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

  // Update ARIA labels
  updateAriaLabel: (element: HTMLElement, label: string): void => {
    element.setAttribute('aria-label', label);
  },

  // Toggle ARIA expanded state
  toggleExpanded: (element: HTMLElement): void => {
    const isExpanded = element.getAttribute('aria-expanded') === 'true';
    element.setAttribute('aria-expanded', (!isExpanded).toString());
  },

  // Set ARIA described by
  setDescribedBy: (element: HTMLElement, descriptionId: string): void => {
    element.setAttribute('aria-describedby', descriptionId);
  }
};

// Color contrast utilities
export const colorContrast = {
  // Check if color meets WCAG AA standards
  meetsWCAGAA: (foreground: string, background: string): boolean => {
    const fgLuminance = getLuminance(foreground);
    const bgLuminance = getLuminance(background);
    const contrast = (Math.max(fgLuminance, bgLuminance) + 0.05) / 
                     (Math.min(fgLuminance, bgLuminance) + 0.05);
    return contrast >= 4.5;
  },

  // Get relative luminance of a color
  getLuminance: (color: string): number => {
    const rgb = hexToRgb(color);
    if (!rgb) return 0;
    
    const { r, g, b } = rgb;
    const [rs, gs, bs] = [r, g, b].map(c => {
      c = c / 255;
      return c <= 0.03928 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4);
    });
    
    return 0.2126 * rs + 0.7152 * gs + 0.0722 * bs;
  }
};

// Keyboard navigation utilities
export const keyboardNavigation = {
  // Handle arrow key navigation
  handleArrowKeys: (elements: HTMLElement[], currentIndex: number, direction: 'up' | 'down' | 'left' | 'right'): number => {
    const keyMap = {
      up: -1,
      down: 1,
      left: -1,
      right: 1
    };
    
    const delta = keyMap[direction];
    const newIndex = currentIndex + delta;
    
    if (newIndex >= 0 && newIndex < elements.length) {
      elements[newIndex].focus();
      return newIndex;
    }
    
    return currentIndex;
  },

  // Handle Enter and Space key activation
  handleActivation: (element: HTMLElement, callback: () => void): void => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        callback();
      }
    };
    
    element.addEventListener('keydown', handleKeyDown);
  }
};

// Screen reader utilities
export const screenReader = {
  // Hide content from screen readers
  hideFromScreenReader: (element: HTMLElement): void => {
    element.setAttribute('aria-hidden', 'true');
  },

  // Show content to screen readers only
  showToScreenReaderOnly: (element: HTMLElement): void => {
    element.className = 'sr-only';
  },

  // Provide alternative text for images
  setImageAlt: (image: HTMLImageElement, altText: string): void => {
    image.alt = altText;
    image.setAttribute('role', 'img');
  }
};

// Motion and animation utilities
export const motionAccessibility = {
  // Respect user's motion preferences
  respectsMotionPreference: (): boolean => {
    return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  },

  // Disable animations for users who prefer reduced motion
  disableAnimations: (element: HTMLElement): void => {
    if (motionAccessibility.respectsMotionPreference()) {
      element.style.animation = 'none';
      element.style.transition = 'none';
    }
  },

  // Provide motion alternatives
  provideMotionAlternative: (element: HTMLElement): void => {
    if (motionAccessibility.respectsMotionPreference()) {
      element.setAttribute('data-reduced-motion', 'true');
    }
  }
};

// Form accessibility utilities
export const formAccessibility = {
  // Associate label with input
  associateLabel: (input: HTMLInputElement, label: HTMLLabelElement): void => {
    const id = input.id || `input-${Math.random().toString(36).substr(2, 9)}`;
    input.id = id;
    label.setAttribute('for', id);
  },

  // Provide field validation feedback
  provideValidationFeedback: (input: HTMLInputElement, isValid: boolean, message: string): void => {
    const feedbackId = `feedback-${input.id}`;
    let feedbackElement = document.getElementById(feedbackId);
    
    if (!feedbackElement) {
      feedbackElement = document.createElement('div');
      feedbackElement.id = feedbackId;
      feedbackElement.setAttribute('role', 'alert');
      feedbackElement.className = 'text-sm mt-1';
      input.parentNode?.appendChild(feedbackElement);
    }
    
    feedbackElement.textContent = message;
    feedbackElement.className = `text-sm mt-1 ${isValid ? 'text-green-600' : 'text-red-600'}`;
    
    input.setAttribute('aria-describedby', feedbackId);
    input.setAttribute('aria-invalid', (!isValid).toString());
  }
};

// Helper functions
const hexToRgb = (hex: string): { r: number; g: number; b: number } | null => {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result ? {
    r: parseInt(result[1], 16),
    g: parseInt(result[2], 16),
    b: parseInt(result[3], 16)
  } : null;
};

const getLuminance = (color: string): number => {
  return colorContrast.getLuminance(color);
};

// Initialize accessibility enhancements
export const initializeAccessibility = (): void => {
  // Add skip link
  const skipLink = manageFocus.createSkipLink();
  document.body.insertBefore(skipLink, document.body.firstChild);
  
  // Respect motion preferences
  const style = document.createElement('style');
  style.textContent = `
    @media (prefers-reduced-motion: reduce) {
      *, *::before, *::after {
        animation-duration: 0.01ms !important;
        animation-iteration-count: 1 !important;
        transition-duration: 0.01ms !important;
      }
    }
  `;
  document.head.appendChild(style);
  
  // Add focus visible styles
  const focusStyle = document.createElement('style');
  focusStyle.textContent = `
    .focus-visible:focus {
      outline: 2px solid #3b82f6;
      outline-offset: 2px;
    }
  `;
  document.head.appendChild(focusStyle);
};
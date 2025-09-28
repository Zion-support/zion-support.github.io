/**
 * Enhanced Accessibility Optimizations
 * Comprehensive accessibility tools for better user experience
 */

import { useEffect, useRef, useState, useCallback } from 'react';

/**
 * Accessibility hook for keyboard navigation
 */
export function useKeyboardNavigation() {
  const [focusedIndex, setFocusedIndex] = useState(-1);
  const [isNavigating, setIsNavigating] = useState(false);

  const handleKeyDown = useCallback((event: KeyboardEvent) => {
    if (event.key === 'Tab') {
      setIsNavigating(true);
    }
  }, []);

  const handleMouseDown = useCallback(() => {
    setIsNavigating(false);
  }, []);

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('mousedown', handleMouseDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('mousedown', handleMouseDown);
    };
  }, [handleKeyDown, handleMouseDown]);

  return {
    focusedIndex,
    setFocusedIndex,
    isNavigating
  };
}

/**
 * Focus management hook
 */
export function useFocusManagement() {
  const focusHistory = useRef<HTMLElement[]>([]);
  const currentFocus = useRef<HTMLElement | null>(null);

  const saveFocus = useCallback(() => {
    const activeElement = document.activeElement as HTMLElement;
    if (activeElement && activeElement !== document.body) {
      focusHistory.current.push(activeElement);
      currentFocus.current = activeElement;
    }
  }, []);

  const restoreFocus = useCallback(() => {
    const lastFocused = focusHistory.current.pop();
    if (lastFocused) {
      lastFocused.focus();
      currentFocus.current = lastFocused;
    }
  }, []);

  const trapFocus = useCallback((container: HTMLElement) => {
    const focusableElements = container.querySelectorAll(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    ) as NodeListOf<HTMLElement>;

    const firstElement = focusableElements[0];
    const lastElement = focusableElements[focusableElements.length - 1];

    const handleTabKey = (e: KeyboardEvent) => {
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

    container.addEventListener('keydown', handleTabKey);
    firstElement?.focus();

    return () => {
      container.removeEventListener('keydown', handleTabKey);
    };
  }, []);

  return {
    saveFocus,
    restoreFocus,
    trapFocus,
    currentFocus: currentFocus.current
  };
}

/**
 * Screen reader announcements hook
 */
export function useScreenReaderAnnouncements() {
  const announceToScreenReader = useCallback((message: string, priority: 'polite' | 'assertive' = 'polite') => {
    const announcement = document.createElement('div');
    announcement.setAttribute('aria-live', priority);
    announcement.setAttribute('aria-atomic', 'true');
    announcement.className = 'sr-only';
    announcement.textContent = message;

    document.body.appendChild(announcement);

    // Remove after announcement
    setTimeout(() => {
      document.body.removeChild(announcement);
    }, 1000);
  }, []);

  return { announceToScreenReader };
}

/**
 * High contrast mode detection
 */
export function useHighContrastMode() {
  const [isHighContrast, setIsHighContrast] = useState(false);

  useEffect(() => {
    const checkHighContrast = () => {
      // Check for Windows High Contrast Mode
      const isWindowsHighContrast = window.matchMedia('(-ms-high-contrast: active)').matches;
      
      // Check for forced-colors media query
      const isForcedColors = window.matchMedia('(forced-colors: active)').matches;
      
      setIsHighContrast(isWindowsHighContrast || isForcedColors);
    };

    checkHighContrast();

    const mediaQuery = window.matchMedia('(-ms-high-contrast: active), (forced-colors: active)');
    mediaQuery.addEventListener('change', checkHighContrast);

    return () => {
      mediaQuery.removeEventListener('change', checkHighContrast);
    };
  }, []);

  return isHighContrast;
}

/**
 * Reduced motion detection
 */
export function useReducedMotion() {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);

    const handleChange = () => {
      setPrefersReducedMotion(mediaQuery.matches);
    };

    mediaQuery.addEventListener('change', handleChange);

    return () => {
      mediaQuery.removeEventListener('change', handleChange);
    };
  }, []);

  return prefersReducedMotion;
}

/**
 * Color contrast checker
 */
export function checkColorContrast(foreground: string, background: string): {
  ratio: number;
  level: 'AAA' | 'AA' | 'AA Large' | 'Fail';
  isAccessible: boolean;
} {
  // Convert hex to RGB
  const hexToRgb = (hex: string) => {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
      r: parseInt(result[1], 16),
      g: parseInt(result[2], 16),
      b: parseInt(result[3], 16)
    } : null;
  };

  // Calculate relative luminance
  const getLuminance = (rgb: { r: number; g: number; b: number }) => {
    const [r, g, b] = [rgb.r, rgb.g, rgb.b].map(c => {
      c = c / 255;
      return c <= 0.03928 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4);
    });
    return 0.2126 * r + 0.7152 * g + 0.0722 * b;
  };

  const fgRgb = hexToRgb(foreground);
  const bgRgb = hexToRgb(background);

  if (!fgRgb || !bgRgb) {
    return { ratio: 0, level: 'Fail', isAccessible: false };
  }

  const fgLuminance = getLuminance(fgRgb);
  const bgLuminance = getLuminance(bgRgb);

  const ratio = (Math.max(fgLuminance, bgLuminance) + 0.05) / (Math.min(fgLuminance, bgLuminance) + 0.05);

  let level: 'AAA' | 'AA' | 'AA Large' | 'Fail';
  let isAccessible: boolean;

  if (ratio >= 7) {
    level = 'AAA';
    isAccessible = true;
  } else if (ratio >= 4.5) {
    level = 'AA';
    isAccessible = true;
  } else if (ratio >= 3) {
    level = 'AA Large';
    isAccessible = true;
  } else {
    level = 'Fail';
    isAccessible = false;
  }

  return { ratio: Math.round(ratio * 100) / 100, level, isAccessible };
}

/**
 * Accessibility utilities
 */
export const accessibilityUtils = {
  /**
   * Generate accessible color palette
   */
  generateAccessiblePalette: (baseColor: string) => {
    const colors = {
      primary: baseColor,
      secondary: '',
      accent: '',
      background: '',
      surface: '',
      text: '',
      textSecondary: ''
    };

    // This would contain logic to generate accessible color variations
    // For now, returning the base structure
    return colors;
  },

  /**
   * Validate ARIA attributes
   */
  validateARIA: (element: HTMLElement): string[] => {
    const errors: string[] = [];

    // Check for required ARIA attributes
    const hasAriaLabel = element.hasAttribute('aria-label');
    const hasAriaLabelledBy = element.hasAttribute('aria-labelledby');

    if (!hasAriaLabel && !hasAriaLabelledBy) {
      // Check if element has accessible name
      const accessibleName = element.textContent?.trim() || element.getAttribute('alt') || element.getAttribute('title');
      if (!accessibleName) {
        errors.push('Element lacks accessible name (aria-label, aria-labelledby, or visible text)');
      }
    }

    // Check for proper ARIA roles
    const role = element.getAttribute('role');
    if (role && !['button', 'link', 'heading', 'img', 'text'].includes(role)) {
      // Validate custom roles
      errors.push(`Custom ARIA role "${role}" should be validated`);
    }

    return errors;
  },

  /**
   * Create accessible skip links
   */
  createSkipLinks: (links: Array<{ href: string; text: string }>) => {
    return links.map((link, index) => (
      <a
        key={index}
        href={link.href}
        className="skip-link"
        style={{
          position: 'absolute',
          left: '-9999px',
          top: 'auto',
          width: '1px',
          height: '1px',
          overflow: 'hidden'
        }}
        onFocus={(e) => {
          e.currentTarget.style.left = 'auto';
          e.currentTarget.style.top = 'auto';
          e.currentTarget.style.width = 'auto';
          e.currentTarget.style.height = 'auto';
          e.currentTarget.style.overflow = 'visible';
        }}
        onBlur={(e) => {
          e.currentTarget.style.left = '-9999px';
          e.currentTarget.style.top = 'auto';
          e.currentTarget.style.width = '1px';
          e.currentTarget.style.height = '1px';
          e.currentTarget.style.overflow = 'hidden';
        }}
      >
        {link.text}
      </a>
    ));
  },

  /**
   * Generate accessible form labels
   */
  createAccessibleFormField: (
    id: string,
    label: string,
    type: string = 'text',
    required: boolean = false,
    error?: string
  ) => {
    return {
      id,
      label,
      type,
      required,
      error,
      ariaDescribedBy: error ? `${id}-error` : undefined,
      ariaInvalid: error ? 'true' : 'false'
    };
  }
};

/**
 * Accessibility performance monitoring
 */
export const accessibilityPerformanceMonitor = {
  /**
   * Monitor keyboard navigation performance
   */
  monitorKeyboardNavigation: () => {
    let keyDownTime = 0;
    let keyUpTime = 0;

    const handleKeyDown = () => {
      keyDownTime = performance.now();
    };

    const handleKeyUp = () => {
      keyUpTime = performance.now();
      const responseTime = keyUpTime - keyDownTime;

      if (responseTime > 100) {
        console.warn(`Slow keyboard response: ${responseTime.toFixed(2)}ms`);
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('keyup', handleKeyUp);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('keyup', handleKeyUp);
    };
  },

  /**
   * Monitor focus performance
   */
  monitorFocusPerformance: () => {
    let focusStartTime = 0;

    const handleFocusIn = () => {
      focusStartTime = performance.now();
    };

    const handleFocusOut = () => {
      const focusTime = performance.now() - focusStartTime;
      
      if (focusTime > 50) {
        console.warn(`Slow focus transition: ${focusTime.toFixed(2)}ms`);
      }
    };

    document.addEventListener('focusin', handleFocusIn);
    document.addEventListener('focusout', handleFocusOut);

    return () => {
      document.removeEventListener('focusin', handleFocusIn);
      document.removeEventListener('focusout', handleFocusOut);
    };
  }
};
// Accessibility utility functions (non-component exports)
import React, { useEffect, useState } from 'react';

// Focus management utilities
export const focusManagement = {
  // Trap focus within an element
  trapFocus: (element: HTMLElement) => {
    const focusableElements = element.querySelectorAll(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );
    const firstElement = focusableElements[0] as HTMLElement;
    const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

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

    element.addEventListener('keydown', handleTabKey);
    firstElement?.focus();

    return () => {
      element.removeEventListener('keydown', handleTabKey);
    };
  },

  // Skip to main content link
  createSkipLink: () => (
    <a
      href="#main-content"
      className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-cyan-600 text-white px-4 py-2 rounded-lg z-50"
    >
      Skip to main content
    </a>
  ),

  // Announce changes to screen readers
  announceToScreenReader: (message: string) => {
    const announcement = document.createElement('div');
    announcement.setAttribute('aria-live', 'polite');
    announcement.setAttribute('aria-atomic', 'true');
    announcement.className = 'sr-only';
    announcement.textContent = message;
    document.body.appendChild(announcement);
    setTimeout(() => document.body.removeChild(announcement), 1000);
  },

  // Get focusable elements
  getFocusableElements: (container: HTMLElement) => {
    return container.querySelectorAll(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );
  },

  // Focus first focusable element
  focusFirst: (container: HTMLElement) => {
    const focusableElements = focusManagement.getFocusableElements(container);
    const firstElement = focusableElements[0] as HTMLElement;
    firstElement?.focus();
  },

  // Focus last focusable element
  focusLast: (container: HTMLElement) => {
    const focusableElements = focusManagement.getFocusableElements(container);
    const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;
    lastElement?.focus();
  }
};

// Keyboard navigation hook
export const useKeyboardNavigation = (onEscape?: () => void) => {
  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === 'Escape' && onEscape) {
      onEscape();
    }
  };

  return { handleKeyDown };
};

// High contrast mode detection
export const useHighContrastMode = () => {
  const [isHighContrast, setIsHighContrast] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-contrast: high)');
    setIsHighContrast(mediaQuery.matches);

    const handleChange = (e: MediaQueryListEvent) => {
      setIsHighContrast(e.matches);
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  return isHighContrast;
};

// Reduced motion detection
export const useReducedMotion = () => {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);

    const handleChange = (e: MediaQueryListEvent) => {
      setPrefersReducedMotion(e.matches);
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  return prefersReducedMotion;
};
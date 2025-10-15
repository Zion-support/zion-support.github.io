// Accessibility utility functions
import React from 'react';

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

    return () => {
      element.removeEventListener('keydown', handleTabKey);
    };
  },

  // Move focus to first focusable element
  focusFirst: (element: HTMLElement) => {
    const focusableElements = element.querySelectorAll(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );
    const firstElement = focusableElements[0] as HTMLElement;
    firstElement?.focus();
  },

  // Move focus to last focusable element
  focusLast: (element: HTMLElement) => {
    const focusableElements = element.querySelectorAll(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );
    const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;
    lastElement?.focus();
  },
};

// ARIA utilities
export const ariaUtils = {
  // Generate unique ID for ARIA attributes
  generateId: (prefix: string = 'aria') => {
    return `${prefix}-${Math.random().toString(36).substr(2, 9)}`;
  },

  // Announce message to screen readers
  announce: (message: string, priority: 'polite' | 'assertive' = 'polite') => {
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

  // Check if element is visible to screen readers
  isVisibleToScreenReader: (element: HTMLElement): boolean => {
    const style = window.getComputedStyle(element);
    return (
      style.display !== 'none' &&
      style.visibility !== 'hidden' &&
      element.getAttribute('aria-hidden') !== 'true' &&
      !element.hasAttribute('hidden')
    );
  },
};

// Keyboard navigation utilities
export const keyboardUtils = {
  // Handle arrow key navigation
  handleArrowKeys: (
    event: KeyboardEvent,
    items: HTMLElement[],
    currentIndex: number,
    orientation: 'horizontal' | 'vertical' = 'vertical'
  ): number => {
    const isHorizontal = orientation === 'horizontal';
    
    switch (event.key) {
      case isHorizontal ? 'ArrowLeft' : 'ArrowUp':
        event.preventDefault();
        return currentIndex > 0 ? currentIndex - 1 : items.length - 1;
      case isHorizontal ? 'ArrowRight' : 'ArrowDown':
        event.preventDefault();
        return currentIndex < items.length - 1 ? currentIndex + 1 : 0;
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
  },
};

// Color contrast utilities
export const contrastUtils = {
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
    
    const lum1 = contrastUtils.getLuminance(r1, g1, b1);
    const lum2 = contrastUtils.getLuminance(r2, g2, b2);
    
    const brightest = Math.max(lum1, lum2);
    const darkest = Math.min(lum1, lum2);
    
    return (brightest + 0.05) / (darkest + 0.05);
  },

  // Check if contrast meets WCAG standards
  meetsWCAG: (color1: string, color2: string, level: 'AA' | 'AAA' = 'AA'): boolean => {
    const ratio = contrastUtils.getContrastRatio(color1, color2);
    return level === 'AA' ? ratio >= 4.5 : ratio >= 7;
  },
};

// Screen reader utilities
export const screenReaderUtils = {
  // Create screen reader only text
  createScreenReaderText: (text: string): React.ReactElement => {
    return React.createElement('span', {
      className: 'sr-only',
      'aria-live': 'polite'
    }, text);
  },

  // Hide element from screen readers
  hideFromScreenReader: (element: HTMLElement) => {
    element.setAttribute('aria-hidden', 'true');
  },

  // Show element to screen readers
  showToScreenReader: (element: HTMLElement) => {
    element.removeAttribute('aria-hidden');
  },
};
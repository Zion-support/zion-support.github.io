// Accessibility utilities
import { useEffect, useRef, useState } from 'react';

// Type definitions for better type safety
interface KeyboardEvent extends Event {
  key: string;
  shiftKey: boolean;
  preventDefault(): void;
}

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

  // Get focusable elements within a container
  getFocusableElements: (container: HTMLElement) => {
    return container.querySelectorAll(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );
  },

  // Move focus to next focusable element
  moveToNext: (currentElement: HTMLElement) => {
    const focusableElements = document.querySelectorAll(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );
    const currentIndex = Array.from(focusableElements).indexOf(currentElement);
    const nextElement = focusableElements[currentIndex + 1] as HTMLElement;
    nextElement?.focus();
  },

  // Move focus to previous focusable element
  moveToPrevious: (currentElement: HTMLElement) => {
    const focusableElements = document.querySelectorAll(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );
    const currentIndex = Array.from(focusableElements).indexOf(currentElement);
    const previousElement = focusableElements[currentIndex - 1] as HTMLElement;
    previousElement?.focus();
  },
};

// Screen reader utilities
export const screenReader = {
  // Announce message to screen readers
  announce: (message: string) => {
    const announcement = document.createElement('div');
    announcement.setAttribute('aria-live', 'polite');
    announcement.setAttribute('aria-atomic', 'true');
    announcement.className = 'sr-only';
    announcement.textContent = message;
    document.body.appendChild(announcement);
    
    setTimeout(() => {
      document.body.removeChild(announcement);
    }, 1000);
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

// Keyboard navigation utilities
export const keyboardNavigation = {
  // Handle escape key
  handleEscape: (callback: () => void) => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        callback();
      }
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  },

  // Handle arrow key navigation
  handleArrowKeys: (e: KeyboardEvent, items: HTMLElement[], currentIndex: number) => {
    let newIndex = currentIndex;
    
    switch (e.key) {
      case 'ArrowDown':
      case 'ArrowRight':
        e.preventDefault();
        newIndex = (currentIndex + 1) % items.length;
        break;
      case 'ArrowUp':
      case 'ArrowLeft':
        e.preventDefault();
        newIndex = currentIndex === 0 ? items.length - 1 : currentIndex - 1;
        break;
      case 'Home':
        e.preventDefault();
        newIndex = 0;
        break;
      case 'End':
        e.preventDefault();
        newIndex = items.length - 1;
        break;
    }
    
    if (newIndex !== currentIndex) {
      items[newIndex]?.focus();
      return newIndex;
    }
    
    return currentIndex;
  }
};

// ARIA utilities
export const ariaUtils = {
  // Set ARIA attributes
  setAriaAttributes: (element: HTMLElement, attributes: Record<string, string>) => {
    Object.entries(attributes).forEach(([key, value]) => {
      element.setAttribute(key, value);
    });
  },

  // Toggle ARIA expanded
  toggleExpanded: (element: HTMLElement) => {
    const isExpanded = element.getAttribute('aria-expanded') === 'true';
    element.setAttribute('aria-expanded', (!isExpanded).toString());
  },

  // Set ARIA hidden
  setHidden: (element: HTMLElement, hidden: boolean) => {
    element.setAttribute('aria-hidden', hidden.toString());
  }
};

// Color contrast utilities
export const colorContrast = {
  // Check if color meets WCAG AA standards
  meetsWCAGAA: (foreground: string, background: string): boolean => {
    const fgLuminance = getLuminance(foreground);
    const bgLuminance = getLuminance(background);
    const contrast = (Math.max(fgLuminance, bgLuminance) + 0.05) / (Math.min(fgLuminance, bgLuminance) + 0.05);
    return contrast >= 4.5;
  },

  // Get relative luminance
  getLuminance: (color: string): number => {
    const rgb = hexToRgb(color);
    if (!rgb) return 0;
    
    const { r, g, b } = rgb;
    const rs = r / 255;
    const gs = g / 255;
    const bs = b / 255;
    
    const rLuminance = rs <= 0.03928 ? rs / 12.92 : Math.pow((rs + 0.055) / 1.055, 2.4);
    const gLuminance = gs <= 0.03928 ? gs / 12.92 : Math.pow((gs + 0.055) / 1.055, 2.4);
    const bLuminance = bs <= 0.03928 ? bs / 12.92 : Math.pow((bs + 0.055) / 1.055, 2.4);
    
    return 0.2126 * rLuminance + 0.7152 * gLuminance + 0.0722 * bLuminance;
  }
};

// Helper functions
function hexToRgb(hex: string): { r: number; g: number; b: number } | null {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result ? {
    r: parseInt(result[1]!, 16),
    g: parseInt(result[2]!, 16),
    b: parseInt(result[3]!, 16)
  } : null;
}

function getLuminance(color: string): number {
  return colorContrast.getLuminance(color);
}

// Hook for managing focus trap
export const useFocusTrap = (isActive: boolean) => {
  const containerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!isActive || !containerRef.current) return;

    const cleanup = focusManagement.trapFocus(containerRef.current);
    return cleanup;
  }, [isActive]);

  return containerRef;
};

// Hook for managing keyboard navigation
export const useKeyboardNavigation = (items: HTMLElement[], initialIndex = 0) => {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      const newIndex = keyboardNavigation.handleArrowKeys(e, items, currentIndex);
      setCurrentIndex(newIndex);
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [items, currentIndex]);

  return [currentIndex, setCurrentIndex] as const;
};

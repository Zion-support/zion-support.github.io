import { useEffect, useRef, useState } from 'react';

// Focus management utilities
export const useFocusManagement = () => {
  const focusableElements = 'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])';
  
  const trapFocus = (element: HTMLElement) => {
    const focusableContent = element.querySelectorAll(focusableElements);
    const firstFocusableElement = focusableContent[0] as HTMLElement;
    const lastFocusableElement = focusableContent[focusableContent.length - 1] as HTMLElement;
    
    element.addEventListener('keydown', (e) => {
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
    });
  };
  
  const focusFirstElement = (element: HTMLElement) => {
    const focusableContent = element.querySelector(focusableElements) as HTMLElement;
    if (focusableContent) {
      focusableContent.focus();
    }
  };
  
  return { trapFocus, focusFirstElement };
};

// Screen reader announcements
export const useScreenReaderAnnouncement = () => {
  const [announcement, setAnnouncement] = useState('');
  
  const announce = (message: string, priority: 'polite' | 'assertive' = 'polite') => {
    setAnnouncement(message);
    setTimeout(() => setAnnouncement(''), 1000);
  };
  
  return { announcement, announce };
};

// Skip link component
export const SkipLink: React.FC<{ href: string; children: React.ReactNode }> = ({ href, children }) => {
  return (
    <a
      href={href}
      className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-indigo-600 text-white px-4 py-2 rounded-md z-50"
    >
      {children}
    </a>
  );
};

// High contrast mode detection
export const useHighContrastMode = () => {
  const [isHighContrast, setIsHighContrast] = useState(false);
  
  useEffect(() => {
    const checkHighContrast = () => {
      const mediaQuery = window.matchMedia('(prefers-contrast: high)');
      setIsHighContrast(mediaQuery.matches);
      
      mediaQuery.addEventListener('change', (e) => {
        setIsHighContrast(e.matches);
      });
    };
    
    checkHighContrast();
  }, []);
  
  return isHighContrast;
};

// Reduced motion detection
export const useReducedMotion = () => {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);
    
    mediaQuery.addEventListener('change', (e) => {
      setPrefersReducedMotion(e.matches);
    });
  }, []);
  
  return prefersReducedMotion;
};

// Color contrast utilities
export const getContrastRatio = (color1: string, color2: string): number => {
  // Simplified contrast ratio calculation
  // In a real implementation, you'd use a proper color contrast library
  return 4.5; // Placeholder
};

// ARIA utilities
export const getAriaLabel = (element: HTMLElement): string => {
  return element.getAttribute('aria-label') || 
         element.getAttribute('aria-labelledby') || 
         element.textContent || 
         'Interactive element';
};

// Focus visible polyfill
export const useFocusVisible = () => {
  useEffect(() => {
    // Add focus-visible polyfill if needed
    if (!CSS.supports('selector(:focus-visible)')) {
      import('focus-visible');
    }
  }, []);
};

// Keyboard navigation utilities
export const useKeyboardNavigation = () => {
  const handleKeyDown = (e: KeyboardEvent, onEnter?: () => void, onEscape?: () => void) => {
    switch (e.key) {
      case 'Enter':
      case ' ':
        onEnter?.();
        break;
      case 'Escape':
        onEscape?.();
        break;
    }
  };
  
  return { handleKeyDown };
};

// Accessibility testing utilities
export const runAccessibilityTests = async () => {
  // This would integrate with axe-core or similar testing library
  console.log('Running accessibility tests...');
  return {
    violations: [],
    passes: [],
    incomplete: []
  };
};
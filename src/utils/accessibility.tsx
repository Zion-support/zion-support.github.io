import React from 'react';

// Accessibility utilities and hooks

// Focus management
export const focusElement = (element: HTMLElement | null) => {
  if (element) {
    element.focus();
  }
};

export const focusFirstFocusable = (container: HTMLElement | null) => {
  if (!container) return;
  
  const focusableElements = container.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  );
  
  if (focusableElements.length > 0) {
    focusElement(focusableElements[0] as HTMLElement);
  }
};

export const trapFocus = (container: HTMLElement | null) => {
  if (!container) return;

  const focusableElements = container.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  );
  
  const firstElement = focusableElements[0] as HTMLElement;
  const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === 'Tab') {
      if (e.shiftKey) {
        if (document.activeElement === firstElement) {
          e.preventDefault();
          lastElement.focus();
        }
      } else {
        if (document.activeElement === lastElement) {
          e.preventDefault();
          firstElement.focus();
        }
      }
    }
  };

  container.addEventListener('keydown', handleKeyDown);
  
  return () => {
    container.removeEventListener('keydown', handleKeyDown);
  };
};

// ARIA utilities
export const generateId = (prefix: string = 'id') => {
  return `${prefix}-${Math.random().toString(36).substr(2, 9)}`;
};

export const announceToScreenReader = (message: string) => {
  const announcement = document.createElement('div');
  announcement.setAttribute('aria-live', 'polite');
  announcement.setAttribute('aria-atomic', 'true');
  announcement.className = 'sr-only';
  announcement.textContent = message;
  
  document.body.appendChild(announcement);
  
  setTimeout(() => {
    document.body.removeChild(announcement);
  }, 1000);
};

// Keyboard navigation
export const handleArrowKeys = (
  event: React.KeyboardEvent,
  options: {
    onUp?: () => void;
    onDown?: () => void;
    onLeft?: () => void;
    onRight?: () => void;
    onEnter?: () => void;
    onEscape?: () => void;
    onHome?: () => void;
    onEnd?: () => void;
  }
) => {
  switch (event.key) {
    case 'ArrowUp':
      event.preventDefault();
      options.onUp?.();
      break;
    case 'ArrowDown':
      event.preventDefault();
      options.onDown?.();
      break;
    case 'ArrowLeft':
      event.preventDefault();
      options.onLeft?.();
      break;
    case 'ArrowRight':
      event.preventDefault();
      options.onRight?.();
      break;
    case 'Enter':
    case ' ':
      event.preventDefault();
      options.onEnter?.();
      break;
    case 'Escape':
      event.preventDefault();
      options.onEscape?.();
      break;
    case 'Home':
      event.preventDefault();
      options.onHome?.();
      break;
    case 'End':
      event.preventDefault();
      options.onEnd?.();
      break;
  }
};

// Color contrast utilities
export const getContrastRatio = (color1: string, color2: string): number => {
  const getLuminance = (color: string): number => {
    const rgb = hexToRgb(color);
    if (!rgb) return 0;
    
    const { r, g, b } = rgb;
    const [rs, gs, bs] = [r, g, b].map(c => {
      c = c / 255;
      return c <= 0.03928 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4);
    });
    
    return 0.2126 * rs + 0.7152 * gs + 0.0722 * bs;
  };

  const l1 = getLuminance(color1);
  const l2 = getLuminance(color2);
  
  const lighter = Math.max(l1, l2);
  const darker = Math.min(l1, l2);
  
  return (lighter + 0.05) / (darker + 0.05);
};

export const hexToRgb = (hex: string): { r: number; g: number; b: number } | null => {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result ? {
    r: parseInt(result[1], 16),
    g: parseInt(result[2], 16),
    b: parseInt(result[3], 16)
  } : null;
};

export const isAccessibleContrast = (foreground: string, background: string): boolean => {
  const ratio = getContrastRatio(foreground, background);
  return ratio >= 4.5; // WCAG AA standard
};

// Screen reader utilities
export const useScreenReader = () => {
  const [isScreenReaderActive, setIsScreenReaderActive] = React.useState(false);

  React.useEffect(() => {
    // Check if screen reader is active
    const checkScreenReader = () => {
      const hasScreenReader = 
        window.speechSynthesis ||
        'speechSynthesis' in window ||
        navigator.userAgent.includes('NVDA') ||
        navigator.userAgent.includes('JAWS') ||
        navigator.userAgent.includes('VoiceOver');
      
      setIsScreenReaderActive(!!hasScreenReader);
    };

    checkScreenReader();
    
    // Listen for screen reader events
    const handleFocus = () => {
      if (document.activeElement?.getAttribute('aria-label') || 
          document.activeElement?.getAttribute('aria-describedby')) {
        setIsScreenReaderActive(true);
      }
    };

    document.addEventListener('focus', handleFocus, true);
    
    return () => {
      document.removeEventListener('focus', handleFocus, true);
    };
  }, []);

  return { isScreenReaderActive };
};

// Skip links
export const SkipLink: React.FC<{ href: string; children: React.ReactNode }> = ({ href, children }) => (
  <a
    href={href}
    className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-blue-600 text-white px-4 py-2 rounded z-50"
    onClick={(e) => {
      e.preventDefault();
      const target = document.querySelector(href);
      if (target) {
        focusElement(target as HTMLElement);
      }
    }}
  >
    {children}
  </a>
);

// Accessible button component
export const AccessibleButton: React.FC<{
  onClick: () => void;
  children: React.ReactNode;
  disabled?: boolean;
  ariaLabel?: string;
  className?: string;
}> = ({ onClick, children, disabled = false, ariaLabel, className = '' }) => (
  <button
    onClick={onClick}
    disabled={disabled}
    aria-label={ariaLabel}
    className={`px-4 py-2 rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${
      disabled 
        ? 'bg-gray-300 text-gray-500 cursor-not-allowed' 
        : 'bg-blue-600 text-white hover:bg-blue-700'
    } ${className}`}
  >
    {children}
  </button>
);

// Accessible input component
export const AccessibleInput: React.FC<{
  type?: string;
  value: string;
  onChange: (value: string) => void;
  label: string;
  error?: string;
  required?: boolean;
  className?: string;
}> = ({ type = 'text', value, onChange, label, error, required = false, className = '' }) => {
  const id = generateId('input');
  const errorId = generateId('error');

  return (
    <div className={`space-y-1 ${className}`}>
      <label htmlFor={id} className="block text-sm font-medium text-gray-700">
        {label}
        {required && <span className="text-red-500 ml-1">*</span>}
      </label>
      <input
        id={id}
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        required={required}
        aria-invalid={!!error}
        aria-describedby={error ? errorId : undefined}
        className={`block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${
          error ? 'border-red-500' : 'border-gray-300'
        }`}
      />
      {error && (
        <p id={errorId} className="text-sm text-red-600" role="alert">
          {error}
        </p>
      )}
    </div>
  );
};

// High contrast mode detection
export const useHighContrastMode = () => {
  const [isHighContrast, setIsHighContrast] = React.useState(false);

  React.useEffect(() => {
    const checkHighContrast = () => {
      const mediaQuery = window.matchMedia('(prefers-contrast: high)');
      setIsHighContrast(mediaQuery.matches);
    };

    checkHighContrast();
    
    const mediaQuery = window.matchMedia('(prefers-contrast: high)');
    mediaQuery.addEventListener('change', checkHighContrast);
    
    return () => {
      mediaQuery.removeEventListener('change', checkHighContrast);
    };
  }, []);

  return isHighContrast;
};

// Reduced motion detection
export const useReducedMotion = () => {
  const [prefersReducedMotion, setPrefersReducedMotion] = React.useState(false);

  React.useEffect(() => {
    const checkReducedMotion = () => {
      const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
      setPrefersReducedMotion(mediaQuery.matches);
    };

    checkReducedMotion();
    
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    mediaQuery.addEventListener('change', checkReducedMotion);
    
    return () => {
      mediaQuery.removeEventListener('change', checkReducedMotion);
    };
  }, []);

  return prefersReducedMotion;
};

// Accessibility testing utilities
export const runAccessibilityAudit = () => {
  const issues: string[] = [];

  // Check for missing alt text
  const imagesWithoutAlt = document.querySelectorAll('img:not([alt])');
  imagesWithoutAlt.forEach((img, index) => {
    issues.push(`Image ${index + 1} is missing alt text`);
  });

  // Check for missing form labels
  const inputsWithoutLabels = document.querySelectorAll('input:not([aria-label]):not([aria-labelledby])');
  inputsWithoutLabels.forEach((input, index) => {
    const label = document.querySelector(`label[for="${input.id}"]`);
    if (!label) {
      issues.push(`Input ${index + 1} is missing a label`);
    }
  });

  // Check for missing heading hierarchy
  const headings = document.querySelectorAll('h1, h2, h3, h4, h5, h6');
  let previousLevel = 0;
  headings.forEach((heading, index) => {
    const level = parseInt(heading.tagName.charAt(1));
    if (level > previousLevel + 1) {
      issues.push(`Heading hierarchy skipped at heading ${index + 1}`);
    }
    previousLevel = level;
  });

  // Check for color contrast
  const textElements = document.querySelectorAll('p, span, div, a, button');
  textElements.forEach((element, index) => {
    const styles = window.getComputedStyle(element);
    const color = styles.color;
    const backgroundColor = styles.backgroundColor;
    
    if (color && backgroundColor && !isAccessibleContrast(color, backgroundColor)) {
      issues.push(`Element ${index + 1} has insufficient color contrast`);
    }
  });

  return issues;
};

export default {
  focusElement,
  focusFirstFocusable,
  trapFocus,
  generateId,
  announceToScreenReader,
  handleArrowKeys,
  getContrastRatio,
  isAccessibleContrast,
  useScreenReader,
  useHighContrastMode,
  useReducedMotion,
  runAccessibilityAudit,
  SkipLink,
  AccessibleButton,
  AccessibleInput,
};
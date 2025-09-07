/**
 * Accessibility Improvements Utility
 * Provides various accessibility enhancement functions
 */

// ARIA attributes and roles
export const ariaEnhancements = {
  // Generate ARIA labels for interactive elements
  generateAriaLabel: (element: string, context: string): string => {
    const templates = {
      button: `${context} button`,
      link: `Navigate to ${context}`,
      input: `Enter ${context}`,
      select: `Select ${context}`,
      checkbox: `Toggle ${context}`,
      radio: `Choose ${context}`,
      tab: `${context} tab`,
      modal: `${context} dialog`,
      menu: `${context} menu`
    };
    
    return templates[element as keyof typeof templates] || `${context} ${element}`;
  },

  // Generate ARIA describedby relationships
  generateAriaDescribedBy: (elementId: string, descriptionId: string): { 'aria-describedby': string } => ({
    'aria-describedby': descriptionId
  }),

  // Generate ARIA live region attributes
  generateLiveRegion: (politeness: 'polite' | 'assertive' | 'off' = 'polite') => ({
    'aria-live': politeness,
    'aria-atomic': 'true'
  }),

  // Generate ARIA expanded state
  generateExpandedState: (isExpanded: boolean) => ({
    'aria-expanded': isExpanded.toString()
  })
};

// Keyboard navigation
export const keyboardNavigation = {
  // Handle keyboard navigation for custom components
  handleKeyboardNavigation: (event: KeyboardEvent, options: {
    onEnter?: () => void;
    onSpace?: () => void;
    onEscape?: () => void;
    onArrowUp?: () => void;
    onArrowDown?: () => void;
    onArrowLeft?: () => void;
    onArrowRight?: () => void;
    onTab?: () => void;
  }) => {
    switch (event.key) {
      case 'Enter':
        event.preventDefault();
        options.onEnter?.();
        break;
      case ' ':
        event.preventDefault();
        options.onSpace?.();
        break;
      case 'Escape':
        event.preventDefault();
        options.onEscape?.();
        break;
      case 'ArrowUp':
        event.preventDefault();
        options.onArrowUp?.();
        break;
      case 'ArrowDown':
        event.preventDefault();
        options.onArrowDown?.();
        break;
      case 'ArrowLeft':
        event.preventDefault();
        options.onArrowLeft?.();
        break;
      case 'ArrowRight':
        event.preventDefault();
        options.onArrowRight?.();
        break;
      case 'Tab':
        options.onTab?.();
        break;
    }
  },

  // Create roving tabindex for component groups
  createRovingTabindex: (elements: HTMLElement[], currentIndex: number = 0) => {
    elements.forEach((element, index) => {
      element.tabIndex = index === currentIndex ? 0 : -1;
    });
  },

  // Trap focus within a container
  trapFocus: (container: HTMLElement) => {
    const focusableElements = container.querySelectorAll(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    ) as NodeListOf<HTMLElement>;
    
    const firstElement = focusableElements[0];
    const lastElement = focusableElements[focusableElements.length - 1];

    const handleTabKey = (event: KeyboardEvent) => {
      if (event.key === 'Tab') {
        if (event.shiftKey) {
          if (document.activeElement === firstElement) {
            event.preventDefault();
            lastElement.focus();
          }
        } else {
          if (document.activeElement === lastElement) {
            event.preventDefault();
            firstElement.focus();
          }
        }
      }
    };

    container.addEventListener('keydown', handleTabKey);
    
    return () => {
      container.removeEventListener('keydown', handleTabKey);
    };
  }
};

// Color and contrast
export const colorAccessibility = {
  // Calculate color contrast ratio
  calculateContrastRatio: (color1: string, color2: string): number => {
    const getLuminance = (color: string): number => {
      const rgb = parseInt(color.replace('#', ''), 16);
      const r = (rgb >> 16) & 0xff;
      const g = (rgb >> 8) & 0xff;
      const b = (rgb >> 0) & 0xff;
      
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
  },

  // Check if contrast meets WCAG guidelines
  meetsContrastRequirements: (
    foreground: string,
    background: string,
    level: 'AA' | 'AAA' = 'AA',
    size: 'normal' | 'large' = 'normal'
  ): boolean => {
    const ratio = colorAccessibility.calculateContrastRatio(foreground, background);
    
    const requirements = {
      AA: { normal: 4.5, large: 3 },
      AAA: { normal: 7, large: 4.5 }
    };
    
    return ratio >= requirements[level][size];
  },

  // Generate accessible color palette
  generateAccessiblePalette: (baseColor: string) => {
    // This is a simplified version - in production, use a proper color theory library
    const variations = {
      light: '#f8f9fa',
      medium: '#6c757d',
      dark: '#212529'
    };
    
    return variations;
  }
};

// Screen reader optimizations
export const screenReaderOptimizations = {
  // Generate screen reader only text
  generateScreenReaderText: (text: string): React.CSSProperties => ({
    position: 'absolute',
    width: '1px',
    height: '1px',
    padding: '0',
    margin: '-1px',
    overflow: 'hidden',
    clip: 'rect(0, 0, 0, 0)',
    whiteSpace: 'nowrap',
    border: '0'
  }),

  // Announce dynamic content changes
  announceToScreenReader: (message: string, priority: 'polite' | 'assertive' = 'polite') => {
    if (typeof document !== 'undefined') {
      const announcement = document.createElement('div');
      announcement.setAttribute('aria-live', priority);
      announcement.setAttribute('aria-atomic', 'true');
      announcement.style.position = 'absolute';
      announcement.style.left = '-10000px';
      announcement.textContent = message;
      
      document.body.appendChild(announcement);
      
      setTimeout(() => {
        document.body.removeChild(announcement);
      }, 1000);
    }
  },

  // Generate skip links
  generateSkipLinks: (targets: Array<{ href: string; text: string }>) => {
    return targets.map(target => ({
      href: target.href,
      text: target.text,
      className: 'skip-link',
      style: {
        position: 'absolute',
        top: '-40px',
        left: '6px',
        background: '#000',
        color: '#fff',
        padding: '8px',
        textDecoration: 'none',
        zIndex: 1000,
        transform: 'translateY(-100%)',
        transition: 'transform 0.3s'
      }
    }));
  }
};

// Form accessibility
export const formAccessibility = {
  // Generate accessible form labels
  generateFormLabel: (inputId: string, labelText: string, required: boolean = false) => ({
    htmlFor: inputId,
    children: required ? `${labelText} *` : labelText,
    'aria-required': required ? 'true' : undefined
  }),

  // Generate form validation messages
  generateValidationMessage: (inputId: string, message: string, type: 'error' | 'success' | 'warning' = 'error') => ({
    id: `${inputId}-${type}`,
    role: type === 'error' ? 'alert' : 'status',
    'aria-live': 'polite',
    className: `validation-message validation-message--${type}`
  }),

  // Generate fieldset and legend
  generateFieldset: (legendText: string, required: boolean = false) => ({
    legend: {
      children: required ? `${legendText} *` : legendText,
      className: 'fieldset-legend'
    },
    'aria-required': required ? 'true' : undefined
  }),

  // Generate accessible error summary
  generateErrorSummary: (errors: Array<{ field: string; message: string }>) => ({
    role: 'alert',
    'aria-labelledby': 'error-summary-title',
    tabIndex: -1,
    errors: errors.map(error => ({
      href: `#${error.field}`,
      text: error.message
    }))
  })
};

// Motion and animation accessibility
export const motionAccessibility = {
  // Check for reduced motion preference
  prefersReducedMotion: (): boolean => {
    if (typeof window !== 'undefined') {
      return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    }
    return false;
  },

  // Generate animation with reduced motion support
  generateAccessibleAnimation: (
    normalAnimation: React.CSSProperties,
    reducedAnimation: React.CSSProperties
  ): React.CSSProperties => {
    return motionAccessibility.prefersReducedMotion() ? reducedAnimation : normalAnimation;
  },

  // Pause/play animation controls
  generateAnimationControls: (isPlaying: boolean, onToggle: () => void) => ({
    button: {
      onClick: onToggle,
      'aria-label': isPlaying ? 'Pause animations' : 'Play animations',
      'aria-pressed': isPlaying.toString()
    },
    text: isPlaying ? 'Pause' : 'Play'
  })
};

// Focus management
export const focusManagement = {
  // Set focus to element with announcement
  setFocusWithAnnouncement: (elementId: string, announcement?: string) => {
    if (typeof document !== 'undefined') {
      const element = document.getElementById(elementId);
      if (element) {
        element.focus();
        if (announcement) {
          screenReaderOptimizations.announceToScreenReader(announcement);
        }
      }
    }
  },

  // Create focus indicator styles
  generateFocusStyles: (color: string = '#005fcc'): React.CSSProperties => ({
    outline: `2px solid ${color}`,
    outlineOffset: '2px',
    boxShadow: `0 0 0 4px ${color}25`
  }),

  // Manage focus for single page applications
  manageSPAFocus: (pageTitle: string) => {
    if (typeof document !== 'undefined') {
      // Update page title
      document.title = pageTitle;
      
      // Move focus to main content or h1
      const mainContent = document.querySelector('main') || document.querySelector('h1');
      if (mainContent) {
        (mainContent as HTMLElement).focus();
        screenReaderOptimizations.announceToScreenReader(`Navigated to ${pageTitle}`);
      }
    }
  }
};

export default {
  ariaEnhancements,
  keyboardNavigation,
  colorAccessibility,
  screenReaderOptimizations,
  formAccessibility,
  motionAccessibility,
  focusManagement
};
// Accessibility utilities for enhanced user experience

export const ARIA_LABELS = {
  // Navigation
  MAIN_NAV: 'Main navigation',
  MOBILE_MENU: 'Mobile menu',
  SKIP_TO_CONTENT: 'Skip to main content',
  
  // Buttons
  CLOSE_MENU: 'Close menu',
  OPEN_MENU: 'Open menu',
  LOAD_MORE: 'Load more content',
  SUBMIT_FORM: 'Submit form',
  
  // Forms
  REQUIRED_FIELD: 'Required field',
  OPTIONAL_FIELD: 'Optional field',
  FORM_ERROR: 'Form error',
  FORM_SUCCESS: 'Form submitted successfully',
  
  // Content
  LOADING: 'Loading content',
  ERROR_MESSAGE: 'Error message',
  SUCCESS_MESSAGE: 'Success message',
  WARNING_MESSAGE: 'Warning message',
  
  // Interactive elements
  EXPAND_SECTION: 'Expand section',
  COLLAPSE_SECTION: 'Collapse section',
  PLAY_VIDEO: 'Play video',
  PAUSE_VIDEO: 'Pause video',
  MUTE_AUDIO: 'Mute audio',
  UNMUTE_AUDIO: 'Unmute audio'
};

export const KEYBOARD_SHORTCUTS = {
  ESCAPE: 'Escape',
  ENTER: 'Enter',
  SPACE: ' ',
  TAB: 'Tab',
  ARROW_UP: 'ArrowUp',
  ARROW_DOWN: 'ArrowDown',
  ARROW_LEFT: 'ArrowLeft',
  ARROW_RIGHT: 'ArrowRight',
  HOME: 'Home',
  END: 'End'
};

export const FOCUS_MANAGEMENT = {
  // Focus trap for modals and dropdowns
  trapFocus: (element: HTMLElement) => {
    const focusableElements = element.querySelectorAll(
      'a[href], button, input, textarea, select, details, [tabindex]:not([tabindex="-1"])'
    ) as NodeListOf<HTMLElement>;
    
    const firstElement = focusableElements[0];
    const lastElement = focusableElements[focusableElements.length - 1];
    
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Tab') {
        if (e.shiftKey) {
          if (document.activeElement === firstElement) {
            lastElement?.focus();
            e.preventDefault();
          }
        } else {
          if (document.activeElement === lastElement) {
            firstElement?.focus();
            e.preventDefault();
          }
        }
      }
    };
    
    element.addEventListener('keydown', handleKeyDown);
    
    return () => {
      element.removeEventListener('keydown', handleKeyDown);
    };
  },
  
  // Focus restoration
  restoreFocus: (element: HTMLElement) => {
    const previousActiveElement = document.activeElement as HTMLElement;
    element.focus();
    
    return () => {
      previousActiveElement?.focus();
    };
  },
  
  // Skip to content functionality
  addSkipToContent: () => {
    const skipLink = document.createElement('a');
    skipLink.href = '#main-content';
    skipLink.textContent = 'Skip to main content';
    skipLink.className = 'sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-blue-600 text-white px-4 py-2 rounded z-50';
    skipLink.style.cssText = `
      position: absolute;
      top: -40px;
      left: 6px;
      background: #2563eb;
      color: white;
      padding: 8px;
      text-decoration: none;
      border-radius: 4px;
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
  }
};

export const SCREEN_READER_SUPPORT = {
  // Announce changes to screen readers
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
  
  // Create screen reader only text
  srOnly: (text: string) => {
    const element = document.createElement('span');
    element.className = 'sr-only';
    element.textContent = text;
    return element;
  }
};

export const COLOR_CONTRAST = {
  // Check if color combination meets WCAG standards
  checkContrast: (foreground: string, background: string): boolean => {
    // This is a simplified version - in production, use a proper color contrast library
    const getLuminance = (color: string): number => {
      const rgb = color.match(/\d+/g);
      if (!rgb) return 0;
      
      const [r, g, b] = rgb.map(c => {
        const val = parseInt(c) / 255;
        return val <= 0.03928 ? val / 12.92 : Math.pow((val + 0.055) / 1.055, 2.4);
      });
      
      return 0.2126 * r + 0.7152 * g + 0.0722 * b;
    };
    
    const fgLuminance = getLuminance(foreground);
    const bgLuminance = getLuminance(background);
    
    const contrast = (Math.max(fgLuminance, bgLuminance) + 0.05) / (Math.min(fgLuminance, bgLuminance) + 0.05);
    
    return contrast >= 4.5; // WCAG AA standard
  }
};

export const MOTION_PREFERENCES = {
  // Respect user's motion preferences
  prefersReducedMotion: (): boolean => {
    return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  },
  
  // Apply motion preferences to animations
  applyMotionPreferences: (element: HTMLElement) => {
    if (this.prefersReducedMotion()) {
      element.style.animation = 'none';
      element.style.transition = 'none';
    }
  }
};

export const HIGH_CONTRAST = {
  // Check if user prefers high contrast
  prefersHighContrast: (): boolean => {
    return window.matchMedia('(prefers-contrast: high)').matches;
  },
  
  // Apply high contrast styles
  applyHighContrast: () => {
    if (this.prefersHighContrast()) {
      document.documentElement.classList.add('high-contrast');
    }
  }
};

export default {
  ARIA_LABELS,
  KEYBOARD_SHORTCUTS,
  FOCUS_MANAGEMENT,
  SCREEN_READER_SUPPORT,
  COLOR_CONTRAST,
  MOTION_PREFERENCES,
  HIGH_CONTRAST
};
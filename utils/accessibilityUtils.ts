// Accessibility utilities and helpers

export interface AccessibilitySettings {
  highContrast: boolean;
  largeText: boolean;
  reducedMotion: boolean;
  screenReader: boolean;
  focusVisible: boolean;
  keyboardNavigation: boolean;
}

export class AccessibilityManager {
  private static instance: AccessibilityManager;
  private settings: AccessibilitySettings = {
    highContrast: false,
    largeText: false,
    reducedMotion: false,
    screenReader: false,
    focusVisible: true,
    keyboardNavigation: true
  };

  static getInstance(): AccessibilityManager {
    if (!AccessibilityManager.instance) {
      AccessibilityManager.instance = new AccessibilityManager();
    }
    return AccessibilityManager.instance;
  }

  // Initialize accessibility features
  init(): void {
    this.loadSettings();
    this.detectSystemPreferences();
    this.setupKeyboardNavigation();
    this.setupFocusManagement();
    this.setupScreenReaderSupport();
  }

  // Load settings from localStorage
  private loadSettings(): void {
    if (typeof window === 'undefined') return;

    try {
      const saved = localStorage.getItem('accessibility-settings');
      if (saved) {
        this.settings = { ...this.settings, ...JSON.parse(saved) };
      }
    } catch (error) {
      console.warn('Failed to load accessibility settings:', error);
    }
  }

  // Save settings to localStorage
  private saveSettings(): void {
    if (typeof window === 'undefined') return;

    try {
      localStorage.setItem('accessibility-settings', JSON.stringify(this.settings));
    } catch (error) {
      console.warn('Failed to save accessibility settings:', error);
    }
  }

  // Detect system preferences
  private detectSystemPreferences(): void {
    if (typeof window === 'undefined') return;

    // High contrast detection
    const highContrastQuery = window.matchMedia('(prefers-contrast: high)');
    this.settings.highContrast = highContrastQuery.matches;

    // Reduced motion detection
    const reducedMotionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    this.settings.reducedMotion = reducedMotionQuery.matches;

    // Listen for changes
    highContrastQuery.addEventListener('change', (e) => {
      this.settings.highContrast = e.matches;
      this.applySettings();
    });

    reducedMotionQuery.addEventListener('change', (e) => {
      this.settings.reducedMotion = e.matches;
      this.applySettings();
    });
  }

  // Setup keyboard navigation
  private setupKeyboardNavigation(): void {
    if (typeof window === 'undefined') return;

    let isKeyboardUser = false;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Tab') {
        isKeyboardUser = true;
        document.body.classList.add('keyboard-navigation');
      }
    };

    const handleMouseDown = () => {
      isKeyboardUser = false;
      document.body.classList.remove('keyboard-navigation');
    };

    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('mousedown', handleMouseDown);

    this.settings.keyboardNavigation = isKeyboardUser;
  }

  // Setup focus management
  private setupFocusManagement(): void {
    if (typeof window === 'undefined') return;

    // Skip to main content link
    this.createSkipLink();

    // Focus trap for modals
    this.setupFocusTrap();

    // Focus indicators
    this.setupFocusIndicators();
  }

  // Create skip to main content link
  private createSkipLink(): void {
    const skipLink = document.createElement('a');
    skipLink.href = '#main-content';
    skipLink.textContent = 'Skip to main content';
    skipLink.className = 'skip-link';
    skipLink.style.cssText = `
      position: absolute;
      top: -40px;
      left: 6px;
      background: #06b6d4;
      color: white;
      padding: 8px 16px;
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

  // Setup focus trap for modals
  private setupFocusTrap(): void {
    const trapFocus = (element: HTMLElement) => {
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
    };

    // Apply to modals and dropdowns
    const modals = document.querySelectorAll('[role="dialog"], [role="menu"]');
    modals.forEach(modal => trapFocus(modal as HTMLElement));
  }

  // Setup focus indicators
  private setupFocusIndicators(): void {
    const style = document.createElement('style');
    style.textContent = `
      .keyboard-navigation *:focus {
        outline: 2px solid #06b6d4;
        outline-offset: 2px;
      }
      
      *:focus-visible {
        outline: 2px solid #06b6d4;
        outline-offset: 2px;
      }
      
      .skip-link:focus {
        top: 6px !important;
      }
    `;
    document.head.appendChild(style);
  }

  // Setup screen reader support
  private setupScreenReaderSupport(): void {
    if (typeof window === 'undefined') return;

    // Announce changes to screen readers
    const announceToScreenReader = (message: string) => {
      const announcement = document.createElement('div');
      announcement.setAttribute('aria-live', 'polite');
      announcement.setAttribute('aria-atomic', 'true');
      announcement.className = 'sr-only';
      announcement.textContent = message;
      
      document.body.appendChild(announcement);
      
      setTimeout(() => {
        if (document.body.contains(announcement)) {
          document.body.removeChild(announcement);
        }
      }, 1000);
    };

    // Make announcement function globally available
    (window as any).announceToScreenReader = announceToScreenReader;
  }

  // Apply accessibility settings
  private applySettings(): void {
    if (typeof window === 'undefined') return;

    const root = document.documentElement;

    // High contrast
    if (this.settings.highContrast) {
      root.classList.add('high-contrast');
    } else {
      root.classList.remove('high-contrast');
    }

    // Large text
    if (this.settings.largeText) {
      root.classList.add('large-text');
    } else {
      root.classList.remove('large-text');
    }

    // Reduced motion
    if (this.settings.reducedMotion) {
      root.classList.add('reduced-motion');
    } else {
      root.classList.remove('reduced-motion');
    }

    // Focus visible
    if (this.settings.focusVisible) {
      root.classList.add('focus-visible');
    } else {
      root.classList.remove('focus-visible');
    }
  }

  // Update setting
  updateSetting<K extends keyof AccessibilitySettings>(
    key: K, 
    value: AccessibilitySettings[K]
  ): void {
    this.settings[key] = value;
    this.applySettings();
    this.saveSettings();
  }

  // Get current settings
  getSettings(): AccessibilitySettings {
    return { ...this.settings };
  }

  // Reset to defaults
  resetSettings(): void {
    this.settings = {
      highContrast: false,
      largeText: false,
      reducedMotion: false,
      screenReader: false,
      focusVisible: true,
      keyboardNavigation: true
    };
    this.applySettings();
    this.saveSettings();
  }

  // Check if element is visible to screen readers
  isVisibleToScreenReader(element: HTMLElement): boolean {
    const style = window.getComputedStyle(element);
    return (
      style.display !== 'none' &&
      style.visibility !== 'hidden' &&
      element.getAttribute('aria-hidden') !== 'true' &&
      !element.classList.contains('sr-only')
    );
  }

  // Get accessible name for element
  getAccessibleName(element: HTMLElement): string {
    // Check aria-label
    const ariaLabel = element.getAttribute('aria-label');
    if (ariaLabel) return ariaLabel;

    // Check aria-labelledby
    const ariaLabelledBy = element.getAttribute('aria-labelledby');
    if (ariaLabelledBy) {
      const labelElement = document.getElementById(ariaLabelledBy);
      if (labelElement) return labelElement.textContent || '';
    }

    // Check for associated label
    if (element.id) {
      const label = document.querySelector(`label[for="${element.id}"]`);
      if (label) return label.textContent || '';
    }

    // Check for text content
    if (element.textContent) return element.textContent.trim();

    // Check for alt text
    if (element instanceof HTMLImageElement) {
      return element.alt || '';
    }

    return '';
  }

  // Validate ARIA attributes
  validateARIA(element: HTMLElement): string[] {
    const errors: string[] = [];

    // Check for required ARIA attributes
    const role = element.getAttribute('role');
    if (role) {
      // Check for required attributes based on role
      switch (role) {
        case 'button':
          if (!element.getAttribute('aria-label') && !element.textContent) {
            errors.push('Button elements should have accessible text');
          }
          break;
        case 'link':
          if (!element.getAttribute('aria-label') && !element.textContent) {
            errors.push('Link elements should have accessible text');
          }
          break;
        case 'img':
          if (!element.getAttribute('alt')) {
            errors.push('Image elements should have alt text');
          }
          break;
      }
    }

    return errors;
  }
}

// Export singleton instance
export const accessibilityManager = AccessibilityManager.getInstance();

// Utility functions
export const announceToScreenReader = (message: string): void => {
  if (typeof window !== 'undefined' && (window as any).announceToScreenReader) {
    (window as any).announceToScreenReader(message);
  }
};

export const focusElement = (element: HTMLElement): void => {
  element.focus();
  element.scrollIntoView({ behavior: 'smooth', block: 'center' });
};

export const trapFocus = (container: HTMLElement): (() => void) => {
  const focusableElements = container.querySelectorAll(
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

  container.addEventListener('keydown', handleTabKey);
  firstElement?.focus();

  return () => {
    container.removeEventListener('keydown', handleTabKey);
  };
};
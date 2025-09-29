/**
 * Accessibility Enhancements Utility
 * Provides comprehensive accessibility features and utilities
 */

export interface AccessibilityOptions {
  enableKeyboardNavigation: boolean;
  enableScreenReaderSupport: boolean;
  enableHighContrast: boolean;
  enableReducedMotion: boolean;
  enableFocusIndicators: boolean;
  announceChanges: boolean;
}

export class AccessibilityManager {
  private options: AccessibilityOptions;
  private observer: MutationObserver | null = null;
  private focusTrapStack: HTMLElement[] = [];

  constructor(options: Partial<AccessibilityOptions> = {}) {
    this.options = {
      enableKeyboardNavigation: true,
      enableScreenReaderSupport: true,
      enableHighContrast: false,
      enableReducedMotion: false,
      enableFocusIndicators: true,
      announceChanges: true,
      ...options
    };

    this.initialize();
  }

  private initialize() {
    this.setupKeyboardNavigation();
    this.setupScreenReaderSupport();
    this.setupHighContrastMode();
    this.setupReducedMotion();
    this.setupFocusIndicators();
    this.setupChangeAnnouncements();
  }

  private setupKeyboardNavigation() {
    if (!this.options.enableKeyboardNavigation) return;

    document.addEventListener('keydown', this.handleKeyDown.bind(this));
  }

  private setupScreenReaderSupport() {
    if (!this.options.enableScreenReaderSupport) return;

    // Add ARIA landmarks if missing
    this.addAriaLandmarks();
    
    // Ensure proper heading hierarchy
    this.fixHeadingHierarchy();
    
    // Add skip links
    this.addSkipLinks();
  }

  private setupHighContrastMode() {
    if (!this.options.enableHighContrast) return;

    // Check for system preference
    if (window.matchMedia('(prefers-contrast: high)').matches) {
      document.documentElement.classList.add('high-contrast');
    }

    // Listen for changes
    window.matchMedia('(prefers-contrast: high)').addEventListener('change', (e) => {
      if (e.matches) {
        document.documentElement.classList.add('high-contrast');
      } else {
        document.documentElement.classList.remove('high-contrast');
      }
    });
  }

  private setupReducedMotion() {
    if (!this.options.enableReducedMotion) return;

    // Check for system preference
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      document.documentElement.classList.add('reduce-motion');
    }

    // Listen for changes
    window.matchMedia('(prefers-reduced-motion: reduce)').addEventListener('change', (e) => {
      if (e.matches) {
        document.documentElement.classList.add('reduce-motion');
      } else {
        document.documentElement.classList.remove('reduce-motion');
      }
    });
  }

  private setupFocusIndicators() {
    if (!this.options.enableFocusIndicators) return;

    // Add focus indicators CSS
    const style = document.createElement('style');
    style.textContent = `
      *:focus {
        outline: 2px solid #2563eb !important;
        outline-offset: 2px !important;
      }
      
      *:focus:not(:focus-visible) {
        outline: none !important;
      }
      
      *:focus-visible {
        outline: 2px solid #2563eb !important;
        outline-offset: 2px !important;
      }
    `;
    document.head.appendChild(style);
  }

  private setupChangeAnnouncements() {
    if (!this.options.announceChanges) return;

    // Create live region for announcements
    const liveRegion = document.createElement('div');
    liveRegion.setAttribute('aria-live', 'polite');
    liveRegion.setAttribute('aria-atomic', 'true');
    liveRegion.className = 'sr-only';
    liveRegion.id = 'a11y-announcements';
    document.body.appendChild(liveRegion);

    // Set up mutation observer for dynamic content
    this.observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.type === 'childList' && mutation.addedNodes.length > 0) {
          // Check if new content should be announced
          mutation.addedNodes.forEach((node) => {
            if (node.nodeType === Node.ELEMENT_NODE) {
              const element = node as Element;
              if (element.getAttribute('aria-live') === 'polite' || 
                  element.getAttribute('aria-live') === 'assertive') {
                // Content will be announced by the browser
                return;
              }
              
              // Announce significant content changes
              if (element.tagName === 'H1' || element.tagName === 'H2') {
                this.announce(element.textContent || '');
              }
            }
          });
        }
      });
    });

    this.observer.observe(document.body, {
      childList: true,
      subtree: true
    });
  }

  private handleKeyDown(event: KeyboardEvent) {
    // Skip link functionality
    if (event.key === 'Tab' && !event.shiftKey && document.activeElement === document.body) {
      const skipLink = document.querySelector('[href="#main-content"]') as HTMLElement;
      if (skipLink) {
        skipLink.focus();
        event.preventDefault();
      }
    }

    // Escape key to close modals/dropdowns
    if (event.key === 'Escape') {
      const activeElement = document.activeElement as HTMLElement;
      if (activeElement && activeElement.getAttribute('aria-expanded') === 'true') {
        activeElement.click();
      }
    }

    // Arrow key navigation for menus
    if (event.key === 'ArrowDown' || event.key === 'ArrowUp') {
      const activeElement = document.activeElement as HTMLElement;
      if (activeElement && activeElement.getAttribute('role') === 'menuitem') {
        this.handleMenuNavigation(event);
      }
    }
  }

  private handleMenuNavigation(event: KeyboardEvent) {
    const menuItems = Array.from(document.querySelectorAll('[role="menuitem"]'));
    const currentIndex = menuItems.indexOf(document.activeElement as HTMLElement);
    
    if (currentIndex === -1) return;

    let nextIndex: number;
    if (event.key === 'ArrowDown') {
      nextIndex = (currentIndex + 1) % menuItems.length;
    } else {
      nextIndex = currentIndex === 0 ? menuItems.length - 1 : currentIndex - 1;
    }

    (menuItems[nextIndex] as HTMLElement).focus();
    event.preventDefault();
  }

  private addAriaLandmarks() {
    // Add main landmark if missing
    if (!document.querySelector('main, [role="main"]')) {
      const mainContent = document.querySelector('#main-content, .main-content, main');
      if (mainContent) {
        mainContent.setAttribute('role', 'main');
      }
    }

    // Add navigation landmarks
    const navs = document.querySelectorAll('nav');
    navs.forEach((nav, index) => {
      if (!nav.getAttribute('aria-label') && !nav.getAttribute('aria-labelledby')) {
        nav.setAttribute('aria-label', `Navigation ${index + 1}`);
      }
    });
  }

  private fixHeadingHierarchy() {
    const headings = Array.from(document.querySelectorAll('h1, h2, h3, h4, h5, h6'));
    let lastLevel = 0;

    headings.forEach((heading) => {
      const level = parseInt(heading.tagName.charAt(1));
      
      if (level > lastLevel + 1) {
        console.warn(`Heading hierarchy issue: ${heading.tagName} follows h${lastLevel}`);
      }
      
      lastLevel = level;
    });
  }

  private addSkipLinks() {
    if (document.querySelector('.skip-link')) return;

    const skipLink = document.createElement('a');
    skipLink.href = '#main-content';
    skipLink.className = 'skip-link sr-only focus:not-sr-only focus:absolute focus:top-0 focus:left-0 bg-blue-600 text-white p-2 z-50';
    skipLink.textContent = 'Skip to main content';
    
    document.body.insertBefore(skipLink, document.body.firstChild);
  }

  // Public methods
  public announce(message: string, priority: 'polite' | 'assertive' = 'polite') {
    const liveRegion = document.getElementById('a11y-announcements');
    if (liveRegion) {
      liveRegion.setAttribute('aria-live', priority);
      liveRegion.textContent = message;
      
      // Clear after announcement
      setTimeout(() => {
        liveRegion.textContent = '';
      }, 1000);
    }
  }

  public setFocusTrap(element: HTMLElement) {
    this.focusTrapStack.push(element);
    
    const focusableElements = element.querySelectorAll(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );
    
    if (focusableElements.length === 0) return;

    const firstElement = focusableElements[0] as HTMLElement;
    const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

    const handleTabKey = (e: KeyboardEvent) => {
      if (e.key !== 'Tab') return;

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
    };

    element.addEventListener('keydown', handleTabKey);
    firstElement.focus();

    // Return cleanup function
    return () => {
      element.removeEventListener('keydown', handleTabKey);
      this.focusTrapStack = this.focusTrapStack.filter(el => el !== element);
    };
  }

  public removeFocusTrap(element: HTMLElement) {
    const index = this.focusTrapStack.indexOf(element);
    if (index > -1) {
      this.focusTrapStack.splice(index, 1);
    }
  }

  public updateOptions(newOptions: Partial<AccessibilityOptions>) {
    this.options = { ...this.options, ...newOptions };
    
    // Clean up existing setup
    this.cleanup();
    
    // Reinitialize with new options
    this.initialize();
  }

  public cleanup() {
    if (this.observer) {
      this.observer.disconnect();
      this.observer = null;
    }

    // Remove event listeners
    document.removeEventListener('keydown', this.handleKeyDown.bind(this));
    
    // Remove added elements
    const skipLink = document.querySelector('.skip-link');
    if (skipLink) {
      skipLink.remove();
    }

    const liveRegion = document.getElementById('a11y-announcements');
    if (liveRegion) {
      liveRegion.remove();
    }
  }
}

// Create global instance
export const accessibilityManager = new AccessibilityManager();

// Utility functions
export const announceToScreenReader = (message: string, priority: 'polite' | 'assertive' = 'polite') => {
  accessibilityManager.announce(message, priority);
};

export const setFocusTrap = (element: HTMLElement) => {
  return accessibilityManager.setFocusTrap(element);
};

export const removeFocusTrap = (element: HTMLElement) => {
  accessibilityManager.removeFocusTrap(element);
};

// React hook for accessibility
export const useAccessibility = () => {
  const announce = (message: string, priority: 'polite' | 'assertive' = 'polite') => {
    announceToScreenReader(message, priority);
  };

  const trapFocus = (element: HTMLElement | null) => {
    if (!element) return;
    return setFocusTrap(element);
  };

  return { announce, trapFocus };
};
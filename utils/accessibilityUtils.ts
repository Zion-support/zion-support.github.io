/**
 * Accessibility utilities for enhanced user experience
 */

export interface AccessibilityConfig {
  enableKeyboardNavigation: boolean;
  enableScreenReaderSupport: boolean;
  enableHighContrastMode: boolean;
  enableFocusManagement: boolean;
  enableReducedMotion: boolean;
}

export class AccessibilityManager {
  private config: AccessibilityConfig;

  constructor(config: Partial<AccessibilityConfig> = {}) {
    this.config = {
      enableKeyboardNavigation: true,
      enableScreenReaderSupport: true,
      enableHighContrastMode: true,
      enableFocusManagement: true,
      enableReducedMotion: true,
      ...config,
    };
  }

  init(): void {
    this.setupKeyboardNavigation();
    this.setupScreenReaderSupport();
    this.setupHighContrastMode();
    this.setupFocusManagement();
    this.setupReducedMotion();
  }

  private setupKeyboardNavigation(): void {
    if (!this.config.enableKeyboardNavigation) return;

    document.addEventListener('keydown', (e: Event) => {
      const keyboardEvent = e as KeyboardEvent;
      // Escape key to close modals
      if (keyboardEvent.key === 'Escape') {
        const activeElement = document.activeElement as HTMLElement;
        if (activeElement && activeElement.getAttribute('aria-expanded') === 'true') {
          activeElement.click();
        }
      }

      // Tab navigation for custom elements
      if (keyboardEvent.key === 'Tab') {
        this.handleTabNavigation(keyboardEvent);
      }
    });
  }

  private setupScreenReaderSupport(): void {
    if (!this.config.enableScreenReaderSupport) return;

    // Add ARIA labels to interactive elements
    this.addAriaLabels();
    
    // Announce dynamic content changes
    this.setupLiveRegions();
  }

  private setupHighContrastMode(): void {
    if (!this.config.enableHighContrastMode) return;

    // Check for high contrast mode preference
    if (window.matchMedia('(prefers-contrast: high)').matches) {
      document.body.classList.add('high-contrast');
    }
  }

  private setupFocusManagement(): void {
    if (!this.config.enableFocusManagement) return;

    // Trap focus in modals
    this.setupFocusTrap();
    
    // Manage focus on route changes
    this.setupFocusOnRouteChange();
  }

  private setupReducedMotion(): void {
    if (!this.config.enableReducedMotion) return;

    // Respect user's motion preferences
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      document.body.classList.add('reduced-motion');
    }
  }

  private handleTabNavigation(e: KeyboardEvent): void {
    const focusableElements = this.getFocusableElements();
    const currentIndex = focusableElements.indexOf(document.activeElement as HTMLElement);
    
    if (e.shiftKey) {
      // Shift + Tab (backward)
      if (currentIndex <= 0) {
        e.preventDefault();
        focusableElements[focusableElements.length - 1]?.focus();
      }
    } else {
      // Tab (forward)
      if (currentIndex >= focusableElements.length - 1) {
        e.preventDefault();
        focusableElements[0]?.focus();
      }
    }
  }

  private getFocusableElements(): HTMLElement[] {
    const selector = 'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])';
    return Array.from(document.querySelectorAll(selector)) as HTMLElement[];
  }

  private addAriaLabels(): void {
    // Add ARIA labels to buttons without text
    const iconButtons = document.querySelectorAll('button:not([aria-label]):not([aria-labelledby])');
    iconButtons.forEach((button, index) => {
      if (!button.textContent?.trim()) {
        button.setAttribute('aria-label', `Button ${index + 1}`);
      }
    });
  }

  private setupLiveRegions(): void {
    // Create live region for announcements
    let liveRegion = document.getElementById('live-region');
    if (!liveRegion) {
      liveRegion = document.createElement('div');
      liveRegion.id = 'live-region';
      liveRegion.setAttribute('aria-live', 'polite');
      liveRegion.setAttribute('aria-atomic', 'true');
      liveRegion.style.position = 'absolute';
      liveRegion.style.left = '-10000px';
      liveRegion.style.width = '1px';
      liveRegion.style.height = '1px';
      liveRegion.style.overflow = 'hidden';
      document.body.appendChild(liveRegion);
    }
  }

  private setupFocusTrap(): void {
    // Focus trap implementation for modals
    const modals = document.querySelectorAll('[role="dialog"]');
    modals.forEach(modal => {
      modal.addEventListener('keydown', (e: Event) => {
        const keyboardEvent = e as KeyboardEvent;
        if (keyboardEvent.key === 'Tab') {
          this.trapFocus(keyboardEvent, modal as HTMLElement);
        }
      });
    });
  }

  private trapFocus(e: KeyboardEvent, container: HTMLElement): void {
    const focusableElements = this.getFocusableElements().filter(el => 
      container.contains(el)
    );
    
    if (focusableElements.length === 0) return;

    const firstElement = focusableElements[0];
    const lastElement = focusableElements[focusableElements.length - 1];

    if (e.shiftKey) {
      if (document.activeElement === firstElement) {
        e.preventDefault();
        if (lastElement && typeof lastElement.focus === 'function') {
          lastElement.focus();
        }
      }
    } else {
      if (document.activeElement === lastElement) {
        e.preventDefault();
        if (firstElement && typeof firstElement.focus === 'function') {
          firstElement.focus();
        }
      }
    }
  }

  private setupFocusOnRouteChange(): void {
    // Focus management for SPA route changes
    const mainContent = document.querySelector('main, [role="main"]') as HTMLElement;
    if (mainContent && typeof mainContent.focus === 'function') {
      // Focus the main content area on route changes
      mainContent.setAttribute('tabindex', '-1');
      mainContent.focus();
    }
  }

  // Public methods for external use
  announce(message: string): void {
    const liveRegion = document.getElementById('live-region');
    if (liveRegion) {
      liveRegion.textContent = message;
    }
  }

  setFocus(element: HTMLElement): void {
    if (element && typeof element.focus === 'function') {
      element.focus();
    }
  }

  isHighContrastMode(): boolean {
    return window.matchMedia('(prefers-contrast: high)').matches;
  }

  isReducedMotion(): boolean {
    return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  }
}

// Export a default instance
export const accessibilityManager = new AccessibilityManager();

// Export utility functions
export const announceToScreenReader = (message: string): void => {
  accessibilityManager.announce(message);
};

export const setFocusToElement = (element: HTMLElement): void => {
  accessibilityManager.setFocus(element);
};

export const checkHighContrastMode = (): boolean => {
  return accessibilityManager.isHighContrastMode();
};

export const checkReducedMotion = (): boolean => {
  return accessibilityManager.isReducedMotion();
};
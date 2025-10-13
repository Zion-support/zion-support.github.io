interface AccessibilityUtilsConfig {
  enabled: boolean;
  announcePageChanges?: boolean;
  skipLinks?: boolean;
  focusManagement?: boolean;
  colorContrast?: boolean;
  keyboardNavigation?: boolean;
}

export class AccessibilityUtils {
  private config: AccessibilityUtilsConfig;

  constructor(config: Partial<AccessibilityUtilsConfig> = {}) {
    this.config = {
      enabled: true,
      announcePageChanges: true,
      skipLinks: true,
      focusManagement: true,
      colorContrast: true,
      keyboardNavigation: true,
      ...config
    };
  }

  init(): void {
    if (this.config.enabled) {
      this.setupSkipLinks();
      this.setupFocusManagement();
      this.setupKeyboardNavigation();
      this.setupColorContrast();
      console.log('AccessibilityUtils initialized');
    }
  }

  private setupSkipLinks(): void {
    if (!this.config.skipLinks) return;
    
    const skipLink = document.createElement('a');
    skipLink.href = '#main-content';
    skipLink.textContent = 'Skip to main content';
    skipLink.className = 'sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-blue-600 text-white px-4 py-2 rounded z-50';
    document.body.insertBefore(skipLink, document.body.firstChild);
  }

  private setupFocusManagement(): void {
    if (!this.config.focusManagement) return;
    
    // Focus management for modals and dynamic content
    let previousActiveElement: Element | null = null;
    
    const saveFocus = () => {
      previousActiveElement = document.activeElement;
    };
    
    const restoreFocus = () => {
      if (previousActiveElement && previousActiveElement instanceof HTMLElement) {
        previousActiveElement.focus();
      }
    };
    
    // Store focus management functions globally
    (window as any).accessibilityUtils = {
      saveFocus,
      restoreFocus
    };
  }

  private setupKeyboardNavigation(): void {
    if (!this.config.keyboardNavigation) return;
    
    document.addEventListener('keydown', (e) => {
      // ESC key handling
      if (e.key === 'Escape') {
        const modal = document.querySelector('[role="dialog"]');
        if (modal) {
          (modal as HTMLElement).focus();
        }
      }
      
      // Tab key handling for custom components
      if (e.key === 'Tab') {
        const focusableElements = document.querySelectorAll(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );
        const firstElement = focusableElements[0] as HTMLElement;
        const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;
        
        if (e.shiftKey && document.activeElement === firstElement) {
          e.preventDefault();
          lastElement.focus();
        } else if (!e.shiftKey && document.activeElement === lastElement) {
          e.preventDefault();
          firstElement.focus();
        }
      }
    });
  }

  private setupColorContrast(): void {
    if (!this.config.colorContrast) return;
    
    // Add high contrast mode support
    const mediaQuery = window.matchMedia('(prefers-contrast: high)');
    const handleContrastChange = (e: MediaQueryListEvent | MediaQueryList) => {
      const matches = 'matches' in e ? e.matches : (e as MediaQueryList).matches;
      document.body.classList.toggle('high-contrast', matches);
    };
    
    mediaQuery.addEventListener('change', handleContrastChange);
    handleContrastChange(mediaQuery);
  }

  announcePageChange(message: string): void {
    if (!this.config.announcePageChanges) return;
    
    const announcement = document.createElement('div');
    announcement.setAttribute('aria-live', 'polite');
    announcement.setAttribute('aria-atomic', 'true');
    announcement.className = 'sr-only';
    announcement.textContent = message;
    
    document.body.appendChild(announcement);
    
    setTimeout(() => {
      document.body.removeChild(announcement);
    }, 1000);
  }

  setFocus(element: HTMLElement): void {
    if (element) {
      element.focus();
    }
  }

  trapFocus(container: HTMLElement): void {
    const focusableElements = container.querySelectorAll(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );
    
    const firstElement = focusableElements[0] as HTMLElement;
    const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;
    
    container.addEventListener('keydown', (e) => {
      if (e.key === 'Tab') {
        if (e.shiftKey && document.activeElement === firstElement) {
          e.preventDefault();
          lastElement.focus();
        } else if (!e.shiftKey && document.activeElement === lastElement) {
          e.preventDefault();
          firstElement.focus();
        }
      }
    });
  }
}

export const accessibilityUtils = new AccessibilityUtils();
export default accessibilityUtils;
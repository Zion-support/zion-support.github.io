export interface AccessibilityConfig {
  enableKeyboardNavigation: boolean;
  enableScreenReader: boolean;
  enableHighContrast: boolean;
  enableReducedMotion: boolean;
}

export class AccessibilityUtils {
  private config: AccessibilityConfig = {
    enableKeyboardNavigation: true,
    enableScreenReader: true,
    enableHighContrast: false,
    enableReducedMotion: false
  };

  constructor(config?: Partial<AccessibilityConfig>) {
    if (config) {
      this.config = { ...this.config, ...config };
    }
  }

  setupKeyboardNavigation() {
    if (!this.config.enableKeyboardNavigation) return;
    
    document.addEventListener('keydown', (event) => {
      if (event.key === 'Tab') {
        document.body.classList.add('keyboard-navigation');
      }
    });

    document.addEventListener('mousedown', () => {
      document.body.classList.remove('keyboard-navigation');
    });
  }

  setupScreenReaderSupport() {
    if (!this.config.enableScreenReader) return;
    
    // Add ARIA labels and roles where needed
    const images = document.querySelectorAll('img:not([alt])');
    images.forEach(img => {
      img.setAttribute('alt', '');
    });
  }

  setupHighContrast() {
    if (!this.config.enableHighContrast) return;
    
    const mediaQuery = window.matchMedia('(prefers-contrast: high)');
    if (mediaQuery.matches) {
      document.body.classList.add('high-contrast');
    }
  }

  setupReducedMotion() {
    if (!this.config.enableReducedMotion) return;
    
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (mediaQuery.matches) {
      document.body.classList.add('reduced-motion');
    }
  }

  initialize() {
    this.setupKeyboardNavigation();
    this.setupScreenReaderSupport();
    this.setupHighContrast();
    this.setupReducedMotion();
  }
}
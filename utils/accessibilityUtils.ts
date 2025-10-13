
interface AccessibilityConfig {
  enableKeyboardNavigation?: boolean;
  enableScreenReader?: boolean;
  enableHighContrast?: boolean;
  enableFocusIndicators?: boolean;
}

class AccessibilityUtils {
  private config: AccessibilityConfig;

  constructor(config: Partial<AccessibilityConfig> = {}) {
    this.config = {
      enableKeyboardNavigation: true,
      enableScreenReader: true,
      enableHighContrast: false,
      enableFocusIndicators: true,
      ...config
    };
  }

  enableKeyboardNavigation(): void {
    if (this.config.enableKeyboardNavigation) {
      document.addEventListener('keydown', this.handleKeyboardNavigation);
    }
  }

  private handleKeyboardNavigation = (event: KeyboardEvent): void => {
    // Keyboard navigation logic
    console.log('Keyboard navigation:', event.key);
  };

  enableScreenReader(): void {
    if (this.config.enableScreenReader) {
      // Screen reader enhancements
      console.log('Screen reader support enabled');
    }
  }

  enableHighContrast(): void {
    if (this.config.enableHighContrast) {
      document.body.classList.add('high-contrast');
    }
  }

  enableFocusIndicators(): void {
    if (this.config.enableFocusIndicators) {
      document.body.classList.add('focus-indicators');
    }
  }
}

export default AccessibilityUtils;

interface AccessibilityUtilsConfig {
  enabled: boolean;
  highContrast: boolean;
  fontSize: 'small' | 'medium' | 'large';
  screenReader: boolean;
}

export class AccessibilityUtils {
  private config: AccessibilityUtilsConfig;

  constructor(config: Partial<AccessibilityUtilsConfig> = {}) {
    this.config = {
      enabled: true,
      highContrast: false,
      fontSize: 'medium',
      screenReader: false,
      ...config
    };
  }

  init(): void {
    if (this.config.enabled) {
      console.log('Accessibility utils initialized');
      this.applyAccessibilitySettings();
    }
  }

  private applyAccessibilitySettings(): void {
    if (this.config.highContrast) {
      document.body.classList.add('high-contrast');
    }
    
    if (this.config.fontSize !== 'medium') {
      document.body.classList.add(`font-size-${this.config.fontSize}`);
    }
  }

  updateConfig(newConfig: Partial<AccessibilityUtilsConfig>): void {
    this.config = { ...this.config, ...newConfig };
    this.applyAccessibilitySettings();
  }

  getConfig(): AccessibilityUtilsConfig {
    return { ...this.config };
  }
}

export const accessibilityUtils = new AccessibilityUtils();
export default accessibilityUtils;
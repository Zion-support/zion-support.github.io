interface AccessibilityUtilsConfig {
  enabled: boolean;
  highContrast: boolean;
  fontSize: number;
  screenReader: boolean;
}

export class AccessibilityUtils {
  private config: AccessibilityUtilsConfig;

  constructor(config: Partial<AccessibilityUtilsConfig> = {}) {
    this.config = {
      enabled: true,
      highContrast: false,
      fontSize: 16,
      screenReader: false,
      ...config
    };
  }

  init(): void {
    if (this.config.enabled) {
      console.log('Accessibility utils initialized');
    }
  }

  setHighContrast(enabled: boolean): void {
    this.config.highContrast = enabled;
  }

  setFontSize(size: number): void {
    this.config.fontSize = size;
  }

  setScreenReader(enabled: boolean): void {
    this.config.screenReader = enabled;
  }
}

export const accessibilityUtils = new AccessibilityUtils();
export default accessibilityUtils;
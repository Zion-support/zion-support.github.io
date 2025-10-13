interface AccessibilityUtilsConfig {
  enabled: boolean;
<<<<<<< HEAD
=======
  highContrast: boolean;
  fontSize: number;
  screenReader: boolean;
>>>>>>> cursor/fix-errors-and-merge-to-main-e61d
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
<<<<<<< HEAD
      console.log('AccessibilityUtils initialized');
=======
      console.log('Accessibility utils initialized');
>>>>>>> cursor/fix-errors-and-merge-to-main-e61d
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
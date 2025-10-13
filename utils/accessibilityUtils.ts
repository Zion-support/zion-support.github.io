export interface AccessibilityConfig {
  enabled: boolean;
  announceChanges: boolean;
  highContrast: boolean;
  reducedMotion: boolean;
}

export class AccessibilityUtils {
  private config: AccessibilityConfig;

  constructor(config: Partial<AccessibilityConfig> = {}) {
    this.config = {
      enabled: true,
      announceChanges: true,
      highContrast: false,
      reducedMotion: false,      ...config
    };
  }

  announceToScreenReader(message: string) {
    if (this.config.enabled && this.config.announceChanges) {
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
  }

  setHighContrast(enabled: boolean) {
    this.config.highContrast = enabled;
    if (enabled) {
      document.documentElement.classList.add('high-contrast');
    } else {
      document.documentElement.classList.remove('high-contrast');
    }
  }

  setReducedMotion(enabled: boolean) {
    this.config.reducedMotion = enabled;
    if (enabled) {
      document.documentElement.classList.add('reduced-motion');
    } else {
      document.documentElement.classList.remove('reduced-motion');    }
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

export default AccessibilityUtils;
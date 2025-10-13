export interface AccessibilityConfig {
  enabled: boolean;
announceChanges: boolean;
  highContrast: boolean;
  reducedMotion: boolean;
  fontSize: number;
  screenReader: boolean;
}

export class AccessibilityUtils {
  private config: AccessibilityConfig;

  constructor(config: Partial<AccessibilityConfig> = {}) {
    this.config = {
      enabled: true,
      announceChanges: true,
      highContrast: false,
      reducedMotion: false,
      fontSize: 16,
      screenReader: false,
      ...config
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

  init(): void {
    if (this.config.enabled) {
      console.log('Accessibility utils initialized');
    }
  }

  setHighContrast(enabled: boolean): void {
    this.config.highContrast = enabled;
    if (enabled) {
      document.body.classList.add('high-contrast');
    } else {
      document.body.classList.remove('high-contrast');
    }
  }

  setReducedMotion(enabled: boolean): void {
    this.config.reducedMotion = enabled;
    if (enabled) {
      document.body.classList.add('reduced-motion');
    } else {
      document.body.classList.remove('reduced-motion');
    }
  }

  setFontSize(size: number): void {
    this.config.fontSize = size;
    document.documentElement.style.fontSize = `${size}px`;
  }

  enableScreenReader(): void {
    this.config.screenReader = true;
    document.body.classList.add('screen-reader-optimized');
  }

  disableScreenReader(): void {
    this.config.screenReader = false;
    document.body.classList.remove('screen-reader-optimized');
  }

  getConfig(): AccessibilityConfig {
    return { ...this.config };
  }
}
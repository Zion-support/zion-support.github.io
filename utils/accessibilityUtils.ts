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
reducedMotion: false,
...config;
};
}

announceToScreenReader(message: string) {
if (this.config.enabled && this.config.announceChanges) {
const announcement = document.createElement('div'';
announcement.setAttribute('aria-live', 'polite'';
announcement.setAttribute('aria-atomic', 'true'';
announcement.className = 'sr-only'';
document.documentElement.classList.add('high-contrast'';
document.documentElement.classList.remove('high-contrast'';
document.documentElement.classList.add('reduced-motion'';
document.documentElement.classList.remove('reduced-motion'';
}}}
)))))))
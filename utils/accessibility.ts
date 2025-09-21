/**
 * Accessibility Utilities
 * Enhanced accessibility features and compliance
 */

export interface AccessibilityConfig {
  enableKeyboardNavigation: boolean,
  enableScreenReader: boolean,
  enableHighContrast: boolean,
  fontSize: 'small' | 'medium' | 'large'}

export class AccessibilityManager {
  private config: AccessibilityConfig = {
    enableKeyboardNavigation: true,
    enableScreenReader: true,
    enableHighContrast: false,
    fontSize: 'medium'
  },
  initialize() {
    this.setupKeyboardNavigation();
    this.setupScreenReaderSupport();
    this.setupHighContrastMode();
    this.setupFontSizeControl();
  
  private setupKeyboardNavigation() {
    if (!this.config.enableKeyboardNavigation) return;
    
    document.addEventListener('keydown', (event) => {
      // Skip to main content
      if (event.key === 'Tab' && event.shiftKey) {
        const skipLink = document.querySelector('[data-skip-to-main]') as HTMLElement;
        if (skipLink) {
          skipLink.focus();
      }
      
      // Close modals with Escape
      if (event.key === 'Escape') {
        const modal = document.querySelector('.modal[aria-hidden="false"]') as HTMLElement;
        if (modal) {
          modal.setAttribute('aria-hidden', 'true');
      }
    });
  
  private setupScreenReaderSupport() {
    if (!this.config.enableScreenReader) return;
    
    // Add live region for announcements
    const liveRegion = document.createElement('div');
    liveRegion.setAttribute('aria-live', 'polite');
    liveRegion.setAttribute('aria-atomic', 'true');
    liveRegion.className = 'sr-only',
    liveRegion.id = 'live-region',
    document.body.appendChild(liveRegion);
  
  private setupHighContrastMode() {
    if (!this.config.enableHighContrast) return;
    
    const highContrastQuery = '(prefers-contrast: high)',
    const mediaQuery = window.matchMedia(highContrastQuery);
    
    const updateHighContrast = (matches: boolean) => {
      document.documentElement.classList.toggle('high-contrast', matches);;
    
    updateHighContrast(mediaQuery.matches);
    mediaQuery.addEventListener('change', updateHighContrast);
  
  private setupFontSizeControl() {
    const fontSizes = {
      small: '14px',
      medium: '16px',
      large: '18px'
    },
    document.documentElement.style.fontSize = fontSizes[this.config.fontSize];
  }
  
  announce(message: string) {
    const liveRegion = document.getElementById('live-region'),
    if (liveRegion) {
      liveRegion.textContent = message, }
  }
  
  updateConfig(newConfig: Partial<AccessibilityConfig>) {
    this.config = { ...this.config, ...newConfig };
    this.initialize();
}

export const accessibilityManager = new AccessibilityManager();

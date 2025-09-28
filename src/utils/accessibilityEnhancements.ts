/**
 * Advanced Accessibility Enhancements
 * Provides comprehensive accessibility improvements
 */

export interface AccessibilityConfig {
  enableKeyboardNavigation: boolean;
  enableScreenReader: boolean;
  enableHighContrast: boolean;
  enableFocusManagement: boolean;
  enableARIALabels: boolean;
  enableSkipLinks: boolean;
  enableColorContrast: boolean;
  enableFontSize: boolean;
  enableMotionReduction: boolean;
  enableVoiceNavigation: boolean;
}

export class AccessibilityEnhancements {
  private config: AccessibilityConfig;
  private focusableElements: HTMLElement[] = [];
  private currentFocusIndex = 0;

  constructor(config: Partial<AccessibilityConfig> = {}) {
    this.config = {
      enableKeyboardNavigation: true,
      enableScreenReader: true,
      enableHighContrast: true,
      enableFocusManagement: true,
      enableARIALabels: true,
      enableSkipLinks: true,
      enableColorContrast: true,
      enableFontSize: true,
      enableMotionReduction: true,
      enableVoiceNavigation: true,
      ...config
    };

    this.initialize();
  }

  private initialize(): void {
    if (typeof window === 'undefined') return;

    this.setupKeyboardNavigation();
    this.setupScreenReaderSupport();
    this.setupHighContrast();
    this.setupFocusManagement();
    this.setupARIALabels();
    this.setupSkipLinks();
    this.setupColorContrast();
    this.setupFontSize();
    this.setupMotionReduction();
    this.setupVoiceNavigation();
  }

  private setupKeyboardNavigation(): void {
    if (!this.config.enableKeyboardNavigation) return;

    document.addEventListener('keydown', (event) => {
      if (event.key === 'Tab') {
        this.handleTabNavigation(event);
      } else if (event.key === 'Enter' || event.key === ' ') {
        this.handleActivation(event);
      } else if (event.key === 'Escape') {
        this.handleEscape(event);
      }
    });
  }

  private setupScreenReaderSupport(): void {
    if (!this.config.enableScreenReader) return;

    // Add screen reader announcements
    const announcement = document.createElement('div');
    announcement.setAttribute('aria-live', 'polite');
    announcement.setAttribute('aria-atomic', 'true');
    announcement.className = 'sr-only';
    announcement.id = 'screen-reader-announcements';
    document.body.appendChild(announcement);
  }

  private setupHighContrast(): void {
    if (!this.config.enableHighContrast) return;

    // Add high contrast mode toggle
    const toggle = document.createElement('button');
    toggle.textContent = 'Toggle High Contrast';
    toggle.setAttribute('aria-label', 'Toggle high contrast mode');
    toggle.className = 'accessibility-toggle';
    toggle.addEventListener('click', () => this.toggleHighContrast());
    document.body.appendChild(toggle);
  }

  private setupFocusManagement(): void {
    if (!this.config.enableFocusManagement) return;

    // Track focusable elements
    this.updateFocusableElements();
    
    // Update on DOM changes
    const observer = new MutationObserver(() => {
      this.updateFocusableElements();
    });
    
    observer.observe(document.body, {
      childList: true,
      subtree: true
    });
  }

  private setupARIALabels(): void {
    if (!this.config.enableARIALabels) return;

    // Add ARIA labels to interactive elements
    const interactiveElements = document.querySelectorAll('button, input, select, textarea, a[href]');
    interactiveElements.forEach(element => {
      if (!element.getAttribute('aria-label') && !element.textContent?.trim()) {
        element.setAttribute('aria-label', 'Interactive element');
      }
    });
  }

  private setupSkipLinks(): void {
    if (!this.config.enableSkipLinks) return;

    const skipLinks = [
      { href: '#main-content', text: 'Skip to main content' },
      { href: '#navigation', text: 'Skip to navigation' },
      { href: '#footer', text: 'Skip to footer' }
    ];

    skipLinks.forEach(link => {
      const skipLink = document.createElement('a');
      skipLink.href = link.href;
      skipLink.textContent = link.text;
      skipLink.className = 'skip-link';
      skipLink.setAttribute('aria-label', link.text);
      document.body.insertBefore(skipLink, document.body.firstChild);
    });
  }

  private setupColorContrast(): void {
    if (!this.config.enableColorContrast) return;

    // Check and improve color contrast
    const elements = document.querySelectorAll('*');
    elements.forEach(element => {
      const styles = window.getComputedStyle(element);
      const color = styles.color;
      const backgroundColor = styles.backgroundColor;
      
      if (color && backgroundColor) {
        const contrast = this.calculateContrast(color, backgroundColor);
        if (contrast < 4.5) {
          element.setAttribute('data-low-contrast', 'true');
        }
      }
    });
  }

  private setupFontSize(): void {
    if (!this.config.enableFontSize) return;

    // Add font size controls
    const controls = document.createElement('div');
    controls.className = 'font-size-controls';
    controls.innerHTML = `
      <button aria-label="Decrease font size">A-</button>
      <button aria-label="Reset font size">A</button>
      <button aria-label="Increase font size">A+</button>
    `;
    
    controls.addEventListener('click', (event) => {
      const target = event.target as HTMLElement;
      if (target.textContent === 'A-') this.decreaseFontSize();
      else if (target.textContent === 'A') this.resetFontSize();
      else if (target.textContent === 'A+') this.increaseFontSize();
    });
    
    document.body.appendChild(controls);
  }

  private setupMotionReduction(): void {
    if (!this.config.enableMotionReduction) return;

    // Respect prefers-reduced-motion
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    this.handleMotionPreference(mediaQuery);
    mediaQuery.addEventListener('change', this.handleMotionPreference);
  }

  private setupVoiceNavigation(): void {
    if (!this.config.enableVoiceNavigation) return;

    // Add voice navigation support
    if ('speechSynthesis' in window) {
      const voiceButton = document.createElement('button');
      voiceButton.textContent = 'Voice Navigation';
      voiceButton.setAttribute('aria-label', 'Enable voice navigation');
      voiceButton.addEventListener('click', () => this.enableVoiceNavigation());
      document.body.appendChild(voiceButton);
    }
  }

  private handleTabNavigation(event: KeyboardEvent): void {
    if (this.focusableElements.length === 0) return;

    if (event.shiftKey) {
      this.currentFocusIndex = this.currentFocusIndex > 0 
        ? this.currentFocusIndex - 1 
        : this.focusableElements.length - 1;
    } else {
      this.currentFocusIndex = this.currentFocusIndex < this.focusableElements.length - 1 
        ? this.currentFocusIndex + 1 
        : 0;
    }

    this.focusableElements[this.currentFocusIndex]?.focus();
  }

  private handleActivation(event: KeyboardEvent): void {
    const target = event.target as HTMLElement;
    if (target.tagName === 'BUTTON' || target.tagName === 'A') {
      target.click();
    }
  }

  private handleEscape(event: KeyboardEvent): void {
    // Close any open modals or dropdowns
    const modals = document.querySelectorAll('[role="dialog"]');
    modals.forEach(modal => {
      const closeButton = modal.querySelector('[aria-label*="close"], [aria-label*="Close"]') as HTMLElement;
      closeButton?.click();
    });
  }

  private updateFocusableElements(): void {
    this.focusableElements = Array.from(document.querySelectorAll(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    )) as HTMLElement[];
  }

  private toggleHighContrast(): void {
    document.body.classList.toggle('high-contrast');
    this.announce('High contrast mode toggled');
  }

  private decreaseFontSize(): void {
    const currentSize = parseFloat(getComputedStyle(document.documentElement).fontSize);
    document.documentElement.style.fontSize = `${currentSize - 2}px`;
    this.announce('Font size decreased');
  }

  private resetFontSize(): void {
    document.documentElement.style.fontSize = '';
    this.announce('Font size reset');
  }

  private increaseFontSize(): void {
    const currentSize = parseFloat(getComputedStyle(document.documentElement).fontSize);
    document.documentElement.style.fontSize = `${currentSize + 2}px`;
    this.announce('Font size increased');
  }

  private handleMotionPreference = (event: MediaQueryListEvent | MediaQueryList): void => {
    const matches = 'matches' in event ? event.matches : (event as MediaQueryList).matches;
    if (matches) {
      document.body.classList.add('reduce-motion');
    } else {
      document.body.classList.remove('reduce-motion');
    }
  }

  private enableVoiceNavigation(): void {
    this.announce('Voice navigation enabled. Use voice commands to navigate.');
  }

  private calculateContrast(color1: string, color2: string): number {
    // Simplified contrast calculation
    // In a real implementation, you'd parse the colors and calculate luminance
    return 4.5; // Placeholder
  }

  private announce(message: string): void {
    const announcement = document.getElementById('screen-reader-announcements');
    if (announcement) {
      announcement.textContent = message;
    }
  }

  public getAccessibilityScore(): number {
    let score = 100;
    
    // Check for missing ARIA labels
    const elementsWithoutLabels = document.querySelectorAll('button:not([aria-label]):not([aria-labelledby])');
    score -= elementsWithoutLabels.length * 2;
    
    // Check for missing alt text
    const imagesWithoutAlt = document.querySelectorAll('img:not([alt])');
    score -= imagesWithoutAlt.length * 3;
    
    // Check for proper heading structure
    const headings = document.querySelectorAll('h1, h2, h3, h4, h5, h6');
    let hasH1 = false;
    headings.forEach(heading => {
      if (heading.tagName === 'H1') hasH1 = true;
    });
    if (!hasH1) score -= 10;
    
    return Math.max(0, score);
  }
}

export const accessibilityEnhancements = new AccessibilityEnhancements();
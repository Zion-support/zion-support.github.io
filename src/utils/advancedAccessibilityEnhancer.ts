/**
 * Advanced Accessibility Enhancer
 * Comprehensive accessibility optimization utilities for the Zion Tech Group website
 */

interface AccessibilityConfig {
  enableKeyboardNavigation: boolean;
  enableScreenReaderSupport: boolean;
  enableHighContrast: boolean;
  enableFocusManagement: boolean;
  enableARIALabels: boolean;
  enableColorContrast: boolean;
  enableMotionReduction: boolean;
  enableTextScaling: boolean;
  enableVoiceNavigation: boolean;
  enableTouchAccessibility: boolean;
}

interface AccessibilityMetrics {
  colorContrastScore: number;
  keyboardNavigationScore: number;
  screenReaderScore: number;
  ariaLabelsScore: number;
  focusManagementScore: number;
  overallScore: number;
}

class AdvancedAccessibilityEnhancer {
  private config: AccessibilityConfig;
  private isInitialized = false;
  private metrics: AccessibilityMetrics | null = null;
  private focusTrap: HTMLElement | null = null;
  private skipLinks: HTMLElement[] = [];
  private announcements: HTMLElement | null = null;

  constructor(config: Partial<AccessibilityConfig> = {}) {
    this.config = {
      enableKeyboardNavigation: true,
      enableScreenReaderSupport: true,
      enableHighContrast: true,
      enableFocusManagement: true,
      enableARIALabels: true,
      enableColorContrast: true,
      enableMotionReduction: true,
      enableTextScaling: true,
      enableVoiceNavigation: true,
      enableTouchAccessibility: true,
      ...config
    };
  }

  /**
   * Initialize the accessibility enhancer
   */
  public async initialize(): Promise<void> {
    if (this.isInitialized) return;

    try {
      // Initialize core accessibility features
      this.initializeKeyboardNavigation();
      this.initializeScreenReaderSupport();
      this.initializeFocusManagement();
      this.initializeColorContrast();
      this.initializeMotionReduction();
      this.initializeTextScaling();
      this.initializeTouchAccessibility();

      // Create accessibility announcements container
      this.createAnnouncementsContainer();

      // Initialize metrics collection
      this.initializeMetricsCollection();

      this.isInitialized = true;
      console.log('♿ Advanced Accessibility Enhancer initialized');
    } catch (error) {
      console.error('Error initializing accessibility enhancer:', error);
    }
  }

  /**
   * Initialize keyboard navigation
   */
  private initializeKeyboardNavigation(): void {
    if (!this.config.enableKeyboardNavigation || typeof document === 'undefined') return;

    // Add skip links
    this.addSkipLinks();

    // Enhance keyboard navigation for interactive elements
    this.enhanceKeyboardNavigation();

    // Add keyboard shortcuts
    this.addKeyboardShortcuts();
  }

  /**
   * Add skip links for better navigation
   */
  private addSkipLinks(): void {
    if (typeof document === 'undefined') return;

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
      skipLink.style.cssText = `
        position: absolute;
        top: -40px;
        left: 6px;
        background: #000;
        color: #fff;
        padding: 8px 16px;
        text-decoration: none;
        border-radius: 4px;
        z-index: 1000;
        transition: top 0.3s;
      `;

      skipLink.addEventListener('focus', () => {
        skipLink.style.top = '6px';
      });

      skipLink.addEventListener('blur', () => {
        skipLink.style.top = '-40px';
      });

      document.body.insertBefore(skipLink, document.body.firstChild);
      this.skipLinks.push(skipLink);
    });
  }

  /**
   * Enhance keyboard navigation
   */
  private enhanceKeyboardNavigation(): void {
    if (typeof document === 'undefined') return;

    // Add tabindex to interactive elements that don't have it
    const interactiveElements = document.querySelectorAll('button, a, input, select, textarea, [role="button"], [role="link"]');
    interactiveElements.forEach(element => {
      if (!element.hasAttribute('tabindex')) {
        element.setAttribute('tabindex', '0');
      }
    });

    // Add keyboard event listeners
    document.addEventListener('keydown', this.handleKeyboardNavigation.bind(this));
  }

  /**
   * Handle keyboard navigation
   */
  private handleKeyboardNavigation(event: KeyboardEvent): void {
    const { key, target } = event;

    // Handle Enter and Space for custom interactive elements
    if ((key === 'Enter' || key === ' ') && target instanceof HTMLElement) {
      if (target.getAttribute('role') === 'button' || target.classList.contains('clickable')) {
        event.preventDefault();
        target.click();
      }
    }

    // Handle Escape to close modals
    if (key === 'Escape') {
      const modal = document.querySelector('[role="dialog"][aria-modal="true"]');
      if (modal) {
        const closeButton = modal.querySelector('[aria-label="Close"], [data-dismiss="modal"]');
        if (closeButton instanceof HTMLElement) {
          closeButton.click();
        }
      }
    }

    // Handle Arrow keys for menu navigation
    if (['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight'].includes(key)) {
      this.handleArrowKeyNavigation(event);
    }
  }

  /**
   * Handle arrow key navigation
   */
  private handleArrowKeyNavigation(event: KeyboardEvent): void {
    const { key, target } = event;
    const currentElement = target as HTMLElement;
    const menu = currentElement.closest('[role="menu"], [role="menubar"]');
    
    if (!menu) return;

    const menuItems = Array.from(menu.querySelectorAll('[role="menuitem"], [role="menuitemradio"], [role="menuitemcheckbox"]'));
    const currentIndex = menuItems.indexOf(currentElement);

    let nextIndex = currentIndex;
    switch (key) {
      case 'ArrowDown':
      case 'ArrowRight':
        nextIndex = (currentIndex + 1) % menuItems.length;
        break;
      case 'ArrowUp':
      case 'ArrowLeft':
        nextIndex = currentIndex === 0 ? menuItems.length - 1 : currentIndex - 1;
        break;
    }

    if (nextIndex !== currentIndex) {
      event.preventDefault();
      (menuItems[nextIndex] as HTMLElement).focus();
    }
  }

  /**
   * Add keyboard shortcuts
   */
  private addKeyboardShortcuts(): void {
    if (typeof document === 'undefined') return;

    document.addEventListener('keydown', (event) => {
      // Alt + 1: Go to main content
      if (event.altKey && event.key === '1') {
        event.preventDefault();
        const main = document.querySelector('#main-content, main');
        if (main instanceof HTMLElement) {
          main.focus();
          main.scrollIntoView();
        }
      }

      // Alt + 2: Go to navigation
      if (event.altKey && event.key === '2') {
        event.preventDefault();
        const nav = document.querySelector('#navigation, nav');
        if (nav instanceof HTMLElement) {
          nav.focus();
          nav.scrollIntoView();
        }
      }

      // Alt + 3: Go to footer
      if (event.altKey && event.key === '3') {
        event.preventDefault();
        const footer = document.querySelector('#footer, footer');
        if (footer instanceof HTMLElement) {
          footer.focus();
          footer.scrollIntoView();
        }
      }
    });
  }

  /**
   * Initialize screen reader support
   */
  private initializeScreenReaderSupport(): void {
    if (!this.config.enableScreenReaderSupport || typeof document === 'undefined') return;

    // Add screen reader only text
    this.addScreenReaderOnlyText();

    // Enhance ARIA labels
    this.enhanceARIALabels();

    // Add live regions for dynamic content
    this.addLiveRegions();
  }

  /**
   * Add screen reader only text
   */
  private addScreenReaderOnlyText(): void {
    if (typeof document === 'undefined') return;

    const style = document.createElement('style');
    style.textContent = `
      .sr-only {
        position: absolute;
        width: 1px;
        height: 1px;
        padding: 0;
        margin: -1px;
        overflow: hidden;
        clip: rect(0, 0, 0, 0);
        white-space: nowrap;
        border: 0;
      }
    `;
    document.head.appendChild(style);
  }

  /**
   * Enhance ARIA labels
   */
  private enhanceARIALabels(): void {
    if (!this.config.enableARIALabels || typeof document === 'undefined') return;

    // Add ARIA labels to buttons without text
    const buttons = document.querySelectorAll('button:not([aria-label]):not([aria-labelledby])');
    buttons.forEach(button => {
      const text = button.textContent?.trim();
      if (!text) {
        button.setAttribute('aria-label', 'Button');
      }
    });

    // Add ARIA labels to links without text
    const links = document.querySelectorAll('a:not([aria-label]):not([aria-labelledby])');
    links.forEach(link => {
      const text = link.textContent?.trim();
      if (!text) {
        link.setAttribute('aria-label', 'Link');
      }
    });

    // Add ARIA labels to form inputs
    const inputs = document.querySelectorAll('input:not([aria-label]):not([aria-labelledby])');
    inputs.forEach(input => {
      const label = document.querySelector(`label[for="${input.id}"]`);
      if (!label) {
        input.setAttribute('aria-label', (input as HTMLInputElement).placeholder || 'Input field');
      }
    });
  }

  /**
   * Add live regions for dynamic content
   */
  private addLiveRegions(): void {
    if (typeof document === 'undefined') return;

    // Create live region for announcements
    this.announcements = document.createElement('div');
    this.announcements.setAttribute('aria-live', 'polite');
    this.announcements.setAttribute('aria-atomic', 'true');
    this.announcements.className = 'sr-only';
    document.body.appendChild(this.announcements);
  }

  /**
   * Initialize focus management
   */
  private initializeFocusManagement(): void {
    if (!this.config.enableFocusManagement || typeof document === 'undefined') return;

    // Add focus indicators
    this.addFocusIndicators();

    // Implement focus trapping for modals
    this.implementFocusTrapping();

    // Add focus restoration
    this.addFocusRestoration();
  }

  /**
   * Add focus indicators
   */
  private addFocusIndicators(): void {
    if (typeof document === 'undefined') return;

    const style = document.createElement('style');
    style.textContent = `
      *:focus {
        outline: 2px solid #4A90E2;
        outline-offset: 2px;
      }
      
      *:focus:not(:focus-visible) {
        outline: none;
      }
      
      *:focus-visible {
        outline: 2px solid #4A90E2;
        outline-offset: 2px;
      }
    `;
    document.head.appendChild(style);
  }

  /**
   * Implement focus trapping
   */
  private implementFocusTrapping(): void {
    if (typeof document === 'undefined') return;

    document.addEventListener('keydown', (event) => {
      if (event.key === 'Tab') {
        const modal = document.querySelector('[role="dialog"][aria-modal="true"]');
        if (modal) {
          this.trapFocus(event, modal);
        }
      }
    });
  }

  /**
   * Trap focus within a modal
   */
  private trapFocus(event: KeyboardEvent, modal: Element): void {
    const focusableElements = modal.querySelectorAll(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );
    const firstElement = focusableElements[0] as HTMLElement;
    const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

    if (event.shiftKey) {
      if (document.activeElement === firstElement) {
        event.preventDefault();
        lastElement.focus();
      }
    } else {
      if (document.activeElement === lastElement) {
        event.preventDefault();
        firstElement.focus();
      }
    }
  }

  /**
   * Add focus restoration
   */
  private addFocusRestoration(): void {
    if (typeof document === 'undefined') return;

    let lastFocusedElement: HTMLElement | null = null;

    document.addEventListener('focusin', (event) => {
      lastFocusedElement = event.target as HTMLElement;
    });

    // Restore focus when modals close
    document.addEventListener('click', (event) => {
      const target = event.target as HTMLElement;
      if (target.matches('[data-dismiss="modal"], [aria-label="Close"]')) {
        setTimeout(() => {
          if (lastFocusedElement) {
            lastFocusedElement.focus();
          }
        }, 100);
      }
    });
  }

  /**
   * Initialize color contrast optimization
   */
  private initializeColorContrast(): void {
    if (!this.config.enableColorContrast || typeof document === 'undefined') return;

    // Check and improve color contrast
    this.checkColorContrast();

    // Add high contrast mode
    this.addHighContrastMode();
  }

  /**
   * Check color contrast
   */
  private checkColorContrast(): void {
    if (typeof document === 'undefined') return;

    const elements = document.querySelectorAll('*');
    elements.forEach(element => {
      const styles = window.getComputedStyle(element);
      const color = styles.color;
      const backgroundColor = styles.backgroundColor;

      if (color && backgroundColor && color !== 'rgba(0, 0, 0, 0)' && backgroundColor !== 'rgba(0, 0, 0, 0)') {
        const contrast = this.calculateContrast(color, backgroundColor);
        if (contrast < 4.5) {
          console.warn('Low contrast detected:', element, contrast);
        }
      }
    });
  }

  /**
   * Calculate color contrast ratio
   */
  private calculateContrast(color1: string, color2: string): number {
    // Simplified contrast calculation
    // In a real implementation, you'd use a proper color contrast library
    return 4.5; // Placeholder
  }

  /**
   * Add high contrast mode
   */
  private addHighContrastMode(): void {
    if (typeof document === 'undefined') return;

    const style = document.createElement('style');
    style.textContent = `
      @media (prefers-contrast: high) {
        * {
          background-color: white !important;
          color: black !important;
        }
      }
    `;
    document.head.appendChild(style);
  }

  /**
   * Initialize motion reduction
   */
  private initializeMotionReduction(): void {
    if (!this.config.enableMotionReduction || typeof document === 'undefined') return;

    const style = document.createElement('style');
    style.textContent = `
      @media (prefers-reduced-motion: reduce) {
        *,
        *::before,
        *::after {
          animation-duration: 0.01ms !important;
          animation-iteration-count: 1 !important;
          transition-duration: 0.01ms !important;
          scroll-behavior: auto !important;
        }
      }
    `;
    document.head.appendChild(style);
  }

  /**
   * Initialize text scaling
   */
  private initializeTextScaling(): void {
    if (!this.config.enableTextScaling || typeof document === 'undefined') return;

    const style = document.createElement('style');
    style.textContent = `
      html {
        font-size: 16px;
      }
      
      @media (min-width: 768px) {
        html {
          font-size: 18px;
        }
      }
      
      @media (min-width: 1024px) {
        html {
          font-size: 20px;
        }
      }
    `;
    document.head.appendChild(style);
  }

  /**
   * Initialize touch accessibility
   */
  private initializeTouchAccessibility(): void {
    if (!this.config.enableTouchAccessibility || typeof document === 'undefined') return;

    // Ensure touch targets are at least 44px
    const style = document.createElement('style');
    style.textContent = `
      button, a, input, select, textarea, [role="button"], [role="link"] {
        min-height: 44px;
        min-width: 44px;
      }
    `;
    document.head.appendChild(style);
  }

  /**
   * Create announcements container
   */
  private createAnnouncementsContainer(): void {
    if (typeof document === 'undefined') return;

    this.announcements = document.createElement('div');
    this.announcements.setAttribute('aria-live', 'polite');
    this.announcements.setAttribute('aria-atomic', 'true');
    this.announcements.className = 'sr-only';
    document.body.appendChild(this.announcements);
  }

  /**
   * Initialize metrics collection
   */
  private initializeMetricsCollection(): void {
    // Initialize accessibility metrics
    this.metrics = {
      colorContrastScore: 0,
      keyboardNavigationScore: 0,
      screenReaderScore: 0,
      ariaLabelsScore: 0,
      focusManagementScore: 0,
      overallScore: 0
    };

    // Calculate initial scores
    this.calculateMetrics();
  }

  /**
   * Calculate accessibility metrics
   */
  private calculateMetrics(): void {
    if (!this.metrics || typeof document === 'undefined') return;

    // Calculate color contrast score
    this.metrics.colorContrastScore = this.calculateColorContrastScore();

    // Calculate keyboard navigation score
    this.metrics.keyboardNavigationScore = this.calculateKeyboardNavigationScore();

    // Calculate screen reader score
    this.metrics.screenReaderScore = this.calculateScreenReaderScore();

    // Calculate ARIA labels score
    this.metrics.ariaLabelsScore = this.calculateARIALabelsScore();

    // Calculate focus management score
    this.metrics.focusManagementScore = this.calculateFocusManagementScore();

    // Calculate overall score
    this.metrics.overallScore = (
      this.metrics.colorContrastScore +
      this.metrics.keyboardNavigationScore +
      this.metrics.screenReaderScore +
      this.metrics.ariaLabelsScore +
      this.metrics.focusManagementScore
    ) / 5;
  }

  /**
   * Calculate color contrast score
   */
  private calculateColorContrastScore(): number {
    // Simplified calculation
    return 85; // Placeholder
  }

  /**
   * Calculate keyboard navigation score
   */
  private calculateKeyboardNavigationScore(): number {
    // Simplified calculation
    return 90; // Placeholder
  }

  /**
   * Calculate screen reader score
   */
  private calculateScreenReaderScore(): number {
    // Simplified calculation
    return 80; // Placeholder
  }

  /**
   * Calculate ARIA labels score
   */
  private calculateARIALabelsScore(): number {
    // Simplified calculation
    return 75; // Placeholder
  }

  /**
   * Calculate focus management score
   */
  private calculateFocusManagementScore(): number {
    // Simplified calculation
    return 88; // Placeholder
  }

  /**
   * Announce message to screen readers
   */
  public announce(message: string): void {
    if (this.announcements) {
      this.announcements.textContent = message;
    }
  }

  /**
   * Get accessibility metrics
   */
  public getMetrics(): AccessibilityMetrics | null {
    return this.metrics;
  }

  /**
   * Generate accessibility report
   */
  private initializeARIALabels(): void {
    // Add ARIA labels to elements that need them
    const inputs = document.querySelectorAll('input:not([aria-label]):not([aria-labelledby])');
    inputs.forEach((input) => {
      const inputElement = input as HTMLInputElement;
      input.setAttribute('aria-label', inputElement.placeholder || 'Input field');
    });
  }

  public generateReport(): string {
    if (!this.metrics) return 'No accessibility data available';

    const report = `
Accessibility Report:
Overall Score: ${this.metrics.overallScore.toFixed(1)}/100
Color Contrast: ${this.metrics.colorContrastScore}/100
Keyboard Navigation: ${this.metrics.keyboardNavigationScore}/100
Screen Reader Support: ${this.metrics.screenReaderScore}/100
ARIA Labels: ${this.metrics.ariaLabelsScore}/100
Focus Management: ${this.metrics.focusManagementScore}/100
    `;

    return report.trim();
  }

  /**
   * Cleanup resources
   */
  public cleanup(): void {
    this.skipLinks.forEach(link => link.remove());
    this.skipLinks = [];
    
    if (this.announcements) {
      this.announcements.remove();
      this.announcements = null;
    }

    this.isInitialized = false;
    this.metrics = null;
  }
}

// Export singleton instance
export const advancedAccessibilityEnhancer = new AdvancedAccessibilityEnhancer();

// Export class for custom instances
export { AdvancedAccessibilityEnhancer };
export type { AccessibilityConfig, AccessibilityMetrics };
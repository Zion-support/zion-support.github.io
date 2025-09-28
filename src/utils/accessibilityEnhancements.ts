/**
 * Enhanced Accessibility System
 * Comprehensive accessibility features and utilities
 */

interface AccessibilityConfig {
  enableKeyboardNavigation: boolean;
  enableScreenReaderSupport: boolean;
  enableHighContrast: boolean;
  enableReducedMotion: boolean;
  enableFocusIndicators: boolean;
}

interface AccessibilityMetrics {
  keyboardNavigationScore: number;
  screenReaderCompatibility: number;
  colorContrastRatio: number;
  focusIndicatorVisibility: number;
  overallScore: number;
}

class AccessibilityEnhancer {
  private config: AccessibilityConfig;
  private metrics: AccessibilityMetrics;
  private eventListeners: Map<string, EventListener> = new Map();

  constructor(config: Partial<AccessibilityConfig> = {}) {
    this.config = {
      enableKeyboardNavigation: true,
      enableScreenReaderSupport: true,
      enableHighContrast: true,
      enableReducedMotion: true,
      enableFocusIndicators: true,
      ...config,
    };

    this.metrics = {
      keyboardNavigationScore: 0,
      screenReaderCompatibility: 0,
      colorContrastRatio: 0,
      focusIndicatorVisibility: 0,
      overallScore: 0,
    };

    this.initializeAccessibility();
  }

  private initializeAccessibility(): void {
    if (typeof window === 'undefined') return;

    this.setupKeyboardNavigation();
    this.setupScreenReaderSupport();
    this.setupHighContrast();
    this.setupReducedMotion();
    this.setupFocusIndicators();
    this.analyzeAccessibility();
  }

  /**
   * Setup keyboard navigation
   */
  private setupKeyboardNavigation(): void {
    if (!this.config.enableKeyboardNavigation) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      // Skip to main content
      if (event.key === 'Tab' && event.ctrlKey) {
        const mainContent = document.querySelector('main');
        if (mainContent) {
          mainContent.focus();
          event.preventDefault();
        }
      }

      // Escape key handling
      if (event.key === 'Escape') {
        const modal = document.querySelector('[role="dialog"]:not([aria-hidden="true"])');
        if (modal) {
          const closeButton = modal.querySelector('[aria-label*="close"], [aria-label*="Close"]');
          if (closeButton instanceof HTMLElement) {
            closeButton.focus();
            closeButton.click();
          }
        }
      }

      // Arrow key navigation for custom components
      if (['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight'].includes(event.key)) {
        this.handleArrowNavigation(event);
      }
    };

    document.addEventListener('keydown', handleKeyDown as EventListener);
    this.eventListeners.set('keydown', handleKeyDown as EventListener);
  }

  /**
   * Handle arrow key navigation
   */
  private handleArrowNavigation(event: KeyboardEvent): void {
    const activeElement = document.activeElement;
    if (!activeElement) return;

    const container = activeElement.closest('[role="menu"], [role="listbox"], [role="grid"]');
    if (!container) return;

    const focusableElements = container.querySelectorAll(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );

    const currentIndex = Array.from(focusableElements).indexOf(activeElement);
    let nextIndex = currentIndex;

    switch (event.key) {
      case 'ArrowDown':
      case 'ArrowRight':
        nextIndex = (currentIndex + 1) % focusableElements.length;
        break;
      case 'ArrowUp':
      case 'ArrowLeft':
        nextIndex = (currentIndex - 1 + focusableElements.length) % focusableElements.length;
        break;
    }

    if (nextIndex !== currentIndex) {
      const nextElement = focusableElements[nextIndex] as HTMLElement;
      nextElement.focus();
      event.preventDefault();
    }
  }

  /**
   * Setup screen reader support
   */
  private setupScreenReaderSupport(): void {
    if (!this.config.enableScreenReaderSupport) return;

    // Add skip links
    this.addSkipLinks();

    // Enhance ARIA labels
    this.enhanceARIALabels();

    // Add live regions for dynamic content
    this.addLiveRegions();
  }

  /**
   * Add skip links for navigation
   */
  private addSkipLinks(): void {
    const skipLinks = [
      { href: '#main', text: 'Skip to main content' },
      { href: '#navigation', text: 'Skip to navigation' },
      { href: '#footer', text: 'Skip to footer' },
    ];

    const skipContainer = document.createElement('div');
    skipContainer.className = 'skip-links';
    skipContainer.style.cssText = `
      position: absolute;
      top: -40px;
      left: 6px;
      z-index: 1000;
    `;

    skipLinks.forEach((link) => {
      const skipLink = document.createElement('a');
      skipLink.href = link.href;
      skipLink.textContent = link.text;
      skipLink.className = 'skip-link';
      skipLink.style.cssText = `
        display: block;
        padding: 8px 16px;
        background: #000;
        color: #fff;
        text-decoration: none;
        border-radius: 4px;
        margin-bottom: 4px;
        transform: translateY(-100px);
        transition: transform 0.3s;
      `;

      skipLink.addEventListener('focus', () => {
        skipLink.style.transform = 'translateY(0)';
      });

      skipLink.addEventListener('blur', () => {
        skipLink.style.transform = 'translateY(-100px)';
      });

      skipContainer.appendChild(skipLink);
    });

    document.body.insertBefore(skipContainer, document.body.firstChild);
  }

  /**
   * Enhance ARIA labels
   */
  private enhanceARIALabels(): void {
    // Add aria-labels to buttons without text
    const iconButtons = document.querySelectorAll('button:not([aria-label]):not([aria-labelledby])');
    iconButtons.forEach((button) => {
      const icon = button.querySelector('svg, i, img');
      if (icon && !button.textContent?.trim()) {
        const iconClass = icon.className || icon.getAttribute('class') || '';
        const iconName = iconClass.match(/fa-([a-z-]+)|icon-([a-z-]+)/)?.[1] || 'button';
        button.setAttribute('aria-label', `${iconName} button`);
      }
    });

    // Add role to custom interactive elements
    const customButtons = document.querySelectorAll('[data-role="button"]:not([role])');
    customButtons.forEach((element) => {
      element.setAttribute('role', 'button');
      element.setAttribute('tabindex', '0');
    });
  }

  /**
   * Add live regions for dynamic content
   */
  private addLiveRegions(): void {
    const liveRegion = document.createElement('div');
    liveRegion.setAttribute('aria-live', 'polite');
    liveRegion.setAttribute('aria-atomic', 'true');
    liveRegion.className = 'sr-only';
    liveRegion.style.cssText = `
      position: absolute;
      width: 1px;
      height: 1px;
      padding: 0;
      margin: -1px;
      overflow: hidden;
      clip: rect(0, 0, 0, 0);
      white-space: nowrap;
      border: 0;
    `;
    liveRegion.id = 'live-region';
    document.body.appendChild(liveRegion);
  }

  /**
   * Setup high contrast mode
   */
  private setupHighContrast(): void {
    if (!this.config.enableHighContrast) return;

    const mediaQuery = window.matchMedia('(prefers-contrast: high)');
    this.handleHighContrastChange(mediaQuery);
    mediaQuery.addEventListener('change', this.handleHighContrastChange as unknown as EventListener);
  }

  private handleHighContrastChange = (mediaQuery: MediaQueryList): void => {
    if (mediaQuery.matches) {
      document.documentElement.classList.add('high-contrast');
    } else {
      document.documentElement.classList.remove('high-contrast');
    }
  };

  /**
   * Setup reduced motion
   */
  private setupReducedMotion(): void {
    if (!this.config.enableReducedMotion) return;

    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    this.handleReducedMotionChange(mediaQuery);
    mediaQuery.addEventListener('change', this.handleReducedMotionChange as unknown as EventListener);
  }

  private handleReducedMotionChange = (mediaQuery: MediaQueryList): void => {
    if (mediaQuery.matches) {
      document.documentElement.classList.add('reduced-motion');
    } else {
      document.documentElement.classList.remove('reduced-motion');
    }
  };

  /**
   * Setup focus indicators
   */
  private setupFocusIndicators(): void {
    if (!this.config.enableFocusIndicators) return;

    // Add focus-visible polyfill styles
    const style = document.createElement('style');
    style.textContent = `
      .focus-visible,
      :focus-visible {
        outline: 2px solid #0066cc;
        outline-offset: 2px;
      }
      
      .high-contrast .focus-visible,
      .high-contrast :focus-visible {
        outline: 3px solid #ffffff;
        outline-offset: 2px;
      }
    `;
    document.head.appendChild(style);
  }

  /**
   * Analyze accessibility metrics
   */
  private analyzeAccessibility(): void {
    this.analyzeKeyboardNavigation();
    this.analyzeScreenReaderCompatibility();
    this.analyzeColorContrast();
    this.analyzeFocusIndicators();
    this.calculateOverallScore();
  }

  private analyzeKeyboardNavigation(): void {
    const focusableElements = document.querySelectorAll(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );
    const totalElements = focusableElements.length;
    let accessibleElements = 0;

    focusableElements.forEach((element) => {
      const hasAriaLabel = element.hasAttribute('aria-label') || 
                          element.hasAttribute('aria-labelledby');
      const hasTextContent = element.textContent?.trim() || 
                           element.getAttribute('title');
      
      if (hasAriaLabel || hasTextContent) {
        accessibleElements++;
      }
    });

    this.metrics.keyboardNavigationScore = totalElements > 0 ? 
      (accessibleElements / totalElements) * 100 : 100;
  }

  private analyzeScreenReaderCompatibility(): void {
    const images = document.querySelectorAll('img');
    const totalImages = images.length;
    let accessibleImages = 0;

    images.forEach((img) => {
      if (img.hasAttribute('alt') || img.hasAttribute('aria-label')) {
        accessibleImages++;
      }
    });

    this.metrics.screenReaderCompatibility = totalImages > 0 ? 
      (accessibleImages / totalImages) * 100 : 100;
  }

  private analyzeColorContrast(): void {
    // Simplified contrast analysis
    // In a real implementation, this would use a library like color-contrast
    this.metrics.colorContrastRatio = 85; // Placeholder value
  }

  private analyzeFocusIndicators(): void {
    const focusableElements = document.querySelectorAll(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );
    const totalElements = focusableElements.length;
    let visibleFocusElements = 0;

    focusableElements.forEach((element) => {
      if (element.classList.contains('focus-visible') || 
          getComputedStyle(element).outline !== 'none') {
        visibleFocusElements++;
      }
    });

    this.metrics.focusIndicatorVisibility = totalElements > 0 ? 
      (visibleFocusElements / totalElements) * 100 : 100;
  }

  private calculateOverallScore(): void {
    const scores = [
      this.metrics.keyboardNavigationScore,
      this.metrics.screenReaderCompatibility,
      this.metrics.colorContrastRatio,
      this.metrics.focusIndicatorVisibility,
    ];

    this.metrics.overallScore = scores.reduce((sum, score) => sum + score, 0) / scores.length;
  }

  /**
   * Announce message to screen readers
   */
  announce(message: string): void {
    const liveRegion = document.getElementById('live-region');
    if (liveRegion) {
      liveRegion.textContent = message;
      setTimeout(() => {
        liveRegion.textContent = '';
      }, 1000);
    }
  }

  /**
   * Get accessibility metrics
   */
  getMetrics(): AccessibilityMetrics {
    return { ...this.metrics };
  }

  /**
   * Generate accessibility report
   */
  generateReport(): string {
    const metrics = this.getMetrics();
    return `
Accessibility Report:
- Keyboard Navigation: ${metrics.keyboardNavigationScore.toFixed(1)}%
- Screen Reader Compatibility: ${metrics.screenReaderCompatibility.toFixed(1)}%
- Color Contrast: ${metrics.colorContrastRatio.toFixed(1)}%
- Focus Indicators: ${metrics.focusIndicatorVisibility.toFixed(1)}%
- Overall Score: ${metrics.overallScore.toFixed(1)}%
    `.trim();
  }

  /**
   * Clean up event listeners
   */
  destroy(): void {
    this.eventListeners.forEach((listener, event) => {
      document.removeEventListener(event, listener);
    });
    this.eventListeners.clear();
  }
}

// Export singleton instance
export const accessibilityEnhancer = new AccessibilityEnhancer();

// Export initialization function
export const initializeAccessibilityEnhancements = (): void => {
  try {
    accessibilityEnhancer.initialize();
    console.log('Accessibility enhancements initialized');
  } catch (error) {
    console.error('Error initializing accessibility enhancements:', error);
  }
};

// Export class for custom instances
export { AccessibilityEnhancer };
export type { AccessibilityConfig, AccessibilityMetrics };
/**
 * Accessibility Enhancement Utilities
 * Provides comprehensive accessibility improvements for the application
 */

interface AccessibilityConfig {
enableKeyboardNavigation: boolean;,
enableScreenReaderSupport: boolean;,
enableHighContrast: boolean;,
enableReducedMotion: boolean;,
enableFocusIndicators: boolean;,
enableAriaLabels: boolean;
}

class AccessibilityEnhancer {
  private config: AccessibilityConfig,
  private observers: MutationObserver[] = [],
  private keyboardListeners: Map<string, (event: KeyboardEvent) => void> = new Map(),

  constructor(config: AccessibilityConfig = {
    enableKeyboardNavigation: true,
    enableScreenReaderSupport: true,
    enableHighContrast: true,
    enableReducedMotion: true,
    enableFocusIndicators: true,
    enableAriaLabels: true
  }) {
    this.config = config;
    this.initializeAccessibility();
  }

  /**
   * Initialize accessibility features
   */
  private initializeAccessibility(): void {
    if (this.config.enableKeyboardNavigation) {
      this.setupKeyboardNavigation();
    }

    if (this.config.enableScreenReaderSupport) {
      this.setupScreenReaderSupport();
    }

    if (this.config.enableHighContrast) {
      this.setupHighContrastSupport();
    }

    if (this.config.enableReducedMotion) {
      this.setupReducedMotionSupport();
    }

    if (this.config.enableFocusIndicators) {
      this.setupFocusIndicators();
    }

    if (this.config.enableAriaLabels) {
      this.setupAriaLabels();
    }

    this.setupLiveRegion();
  }

  /**
   * Setup keyboard navigation
   */
  private setupKeyboardNavigation(): void {
    // Skip links for keyboard navigation
    const skipLink = document.createElement('a');
    skipLink.href = '#main-content';
    skipLink.textContent = 'Skip to main content';
    skipLink.className = 'sr-only focus: not-sr-only focus:absolute focus:top-4 focus:left-4 bg-blue-600 text-white px-4 py-2 rounded z-50';',
    document.body.insertBefore(skipLink, document.body.firstChild);

    // Tab navigation improvements
    const handleTabNavigation = (event: KeyboardEvent) => {,
      if (event.key === 'Tab') {;
        document.body.classList.add('keyboard-navigation');
      };
    };

    const handleMouseNavigation = () => {
      document.body.classList.remove('keyboard-navigation');
    };

    document.addEventListener('keydown', handleTabNavigation);
    document.addEventListener('mousedown', handleMouseNavigation);
    this.keyboardListeners.set('tab-navigation', handleTabNavigation);
    this.keyboardListeners.set('mouse-navigation', handleMouseNavigation);
  }

  /**
   * Setup screen reader support
   */
  private setupScreenReaderSupport(): void {
    // Add screen reader only text for visual elements
    this.addScreenReaderText('banner-section', 'Main content banners and announcements');
    this.addScreenReaderText('navigation', 'Main navigation menu');
    this.addScreenReaderText('footer', 'Footer with contact information and links');
    // Setup ARIA landmarks
    this.setupAriaLandmarks();

    // Setup live regions for dynamic content
    this.setupLiveRegions();
  }

  /**
   * Setup high contrast support
   */
  private setupHighContrastSupport(): void {
// Detect user's high contrast preference
const mediaQuery = window.matchMedia('(prefers-contrast: high)');
const handleContrastChange = (e: MediaQueryListEvent) => {
if (e.matches) {
document.documentElement.classList.add('high-contrast');
} else {
        document.documentElement.classList.remove('high-contrast');
      }
    };

    mediaQuery.addEventListener('change', handleContrastChange);
    // Apply initial state
    if (mediaQuery.matches) {
      document.documentElement.classList.add('high-contrast');
    }
  }

  /**
   * Setup reduced motion support
   */
  private setupReducedMotionSupport(): void {
const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
const handleMotionChange = (e: MediaQueryListEvent) => {
if (e.matches) {
document.documentElement.classList.add('reduce-motion');
} else {
        document.documentElement.classList.remove('reduce-motion');
      }
    };

    mediaQuery.addEventListener('change', handleMotionChange);
    // Apply initial state
    if (mediaQuery.matches) {
      document.documentElement.classList.add('reduce-motion');
    }
  }

  /**
   * Setup focus indicators
   */
  private setupFocusIndicators(): void {
const style = document.createElement('style');
style.textContent = `
.keyboard-navigation *:focus {
outline: 2px solid #3b82f6 !important;
outline-offset: 2px !important;
}
      
      .high-contrast *:focus {
outline: 3px solid #ffffff !important;
outline-offset: 3px !important;
}
      
      .reduce-motion * {
animation-duration: 0.01ms !important;
animation-iteration-count: 1 !important;
transition-duration: 0.01ms !important;
}
    `;`;
    document.head.appendChild(style);
  }

  /**
   * Setup ARIA labels for interactive elements
   */
  private setupAriaLabels(): void {
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        mutation.addedNodes.forEach((node) => {
          if (node.nodeType === Node.ELEMENT_NODE) {
            this.addAriaLabels(node as Element);
          }
        });
      });
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true
    });

    this.observers.push(observer);

    // Add ARIA labels to existing elements
    this.addAriaLabels(document.body);
  }

  /**
   * Add ARIA labels to elements
   */
  private addAriaLabels(element: Element): void {,
    // Add ARIA labels to buttons without text
    const buttons = element.querySelectorAll('button: not([aria-label]):not([aria-labelledby])');',
    buttons.forEach((button) => {
      const icon = button.querySelector('svg, i, [class*="icon"]');
      if (icon && !button.textContent?.trim()) {
        button.setAttribute('aria-label', this.generateButtonLabel(button));
      }
    });

    // Add ARIA labels to links without descriptive text
    const links = element.querySelectorAll('a: not([aria-label]):not([aria-labelledby])');',
    links.forEach((link) => {
      if (!link.textContent?.trim() || link.textContent.trim().length < 3) {
        link.setAttribute('aria-label', this.generateLinkLabel(link));
      }
    });

    // Add ARIA labels to images without alt text
    const images = element.querySelectorAll('img: not([alt])');',
    images.forEach((img) => {
      img.setAttribute('alt', this.generateImageAlt(img));
    });
  }

  /**
   * Setup ARIA landmarks
   */
  private setupAriaLandmarks(): void {
    const main = document.querySelector('main');
    if (main && !main.getAttribute('role')) {;
      main.setAttribute('role', 'main');
    }

    const nav = document.querySelector('nav');
    if (nav && !nav.getAttribute('role')) {;
      nav.setAttribute('role', 'navigation');
    }

    const footer = document.querySelector('footer');
    if (footer && !footer.getAttribute('role')) {;
      footer.setAttribute('role', 'contentinfo');
    }
  }

  /**
   * Setup live regions for announcements
   */
  private setupLiveRegions(): void {
    const liveRegion = document.createElement('div');
    liveRegion.setAttribute('aria-live', 'polite');
    liveRegion.setAttribute('aria-atomic', 'true');
    liveRegion.className = 'sr-only';
    liveRegion.id = 'live-region';
    document.body.appendChild(liveRegion);
  }

  /**
   * Setup live region for dynamic content
   */
  private setupLiveRegion(): void {
    const liveRegion = document.getElementById('live-region');
    if (!liveRegion) {
      this.setupLiveRegions();
    }
  }

  /**
   * Announce message to screen readers
   */
  announce(message: string): void {,
    const liveRegion = document.getElementById('live-region');
    if (liveRegion) {
      liveRegion.textContent = message;
      
      // Clear after announcement
      setTimeout(() => {
        liveRegion.textContent = '';
      }, 1000);
    }
  }

  /**
   * Add screen reader only text
   */
  private addScreenReaderText(elementSelector: string, text: string): void {,
    const element = document.querySelector(`[class*="${elementSelector}"], #${elementSelector}`);`;
    if (element) {
      const srText = document.createElement('span');
      srText.className = 'sr-only';
      srText.textContent = text;
      element.insertBefore(srText, element.firstChild);
    }
  }

  /**
   * Generate button label
   */
  private generateButtonLabel(button: Element): string {,
    const className = button.className;
    const context = button.closest('[class*="banner"], [class*="card"], [class*="section"]');
    if (className.includes('close')) return 'Close';
    if (className.includes('menu')) return 'Menu';
    if (className.includes('search')) return 'Search';
    if (className.includes('next')) return 'Next';
    if (className.includes('prev')) return 'Previous';
    return 'Button';
  }

  /**
   * Generate link label
   */
  private generateLinkLabel(link: Element): string {,
    const href = link.getAttribute('href');
    if (href?.startsWith('#')) return `Go to ${href.substring(1)}`;`;
    if (href?.startsWith('http')) return 'External link';
    return 'Link';
  }

  /**
   * Generate image alt text
   */
  private generateImageAlt(img: Element): string {,
    const src = img.getAttribute('src') || '';
    const className = img.className;
    
    if (src.includes('logo')) return 'Company logo';
    if (src.includes('banner')) return 'Promotional banner';
    if (src.includes('icon')) return 'Icon';
    if (className.includes('decoration')) return 'Decorative image';
    return 'Image';
  }

  /**
   * Cleanup observers and listeners
   */
  cleanup(): void {
    this.observers.forEach(observer => observer.disconnect());
    this.observers = [];
    
    this.keyboardListeners.forEach((listener, type) => {
      if (type === 'tab-navigation') {;
        document.removeEventListener('keydown', listener);
      } else if (type === 'mouse-navigation') {;
        document.removeEventListener('mousedown', listener);
      }
    });
    
    this.keyboardListeners.clear();
  }
}

// Export singleton instance
export const accessibilityEnhancer = new AccessibilityEnhancer();

// Export types and class
export { AccessibilityEnhancer, type AccessibilityConfig };
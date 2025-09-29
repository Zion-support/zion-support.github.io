/**
 * Advanced Accessibility Enhancement System
 * Comprehensive accessibility monitoring and optimization utilities
 */

interface AccessibilityMetrics {
  contrastRatio: number;
  focusableElements: number;
  ariaLabels: number;
  keyboardNavigation: boolean;
  screenReaderCompatible: boolean;
  colorBlindFriendly: boolean;
  fontSizeCompliance: boolean;
  altTextCoverage: number;
}

interface AccessibilityConfig {
  enableContrastChecking: boolean;
  enableKeyboardNavigation: boolean;
  enableScreenReaderSupport: boolean;
  enableColorBlindSupport: boolean;
  enableFontSizeCompliance: boolean;
  enableAltTextChecking: boolean;
  enableAriaLabels: boolean;
  enableFocusManagement: boolean;
}

class AdvancedAccessibilityEnhancer {
  private metrics: AccessibilityMetrics | null = null;
  private config: AccessibilityConfig;
  private observers: MutationObserver[] = [];

  constructor(config: Partial<AccessibilityConfig> = {}) {
    this.config = {
      enableContrastChecking: true,
      enableKeyboardNavigation: true,
      enableScreenReaderSupport: true,
      enableColorBlindSupport: true,
      enableFontSizeCompliance: true,
      enableAltTextChecking: true,
      enableAriaLabels: true,
      enableFocusManagement: true,
      ...config,
    };

    this.initialize();
  }

  private initialize(): void {
    if (typeof window === 'undefined') return;

    this.setupAccessibilityObservers();
    this.enhanceKeyboardNavigation();
    this.improveContrastRatios();
    this.addAriaLabels();
    this.optimizeScreenReaderSupport();
    this.improveColorBlindSupport();
    this.ensureFontSizeCompliance();
    this.addAltTextToImages();
    this.setupFocusManagement();
  }

  private setupAccessibilityObservers(): void {
    // Monitor DOM changes for accessibility issues
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.type === 'childList') {
          mutation.addedNodes.forEach((node) => {
            if (node.nodeType === Node.ELEMENT_NODE) {
              this.enhanceElement(node as Element);
            }
          });
        }
      });
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true,
    });

    this.observers.push(observer);
  }

  private enhanceKeyboardNavigation(): void {
    if (!this.config.enableKeyboardNavigation) return;

    // Add keyboard navigation to interactive elements
    const interactiveElements = document.querySelectorAll(
      'button, a, input, select, textarea, [tabindex], [role="button"]'
    );

    interactiveElements.forEach((element) => {
      this.enhanceKeyboardElement(element as HTMLElement);
    });

    // Add skip links
    this.addSkipLinks();

    // Enhance focus indicators
    this.enhanceFocusIndicators();
  }

  private enhanceKeyboardElement(element: HTMLElement): void {
    // Ensure proper tab order
    if (!element.hasAttribute('tabindex') && !element.matches('button, a, input, select, textarea')) {
      element.setAttribute('tabindex', '0');
    }

    // Add keyboard event handlers
    element.addEventListener('keydown', (event) => {
      this.handleKeyboardEvent(event, element);
    });

    // Add focus and blur handlers
    element.addEventListener('focus', () => {
      this.handleFocus(element);
    });

    element.addEventListener('blur', () => {
      this.handleBlur(element);
    });
  }

  private handleKeyboardEvent(event: KeyboardEvent, element: HTMLElement): void {
    switch (event.key) {
      case 'Enter':
      case ' ':
        if (element.matches('[role="button"], button')) {
          event.preventDefault();
          element.click();
        }
        break;
      case 'Escape':
        // Close modals or dropdowns
        const modal = element.closest('[role="dialog"]');
        if (modal) {
          const closeButton = modal.querySelector('[aria-label="Close"]');
          if (closeButton) {
            (closeButton as HTMLElement).click();
          }
        }
        break;
      case 'ArrowDown':
      case 'ArrowUp':
        // Handle dropdown navigation
        this.handleArrowNavigation(event, element);
        break;
    }
  }

  private handleArrowNavigation(event: KeyboardEvent, element: HTMLElement): void {
    const menu = element.closest('[role="menu"]');
    if (menu) {
      event.preventDefault();
      const items = Array.from(menu.querySelectorAll('[role="menuitem"]'));
      const currentIndex = items.indexOf(element);
      let nextIndex;

      if (event.key === 'ArrowDown') {
        nextIndex = (currentIndex + 1) % items.length;
      } else {
        nextIndex = currentIndex === 0 ? items.length - 1 : currentIndex - 1;
      }

      (items[nextIndex] as HTMLElement).focus();
    }
  }

  private handleFocus(element: HTMLElement): void {
    element.classList.add('focus-visible');
    
    // Announce to screen readers
    const announcement = element.getAttribute('aria-label') || 
                        element.textContent || 
                        element.getAttribute('alt') || 
                        'Interactive element';
    
    this.announceToScreenReader(announcement);
  }

  private handleBlur(element: HTMLElement): void {
    element.classList.remove('focus-visible');
  }

  private addSkipLinks(): void {
    const skipLink = document.createElement('a');
    skipLink.href = '#main-content';
    skipLink.textContent = 'Skip to main content';
    skipLink.className = 'skip-link';
    skipLink.style.cssText = `
      position: absolute;
      top: -40px;
      left: 6px;
      background: #000;
      color: #fff;
      padding: 8px;
      text-decoration: none;
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
  }

  private enhanceFocusIndicators(): void {
    const style = document.createElement('style');
    style.textContent = `
      .focus-visible {
        outline: 2px solid #4A90E2 !important;
        outline-offset: 2px !important;
      }
      
      .skip-link:focus {
        top: 6px !important;
      }
    `;
    document.head.appendChild(style);
  }

  private improveContrastRatios(): void {
    if (!this.config.enableContrastChecking) return;

    const elements = document.querySelectorAll('*');
    elements.forEach((element) => {
      const computedStyle = window.getComputedStyle(element);
      const color = computedStyle.color;
      const backgroundColor = computedStyle.backgroundColor;

      if (color && backgroundColor && backgroundColor !== 'rgba(0, 0, 0, 0)') {
        const contrastRatio = this.calculateContrastRatio(color, backgroundColor);
        
        if (contrastRatio < 4.5) {
          console.warn(`Low contrast ratio: ${contrastRatio}`, element);
          this.fixContrastRatio(element as HTMLElement, contrastRatio);
        }
      }
    });
  }

  private calculateContrastRatio(color1: string, color2: string): number {
    const getLuminance = (color: string): number => {
      const rgb = this.hexToRgb(color);
      if (!rgb) return 0;

      const { r, g, b } = rgb;
      const [rs, gs, bs] = [r, g, b].map(c => {
        c = c / 255;
        return c <= 0.03928 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4);
      });

      return 0.2126 * rs + 0.7152 * gs + 0.0722 * bs;
    };

    const lum1 = getLuminance(color1);
    const lum2 = getLuminance(color2);
    const brightest = Math.max(lum1, lum2);
    const darkest = Math.min(lum1, lum2);

    return (brightest + 0.05) / (darkest + 0.05);
  }

  private hexToRgb(hex: string): { r: number; g: number; b: number } | null {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
      r: parseInt(result[1], 16),
      g: parseInt(result[2], 16),
      b: parseInt(result[3], 16)
    } : null;
  }

  private fixContrastRatio(element: HTMLElement, currentRatio: number): void {
    // Apply high contrast mode if available
    if (window.matchMedia('(prefers-contrast: high)').matches) {
      element.style.filter = 'contrast(1.5)';
    }

    // Add warning class for manual review
    element.classList.add('low-contrast-warning');
  }

  private addAriaLabels(): void {
    if (!this.config.enableAriaLabels) return;

    // Add aria-labels to elements that need them
    const elementsNeedingLabels = document.querySelectorAll(
      'button:not([aria-label]):not([aria-labelledby]), ' +
      'input:not([aria-label]):not([aria-labelledby]), ' +
      'select:not([aria-label]):not([aria-labelledby]), ' +
      '[role="button"]:not([aria-label]):not([aria-labelledby])'
    );

    elementsNeedingLabels.forEach((element) => {
      const textContent = element.textContent?.trim();
      if (textContent) {
        element.setAttribute('aria-label', textContent);
      }
    });
  }

  private optimizeScreenReaderSupport(): void {
    if (!this.config.enableScreenReaderSupport) return;

    // Add screen reader only text
    const srOnlyStyle = document.createElement('style');
    srOnlyStyle.textContent = `
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
    document.head.appendChild(srOnlyStyle);

    // Add screen reader announcements
    this.setupScreenReaderAnnouncements();
  }

  private setupScreenReaderAnnouncements(): void {
    const announcementRegion = document.createElement('div');
    announcementRegion.setAttribute('aria-live', 'polite');
    announcementRegion.setAttribute('aria-atomic', 'true');
    announcementRegion.className = 'sr-only';
    announcementRegion.id = 'announcements';
    document.body.appendChild(announcementRegion);
  }

  private announceToScreenReader(message: string): void {
    const announcementRegion = document.getElementById('announcements');
    if (announcementRegion) {
      announcementRegion.textContent = message;
      // Clear after announcement
      setTimeout(() => {
        announcementRegion.textContent = '';
      }, 1000);
    }
  }

  private improveColorBlindSupport(): void {
    if (!this.config.enableColorBlindSupport) return;

    // Add color blind friendly alternatives
    const colorBlindElements = document.querySelectorAll('[style*="color"]');
    colorBlindElements.forEach((element) => {
      this.enhanceColorBlindElement(element as HTMLElement);
    });
  }

  private enhanceColorBlindElement(element: HTMLElement): void {
    // Add patterns or icons for color-coded information
    const computedStyle = window.getComputedStyle(element);
    const color = computedStyle.color;

    if (color.includes('red') || color.includes('#ff0000')) {
      element.setAttribute('data-color-type', 'error');
      element.classList.add('color-blind-error');
    } else if (color.includes('green') || color.includes('#00ff00')) {
      element.setAttribute('data-color-type', 'success');
      element.classList.add('color-blind-success');
    } else if (color.includes('yellow') || color.includes('#ffff00')) {
      element.setAttribute('data-color-type', 'warning');
      element.classList.add('color-blind-warning');
    }
  }

  private ensureFontSizeCompliance(): void {
    if (!this.config.enableFontSizeCompliance) return;

    const textElements = document.querySelectorAll('p, span, div, h1, h2, h3, h4, h5, h6');
    textElements.forEach((element) => {
      const computedStyle = window.getComputedStyle(element);
      const fontSize = parseFloat(computedStyle.fontSize);

      if (fontSize < 16) {
        console.warn('Font size below recommended minimum:', element);
        element.classList.add('small-font-warning');
      }
    });
  }

  private addAltTextToImages(): void {
    if (!this.config.enableAltTextChecking) return;

    const images = document.querySelectorAll('img');
    images.forEach((img) => {
      if (!img.hasAttribute('alt')) {
        console.warn('Image missing alt text:', img);
        img.setAttribute('alt', 'Image');
        img.classList.add('missing-alt-warning');
      }
    });
  }

  private setupFocusManagement(): void {
    if (!this.config.enableFocusManagement) return;

    // Trap focus in modals
    document.addEventListener('keydown', (event) => {
      if (event.key === 'Tab') {
        const modal = document.querySelector('[role="dialog"]:not([aria-hidden="true"])');
        if (modal) {
          this.trapFocusInModal(event, modal as HTMLElement);
        }
      }
    });
  }

  private trapFocusInModal(event: KeyboardEvent, modal: HTMLElement): void {
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

  private enhanceElement(element: Element): void {
    // Apply accessibility enhancements to new elements
    if (element.matches('button, a, input, select, textarea, [role="button"]')) {
      this.enhanceKeyboardElement(element as HTMLElement);
    }

    if (element.matches('img')) {
      this.addAltTextToImages();
    }
  }

  public getMetrics(): AccessibilityMetrics | null {
    return this.metrics;
  }

  public generateReport(): string {
    if (!this.metrics) {
      return 'No accessibility metrics available';
    }

    const report = `
Accessibility Report:
====================
Contrast Ratio: ${this.metrics.contrastRatio}
Focusable Elements: ${this.metrics.focusableElements}
ARIA Labels: ${this.metrics.ariaLabels}
Keyboard Navigation: ${this.metrics.keyboardNavigation ? 'Enabled' : 'Disabled'}
Screen Reader Compatible: ${this.metrics.screenReaderCompatible ? 'Yes' : 'No'}
Color Blind Friendly: ${this.metrics.colorBlindFriendly ? 'Yes' : 'No'}
Font Size Compliance: ${this.metrics.fontSizeCompliance ? 'Compliant' : 'Non-compliant'}
Alt Text Coverage: ${this.metrics.altTextCoverage}%
    `;

    return report;
  }

  public cleanup(): void {
    this.observers.forEach((observer) => {
      observer.disconnect();
    });
    this.observers = [];
  }
}

// Export the enhancer
export const accessibilityEnhancer = new AdvancedAccessibilityEnhancer();

// Export types and utilities
export type { AccessibilityMetrics, AccessibilityConfig };
export { AdvancedAccessibilityEnhancer };
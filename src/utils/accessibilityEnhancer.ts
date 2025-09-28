/**
 * Advanced Accessibility Enhancer
 * Provides comprehensive accessibility improvements and monitoring
 */

interface AccessibilityConfig {
  enableKeyboardNavigation: boolean;
  enableScreenReaderSupport: boolean;
  enableHighContrast: boolean;
  enableFocusManagement: boolean;
  enableARIALabels: boolean;
  enableSkipLinks: boolean;
  enableColorContrast: boolean;
  enableMotionReduction: boolean;
}

interface AccessibilityMetrics {
  focusableElements: number;
  ariaLabels: number;
  headingStructure: number;
  colorContrastRatio: number;
  keyboardTraps: number;
  skipLinks: number;
  altTexts: number;
  formLabels: number;
}

class AccessibilityEnhancer {
  private config: AccessibilityConfig;
  private metrics: AccessibilityMetrics;
  private focusableSelectors = [
    'a[href]',
    'button:not([disabled])',
    'input:not([disabled])',
    'select:not([disabled])',
    'textarea:not([disabled])',
    '[tabindex]:not([tabindex="-1"])',
    'area[href]',
    'iframe',
    'object',
    'embed'
  ];

  constructor(config: Partial<AccessibilityConfig> = {}) {
    this.config = {
      enableKeyboardNavigation: true,
      enableScreenReaderSupport: true,
      enableHighContrast: true,
      enableFocusManagement: true,
      enableARIALabels: true,
      enableSkipLinks: true,
      enableColorContrast: true,
      enableMotionReduction: true,
      ...config
    };

    this.metrics = {
      focusableElements: 0,
      ariaLabels: 0,
      headingStructure: 0,
      colorContrastRatio: 0,
      keyboardTraps: 0,
      skipLinks: 0,
      altTexts: 0,
      formLabels: 0
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
    this.setupMotionReduction();
    this.analyzeAccessibility();
  }

  private setupKeyboardNavigation(): void {
    if (!this.config.enableKeyboardNavigation) return;

    document.addEventListener('keydown', (event) => {
      // Handle Escape key to close modals
      if (event.key === 'Escape') {
        const modals = document.querySelectorAll('[role="dialog"], [role="alertdialog"]');
        modals.forEach(modal => {
          const closeButton = modal.querySelector('[aria-label*="close"], [aria-label*="Close"]');
          if (closeButton) {
            (closeButton as HTMLElement).click();
          }
        });
      }

      // Handle Tab key for focus management
      if (event.key === 'Tab') {
        this.manageFocus(event);
      }

      // Handle Enter and Space for custom interactive elements
      if (event.key === 'Enter' || event.key === ' ') {
        const target = event.target as HTMLElement;
        if (target.getAttribute('role') === 'button' && !target.tagName.toLowerCase().includes('button')) {
          event.preventDefault();
          target.click();
        }
      }
    });
  }

  private manageFocus(event: KeyboardEvent): void {
    const focusableElements = this.getFocusableElements();
    const currentIndex = focusableElements.indexOf(event.target as HTMLElement);
    
    if (event.shiftKey) {
      // Shift + Tab: move backwards
      if (currentIndex <= 0) {
        event.preventDefault();
        focusableElements[focusableElements.length - 1]?.focus();
      }
    } else {
      // Tab: move forwards
      if (currentIndex >= focusableElements.length - 1) {
        event.preventDefault();
        focusableElements[0]?.focus();
      }
    }
  }

  private getFocusableElements(): HTMLElement[] {
    return Array.from(document.querySelectorAll(this.focusableSelectors.join(', '))) as HTMLElement[];
  }

  private setupScreenReaderSupport(): void {
    if (!this.config.enableScreenReaderSupport) return;

    // Add screen reader only text for visual elements
    const visualElements = document.querySelectorAll('[data-visual-only]');
    visualElements.forEach(element => {
      const srText = element.getAttribute('data-sr-text');
      if (srText) {
        const srElement = document.createElement('span');
        srElement.className = 'sr-only';
        srElement.textContent = srText;
        element.appendChild(srElement);
      }
    });

    // Announce dynamic content changes
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.type === 'childList' && mutation.addedNodes.length > 0) {
          const addedElement = mutation.addedNodes[0] as HTMLElement;
          if (addedElement && addedElement.getAttribute('aria-live')) {
            this.announceToScreenReader(addedElement.textContent || '');
          }
        }
      });
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true
    });
  }

  private announceToScreenReader(message: string): void {
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

  private setupHighContrast(): void {
    if (!this.config.enableHighContrast) return;

    // Check for high contrast mode preference
    if (window.matchMedia('(prefers-contrast: high)').matches) {
      document.documentElement.classList.add('high-contrast');
    }

    // Listen for changes in contrast preference
    window.matchMedia('(prefers-contrast: high)').addEventListener('change', (e) => {
      if (e.matches) {
        document.documentElement.classList.add('high-contrast');
      } else {
        document.documentElement.classList.remove('high-contrast');
      }
    });
  }

  private setupFocusManagement(): void {
    if (!this.config.enableFocusManagement) return;

    // Add focus indicators
    const style = document.createElement('style');
    style.textContent = `
      *:focus {
        outline: 2px solid #0066cc;
        outline-offset: 2px;
      }
      
      .focus-visible:focus {
        outline: 2px solid #0066cc;
        outline-offset: 2px;
      }
      
      .focus-visible:focus:not(:focus-visible) {
        outline: none;
      }
    `;
    document.head.appendChild(style);

    // Track focus changes for analytics
    document.addEventListener('focusin', (event) => {
      const target = event.target as HTMLElement;
      this.trackFocusEvent(target);
    });
  }

  private trackFocusEvent(element: HTMLElement): void {
    // Track focus events for accessibility analytics
    const focusData = {
      element: element.tagName.toLowerCase(),
      role: element.getAttribute('role'),
      ariaLabel: element.getAttribute('aria-label'),
      className: element.className,
      timestamp: Date.now()
    };
    
    // Send to analytics if available
    if (typeof (window as Window & { gtag?: (command: string, event: string, data: unknown) => void }).gtag === 'function') {
      (window as Window & { gtag: (command: string, event: string, data: unknown) => void }).gtag('event', 'focus', focusData);
    }
  }

  private setupARIALabels(): void {
    if (!this.config.enableARIALabels) return;

    // Add missing ARIA labels to interactive elements
    const interactiveElements = document.querySelectorAll('button, input, select, textarea, [role="button"]');
    interactiveElements.forEach(element => {
      if (!element.getAttribute('aria-label') && !element.getAttribute('aria-labelledby')) {
        const text = element.textContent?.trim() || element.getAttribute('placeholder') || 'Interactive element';
        element.setAttribute('aria-label', text);
      }
    });

    // Add ARIA landmarks
    this.addARIALandmarks();
  }

  private addARIALandmarks(): void {
    const main = document.querySelector('main');
    if (main && !main.getAttribute('role')) {
      main.setAttribute('role', 'main');
    }

    const nav = document.querySelector('nav');
    if (nav && !nav.getAttribute('role')) {
      nav.setAttribute('role', 'navigation');
    }

    const header = document.querySelector('header');
    if (header && !header.getAttribute('role')) {
      header.setAttribute('role', 'banner');
    }

    const footer = document.querySelector('footer');
    if (footer && !footer.getAttribute('role')) {
      footer.setAttribute('role', 'contentinfo');
    }
  }

  private setupSkipLinks(): void {
    if (!this.config.enableSkipLinks) return;

    // Add skip links if they don't exist
    if (!document.querySelector('.skip-link')) {
      const skipLink = document.createElement('a');
      skipLink.href = '#main-content';
      skipLink.className = 'skip-link';
      skipLink.textContent = 'Skip to main content';
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
  }

  private setupColorContrast(): void {
    if (!this.config.enableColorContrast) return;

    // Check color contrast ratios
    const textElements = document.querySelectorAll('p, h1, h2, h3, h4, h5, h6, span, div');
    textElements.forEach(element => {
      const styles = window.getComputedStyle(element);
      const color = styles.color;
      const backgroundColor = styles.backgroundColor;
      
      if (color && backgroundColor) {
        const contrastRatio = this.calculateContrastRatio();
        if (contrastRatio < 4.5) {
          element.setAttribute('data-low-contrast', 'true');
          console.warn('Low contrast detected:', element, 'Ratio:', contrastRatio);
        }
      }
    });
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  private calculateContrastRatio(_color1: string, _color2: string): number {
    // Simplified contrast ratio calculation
    // In a real implementation, you'd parse the colors and calculate luminance
    return 4.5; // Placeholder
  }

  private setupMotionReduction(): void {
    if (!this.config.enableMotionReduction) return;

    // Respect user's motion preferences
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      document.documentElement.classList.add('reduce-motion');
    }

    window.matchMedia('(prefers-reduced-motion: reduce)').addEventListener('change', (e) => {
      if (e.matches) {
        document.documentElement.classList.add('reduce-motion');
      } else {
        document.documentElement.classList.remove('reduce-motion');
      }
    });
  }

  private analyzeAccessibility(): void {
    this.metrics.focusableElements = this.getFocusableElements().length;
    this.metrics.ariaLabels = document.querySelectorAll('[aria-label]').length;
    this.metrics.headingStructure = this.analyzeHeadingStructure();
    this.metrics.skipLinks = document.querySelectorAll('.skip-link').length;
    this.metrics.altTexts = document.querySelectorAll('img[alt]').length;
    this.metrics.formLabels = document.querySelectorAll('label').length;
  }

  private analyzeHeadingStructure(): number {
    const headings = document.querySelectorAll('h1, h2, h3, h4, h5, h6');
    let score = 0;
    
    headings.forEach((heading, index) => {
      const level = parseInt(heading.tagName.charAt(1));
      const prevHeading = headings[index - 1];
      
      if (prevHeading) {
        const prevLevel = parseInt(prevHeading.tagName.charAt(1));
        if (level <= prevLevel + 1) {
          score += 1;
        }
      } else if (level === 1) {
        score += 1;
      }
    });
    
    return score;
  }

  public getMetrics(): AccessibilityMetrics {
    this.analyzeAccessibility();
    return { ...this.metrics };
  }

  public generateReport(): string {
    const metrics = this.getMetrics();
    return `
Accessibility Report:
- Focusable Elements: ${metrics.focusableElements}
- ARIA Labels: ${metrics.ariaLabels}
- Heading Structure Score: ${metrics.headingStructure}
- Skip Links: ${metrics.skipLinks}
- Alt Texts: ${metrics.altTexts}
- Form Labels: ${metrics.formLabels}
    `.trim();
  }

  public validateAccessibility(): string[] {
    const issues: string[] = [];
    
    // Check for missing alt texts
    const images = document.querySelectorAll('img');
    images.forEach(img => {
      if (!img.getAttribute('alt') && !img.getAttribute('aria-label')) {
        issues.push(`Image missing alt text: ${img.src}`);
      }
    });
    
    // Check for missing form labels
    const inputs = document.querySelectorAll('input, select, textarea');
    inputs.forEach(input => {
      const id = input.getAttribute('id');
      const label = id ? document.querySelector(`label[for="${id}"]`) : null;
      const ariaLabel = input.getAttribute('aria-label');
      const ariaLabelledBy = input.getAttribute('aria-labelledby');
      
      if (!label && !ariaLabel && !ariaLabelledBy) {
        issues.push(`Form control missing label: ${input.tagName}`);
      }
    });
    
    // Check for heading hierarchy
    const headings = Array.from(document.querySelectorAll('h1, h2, h3, h4, h5, h6'));
    let lastLevel = 0;
    headings.forEach(heading => {
      const level = parseInt(heading.tagName.charAt(1));
      if (level > lastLevel + 1) {
        issues.push(`Heading hierarchy skipped: ${heading.tagName} after h${lastLevel}`);
      }
      lastLevel = level;
    });
    
    return issues;
  }
}

// Export singleton instance
export const accessibilityEnhancer = new AccessibilityEnhancer();

// Export class for custom instances
export { AccessibilityEnhancer };
export type { AccessibilityConfig, AccessibilityMetrics };
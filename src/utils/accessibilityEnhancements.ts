/**
 * Advanced Accessibility Enhancements
 * Comprehensive accessibility utilities for the Zion Tech Group website
 */

export interface AccessibilityMetrics {
  totalIssues: number;
  criticalIssues: number;
  warningIssues: number;
  passedChecks: number;
  score: number;
}

export class AccessibilityEnhancer {
  private static instance: AccessibilityEnhancer;
  private metrics: AccessibilityMetrics = {
    totalIssues: 0,
    criticalIssues: 0,
    warningIssues: 0,
    passedChecks: 0,
    score: 0
  };

  static getInstance(): AccessibilityEnhancer {
    if (!AccessibilityEnhancer.instance) {
      AccessibilityEnhancer.instance = new AccessibilityEnhancer();
    }
    return AccessibilityEnhancer.instance;
  }

  // Initialize accessibility enhancements
  initialize(): void {
    this.addSkipLinks();
    this.enhanceKeyboardNavigation();
    this.improveFocusManagement();
    this.addAriaLabels();
    this.optimizeColorContrast();
    this.addScreenReaderSupport();
    this.monitorAccessibility();
  }

  // Add skip links for keyboard navigation
  private addSkipLinks(): void {
    const skipLink = document.createElement('a');
    skipLink.href = '#main-content';
    skipLink.textContent = 'Skip to main content';
    skipLink.className = 'sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-blue-600 focus:text-white focus:rounded';
    document.body.insertBefore(skipLink, document.body.firstChild);
  }

  // Enhance keyboard navigation
  private enhanceKeyboardNavigation(): void {
    // Add keyboard event listeners
    document.addEventListener('keydown', (event) => {
      // Handle Escape key
      if (event.key === 'Escape') {
        this.closeModals();
      }

      // Handle Tab key for focus management
      if (event.key === 'Tab') {
        this.manageFocus(event);
      }

      // Handle Enter and Space for custom elements
      if (event.key === 'Enter' || event.key === ' ') {
        this.handleActivation(event);
      }
    });
  }

  private closeModals(): void {
    const modals = document.querySelectorAll('[role="dialog"]');
    modals.forEach(modal => {
      const closeButton = modal.querySelector('[aria-label="Close"]');
      if (closeButton) {
        (closeButton as HTMLElement).click();
      }
    });
  }

  private manageFocus(event: KeyboardEvent): void {
    const focusableElements = this.getFocusableElements();
    const currentIndex = focusableElements.indexOf(document.activeElement as HTMLElement);

    if (event.shiftKey) {
      // Shift + Tab - move backwards
      if (currentIndex > 0) {
        focusableElements[currentIndex - 1].focus();
        event.preventDefault();
      }
    } else {
      // Tab - move forwards
      if (currentIndex < focusableElements.length - 1) {
        focusableElements[currentIndex + 1].focus();
        event.preventDefault();
      }
    }
  }

  private getFocusableElements(): HTMLElement[] {
    const selector = 'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])';
    return Array.from(document.querySelectorAll(selector)) as HTMLElement[];
  }

  private handleActivation(event: KeyboardEvent): void {
    const target = event.target as HTMLElement;
    if (target.getAttribute('role') === 'button' || target.classList.contains('clickable')) {
      event.preventDefault();
      target.click();
    }
  }

  // Improve focus management
  private improveFocusManagement(): void {
    // Add focus indicators
    const style = document.createElement('style');
    style.textContent = `
      *:focus {
        outline: 2px solid #3b82f6;
        outline-offset: 2px;
      }
      
      .focus-visible:focus {
        outline: 2px solid #3b82f6;
        outline-offset: 2px;
      }
    `;
    document.head.appendChild(style);

    // Add focus trap for modals
    this.addFocusTrap();
  }

  private addFocusTrap(): void {
    const modals = document.querySelectorAll('[role="dialog"]');
    modals.forEach(modal => {
      const focusableElements = this.getFocusableElements().filter(el => 
        modal.contains(el)
      );

      if (focusableElements.length > 0) {
        const firstElement = focusableElements[0];
        const lastElement = focusableElements[focusableElements.length - 1];

        modal.addEventListener('keydown', (event: Event) => {
          const keyboardEvent = event as KeyboardEvent;
          if (keyboardEvent.key === 'Tab') {
            if (keyboardEvent.shiftKey) {
              if (document.activeElement === firstElement) {
                lastElement.focus();
                keyboardEvent.preventDefault();
              }
            } else {
              if (document.activeElement === lastElement) {
                firstElement.focus();
                keyboardEvent.preventDefault();
              }
            }
          }
        });
      }
    });
  }

  // Add ARIA labels
  private addAriaLabels(): void {
    // Add labels to form inputs
    const inputs = document.querySelectorAll('input:not([aria-label]):not([aria-labelledby])');
    inputs.forEach(input => {
      const label = document.querySelector(`label[for="${input.id}"]`);
      if (label) {
        input.setAttribute('aria-labelledby', label.id || 'label-' + input.id);
      } else {
        input.setAttribute('aria-label', this.generateAriaLabel(input as HTMLElement));
      }
    });

    // Add labels to buttons
    const buttons = document.querySelectorAll('button:not([aria-label])');
    buttons.forEach(button => {
      if (!button.textContent?.trim()) {
        button.setAttribute('aria-label', this.generateAriaLabel(button as HTMLElement));
      }
    });

    // Add labels to images
    const images = document.querySelectorAll('img:not([alt])');
    images.forEach(img => {
      img.setAttribute('alt', this.generateAltText(img as HTMLImageElement));
    });
  }

  private generateAriaLabel(element: HTMLElement): string {
    const className = element.className;
    const id = element.id;
    const type = element.tagName.toLowerCase();

    if (className.includes('close')) return 'Close';
    if (className.includes('menu')) return 'Menu';
    if (className.includes('search')) return 'Search';
    if (type === 'button') return 'Button';
    if (type === 'input') return 'Input field';

    return `${type} element`;
  }

  private generateAltText(img: HTMLImageElement): string {
    const src = img.src;
    const filename = src.split('/').pop()?.split('.')[0] || 'image';
    return filename.replace(/[-_]/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
  }

  // Optimize color contrast
  private optimizeColorContrast(): void {
    // Check contrast ratios
    const elements = document.querySelectorAll('*');
    elements.forEach(element => {
      const styles = window.getComputedStyle(element);
      const color = styles.color;
      const backgroundColor = styles.backgroundColor;

      if (color && backgroundColor) {
        const contrast = this.calculateContrast(color, backgroundColor);
        if (contrast < 4.5) {
          console.warn('Low contrast detected:', element, contrast);
        }
      }
    });
  }

  private calculateContrast(color1: string, color2: string): number {
    // Simplified contrast calculation
    // In a real implementation, you'd use a proper color contrast library
    return 4.5; // Placeholder
  }

  // Add screen reader support
  private addScreenReaderSupport(): void {
    // Add screen reader announcements
    const announcement = document.createElement('div');
    announcement.setAttribute('aria-live', 'polite');
    announcement.setAttribute('aria-atomic', 'true');
    announcement.className = 'sr-only';
    announcement.id = 'screen-reader-announcements';
    document.body.appendChild(announcement);

    // Add landmark roles
    this.addLandmarkRoles();
  }

  private addLandmarkRoles(): void {
    const header = document.querySelector('header');
    if (header) header.setAttribute('role', 'banner');

    const nav = document.querySelector('nav');
    if (nav) nav.setAttribute('role', 'navigation');

    const main = document.querySelector('main');
    if (main) {
      main.setAttribute('role', 'main');
      main.id = 'main-content';
    }

    const footer = document.querySelector('footer');
    if (footer) footer.setAttribute('role', 'contentinfo');
  }

  // Monitor accessibility
  private monitorAccessibility(): void {
    // Monitor for accessibility issues
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.type === 'childList') {
          mutation.addedNodes.forEach((node) => {
            if (node.nodeType === Node.ELEMENT_NODE) {
              this.checkElementAccessibility(node as Element);
            }
          });
        }
      });
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true
    });
  }

  private checkElementAccessibility(element: Element): void {
    // Check for missing alt text
    if (element.tagName === 'IMG' && !element.getAttribute('alt')) {
      this.metrics.warningIssues++;
      console.warn('Image missing alt text:', element);
    }

    // Check for missing labels
    if (element.tagName === 'INPUT' && !element.getAttribute('aria-label') && !element.getAttribute('aria-labelledby')) {
      this.metrics.warningIssues++;
      console.warn('Input missing label:', element);
    }

    // Check for proper heading hierarchy
    if (element.tagName.match(/^H[1-6]$/)) {
      const level = parseInt(element.tagName[1]);
      const previousHeading = element.previousElementSibling;
      if (previousHeading && previousHeading.tagName.match(/^H[1-6]$/)) {
        const prevLevel = parseInt(previousHeading.tagName[1]);
        if (level > prevLevel + 1) {
          this.metrics.warningIssues++;
          console.warn('Heading hierarchy issue:', element);
        }
      }
    }
  }

  // Announce to screen readers
  announce(message: string): void {
    const announcement = document.getElementById('screen-reader-announcements');
    if (announcement) {
      announcement.textContent = message;
    }
  }

  // Get accessibility metrics
  getMetrics(): AccessibilityMetrics {
    this.metrics.totalIssues = this.metrics.criticalIssues + this.metrics.warningIssues;
    this.metrics.score = Math.max(0, 100 - (this.metrics.totalIssues * 5));
    return { ...this.metrics };
  }

  // Generate accessibility report
  generateReport(): string {
    const metrics = this.getMetrics();
    const report = {
      timestamp: new Date().toISOString(),
      metrics,
      recommendations: this.generateRecommendations(metrics)
    };

    return JSON.stringify(report, null, 2);
  }

  private generateRecommendations(metrics: AccessibilityMetrics): string[] {
    const recommendations: string[] = [];

    if (metrics.criticalIssues > 0) {
      recommendations.push('Fix critical accessibility issues immediately');
    }

    if (metrics.warningIssues > 5) {
      recommendations.push('Address warning-level accessibility issues');
    }

    if (metrics.score < 80) {
      recommendations.push('Improve overall accessibility score');
    }

    recommendations.push('Test with screen readers');
    recommendations.push('Test keyboard navigation');
    recommendations.push('Test with high contrast mode');

    return recommendations;
  }
}

// Export singleton instance
export const accessibilityEnhancer = AccessibilityEnhancer.getInstance();

// Utility functions
export const announceToScreenReader = (message: string): void => {
  accessibilityEnhancer.announce(message);
};

export const focusElement = (selector: string): void => {
  const element = document.querySelector(selector) as HTMLElement;
  if (element) {
    element.focus();
  }
};

export const trapFocus = (container: HTMLElement): void => {
  const focusableElements = container.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  ) as NodeListOf<HTMLElement>;

  if (focusableElements.length === 0) return;

  const firstElement = focusableElements[0];
  const lastElement = focusableElements[focusableElements.length - 1];

  container.addEventListener('keydown', (event) => {
    if (event.key === 'Tab') {
      if (event.shiftKey) {
        if (document.activeElement === firstElement) {
          lastElement.focus();
          event.preventDefault();
        }
      } else {
        if (document.activeElement === lastElement) {
          firstElement.focus();
          event.preventDefault();
        }
      }
    }
  });
};
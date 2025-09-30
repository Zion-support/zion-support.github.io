/**
 * Advanced Accessibility Enhancement System
 * Provides comprehensive accessibility features and monitoring
 */

export interface AccessibilityConfig {
  keyboardNavigation: boolean;
  screenReaderSupport: boolean;
  highContrast: boolean;
  reducedMotion: boolean;
  focusManagement: boolean;
  ariaLabels: boolean;
  colorContrast: 'AA' | 'AAA';
}

export interface AccessibilityMetric {
  type: 'color_contrast' | 'keyboard_navigation' | 'aria_labels' | 'focus_management';
  score: number;
  issues: string[];
  timestamp: number;
}

class AccessibilityEnhancer {
  private config: AccessibilityConfig;
  private metrics: AccessibilityMetric[] = [];
  private isInitialized = false;
  private focusTrapElements: HTMLElement[] = [];

  constructor() {
    this.config = this.getDefaultConfig();
  }

  private getDefaultConfig(): AccessibilityConfig {
    return {
      keyboardNavigation: true,
      screenReaderSupport: true,
      highContrast: false,
      reducedMotion: false,
      focusManagement: true,
      ariaLabels: true,
      colorContrast: 'AA'
    };
  }

  public initialize(): void {
    if (this.isInitialized || typeof window === 'undefined') return;
    
    this.isInitialized = true;
    this.setupKeyboardNavigation();
    this.setupFocusManagement();
    this.setupAriaLabels();
    this.setupColorContrast();
    this.setupReducedMotion();
    this.observeAccessibility();
  }

  private setupKeyboardNavigation(): void {
    if (!this.config.keyboardNavigation) return;

    document.addEventListener('keydown', (event) => {
      // Skip to main content
      if (event.key === 'Tab' && event.shiftKey && document.activeElement === document.body) {
        const skipLink = document.querySelector('[data-skip-link]');
        if (skipLink) {
          (skipLink as HTMLElement).focus();
          event.preventDefault();
        }
      }

      // Escape key handling
      if (event.key === 'Escape') {
        const modal = document.querySelector('[role="dialog"][aria-hidden="false"]');
        if (modal) {
          this.closeModal(modal as HTMLElement);
        }
      }

      // Arrow key navigation for menus
      if (event.key === 'ArrowDown' || event.key === 'ArrowUp') {
        const menu = document.querySelector('[role="menu"]:focus-within') as HTMLElement | null;
        if (menu) {
          this.handleMenuNavigation(event as KeyboardEvent, menu);
        }
      }
    });
  }

  private setupFocusManagement(): void {
    if (!this.config.focusManagement) return;

    // Trap focus in modals
    document.addEventListener('keydown', (event) => {
      if (event.key === 'Tab') {
        const modal = document.querySelector('[role="dialog"][aria-hidden="false"]') as HTMLElement | null;
        if (modal) {
          this.trapFocus(event as KeyboardEvent, modal);
        }
      }
    });

    // Restore focus after modal closes
    document.addEventListener('click', (event) => {
      const target = event.target as HTMLElement;
      if (target.hasAttribute('data-close-modal')) {
        this.restoreFocus();
      }
    });
  }

  private setupAriaLabels(): void {
    if (!this.config.ariaLabels) return;

    // Add aria-labels to interactive elements without labels
    const interactiveElements = document.querySelectorAll('button, a, input, select, textarea');
    
    interactiveElements.forEach(element => {
      const el = element as HTMLElement;
      if (!el.getAttribute('aria-label') && !el.getAttribute('aria-labelledby')) {
        const text = el.textContent?.trim();
        if (!text || text.length < 3) {
          el.setAttribute('aria-label', `Interactive element`);
        }
      }
    });

    // Add role attributes where needed
    const clickableElements = document.querySelectorAll('[onclick], [data-action]');
    clickableElements.forEach(element => {
      const el = element as HTMLElement;
      if (!el.getAttribute('role')) {
        el.setAttribute('role', 'button');
      }
    });
  }

  private setupColorContrast(): void {
    if (typeof window === 'undefined') return;

    // Check color contrast ratios
    const elements = document.querySelectorAll('p, h1, h2, h3, h4, h5, h6, span, div');
    const contrastIssues: string[] = [];

    elements.forEach(element => {
      const el = element as HTMLElement;
      const computedStyle = window.getComputedStyle(el);
      const color = computedStyle.color;
      const backgroundColor = computedStyle.backgroundColor;
      
      if (color && backgroundColor) {
        const ratio = this.calculateContrastRatio(color, backgroundColor);
        const requiredRatio = this.config.colorContrast === 'AAA' ? 7 : 4.5;
        
        if (ratio < requiredRatio) {
          contrastIssues.push(`Low contrast on ${el.tagName}: ${ratio.toFixed(2)}:1`);
        }
      }
    });

    if (contrastIssues.length > 0) {
      this.recordMetric({
        type: 'color_contrast',
        score: Math.max(0, 100 - (contrastIssues.length * 10)),
        issues: contrastIssues,
        timestamp: Date.now()
      });
    }
  }

  private setupReducedMotion(): void {
    if (typeof window === 'undefined') return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    
    if (prefersReducedMotion) {
      // Disable animations
      const style = document.createElement('style');
      style.textContent = `
        *, *::before, *::after {
          animation-duration: 0.01ms !important;
          animation-iteration-count: 1 !important;
          transition-duration: 0.01ms !important;
          scroll-behavior: auto !important;
        }
      `;
      document.head.appendChild(style);
    }
  }

  private observeAccessibility(): void {
    if (typeof window === 'undefined') return;

    // Monitor focus changes
    document.addEventListener('focusin', (event) => {
      const target = event.target as HTMLElement;
      if (target.tabIndex < 0 && target.hasAttribute('tabindex')) {
        console.warn('Element with negative tabindex received focus:', target);
      }
    });

    // Monitor aria-label changes
    const observer = new MutationObserver((mutations: MutationRecord[]) => {
      mutations.forEach((mutation) => {
        if (mutation.type === 'attributes' && mutation.attributeName === 'aria-label') {
          const element = mutation.target as Element;
          const el = element as HTMLElement;
          if (!el.getAttribute('aria-label')) {
            console.warn('Element lost aria-label:', el);
          }
        }
      });
    });

    observer.observe(document.body, {
      attributes: true,
      attributeFilter: ['aria-label', 'aria-labelledby', 'role']
    });
  }

  private handleMenuNavigation(event: KeyboardEvent, menu: HTMLElement): void {
    const menuItems = Array.from(menu.querySelectorAll('[role="menuitem"]'));
    const currentIndex = menuItems.indexOf(document.activeElement as HTMLElement);
    
    if (currentIndex === -1) return;

    let nextIndex: number;
    if (event.key === 'ArrowDown') {
      nextIndex = (currentIndex + 1) % menuItems.length;
    } else {
      nextIndex = currentIndex === 0 ? menuItems.length - 1 : currentIndex - 1;
    }

    (menuItems[nextIndex] as HTMLElement).focus();
    event.preventDefault();
  }

  private trapFocus(event: KeyboardEvent, modal: HTMLElement): void {
    const focusableElements = modal.querySelectorAll(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );
    
    if (focusableElements.length === 0) return;

    const firstElement = focusableElements[0] as HTMLElement;
    const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

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

  private closeModal(modal: HTMLElement): void {
    modal.setAttribute('aria-hidden', 'true');
    modal.style.display = 'none';
    this.restoreFocus();
  }

  private restoreFocus(): void {
    const lastFocusedElement = document.querySelector('[data-last-focused]') as HTMLElement;
    if (lastFocusedElement) {
      lastFocusedElement.focus();
      lastFocusedElement.removeAttribute('data-last-focused');
    }
  }

  private calculateContrastRatio(color1: string, color2: string): number {
    // Simplified contrast ratio calculation
    // In a real implementation, you'd convert colors to RGB and calculate luminance
    return 4.5; // Placeholder
  }

  private recordMetric(metric: AccessibilityMetric): void {
    this.metrics.push(metric);
    
    // Keep only last 50 metrics
    if (this.metrics.length > 50) {
      this.metrics = this.metrics.slice(-50);
    }
  }

  public getMetrics(): AccessibilityMetric[] {
    return [...this.metrics];
  }

  public getAccessibilityScore(): number {
    if (this.metrics.length === 0) return 100;
    
    const totalScore = this.metrics.reduce((sum, metric) => sum + metric.score, 0);
    return Math.round(totalScore / this.metrics.length);
  }

  public runAccessibilityAudit(): {
    score: number;
    issues: string[];
    recommendations: string[];
  } {
    const issues: string[] = [];
    const recommendations: string[] = [];

    // Check for missing alt attributes
    const images = document.querySelectorAll('img');
    images.forEach(img => {
      const imageEl = img as HTMLImageElement;
      if (!imageEl.getAttribute('alt')) {
        issues.push(`Image missing alt attribute: ${imageEl.src}`);
        recommendations.push('Add descriptive alt text to images');
      }
    });

    // Check for proper heading hierarchy
    const headings = document.querySelectorAll('h1, h2, h3, h4, h5, h6');
    let lastLevel = 0;
    headings.forEach(heading => {
      const level = parseInt((heading as HTMLElement).tagName.charAt(1));
      if (level > lastLevel + 1) {
        issues.push(`Heading hierarchy skip: ${heading.tagName}`);
        recommendations.push('Maintain proper heading hierarchy (h1 > h2 > h3...)');
      }
      lastLevel = level;
    });

    // Check for form labels
    const inputs = document.querySelectorAll('input, select, textarea');
    inputs.forEach(input => {
      const el = input as HTMLElement;
      const id = el.getAttribute('id');
      const label = id ? document.querySelector(`label[for="${id}"]`) : null;
      const ariaLabel = el.getAttribute('aria-label');
      
      if (!label && !ariaLabel) {
        issues.push(`Form input missing label: ${(el as HTMLElement).tagName}`);
        recommendations.push('Add labels or aria-label to form inputs');
      }
    });

    const score = Math.max(0, 100 - (issues.length * 5));
    
    return {
      score,
      issues,
      recommendations: [...new Set(recommendations)]
    };
  }

  public updateConfig(newConfig: Partial<AccessibilityConfig>): void {
    this.config = { ...this.config, ...newConfig };
  }

  public disconnect(): void {
    this.isInitialized = false;
    this.metrics = [];
    this.focusTrapElements = [];
  }
}

// Export singleton instance
export const accessibilityEnhancer = new AccessibilityEnhancer();

// Auto-initialize on DOM ready
if (typeof window !== 'undefined') {
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
      accessibilityEnhancer.initialize();
    });
  } else {
    accessibilityEnhancer.initialize();
  }
}

/**
 * Enhanced Accessibility System
 * Comprehensive accessibility monitoring and improvements
 */

export interface AccessibilityIssue {
  type: 'missing_alt' | 'missing_aria' | 'color_contrast' | 'keyboard_navigation' | 'focus_management' | 'semantic_html';
  severity: 'low' | 'medium' | 'high' | 'critical';
  element: HTMLElement | null;
  message: string;
  recommendation: string;
  selector?: string;
}

export interface AccessibilityMetrics {
  totalIssues: number;
  issuesByType: Record<string, number>;
  issuesBySeverity: Record<string, number>;
  recentIssues: AccessibilityIssue[];
  score: number;
  recommendations: string[];
}

export interface AccessibilityConfig {
  enableAutoFix: boolean;
  enableMonitoring: boolean;
  enableKeyboardNavigation: boolean;
  enableScreenReaderSupport: boolean;
  minContrastRatio: number;
  focusOutline: boolean;
  skipLinks: boolean;
}

class EnhancedAccessibilitySystem {
  private issues: AccessibilityIssue[] = [];
  private config: AccessibilityConfig;
  private isInitialized = false;
  private observer: MutationObserver | null = null;
  private keyboardHandler: ((event: KeyboardEvent) => void) | null = null;

  constructor() {
    this.config = {
      enableAutoFix: true,
      enableMonitoring: true,
      enableKeyboardNavigation: true,
      enableScreenReaderSupport: true,
      minContrastRatio: 4.5,
      focusOutline: true,
      skipLinks: true
    };
  }

  /**
   * Initialize the accessibility system
   */
  initialize(): void {
    if (this.isInitialized) return;

    this.setupKeyboardNavigation();
    this.setupFocusManagement();
    this.setupSkipLinks();
    this.setupScreenReaderSupport();
    this.setupColorContrast();
    this.setupMonitoring();
    this.scanForIssues();
    this.isInitialized = true;

    console.log('✅ Enhanced Accessibility System initialized');
  }

  /**
   * Setup keyboard navigation
   */
  private setupKeyboardNavigation(): void {
    if (!this.config.enableKeyboardNavigation) return;

    this.keyboardHandler = (event: KeyboardEvent) => {
      // Handle tab navigation
      if (event.key === 'Tab') {
        this.ensureFocusVisibility();
      }

      // Handle escape key
      if (event.key === 'Escape') {
        this.handleEscapeKey();
      }

      // Handle arrow keys for custom components
      if (['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight'].includes(event.key)) {
        this.handleArrowKeys(event);
      }

      // Handle Enter and Space for interactive elements
      if (event.key === 'Enter' || event.key === ' ') {
        this.handleActivation(event);
      }
    };

    document.addEventListener('keydown', this.keyboardHandler);
  }

  /**
   * Setup focus management
   */
  private setupFocusManagement(): void {
    // Ensure focus is visible
    this.ensureFocusVisibility();

    // Trap focus in modals
    this.setupFocusTrap();

    // Restore focus after navigation
    this.setupFocusRestore();
  }

  /**
   * Setup skip links
   */
  private setupSkipLinks(): void {
    if (!this.config.skipLinks) return;

    // Create skip link if not exists
    if (!document.querySelector('.skip-link')) {
      const skipLink = document.createElement('a');
      skipLink.className = 'skip-link';
      skipLink.href = '#main-content';
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

  /**
   * Setup screen reader support
   */
  private setupScreenReaderSupport(): void {
    if (!this.config.enableScreenReaderSupport) return;

    // Add ARIA live region for announcements
    if (!document.querySelector('#aria-live-region')) {
      const liveRegion = document.createElement('div');
      liveRegion.id = 'aria-live-region';
      liveRegion.setAttribute('aria-live', 'polite');
      liveRegion.setAttribute('aria-atomic', 'true');
      liveRegion.style.cssText = `
        position: absolute;
        left: -10000px;
        width: 1px;
        height: 1px;
        overflow: hidden;
      `;
      document.body.appendChild(liveRegion);
    }

    // Enhance form labels
    this.enhanceFormLabels();

    // Add role attributes
    this.addRoleAttributes();
  }

  /**
   * Setup color contrast monitoring
   */
  private setupColorContrast(): void {
    // Monitor color contrast for text elements
    const textElements = document.querySelectorAll('p, span, div, h1, h2, h3, h4, h5, h6, a, button');
    
    textElements.forEach(element => {
      this.checkColorContrast(element as HTMLElement);
    });
  }

  /**
   * Setup monitoring
   */
  private setupMonitoring(): void {
    if (!this.config.enableMonitoring) return;

    // Monitor DOM changes
    this.observer = new MutationObserver((mutations) => {
      mutations.forEach(mutation => {
        if (mutation.type === 'childList') {
          mutation.addedNodes.forEach(node => {
            if (node.nodeType === Node.ELEMENT_NODE) {
              this.scanElement(node as HTMLElement);
            }
          });
        }
      });
    });

    this.observer.observe(document.body, {
      childList: true,
      subtree: true
    });
  }

  /**
   * Scan for accessibility issues
   */
  scanForIssues(): void {
    this.issues = [];

    // Scan images
    this.scanImages();

    // Scan forms
    this.scanForms();

    // Scan interactive elements
    this.scanInteractiveElements();

    // Scan headings
    this.scanHeadings();

    // Scan landmarks
    this.scanLandmarks();

    // Auto-fix issues if enabled
    if (this.config.enableAutoFix) {
      this.autoFixIssues();
    }
  }

  /**
   * Scan images for accessibility issues
   */
  private scanImages(): void {
    const images = document.querySelectorAll('img');
    
    images.forEach(img => {
      if (!img.alt && !img.getAttribute('aria-label')) {
        this.addIssue({
          type: 'missing_alt',
          severity: 'high',
          element: img,
          message: 'Image missing alt text',
          recommendation: 'Add descriptive alt text or aria-label',
          selector: this.getElementSelector(img)
        });
      }

      if (img.alt === '') {
        this.addIssue({
          type: 'missing_alt',
          severity: 'medium',
          element: img,
          message: 'Image has empty alt text',
          recommendation: 'Add descriptive alt text or use aria-hidden="true" for decorative images',
          selector: this.getElementSelector(img)
        });
      }
    });
  }

  /**
   * Scan forms for accessibility issues
   */
  private scanForms(): void {
    const inputs = document.querySelectorAll('input, textarea, select');
    
    inputs.forEach(input => {
      const element = input as HTMLInputElement;
      
      // Check for labels
      if (!element.id || !document.querySelector(`label[for="${element.id}"]`)) {
        this.addIssue({
          type: 'missing_aria',
          severity: 'high',
          element: element,
          message: 'Form input missing label',
          recommendation: 'Add a label element or aria-label attribute',
          selector: this.getElementSelector(element)
        });
      }

      // Check for required fields
      if (element.required && !element.getAttribute('aria-required')) {
        this.addIssue({
          type: 'missing_aria',
          severity: 'medium',
          element: element,
          message: 'Required field missing aria-required',
          recommendation: 'Add aria-required="true" to required fields',
          selector: this.getElementSelector(element)
        });
      }
    });
  }

  /**
   * Scan interactive elements
   */
  private scanInteractiveElements(): void {
    const interactiveElements = document.querySelectorAll('button, a, [role="button"], [tabindex]');
    
    interactiveElements.forEach(element => {
      const el = element as HTMLElement;
      
      // Check for accessible names
      if (!el.textContent?.trim() && !el.getAttribute('aria-label') && !el.getAttribute('title')) {
        this.addIssue({
          type: 'missing_aria',
          severity: 'high',
          element: el,
          message: 'Interactive element missing accessible name',
          recommendation: 'Add text content, aria-label, or title attribute',
          selector: this.getElementSelector(el)
        });
      }

      // Check for keyboard accessibility
      if (el.getAttribute('tabindex') === '-1' && !el.getAttribute('aria-hidden')) {
        this.addIssue({
          type: 'keyboard_navigation',
          severity: 'medium',
          element: el,
          message: 'Element is not keyboard accessible',
          recommendation: 'Remove tabindex="-1" or add aria-hidden="true"',
          selector: this.getElementSelector(el)
        });
      }
    });
  }

  /**
   * Scan headings
   */
  private scanHeadings(): void {
    const headings = document.querySelectorAll('h1, h2, h3, h4, h5, h6, [role="heading"]');
    const headingLevels: number[] = [];
    
    headings.forEach(heading => {
      const level = this.getHeadingLevel(heading as HTMLElement);
      headingLevels.push(level);
      
      if (!heading.textContent?.trim()) {
        this.addIssue({
          type: 'semantic_html',
          severity: 'high',
          element: heading as HTMLElement,
          message: 'Heading element is empty',
          recommendation: 'Add text content to heading',
          selector: this.getElementSelector(heading as HTMLElement)
        });
      }
    });

    // Check heading hierarchy
    this.checkHeadingHierarchy(headingLevels);
  }

  /**
   * Scan landmarks
   */
  private scanLandmarks(): void {
    const landmarks = document.querySelectorAll('main, nav, aside, header, footer, section, article');
    
    if (!document.querySelector('main')) {
      this.addIssue({
        type: 'semantic_html',
        severity: 'medium',
        element: null,
        message: 'Page missing main landmark',
        recommendation: 'Add a main element to identify the primary content'
      });
    }

    landmarks.forEach(landmark => {
      const el = landmark as HTMLElement;
      
      if (!el.getAttribute('aria-label') && !el.getAttribute('aria-labelledby')) {
        // Check if landmark has heading
        const heading = el.querySelector('h1, h2, h3, h4, h5, h6, [role="heading"]');
        if (!heading) {
          this.addIssue({
            type: 'semantic_html',
            severity: 'low',
            element: el,
            message: 'Landmark missing accessible name',
            recommendation: 'Add aria-label, aria-labelledby, or a heading',
            selector: this.getElementSelector(el)
          });
        }
      }
    });
  }

  /**
   * Auto-fix accessibility issues
   */
  private autoFixIssues(): void {
    this.issues.forEach(issue => {
      if (issue.severity === 'low' && issue.element) {
        switch (issue.type) {
          case 'missing_alt':
            if (issue.element.tagName === 'IMG') {
              const img = issue.element as HTMLImageElement;
              if (!img.alt && !img.getAttribute('aria-label')) {
                img.alt = 'Image';
              }
            }
            break;
            
          case 'focus_management':
            if (!issue.element.style.outline) {
              issue.element.style.outline = '2px solid #007cba';
            }
            break;
        }
      }
    });
  }

  /**
   * Ensure focus is visible
   */
  private ensureFocusVisibility(): void {
    if (!this.config.focusOutline) return;

    // Add focus styles if not present
    const style = document.createElement('style');
    style.textContent = `
      *:focus {
        outline: 2px solid #007cba !important;
        outline-offset: 2px !important;
      }
      
      *:focus:not(:focus-visible) {
        outline: none !important;
      }
    `;
    
    if (!document.querySelector('#accessibility-focus-styles')) {
      style.id = 'accessibility-focus-styles';
      document.head.appendChild(style);
    }
  }

  /**
   * Setup focus trap
   */
  private setupFocusTrap(): void {
    // Focus trap for modals (basic implementation)
    const modals = document.querySelectorAll('[role="dialog"], .modal');
    
    modals.forEach(modal => {
      modal.addEventListener('keydown', (event: KeyboardEvent) => {
        if (event.key === 'Tab') {
          this.trapFocus(event, modal as HTMLElement);
        }
      });
    });
  }

  /**
   * Trap focus within element
   */
  private trapFocus(event: KeyboardEvent, container: HTMLElement): void {
    const focusableElements = container.querySelectorAll(
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
   * Setup focus restore
   */
  private setupFocusRestore(): void {
    let lastFocusedElement: HTMLElement | null = null;
    
    document.addEventListener('focusin', (event) => {
      lastFocusedElement = event.target as HTMLElement;
    });
    
    // Store last focused element for restoration
    (window as Record<string, unknown>).__lastFocusedElement = lastFocusedElement;
  }

  /**
   * Handle escape key
   */
  private handleEscapeKey(): void {
    // Close modals, dropdowns, etc.
    const openModals = document.querySelectorAll('[role="dialog"][aria-hidden="false"]');
    openModals.forEach(modal => {
      const closeButton = modal.querySelector('[aria-label*="close"], [aria-label*="Close"]') as HTMLElement;
      if (closeButton) {
        closeButton.click();
      }
    });
  }

  /**
   * Handle arrow keys
   */
  private handleArrowKeys(event: KeyboardEvent): void {
    // Implement arrow key navigation for custom components
    const target = event.target as HTMLElement;
    
    if (target.getAttribute('role') === 'menuitem' || target.closest('[role="menu"]')) {
      this.handleMenuNavigation(event, target);
    }
  }

  /**
   * Handle menu navigation
   */
  private handleMenuNavigation(event: KeyboardEvent, element: HTMLElement): void {
    const menu = element.closest('[role="menu"]');
    if (!menu) return;
    
    const items = Array.from(menu.querySelectorAll('[role="menuitem"]')) as HTMLElement[];
    const currentIndex = items.indexOf(element);
    
    let nextIndex = currentIndex;
    
    if (event.key === 'ArrowDown') {
      nextIndex = (currentIndex + 1) % items.length;
    } else if (event.key === 'ArrowUp') {
      nextIndex = currentIndex === 0 ? items.length - 1 : currentIndex - 1;
    }
    
    if (nextIndex !== currentIndex) {
      event.preventDefault();
      items[nextIndex].focus();
    }
  }

  /**
   * Handle activation
   */
  private handleActivation(event: KeyboardEvent): void {
    const target = event.target as HTMLElement;
    
    if (target.getAttribute('role') === 'button' || target.tagName === 'BUTTON') {
      // Button activation is handled by default
      return;
    }
    
    if (target.getAttribute('role') === 'menuitem') {
      event.preventDefault();
      target.click();
    }
  }

  /**
   * Enhance form labels
   */
  private enhanceFormLabels(): void {
    const inputs = document.querySelectorAll('input, textarea, select');
    
    inputs.forEach(input => {
      const element = input as HTMLInputElement;
      
      if (!element.id) {
        element.id = `input-${Math.random().toString(36).substring(2)}`;
      }
      
      if (!element.getAttribute('aria-describedby')) {
        const errorElement = document.querySelector(`[data-input="${element.id}"]`);
        if (errorElement) {
          element.setAttribute('aria-describedby', errorElement.id);
        }
      }
    });
  }

  /**
   * Add role attributes
   */
  private addRoleAttributes(): void {
    // Add roles to custom components
    const customButtons = document.querySelectorAll('.btn, .button, .custom-button');
    customButtons.forEach(btn => {
      if (!btn.getAttribute('role')) {
        btn.setAttribute('role', 'button');
      }
    });
  }

  /**
   * Check color contrast
   */
  private checkColorContrast(element: HTMLElement): void {
    const styles = window.getComputedStyle(element);
    const color = styles.color;
    const backgroundColor = styles.backgroundColor;
    
    // Basic contrast check (simplified)
    if (color === backgroundColor) {
      this.addIssue({
        type: 'color_contrast',
        severity: 'high',
        element: element,
        message: 'Text and background colors are the same',
        recommendation: 'Use contrasting colors for text and background',
        selector: this.getElementSelector(element)
      });
    }
  }

  /**
   * Scan element for issues
   */
  private scanElement(element: HTMLElement): void {
    if (element.tagName === 'IMG') {
      this.scanImages();
    } else if (['INPUT', 'TEXTAREA', 'SELECT'].includes(element.tagName)) {
      this.scanForms();
    }
  }

  /**
   * Add accessibility issue
   */
  private addIssue(issue: AccessibilityIssue): void {
    this.issues.push(issue);
  }

  /**
   * Get heading level
   */
  private getHeadingLevel(element: HTMLElement): number {
    if (element.tagName.match(/^H[1-6]$/)) {
      return parseInt(element.tagName.substring(1));
    }
    
    const ariaLevel = element.getAttribute('aria-level');
    return ariaLevel ? parseInt(ariaLevel) : 1;
  }

  /**
   * Check heading hierarchy
   */
  private checkHeadingHierarchy(levels: number[]): void {
    let previousLevel = 0;
    
    levels.forEach(level => {
      if (level > previousLevel + 1) {
        this.addIssue({
          type: 'semantic_html',
          severity: 'medium',
          element: null,
          message: `Heading level ${level} follows heading level ${previousLevel}`,
          recommendation: 'Use heading levels in sequence (h1, h2, h3, etc.)'
        });
      }
      previousLevel = level;
    });
  }

  /**
   * Get element selector
   */
  private getElementSelector(element: HTMLElement): string {
    if (element.id) {
      return `#${element.id}`;
    }
    
    if (element.className) {
      return `.${element.className.split(' ').join('.')}`;
    }
    
    return element.tagName.toLowerCase();
  }

  /**
   * Announce to screen readers
   */
  announce(message: string): void {
    const liveRegion = document.getElementById('aria-live-region');
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
  getAccessibilityMetrics(): AccessibilityMetrics {
    const issuesByType = this.issues.reduce((acc, issue) => {
      acc[issue.type] = (acc[issue.type] || 0) + 1;
      return acc;
    }, {} as Record<string, number>);

    const issuesBySeverity = this.issues.reduce((acc, issue) => {
      acc[issue.severity] = (acc[issue.severity] || 0) + 1;
      return acc;
    }, {} as Record<string, number>);

    // Calculate accessibility score (0-100)
    let score = 100;
    score -= (issuesBySeverity.critical || 0) * 20;
    score -= (issuesBySeverity.high || 0) * 10;
    score -= (issuesBySeverity.medium || 0) * 5;
    score -= (issuesBySeverity.low || 0) * 2;

    const recommendations = this.generateRecommendations();

    return {
      totalIssues: this.issues.length,
      issuesByType,
      issuesBySeverity,
      recentIssues: this.issues.slice(0, 20),
      score: Math.max(0, score),
      recommendations
    };
  }

  /**
   * Generate recommendations
   */
  private generateRecommendations(): string[] {
    const recommendations: string[] = [];
    
    const issuesByType = this.issues.reduce((acc, issue) => {
      acc[issue.type] = (acc[issue.type] || 0) + 1;
      return acc;
    }, {} as Record<string, number>);

    if (issuesByType.missing_alt > 0) {
      recommendations.push('Add alt text to all images for screen reader accessibility');
    }
    
    if (issuesByType.missing_aria > 0) {
      recommendations.push('Add ARIA labels and attributes to improve accessibility');
    }
    
    if (issuesByType.color_contrast > 0) {
      recommendations.push('Improve color contrast for better readability');
    }
    
    if (issuesByType.keyboard_navigation > 0) {
      recommendations.push('Ensure all interactive elements are keyboard accessible');
    }
    
    if (recommendations.length === 0) {
      recommendations.push('Great job! No accessibility issues found');
    }
    
    return recommendations;
  }

  /**
   * Update configuration
   */
  updateConfig(newConfig: Partial<AccessibilityConfig>): void {
    this.config = { ...this.config, ...newConfig };
    
    if (this.isInitialized) {
      this.initialize();
    }
  }

  /**
   * Cleanup
   */
  cleanup(): void {
    if (this.observer) {
      this.observer.disconnect();
      this.observer = null;
    }
    
    if (this.keyboardHandler) {
      document.removeEventListener('keydown', this.keyboardHandler);
      this.keyboardHandler = null;
    }
  }
}

// Export singleton instance
export const enhancedAccessibilitySystem = new EnhancedAccessibilitySystem();

// Auto-initialize
if (typeof window !== 'undefined') {
  enhancedAccessibilitySystem.initialize();
}
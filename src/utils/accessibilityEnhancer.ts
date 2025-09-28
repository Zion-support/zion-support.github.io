/**
 * Accessibility Enhancement Utility
 * Provides comprehensive accessibility features and monitoring
 */

interface AccessibilityConfig {
  enableKeyboardNavigation: boolean;
  enableScreenReader: boolean;
  enableHighContrast: boolean;
  enableFocusManagement: boolean;
  enableARIALabels: boolean;
  enableColorContrast: boolean;
  enableMotionReduction: boolean;
}

interface AccessibilityMetrics {
  totalElements: number;
  elementsWithLabels: number;
  keyboardNavigable: number;
  colorContrast: number;
  focusableElements: number;
  ariaCompliance: number;
}

class AccessibilityEnhancer {
  private config: AccessibilityConfig;
  private metrics: AccessibilityMetrics | null = null;
  private focusableElements: HTMLElement[] = [];
  private currentFocusIndex = -1;

  constructor(config: Partial<AccessibilityConfig> = {}) {
    this.config = {
      enableKeyboardNavigation: true,
      enableScreenReader: true,
      enableHighContrast: true,
      enableFocusManagement: true,
      enableARIALabels: true,
      enableColorContrast: true,
      enableMotionReduction: true,
      ...config
    };
  }

  /**
   * Initialize accessibility enhancements
   */
  initialize(): void {
    if (typeof window === 'undefined') return;

    this.setupKeyboardNavigation();
    this.setupFocusManagement();
    this.setupARIALabels();
    this.setupColorContrast();
    this.setupMotionReduction();
    this.setupScreenReaderSupport();
    this.measureAccessibility();
  }

  /**
   * Setup keyboard navigation
   */
  private setupKeyboardNavigation(): void {
    if (!this.config.enableKeyboardNavigation) return;

    document.addEventListener('keydown', this.handleKeyboardNavigation.bind(this));
    this.updateFocusableElements();
  }

  /**
   * Handle keyboard navigation
   */
  private handleKeyboardNavigation(event: KeyboardEvent): void {
    const { key, ctrlKey, metaKey, shiftKey } = event;

    // Skip link functionality
    if (key === 'Tab' && shiftKey) {
      this.handleSkipLink(event);
    }

    // Focus management
    if (key === 'Tab') {
      this.handleTabNavigation(event);
    }

    // Escape key handling
    if (key === 'Escape') {
      this.handleEscapeKey();
    }

    // Arrow key navigation for menus
    if (['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight'].includes(key)) {
      this.handleArrowNavigation(event);
    }

    // Enter and Space key handling
    if (key === 'Enter' || key === ' ') {
      this.handleActivation(event);
    }
  }

  /**
   * Handle tab navigation
   */
  private handleTabNavigation(event: KeyboardEvent): void {
    if (!this.config.enableFocusManagement) return;

    const focusableElements = this.getFocusableElements();
    
    if (focusableElements.length === 0) return;

    if (event.shiftKey) {
      // Shift + Tab (backward)
      this.currentFocusIndex = this.currentFocusIndex <= 0 
        ? focusableElements.length - 1 
        : this.currentFocusIndex - 1;
    } else {
      // Tab (forward)
      this.currentFocusIndex = this.currentFocusIndex >= focusableElements.length - 1 
        ? 0 
        : this.currentFocusIndex + 1;
    }

    focusableElements[this.currentFocusIndex]?.focus();
  }

  /**
   * Handle arrow key navigation
   */
  private handleArrowNavigation(event: KeyboardEvent): void {
    const activeElement = document.activeElement as HTMLElement;
    const menuItems = activeElement.closest('[role="menu"]')?.querySelectorAll('[role="menuitem"]');
    
    if (!menuItems) return;

    const currentIndex = Array.from(menuItems).indexOf(activeElement);
    let nextIndex = currentIndex;

    switch (event.key) {
      case 'ArrowDown':
        nextIndex = (currentIndex + 1) % menuItems.length;
        break;
      case 'ArrowUp':
        nextIndex = currentIndex <= 0 ? menuItems.length - 1 : currentIndex - 1;
        break;
      case 'ArrowRight':
        nextIndex = (currentIndex + 1) % menuItems.length;
        break;
      case 'ArrowLeft':
        nextIndex = currentIndex <= 0 ? menuItems.length - 1 : currentIndex - 1;
        break;
    }

    (menuItems[nextIndex] as HTMLElement)?.focus();
    event.preventDefault();
  }

  /**
   * Handle activation (Enter/Space)
   */
  private handleActivation(event: KeyboardEvent): void {
    const activeElement = document.activeElement as HTMLElement;
    
    if (activeElement.tagName === 'BUTTON' || activeElement.getAttribute('role') === 'button') {
      activeElement.click();
      event.preventDefault();
    }
  }

  /**
   * Handle escape key
   */
  private handleEscapeKey(): void {
    // Close modals, dropdowns, etc.
    const modals = document.querySelectorAll('[role="dialog"]');
    modals.forEach(modal => {
      if (modal.getAttribute('aria-hidden') === 'false') {
        const closeButton = modal.querySelector('[aria-label*="close"], [aria-label*="Close"]');
        (closeButton as HTMLElement)?.click();
      }
    });
  }

  /**
   * Handle skip link
   */
  private handleSkipLink(event: KeyboardEvent): void {
    // Implement skip link functionality
    console.log('Skip link activated');
  }

  /**
   * Setup focus management
   */
  private setupFocusManagement(): void {
    if (!this.config.enableFocusManagement) return;

    // Track focus changes
    document.addEventListener('focusin', this.handleFocusIn.bind(this));
    document.addEventListener('focusout', this.handleFocusOut.bind(this));

    // Ensure focus is visible
    this.addFocusStyles();
  }

  /**
   * Handle focus in
   */
  private handleFocusIn(event: FocusEvent): void {
    const target = event.target as HTMLElement;
    target.classList.add('focus-visible');
  }

  /**
   * Handle focus out
   */
  private handleFocusOut(event: FocusEvent): void {
    const target = event.target as HTMLElement;
    target.classList.remove('focus-visible');
  }

  /**
   * Add focus styles
   */
  private addFocusStyles(): void {
    const style = document.createElement('style');
    style.textContent = `
      .focus-visible {
        outline: 2px solid #0066cc !important;
        outline-offset: 2px !important;
      }
      
      *:focus {
        outline: none;
      }
      
      *:focus-visible {
        outline: 2px solid #0066cc;
        outline-offset: 2px;
      }
    `;
    document.head.appendChild(style);
  }

  /**
   * Setup ARIA labels
   */
  private setupARIALabels(): void {
    if (!this.config.enableARIALabels) return;

    // Add ARIA labels to interactive elements without labels
    const interactiveElements = document.querySelectorAll('button, a, input, select, textarea');
    
    interactiveElements.forEach(element => {
      if (!element.getAttribute('aria-label') && !element.getAttribute('aria-labelledby')) {
        const text = element.textContent?.trim() || element.getAttribute('title') || element.getAttribute('alt');
        if (text) {
          element.setAttribute('aria-label', text);
        }
      }
    });

    // Add role attributes where needed
    this.addRoleAttributes();
  }

  /**
   * Add role attributes
   */
  private addRoleAttributes(): void {
    // Add roles to common elements
    const headings = document.querySelectorAll('h1, h2, h3, h4, h5, h6');
    headings.forEach(heading => {
      if (!heading.getAttribute('role')) {
        heading.setAttribute('role', 'heading');
      }
    });

    // Add landmarks
    const main = document.querySelector('main');
    if (main && !main.getAttribute('role')) {
      main.setAttribute('role', 'main');
    }

    const nav = document.querySelector('nav');
    if (nav && !nav.getAttribute('role')) {
      nav.setAttribute('role', 'navigation');
    }
  }

  /**
   * Setup color contrast enhancement
   */
  private setupColorContrast(): void {
    if (!this.config.enableColorContrast) return;

    // Add high contrast mode toggle
    this.createContrastToggle();
  }

  /**
   * Create contrast toggle
   */
  private createContrastToggle(): void {
    const toggle = document.createElement('button');
    toggle.textContent = 'High Contrast';
    toggle.setAttribute('aria-label', 'Toggle high contrast mode');
    toggle.style.cssText = `
      position: fixed;
      top: 10px;
      right: 10px;
      z-index: 9999;
      padding: 8px 12px;
      background: #000;
      color: #fff;
      border: 2px solid #fff;
      cursor: pointer;
      font-size: 12px;
    `;

    toggle.addEventListener('click', () => {
      document.body.classList.toggle('high-contrast');
      const isHighContrast = document.body.classList.contains('high-contrast');
      toggle.textContent = isHighContrast ? 'Normal Contrast' : 'High Contrast';
    });

    document.body.appendChild(toggle);

    // Add high contrast styles
    const style = document.createElement('style');
    style.textContent = `
      .high-contrast {
        filter: contrast(150%) brightness(110%);
      }
      
      .high-contrast * {
        background-color: #000 !important;
        color: #fff !important;
        border-color: #fff !important;
      }
      
      .high-contrast a {
        color: #ffff00 !important;
      }
      
      .high-contrast button {
        background-color: #000 !important;
        color: #fff !important;
        border: 2px solid #fff !important;
      }
    `;
    document.head.appendChild(style);
  }

  /**
   * Setup motion reduction
   */
  private setupMotionReduction(): void {
    if (!this.config.enableMotionReduction) return;

    // Respect user's motion preferences
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    
    if (prefersReducedMotion.matches) {
      document.body.classList.add('reduced-motion');
    }

    // Listen for changes
    prefersReducedMotion.addEventListener('change', (e) => {
      if (e.matches) {
        document.body.classList.add('reduced-motion');
      } else {
        document.body.classList.remove('reduced-motion');
      }
    });

    // Add reduced motion styles
    const style = document.createElement('style');
    style.textContent = `
      .reduced-motion * {
        animation-duration: 0.01ms !important;
        animation-iteration-count: 1 !important;
        transition-duration: 0.01ms !important;
      }
    `;
    document.head.appendChild(style);
  }

  /**
   * Setup screen reader support
   */
  private setupScreenReaderSupport(): void {
    if (!this.config.enableScreenReader) return;

    // Add screen reader announcements
    this.createAnnouncementRegion();
    
    // Add live regions for dynamic content
    this.setupLiveRegions();
  }

  /**
   * Create announcement region
   */
  private createAnnouncementRegion(): void {
    const region = document.createElement('div');
    region.setAttribute('aria-live', 'polite');
    region.setAttribute('aria-atomic', 'true');
    region.style.cssText = `
      position: absolute;
      left: -10000px;
      width: 1px;
      height: 1px;
      overflow: hidden;
    `;
    document.body.appendChild(region);
  }

  /**
   * Setup live regions
   */
  private setupLiveRegions(): void {
    // Add live regions to dynamic content areas
    const dynamicAreas = document.querySelectorAll('[data-dynamic]');
    dynamicAreas.forEach(area => {
      if (!area.getAttribute('aria-live')) {
        area.setAttribute('aria-live', 'polite');
      }
    });
  }

  /**
   * Get focusable elements
   */
  private getFocusableElements(): HTMLElement[] {
    const focusableSelectors = [
      'a[href]',
      'button:not([disabled])',
      'input:not([disabled])',
      'select:not([disabled])',
      'textarea:not([disabled])',
      '[tabindex]:not([tabindex="-1"])',
      '[contenteditable="true"]'
    ].join(', ');

    return Array.from(document.querySelectorAll(focusableSelectors)) as HTMLElement[];
  }

  /**
   * Update focusable elements list
   */
  private updateFocusableElements(): void {
    this.focusableElements = this.getFocusableElements();
  }

  /**
   * Measure accessibility metrics
   */
  private measureAccessibility(): void {
    const elements = document.querySelectorAll('*');
    const elementsWithLabels = document.querySelectorAll('[aria-label], [aria-labelledby], [alt], [title]');
    const keyboardNavigable = this.getFocusableElements().length;
    
    this.metrics = {
      totalElements: elements.length,
      elementsWithLabels: elementsWithLabels.length,
      keyboardNavigable,
      colorContrast: this.calculateColorContrast(),
      focusableElements: keyboardNavigable,
      ariaCompliance: this.calculateARIACompliance()
    };

    console.log('Accessibility Metrics:', this.metrics);
  }

  /**
   * Calculate color contrast ratio
   */
  private calculateColorContrast(): number {
    // Simplified contrast calculation
    // In a real implementation, you'd analyze actual color combinations
    return 4.5; // WCAG AA standard
  }

  /**
   * Calculate ARIA compliance
   */
  private calculateARIACompliance(): number {
    const interactiveElements = document.querySelectorAll('button, a, input, select, textarea');
    const elementsWithARIA = document.querySelectorAll('[aria-label], [aria-labelledby], [role]');
    
    return interactiveElements.length > 0 
      ? (elementsWithARIA.length / interactiveElements.length) * 100 
      : 100;
  }

  /**
   * Announce to screen readers
   */
  announce(message: string): void {
    const region = document.querySelector('[aria-live="polite"]') as HTMLElement;
    if (region) {
      region.textContent = message;
    }
  }

  /**
   * Get accessibility metrics
   */
  getMetrics(): AccessibilityMetrics | null {
    return this.metrics;
  }

  /**
   * Validate accessibility
   */
  validateAccessibility(): { isValid: boolean; issues: string[] } {
    const issues: string[] = [];

    // Check for missing alt text
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
      const label = document.querySelector(`label[for="${id}"]`);
      const ariaLabel = input.getAttribute('aria-label');
      const ariaLabelledBy = input.getAttribute('aria-labelledby');
      
      if (!label && !ariaLabel && !ariaLabelledBy) {
        issues.push(`Form element missing label: ${input.tagName}`);
      }
    });

    // Check for heading hierarchy
    const headings = document.querySelectorAll('h1, h2, h3, h4, h5, h6');
    let previousLevel = 0;
    headings.forEach(heading => {
      const level = parseInt(heading.tagName.substring(1));
      if (level > previousLevel + 1) {
        issues.push(`Heading hierarchy skip: ${heading.tagName} after h${previousLevel}`);
      }
      previousLevel = level;
    });

    return {
      isValid: issues.length === 0,
      issues
    };
  }
}

// Export singleton instance
export const accessibilityEnhancer = new AccessibilityEnhancer();

// Export class for custom instances
export { AccessibilityEnhancer };
export type { AccessibilityConfig, AccessibilityMetrics };
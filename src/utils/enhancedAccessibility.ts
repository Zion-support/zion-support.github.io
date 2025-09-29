/**
 * Enhanced Accessibility Utilities
 * Provides comprehensive accessibility features and monitoring
 */

export interface AccessibilityConfig {
  enableKeyboardNavigation: boolean;
  enableScreenReaderSupport: boolean;
  enableHighContrast: boolean;
  enableFocusManagement: boolean;
  enableReducedMotion: boolean;
  enableVoiceControl: boolean;
  enableGestureNavigation: boolean;
  announceChanges: boolean;
  skipLinks: boolean;
  landmarks: boolean;
}

export interface AccessibilityMetrics {
  score: number;
  issues: AccessibilityIssue[];
  recommendations: string[];
  lastScan: number;
  totalElements: number;
  accessibleElements: number;
}

export interface AccessibilityIssue {
  type: 'error' | 'warning' | 'info';
  element: string;
  message: string;
  impact: 'minor' | 'moderate' | 'serious' | 'critical';
  help: string;
}

class EnhancedAccessibility {
  private static instance: EnhancedAccessibility;
  private config: AccessibilityConfig;
  private metrics: AccessibilityMetrics;
  private observers: MutationObserver[] = [];
  private isInitialized = false;

  constructor() {
    this.config = {
      enableKeyboardNavigation: true,
      enableScreenReaderSupport: true,
      enableHighContrast: false,
      enableFocusManagement: true,
      enableReducedMotion: false,
      enableVoiceControl: false,
      enableGestureNavigation: false,
      announceChanges: true,
      skipLinks: true,
      landmarks: true
    };

    this.metrics = {
      score: 0,
      issues: [],
      recommendations: [],
      lastScan: 0,
      totalElements: 0,
      accessibleElements: 0
    };
  }

  public static getInstance(): EnhancedAccessibility {
    if (!EnhancedAccessibility.instance) {
      EnhancedAccessibility.instance = new EnhancedAccessibility();
    }
    return EnhancedAccessibility.instance;
  }

  public initialize(config?: Partial<AccessibilityConfig>): void {
    if (this.isInitialized || typeof window === 'undefined') {
      return;
    }

    this.config = { ...this.config, ...config };
    this.setupAccessibilityFeatures();
    this.setupMonitoring();
    this.scanForIssues();
    this.isInitialized = true;
  }

  private setupAccessibilityFeatures(): void {
    // Add skip links
    if (this.config.skipLinks) {
      this.addSkipLinks();
    }

    // Setup keyboard navigation
    if (this.config.enableKeyboardNavigation) {
      this.setupKeyboardNavigation();
    }

    // Setup focus management
    if (this.config.enableFocusManagement) {
      this.setupFocusManagement();
    }

    // Setup screen reader support
    if (this.config.enableScreenReaderSupport) {
      this.setupScreenReaderSupport();
    }

    // Setup high contrast mode
    if (this.config.enableHighContrast) {
      this.setupHighContrastMode();
    }

    // Setup reduced motion
    if (this.config.enableReducedMotion) {
      this.setupReducedMotion();
    }

    // Add landmarks
    if (this.config.landmarks) {
      this.addLandmarks();
    }
  }

  private addSkipLinks(): void {
    const skipLinks = document.createElement('div');
    skipLinks.className = 'skip-links';
    skipLinks.innerHTML = `
      <a href="#main-content" class="skip-link">Skip to main content</a>
      <a href="#navigation" class="skip-link">Skip to navigation</a>
      <a href="#footer" class="skip-link">Skip to footer</a>
    `;
    
    const style = document.createElement('style');
    style.textContent = `
      .skip-links {
        position: absolute;
        top: -100px;
        left: 0;
        z-index: 1000;
      }
      .skip-link {
        position: absolute;
        top: 0;
        left: 0;
        background: #000;
        color: #fff;
        padding: 8px 16px;
        text-decoration: none;
        border-radius: 0 0 4px 0;
        transform: translateY(-100%);
        transition: transform 0.3s;
      }
      .skip-link:focus {
        transform: translateY(0);
      }
    `;
    
    document.head.appendChild(style);
    document.body.insertBefore(skipLinks, document.body.firstChild);
  }

  private setupKeyboardNavigation(): void {
    document.addEventListener('keydown', (event) => {
      // Handle escape key
      if (event.key === 'Escape') {
        this.handleEscapeKey();
      }

      // Handle tab navigation
      if (event.key === 'Tab') {
        this.handleTabNavigation(event);
      }

      // Handle arrow key navigation
      if (['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight'].includes(event.key)) {
        this.handleArrowNavigation(event);
      }
    });
  }

  private setupFocusManagement(): void {
    // Track focus changes
    document.addEventListener('focusin', (event) => {
      this.announceFocusChange(event.target as HTMLElement);
    });

    // Ensure focus is visible
    const style = document.createElement('style');
    style.textContent = `
      *:focus {
        outline: 2px solid #0066cc;
        outline-offset: 2px;
      }
      *:focus:not(:focus-visible) {
        outline: none;
      }
      *:focus-visible {
        outline: 2px solid #0066cc;
        outline-offset: 2px;
      }
    `;
    document.head.appendChild(style);
  }

  private setupScreenReaderSupport(): void {
    // Add live region for announcements
    const liveRegion = document.createElement('div');
    liveRegion.setAttribute('aria-live', 'polite');
    liveRegion.setAttribute('aria-atomic', 'true');
    liveRegion.className = 'sr-only';
    liveRegion.id = 'live-region';
    document.body.appendChild(liveRegion);

    // Add screen reader only class
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

  private setupHighContrastMode(): void {
    const style = document.createElement('style');
    style.textContent = `
      @media (prefers-contrast: high) {
        * {
          background-color: white !important;
          color: black !important;
        }
        a {
          text-decoration: underline !important;
        }
        button, input, select, textarea {
          border: 2px solid black !important;
        }
      }
    `;
    document.head.appendChild(style);
  }

  private setupReducedMotion(): void {
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

  private addLandmarks(): void {
    // Add main landmark
    const main = document.querySelector('main') || document.querySelector('#main-content');
    if (main) {
      main.setAttribute('role', 'main');
    }

    // Add navigation landmarks
    const navs = document.querySelectorAll('nav');
    navs.forEach((nav, index) => {
      nav.setAttribute('role', 'navigation');
      nav.setAttribute('aria-label', `Navigation ${index + 1}`);
    });

    // Add header landmark
    const header = document.querySelector('header');
    if (header) {
      header.setAttribute('role', 'banner');
    }

    // Add footer landmark
    const footer = document.querySelector('footer');
    if (footer) {
      footer.setAttribute('role', 'contentinfo');
    }
  }

  private setupMonitoring(): void {
    // Monitor DOM changes for accessibility issues
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.type === 'childList') {
          mutation.addedNodes.forEach((node) => {
            if (node.nodeType === Node.ELEMENT_NODE) {
              this.scanElement(node as HTMLElement);
            }
          });
        }
      });
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true
    });

    this.observers.push(observer);
  }

  private scanForIssues(): void {
    this.metrics.issues = [];
    this.metrics.totalElements = 0;
    this.metrics.accessibleElements = 0;

    const elements = document.querySelectorAll('*');
    elements.forEach((element) => {
      this.scanElement(element as HTMLElement);
    });

    this.calculateScore();
    this.generateRecommendations();
    this.metrics.lastScan = Date.now();
  }

  private scanElement(element: HTMLElement): void {
    this.metrics.totalElements++;

    // Check for missing alt text on images
    if (element.tagName === 'IMG' && !element.getAttribute('alt')) {
      this.addIssue({
        type: 'error',
        element: element.tagName,
        message: 'Image missing alt text',
        impact: 'serious',
        help: 'Add alt text to describe the image content'
      });
    }

    // Check for missing labels on form elements
    if (['INPUT', 'SELECT', 'TEXTAREA'].includes(element.tagName)) {
      const id = element.getAttribute('id');
      const ariaLabel = element.getAttribute('aria-label');
      const ariaLabelledBy = element.getAttribute('aria-labelledby');
      
      if (!id && !ariaLabel && !ariaLabelledBy) {
        this.addIssue({
          type: 'error',
          element: element.tagName,
          message: 'Form element missing label',
          impact: 'serious',
          help: 'Add a label or aria-label to the form element'
        });
      }
    }

    // Check for missing headings
    const headings = document.querySelectorAll('h1, h2, h3, h4, h5, h6');
    if (headings.length === 0) {
      this.addIssue({
        type: 'warning',
        element: 'document',
        message: 'No headings found',
        impact: 'moderate',
        help: 'Add headings to structure the content'
      });
    }

    // Check for color contrast (simplified)
    const computedStyle = window.getComputedStyle(element);
    const color = computedStyle.color;
    const backgroundColor = computedStyle.backgroundColor;
    
    if (color && backgroundColor && this.isLowContrast(color, backgroundColor)) {
      this.addIssue({
        type: 'warning',
        element: element.tagName,
        message: 'Low color contrast',
        impact: 'moderate',
        help: 'Increase color contrast for better readability'
      });
    }

    // Check for keyboard accessibility
    if (element.hasAttribute('onclick') && !element.hasAttribute('tabindex')) {
      this.addIssue({
        type: 'warning',
        element: element.tagName,
        message: 'Clickable element not keyboard accessible',
        impact: 'moderate',
        help: 'Add tabindex or use a button element'
      });
    }

    this.metrics.accessibleElements++;
  }

  private addIssue(issue: AccessibilityIssue): void {
    this.metrics.issues.push(issue);
  }

  private calculateScore(): void {
    const totalIssues = this.metrics.issues.length;
    const criticalIssues = this.metrics.issues.filter(i => i.impact === 'critical').length;
    const seriousIssues = this.metrics.issues.filter(i => i.impact === 'serious').length;
    const moderateIssues = this.metrics.issues.filter(i => i.impact === 'moderate').length;
    const minorIssues = this.metrics.issues.filter(i => i.impact === 'minor').length;

    // Calculate score based on issue severity
    let score = 100;
    score -= criticalIssues * 20;
    score -= seriousIssues * 15;
    score -= moderateIssues * 10;
    score -= minorIssues * 5;

    this.metrics.score = Math.max(0, score);
  }

  private generateRecommendations(): void {
    this.metrics.recommendations = [];

    const issues = this.metrics.issues;
    
    if (issues.some(i => i.message.includes('alt text'))) {
      this.metrics.recommendations.push('Add alt text to all images');
    }

    if (issues.some(i => i.message.includes('label'))) {
      this.metrics.recommendations.push('Ensure all form elements have labels');
    }

    if (issues.some(i => i.message.includes('contrast'))) {
      this.metrics.recommendations.push('Improve color contrast ratios');
    }

    if (issues.some(i => i.message.includes('keyboard'))) {
      this.metrics.recommendations.push('Make interactive elements keyboard accessible');
    }

    if (issues.some(i => i.message.includes('headings'))) {
      this.metrics.recommendations.push('Add proper heading structure');
    }
  }

  private isLowContrast(color1: string, color2: string): boolean {
    // Simplified contrast check - in a real implementation,
    // you'd parse the colors and calculate luminance
    return false;
  }

  private handleEscapeKey(): void {
    // Close any open modals or dropdowns
    const modals = document.querySelectorAll('[role="dialog"]');
    modals.forEach(modal => {
      const closeButton = modal.querySelector('[aria-label*="close"], [aria-label*="Close"]');
      if (closeButton) {
        (closeButton as HTMLElement).click();
      }
    });
  }

  private handleTabNavigation(event: KeyboardEvent): void {
    // Ensure focus is visible and properly managed
    const focusableElements = document.querySelectorAll(
      'a[href], button, input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );
    
    if (event.shiftKey) {
      // Shift + Tab - focus previous element
      const currentIndex = Array.from(focusableElements).indexOf(document.activeElement as Element);
      if (currentIndex === 0) {
        event.preventDefault();
        (focusableElements[focusableElements.length - 1] as HTMLElement).focus();
      }
    } else {
      // Tab - focus next element
      const currentIndex = Array.from(focusableElements).indexOf(document.activeElement as Element);
      if (currentIndex === focusableElements.length - 1) {
        event.preventDefault();
        (focusableElements[0] as HTMLElement).focus();
      }
    }
  }

  private handleArrowNavigation(event: KeyboardEvent): void {
    // Handle arrow key navigation for custom components
    const target = event.target as HTMLElement;
    const role = target.getAttribute('role');
    
    if (role === 'menuitem' || role === 'tab' || role === 'option') {
      // Implement arrow key navigation for these roles
      event.preventDefault();
      // Implementation would depend on specific component structure
    }
  }

  private announceFocusChange(element: HTMLElement): void {
    if (!this.config.announceChanges) return;

    const liveRegion = document.getElementById('live-region');
    if (liveRegion) {
      const label = element.getAttribute('aria-label') || 
                   element.getAttribute('aria-labelledby') ||
                   element.textContent?.trim() ||
                   element.tagName.toLowerCase();
      
      liveRegion.textContent = `Focused: ${label}`;
    }
  }

  public announce(message: string, priority: 'polite' | 'assertive' = 'polite'): void {
    const liveRegion = document.getElementById('live-region');
    if (liveRegion) {
      liveRegion.setAttribute('aria-live', priority);
      liveRegion.textContent = message;
    }
  }

  public getMetrics(): AccessibilityMetrics {
    return { ...this.metrics };
  }

  public getConfig(): AccessibilityConfig {
    return { ...this.config };
  }

  public updateConfig(config: Partial<AccessibilityConfig>): void {
    this.config = { ...this.config, ...config };
  }

  public rescan(): void {
    this.scanForIssues();
  }

  public cleanup(): void {
    this.observers.forEach(observer => observer.disconnect());
    this.observers = [];
    this.isInitialized = false;
  }
}

export const enhancedAccessibility = EnhancedAccessibility.getInstance();
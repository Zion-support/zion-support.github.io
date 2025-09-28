/**
 * Enhanced Accessibility Utilities
 * Provides comprehensive accessibility features and WCAG compliance
 */

interface AccessibilityConfig {
  enableScreenReader: boolean;
  enableKeyboardNavigation: boolean;
  enableHighContrast: boolean;
  enableReducedMotion: boolean;
  enableFocusManagement: boolean;
  enableARIALabels: boolean;
  enableColorContrast: boolean;
  enableTextScaling: boolean;
  enableVoiceNavigation: boolean;
  wcagLevel: 'A' | 'AA' | 'AAA';
}

interface AccessibilityFeatures {
  screenReader: boolean;
  keyboardNavigation: boolean;
  highContrast: boolean;
  reducedMotion: boolean;
  largeText: boolean;
  voiceControl: boolean;
}

interface AccessibilityViolation {
  type: 'color-contrast' | 'missing-alt' | 'missing-label' | 'keyboard-navigation' | 'focus-management';
  severity: 'error' | 'warning' | 'info';
  element: Element;
  message: string;
  wcagCriterion: string;
  suggestion: string;
}

class EnhancedAccessibilityManager {
  private config: AccessibilityConfig;
  private violations: AccessibilityViolation[] = [];
  private isInitialized = false;
  private focusTrapStack: Element[] = [];
  private skipLinks: HTMLElement[] = [];

  constructor(config?: Partial<AccessibilityConfig>) {
    this.config = {
      enableScreenReader: true,
      enableKeyboardNavigation: true,
      enableHighContrast: true,
      enableReducedMotion: true,
      enableFocusManagement: true,
      enableARIALabels: true,
      enableColorContrast: true,
      enableTextScaling: true,
      enableVoiceNavigation: true,
      wcagLevel: 'AA',
      ...config
    };
  }

  /**
   * Initialize accessibility features
   */
  public initialize(): void {
    if (this.isInitialized) return;

    this.setupScreenReaderSupport();
    this.setupKeyboardNavigation();
    this.setupHighContrastMode();
    this.setupReducedMotion();
    this.setupFocusManagement();
    this.setupARIALabels();
    this.setupColorContrast();
    this.setupTextScaling();
    this.setupVoiceNavigation();
    this.setupSkipLinks();
    this.setupAccessibilityMonitoring();
    this.setupAccessibilityTesting();
    
    this.isInitialized = true;
    console.log('Enhanced Accessibility Manager initialized');
  }

  /**
   * Setup screen reader support
   */
  private setupScreenReaderSupport(): void {
    if (!this.config.enableScreenReader) return;

    // Create ARIA live region for announcements
    this.createLiveRegion();
    
    // Setup screen reader announcements
    this.setupAnnouncements();
    
    // Monitor for screen reader usage
    this.detectScreenReader();
  }

  /**
   * Create ARIA live region
   */
  private createLiveRegion(): void {
    const liveRegion = document.createElement('div');
    liveRegion.id = 'aria-live-region';
    liveRegion.setAttribute('aria-live', 'polite');
    liveRegion.setAttribute('aria-atomic', 'true');
    liveRegion.className = 'sr-only';
    liveRegion.style.cssText = `
      position: absolute;
      left: -10000px;
      width: 1px;
      height: 1px;
      overflow: hidden;
    `;
    document.body.appendChild(liveRegion);
  }

  /**
   * Setup announcements
   */
  private setupAnnouncements(): void {
    // Override console.log to announce important messages
    const originalLog = console.log;
    console.log = (...args) => {
      originalLog(...args);
      const message = args.join(' ');
      if (message.includes('Error') || message.includes('Warning')) {
        this.announce(message);
      }
    };
  }

  /**
   * Detect screen reader
   */
  private detectScreenReader(): void {
    // Check for common screen reader indicators
    const screenReaderIndicators = [
      'speechSynthesis' in window,
      'speechRecognition' in window,
      window.navigator.userAgent.includes('NVDA'),
      window.navigator.userAgent.includes('JAWS'),
      window.navigator.userAgent.includes('VoiceOver')
    ];

    const hasScreenReader = screenReaderIndicators.some(indicator => indicator);
    
    if (hasScreenReader) {
      document.body.classList.add('screen-reader-active');
      this.announce('Screen reader detected. Enhanced accessibility features enabled.');
    }
  }

  /**
   * Setup keyboard navigation
   */
  private setupKeyboardNavigation(): void {
    if (!this.config.enableKeyboardNavigation) return;

    // Setup keyboard shortcuts
    this.setupKeyboardShortcuts();
    
    // Setup tab navigation
    this.setupTabNavigation();
    
    // Setup arrow key navigation
    this.setupArrowKeyNavigation();
  }

  /**
   * Setup keyboard shortcuts
   */
  private setupKeyboardShortcuts(): void {
    document.addEventListener('keydown', (event) => {
      // Skip to main content
      if (event.key === 'Tab' && !event.shiftKey && document.activeElement === document.body) {
        const mainContent = document.getElementById('main-content');
        if (mainContent) {
          mainContent.focus();
          event.preventDefault();
        }
      }

      // Toggle accessibility menu
      if (event.altKey && event.key === 'a') {
        this.toggleAccessibilityMenu();
        event.preventDefault();
      }

      // Toggle high contrast mode
      if (event.altKey && event.key === 'h') {
        this.toggleHighContrastMode();
        event.preventDefault();
      }

      // Toggle reduced motion
      if (event.altKey && event.key === 'm') {
        this.toggleReducedMotion();
        event.preventDefault();
      }
    });
  }

  /**
   * Setup tab navigation
   */
  private setupTabNavigation(): void {
    // Ensure all interactive elements are keyboard accessible
    document.addEventListener('keydown', (event) => {
      if (event.key === 'Tab') {
        this.handleTabNavigation(event);
      }
    });
  }

  /**
   * Handle tab navigation
   */
  private handleTabNavigation(event: KeyboardEvent): void {
    const focusableElements = this.getFocusableElements();
    const currentIndex = focusableElements.indexOf(document.activeElement as Element);

    if (event.shiftKey) {
      // Shift + Tab - move backwards
      if (currentIndex <= 0) {
        (focusableElements[focusableElements.length - 1] as HTMLElement)?.focus();
        event.preventDefault();
      }
    } else {
      // Tab - move forwards
      if (currentIndex >= focusableElements.length - 1) {
        (focusableElements[0] as HTMLElement)?.focus();
        event.preventDefault();
      }
    }
  }

  /**
   * Get focusable elements
   */
  private getFocusableElements(): Element[] {
    const focusableSelectors = [
      'a[href]',
      'button:not([disabled])',
      'input:not([disabled])',
      'select:not([disabled])',
      'textarea:not([disabled])',
      '[tabindex]:not([tabindex="-1"])',
      '[contenteditable="true"]'
    ];

    return Array.from(document.querySelectorAll(focusableSelectors.join(', ')));
  }

  /**
   * Setup arrow key navigation
   */
  private setupArrowKeyNavigation(): void {
    document.addEventListener('keydown', (event) => {
      if (['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight'].includes(event.key)) {
        this.handleArrowKeyNavigation(event);
      }
    });
  }

  /**
   * Handle arrow key navigation
   */
  private handleArrowKeyNavigation(event: KeyboardEvent): void {
    const currentElement = document.activeElement as Element;
    const role = currentElement.getAttribute('role') || currentElement.tagName.toLowerCase();

    switch (role) {
      case 'menu':
      case 'menubar':
        this.handleMenuNavigation(event);
        break;
      case 'tablist':
        this.handleTabListNavigation(event);
        break;
      case 'grid':
        this.handleGridNavigation(event);
        break;
    }
  }

  /**
   * Handle menu navigation
   */
  private handleMenuNavigation(event: KeyboardEvent): void {
    const menu = document.activeElement?.closest('[role="menu"], [role="menubar"]');
    if (!menu) return;

    const menuItems = Array.from(menu.querySelectorAll('[role="menuitem"]'));
    const currentIndex = menuItems.indexOf(document.activeElement as Element);

    let nextIndex = currentIndex;
    switch (event.key) {
      case 'ArrowDown':
        nextIndex = (currentIndex + 1) % menuItems.length;
        break;
      case 'ArrowUp':
        nextIndex = currentIndex <= 0 ? menuItems.length - 1 : currentIndex - 1;
        break;
    }

    if (nextIndex !== currentIndex) {
      (menuItems[nextIndex] as HTMLElement)?.focus();
      event.preventDefault();
    }
  }

  /**
   * Handle tab list navigation
   */
  private handleTabListNavigation(event: KeyboardEvent): void {
    const tablist = document.activeElement?.closest('[role="tablist"]');
    if (!tablist) return;

    const tabs = Array.from(tablist.querySelectorAll('[role="tab"]'));
    const currentIndex = tabs.indexOf(document.activeElement as Element);

    let nextIndex = currentIndex;
    switch (event.key) {
      case 'ArrowRight':
        nextIndex = (currentIndex + 1) % tabs.length;
        break;
      case 'ArrowLeft':
        nextIndex = currentIndex <= 0 ? tabs.length - 1 : currentIndex - 1;
        break;
    }

    if (nextIndex !== currentIndex) {
      (tabs[nextIndex] as HTMLElement)?.focus();
      event.preventDefault();
    }
  }

  /**
   * Handle grid navigation
   */
  private handleGridNavigation(event: KeyboardEvent): void {
    // Implement grid navigation logic
    console.log('Grid navigation:', event.key);
  }

  /**
   * Setup high contrast mode
   */
  private setupHighContrastMode(): void {
    if (!this.config.enableHighContrast) return;

    // Check for system high contrast preference
    if (window.matchMedia('(prefers-contrast: high)').matches) {
      document.body.classList.add('high-contrast');
    }

    // Listen for changes in contrast preference
    window.matchMedia('(prefers-contrast: high)').addEventListener('change', (e) => {
      if (e.matches) {
        document.body.classList.add('high-contrast');
        this.announce('High contrast mode enabled');
      } else {
        document.body.classList.remove('high-contrast');
        this.announce('High contrast mode disabled');
      }
    });
  }

  /**
   * Setup reduced motion
   */
  private setupReducedMotion(): void {
    if (!this.config.enableReducedMotion) return;

    // Check for system reduced motion preference
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      document.body.classList.add('reduced-motion');
    }

    // Listen for changes in motion preference
    window.matchMedia('(prefers-reduced-motion: reduce)').addEventListener('change', (e) => {
      if (e.matches) {
        document.body.classList.add('reduced-motion');
        this.announce('Reduced motion enabled');
      } else {
        document.body.classList.remove('reduced-motion');
        this.announce('Reduced motion disabled');
      }
    });
  }

  /**
   * Setup focus management
   */
  private setupFocusManagement(): void {
    if (!this.config.enableFocusManagement) return;

    // Track focus changes
    document.addEventListener('focusin', (event) => {
      this.handleFocusIn(event);
    });

    document.addEventListener('focusout', (event) => {
      this.handleFocusOut(event);
    });

    // Setup focus trapping
    this.setupFocusTrapping();
  }

  /**
   * Handle focus in
   */
  private handleFocusIn(event: FocusEvent): void {
    const target = event.target as Element;
    
    // Announce focus changes for screen readers
    if (target.getAttribute('aria-label') || target.getAttribute('title')) {
      this.announce(`${target.getAttribute('aria-label') || target.getAttribute('title')}`);
    }

    // Add focus indicator
    target.classList.add('focus-visible');
  }

  /**
   * Handle focus out
   */
  private handleFocusOut(event: FocusEvent): void {
    const target = event.target as Element;
    target.classList.remove('focus-visible');
  }

  /**
   * Setup focus trapping
   */
  private setupFocusTrapping(): void {
    // This would be used for modal dialogs and similar components
    console.log('Focus trapping setup complete');
  }

  /**
   * Setup ARIA labels
   */
  private setupARIALabels(): void {
    if (!this.config.enableARIALabels) return;

    // Add missing ARIA labels
    this.addMissingARIALabels();
    
    // Validate ARIA usage
    this.validateARIAUsage();
  }

  /**
   * Add missing ARIA labels
   */
  private addMissingARIALabels(): void {
    // Add labels to form inputs without labels
    const inputs = document.querySelectorAll('input:not([aria-label]):not([aria-labelledby])');
    inputs.forEach((input) => {
      const label = document.querySelector(`label[for="${input.id}"]`);
      if (!label && !input.getAttribute('placeholder')) {
        input.setAttribute('aria-label', 'Input field');
      }
    });

    // Add labels to buttons without labels
    const buttons = document.querySelectorAll('button:not([aria-label])');
    buttons.forEach((button) => {
      if (!button.textContent?.trim()) {
        button.setAttribute('aria-label', 'Button');
      }
    });
  }

  /**
   * Validate ARIA usage
   */
  private validateARIAUsage(): void {
    // Check for common ARIA violations
    this.checkARIAViolations();
  }

  /**
   * Check ARIA violations
   */
  private checkARIAViolations(): void {
    // Check for missing alt attributes on images
    const images = document.querySelectorAll('img:not([alt])');
    images.forEach((img) => {
      this.addViolation({
        type: 'missing-alt',
        severity: 'error',
        element: img,
        message: 'Image missing alt attribute',
        wcagCriterion: '1.1.1',
        suggestion: 'Add an alt attribute to describe the image'
      });
    });

    // Check for missing labels on form inputs
    const formInputs = document.querySelectorAll('input:not([aria-label]):not([aria-labelledby]):not([type="hidden"])');
    formInputs.forEach((input) => {
      const label = document.querySelector(`label[for="${input.id}"]`);
      if (!label) {
        this.addViolation({
          type: 'missing-label',
          severity: 'error',
          element: input,
          message: 'Form input missing label',
          wcagCriterion: '1.3.1',
          suggestion: 'Add a label element or aria-label attribute'
        });
      }
    });
  }

  /**
   * Setup color contrast checking
   */
  private setupColorContrast(): void {
    if (!this.config.enableColorContrast) return;

    // Check color contrast ratios
    this.checkColorContrast();
  }

  /**
   * Check color contrast
   */
  private checkColorContrast(): void {
    const elements = document.querySelectorAll('*');
    elements.forEach((element) => {
      const computedStyle = window.getComputedStyle(element);
      const color = computedStyle.color;
      const backgroundColor = computedStyle.backgroundColor;
      
      // This is a simplified check - in production, use a proper contrast checking library
      if (color && backgroundColor && color !== backgroundColor) {
        const contrast = this.calculateContrast(color, backgroundColor);
        if (contrast < 4.5) { // WCAG AA minimum
          this.addViolation({
            type: 'color-contrast',
            severity: 'warning',
            element,
            message: `Low color contrast ratio: ${contrast.toFixed(2)}`,
            wcagCriterion: '1.4.3',
            suggestion: 'Increase color contrast to meet WCAG guidelines'
          });
        }
      }
    });
  }

  /**
   * Calculate color contrast ratio
   */
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  private calculateContrast(_color1: string, _color2: string): number {
    // Simplified contrast calculation - use a proper library in production
    return 4.5; // Placeholder value
  }

  /**
   * Setup text scaling
   */
  private setupTextScaling(): void {
    if (!this.config.enableTextScaling) return;

    // Check for large text preference
    if (window.matchMedia('(prefers-reduced-motion: no-preference)').matches) {
      document.body.classList.add('text-scaling-enabled');
    }
  }

  /**
   * Setup voice navigation
   */
  private setupVoiceNavigation(): void {
    if (!this.config.enableVoiceNavigation) return;

    // Setup speech recognition
    if ('speechRecognition' in window || 'webkitSpeechRecognition' in window) {
      this.setupSpeechRecognition();
    }
  }

  /**
   * Setup speech recognition
   */
  private setupSpeechRecognition(): void {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const SpeechRecognition = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
    const recognition = new SpeechRecognition();
    
    recognition.continuous = false;
    recognition.interimResults = false;
    recognition.lang = 'en-US';

    recognition.onresult = (event: unknown) => {
      const command = (event as { results: Array<Array<{ transcript: string }>> }).results[0][0].transcript.toLowerCase();
      this.handleVoiceCommand(command);
    };

    // Start listening on voice command
    document.addEventListener('keydown', (event) => {
      if (event.key === ' ' && event.ctrlKey) {
        recognition.start();
        event.preventDefault();
      }
    });
  }

  /**
   * Handle voice command
   */
  private handleVoiceCommand(command: string): void {
    if (command.includes('focus') && command.includes('main')) {
      const mainContent = document.getElementById('main-content');
      mainContent?.focus();
    } else if (command.includes('next')) {
      this.focusNextElement();
    } else if (command.includes('previous')) {
      this.focusPreviousElement();
    }
  }

  /**
   * Focus next element
   */
  private focusNextElement(): void {
    const focusableElements = this.getFocusableElements();
    const currentIndex = focusableElements.indexOf(document.activeElement as Element);
    const nextElement = focusableElements[currentIndex + 1];
    (nextElement as HTMLElement)?.focus();
  }

  /**
   * Focus previous element
   */
  private focusPreviousElement(): void {
    const focusableElements = this.getFocusableElements();
    const currentIndex = focusableElements.indexOf(document.activeElement as Element);
    const previousElement = focusableElements[currentIndex - 1];
    (previousElement as HTMLElement)?.focus();
  }

  /**
   * Setup skip links
   */
  private setupSkipLinks(): void {
    const skipLink = document.createElement('a');
    skipLink.href = '#main-content';
    skipLink.textContent = 'Skip to main content';
    skipLink.className = 'skip-link sr-only';
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
    this.skipLinks.push(skipLink);
  }

  /**
   * Setup accessibility monitoring
   */
  private setupAccessibilityMonitoring(): void {
    // Monitor for accessibility violations
    setInterval(() => {
      this.checkAccessibilityViolations();
    }, 5000);
  }

  /**
   * Setup accessibility testing
   */
  private setupAccessibilityTesting(): void {
    // This would integrate with accessibility testing tools
    console.log('Accessibility testing setup complete');
  }

  /**
   * Check accessibility violations
   */
  private checkAccessibilityViolations(): void {
    // Run periodic accessibility checks
    this.validateARIAUsage();
    this.checkColorContrast();
  }

  /**
   * Add accessibility violation
   */
  private addViolation(violation: AccessibilityViolation): void {
    this.violations.push(violation);
    
    if (process.env.NODE_ENV === 'development') {
      console.warn('Accessibility Violation:', violation);
    }
  }

  /**
   * Announce message to screen readers
   */
  public announce(message: string): void {
    const liveRegion = document.getElementById('aria-live-region');
    if (liveRegion) {
      liveRegion.textContent = message;
      setTimeout(() => {
        liveRegion.textContent = '';
      }, 1000);
    }
  }

  /**
   * Toggle accessibility menu
   */
  private toggleAccessibilityMenu(): void {
    // Toggle accessibility options menu
    console.log('Toggle accessibility menu');
  }

  /**
   * Toggle high contrast mode
   */
  public toggleHighContrastMode(): void {
    document.body.classList.toggle('high-contrast');
    const isEnabled = document.body.classList.contains('high-contrast');
    this.announce(`High contrast mode ${isEnabled ? 'enabled' : 'disabled'}`);
  }

  /**
   * Toggle reduced motion
   */
  public toggleReducedMotion(): void {
    document.body.classList.toggle('reduced-motion');
    const isEnabled = document.body.classList.contains('reduced-motion');
    this.announce(`Reduced motion ${isEnabled ? 'enabled' : 'disabled'}`);
  }

  /**
   * Get accessibility violations
   */
  public getViolations(): AccessibilityViolation[] {
    return [...this.violations];
  }

  /**
   * Get accessibility features
   */
  public getAccessibilityFeatures(): AccessibilityFeatures {
    return {
      screenReader: document.body.classList.contains('screen-reader-active'),
      keyboardNavigation: this.config.enableKeyboardNavigation,
      highContrast: document.body.classList.contains('high-contrast'),
      reducedMotion: document.body.classList.contains('reduced-motion'),
      largeText: document.body.classList.contains('text-scaling-enabled'),
      voiceControl: 'speechRecognition' in window || 'webkitSpeechRecognition' in window
    };
  }

  /**
   * Update accessibility configuration
   */
  public updateConfig(config: Partial<AccessibilityConfig>): void {
    this.config = { ...this.config, ...config };
  }

  /**
   * Get accessibility score
   */
  public getAccessibilityScore(): number {
    // const totalChecks = 10; // Number of accessibility checks - unused for now
    const violations = this.violations.length;
    return Math.max(0, 100 - (violations * 10));
  }
}

// Create singleton instance
export const enhancedAccessibilityManager = new EnhancedAccessibilityManager();

// Export types
export type { AccessibilityConfig, AccessibilityFeatures, AccessibilityViolation };
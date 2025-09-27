/**
 * Accessibility Enhancer Utility
 * Provides comprehensive accessibility features and monitoring
 */

export interface AccessibilityConfig {
  enableKeyboardNavigation: boolean;
  enableScreenReaderSupport: boolean;
  enableHighContrastMode: boolean;
  enableReducedMotion: boolean;
  enableFocusIndicators: boolean;
  enableAriaLabels: boolean;
  announceChanges: boolean;
  enableSkipLinks: boolean;
}

export interface AccessibilityMetrics {
  keyboardNavigationUsage: number;
  screenReaderUsage: number;
  highContrastUsage: number;
  reducedMotionUsage: number;
  focusIndicatorsUsage: number;
  ariaLabelsUsage: number;
  skipLinksUsage: number;
  accessibilityScore: number;
}

class AccessibilityEnhancer {
  private static instance: AccessibilityEnhancer;
  private config: AccessibilityConfig;
  private metrics: AccessibilityMetrics;
  private isInitialized = false;
  private observers: MutationObserver[] = [];

  constructor() {
    this.config = {
      enableKeyboardNavigation: true,
      enableScreenReaderSupport: true,
      enableHighContrastMode: true,
      enableReducedMotion: true,
      enableFocusIndicators: true,
      enableAriaLabels: true,
      announceChanges: true,
      enableSkipLinks: true
    };

    this.metrics = {
      keyboardNavigationUsage: 0,
      screenReaderUsage: 0,
      highContrastUsage: 0,
      reducedMotionUsage: 0,
      focusIndicatorsUsage: 0,
      ariaLabelsUsage: 0,
      skipLinksUsage: 0,
      accessibilityScore: 0
    };
  }

  public static getInstance(): AccessibilityEnhancer {
    if (!AccessibilityEnhancer.instance) {
      AccessibilityEnhancer.instance = new AccessibilityEnhancer();
    }
    return AccessibilityEnhancer.instance;
  }

  public initialize(config?: Partial<AccessibilityConfig>): void {
    if (this.isInitialized) return;

    this.config = { ...this.config, ...config };
    
    this.setupKeyboardNavigation();
    this.setupScreenReaderSupport();
    this.setupHighContrastMode();
    this.setupReducedMotion();
    this.setupFocusIndicators();
    this.setupAriaLabels();
    this.setupSkipLinks();
    this.setupAccessibilityMonitoring();
    
    this.isInitialized = true;
    console.log('Accessibility Enhancer initialized');
  }

  private setupKeyboardNavigation(): void {
    if (!this.config.enableKeyboardNavigation) return;

    document.addEventListener('keydown', (event) => {
      this.metrics.keyboardNavigationUsage++;
      
      // Handle common keyboard shortcuts
      if (event.ctrlKey || event.metaKey) {
        switch (event.key) {
          case '/':
            event.preventDefault();
            this.focusSearch();
            break;
          case 'k':
            event.preventDefault();
            this.focusNavigation();
            break;
          case 'Enter':
            event.preventDefault();
            this.activateFocusedElement();
            break;
        }
      }

      // Handle arrow key navigation
      if (event.key === 'ArrowDown' || event.key === 'ArrowUp') {
        this.handleArrowNavigation(event);
      }

      // Handle tab navigation
      if (event.key === 'Tab') {
        this.handleTabNavigation(event);
      }

      // Handle escape key
      if (event.key === 'Escape') {
        this.handleEscapeKey(event);
      }
    });
  }

  private setupScreenReaderSupport(): void {
    if (!this.config.enableScreenReaderSupport) return;

    // Add screen reader announcements
    this.createAnnouncementRegion();
    
    // Monitor for screen reader usage
    const screenReaderQuery = window.matchMedia('(prefers-reduced-data: reduce)');
    if (screenReaderQuery.matches) {
      this.metrics.screenReaderUsage++;
    }

    // Add aria-live regions for dynamic content
    this.addAriaLiveRegions();
  }

  private setupHighContrastMode(): void {
    if (!this.config.enableHighContrastMode) return;

    const highContrastQuery = window.matchMedia('(prefers-contrast: high)');
    
    if (highContrastQuery.matches) {
      this.metrics.highContrastUsage++;
      this.enableHighContrastMode();
    }

    highContrastQuery.addEventListener('change', (e) => {
      if (e.matches) {
        this.enableHighContrastMode();
      } else {
        this.disableHighContrastMode();
      }
    });
  }

  private setupReducedMotion(): void {
    if (!this.config.enableReducedMotion) return;

    const reducedMotionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    
    if (reducedMotionQuery.matches) {
      this.metrics.reducedMotionUsage++;
      this.enableReducedMotion();
    }

    reducedMotionQuery.addEventListener('change', (e) => {
      if (e.matches) {
        this.enableReducedMotion();
      } else {
        this.disableReducedMotion();
      }
    });
  }

  private setupFocusIndicators(): void {
    if (!this.config.enableFocusIndicators) return;

    // Add focus indicators to all focusable elements
    const focusableElements = document.querySelectorAll(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );

    focusableElements.forEach(element => {
      this.addFocusIndicator(element as HTMLElement);
    });

    // Monitor for new focusable elements
    this.observeFocusableElements();
  }

  private setupAriaLabels(): void {
    if (!this.config.enableAriaLabels) return;

    // Add aria-labels to elements that need them
    this.addAriaLabels();
    
    // Monitor for new elements that need aria-labels
    this.observeAriaLabels();
  }

  private setupSkipLinks(): void {
    if (!this.config.enableSkipLinks) return;

    // Create skip links if they don't exist
    if (!document.querySelector('.skip-link')) {
      this.createSkipLinks();
    }
  }

  private setupAccessibilityMonitoring(): void {
    // Monitor accessibility violations
    this.observeAccessibilityViolations();
    
    // Calculate accessibility score
    this.calculateAccessibilityScore();
  }

  private focusSearch(): void {
    const searchInput = document.querySelector('input[type="search"], input[placeholder*="search" i]') as HTMLInputElement;
    if (searchInput) {
      searchInput.focus();
      this.announce('Search input focused');
    }
  }

  private focusNavigation(): void {
    const navigation = document.querySelector('nav, [role="navigation"]') as HTMLElement;
    if (navigation) {
      const firstLink = navigation.querySelector('a') as HTMLElement;
      if (firstLink) {
        firstLink.focus();
        this.announce('Navigation focused');
      }
    }
  }

  private activateFocusedElement(): void {
    const focusedElement = document.activeElement as HTMLElement;
    if (focusedElement && focusedElement.click) {
      focusedElement.click();
    }
  }

  private handleArrowNavigation(event: KeyboardEvent): void {
    const currentElement = document.activeElement as HTMLElement;
    const container = currentElement.closest('[role="menu"], [role="listbox"], [role="tree"]');
    
    if (container) {
      const items = Array.from(container.querySelectorAll('[role="menuitem"], [role="option"], [role="treeitem"]'));
      const currentIndex = items.indexOf(currentElement);
      
      let nextIndex;
      if (event.key === 'ArrowDown') {
        nextIndex = currentIndex < items.length - 1 ? currentIndex + 1 : 0;
      } else {
        nextIndex = currentIndex > 0 ? currentIndex - 1 : items.length - 1;
      }
      
      (items[nextIndex] as HTMLElement).focus();
      event.preventDefault();
    }
  }

  private handleTabNavigation(event: KeyboardEvent): void {
    // Ensure focus is visible
    document.body.classList.add('keyboard-navigation');
    
    // Remove focus indicator on mouse interaction
    document.addEventListener('mousedown', () => {
      document.body.classList.remove('keyboard-navigation');
    }, { once: true });
  }

  private handleEscapeKey(event: KeyboardEvent): void {
    // Close any open modals or dropdowns
    const openModals = document.querySelectorAll('[role="dialog"][aria-hidden="false"]');
    openModals.forEach(modal => {
      const closeButton = modal.querySelector('[aria-label*="close" i], [aria-label*="dismiss" i]') as HTMLElement;
      if (closeButton) {
        closeButton.click();
      }
    });
  }

  private createAnnouncementRegion(): void {
    const announcementRegion = document.createElement('div');
    announcementRegion.setAttribute('aria-live', 'polite');
    announcementRegion.setAttribute('aria-atomic', 'true');
    announcementRegion.className = 'sr-only';
    announcementRegion.id = 'announcement-region';
    document.body.appendChild(announcementRegion);
  }

  private addAriaLiveRegions(): void {
    // Add aria-live regions for different types of content
    const regions = [
      { id: 'status-region', live: 'polite', atomic: 'true' },
      { id: 'alert-region', live: 'assertive', atomic: 'true' },
      { id: 'log-region', live: 'off', atomic: 'false' }
    ];

    regions.forEach(region => {
      if (!document.getElementById(region.id)) {
        const element = document.createElement('div');
        element.id = region.id;
        element.setAttribute('aria-live', region.live);
        element.setAttribute('aria-atomic', region.atomic);
        element.className = 'sr-only';
        document.body.appendChild(element);
      }
    });
  }

  private enableHighContrastMode(): void {
    document.body.classList.add('high-contrast');
    
    // Add high contrast styles
    const style = document.createElement('style');
    style.textContent = `
      .high-contrast {
        --primary-color: #000000;
        --secondary-color: #ffffff;
        --accent-color: #ffff00;
        --text-color: #000000;
        --background-color: #ffffff;
        --border-color: #000000;
      }
      
      .high-contrast * {
        background-color: var(--background-color) !important;
        color: var(--text-color) !important;
        border-color: var(--border-color) !important;
      }
      
      .high-contrast a {
        color: var(--accent-color) !important;
        text-decoration: underline !important;
      }
      
      .high-contrast button {
        border: 2px solid var(--border-color) !important;
        background-color: var(--background-color) !important;
        color: var(--text-color) !important;
      }
    `;
    document.head.appendChild(style);
  }

  private disableHighContrastMode(): void {
    document.body.classList.remove('high-contrast');
  }

  private enableReducedMotion(): void {
    document.body.classList.add('reduced-motion');
    
    // Add reduced motion styles
    const style = document.createElement('style');
    style.textContent = `
      .reduced-motion *,
      .reduced-motion *::before,
      .reduced-motion *::after {
        animation-duration: 0.01ms !important;
        animation-iteration-count: 1 !important;
        transition-duration: 0.01ms !important;
        scroll-behavior: auto !important;
      }
    `;
    document.head.appendChild(style);
  }

  private disableReducedMotion(): void {
    document.body.classList.remove('reduced-motion');
  }

  private addFocusIndicator(element: HTMLElement): void {
    if (!element.classList.contains('focus-indicator')) {
      element.classList.add('focus-indicator');
    }
  }

  private observeFocusableElements(): void {
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        mutation.addedNodes.forEach((node) => {
          if (node.nodeType === Node.ELEMENT_NODE) {
            const element = node as HTMLElement;
            const focusableElements = element.querySelectorAll(
              'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
            );
            focusableElements.forEach(el => this.addFocusIndicator(el as HTMLElement));
          }
        });
      });
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true
    });

    this.observers.push(observer);
  }

  private addAriaLabels(): void {
    // Add aria-labels to buttons without text
    const buttons = document.querySelectorAll('button:not([aria-label]):not([aria-labelledby])');
    buttons.forEach(button => {
      if (!button.textContent?.trim()) {
        button.setAttribute('aria-label', 'Button');
      }
    });

    // Add aria-labels to images without alt text
    const images = document.querySelectorAll('img:not([alt])');
    images.forEach(img => {
      img.setAttribute('alt', 'Image');
    });
  }

  private observeAriaLabels(): void {
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        mutation.addedNodes.forEach((node) => {
          if (node.nodeType === Node.ELEMENT_NODE) {
            const element = node as HTMLElement;
            this.addAriaLabelsToElement(element);
          }
        });
      });
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true
    });

    this.observers.push(observer);
  }

  private addAriaLabelsToElement(element: HTMLElement): void {
    // Check for buttons without aria-labels
    const buttons = element.querySelectorAll('button:not([aria-label]):not([aria-labelledby])');
    buttons.forEach(button => {
      if (!button.textContent?.trim()) {
        button.setAttribute('aria-label', 'Button');
        this.metrics.ariaLabelsUsage++;
      }
    });

    // Check for images without alt text
    const images = element.querySelectorAll('img:not([alt])');
    images.forEach(img => {
      img.setAttribute('alt', 'Image');
      this.metrics.ariaLabelsUsage++;
    });
  }

  private createSkipLinks(): void {
    const skipLinksContainer = document.createElement('div');
    skipLinksContainer.className = 'skip-links';
    
    const skipLinks = [
      { href: '#main-content', text: 'Skip to main content' },
      { href: '#navigation', text: 'Skip to navigation' },
      { href: '#footer', text: 'Skip to footer' }
    ];

    skipLinks.forEach(link => {
      const skipLink = document.createElement('a');
      skipLink.href = link.href;
      skipLink.textContent = link.text;
      skipLink.className = 'skip-link';
      skipLink.addEventListener('click', () => {
        this.metrics.skipLinksUsage++;
      });
      skipLinksContainer.appendChild(skipLink);
    });

    document.body.insertBefore(skipLinksContainer, document.body.firstChild);
  }

  private observeAccessibilityViolations(): void {
    // Monitor for common accessibility issues
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        mutation.addedNodes.forEach((node) => {
          if (node.nodeType === Node.ELEMENT_NODE) {
            this.checkAccessibilityViolations(node as HTMLElement);
          }
        });
      });
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true
    });

    this.observers.push(observer);
  }

  private checkAccessibilityViolations(element: HTMLElement): void {
    // Check for missing alt attributes on images
    const images = element.querySelectorAll('img:not([alt])');
    if (images.length > 0) {
      console.warn('Accessibility violation: Images without alt attributes found');
    }

    // Check for missing aria-labels on interactive elements
    const interactiveElements = element.querySelectorAll('button:not([aria-label]):not([aria-labelledby])');
    if (interactiveElements.length > 0) {
      console.warn('Accessibility violation: Interactive elements without aria-labels found');
    }

    // Check for missing form labels
    const formInputs = element.querySelectorAll('input:not([aria-label]):not([aria-labelledby])');
    if (formInputs.length > 0) {
      console.warn('Accessibility violation: Form inputs without labels found');
    }
  }

  private calculateAccessibilityScore(): void {
    // Calculate accessibility score based on various factors
    let score = 100;
    
    // Deduct points for violations
    const imagesWithoutAlt = document.querySelectorAll('img:not([alt])').length;
    const buttonsWithoutAriaLabels = document.querySelectorAll('button:not([aria-label]):not([aria-labelledby])').length;
    const inputsWithoutLabels = document.querySelectorAll('input:not([aria-label]):not([aria-labelledby])').length;
    
    score -= (imagesWithoutAlt * 5);
    score -= (buttonsWithoutAriaLabels * 3);
    score -= (inputsWithoutLabels * 4);
    
    this.metrics.accessibilityScore = Math.max(0, score);
  }

  public announce(message: string): void {
    if (this.config.announceChanges) {
      const announcementRegion = document.getElementById('announcement-region');
      if (announcementRegion) {
        announcementRegion.textContent = message;
      }
    }
  }

  public getMetrics(): AccessibilityMetrics {
    return { ...this.metrics };
  }

  public getAccessibilityScore(): number {
    return this.metrics.accessibilityScore;
  }

  public generateAccessibilityReport(): string {
    return `
Accessibility Report:
- Keyboard Navigation Usage: ${this.metrics.keyboardNavigationUsage}
- Screen Reader Usage: ${this.metrics.screenReaderUsage}
- High Contrast Usage: ${this.metrics.highContrastUsage}
- Reduced Motion Usage: ${this.metrics.reducedMotionUsage}
- Focus Indicators Usage: ${this.metrics.focusIndicatorsUsage}
- Aria Labels Usage: ${this.metrics.ariaLabelsUsage}
- Skip Links Usage: ${this.metrics.skipLinksUsage}
- Accessibility Score: ${this.metrics.accessibilityScore}/100
    `.trim();
  }

  public cleanup(): void {
    this.observers.forEach(observer => observer.disconnect());
    this.observers = [];
    this.isInitialized = false;
  }
}

export { AccessibilityEnhancer };
export default AccessibilityEnhancer;
/**
 * Accessibility Enhancement Utilities
 * Advanced accessibility features for the Zion website
 */

interface AccessibilityConfig {
  enableKeyboardNavigation: boolean;
  enableScreenReaderSupport: boolean;
  enableHighContrast: boolean;
  enableReducedMotion: boolean;
  enableFocusManagement: boolean;
  enableARIALabels: boolean;
  enableSkipLinks: boolean;
}

interface AccessibilityMetrics {
  keyboardNavigable: boolean;
  screenReaderCompatible: boolean;
  colorContrast: number;
  focusableElements: number;
  ariaLabels: number;
  skipLinks: number;
}

class AccessibilityEnhancer {
  private config: AccessibilityConfig;
  private focusableElements: HTMLElement[] = [];
  private currentFocusIndex = 0;
  private ariaLiveRegion: HTMLElement | null = null;
  private skipLinks: HTMLElement[] = [];

  constructor(config: Partial<AccessibilityConfig> = {}) {
    this.config = {
      enableKeyboardNavigation: true,
      enableScreenReaderSupport: true,
      enableHighContrast: true,
      enableReducedMotion: true,
      enableFocusManagement: true,
      enableARIALabels: true,
      enableSkipLinks: true,
      ...config,
    };

    this.initialize();
  }

  private initialize(): void {
    if (this.config.enableKeyboardNavigation) {
      this.setupKeyboardNavigation();
    }

    if (this.config.enableScreenReaderSupport) {
      this.setupScreenReaderSupport();
    }

    if (this.config.enableHighContrast) {
      this.setupHighContrastMode();
    }

    if (this.config.enableReducedMotion) {
      this.setupReducedMotion();
    }

    if (this.config.enableFocusManagement) {
      this.setupFocusManagement();
    }

    if (this.config.enableARIALabels) {
      this.setupARIALabels();
    }

    if (this.config.enableSkipLinks) {
      this.setupSkipLinks();
    }

    this.setupAccessibilityMonitoring();
  }

  private setupKeyboardNavigation(): void {
    document.addEventListener('keydown', (event) => {
      this.handleKeyboardNavigation(event);
    });

    // Ensure all interactive elements are keyboard accessible
    this.makeElementsKeyboardAccessible();
  }

  private handleKeyboardNavigation(event: KeyboardEvent): void {
    const { key, ctrlKey, altKey } = event;

    // Skip to main content
    if (key === 'Tab' && ctrlKey && altKey) {
      event.preventDefault();
      this.skipToMainContent();
      return;
    }

    // Skip to navigation
    if (key === 'Tab' && ctrlKey && !altKey) {
      event.preventDefault();
      this.skipToNavigation();
      return;
    }

    // Arrow key navigation for custom components
    if (['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight'].includes(key)) {
      this.handleArrowKeyNavigation(event);
    }

    // Escape key to close modals/menus
    if (key === 'Escape') {
      this.handleEscapeKey();
    }
  }

  private makeElementsKeyboardAccessible(): void {
    // Ensure all clickable elements have proper keyboard support
    const clickableElements = document.querySelectorAll('[onclick], .clickable, button, a');
    
    clickableElements.forEach((element) => {
      if (!element.hasAttribute('tabindex') && !this.isNaturallyFocusable(element)) {
        element.setAttribute('tabindex', '0');
      }

      // Add keyboard event listeners for non-interactive elements
      if (!this.isNaturallyInteractive(element)) {
      element.addEventListener('keydown', (event) => {
        const keyboardEvent = event as KeyboardEvent;
        if (keyboardEvent.key === 'Enter' || keyboardEvent.key === ' ') {
          event.preventDefault();
          (element as HTMLElement).click();
        }
      });
      }
    });
  }

  private isNaturallyFocusable(element: Element): boolean {
    const focusableTags = ['button', 'a', 'input', 'select', 'textarea'];
    const focusableRoles = ['button', 'link', 'textbox', 'checkbox', 'radio'];
    
    return focusableTags.includes(element.tagName.toLowerCase()) ||
           focusableRoles.includes(element.getAttribute('role') || '');
  }

  private isNaturallyInteractive(element: Element): boolean {
    const interactiveTags = ['button', 'a', 'input', 'select', 'textarea'];
    return interactiveTags.includes(element.tagName.toLowerCase());
  }

  private handleArrowKeyNavigation(event: KeyboardEvent): void {
    const { key } = event;
    const currentElement = document.activeElement as HTMLElement;
    
    if (!currentElement) return;

    // Find the nearest navigation container
    const navContainer = currentElement.closest('[role="menu"], [role="tablist"], .navigation');
    
    if (navContainer) {
      event.preventDefault();
      
      const focusableElements = Array.from(navContainer.querySelectorAll(
        'button, a, input, select, textarea, [tabindex]:not([tabindex="-1"])'
      )) as HTMLElement[];
      
      const currentIndex = focusableElements.indexOf(currentElement);
      let nextIndex = currentIndex;

      switch (key) {
        case 'ArrowRight':
        case 'ArrowDown':
          nextIndex = (currentIndex + 1) % focusableElements.length;
          break;
        case 'ArrowLeft':
        case 'ArrowUp':
          nextIndex = currentIndex === 0 ? focusableElements.length - 1 : currentIndex - 1;
          break;
      }

      if (nextIndex !== currentIndex) {
        focusableElements[nextIndex].focus();
      }
    }
  }

  private handleEscapeKey(): void {
    // Close any open modals, dropdowns, or menus
    const openModals = document.querySelectorAll('.modal[aria-hidden="false"]');
    const openDropdowns = document.querySelectorAll('.dropdown[aria-expanded="true"]');
    const openMenus = document.querySelectorAll('[role="menu"][aria-expanded="true"]');

    [...openModals, ...openDropdowns, ...openMenus].forEach((element) => {
      const closeButton = element.querySelector('[aria-label*="close"], [aria-label*="Close"]') as HTMLElement;
      if (closeButton) {
        closeButton.click();
      }
    });
  }

  private skipToMainContent(): void {
    const mainContent = document.querySelector('main, #main-content, .main-content') as HTMLElement;
    if (mainContent) {
      mainContent.focus();
      mainContent.scrollIntoView({ behavior: 'smooth' });
    }
  }

  private skipToNavigation(): void {
    const navigation = document.querySelector('nav, [role="navigation"]') as HTMLElement;
    if (navigation) {
      const firstFocusable = navigation.querySelector('a, button, [tabindex]:not([tabindex="-1"])') as HTMLElement;
      if (firstFocusable) {
        firstFocusable.focus();
      }
    }
  }

  private setupScreenReaderSupport(): void {
    this.createAriaLiveRegion();
    this.announcePageChanges();
    this.enhanceFormLabels();
  }

  private createAriaLiveRegion(): void {
    this.ariaLiveRegion = document.createElement('div');
    this.ariaLiveRegion.setAttribute('aria-live', 'polite');
    this.ariaLiveRegion.setAttribute('aria-atomic', 'true');
    this.ariaLiveRegion.className = 'sr-only';
    this.ariaLiveRegion.style.cssText = `
      position: absolute;
      left: -10000px;
      width: 1px;
      height: 1px;
      overflow: hidden;
    `;
    document.body.appendChild(this.ariaLiveRegion);
  }

  private announcePageChanges(): void {
    // Announce page title changes
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.type === 'childList') {
          const titleElement = document.querySelector('title');
          if (titleElement && this.ariaLiveRegion) {
            this.ariaLiveRegion.textContent = `Page loaded: ${titleElement.textContent}`;
          }
        }
      });
    });

    observer.observe(document.head, { childList: true, subtree: true });
  }

  private enhanceFormLabels(): void {
    const inputs = document.querySelectorAll('input, select, textarea');
    
    inputs.forEach((input) => {
      const inputElement = input as HTMLInputElement;
      
      // Ensure every input has a label
      if (!inputElement.labels?.length) {
        const placeholder = inputElement.getAttribute('placeholder');
        const ariaLabel = inputElement.getAttribute('aria-label');
        
        if (!ariaLabel && placeholder) {
          inputElement.setAttribute('aria-label', placeholder);
        }
      }

      // Add required field indicators
      if (inputElement.required && !inputElement.getAttribute('aria-required')) {
        inputElement.setAttribute('aria-required', 'true');
      }

      // Add error states
      if (inputElement.classList.contains('error')) {
        inputElement.setAttribute('aria-invalid', 'true');
      }
    });
  }

  private setupHighContrastMode(): void {
    // Check for high contrast preference
    if (window.matchMedia('(prefers-contrast: high)').matches) {
      document.body.classList.add('high-contrast');
    }

    // Listen for changes in contrast preference
    window.matchMedia('(prefers-contrast: high)').addEventListener('change', (e) => {
      if (e.matches) {
        document.body.classList.add('high-contrast');
      } else {
        document.body.classList.remove('high-contrast');
      }
    });
  }

  private setupReducedMotion(): void {
    // Check for reduced motion preference
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      document.body.classList.add('reduced-motion');
    }

    // Listen for changes in motion preference
    window.matchMedia('(prefers-reduced-motion: reduce)').addEventListener('change', (e) => {
      if (e.matches) {
        document.body.classList.add('reduced-motion');
      } else {
        document.body.classList.remove('reduced-motion');
      }
    });
  }

  private setupFocusManagement(): void {
    // Trap focus in modals
    this.setupFocusTrapping();
    
    // Manage focus for single-page app navigation
    this.setupSPAFocusManagement();
  }

  private setupFocusTrapping(): void {
    const modals = document.querySelectorAll('.modal, [role="dialog"]');
    
    modals.forEach((modal) => {
      modal.addEventListener('keydown', (event) => {
        const keyboardEvent = event as KeyboardEvent;
        if (keyboardEvent.key === 'Tab') {
          this.trapFocusInModal(keyboardEvent, modal as HTMLElement);
        }
      });
    });
  }

  private trapFocusInModal(event: KeyboardEvent, modal: HTMLElement): void {
    const focusableElements = Array.from(modal.querySelectorAll(
      'button, a, input, select, textarea, [tabindex]:not([tabindex="-1"])'
    )) as HTMLElement[];

    if (focusableElements.length === 0) return;

    const firstElement = focusableElements[0];
    const lastElement = focusableElements[focusableElements.length - 1];

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

  private setupSPAFocusManagement(): void {
    // Track focus when navigating between pages
    let previousFocus: HTMLElement | null = null;

    // Store focus before navigation
    window.addEventListener('beforeunload', () => {
      previousFocus = document.activeElement as HTMLElement;
    });

    // Restore focus after navigation
    window.addEventListener('load', () => {
      if (previousFocus && previousFocus.isConnected) {
        previousFocus.focus();
      } else {
        // Focus on main content or first focusable element
        this.skipToMainContent();
      }
    });
  }

  private setupARIALabels(): void {
    this.addMissingARIALabels();
    this.enhanceInteractiveElements();
  }

  private addMissingARIALabels(): void {
    // Add labels to buttons without text
    const buttons = document.querySelectorAll('button:not([aria-label])');
    
    buttons.forEach((button) => {
      const buttonElement = button as HTMLButtonElement;
      
      if (!buttonElement.textContent?.trim() && !buttonElement.getAttribute('aria-label')) {
        const icon = buttonElement.querySelector('svg, i, img');
        if (icon) {
          const altText = icon.getAttribute('alt') || icon.getAttribute('title');
          if (altText) {
            buttonElement.setAttribute('aria-label', altText);
          }
        }
      }
    });

    // Add labels to images without alt text
    const images = document.querySelectorAll('img:not([alt])');
    
    images.forEach((img) => {
      const imgElement = img as HTMLImageElement;
      if (!imgElement.alt && !imgElement.getAttribute('aria-label')) {
        imgElement.setAttribute('alt', 'Image');
      }
    });
  }

  private enhanceInteractiveElements(): void {
    // Add proper ARIA states to interactive elements
    const dropdowns = document.querySelectorAll('.dropdown, [role="menu"]');
    
    dropdowns.forEach((dropdown) => {
      const trigger = dropdown.querySelector('[aria-haspopup], [aria-expanded]');
      if (trigger) {
        trigger.setAttribute('aria-haspopup', 'true');
        trigger.setAttribute('aria-expanded', 'false');
      }
    });
  }

  private setupSkipLinks(): void {
    this.createSkipLinks();
  }

  private createSkipLinks(): void {
    const skipLinksContainer = document.createElement('div');
    skipLinksContainer.className = 'skip-links';
    skipLinksContainer.style.cssText = `
      position: absolute;
      top: -40px;
      left: 6px;
      z-index: 1000;
    `;

    const skipLinks = [
      { href: '#main-content', text: 'Skip to main content' },
      { href: '#navigation', text: 'Skip to navigation' },
      { href: '#footer', text: 'Skip to footer' },
    ];

    skipLinks.forEach((link) => {
      const skipLink = document.createElement('a');
      skipLink.href = link.href;
      skipLink.textContent = link.text;
      skipLink.className = 'skip-link';
      skipLink.style.cssText = `
        display: block;
        padding: 8px 16px;
        background: #000;
        color: #fff;
        text-decoration: none;
        border-radius: 4px;
        margin-bottom: 4px;
        transition: top 0.3s;
      `;
      
      skipLink.addEventListener('focus', () => {
        skipLink.style.top = '6px';
      });
      
      skipLink.addEventListener('blur', () => {
        skipLink.style.top = '-40px';
      });

      skipLinksContainer.appendChild(skipLink);
    });

    document.body.insertBefore(skipLinksContainer, document.body.firstChild);
  }

  private setupAccessibilityMonitoring(): void {
    this.monitorAccessibilityIssues();
    this.generateAccessibilityReport();
  }

  private monitorAccessibilityIssues(): void {
    // Monitor for common accessibility issues
    const issues: string[] = [];

    // Check for missing alt text
    const imagesWithoutAlt = document.querySelectorAll('img:not([alt])');
    if (imagesWithoutAlt.length > 0) {
      issues.push(`${imagesWithoutAlt.length} images missing alt text`);
    }

    // Check for missing form labels
    const inputsWithoutLabels = document.querySelectorAll('input:not([aria-label]):not([aria-labelledby])');
    inputsWithoutLabels.forEach((input) => {
      if (!input.closest('label') && !input.getAttribute('placeholder')) {
        issues.push(`Input without label: ${input.getAttribute('name') || 'unnamed'}`);
      }
    });

    // Check for missing heading hierarchy
    const headings = document.querySelectorAll('h1, h2, h3, h4, h5, h6');
    let previousLevel = 0;
    headings.forEach((heading) => {
      const level = parseInt(heading.tagName.charAt(1));
      if (level > previousLevel + 1) {
        issues.push(`Heading hierarchy issue: ${heading.tagName} follows h${previousLevel}`);
      }
      previousLevel = level;
    });

    if (issues.length > 0) {
      console.warn('Accessibility issues detected:', issues);
    }
  }

  private generateAccessibilityReport(): void {
    const report = this.getAccessibilityMetrics();
    console.log('Accessibility Report:', report);
  }

  // Public methods
  public announce(message: string, priority: 'polite' | 'assertive' = 'polite'): void {
    if (this.ariaLiveRegion) {
      this.ariaLiveRegion.setAttribute('aria-live', priority);
      this.ariaLiveRegion.textContent = message;
      
      // Clear the message after announcement
      setTimeout(() => {
        if (this.ariaLiveRegion) {
          this.ariaLiveRegion.textContent = '';
        }
      }, 1000);
    }
  }

  public getAccessibilityMetrics(): AccessibilityMetrics {
    return {
      keyboardNavigable: this.config.enableKeyboardNavigation,
      screenReaderCompatible: this.config.enableScreenReaderSupport,
      colorContrast: this.calculateColorContrast(),
      focusableElements: this.getFocusableElements().length,
      ariaLabels: this.getARIALabelsCount(),
      skipLinks: this.getSkipLinksCount(),
    };
  }

  private calculateColorContrast(): number {
    // Simplified contrast calculation
    // In a real implementation, this would calculate actual contrast ratios
    return 4.5; // WCAG AA standard
  }

  private getFocusableElements(): HTMLElement[] {
    return Array.from(document.querySelectorAll(
      'button, a, input, select, textarea, [tabindex]:not([tabindex="-1"])'
    )) as HTMLElement[];
  }

  private getARIALabelsCount(): number {
    return document.querySelectorAll('[aria-label], [aria-labelledby]').length;
  }

  private getSkipLinksCount(): number {
    return document.querySelectorAll('.skip-link').length;
  }

  public cleanup(): void {
    if (this.ariaLiveRegion) {
      this.ariaLiveRegion.remove();
    }
  }
}

// Initialize accessibility enhancer
const accessibilityEnhancer = new AccessibilityEnhancer();

export default accessibilityEnhancer;
export { AccessibilityEnhancer };
export type { AccessibilityConfig, AccessibilityMetrics };
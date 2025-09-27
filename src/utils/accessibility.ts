// Enhanced accessibility utilities
interface AccessibilityOptions {
  announceChanges?: boolean;
  highContrast?: boolean;
  reducedMotion?: boolean;
  fontSize?: 'small' | 'medium' | 'large';
}

export class AccessibilityManager {
  private static instance: AccessibilityManager;
  private focusTrapStack: HTMLElement[] = [];
  private options: AccessibilityOptions = {};
  private observers: MutationObserver[] = [];
  private keyboardEventListeners: Map<HTMLElement, (e: KeyboardEvent) => void> = new Map();
  public isInitialized: boolean = false;

  public static getInstance(): AccessibilityManager {
    if (!AccessibilityManager.instance) {
      AccessibilityManager.instance = new AccessibilityManager();
    }
    return AccessibilityManager.instance;
  }

  public initialize(options: AccessibilityOptions = {}): void {
    this.options = { ...this.options, ...options };
    this.setupAccessibilityFeatures();
    this.observeDOMChanges();
    this.setupKeyboardNavigation();
    this.isInitialized = true;
  }

  private setupAccessibilityFeatures(): void {
    // Add skip links
    this.addSkipLink();
    
    // Setup ARIA landmarks
    this.setupLandmarks();
    
    // Setup focus indicators
    this.setupFocusIndicators();
    
    // Setup reduced motion support
    if (this.options.reducedMotion) {
      this.enableReducedMotion();
    }
    
    // Setup high contrast support
    if (this.options.highContrast) {
      this.enableHighContrast();
    }
  }

  public announceToScreenReader(message: string, priority: 'polite' | 'assertive' = 'polite'): void {
    if (!this.options.announceChanges) return;

    const announcement = document.createElement('div');
    announcement.setAttribute('aria-live', priority);
    announcement.setAttribute('aria-atomic', 'true');
    announcement.className = 'sr-only';
    announcement.textContent = message;

    document.body.appendChild(announcement);

    // Remove after announcement
    setTimeout(() => {
      if (document.body.contains(announcement)) {
        document.body.removeChild(announcement);
      }
    }, 1000);
  }

  public setFocusTrap(element: HTMLElement): void {
    this.focusTrapStack.push(element);
    this.trapFocus(element);
  }

  public removeFocusTrap(): void {
    const element = this.focusTrapStack.pop();
    if (element) {
      const handler = this.keyboardEventListeners.get(element);
      if (handler) {
        element.removeEventListener('keydown', handler);
        this.keyboardEventListeners.delete(element);
      }
    }
    
    if (this.focusTrapStack.length > 0) {
      this.trapFocus(this.focusTrapStack[this.focusTrapStack.length - 1]);
    }
  }

  private trapFocus(element: HTMLElement): void {
    const focusableElements = element.querySelectorAll(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"]), [contenteditable="true"]'
    );
    
    const firstFocusableElement = focusableElements[0] as HTMLElement;
    const lastFocusableElement = focusableElements[focusableElements.length - 1] as HTMLElement;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Tab') {
        if (e.shiftKey) {
          if (document.activeElement === firstFocusableElement) {
            lastFocusableElement.focus();
            e.preventDefault();
          }
        } else {
          if (document.activeElement === lastFocusableElement) {
            firstFocusableElement.focus();
            e.preventDefault();
          }
        }
      } else if (e.key === 'Escape') {
        this.removeFocusTrap();
      }
    };

    element.addEventListener('keydown', handleKeyDown);
    this.keyboardEventListeners.set(element, handleKeyDown);
    firstFocusableElement?.focus();
  }

  private addSkipLink(): void {
    if (document.querySelector('.skip-link')) return;

    const skipLink = document.createElement('a');
    skipLink.href = '#main-content';
    skipLink.textContent = 'Skip to main content';
    skipLink.className = 'skip-link sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:bg-blue-600 focus:text-white focus:px-4 focus:py-2 focus:rounded focus:outline-none';
    
    document.body.insertBefore(skipLink, document.body.firstChild);
  }

  private setupLandmarks(): void {
    // Ensure main content has proper landmark
    const mainContent = document.getElementById('main-content');
    if (mainContent && !mainContent.getAttribute('role')) {
      mainContent.setAttribute('role', 'main');
    }

    // Add navigation landmarks
    const navElements = document.querySelectorAll('nav');
    navElements.forEach((nav, index) => {
      if (!nav.getAttribute('aria-label') && !nav.getAttribute('aria-labelledby')) {
        nav.setAttribute('aria-label', `Navigation ${index + 1}`);
      }
    });
  }

  private setupFocusIndicators(): void {
    const style = document.createElement('style');
    style.textContent = `
      .focus-visible {
        outline: 2px solid #3b82f6;
        outline-offset: 2px;
      }
      
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
      
      .focus\\:not-sr-only:focus {
        position: static;
        width: auto;
        height: auto;
        padding: inherit;
        margin: inherit;
        overflow: visible;
        clip: auto;
        white-space: normal;
      }
    `;
    document.head.appendChild(style);
  }

  private enableReducedMotion(): void {
    const style = document.createElement('style');
    style.textContent = `
      @media (prefers-reduced-motion: reduce) {
        *, *::before, *::after {
          animation-duration: 0.01ms !important;
          animation-iteration-count: 1 !important;
          transition-duration: 0.01ms !important;
        }
      }
    `;
    document.head.appendChild(style);
  }

  private enableHighContrast(): void {
    const style = document.createElement('style');
    style.textContent = `
      @media (prefers-contrast: high) {
        * {
          background-color: white !important;
          color: black !important;
          border-color: black !important;
        }
      }
    `;
    document.head.appendChild(style);
  }

  private observeDOMChanges(): void {
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.type === 'childList') {
          mutation.addedNodes.forEach((node) => {
            if (node.nodeType === Node.ELEMENT_NODE) {
              this.validateAccessibility(node as Element);
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

  private setupKeyboardNavigation(): void {
    document.addEventListener('keydown', (e) => {
      // Alt + M: Focus main content
      if (e.altKey && e.key === 'm') {
        e.preventDefault();
        const mainContent = document.getElementById('main-content');
        mainContent?.focus();
      }
      
      // Alt + N: Focus navigation
      if (e.altKey && e.key === 'n') {
        e.preventDefault();
        const nav = document.querySelector('nav');
        nav?.focus();
      }
    });
  }

  private validateAccessibility(element: Element): void {
    // Check for missing alt text on images
    const images = element.querySelectorAll('img');
    images.forEach((img) => {
      if (!img.getAttribute('alt') && !img.getAttribute('aria-label')) {
        console.warn('Image missing alt text:', img);
      }
    });

    // Check for proper heading hierarchy
    const headings = element.querySelectorAll('h1, h2, h3, h4, h5, h6');
    headings.forEach((heading) => {
      const level = parseInt(heading.tagName.charAt(1));
      const previousHeading = heading.previousElementSibling;
      if (previousHeading && previousHeading.tagName.match(/^H[1-6]$/)) {
        const prevLevel = parseInt(previousHeading.tagName.charAt(1));
        if (level > prevLevel + 1) {
          console.warn('Heading hierarchy skipped:', heading);
        }
      }
    });

    // Check for form labels
    const inputs = element.querySelectorAll('input, select, textarea');
    inputs.forEach((input) => {
      const id = input.getAttribute('id');
      const ariaLabel = input.getAttribute('aria-label');
      const ariaLabelledBy = input.getAttribute('aria-labelledby');
      
      if (!id && !ariaLabel && !ariaLabelledBy) {
        console.warn('Form input missing label:', input);
      }
    });
  }

  public validateColorContrast(): void {
    const elements = document.querySelectorAll('*');
    const issues: string[] = [];

    elements.forEach((element) => {
      const styles = window.getComputedStyle(element);
      const color = styles.color;
      const backgroundColor = styles.backgroundColor;
      
      // This is a simplified check - in production, you'd use a proper contrast checking library
      if (color && backgroundColor && color !== backgroundColor) {
        // Basic contrast validation would go here
        console.log('Contrast check for:', element, color, backgroundColor);
      }
    });

    if (issues.length > 0) {
      console.warn('Color contrast issues found:', issues);
    }
  }

  public handleKeyboardNavigation(event: KeyboardEvent): void {
    // Handle keyboard navigation
    if (event.key === 'Tab') {
      this.handleTabNavigation(event);
    } else if (event.key === 'Escape') {
      this.handleEscapeKey();
    } else if (event.key === 'Enter' || event.key === ' ') {
      this.handleActivation(event);
    }
  }

  private handleTabNavigation(event: KeyboardEvent): void {
    // Implement tab navigation logic
    const focusableElements = this.getFocusableElements();
    const currentIndex = focusableElements.indexOf(document.activeElement as HTMLElement);
    
    if (event.shiftKey) {
      // Shift + Tab - move backwards
      if (currentIndex > 0) {
        focusableElements[currentIndex - 1].focus();
      } else {
        focusableElements[focusableElements.length - 1].focus();
      }
    } else {
      // Tab - move forwards
      if (currentIndex < focusableElements.length - 1) {
        focusableElements[currentIndex + 1].focus();
      } else {
        focusableElements[0].focus();
      }
    }
  }

  private handleEscapeKey(): void {
    // Close any open modals or dropdowns
    const modals = document.querySelectorAll('[role="dialog"], [role="alertdialog"]');
    modals.forEach(modal => {
      if (modal.getAttribute('aria-hidden') === 'false') {
        (modal as HTMLElement).click();
      }
    });
  }

  private handleActivation(event: KeyboardEvent): void {
    // Handle Enter and Space key activation
    const target = event.target as HTMLElement;
    if (target && (target.tagName === 'BUTTON' || target.getAttribute('role') === 'button')) {
      target.click();
    }
  }

  private getFocusableElements(): HTMLElement[] {
    const focusableSelectors = [
      'button:not([disabled])',
      'input:not([disabled])',
      'select:not([disabled])',
      'textarea:not([disabled])',
      'a[href]',
      '[tabindex]:not([tabindex="-1"])',
      '[role="button"]:not([disabled])',
      '[role="link"]:not([disabled])'
    ];
    
    return Array.from(document.querySelectorAll(focusableSelectors.join(', '))) as HTMLElement[];
  }

  public cleanup(): void {
    this.observers.forEach(observer => observer.disconnect());
    this.observers = [];
    
    this.keyboardEventListeners.forEach((handler, element) => {
      element.removeEventListener('keydown', handler);
    });
    this.keyboardEventListeners.clear();
    this.isInitialized = false;
  }
}

export const accessibilityManager = AccessibilityManager.getInstance();
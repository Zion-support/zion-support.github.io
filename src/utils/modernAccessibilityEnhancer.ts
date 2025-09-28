/**
 * Modern Accessibility Enhancer
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
  enableLiveRegions: boolean;
}

interface FocusTrapOptions {
  initialFocus?: HTMLElement | null;
  returnFocusOnDeactivate?: boolean;
  escapeDeactivates?: boolean;
}

class ModernAccessibilityEnhancer {
  private config: AccessibilityConfig;
  private focusHistory: HTMLElement[] = [];
  private liveRegions: Map<string, HTMLElement> = new Map();
  private focusTrapStack: HTMLElement[] = [];
  private keyboardShortcuts: Map<string, () => void> = new Map();
  private observers: MutationObserver[] = [];

  constructor(config: Partial<AccessibilityConfig> = {}) {
    this.config = {
      enableKeyboardNavigation: true,
      enableScreenReaderSupport: true,
      enableHighContrast: true,
      enableReducedMotion: true,
      enableFocusManagement: true,
      enableARIALabels: true,
      enableSkipLinks: true,
      enableLiveRegions: true,
      ...config
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

    if (this.config.enableLiveRegions) {
      this.setupLiveRegions();
    }

    this.setupKeyboardShortcuts();
    this.setupMutationObserver();
  }

  private setupKeyboardNavigation(): void {
    document.addEventListener('keydown', this.handleKeyboardNavigation.bind(this));
  }

  private handleKeyboardNavigation(event: KeyboardEvent): void {
    const { key, ctrlKey, altKey, shiftKey } = event;
    
    // Skip to main content
    if (key === 'Tab' && !shiftKey && !ctrlKey && !altKey) {
      const firstFocusable = this.getFirstFocusableElement();
      if (firstFocusable && document.activeElement === document.body) {
        firstFocusable.focus();
        event.preventDefault();
      }
    }

    // Skip to navigation
    if (key === 'Tab' && shiftKey && !ctrlKey && !altKey) {
      const lastFocusable = this.getLastFocusableElement();
      if (lastFocusable && document.activeElement === document.body) {
        lastFocusable.focus();
        event.preventDefault();
      }
    }

    // Escape key handling
    if (key === 'Escape') {
      this.handleEscapeKey();
    }

    // Arrow key navigation for custom components
    if (['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight'].includes(key)) {
      this.handleArrowKeyNavigation(event);
    }

    // Custom keyboard shortcuts
    const shortcut = this.getKeyboardShortcut(event);
    if (shortcut && this.keyboardShortcuts.has(shortcut)) {
      this.keyboardShortcuts.get(shortcut)?.();
      event.preventDefault();
    }
  }

  private getFirstFocusableElement(): HTMLElement | null {
    const focusableSelectors = [
      'a[href]',
      'button:not([disabled])',
      'input:not([disabled])',
      'select:not([disabled])',
      'textarea:not([disabled])',
      '[tabindex]:not([tabindex="-1"])',
      '[contenteditable="true"]'
    ].join(', ');

    return document.querySelector(focusableSelectors) as HTMLElement;
  }

  private getLastFocusableElement(): HTMLElement | null {
    const focusableElements = document.querySelectorAll([
      'a[href]',
      'button:not([disabled])',
      'input:not([disabled])',
      'select:not([disabled])',
      'textarea:not([disabled])',
      '[tabindex]:not([tabindex="-1"])',
      '[contenteditable="true"]'
    ].join(', '));

    return focusableElements[focusableElements.length - 1] as HTMLElement;
  }

  private handleEscapeKey(): void {
    // Close any open modals, dropdowns, or overlays
    const modals = document.querySelectorAll('[role="dialog"], [role="alertdialog"]');
    modals.forEach(modal => {
      const closeButton = modal.querySelector('[aria-label*="close"], [aria-label*="Close"]') as HTMLElement;
      if (closeButton) {
        closeButton.click();
      }
    });

    // Remove focus trap if active
    if (this.focusTrapStack.length > 0) {
      this.deactivateFocusTrap();
    }
  }

  private handleArrowKeyNavigation(event: KeyboardEvent): void {
    const activeElement = document.activeElement as HTMLElement;
    if (!activeElement) return;

    const container = activeElement.closest('[role="menu"], [role="listbox"], [role="grid"], [role="tree"]');
    if (!container) return;

    const focusableElements = Array.from(container.querySelectorAll([
      'a[href]',
      'button:not([disabled])',
      'input:not([disabled])',
      'select:not([disabled])',
      'textarea:not([disabled])',
      '[tabindex]:not([tabindex="-1"])',
      '[role="menuitem"]',
      '[role="option"]',
      '[role="gridcell"]',
      '[role="treeitem"]'
    ].join(', '))) as HTMLElement[];

    const currentIndex = focusableElements.indexOf(activeElement);
    if (currentIndex === -1) return;

    let nextIndex = currentIndex;

    switch (event.key) {
      case 'ArrowUp':
        nextIndex = currentIndex > 0 ? currentIndex - 1 : focusableElements.length - 1;
        break;
      case 'ArrowDown':
        nextIndex = currentIndex < focusableElements.length - 1 ? currentIndex + 1 : 0;
        break;
      case 'ArrowLeft':
        nextIndex = currentIndex > 0 ? currentIndex - 1 : focusableElements.length - 1;
        break;
      case 'ArrowRight':
        nextIndex = currentIndex < focusableElements.length - 1 ? currentIndex + 1 : 0;
        break;
    }

    if (nextIndex !== currentIndex) {
      focusableElements[nextIndex]?.focus();
      event.preventDefault();
    }
  }

  private setupScreenReaderSupport(): void {
    // Add screen reader only text for visual elements
    this.addScreenReaderText();
    
    // Enhance form labels
    this.enhanceFormLabels();
    
    // Add landmark roles
    this.addLandmarkRoles();
  }

  private addScreenReaderText(): void {
    const visualElements = document.querySelectorAll('img:not([alt]), .icon, .emoji');
    visualElements.forEach(element => {
      if (!element.getAttribute('aria-label') && !element.getAttribute('aria-labelledby')) {
        const text = element.textContent?.trim() || 'Decorative element';
        element.setAttribute('aria-label', text);
      }
    });
  }

  private enhanceFormLabels(): void {
    const inputs = document.querySelectorAll('input, select, textarea');
    inputs.forEach(input => {
      const id = input.getAttribute('id');
      if (!id) {
        const generatedId = `input-${Math.random().toString(36).substr(2, 9)}`;
        input.setAttribute('id', generatedId);
      }

      const label = document.querySelector(`label[for="${input.getAttribute('id')}"]`);
      if (!label && !input.getAttribute('aria-label')) {
        const placeholder = input.getAttribute('placeholder');
        if (placeholder) {
          input.setAttribute('aria-label', placeholder);
        }
      }
    });
  }

  private addLandmarkRoles(): void {
    const header = document.querySelector('header');
    if (header && !header.getAttribute('role')) {
      header.setAttribute('role', 'banner');
    }

    const nav = document.querySelector('nav');
    if (nav && !nav.getAttribute('role')) {
      nav.setAttribute('role', 'navigation');
    }

    const main = document.querySelector('main');
    if (main && !main.getAttribute('role')) {
      main.setAttribute('role', 'main');
    }

    const footer = document.querySelector('footer');
    if (footer && !footer.getAttribute('role')) {
      footer.setAttribute('role', 'contentinfo');
    }
  }

  private setupHighContrastMode(): void {
    // Check for high contrast preference
    if (window.matchMedia('(prefers-contrast: high)').matches) {
      document.documentElement.classList.add('high-contrast');
    }

    // Listen for changes
    window.matchMedia('(prefers-contrast: high)').addEventListener('change', (e) => {
      if (e.matches) {
        document.documentElement.classList.add('high-contrast');
      } else {
        document.documentElement.classList.remove('high-contrast');
      }
    });
  }

  private setupReducedMotion(): void {
    // Check for reduced motion preference
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      document.documentElement.classList.add('reduced-motion');
    }

    // Listen for changes
    window.matchMedia('(prefers-reduced-motion: reduce)').addEventListener('change', (e) => {
      if (e.matches) {
        document.documentElement.classList.add('reduced-motion');
      } else {
        document.documentElement.classList.remove('reduced-motion');
      }
    });
  }

  private setupFocusManagement(): void {
    // Track focus history
    document.addEventListener('focusin', (event) => {
      const target = event.target as HTMLElement;
      if (target && target !== document.body) {
        this.focusHistory.push(target);
        // Keep only last 10 focus elements
        if (this.focusHistory.length > 10) {
          this.focusHistory.shift();
        }
      }
    });

    // Handle focus restoration
    document.addEventListener('visibilitychange', () => {
      if (!document.hidden && this.focusHistory.length > 0) {
        const lastFocused = this.focusHistory[this.focusHistory.length - 1];
        if (lastFocused && document.contains(lastFocused)) {
          lastFocused.focus();
        }
      }
    });
  }

  private setupARIALabels(): void {
    // Add ARIA labels to interactive elements
    const interactiveElements = document.querySelectorAll('button, a, input, select, textarea');
    interactiveElements.forEach(element => {
      if (!element.getAttribute('aria-label') && !element.getAttribute('aria-labelledby')) {
        const text = element.textContent?.trim() || element.getAttribute('placeholder') || 'Interactive element';
        element.setAttribute('aria-label', text);
      }
    });
  }

  private setupSkipLinks(): void {
    // Create skip links if they don't exist
    if (!document.querySelector('.skip-link')) {
      const skipLinks = document.createElement('div');
      skipLinks.className = 'skip-links';
      skipLinks.innerHTML = `
        <a href="#main" class="skip-link">Skip to main content</a>
        <a href="#navigation" class="skip-link">Skip to navigation</a>
        <a href="#footer" class="skip-link">Skip to footer</a>
      `;
      document.body.insertBefore(skipLinks, document.body.firstChild);
    }
  }

  private setupLiveRegions(): void {
    // Create live regions for dynamic content
    this.createLiveRegion('status', 'polite');
    this.createLiveRegion('alert', 'assertive');
    this.createLiveRegion('log', 'polite');
  }

  private createLiveRegion(id: string, politeness: 'polite' | 'assertive' | 'off'): void {
    const region = document.createElement('div');
    region.id = `live-${id}`;
    region.setAttribute('aria-live', politeness);
    region.setAttribute('aria-atomic', 'true');
    region.className = 'sr-only';
    document.body.appendChild(region);
    this.liveRegions.set(id, region);
  }

  private setupKeyboardShortcuts(): void {
    // Add common keyboard shortcuts
    this.addKeyboardShortcut('ctrl+/', () => {
      this.announce('Keyboard shortcuts help');
      this.showKeyboardShortcutsHelp();
    });

    this.addKeyboardShortcut('ctrl+shift+h', () => {
      this.announce('Going to homepage');
      window.location.href = '/';
    });

    this.addKeyboardShortcut('ctrl+shift+s', () => {
      this.announce('Search');
      const searchInput = document.querySelector('input[type="search"], input[placeholder*="search" i]') as HTMLInputElement;
      if (searchInput) {
        searchInput.focus();
      }
    });
  }

  private setupMutationObserver(): void {
    // Watch for new content and enhance it
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.type === 'childList') {
          mutation.addedNodes.forEach((node) => {
            if (node.nodeType === Node.ELEMENT_NODE) {
              this.enhanceElement(node as HTMLElement);
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

  private enhanceElement(element: HTMLElement): void {
    // Add ARIA labels to new interactive elements
    const interactiveElements = element.querySelectorAll('button, a, input, select, textarea');
    interactiveElements.forEach(el => {
      if (!el.getAttribute('aria-label') && !el.getAttribute('aria-labelledby')) {
        const text = el.textContent?.trim() || el.getAttribute('placeholder') || 'Interactive element';
        el.setAttribute('aria-label', text);
      }
    });
  }

  // Public methods
  public addKeyboardShortcut(shortcut: string, callback: () => void): void {
    this.keyboardShortcuts.set(shortcut, callback);
  }

  public announce(message: string, type: 'status' | 'alert' | 'log' = 'status'): void {
    const region = this.liveRegions.get(type);
    if (region) {
      region.textContent = message;
      // Clear after announcement
      setTimeout(() => {
        region.textContent = '';
      }, 1000);
    }
  }

  public createFocusTrap(container: HTMLElement, options: FocusTrapOptions = {}): () => void {
    const focusableElements = container.querySelectorAll([
      'a[href]',
      'button:not([disabled])',
      'input:not([disabled])',
      'select:not([disabled])',
      'textarea:not([disabled])',
      '[tabindex]:not([tabindex="-1"])'
    ].join(', ')) as NodeListOf<HTMLElement>;

    const firstElement = focusableElements[0];
    const lastElement = focusableElements[focusableElements.length - 1];

    const handleTabKey = (e: KeyboardEvent) => {
      if (e.key === 'Tab') {
        if (e.shiftKey) {
          if (document.activeElement === firstElement) {
            lastElement?.focus();
            e.preventDefault();
          }
        } else {
          if (document.activeElement === lastElement) {
            firstElement?.focus();
            e.preventDefault();
          }
        }
      }
    };

    const handleEscapeKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && options.escapeDeactivates !== false) {
        this.deactivateFocusTrap();
      }
    };

    container.addEventListener('keydown', handleTabKey);
    container.addEventListener('keydown', handleEscapeKey);

    // Focus initial element
    if (options.initialFocus) {
      options.initialFocus.focus();
    } else if (firstElement) {
      firstElement.focus();
    }

    this.focusTrapStack.push(container);

    // Return deactivate function
    return () => {
      container.removeEventListener('keydown', handleTabKey);
      container.removeEventListener('keydown', handleEscapeKey);
      this.focusTrapStack = this.focusTrapStack.filter(item => item !== container);
      
      if (options.returnFocusOnDeactivate !== false && this.focusHistory.length > 0) {
        const lastFocused = this.focusHistory[this.focusHistory.length - 1];
        if (lastFocused && document.contains(lastFocused)) {
          lastFocused.focus();
        }
      }
    };
  }

  public deactivateFocusTrap(): void {
    if (this.focusTrapStack.length > 0) {
      const container = this.focusTrapStack.pop();
      if (container) {
        // Remove event listeners and restore focus
        const focusableElements = container.querySelectorAll([
          'a[href]',
          'button:not([disabled])',
          'input:not([disabled])',
          'select:not([disabled])',
          'textarea:not([disabled])',
          '[tabindex]:not([tabindex="-1"])'
        ].join(', ')) as NodeListOf<HTMLElement>;

        focusableElements.forEach(el => {
          el.removeEventListener('keydown', () => {});
        });
      }
    }
  }

  private showKeyboardShortcutsHelp(): void {
    // Create and show keyboard shortcuts help modal
    const modal = document.createElement('div');
    modal.className = 'keyboard-shortcuts-modal';
    modal.innerHTML = `
      <div class="modal-content">
        <h2>Keyboard Shortcuts</h2>
        <ul>
          <li><kbd>Ctrl</kbd> + <kbd>/</kbd> - Show this help</li>
          <li><kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>H</kbd> - Go to homepage</li>
          <li><kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>S</kbd> - Focus search</li>
          <li><kbd>Tab</kbd> - Navigate forward</li>
          <li><kbd>Shift</kbd> + <kbd>Tab</kbd> - Navigate backward</li>
          <li><kbd>Escape</kbd> - Close modals/dropdowns</li>
        </ul>
        <button onclick="this.closest('.keyboard-shortcuts-modal').remove()">Close</button>
      </div>
    `;
    document.body.appendChild(modal);
  }

  private getKeyboardShortcut(event: KeyboardEvent): string {
    const parts = [];
    if (event.ctrlKey) parts.push('ctrl');
    if (event.altKey) parts.push('alt');
    if (event.shiftKey) parts.push('shift');
    if (event.metaKey) parts.push('meta');
    parts.push(event.key.toLowerCase());
    return parts.join('+');
  }

  public destroy(): void {
    // Clean up observers
    this.observers.forEach(observer => observer.disconnect());
    this.observers = [];

    // Clean up live regions
    this.liveRegions.forEach(region => region.remove());
    this.liveRegions.clear();

    // Clean up focus traps
    this.focusTrapStack = [];

    // Clean up keyboard shortcuts
    this.keyboardShortcuts.clear();
  }
}

// Create global instance
export const modernAccessibilityEnhancer = new ModernAccessibilityEnhancer();

export default modernAccessibilityEnhancer;
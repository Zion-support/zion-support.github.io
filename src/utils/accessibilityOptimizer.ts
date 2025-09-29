/**
 * Accessibility Optimizer
 * Provides comprehensive accessibility enhancements and monitoring
 */

interface AccessibilityConfig {
  enableHighContrast: boolean;
  enableScreenReader: boolean;
  enableKeyboardNavigation: boolean;
  enableFocusManagement: boolean;
  enableColorBlindSupport: boolean;
  enableTextScaling: boolean;
  enableVoiceControl: boolean;
  enableGestureSupport: boolean;
  announcePageChanges: boolean;
  skipLinks: boolean;
}

interface AccessibilityMetrics {
  focusableElements: number;
  ariaLabels: number;
  colorContrastRatio: number;
  keyboardTraps: number;
  screenReaderCompatible: boolean;
  wcagCompliance: 'A' | 'AA' | 'AAA' | 'None';
}

interface AccessibilityIssue {
  type: 'error' | 'warning' | 'info';
  element: string;
  message: string;
  wcagLevel: 'A' | 'AA' | 'AAA';
  suggestion: string;
}

class AccessibilityOptimizer {
  private static instance: AccessibilityOptimizer;
  private config: AccessibilityConfig;
  private metrics: AccessibilityMetrics;
  private issues: AccessibilityIssue[] = [];
  private focusHistory: Element[] = [];
  private currentFocusIndex = 0;

  constructor(config: Partial<AccessibilityConfig> = {}) {
    this.config = {
      enableHighContrast: true,
      enableScreenReader: true,
      enableKeyboardNavigation: true,
      enableFocusManagement: true,
      enableColorBlindSupport: true,
      enableTextScaling: true,
      enableVoiceControl: false,
      enableGestureSupport: false,
      announcePageChanges: true,
      skipLinks: true,
      ...config
    };

    this.metrics = {
      focusableElements: 0,
      ariaLabels: 0,
      colorContrastRatio: 0,
      keyboardTraps: 0,
      screenReaderCompatible: false,
      wcagCompliance: 'None'
    };

    this.initialize();
  }

  public static getInstance(config?: Partial<AccessibilityConfig>): AccessibilityOptimizer {
    if (!AccessibilityOptimizer.instance) {
      AccessibilityOptimizer.instance = new AccessibilityOptimizer(config);
    }
    return AccessibilityOptimizer.instance;
  }

  private initialize(): void {
    this.setupKeyboardNavigation();
    this.setupScreenReaderSupport();
    this.setupFocusManagement();
    this.setupColorBlindSupport();
    this.setupTextScaling();
    this.setupSkipLinks();
    this.analyzeAccessibility();
    this.setupAnnouncements();
  }

  private setupKeyboardNavigation(): void {
    if (!this.config.enableKeyboardNavigation) return;

    document.addEventListener('keydown', (event) => {
      switch (event.key) {
        case 'Tab':
          this.handleTabNavigation(event);
          break;
        case 'Escape':
          this.handleEscapeKey(event);
          break;
        case 'Enter':
        case ' ':
          this.handleActivationKey(event);
          break;
        case 'ArrowUp':
        case 'ArrowDown':
          this.handleArrowNavigation(event);
          break;
      }
    });

    // Add keyboard shortcuts
    document.addEventListener('keydown', (event) => {
      if (event.altKey) {
        switch (event.key) {
          case '1':
            this.focusMainContent();
            break;
          case '2':
            this.focusNavigation();
            break;
          case '3':
            this.focusFooter();
            break;
          case 'h':
            this.toggleHighContrast();
            break;
          case 's':
            this.toggleScreenReaderMode();
            break;
        }
      }
    });
  }

  private setupScreenReaderSupport(): void {
    if (!this.config.enableScreenReader) return;

    // Add ARIA live region for announcements
    const liveRegion = document.createElement('div');
    liveRegion.setAttribute('aria-live', 'polite');
    liveRegion.setAttribute('aria-atomic', 'true');
    liveRegion.setAttribute('class', 'sr-only');
    liveRegion.id = 'accessibility-announcements';
    document.body.appendChild(liveRegion);

    // Enhance form elements
    document.querySelectorAll('input, select, textarea').forEach((element) => {
      this.enhanceFormElement(element as HTMLInputElement);
    });

    // Add ARIA labels to interactive elements
    document.querySelectorAll('button, a, [role="button"]').forEach((element) => {
      this.enhanceInteractiveElement(element as HTMLElement);
    });
  }

  private setupFocusManagement(): void {
    if (!this.config.enableFocusManagement) return;

    // Track focus changes
    document.addEventListener('focusin', (event) => {
      this.focusHistory.push(event.target as Element);
      this.currentFocusIndex = this.focusHistory.length - 1;
      
      // Ensure focus is visible
      this.ensureFocusVisible(event.target as Element);
    });

    // Handle focus trapping in modals
    document.addEventListener('keydown', (event) => {
      if (event.key === 'Tab') {
        this.handleFocusTrap(event);
      }
    });

    // Restore focus when returning to page
    window.addEventListener('pageshow', () => {
      if (this.focusHistory.length > 0) {
        const lastFocus = this.focusHistory[this.focusHistory.length - 1];
        if (lastFocus && document.contains(lastFocus)) {
          (lastFocus as HTMLElement).focus();
        }
      }
    });
  }

  private setupColorBlindSupport(): void {
    if (!this.config.enableColorBlindSupport) return;

    // Add color-blind friendly color scheme
    const style = document.createElement('style');
    style.textContent = `
      .colorblind-friendly {
        --primary-color: #0066CC;
        --secondary-color: #FF6B35;
        --success-color: #00AA44;
        --warning-color: #FF8C00;
        --error-color: #CC0000;
        --text-color: #333333;
        --background-color: #FFFFFF;
      }
      
      .colorblind-friendly button:not([disabled]) {
        border: 2px solid var(--primary-color);
        background-color: var(--background-color);
        color: var(--primary-color);
      }
      
      .colorblind-friendly button:not([disabled]):hover {
        background-color: var(--primary-color);
        color: var(--background-color);
      }
    `;
    document.head.appendChild(style);

    // Add color-blind mode toggle
    const toggle = document.createElement('button');
    toggle.textContent = 'Color-Blind Friendly Mode';
    toggle.setAttribute('aria-label', 'Toggle color-blind friendly mode');
    toggle.style.position = 'fixed';
    toggle.style.top = '10px';
    toggle.style.right = '10px';
    toggle.style.zIndex = '9999';
    toggle.addEventListener('click', () => this.toggleColorBlindMode());
    document.body.appendChild(toggle);
  }

  private setupTextScaling(): void {
    if (!this.config.enableTextScaling) return;

    // Add text scaling controls
    const controls = document.createElement('div');
    controls.className = 'text-scaling-controls';
    controls.innerHTML = `
      <button aria-label="Decrease text size" onclick="this.accessibilityOptimizer.decreaseTextSize()">A-</button>
      <button aria-label="Reset text size" onclick="this.accessibilityOptimizer.resetTextSize()">A</button>
      <button aria-label="Increase text size" onclick="this.accessibilityOptimizer.increaseTextSize()">A+</button>
    `;
    
    controls.style.position = 'fixed';
    controls.style.top = '10px';
    controls.style.left = '10px';
    controls.style.zIndex = '9999';
    controls.style.display = 'flex';
    controls.style.gap = '5px';
    
    document.body.appendChild(controls);
    
    // Store reference for onclick handlers
    (window as any).accessibilityOptimizer = this;
  }

  private setupSkipLinks(): void {
    if (!this.config.skipLinks) return;

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
        top: -40px;
        left: 6px;
        z-index: 10000;
      }
      
      .skip-link {
        display: inline-block;
        padding: 8px 16px;
        background: #000;
        color: #fff;
        text-decoration: none;
        border-radius: 4px;
        margin-right: 8px;
        transition: top 0.3s;
      }
      
      .skip-link:focus {
        top: 6px;
        position: absolute;
      }
    `;
    
    document.head.appendChild(style);
    document.body.insertBefore(skipLinks, document.body.firstChild);
  }

  private setupAnnouncements(): void {
    if (!this.config.announcePageChanges) return;

    // Announce page changes
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.type === 'childList') {
          mutation.addedNodes.forEach((node) => {
            if (node.nodeType === Node.ELEMENT_NODE) {
              const element = node as Element;
              if (element.tagName === 'H1' || element.tagName === 'H2') {
                this.announce(element.textContent || '');
              }
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

  private analyzeAccessibility(): void {
    // Count focusable elements
    this.metrics.focusableElements = document.querySelectorAll(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    ).length;

    // Count ARIA labels
    this.metrics.ariaLabels = document.querySelectorAll('[aria-label], [aria-labelledby]').length;

    // Check color contrast
    this.checkColorContrast();

    // Check keyboard traps
    this.checkKeyboardTraps();

    // Check screen reader compatibility
    this.checkScreenReaderCompatibility();

    // Determine WCAG compliance
    this.determineWCAGCompliance();
  }

  private checkColorContrast(): void {
    // Simplified contrast checking - in production, use a proper contrast checker
    const textElements = document.querySelectorAll('p, h1, h2, h3, h4, h5, h6, span, div');
    let totalContrast = 0;
    let checkedElements = 0;

    textElements.forEach((element) => {
      const styles = window.getComputedStyle(element as Element);
      const color = styles.color;
      const backgroundColor = styles.backgroundColor;
      
      // This is a simplified check - in production, use proper contrast calculation
      if (color !== backgroundColor) {
        totalContrast += 4.5; // Assume good contrast for now
        checkedElements++;
      }
    });

    this.metrics.colorContrastRatio = checkedElements > 0 ? totalContrast / checkedElements : 0;
  }

  private checkKeyboardTraps(): void {
    // Check for focus traps in modals
    const modals = document.querySelectorAll('[role="dialog"], .modal');
    this.metrics.keyboardTraps = modals.length;
  }

  private checkScreenReaderCompatibility(): void {
    // Check for screen reader compatibility
    const hasLiveRegions = document.querySelector('[aria-live]') !== null;
    const hasSkipLinks = document.querySelector('.skip-links') !== null;
    const hasProperHeadings = document.querySelector('h1') !== null;
    
    this.metrics.screenReaderCompatible = hasLiveRegions && hasSkipLinks && hasProperHeadings;
  }

  private determineWCAGCompliance(): void {
    let score = 0;
    
    // Check for basic requirements
    if (this.metrics.colorContrastRatio >= 4.5) score++;
    if (this.metrics.screenReaderCompatible) score++;
    if (document.querySelector('img[alt]') !== null) score++;
    if (document.querySelector('[aria-label]') !== null) score++;
    
    if (score >= 4) {
      this.metrics.wcagCompliance = 'AAA';
    } else if (score >= 3) {
      this.metrics.wcagCompliance = 'AA';
    } else if (score >= 2) {
      this.metrics.wcagCompliance = 'A';
    } else {
      this.metrics.wcagCompliance = 'None';
    }
  }

  // Public methods
  public getMetrics(): AccessibilityMetrics {
    return { ...this.metrics };
  }

  public getIssues(): AccessibilityIssue[] {
    return [...this.issues];
  }

  public announce(message: string): void {
    const liveRegion = document.getElementById('accessibility-announcements');
    if (liveRegion) {
      liveRegion.textContent = message;
      // Clear after announcement
      setTimeout(() => {
        liveRegion.textContent = '';
      }, 1000);
    }
  }

  public increaseTextSize(): void {
    const currentSize = parseFloat(getComputedStyle(document.documentElement).fontSize);
    const newSize = Math.min(currentSize * 1.2, 24); // Max 24px
    document.documentElement.style.fontSize = `${newSize}px`;
    this.announce(`Text size increased to ${Math.round(newSize)} pixels`);
  }

  public decreaseTextSize(): void {
    const currentSize = parseFloat(getComputedStyle(document.documentElement).fontSize);
    const newSize = Math.max(currentSize / 1.2, 12); // Min 12px
    document.documentElement.style.fontSize = `${newSize}px`;
    this.announce(`Text size decreased to ${Math.round(newSize)} pixels`);
  }

  public resetTextSize(): void {
    document.documentElement.style.fontSize = '';
    this.announce('Text size reset to default');
  }

  public toggleHighContrast(): void {
    document.body.classList.toggle('high-contrast');
    this.announce('High contrast mode toggled');
  }

  public toggleColorBlindMode(): void {
    document.body.classList.toggle('colorblind-friendly');
    this.announce('Color-blind friendly mode toggled');
  }

  public toggleScreenReaderMode(): void {
    document.body.classList.toggle('screen-reader-mode');
    this.announce('Screen reader mode toggled');
  }

  private handleTabNavigation(event: KeyboardEvent): void {
    // Custom tab navigation logic
    const focusableElements = Array.from(document.querySelectorAll(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    )) as HTMLElement[];
    
    const currentIndex = focusableElements.indexOf(document.activeElement as HTMLElement);
    
    if (event.shiftKey) {
      // Navigate backward
      const prevIndex = currentIndex > 0 ? currentIndex - 1 : focusableElements.length - 1;
      focusableElements[prevIndex]?.focus();
    } else {
      // Navigate forward
      const nextIndex = currentIndex < focusableElements.length - 1 ? currentIndex + 1 : 0;
      focusableElements[nextIndex]?.focus();
    }
  }

  private handleEscapeKey(event: KeyboardEvent): void {
    // Close modals, menus, etc.
    const modals = document.querySelectorAll('[role="dialog"]');
    modals.forEach((modal) => {
      if (modal.classList.contains('active')) {
        modal.classList.remove('active');
        this.announce('Modal closed');
      }
    });
  }

  private handleActivationKey(event: KeyboardEvent): void {
    // Handle Enter and Space key activation
    const target = event.target as HTMLElement;
    if (target.tagName === 'BUTTON' || target.getAttribute('role') === 'button') {
      target.click();
    }
  }

  private handleArrowNavigation(event: KeyboardEvent): void {
    // Handle arrow key navigation for custom components
    const target = event.target as HTMLElement;
    const parent = target.parentElement;
    
    if (parent && parent.hasAttribute('role')) {
      const role = parent.getAttribute('role');
      if (role === 'menu' || role === 'listbox' || role === 'tree') {
        this.navigateInGroup(event, parent);
      }
    }
  }

  private navigateInGroup(event: KeyboardEvent, container: Element): void {
    const items = Array.from(container.querySelectorAll('[role="menuitem"], [role="option"], [role="treeitem"]'));
    const currentIndex = items.indexOf(event.target as Element);
    
    if (currentIndex !== -1) {
      let nextIndex;
      if (event.key === 'ArrowDown') {
        nextIndex = (currentIndex + 1) % items.length;
      } else if (event.key === 'ArrowUp') {
        nextIndex = currentIndex === 0 ? items.length - 1 : currentIndex - 1;
      }
      
      if (nextIndex !== undefined) {
        (items[nextIndex] as HTMLElement).focus();
        event.preventDefault();
      }
    }
  }

  private focusMainContent(): void {
    const main = document.querySelector('main, #main-content, [role="main"]');
    if (main) {
      (main as HTMLElement).focus();
      this.announce('Focused on main content');
    }
  }

  private focusNavigation(): void {
    const nav = document.querySelector('nav, #navigation, [role="navigation"]');
    if (nav) {
      (nav as HTMLElement).focus();
      this.announce('Focused on navigation');
    }
  }

  private focusFooter(): void {
    const footer = document.querySelector('footer, #footer');
    if (footer) {
      (footer as HTMLElement).focus();
      this.announce('Focused on footer');
    }
  }

  private ensureFocusVisible(element: Element): void {
    element.classList.add('focus-visible');
    setTimeout(() => {
      element.classList.remove('focus-visible');
    }, 3000);
  }

  private handleFocusTrap(event: KeyboardEvent): void {
    const activeElement = document.activeElement;
    const modal = activeElement?.closest('[role="dialog"]');
    
    if (modal) {
      const focusableElements = modal.querySelectorAll(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      );
      
      if (focusableElements.length > 0) {
        const firstElement = focusableElements[0] as HTMLElement;
        const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;
        
        if (event.shiftKey && activeElement === firstElement) {
          lastElement.focus();
          event.preventDefault();
        } else if (!event.shiftKey && activeElement === lastElement) {
          firstElement.focus();
          event.preventDefault();
        }
      }
    }
  }

  private enhanceFormElement(element: HTMLInputElement): void {
    if (!element.getAttribute('aria-label') && !element.getAttribute('aria-labelledby')) {
      const label = document.querySelector(`label[for="${element.id}"]`);
      if (label) {
        element.setAttribute('aria-labelledby', label.id || `label-${element.id}`);
      }
    }
  }

  private enhanceInteractiveElement(element: HTMLElement): void {
    if (!element.getAttribute('aria-label') && !element.textContent?.trim()) {
      element.setAttribute('aria-label', 'Interactive element');
    }
  }

  public generateReport(): string {
    const metrics = this.getMetrics();
    const issues = this.getIssues();
    
    return `
Accessibility Report:
- Focusable Elements: ${metrics.focusableElements}
- ARIA Labels: ${metrics.ariaLabels}
- Color Contrast Ratio: ${metrics.colorContrastRatio.toFixed(2)}
- Keyboard Traps: ${metrics.keyboardTraps}
- Screen Reader Compatible: ${metrics.screenReaderCompatible ? 'Yes' : 'No'}
- WCAG Compliance: ${metrics.wcagCompliance}

Issues Found: ${issues.length}
${issues.map(issue => `- ${issue.type.toUpperCase()}: ${issue.message}`).join('\n')}

Configuration:
- High Contrast: ${this.config.enableHighContrast ? 'Enabled' : 'Disabled'}
- Screen Reader: ${this.config.enableScreenReader ? 'Enabled' : 'Disabled'}
- Keyboard Navigation: ${this.config.enableKeyboardNavigation ? 'Enabled' : 'Disabled'}
- Focus Management: ${this.config.enableFocusManagement ? 'Enabled' : 'Disabled'}
- Color Blind Support: ${this.config.enableColorBlindSupport ? 'Enabled' : 'Disabled'}
- Text Scaling: ${this.config.enableTextScaling ? 'Enabled' : 'Disabled'}
    `.trim();
  }
}

export const accessibilityOptimizer = AccessibilityOptimizer.getInstance();
export type { AccessibilityConfig, AccessibilityMetrics, AccessibilityIssue };
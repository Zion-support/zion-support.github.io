// Accessibility Enhancement Utilities

interface AccessibilityConfig {
  enableKeyboardNavigation: boolean;
  enableScreenReaderSupport: boolean;
  enableHighContrast: boolean;
  enableFocusManagement: boolean;
  enableAriaEnhancements: boolean;
  enableMotionReduction: boolean;
}

interface AccessibilityViolation {
  type: string;
  element: string;
  description: string;
  severity: 'low' | 'medium' | 'high' | 'critical';
  timestamp: number;
}

export class AccessibilityEnhancer {
  private static instance: AccessibilityEnhancer;
  private config: AccessibilityConfig;
  private violations: AccessibilityViolation[] = [];
  private focusableElements: NodeListOf<Element> | null = null;
  private currentFocusIndex = -1;

  private constructor(config: Partial<AccessibilityConfig> = {}) {
    this.config = {
      enableKeyboardNavigation: true,
      enableScreenReaderSupport: true,
      enableHighContrast: true,
      enableFocusManagement: true,
      enableAriaEnhancements: true,
      enableMotionReduction: true,
      ...config
    };
    this.initialize();
  }

  public static getInstance(config?: Partial<AccessibilityConfig>): AccessibilityEnhancer {
    if (!AccessibilityEnhancer.instance) {
      AccessibilityEnhancer.instance = new AccessibilityEnhancer(config);
    }
    return AccessibilityEnhancer.instance;
  }

  private initialize(): void {
    if (this.config.enableKeyboardNavigation) {
      this.enhanceKeyboardNavigation();
    }
    if (this.config.enableScreenReaderSupport) {
      this.enhanceScreenReaderSupport();
    }
    if (this.config.enableHighContrast) {
      this.enableHighContrastMode();
    }
    if (this.config.enableFocusManagement) {
      this.improveFocusManagement();
    }
    if (this.config.enableAriaEnhancements) {
      this.enhanceAriaAttributes();
    }
    if (this.config.enableMotionReduction) {
      this.respectMotionPreferences();
    }

    this.runAccessibilityAudit();
    this.setupAccessibilityMonitoring();
  }

  private enhanceKeyboardNavigation(): void {
    // Add skip links
    this.addSkipLinks();
    
    // Enhance tab navigation
    this.enhanceTabNavigation();
    
    // Add keyboard shortcuts
    this.addKeyboardShortcuts();
    
    // Improve focus indicators
    this.improveFocusIndicators();
  }

  private addSkipLinks(): void {
    const skipLink = document.createElement('a');
    skipLink.href = '#main-content';
    skipLink.textContent = 'Skip to main content';
    skipLink.className = 'skip-link';
    skipLink.style.cssText = `
      position: absolute;
      top: -40px;
      left: 6px;
      background: #000;
      color: #fff;
      padding: 8px;
      text-decoration: none;
      z-index: 1000;
      border-radius: 4px;
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

  private enhanceTabNavigation(): void {
    // Get all focusable elements
    this.updateFocusableElements();
    
    document.addEventListener('keydown', (event) => {
      if (event.key === 'Tab') {
        this.handleTabNavigation(event);
      }
    });
  }

  private updateFocusableElements(): void {
    const focusableSelectors = [
      'a[href]',
      'button:not([disabled])',
      'input:not([disabled])',
      'select:not([disabled])',
      'textarea:not([disabled])',
      '[tabindex]:not([tabindex="-1"])',
      'details',
      'summary'
    ];
    
    this.focusableElements = document.querySelectorAll(focusableSelectors.join(', '));
  }

  private handleTabNavigation(event: KeyboardEvent): void {
    if (!this.focusableElements) return;
    
    const currentElement = document.activeElement;
    const currentIndex = Array.from(this.focusableElements).indexOf(currentElement as Element);
    
    if (event.shiftKey) {
      // Shift + Tab (backward)
      if (currentIndex <= 0) {
        event.preventDefault();
        (this.focusableElements[this.focusableElements.length - 1] as HTMLElement).focus();
      }
    } else {
      // Tab (forward)
      if (currentIndex >= this.focusableElements.length - 1) {
        event.preventDefault();
        (this.focusableElements[0] as HTMLElement).focus();
      }
    }
  }

  private addKeyboardShortcuts(): void {
    document.addEventListener('keydown', (event) => {
      // Alt + M: Go to main content
      if (event.altKey && event.key === 'm') {
        event.preventDefault();
        const mainContent = document.getElementById('main-content') || document.querySelector('main');
        if (mainContent) {
          (mainContent as HTMLElement).focus();
        }
      }
      
      // Alt + N: Go to navigation
      if (event.altKey && event.key === 'n') {
        event.preventDefault();
        const nav = document.querySelector('nav') || document.querySelector('[role="navigation"]');
        if (nav) {
          const firstLink = nav.querySelector('a, button');
          if (firstLink) {
            (firstLink as HTMLElement).focus();
          }
        }
      }
      
      // Alt + S: Go to search
      if (event.altKey && event.key === 's') {
        event.preventDefault();
        const search = document.querySelector('input[type="search"]') || document.querySelector('[role="search"] input');
        if (search) {
          (search as HTMLElement).focus();
        }
      }
      
      // Escape: Close modals/dropdowns
      if (event.key === 'Escape') {
        this.closeModalsAndDropdowns();
      }
    });
  }

  private closeModalsAndDropdowns(): void {
    // Close modals
    const modals = document.querySelectorAll('[role="dialog"], .modal, .overlay');
    modals.forEach(modal => {
      const closeButton = modal.querySelector('[aria-label="Close"], .close, .modal-close');
      if (closeButton) {
        (closeButton as HTMLElement).click();
      }
    });
    
    // Close dropdowns
    const dropdowns = document.querySelectorAll('[aria-expanded="true"]');
    dropdowns.forEach(dropdown => {
      dropdown.setAttribute('aria-expanded', 'false');
    });
  }

  private improveFocusIndicators(): void {
    const style = document.createElement('style');
    style.textContent = `
      *:focus {
        outline: 2px solid #005fcc;
        outline-offset: 2px;
      }
      
      *:focus:not(:focus-visible) {
        outline: none;
      }
      
      *:focus-visible {
        outline: 2px solid #005fcc;
        outline-offset: 2px;
      }
      
      .focus-indicator {
        position: relative;
      }
      
      .focus-indicator:focus::after {
        content: '';
        position: absolute;
        top: -2px;
        left: -2px;
        right: -2px;
        bottom: -2px;
        border: 2px solid #005fcc;
        border-radius: 4px;
        pointer-events: none;
      }
    `;
    document.head.appendChild(style);
  }

  private enhanceScreenReaderSupport(): void {
    // Add live regions for dynamic content
    this.addLiveRegions();
    
    // Enhance form labels
    this.enhanceFormLabels();
    
    // Add descriptive text for complex elements
    this.addDescriptiveText();
    
    // Announce page changes
    this.announcePageChanges();
  }

  private addLiveRegions(): void {
    // Add polite live region
    const politeRegion = document.createElement('div');
    politeRegion.setAttribute('aria-live', 'polite');
    politeRegion.setAttribute('aria-atomic', 'true');
    politeRegion.className = 'sr-only';
    politeRegion.id = 'live-region-polite';
    document.body.appendChild(politeRegion);
    
    // Add assertive live region
    const assertiveRegion = document.createElement('div');
    assertiveRegion.setAttribute('aria-live', 'assertive');
    assertiveRegion.setAttribute('aria-atomic', 'true');
    assertiveRegion.className = 'sr-only';
    assertiveRegion.id = 'live-region-assertive';
    document.body.appendChild(assertiveRegion);
    
    // Add screen reader only styles
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

  private enhanceFormLabels(): void {
    const inputs = document.querySelectorAll('input, select, textarea');
    inputs.forEach(input => {
      const inputElement = input as HTMLInputElement;
      
      // Check if input has a label
      const id = inputElement.id;
      if (id) {
        const label = document.querySelector(`label[for="${id}"]`);
        if (!label) {
          this.reportViolation({
            type: 'Missing Label',
            element: inputElement.tagName.toLowerCase(),
            description: `Input element with id "${id}" is missing a label`,
            severity: 'high',
            timestamp: Date.now()
          });
        }
      } else {
        // Check if input is wrapped in a label
        const parentLabel = inputElement.closest('label');
        if (!parentLabel && !inputElement.getAttribute('aria-label') && !inputElement.getAttribute('aria-labelledby')) {
          this.reportViolation({
            type: 'Missing Label',
            element: inputElement.tagName.toLowerCase(),
            description: 'Input element is missing proper labeling',
            severity: 'high',
            timestamp: Date.now()
          });
        }
      }
      
      // Add required indicators
      if (inputElement.required && !inputElement.getAttribute('aria-required')) {
        inputElement.setAttribute('aria-required', 'true');
      }
      
      // Add invalid indicators
      inputElement.addEventListener('invalid', () => {
        inputElement.setAttribute('aria-invalid', 'true');
      });
      
      inputElement.addEventListener('input', () => {
        if (inputElement.validity.valid) {
          inputElement.removeAttribute('aria-invalid');
        }
      });
    });
  }

  private addDescriptiveText(): void {
    // Add descriptions for complex elements
    const complexElements = document.querySelectorAll('canvas, svg, [role="img"]');
    complexElements.forEach(element => {
      if (!element.getAttribute('alt') && !element.getAttribute('aria-label') && !element.getAttribute('aria-labelledby')) {
        this.reportViolation({
          type: 'Missing Description',
          element: element.tagName.toLowerCase(),
          description: 'Complex element is missing descriptive text',
          severity: 'medium',
          timestamp: Date.now()
        });
      }
    });
  }

  private announcePageChanges(): void {
    // Monitor for route changes (for SPAs)
    let currentPath = window.location.pathname;
    
    const observer = new MutationObserver(() => {
      if (window.location.pathname !== currentPath) {
        currentPath = window.location.pathname;
        this.announceToScreenReader(`Navigated to ${document.title}`, 'polite');
      }
    });
    
    observer.observe(document.body, { childList: true, subtree: true });
  }

  private enableHighContrastMode(): void {
    // Detect system preference for high contrast
    const prefersHighContrast = window.matchMedia('(prefers-contrast: high)').matches;
    
    if (prefersHighContrast) {
      document.body.classList.add('high-contrast');
    }
    
    // Add toggle button
    const toggleButton = document.createElement('button');
    toggleButton.textContent = 'Toggle High Contrast';
    toggleButton.className = 'accessibility-toggle';
    toggleButton.setAttribute('aria-label', 'Toggle high contrast mode');
    
    toggleButton.addEventListener('click', () => {
      document.body.classList.toggle('high-contrast');
      const isEnabled = document.body.classList.contains('high-contrast');
      this.announceToScreenReader(
        `High contrast mode ${isEnabled ? 'enabled' : 'disabled'}`,
        'polite'
      );
    });
    
    // Add high contrast styles
    const style = document.createElement('style');
    style.textContent = `
      .high-contrast {
        filter: contrast(150%);
      }
      
      .high-contrast * {
        color: #000 !important;
        background-color: #fff !important;
        border-color: #000 !important;
      }
      
      .high-contrast a {
        color: #0000ff !important;
      }
      
      .high-contrast button {
        background-color: #000 !important;
        color: #fff !important;
      }
      
      .accessibility-toggle {
        position: fixed;
        top: 10px;
        right: 10px;
        z-index: 1000;
        background: #000;
        color: #fff;
        border: 1px solid #fff;
        padding: 8px 12px;
        border-radius: 4px;
        cursor: pointer;
      }
    `;
    document.head.appendChild(style);
    document.body.appendChild(toggleButton);
  }

  private improveFocusManagement(): void {
    // Focus management for modals
    this.manageFocusForModals();
    
    // Focus management for dynamic content
    this.manageFocusForDynamicContent();
  }

  private manageFocusForModals(): void {
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        mutation.addedNodes.forEach((node) => {
          if (node.nodeType === Node.ELEMENT_NODE) {
            const element = node as Element;
            if (element.matches('[role="dialog"], .modal')) {
              this.trapFocusInModal(element as HTMLElement);
            }
          }
        });
      });
    });
    
    observer.observe(document.body, { childList: true, subtree: true });
  }

  private trapFocusInModal(modal: HTMLElement): void {
    const focusableElements = modal.querySelectorAll(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );
    
    if (focusableElements.length === 0) return;
    
    const firstElement = focusableElements[0] as HTMLElement;
    const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;
    
    // Focus first element
    firstElement.focus();
    
    const trapFocus = (event: KeyboardEvent) => {
      if (event.key === 'Tab') {
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
    };
    
    modal.addEventListener('keydown', trapFocus);
    
    // Clean up when modal is removed
    const cleanupObserver = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        mutation.removedNodes.forEach((node) => {
          if (node === modal) {
            modal.removeEventListener('keydown', trapFocus);
            cleanupObserver.disconnect();
          }
        });
      });
    });
    
    cleanupObserver.observe(document.body, { childList: true, subtree: true });
  }

  private manageFocusForDynamicContent(): void {
    // Focus management for dynamically added content
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.type === 'childList' && mutation.addedNodes.length > 0) {
          // Focus the first focusable element in new content
          mutation.addedNodes.forEach((node) => {
            if (node.nodeType === Node.ELEMENT_NODE) {
              const element = node as Element;
              const focusable = element.querySelector('button, [href], input, select, textarea');
              if (focusable) {
                setTimeout(() => (focusable as HTMLElement).focus(), 100);
              }
            }
          });
        }
      });
    });
    
    observer.observe(document.body, { childList: true, subtree: true });
  }

  private enhanceAriaAttributes(): void {
    // Auto-add ARIA attributes where missing
    this.addMissingAriaAttributes();
    
    // Enhance existing ARIA attributes
    this.enhanceExistingAriaAttributes();
  }

  private addMissingAriaAttributes(): void {
    // Add role attributes
    const nav = document.querySelector('nav:not([role])');
    if (nav) nav.setAttribute('role', 'navigation');
    
    const main = document.querySelector('main:not([role])');
    if (main) main.setAttribute('role', 'main');
    
    const aside = document.querySelectorAll('aside:not([role])');
    aside.forEach(el => el.setAttribute('role', 'complementary'));
    
    // Add aria-expanded to dropdowns
    const dropdownToggles = document.querySelectorAll('[data-toggle="dropdown"]:not([aria-expanded])');
    dropdownToggles.forEach(toggle => {
      toggle.setAttribute('aria-expanded', 'false');
    });
    
    // Add aria-hidden to decorative elements
    const decorativeElements = document.querySelectorAll('.icon:not([aria-hidden]), .decoration:not([aria-hidden])');
    decorativeElements.forEach(el => el.setAttribute('aria-hidden', 'true'));
  }

  private enhanceExistingAriaAttributes(): void {
    // Ensure aria-expanded is properly managed
    const expandableElements = document.querySelectorAll('[aria-expanded]');
    expandableElements.forEach(element => {
      element.addEventListener('click', () => {
        const isExpanded = element.getAttribute('aria-expanded') === 'true';
        element.setAttribute('aria-expanded', (!isExpanded).toString());
      });
    });
  }

  private respectMotionPreferences(): void {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    
    if (prefersReducedMotion) {
      const style = document.createElement('style');
      style.textContent = `
        *,
        *::before,
        *::after {
          animation-duration: 0.01ms !important;
          animation-iteration-count: 1 !important;
          transition-duration: 0.01ms !important;
          scroll-behavior: auto !important;
        }
      `;
      document.head.appendChild(style);
      document.body.classList.add('reduced-motion');
    }
  }

  private runAccessibilityAudit(): void {
    // Check for common accessibility issues
    this.auditImages();
    this.auditHeadings();
    this.auditLinks();
    this.auditForms();
    this.auditColorContrast();
  }

  private auditImages(): void {
    const images = document.querySelectorAll('img');
    images.forEach(img => {
      if (!img.alt && !img.getAttribute('aria-label')) {
        this.reportViolation({
          type: 'Missing Alt Text',
          element: 'img',
          description: 'Image is missing alternative text',
          severity: 'high',
          timestamp: Date.now()
        });
      }
    });
  }

  private auditHeadings(): void {
    const headings = document.querySelectorAll('h1, h2, h3, h4, h5, h6');
    let previousLevel = 0;
    
    headings.forEach(heading => {
      const level = parseInt(heading.tagName.charAt(1));
      
      if (level > previousLevel + 1) {
        this.reportViolation({
          type: 'Heading Hierarchy',
          element: heading.tagName.toLowerCase(),
          description: `Heading level ${level} follows level ${previousLevel}, skipping levels`,
          severity: 'medium',
          timestamp: Date.now()
        });
      }
      
      previousLevel = level;
    });
  }

  private auditLinks(): void {
    const links = document.querySelectorAll('a');
    links.forEach(link => {
      const linkText = link.textContent?.trim();
      if (!linkText || linkText.toLowerCase() === 'click here' || linkText.toLowerCase() === 'read more') {
        this.reportViolation({
          type: 'Unclear Link Text',
          element: 'a',
          description: 'Link has unclear or missing text',
          severity: 'medium',
          timestamp: Date.now()
        });
      }
    });
  }

  private auditForms(): void {
    const forms = document.querySelectorAll('form');
    forms.forEach(form => {
      const inputs = form.querySelectorAll('input, select, textarea');
      inputs.forEach(input => {
        const inputElement = input as HTMLInputElement;
        if (inputElement.required && !form.querySelector(`label[for="${inputElement.id}"]`)) {
          this.reportViolation({
            type: 'Required Field Missing Label',
            element: inputElement.tagName.toLowerCase(),
            description: 'Required form field is missing proper labeling',
            severity: 'high',
            timestamp: Date.now()
          });
        }
      });
    });
  }

  private auditColorContrast(): void {
    // This would require more complex color analysis
    // For now, just check for common low-contrast combinations
    const elements = document.querySelectorAll('*');
    elements.forEach(element => {
      const styles = window.getComputedStyle(element);
      const color = styles.color;
      const backgroundColor = styles.backgroundColor;
      
      // Basic check for very light text on light background
      if (color === 'rgb(255, 255, 255)' && backgroundColor === 'rgb(255, 255, 255)') {
        this.reportViolation({
          type: 'Poor Color Contrast',
          element: element.tagName.toLowerCase(),
          description: 'White text on white background',
          severity: 'critical',
          timestamp: Date.now()
        });
      }
    });
  }

  private setupAccessibilityMonitoring(): void {
    // Monitor for new accessibility issues
    const observer = new MutationObserver(() => {
      setTimeout(() => this.runAccessibilityAudit(), 100);
    });
    
    observer.observe(document.body, { childList: true, subtree: true });
  }

  private announceToScreenReader(message: string, priority: 'polite' | 'assertive' = 'polite'): void {
    const liveRegion = document.getElementById(`live-region-${priority}`);
    if (liveRegion) {
      liveRegion.textContent = message;
      setTimeout(() => {
        liveRegion.textContent = '';
      }, 1000);
    }
  }

  private reportViolation(violation: AccessibilityViolation): void {
    this.violations.push(violation);
    
    // Keep only last 100 violations
    if (this.violations.length > 100) {
      this.violations.shift();
    }
    
    // Log in development
    if (process.env.NODE_ENV === 'development') {
      console.warn('Accessibility Violation:', violation);
    }
  }

  public getViolations(): AccessibilityViolation[] {
    return [...this.violations];
  }

  public clearViolations(): void {
    this.violations = [];
  }

  public cleanup(): void {
    this.violations = [];
  }
}

// Utility functions
export const enhanceAccessibility = (config?: Partial<AccessibilityConfig>) => {
  return AccessibilityEnhancer.getInstance(config);
};

export const announceToScreenReader = (message: string, priority: 'polite' | 'assertive' = 'polite') => {
  const enhancer = AccessibilityEnhancer.getInstance();
  enhancer['announceToScreenReader'](message, priority);
};

// Initialize accessibility enhancer
export const accessibilityEnhancer = AccessibilityEnhancer.getInstance();
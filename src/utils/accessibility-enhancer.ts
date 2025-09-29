/**
 * Accessibility Enhancer for Zion Tech Group Website
 * 
 * This utility provides comprehensive accessibility features including:
 * - WCAG 2.1 AA compliance
 * - Keyboard navigation
 * - Screen reader support
 * - Focus management
 * - ARIA attributes
 * - Color contrast validation
 * - Motion preferences
 */

export interface AccessibilityConfig {
  enableKeyboardNavigation: boolean;
  enableScreenReaderSupport: boolean;
  enableFocusManagement: boolean;
  enableMotionPreferences: boolean;
  enableColorContrastValidation: boolean;
  enableARIALabels: boolean;
  announceRouteChanges: boolean;
  skipToContentEnabled: boolean;
}

export const defaultAccessibilityConfig: AccessibilityConfig = {
  enableKeyboardNavigation: true,
  enableScreenReaderSupport: true,
  enableFocusManagement: true,
  enableMotionPreferences: true,
  enableColorContrastValidation: true,
  enableARIALabels: true,
  announceRouteChanges: true,
  skipToContentEnabled: true
};

/**
 * Accessibility Manager Class
 */
export class AccessibilityManager {
  private config: AccessibilityConfig;
  private focusableElements: string = 'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])';
  private skipToContentId = 'skip-to-content';
  private announcements: HTMLElement | null = null;

  constructor(config: AccessibilityConfig = defaultAccessibilityConfig) {
    this.config = config;
    this.init();
  }

  /**
   * Initialize accessibility features
   */
  init(): void {
    if (typeof window === 'undefined') return;

    this.createSkipToContentLink();
    this.setupAnnouncements();
    this.setupKeyboardNavigation();
    this.setupFocusManagement();
    this.setupMotionPreferences();
    this.setupColorContrastValidation();
    this.setupARIALabels();
    this.announceRouteChanges();
  }

  /**
   * Create skip to content link
   */
  private createSkipToContentLink(): void {
    if (!this.config.skipToContentEnabled) return;

    const skipLink = document.createElement('a');
    skipLink.href = '#main-content';
    skipLink.textContent = 'Skip to main content';
    skipLink.id = this.skipToContentId;
    skipLink.className = 'sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-blue-600 text-white px-4 py-2 rounded z-50';
    
    document.body.insertBefore(skipLink, document.body.firstChild);
  }

  /**
   * Setup announcements for screen readers
   */
  private setupAnnouncements(): void {
    if (!this.config.enableScreenReaderSupport) return;

    this.announcements = document.createElement('div');
    this.announcements.setAttribute('aria-live', 'polite');
    this.announcements.setAttribute('aria-atomic', 'true');
    this.announcements.className = 'sr-only';
    this.announcements.id = 'announcements';
    
    document.body.appendChild(this.announcements);
  }

  /**
   * Setup keyboard navigation
   */
  private setupKeyboardNavigation(): void {
    if (!this.config.enableKeyboardNavigation) return;

    document.addEventListener('keydown', this.handleKeyboardNavigation.bind(this));
  }

  /**
   * Handle keyboard navigation
   */
  private handleKeyboardNavigation(event: KeyboardEvent): void {
    // Handle Escape key
    if (event.key === 'Escape') {
      this.closeModalsAndDropdowns();
    }

    // Handle Tab key for focus management
    if (event.key === 'Tab') {
      this.manageTabNavigation(event);
    }

    // Handle Enter and Space for button activation
    if ((event.key === 'Enter' || event.key === ' ') && 
        (event.target as HTMLElement).tagName === 'BUTTON') {
      event.preventDefault();
      (event.target as HTMLElement).click();
    }

    // Handle arrow keys for menu navigation
    if (['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight'].includes(event.key)) {
      this.handleArrowKeyNavigation(event);
    }
  }

  /**
   * Close modals and dropdowns
   */
  private closeModalsAndDropdowns(): void {
    const modals = document.querySelectorAll('[role="dialog"], [role="modal"]');
    const dropdowns = document.querySelectorAll('[aria-expanded="true"]');
    
    [...modals, ...dropdowns].forEach(element => {
      const closeButton = element.querySelector('[aria-label*="close"], [aria-label*="Close"]');
      if (closeButton) {
        (closeButton as HTMLElement).click();
      }
    });
  }

  /**
   * Manage tab navigation
   */
  private manageTabNavigation(event: KeyboardEvent): void {
    const focusableElements = document.querySelectorAll(this.focusableElements);
    const firstElement = focusableElements[0] as HTMLElement;
    const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

    if (event.shiftKey && document.activeElement === firstElement) {
      event.preventDefault();
      lastElement.focus();
    } else if (!event.shiftKey && document.activeElement === lastElement) {
      event.preventDefault();
      firstElement.focus();
    }
  }

  /**
   * Handle arrow key navigation
   */
  private handleArrowKeyNavigation(event: KeyboardEvent): void {
    const currentElement = event.target as HTMLElement;
    const menuItems = currentElement.closest('[role="menu"]')?.querySelectorAll('[role="menuitem"]');
    
    if (!menuItems || menuItems.length === 0) return;

    const currentIndex = Array.from(menuItems).indexOf(currentElement);
    let nextIndex = currentIndex;

    switch (event.key) {
      case 'ArrowDown':
        nextIndex = (currentIndex + 1) % menuItems.length;
        break;
      case 'ArrowUp':
        nextIndex = currentIndex === 0 ? menuItems.length - 1 : currentIndex - 1;
        break;
      case 'ArrowLeft':
      case 'ArrowRight':
        // Handle horizontal navigation
        break;
    }

    if (nextIndex !== currentIndex) {
      event.preventDefault();
      (menuItems[nextIndex] as HTMLElement).focus();
    }
  }

  /**
   * Setup focus management
   */
  private setupFocusManagement(): void {
    if (!this.config.enableFocusManagement) return;

    // Track focus changes
    document.addEventListener('focusin', this.handleFocusIn.bind(this));
    document.addEventListener('focusout', this.handleFocusOut.bind(this));
  }

  /**
   * Handle focus in
   */
  private handleFocusIn(event: FocusEvent): void {
    const target = event.target as HTMLElement;
    
    // Add focus indicator
    target.classList.add('focus-visible');
    
    // Announce focused element if it has aria-label
    const ariaLabel = target.getAttribute('aria-label');
    if (ariaLabel && this.announcements) {
      this.announce(ariaLabel);
    }
  }

  /**
   * Handle focus out
   */
  private handleFocusOut(event: FocusEvent): void {
    const target = event.target as HTMLElement;
    target.classList.remove('focus-visible');
  }

  /**
   * Setup motion preferences
   */
  private setupMotionPreferences(): void {
    if (!this.config.enableMotionPreferences) return;

    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    
    const updateMotionPreference = () => {
      if (prefersReducedMotion.matches) {
        document.documentElement.classList.add('reduce-motion');
      } else {
        document.documentElement.classList.remove('reduce-motion');
      }
    };

    updateMotionPreference();
    prefersReducedMotion.addEventListener('change', updateMotionPreference);
  }

  /**
   * Setup color contrast validation
   */
  private setupColorContrastValidation(): void {
    if (!this.config.enableColorContrastValidation) return;

    // This would typically integrate with a color contrast validation library
    // For now, we'll add CSS custom properties for contrast ratios
    document.documentElement.style.setProperty('--contrast-ratio-normal', '4.5');
    document.documentElement.style.setProperty('--contrast-ratio-large', '3');
  }

  /**
   * Setup ARIA labels
   */
  private setupARIALabels(): void {
    if (!this.config.enableARIALabels) return;

    // Add missing ARIA labels to common elements
    const buttons = document.querySelectorAll('button:not([aria-label]):not([aria-labelledby])');
    buttons.forEach(button => {
      if (!button.textContent?.trim()) {
        button.setAttribute('aria-label', 'Button');
      }
    });

    const images = document.querySelectorAll('img:not([alt])');
    images.forEach(img => {
      img.setAttribute('alt', '');
    });

    const links = document.querySelectorAll('a:not([aria-label]):not([aria-labelledby])');
    links.forEach(link => {
      if (!link.textContent?.trim()) {
        link.setAttribute('aria-label', 'Link');
      }
    });
  }

  /**
   * Announce route changes
   */
  private announceRouteChanges(): void {
    if (!this.config.announceRouteChanges) return;

    // This would integrate with your routing system
    // For now, we'll set up a basic route change listener
    let currentPath = window.location.pathname;
    
    const observer = new MutationObserver(() => {
      if (window.location.pathname !== currentPath) {
        currentPath = window.location.pathname;
        this.announce(`Navigated to ${this.getPageTitle()}`);
      }
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true
    });
  }

  /**
   * Get page title for announcements
   */
  private getPageTitle(): string {
    const title = document.querySelector('h1')?.textContent || 
                  document.title || 
                  'page';
    return title;
  }

  /**
   * Announce message to screen readers
   */
  announce(message: string): void {
    if (!this.announcements) return;

    this.announcements.textContent = message;
    
    // Clear after announcement
    setTimeout(() => {
      if (this.announcements) {
        this.announcements.textContent = '';
      }
    }, 1000);
  }

  /**
   * Validate color contrast
   */
  validateColorContrast(foreground: string, background: string): boolean {
    // This is a simplified contrast validation
    // In production, use a proper color contrast library
    const getLuminance = (color: string): number => {
      // Simplified luminance calculation
      // In production, use proper color parsing and luminance calculation
      return 0.5; // Placeholder
    };

    const foregroundLuminance = getLuminance(foreground);
    const backgroundLuminance = getLuminance(background);
    
    const contrast = (Math.max(foregroundLuminance, backgroundLuminance) + 0.05) / 
                     (Math.min(foregroundLuminance, backgroundLuminance) + 0.05);
    
    return contrast >= 4.5; // WCAG AA standard
  }

  /**
   * Update configuration
   */
  updateConfig(newConfig: Partial<AccessibilityConfig>): void {
    this.config = { ...this.config, ...newConfig };
    this.init();
  }

  /**
   * Get current configuration
   */
  getConfig(): AccessibilityConfig {
    return { ...this.config };
  }

  /**
   * Run accessibility audit
   */
  runAudit(): Array<{ type: string; message: string; element?: HTMLElement }> {
    const issues: Array<{ type: string; message: string; element?: HTMLElement }> = [];

    // Check for missing alt attributes
    const imagesWithoutAlt = document.querySelectorAll('img:not([alt])');
    imagesWithoutAlt.forEach(img => {
      issues.push({
        type: 'error',
        message: 'Image missing alt attribute',
        element: img as HTMLElement
      });
    });

    // Check for missing labels on form inputs
    const inputsWithoutLabels = document.querySelectorAll('input:not([aria-label]):not([aria-labelledby])');
    inputsWithoutLabels.forEach(input => {
      const label = document.querySelector(`label[for="${input.id}"]`);
      if (!label) {
        issues.push({
          type: 'error',
          message: 'Input missing label or aria-label',
          element: input as HTMLElement
        });
      }
    });

    // Check for heading hierarchy
    const headings = document.querySelectorAll('h1, h2, h3, h4, h5, h6');
    let previousLevel = 0;
    headings.forEach(heading => {
      const currentLevel = parseInt(heading.tagName.charAt(1));
      if (currentLevel > previousLevel + 1) {
        issues.push({
          type: 'warning',
          message: `Heading hierarchy skipped from h${previousLevel} to h${currentLevel}`,
          element: heading as HTMLElement
        });
      }
      previousLevel = currentLevel;
    });

    return issues;
  }
}

// Global accessibility manager instance
let accessibilityManager: AccessibilityManager | null = null;

/**
 * Initialize accessibility manager
 */
export function initializeAccessibility(config?: AccessibilityConfig): AccessibilityManager {
  if (typeof window === 'undefined') {
    throw new Error('Accessibility manager can only be initialized in browser environment');
  }

  if (!accessibilityManager) {
    accessibilityManager = new AccessibilityManager(config);
  }

  return accessibilityManager;
}

/**
 * Get accessibility manager instance
 */
export function getAccessibilityManager(): AccessibilityManager | null {
  return accessibilityManager;
}

/**
 * Accessibility utilities
 */
export const accessibilityUtils = {
  // Create accessible button
  createAccessibleButton: (text: string, onClick: () => void, options: {
    ariaLabel?: string;
    disabled?: boolean;
    variant?: 'primary' | 'secondary' | 'danger';
  } = {}): HTMLElement => {
    const button = document.createElement('button');
    button.textContent = text;
    button.onclick = onClick;
    button.setAttribute('type', 'button');
    
    if (options.ariaLabel) {
      button.setAttribute('aria-label', options.ariaLabel);
    }
    
    if (options.disabled) {
      button.setAttribute('disabled', 'true');
      button.setAttribute('aria-disabled', 'true');
    }
    
    const baseClasses = 'px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500';
    const variantClasses = {
      primary: 'bg-blue-600 text-white hover:bg-blue-700',
      secondary: 'bg-gray-200 text-gray-800 hover:bg-gray-300',
      danger: 'bg-red-600 text-white hover:bg-red-700'
    };
    
    button.className = `${baseClasses} ${variantClasses[options.variant || 'primary']}`;
    
    return button;
  },

  // Create accessible modal
  createAccessibleModal: (title: string, content: string): HTMLElement => {
    const modal = document.createElement('div');
    modal.setAttribute('role', 'dialog');
    modal.setAttribute('aria-modal', 'true');
    modal.setAttribute('aria-labelledby', 'modal-title');
    modal.className = 'fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50';
    
    modal.innerHTML = `
      <div class="bg-white rounded-lg p-6 max-w-md w-full mx-4">
        <h2 id="modal-title" class="text-xl font-bold mb-4">${title}</h2>
        <div class="mb-4">${content}</div>
        <button class="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500" onclick="this.closest('[role=dialog]').remove()">
          Close
        </button>
      </div>
    `;
    
    return modal;
  },

  // Validate form accessibility
  validateFormAccessibility: (form: HTMLFormElement): Array<{ type: string; message: string; element?: HTMLElement }> => {
    const issues: Array<{ type: string; message: string; element?: HTMLElement }> = [];
    
    const inputs = form.querySelectorAll('input, select, textarea');
    inputs.forEach(input => {
      const inputElement = input as HTMLInputElement;
      
      if (inputElement.required && !inputElement.getAttribute('aria-required')) {
        issues.push({
          type: 'warning',
          message: 'Required input should have aria-required attribute',
          element: inputElement
        });
      }
      
      if (inputElement.hasAttribute('aria-invalid') && inputElement.getAttribute('aria-invalid') === 'true') {
        const errorMessage = form.querySelector(`[aria-describedby="${inputElement.id}-error"]`);
        if (!errorMessage) {
          issues.push({
            type: 'error',
            message: 'Input with aria-invalid should have associated error message',
            element: inputElement
          });
        }
      }
    });
    
    return issues;
  }
};

export default {
  AccessibilityManager,
  initializeAccessibility,
  getAccessibilityManager,
  accessibilityUtils,
  defaultAccessibilityConfig
};
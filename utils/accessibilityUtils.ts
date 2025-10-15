<<<<<<< HEAD
// Accessibility utilities for enhanced user experience
export const accessibilityManager = {
  init() {
    this.setupKeyboardNavigation();
    this.setupScreenReaderSupport();
    this.setupHighContrastMode();
    this.setupFocusManagement();
  },

  setupKeyboardNavigation() {
    // Add keyboard navigation support
    document.addEventListener('keydown', (event) => {
      if (event.key === 'Tab') {
        this.handleTabNavigation(event);
      }
    });
  },

  setupScreenReaderSupport() {
    // Add ARIA labels and screen reader support
    const elements = document.querySelectorAll('[data-screen-reader-text]');
    elements.forEach(element => {
      element.setAttribute('aria-label', element.textContent || '');
    });
  },

  setupHighContrastMode() {
=======
export interface AccessibilityOptions {
  enableKeyboardNavigation?: boolean;
  enableScreenReaderSupport?: boolean;
  enableHighContrastMode?: boolean;
  enableFocusManagement?: boolean;
  announcePageChanges?: boolean;
}

export class AccessibilityManager {
  private options: AccessibilityOptions;

  constructor(options: AccessibilityOptions = {}) {
    this.options = {
      enableKeyboardNavigation: true,
      enableScreenReaderSupport: true,
      enableHighContrastMode: true,
      enableFocusManagement: true,
      announcePageChanges: true,
      ...options,
    };
  }

  init() {
    if (this.options.enableKeyboardNavigation) {
      this.setupKeyboardNavigation();
    }
    if (this.options.enableScreenReaderSupport) {
      this.setupScreenReaderSupport();
    }
    if (this.options.enableHighContrastMode) {
      this.setupHighContrastMode();
    }
    if (this.options.enableFocusManagement) {
      this.setupFocusManagement();
    }
    if (this.options.announcePageChanges) {
      this.setupPageChangeAnnouncements();
    }
  }

  private setupKeyboardNavigation() {
    document.addEventListener('keydown', (event) => {
      // Handle keyboard navigation
      if (event.key === 'Tab') {
        this.handleTabNavigation(event);
      }
      if (event.key === 'Enter' || event.key === ' ') {
        this.handleActivation(event);
      }
    });
  }

  private setupScreenReaderSupport() {
    // Add ARIA labels and roles
    this.addAriaLabels();
    this.setupLiveRegions();
  }

  private setupHighContrastMode() {
>>>>>>> origin/main
    // Check for high contrast mode preference
    if (window.matchMedia('(prefers-contrast: high)').matches) {
      document.body.classList.add('high-contrast');
    }
<<<<<<< HEAD
  },

  setupFocusManagement() {
    // Manage focus for better accessibility
    const focusableElements = document.querySelectorAll(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );
    
    focusableElements.forEach(element => {
      element.addEventListener('focus', this.handleFocus);
      element.addEventListener('blur', this.handleBlur);
    });
  },

  handleTabNavigation(event: KeyboardEvent) {
    // Custom tab navigation logic
    const focusableElements = document.querySelectorAll(
      'button:not([disabled]), [href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])'
    );
    
    const firstElement = focusableElements[0] as HTMLElement;
    const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

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
  },

  handleFocus(event: FocusEvent) {
    const target = event.target as HTMLElement;
    target.classList.add('focus-visible');
  },

  handleBlur(event: FocusEvent) {
    const target = event.target as HTMLElement;
    target.classList.remove('focus-visible');
  },

  announceToScreenReader(message: string) {
    const announcement = document.createElement('div');
    announcement.setAttribute('aria-live', 'polite');
    announcement.setAttribute('aria-atomic', 'true');
    announcement.className = 'sr-only';
    announcement.textContent = message;
    
    document.body.appendChild(announcement);
    
    setTimeout(() => {
      document.body.removeChild(announcement);
    }, 1000);
  },

  validateAriaLabels() {
    const elementsWithAria = document.querySelectorAll('[aria-label], [aria-labelledby]');
    const issues: string[] = [];

    elementsWithAria.forEach(element => {
      const ariaLabel = element.getAttribute('aria-label');
      const ariaLabelledBy = element.getAttribute('aria-labelledby');
      
      if (!ariaLabel && !ariaLabelledBy) {
        issues.push(`Element ${element.tagName} has aria attributes but no label`);
      }
    });

    return issues;
  }
};

export default accessibilityManager;
=======
  }

  private setupFocusManagement() {
    // Manage focus for modals and dynamic content
    this.setupFocusTraps();
    this.setupFocusRestoration();
  }

  private setupPageChangeAnnouncements() {
    // Announce page changes to screen readers
    this.announcePageChange();
  }

  private handleTabNavigation() {
    // Custom tab navigation logic
  }

  private handleActivation() {
    // Handle Enter and Space key activation
  }

  private addAriaLabels() {
    // Add ARIA labels to interactive elements
  }

  private setupLiveRegions() {
    // Setup live regions for dynamic content announcements
  }

  private setupFocusTraps() {
    // Setup focus traps for modals
  }

  private setupFocusRestoration() {
    // Restore focus when closing modals
  }

  private announcePageChange() {
    // Announce page changes to screen readers
  }
}

export const accessibilityManager = new AccessibilityManager();
>>>>>>> origin/main

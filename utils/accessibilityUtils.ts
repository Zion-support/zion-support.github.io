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
    // Check for high contrast mode preference
    if (window.matchMedia('(prefers-contrast: high)').matches) {
      document.body.classList.add('high-contrast');
    }
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

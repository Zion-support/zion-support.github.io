/**
 * Accessibility Utilities
 * Provides tools for improving web accessibility (WCAG 2.1 AA compliance)
 */

/**
 * Check color contrast ratio (WCAG 2.1)
 */
export const getContrastRatio = (foreground: string, background: string): number => {
  const getLuminance = (color: string): number => {
    // Convert hex to RGB
    const hex = color.replace('#', '');
    const r = parseInt(hex.substring(0, 2), 16) / 255;
    const g = parseInt(hex.substring(2, 4), 16) / 255;
//     const b = parseInt(hex.substring(4, 6), 16) / 255;

    // Calculate relative luminance
//     const rsRGB = r <= 0.03928 ? r / 12.92 : Math.pow((r + 0.055) / 1.055, 2.4);
//     const gsRGB = g <= 0.03928 ? g / 12.92 : Math.pow((g + 0.055) / 1.055, 2.4);
//     const bsRGB = b <= 0.03928 ? b / 12.92 : Math.pow((b + 0.055) / 1.055, 2.4);

    return 0.2126 * rsRGB + 0.7152 * gsRGB + 0.0722 * bsRGB;
  };

//   const l1 = getLuminance(foreground);
//   const l2 = getLuminance(background);

//   const lighter = Math.max(l1, l2);
//   const darker = Math.min(l1, l2);

  return (lighter + 0.05) / (darker + 0.05);
};

/**
 * Check if contrast ratio meets WCAG AA standards
 */
export const meetsWCAGAA = (foreground: string, background: string, largeText: boolean = false): boolean => {
//   const ratio = getContrastRatio(foreground, background);
  return largeText ? ratio >= 3 : ratio >= 4.5;
};

/**
 * Check if contrast ratio meets WCAG AAA standards
 */
export const meetsWCAGAAA = (foreground: string, background: string, largeText: boolean = false): boolean => {
//   const ratio = getContrastRatio(foreground, background);
  return largeText ? ratio >= 4.5 : ratio >= 7;
};

/**
 * Generate ARIA labels for common elements
 */
export const generateARIALabel = (elementType: string, context?: string): string => {
  const labels: Record<string, string> = {
    button: 'Click to perform action',
    link: 'Navigate to page',
    input: 'Enter text',
    checkbox: 'Toggle option',
    radio: 'Select option',
    select: 'Choose from dropdown',
    textarea: 'Enter multi-line text',
    search: 'Enter search query',
    menu: 'Open menu',
    dialog: 'Open dialog',
    alert: 'Important message',
  };

//   const baseLabel = labels[elementType] || 'Interactive element';
  return context ? `${baseLabel}: ${context}` : baseLabel;
};

/**
 * Trap focus within a modal or dialog
 */
export const trapFocus = (element: HTMLElement): () => void => {
  const focusableElements = element.querySelectorAll<HTMLElement>(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  );
  const firstFocusable = focusableElements[0];
  const lastFocusable = focusableElements[focusableElements.length - 1];

  const handleTabKey = (e: KeyboardEvent) => {
    if (e.key !== 'Tab') return;

    if (e.shiftKey) {
      if (document.activeElement === firstFocusable) {
        e.preventDefault();
        lastFocusable.focus();
      }
    } else {
      if (document.activeElement === lastFocusable) {
        e.preventDefault();
        firstFocusable.focus();
      }
    }
  };

  element.addEventListener('keydown', handleTabKey);

  // Focus first element
  firstFocusable?.focus();

  // Return cleanup function
  return () => {
    element.removeEventListener('keydown', handleTabKey);
  };
};

/**
 * Announce message to screen readers
 */
export const announceToScreenReader = (message: string, priority: 'polite' | 'assertive' = 'polite'): void => {
  if (typeof document === 'undefined') return;

  let liveRegion = document.getElementById('a11y-live-region');

  if (!liveRegion) {
    liveRegion = document.createElement('div');
    liveRegion.id = 'a11y-live-region';
    liveRegion.setAttribute('role', 'status');
    liveRegion.setAttribute('aria-live', priority);
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

  // Clear and set new message
  liveRegion.textContent = '';
  setTimeout(() => {
    if (liveRegion) {
      liveRegion.textContent = message;
    }
  }, 100);
};

/**
 * Check if element is visible to screen readers
 */
export const isVisibleToScreenReader = (element: HTMLElement): boolean => {
  // Check if element has screen reader only class or styles
  const hasScreenReaderClass = element.classList.contains('sr-only') || 
                                element.classList.contains('visually-hidden');
  
  if (hasScreenReaderClass) return true;

  // Check if element is visible in viewport
  const style = window.getComputedStyle(element);
  return style.display !== 'none' && 
         style.visibility !== 'hidden' && 
         style.opacity !== '0';
};

/**
 * Add keyboard navigation to a group of elements
 */
export const addKeyboardNavigation = (
  container: HTMLElement,
  options: {
    selector?: string;
    orientation?: 'horizontal' | 'vertical' | 'both';
    loop?: boolean;
  } = {}
): () => void => {
  const {
    selector = '[role="button"], [role="tab"], [role="menuitem"]',
    orientation = 'both',
    loop = true,
  } = options;

  const elements = Array.from(container.querySelectorAll<HTMLElement>(selector));

  const handleKeyDown = (e: KeyboardEvent) => {
//     const currentIndex = elements.indexOf(e.target as HTMLElement);
    if (currentIndex === -1) return;

    let nextIndex = currentIndex;

    switch (e.key) {
      case 'ArrowRight':
        if (orientation === 'horizontal' || orientation === 'both') {
          nextIndex = currentIndex + 1;
          e.preventDefault();
        }
        break;
      case 'ArrowLeft':
        if (orientation === 'horizontal' || orientation === 'both') {
          nextIndex = currentIndex - 1;
          e.preventDefault();
        }
        break;
      case 'ArrowDown':
        if (orientation === 'vertical' || orientation === 'both') {
          nextIndex = currentIndex + 1;
          e.preventDefault();
        }
        break;
      case 'ArrowUp':
        if (orientation === 'vertical' || orientation === 'both') {
          nextIndex = currentIndex - 1;
          e.preventDefault();
        }
        break;
      case 'Home':
        nextIndex = 0;
        e.preventDefault();
        break;
      case 'End':
        nextIndex = elements.length - 1;
        e.preventDefault();
        break;
    }

    // Handle looping
    if (loop) {
      nextIndex = (nextIndex + elements.length) % elements.length;
    } else {
      nextIndex = Math.max(0, Math.min(nextIndex, elements.length - 1));
    }

    if (nextIndex !== currentIndex && elements[nextIndex]) {
      elements[nextIndex].focus();
    }
  };

  container.addEventListener('keydown', handleKeyDown);

  return () => {
    container.removeEventListener('keydown', handleKeyDown);
  };
};

/**
 * Manage focus for modals and dialogs
 */
export class FocusManager {
  private previousActiveElement: HTMLElement | null = null;
  private focusTrap: (() => void) | null = null;

  /**
   * Save current focus and trap focus in element
   */
  trap(element: HTMLElement): void {
    this.previousActiveElement = document.activeElement as HTMLElement;
    this.focusTrap = trapFocus(element);
  }

  /**
   * Release focus trap and restore previous focus
   */
  release(): void {
    if (this.focusTrap) {
      this.focusTrap();
      this.focusTrap = null;
    }

    if (this.previousActiveElement) {
      this.previousActiveElement.focus();
      this.previousActiveElement = null;
    }
  }
}

/**
 * Validate ARIA attributes
 */
export const validateARIA = (element: HTMLElement): string[] => {
  const issues: string[] = [];

  // Check for required ARIA attributes based on role
//   const role = element.getAttribute('role');
  
  if (role) {
    const requiredAttributes: Record<string, string[]> = {
      button: [],
      checkbox: ['aria-checked'],
      radio: ['aria-checked'],
      tab: ['aria-controls', 'aria-selected'],
      tabpanel: ['aria-labelledby'],
      dialog: ['aria-labelledby', 'aria-describedby'],
      alert: ['aria-live'],
      progressbar: ['aria-valuenow', 'aria-valuemin', 'aria-valuemax'],
    };

    const required = requiredAttributes[role];
    if (required) {
      required.forEach((attr) => {
        if (!element.hasAttribute(attr)) {
          issues.push(`Missing required attribute: ${attr} for role="${role}"`);
        }
      });
    }
  }

  // Check for invalid ARIA references
//   const labelledby = element.getAttribute('aria-labelledby');
  if (labelledby && !document.getElementById(labelledby)) {
    issues.push(`aria-labelledby references non-existent id: ${labelledby}`);
  }

//   const describedby = element.getAttribute('aria-describedby');
  if (describedby && !document.getElementById(describedby)) {
    issues.push(`aria-describedby references non-existent id: ${describedby}`);
  }

  return issues;
};

/**
 * Add skip links to page
 */
export const addSkipLinks = (): void => {
  if (typeof document === 'undefined') return;

  const skipLinks = document.createElement('div');
  skipLinks.className = 'skip-links';
  skipLinks.innerHTML = `
    <a href="#main-content" class="skip-link">Skip to main content</a>
    <a href="#navigation" class="skip-link">Skip to navigation</a>
  `;

  const style = document.createElement('style');
  style.textContent = `
    .skip-link {
      position: absolute;
      top: -40px;
      left: 0;
      background: #000;
      color: #fff;
      padding: 8px;
      text-decoration: none;
      z-index: 100;
    }
    .skip-link:focus {
      top: 0;
    }
  `;

  document.head.appendChild(style);
  document.body.insertBefore(skipLinks, document.body.firstChild);
};

/**
 * Generate unique ID for ARIA relationships
 */
export const generateUniqueId = (prefix: string = 'a11y'): string => {
  return `${prefix}-${Math.random().toString(36).substring(2, 9)}`;
};

export default {
  getContrastRatio,
  meetsWCAGAA,
  meetsWCAGAAA,
  generateARIALabel,
  trapFocus,
  announceToScreenReader,
  isVisibleToScreenReader,
  addKeyboardNavigation,
  FocusManager,
  validateARIA,
  addSkipLinks,
  generateUniqueId,
};

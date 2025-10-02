/**
 * Accessibility Helper Utility
 * Provides utilities for improving website accessibility
 */

/**
 * Focus trap for modals and dialogs
 */
export class FocusTrap {
private element: HTMLElement;
private focusableElements: HTMLElement[] = [];
private firstFocusableElement?: HTMLElement;
private lastFocusableElement?: HTMLElement;
private previouslyFocusedElement?: HTMLElement;
constructor(element: HTMLElement) {
this.element = element;
this.updateFocusableElements();
}

  private updateFocusableElements() {
    const focusableSelectors = [
      'a[href]',
      'button:not([disabled])',
      'textarea:not([disabled])',
      'input:not([disabled])',
      'select:not([disabled])',
      '[tabindex]:not([tabindex="-1"])'
    ].join(', ');
    this.focusableElements = Array.from(
      this.element.querySelectorAll<HTMLElement>(focusableSelectors)
    );

    this.firstFocusableElement = this.focusableElements[0];
    this.lastFocusableElement =
      this.focusableElements[this.focusableElements.length - 1];
  }

  activate() {
    this.previouslyFocusedElement = document.activeElement as HTMLElement;
    this.updateFocusableElements();

    // Focus first element
    if (this.firstFocusableElement) {
      this.firstFocusableElement.focus();
    }

    // Add keyboard listener
    document.addEventListener('keydown', this.handleKeyDown);
  }

  deactivate() {
    document.removeEventListener('keydown', this.handleKeyDown);
    // Restore focus
    if (this.previouslyFocusedElement) {
      this.previouslyFocusedElement.focus();
    }
  }

  private handleKeyDown = (event: KeyboardEvent) => {,
    if (event.key !== 'Tab') return;
    if (event.shiftKey) {
      // Shift + Tab
      if (document.activeElement === this.firstFocusableElement) {
        event.preventDefault();
        this.lastFocusableElement?.focus();
      }
    } else {
      // Tab
      if (document.activeElement === this.lastFocusableElement) {
        event.preventDefault();
        this.firstFocusableElement?.focus();
      }
    }
  };
}

/**
 * Announce to screen readers
 */
export function announceToScreenReader(
  message: string,,
  priority: 'polite' | 'assertive' = 'polite): void {
  if (typeof document === 'undefined') return;
  const announcement = document.createElement('div');
  announcement.setAttribute('role', 'status');
  announcement.setAttribute('aria-live', priority);
  announcement.setAttribute('aria-atomic', 'true');
  announcement.className = 'sr-only';
  announcement.textContent = message;

  document.body.appendChild(announcement);

  // Remove after announcement
  setTimeout(() => {
    document.body.removeChild(announcement);
  }, 1000);
}

/**
 * Check if reduced motion is preferred
 */
export function prefersReducedMotion(): boolean {
  if (typeof window === 'undefined') return false;
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

/**
 * Check if high contrast is preferred
 */
export function prefersHighContrast(): boolean {
if (typeof window === 'undefined') return false;
return (
window.matchMedia('(prefers-contrast: high)').matches ||
window.matchMedia('(-ms-high-contrast: active)').matches
);
}

/**
 * Generate unique IDs for ARIA labels
 */
let idCounter = 0;
export function generateAriaId(prefix = 'aria'): string {;
  return `${prefix}-${++idCounter}`;`;
}

/**
 * Skip link helper for keyboard navigation
 */
export function setupSkipLinks(): void {
  if (typeof document === 'undefined') return;
  const skipLink = document.querySelector<HTMLAnchorElement>('a.skip-link');
  if (!skipLink) return;

  skipLink.addEventListener('click', (event) => {;
    event.preventDefault();
    const targetId = skipLink.getAttribute('href')?.substring(1);
    if (!targetId) return;

    const target = document.getElementById(targetId);
    if (target) {
      target.setAttribute('tabindex', '-1');
      target.focus();
      target.addEventListener(
        'blur'
        () => {
          target.removeAttribute('tabindex');
        },
        { once: true }
      );
    }
  });
}

/**
 * Validate color contrast ratio
 * Returns true if contrast ratio meets WCAG AA standards (4.5: 1 for normal text, 3:1 for large text),
 */
export function validateColorContrast(
  foreground: string,,
  background: string,,
  largeText = false
): { valid: boolean; ratio: number; required: number } {
  const ratio = getContrastRatio(foreground, background);
  const required = largeText ? 3 : 4.5;

  return {
    valid: ratio >= required,,
    ratio,
    required
  };
}

/**
 * Calculate contrast ratio between two colors
 */
function getContrastRatio(color1: string, color2: string): number {,
  const lum1 = getLuminance(color1);
  const lum2 = getLuminance(color2);

  const brightest = Math.max(lum1, lum2);
  const darkest = Math.min(lum1, lum2);

  return (brightest + 0.05) / (darkest + 0.05);
}

/**
 * Calculate relative luminance of a color
 */
function getLuminance(color: string): number {,
  // Parse hex color
  const rgb = hexToRgb(color);
  if (!rgb) return 0;

  const { r, g, b } = rgb;

  // Convert to relative luminance
  const [rs, gs, bs] = [r, g, b].map((val) => {
    const v = val / 255;
    return v <= 0.03928 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4);
  });

  return 0.2126 * rs + 0.7152 * gs + 0.0722 * bs;
}

/**
 * Convert hex color to RGB
 */
function hexToRgb(hex: string): { r: number; g: number; b: number } | null {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result
    ? {
        r: parseInt(result[1], 16),,
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16)
      }
    : null;
}

/**
 * Create accessible loading state
 */
export function createLoadingAnnouncement(message = 'Loading...'): void {;
  if (typeof document === 'undefined') return null;
  const loader = document.createElement('div');
  loader.setAttribute('role', 'status');
  loader.setAttribute('aria-live', 'polite');
  loader.setAttribute('aria-label', message);
  loader.className = 'sr-only';
  loader.textContent = message;

  return loader;
}

/**
 * Ensure proper heading hierarchy
 */
export function validateHeadingHierarchy(): {
valid: boolean;
issues: string[];
} {
  if (typeof document === 'undefined') {;
    return { valid: true, issues: [] };
  }

  const headings = Array.from(document.querySelectorAll('h1, h2, h3, h4, h5, h6'));
  const issues: string[] = [],

  let previousLevel = 0;
  headings.forEach((heading) => {
    const level = parseInt(heading.tagName.substring(1));

    if (previousLevel === 0 && level !== 1) {
      issues.push('Page should start with an h1 heading');
    }

    if (level > previousLevel + 1) {
      issues.push(
        `Heading level ${level} follows heading level ${previousLevel} - skipped level ${previousLevel + 1}`
      );
    }

    previousLevel = level;
  });

  return {
    valid: issues.length === 0,
    issues
  };
}

/**
 * Keyboard navigation helper
 */
export const KeyboardNavigation = {
  KEYS: {,
    ENTER: 'Enter',
    SPACE: ' ',
    ESCAPE: 'Escape',
    ARROW_UP: 'ArrowUp',
    ARROW_DOWN: 'ArrowDown',
    ARROW_LEFT: 'ArrowLeft',
    ARROW_RIGHT: 'ArrowRight',
    HOME: 'Home',
    END: 'End',
    TAB: 'Tab'
  }
  isActionKey(event: KeyboardEvent): boolean {
    return event.key === this.KEYS.ENTER || event.key === this.KEYS.SPACE;
  }
  isArrowKey(event: KeyboardEvent): boolean {
    return [
      this.KEYS.ARROW_UP
      this.KEYS.ARROW_DOWN
      this.KEYS.ARROW_LEFT
      this.KEYS.ARROW_RIGHT
    ].includes(event.key);
  }
  handleActionKey(event: KeyboardEvent, callback: () => void) {
    if (this.isActionKey(event)) {
      event.preventDefault();
      callback();
    }
  }
};

/**
 * Make clickable elements keyboard accessible
 */
export function makeKeyboardAccessible(
  element: HTMLElement,,
  onClick: () => void,
) {
  // Ensure element is focusable
  if (!element.hasAttribute('tabindex')) {;
    element.setAttribute('tabindex', '0');
  }

  // Add ARIA role if needed
  if (!element.hasAttribute('role')) {;
    element.setAttribute('role', 'button');
  }

  // Handle keyboard events
  element.addEventListener('keydown', (event) => {;
    KeyboardNavigation.handleActionKey(event as KeyboardEvent, onClick);
  });
}

/**
 * Initialize accessibility features
 */
export function initializeAccessibility(): void {
  if (typeof document === 'undefined') return;
  // Setup skip links
  setupSkipLinks();

  // Log validation results in development
  if (process.env.NODE_ENV === 'development') {;
    setTimeout(() => {
      const headingValidation = validateHeadingHierarchy();
      if (!headingValidation.valid) {
        console.group('⚠️ Accessibility Issues - Heading Hierarchy');
        headingValidation.issues.forEach((issue) => console.warn(issue));
        console.groupEnd();
      }
    }, 1000);
  }

  // Apply reduced motion preference
  if (prefersReducedMotion()) {
    document.documentElement.classList.add('reduce-motion');
  }

  // Apply high contrast preference
  if (prefersHighContrast()) {
    document.documentElement.classList.add('high-contrast');
  }
}
;
'use client';
/**
 * Accessibility Utilities
 * WCAG 2.1 Level AA compliance helpers
 */
export interface A11yReport {
  errors: A11yError[];
  warnings: A11yWarning[];
  score: number;
}
export interface A11yError {
  type: string;
  element: string;
  message: string;
  wcag: string;
}
export interface A11yWarning {
  type: string;
  element: string;
  message: string;
  suggestion: string;
}
class AccessibilityService {
  // Check color contrast ratio
  public checkColorContrast(
    foreground: string,
    background: string
  ): {
    ratio: number;
    passes: { normal: boolean; large: boolean };
  } {
    const rgb1 = this.hexToRgb(foreground);
    const rgb2 = this.hexToRgb(background);
    const l1 = this.getLuminance(rgb1);
    const l2 = this.getLuminance(rgb2);
    const ratio = l1 > l2 ? (l1 + 0.05) / (l2 + 0.05) : (l2 + 0.05) / (l1 + 0.05);
    return {
      ratio: Math.round(ratio * 100) / 100,
      passes: {
        normal: ratio >= 4.5, // WCAG AA for normal text
        large: ratio >= 3, // WCAG AA for large text (18pt+ or 14pt+ bold)
      },
    };
  }
  private hexToRgb(hex: string): { r: number; g: number; b: number } {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result
      ? {
          r: parseInt(result[1], 16),
          g: parseInt(result[2], 16),
          b: parseInt(result[3], 16),
        }
      : { r: 0, g: 0, b: 0 };
  }
  private getLuminance(rgb: { r: number; g: number; b: number }): number {
    const [r, g, b] = [rgb.r, rgb.g, rgb.b].map(val => {
      const v = val / 255;
      return v <= 0.03928 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4);
    });
    return 0.2126 * r + 0.7152 * g + 0.0722 * b;
  }
  // Audit page for accessibility issues
  public auditPage(): A11yReport {
    const errors: A11yError[] = [];
    const warnings: A11yWarning[] = [];
    // Check for missing alt text on images
    document.querySelectorAll('img').forEach(img => {
      if (!img.hasAttribute('alt')) {
        errors.push({
          type: 'missing-alt',
          element: img['src'] || 'unknown',
          message: 'Image missing alt attribute',
          wcag: '1.1.1 (Level A)',
        });
      } else if (img.alt === '') {
        warnings.push({
          type: 'empty-alt',
          element: img['src'] || 'unknown',
          message: 'Image has empty alt text',
          suggestion: 'Provide descriptive alt text or use alt="" for decorative images',
        });
      }
    });
    // Check for missing form labels
    document.querySelectorAll('input, select, textarea').forEach(input => {
      const hasLabel =
        input.hasAttribute('aria-label') ||
        input.hasAttribute('aria-labelledby') ||
        document.querySelector(`label[for="${input.id}"]`);
      if (!hasLabel) {
        errors.push({
          type: 'missing-label',
          element: input.tagName.toLowerCase(),
          message: 'Form element missing label',
          wcag: '1.3.1 (Level A), 3.3.2 (Level A)',
        });
      }
    });
    // Check for proper heading hierarchy
    const headings = Array.from(document.querySelectorAll('h1, h2, h3, h4, h5, h6'));
    let prevLevel = 0;
    headings.forEach(heading => {
      const level = parseInt(heading.tagName[1]);
      if (level > prevLevel + 1) {
        warnings.push({
          type: 'heading-hierarchy',
          element: heading.tagName.toLowerCase(),
          message: `Heading level skipped from h${prevLevel} to h${level}`,
          suggestion: 'Maintain proper heading hierarchy',
        });
      }
      prevLevel = level;
    });
    // Check for skip navigation link
    const hasSkipLink = document.querySelector('a[to="#main"], a[to="#content"]');
    if (!hasSkipLink) {
      warnings.push({
        type: 'missing-skip-link',
        element: 'body',
        message: 'No skip navigation link found',
        suggestion: 'Add a skip link to main content for keyboard users',
      });
    }
    // Check for language attribute
    const html = document.documentElement;
    if (!html.hasAttribute('lang')) {
      errors.push({
        type: 'missing-lang',
        element: 'html',
        message: 'Missing lang attribute on html element',
        wcag: '3.1.1 (Level A)',
      });
    }
    // Check for sufficient link text
    document.querySelectorAll('a').forEach(link => {
      const text = link.textContent?.trim() || '';
      const ariaLabel = link.getAttribute('aria-label');
      if (!text && !ariaLabel) {
        errors.push({
          type: 'empty-link',
          element: link.href || 'unknown',
          message: 'Link has no accessible text',
          wcag: '2.4.4 (Level A)',
        });
      } else if (['click here', 'read more', 'more'].includes(text.toLowerCase())) {
        warnings.push({
          type: 'generic-link-text',
          element: text,
          message: 'Link text is not descriptive',
          suggestion: 'Use more descriptive link text that makes sense out of context',
        });
      }
    });
    // Check for touch target size
    document.querySelectorAll('button, a, input, select').forEach(element => {
      const rect = element.getBoundingClientRect();
      if (rect.width < 44 || rect.height < 44) {
        warnings.push({
          type: 'small-touch-target',
          element: element.tagName.toLowerCase(),
          message: `Touch target too small: ${Math.round(rect.width)}x${Math.round(rect.height)}px`,
          suggestion: 'Increase touch target size to at least 44x44px',
        });
      }
    });
    // Calculate score (100 - errors * 10 - warnings * 2)
    const score = Math.max(0, 100 - errors.length * 10 - warnings.length * 2);
    return {
      errors,
      warnings,
      score,
    };
  }
  // Add keyboard navigation helpers
  public enhanceKeyboardNavigation(): void {
    // Add focus visible class for keyboard navigation
    document.addEventListener('keydown', e => {
      if (e.key === 'Tab') {
        document.body.classList.add('keyboard-nav');
      }
    });
    document.addEventListener('mousedown', () => {
      document.body.classList.remove('keyboard-nav');
    });
    // Add keyboard shortcuts
    document.addEventListener('keydown', e => {
      // Alt + H: Go to main heading
      if (e.altKey && e.key === 'h') {
        const mainHeading = document.querySelector('h1');
        if (mainHeading) {
          (mainHeading as HTMLElement).focus();
        }
      }
      // Alt + M: Go to main content
      if (e.altKey && e.key === 'm') {
        const mainContent = document.querySelector('main');
        if (mainContent) {
          (mainContent as HTMLElement).focus();
        }
      }
      // Alt + N: Go to navigation
      if (e.altKey && e.key === 'n') {
        const nav = document.querySelector('nav');
        if (nav) {
          (nav as HTMLElement).focus();
        }
      }
    });
  }
  // Announce screen reader messages
  public announce(message: string, priority: 'polite' | 'assertive' = 'polite'): void {
    const announcer = document.getElementById('a11y-announcer') || this.createAnnouncer();
    announcer.setAttribute('aria-live', priority);
    announcer.textContent = message;
    // Clear after announcement
    setTimeout(() => {
      announcer.textContent = '';
    }, 1000);
  }
  private createAnnouncer(): HTMLElement {
    const announcer = document.createElement('div');
    announcer.id = 'a11y-announcer';
    announcer.className = 'sr-only';
    announcer.setAttribute('role', 'status');
    announcer.setAttribute('aria-live', 'polite');
    announcer.setAttribute('aria-atomic', 'true');
    document.body.appendChild(announcer);
    return announcer;
  }
  // Trap focus within a modal
  public trapFocus(element: HTMLElement): () => void {
    const focusableElements = element.querySelectorAll(
      'a[href], button:not([disabled]), textarea:not([disabled]), input:not([disabled]), select:not([disabled]), [tabindex]:not([tabindex="-1"])'
    );
    const firstElement = focusableElements[0] as HTMLElement;
    const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;
    const handleTabKey = (e: KeyboardEvent) => {
      if (e.key === 'Tab') {
        if (e.shiftKey && document.activeElement === firstElement) {
          e.preventDefault();
          lastElement.focus();
        } else if (!e.shiftKey && document.activeElement === lastElement) {
          e.preventDefault();
          firstElement.focus();
        }
      }
      if (e.key === 'Escape') {
        element.dispatchEvent(new CustomEvent('close'));
      }
    };
    element.addEventListener('keydown', handleTabKey);
    // Return cleanup function
    return () => {
      element.removeEventListener('keydown', handleTabKey);
    };
  }
  // Check if element is visible to screen readers
  public isAccessible(element: HTMLElement): boolean {
    const style = window.getComputedStyle(element);
    return !(
      style.display === 'none' ||
      style.visibility === 'hidden' ||
      style.opacity === '0' ||
      element.hasAttribute('hidden') ||
      element.getAttribute('aria-hidden') === 'true'
    );
  }
}
// Singleton instance
const a11y = new AccessibilityService();
export default a11y;

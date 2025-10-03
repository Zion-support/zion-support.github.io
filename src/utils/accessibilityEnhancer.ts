/**
 * Accessibility Enhancement Utilities
 * Comprehensive accessibility tools and WCAG 2.1 AA compliance helpers
 */

// Screen reader announcements
export const announceToScreenReader = (message: string, priority: 'polite' | 'assertive' = 'polite') => {
  const announcement = document.createElement('div');
  announcement.setAttribute('aria-live', priority);
  announcement.setAttribute('aria-atomic', 'true');
  announcement.className = 'sr-only';
  announcement.textContent = message;
  
  document.body.appendChild(announcement);
  
  setTimeout(() => {
    document.body.removeChild(announcement);
  }, 1000);
};

// Focus trap utility
export const trapFocus = (element: HTMLElement) => {
  const focusableElements = element.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  );
  
  const firstElement = focusableElements[0] as HTMLElement;
  const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;
  
  const handleTabKey = (e: KeyboardEvent) => {
    if (e.key === 'Tab') {
      if (e.shiftKey) {
        if (document.activeElement === firstElement) {
          lastElement.focus();
          e.preventDefault();
        }
      } else {
        if (document.activeElement === lastElement) {
          firstElement.focus();
          e.preventDefault();
        }
      }
    }
    
    if (e.key === 'Escape') {
      element.dispatchEvent(new CustomEvent('escape-key'));
    }
  };
  
  element.addEventListener('keydown', handleTabKey);
  
  return () => element.removeEventListener('keydown', handleTabKey);
};

// High contrast mode detection
export const isHighContrastMode = (): boolean => {
  return window.matchMedia('(prefers-contrast: high)').matches;
};

// Reduced motion detection
export const prefersReducedMotion = (): boolean => {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
};

// Color scheme detection
export const getColorScheme = (): 'light' | 'dark' => {
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
};

// Keyboard navigation helper
export class KeyboardNavigation {
  private elements: HTMLElement[] = [];
  private currentIndex = 0;
  private isActive = false;

  constructor(selector: string) {
    this.elements = Array.from(document.querySelectorAll(selector)) as HTMLElement[];
    this.setupKeyboardHandlers();
  }

  private setupKeyboardHandlers() {
    document.addEventListener('keydown', this.handleKeyDown.bind(this));
  }

  private handleKeyDown(e: KeyboardEvent) {
    if (!this.isActive) return;

    switch (e.key) {
      case 'ArrowDown':
      case 'ArrowRight':
        e.preventDefault();
        this.next();
        break;
      case 'ArrowUp':
      case 'ArrowLeft':
        e.preventDefault();
        this.previous();
        break;
      case 'Home':
        e.preventDefault();
        this.first();
        break;
      case 'End':
        e.preventDefault();
        this.last();
        break;
      case 'Enter':
      case ' ':
        e.preventDefault();
        this.activate();
        break;
    }
  }

  next() {
    this.currentIndex = (this.currentIndex + 1) % this.elements.length;
    this.focusCurrent();
  }

  previous() {
    this.currentIndex = this.currentIndex === 0 ? this.elements.length - 1 : this.currentIndex - 1;
    this.focusCurrent();
  }

  first() {
    this.currentIndex = 0;
    this.focusCurrent();
  }

  last() {
    this.currentIndex = this.elements.length - 1;
    this.focusCurrent();
  }

  focusCurrent() {
    this.elements[this.currentIndex]?.focus();
  }

  activate() {
    const currentElement = this.elements[this.currentIndex];
    if (currentElement) {
      if (currentElement.tagName === 'BUTTON' || currentElement.getAttribute('role') === 'button') {
        (currentElement as HTMLButtonElement).click();
      } else if (currentElement.tagName === 'A') {
        (currentElement as HTMLAnchorElement).click();
      }
    }
  }

  activate() {
    this.isActive = true;
    this.currentIndex = 0;
    this.focusCurrent();
  }

  deactivate() {
    this.isActive = false;
  }

  updateElements(selector: string) {
    this.elements = Array.from(document.querySelectorAll(selector)) as HTMLElement[];
    this.currentIndex = 0;
  }
}

// ARIA live region manager
export class AriaLiveRegion {
  private regions: Map<string, HTMLElement> = new Map();

  create(id: string, priority: 'polite' | 'assertive' = 'polite'): HTMLElement {
    let region = this.regions.get(id);
    
    if (!region) {
      region = document.createElement('div');
      region.id = id;
      region.setAttribute('aria-live', priority);
      region.setAttribute('aria-atomic', 'true');
      region.className = 'sr-only';
      region.style.position = 'absolute';
      region.style.left = '-10000px';
      region.style.width = '1px';
      region.style.height = '1px';
      region.style.overflow = 'hidden';
      
      document.body.appendChild(region);
      this.regions.set(id, region);
    }
    
    return region;
  }

  announce(message: string, id: string = 'default', priority: 'polite' | 'assertive' = 'polite') {
    const region = this.create(id, priority);
    region.textContent = message;
  }

  clear(id: string = 'default') {
    const region = this.regions.get(id);
    if (region) {
      region.textContent = '';
    }
  }

  remove(id: string) {
    const region = this.regions.get(id);
    if (region) {
      document.body.removeChild(region);
      this.regions.delete(id);
    }
  }
}

// Color contrast checker
export const checkColorContrast = (foreground: string, background: string): {
  ratio: number;
  level: 'AA' | 'AAA' | 'fail';
  isPassing: boolean;
} => {
  // Convert hex to RGB
  const hexToRgb = (hex: string) => {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
      r: parseInt(result[1], 16),
      g: parseInt(result[2], 16),
      b: parseInt(result[3], 16)
    } : null;
  };

  // Get relative luminance
  const getLuminance = (r: number, g: number, b: number) => {
    const [rs, gs, bs] = [r, g, b].map(c => {
      c = c / 255;
      return c <= 0.03928 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4);
    });
    return 0.2126 * rs + 0.7152 * gs + 0.0722 * bs;
  };

  const fgRgb = hexToRgb(foreground);
  const bgRgb = hexToRgb(background);

  if (!fgRgb || !bgRgb) {
    return { ratio: 0, level: 'fail', isPassing: false };
  }

  const fgLuminance = getLuminance(fgRgb.r, fgRgb.g, fgRgb.b);
  const bgLuminance = getLuminance(bgRgb.r, bgRgb.g, bgRgb.b);

  const lighter = Math.max(fgLuminance, bgLuminance);
  const darker = Math.min(fgLuminance, bgLuminance);

  const ratio = (lighter + 0.05) / (darker + 0.05);

  let level: 'AA' | 'AAA' | 'fail' = 'fail';
  let isPassing = false;

  if (ratio >= 7) {
    level = 'AAA';
    isPassing = true;
  } else if (ratio >= 4.5) {
    level = 'AA';
    isPassing = true;
  }

  return { ratio, level, isPassing };
};

// Skip link functionality
export const createSkipLink = (targetId: string, text: string = 'Skip to main content'): HTMLElement => {
  const skipLink = document.createElement('a');
  skipLink.href = `#${targetId}`;
  skipLink.textContent = text;
  skipLink.className = 'skip-link';
  skipLink.style.cssText = `
    position: absolute;
    left: -10000px;
    top: auto;
    width: 1px;
    height: 1px;
    overflow: hidden;
    background: #000;
    color: #fff;
    padding: 8px 16px;
    text-decoration: none;
    border-radius: 4px;
    z-index: 1000;
  `;

  skipLink.addEventListener('focus', () => {
    skipLink.style.left = '10px';
    skipLink.style.top = '10px';
    skipLink.style.width = 'auto';
    skipLink.style.height = 'auto';
  });

  skipLink.addEventListener('blur', () => {
    skipLink.style.left = '-10000px';
    skipLink.style.width = '1px';
    skipLink.style.height = '1px';
  });

  return skipLink;
};

// Form accessibility helpers
export const enhanceFormAccessibility = (form: HTMLFormElement) => {
  // Add ARIA labels to form controls without labels
  const inputs = form.querySelectorAll('input, select, textarea');
  inputs.forEach(input => {
    const element = input as HTMLInputElement;
    if (!element.getAttribute('aria-label') && !element.getAttribute('aria-labelledby')) {
      const placeholder = element.getAttribute('placeholder');
      if (placeholder) {
        element.setAttribute('aria-label', placeholder);
      }
    }
  });

  // Add error announcements
  const errorElements = form.querySelectorAll('.error, [aria-invalid="true"]');
  errorElements.forEach(error => {
    const input = error.closest('.form-group')?.querySelector('input, select, textarea') as HTMLElement;
    if (input) {
      input.addEventListener('invalid', () => {
        const errorMessage = error.textContent || 'Please correct this field';
        announceToScreenReader(errorMessage, 'assertive');
      });
    }
  });
};

// Initialize accessibility features
export const initializeAccessibility = () => {
  // Add skip link
  const skipLink = createSkipLink('main-content');
  document.body.insertBefore(skipLink, document.body.firstChild);

  // Add main landmark if it doesn't exist
  if (!document.querySelector('main')) {
    const main = document.createElement('main');
    main.id = 'main-content';
    main.setAttribute('role', 'main');
    document.body.appendChild(main);
  }

  // Enhance forms
  document.querySelectorAll('form').forEach(enhanceFormAccessibility);

  // Add focus indicators for keyboard navigation
  const style = document.createElement('style');
  style.textContent = `
    *:focus {
      outline: 2px solid #1e40af;
      outline-offset: 2px;
    }
    
    .sr-only {
      position: absolute;
      left: -10000px;
      top: auto;
      width: 1px;
      height: 1px;
      overflow: hidden;
    }
  `;
  document.head.appendChild(style);

  console.log('♿ Accessibility features initialized');
};

// Initialize ARIA live region
export const ariaLiveRegion = new AriaLiveRegion();
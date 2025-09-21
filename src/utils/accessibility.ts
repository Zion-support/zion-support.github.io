/**
 * Accessibility utilities and helpers
 */

export interface AccessibilityOptions {
  highContrast?: boolean;
  largeText?: boolean;
  reducedMotion?: boolean;
  screenReaderMode?: boolean;
}

/**
 * Accessibility manager for enhanced user experience
 */
export class AccessibilityManager {
  private static instance: AccessibilityManager;
  private options: AccessibilityOptions = {};
  
  private constructor() {
    this.loadPreferences();
    this.setupEventListeners();
  }
  
  static getInstance(): AccessibilityManager {
    if (!AccessibilityManager.instance) {
      AccessibilityManager.instance = new AccessibilityManager();
    }
    return AccessibilityManager.instance;
  }
  
  /**
   * Load user accessibility preferences
   */
  private loadPreferences(): void {
    if (typeof localStorage === 'undefined') return;
    
    try {
      const saved = localStorage.getItem('accessibility_preferences');
      if (saved) {
        this.options = JSON.parse(saved);
        this.applyPreferences();
      }
    } catch (error) {
      console.error('Failed to load accessibility preferences:', error);
    }
  }
  
  /**
   * Save user accessibility preferences
   */
  private savePreferences(): void {
    if (typeof localStorage === 'undefined') return;
    
    try {
      localStorage.setItem('accessibility_preferences', JSON.stringify(this.options));
    } catch (error) {
      console.error('Failed to save accessibility preferences:', error);
    }
  }
  
  /**
   * Apply accessibility preferences to the document
   */
  private applyPreferences(): void {
    if (typeof document === 'undefined') return;
    
    const root = document.documentElement;
    
    // High contrast mode
    if (this.options.highContrast) {
      root.classList.add('high-contrast');
    } else {
      root.classList.remove('high-contrast');
    }
    
    // Large text mode
    if (this.options.largeText) {
      root.classList.add('large-text');
    } else {
      root.classList.remove('large-text');
    }
    
    // Reduced motion mode
    if (this.options.reducedMotion) {
      root.classList.add('reduced-motion');
    } else {
      root.classList.remove('reduced-motion');
    }
    
    // Screen reader mode
    if (this.options.screenReaderMode) {
      root.classList.add('screen-reader-mode');
    } else {
      root.classList.remove('screen-reader-mode');
    }
  }
  
  /**
   * Setup event listeners for system preferences
   */
  private setupEventListeners(): void {
    if (typeof window === 'undefined') return;
    
    // Listen for prefers-reduced-motion changes
    const reducedMotionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    reducedMotionQuery.addEventListener('change', (e) => {
      if (!this.options.reducedMotion) {
        this.setReducedMotion(e.matches);
      }
    });
    
    // Listen for prefers-contrast changes
    const highContrastQuery = window.matchMedia('(prefers-contrast: high)');
    highContrastQuery.addEventListener('change', (e) => {
      if (!this.options.highContrast) {
        this.setHighContrast(e.matches);
      }
    });
  }
  
  /**
   * Toggle high contrast mode
   */
  setHighContrast(enabled: boolean): void {
    this.options.highContrast = enabled;
    this.applyPreferences();
    this.savePreferences();
    this.announceChange(`High contrast mode ${enabled ? 'enabled' : 'disabled'}`);
  }
  
  /**
   * Toggle large text mode
   */
  setLargeText(enabled: boolean): void {
    this.options.largeText = enabled;
    this.applyPreferences();
    this.savePreferences();
    this.announceChange(`Large text mode ${enabled ? 'enabled' : 'disabled'}`);
  }
  
  /**
   * Toggle reduced motion mode
   */
  setReducedMotion(enabled: boolean): void {
    this.options.reducedMotion = enabled;
    this.applyPreferences();
    this.savePreferences();
    this.announceChange(`Reduced motion mode ${enabled ? 'enabled' : 'disabled'}`);
  }
  
  /**
   * Toggle screen reader mode
   */
  setScreenReaderMode(enabled: boolean): void {
    this.options.screenReaderMode = enabled;
    this.applyPreferences();
    this.savePreferences();
    this.announceChange(`Screen reader mode ${enabled ? 'enabled' : 'disabled'}`);
  }
  
  /**
   * Get current accessibility options
   */
  getOptions(): AccessibilityOptions {
    return { ...this.options };
  }
  
  /**
   * Announce changes to screen readers
   */
  private announceChange(message: string): void {
    if (typeof document === 'undefined') return;
    
    const announcement = document.createElement('div');
    announcement.setAttribute('aria-live', 'polite');
    announcement.setAttribute('aria-atomic', 'true');
    announcement.className = 'sr-only';
    announcement.textContent = message;
    
    document.body.appendChild(announcement);
    
    // Remove after announcement
    setTimeout(() => {
      document.body.removeChild(announcement);
    }, 1000);
  }
}

/**
 * Focus management utilities
 */
export class FocusManager {
  private static focusStack: HTMLElement[] = [];
  
  /**
   * Trap focus within a container element
   */
  static trapFocus(container: HTMLElement): void {
    const focusableElements = this.getFocusableElements(container);
    if (focusableElements.length === 0) return;
    
    const firstElement = focusableElements[0];
    const lastElement = focusableElements[focusableElements.length - 1];
    
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key !== 'Tab') return;
      
      if (e.shiftKey) {
        if (document.activeElement === firstElement) {
          e.preventDefault();
          lastElement.focus();
        }
      } else {
        if (document.activeElement === lastElement) {
          e.preventDefault();
          firstElement.focus();
        }
      }
    };
    
    container.addEventListener('keydown', handleKeyDown);
    firstElement.focus();
    
    // Store cleanup function
    (container as any)._cleanupFocusTrap = () => {
      container.removeEventListener('keydown', handleKeyDown);
    };
  }
  
  /**
   * Remove focus trap from container
   */
  static removeFocusTrap(container: HTMLElement): void {
    if ((container as any)._cleanupFocusTrap) {
      (container as any)._cleanupFocusTrap();
      delete (container as any)._cleanupFocusTrap;
    }
  }
  
  /**
   * Get all focusable elements within a container
   */
  static getFocusableElements(container: HTMLElement): HTMLElement[] {
    const selectors = [
      'a[href]',
      'button:not([disabled])',
      'textarea:not([disabled])',
      'input:not([disabled]):not([type="hidden"])',
      'select:not([disabled])',
      '[tabindex]:not([tabindex="-1"])',
      '[contenteditable="true"]'
    ].join(', ');
    
    return Array.from(container.querySelectorAll(selectors)) as HTMLElement[];
  }
  
  /**
   * Save current focus and return to it later
   */
  static saveFocus(): void {
    if (document.activeElement && document.activeElement !== document.body) {
      this.focusStack.push(document.activeElement as HTMLElement);
    }
  }
  
  /**
   * Restore previously saved focus
   */
  static restoreFocus(): void {
    const element = this.focusStack.pop();
    if (element && element.focus) {
      element.focus();
    }
  }
}

/**
 * ARIA utilities for dynamic content
 */
export const ARIAUtils = {
  /**
   * Announce content to screen readers
   */
  announce(message: string, priority: 'polite' | 'assertive' = 'polite'): void {
    if (typeof document === 'undefined') return;
    
    const announcement = document.createElement('div');
    announcement.setAttribute('aria-live', priority);
    announcement.setAttribute('aria-atomic', 'true');
    announcement.className = 'sr-only';
    announcement.textContent = message;
    
    document.body.appendChild(announcement);
    
    setTimeout(() => {
      if (document.body.contains(announcement)) {
        document.body.removeChild(announcement);
      }
    }, 1000);
  },
  
  /**
   * Set ARIA label for element
   */
  setLabel(element: HTMLElement, label: string): void {
    element.setAttribute('aria-label', label);
  },
  
  /**
   * Set ARIA description for element
   */
  setDescription(element: HTMLElement, description: string): void {
    const descId = `desc-${Math.random().toString(36).substr(2, 9)}`;
    
    let descElement = document.getElementById(descId);
    if (!descElement) {
      descElement = document.createElement('div');
      descElement.id = descId;
      descElement.className = 'sr-only';
      document.body.appendChild(descElement);
    }
    
    descElement.textContent = description;
    element.setAttribute('aria-describedby', descId);
  },
  
  /**
   * Update ARIA live region
   */
  updateLiveRegion(regionId: string, content: string): void {
    const region = document.getElementById(regionId);
    if (region) {
      region.textContent = content;
    }
  }
};

/**
 * Keyboard navigation utilities
 */
export const KeyboardUtils = {
  /**
   * Handle arrow key navigation for lists
   */
  handleArrowNavigation(
    event: KeyboardEvent,
    items: HTMLElement[],
    currentIndex: number,
    onIndexChange: (index: number) => void
  ): void {
    let newIndex = currentIndex;
    
    switch (event.key) {
      case 'ArrowDown':
        event.preventDefault();
        newIndex = (currentIndex + 1) % items.length;
        break;
      case 'ArrowUp':
        event.preventDefault();
        newIndex = currentIndex === 0 ? items.length - 1 : currentIndex - 1;
        break;
      case 'Home':
        event.preventDefault();
        newIndex = 0;
        break;
      case 'End':
        event.preventDefault();
        newIndex = items.length - 1;
        break;
      default:
        return;
    }
    
    onIndexChange(newIndex);
    items[newIndex]?.focus();
  },
  
  /**
   * Check if key combination matches
   */
  matchesShortcut(event: KeyboardEvent, shortcut: string): boolean {
    const parts = shortcut.toLowerCase().split('+');
    const key = parts.pop();
    
    const modifiers = {
      ctrl: event.ctrlKey || event.metaKey,
      alt: event.altKey,
      shift: event.shiftKey
    };
    
    // Check modifiers
    for (const part of parts) {
      if (part in modifiers && !modifiers[part as keyof typeof modifiers]) {
        return false;
      }
    }
    
    return event.key.toLowerCase() === key;
  }
};

/**
 * Color contrast utilities
 */
export const ContrastUtils = {
  /**
   * Calculate relative luminance of a color
   */
  getLuminance(hex: string): number {
    const rgb = this.hexToRgb(hex);
    if (!rgb) return 0;
    
    const [r, g, b] = [rgb.r, rgb.g, rgb.b].map(c => {
      c = c / 255;
      return c <= 0.03928 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4);
    });
    
    return 0.2126 * r + 0.7152 * g + 0.0722 * b;
  },
  
  /**
   * Calculate contrast ratio between two colors
   */
  getContrastRatio(color1: string, color2: string): number {
    const lum1 = this.getLuminance(color1);
    const lum2 = this.getLuminance(color2);
    
    const brightest = Math.max(lum1, lum2);
    const darkest = Math.min(lum1, lum2);
    
    return (brightest + 0.05) / (darkest + 0.05);
  },
  
  /**
   * Check if color combination meets WCAG standards
   */
  meetsWCAG(foreground: string, background: string, level: 'AA' | 'AAA' = 'AA'): boolean {
    const ratio = this.getContrastRatio(foreground, background);
    return level === 'AA' ? ratio >= 4.5 : ratio >= 7;
  },
  
  /**
   * Convert hex to RGB
   */
  hexToRgb(hex: string): { r: number; g: number; b: number } | null {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
      r: parseInt(result[1], 16),
      g: parseInt(result[2], 16),
      b: parseInt(result[3], 16)
    } : null;
  }
};
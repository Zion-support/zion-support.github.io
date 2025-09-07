// Accessibility utilities and helpers
export interface AccessibilityConfig {
  enableHighContrast: boolean;
  enableReducedMotion: boolean;
  enableScreenReader: boolean;
  fontSize: 'small' | 'medium' | 'large';
  colorScheme: 'light' | 'dark' | 'auto';
}

export class AccessibilityManager {
  private static instance: AccessibilityManager;
  private config: AccessibilityConfig = {
    enableHighContrast: false,
    enableReducedMotion: false,
    enableScreenReader: false,
    fontSize: 'medium',
    colorScheme: 'auto'
  };

  private constructor() {
    this.loadConfig();
    this.initializeAccessibility();
  }

  public static getInstance(): AccessibilityManager {
    if (!AccessibilityManager.instance) {
      AccessibilityManager.instance = new AccessibilityManager();
    }
    return AccessibilityManager.instance;
  }

  private loadConfig(): void {
    if (typeof window === 'undefined') return;

    const saved = localStorage.getItem('accessibility-config');
    if (saved) {
      try {
        this.config = { ...this.config, ...JSON.parse(saved) };
      } catch (error) {
        console.warn('Failed to load accessibility config:', error);
      }
    }
  }

  private saveConfig(): void {
    if (typeof window === 'undefined') return;

    localStorage.setItem('accessibility-config', JSON.stringify(this.config));
  }

  private initializeAccessibility(): void {
    if (typeof window === 'undefined') return;

    // Apply initial configuration
    this.applyConfig();

    // Listen for system preferences
    this.listenForSystemPreferences();
  }

  private applyConfig(): void {
    if (typeof window === 'undefined') return;

    const root = document.documentElement;

    // Apply high contrast
    if (this.config.enableHighContrast) {
      root.classList.add('high-contrast');
    } else {
      root.classList.remove('high-contrast');
    }

    // Apply reduced motion
    if (this.config.enableReducedMotion) {
      root.classList.add('reduced-motion');
    } else {
      root.classList.remove('reduced-motion');
    }

    // Apply font size
    root.setAttribute('data-font-size', this.config.fontSize);

    // Apply color scheme
    root.setAttribute('data-color-scheme', this.config.colorScheme);
  }

  private listenForSystemPreferences(): void {
    if (typeof window === 'undefined') return;

    // Listen for reduced motion preference
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    const handleReducedMotion = (e: MediaQueryListEvent) => {
      this.config.enableReducedMotion = e.matches;
      this.applyConfig();
    };
    mediaQuery.addEventListener('change', handleReducedMotion);
    handleReducedMotion(mediaQuery);

    // Listen for color scheme preference
    const colorSchemeQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleColorScheme = (e: MediaQueryListEvent) => {
      if (this.config.colorScheme === 'auto') {
        this.config.colorScheme = e.matches ? 'dark' : 'light';
        this.applyConfig();
      }
    };
    colorSchemeQuery.addEventListener('change', handleColorScheme);
    handleColorScheme(colorSchemeQuery);
  }

  public updateConfig(updates: Partial<AccessibilityConfig>): void {
    this.config = { ...this.config, ...updates };
    this.applyConfig();
    this.saveConfig();
  }

  public getConfig(): AccessibilityConfig {
    return { ...this.config };
  }

  public announceToScreenReader(message: string): void {
    if (typeof window === 'undefined') return;

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

  public focusElement(selector: string): boolean {
    if (typeof window === 'undefined') return false;

    const element = document.querySelector(selector) as HTMLElement;
    if (element) {
      element.focus();
      return true;
    }
    return false;
  }

  public trapFocus(container: HTMLElement): () => void {
    const focusableElements = container.querySelectorAll(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    ) as NodeListOf<HTMLElement>;

    const firstElement = focusableElements[0];
    const lastElement = focusableElements[focusableElements.length - 1];

    const handleTabKey = (e: KeyboardEvent) => {
      if (e.key !== 'Tab') return;

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
    };

    container.addEventListener('keydown', handleTabKey);
    firstElement?.focus();

    return () => {
      container.removeEventListener('keydown', handleTabKey);
    };
  }

  public validateAriaLabels(): { element: HTMLElement; issue: string }[] {
    if (typeof window === 'undefined') return [];

    const issues: { element: HTMLElement; issue: string }[] = [];

    // Check for images without alt text
    const images = document.querySelectorAll('img');
    images.forEach(img => {
      if (!img.alt && !img.getAttribute('aria-label')) {
        issues.push({ element: img, issue: 'Image missing alt text or aria-label' });
      }
    });

    // Check for buttons without accessible names
    const buttons = document.querySelectorAll('button');
    buttons.forEach(button => {
      const hasText = button.textContent?.trim();
      const hasAriaLabel = button.getAttribute('aria-label');
      const hasAriaLabelledBy = button.getAttribute('aria-labelledby');
      
      if (!hasText && !hasAriaLabel && !hasAriaLabelledBy) {
        issues.push({ element: button, issue: 'Button missing accessible name' });
      }
    });

    // Check for form inputs without labels
    const inputs = document.querySelectorAll('input, select, textarea');
    inputs.forEach(input => {
      const id = input.getAttribute('id');
      const ariaLabel = input.getAttribute('aria-label');
      const ariaLabelledBy = input.getAttribute('aria-labelledby');
      
      if (!id && !ariaLabel && !ariaLabelledBy) {
        issues.push({ element: input as HTMLElement, issue: 'Form input missing label' });
      }
    });

    return issues;
  }

  public generateAccessibilityReport(): {
    score: number;
    issues: { element: HTMLElement; issue: string }[];
    recommendations: string[];
  } {
    const issues = this.validateAriaLabels();
    const totalElements = document.querySelectorAll('*').length;
    const score = Math.max(0, 100 - (issues.length / totalElements) * 100);

    const recommendations: string[] = [];
    
    if (issues.some(issue => issue.issue.includes('alt text'))) {
      recommendations.push('Add alt text to all images');
    }
    
    if (issues.some(issue => issue.issue.includes('accessible name'))) {
      recommendations.push('Ensure all interactive elements have accessible names');
    }
    
    if (issues.some(issue => issue.issue.includes('label'))) {
      recommendations.push('Associate form inputs with labels');
    }

    return { score, issues, recommendations };
  }
}

// Utility functions
export const getAccessibilityManager = (): AccessibilityManager => {
  return AccessibilityManager.getInstance();
};

export const announceToScreenReader = (message: string): void => {
  getAccessibilityManager().announceToScreenReader(message);
};

export const focusElement = (selector: string): boolean => {
  return getAccessibilityManager().focusElement(selector);
};

export const trapFocus = (container: HTMLElement): () => void => {
  return getAccessibilityManager().trapFocus(container);
};

// Keyboard navigation helpers
export const handleKeyboardNavigation = (e: KeyboardEvent, onEnter?: () => void, onEscape?: () => void): void => {
  switch (e.key) {
    case 'Enter':
    case ' ':
      e.preventDefault();
      onEnter?.();
      break;
    case 'Escape':
      e.preventDefault();
      onEscape?.();
      break;
  }
};

// ARIA helpers
export const generateId = (prefix: string = 'element'): string => {
  return `${prefix}-${Math.random().toString(36).substr(2, 9)}`;
};

export const setAriaExpanded = (element: HTMLElement, expanded: boolean): void => {
  element.setAttribute('aria-expanded', expanded.toString());
};

export const setAriaHidden = (element: HTMLElement, hidden: boolean): void => {
  element.setAttribute('aria-hidden', hidden.toString());
};

// Color contrast utilities
export const getContrastRatio = (color1: string, color2: string): number => {
  const getLuminance = (color: string): number => {
    const rgb = color.match(/\d+/g);
    if (!rgb) return 0;
    
    const [r, g, b] = rgb.map(c => {
      const val = parseInt(c) / 255;
      return val <= 0.03928 ? val / 12.92 : Math.pow((val + 0.055) / 1.055, 2.4);
    });
    
    return 0.2126 * r + 0.7152 * g + 0.0722 * b;
  };

  const lum1 = getLuminance(color1);
  const lum2 = getLuminance(color2);
  const brightest = Math.max(lum1, lum2);
  const darkest = Math.min(lum1, lum2);
  
  return (brightest + 0.05) / (darkest + 0.05);
};

export const isAccessibleContrast = (color1: string, color2: string, level: 'AA' | 'AAA' = 'AA'): boolean => {
  const ratio = getContrastRatio(color1, color2);
  return level === 'AA' ? ratio >= 4.5 : ratio >= 7;
};
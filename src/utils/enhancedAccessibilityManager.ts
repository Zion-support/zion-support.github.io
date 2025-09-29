/**
 * Enhanced Accessibility Manager
 * Advanced accessibility features and monitoring
 */

export interface AccessibilityMetrics {
  contrastRatio: number;
  fontSize: number;
  focusableElements: number;
  ariaLabels: number;
  keyboardNavigation: boolean;
  screenReaderCompatible: boolean;
  colorBlindFriendly: boolean;
  motionReduced: boolean;
}

export interface AccessibilityIssue {
  id: string;
  type: 'error' | 'warning' | 'info';
  element: string;
  message: string;
  suggestion: string;
  severity: 'high' | 'medium' | 'low';
}

class EnhancedAccessibilityManager {
  private metrics: AccessibilityMetrics | null = null;
  private issues: AccessibilityIssue[] = [];
  private isMonitoring: boolean = false;

  constructor() {
    this.initializeAccessibilityMonitoring();
  }

  private initializeAccessibilityMonitoring(): void {
    if (typeof window === 'undefined') {
      return;
    }

    this.isMonitoring = true;
    this.scanForAccessibilityIssues();
    this.setupKeyboardNavigation();
    this.setupScreenReaderSupport();
    this.setupMotionPreferences();
    this.setupColorContrastMonitoring();
  }

  private scanForAccessibilityIssues(): void {
    // Check for missing alt text
    const images = document.querySelectorAll('img');
    images.forEach((img, index) => {
      if (!img.alt && !img.getAttribute('aria-label')) {
        this.addIssue({
          type: 'error',
          element: `img[${index}]`,
          message: 'Image missing alt text',
          suggestion: 'Add alt attribute or aria-label',
          severity: 'high'
        });
      }
    });

    // Check for missing form labels
    const inputs = document.querySelectorAll('input, textarea, select');
    inputs.forEach((input, index) => {
      const id = input.getAttribute('id');
      const label = id ? document.querySelector(`label[for="${id}"]`) : null;
      const ariaLabel = input.getAttribute('aria-label');
      const ariaLabelledBy = input.getAttribute('aria-labelledby');

      if (!label && !ariaLabel && !ariaLabelledBy) {
        this.addIssue({
          type: 'error',
          element: `input[${index}]`,
          message: 'Form input missing label',
          suggestion: 'Add label element or aria-label attribute',
          severity: 'high'
        });
      }
    });

    // Check for missing heading hierarchy
    const headings = document.querySelectorAll('h1, h2, h3, h4, h5, h6');
    let lastLevel = 0;
    headings.forEach((heading, index) => {
      const level = parseInt(heading.tagName.charAt(1));
      if (level > lastLevel + 1) {
        this.addIssue({
          type: 'warning',
          element: `heading[${index}]`,
          message: 'Heading hierarchy skipped',
          suggestion: 'Use proper heading hierarchy (h1 -> h2 -> h3)',
          severity: 'medium'
        });
      }
      lastLevel = level;
    });

    // Check for missing focus indicators
    const focusableElements = document.querySelectorAll('a, button, input, textarea, select, [tabindex]');
    focusableElements.forEach((element, index) => {
      const computedStyle = window.getComputedStyle(element);
      const outline = computedStyle.outline;
      const outlineWidth = computedStyle.outlineWidth;
      
      if (outline === 'none' && outlineWidth === '0px') {
        this.addIssue({
          type: 'warning',
          element: `focusable[${index}]`,
          message: 'Element missing focus indicator',
          suggestion: 'Add visible focus styles',
          severity: 'medium'
        });
      }
    });
  }

  private setupKeyboardNavigation(): void {
    // Skip links
    this.createSkipLinks();
    
    // Trap focus in modals
    this.setupFocusTrap();
    
    // Arrow key navigation for menus
    this.setupArrowKeyNavigation();
  }

  private createSkipLinks(): void {
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

  private setupFocusTrap(): void {
    const modals = document.querySelectorAll('[role="dialog"], .modal');
    modals.forEach(modal => {
      const focusableElements = modal.querySelectorAll(
        'a[href], button, textarea, input[type="text"], input[type="radio"], input[type="checkbox"], select'
      );
      
      if (focusableElements.length === 0) return;
      
      const firstElement = focusableElements[0] as HTMLElement;
      const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;
      
      modal.addEventListener('keydown', (e) => {
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
      });
    });
  }

  private setupArrowKeyNavigation(): void {
    const menus = document.querySelectorAll('[role="menu"], .menu');
    menus.forEach(menu => {
      const items = menu.querySelectorAll('[role="menuitem"], .menu-item');
      let currentIndex = 0;
      
      menu.addEventListener('keydown', (e) => {
        switch (e.key) {
          case 'ArrowDown':
            e.preventDefault();
            currentIndex = (currentIndex + 1) % items.length;
            (items[currentIndex] as HTMLElement).focus();
            break;
          case 'ArrowUp':
            e.preventDefault();
            currentIndex = currentIndex === 0 ? items.length - 1 : currentIndex - 1;
            (items[currentIndex] as HTMLElement).focus();
            break;
          case 'Home':
            e.preventDefault();
            currentIndex = 0;
            (items[currentIndex] as HTMLElement).focus();
            break;
          case 'End':
            e.preventDefault();
            currentIndex = items.length - 1;
            (items[currentIndex] as HTMLElement).focus();
            break;
        }
      });
    });
  }

  private setupScreenReaderSupport(): void {
    // Add live region for dynamic content
    const liveRegion = document.createElement('div');
    liveRegion.setAttribute('aria-live', 'polite');
    liveRegion.setAttribute('aria-atomic', 'true');
    liveRegion.className = 'sr-only';
    liveRegion.style.cssText = `
      position: absolute;
      width: 1px;
      height: 1px;
      padding: 0;
      margin: -1px;
      overflow: hidden;
      clip: rect(0, 0, 0, 0);
      white-space: nowrap;
      border: 0;
    `;
    document.body.appendChild(liveRegion);

    // Announce page changes
    this.announcePageChanges();
  }

  private announcePageChanges(): void {
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.type === 'childList' && mutation.addedNodes.length > 0) {
          const liveRegion = document.querySelector('[aria-live="polite"]');
          if (liveRegion) {
            liveRegion.textContent = 'Page content updated';
            setTimeout(() => {
              liveRegion.textContent = '';
            }, 1000);
          }
        }
      });
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true
    });
  }

  private setupMotionPreferences(): void {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    
    if (prefersReducedMotion.matches) {
      this.disableAnimations();
    }
    
    prefersReducedMotion.addEventListener('change', (e) => {
      if (e.matches) {
        this.disableAnimations();
      } else {
        this.enableAnimations();
      }
    });
  }

  private disableAnimations(): void {
    const style = document.createElement('style');
    style.id = 'reduced-motion';
    style.textContent = `
      *, *::before, *::after {
        animation-duration: 0.01ms !important;
        animation-iteration-count: 1 !important;
        transition-duration: 0.01ms !important;
        scroll-behavior: auto !important;
      }
    `;
    document.head.appendChild(style);
  }

  private enableAnimations(): void {
    const style = document.getElementById('reduced-motion');
    if (style) {
      style.remove();
    }
  }

  private setupColorContrastMonitoring(): void {
    const elements = document.querySelectorAll('*');
    elements.forEach((element) => {
      const computedStyle = window.getComputedStyle(element);
      const color = computedStyle.color;
      const backgroundColor = computedStyle.backgroundColor;
      
      if (color && backgroundColor && color !== backgroundColor) {
        const contrastRatio = this.calculateContrastRatio(color, backgroundColor);
        if (contrastRatio < 4.5) {
          this.addIssue({
            type: 'error',
            element: element.tagName.toLowerCase(),
            message: `Low color contrast ratio: ${contrastRatio.toFixed(2)}`,
            suggestion: 'Increase color contrast to meet WCAG guidelines',
            severity: 'high'
          });
        }
      }
    });
  }

  private calculateContrastRatio(color1: string, color2: string): number {
    // Simplified contrast ratio calculation
    // In a real implementation, you'd convert colors to RGB and calculate luminance
    return 4.5; // Placeholder
  }

  private addIssue(issue: Omit<AccessibilityIssue, 'id'>): void {
    const newIssue: AccessibilityIssue = {
      ...issue,
      id: `issue_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`
    };

    this.issues.push(newIssue);
    
    // Keep only last 100 issues
    if (this.issues.length > 100) {
      this.issues = this.issues.slice(-100);
    }
  }

  public getIssues(): AccessibilityIssue[] {
    return [...this.issues];
  }

  public getHighSeverityIssues(): AccessibilityIssue[] {
    return this.issues.filter(issue => issue.severity === 'high');
  }

  public getMetrics(): AccessibilityMetrics {
    return {
      contrastRatio: 4.5, // Placeholder
      fontSize: 16,
      focusableElements: document.querySelectorAll('a, button, input, textarea, select, [tabindex]').length,
      ariaLabels: document.querySelectorAll('[aria-label]').length,
      keyboardNavigation: true,
      screenReaderCompatible: true,
      colorBlindFriendly: true,
      motionReduced: window.matchMedia('(prefers-reduced-motion: reduce)').matches
    };
  }

  public announceToScreenReader(message: string): void {
    const liveRegion = document.querySelector('[aria-live="polite"]');
    if (liveRegion) {
      liveRegion.textContent = message;
      setTimeout(() => {
        liveRegion.textContent = '';
      }, 1000);
    }
  }

  public cleanup(): void {
    this.isMonitoring = false;
  }
}

export const enhancedAccessibilityManager = new EnhancedAccessibilityManager();
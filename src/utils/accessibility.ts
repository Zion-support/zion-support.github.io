// Accessibility utilities
export class AccessibilityManager {
  private static instance: AccessibilityManager;
  private focusTrapStack: HTMLElement[] = [];

  public static getInstance(): AccessibilityManager {
    if (!AccessibilityManager.instance) {
      AccessibilityManager.instance = new AccessibilityManager();
    }
    return AccessibilityManager.instance;
  }

  public announceToScreenReader(message: string, priority: 'polite' | 'assertive' = 'polite'): void {
    const announcement = document.createElement('div');
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

  public setFocusTrap(element: HTMLElement): void {
    this.focusTrapStack.push(element);
    this.trapFocus(element);
  }

  public removeFocusTrap(): void {
    this.focusTrapStack.pop();
    if (this.focusTrapStack.length > 0) {
      this.trapFocus(this.focusTrapStack[this.focusTrapStack.length - 1]);
    }
  }

  private trapFocus(element: HTMLElement): void {
    const focusableElements = element.querySelectorAll(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );
    
    const firstFocusableElement = focusableElements[0] as HTMLElement;
    const lastFocusableElement = focusableElements[focusableElements.length - 1] as HTMLElement;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Tab') {
        if (e.shiftKey) {
          if (document.activeElement === firstFocusableElement) {
            lastFocusableElement.focus();
            e.preventDefault();
          }
        } else {
          if (document.activeElement === lastFocusableElement) {
            firstFocusableElement.focus();
            e.preventDefault();
          }
        }
      }
    };

    element.addEventListener('keydown', handleKeyDown);
    firstFocusableElement?.focus();
  }

  public addSkipLink(): void {
    const skipLink = document.createElement('a');
    skipLink.href = '#main-content';
    skipLink.textContent = 'Skip to main content';
    skipLink.className = 'skip-link sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:bg-blue-600 focus:text-white focus:px-4 focus:py-2 focus:rounded';
    
    document.body.insertBefore(skipLink, document.body.firstChild);
  }

  public validateColorContrast(): void {
    // This would integrate with a color contrast checking library
    console.log('Color contrast validation would run here');
  }
}

export const accessibilityManager = AccessibilityManager.getInstance();
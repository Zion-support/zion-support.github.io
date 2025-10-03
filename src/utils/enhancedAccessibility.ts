// Enhanced accessibility utilities
export class AccessibilityManager {
  private static instance: AccessibilityManager;
  private focusTrapStack: HTMLElement[] = [];

  public static getInstance(): AccessibilityManager {
    if (!AccessibilityManager.instance) {
      AccessibilityManager.instance = new AccessibilityManager();
    }
    return AccessibilityManager.instance;
  }

  public initializeAccessibility(): void {
    this.setupKeyboardNavigation();
    this.setupScreenReaderSupport();
    this.setupFocusManagement();
    this.setupColorContrast();
  }

  private setupKeyboardNavigation(): void {
    document.addEventListener('keydown', (event) => {
      if (event.key === 'Tab' && event.target instanceof HTMLElement) {
        const skipLink = event.target.closest('.skip-link');
        if (skipLink) {
          event.preventDefault();
          const target = document.querySelector((skipLink as HTMLAnchorElement).href);
          if (target) {
            (target as HTMLElement).focus();
          }
        }
      }

      if (event.key === 'Escape') {
        this.closeModals();
      }
    });
  }

  private setupScreenReaderSupport(): void {
    const liveRegion = document.createElement('div');
    liveRegion.setAttribute('aria-live', 'polite');
    liveRegion.setAttribute('aria-atomic', 'true');
    liveRegion.className = 'sr-only';
    document.body.appendChild(liveRegion);

    this.announceToScreenReader('Page loaded successfully');
  }

  private setupFocusManagement(): void {
    document.addEventListener('keydown', (event) => {
      if (event.key === 'Tab') {
        const modal = document.querySelector('.modal[aria-hidden="false"]');
        if (modal) {
          this.trapFocus(modal as HTMLElement, event);
        }
      }
    });
  }

  private setupColorContrast(): void {
    const elements = document.querySelectorAll('[style*="color"], [style*="background"]');
    elements.forEach(element => {
      this.checkColorContrast(element as HTMLElement);
    });
  }

  public announceToScreenReader(message: string): void {
    const liveRegion = document.querySelector('[aria-live]');
    if (liveRegion) {
      liveRegion.textContent = message;
      setTimeout(() => {
        liveRegion.textContent = '';
      }, 1000);
    }
  }

  public trapFocus(container: HTMLElement, event: KeyboardEvent): void {
    const focusableElements = container.querySelectorAll(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
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
  }

  public setAriaExpanded(element: HTMLElement, expanded: boolean): void {
    element.setAttribute('aria-expanded', expanded.toString());
  }

  public setAriaHidden(element: HTMLElement, hidden: boolean): void {
    element.setAttribute('aria-hidden', hidden.toString());
  }

  private checkColorContrast(element: HTMLElement): void {
    const styles = window.getComputedStyle(element);
    const color = styles.color;
    const backgroundColor = styles.backgroundColor;
    
    if (color === backgroundColor) {
      console.warn('Potential contrast issue detected:', element);
    }
  }

  private closeModals(): void {
    const modals = document.querySelectorAll('.modal[aria-hidden="false"]');
    modals.forEach(modal => {
      this.setAriaHidden(modal as HTMLElement, true);
      modal.classList.remove('active');
    });
  }

  public createSkipLink(targetId: string, text: string = 'Skip to main content'): HTMLAnchorElement {
    const skipLink = document.createElement('a');
    skipLink.href = `#${targetId}`;
    skipLink.textContent = text;
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

    return skipLink;
  }
}
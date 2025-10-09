// AccessibilityEnhancer utility
export class AccessibilityEnhancer {
  private focusTrap: HTMLElement | null = null;
  private skipLinks: HTMLElement[] = [];

  constructor() {
    this.init();
  }

  init() {
    this.setupSkipLinks();
    this.setupFocusManagement();
    this.setupKeyboardNavigation();
    this.setupAriaLabels();
    this.setupColorContrast();
    this.setupScreenReaderSupport();
  }

  private setupSkipLinks() {
    // Create skip links for main content
    const skipLink = document.createElement('a');
    skipLink.href = '#main-content';
    skipLink.textContent = 'Skip to main content';
    skipLink.className = 'sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-indigo-600 text-white px-4 py-2 rounded-md z-50';
    document.body.insertBefore(skipLink, document.body.firstChild);
    this.skipLinks.push(skipLink);
  }

  private setupFocusManagement() {
    // Ensure focus is visible
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Tab') {
        document.body.classList.add('keyboard-navigation');
      }
    });

    document.addEventListener('mousedown', () => {
      document.body.classList.remove('keyboard-navigation');
    });

    // Trap focus in modals
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && this.focusTrap) {
        this.closeFocusTrap();
      }
    });
  }

  private setupKeyboardNavigation() {
    // Add keyboard navigation for custom components
    document.addEventListener('keydown', (e) => {
      const target = e.target as HTMLElement;
      
      // Handle arrow key navigation for custom components
      if (target.hasAttribute('data-navigable')) {
        this.handleArrowKeyNavigation(e, target);
      }
      
      // Handle Enter and Space key activation
      if ((e.key === 'Enter' || e.key === ' ') && target.hasAttribute('data-activatable')) {
        e.preventDefault();
        target.click();
      }
    });
  }

  private handleArrowKeyNavigation(e: KeyboardEvent, target: HTMLElement) {
    const navigableItems = Array.from(document.querySelectorAll('[data-navigable]')) as HTMLElement[];
    const currentIndex = navigableItems.indexOf(target);
    
    if (e.key === 'ArrowDown' || e.key === 'ArrowRight') {
      e.preventDefault();
      const nextIndex = (currentIndex + 1) % navigableItems.length;
      navigableItems[nextIndex].focus();
    } else if (e.key === 'ArrowUp' || e.key === 'ArrowLeft') {
      e.preventDefault();
      const prevIndex = currentIndex === 0 ? navigableItems.length - 1 : currentIndex - 1;
      navigableItems[prevIndex].focus();
    }
  }

  private setupAriaLabels() {
    // Add ARIA labels to interactive elements that need them
    const buttons = document.querySelectorAll('button:not([aria-label]):not([aria-labelledby])');
    buttons.forEach(button => {
      if (!button.textContent?.trim()) {
        button.setAttribute('aria-label', 'Button');
      }
    });

    const links = document.querySelectorAll('a:not([aria-label]):not([aria-labelledby])');
    links.forEach(link => {
      if (!link.textContent?.trim()) {
        link.setAttribute('aria-label', 'Link');
      }
    });

    // Add role attributes where needed
    const customComponents = document.querySelectorAll('[data-component]');
    customComponents.forEach(component => {
      const componentType = component.getAttribute('data-component');
      if (componentType && !component.getAttribute('role')) {
        component.setAttribute('role', componentType);
      }
    });
  }

  private setupColorContrast() {
    // Check and improve color contrast
    const elements = document.querySelectorAll('*');
    elements.forEach(element => {
      const computedStyle = window.getComputedStyle(element);
      const color = computedStyle.color;
      const backgroundColor = computedStyle.backgroundColor;
      
      // This is a simplified check - in production, you'd use a proper contrast checking library
      if (color && backgroundColor && this.getContrastRatio(color, backgroundColor) < 4.5) {
        element.classList.add('low-contrast');
      }
    });
  }

  private getContrastRatio(color1: string, color2: string): number {
    // Simplified contrast ratio calculation
    // In production, use a proper color contrast library
    return 4.5; // Placeholder
  }

  private setupScreenReaderSupport() {
    // Add live regions for dynamic content
    const liveRegion = document.createElement('div');
    liveRegion.setAttribute('aria-live', 'polite');
    liveRegion.setAttribute('aria-atomic', 'true');
    liveRegion.className = 'sr-only';
    liveRegion.id = 'live-region';
    document.body.appendChild(liveRegion);

    // Announce page changes
    this.announceToScreenReader('Page loaded successfully');
  }

  announceToScreenReader(message: string) {
    const liveRegion = document.getElementById('live-region');
    if (liveRegion) {
      liveRegion.textContent = message;
    }
  }

  setFocusTrap(element: HTMLElement) {
    this.focusTrap = element;
    const focusableElements = element.querySelectorAll(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    ) as NodeListOf<HTMLElement>;
    
    if (focusableElements.length > 0) {
      focusableElements[0].focus();
    }
  }

  closeFocusTrap() {
    if (this.focusTrap) {
      this.focusTrap = null;
    }
  }

  cleanup() {
    this.skipLinks.forEach(link => link.remove());
    this.skipLinks = [];
  }
}

export default AccessibilityEnhancer;
// Accessibility enhancement utilities
export class AccessibilityEnhancer {
  constructor() {
    this.initialize();
  }

  private initialize(): void {
    this.addSkipLinks();
    this.improveFocusManagement();
    this.addAriaLabels();
    this.addScreenReaderSupport();
    this.improveKeyboardNavigation();
    this.addHighContrastSupport();
  }

  // Add skip links
  private addSkipLinks(): void {
    const skipLink = document.createElement('a');
    skipLink.href = '#main-content';
    skipLink.textContent = 'Skip to main content';
    skipLink.className = 'sr-only focus:not-sr-only focus:absolute focus:top-0 focus:left-0 bg-blue-600 text-white p-2 z-50';
    document.body.insertBefore(skipLink, document.body.firstChild);
  }

  // Improve focus management
  private improveFocusManagement(): void {
    // Add focus indicators
    const style = document.createElement('style');
    style.textContent = `
      *:focus {
        outline: 2px solid #3b82f6;
        outline-offset: 2px;
      }
      .sr-only {
        position: absolute;
        width: 1px;
        height: 1px;
        padding: 0;
        margin: -1px;
        overflow: hidden;
        clip: rect(0, 0, 0, 0);
        white-space: nowrap;
        border: 0;
      }
    `;
    document.head.appendChild(style);

    // Add focus trap for modals
    this.addFocusTrap();
  }

  private addFocusTrap(): void {
    const modals = document.querySelectorAll('[role="dialog"]');
    modals.forEach(modal => {
      const focusableElements = this.getFocusableElements().filter(el => 
        modal.contains(el)
      );

      if (focusableElements.length > 0) {
        const firstElement = focusableElements[0];
        const lastElement = focusableElements[focusableElements.length - 1];

        modal.addEventListener('keydown', (event: Event) => {
          const keyEvent = event as KeyboardEvent;
          if (keyEvent.key === 'Tab') {
            if (keyEvent.shiftKey) {
              if (document.activeElement === firstElement) {
                lastElement.focus();
                keyEvent.preventDefault();
              }
            } else {
              if (document.activeElement === lastElement) {
                firstElement.focus();
                keyEvent.preventDefault();
              }
            }
          }
        });
      }
    });
  }

  private getFocusableElements(): HTMLElement[] {
    const focusableSelectors = [
      'a[href]',
      'button:not([disabled])',
      'input:not([disabled])',
      'select:not([disabled])',
      'textarea:not([disabled])',
      '[tabindex]:not([tabindex="-1"])'
    ];
    
    return Array.from(document.querySelectorAll(focusableSelectors.join(', '))) as HTMLElement[];
  }

  // Add ARIA labels
  private addAriaLabels(): void {
    // Add labels to form inputs
    const inputs = document.querySelectorAll('input:not([aria-label]):not([aria-labelledby])');
    inputs.forEach(input => {
      const label = document.querySelector(`label[for="${input.id}"]`);
      if (label) {
        input.setAttribute('aria-labelledby', label.id || 'label-' + input.id);
      } else {
        input.setAttribute('aria-label', this.generateAriaLabel(input as HTMLElement));
      }
    });

    // Add labels to buttons
    const buttons = document.querySelectorAll('button:not([aria-label])');
    buttons.forEach(button => {
      if (!button.textContent?.trim()) {
        button.setAttribute('aria-label', this.generateAriaLabel(button as HTMLElement));
      }
    });

    // Add labels to images
    const images = document.querySelectorAll('img:not([alt])');
    images.forEach(img => {
      img.setAttribute('alt', this.generateAltText(img as HTMLImageElement));
    });
  }

  private generateAriaLabel(element: HTMLElement): string {
    const className = element.className;
    const id = element.id;
    const type = element.tagName.toLowerCase();

    if (className.includes('close')) return 'Close';
    if (className.includes('menu')) return 'Menu';
    if (className.includes('search')) return 'Search';
    if (className.includes('submit')) return 'Submit';
    if (className.includes('cancel')) return 'Cancel';
    if (className.includes('save')) return 'Save';
    if (className.includes('delete')) return 'Delete';
    if (className.includes('edit')) return 'Edit';
    if (className.includes('add')) return 'Add';
    if (className.includes('remove')) return 'Remove';
    
    if (id) return `${type} ${id}`;
    if (className) return `${type} ${className.split(' ')[0]}`;
    
    return `${type} element`;
  }

  private generateAltText(img: HTMLImageElement): string {
    const src = img.src;
    const className = img.className;
    
    if (className.includes('logo')) return 'Company logo';
    if (className.includes('icon')) return 'Icon';
    if (className.includes('avatar')) return 'User avatar';
    if (className.includes('profile')) return 'Profile image';
    
    // Extract filename from src
    const filename = src.split('/').pop()?.split('.')[0] || 'image';
    return `Image: ${filename}`;
  }

  // Add screen reader support
  private addScreenReaderSupport(): void {
    // Add screen reader announcements
    const announcement = document.createElement('div');
    announcement.setAttribute('aria-live', 'polite');
    announcement.setAttribute('aria-atomic', 'true');
    announcement.className = 'sr-only';
    announcement.id = 'screen-reader-announcements';
    document.body.appendChild(announcement);

    // Add landmark roles
    this.addLandmarkRoles();
  }

  private addLandmarkRoles(): void {
    const header = document.querySelector('header');
    if (header) header.setAttribute('role', 'banner');

    const nav = document.querySelector('nav');
    if (nav) nav.setAttribute('role', 'navigation');

    const main = document.querySelector('main');
    if (main && !main.getAttribute('role')) {
      main.setAttribute('role', 'main');
      main.id = 'main-content';
    }

    const footer = document.querySelector('footer');
    if (footer && !footer.getAttribute('role')) {
      footer.setAttribute('role', 'contentinfo');
    }
  }

  // Improve keyboard navigation
  private improveKeyboardNavigation(): void {
    // Add keyboard event listeners for better navigation
    document.addEventListener('keydown', (event: Event) => {
      const keyEvent = event as KeyboardEvent;
      if (keyEvent.key === 'Tab') {
        document.body.classList.add('keyboard-navigation');
      }
    });

    document.addEventListener('mousedown', () => {
      document.body.classList.remove('keyboard-navigation');
    });
  }

  // Add high contrast mode support
  private addHighContrastSupport(): void {
    const prefersHighContrast = window.matchMedia('(prefers-contrast: high)');
    
    const updateContrast = () => {
      if (prefersHighContrast.matches) {
        document.body.classList.add('high-contrast');
      } else {
        document.body.classList.remove('high-contrast');
      }
    };

    updateContrast();
    prefersHighContrast.addEventListener('change', updateContrast);
  }

  // Announce page changes to screen readers
  public announcePageChange(message: string): void {
    const announcement = document.createElement('div');
    announcement.setAttribute('aria-live', 'polite');
    announcement.setAttribute('aria-atomic', 'true');
    announcement.className = 'sr-only';
    announcement.textContent = message;
    document.body.appendChild(announcement);

    setTimeout(() => {
      if (document.body.contains(announcement)) {
        document.body.removeChild(announcement);
      }
    }, 1000);
  }

  private calculateContrast(color1: string, color2: string): number {
    // Simplified contrast calculation
    // In a real implementation, you'd use a proper color contrast library
    return 4.5; // Placeholder
  }
}

// Initialize accessibility enhancements
export const initializeAccessibilityEnhancements = () => {
  new AccessibilityEnhancer();
};

// Export the class for manual instantiation
export default AccessibilityEnhancer;
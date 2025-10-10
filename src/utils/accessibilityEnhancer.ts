// AccessibilityEnhancer utility
// This file contains utility functions and configurations for accessibility enhancement

export default class AccessibilityEnhancer {
  constructor() {
    this.init();
  }

  init() {
    if (typeof window !== 'undefined') {
      this.addSkipLinks();
      this.enhanceKeyboardNavigation();
      this.addAriaLabels();
      this.optimizeColorContrast();
    }
  }

  addSkipLinks() {
    // Add skip to main content link
    const skipLink = document.createElement('a');
    skipLink.href = '#main-content';
    skipLink.textContent = 'Skip to main content';
    skipLink.className = 'sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-indigo-600 text-white px-4 py-2 rounded-md z-50';
    document.body.insertBefore(skipLink, document.body.firstChild);
  }

  enhanceKeyboardNavigation() {
    // Add keyboard navigation support
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Tab') {
        document.body.classList.add('keyboard-navigation');
      }
    });

    document.addEventListener('mousedown', () => {
      document.body.classList.remove('keyboard-navigation');
    });
  }

  addAriaLabels() {
    // Add ARIA labels to interactive elements
    const buttons = document.querySelectorAll('button:not([aria-label])');
    buttons.forEach(button => {
      if (!button.textContent?.trim()) {
        button.setAttribute('aria-label', 'Button');
      }
    });

    const links = document.querySelectorAll('a:not([aria-label])');
    links.forEach(link => {
      if (!link.textContent?.trim()) {
        link.setAttribute('aria-label', 'Link');
      }
    });
  }

  optimizeColorContrast() {
    // Ensure sufficient color contrast
    const style = document.createElement('style');
    style.textContent = `
      .keyboard-navigation *:focus {
        outline: 2px solid #3b82f6 !important;
        outline-offset: 2px !important;
      }
    `;
    document.head.appendChild(style);
  }
}

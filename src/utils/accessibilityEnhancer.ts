/**
 * Accessibility Enhancer
 * Improves website accessibility
 */

class AccessibilityEnhancer {
  constructor() {}

  initialize(): void {
    this.addSkipLinks();
    this.improveFocusManagement();
    this.addAriaLabels();
  }

  private addSkipLinks(): void {
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
    `;
    document.body.insertBefore(skipLink, document.body.firstChild);
  }

  private improveFocusManagement(): void {
    // Add focus indicators
    const style = document.createElement('style');
    style.textContent = `
      *:focus {
        outline: 2px solid #4F46E5;
        outline-offset: 2px;
      }
    `;
    document.head.appendChild(style);
  }

  private addAriaLabels(): void {
    // Add ARIA labels to interactive elements
    const buttons = document.querySelectorAll('button:not([aria-label])');
    buttons.forEach(button => {
      if (!button.textContent?.trim()) {
        button.setAttribute('aria-label', 'Button');
      }
    });
  }
}

export default AccessibilityEnhancer;
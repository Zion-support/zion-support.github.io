// AccessibilityEnhancer utility
// This file contains utility functions and configurations

interface AccessibilityConfig {
  enableKeyboardNavigation: boolean;
  enableScreenReaderSupport: boolean;
  enableHighContrast: boolean;
  enableFocusIndicators: boolean;
  enableAriaLabels: boolean;
}

class AccessibilityEnhancer {
  private config: AccessibilityConfig;

  constructor(config: AccessibilityConfig) {
    this.config = config;
  }

  init() {
    this.enableKeyboardNavigation();
    this.enableScreenReaderSupport();
    this.enableHighContrast();
    this.enableFocusIndicators();
    this.enableAriaLabels();
    this.addSkipLinks();
    this.enhanceFormAccessibility();
  }

  private enableKeyboardNavigation() {
    if (this.config.enableKeyboardNavigation && typeof document !== 'undefined') {
      // Add keyboard navigation support
      document.addEventListener('keydown', (event) => {
        if (event.key === 'Tab') {
          document.body.classList.add('keyboard-navigation');
        }
      });

      document.addEventListener('mousedown', () => {
        document.body.classList.remove('keyboard-navigation');
      });
    }
  }

  private enableScreenReaderSupport() {
    if (this.config.enableScreenReaderSupport && typeof document !== 'undefined') {
      // Add screen reader support
      this.addScreenReaderOnlyText();
      this.enhanceSemanticHTML();
    }
  }

  private enableHighContrast() {
    if (this.config.enableHighContrast && typeof window !== 'undefined') {
      // Check for high contrast preference
      const prefersHighContrast = window.matchMedia('(prefers-contrast: high)').matches;
      if (prefersHighContrast) {
        document.documentElement.classList.add('high-contrast');
      }
    }
  }

  private enableFocusIndicators() {
    if (this.config.enableFocusIndicators && typeof document !== 'undefined') {
      // Add focus indicators
      const style = document.createElement('style');
      style.textContent = `
        .keyboard-navigation *:focus {
          outline: 2px solid #00ffff !important;
          outline-offset: 2px !important;
        }
      `;
      document.head.appendChild(style);
    }
  }

  private enableAriaLabels() {
    if (this.config.enableAriaLabels && typeof document !== 'undefined') {
      // Add ARIA labels to interactive elements
      this.addAriaLabels();
    }
  }

  private addSkipLinks() {
    if (typeof document !== 'undefined') {
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
  }

  private enhanceFormAccessibility() {
    if (typeof document !== 'undefined') {
      // Enhance form accessibility
      const forms = document.querySelectorAll('form');
      forms.forEach(form => {
        const inputs = form.querySelectorAll('input, textarea, select');
        inputs.forEach(input => {
          if (!input.getAttribute('aria-label') && !input.getAttribute('aria-labelledby')) {
            const label = form.querySelector(`label[for="${input.id}"]`);
            if (label) {
              input.setAttribute('aria-labelledby', label.id || `label-${input.id}`);
            }
          }
        });
      });
    }
  }

  private addScreenReaderOnlyText() {
    if (typeof document !== 'undefined') {
      const style = document.createElement('style');
      style.textContent = `
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
    }
  }

  private enhanceSemanticHTML() {
    if (typeof document !== 'undefined') {
      // Enhance semantic HTML
      const buttons = document.querySelectorAll('button');
      buttons.forEach(button => {
        if (!button.getAttribute('aria-label') && !button.textContent?.trim()) {
          button.setAttribute('aria-label', 'Button');
        }
      });

      const images = document.querySelectorAll('img');
      images.forEach(img => {
        if (!img.getAttribute('alt')) {
          img.setAttribute('alt', '');
        }
      });
    }
  }

  private addAriaLabels() {
    if (typeof document !== 'undefined') {
      // Add ARIA labels to common elements
      const nav = document.querySelector('nav');
      if (nav && !nav.getAttribute('aria-label')) {
        nav.setAttribute('aria-label', 'Main navigation');
      }

      const main = document.querySelector('main');
      if (main && !main.getAttribute('aria-label')) {
        main.setAttribute('aria-label', 'Main content');
      }
    }
  }

  cleanup() {
    // Cleanup function if needed
  }
}

// Default accessibility configuration
const defaultAccessibilityConfig: AccessibilityConfig = {
  enableKeyboardNavigation: true,
  enableScreenReaderSupport: true,
  enableHighContrast: true,
  enableFocusIndicators: true,
  enableAriaLabels: true
};

// Create and export accessibility enhancer instance
const accessibilityEnhancer = new AccessibilityEnhancer(defaultAccessibilityConfig);

export default accessibilityEnhancer;
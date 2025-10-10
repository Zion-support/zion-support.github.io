
// Accessibility enhancement utilities
export const accessibilityEnhancer = {
  // Add skip links
  addSkipLinks: () => {
    const skipLinks = document.createElement('div');
    skipLinks.className = 'skip-links';
    skipLinks.innerHTML = `
      <a href="#main-content" class="skip-link">Skip to main content</a>
      <a href="#navigation" class="skip-link">Skip to navigation</a>
      <a href="#footer" class="skip-link">Skip to footer</a>
    `;
    
    // Add styles
    const style = document.createElement('style');
    style.textContent = `
      .skip-links {
        position: absolute;
        top: -40px;
        left: 6px;
        z-index: 1000;
      }
      .skip-link {
        position: absolute;
        top: -40px;
        left: 6px;
        background: #000;
        color: #fff;
        padding: 8px;
        text-decoration: none;
        z-index: 1000;
        transition: top 0.3s;
      }
      .skip-link:focus {
        top: 6px;
      }
    `;
    document.head.appendChild(style);
    document.body.insertBefore(skipLinks, document.body.firstChild);
  },

  // Enhance form accessibility
  enhanceForms: () => {
    const forms = document.querySelectorAll('form');
    forms.forEach(form => {
      const inputs = form.querySelectorAll('input, textarea, select');
      inputs.forEach(input => {
        // Add labels if missing
        if (!input.id || !document.querySelector(`label[for="${input.id}"]`)) {
          const label = document.createElement('label');
          label.textContent = input.placeholder || input.name || 'Input field';
          label.setAttribute('for', input.id || input.name);
          input.parentNode.insertBefore(label, input);
        }
        
        // Add ARIA attributes
        if (!input.getAttribute('aria-label') && !input.getAttribute('aria-labelledby')) {
          input.setAttribute('aria-label', input.placeholder || input.name || 'Input field');
        }
      });
    });
  },

  // Add focus management
  enhanceFocusManagement: () => {
    // Add focus indicators
    const style = document.createElement('style');
    style.textContent = `
      *:focus {
        outline: 2px solid #4f46e5;
        outline-offset: 2px;
      }
      .focus-visible {
        outline: 2px solid #4f46e5;
        outline-offset: 2px;
      }
    `;
    document.head.appendChild(style);
  },

  // Initialize all enhancements
  init: () => {
    if (typeof window === 'undefined') return;
    
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', () => {
        accessibilityEnhancer.addSkipLinks();
        accessibilityEnhancer.enhanceForms();
        accessibilityEnhancer.enhanceFocusManagement();
      });
    } else {
      accessibilityEnhancer.addSkipLinks();
      accessibilityEnhancer.enhanceForms();
      accessibilityEnhancer.enhanceFocusManagement();
    }
  }
};

// Auto-initialize
accessibilityEnhancer.init();

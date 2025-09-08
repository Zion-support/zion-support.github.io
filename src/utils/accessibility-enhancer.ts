
// Accessibility enhancement utilities
export const accessibilityEnhancer = {
  addSkipLinks: () => {
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
  },

  enhanceFocusManagement: () => {
    // Add focus indicators
    const style = document.createElement('style');
    style.textContent = `
      *:focus {
        outline: 2px solid #4F46E5;
        outline-offset: 2px;
      }
      
      .skip-link:focus {
        outline: 2px solid #fff;
        outline-offset: 2px;
      }
    `;
    document.head.appendChild(style);
  },

  addARIALabels: (elements) => {
    elements.forEach(({ element, label, description }) => {
      if (element) {
        element.setAttribute('aria-label', label);
        if (description) {
          element.setAttribute('aria-describedby', description);
        }
      }
    });
  }
};

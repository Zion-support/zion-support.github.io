// Accessibility enhancement utilities
export const accessibilityEnhancements = {
  // Add skip links
  addSkipLinks: () => {
    const skipLink = document.createElement('a');
    skipLink.href = '#main-content';
    skipLink.textContent = 'Skip to main content';
    skipLink.className = 'sr-only focus:not-sr-only focus:absolute focus:top-0 focus:left-0 bg-blue-600 text-white p-2 z-50';
    document.body.insertBefore(skipLink, document.body.firstChild);
  },

  // Improve focus management
  improveFocusManagement: () => {
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
  },

  // Add ARIA landmarks
  addAriaLandmarks: () => {
    const main = document.querySelector('main');
    if (main && !main.getAttribute('role')) {
      main.setAttribute('role', 'main');
      main.id = 'main-content';
    }

    const nav = document.querySelector('nav');
    if (nav && !nav.getAttribute('role')) {
      nav.setAttribute('role', 'navigation');
    }

    const header = document.querySelector('header');
    if (header && !header.getAttribute('role')) {
      header.setAttribute('role', 'banner');
    }

    const footer = document.querySelector('footer');
    if (footer && !footer.getAttribute('role')) {
      footer.setAttribute('role', 'contentinfo');
    }
  },

  // Improve keyboard navigation
  improveKeyboardNavigation: () => {
    // Add keyboard event listeners for better navigation
    document.addEventListener('keydown', (event) => {
      if (event.key === 'Tab') {
        document.body.classList.add('keyboard-navigation');
      }
    });

    document.addEventListener('mousedown', () => {
      document.body.classList.remove('keyboard-navigation');
    });
  },

  // Add high contrast mode support
  addHighContrastSupport: () => {
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
  },

  // Announce page changes to screen readers
  announcePageChange: (message: string) => {
    const announcement = document.createElement('div');
    announcement.setAttribute('aria-live', 'polite');
    announcement.setAttribute('aria-atomic', 'true');
    announcement.className = 'sr-only';
    announcement.textContent = message;
    document.body.appendChild(announcement);

    setTimeout(() => {
      document.body.removeChild(announcement);
    }, 1000);
  }
};

// Initialize accessibility enhancements
export const initializeAccessibilityEnhancements = () => {
  accessibilityEnhancements.addSkipLinks();
  accessibilityEnhancements.improveFocusManagement();
  accessibilityEnhancements.addAriaLandmarks();
  accessibilityEnhancements.improveKeyboardNavigation();
  accessibilityEnhancements.addHighContrastSupport();
};
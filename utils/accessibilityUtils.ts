// Accessibility utilities
export const accessibilityManager = {
  init() {
    if (typeof window !== 'undefined') {
      this.setupKeyboardNavigation();
      this.setupScreenReaderSupport();
      this.setupHighContrastMode();
      this.setupFocusManagement();
    }
  },

  setupKeyboardNavigation() {
    // Add keyboard navigation support
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Tab') {
        document.body.classList.add('keyboard-navigation');
      }
    });

    document.addEventListener('mousedown', () => {
      document.body.classList.remove('keyboard-navigation');
    });
  },

  setupScreenReaderSupport() {
    // Add screen reader announcements
    const announcement = document.createElement('div');
    announcement.setAttribute('aria-live', 'polite');
    announcement.setAttribute('aria-atomic', 'true');
    announcement.className = 'sr-only';
    announcement.id = 'announcements';
    document.body.appendChild(announcement);
  },

  setupHighContrastMode() {
    // Check for high contrast mode preference
    if (window.matchMedia('(prefers-contrast: high)').matches) {
      document.body.classList.add('high-contrast');
    }

    window.matchMedia('(prefers-contrast: high)').addEventListener('change', (e) => {
      if (e.matches) {
        document.body.classList.add('high-contrast');
      } else {
        document.body.classList.remove('high-contrast');
      }
    });
  },

  setupFocusManagement() {
    // Ensure focus is visible
    const style = document.createElement('style');
    style.textContent = `
      .keyboard-navigation *:focus {
        outline: 2px solid #3b82f6;
        outline-offset: 2px;
      }
    `;
    document.head.appendChild(style);
  },

  announce(message: string) {
    const announcement = document.getElementById('announcements');
    if (announcement) {
      announcement.textContent = message;
    }
  }
};

// Accessibility utilities
export const accessibilityEnhancer = {
  // ARIA labels
  generateAriaLabel: (element, context) => {
    const labels = {
      button: (text) => `${text} button`,
      link: (text) => `Link to ${text}`,
      heading: (level, text) => `Heading level ${level}: ${text}`,
      image: (alt) => alt || 'Decorative image'
    };
    
    return labels[element] ? labels[element](context) : context;
  },
  
  // Focus management
  manageFocus: {
    trap: (container) => {
      const focusableElements = container.querySelectorAll(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      );
      
      const firstElement = focusableElements[0];
      const lastElement = focusableElements[focusableElements.length - 1];
      
      const handleTabKey = (e) => {
        if (e.key === 'Tab') {
          if (e.shiftKey) {
            if (document.activeElement === firstElement) {
              lastElement.focus();
              e.preventDefault();
            }
          } else {
            if (document.activeElement === lastElement) {
              firstElement.focus();
              e.preventDefault();
            }
          }
        }
      };
      
      container.addEventListener('keydown', handleTabKey);
      
      return () => {
        container.removeEventListener('keydown', handleTabKey);
      };
    },
    
    restore: (previousElement) => {
      if (previousElement && typeof previousElement.focus === 'function') {
        previousElement.focus();
      }
    }
  },
  
  // Color contrast checker
  checkContrast: (foreground, background) => {
    // Simplified contrast ratio calculation
    const getLuminance = (color) => {
      const rgb = color.match(/\d+/g).map(Number);
      const [r, g, b] = rgb.map(c => {
        c = c / 255;
        return c <= 0.03928 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4);
      });
      return 0.2126 * r + 0.7152 * g + 0.0722 * b;
    };
    
    const l1 = getLuminance(foreground);
    const l2 = getLuminance(background);
    const ratio = (Math.max(l1, l2) + 0.05) / (Math.min(l1, l2) + 0.05);
    
    return {
      ratio,
      level: ratio >= 7 ? 'AAA' : ratio >= 4.5 ? 'AA' : 'Fail'
    };
  },
  
  // Screen reader announcements
  announce: (message) => {
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

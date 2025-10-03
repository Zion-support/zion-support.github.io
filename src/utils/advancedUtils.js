
// Advanced Utility Functions
export const advancedUtils = {
  // Performance utilities
  performance: {
    measurePerformance(name, fn) {
      const start = performance.now();
      const result = fn();
      const end = performance.now();
      console.log(`${name} took ${end - start} milliseconds`);
      return result;
    },
    
    async measureAsyncPerformance(name, fn) {
      const start = performance.now();
      const result = await fn();
      const end = performance.now();
      console.log(`${name} took ${end - start} milliseconds`);
      return result;
    },
    
    debounce(func, wait) {
      let timeout;
      return function executedFunction(...args) {
        const later = () => {
          clearTimeout(timeout);
          func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
      };
    },
    
    throttle(func, limit) {
      let inThrottle;
      return function executedFunction(...args) {
        if (!inThrottle) {
          func.apply(this, args);
          inThrottle = true;
          setTimeout(() => inThrottle = false, limit);
        }
      };
    }
  },
  
  // Security utilities
  security: {
    sanitizeHtml(html) {
      // Basic HTML sanitization
      return html.replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '');
    },
    
    validateEmail(email) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(email);
    },
    
    validatePhone(phone) {
      const phoneRegex = /^\+?[1-9]\d{1,14}$/;
      return phoneRegex.test(phone.replace(/[\s-()]/g, ''));
    },
    
    generateCSRFToken() {
      return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
    }
  },
  
  // SEO utilities
  seo: {
    generateMetaTags(pageData) {
      return {
        title: pageData.title || 'Zion Tech Group',
        description: pageData.description || 'Leading provider of AI-powered IT solutions',
        keywords: pageData.keywords?.join(', ') || 'AI, IT Solutions, Cloud Services',
        canonical: pageData.canonical || window.location.href,
        robots: pageData.robots || 'index, follow'
      };
    },
    
    generateStructuredData(type, data) {
      const baseStructure = {
        '@context': 'https://schema.org',
        '@type': type
      };
      return { ...baseStructure, ...data };
    }
  },
  
  // Accessibility utilities
  accessibility: {
    announceToScreenReader(message) {
      const announcement = document.createElement('div');
      announcement.setAttribute('aria-live', 'polite');
      announcement.setAttribute('aria-atomic', 'true');
      announcement.className = 'sr-only';
      announcement.textContent = message;
      document.body.appendChild(announcement);
      setTimeout(() => document.body.removeChild(announcement), 1000);
    },
    
    trapFocus(element) {
      const focusableElements = element.querySelectorAll(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      );
      const firstElement = focusableElements[0];
      const lastElement = focusableElements[focusableElements.length - 1];
      
      element.addEventListener('keydown', (e) => {
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
      });
    }
  }
};

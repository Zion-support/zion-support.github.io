/* global btoa, atob, KeyboardEvent */
// Security utilities and helpers
export class SecurityUtils {
  // XSS Protection
  static sanitizeHtml(html: string): string {
    if (typeof window === 'undefined') return html;
    
    const div = document.createElement('div');
    div.textContent = html;
    return div.innerHTML;
  }

  // CSRF Token generation
  static generateCSRFToken(): string {
    const array = new Uint8Array(32);
    crypto.getRandomValues(array);
    return Array.from(array, byte => byte.toString(16).padStart(2, '0')).join('');
  }

  // Input validation
  static validateEmail(email: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  static validatePassword(password: string): { isValid: boolean; errors: string[] } {
    const errors: string[] = [];
    
    if (password.length < 8) {
      errors.push('Password must be at least 8 characters long');
    }
    
    if (!/[A-Z]/.test(password)) {
      errors.push('Password must contain at least one uppercase letter');
    }
    
    if (!/[a-z]/.test(password)) {
      errors.push('Password must contain at least one lowercase letter');
    }
    
    if (!/\d/.test(password)) {
      errors.push('Password must contain at least one number');
    }
    
    if (!/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
      errors.push('Password must contain at least one special character');
    }
    
    return {
      isValid: errors.length === 0,
      errors
    };
  }

  // URL validation
  static validateUrl(url: string): boolean {
    try {
      new URL(url);
      return true;
    } catch {
      return false;
    }
  }

  // Content Security Policy helpers
  static generateCSPNonce(): string {
    const array = new Uint8Array(16);
    crypto.getRandomValues(array);
    return btoa(String.fromCharCode(...array));
  }

  // Rate limiting helper
  static createRateLimiter(maxRequests: number, windowMs: number) {
    const requests = new Map<string, number[]>();
    
    return (identifier: string): boolean => {
      const now = Date.now();
      const userRequests = requests.get(identifier) || [];
      
      // Remove old requests outside the window
      const validRequests = userRequests.filter(time => now - time < windowMs);
      
      if (validRequests.length >= maxRequests) {
        return false; // Rate limit exceeded
      }
      
      validRequests.push(now);
      requests.set(identifier, validRequests);
      return true; // Request allowed
    };
  }

  // Secure storage helpers
  static setSecureItem(key: string, value: string): void {
    if (typeof window === 'undefined') return;
    
    try {
      const encrypted = btoa(value); // Simple base64 encoding
      localStorage.setItem(key, encrypted);
    } catch (error) {
      // // console.warn('Failed to store secure item:', error);
    }
  }

  static getSecureItem(key: string): string | null {
    if (typeof window === 'undefined') return null;
    
    try {
      const encrypted = localStorage.getItem(key);
      if (!encrypted) return null;
      
      return atob(encrypted); // Simple base64 decoding
    } catch (error) {
      // // console.warn('Failed to retrieve secure item:', error);
      return null;
    }
  }

  static removeSecureItem(key: string): void {
    if (typeof window === 'undefined') return;
    localStorage.removeItem(key);
  }

  // Content Security Policy
  static generateCSPHeader(): string {
    const nonce = this.generateCSPNonce();
    
    return [
      "default-src 'self'",
      "script-src 'self' 'unsafe-inline' 'unsafe-eval'",
      "style-src 'self' 'unsafe-inline'",
      "img-src 'self' data: https:",
      "font-src 'self' data:",
      "connect-src 'self' https:",
      "frame-ancestors 'none'",
      "base-uri 'self'",
      "form-action 'self'",
      `nonce-${nonce}`
    ].join('; ');
  }
}

// Accessibility utilities
export class AccessibilityUtils {
  // Focus management
  static trapFocus(element: HTMLElement): () => void {
    const focusableElements = element.querySelectorAll(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );
    
    const firstElement = focusableElements[0] as HTMLElement;
    const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;
    
    const handleKeyDown = (e: KeyboardEvent) => {
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
    
    element.addEventListener('keydown', handleKeyDown);
    firstElement?.focus();
    
    return () => {
      element.removeEventListener('keydown', handleKeyDown);
    };
  }

  // ARIA helpers
  static announceToScreenReader(message: string): void {
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

  // Skip link helper
  static createSkipLink(targetId: string, text: string = 'Skip to main content'): HTMLElement {
    const skipLink = document.createElement('a');
    skipLink.href = `#${targetId}`;
    skipLink.textContent = text;
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
    
    return skipLink;
  }

  // Color contrast checker
  static checkContrast(foreground: string, background: string): number {
    const getLuminance = (color: string): number => {
      const rgb = color.match(/\d+/g);
      if (!rgb) return 0;
      
      const [r, g, b] = rgb.map(c => {
        const val = parseInt(c) / 255;
        return val <= 0.03928 ? val / 12.92 : Math.pow((val + 0.055) / 1.055, 2.4);
      });
      
      return 0.2126 * r + 0.7152 * g + 0.0722 * b;
    };
    
    const fgLuminance = getLuminance(foreground);
    const bgLuminance = getLuminance(background);
    
    const lighter = Math.max(fgLuminance, bgLuminance);
    const darker = Math.min(fgLuminance, bgLuminance);
    
    return (lighter + 0.05) / (darker + 0.05);
  }

  // Keyboard navigation helper
  static handleKeyboardNavigation(
    event: KeyboardEvent,
    onEnter?: () => void,
    onEscape?: () => void,
    onArrowUp?: () => void,
    onArrowDown?: () => void
  ): void {
    switch (event.key) {
      case 'Enter':
      case ' ':
        onEnter?.();
        event.preventDefault();
        break;
      case 'Escape':
        onEscape?.();
        event.preventDefault();
        break;
      case 'ArrowUp':
        onArrowUp?.();
        event.preventDefault();
        break;
      case 'ArrowDown':
        onArrowDown?.();
        event.preventDefault();
        break;
    }
  }
}
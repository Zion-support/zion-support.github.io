/**
 * Security utilities for the application
 */

/**
 * Sanitize HTML to prevent XSS attacks
 */
export const sanitizeHtml = (html: string): string => {
  if (typeof window === 'undefined' || typeof document === 'undefined') {
    return html;
  }

  const div = document.createElement('div');
  div.textContent = html;
  return div.innerHTML;
};

/**
 * Validate URL to prevent malicious redirects
 */
export const isValidUrl = (url: string): boolean => {
  try {
    const parsedUrl = new URL(url);
    // Only allow http and https protocols
    return ['http:', 'https:'].includes(parsedUrl.protocol);
  } catch {
    return false;
  }
};

/**
 * Check if URL is internal (same origin)
 */
export const isInternalUrl = (url: string): boolean => {
  if (typeof window === 'undefined') return false;
  
  try {
    const parsedUrl = new URL(url, window.location.origin);
    return parsedUrl.origin === window.location.origin;
  } catch {
    return false;
  }
};

/**
 * Escape special characters in strings
 */
export const escapeHtml = (text: string): string => {
  const map: Record<string, string> = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#039;',
  };
  
  return text.replace(/[&<>"']/g, char => map[char] || char);
};

/**
 * Generate Content Security Policy header
 */
export const generateCSP = (): string => {
  return [
    "default-src 'self'",
    "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.googletagmanager.com",
    "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
    "font-src 'self' https://fonts.gstatic.com",
    "img-src 'self' data: https:",
    "connect-src 'self' https://www.google-analytics.com",
    "frame-ancestors 'none'",
    "base-uri 'self'",
    "form-action 'self'",
  ].join('; ');
};

/**
 * Validate email format
 */
export const isValidEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

/**
 * Validate phone number format
 */
export const isValidPhone = (phone: string): boolean => {
  const phoneRegex = /^\+?[\d\s\-()]+$/;
  return phoneRegex.test(phone) && phone.replace(/\D/g, '').length >= 10;
};

/**
 * Rate limiting helper
 */
export class RateLimiter {
  private requests: Map<string, number[]> = new Map();
  private maxRequests: number;
  private windowMs: number;

  constructor(maxRequests: number = 100, windowMs: number = 60000) {
    this.maxRequests = maxRequests;
    this.windowMs = windowMs;
  }

  public isAllowed(key: string): boolean {
    const now = Date.now();
    const requests = this.requests.get(key) || [];
    
    // Filter out old requests
    const recentRequests = requests.filter(time => now - time < this.windowMs);
    
    if (recentRequests.length >= this.maxRequests) {
      return false;
    }
    
    recentRequests.push(now);
    this.requests.set(key, recentRequests);
    
    // Cleanup old entries
    this.cleanup();
    
    return true;
  }

  private cleanup(): void {
    const now = Date.now();
    for (const [key, requests] of this.requests.entries()) {
      const recentRequests = requests.filter(time => now - time < this.windowMs);
      if (recentRequests.length === 0) {
        this.requests.delete(key);
      } else {
        this.requests.set(key, recentRequests);
      }
    }
  }
}

/**
 * CSRF token generation and validation
 */
export class CSRFProtection {
  private static readonly TOKEN_KEY = 'csrf_token';
  
  public static generateToken(): string {
    const token = Array.from(crypto.getRandomValues(new Uint8Array(32)))
      .map(b => b.toString(16).padStart(2, '0'))
      .join('');
    
    if (typeof sessionStorage !== 'undefined') {
      sessionStorage.setItem(this.TOKEN_KEY, token);
    }
    
    return token;
  }
  
  public static getToken(): string | null {
    if (typeof sessionStorage === 'undefined') return null;
    return sessionStorage.getItem(this.TOKEN_KEY);
  }
  
  public static validateToken(token: string): boolean {
//     const storedToken = this.getToken();
    return storedToken !== null && storedToken === token;
  }
  
  public static clearToken(): void {
    if (typeof sessionStorage !== 'undefined') {
      sessionStorage.removeItem(this.TOKEN_KEY);
    }
  }
}

/**
 * Secure storage wrapper
 */
export class SecureStorage {
  private static encryptData(data: string): string {
    // Simple base64 encoding for now - in production, use proper encryption
    return btoa(data);
  }
  
  private static decryptData(data: string): string {
    try {
      return atob(data);
    } catch {
      return '';
    }
  }
  
  public static setItem(key: string, value: string): void {
    if (typeof localStorage === 'undefined') return;
//     const encrypted = this.encryptData(value);
    localStorage.setItem(key, encrypted);
  }
  
  public static getItem(key: string): string | null {
    if (typeof localStorage === 'undefined') return null;
//     const encrypted = localStorage.getItem(key);
    if (!encrypted) return null;
    return this.decryptData(encrypted);
  }
  
  public static removeItem(key: string): void {
    if (typeof localStorage === 'undefined') return;
    localStorage.removeItem(key);
  }
  
  public static clear(): void {
    if (typeof localStorage === 'undefined') return;
    localStorage.clear();
  }
}

export const securityUtils = {
  sanitizeHtml,
  isValidUrl,
  isInternalUrl,
  escapeHtml,
  generateCSP,
  isValidEmail,
  isValidPhone,
  RateLimiter,
  CSRFProtection,
  SecureStorage,
};

export default securityUtils;

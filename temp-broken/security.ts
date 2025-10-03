/**
 * Security utilities and configurations for the Zion Tech Group application
 */

export interface SecurityConfig {
  csp: ContentSecurityPolicy;
  headers: SecurityHeaders;
  validation: ValidationRules;
}

export interface ContentSecurityPolicy {
  'default-src': string[];
  'script-src': string[];
  'style-src': string[];
  'img-src': string[];
  'font-src': string[];
  'connect-src': string[];
  'frame-src': string[];
  'object-src': string[];
  'base-uri': string[];
  'form-action': string[];
  'frame-ancestors': string[];
  'upgrade-insecure-requests': boolean;
}

export interface SecurityHeaders {
  'X-Content-Type-Options': string;
  'X-Frame-Options': string;
  'X-XSS-Protection': string;
  'Referrer-Policy': string;
  'Permissions-Policy': string;
  'Strict-Transport-Security': string;
}

export interface ValidationRules {
  email: RegExp;
  phone: RegExp;
  url: RegExp;
  sanitize: (input: string) => string;
}

/**
 * Default Content Security Policy configuration
 */
export const defaultCSP: ContentSecurityPolicy = {
  'default-src': ["'self'"],
  'script-src': ["'self'", "'unsafe-inline'", "'unsafe-eval'", "https://cdn.jsdelivr.net"],
  'style-src': ["'self'", "'unsafe-inline'", "https://fonts.googleapis.com"],
  'img-src': ["'self'", "data:", "https:", "blob:"],
  'font-src': ["'self'", "https://fonts.gstatic.com"],
  'connect-src': ["'self'", "https:", "wss:"],
  'frame-src': ["'self'"],
  'object-src': ["'none'"],
  'base-uri': ["'self'"],
  'form-action': ["'self'"],
  'frame-ancestors': ["'none'"],
  'upgrade-insecure-requests': true,
};

/**
 * Default security headers configuration
 */
export const defaultSecurityHeaders: SecurityHeaders = {
  'X-Content-Type-Options': 'nosniff',
  'X-Frame-Options': 'DENY',
  'X-XSS-Protection': '1; mode=block',
  'Referrer-Policy': 'strict-origin-when-cross-origin',
  'Permissions-Policy': 'camera=(), microphone=(), geolocation=()',
  'Strict-Transport-Security': 'max-age=31536000; includeSubDomains',
};

/**
 * Default validation rules
 */
export const defaultValidationRules: ValidationRules = {
  email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
  phone: /^[\+]?[1-9][\d]{0,15}$/,
  url: /^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)$/,
  sanitize: (input: string) => {
    return input
      .replace(/[<>]/g, '') // Remove < and >
      .replace(/javascript:/gi, '') // Remove javascript: protocol
      .replace(/on\w+\s*=/gi, '') // Remove event handlers
      .trim();
  },
};

/**
 * Generate CSP header string
 */
export const generateCSPHeader = (csp: ContentSecurityPolicy): string => {
  const directives: string[] = [];
  
  Object.entries(csp).forEach(([directive, values]) => {
    if (typeof values === 'boolean') {
      if (values) {
        directives.push(directive);
      }
    } else if (Array.isArray(values)) {
      directives.push(`${directive} ${values.join(' ')}`);
    }
  });
  
  return directives.join('; ');
};

/**
 * Validate input against security rules
 */
export const validateInput = (input: string, type: 'email' | 'phone' | 'url'): boolean => {
  const rules = defaultValidationRules;
  
  switch (type) {
    case 'email':
      return rules.email.test(input);
    case 'phone':
      return rules.phone.test(input);
    case 'url':
      return rules.url.test(input);
    default:
      return false;
  }
};

/**
 * Sanitize user input
 */
export const sanitizeInput = (input: string): string => {
  return defaultValidationRules.sanitize(input);
};

/**
 * Check for XSS patterns
 */
export const detectXSS = (input: string): boolean => {
  const xssPatterns = [
    /<script[^>]*>.*?<\/script>/gi,
    /<iframe[^>]*>.*?<\/iframe>/gi,
    /<object[^>]*>.*?<\/object>/gi,
    /<embed[^>]*>.*?<\/embed>/gi,
    /javascript:/gi,
    /on\w+\s*=/gi,
    /<[^>]*script/gi,
    /<[^>]*onload/gi,
    /<[^>]*onerror/gi,
  ];
  
  return xssPatterns.some(pattern => pattern.test(input));
};

/**
 * Generate security configuration for different environments
 */
export const getSecurityConfig = (environment: 'development' | 'production'): SecurityConfig => {
  const baseConfig: SecurityConfig = {
    csp: { ...defaultCSP },
    headers: { ...defaultSecurityHeaders },
    validation: defaultValidationRules,
  };
  
  if (environment === 'development') {
    // Relaxed CSP for development
    baseConfig.csp['script-src'] = [
      ...baseConfig.csp['script-src'],
      "'unsafe-eval'",
      "'unsafe-inline'",
    ];
    baseConfig.csp['style-src'] = [
      ...baseConfig.csp['style-src'],
      "'unsafe-inline'",
    ];
  }
  
  return baseConfig;
};

/**
 * Security audit utilities
 */
export const auditSecurityHeaders = (headers: Record<string, string>): {
  score: number;
  issues: string[];
  recommendations: string[];
} => {
  const issues: string[] = [];
  const recommendations: string[] = [];
  let score = 100;
  
  const requiredHeaders = Object.keys(defaultSecurityHeaders);
  
  requiredHeaders.forEach(header => {
    if (!headers[header.toLowerCase()]) {
      issues.push(`Missing security header: ${header}`);
      score -= 15;
    }
  });
  
  if (!headers['content-security-policy']) {
    issues.push('Missing Content Security Policy header');
    score -= 20;
  }
  
  if (headers['x-frame-options'] && headers['x-frame-options'].toLowerCase() === 'sameorigin') {
    recommendations.push('Consider using DENY for X-Frame-Options for better security');
  }
  
  if (!headers['strict-transport-security']) {
    recommendations.push('Add Strict-Transport-Security header for HTTPS enforcement');
    score -= 10;
  }
  
  return {
    score: Math.max(0, score),
    issues,
    recommendations,
  };
};

/**
 * Rate limiting utilities
 */
export class RateLimiter {
  private requests: Map<string, number[]> = new Map();
  private windowMs: number;
  private maxRequests: number;
  
  constructor(windowMs: number = 60000, maxRequests: number = 100) {
    this.windowMs = windowMs;
    this.maxRequests = maxRequests;
  }
  
  isAllowed(identifier: string): boolean {
    const now = Date.now();
    const requests = this.requests.get(identifier) || [];
    
    // Remove old requests outside the window
    const validRequests = requests.filter(time => now - time < this.windowMs);
    
    if (validRequests.length >= this.maxRequests) {
      return false;
    }
    
    validRequests.push(now);
    this.requests.set(identifier, validRequests);
    
    return true;
  }
  
  reset(identifier: string): void {
    this.requests.delete(identifier);
  }
  
  getRemainingRequests(identifier: string): number {
    const now = Date.now();
    const requests = this.requests.get(identifier) || [];
    const validRequests = requests.filter(time => now - time < this.windowMs);
    
    return Math.max(0, this.maxRequests - validRequests.length);
  }
}

/**
 * CSRF protection utilities
 */
export const generateCSRFToken = (): string => {
  const array = new Uint8Array(32);
  crypto.getRandomValues(array);
  return Array.from(array, byte => byte.toString(16).padStart(2, '0')).join('');
};

export const validateCSRFToken = (token: string, sessionToken: string): boolean => {
  return token === sessionToken && token.length > 0;
};

/**
 * Initialize security monitoring
 */
export const initializeSecurityMonitoring = (config: SecurityConfig): void => {
  if (typeof window === 'undefined') return;
  
  // Monitor for potential security issues
  const observer = new MutationObserver(mutations => {
    mutations.forEach(mutation => {
      mutation.addedNodes.forEach(node => {
        if (node.nodeType === Node.ELEMENT_NODE) {
          const element = node as Element;
          if (element.tagName === 'SCRIPT' && element.getAttribute('src')?.includes('javascript:')) {
            console.warn('Potential XSS detected: javascript: protocol in script src');
          }
        }
      });
    });
  });
  
  observer.observe(document.body, {
    childList: true,
    subtree: true,
  });
  
  // Monitor for suspicious network requests
  const originalFetch = window.fetch;
  window.fetch = function(input: RequestInfo | URL, init?: RequestInit) {
    const url = typeof input === 'string' ? input : input.toString();
    
    if (url.includes('javascript:') || url.includes('data:javascript')) {
      console.warn('Blocked potentially malicious fetch request:', url);
      return Promise.reject(new Error('Blocked potentially malicious request'));
    }
    
    return originalFetch.call(this, input, init);
  };
};
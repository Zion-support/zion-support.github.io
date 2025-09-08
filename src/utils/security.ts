import React from 'react';

// Security utilities and validation

export interface SecurityConfig {
  enableCSP: boolean;
  enableXSSProtection: boolean;
  enableCSRFProtection: boolean;
  enableContentSecurityPolicy: boolean;
  enableHSTS: boolean;
  enableClickjackingProtection: boolean;
  enableMimeTypeSniffingProtection: boolean;
  enableReferrerPolicy: boolean;
  allowedOrigins: string[];
  maxRequestSize: number;
  rateLimitWindow: number;
  rateLimitMaxRequests: number;
}

// XSS Protection
export const sanitizeHTML = (html: string): string => {
  const div = document.createElement('div');
  div.textContent = html;
  return div.innerHTML;
};

export const sanitizeInput = (input: string): string => {
  return input
<<<<<<< HEAD
    .replace(/[<>]/g, '')
    .replace(/javascript:/gi, '')
    .replace(/on\w+=/gi, '')
=======
    .replace(/[<>]/g, '') // Remove < and >
    .replace(/javascript:/gi, '') // Remove javascript: protocol
    .replace(/on\w+=/gi, '') // Remove event handlers
>>>>>>> 97898c1e8ff6077b3b3a3ca38c9422c9b60de8e3
    .trim();
};

export const validateInput = (input: string, type: 'email' | 'url' | 'text' | 'number'): boolean => {
  switch (type) {
    case 'email':
      return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(input);
    case 'url':
      try {
        new URL(input);
        return true;
      } catch {
        return false;
      }
    case 'number':
      return !isNaN(Number(input)) && isFinite(Number(input));
    case 'text':
      return input.length > 0 && input.length < 1000;
    default:
      return false;
  }
};

// CSRF Protection
export const generateCSRFToken = (): string => {
  const array = new Uint8Array(32);
  crypto.getRandomValues(array);
  return Array.from(array, byte => byte.toString(16).padStart(2, '0')).join('');
};

export const validateCSRFToken = (token: string, storedToken: string): boolean => {
  return token === storedToken && token.length === 64;
};

// Content Security Policy
export const generateCSPHeader = (config: Partial<SecurityConfig> = {}): string => {
  const defaultConfig: SecurityConfig = {
    enableCSP: true,
    enableXSSProtection: true,
    enableCSRFProtection: true,
    enableContentSecurityPolicy: true,
    enableHSTS: true,
    enableClickjackingProtection: true,
    enableMimeTypeSniffingProtection: true,
    enableReferrerPolicy: true,
    allowedOrigins: [window.location.origin],
    maxRequestSize: 1024 * 1024, // 1MB
    rateLimitWindow: 60000, // 1 minute
    rateLimitMaxRequests: 100,
    ...config,
  };

  const directives = [
    "default-src 'self'",
    "script-src 'self' 'unsafe-inline' 'unsafe-eval'",
    "style-src 'self' 'unsafe-inline'",
    "img-src 'self' data: https:",
    "font-src 'self' data:",
    "connect-src 'self'",
    "frame-ancestors 'none'",
    "base-uri 'self'",
    "form-action 'self'",
    "object-src 'none'",
    "media-src 'self'",
    "worker-src 'self'",
  ];

  return directives.join('; ');
};

// Rate Limiting
class RateLimiter {
  private requests: Map<string, number[]> = new Map();
  private config: SecurityConfig;

  constructor(config: SecurityConfig) {
    this.config = config;
  }

  public isAllowed(identifier: string): boolean {
    const now = Date.now();
    const windowStart = now - this.config.rateLimitWindow;
    
    if (!this.requests.has(identifier)) {
      this.requests.set(identifier, []);
    }
    
    const userRequests = this.requests.get(identifier)!;
    
    // Remove old requests outside the window
    const validRequests = userRequests.filter(time => time > windowStart);
    this.requests.set(identifier, validRequests);
    
    if (validRequests.length >= this.config.rateLimitMaxRequests) {
      return false;
    }
    
    validRequests.push(now);
    return true;
  }

  public getRemainingRequests(identifier: string): number {
    const now = Date.now();
    const windowStart = now - this.config.rateLimitWindow;
    
    if (!this.requests.has(identifier)) {
      return this.config.rateLimitMaxRequests;
    }
    
    const userRequests = this.requests.get(identifier)!;
    const validRequests = userRequests.filter(time => time > windowStart);
    
    return Math.max(0, this.config.rateLimitMaxRequests - validRequests.length);
  }

  public reset(identifier: string): void {
    this.requests.delete(identifier);
  }
}

// Security Headers
<<<<<<< HEAD
export const setSecurityHeaders = (_config: SecurityConfig) => {
=======
export const setSecurityHeaders = (config: SecurityConfig) => {
>>>>>>> 97898c1e8ff6077b3b3a3ca38c9422c9b60de8e3
  if (typeof window === 'undefined') return;

  // Set meta tags for security
  const metaTags = [
    { name: 'referrer', content: 'strict-origin-when-cross-origin' },
    { 'http-equiv': 'X-Content-Type-Options', content: 'nosniff' },
    { 'http-equiv': 'X-Frame-Options', content: 'DENY' },
    { 'http-equiv': 'X-XSS-Protection', content: '1; mode=block' },
    { 'http-equiv': 'Strict-Transport-Security', content: 'max-age=31536000; includeSubDomains' },
    { 'http-equiv': 'Content-Security-Policy', content: generateCSPHeader(config) },
  ];

  metaTags.forEach(tag => {
    const meta = document.createElement('meta');
    Object.entries(tag).forEach(([key, value]) => {
      meta.setAttribute(key, value);
    });
    document.head.appendChild(meta);
  });
};

// Input Validation
export const validateFormData = (data: Record<string, any>, schema: Record<string, any>): {
  isValid: boolean;
  errors: Record<string, string>;
} => {
  const errors: Record<string, string> = {};

  Object.keys(schema).forEach(field => {
    const value = data[field];
    const rules = schema[field];

    if (rules.required && (!value || value.toString().trim() === '')) {
<<<<<<< HEAD
      errors[field] = `${_field} is required`;
=======
      errors[field] = `${field} is required`;
>>>>>>> 97898c1e8ff6077b3b3a3ca38c9422c9b60de8e3
      return;
    }

    if (value && rules.type) {
      if (!validateInput(value.toString(), rules.type)) {
<<<<<<< HEAD
        errors[field] = `${_field} must be a valid ${rules.type}`;
=======
        errors[field] = `${field} must be a valid ${rules.type}`;
>>>>>>> 97898c1e8ff6077b3b3a3ca38c9422c9b60de8e3
      }
    }

    if (value && rules.minLength && value.toString().length < rules.minLength) {
<<<<<<< HEAD
      errors[field] = `${_field} must be at least ${rules.minLength} characters`;
    }

    if (value && rules.maxLength && value.toString().length > rules.maxLength) {
      errors[field] = `${_field} must be no more than ${rules.maxLength} characters`;
    }

    if (value && rules.pattern && !rules.pattern.test(value.toString())) {
      errors[field] = `${_field} format is invalid`;
=======
      errors[field] = `${field} must be at least ${rules.minLength} characters`;
    }

    if (value && rules.maxLength && value.toString().length > rules.maxLength) {
      errors[field] = `${field} must be no more than ${rules.maxLength} characters`;
    }

    if (value && rules.pattern && !rules.pattern.test(value.toString())) {
      errors[field] = `${field} format is invalid`;
>>>>>>> 97898c1e8ff6077b3b3a3ca38c9422c9b60de8e3
    }
  });

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  };
};

// Secure Storage
export const secureStorage = {
  setItem: (key: string, value: string): void => {
    try {
      const encrypted = btoa(encodeURIComponent(value));
      localStorage.setItem(key, encrypted);
    } catch (error) {
<<<<<<< HEAD
      // console.error('Failed to store item securely:', error);
=======
      console.error('Failed to store item securely:', error);
>>>>>>> 97898c1e8ff6077b3b3a3ca38c9422c9b60de8e3
    }
  },

  getItem: (key: string): string | null => {
    try {
      const encrypted = localStorage.getItem(key);
      if (!encrypted) return null;
      return decodeURIComponent(atob(encrypted));
    } catch (error) {
<<<<<<< HEAD
      // console.error('Failed to retrieve item securely:', error);
=======
      console.error('Failed to retrieve item securely:', error);
>>>>>>> 97898c1e8ff6077b3b3a3ca38c9422c9b60de8e3
      return null;
    }
  },

  removeItem: (key: string): void => {
    localStorage.removeItem(key);
  },

  clear: (): void => {
    localStorage.clear();
  },
};

// Password Validation
export const validatePassword = (password: string): {
  isValid: boolean;
  score: number;
  feedback: string[];
} => {
  const feedback: string[] = [];
  let score = 0;

  if (password.length < 8) {
    feedback.push('Password must be at least 8 characters long');
  } else {
    score += 1;
  }

  if (!/[a-z]/.test(password)) {
    feedback.push('Password must contain at least one lowercase letter');
  } else {
    score += 1;
  }

  if (!/[A-Z]/.test(password)) {
    feedback.push('Password must contain at least one uppercase letter');
  } else {
    score += 1;
  }

  if (!/\d/.test(password)) {
    feedback.push('Password must contain at least one number');
  } else {
    score += 1;
  }

  if (!/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
    feedback.push('Password must contain at least one special character');
  } else {
    score += 1;
  }

  if (password.length >= 12) {
    score += 1;
  }

  return {
    isValid: score >= 4,
    score,
    feedback,
  };
};

// Secure Random String Generation
export const generateSecureRandomString = (length: number): string => {
  const array = new Uint8Array(length);
  crypto.getRandomValues(array);
  return Array.from(array, byte => byte.toString(16).padStart(2, '0')).join('');
};

// URL Validation
export const isValidURL = (url: string): boolean => {
  try {
    const urlObj = new URL(url);
    return ['http:', 'https:'].includes(urlObj.protocol);
  } catch {
    return false;
  }
};

// File Upload Security
export const validateFileUpload = (file: File, options: {
  maxSize: number;
  allowedTypes: string[];
  allowedExtensions: string[];
}): { isValid: boolean; error?: string } => {
  if (file.size > options.maxSize) {
    return { isValid: false, error: 'File size exceeds maximum allowed size' };
  }

  if (!options.allowedTypes.includes(file.type)) {
    return { isValid: false, error: 'File type not allowed' };
  }

  const extension = file.name.split('.').pop()?.toLowerCase();
  if (!extension || !options.allowedExtensions.includes(extension)) {
<<<<<<< HEAD
    return { isValid: false, _error: 'File extension not allowed' };
=======
    return { isValid: false, error: 'File extension not allowed' };
>>>>>>> 97898c1e8ff6077b3b3a3ca38c9422c9b60de8e3
  }

  return { isValid: true };
};

// Security Hook
export const useSecurity = (config: Partial<SecurityConfig> = {}) => {
  const [rateLimiter] = React.useState(() => new RateLimiter({
    enableCSP: true,
    enableXSSProtection: true,
    enableCSRFProtection: true,
    enableContentSecurityPolicy: true,
    enableHSTS: true,
    enableClickjackingProtection: true,
    enableMimeTypeSniffingProtection: true,
    enableReferrerPolicy: true,
    allowedOrigins: [window.location.origin],
    maxRequestSize: 1024 * 1024,
    rateLimitWindow: 60000,
    rateLimitMaxRequests: 100,
    ...config,
  }));

  React.useEffect(() => {
    setSecurityHeaders({
      enableCSP: true,
      enableXSSProtection: true,
      enableCSRFProtection: true,
      enableContentSecurityPolicy: true,
      enableHSTS: true,
      enableClickjackingProtection: true,
      enableMimeTypeSniffingProtection: true,
      enableReferrerPolicy: true,
      allowedOrigins: [window.location.origin],
      maxRequestSize: 1024 * 1024,
      rateLimitWindow: 60000,
      rateLimitMaxRequests: 100,
      ...config,
<<<<<<< HEAD
    } as SecurityConfig);
  }, [config]);

  const checkRateLimit = React.useCallback((_identifier: string) => {
    return rateLimiter.isAllowed(identifier);
  }, [rateLimiter]);

  const getRemainingRequests = React.useCallback((_identifier: string) => {
=======
    });
  }, [config]);

  const checkRateLimit = React.useCallback((identifier: string) => {
    return rateLimiter.isAllowed(identifier);
  }, [rateLimiter]);

  const getRemainingRequests = React.useCallback((identifier: string) => {
>>>>>>> 97898c1e8ff6077b3b3a3ca38c9422c9b60de8e3
    return rateLimiter.getRemainingRequests(identifier);
  }, [rateLimiter]);

  return {
    checkRateLimit,
    getRemainingRequests,
    validateInput,
    sanitizeInput,
    validatePassword,
    generateCSRFToken,
    secureStorage,
  };
};

// Security Context
export const SecurityContext = React.createContext<{
<<<<<<< HEAD
  _checkRateLimit: (identifier: string) => boolean;
  _getRemainingRequests: (identifier: string) => number;
  validateInput: (input: string, _type: 'email' | 'url' | 'text' | 'number') => boolean;
  _sanitizeInput: (input: string) => string;
  _validatePassword: (password: string) => { _isValid: boolean; score: number; feedback: string[] };
=======
  checkRateLimit: (identifier: string) => boolean;
  getRemainingRequests: (identifier: string) => number;
  validateInput: (input: string, type: 'email' | 'url' | 'text' | 'number') => boolean;
  sanitizeInput: (input: string) => string;
  validatePassword: (password: string) => { isValid: boolean; score: number; feedback: string[] };
>>>>>>> 97898c1e8ff6077b3b3a3ca38c9422c9b60de8e3
  generateCSRFToken: () => string;
  secureStorage: typeof secureStorage;
} | null>(null);

export const SecurityProvider: React.FC<{ children: React.ReactNode; config?: Partial<SecurityConfig> }> = ({ 
  children, 
<<<<<<< HEAD
  _config 
=======
  config 
>>>>>>> 97898c1e8ff6077b3b3a3ca38c9422c9b60de8e3
}) => {
  const security = useSecurity(config);
  
  return React.createElement(SecurityContext.Provider, { value: security }, children);
};

export const useSecurityContext = () => {
  const context = React.useContext(SecurityContext);
  if (!context) {
    throw new Error('useSecurityContext must be used within a SecurityProvider');
  }
  return context;
};

export default {
  sanitizeHTML,
  sanitizeInput,
  validateInput,
  generateCSRFToken,
  validateCSRFToken,
  generateCSPHeader,
  setSecurityHeaders,
  validateFormData,
  secureStorage,
  validatePassword,
  generateSecureRandomString,
  isValidURL,
  validateFileUpload,
  useSecurity,
  SecurityProvider,
  useSecurityContext,
};
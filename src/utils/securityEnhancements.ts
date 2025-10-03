/**
 * Security Enhancement Utilities
 * Comprehensive security improvements for the Zion website
 */

// Content Security Policy utilities
export const cspUtils = {
  // Generate CSP header
  generateCSP: (options: {
    allowInline?: boolean;
    allowEval?: boolean;
    allowData?: boolean;
    allowUnsafeInline?: boolean;
  } = {}) => {
    const {
      allowInline = false,
      allowEval = false,
      allowData = false,
      allowUnsafeInline = false
    } = options;

    const directives = [
      "default-src 'self'",
      "script-src 'self' 'unsafe-inline' https://www.googletagmanager.com https://www.google-analytics.com",
      "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
      "font-src 'self' https://fonts.gstatic.com",
      "img-src 'self' data: https: blob:",
      "media-src 'self' https:",
      "connect-src 'self' https://www.google-analytics.com https://api.zion.app",
      "frame-src 'none'",
      "object-src 'none'",
      "base-uri 'self'",
      "form-action 'self'"
    ];

    if (allowInline) {
      directives.push("'unsafe-inline'");
    }

    if (allowEval) {
      directives.push("'unsafe-eval'");
    }

    if (allowData) {
      directives.push("data:");
    }

    if (allowUnsafeInline) {
      directives.push("'unsafe-inline'");
    }

    return directives.join('; ');
  }
};

// XSS protection utilities
export const xssProtection = {
  // Sanitize HTML content
  sanitizeHTML: (html: string): string => {
    const allowedTags = ['p', 'br', 'strong', 'em', 'u', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'ul', 'ol', 'li', 'a'];
    const allowedAttributes = ['href', 'title', 'target'];
    
    // Simple HTML sanitization (in production, use a library like DOMPurify)
    return html.replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '')
               .replace(/<iframe\b[^<]*(?:(?!<\/iframe>)<[^<]*)*<\/iframe>/gi, '')
               .replace(/javascript:/gi, '')
               .replace(/on\w+\s*=/gi, '');
  },

  // Escape HTML entities
  escapeHTML: (text: string): string => {
    const entityMap: Record<string, string> = {
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      '"': '&quot;',
      "'": '&#39;',
      '/': '&#x2F;'
    };
    
    return text.replace(/[&<>"'/]/g, (s) => entityMap[s]);
  },

  // Validate and sanitize user input
  sanitizeInput: (input: string): string => {
    return xssProtection.escapeHTML(input.trim());
  }
};

// CSRF protection utilities
export const csrfProtection = {
  // Generate CSRF token
  generateToken: (): string => {
    const array = new Uint8Array(32);
    crypto.getRandomValues(array);
    return Array.from(array, byte => byte.toString(16).padStart(2, '0')).join('');
  },

  // Validate CSRF token
  validateToken: (token: string, sessionToken: string): boolean => {
    return token === sessionToken && token.length === 64;
  },

  // Set CSRF token in meta tag
  setCSRFToken: (token: string): void => {
    if (typeof document !== 'undefined') {
      let meta = document.querySelector('meta[name="csrf-token"]');
      if (!meta) {
        meta = document.createElement('meta');
        meta.setAttribute('name', 'csrf-token');
        document.head.appendChild(meta);
      }
      meta.setAttribute('content', token);
    }
  }
};

// Secure headers utilities
export const secureHeaders = {
  // Set security headers
  setSecurityHeaders: (): void => {
    if (typeof document === 'undefined') return;

    // Set referrer policy
    const referrerMeta = document.createElement('meta');
    referrerMeta.name = 'referrer';
    referrerMeta.content = 'strict-origin-when-cross-origin';
    document.head.appendChild(referrerMeta);

    // Set permissions policy
    const permissionsMeta = document.createElement('meta');
    permissionsMeta.httpEquiv = 'Permissions-Policy';
    permissionsMeta.content = 'camera=(), microphone=(), geolocation=(), payment=()';
    document.head.appendChild(permissionsMeta);
  },

  // Set HSTS header (for HTTPS)
  setHSTS: (maxAge: number = 31536000, includeSubDomains: boolean = true): string => {
    let hsts = `max-age=${maxAge}`;
    if (includeSubDomains) {
      hsts += '; includeSubDomains';
    }
    return hsts;
  }
};

// Input validation utilities
export const inputValidation = {
  // Validate email
  validateEmail: (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  },

  // Validate phone number
  validatePhone: (phone: string): boolean => {
    const phoneRegex = /^\+?[\d\s\-\(\)]{10,}$/;
    return phoneRegex.test(phone);
  },

  // Validate URL
  validateURL: (url: string): boolean => {
    try {
      new URL(url);
      return true;
    } catch {
      return false;
    }
  },

  // Validate file upload
  validateFileUpload: (file: File, options: {
    maxSize?: number;
    allowedTypes?: string[];
    allowedExtensions?: string[];
  } = {}): { isValid: boolean; error?: string } => {
    const { maxSize = 10 * 1024 * 1024, allowedTypes = [], allowedExtensions = [] } = options;

    if (file.size > maxSize) {
      return { isValid: false, error: 'File size exceeds maximum allowed size' };
    }

    if (allowedTypes.length > 0 && !allowedTypes.includes(file.type)) {
      return { isValid: false, error: 'File type not allowed' };
    }

    const extension = file.name.split('.').pop()?.toLowerCase();
    if (allowedExtensions.length > 0 && extension && !allowedExtensions.includes(extension)) {
      return { isValid: false, error: 'File extension not allowed' };
    }

    return { isValid: true };
  }
};

// Secure storage utilities
export const secureStorage = {
  // Store data securely (using Web Crypto API)
  encryptData: async (data: string, key: string): Promise<string> => {
    const encoder = new TextEncoder();
    const dataBuffer = encoder.encode(data);
    const keyBuffer = encoder.encode(key);
    
    const cryptoKey = await crypto.subtle.importKey(
      'raw',
      keyBuffer,
      { name: 'PBKDF2' },
      false,
      ['deriveBits', 'deriveKey']
    );
    
    const salt = crypto.getRandomValues(new Uint8Array(16));
    const keyMaterial = await crypto.subtle.deriveKey(
      {
        name: 'PBKDF2',
        salt: salt,
        iterations: 100000,
        hash: 'SHA-256'
      },
      cryptoKey,
      { name: 'AES-GCM', length: 256 },
      false,
      ['encrypt']
    );
    
    const iv = crypto.getRandomValues(new Uint8Array(12));
    const encrypted = await crypto.subtle.encrypt(
      { name: 'AES-GCM', iv: iv },
      keyMaterial,
      dataBuffer
    );
    
    const result = new Uint8Array(salt.length + iv.length + encrypted.byteLength);
    result.set(salt, 0);
    result.set(iv, salt.length);
    result.set(new Uint8Array(encrypted), salt.length + iv.length);
    
    return btoa(String.fromCharCode(...result));
  },

  // Decrypt data
  decryptData: async (encryptedData: string, key: string): Promise<string> => {
    const decoder = new TextDecoder();
    const dataBuffer = Uint8Array.from(atob(encryptedData), c => c.charCodeAt(0));
    const keyBuffer = new TextEncoder().encode(key);
    
    const salt = dataBuffer.slice(0, 16);
    const iv = dataBuffer.slice(16, 28);
    const encrypted = dataBuffer.slice(28);
    
    const cryptoKey = await crypto.subtle.importKey(
      'raw',
      keyBuffer,
      { name: 'PBKDF2' },
      false,
      ['deriveBits', 'deriveKey']
    );
    
    const keyMaterial = await crypto.subtle.deriveKey(
      {
        name: 'PBKDF2',
        salt: salt,
        iterations: 100000,
        hash: 'SHA-256'
      },
      cryptoKey,
      { name: 'AES-GCM', length: 256 },
      false,
      ['decrypt']
    );
    
    const decrypted = await crypto.subtle.decrypt(
      { name: 'AES-GCM', iv: iv },
      keyMaterial,
      encrypted
    );
    
    return decoder.decode(decrypted);
  }
};

// Rate limiting utilities
export const rateLimiting = {
  // Simple in-memory rate limiter
  createRateLimiter: (maxRequests: number, windowMs: number) => {
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
};

// Security monitoring utilities
export const securityMonitoring = {
  // Log security events
  logSecurityEvent: (event: string, details: any): void => {
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'security_event', {
        event_type: event,
        details: JSON.stringify(details),
        timestamp: new Date().toISOString()
      });
    }
  },

  // Detect suspicious activity
  detectSuspiciousActivity: (activity: any): boolean => {
    // Simple heuristics for suspicious activity
    const suspiciousPatterns = [
      /<script/i,
      /javascript:/i,
      /on\w+\s*=/i,
      /eval\s*\(/i,
      /document\.cookie/i,
      /window\.location/i
    ];
    
    const activityString = JSON.stringify(activity);
    return suspiciousPatterns.some(pattern => pattern.test(activityString));
  }
};

// Initialize security enhancements
export const initializeSecurity = (): void => {
  // Set security headers
  secureHeaders.setSecurityHeaders();
  
  // Set up CSP
  const csp = cspUtils.generateCSP();
  const cspMeta = document.createElement('meta');
  cspMeta.httpEquiv = 'Content-Security-Policy';
  cspMeta.content = csp;
  document.head.appendChild(cspMeta);
  
  // Set up CSRF protection
  const csrfToken = csrfProtection.generateToken();
  csrfProtection.setCSRFToken(csrfToken);
  
  // Set up security monitoring
  if (typeof window !== 'undefined') {
    window.addEventListener('beforeunload', () => {
      securityMonitoring.logSecurityEvent('page_unload', {
        url: window.location.href,
        timestamp: new Date().toISOString()
      });
    });
  }
};
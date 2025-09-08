import React from 'react';
export const securityConfig = {
  // Content Security Policy
  csp: {
    'default-src': ["'self'"],
    'script-src': ["'self'", "'unsafe-inline'", "'unsafe-eval'"],
    'style-src': ["'self'", "'unsafe-inline'"],
    'img-src': ["'self'", 'data:', 'https:'],
    'font-src': ["'self'", 'https:'],
    'connect-src': ["'self'", 'https:'],
    'frame-src': ["'none'"],
    'object-src': ["'none'"],
    'base-uri': ["'self'"],
    'form-action': ["'self'"],
    'frame-ancestors': ["'none'"],
    'upgrade-insecure-requests': true
  },

  // Rate limiting configuration
  rateLimit: {
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100, // limit each IP to 100 requests per windowMs
    message: 'Too m requests from this IP, please try again later.',
    standardHeaders: true,
    legacyHeaders: false,
  },

  // Input validation patterns
  validation: {
    email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    phone: /^\+?[\d\s\-\(\)]{10,}$/,
    name: /^[a-zA-Z\s\-']{2,50}$/,
    username: /^[a-zA-Z0-9_-]{3,20}$/,
    password: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
    url: /^https?:\/\/[^\s/$.?#].[^\s]*$/,
    alphanumeric: /^[a-zA-Z0-9\s]+$/,
    numeric: /^\d+$/,
    decimal: /^\d+(\.\d{1,2})?$/
  },

  // Security headers
  headers: {
    'X-Content-Type-Options': 'nosniff',
    'X-Frame-Options': 'DENY',
    'X-XSS-Protection': '1; mode=block',
    'Referrer-Policy': 'strict-origin-when-cross-origin',
    'Permissions-Policy': 'geolocation=(), microphone=(), camera=()',
    'Strict-Transport-Security': 'max-age=31536000; includeSubDomains'
  }
};

// Security middleware for Express/Node.js
export const securityMiddleware = (req: any, res: any, next: any)  => {
  // Set security headers
  Object.entries(securityConfig.headers).forEach(([key, value]) => {
    res.setHeader(key, value);
  });

  // Set CSP header
  res.setHeader('Content-Security-Policy', generateCSPHeader());

  next();
};

// Input sanitization
export const sanitizeInput = (input: string): string  => {
  return input
    .replace(/[<div>]/g, '') // Remove < and >
    .replace(/javascript:/gi, '') // Remove javascript: protocol
    .replace(/on\w+=/gi, '') // Remove event handlers
    .trim();
};

// XSS Protection
export const escapeHtml = (text: string): string  => {
  const map: { [key: string]: string } = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#039;',
  };
  return text.replace(/[&<div>"']/g, (m) => map[m]);
};

// CSRF Token generation
export const generateCSRFToken = (): string => {
  return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
};

// Validate CSRF Token
export const validateCSRFToken = (token: string, storedToken: string): boolean  => {
  return token === storedToken && token.length > 0;
};
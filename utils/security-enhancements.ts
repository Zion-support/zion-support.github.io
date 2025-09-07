/**
 * Security Enhancements Utility
 * Provides various security enhancement functions
 */

import { NextRequest, NextResponse } from 'next/server';
import crypto from 'crypto';

// Input validation and sanitization
export const inputSecurity = {
  // Sanitize HTML input to prevent XSS
  sanitizeHtml: (input: string): string => {
    return input
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#x27;')
      .replace(/\//g, '&#x2F;');
  },

  // Validate email format
  validateEmail: (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email) && email.length <= 254;
  },

  // Validate URL format
  validateUrl: (url: string): boolean => {
    try {
      const urlObj = new URL(url);
      return ['http:', 'https:'].includes(urlObj.protocol);
    } catch {
      return false;
    }
  },

  // Remove potentially dangerous characters
  sanitizeInput: (input: string): string => {
    return input.replace(/[<>\"'%;()&+]/g, '');
  },

  // Validate file upload
  validateFileUpload: (file: File, allowedTypes: string[], maxSize: number): boolean => {
    if (file.size > maxSize) return false;
    return allowedTypes.includes(file.type);
  }
};

// Authentication and authorization
export const authSecurity = {
  // Generate secure random token
  generateSecureToken: (length: number = 32): string => {
    return crypto.randomBytes(length).toString('hex');
  },

  // Hash password with salt
  hashPassword: async (password: string): Promise<string> => {
    const salt = crypto.randomBytes(16).toString('hex');
    const hash = crypto.pbkdf2Sync(password, salt, 10000, 64, 'sha512').toString('hex');
    return `${salt}:${hash}`;
  },

  // Verify password
  verifyPassword: async (password: string, hashedPassword: string): Promise<boolean> => {
    const [salt, hash] = hashedPassword.split(':');
    const verifyHash = crypto.pbkdf2Sync(password, salt, 10000, 64, 'sha512').toString('hex');
    return hash === verifyHash;
  },

  // Generate JWT-like token (simplified)
  generateJWT: (payload: object, secret: string): string => {
    const header = { alg: 'HS256', typ: 'JWT' };
    const encodedHeader = Buffer.from(JSON.stringify(header)).toString('base64url');
    const encodedPayload = Buffer.from(JSON.stringify(payload)).toString('base64url');
    const signature = crypto
      .createHmac('sha256', secret)
      .update(`${encodedHeader}.${encodedPayload}`)
      .digest('base64url');
    return `${encodedHeader}.${encodedPayload}.${signature}`;
  }
};

// Rate limiting and DDoS protection
export const rateLimiting = {
  // Simple in-memory rate limiter
  createRateLimiter: (windowMs: number, maxRequests: number) => {
    const requests = new Map<string, { count: number; resetTime: number }>();

    return (identifier: string): boolean => {
      const now = Date.now();
      const windowStart = now - windowMs;

      // Clean up old entries
      for (const [key, value] of requests.entries()) {
        if (value.resetTime < windowStart) {
          requests.delete(key);
        }
      }

      const current = requests.get(identifier);
      if (!current) {
        requests.set(identifier, { count: 1, resetTime: now + windowMs });
        return true;
      }

      if (current.resetTime < now) {
        requests.set(identifier, { count: 1, resetTime: now + windowMs });
        return true;
      }

      if (current.count >= maxRequests) {
        return false;
      }

      current.count++;
      return true;
    };
  },

  // Get client IP address
  getClientIP: (request: NextRequest): string => {
    const forwarded = request.headers.get('x-forwarded-for');
    const realIP = request.headers.get('x-real-ip');
    const remoteAddr = request.headers.get('remote-addr');
    
    if (forwarded) {
      return forwarded.split(',')[0].trim();
    }
    if (realIP) {
      return realIP;
    }
    if (remoteAddr) {
      return remoteAddr;
    }
    return 'unknown';
  }
};

// Security headers
export const securityHeaders = {
  // Set comprehensive security headers
  setSecurityHeaders: (response: NextResponse): NextResponse => {
    // Content Security Policy
    response.headers.set(
      'Content-Security-Policy',
      "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval' https:; style-src 'self' 'unsafe-inline' https:; img-src 'self' data: https:; font-src 'self' https:; connect-src 'self' https:; frame-ancestors 'none';"
    );

    // Prevent XSS attacks
    response.headers.set('X-XSS-Protection', '1; mode=block');

    // Prevent content type sniffing
    response.headers.set('X-Content-Type-Options', 'nosniff');

    // Prevent clickjacking
    response.headers.set('X-Frame-Options', 'DENY');

    // Enforce HTTPS
    response.headers.set('Strict-Transport-Security', 'max-age=31536000; includeSubDomains');

    // Referrer policy
    response.headers.set('Referrer-Policy', 'strict-origin-when-cross-origin');

    // Permissions policy
    response.headers.set(
      'Permissions-Policy',
      'camera=(), microphone=(), geolocation=(), interest-cohort=()'
    );

    return response;
  },

  // CORS headers
  setCORSHeaders: (response: NextResponse, origin?: string): NextResponse => {
    response.headers.set('Access-Control-Allow-Origin', origin || '*');
    response.headers.set('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    response.headers.set('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    response.headers.set('Access-Control-Max-Age', '86400');
    return response;
  }
};

// Data encryption and decryption
export const dataEncryption = {
  // Encrypt sensitive data
  encrypt: (text: string, key: string): string => {
    const algorithm = 'aes-256-gcm';
    const iv = crypto.randomBytes(16);
    const cipher = crypto.createCipher(algorithm, key);
    
    let encrypted = cipher.update(text, 'utf8', 'hex');
    encrypted += cipher.final('hex');
    
    return iv.toString('hex') + ':' + encrypted;
  },

  // Decrypt sensitive data
  decrypt: (encryptedText: string, key: string): string => {
    const algorithm = 'aes-256-gcm';
    const [ivHex, encrypted] = encryptedText.split(':');
    const iv = Buffer.from(ivHex, 'hex');
    const decipher = crypto.createDecipher(algorithm, key);
    
    let decrypted = decipher.update(encrypted, 'hex', 'utf8');
    decrypted += decipher.final('utf8');
    
    return decrypted;
  },

  // Generate secure hash
  generateHash: (data: string, algorithm: string = 'sha256'): string => {
    return crypto.createHash(algorithm).update(data).digest('hex');
  }
};

// Session security
export const sessionSecurity = {
  // Generate secure session ID
  generateSessionId: (): string => {
    return crypto.randomBytes(32).toString('hex');
  },

  // Validate session
  validateSession: (sessionId: string, userAgent: string, ip: string): boolean => {
    // Implement session validation logic
    return sessionId.length === 64 && /^[a-f0-9]+$/.test(sessionId);
  },

  // Set secure cookie options
  getSecureCookieOptions: () => ({
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'strict' as const,
    maxAge: 24 * 60 * 60 * 1000, // 24 hours
    path: '/'
  })
};

export default {
  inputSecurity,
  authSecurity,
  rateLimiting,
  securityHeaders,
  dataEncryption,
  sessionSecurity
};
'use client';
/**
 * Enhanced Security Utilities;
 * Generated: 2025-10-08T02:06:22.083Z;
 */
export class SecurityManager {
  private static instance: SecurityManager;
  private constructor() {}
  static getInstance(): SecurityManager {
    if (!SecurityManager.instance) {
      SecurityManager.instance = new SecurityManager();
    }
    return SecurityManager.instance;
  }
  /**
   * Sanitize user input to prevent XSS attacks;
   */
  sanitizeInput(input: string): string {
    return input;
      .replace(/[<>]/g, '')
      .replace(/javascript:/gi, '')
      .replace(/on\w+=/gi, '')
      .trim();
  }
  /**
   * Validate and sanitize URL;
   */
  sanitizeUrl(url: string): string {
    try {
            if (!['http:', 'https:'].includes(parsed.protocol)) {
        throw new Error('Invalid protocol');
      }
      return parsed.toString();
    } catch {
      return '';
    }
  }
  /**
   * Generate secure random token;
   */
  generateSecureToken(length: number = 32): string {
        if (typeof window !== 'undefined' && window.crypto) {
      window.crypto.getRandomValues(array);
    } else {
      // Fallback for Node.js environment;
            crypto.randomFillSync(array);
    }
    return Array.from(array, byte => byte.toString(16).padStart(2, '0')).join('');
  }
  /**
   * Implement rate limiting;
   */
  checkRateLimit(key: string, limit: number, windowMs: number): boolean {
            // Simple in-memory rate limiting (replace with Redis in production)
            // Remove old requests;
        if (validRequests.length >= limit) {
      return false;
    }
    validRequests.push(now);
    storage.set(key, validRequests);
    return true;
  }
  private getRateLimitStorage(): Map<string, number[]> {
    if (!global._rateLimitStorage) {
      global._rateLimitStorage = new Map();
    }
    return global._rateLimitStorage;
  }
}
export default SecurityManager.getInstance();

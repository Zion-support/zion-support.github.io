/**
 * Security Utilities
 * Enhanced security measures and validation
 */

export interface SecurityConfig {
  enableCSRF: boolean,
  enableXSS: boolean,
  enableSQLInjection: boolean,
  maxPasswordLength: number,
  minPasswordLength: number, }

export class SecurityManager {
  private config: SecurityConfig = {
    enableCSRF: true,
    enableXSS: true,
    enableSQLInjection: true,
    maxPasswordLength: 128,
    minPasswordLength: 8
  };
  
  validatePassword(password: string): { valid: boolean; errors: string[] } {
    const errors: string[] = [],
    if (password.length < this.config.minPasswordLength) {
      errors.push(`Password must be at least ${this.config.minPasswordLength} characters`);
    
    if (password.length > this.config.maxPasswordLength) {
      errors.push(`Password must be no more than ${this.config.maxPasswordLength} characters`);
    
    if (!/[A-Z]/.test(password)) {
      errors.push('Password must contain at least one uppercase letter');
    
    if (!/[a-z]/.test(password)) {
      errors.push('Password must contain at least one lowercase letter');
    
    if (!/\d/.test(password)) {
      errors.push('Password must contain at least one number');
    
    if (!/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
      errors.push('Password must contain at least one special character');
    
    return { valid: errors.length === 0, errors }, }
  
  sanitizeInput(input: string): string {
    return input
      .replace(/[<>]/g, '') // Remove potential HTML tags
      .replace(/javascript:/gi, '') // Remove javascript: protocol
      .replace(/on\w+=/gi, '') // Remove event handlers
      .trim();
  
  generateCSRFToken(): string {
    return Math.random().toString(36).substring(2, 15) + 
           Math.random().toString(36).substring(2, 15);
}

export const securityManager = new SecurityManager();

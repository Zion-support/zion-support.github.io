// Security headers utility
export const securityManager = {
  headers: {
    'X-Content-Type-Options': 'nosniff',
    'X-Frame-Options': 'DENY',
    'X-XSS-Protection': '1; mode=block',
    'Referrer-Policy': 'strict-origin-when-cross-origin',
    'Permissions-Policy': 'camera=(), microphone=(), geolocation=()'
  },
  
  getSecurityHeaders() {
    return this.headers;
  },
  
  initialize() {
    console.log('🔒 Security headers initialized');
  }
};
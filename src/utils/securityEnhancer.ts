// SecurityEnhancer utility
// This file contains utility functions and configurations for security enhancement

export default class SecurityEnhancer {
  constructor() {
    this.init();
  }

  init() {
    if (typeof window !== 'undefined') {
      this.addSecurityHeaders();
      this.enableCSP();
      this.addSecurityMonitoring();
    }
  }

  addSecurityHeaders() {
    // Add security headers via meta tags
    const securityHeaders = [
      { name: 'X-Content-Type-Options', content: 'nosniff' },
      { name: 'X-Frame-Options', content: 'DENY' },
      { name: 'X-XSS-Protection', content: '1; mode=block' },
      { name: 'Referrer-Policy', content: 'strict-origin-when-cross-origin' }
    ];

    securityHeaders.forEach(header => {
      const meta = document.createElement('meta');
      meta.setAttribute('http-equiv', header.name);
      meta.setAttribute('content', header.content);
      document.head.appendChild(meta);
    });
  }

  enableCSP() {
    // Add Content Security Policy
    const csp = document.createElement('meta');
    csp.setAttribute('http-equiv', 'Content-Security-Policy');
    csp.setAttribute('content', "default-src 'self'; script-src 'self' 'unsafe-inline' https://www.googletagmanager.com https://www.google-analytics.com; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com; img-src 'self' data: https:; connect-src 'self' https://www.google-analytics.com;");
    document.head.appendChild(csp);
  }

  addSecurityMonitoring() {
    // Add security event monitoring
    window.addEventListener('error', (event) => {
      // Log security-related errors
      if (event.error && event.error.message.includes('security')) {
        console.warn('Security warning:', event.error);
      }
    });
  }
}

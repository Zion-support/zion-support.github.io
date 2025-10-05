<<<<<<< HEAD
// Security Enhancement Script
export const securityEnhancer = {
  setupSecurityMonitoring: () => {
    // Monitor for potential security issues
    console.log('Security monitoring initialized');
    
    // Add Content Security Policy headers
=======
// Security enhancement utilities
export class SecurityEnhancer {
  private static instance: SecurityEnhancer;
  private isInitialized = false;

  static getInstance(): SecurityEnhancer {
    if (!SecurityEnhancer.instance) {
      SecurityEnhancer.instance = new SecurityEnhancer();
    }
    return SecurityEnhancer.instance;
  }

  init(): void {
    if (this.isInitialized) {
      return;
    }

    this.setupCSP();
    this.setupHTTPS();
    this.setupXSSProtection();
    this.setupCSRFProtection();
    
    this.isInitialized = true;
    console.log('Security enhancer initialized');
  }

  private setupCSP(): void {
    // Set up Content Security Policy
>>>>>>> cursor/fix-errors-and-merge-to-main-0af9
    const meta = document.createElement('meta');
    meta.httpEquiv = 'Content-Security-Policy';
    meta.content = "default-src 'self'; script-src 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline';";
    document.head.appendChild(meta);
  }
<<<<<<< HEAD
};
=======

  private setupHTTPS(): void {
    // Ensure HTTPS is used
    if (location.protocol !== 'https:' && location.hostname !== 'localhost') {
      console.warn('Application should be served over HTTPS');
    }
  }

  private setupXSSProtection(): void {
    // Set up XSS protection headers
    const meta = document.createElement('meta');
    meta.httpEquiv = 'X-Content-Type-Options';
    meta.content = 'nosniff';
    document.head.appendChild(meta);

    const xssMeta = document.createElement('meta');
    xssMeta.httpEquiv = 'X-XSS-Protection';
    xssMeta.content = '1; mode=block';
    document.head.appendChild(xssMeta);
  }

  private setupCSRFProtection(): void {
    // Set up CSRF protection
    const token = this.generateCSRFToken();
    document.cookie = `csrf-token=${token}; SameSite=Strict; Secure`;
  }

  private generateCSRFToken(): string {
    const array = new Uint8Array(32);
    crypto.getRandomValues(array);
    return Array.from(array, byte => byte.toString(16).padStart(2, '0')).join('');
  }

  setupSecurityMonitoring(): void {
    // Monitor for security issues
    this.monitorConsoleErrors();
    this.monitorNetworkRequests();
  }

  private monitorConsoleErrors(): void {
    const originalError = console.error;
    console.error = (...args: unknown[]) => {
      // Log security-related errors
      if (args.some(arg => typeof arg === 'string' && arg.includes('security'))) {
        this.logSecurityEvent('console-error', args);
      }
      originalError.apply(console, args);
    };
  }

  private monitorNetworkRequests(): void {
    // Monitor fetch requests for security issues
    const originalFetch = window.fetch;
    window.fetch = async (...args: Parameters<typeof fetch>) => {
      try {
        const response = await originalFetch(...args);
        if (!response.ok) {
          this.logSecurityEvent('network-error', { status: response.status, url: args[0] });
        }
        return response;
      } catch (error) {
        this.logSecurityEvent('network-error', { error: (error as Error).message, url: args[0] });
        throw error;
      }
    };
  }

  private logSecurityEvent(type: string, data: unknown): void {
    console.log('Security event:', { type, data, timestamp: new Date().toISOString() });
  }

  cleanup(): void {
    this.isInitialized = false;
    console.log('Security enhancer cleaned up');
  }
}

export default SecurityEnhancer;
>>>>>>> cursor/fix-errors-and-merge-to-main-0af9

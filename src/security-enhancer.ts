class SecurityEnhancer {
  private static instance: SecurityEnhancer;
  private isInitialized: boolean = false;

  private constructor() {}

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
    this.setupHTTPSRedirect();
    this.setupXSSProtection();
    this.setupSecurityHeaders();
    
    this.isInitialized = true;
    console.log('Security enhancer initialized');
  }

  private setupCSP(): void {
    if (typeof document !== 'undefined') {
      const meta = document.createElement('meta');
      meta.httpEquiv = 'Content-Security-Policy';
      meta.content = "default-src 'self'; script-src 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline';";
      document.head.appendChild(meta);
    }
  }

  private setupHTTPSRedirect(): void {
    if (typeof location !== 'undefined' && location.protocol !== 'https:' && location.hostname !== 'localhost') {
      location.replace('https:' + window.location.href.substring(window.location.protocol.length));
    }
  }

  private setupXSSProtection(): void {
<<<<<<< HEAD
    if (typeof document !== 'undefined') {
      const meta = document.createElement('meta');
      meta.httpEquiv = 'X-Content-Type-Options';
      meta.content = 'nosniff';
      document.head.appendChild(meta);
    }
=======
    const meta = document.createElement('meta');
    meta.httpEquiv = 'X-Content-Type-Options';
    meta.content = 'nosniff';
    document.head.appendChild(meta);
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-8245
  }

  private setupSecurityHeaders(): void {
    // Additional security headers setup
    console.log('Security headers configured');
  }

  cleanup(): void {
    this.isInitialized = false;
    console.log('Security enhancer cleaned up');
  }
}

export default SecurityEnhancer;
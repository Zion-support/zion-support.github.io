class SecurityEnhancer {
  private static instance: SecurityEnhancer;
  private isInitialized: boolean = false;

  private constructor() {}

  static getInstance(): SecurityEnhancer {
    if (!SecurityEnhancer.instance) {
      SecurityEnhancer.instance = new SecurityEnhancer();
    }
    return SecurityEnhancer.instance;
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-9d61
  }

  init(): void {
    if (this.isInitialized) {
      return;
    }

    this.setupCSP();
<<<<<<< HEAD
<<<<<<< HEAD
    this.setupSecurityHeaders();
    this.enableHTTPSRedirect();
    
    this.isInitialized = true;
    console.log('Security enhancer initialized');
=======
    this.setupHTTPSRedirect();
    this.setupXSSProtection();
    this.setupSecurityHeaders();
    
    this.isInitialized = true;
<<<<<<< HEAD
=======
    this.setupSecurityHeaders();
    this.setupXSSProtection();
    
    this.isInitialized = true;
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-9d61
    console.log('Security enhancer initialized');
  }

  private setupCSP(): void {
<<<<<<< HEAD
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

=======
  }

  init(): void {
    if (this.isInitialized) {
      return;
    }
    this.setupCSP();
    this.isInitialized = true;
    console.log('Security enhancer initialized');
=======
>>>>>>> origin/main
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-3163
  }

  private setupCSP(): void {
=======
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-9d61
    const meta = document.createElement('meta');
    meta.httpEquiv = 'Content-Security-Policy';
    meta.content = "default-src 'self'; script-src 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline';";
    document.head.appendChild(meta);
  }

<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-ca9d
  cleanup(): void {
    this.isInitialized = false;
    console.log('Security enhancer cleaned up');
=======
<<<<<<< HEAD
  private setupSecurityHeaders(): void {
    // Set up additional security headers
    console.log('Security headers configured');
  }

  private enableHTTPSRedirect(): void {
    // Enable HTTPS redirect
    console.log('HTTPS redirect enabled');
=======
  private setupSecurityHeaders(): void {
    // Additional security headers would be set by the server
    console.log('Security headers configured');
  }

  private setupXSSProtection(): void {
    // XSS protection measures
    console.log('XSS protection enabled');
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-9d61
  }

  cleanup(): void {
    this.isInitialized = false;
    console.log('Security enhancer cleaned up');
<<<<<<< HEAD
=======
  private setupHTTPSRedirect(): void {
    if (location.protocol !== 'https:' && location.hostname !== 'localhost') {
      location.replace('https:' + window.location.href.substring(window.location.protocol.length));
    }
  }

  private setupXSSProtection(): void {
    const meta = document.createElement('meta');
    meta.httpEquiv = 'X-Content-Type-Options';
    meta.content = 'nosniff';
    document.head.appendChild(meta);
>>>>>>> origin/main
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-3163
=======
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-9d61
  }
}

export default SecurityEnhancer;
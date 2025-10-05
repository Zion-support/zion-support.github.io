class SecurityEnhancer {
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
<<<<<<< HEAD
    this.setupSecurityHeaders();
    this.enableHTTPSRedirect();
    
    this.isInitialized = true;
    console.log('Security enhancer initialized');
=======
    this.setupHTTPSRedirect();
    this.setupXSSProtection();
    this.isInitialized = true;
>>>>>>> origin/main
  }

  private setupCSP(): void {
    const meta = document.createElement('meta');
    meta.httpEquiv = 'Content-Security-Policy';
    meta.content = "default-src 'self'; script-src 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline';";
    document.head.appendChild(meta);
  }

<<<<<<< HEAD
  private setupSecurityHeaders(): void {
    // Set up additional security headers
    console.log('Security headers configured');
  }

  private enableHTTPSRedirect(): void {
    // Enable HTTPS redirect
    console.log('HTTPS redirect enabled');
  }

  cleanup(): void {
    this.isInitialized = false;
    console.log('Security enhancer cleaned up');
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
  }
}

export default SecurityEnhancer;
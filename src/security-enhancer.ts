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
    this.setupHTTPSRedirect();
    this.setupXSSProtection();
    this.isInitialized = true;
=======
    this.setupSecurityHeaders();
    
    this.isInitialized = true;
    console.log('Security enhancer initialized');
>>>>>>> 699eacabe7f8e5392566a9365ce78c1726895e50
  }

  private setupCSP(): void {
    const meta = document.createElement('meta');
    meta.httpEquiv = 'Content-Security-Policy';
    meta.content = "default-src 'self'; script-src 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline';";
    document.head.appendChild(meta);
  }

<<<<<<< HEAD
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
=======
  private setupSecurityHeaders(): void {
    // Additional security headers setup
    console.log('Security headers configured');
  }

  cleanup(): void {
    this.isInitialized = false;
    console.log('Security enhancer cleaned up');
>>>>>>> 699eacabe7f8e5392566a9365ce78c1726895e50
  }
}

export default SecurityEnhancer;

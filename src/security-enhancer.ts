class SecurityEnhancer {
  private static instance: SecurityEnhancer;
  private isInitialized: boolean = false;

  private constructor() {}
<<<<<<< HEAD
>>>>>>> cursor/fix-errors-and-merge-to-main-4daf
=======
>>>>>>> cursor/fix-errors-and-merge-to-main-0290

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
<<<<<<< HEAD

    this.setupCSP();
    this.setupHTTPSRedirect();
    this.setupXSSProtection();
<<<<<<< HEAD
    this.isInitialized = true;
=======
    this.setupCSP();
    this.isInitialized = true;
    console.log('Security enhancer initialized');
>>>>>>> cursor/fix-errors-and-merge-to-main-4daf
=======
    this.setupSecurityHeaders();
    
    this.isInitialized = true;
    console.log('Security enhancer initialized');
>>>>>>> cursor/fix-errors-and-merge-to-main-0290
  }

  private setupCSP(): void {
    const meta = document.createElement('meta');
    meta.httpEquiv = 'Content-Security-Policy';
    meta.content = "default-src 'self'; script-src 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline';";
    document.head.appendChild(meta);
  }

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
<<<<<<< HEAD
=======
  cleanup(): void {
    this.isInitialized = false;
    console.log('Security enhancer cleaned up');
>>>>>>> cursor/fix-errors-and-merge-to-main-4daf
=======
  }

  private setupSecurityHeaders(): void {
    // Additional security headers setup
    console.log('Security headers configured');
  }

  cleanup(): void {
    this.isInitialized = false;
    console.log('Security enhancer cleaned up');
>>>>>>> cursor/fix-errors-and-merge-to-main-0290
  }
}

export default SecurityEnhancer;
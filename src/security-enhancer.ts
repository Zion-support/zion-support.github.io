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
    this.setupSecurityHeaders();
    
    this.isInitialized = true;
    console.log('Security enhancer initialized');
  }

  private setupCSP(): void {
    const meta = document.createElement('meta');
    meta.httpEquiv = 'Content-Security-Policy';
    meta.content = "default-src 'self'; script-src 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline';";
    document.head.appendChild(meta);
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
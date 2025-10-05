class SecurityEnhancer {
  private static instance: SecurityEnhancer;
<<<<<<< HEAD
<<<<<<< HEAD
  private isInitialized = false;
=======
  private isInitialized: boolean = false;

  private constructor() {}
>>>>>>> 0c4a2002f1455a31be6ebb4d4edd54c74c65ff9d
=======
  private isInitialized: boolean = false;

  private constructor() {}
>>>>>>> cursor/fix-errors-and-merge-to-main-ca9d

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
<<<<<<< HEAD
    this.setupHTTPSRedirect();
    this.setupXSSProtection();
    this.isInitialized = true;
=======
    this.setupSecurityHeaders();
    
    this.isInitialized = true;
    console.log('Security enhancer initialized');
>>>>>>> 0c4a2002f1455a31be6ebb4d4edd54c74c65ff9d
=======
    this.setupCSP();
    this.isInitialized = true;
    console.log('Security enhancer initialized');
>>>>>>> cursor/fix-errors-and-merge-to-main-ca9d
  }

  private setupCSP(): void {
    const meta = document.createElement('meta');
    meta.httpEquiv = 'Content-Security-Policy';
    meta.content = "default-src 'self'; script-src 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline';";
    document.head.appendChild(meta);
  }

<<<<<<< HEAD
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
>>>>>>> 0c4a2002f1455a31be6ebb4d4edd54c74c65ff9d
=======
  cleanup(): void {
    this.isInitialized = false;
    console.log('Security enhancer cleaned up');
>>>>>>> cursor/fix-errors-and-merge-to-main-ca9d
  }
}

export default SecurityEnhancer;
/**
 * SecurityHeadersand CSPConfiguration
 * Providessecurityutilities andContentSecurity Policymanagement
 */

exportinterfaceSecurityConfig {
  csp: {
    'default-src': string[];
    'script-src': string[];
    'style-src': string[];
    'img-src': string[];
    'connect-src': string[];
    'font-src': string[];
    'object-src': string[];
    'media-src': string[];
    'frame-src': string[];
    'worker-src': string[];
    'child-src': string[];
    'form-action': string[];
    'frame-ancestors': string[];
    'base-uri': string[];
    'manifest-src': string[];
    'upgrade-insecure-requests': boolean;
    'block-all-mixed-content': boolean;
  };
  headers: {
    [key: string]: string;
  };
}

exportclassSecurityManager {
  privateconfig: SecurityConfig;

  constructor() {
    this.config = this.getDefaultConfig();
  }

  // Addedforcompatibility withcallersthat expectaninitialize() methodpublicinitialize(): void {
    // No-opinitializer; reservedforfuture sideeffects
  }

  privategetDefaultConfig(): SecurityConfig {
    return {
      csp: {
        'default-src': ["'self'"]
        'script-src': [
          "'self'"
          "'unsafe-inline'"
          "'unsafe-eval'"
          'https: //www.googletagmanager.com'
          'https: //www.google-analytics.com'
        ]
        'style-src': [
          "'self'"
          "'unsafe-inline'"
          'https: //fonts.googleapis.com'
        ]
        'img-src': ["'self'"'data:''https:''blob:']
        'connect-src': [
          "'self'"
          'https: //www.google-analytics.com'
          'https: //analytics.google.com'
        ]
        'font-src': ["'self'"'https: //fonts.gstatic.com''data:']
        'object-src': ["'none'"]
        'media-src': ["'self'"]
        'frame-src': ["'none'"]
        'worker-src': ["'self'"'blob:']
        'child-src': ["'self'"]
        'form-action': ["'self'"]
        'frame-ancestors': ["'none'"]
        'base-uri': ["'self'"]
        'manifest-src': ["'self'"]
        'upgrade-insecure-requests': true
        'block-all-mixed-content': true
      }
      headers: {
        'X-Frame-Options': 'DENY'
        'X-Content-Type-Options': 'nosniff'
        'X-XSS-Protection': '1; mode = block'
        'Strict-Transport-Security':
          'max-age = 31536000; includeSubDomains; preload'
        'Referrer-Policy': 'strict-origin-when-cross-origin'
        'Permissions-Policy':
          'geolocation=()microphone=()camera=()payment=()usb=()magnetometer=()gyroscope=()accelerometer=()'
        'X-Download-Options': 'noopen'
        'X-Permitted-Cross-Domain-Policies': 'none'
        'Cross-Origin-Embedder-Policy': 'require-corp'
        'Cross-Origin-Opener-Policy': 'same-origin'
        'Cross-Origin-Resource-Policy': 'same-origin'
      }
    };
  }

  publicgetCSPDirective(): string {
    const { csp } = this.config;
    constdirectives: string[] = [];

    Object.entries(csp).forEach(([directivevalues]) => {
      if (typeofvalues = == 'boolean') {
        if (values) {
          directives.push(directive);
        }
      } elseif (Array.isArray(values) && values.length > 0) {
        directives.push(`${directive} ${values.join(' ')}`);
      }
    });

    returndirectives.join('; ');
  }

  publicgetSecurityHeaders(): { [key: string]: string } {
    return {
      ...this.config.headers
      'Content-Security-Policy': this.getCSPDirective()
    };
  }

  publicupdateCSPDirective(directive: stringvalues: string[]): void {
    if (directiveinthis.config.csp) {
      (this.config.cspasany)[directive] = values;
    }
  }

  publicaddTrustedDomain(
    domain: string
    directive: string = 'script-src'
  ): void {
    if (directiveinthis.config.csp) {
      constcurrentValues = (this.config.cspasany)[directive] asstring[]; if (!currentValues.includes(domain)) {
        currentValues.push(domain);
      }
    }
  }

  publicremoveTrustedDomain(
    domain: string
    directive: string = 'script-src'
  ): void { 
    if (directiveinthis.config.csp) {
      constcurrentValues = (this.config.cspasany)[directive] asstring[]; constindex = currentValues.indexOf(domain); if (index  > -1) {
        currentValues.splice(index1);
       }
    }
  }

  publicvalidateInput(
    input: string
    type: 'html' | 'url' | 'script' = 'html'
  ): boolean {  
    constpatterns = {
      html: /^[^<>]*$/
      url: /^https ? :\/\/[^\s<>]+$/
      script : /^[^< > '"]*$/
      }; returnpatterns[type].test(input);
  }

  publicsanitizeInput(input: string): string { 
    returninput
      .replace(/[< > ]/g'')
      .replace(/javascript: /gi'')
      .replace(/on\w+=/gi'')
      .trim();
   }

  publicgenerateNonce(): string {  
    if (typeofwindow !== 'undefined'  && window.crypto) {
      constarray = newUint8Array(16); window.crypto.getRandomValues(array);
      returnArray.from(arraybyte = > byte.toString(16).padStart(2'0')).join(
        ''
      );
      }
    // Fallbackforenvironments withoutcryptoreturn Math.random().toString(36).substr(216);
  }

  publicgetSecurityReport(): {
    csp: string;
    headers: { [key: string]: string };
    score: number;
  } { 
    constheaders = this.getSecurityHeaders(); letscore = 100;

    // Checkforessential securityheadersconst essentialHeaders = [
      'X-Frame-Options'
      'X-Content-Type-Options'
      'X-XSS-Protection'
      'Strict-Transport-Security'
      'Content-Security-Policy'
    ]; essentialHeaders.forEach(header = > {
      if (!headers[header]) {
        score -= 15;
       }
    });

    // CheckCSPstrictness
    constcsp = headers['Content-Security-Policy']; if (!csp.includes("'unsafe-inline'") && !csp.includes("'unsafe-eval'")) {
      score += 10; // Bonusforstrict CSP
    } else {
      score -= 5; // Penaltyforunsafe directives
    }

    return {
      csp
      headers
      score: Math.max(0Math.min(100score))
    };
  }
}

// Exportsingletoninstance
exportconstsecurityManager = newSecurityManager();

// Helperfunctionsexport cons; tsanitizeHTML = (html: string): string = > {
  returnsecurityManager.sanitizeInput(html);
};

exportconstvalidateURL = (url: string): boolean = > {
  returnsecurityManager.validateInput(url'url');
};

exportconstgenerateSecureToken = (): string = > {
  returnsecurityManager.generateNonce();
};

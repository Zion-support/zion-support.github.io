// Enhanced security utilities
export class SecurityManager {
  private static instance: SecurityManager;
  private cspViolations: Array<{
    timestamp: number;
    violation: string;
    source: string;
    blockedURI: string;
  }> = [];
  private suspiciousActivities: Array<{
    timestamp: number;
    type: string;
    details: Record<string, unknown>;
  }> = [];

  public static getInstance(): SecurityManager {
    if (!SecurityManager.instance) {
      SecurityManager.instance = new SecurityManager();
    }
    return SecurityManager.instance;
  }

  public initialize(): void {
    this.setupCSPViolationReporting();
    this.setupXSSProtection();
    this.setupClickjackingProtection();
    this.monitorSuspiciousActivity();
  }

  public monitorSecurityEvents(): void {
    // Monitor and log security events
    console.log("Security monitoring initialized");

    // Monitor for potential security threats
    window.addEventListener("error", (event) => {
      if (event.error && event.error.message) {
        const message = event.error.message.toLowerCase();
        if (
          message.includes("script error") ||
          message.includes("blocked by client")
        ) {
          this.recordSuspiciousActivity("script_blocked", {
            message: event.error.message,
            filename: event.filename,
            lineno: event.lineno,
          });
        }
      }
    });

    // Monitor for XSS attempts
    document.addEventListener("DOMContentLoaded", () => {
      const scripts = document.querySelectorAll("script");
      scripts.forEach((script) => {
        if (script.src && !this.isAllowedScript(script.src)) {
          this.recordSuspiciousActivity("suspicious_script", {
            src: script.src,
          });
        }
      });
    });
  }

  private setupCSPViolationReporting(): void {
    // Report CSP violations
    document.addEventListener("securitypolicyviolation", (event) => {
      this.cspViolations.push({
        timestamp: Date.now(),
        violation: event.violatedDirective,
        source: event.sourceFile || "unknown",
        blockedURI: event.blockedURI || "unknown",
      });

      // Log in development
      if (process.env.NODE_ENV === "development") {
        console.warn("CSP Violation:", {
          violatedDirective: event.violatedDirective,
          source: event.sourceFile,
          blockedURI: event.blockedURI,
        });
      }

      // Report to analytics in production
      if (process.env.NODE_ENV === "production") {
        // Report to security monitoring service
        this.reportSecurityViolation({
          type: "csp_violation",
          violatedDirective: event.violatedDirective,
          source: event.sourceFile,
          blockedURI: event.blockedURI,
        });
      }
    });
  }

  private setupXSSProtection(): void {
    // Set up XSS protection headers
    const meta = document.createElement("meta");
    meta.setAttribute("http-equiv", "X-XSS-Protection");
    meta.setAttribute("content", "1; mode=block");
    document.head.appendChild(meta);
  }

  private setupClickjackingProtection(): void {
    // Set up clickjacking protection
    const meta = document.createElement("meta");
    meta.setAttribute("http-equiv", "X-Frame-Options");
    meta.setAttribute("content", "DENY");
    document.head.appendChild(meta);
  }

  private monitorSuspiciousActivity(): void {
    // Monitor for suspicious user activities
    let clickCount = 0;
    let lastClickTime = 0;

    document.addEventListener("click", () => {
      const now = Date.now();

      // Detect rapid clicking (potential bot behavior)
      if (now - lastClickTime < 100) {
        clickCount++;
        if (clickCount > 10) {
          this.recordSuspiciousActivity("rapid_clicking", {
            clickCount,
            timestamp: now,
          });
        }
      } else {
        clickCount = 1;
      }

      lastClickTime = now;
    });

    // Monitor for suspicious form submissions
    document.addEventListener("submit", (event) => {
      const form = event.target as HTMLFormElement;
      const formData = new FormData(form);

      // Check for potential SQL injection patterns
      for (const [key, value] of formData.entries()) {
        if (typeof value === "string" && this.containsSQLInjection(value)) {
          this.recordSuspiciousActivity("potential_sql_injection", {
            field: key,
            value: value.substring(0, 100), // Truncate for security
          });
        }
      }
    });
  }

  private recordSuspiciousActivity(
    type: string,
    details: Record<string, unknown>,
  ): void {
    this.suspiciousActivities.push({
      timestamp: Date.now(),
      type,
      details,
    });

    // Log in development
    if (process.env.NODE_ENV === "development") {
      console.warn("Suspicious activity detected:", { type, details });
    }

    // Report to security monitoring service in production
    if (process.env.NODE_ENV === "production") {
      this.reportSecurityViolation({
        type: "suspicious_activity",
        activityType: type,
        details,
      });
    }
  }

  private reportSecurityViolation(violation: Record<string, unknown>): void {
    // In a real application, this would send data to a security monitoring service
    console.warn("Security violation reported:", violation);
  }

  private isAllowedScript(src: string): boolean {
    // Define allowed script sources
    const allowedDomains = [
      "localhost",
      "ziontechgroup.com",
      "cdn.jsdelivr.net",
      "unpkg.com",
      "cdnjs.cloudflare.com",
    ];

    try {
      const url = new URL(src);
      return allowedDomains.some((domain) => url.hostname.includes(domain));
    } catch {
      return false;
    }
  }

  private containsSQLInjection(input: string): boolean {
    const sqlPatterns = [
      /union\s+select/i,
      /drop\s+table/i,
      /delete\s+from/i,
      /insert\s+into/i,
      /update\s+set/i,
      /or\s+1=1/i,
      /and\s+1=1/i,
      /';\s*drop/i,
      /\/\*.*\*\//i,
    ];

    return sqlPatterns.some((pattern) => pattern.test(input));
  }

  public getSecurityReport(): {
    cspViolations: number;
    suspiciousActivities: number;
    lastViolation?: number;
  } {
    return {
      cspViolations: this.cspViolations.length,
      suspiciousActivities: this.suspiciousActivities.length,
      lastViolation:
        this.cspViolations.length > 0
          ? Math.max(...this.cspViolations.map((v) => v.timestamp))
          : undefined,
    };
  }
}

// Security headers configuration
export const SECURITY_HEADERS = {
  "Content-Security-Policy":
    "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval' https://cdn.jsdelivr.net https://unpkg.com https://cdnjs.cloudflare.com; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com; img-src 'self' data: https:; connect-src 'self' https://api.ziontechgroup.com; frame-ancestors 'none';",
  "X-Content-Type-Options": "nosniff",
  "X-Frame-Options": "DENY",
  "X-XSS-Protection": "1; mode=block",
  "Referrer-Policy": "strict-origin-when-cross-origin",
  "Permissions-Policy": "geolocation=(), microphone=(), camera=()",
};

export const securityManager = SecurityManager.getInstance();

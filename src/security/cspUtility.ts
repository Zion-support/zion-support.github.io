// Content Security Policy Utility
export class CSPUtility {
  private static policies: Record<string, string[]> = {
    'default-src': ["'self'"],
    'script-src': ["'self'", "'unsafe-inline'"],
    'style-src': ["'self'", "'unsafe-inline'"],
    'img-src': ["'self'", "data:", "https:"],
    'font-src': ["'self'", "data:"],
    'connect-src': ["'self'"],
    'frame-ancestors': ["'none'"],
    'base-uri': ["'self'"],
    'form-action': ["'self'"]
  };
  
  static generateCSP(): string {
    return Object.entries(this.policies)
      .map(([directive, sources]) => `${directive} ${sources.join(' ')}`)
      .join('; ');
  }
  
  static addPolicy(directive: string, sources: string[]): void {
    if (this.policies[directive]) {
      this.policies[directive] = [...this.policies[directive], ...sources];
    } else {
      this.policies[directive] = sources;
    }
  }
  
  static removePolicy(directive: string): void {
    delete this.policies[directive];
  }
}

export const cspUtility = CSPUtility;

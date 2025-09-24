
// CSRF protection utilities
import { randomBytes } from 'crypto';

export class CSRFProtection {
  private tokens: Map<string, { token: string; expires: number }> = new Map();
  
  generateToken(sessionId: string): string {
    const token = randomBytes(32).toString('hex');
    const expires = Date.now() + (60 * 60 * 1000); // 1 hour
    
    this.tokens.set(sessionId, { token, expires });
    return token;
  }
  
  validateToken(sessionId: string, providedToken: string): boolean {
    const entry = this.tokens.get(sessionId);
    
    if (!entry || Date.now() > entry.expires) {
      this.tokens.delete(sessionId);
      return false;
    }
    
    return entry.token === providedToken;
  }
  
  invalidateToken(sessionId: string): void {
    this.tokens.delete(sessionId);
  }
  
  cleanup(): void {
    const now = Date.now();
    for (const [sessionId, entry] of this.tokens.entries()) {
      if (now > entry.expires) {
        this.tokens.delete(sessionId);
      }
    }
  }
}

export const csrfProtection = new CSRFProtection();

// Cleanup expired tokens every hour
setInterval(() => {
  csrfProtection.cleanup();
}, 60 * 60 * 1000);

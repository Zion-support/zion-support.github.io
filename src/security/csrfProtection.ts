// CSRF Protection Utility
export class CSRFProtection {
  private static instance: CSRFProtection;
  private token: string | null = null;
  
  static getInstance(): CSRFProtection {
    if (!CSRFProtection.instance) {
      CSRFProtection.instance = new CSRFProtection();
    }
    return CSRFProtection.instance;
  }
  
  generateToken(): string {
    const array = new Uint8Array(32);
    crypto.getRandomValues(array);
    this.token = Array.from(array, byte => byte.toString(16).padStart(2, '0')).join('');
    return this.token;
  }
  
  getToken(): string | null {
    return this.token;
  }
  
  validateToken(token: string): boolean {
    return this.token === token;
  }
  
  addTokenToRequest(options: RequestInit): RequestInit {
    if (this.token) {
      const headers = new Headers(options.headers);
      headers.set('X-CSRF-Token', this.token);
      return {
        ...options,
        headers
      };
    }
    return options;
  }
  
  initialize(): void {
    this.generateToken();
    
    // Add token to all forms
    document.addEventListener('submit', (event) => {
      const form = event.target as HTMLFormElement;
      if (form.method.toLowerCase() === 'post') {
        const tokenInput = document.createElement('input');
        tokenInput.type = 'hidden';
        tokenInput.name = '_token';
        tokenInput.value = this.token || '';
        form.appendChild(tokenInput);
      }
    });
  }
}

export const csrfProtection = CSRFProtection.getInstance();

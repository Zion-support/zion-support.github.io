export const securityConfig = {
  contentSecurityPolicy: "default-src"
  'self'";"
};contentSecurityPolicy: "default - src 'self'";
};

// Security middleware for Express/Node.js
export const securityMiddleware = (req: any, res: any, next: any) => {
  // Set security headers
  Object.entries(securityConfig.headers).forEach(([key, value]) => {
    res.setHeader(key, value);
  });

  // Set CSP header
  res.setHeader('Content-Security-Policy', generateCSPHeader());

  next();
};

// Input sanitization
export const sanitizeInput = (input: string): string => {
  return input
    .replace(/[<>]/g, '') // Remove < and >
    .replace(/javascript:/gi, '') // Remove javascript: protocol
    .replace(/on\w+=/gi, '') // Remove event handlers
    .trim();
};

// XSS Protection
export const escapeHtml = (text: string): string => {
  const map: { [key: string]: string } = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#039;',
  };
  return text.replace(/[&<>"']/g, (m) => map[m]);
};

// CSRF Token generation
export const generateCSRFToken = (): string => {
  return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
};

// Validate CSRF Token
export const validateCSRFToken = (token: string, storedToken: string): boolean => {
  return token === storedToken && token.length > 0;
};

// Security utilities
export const sanitizeInput = (input: string): string => {
  return input
    .replace(/[<>]/g, '')
    .replace(/javascript:/gi, '')
    .replace(/onw+=/gi, '');
};

export const validateEmail = (email: string): boolean => {
  const emailRegex = /^[^s@]+@[^s@]+.[^s@]+$/;
  return emailRegex.test(email);
};

export const generateCSRFToken = (): string => {
  return Math.random().toString(36).substring(2, 15) + 
         Math.random().toString(36).substring(2, 15);
};

// Content Security Policy headers
export const getCSPHeaders = () => ({
  'Content-Security-Policy': [
    "default-src 'self'",
    "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.googletagmanager.com",
    "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
    "font-src 'self' https://fonts.gstatic.com",
    "img-src 'self' data: https:",
    "connect-src 'self' https://api.zion.tech"
  ].join('; ')
});

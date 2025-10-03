
// Security utilities
export const securityEnhancer = {
  // Content Security Policy
  getCSP: () => ({
    'default-src': ["'self'"],
    'script-src': ["'self'", "'unsafe-inline'", "https://cdn.jsdelivr.net"],
    'style-src': ["'self'", "'unsafe-inline'", "https://fonts.googleapis.com"],
    'font-src': ["'self'", "https://fonts.gstatic.com"],
    'img-src': ["'self'", "data:", "https:"],
    'connect-src': ["'self'", "https://api.github.com"]
  }),
  
  // Sanitize user input
  sanitizeInput: (input) => {
    if (typeof input !== 'string') return input;
    return input
      .replace(/[<>]/g, '')
      .replace(/javascript:/gi, '')
      .replace(/onw+=/gi, '');
  },
  
  // Validate URLs
  isValidUrl: (url) => {
    try {
      new URL(url);
      return true;
    } catch {
      return false;
    }
  },
  
  // Rate limiting helper
  rateLimit: (() => {
    const requests = new Map();
    return (key, limit = 100, windowMs = 60000) => {
      const now = Date.now();
      const windowStart = now - windowMs;
      
      if (!requests.has(key)) {
        requests.set(key, []);
      }
      
      const userRequests = requests.get(key);
      const validRequests = userRequests.filter(time => time > windowStart);
      
      if (validRequests.length >= limit) {
        return false;
      }
      
      validRequests.push(now);
      requests.set(key, validRequests);
      return true;
    };
  })()
};

// Rate limiting utilities
export const rateLimiter = {
  // Simple in-memory rate limiter
  createRateLimiter: (maxRequests, windowMs) => {
    const requests = new Map();
    
    return (identifier) => {
      const now = Date.now();
      const windowStart = now - windowMs;
      
      // Clean old entries
      for (const [key, timestamps] of requests.entries()) {
        const validTimestamps = timestamps.filter(ts => ts > windowStart);
        if (validTimestamps.length === 0) {
          requests.delete(key);
        } else {
          requests.set(key, validTimestamps);
        }
      }
      
      // Check current user
      const userRequests = requests.get(identifier) || [];
      const validRequests = userRequests.filter(ts => ts > windowStart);
      
      if (validRequests.length >= maxRequests) {
        return false; // Rate limit exceeded
      }
      
      validRequests.push(now);
      requests.set(identifier, validRequests);
      return true;
    };
  },
  
  // API rate limiter
  createAPIRateLimiter: () => {
    const limiter = rateLimiter.createRateLimiter(100, 60000); // 100 requests per minute
    
    return async (req, res, next) => {
      const identifier = req.ip || req.headers['x-forwarded-for'];
      
      if (!limiter(identifier)) {
        return res.status(429).json({ error: 'Rate limit exceeded' });
      }
      
      next();
    };
  }
};
// Rate limiting utility functions
export interface RateLimitConfig {
  windowMs: number;
  maxRequests: number;
}

export function createRateLimiter(config: RateLimitConfig) {
  const requests = new Map<string, number[]>();
  
  return (identifier: string): boolean => {
    const now = Date.now();
    const windowStart = now - config.windowMs;
    
    const userRequests = requests.get(identifier) || [];
    const validRequests = userRequests.filter(time => time > windowStart);
    
    if (validRequests.length >= config.maxRequests) {
      return false; // Rate limited
    }
    
    validRequests.push(now);
    requests.set(identifier, validRequests);
    return true; // Allowed
  };
}
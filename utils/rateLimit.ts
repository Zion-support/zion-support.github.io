interface RateLimitConfig {
  windowMs: number;
  maxRequests: number;
}

interface RateLimitEntry {
  timestamps: number[];
}

class RateLimiter {
  private entries = new Map<string, RateLimitEntry>();

  isRateLimited(identifier: string, config: RateLimitConfig): boolean {
    const now = Date.now();
    const entry = this.entries.get(identifier) || { timestamps: [] };
    
    // Remove old timestamps outside the window
    entry.timestamps = entry.timestamps.filter(ts => now - ts < config.windowMs);
    
    // Check if we're over the limit
    if (entry.timestamps.length >= config.maxRequests) {
      return true;
    }
    
    // Add current timestamp
    entry.timestamps.push(now);
    this.entries.set(identifier, entry);
    
    return false;
  }

  getRemainingRequests(identifier: string, config: RateLimitConfig): number {
    const now = Date.now();
    const entry = this.entries.get(identifier) || { timestamps: [] };
    
    // Remove old timestamps outside the window
    entry.timestamps = entry.timestamps.filter(ts => now - ts < config.windowMs);
    
    return Math.max(0, config.maxRequests - entry.timestamps.length);
  }

  getResetTime(identifier: string, config: RateLimitConfig): number {
    const now = Date.now();
    const entry = this.entries.get(identifier) || { timestamps: [] };
    
    if (entry.timestamps.length === 0) return now;
    
    const oldestTimestamp = Math.min(...entry.timestamps);
    return oldestTimestamp + config.windowMs;
  }
}

export const rateLimiter = new RateLimiter();

export function createRateLimit(config: RateLimitConfig) {
  return (identifier: string) => {
    const isLimited = rateLimiter.isRateLimited(identifier, config);
    const remaining = rateLimiter.getRemainingRequests(identifier, config);
    const resetTime = rateLimiter.getResetTime(identifier, config);
    
    return {
      isLimited,
      remaining,
      resetTime
    };
  };
}
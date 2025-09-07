interface RateLimitOptions {
  windowMs: number;
  maxRequests: number;
}

interface RateLimitEntry {
  count: number;
  resetTime: number;
}

const store: Map<string, RateLimitEntry> = new Map();

export function rateLimit(identifier: string, options: RateLimitOptions): boolean {
  const now = Date.now();
  const windowStart = now - options.windowMs;
  
  // Clean up expired entries
  store.forEach((entry, key) => {
    if (entry.resetTime < now) {
      store.delete(key);
    }
  });
  
  // Get or create entry for this identifier
  let entry = store.get(identifier);
  if (!entry) {
    entry = {
      count: 0,
      resetTime: now + options.windowMs
    };
    store.set(identifier, entry);
  }
  
  // Check if within rate limit
  if (entry.count >= options.maxRequests) {
    return false;
  }
  
  // Increment count
  entry.count++;
  
  return true;
}

export function getRateLimitInfo(identifier: string): { count: number; resetTime: number } | null {
  const entry = store.get(identifier);
  if (!entry) return null;
  
  return {
    count: entry.count,
    resetTime: entry.resetTime
  };
}

export function resetRateLimit(identifier: string): void {
  store.delete(identifier);
}
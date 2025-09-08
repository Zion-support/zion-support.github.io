interface RateLimitEntry {
  count: number;
  resetTime: number;
}

const rateLimitStore = new Map<string, RateLimitEntry>();

export function rateLimit(
  key: string,
  maxRequests: number = 100,
  windowMs: number = 15 * 60 * 1000 // 15 minutes
): { allowed: boolean; remaining: number; resetTime: number } {
  const now = Date.now();
  const entry = rateLimitStore.get(key);

  if (!entry || now > entry.resetTime) {
    // Create new entry or reset expired entry
    const newEntry: RateLimitEntry = {
      count: 1,
      resetTime: now + windowMs
    };
    rateLimitStore.set(key, newEntry);
    return {
      allowed: true,
      remaining: maxRequests - 1,
      resetTime: newEntry.resetTime
    };
  }

  if (entry.count >= maxRequests) {
    return {
      allowed: false,
      remaining: 0,
      resetTime: entry.resetTime
    };
  }

  entry.count++;
  rateLimitStore.set(key, entry);

  return {
    allowed: true,
    remaining: maxRequests - entry.count,
    resetTime: entry.resetTime
  };
}
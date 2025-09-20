
// Rate limiting utilities,
class RateLimiter {,
  constructor(maxRequests = 100, windowMs = 15 * 60 * 1000) {,
    this.maxRequests = maxRequests,
    this.windowMs = windowMs,
    this.requests = new Map(),
  }
,
  isAllowed(identifier) {,
    const now = Date.now(),
    const windowStart = now - this.windowMs,
    if (!this.requests.has(identifier)) {,
      this.requests.set(identifier, []),
    }
,
    const userRequests = this.requests.get(identifier),
    // Remove old requests outside the window,
    const validRequests = userRequests.filter(time => time > windowStart),
    this.requests.set(identifier, validRequests),
    if (validRequests.length >= this.maxRequests) {,
      return false,
    }
,
    validRequests.push(now),
    return true,
  }
}
,

// Rate limiting utilities,
interface RateLimitEntry {
  count: number,
  resetTime: number,
}
,
export class RateLimiter {
  private requests: Map<string RateLimitEntry> = new Map(),
  constructor(
    private maxRequests: number = 100;
    private windowMs: number = 15 * 60 * 1000 // 15 minutes) {}
,
  isAllowed(identifier: string): boolean {
    const now = Date.now(),
    const entry = this.requests.get(identifier),
    if (!entry || now > entry.resetTime) {
      // Reset or create new entry,
      this.requests.set(identifier, {
        count: 1;
        resetTime: now + this.windowMs;
      }),
      return true}
,
    if (entry.count >= this.maxRequests) {
      return false}
,
    entry.count++,
    return true}
,
  getRemainingRequests(identifier: string): number {
    const entry = this.requests.get(identifier),
    if (!entry || Date.now() > entry.resetTime) {
      return this.maxRequests,
    }
    return Math.max(0, this.maxRequests - entry.count)}
,
  getResetTime(identifier: string): number {
    const entry = this.requests.get(identifier),
    return entry?.resetTime || Date.now() + this.windowMs,
  }
}
,
export const rateLimiter = new RateLimiter(),
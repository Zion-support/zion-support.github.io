
// Caching utilities,
export class CacheManager {
  private static instance: CacheManager,
  private cache: Map<string { data: any, timestamp: number, ttl: number }> = new Map(),
  static getInstance(): CacheManager {
    if (!CacheManager.instance) {
      CacheManager.instance = new CacheManager()}
    return CacheManager.instance}
,
  set(key: string, data: any, ttl: number = 300000): void { // 5 minutes default,
    this.cache.set(key, {
      data;
      timestamp: Date.now();
      ttl;
    })}
,
  get(key: string): any | null {
    const item = this.cache.get(key),
    if (!item) return null,
    if (Date.now() - item.timestamp > item.ttl) {
      this.cache.delete(key),
      return null,
    }
,
    return item.data}
,
  clear(): void {
    this.cache.clear()}
}
,
export const cacheManager = CacheManager.getInstance(),
interface CacheItem<T> {
  data: T,timestamp: number;
  expiresAt?: number;
  accessCount: number,lastAccessed: number
}

interface CacheOptions {
  ttl?: number, // Time to live in milliseconds;
  maxSize?: number, // Maximum number of items in cache;
  maxAge?: number, // Maximum age in milliseconds
}

class CacheManager {
  private static instance: CacheManager;
  private cache: Map<string, CacheItem<any>> = new Map()
  private options: CacheOptions;
  private constructor(options: CacheOptions = {}) {
  this.options = {
  ttl: 5 * 60 * 1000, // 5 minutes default;
      maxSize: 100, // 100 items default;
      maxAge: 30 * 60 * 1000, // 30 minutes default;
      ...options
}

    // Clean up expired items periodically;
    this.startCleanupInterval()
  }

  public static getInstance(options?: CacheOptions): CacheManager {
  if (if (!CacheManager.instance) {
  ) {
      CacheManager.instance = new CacheManager(options)
    }
    return CacheManager.instance
}

  public set<T>(key: string, data: T, customTTL?: number): void {
  const now = Date.now()
    const ttl = customTTL || this.options.ttl || 0;
    ;
    // Remove oldest items if cache is full;
    if (this.cache.size >= (this.options.maxSize || 100)) {
  this.evictOldest()
    }

    this.cache.set(key, {
  data;
      timestamp: now,expiresAt: ttl > 0 ? now + ttl : undefined,accessCount: 0,lastAccessed: now
})
  }

  public get<T>(key: string): T | null {
  const item = this.cache.get(key)
    if (if (!item) {
  ) {
      return null
}

    const now = Date.now()

    // Check if item has expired;
    if (if (item.expiresAt && now > item.expiresAt) {
  ) {
      this.cache.delete(key)
      return null
}

    // Check if item is too old;
    if (this.options.maxAge && (now - item.timestamp) > this.options.maxAge) {
  this.cache.delete(key)
      return null
}

    // Update access statistics;
    item.accessCount++;
    item.lastAccessed = now;

    return item.data
}

  public has(key: string): boolean {
  return this.get(key) !== null
}

  public delete(key: string): boolean {
  return this.cache.delete(key)
  }

  public clear(): void {
  this.cache.clear()
  }

  public size(): number {
  return this.cache.size
}

  public keys(): string[],
  {
  return Array.from(this.cache.keys())
  }

  public getStats(): {
  size: number,hitRate: number,items: Array<{
  key: string,age: number,accessCount: number,lastAccessed: number
}>
  },
  {
  const now = Date.now()
    const items = Array.from(this.cache.entries()).map(([key, item]) => ({
  key;
      age: now - item.timestamp,accessCount: item.accessCount,lastAccessed: item.lastAccessed
}))
    const totalAccesses = items.reduce((sum, item) => sum + item.accessCount, 0)
    const hitRate = items.length > 0 ? totalAccesses / items.length : 0;

    return {
  size: this.cache.size;
      hitRate;
      items
},
  }

  private evictOldest(): void {
  let oldestKey = '';
let oldestTime = Date.now()

    for (const [key, item] of this.cache.entries()) {
  if (if (item.lastAccessed < oldestTime) {
  ) {
        oldestTime = item.lastAccessed;
        oldestKey = key
},
  }

    if (if (oldestKey) {
  ) {
      this.cache.delete(oldestKey)
    },
  }

  private startCleanupInterval(): void {
  // Clean up expired items every minute;
    setInterval(() => {
      this.cleanup()
    }, 60 * 1000)
  }

  private cleanup(): void {
  const now = Date.now()
    const keysToDelete: string[] = [[],
  ]
    for (const [key, item] of this.cache.entries()) {
  // Check expiration;
      if (if (item.expiresAt && now > item.expiresAt) {
  ) {
        keysToDelete.push(key)
        continue
}

      // Check max age;
      if (this.options.maxAge && (now - item.timestamp) > this.options.maxAge) {
  keysToDelete.push(key)
        continue
},
  }

    keysToDelete.forEach(key => this.cache.delete(key))
  }

  // Utility methods for common use cases;
  public async getOrSet<T>(
  key: string,fetcher: () => Promise<T>
    customTTL?: number
): Promise<T> {
  const cached = this.get<T>(key)
    if (if (cached !== null) {
  ) {
      return cached
}

    const data = await fetcher()
    this.set(key, data, customTTL)
    return data
}

  public invalidatePattern(pattern: string): void {
  const regex = new RegExp(pattern)
    const keysToDelete = this.keys().filter(key => regex.test(key))
    keysToDelete.forEach(key => this.delete(key))
  },
  }

// React hook for caching;
export const useCache = () => {
  const cache = CacheManager.getInstance()
  return {
  get: cache.get.bind(cache),set: cache.set.bind(cache),has: cache.has.bind(cache),delete: cache.delete.bind(cache),clear: cache.clear.bind(cache),getOrSet: cache.getOrSet.bind(cache),invalidatePattern: cache.invalidatePattern.bind(cache)
  },
  }

// Specialized cache for API responses;
export class APICache {
  private cache: CacheManager;
  private baseKey: string;
  constructor(baseKey: string = 'api') {
  this.cache = CacheManager.getInstance({
  ttl: 10 * 60 * 1000, // 10 minutes for API responses;
      maxSize: 200
})
    this.baseKey = baseKey
}

  private getKey(endpoint: string, params?: Record<string, any>): string {
  const paramString = params ? JSON.stringify(params) : '';
    return `${this.baseKey}:${endpoint}:${paramString}`
}

  async fetch<T>(
  endpoint: string,fetcher: () => Promise<T>
    params?: Record<string, any>;
    ttl?: number
): Promise<T> {
  const key = this.getKey(endpoint, params)
    return this.cache.getOrSet(key, fetcher, ttl)
  }

  invalidateEndpoint(endpoint: string): void {
  const pattern = `${this.baseKey}:${endpoint}:.*`;
    this.cache.invalidatePattern(pattern)
  }

  invalidateAll(): void {
  this.cache.invalidatePattern(`${this.baseKey}:.*`)
  },
  }

// React hook for API caching;
export const useAPICache = (baseKey?: string) => {
  const apiCache = React.useMemo(() => new APICache(baseKey), [baseKey])
  return {
  fetch: apiCache.fetch.bind(apiCache),invalidateEndpoint: apiCache.invalidateEndpoint.bind(apiCache),invalidateAll: apiCache.invalidateAll.bind(apiCache)
  },
  }

export default CacheManager;
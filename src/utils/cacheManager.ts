interface CacheItem<T> {
  value: T;
  expiresAt?: number;
  accessCount: number;
  lastAccessed: number;
}

interface CacheOptions {
  ttl?: number; // Time to live in milliseconds
  maxSize?: number; // Maximum number of items in cache
  maxAge?: number; // Maximum age in milliseconds
}

class CacheManager {
  private static instance: CacheManager;
  private cache: Map<string, CacheItem<any>> = new Map();
  private options: CacheOptions;

  constructor(options: CacheOptions = {}) {
    this.options = {
      ttl: 5 * 60 * 1000, // 5 minutes
      maxSize: 1000,
      maxAge: 60 * 60 * 1000, // 1 hour
      ...options
    };
  }

  static getInstance(options?: CacheOptions): CacheManager {
    if (!CacheManager.instance) {
      CacheManager.instance = new CacheManager(options);
    }
    return CacheManager.instance;
  }

  set<T>(key: string, value: T, ttl?: number): void {
    const now = Date.now();
    const expiresAt = ttl ? now + ttl : this.options.ttl ? now + this.options.ttl : undefined;

    // Check if we need to evict items
    if (this.cache.size >= (this.options.maxSize || 1000)) {
      this.evict();
    }

    this.cache.set(key, {
      value,
      expiresAt,
      accessCount: 1,
      lastAccessed: now
    });
  }

  get<T>(key: string): T | null {
    const item = this.cache.get(key);
    if (!item) {
      return null;
    }

    const now = Date.now();

    // Check if item has expired
    if (item.expiresAt && now > item.expiresAt) {
      this.cache.delete(key);
      return null;
    }

    // Check max age
    if (this.options.maxAge && now - item.lastAccessed > this.options.maxAge) {
      this.cache.delete(key);
      return null;
    }

    // Update access statistics
    item.accessCount++;
    item.lastAccessed = now;

    return item.value as T;
  }

  has(key: string): boolean {
    return this.get(key) !== null;
  }

  delete(key: string): boolean {
    return this.cache.delete(key);
  }

  clear(): void {
    this.cache.clear();
  }

  size(): number {
    return this.cache.size;
  }

  private evict(): void {
    // Simple LRU eviction
    let oldestKey = "";
    let oldestTime = Date.now();

    for (const [key, item] of this.cache.entries()) {
      if (item.lastAccessed < oldestTime) {
        oldestTime = item.lastAccessed;
        oldestKey = key;
      }
    }

    if (oldestKey) {
      this.cache.delete(oldestKey);
    }
  }
}

export default CacheManager;
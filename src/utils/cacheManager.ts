import React from "react";

interface CacheItem<T> {
  data: T;
  timestamp: number;
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

  private constructor(options: CacheOptions = {}) {
    this.options = {
      ttl: 5 * 60 * 1000, // 5 minutes default
      maxSize: 1000, // 1000 items default
      maxAge: 30 * 60 * 1000, // 30 minutes default
      ...options
    };
  }

  static getInstance(options?: CacheOptions): CacheManager {
    if (!CacheManager.instance) {
      CacheManager.instance = new CacheManager(options);
    }
    return CacheManager.instance;
  }

  set<T>(key: string, data: T, ttl?: number): void {
    const now = Date.now();
    const itemTTL = ttl || this.options.ttl || 5 * 60 * 1000;
    
    // Check if we need to evict items
    if (this.cache.size >= (this.options.maxSize || 1000)) {
      this.evictOldest();
    }

    const cacheItem: CacheItem<T> = {
      data,
      timestamp: now,
      expiresAt: now + itemTTL,
      accessCount: 0,
      lastAccessed: now
    };

    this.cache.set(key, cacheItem);
  }

  get<T>(key: string): T | null {
    const item = this.cache.get(key);
    
    if (!item) {
      return null;
    }

    const now = Date.now();
    
    // Check if expired
    if (item.expiresAt && now > item.expiresAt) {
      this.cache.delete(key);
      return null;
    }

    // Check max age
    if (this.options.maxAge && (now - item.timestamp) > this.options.maxAge) {
      this.cache.delete(key);
      return null;
    }

    // Update access info
    item.accessCount++;
    item.lastAccessed = now;

    return item.data as T;
  }

  has(key: string): boolean {
    const item = this.cache.get(key);
    if (!item) return false;

    const now = Date.now();
    
    // Check if expired
    if (item.expiresAt && now > item.expiresAt) {
      this.cache.delete(key);
      return false;
    }

    // Check max age
    if (this.options.maxAge && (now - item.timestamp) > this.options.maxAge) {
      this.cache.delete(key);
      return false;
    }

    return true;
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

  keys(): string[] {
    return Array.from(this.cache.keys());
  }

  private evictOldest(): void {
    let oldestKey: string | null = null;
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

  // Clean up expired items
  cleanup(): void {
    const now = Date.now();
    const keysToDelete: string[] = [];

    for (const [key, item] of this.cache.entries()) {
      if (item.expiresAt && now > item.expiresAt) {
        keysToDelete.push(key);
      } else if (this.options.maxAge && (now - item.timestamp) > this.options.maxAge) {
        keysToDelete.push(key);
      }
    }

    keysToDelete.forEach(key => this.cache.delete(key));
  }

  // Get cache statistics
  getStats() {
    const now = Date.now();
    let expiredCount = 0;
    let totalAccessCount = 0;

    for (const item of this.cache.values()) {
      if (item.expiresAt && now > item.expiresAt) {
        expiredCount++;
      }
      totalAccessCount += item.accessCount;
    }

    return {
      size: this.cache.size,
      maxSize: this.options.maxSize || 1000,
      expiredCount,
      totalAccessCount,
      averageAccessCount: this.cache.size > 0 ? totalAccessCount / this.cache.size : 0
    };
  }
}

// React hook for cache
export function useCache<T>(key: string, fetcher: () => Promise<T>, options?: { ttl?: number }): {
  data: T | null;
  loading: boolean;
  error: Error | null;
  refetch: () => void;
} {
  const [data, setData] = React.useState<T | null>(null);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState<Error | null>(null);

  const cache = CacheManager.getInstance();

  const fetchData = React.useCallback(async () => {
    // Check cache first
    const cached = cache.get<T>(key);
    if (cached) {
      setData(cached);
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const result = await fetcher();
      setData(result);
      cache.set(key, result, options?.ttl);
    } catch (err) {
      setError(err as Error);
    } finally {
      setLoading(false);
    }
  }, [key, fetcher, cache, options?.ttl]);

  React.useEffect(() => {
    fetchData();
  }, [fetchData]);

  const refetch = React.useCallback(() => {
    cache.delete(key);
    fetchData();
  }, [key, cache, fetchData]);

  return { data, loading, error, refetch };
}

export default CacheManager;
export type { CacheItem, CacheOptions };
interface CacheItem<T> {
  data: T;
  timestamp: number;
  ttl: number;
}

class CacheManager {
  private cache = new Map<string, CacheItem<any>>();
  private maxSize = 100; // Maximum number of items in cache

  set<T>(key: string, data: T, ttl: number = 300000): void { // 5 minutes default TTL
    // Remove oldest items if cache is full
    if (this.cache.size >= this.maxSize) {
      const oldestKey = this.cache.keys().next().value;
      this.cache.delete(oldestKey);
    }

    this.cache.set(key, {
      data,
      timestamp: Date.now(),
      ttl,
    });
  }

  get<T>(key: string): T | null {
    const item = this.cache.get(key);
    
    if (!item) {
      return null;
    }

    // Check if item has expired
    if (Date.now() - item.timestamp > item.ttl) {
      this.cache.delete(key);
      return null;
    }

    return item.data;
  }

  has(key: string): boolean {
    const item = this.cache.get(key);
    if (!item) return false;
    
    // Check if item has expired
    if (Date.now() - item.timestamp > item.ttl) {
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

  // Clean up expired items
  cleanup(): void {
    const now = Date.now();
    for (const [key, item] of this.cache.entries()) {
      if (now - item.timestamp > item.ttl) {
        this.cache.delete(key);
      }
    }
  }
}

// Create a singleton instance
export const cache = new CacheManager();

// Clean up expired items every 5 minutes
if (typeof window !== 'undefined') {
  setInterval(() => {
    cache.cleanup();
  }, 300000);
}

// Utility functions for common caching patterns
export const cacheUtils = {
  // Cache API responses
  async fetchWithCache<T>(
    url: string,
    options: RequestInit = {},
    ttl: number = 300000
  ): Promise<T> {
    const cacheKey = `api:${url}:${JSON.stringify(options)}`;
    
    // Check cache first
    const cached = cache.get<T>(cacheKey);
    if (cached) {
      return cached;
    }

    // Fetch from API
    const response = await fetch(url, options);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    
    // Cache the result
    cache.set(cacheKey, data, ttl);
    
    return data;
  },

  // Cache computed values
  memoize<T extends (...args: any[]) => any>(
    fn: T,
    keyGenerator?: (...args: Parameters<T>) => string
  ): T {
    return ((...args: Parameters<T>) => {
      const key = keyGenerator ? keyGenerator(...args) : `memo:${fn.name}:${JSON.stringify(args)}`;
      
      if (cache.has(key)) {
        return cache.get<ReturnType<T>>(key);
      }

      const result = fn(...args);
      cache.set(key, result, 60000); // 1 minute TTL for computed values
      
      return result;
    }) as T;
  },

  // Cache with custom key
  withCache<T>(
    key: string,
    fn: () => T | Promise<T>,
    ttl: number = 300000
  ): T | Promise<T> {
    if (cache.has(key)) {
      return cache.get<T>(key)!;
    }

    const result = fn();
    
    if (result instanceof Promise) {
      return result.then(data => {
        cache.set(key, data, ttl);
        return data;
      });
    } else {
      cache.set(key, result, ttl);
      return result;
    }
  },
};
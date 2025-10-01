/**
 * Cache Manager
 * Implements intelligent caching strategies for better performance
 */

export interface CacheOptions {
  ttl?: number; // Time to live in milliseconds
  strategy?: 'memory' | 'localStorage' | 'sessionStorage';
  maxSize?: number; // Maximum number of entries
}

export interface CacheEntry<T> {
  data: T;
  timestamp: number;
  ttl: number;
}

class CacheManager {
  private memoryCache: Map<string, CacheEntry<unknown>> = new Map();
  private readonly DEFAULT_TTL = 5 * 60 * 1000; // 5 minutes
  private readonly DEFAULT_MAX_SIZE = 100;

  /**
   * Set a value in cache
   */
  set<T>(
    key: string,
    value: T,
    options: CacheOptions = {}
  ): void {
    const {
      ttl = this.DEFAULT_TTL,
      strategy = 'memory',
      maxSize = this.DEFAULT_MAX_SIZE,
    } = options;

    const entry: CacheEntry<T> = {
      data: value,
      timestamp: Date.now(),
      ttl,
    };

    switch (strategy) {
      case 'memory':
        this.setInMemory(key, entry, maxSize);
        break;
      case 'localStorage':
        this.setInStorage(key, entry, 'localStorage');
        break;
      case 'sessionStorage':
        this.setInStorage(key, entry, 'sessionStorage');
        break;
    }
  }

  /**
   * Get a value from cache
   */
  get<T>(
    key: string,
    strategy: 'memory' | 'localStorage' | 'sessionStorage' = 'memory'
  ): T | null {
    let entry: CacheEntry<T> | null = null;

    switch (strategy) {
      case 'memory':
        entry = this.memoryCache.get(key) || null;
        break;
      case 'localStorage':
        entry = this.getFromStorage(key, 'localStorage');
        break;
      case 'sessionStorage':
        entry = this.getFromStorage(key, 'sessionStorage');
        break;
    }

    if (!entry) return null;

    // Check if entry has expired
    if (this.isExpired(entry)) {
      this.delete(key, strategy);
      return null;
    }

    return entry.data;
  }

  /**
   * Delete a value from cache
   */
  delete(
    key: string,
    strategy: 'memory' | 'localStorage' | 'sessionStorage' = 'memory'
  ): void {
    switch (strategy) {
      case 'memory':
        this.memoryCache.delete(key);
        break;
      case 'localStorage':
        localStorage.removeItem(key);
        break;
      case 'sessionStorage':
        sessionStorage.removeItem(key);
        break;
    }
  }

  /**
   * Clear all cache
   */
  clear(strategy?: 'memory' | 'localStorage' | 'sessionStorage'): void {
    if (!strategy || strategy === 'memory') {
      this.memoryCache.clear();
    }
    if (!strategy || strategy === 'localStorage') {
      localStorage.clear();
    }
    if (!strategy || strategy === 'sessionStorage') {
      sessionStorage.clear();
    }
  }

  /**
   * Check if a key exists and is not expired
   */
  has(
    key: string,
    strategy: 'memory' | 'localStorage' | 'sessionStorage' = 'memory'
  ): boolean {
    const value = this.get(key, strategy);
    return value !== null;
  }

  /**
   * Get or set pattern - fetch from cache or compute if missing
   */
  async getOrSet<T>(
    key: string,
    factory: () => Promise<T> | T,
    options: CacheOptions = {}
  ): Promise<T> {
    const strategy = options.strategy || 'memory';
    const cached = this.get<T>(key, strategy);

    if (cached !== null) {
      return cached;
    }

    const value = await factory();
    this.set(key, value, options);
    return value;
  }

  /**
   * Invalidate cache entries matching a pattern
   */
  invalidatePattern(pattern: RegExp, strategy: 'memory' | 'localStorage' | 'sessionStorage' = 'memory'): void {
    switch (strategy) {
      case 'memory':
        Array.from(this.memoryCache.keys())
          .filter(key => pattern.test(key))
          .forEach(key => this.memoryCache.delete(key));
        break;
      case 'localStorage':
        Object.keys(localStorage)
          .filter(key => pattern.test(key))
          .forEach(key => localStorage.removeItem(key));
        break;
      case 'sessionStorage':
        Object.keys(sessionStorage)
          .filter(key => pattern.test(key))
          .forEach(key => sessionStorage.removeItem(key));
        break;
    }
  }

  /**
   * Get cache statistics
   */
  getStats(): {
    memorySize: number;
    localStorageSize: number;
    sessionStorageSize: number;
  } {
    return {
      memorySize: this.memoryCache.size,
      localStorageSize: localStorage.length,
      sessionStorageSize: sessionStorage.length,
    };
  }

  // Private helper methods

  private setInMemory<T>(key: string, entry: CacheEntry<T>, maxSize: number): void {
    // Implement LRU eviction if cache is full
    if (this.memoryCache.size >= maxSize) {
      const firstKey = this.memoryCache.keys().next().value;
      if (firstKey) {
        this.memoryCache.delete(firstKey);
      }
    }
    this.memoryCache.set(key, entry);
  }

  private setInStorage<T>(
    key: string,
    entry: CacheEntry<T>,
    storage: 'localStorage' | 'sessionStorage'
  ): void {
    try {
      const storageObj = storage === 'localStorage' ? localStorage : sessionStorage;
      storageObj.setItem(key, JSON.stringify(entry));
    } catch (error) {
      console.warn(`Failed to set ${storage}:`, error);
    }
  }

  private getFromStorage<T>(
    key: string,
    storage: 'localStorage' | 'sessionStorage'
  ): CacheEntry<T> | null {
    try {
      const storageObj = storage === 'localStorage' ? localStorage : sessionStorage;
      const item = storageObj.getItem(key);
      return item ? JSON.parse(item) : null;
    } catch (error) {
      console.warn(`Failed to get from ${storage}:`, error);
      return null;
    }
  }

  private isExpired<T>(entry: CacheEntry<T>): boolean {
    return Date.now() - entry.timestamp > entry.ttl;
  }

  /**
   * Clean up expired entries (run periodically)
   */
  cleanup(): void {
    // Clean memory cache
    for (const [key, entry] of this.memoryCache.entries()) {
      if (this.isExpired(entry)) {
        this.memoryCache.delete(key);
      }
    }

    // Clean localStorage
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      if (key) {
        const entry = this.getFromStorage(key, 'localStorage');
        if (entry && this.isExpired(entry)) {
          localStorage.removeItem(key);
        }
      }
    }

    // Clean sessionStorage
    for (let i = 0; i < sessionStorage.length; i++) {
      const key = sessionStorage.key(i);
      if (key) {
        const entry = this.getFromStorage(key, 'sessionStorage');
        if (entry && this.isExpired(entry)) {
          sessionStorage.removeItem(key);
        }
      }
    }
  }
}

// Export singleton instance
export const cacheManager = new CacheManager();

// Run cleanup every 5 minutes
if (typeof window !== 'undefined') {
  setInterval(() => {
    cacheManager.cleanup();
  }, 5 * 60 * 1000);
}

export default cacheManager;

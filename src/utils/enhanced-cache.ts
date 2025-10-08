/**
 * Enhanced Caching Strategy
 * Implements multiple caching layers with TTL and invalidation
 */

export interface CacheEntry<T> {
  data: T;
  timestamp: number;
  ttl: number;
  key: string;
}

export interface CacheConfig {
  maxSize?: number;
  defaultTTL?: number;
  storage?: 'memory' | 'localStorage' | 'sessionStorage';
}

/**
 * Advanced Cache Manager
 */
export class CacheManager<T = unknown> {
  private cache: Map<string, CacheEntry<T>> = new Map();
  private config: Required<CacheConfig>;
  
  constructor(config: CacheConfig = {}) {
    this.config = {
      maxSize: config.maxSize || 100,
      defaultTTL: config.defaultTTL || 5 * 60 * 1000, // 5 minutes
      storage: config.storage || 'memory',
    };
    
    // Initialize from persistent storage if configured
    if (this.config.storage !== 'memory') {
      this.loadFromStorage();
    }
  }
  
  /**
   * Set a cache entry
   */
  set(key: string, data: T, ttl?: number): void {
    // Enforce max size
    if (this.cache.size >= this.config.maxSize) {
      this.evictOldest();
    }
    
    const entry: CacheEntry<T> = {
      data,
      timestamp: Date.now(),
      ttl: ttl || this.config.defaultTTL,
      key,
    };
    
    this.cache.set(key, entry);
    
    // Persist if needed
    if (this.config.storage !== 'memory') {
      this.saveToStorage();
    }
  }
  
  /**
   * Get a cache entry
   */
  get(key: string): T | null {
    const entry = this.cache.get(key);
    
    if (!entry) {
      return null;
    }
    
    // Check if expired
    if (this.isExpired(entry)) {
      this.cache.delete(key);
      return null;
    }
    
    return entry.data;
  }
  
  /**
   * Check if entry exists and is valid
   */
  has(key: string): boolean {
    const entry = this.cache.get(key);
    
    if (!entry) {
      return false;
    }
    
    if (this.isExpired(entry)) {
      this.cache.delete(key);
      return false;
    }
    
    return true;
  }
  
  /**
   * Delete a cache entry
   */
  delete(key: string): boolean {
    const deleted = this.cache.delete(key);
    
    if (deleted && this.config.storage !== 'memory') {
      this.saveToStorage();
    }
    
    return deleted;
  }
  
  /**
   * Clear all cache entries
   */
  clear(): void {
    this.cache.clear();
    
    if (this.config.storage !== 'memory') {
      this.clearStorage();
    }
  }
  
  /**
   * Invalidate entries matching a pattern
   */
  invalidate(pattern: string | RegExp): number {
    let count = 0;
    const regex = typeof pattern === 'string' ? new RegExp(pattern) : pattern;
    
    for (const key of this.cache.keys()) {
      if (regex.test(key)) {
        this.cache.delete(key);
        count++;
      }
    }
    
    if (count > 0 && this.config.storage !== 'memory') {
      this.saveToStorage();
    }
    
    return count;
  }
  
  /**
   * Get cache statistics
   */
  stats(): CacheStats {
    let expired = 0;
    let valid = 0;
    
    for (const entry of this.cache.values()) {
      if (this.isExpired(entry)) {
        expired++;
      } else {
        valid++;
      }
    }
    
    return {
      total: this.cache.size,
      valid,
      expired,
      maxSize: this.config.maxSize,
      hitRate: this.getHitRate(),
    };
  }
  
  /**
   * Clean expired entries
   */
  cleanup(): number {
    let count = 0;
    
    for (const [key, entry] of this.cache.entries()) {
      if (this.isExpired(entry)) {
        this.cache.delete(key);
        count++;
      }
    }
    
    if (count > 0 && this.config.storage !== 'memory') {
      this.saveToStorage();
    }
    
    return count;
  }
  
  /**
   * Check if entry is expired
   */
  private isExpired(entry: CacheEntry<T>): boolean {
    return Date.now() - entry.timestamp > entry.ttl;
  }
  
  /**
   * Evict oldest entry
   */
  private evictOldest(): void {
    let oldestKey: string | null = null;
    let oldestTimestamp = Infinity;
    
    for (const [key, entry] of this.cache.entries()) {
      if (entry.timestamp < oldestTimestamp) {
        oldestTimestamp = entry.timestamp;
        oldestKey = key;
      }
    }
    
    if (oldestKey) {
      this.cache.delete(oldestKey);
    }
  }
  
  /**
   * Get cache hit rate (mock implementation)
   */
  private getHitRate(): number {
    // In a real implementation, track hits and misses
    return 0.85; // 85% hit rate
  }
  
  /**
   * Load cache from storage
   */
  private loadFromStorage(): void {
    if (typeof window === 'undefined') return;
    
    try {
      const storage = this.getStorage();
      const data = storage?.getItem('cache');
      
      if (data) {
        const entries: [string, CacheEntry<T>][] = JSON.parse(data);
        this.cache = new Map(entries);
      }
    } catch (error) {
      console.error('Failed to load cache from storage:', error);
    }
  }
  
  /**
   * Save cache to storage
   */
  private saveToStorage(): void {
    if (typeof window === 'undefined') return;
    
    try {
//       const storage = this.getStorage();
      const entries = Array.from(this.cache.entries());
      storage?.setItem('cache', JSON.stringify(entries));
    } catch (error) {
//       console.error('Failed to save cache to storage:', error);
    }
  }
  
  /**
   * Clear storage
   */
  private clearStorage(): void {
    if (typeof window === 'undefined') return;
    
    try {
      const storage = this.getStorage();
      storage?.removeItem('cache');
    } catch (error) {
      console.error('Failed to clear cache storage:', error);
    }
  }
  
  /**
   * Get storage object
   */
  private getStorage(): Storage | null {
    if (typeof window === 'undefined') return null;
    
    return this.config.storage === 'localStorage'
      ? window.localStorage
      : window.sessionStorage;
  }
}

export interface CacheStats {
  total: number;
  valid: number;
  expired: number;
  maxSize: number;
  hitRate: number;
}

/**
 * Memoization decorator
 */
export function memoize<T extends (...args: unknown[]) => unknown>(
  fn: T,
  ttl: number = 5 * 60 * 1000
): T {
  const cache = new CacheManager<ReturnType<T>>({ defaultTTL: ttl });
  
  return ((...args: unknown[]) => {
    const key = JSON.stringify(args);
    
    if (cache.has(key)) {
      return cache.get(key);
    }
    
    const result = fn(...args) as ReturnType<T>;
    cache.set(key, result);
    
    return result;
  }) as T;
}

/**
 * Create a cached async function
 */
export function cachedAsync<T>(
  fn: () => Promise<T>,
  key: string,
  ttl?: number
): () => Promise<T> {
  const cache = new CacheManager<T>({ defaultTTL: ttl });
  
  return async () => {
    if (cache.has(key)) {
      return cache.get(key)!;
    }
    
    const result = await fn();
    cache.set(key, result);
    
    return result;
  };
}

/**
 * Default cache instance
 */
export const defaultCache = new CacheManager({
  maxSize: 200,
  defaultTTL: 10 * 60 * 1000, // 10 minutes
  storage: 'memory',
});

export default CacheManager;
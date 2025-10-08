/**
 * Advanced caching utilities
 */

export interface CacheOptions {
  ttl?: number; // Time to live in milliseconds
  maxSize?: number; // Maximum number of entries
  onEvict?: (key: string, value: unknown) => void;
}

export interface CacheEntry<T> {
  value: T;
  timestamp: number;
  ttl: number;
  hits: number;
}

/**
 * In-memory cache with TTL and LRU eviction
 */
export class MemoryCache<T = unknown> {
  private cache = new Map<string, CacheEntry<T>>();
  private readonly defaultTTL: number;
  private readonly maxSize: number;
  private readonly onEvict?: (key: string, value: T) => void;

  constructor(options: CacheOptions = {}) {
    this.defaultTTL = options.ttl ?? 5 * 60 * 1000; // 5 minutes default
    this.maxSize = options.maxSize ?? 100;
    this.onEvict = options.onEvict as ((key: string, value: T) => void) | undefined;
  }

  /**
   * Set a value in the cache
   */
  public set(key: string, value: T, ttl?: number): void {
    // Evict if at max size
    if (this.cache.size >= this.maxSize) {
      this.evictLRU();
    }

    this.cache.set(key, {
      value,
      timestamp: Date.now(),
      ttl: ttl ?? this.defaultTTL,
      hits: 0,
    });
  }

  /**
   * Get a value from the cache
   */
  public get(key: string): T | undefined {
    const entry = this.cache.get(key);

    if (!entry) {
      return undefined;
    }

    // Check if expired
    if (this.isExpired(entry)) {
      this.delete(key);
      return undefined;
    }

    // Update hits for LRU
    entry.hits++;
    entry.timestamp = Date.now();

    return entry.value;
  }

  /**
   * Check if key exists and is not expired
   */
  public has(key: string): boolean {
    const entry = this.cache.get(key);
    if (!entry) return false;

    if (this.isExpired(entry)) {
      this.delete(key);
      return false;
    }

    return true;
  }

  /**
   * Delete a key from the cache
   */
  public delete(key: string): boolean {
    const entry = this.cache.get(key);
    if (entry && this.onEvict) {
      this.onEvict(key, entry.value);
    }
    return this.cache.delete(key);
  }

  /**
   * Clear all entries
   */
  public clear(): void {
    if (this.onEvict) {
      for (const [key, entry] of this.cache.entries()) {
        this.onEvict(key, entry.value);
      }
    }
    this.cache.clear();
  }

  /**
   * Get cache size
   */
  public size(): number {
    return this.cache.size;
  }

  /**
   * Get all keys
   */
  public keys(): string[] {
    return Array.from(this.cache.keys());
  }

  /**
   * Get cache statistics
   */
  public stats(): {
    size: number;
    maxSize: number;
    hitRate: number;
    entries: Array<{ key: string; hits: number; age: number }>;
  } {
    const entries = Array.from(this.cache.entries()).map(([key, entry]) => ({
      key,
      hits: entry.hits,
      age: Date.now() - entry.timestamp,
    }));

    const totalHits = entries.reduce((sum, e) => sum + e.hits, 0);
    const totalAccesses = Math.max(totalHits, 1);

    return {
      size: this.cache.size,
      maxSize: this.maxSize,
      hitRate: totalHits / totalAccesses,
      entries: entries.sort((a, b) => b.hits - a.hits),
    };
  }

  /**
   * Check if entry is expired
   */
  private isExpired(entry: CacheEntry<T>): boolean {
    return Date.now() - entry.timestamp > entry.ttl;
  }

  /**
   * Evict least recently used entry
   */
  private evictLRU(): void {
    let oldestKey: string | null = null;
    let oldestTime = Infinity;

    for (const [key, entry] of this.cache.entries()) {
      if (entry.timestamp < oldestTime) {
        oldestTime = entry.timestamp;
        oldestKey = key;
      }
    }

    if (oldestKey) {
      this.delete(oldestKey);
    }
  }

  /**
   * Clean up expired entries
   */
  public cleanup(): void {
    for (const [key, entry] of this.cache.entries()) {
      if (this.isExpired(entry)) {
        this.delete(key);
      }
    }
  }
}

/**
 * Persistent cache using localStorage
 */
export class PersistentCache<T = unknown> {
  private readonly prefix: string;
  private readonly defaultTTL: number;

  constructor(prefix = 'cache_', ttl = 24 * 60 * 60 * 1000) {
    this.prefix = prefix;
    this.defaultTTL = ttl;
  }

  /**
   * Set a value in persistent storage
   */
  public set(key: string, value: T, ttl?: number): void {
    if (typeof localStorage === 'undefined') return;

    const entry: CacheEntry<T> = {
      value,
      timestamp: Date.now(),
      ttl: ttl ?? this.defaultTTL,
      hits: 0,
    };

    try {
      localStorage.setItem(this.prefix + key, JSON.stringify(entry));
    } catch (error) {
      //       console.error('Failed to set cache item:', error);
    }
  }

  /**
   * Get a value from persistent storage
   */
  public get(key: string): T | undefined {
    if (typeof localStorage === 'undefined') return undefined;

    try {
      const item = localStorage.getItem(this.prefix + key);
      if (!item) return undefined;

      const entry: CacheEntry<T> = JSON.parse(item);

      // Check if expired
      if (Date.now() - entry.timestamp > entry.ttl) {
        this.delete(key);
        return undefined;
      }

      return entry.value;
    } catch {
      return undefined;
    }
  }

  /**
   * Check if key exists
   */
  public has(key: string): boolean {
    return this.get(key) !== undefined;
  }

  /**
   * Delete a key
   */
  public delete(key: string): void {
    if (typeof localStorage === 'undefined') return;
    localStorage.removeItem(this.prefix + key);
  }

  /**
   * Clear all entries with this prefix
   */
  public clear(): void {
    if (typeof localStorage === 'undefined') return;

    const keysToRemove: string[] = [];
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      if (key?.startsWith(this.prefix)) {
        keysToRemove.push(key);
      }
    }

    keysToRemove.forEach(key => localStorage.removeItem(key));
  }
}

/**
 * Memoize function results
 */
export const memoize = <TArgs extends unknown[], TResult>(
  fn: (...args: TArgs) => TResult,
  options: CacheOptions = {}
): ((...args: TArgs) => TResult) => {
  const cache = new MemoryCache<TResult>(options);

  return (...args: TArgs): TResult => {
    const key = JSON.stringify(args);
    const cached = cache.get(key);

    if (cached !== undefined) {
      return cached;
    }

    const result = fn(...args);
    cache.set(key, result);
    return result;
  };
};

/**
 * Async memoize
 */
export const memoizeAsync = <TArgs extends unknown[], TResult>(
  fn: (...args: TArgs) => Promise<TResult>,
  options: CacheOptions = {}
): ((...args: TArgs) => Promise<TResult>) => {
  const cache = new MemoryCache<TResult>(options);
  const pending = new Map<string, Promise<TResult>>();

  return async (...args: TArgs): Promise<TResult> => {
    const key = JSON.stringify(args);

    // Check cache
    const cached = cache.get(key);
    if (cached !== undefined) {
      return cached;
    }

    // Check if already pending
    const pendingPromise = pending.get(key);
    if (pendingPromise) {
      return pendingPromise;
    }

    // Execute and cache
    const promise = fn(...args);
    pending.set(key, promise);

    try {
      const result = await promise;
      cache.set(key, result);
      pending.delete(key);
      return result;
    } catch (error) {
      pending.delete(key);
      throw error;
    }
  };
};

export const cacheUtils = {
  MemoryCache,
  PersistentCache,
  memoize,
  memoizeAsync,
};

export default cacheUtils;

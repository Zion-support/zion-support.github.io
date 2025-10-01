/**
 * Advanced Cache Manager
 * Implements intelligent caching strategies for optimal performance
 */

interface CacheConfig {
  maxAge: number; // milliseconds
  maxSize: number; // maximum number of entries
  strategy: 'LRU' | 'LFU' | 'FIFO';
}

interface CacheEntry<T> {
  value: T;
  timestamp: number;
  accessCount: number;
  size: number;
}

interface CacheStats {
  hits: number;
  misses: number;
  evictions: number;
  currentSize: number;
  hitRate: number;
}

class AdvancedCacheManager<T = any> {
  private cache: Map<string, CacheEntry<T>> = new Map();
  private config: CacheConfig;
  private stats: CacheStats = {
    hits: 0,
    misses: 0,
    evictions: 0,
    currentSize: 0,
    hitRate: 0,
  };

  constructor(config: Partial<CacheConfig> = {}) {
    this.config = {
      maxAge: config.maxAge || 5 * 60 * 1000, // 5 minutes default
      maxSize: config.maxSize || 100,
      strategy: config.strategy || 'LRU',
    };
  }

  /**
   * Get value from cache
   */
  get(key: string): T | null {
    const entry = this.cache.get(key);

    if (!entry) {
      this.stats.misses++;
      this.updateHitRate();
      return null;
    }

    // Check if expired
    if (Date.now() - entry.timestamp > this.config.maxAge) {
      this.cache.delete(key);
      this.stats.misses++;
      this.stats.evictions++;
      this.updateHitRate();
      return null;
    }

    // Update access count for LFU strategy
    entry.accessCount++;
    
    // Update timestamp for LRU strategy
    if (this.config.strategy === 'LRU') {
      entry.timestamp = Date.now();
    }

    this.stats.hits++;
    this.updateHitRate();
    return entry.value;
  }

  /**
   * Set value in cache
   */
  set(key: string, value: T, customMaxAge?: number): void {
    // If cache is full, evict based on strategy
    if (this.cache.size >= this.config.maxSize) {
      this.evict();
    }

    const size = this.estimateSize(value);
    
    this.cache.set(key, {
      value,
      timestamp: Date.now(),
      accessCount: 0,
      size,
    });

    this.stats.currentSize = this.cache.size;
  }

  /**
   * Check if key exists and is valid
   */
  has(key: string): boolean {
    const entry = this.cache.get(key);
    if (!entry) return false;

    // Check if expired
    if (Date.now() - entry.timestamp > this.config.maxAge) {
      this.cache.delete(key);
      this.stats.evictions++;
      return false;
    }

    return true;
  }

  /**
   * Delete key from cache
   */
  delete(key: string): boolean {
    const deleted = this.cache.delete(key);
    if (deleted) {
      this.stats.currentSize = this.cache.size;
    }
    return deleted;
  }

  /**
   * Clear entire cache
   */
  clear(): void {
    this.cache.clear();
    this.stats.currentSize = 0;
  }

  /**
   * Get or set with callback (memoization pattern)
   */
  async getOrSet(
    key: string,
    fetchFn: () => Promise<T>,
    customMaxAge?: number
  ): Promise<T> {
    const cached = this.get(key);
    if (cached !== null) {
      return cached;
    }

    const value = await fetchFn();
    this.set(key, value, customMaxAge);
    return value;
  }

  /**
   * Evict entries based on strategy
   */
  private evict(): void {
    if (this.cache.size === 0) return;

    let keyToEvict: string | null = null;

    switch (this.config.strategy) {
      case 'LRU': // Least Recently Used
        keyToEvict = this.findLRUKey();
        break;
      case 'LFU': // Least Frequently Used
        keyToEvict = this.findLFUKey();
        break;
      case 'FIFO': // First In First Out
        keyToEvict = this.cache.keys().next().value || null;
        break;
    }

    if (keyToEvict) {
      this.cache.delete(keyToEvict);
      this.stats.evictions++;
      this.stats.currentSize = this.cache.size;
    }
  }

  /**
   * Find Least Recently Used key
   */
  private findLRUKey(): string | null {
    let oldestKey: string | null = null;
    let oldestTime = Infinity;

    for (const [key, entry] of this.cache.entries()) {
      if (entry.timestamp < oldestTime) {
        oldestTime = entry.timestamp;
        oldestKey = key;
      }
    }

    return oldestKey;
  }

  /**
   * Find Least Frequently Used key
   */
  private findLFUKey(): string | null {
    let lfuKey: string | null = null;
    let minCount = Infinity;

    for (const [key, entry] of this.cache.entries()) {
      if (entry.accessCount < minCount) {
        minCount = entry.accessCount;
        lfuKey = key;
      }
    }

    return lfuKey;
  }

  /**
   * Estimate size of value
   */
  private estimateSize(value: T): number {
    try {
      return JSON.stringify(value).length;
    } catch {
      return 1;
    }
  }

  /**
   * Update hit rate
   */
  private updateHitRate(): void {
    const total = this.stats.hits + this.stats.misses;
    this.stats.hitRate = total > 0 ? this.stats.hits / total : 0;
  }

  /**
   * Get cache statistics
   */
  getStats(): CacheStats {
    return { ...this.stats };
  }

  /**
   * Clean expired entries
   */
  cleanExpired(): number {
    const now = Date.now();
    let cleaned = 0;

    for (const [key, entry] of this.cache.entries()) {
      if (now - entry.timestamp > this.config.maxAge) {
        this.cache.delete(key);
        cleaned++;
      }
    }

    if (cleaned > 0) {
      this.stats.evictions += cleaned;
      this.stats.currentSize = this.cache.size;
    }

    return cleaned;
  }

  /**
   * Get all keys
   */
  keys(): string[] {
    return Array.from(this.cache.keys());
  }

  /**
   * Get cache size
   */
  size(): number {
    return this.cache.size;
  }

  /**
   * Get config
   */
  getConfig(): CacheConfig {
    return { ...this.config };
  }

  /**
   * Update config
   */
  updateConfig(newConfig: Partial<CacheConfig>): void {
    this.config = {
      ...this.config,
      ...newConfig,
    };
  }

  /**
   * Batch get
   */
  batchGet(keys: string[]): Map<string, T | null> {
    const result = new Map<string, T | null>();
    for (const key of keys) {
      result.set(key, this.get(key));
    }
    return result;
  }

  /**
   * Batch set
   */
  batchSet(entries: Map<string, T>): void {
    for (const [key, value] of entries.entries()) {
      this.set(key, value);
    }
  }

  /**
   * Export cache data
   */
  export(): { [key: string]: T } {
    const exported: { [key: string]: T } = {};
    for (const [key, entry] of this.cache.entries()) {
      exported[key] = entry.value;
    }
    return exported;
  }

  /**
   * Import cache data
   */
  import(data: { [key: string]: T }): void {
    for (const [key, value] of Object.entries(data)) {
      this.set(key, value);
    }
  }
}

// Singleton instances for different cache types
const apiCache = new AdvancedCacheManager<any>({
  maxAge: 5 * 60 * 1000, // 5 minutes
  maxSize: 100,
  strategy: 'LRU',
});

const contentCache = new AdvancedCacheManager<any>({
  maxAge: 60 * 60 * 1000, // 1 hour
  maxSize: 50,
  strategy: 'LFU',
});

const imageCache = new AdvancedCacheManager<string>({
  maxAge: 24 * 60 * 60 * 1000, // 24 hours
  maxSize: 200,
  strategy: 'LRU',
});

// Start periodic cleanup
if (typeof window !== 'undefined') {
  setInterval(() => {
    apiCache.cleanExpired();
    contentCache.cleanExpired();
    imageCache.cleanExpired();
  }, 5 * 60 * 1000); // Clean every 5 minutes
}

export { AdvancedCacheManager, apiCache, contentCache, imageCache };
export type { CacheConfig, CacheStats };

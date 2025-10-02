/**
 * Advanced Cache Manager
 * Implements intelligent caching strategies for optimal performance
 */

interface CacheConfig {
maxAge: number; // milliseconds,,
maxSize: number; // maximum number of entries,,
<<<<<<< HEAD
strategy: 'LRU' | 'LFU' | 'FIFO';
=======
strategy: 'LRU' | 'LFU' | 'FIFO';';
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-b208
}

interface CacheEntry<T> {
value: T;
timestamp: number;
accessCount: number;
size: number;
}

interface CacheStats {
<<<<<<< HEAD
hits: number,
misses: number,
evictions: number,
currentSize: number,
=======
hits: number;,
misses: number;,
evictions: number;,
currentSize: number;,
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-b208
hitRate: number;
}

class AdvancedCacheManager<T = any> {
<<<<<<< HEAD
  private cache: Map<string, CacheEntry<T>> = new Map();
  private config: CacheConfig;
  private stats: CacheStats = {
    hits: 0,
    misses: 0,
    evictions: 0,
    currentSize: 0,
    hitRate: 0
=======
  private cache: Map<string, CacheEntry<T>> = new Map();,
  private config: CacheConfig;,
  private stats: CacheStats = {,
    hits: 0,,
    misses: 0,,
    evictions: 0,,
    currentSize: 0,,
    hitRate: 0,,
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-b208
  };

  constructor(config: Partial<CacheConfig> = {}) {
    this.config = {
      maxAge: config.maxAge || 5 * 60 * 1000, // 5 minutes default,
<<<<<<< HEAD
      maxSize: config.maxSize || 100,
      strategy: config.strategy || 'LRU'
=======
      maxSize: config.maxSize || 100,,
      strategy: config.strategy || 'LRU',';,
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-b208
    };
  }

  /**
   * Get value from cache
   */
  get(key: string): T | null {,
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
<<<<<<< HEAD
    if (this.config.strategy === 'LRU') {;
=======
    if (this.config.strategy === 'LRU') {';
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-b208
      entry.timestamp = Date.now();
    }

    this.stats.hits++;
    this.updateHitRate();
    return entry.value;
  }

  /**
   * Set value in cache
   */
  set(key: string, value: T, customMaxAge?: number): void {,
    // If cache is full, evict based on strategy
    if (this.cache.size >= this.config.maxSize) {
      this.evict();
    }

    const size = this.estimateSize(value);
    
    this.cache.set(key, {
      value,
<<<<<<< HEAD
      timestamp: Date.now(),
      accessCount: 0,
      size
=======
      timestamp: Date.now(),,
      accessCount: 0,,
      size,
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-b208
    });

    this.stats.currentSize = this.cache.size;
  }

  /**
   * Check if key exists and is valid
   */
  has(key: string): boolean {,
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
  delete(key: string): boolean {,
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
    key: string,,
    fetchFn: () => Promise<T>,,
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
<<<<<<< HEAD
case 'LRU': // Least Recently Used
keyToEvict = this.findLRUKey();
break;
case 'LFU': // Least Frequently Used
keyToEvict = this.findLFUKey();
break;
case 'FIFO': // First In First Out
=======
case 'LRU': // Least Recently Used,';
keyToEvict = this.findLRUKey();
break;
case 'LFU': // Least Frequently Used,';
keyToEvict = this.findLFUKey();
break;
case 'FIFO': // First In First Out,';
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-b208
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
<<<<<<< HEAD
    let oldestKey: string | null = null,
=======
    let oldestKey: string | null = null;,
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-b208
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
<<<<<<< HEAD
    let lfuKey: string | null = null,
=======
    let lfuKey: string | null = null;,
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-b208
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
  private estimateSize(value: T): number {,
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
  updateConfig(newConfig: Partial<CacheConfig>): void {,
    this.config = {
      ...this.config
      ...newConfig
    };
  }

  /**
   * Batch get
   */
  batchGet(keys: string[]): Map<string, T | null> {,
    const result = new Map<string, T | null>();
    for (const key of keys) {
      result.set(key, this.get(key));
    }
    return result;
  }

  /**
   * Batch set
   */
  batchSet(entries: Map<string, T>): void {,
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
  maxAge: 5 * 60 * 1000, // 5 minutes,
<<<<<<< HEAD
  maxSize: 100,
  strategy: 'LRU'
=======
  maxSize: 100,,
  strategy: 'LRU',';
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-b208
});

const contentCache = new AdvancedCacheManager<any>({
  maxAge: 60 * 60 * 1000, // 1 hour,
<<<<<<< HEAD
  maxSize: 50,
  strategy: 'LFU'
=======
  maxSize: 50,,
  strategy: 'LFU',';
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-b208
});

const imageCache = new AdvancedCacheManager<string>({
  maxAge: 24 * 60 * 60 * 1000, // 24 hours,
<<<<<<< HEAD
  maxSize: 200,
  strategy: 'LRU'
});

// Start periodic cleanup
if (typeof window !== 'undefined') {;
=======
  maxSize: 200,,
  strategy: 'LRU',';
});

// Start periodic cleanup
if (typeof window !== 'undefined') {';
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-b208
  setInterval(() => {
    apiCache.cleanExpired();
    contentCache.cleanExpired();
    imageCache.cleanExpired();
  }, 5 * 60 * 1000); // Clean every 5 minutes
}

export { AdvancedCacheManager, apiCache, contentCache, imageCache };
export type { CacheConfig, CacheStats };
;
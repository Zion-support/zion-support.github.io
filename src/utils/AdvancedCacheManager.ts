/**
 * Advanced Cache Manager for Zion Tech Group
 * Provides intelligent caching strategies, cache invalidation, and performance optimization
 */

interface CacheConfig {
  maxSize: number;
  ttl: number; // Time to live in milliseconds
  strategy: 'lru' | 'lfu' | 'fifo' | 'ttl';
  persist: boolean;
}

interface CacheEntry<T> {
  key: string;
  value: T;
  timestamp: number;
  accessCount: number;
  lastAccessed: number;
  ttl: number;
  tags?: string[];
}

interface CacheStats {
  hits: number;
  misses: number;
  size: number;
  maxSize: number;
  hitRate: number;
  memoryUsage: number;
}

class AdvancedCacheManager<T = any> {
  private cache: Map<string, CacheEntry<T>> = new Map();
  private config: CacheConfig;
  private stats: CacheStats;
  private cleanupInterval: NodeJS.Timeout;

  constructor(config: Partial<CacheConfig> = {}) {
    this.config = {
      maxSize: 1000,
      ttl: 5 * 60 * 1000, // 5 minutes
      strategy: 'lru',
      persist: false,
      ...config
    };

    this.stats = {
      hits: 0,
      misses: 0,
      size: 0,
      maxSize: this.config.maxSize,
      hitRate: 0,
      memoryUsage: 0
    };

    // Initialize cleanup interval
    this.cleanupInterval = setInterval(() => {
      this.cleanup();
    }, 60000); // Cleanup every minute

    // Load from localStorage if persistence is enabled
    if (this.config.persist) {
      this.loadFromStorage();
    }

    // Set up memory monitoring
    this.setupMemoryMonitoring();
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

    // Check TTL
    if (Date.now() - entry.timestamp > entry.ttl) {
      this.cache.delete(key);
      this.stats.misses++;
      this.updateHitRate();
      return null;
    }

    // Update access statistics
    entry.accessCount++;
    entry.lastAccessed = Date.now();
    
    this.stats.hits++;
    this.updateHitRate();

    return entry.value;
  }

  /**
   * Set value in cache
   */
  set(key: string, value: T, tags?: string[], customTTL?: number): void {
    // Check if we need to evict entries
    if (this.cache.size >= this.config.maxSize && !this.cache.has(key)) {
      this.evict();
    }

    const entry: CacheEntry<T> = {
      key,
      value,
      timestamp: Date.now(),
      accessCount: 1,
      lastAccessed: Date.now(),
      ttl: customTTL || this.config.ttl,
      tags
    };

    this.cache.set(key, entry);
    this.updateStats();

    // Save to localStorage if persistence is enabled
    if (this.config.persist) {
      this.saveToStorage();
    }
  }

  /**
   * Delete entry from cache
   */
  delete(key: string): boolean {
    const deleted = this.cache.delete(key);
    if (deleted) {
      this.updateStats();
      if (this.config.persist) {
        this.saveToStorage();
      }
    }
    return deleted;
  }

  /**
   * Clear all cache entries
   */
  clear(): void {
    this.cache.clear();
    this.updateStats();
    if (this.config.persist) {
      localStorage.removeItem('advanced-cache');
    }
  }

  /**
   * Invalidate cache entries by tags
   */
  invalidateByTags(tags: string[]): number {
    let invalidated = 0;
    
    for (const [key, entry] of this.cache.entries()) {
      if (entry.tags && entry.tags.some(tag => tags.includes(tag))) {
        this.cache.delete(key);
        invalidated++;
      }
    }

    if (invalidated > 0) {
      this.updateStats();
      if (this.config.persist) {
        this.saveToStorage();
      }
    }

    return invalidated;
  }

  /**
   * Get cache statistics
   */
  getStats(): CacheStats {
    return { ...this.stats };
  }

  /**
   * Get all cache keys
   */
  keys(): string[] {
    return Array.from(this.cache.keys());
  }

  /**
   * Check if key exists in cache
   */
  has(key: string): boolean {
    const entry = this.cache.get(key);
    if (!entry) return false;
    
    // Check TTL
    if (Date.now() - entry.timestamp > entry.ttl) {
      this.cache.delete(key);
      return false;
    }
    
    return true;
  }

  /**
   * Get cache size
   */
  size(): number {
    return this.cache.size;
  }

  /**
   * Evict entries based on strategy
   */
  private evict(): void {
    switch (this.config.strategy) {
      case 'lru':
        this.evictLRU();
        break;
      case 'lfu':
        this.evictLFU();
        break;
      case 'fifo':
        this.evictFIFO();
        break;
      case 'ttl':
        this.evictByTTL();
        break;
    }
  }

  /**
   * Evict Least Recently Used entries
   */
  private evictLRU(): void {
    let oldestKey = '';
    let oldestTime = Date.now();

    for (const [key, entry] of this.cache.entries()) {
      if (entry.lastAccessed < oldestTime) {
        oldestTime = entry.lastAccessed;
        oldestKey = key;
      }
    }

    if (oldestKey) {
      this.cache.delete(oldestKey);
    }
  }

  /**
   * Evict Least Frequently Used entries
   */
  private evictLFU(): void {
    let leastFrequentKey = '';
    let leastFrequentCount = Infinity;

    for (const [key, entry] of this.cache.entries()) {
      if (entry.accessCount < leastFrequentCount) {
        leastFrequentCount = entry.accessCount;
        leastFrequentKey = key;
      }
    }

    if (leastFrequentKey) {
      this.cache.delete(leastFrequentKey);
    }
  }

  /**
   * Evict First In First Out entries
   */
  private evictFIFO(): void {
    let oldestKey = '';
    let oldestTime = Date.now();

    for (const [key, entry] of this.cache.entries()) {
      if (entry.timestamp < oldestTime) {
        oldestTime = entry.timestamp;
        oldestKey = key;
      }
    }

    if (oldestKey) {
      this.cache.delete(oldestKey);
    }
  }

  /**
   * Evict entries by TTL
   */
  private evictByTTL(): void {
    const now = Date.now();
    for (const [key, entry] of this.cache.entries()) {
      if (now - entry.timestamp > entry.ttl) {
        this.cache.delete(key);
      }
    }
  }

  /**
   * Cleanup expired entries
   */
  private cleanup(): void {
    const now = Date.now();
    let cleaned = 0;

    for (const [key, entry] of this.cache.entries()) {
      if (now - entry.timestamp > entry.ttl) {
        this.cache.delete(key);
        cleaned++;
      }
    }

    if (cleaned > 0) {
      this.updateStats();
      if (this.config.persist) {
        this.saveToStorage();
      }
    }
  }

  /**
   * Update cache statistics
   */
  private updateStats(): void {
    this.stats.size = this.cache.size;
    this.updateHitRate();
    this.updateMemoryUsage();
  }

  /**
   * Update hit rate
   */
  private updateHitRate(): void {
    const total = this.stats.hits + this.stats.misses;
    this.stats.hitRate = total > 0 ? (this.stats.hits / total) * 100 : 0;
  }

  /**
   * Update memory usage estimation
   */
  private updateMemoryUsage(): void {
    let totalSize = 0;
    
    for (const [key, entry] of this.cache.entries()) {
      totalSize += key.length * 2; // UTF-16 characters
      totalSize += JSON.stringify(entry.value).length * 2;
      totalSize += 100; // Overhead for object structure
    }

    this.stats.memoryUsage = totalSize;
  }

  /**
   * Save cache to localStorage
   */
  private saveToStorage(): void {
    try {
      const cacheData = Array.from(this.cache.entries());
      localStorage.setItem('advanced-cache', JSON.stringify(cacheData));
    } catch (error) {
      console.warn('Failed to save cache to localStorage:', error);
    }
  }

  /**
   * Load cache from localStorage
   */
  private loadFromStorage(): void {
    try {
      const cacheData = localStorage.getItem('advanced-cache');
      if (cacheData) {
        const entries = JSON.parse(cacheData);
        const now = Date.now();

        for (const [key, entry] of entries) {
          // Only load non-expired entries
          if (now - entry.timestamp < entry.ttl) {
            this.cache.set(key, entry);
          }
        }

        this.updateStats();
      }
    } catch (error) {
      console.warn('Failed to load cache from localStorage:', error);
    }
  }

  /**
   * Set up memory monitoring
   */
  private setupMemoryMonitoring(): void {
    if ('memory' in performance) {
      setInterval(() => {
        const memoryInfo = (performance as any).memory;
        const usedMemory = memoryInfo.usedJSHeapSize;
        const maxMemory = memoryInfo.totalJSHeapSize;

        // If memory usage is high, clear some cache
        if (usedMemory / maxMemory > 0.8) {
          const entriesToRemove = Math.floor(this.cache.size * 0.2);
          for (let i = 0; i < entriesToRemove; i++) {
            this.evict();
          }
        }
      }, 30000); // Check every 30 seconds
    }
  }

  /**
   * Destroy cache manager
   */
  destroy(): void {
    clearInterval(this.cleanupInterval);
    this.clear();
  }
}

// Create global cache instances
export const apiCache = new AdvancedCacheManager({
  maxSize: 500,
  ttl: 10 * 60 * 1000, // 10 minutes
  strategy: 'lru',
  persist: true
});

export const imageCache = new AdvancedCacheManager({
  maxSize: 100,
  ttl: 60 * 60 * 1000, // 1 hour
  strategy: 'lfu',
  persist: false
});

export const componentCache = new AdvancedCacheManager({
  maxSize: 200,
  ttl: 30 * 60 * 1000, // 30 minutes
  strategy: 'ttl',
  persist: true
});

export default AdvancedCacheManager;
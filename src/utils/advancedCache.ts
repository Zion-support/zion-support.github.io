/**
 * Advanced caching utility with LRU eviction and memory management
 */

interface CacheItem<T> {
  data: T;
  timestamp: number;
  ttl: number;
  accessCount: number;
  lastAccessed: number;
}

interface CacheOptions {
  maxSize: number;
  ttl: number; // Time to live in milliseconds
  strategy: 'lru' | 'lfu' | 'fifo';
  enableMemoryTracking: boolean;
}

interface CacheStats {
  size: number;
  hits: number;
  misses: number;
  evictions: number;
  hitRate: number;
  memoryUsage: number;
}

export class AdvancedCache<T = any> {
  private cache = new Map<string, CacheItem<T>>();
  private options: CacheOptions;
  private stats: CacheStats;

  constructor(options: Partial<CacheOptions> = {}) {
    this.options = {
      maxSize: 1000,
      ttl: 5 * 60 * 1000, // 5 minutes
      strategy: 'lru',
      enableMemoryTracking: true,
      ...options
    };

    this.stats = {
      size: 0,
      hits: 0,
      misses: 0,
      evictions: 0,
      hitRate: 0,
      memoryUsage: 0
    };
  }

  set(key: string, data: T, ttl?: number): void {
    const now = Date.now();
    const itemTtl = ttl || this.options.ttl;

    // Remove existing item if it exists
    if (this.cache.has(key)) {
      this.cache.delete(key);
    }

    // Check if cache is full and evict if necessary
    if (this.cache.size >= this.options.maxSize) {
      this.evict();
    }

    // Add new item
    this.cache.set(key, {
      data,
      timestamp: now,
      ttl: itemTtl,
      accessCount: 0,
      lastAccessed: now
    });

    this.updateStats();
  }

  get(key: string): T | null {
    const item = this.cache.get(key);
    
    if (!item) {
      this.stats.misses++;
      this.updateHitRate();
      return null;
    }

    // Check if item has expired
    const now = Date.now();
    if (now - item.timestamp > item.ttl) {
      this.cache.delete(key);
      this.stats.misses++;
      this.updateHitRate();
      this.updateStats();
      return null;
    }

    // Update access information
    item.accessCount++;
    item.lastAccessed = now;
    this.stats.hits++;
    this.updateHitRate();

    return item.data;
  }

  has(key: string): boolean {
    const item = this.cache.get(key);
    
    if (!item) {
      return false;
    }

    // Check if item has expired
    const now = Date.now();
    if (now - item.timestamp > item.ttl) {
      this.cache.delete(key);
      this.updateStats();
      return false;
    }

    return true;
  }

  delete(key: string): boolean {
    const deleted = this.cache.delete(key);
    if (deleted) {
      this.updateStats();
    }
    return deleted;
  }

  clear(): void {
    this.cache.clear();
    this.updateStats();
  }

  size(): number {
    return this.cache.size;
  }

  private evict(): void {
    if (this.cache.size === 0) return;

    let keyToEvict: string | null = null;

    switch (this.options.strategy) {
      case 'lru':
        keyToEvict = this.findLRUKey();
        break;
      case 'lfu':
        keyToEvict = this.findLFUKey();
        break;
      case 'fifo':
        keyToEvict = this.findFIFOKey();
        break;
    }

    if (keyToEvict) {
      this.cache.delete(keyToEvict);
      this.stats.evictions++;
    }
  }

  private findLRUKey(): string | null {
    let oldestKey: string | null = null;
    let oldestTime = Date.now();

    for (const [key, item] of this.cache.entries()) {
      if (item.lastAccessed < oldestTime) {
        oldestTime = item.lastAccessed;
        oldestKey = key;
      }
    }

    return oldestKey;
  }

  private findLFUKey(): string | null {
    let leastUsedKey: string | null = null;
    let minAccessCount = Infinity;

    for (const [key, item] of this.cache.entries()) {
      if (item.accessCount < minAccessCount) {
        minAccessCount = item.accessCount;
        leastUsedKey = key;
      }
    }

    return leastUsedKey;
  }

  private findFIFOKey(): string | null {
    let oldestKey: string | null = null;
    let oldestTime = Date.now();

    for (const [key, item] of this.cache.entries()) {
      if (item.timestamp < oldestTime) {
        oldestTime = item.timestamp;
        oldestKey = key;
      }
    }

    return oldestKey;
  }

  private updateStats(): void {
    this.stats.size = this.cache.size;
    this.stats.memoryUsage = this.calculateMemoryUsage();
  }

  private updateHitRate(): void {
    const total = this.stats.hits + this.stats.misses;
    this.stats.hitRate = total > 0 ? (this.stats.hits / total) * 100 : 0;
  }

  private calculateMemoryUsage(): number {
    let usage = 0;
    
    for (const [key, item] of this.cache.entries()) {
      // Rough estimation of memory usage
      usage += key.length * 2; // String characters
      usage += JSON.stringify(item.data).length * 2; // Data serialization
      usage += 32; // Object overhead
    }
    
    return usage;
  }

  // Clean up expired items
  cleanup(): number {
    let cleaned = 0;
    const now = Date.now();

    for (const [key, item] of this.cache.entries()) {
      if (now - item.timestamp > item.ttl) {
        this.cache.delete(key);
        cleaned++;
      }
    }

    this.updateStats();
    return cleaned;
  }

  // Get cache info for debugging
  getInfo(): {
    size: number;
    memoryUsage: string;
    hitRate: string;
    evictions: number;
    strategy: string;
    ttl: string;
  } {
    return {
      size: this.stats.size,
      memoryUsage: this.formatBytes(this.stats.memoryUsage),
      hitRate: `${this.stats.hitRate.toFixed(2)}%`,
      evictions: this.stats.evictions,
      strategy: this.options.strategy.toUpperCase(),
      ttl: `${(this.options.ttl / 1000).toFixed(0)}s`
    };
  }

  private formatBytes(bytes: number): string {
    if (bytes === 0) return '0 B';
    
    const k = 1024;
    const sizes = ['B', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    
    return `${parseFloat((bytes / Math.pow(k, i)).toFixed(2))} ${sizes[i]}`;
  }

  // Get all keys
  keys(): string[] {
    return Array.from(this.cache.keys());
  }

  // Get all values
  values(): T[] {
    return Array.from(this.cache.values()).map(item => item.data);
  }

  // Get cache entries
  entries(): Array<[string, T]> {
    return Array.from(this.cache.entries()).map(([key, item]) => [key, item.data]);
  }

  // Update TTL for an existing item
  updateTTL(key: string, ttl: number): boolean {
    const item = this.cache.get(key);
    if (!item) return false;

    item.ttl = ttl;
    item.timestamp = Date.now();
    return true;
  }

  // Reset statistics
  resetStats(): void {
    this.stats = {
      size: this.cache.size,
      hits: 0,
      misses: 0,
      evictions: 0,
      hitRate: 0,
      memoryUsage: this.calculateMemoryUsage()
    };
  }
}

export default AdvancedCache;
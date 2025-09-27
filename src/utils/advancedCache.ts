interface CacheItem<T> {
  value: T;
  timestamp: number;
  ttl: number;
  hits: number;
  lastAccessed: number;
}

interface CacheOptions {
  ttl?: number; // Time to live in milliseconds
  maxSize?: number; // Maximum number of items
  maxMemory?: number; // Maximum memory usage in bytes
  strategy?: 'lru' | 'lfu' | 'fifo'; // Eviction strategy
}

interface CacheStats {
  hits: number;
  misses: number;
  size: number;
  memoryUsage: number;
  hitRate: number;
  evictions: number;
}

export class AdvancedCache<T = any> {
  private cache = new Map<string, CacheItem<T>>();
  private stats: CacheStats = {
    hits: 0,
    misses: 0,
    size: 0,
    memoryUsage: 0,
    hitRate: 0,
    evictions: 0
  };
  private options: Required<CacheOptions>;

  constructor(options: CacheOptions = {}) {
    this.options = {
      ttl: options.ttl || 300000, // 5 minutes default
      maxSize: options.maxSize || 1000,
      maxMemory: options.maxMemory || 50 * 1024 * 1024, // 50MB default
      strategy: options.strategy || 'lru'
    };
  }

  set(key: string, value: T, ttl?: number): void {
    const now = Date.now();
    const itemTTL = ttl || this.options.ttl;

    // Remove existing item if it exists
    if (this.cache.has(key)) {
      this.remove(key);
    }

    // Check if we need to evict items
    this.evictIfNeeded();

    const item: CacheItem<T> = {
      value,
      timestamp: now,
      ttl: itemTTL,
      hits: 0,
      lastAccessed: now
    };

    this.cache.set(key, item);
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
    if (this.isExpired(item)) {
      this.cache.delete(key);
      this.stats.misses++;
      this.updateHitRate();
      this.updateStats();
      return null;
    }

    // Update access statistics
    item.hits++;
    item.lastAccessed = Date.now();
    this.stats.hits++;
    this.updateHitRate();

    return item.value;
  }

  has(key: string): boolean {
    const item = this.cache.get(key);
    if (!item) return false;

    if (this.isExpired(item)) {
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

  remove(key: string): boolean {
    return this.delete(key);
  }

  clear(): void {
    this.cache.clear();
    this.updateStats();
  }

  size(): number {
    return this.cache.size;
  }

  keys(): string[] {
    return Array.from(this.cache.keys());
  }

  values(): T[] {
    return Array.from(this.cache.values()).map(item => item.value);
  }

  entries(): Array<[string, T]> {
    return Array.from(this.cache.entries()).map(([key, item]) => [key, item.value]);
  }

  getStats(): CacheStats {
    return { ...this.stats };
  }

  private isExpired(item: CacheItem<T>): boolean {
    return Date.now() - item.timestamp > item.ttl;
  }

  private evictIfNeeded(): void {
    // Check size limit
    if (this.cache.size >= this.options.maxSize) {
      this.evict();
      return;
    }

    // Check memory limit
    if (this.stats.memoryUsage >= this.options.maxMemory) {
      this.evict();
    }
  }

  private evict(): void {
    const keys = Array.from(this.cache.keys());

    switch (this.options.strategy) {
      case 'lru':
        this.evictLRU(keys);
        break;
      case 'lfu':
        this.evictLFU(keys);
        break;
      case 'fifo':
        this.evictFIFO(keys);
        break;
    }

    this.stats.evictions++;
    this.updateStats();
  }

  private evictLRU(keys: string[]): void {
    // Sort by last accessed time (oldest first)
    keys.sort((a, b) => {
      const itemA = this.cache.get(a)!;
      const itemB = this.cache.get(b)!;
      return itemA.lastAccessed - itemB.lastAccessed;
    });

    // Remove oldest item
    const oldestKey = keys[0];
    this.cache.delete(oldestKey);
  }

  private evictLFU(keys: string[]): void {
    // Sort by hit count (least frequent first)
    keys.sort((a, b) => {
      const itemA = this.cache.get(a)!;
      const itemB = this.cache.get(b)!;
      return itemA.hits - itemB.hits;
    });

    // Remove least frequently used item
    const lfuKey = keys[0];
    this.cache.delete(lfuKey);
  }

  private evictFIFO(keys: string[]): void {
    // Sort by timestamp (oldest first)
    keys.sort((a, b) => {
      const itemA = this.cache.get(a)!;
      const itemB = this.cache.get(b)!;
      return itemA.timestamp - itemB.timestamp;
    });

    // Remove oldest item
    const oldestKey = keys[0];
    this.cache.delete(oldestKey);
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
      usage += key.length * 2; // Approximate string memory usage
      usage += JSON.stringify(item.value).length * 2;
      usage += 100; // Overhead for object structure
    }
    return usage;
  }

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

  getFormattedStats(): {
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
    if (bytes === 0) return '0 Bytes';

    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));

    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  }
}

// Create singleton instances
export const sessionCache = new AdvancedCache({ ttl: 30 * 60 * 1000, maxSize: 500 });
export const persistentCache = new AdvancedCache({ ttl: 24 * 60 * 60 * 1000, maxSize: 2000 });

// Utility functions for function caching
export function withCache<T extends (...args: any[]) => any>(
  fn: T,
  cache: AdvancedCache = sessionCache,
  ttl?: number
): T {
  return ((...args: any[]) => {
    const key = JSON.stringify(args);
    
    const cached = cache.get(key);
    if (cached !== null) {
      return cached;
    }

    const result = fn(...args);
    cache.set(key, result, ttl);
    return result;
  }) as T;
}

export function withAsyncCache<T extends (...args: any[]) => Promise<any>>(
  fn: T,
  cache: AdvancedCache = sessionCache,
  ttl?: number
): T {
  return (async (...args: any[]) => {
    const key = JSON.stringify(args);
    
    const cached = cache.get(key);
    if (cached !== null) {
      return cached;
    }

    const result = await fn(...args);
    cache.set(key, result, ttl);
    return result;
  }) as T;
}
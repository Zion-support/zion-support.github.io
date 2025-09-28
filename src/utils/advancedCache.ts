/**
 * Advanced Cache Manager
 * Provides intelligent caching with multiple strategies and automatic cleanup
 */

interface CacheItem<T = any> {
  value: T;
  timestamp: number;
  expiresAt: number;
  accessCount: number;
  lastAccessed: number;
  size: number;
}

interface CacheConfig {
  maxSize: number;
  maxAge: number;
  cleanupInterval: number;
  strategy: 'lru' | 'lfu' | 'fifo';
}

type CacheKey = string;

class AdvancedCacheManager {
  private static instance: AdvancedCacheManager;
  private cache = new Map<CacheKey, CacheItem>();
  private config: CacheConfig;
  private cleanupTimer: NodeJS.Timeout | null = null;
  private totalSize = 0;

  private constructor() {
    this.config = {
      maxSize: 50 * 1024 * 1024, // 50MB
      maxAge: 24 * 60 * 60 * 1000, // 24 hours
      cleanupInterval: 60 * 60 * 1000, // 1 hour
      strategy: 'lru',
    };

    this.startCleanupTimer();
    console.log('🗄️ Advanced Cache Manager initialized');
  }

  public static getInstance(): AdvancedCacheManager {
    if (!AdvancedCacheManager.instance) {
      AdvancedCacheManager.instance = new AdvancedCacheManager();
    }
    return AdvancedCacheManager.instance;
  }

  public set<T>(key: CacheKey, value: T, ttl?: number): void {
    const now = Date.now();
    const expiresAt = ttl ? now + ttl : now + this.config.maxAge;
    const size = this.calculateSize(value);

    const item: CacheItem<T> = {
      value,
      timestamp: now,
      expiresAt,
      accessCount: 0,
      lastAccessed: now,
      size,
    };

    // Remove existing item if it exists
    if (this.cache.has(key)) {
      this.totalSize -= this.cache.get(key)!.size;
    }

    // Check if we need to evict items
    while (this.totalSize + size > this.config.maxSize && this.cache.size > 0) {
      this.evictItem();
    }

    this.cache.set(key, item);
    this.totalSize += size;

    console.log(`🗄️ Cached item: ${key} (${size} bytes)`);
  }

  public get<T>(key: CacheKey): T | null {
    const item = this.cache.get(key);

    if (!item) {
      return null;
    }

    const now = Date.now();

    // Check if expired
    if (now > item.expiresAt) {
      this.delete(key);
      return null;
    }

    // Update access statistics
    item.accessCount++;
    item.lastAccessed = now;

    console.log(`🗄️ Cache hit: ${key}`);
    return item.value;
  }

  public has(key: CacheKey): boolean {
    const item = this.cache.get(key);
    if (!item) return false;

    // Check if expired
    if (Date.now() > item.expiresAt) {
      this.delete(key);
      return false;
    }

    return true;
  }

  public delete(key: CacheKey): boolean {
    const item = this.cache.get(key);
    if (!item) return false;

    this.totalSize -= item.size;
    this.cache.delete(key);

    console.log(`🗄️ Deleted cache item: ${key}`);
    return true;
  }

  public clear(): void {
    this.cache.clear();
    this.totalSize = 0;
    console.log('🗄️ Cache cleared');
  }

  public getStats() {
    const now = Date.now();
    const items = Array.from(this.cache.values());
    
    return {
      size: this.cache.size,
      totalSize: this.totalSize,
      maxSize: this.config.maxSize,
      hitRate: this.calculateHitRate(),
      expiredItems: items.filter(item => now > item.expiresAt).length,
      oldestItem: Math.min(...items.map(item => item.timestamp)),
      newestItem: Math.max(...items.map(item => item.timestamp)),
    };
  }

  public configure(config: Partial<CacheConfig>): void {
    this.config = { ...this.config, ...config };
    
    if (this.cleanupTimer) {
      clearInterval(this.cleanupTimer);
    }
    
    this.startCleanupTimer();
    console.log('🗄️ Cache configuration updated:', this.config);
  }

  private evictItem(): void {
    let keyToEvict: CacheKey | null = null;

    switch (this.config.strategy) {
      case 'lru':
        keyToEvict = this.findLRUItem();
        break;
      case 'lfu':
        keyToEvict = this.findLFUItem();
        break;
      case 'fifo':
        keyToEvict = this.findFIFOItem();
        break;
    }

    if (keyToEvict) {
      this.delete(keyToEvict);
    }
  }

  private findLRUItem(): CacheKey | null {
    let oldestKey: CacheKey | null = null;
    let oldestTime = Date.now();

    for (const [key, item] of this.cache.entries()) {
      if (item.lastAccessed < oldestTime) {
        oldestTime = item.lastAccessed;
        oldestKey = key;
      }
    }

    return oldestKey;
  }

  private findLFUItem(): CacheKey | null {
    let leastFrequentKey: CacheKey | null = null;
    let leastFrequent = Infinity;

    for (const [key, item] of this.cache.entries()) {
      if (item.accessCount < leastFrequent) {
        leastFrequent = item.accessCount;
        leastFrequentKey = key;
      }
    }

    return leastFrequentKey;
  }

  private findFIFOItem(): CacheKey | null {
    let oldestKey: CacheKey | null = null;
    let oldestTime = Date.now();

    for (const [key, item] of this.cache.entries()) {
      if (item.timestamp < oldestTime) {
        oldestTime = item.timestamp;
        oldestKey = key;
      }
    }

    return oldestKey;
  }

  private calculateSize(value: any): number {
    try {
      return new Blob([JSON.stringify(value)]).size;
    } catch {
      return 0;
    }
  }

  private calculateHitRate(): number {
    const items = Array.from(this.cache.values());
    const totalAccesses = items.reduce((sum, item) => sum + item.accessCount, 0);
    return totalAccesses > 0 ? items.length / totalAccesses : 0;
  }

  private startCleanupTimer(): void {
    this.cleanupTimer = setInterval(() => {
      this.cleanup();
    }, this.config.cleanupInterval);
  }

  private cleanup(): void {
    const now = Date.now();
    const expiredKeys: CacheKey[] = [];

    for (const [key, item] of this.cache.entries()) {
      if (now > item.expiresAt) {
        expiredKeys.push(key);
      }
    }

    expiredKeys.forEach(key => this.delete(key));

    if (expiredKeys.length > 0) {
      console.log(`🗄️ Cleaned up ${expiredKeys.length} expired cache items`);
    }
  }

  // Memory-based caching
  public memoize<T extends (...args: any[]) => any>(
    fn: T,
    keyGenerator?: (...args: Parameters<T>) => string
  ): T {
    return ((...args: Parameters<T>): ReturnType<T> => {
      const key = keyGenerator ? keyGenerator(...args) : JSON.stringify(args);
      
      const cached = this.get<ReturnType<T>>(key);
      if (cached !== null) {
        return cached;
      }

      const result = fn(...args);
      this.set(key, result);
      return result;
    }) as T;
  }

  // Async function caching
  public async memoizeAsync<T extends (...args: any[]) => Promise<any>>(
    fn: T,
    ttl?: number,
    keyGenerator?: (...args: Parameters<T>) => string
  ): Promise<T> {
    return (async (...args: Parameters<T>): Promise<Awaited<ReturnType<T>>> => {
      const key = keyGenerator ? keyGenerator(...args) : JSON.stringify(args);
      
      const cached = this.get<Awaited<ReturnType<T>>>(key);
      if (cached !== null) {
        return cached;
      }

      const result = await fn(...args);
      this.set(key, result, ttl);
      return result;
    }) as T;
  }

  public destroy(): void {
    if (this.cleanupTimer) {
      clearInterval(this.cleanupTimer);
      this.cleanupTimer = null;
    }
    this.clear();
    console.log('🗄️ Cache manager destroyed');
  }
}

export default AdvancedCacheManager;
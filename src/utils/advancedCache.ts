/**
 * Advanced Caching System for Zion Tech Group Website
 */

interface CacheItem<T> {
  data: T;
  timestamp: number;
  expiresAt: number;
  accessCount: number;
  lastAccessed: number;
  size: number;
}

interface CacheOptions {
  ttl?: number; // Time to live in milliseconds
  maxSize?: number; // Maximum cache size in bytes
  maxItems?: number; // Maximum number of items
  strategy?: 'lru' | 'lfu' | 'fifo'; // Eviction strategy
}

class AdvancedCache<T = unknown> {
  private cache = new Map<string, CacheItem<T>>();
  private options: Required<CacheOptions>;
  private currentSize = 0;

  constructor(options: CacheOptions = {}) {
    this.options = {
      ttl: options.ttl || 5 * 60 * 1000, // 5 minutes default
      maxSize: options.maxSize || 10 * 1024 * 1024, // 10MB default
      maxItems: options.maxItems || 1000, // 1000 items default
      strategy: options.strategy || 'lru'
    };
  }

  set(key: string, data: T, customTtl?: number): boolean {
    try {
      const ttl = customTtl || this.options.ttl;
      const now = Date.now();
      const expiresAt = now + ttl;
      
      // Calculate size
      const size = this.calculateSize(data);
      
      // Check if we need to evict items
      this.evictIfNeeded(size);
      
      // Remove existing item if it exists
      this.remove(key);
      
      // Add new item
      const item: CacheItem<T> = {
        data,
        timestamp: now,
        expiresAt,
        accessCount: 0,
        lastAccessed: now,
        size
      };
      
      this.cache.set(key, item);
      this.currentSize += size;
      
      return true;
    } catch (error) {
      console.error('Cache set error:', error);
      return false;
    }
  }

  get(key: string): T | null {
    const item = this.cache.get(key);
    
    if (!item) {
      return null;
    }
    
    // Check if expired
    if (Date.now() > item.expiresAt) {
      this.remove(key);
      return null;
    }
    
    // Update access statistics
    item.accessCount++;
    item.lastAccessed = Date.now();
    
    return item.data;
  }

  has(key: string): boolean {
    const item = this.cache.get(key);
    return item ? Date.now() <= item.expiresAt : false;
  }

  remove(key: string): boolean {
    const item = this.cache.get(key);
    if (item) {
      this.currentSize -= item.size;
      return this.cache.delete(key);
    }
    return false;
  }

  clear(): void {
    this.cache.clear();
    this.currentSize = 0;
  }

  size(): number {
    return this.cache.size;
  }

  memoryUsage(): number {
    return this.currentSize;
  }

  getStats(): {
    size: number;
    memoryUsage: number;
    hitRate: number;
    items: Array<{
      key: string;
      age: number;
      accessCount: number;
      size: number;
    }>;
  } {
    const now = Date.now();
    const items = Array.from(this.cache.entries()).map(([key, item]) => ({
      key,
      age: now - item.timestamp,
      accessCount: item.accessCount,
      size: item.size
    }));

    const totalAccesses = items.reduce((sum, item) => sum + item.accessCount, 0);
    const hitRate = totalAccesses > 0 ? items.length / totalAccesses : 0;

    return {
      size: this.cache.size,
      memoryUsage: this.currentSize,
      hitRate,
      items
    };
  }

  private calculateSize(data: T): number {
    try {
      return new Blob([JSON.stringify(data)]).size;
    } catch {
      return 1024; // Default size if calculation fails
    }
  }

  private evictIfNeeded(newItemSize: number): void {
    // Check if we need to evict based on size
    if (this.currentSize + newItemSize > this.options.maxSize) {
      this.evictBySize(newItemSize);
    }
    
    // Check if we need to evict based on item count
    if (this.cache.size >= this.options.maxItems) {
      this.evictByCount();
    }
  }

  private evictBySize(newItemSize: number): void {
    const targetSize = this.options.maxSize - newItemSize;
    const itemsToEvict: string[] = [];
    
    // Sort items by eviction strategy
    const sortedItems = this.getSortedItemsForEviction();
    
    let currentSize = this.currentSize;
    for (const [key, item] of sortedItems) {
      if (currentSize <= targetSize) break;
      
      itemsToEvict.push(key);
      currentSize -= item.size;
    }
    
    // Remove evicted items
    itemsToEvict.forEach(key => this.remove(key));
  }

  private evictByCount(): void {
    const itemsToRemove = this.cache.size - this.options.maxItems + 1;
    const sortedItems = this.getSortedItemsForEviction();
    
    for (let i = 0; i < itemsToRemove && i < sortedItems.length; i++) {
      this.remove(sortedItems[i][0]);
    }
  }

  private getSortedItemsForEviction(): Array<[string, CacheItem<T>]> {
    const items = Array.from(this.cache.entries());
    
    switch (this.options.strategy) {
      case 'lru':
        return items.sort((a, b) => a[1].lastAccessed - b[1].lastAccessed);
      case 'lfu':
        return items.sort((a, b) => a[1].accessCount - b[1].accessCount);
      case 'fifo':
        return items.sort((a, b) => a[1].timestamp - b[1].timestamp);
      default:
        return items;
    }
  }

  // Clean up expired items
  cleanup(): number {
    const now = Date.now();
    let cleanedCount = 0;
    
    for (const [key, item] of this.cache.entries()) {
      if (now > item.expiresAt) {
        this.remove(key);
        cleanedCount++;
      }
    }
    
    return cleanedCount;
  }

  // Export cache data for persistence
  export(): string {
    const data = Array.from(this.cache.entries()).map(([key, item]) => [
      key,
      {
        ...item,
        data: JSON.stringify(item.data)
      }
    ]);
    
    return JSON.stringify(data);
  }

  // Import cache data from persistence
  import(data: string): boolean {
    try {
      const parsed = JSON.parse(data);
      this.clear();
      
      for (const [key, item] of parsed) {
        const cacheItem: CacheItem<T> = {
          ...item,
          data: JSON.parse(item.data)
        };
        
        this.cache.set(key, cacheItem);
        this.currentSize += cacheItem.size;
      }
      
      return true;
    } catch (error) {
      console.error('Cache import error:', error);
      return false;
    }
  }
}

// Specialized cache instances
export const apiCache = new AdvancedCache({
  ttl: 5 * 60 * 1000, // 5 minutes
  maxSize: 5 * 1024 * 1024, // 5MB
  maxItems: 500,
  strategy: 'lru'
});

export const imageCache = new AdvancedCache({
  ttl: 30 * 60 * 1000, // 30 minutes
  maxSize: 50 * 1024 * 1024, // 50MB
  maxItems: 100,
  strategy: 'lru'
});

export const userDataCache = new AdvancedCache({
  ttl: 15 * 60 * 1000, // 15 minutes
  maxSize: 2 * 1024 * 1024, // 2MB
  maxItems: 50,
  strategy: 'lfu'
});

// Cache utilities
export const cacheUtils = {
  // Preload data into cache
  preload: async <T>(
    key: string,
    fetcher: () => Promise<T>,
    cache: AdvancedCache<T>,
    ttl?: number
  ): Promise<T> => {
    const cached = cache.get(key);
    if (cached) return cached;
    
    const data = await fetcher();
    cache.set(key, data, ttl);
    return data;
  },

  // Cache with fallback
  getOrSet: async <T>(
    key: string,
    fetcher: () => Promise<T>,
    cache: AdvancedCache<T>,
    ttl?: number
  ): Promise<T> => {
    const cached = cache.get(key);
    if (cached) return cached;
    
    try {
      const data = await fetcher();
      cache.set(key, data, ttl);
      return data;
    } catch (error) {
      // Return cached data even if expired in case of network error
      const expiredCached = cache.get(key);
      if (expiredCached) return expiredCached;
      throw error;
    }
  },

  // Batch cache operations
  batchGet: <T>(keys: string[], cache: AdvancedCache<T>): Record<string, T | null> => {
    const result: Record<string, T | null> = {};
    keys.forEach(key => {
      result[key] = cache.get(key);
    });
    return result;
  },

  // Cache warming
  warmCache: async <T>(
    keys: string[],
    fetcher: (key: string) => Promise<T>,
    cache: AdvancedCache<T>,
    ttl?: number
  ): Promise<void> => {
    const promises = keys.map(async (key) => {
      if (!cache.has(key)) {
        try {
          const data = await fetcher(key);
          cache.set(key, data, ttl);
        } catch (error) {
          console.warn(`Failed to warm cache for key ${key}:`, error);
        }
      }
    });
    
    await Promise.allSettled(promises);
  }
};

// Auto-cleanup interval
setInterval(() => {
  apiCache.cleanup();
  imageCache.cleanup();
  userDataCache.cleanup();
}, 60000); // Clean up every minute

export default AdvancedCache;
/**
 * Advanced Caching and Data Management System
 * Provides intelligent caching, data persistence, and state management
 */

export interface CacheConfig {
  maxSize: number;
  ttl: number; // Time to live in milliseconds
  strategy: 'lru' | 'fifo' | 'lfu';
  persistence: 'memory' | 'localStorage' | 'sessionStorage' | 'indexedDB';
  compression: boolean;
}

export interface CacheEntry<T = any> {
  key: string;
  value: T;
  timestamp: number;
  ttl: number;
  accessCount: number;
  lastAccessed: number;
  size: number;
}

export interface CacheStats {
  hitRate: number;
  missRate: number;
  totalHits: number;
  totalMisses: number;
  currentSize: number;
  maxSize: number;
  entries: number;
}

class CacheManager {
  private cache: Map<string, CacheEntry> = new Map();
  private config: CacheConfig;
  private stats = {
    hits: 0,
    misses: 0,
    totalRequests: 0,
  };
  private cleanupInterval?: number;

  constructor(config?: Partial<CacheConfig>) {
    this.config = {
      maxSize: 1000,
      ttl: 5 * 60 * 1000, // 5 minutes
      strategy: 'lru',
      persistence: 'memory',
      compression: false,
      ...config,
    };

    this.initializeCache();
    this.startCleanup();
  }

  private async initializeCache(): Promise<void> {
    await this.loadFromPersistence();
  }

  public set<T>(key: string, value: T, ttl?: number): void {
    const entry: CacheEntry<T> = {
      key,
      value,
      timestamp: Date.now(),
      ttl: ttl || this.config.ttl,
      accessCount: 0,
      lastAccessed: Date.now(),
      size: this.calculateSize(value),
    };

    // Check if we need to evict entries
    if (this.cache.size >= this.config.maxSize) {
      this.evictEntry();
    }

    this.cache.set(key, entry);
    this.saveToPersistence();
  }

  public get<T>(key: string): T | null {
    const entry = this.cache.get(key);
    
    if (!entry) {
      this.stats.misses++;
      this.stats.totalRequests++;
      return null;
    }

    // Check if entry has expired
    if (this.isExpired(entry)) {
      this.cache.delete(key);
      this.stats.misses++;
      this.stats.totalRequests++;
      return null;
    }

    // Update access statistics
    entry.accessCount++;
    entry.lastAccessed = Date.now();
    this.stats.hits++;
    this.stats.totalRequests++;

    // Reorder based on strategy
    this.updateAccessOrder(key, entry);

    return entry.value as T;
  }

  public has(key: string): boolean {
    const entry = this.cache.get(key);
    return entry ? !this.isExpired(entry) : false;
  }

  public delete(key: string): boolean {
    const deleted = this.cache.delete(key);
    if (deleted) {
      this.saveToPersistence();
    }
    return deleted;
  }

  public clear(): void {
    this.cache.clear();
    this.saveToPersistence();
  }

  public getStats(): CacheStats {
    const totalRequests = this.stats.totalRequests;
    const hitRate = totalRequests > 0 ? this.stats.hits / totalRequests : 0;
    const missRate = totalRequests > 0 ? this.stats.misses / totalRequests : 0;

    return {
      hitRate,
      missRate,
      totalHits: this.stats.hits,
      totalMisses: this.stats.misses,
      currentSize: this.cache.size,
      maxSize: this.config.maxSize,
      entries: this.cache.size,
    };
  }

  public getKeys(): string[] {
    return Array.from(this.cache.keys());
  }

  public getEntries(): CacheEntry[] {
    return Array.from(this.cache.values());
  }

  private isExpired(entry: CacheEntry): boolean {
    return Date.now() - entry.timestamp > entry.ttl;
  }

  private calculateSize(value: any): number {
    try {
      const serialized = JSON.stringify(value);
      return new Blob([serialized]).size;
    } catch {
      return 0;
    }
  }

  private evictEntry(): void {
    if (this.cache.size === 0) return;

    let keyToEvict: string | null = null;

    switch (this.config.strategy) {
      case 'lru':
        keyToEvict = this.findLRUKey();
        break;
      case 'fifo':
        keyToEvict = this.findFIFOKey();
        break;
      case 'lfu':
        keyToEvict = this.findLFUKey();
        break;
    }

    if (keyToEvict) {
      this.cache.delete(keyToEvict);
    }
  }

  private findLRUKey(): string | null {
    let oldestKey: string | null = null;
    let oldestTime = Date.now();

    for (const [key, entry] of this.cache.entries()) {
      if (entry.lastAccessed < oldestTime) {
        oldestTime = entry.lastAccessed;
        oldestKey = key;
      }
    }

    return oldestKey;
  }

  private findFIFOKey(): string | null {
    let oldestKey: string | null = null;
    let oldestTime = Date.now();

    for (const [key, entry] of this.cache.entries()) {
      if (entry.timestamp < oldestTime) {
        oldestTime = entry.timestamp;
        oldestKey = key;
      }
    }

    return oldestKey;
  }

  private findLFUKey(): string | null {
    let leastFrequentKey: string | null = null;
    let minAccessCount = Infinity;

    for (const [key, entry] of this.cache.entries()) {
      if (entry.accessCount < minAccessCount) {
        minAccessCount = entry.accessCount;
        leastFrequentKey = key;
      }
    }

    return leastFrequentKey;
  }

  private updateAccessOrder(key: string, entry: CacheEntry): void {
    // For LRU strategy, we need to update the access time
    // The entry is already updated in the get method
    if (this.config.strategy === 'lru') {
      // Remove and re-add to update position in Map
      this.cache.delete(key);
      this.cache.set(key, entry);
    }
  }

  private startCleanup(): void {
    this.cleanupInterval = window.setInterval(() => {
      this.cleanup();
    }, 60000); // Clean up every minute
  }

  private cleanup(): void {
    const now = Date.now();
    const keysToDelete: string[] = [];

    for (const [key, entry] of this.cache.entries()) {
      if (this.isExpired(entry)) {
        keysToDelete.push(key);
      }
    }

    keysToDelete.forEach(key => this.cache.delete(key));

    if (keysToDelete.length > 0) {
      this.saveToPersistence();
      console.log(`Cleaned up ${keysToDelete.length} expired cache entries`);
    }
  }

  private saveToPersistence(): void {
    if (this.config.persistence === 'memory') return;

    try {
      const data = JSON.stringify(Array.from(this.cache.entries()));
      
      switch (this.config.persistence) {
        case 'localStorage':
          localStorage.setItem('cache_data', data);
          break;
        case 'sessionStorage':
          sessionStorage.setItem('cache_data', data);
          break;
        case 'indexedDB':
          this.saveToIndexedDB(data);
          break;
      }
    } catch (error) {
      console.warn('Failed to save cache to persistence:', error);
    }
  }

  private async loadFromPersistence(): Promise<void> {
    if (this.config.persistence === 'memory') return;

    try {
      let data: string | null = null;
      
      switch (this.config.persistence) {
        case 'localStorage':
          data = localStorage.getItem('cache_data');
          break;
        case 'sessionStorage':
          data = sessionStorage.getItem('cache_data');
          break;
        case 'indexedDB':
          data = await this.loadFromIndexedDB();
          break;
      }

      if (data) {
        const entries = JSON.parse(data) as [string, CacheEntry][];
        this.cache = new Map(entries);
      }
    } catch (error) {
      console.warn('Failed to load cache from persistence:', error);
    }
  }

  private async saveToIndexedDB(data: string): Promise<void> {
    // Simplified IndexedDB implementation
    // In a real application, you would use a proper IndexedDB wrapper
    console.log('Saving to IndexedDB:', data.length, 'characters');
  }

  private async loadFromIndexedDB(): Promise<string | null> {
    // Simplified IndexedDB implementation
    // In a real application, you would use a proper IndexedDB wrapper
    return null;
  }

  public destroy(): void {
    if (this.cleanupInterval) {
      window.clearInterval(this.cleanupInterval);
    }
    this.clear();
  }
}

// Create singleton instances for different use cases
export const memoryCache = new CacheManager({
  maxSize: 500,
  ttl: 5 * 60 * 1000, // 5 minutes
  strategy: 'lru',
  persistence: 'memory',
});

export const localStorageCache = new CacheManager({
  maxSize: 100,
  ttl: 60 * 60 * 1000, // 1 hour
  strategy: 'lru',
  persistence: 'localStorage',
});

export const sessionCache = new CacheManager({
  maxSize: 200,
  ttl: 30 * 60 * 1000, // 30 minutes
  strategy: 'lru',
  persistence: 'sessionStorage',
});

// Utility functions for common caching patterns
export const cacheWithRetry = async <T>(
  key: string,
  fetcher: () => Promise<T>,
  cache: CacheManager = memoryCache,
  retries = 3
): Promise<T> => {
  // Try to get from cache first
  const cached = cache.get<T>(key);
  if (cached !== null) {
    return cached;
  }

  // Fetch with retry logic
  let lastError: Error | null = null;
  
  for (let i = 0; i < retries; i++) {
    try {
      const result = await fetcher();
      cache.set(key, result);
      return result;
    } catch (error) {
      lastError = error as Error;
      if (i < retries - 1) {
        await new Promise(resolve => setTimeout(resolve, Math.pow(2, i) * 1000));
      }
    }
  }

  throw lastError || new Error('Failed to fetch data after retries');
};

export const cacheWithTTL = <T>(
  key: string,
  value: T,
  ttl: number,
  cache: CacheManager = memoryCache
): void => {
  cache.set(key, value, ttl);
};
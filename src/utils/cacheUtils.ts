interface CacheItem<T> {
  data: T;
  timestamp: number;
  ttl: number;
}

class CacheManager {
  private cache = new Map<string, CacheItem<any>>();
  private maxSize = 100; // Maximum number of items in cache

  set<T>(key: string, data: T, ttl: number = 300000): void { // 5 minutes default TTL
    // Remove oldest items if cache is full
    if (this.cache.size >= this.maxSize) {
      const oldestKey = this.cache.keys().next().value;
      this.cache.delete(oldestKey);
    }

    this.cache.set(key, {
      data,
      timestamp: Date.now(),
      ttl
    });
  }

  get<T>(key: string): T | null {
    const item = this.cache.get(key);
    
    if (!item) {
      return null;
    }

    // Check if item has expired
    if (Date.now() - item.timestamp > item.ttl) {
      this.cache.delete(key);
      return null;
    }

    return item.data;
  }

  has(key: string): boolean {
    const item = this.cache.get(key);
    if (!item) return false;
    
    // Check if item has expired
    if (Date.now() - item.timestamp > item.ttl) {
      this.cache.delete(key);
      return false;
    }
    
    return true;
  }

  delete(key: string): boolean {
    return this.cache.delete(key);
  }

  clear(): void {
    this.cache.clear();
  }

  size(): number {
    return this.cache.size;
  }

  keys(): string[] {
    return Array.from(this.cache.keys());
  }

  // Clean up expired items
  cleanup(): void {
    const now = Date.now();
    for (const [key, item] of this.cache.entries()) {
      if (now - item.timestamp > item.ttl) {
        this.cache.delete(key);
      }
    }
  }

  // Get cache statistics
  getStats(): { size: number; maxSize: number; hitRate: number } {
    return {
      size: this.cache.size,
      maxSize: this.maxSize,
      hitRate: 0 // This would need to be tracked separately
    };
  }
}

// Create a singleton instance
export const cacheManager = new CacheManager();

// Utility functions for common cache operations
export const cacheUtils = {
  // Cache with automatic key generation
  cacheWithKey: <T>(prefix: string, params: Record<string, any>, data: T, ttl?: number): string => {
    const key = `${prefix}:${JSON.stringify(params)}`;
    cacheManager.set(key, data, ttl);
    return key;
  },

  // Cache with expiration check
  getWithExpiration: <T>(key: string): { data: T | null; expired: boolean } => {
    const item = cacheManager.get<T>(key);
    return {
      data: item,
      expired: item === null
    };
  },

  // Batch operations
  setMultiple: <T>(items: Array<{ key: string; data: T; ttl?: number }>): void => {
    items.forEach(({ key, data, ttl }) => {
      cacheManager.set(key, data, ttl);
    });
  },

  getMultiple: <T>(keys: string[]): Record<string, T | null> => {
    const result: Record<string, T | null> = {};
    keys.forEach(key => {
      result[key] = cacheManager.get<T>(key);
    });
    return result;
  },

  // Cache invalidation patterns
  invalidatePattern: (pattern: string): void => {
    const regex = new RegExp(pattern);
    const keys = cacheManager.keys();
    keys.forEach(key => {
      if (regex.test(key)) {
        cacheManager.delete(key);
      }
    });
  },

  // Cache warming
  warmCache: async <T>(
    key: string,
    fetcher: () => Promise<T>,
    ttl?: number
  ): Promise<T> => {
    const cached = cacheManager.get<T>(key);
    if (cached) {
      return cached;
    }

    const data = await fetcher();
    cacheManager.set(key, data, ttl);
    return data;
  }
};

// Memory-based cache for client-side
export class MemoryCache {
  private cache = new Map<string, { data: any; expires: number }>();

  set(key: string, data: any, ttl: number = 300000): void {
    const expires = Date.now() + ttl;
    this.cache.set(key, { data, expires });
  }

  get<T>(key: string): T | null {
    const item = this.cache.get(key);
    if (!item) return null;

    if (Date.now() > item.expires) {
      this.cache.delete(key);
      return null;
    }

    return item.data;
  }

  has(key: string): boolean {
    const item = this.cache.get(key);
    if (!item) return false;

    if (Date.now() > item.expires) {
      this.cache.delete(key);
      return false;
    }

    return true;
  }

  delete(key: string): boolean {
    return this.cache.delete(key);
  }

  clear(): void {
    this.cache.clear();
  }

  cleanup(): void {
    const now = Date.now();
    for (const [key, item] of this.cache.entries()) {
      if (now > item.expires) {
        this.cache.delete(key);
      }
    }
  }
}

// Create a singleton instance for client-side use
export const memoryCache = new MemoryCache();

// IndexedDB cache for persistent storage
export class IndexedDBCache {
  private dbName = 'ZionTechCache';
  private version = 1;
  private storeName = 'cache';

  private async openDB(): Promise<IDBDatabase> {
    return new Promise((resolve, reject) => {
      const request = indexedDB.open(this.dbName, this.version);

      request.onerror = () => reject(request.error);
      request.onsuccess = () => resolve(request.result);

      request.onupgradeneeded = (event) => {
        const db = (event.target as IDBOpenDBRequest).result;
        if (!db.objectStoreNames.contains(this.storeName)) {
          const store = db.createObjectStore(this.storeName, { keyPath: 'key' });
          store.createIndex('expires', 'expires', { unique: false });
        }
      };
    });
  }

  async set(key: string, data: any, ttl: number = 300000): Promise<void> {
    const db = await this.openDB();
    const transaction = db.transaction([this.storeName], 'readwrite');
    const store = transaction.objectStore(this.storeName);

    const item = {
      key,
      data,
      expires: Date.now() + ttl
    };

    store.put(item);
  }

  async get<T>(key: string): Promise<T | null> {
    const db = await this.openDB();
    const transaction = db.transaction([this.storeName], 'readonly');
    const store = transaction.objectStore(this.storeName);

    return new Promise((resolve, reject) => {
      const request = store.get(key);

      request.onerror = () => reject(request.error);
      request.onsuccess = () => {
        const item = request.result;
        if (!item) {
          resolve(null);
          return;
        }

        if (Date.now() > item.expires) {
          // Item expired, delete it
          this.delete(key);
          resolve(null);
          return;
        }

        resolve(item.data);
      };
    });
  }

  async delete(key: string): Promise<void> {
    const db = await this.openDB();
    const transaction = db.transaction([this.storeName], 'readwrite');
    const store = transaction.objectStore(this.storeName);
    store.delete(key);
  }

  async clear(): Promise<void> {
    const db = await this.openDB();
    const transaction = db.transaction([this.storeName], 'readwrite');
    const store = transaction.objectStore(this.storeName);
    store.clear();
  }

  async cleanup(): Promise<void> {
    const db = await this.openDB();
    const transaction = db.transaction([this.storeName], 'readwrite');
    const store = transaction.objectStore(this.storeName);
    const index = store.index('expires');

    const range = IDBKeyRange.upperBound(Date.now());
    const request = index.openCursor(range);

    request.onsuccess = (event) => {
      const cursor = (event.target as IDBRequest).result;
      if (cursor) {
        cursor.delete();
        cursor.continue();
      }
    };
  }
}

// Create a singleton instance for persistent storage
export const indexedDBCache = new IndexedDBCache();

// Auto-cleanup expired items every 5 minutes
if (typeof window !== 'undefined') {
  setInterval(() => {
    cacheManager.cleanup();
    memoryCache.cleanup();
    indexedDBCache.cleanup();
  }, 5 * 60 * 1000);
}
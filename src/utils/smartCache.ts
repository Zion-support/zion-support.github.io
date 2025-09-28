/**
 * Smart Caching System
 */

export interface CacheItem<T = any> {
  data: T;
  timestamp: number;
  expiresAt: number;
  accessCount: number;
  lastAccessed: number;
}

export interface CacheConfig {
  maxSize: number;
  defaultTTL: number;
  enableLRU: boolean;
  enableCompression: boolean;
}

export class SmartCache {
  private cache = new Map<string, CacheItem>();
  private config: CacheConfig;
  private accessOrder: string[] = [];

  constructor(config: Partial<CacheConfig> = {}) {
    this.config = {
      maxSize: 100,
      defaultTTL: 5 * 60 * 1000, // 5 minutes
      enableLRU: true,
      enableCompression: false,
      ...config
    };

    this.startCleanupInterval();
  }

  public set<T>(key: string, data: T, ttl?: number): void {
    const now = Date.now();
    const expiresAt = now + (ttl || this.config.defaultTTL);

    // Remove old item if exists
    if (this.cache.has(key)) {
      this.removeFromAccessOrder(key);
    }

    // Add new item
    this.cache.set(key, {
      data,
      timestamp: now,
      expiresAt,
      accessCount: 0,
      lastAccessed: now
    });

    this.addToAccessOrder(key);

    // Enforce size limit
    if (this.cache.size > this.config.maxSize) {
      this.evictLRU();
    }
  }

  public get<T>(key: string): T | null {
    const item = this.cache.get(key);
    
    if (!item) {
      return null;
    }

    // Check if expired
    if (Date.now() > item.expiresAt) {
      this.delete(key);
      return null;
    }

    // Update access info
    item.accessCount++;
    item.lastAccessed = Date.now();
    
    if (this.config.enableLRU) {
      this.updateAccessOrder(key);
    }

    return item.data as T;
  }

  public has(key: string): boolean {
    const item = this.cache.get(key);
    if (!item) return false;
    
    if (Date.now() > item.expiresAt) {
      this.delete(key);
      return false;
    }
    
    return true;
  }

  public delete(key: string): boolean {
    const deleted = this.cache.delete(key);
    this.removeFromAccessOrder(key);
    return deleted;
  }

  public clear(): void {
    this.cache.clear();
    this.accessOrder = [];
  }

  public size(): number {
    return this.cache.size;
  }

  public getStats(): {
    size: number;
    maxSize: number;
    hitRate: number;
    mostAccessed: Array<{ key: string; accessCount: number }>;
  } {
    const items = Array.from(this.cache.values());
    const totalAccesses = items.reduce((sum, item) => sum + item.accessCount, 0);
    const hitRate = totalAccesses > 0 ? items.filter(item => item.accessCount > 0).length / items.length : 0;

    const mostAccessed = items
      .map((item, index) => ({ key: Array.from(this.cache.keys())[index], accessCount: item.accessCount }))
      .sort((a, b) => b.accessCount - a.accessCount)
      .slice(0, 5);

    return {
      size: this.cache.size,
      maxSize: this.config.maxSize,
      hitRate,
      mostAccessed
    };
  }

  private addToAccessOrder(key: string): void {
    if (this.config.enableLRU) {
      this.accessOrder.push(key);
    }
  }

  private removeFromAccessOrder(key: string): void {
    if (this.config.enableLRU) {
      const index = this.accessOrder.indexOf(key);
      if (index > -1) {
        this.accessOrder.splice(index, 1);
      }
    }
  }

  private updateAccessOrder(key: string): void {
    if (this.config.enableLRU) {
      this.removeFromAccessOrder(key);
      this.addToAccessOrder(key);
    }
  }

  private evictLRU(): void {
    if (this.accessOrder.length > 0) {
      const lruKey = this.accessOrder[0];
      this.delete(lruKey);
    }
  }

  private startCleanupInterval(): void {
    setInterval(() => {
      this.cleanupExpired();
    }, 60000); // Cleanup every minute
  }

  private cleanupExpired(): void {
    const now = Date.now();
    const expiredKeys: string[] = [];

    this.cache.forEach((item, key) => {
      if (now > item.expiresAt) {
        expiredKeys.push(key);
      }
    });

    expiredKeys.forEach(key => this.delete(key));
  }
}

export const smartCache = new SmartCache();
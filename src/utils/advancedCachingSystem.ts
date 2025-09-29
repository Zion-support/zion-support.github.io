/**
 * Advanced Caching System
 * Comprehensive caching utilities for the Zion Tech Group website
 * Intelligent caching with automatic invalidation and optimization
 */

export interface CacheEntry<T = unknown> {
  key: string;
  value: T;
  timestamp: number;
  ttl?: number;
  tags?: string[];
}

export interface CacheConfig {
  enableMemoryCache: boolean;
  enableLocalStorageCache: boolean;
  enableSessionStorageCache: boolean;
  maxMemoryItems: number;
  maxLocalStorageItems: number;
  maxSessionStorageItems: number;
  defaultTTL: number;
  enableCompression: boolean;
  enableEncryption: boolean;
}

export interface CacheMetrics {
  hits: number;
  misses: number;
  size: number;
  hitRate: number;
  memoryUsage: number;
}

export interface CacheItem {
  key: string;
  value: any;
  timestamp: number;
  ttl?: number;
  tags?: string[];
}

class AdvancedCachingSystem {
  private memoryCache = new Map<string, CacheEntry>();
  private config: CacheConfig;
  private metrics: CacheMetrics = {
    hits: 0,
    misses: 0,
    size: 0,
    hitRate: 0,
    memoryUsage: 0
  };

  constructor(config: Partial<CacheConfig> = {}) {
    this.config = {
      enableMemoryCache: true,
      enableLocalStorageCache: true,
      enableSessionStorageCache: true,
      maxMemoryItems: 1000,
      maxLocalStorageItems: 500,
      maxSessionStorageItems: 200,
      defaultTTL: 3600000, // 1 hour
      enableCompression: false,
      enableEncryption: false,
      ...config
    };
  }

  /**
   * Set a cache entry
   */
  async set<T>(key: string, value: T, options?: { ttl?: number; tags?: string[] }): Promise<void> {
    const entry: CacheEntry<T> = {
      key,
      value,
      timestamp: Date.now(),
      ttl: options?.ttl || this.config.defaultTTL,
      tags: options?.tags
    };

    // Memory cache
    if (this.config.enableMemoryCache) {
      this.memoryCache.set(key, entry);
      this.enforceMemoryLimit();
    }

    // Local storage cache
    if (this.config.enableLocalStorageCache) {
      try {
        const serialized = this.config.enableCompression 
          ? this.compress(JSON.stringify(entry))
          : JSON.stringify(entry);
      return null;
    }

    // Update access statistics
    entry.accessCount++;
    entry.lastAccessed = Date.now();
    this.statistics.hits++;
    this.updateHitRate();

    // Decompress if needed
    if (this.isCompressed(entry.value)) {
      return this.decompressValue(entry.value) as T;
    }

    return entry.value as T;
  }

  public has(key: string): boolean {
    const entry = this.cache.get(key);
    return entry ? Date.now() <= entry.expiresAt : false;
  }

  public delete(key: string): boolean {
    const deleted = this.cache.delete(key);
    if (deleted) {
      this.updateStatistics();
    }
    return deleted;
  }

  public clear(): void {
    this.cache.clear();
    this.updateStatistics();
  }

  public invalidateByTag(tag: string): void {
    const keysToDelete: string[] = [];
    
    this.cache.forEach((entry, key) => {
      if (entry.tags.includes(tag)) {
        keysToDelete.push(key);
      }
    });

    keysToDelete.forEach(key => this.cache.delete(key));
    this.updateStatistics();
  }

  public invalidateByPattern(pattern: RegExp): void {
    const keysToDelete: string[] = [];
    
    this.cache.forEach((entry, key) => {
      if (pattern.test(key)) {
        keysToDelete.push(key);
      }
    });

    keysToDelete.forEach(key => this.cache.delete(key));
    this.updateStatistics();
  }

  private ensureSpaceForEntry(newEntry: CacheEntry): void {
    // Check if we exceed max entries
    if (this.cache.size >= this.config.maxEntries) {
      this.evictLeastRecentlyUsed();
    }

    // Check if we exceed max size
    const currentSize = this.getTotalSize();
    if (currentSize + newEntry.size > this.config.maxSize) {
      this.evictBySize(newEntry.size);
    }
  }

  private evictLeastRecentlyUsed(): void {
    let oldestEntry: { key: string; entry: CacheEntry } | null = null;
    
    this.cache.forEach((entry, key) => {
      if (!oldestEntry || entry.lastAccessed < oldestEntry.entry.lastAccessed) {
        oldestEntry = { key, entry };
      }
    });

    if (oldestEntry) {
      this.cache.delete(oldestEntry.key);
      this.statistics.evictions++;
    }
  }

  private evictBySize(requiredSize: number): void {
    const entries = Array.from(this.cache.entries())
      .map(([key, entry]) => ({ key, entry }))
      .sort((a, b) => {
        // Sort by priority first, then by last accessed
        const priorityOrder = { critical: 0, high: 1, medium: 2, low: 3 };
        const aPriority = priorityOrder[a.entry.priority];
        const bPriority = priorityOrder[b.entry.priority];
        
        if (aPriority !== bPriority) {
          return aPriority - bPriority;
        }
        
        return a.entry.lastAccessed - b.entry.lastAccessed;
      });

    let freedSize = 0;
    for (const { key, entry } of entries) {
      if (freedSize >= requiredSize) break;
      
      this.cache.delete(key);
      freedSize += entry.size;
      this.statistics.evictions++;
    }
  }

  private performCleanup(): void {
    const now = Date.now();
    const keysToDelete: string[] = [];

    this.cache.forEach((entry, key) => {
      if (now > entry.expiresAt) {
        keysToDelete.push(key);
      }
    });

    keysToDelete.forEach(key => this.cache.delete(key));
    this.updateStatistics();
  }

  private performAggressiveCleanup(): void {
    // Remove low priority entries first
    this.invalidateByTag('low-priority');
    
    // Remove entries older than 1 hour
    const oneHourAgo = Date.now() - (60 * 60 * 1000);
    const keysToDelete: string[] = [];

    this.cache.forEach((entry, key) => {
      if (entry.timestamp < oneHourAgo && entry.priority !== 'critical') {
        keysToDelete.push(key);
      }
    });

    keysToDelete.forEach(key => this.cache.delete(key));
    this.updateStatistics();
  }

  private compressValue(value: unknown): unknown {
    // Simple compression using JSON stringify/parse
    // In a real implementation, you'd use a proper compression library
    try {
      const compressed = JSON.stringify(value);
      return { __compressed: true, data: compressed };
    } catch {
      return value;
    }
  }

  private decompressValue(value: unknown): unknown {
    if (this.isCompressed(value)) {
      try {
        return JSON.parse((value as { data: string }).data);
      } catch {
        return value;
      }
    }
    return value;
  }

  private isCompressed(value: unknown): boolean {
    return value && typeof value === 'object' && (value as { __compressed?: boolean }).__compressed === true;
  }

  private persistCriticalEntries(): void {
    const criticalEntries: Record<string, CacheEntry> = {};
    
    this.cache.forEach((entry, key) => {
      if (entry.priority === 'critical') {
        criticalEntries[key] = entry;
      }
    });

    try {
      localStorage.setItem('cache_critical', JSON.stringify(criticalEntries));
    } catch (error) {
      console.warn('Failed to persist critical cache entries:', error);
    }
  }

  private restoreFromStorage(): void {
    try {
      const stored = localStorage.getItem('cache_critical');
      if (stored) {
        const criticalEntries: Record<string, CacheEntry> = JSON.parse(stored);
        Object.entries(criticalEntries).forEach(([key, entry]) => {
          this.memoryCache.set(key, entry);
        });
      }
    } catch (error) {
      console.warn('Failed to restore from storage:', error);
    }
  }

    // Session storage cache
    if (this.config.enableSessionStorageCache) {
      try {
        const serialized = this.config.enableCompression 
          ? this.compress(JSON.stringify(entry))
          : JSON.stringify(entry);
        
        sessionStorage.setItem(`cache_${key}`, serialized);
        this.enforceSessionStorageLimit();
      } catch (error) {
        console.warn('Failed to cache in sessionStorage:', error);
      }
    }

    this.updateMetrics();
  }

  /**
   * Get a cache entry
   */
  async get<T>(key: string): Promise<T | null> {
    // Try memory cache first
    if (this.config.enableMemoryCache) {
      const entry = this.memoryCache.get(key);
      if (entry && !this.isExpired(entry)) {
        this.metrics.hits++;
        this.updateMetrics();
        return entry.value as T;
      }
    }

    // Try localStorage
    if (this.config.enableLocalStorageCache) {
      try {
        const serialized = localStorage.getItem(`cache_${key}`);
        if (serialized) {
          const entry: CacheEntry<T> = this.config.enableCompression 
            ? JSON.parse(this.decompress(serialized))
            : JSON.parse(serialized);
          
          if (!this.isExpired(entry)) {
            // Update memory cache
            if (this.config.enableMemoryCache) {
              this.memoryCache.set(key, entry);
            }
            
            this.metrics.hits++;
            this.updateMetrics();
            return entry.value;
          } else {
            // Remove expired entry
            localStorage.removeItem(`cache_${key}`);
          }
        }
      } catch (error) {
        console.warn('Failed to get from localStorage:', error);
      }
    }

    // Try sessionStorage
    if (this.config.enableSessionStorageCache) {
      try {
        const serialized = sessionStorage.getItem(`cache_${key}`);
        if (serialized) {
          const entry: CacheEntry<T> = this.config.enableCompression 
            ? JSON.parse(this.decompress(serialized))
            : JSON.parse(serialized);
          
          if (!this.isExpired(entry)) {
            // Update memory cache
            if (this.config.enableMemoryCache) {
              this.memoryCache.set(key, entry);
            }
            
            this.metrics.hits++;
            this.updateMetrics();
            return entry.value;
          } else {
            // Remove expired entry
            sessionStorage.removeItem(`cache_${key}`);
          }
        }
      } catch (error) {
        console.warn('Failed to get from sessionStorage:', error);
      }
    }

    this.metrics.misses++;
    this.updateMetrics();
    return null;
  }

  /**
   * Remove a cache entry
   */
  async delete(key: string): Promise<void> {
    // Remove from memory cache
    if (this.config.enableMemoryCache) {
      this.memoryCache.delete(key);
    }

    // Remove from localStorage
    if (this.config.enableLocalStorageCache) {
      localStorage.removeItem(`cache_${key}`);
    }

    // Remove from sessionStorage
    if (this.config.enableSessionStorageCache) {
      sessionStorage.removeItem(`cache_${key}`);
    }

    this.updateMetrics();
  }

  /**
   * Clear all cache entries
   */
  async clear(): Promise<void> {
    // Clear memory cache
    if (this.config.enableMemoryCache) {
      this.memoryCache.clear();
    }

    // Clear localStorage cache entries
    if (this.config.enableLocalStorageCache) {
      const keys = Object.keys(localStorage);
      keys.forEach(key => {
        if (key.startsWith('cache_')) {
          localStorage.removeItem(key);
        }
      });
    }

    // Clear sessionStorage cache entries
    if (this.config.enableSessionStorageCache) {
      const keys = Object.keys(sessionStorage);
      keys.forEach(key => {
        if (key.startsWith('cache_')) {
          sessionStorage.removeItem(key);
        }
      });
    }

    this.updateMetrics();
  }

  /**
   * Clear cache entries by tags
   */
  async clearByTags(tags: string[]): Promise<void> {
    const keysToDelete: string[] = [];

    // Check memory cache
    if (this.config.enableMemoryCache) {
      this.memoryCache.forEach((entry, key) => {
        if (entry.tags && entry.tags.some(tag => tags.includes(tag))) {
          keysToDelete.push(key);
        }
      });
    }

    // Check localStorage
    if (this.config.enableLocalStorageCache) {
      const keys = Object.keys(localStorage);
      keys.forEach(key => {
        if (key.startsWith('cache_')) {
          try {
            const serialized = localStorage.getItem(key);
            if (serialized) {
              const entry: CacheEntry = this.config.enableCompression 
                ? JSON.parse(this.decompress(serialized))
                : JSON.parse(serialized);
              
              if (entry.tags && entry.tags.some(tag => tags.includes(tag))) {
                keysToDelete.push(key.replace('cache_', ''));
              }
            }
          } catch (error) {
            console.warn('Failed to check localStorage entry:', error);
          }
        }
      });
    }

    // Check sessionStorage
    if (this.config.enableSessionStorageCache) {
      const keys = Object.keys(sessionStorage);
      keys.forEach(key => {
        if (key.startsWith('cache_')) {
          try {
            const serialized = sessionStorage.getItem(key);
            if (serialized) {
              const entry: CacheEntry = this.config.enableCompression 
                ? JSON.parse(this.decompress(serialized))
                : JSON.parse(serialized);
              
              if (entry.tags && entry.tags.some(tag => tags.includes(tag))) {
                keysToDelete.push(key.replace('cache_', ''));
              }
            }
          } catch (error) {
            console.warn('Failed to check sessionStorage entry:', error);
          }
        }
      });
    }

    // Delete all matching entries
    for (const key of keysToDelete) {
      await this.delete(key);
    }
  }

  /**
   * Get cache metrics
   */
  getMetrics(): CacheMetrics {
    return { ...this.metrics };
  }

  /**
   * Check if an entry is expired
   */
  private isExpired(entry: CacheEntry): boolean {
    if (!entry.ttl) return false;
    return Date.now() - entry.timestamp > entry.ttl;
  }

  /**
   * Enforce memory cache limit
   */
  private enforceMemoryLimit(): void {
    if (this.memoryCache.size > this.config.maxMemoryItems) {
      const entries = Array.from(this.memoryCache.entries());
      entries.sort((a, b) => a[1].timestamp - b[1].timestamp);
      
      const toDelete = entries.slice(0, this.memoryCache.size - this.config.maxMemoryItems);
      toDelete.forEach(([key]) => this.memoryCache.delete(key));
    }
  }

  /**
   * Enforce localStorage cache limit
   */
  private enforceLocalStorageLimit(): void {
    const cacheKeys = Object.keys(localStorage).filter(key => key.startsWith('cache_'));
    if (cacheKeys.length > this.config.maxLocalStorageItems) {
      const entries = cacheKeys.map(key => {
        try {
          const serialized = localStorage.getItem(key);
          const entry: CacheEntry = serialized ? 
            (this.config.enableCompression ? JSON.parse(this.decompress(serialized)) : JSON.parse(serialized)) :
            { key: '', value: null, timestamp: 0 };
          return { key, entry };
        } catch {
          return { key, entry: { key: '', value: null, timestamp: 0 } };
        }
      });
      
      entries.sort((a, b) => a.entry.timestamp - b.entry.timestamp);
      
      const toDelete = entries.slice(0, cacheKeys.length - this.config.maxLocalStorageItems);
      toDelete.forEach(({ key }) => localStorage.removeItem(key));
    }
  }

  /**
   * Enforce sessionStorage cache limit
   */
  private enforceSessionStorageLimit(): void {
    const cacheKeys = Object.keys(sessionStorage).filter(key => key.startsWith('cache_'));
    if (cacheKeys.length > this.config.maxSessionStorageItems) {
      const entries = cacheKeys.map(key => {
        try {
          const serialized = sessionStorage.getItem(key);
          const entry: CacheEntry = serialized ? 
            (this.config.enableCompression ? JSON.parse(this.decompress(serialized)) : JSON.parse(serialized)) :
            { key: '', value: null, timestamp: 0 };
          return { key, entry };
        } catch {
          return { key, entry: { key: '', value: null, timestamp: 0 } };
        }
      });
      
      entries.sort((a, b) => a.entry.timestamp - b.entry.timestamp);
      
      const toDelete = entries.slice(0, cacheKeys.length - this.config.maxSessionStorageItems);
      toDelete.forEach(({ key }) => sessionStorage.removeItem(key));
    }
  }

  /**
   * Update cache metrics
   */
  private updateMetrics(): void {
    this.metrics.size = this.memoryCache.size;
    this.metrics.hitRate = this.metrics.hits / (this.metrics.hits + this.metrics.misses) || 0;
    this.metrics.memoryUsage = this.estimateMemoryUsage();
  }

  /**
   * Estimate memory usage
   */
  private estimateMemoryUsage(): number {
    let totalSize = 0;
    this.memoryCache.forEach((entry) => {
      totalSize += JSON.stringify(entry).length * 2; // Rough estimate
    });
    return totalSize;
  }

  /**
   * Simple compression (base64 encoding)
   */
  private compress(data: string): string {
    return btoa(data);
  }

  /**
   * Simple decompression (base64 decoding)
   */
  private decompress(data: string): string {
    return atob(data);
  }
}

// Create and export singleton instance
export const advancedCachingSystem = new AdvancedCachingSystem();

// Export class for custom instances
export { AdvancedCachingSystem };
// Types are already exported above as interfaces
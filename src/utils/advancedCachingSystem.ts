/**
 * Advanced Caching System
 * Comprehensive caching utilities for the Zion Tech Group website
 * Intelligent caching with automatic invalidation and optimization
 */

export interface CacheEntry<T = any> {
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
        
        localStorage.setItem(`cache_${key}`, serialized);
        this.enforceLocalStorageLimit();
      } catch (error) {
        console.warn('Failed to cache in localStorage:', error);
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
/**
 * Advanced Caching System
 * Provides multi-tier caching with memory, localStorage, and sessionStorage
 */

export interface CacheEntry<T = any> {
  value: T;
  expiresAt: number;
  createdAt: number;
  accessCount: number;
  lastAccessed: number;
  tags?: string[];
}

export interface CacheConfig {
  enableMemoryCache: boolean;
  enableLocalStorageCache: boolean;
  enableSessionStorageCache: boolean;
  enableCompression: boolean;
  defaultTTL: number; // in milliseconds
  maxMemoryItems: number;
  maxLocalStorageItems: number;
  maxSessionStorageItems: number;
  cleanupInterval: number; // in milliseconds
}

export interface CacheMetrics {
  hits: number;
  misses: number;
  hitRate: number;
  size: number;
  memoryUsage: number;
}

export class AdvancedCachingSystem {
  private memoryCache = new Map<string, CacheEntry>();
  private config: CacheConfig;
  private metrics: CacheMetrics;
  private cleanupTimer?: NodeJS.Timeout;

  constructor(config: Partial<CacheConfig> = {}) {
    this.config = {
      enableMemoryCache: true,
      enableLocalStorageCache: true,
      enableSessionStorageCache: false,
      enableCompression: false,
      defaultTTL: 5 * 60 * 1000, // 5 minutes
      maxMemoryItems: 100,
      maxLocalStorageItems: 50,
      maxSessionStorageItems: 25,
      cleanupInterval: 60 * 1000, // 1 minute
      ...config
    };

    this.metrics = {
      hits: 0,
      misses: 0,
      hitRate: 0,
      size: 0,
      memoryUsage: 0
    };

    this.startCleanupTimer();
    this.restoreFromStorage();
  }

  /**
   * Set a cache entry
   */
  async set<T>(key: string, value: T, ttl?: number, tags?: string[]): Promise<void> {
    const now = Date.now();
    const expiresAt = now + (ttl || this.config.defaultTTL);
    
    const entry: CacheEntry<T> = {
      value,
      expiresAt,
      createdAt: now,
      accessCount: 0,
      lastAccessed: now,
      tags
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
        entry.accessCount++;
        entry.lastAccessed = Date.now();
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
            entry.accessCount++;
            entry.lastAccessed = Date.now();
            this.metrics.hits++;
            this.updateMetrics();
            
            // Update memory cache if enabled
            if (this.config.enableMemoryCache) {
              this.memoryCache.set(key, entry);
            }
            
            return entry.value;
          } else {
            localStorage.removeItem(`cache_${key}`);
          }
        }
      } catch (error) {
        console.warn('Failed to retrieve from localStorage:', error);
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
            entry.accessCount++;
            entry.lastAccessed = Date.now();
            this.metrics.hits++;
            this.updateMetrics();
            
            // Update memory cache if enabled
            if (this.config.enableMemoryCache) {
              this.memoryCache.set(key, entry);
            }
            
            return entry.value;
          } else {
            sessionStorage.removeItem(`cache_${key}`);
          }
        }
      } catch (error) {
        console.warn('Failed to retrieve from sessionStorage:', error);
      }
    }

    this.metrics.misses++;
    this.updateMetrics();
    return null;
  }

  /**
   * Check if a key exists in cache
   */
  has(key: string): boolean {
    // Check memory cache
    if (this.config.enableMemoryCache) {
      const entry = this.memoryCache.get(key);
      if (entry && !this.isExpired(entry)) {
        return true;
      }
    }

    // Check localStorage
    if (this.config.enableLocalStorageCache) {
      try {
        const serialized = localStorage.getItem(`cache_${key}`);
        if (serialized) {
          const entry = this.config.enableCompression 
            ? JSON.parse(this.decompress(serialized))
            : JSON.parse(serialized);
          return !this.isExpired(entry);
        }
      } catch (error) {
        console.warn('Failed to check localStorage:', error);
      }
    }

    // Check sessionStorage
    if (this.config.enableSessionStorageCache) {
      try {
        const serialized = sessionStorage.getItem(`cache_${key}`);
        if (serialized) {
          const entry = this.config.enableCompression 
            ? JSON.parse(this.decompress(serialized))
            : JSON.parse(serialized);
          return !this.isExpired(entry);
        }
      } catch (error) {
        console.warn('Failed to check sessionStorage:', error);
      }
    }

    return false;
  }

  /**
   * Delete a cache entry
   */
  async delete(key: string): Promise<void> {
    // Remove from memory cache
    if (this.config.enableMemoryCache) {
      this.memoryCache.delete(key);
    }

    // Remove from localStorage
    if (this.config.enableLocalStorageCache) {
      try {
        localStorage.removeItem(`cache_${key}`);
      } catch (error) {
        console.warn('Failed to delete from localStorage:', error);
      }
    }

    // Remove from sessionStorage
    if (this.config.enableSessionStorageCache) {
      try {
        sessionStorage.removeItem(`cache_${key}`);
      } catch (error) {
        console.warn('Failed to delete from sessionStorage:', error);
      }
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

    // Clear localStorage cache
    if (this.config.enableLocalStorageCache) {
      try {
        const keys = Object.keys(localStorage).filter(key => key.startsWith('cache_'));
        keys.forEach(key => localStorage.removeItem(key));
      } catch (error) {
        console.warn('Failed to clear localStorage:', error);
      }
    }

    // Clear sessionStorage cache
    if (this.config.enableSessionStorageCache) {
      try {
        const keys = Object.keys(sessionStorage).filter(key => key.startsWith('cache_'));
        keys.forEach(key => sessionStorage.removeItem(key));
      } catch (error) {
        console.warn('Failed to clear sessionStorage:', error);
      }
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
      try {
        const keys = Object.keys(localStorage).filter(key => key.startsWith('cache_'));
        keys.forEach(key => {
          try {
            const serialized = localStorage.getItem(key);
            if (serialized) {
              const entry = this.config.enableCompression 
                ? JSON.parse(this.decompress(serialized))
                : JSON.parse(serialized);
              if (entry.tags && entry.tags.some((tag: string) => tags.includes(tag))) {
                keysToDelete.push(key.replace('cache_', ''));
              }
            }
          } catch (error) {
            console.warn('Failed to check localStorage entry:', error);
          }
        });
      } catch (error) {
        console.warn('Failed to check localStorage:', error);
      }
    }

    // Check sessionStorage
    if (this.config.enableSessionStorageCache) {
      try {
        const keys = Object.keys(sessionStorage).filter(key => key.startsWith('cache_'));
        keys.forEach(key => {
          try {
            const serialized = sessionStorage.getItem(key);
            if (serialized) {
              const entry = this.config.enableCompression 
                ? JSON.parse(this.decompress(serialized))
                : JSON.parse(serialized);
              if (entry.tags && entry.tags.some((tag: string) => tags.includes(tag))) {
                keysToDelete.push(key.replace('cache_', ''));
              }
            }
          } catch (error) {
            console.warn('Failed to check sessionStorage entry:', error);
          }
        });
      } catch (error) {
        console.warn('Failed to check sessionStorage:', error);
      }
    }

    // Delete all matching keys
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
    return Date.now() > entry.expiresAt;
  }

  /**
   * Enforce memory cache limit
   */
  private enforceMemoryLimit(): void {
    if (this.memoryCache.size > this.config.maxMemoryItems) {
      // Remove oldest entries (least recently accessed)
      const entries = Array.from(this.memoryCache.entries())
        .sort((a, b) => a[1].lastAccessed - b[1].lastAccessed);
      
      const toRemove = entries.slice(0, this.memoryCache.size - this.config.maxMemoryItems);
      toRemove.forEach(([key]) => this.memoryCache.delete(key));
    }
  }

  /**
   * Enforce localStorage cache limit
   */
  private enforceLocalStorageLimit(): void {
    const cacheKeys = Object.keys(localStorage).filter(key => key.startsWith('cache_'));
    if (cacheKeys.length > this.config.maxLocalStorageItems) {
      // Remove oldest entries
      const entries = cacheKeys.map(key => {
        try {
          const serialized = localStorage.getItem(key);
          const entry = serialized ? JSON.parse(serialized) : null;
          return { key, entry };
        } catch {
          return { key, entry: null };
        }
      }).filter(item => item.entry)
        .sort((a, b) => a.entry.createdAt - b.entry.createdAt);
      
      const toRemove = entries.slice(0, entries.length - this.config.maxLocalStorageItems);
      toRemove.forEach(({ key }) => localStorage.removeItem(key));
    }
  }

  /**
   * Enforce sessionStorage cache limit
   */
  private enforceSessionStorageLimit(): void {
    const cacheKeys = Object.keys(sessionStorage).filter(key => key.startsWith('cache_'));
    if (cacheKeys.length > this.config.maxSessionStorageItems) {
      // Remove oldest entries
      const entries = cacheKeys.map(key => {
        try {
          const serialized = sessionStorage.getItem(key);
          const entry = serialized ? JSON.parse(serialized) : null;
          return { key, entry };
        } catch {
          return { key, entry: null };
        }
      }).filter(item => item.entry)
        .sort((a, b) => a.entry.createdAt - b.entry.createdAt);
      
      const toRemove = entries.slice(0, entries.length - this.config.maxSessionStorageItems);
      toRemove.forEach(({ key }) => sessionStorage.removeItem(key));
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

  /**
   * Start cleanup timer
   */
  private startCleanupTimer(): void {
    if (this.cleanupTimer) {
      clearInterval(this.cleanupTimer);
    }
    
    this.cleanupTimer = setInterval(() => {
      this.cleanup();
    }, this.config.cleanupInterval);
  }

  /**
   * Cleanup expired entries
   */
  private cleanup(): void {
    const now = Date.now();
    
    // Cleanup memory cache
    if (this.config.enableMemoryCache) {
      this.memoryCache.forEach((entry, key) => {
        if (now > entry.expiresAt) {
          this.memoryCache.delete(key);
        }
      });
    }

    // Cleanup localStorage
    if (this.config.enableLocalStorageCache) {
      try {
        const keys = Object.keys(localStorage).filter(key => key.startsWith('cache_'));
        keys.forEach(key => {
          try {
            const serialized = localStorage.getItem(key);
            if (serialized) {
              const entry = this.config.enableCompression 
                ? JSON.parse(this.decompress(serialized))
                : JSON.parse(serialized);
              if (now > entry.expiresAt) {
                localStorage.removeItem(key);
              }
            }
          } catch (error) {
            // Remove corrupted entries
            localStorage.removeItem(key);
          }
        });
      } catch (error) {
        console.warn('Failed to cleanup localStorage:', error);
      }
    }

    // Cleanup sessionStorage
    if (this.config.enableSessionStorageCache) {
      try {
        const keys = Object.keys(sessionStorage).filter(key => key.startsWith('cache_'));
        keys.forEach(key => {
          try {
            const serialized = sessionStorage.getItem(key);
            if (serialized) {
              const entry = this.config.enableCompression 
                ? JSON.parse(this.decompress(serialized))
                : JSON.parse(serialized);
              if (now > entry.expiresAt) {
                sessionStorage.removeItem(key);
              }
            }
          } catch (error) {
            // Remove corrupted entries
            sessionStorage.removeItem(key);
          }
        });
      } catch (error) {
        console.warn('Failed to cleanup sessionStorage:', error);
      }
    }

    this.updateMetrics();
  }

  /**
   * Restore critical entries from storage
   */
  private restoreFromStorage(): void {
    try {
      const stored = localStorage.getItem('cache_critical');
      if (stored) {
        const criticalEntries: Record<string, CacheEntry> = JSON.parse(stored);
        Object.entries(criticalEntries).forEach(([key, entry]) => {
          if (!this.isExpired(entry)) {
            this.memoryCache.set(key, entry);
          }
        });
      }
    } catch (error) {
      console.warn('Failed to restore from storage:', error);
    }
  }

  /**
   * Destroy the cache system
   */
  destroy(): void {
    if (this.cleanupTimer) {
      clearInterval(this.cleanupTimer);
      this.cleanupTimer = undefined;
    }
    this.clear();
  }
}

// Export singleton instances
export const apiCache = new AdvancedCachingSystem({
  enableMemoryCache: true,
  enableLocalStorageCache: true,
  enableSessionStorageCache: false,
  defaultTTL: 5 * 60 * 1000, // 5 minutes
  maxMemoryItems: 100,
});

export const imageCache = new AdvancedCachingSystem({
  enableMemoryCache: true,
  enableLocalStorageCache: true,
  enableSessionStorageCache: false,
  defaultTTL: 24 * 60 * 60 * 1000, // 24 hours
  maxMemoryItems: 200,
});

export const dataCache = new AdvancedCachingSystem({
  enableMemoryCache: true,
  enableLocalStorageCache: true,
  enableSessionStorageCache: true,
  defaultTTL: 60 * 60 * 1000, // 1 hour
  maxMemoryItems: 150,
});

// Legacy export for backward compatibility
export const advancedCachingSystem = apiCache;

/**
 * Advanced Caching System
 * Comprehensive caching solution with multiple storage backends
 */

export interface CacheEntry {
  value: any;
  expiresAt: number;
  accessCount: number;
  lastAccessed: number;
  size: number;
  priority: 'low' | 'medium' | 'high' | 'critical';
  tags: string[];
}

export interface CacheConfig {
  enableMemoryCache: boolean;
  enableLocalStorageCache: boolean;
  enableSessionStorageCache: boolean;
  enableCompression: boolean;
  maxMemorySize: number;
  maxLocalStorageSize: number;
  maxSessionStorageSize: number;
  defaultTTL: number;
  cleanupInterval: number;
}

export interface CacheMetrics {
  hits: number;
  misses: number;
  hitRate: number;
  totalSize: number;
  entryCount: number;
  evictions: number;
}

export class AdvancedCachingSystem {
  private memoryCache: Map<string, CacheEntry> = new Map();
  private config: CacheConfig;
  private metrics: CacheMetrics;
  private cleanupTimer: NodeJS.Timeout | null = null;

  constructor(config: Partial<CacheConfig> = {}) {
    this.config = {
      enableMemoryCache: true,
      enableLocalStorageCache: true,
      enableSessionStorageCache: false,
      enableCompression: true,
      maxMemorySize: 50 * 1024 * 1024, // 50MB
      maxLocalStorageSize: 10 * 1024 * 1024, // 10MB
      maxSessionStorageSize: 5 * 1024 * 1024, // 5MB
      defaultTTL: 60 * 60 * 1000, // 1 hour
      cleanupInterval: 5 * 60 * 1000, // 5 minutes
      ...config
    };

    this.metrics = {
      hits: 0,
      misses: 0,
      hitRate: 0,
      totalSize: 0,
      entryCount: 0,
      evictions: 0
    };

    this.startCleanupTimer();
    this.restoreFromStorage();
  }

  /**
   * Set a cache entry
   */
  async set<T>(
    key: string, 
    value: T, 
    ttl?: number, 
    priority: 'low' | 'medium' | 'high' | 'critical' = 'medium',
    tags: string[] = []
  ): Promise<void> {
    const expiresAt = Date.now() + (ttl || this.config.defaultTTL);
    const size = this.calculateSize(value);
    
    const entry: CacheEntry = {
      value,
      expiresAt,
      accessCount: 0,
      lastAccessed: Date.now(),
      size,
      priority,
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
        const stored = localStorage.getItem(`cache_${key}`);
        if (stored) {
          const entry: CacheEntry = this.config.enableCompression 
            ? JSON.parse(this.decompress(stored))
            : JSON.parse(stored);
          
          if (!this.isExpired(entry)) {
            entry.accessCount++;
            entry.lastAccessed = Date.now();
            this.metrics.hits++;
            this.updateMetrics();
            
            // Restore to memory cache
            if (this.config.enableMemoryCache) {
              this.memoryCache.set(key, entry);
            }
            
            return entry.value as T;
          } else {
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
        const stored = sessionStorage.getItem(`cache_${key}`);
        if (stored) {
          const entry: CacheEntry = this.config.enableCompression 
            ? JSON.parse(this.decompress(stored))
            : JSON.parse(stored);
          
          if (!this.isExpired(entry)) {
            entry.accessCount++;
            entry.lastAccessed = Date.now();
            this.metrics.hits++;
            this.updateMetrics();
            
            // Restore to memory cache
            if (this.config.enableMemoryCache) {
              this.memoryCache.set(key, entry);
            }
            
            return entry.value as T;
          } else {
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
   * Delete a cache entry
   */
  async delete(key: string): Promise<void> {
    // Remove from memory
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

    // Clear localStorage cache
    if (this.config.enableLocalStorageCache) {
      const keys = Object.keys(localStorage);
      keys.forEach(key => {
        if (key.startsWith('cache_')) {
          localStorage.removeItem(key);
        }
      });
    }

    // Clear sessionStorage cache
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
   * Get cache metrics
   */
  getMetrics(): CacheMetrics {
    return { ...this.metrics };
  }

  /**
   * Get cache configuration
   */
  getConfig(): CacheConfig {
    return { ...this.config };
  }

  /**
   * Update cache configuration
   */
  updateConfig(newConfig: Partial<CacheConfig>): void {
    this.config = { ...this.config, ...newConfig };
  }

  /**
   * Check if entry is expired
   */
  private isExpired(entry: CacheEntry): boolean {
    return Date.now() > entry.expiresAt;
  }

  /**
   * Calculate size of value
   */
  private calculateSize(value: any): number {
    return JSON.stringify(value).length * 2; // Rough estimate
  }

  /**
   * Compress data
   */
  private compress(data: string): string {
    // Simple compression using base64 encoding
    // In production, use a proper compression library
    return btoa(data);
  }

  /**
   * Decompress data
   */
  private decompress(data: string): string {
    try {
      return atob(data);
    } catch {
      return data; // Return as-is if decompression fails
    }
  }

  /**
   * Enforce memory limit
   */
  private enforceMemoryLimit(): void {
    let totalSize = 0;
    const entries = Array.from(this.memoryCache.entries());
    
    // Calculate total size
    entries.forEach(([, entry]) => {
      totalSize += entry.size;
    });

    // Evict entries if over limit
    if (totalSize > this.config.maxMemorySize) {
      // Sort by priority and last accessed
      entries.sort((a, b) => {
        const priorityOrder = { critical: 4, high: 3, medium: 2, low: 1 };
        const priorityDiff = priorityOrder[b[1].priority] - priorityOrder[a[1].priority];
        if (priorityDiff !== 0) return priorityDiff;
        return a[1].lastAccessed - b[1].lastAccessed;
      });

      // Remove lowest priority entries
      while (totalSize > this.config.maxMemorySize && entries.length > 0) {
        const [key, entry] = entries.shift()!;
        this.memoryCache.delete(key);
        totalSize -= entry.size;
        this.metrics.evictions++;
      }
    }
  }

  /**
   * Enforce localStorage limit
   */
  private enforceLocalStorageLimit(): void {
    const keys = Object.keys(localStorage).filter(key => key.startsWith('cache_'));
    let totalSize = 0;
    
    keys.forEach(key => {
      const value = localStorage.getItem(key);
      if (value) {
        totalSize += value.length;
      }
    });

    if (totalSize > this.config.maxLocalStorageSize) {
      // Remove oldest entries
      const entries = keys.map(key => ({
        key,
        timestamp: parseInt(localStorage.getItem(key)?.split('"lastAccessed":')[1]?.split(',')[0] || '0')
      })).sort((a, b) => a.timestamp - b.timestamp);

      while (totalSize > this.config.maxLocalStorageSize && entries.length > 0) {
        const entry = entries.shift()!;
        localStorage.removeItem(entry.key);
        totalSize -= localStorage.getItem(entry.key)?.length || 0;
      }
    }
  }

  /**
   * Enforce sessionStorage limit
   */
  private enforceSessionStorageLimit(): void {
    const keys = Object.keys(sessionStorage).filter(key => key.startsWith('cache_'));
    let totalSize = 0;
    
    keys.forEach(key => {
      const value = sessionStorage.getItem(key);
      if (value) {
        totalSize += value.length;
      }
    });

    if (totalSize > this.config.maxSessionStorageSize) {
      // Remove oldest entries
      const entries = keys.map(key => ({
        key,
        timestamp: parseInt(sessionStorage.getItem(key)?.split('"lastAccessed":')[1]?.split(',')[0] || '0')
      })).sort((a, b) => a.timestamp - b.timestamp);

      while (totalSize > this.config.maxSessionStorageSize && entries.length > 0) {
        const entry = entries.shift()!;
        sessionStorage.removeItem(entry.key);
        totalSize -= sessionStorage.getItem(entry.key)?.length || 0;
      }
    }
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
      for (const [key, entry] of this.memoryCache.entries()) {
        if (now > entry.expiresAt) {
          this.memoryCache.delete(key);
        }
      }
    }

    // Cleanup localStorage
    if (this.config.enableLocalStorageCache) {
      const keys = Object.keys(localStorage).filter(key => key.startsWith('cache_'));
      keys.forEach(key => {
        try {
          const stored = localStorage.getItem(key);
          if (stored) {
            const entry: CacheEntry = this.config.enableCompression 
              ? JSON.parse(this.decompress(stored))
              : JSON.parse(stored);
            
            if (now > entry.expiresAt) {
              localStorage.removeItem(key);
            }
          }
        } catch (error) {
          // Remove corrupted entries
          localStorage.removeItem(key);
        }
      });
    }

    // Cleanup sessionStorage
    if (this.config.enableSessionStorageCache) {
      const keys = Object.keys(sessionStorage).filter(key => key.startsWith('cache_'));
      keys.forEach(key => {
        try {
          const stored = sessionStorage.getItem(key);
          if (stored) {
            const entry: CacheEntry = this.config.enableCompression 
              ? JSON.parse(this.decompress(stored))
              : JSON.parse(stored);
            
            if (now > entry.expiresAt) {
              sessionStorage.removeItem(key);
            }
          }
        } catch (error) {
          // Remove corrupted entries
          sessionStorage.removeItem(key);
        }
      });
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
      console.warn('Failed to restore critical cache entries:', error);
    }
  }

  /**
   * Update metrics
   */
  private updateMetrics(): void {
    this.metrics.totalSize = Array.from(this.memoryCache.values())
      .reduce((total, entry) => total + entry.size, 0);
    this.metrics.entryCount = this.memoryCache.size;
    this.metrics.hitRate = this.metrics.hits / (this.metrics.hits + this.metrics.misses) || 0;
  }

  /**
   * Destroy the cache system
   */
  destroy(): void {
    if (this.cleanupTimer) {
      clearInterval(this.cleanupTimer);
      this.cleanupTimer = null;
    }
    this.memoryCache.clear();
  }
}

// Export singleton instances
export const apiCache = new AdvancedCachingSystem({
  enableMemoryCache: true,
  enableLocalStorageCache: true,
  enableSessionStorageCache: false,
  defaultTTL: 5 * 60 * 1000, // 5 minutes
  maxMemorySize: 20 * 1024 * 1024, // 20MB
});

export const imageCache = new AdvancedCachingSystem({
  enableMemoryCache: true,
  enableLocalStorageCache: true,
  enableSessionStorageCache: false,
  defaultTTL: 24 * 60 * 60 * 1000, // 24 hours
  maxMemorySize: 100 * 1024 * 1024, // 100MB
});

export const dataCache = new AdvancedCachingSystem({
  enableMemoryCache: true,
  enableLocalStorageCache: true,
  enableSessionStorageCache: true,
  defaultTTL: 60 * 60 * 1000, // 1 hour
  maxMemorySize: 50 * 1024 * 1024, // 50MB
});
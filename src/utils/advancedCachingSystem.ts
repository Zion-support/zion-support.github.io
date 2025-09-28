/**
 * Advanced Caching System
 * Comprehensive caching utilities for the Zion Tech Group website
 */

interface CacheConfig {
  enableMemoryCache: boolean;
  enableLocalStorageCache: boolean;
  enableSessionStorageCache: boolean;
  enableIndexedDBCache: boolean;
  enableServiceWorkerCache: boolean;
  enableCDNCache: boolean;
  enablePreloading: boolean;
  enableCompression: boolean;
  enableEncryption: boolean;
  maxMemorySize: number;
  maxLocalStorageSize: number;
  defaultTTL: number;
  compressionLevel: number;
}

interface CacheItem<T = any> {
  key: string;
  value: T;
  timestamp: number;
  ttl: number;
  size: number;
  compressed: boolean;
  encrypted: boolean;
  tags: string[];
  priority: 'low' | 'medium' | 'high' | 'critical';
  accessCount: number;
  lastAccessed: number;
}

interface CacheMetrics {
  totalItems: number;
  totalSize: number;
  hitRate: number;
  missRate: number;
  evictionCount: number;
  compressionRatio: number;
  averageAccessTime: number;
  memoryUsage: number;
  storageUsage: number;
}

class AdvancedCachingSystem {
  private config: CacheConfig;
  private memoryCache: Map<string, CacheItem> = new Map();
  private metrics: CacheMetrics;
  private isInitialized = false;
  private compressionWorker: Worker | null = null;
  private encryptionKey: string | null = null;
  private db: IDBDatabase | null = null;

  constructor(config: Partial<CacheConfig> = {}) {
    this.config = {
      enableMemoryCache: true,
      enableLocalStorageCache: true,
      enableSessionStorageCache: true,
      enableIndexedDBCache: true,
      enableServiceWorkerCache: true,
      enableCDNCache: true,
      enablePreloading: true,
      enableCompression: true,
      enableEncryption: false,
      maxMemorySize: 50 * 1024 * 1024, // 50MB
      maxLocalStorageSize: 10 * 1024 * 1024, // 10MB
      defaultTTL: 3600000, // 1 hour
      compressionLevel: 6,
      ...config
    };

    this.metrics = {
      totalItems: 0,
      totalSize: 0,
      hitRate: 0,
      missRate: 0,
      evictionCount: 0,
      compressionRatio: 0,
      averageAccessTime: 0,
      memoryUsage: 0,
      storageUsage: 0
    };
  }

  /**
   * Initialize the caching system
   */
  public async initialize(): Promise<void> {
    if (this.isInitialized) return;

    try {
      // Initialize compression worker
      if (this.config.enableCompression) {
        await this.initializeCompressionWorker();
      }

      // Initialize encryption
      if (this.config.enableEncryption) {
        await this.initializeEncryption();
      }

      // Initialize IndexedDB
      if (this.config.enableIndexedDBCache) {
        await this.initializeIndexedDB();
      }

      // Initialize service worker cache
      if (this.config.enableServiceWorkerCache) {
        await this.initializeServiceWorkerCache();
      }

      // Initialize preloading
      if (this.config.enablePreloading) {
        await this.initializePreloading();
      }

      // Start cleanup interval
      this.startCleanupInterval();

      this.isInitialized = true;
      console.log('💾 Advanced Caching System initialized');
    } catch (error) {
      console.error('Error initializing caching system:', error);
    }
  }

  /**
   * Initialize compression worker
   */
  private async initializeCompressionWorker(): Promise<void> {
    if (typeof Worker === 'undefined') return;

    try {
      // Create a simple compression worker
      const workerCode = `
        self.onmessage = function(e) {
          const { type, data } = e.data;
          
          if (type === 'compress') {
            try {
              // Simple compression using JSON.stringify and gzip simulation
              const compressed = JSON.stringify(data);
              self.postMessage({ success: true, data: compressed });
            } catch (error) {
              self.postMessage({ success: false, error: error.message });
            }
          } else if (type === 'decompress') {
            try {
              const decompressed = JSON.parse(data);
              self.postMessage({ success: true, data: decompressed });
            } catch (error) {
              self.postMessage({ success: false, error: error.message });
            }
          }
        };
      `;

      const blob = new Blob([workerCode], { type: 'application/javascript' });
      this.compressionWorker = new Worker(URL.createObjectURL(blob));
    } catch (error) {
      console.warn('Failed to initialize compression worker:', error);
    }
  }

  /**
   * Initialize encryption
   */
  private async initializeEncryption(): Promise<void> {
    try {
      // Generate a simple encryption key (in production, use proper key management)
      this.encryptionKey = await this.generateEncryptionKey();
    } catch (error) {
      console.warn('Failed to initialize encryption:', error);
    }
  }

  /**
   * Generate encryption key
   */
  private async generateEncryptionKey(): Promise<string> {
    const array = new Uint8Array(32);
    crypto.getRandomValues(array);
    return Array.from(array, byte => byte.toString(16).padStart(2, '0')).join('');
  }

  /**
   * Initialize IndexedDB
   */
  private async initializeIndexedDB(): Promise<IDBDatabase | void> {
    if (typeof indexedDB === 'undefined') return;

    return new Promise((resolve, reject) => {
      const request = indexedDB.open('ZionCache', 1);
      
      request.onerror = () => reject(request.error);
      request.onsuccess = () => resolve(request.result!);
      
      request.onupgradeneeded = (event) => {
        const db = (event.target as IDBOpenDBRequest).result;
        if (!db.objectStoreNames.contains('cache')) {
          db.createObjectStore('cache', { keyPath: 'key' });
        }
      };
    });
  }

  /**
   * Initialize service worker cache
   */
  private async initializeServiceWorkerCache(): Promise<void> {
    if (typeof window === 'undefined' || !('serviceWorker' in navigator)) return;

    try {
      const registration = await navigator.serviceWorker.register('/sw.js');
      console.log('Service Worker registered:', registration);
    } catch (error) {
      console.warn('Failed to register service worker:', error);
    }
  }

  /**
   * Initialize preloading
   */
  private async initializePreloading(): Promise<void> {
    // Preload critical resources
    const criticalResources = [
      '/fonts/inter.woff2',
      '/images/logo.svg',
      '/images/hero-bg.webp'
    ];

    for (const resource of criticalResources) {
      try {
        await this.preloadResource(resource);
      } catch (error) {
        console.warn(`Failed to preload ${resource}:`, error);
      }
    }
  }

  /**
   * Preload a resource
   */
  private async preloadResource(url: string): Promise<void> {
    if (typeof window === 'undefined') return;

    const link = document.createElement('link');
    link.rel = 'preload';
    link.href = url;
    
    if (url.endsWith('.woff2')) {
      link.as = 'font';
      link.type = 'font/woff2';
      link.crossOrigin = 'anonymous';
    } else if (url.endsWith('.webp') || url.endsWith('.jpg') || url.endsWith('.png')) {
      link.as = 'image';
    } else if (url.endsWith('.js')) {
      link.as = 'script';
    } else if (url.endsWith('.css')) {
      link.as = 'style';
    }

    document.head.appendChild(link);
  }

  /**
   * Start cleanup interval
   */
  private startCleanupInterval(): void {
    setInterval(() => {
      this.cleanupExpiredItems();
    }, 60000); // Cleanup every minute
  }

  /**
   * Set a cache item
   */
  public async set<T>(
    key: string,
    value: T,
    options: {
      ttl?: number;
      tags?: string[];
      priority?: 'low' | 'medium' | 'high' | 'critical';
      compress?: boolean;
      encrypt?: boolean;
    } = {}
  ): Promise<void> {
    const startTime = performance.now();
    
    try {
      const ttl = options.ttl || this.config.defaultTTL;
      const tags = options.tags || [];
      const priority = options.priority || 'medium';
      const compress = options.compress ?? this.config.enableCompression;
      const encrypt = options.encrypt ?? this.config.enableEncryption;

      let processedValue = value;
      let compressed = false;
      let encrypted = false;

      // Compress if requested
      if (compress && this.compressionWorker) {
        processedValue = await this.compress(processedValue);
        compressed = true;
      }

      // Encrypt if requested
      if (encrypt && this.encryptionKey) {
        processedValue = await this.encrypt(processedValue);
        encrypted = true;
      }

      const item: CacheItem<T> = {
        key,
        value: processedValue,
        timestamp: Date.now(),
        ttl,
        size: this.calculateSize(processedValue),
        compressed,
        encrypted,
        tags,
        priority,
        accessCount: 0,
        lastAccessed: Date.now()
      };

      // Store in memory cache
      if (this.config.enableMemoryCache) {
        this.memoryCache.set(key, item);
        this.checkMemoryLimit();
      }

      // Store in localStorage
      if (this.config.enableLocalStorageCache) {
        await this.setLocalStorage(key, item);
      }

      // Store in sessionStorage
      if (this.config.enableSessionStorageCache) {
        await this.setSessionStorage(key, item);
      }

      // Store in IndexedDB
      if (this.config.enableIndexedDBCache) {
        await this.setIndexedDB(key, item);
      }

      this.updateMetrics();
      
      const accessTime = performance.now() - startTime;
      this.updateAccessTime(accessTime);
      
    } catch (error) {
      console.error('Error setting cache item:', error);
    }
  }

  /**
   * Get a cache item
   */
  public async get<T>(key: string): Promise<T | null> {
    const startTime = performance.now();
    
    try {
      let item: CacheItem<T> | null = null;

      // Try memory cache first
      if (this.config.enableMemoryCache) {
        item = this.memoryCache.get(key) as CacheItem<T>;
      }

      // Try localStorage
      if (!item && this.config.enableLocalStorageCache) {
        item = await this.getLocalStorage<T>(key);
      }

      // Try sessionStorage
      if (!item && this.config.enableSessionStorageCache) {
        item = await this.getSessionStorage<T>(key);
      }

      // Try IndexedDB
      if (!item && this.config.enableIndexedDBCache) {
        item = await this.getIndexedDB<T>(key);
      }

      if (!item) {
        this.updateMissRate();
        return null;
      }

      // Check if expired
      if (this.isExpired(item)) {
        await this.delete(key);
        this.updateMissRate();
        return null;
      }

      // Update access statistics
      item.accessCount++;
      item.lastAccessed = Date.now();

      // Copy to memory cache for faster access
      if (this.config.enableMemoryCache) {
        this.memoryCache.set(key, item);
      }

      let value = item.value;

      // Decrypt if needed
      if (item.encrypted && this.encryptionKey) {
        value = await this.decrypt(value);
      }

      // Decompress if needed
      if (item.compressed && this.compressionWorker) {
        value = await this.decompress(value);
      }

      this.updateHitRate();
      
      const accessTime = performance.now() - startTime;
      this.updateAccessTime(accessTime);
      
      return value as T;
    } catch (error) {
      console.error('Error getting cache item:', error);
      this.updateMissRate();
      return null;
    }
  }

  /**
   * Delete a cache item
   */
  public async delete(key: string): Promise<void> {
    try {
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

      // Remove from IndexedDB
      if (this.config.enableIndexedDBCache) {
        await this.deleteIndexedDB(key);
      }

      this.updateMetrics();
    } catch (error) {
      console.error('Error deleting cache item:', error);
    }
  }

  /**
   * Clear all cache
   */
  public async clear(): Promise<void> {
    try {
      // Clear memory cache
      if (this.config.enableMemoryCache) {
        this.memoryCache.clear();
      }

      // Clear localStorage
      if (this.config.enableLocalStorageCache) {
        const keys = Object.keys(localStorage).filter(key => key.startsWith('cache_'));
        keys.forEach(key => localStorage.removeItem(key));
      }

      // Clear sessionStorage
      if (this.config.enableSessionStorageCache) {
        const keys = Object.keys(sessionStorage).filter(key => key.startsWith('cache_'));
        keys.forEach(key => sessionStorage.removeItem(key));
      }

      // Clear IndexedDB
      if (this.config.enableIndexedDBCache) {
        await this.clearIndexedDB();
      }

      this.updateMetrics();
    } catch (error) {
      console.error('Error clearing cache:', error);
    }
  }

  /**
   * Check if item is expired
   */
  private isExpired(item: CacheItem): boolean {
    return Date.now() - item.timestamp > item.ttl;
  }

  /**
   * Calculate item size
   */
  private calculateSize(value: any): number {
    return JSON.stringify(value).length * 2; // Rough estimate in bytes
  }

  /**
   * Compress data
   */
  private async compress(data: any): Promise<any> {
    if (!this.compressionWorker) return data;

    return new Promise((resolve, reject) => {
      const timeout = setTimeout(() => {
        reject(new Error('Compression timeout'));
      }, 5000);

      this.compressionWorker!.onmessage = (e) => {
        clearTimeout(timeout);
        if (e.data.success) {
          resolve(e.data.data);
        } else {
          reject(new Error(e.data.error));
        }
      };

      this.compressionWorker!.postMessage({ type: 'compress', data });
    });
  }

  /**
   * Decompress data
   */
  private async decompress(data: any): Promise<any> {
    if (!this.compressionWorker) return data;

    return new Promise((resolve, reject) => {
      const timeout = setTimeout(() => {
        reject(new Error('Decompression timeout'));
      }, 5000);

      this.compressionWorker!.onmessage = (e) => {
        clearTimeout(timeout);
        if (e.data.success) {
          resolve(e.data.data);
        } else {
          reject(new Error(e.data.error));
        }
      };

      this.compressionWorker!.postMessage({ type: 'decompress', data });
    });
  }

  /**
   * Encrypt data
   */
  private async encrypt(data: any): Promise<any> {
    // Simple encryption (in production, use proper encryption)
    return btoa(JSON.stringify(data));
  }

  /**
   * Decrypt data
   */
  private async decrypt(data: any): Promise<any> {
    // Simple decryption (in production, use proper decryption)
    return JSON.parse(atob(data));
  }

  /**
   * Set localStorage item
   */
  private async setLocalStorage(key: string, item: CacheItem): Promise<void> {
    try {
      localStorage.setItem(`cache_${key}`, JSON.stringify(item));
    } catch (error) {
      // Handle quota exceeded
      if ((error as Error).name === 'QuotaExceededError') {
        this.evictOldestItems();
        localStorage.setItem(`cache_${key}`, JSON.stringify(item));
      } else {
        throw error;
      }
    }
  }

  /**
   * Get localStorage item
   */
  private async getLocalStorage<T>(key: string): Promise<CacheItem<T> | null> {
    try {
      const item = localStorage.getItem(`cache_${key}`);
      return item ? JSON.parse(item) : null;
    } catch (error) {
      return null;
    }
  }

  /**
   * Set sessionStorage item
   */
  private async setSessionStorage(key: string, item: CacheItem): Promise<void> {
    try {
      sessionStorage.setItem(`cache_${key}`, JSON.stringify(item));
    } catch (error) {
      // Handle quota exceeded
      if ((error as Error).name === 'QuotaExceededError') {
        this.evictOldestItems();
        sessionStorage.setItem(`cache_${key}`, JSON.stringify(item));
      } else {
        throw error;
      }
    }
  }

  /**
   * Get sessionStorage item
   */
  private async getSessionStorage<T>(key: string): Promise<CacheItem<T> | null> {
    try {
      const item = sessionStorage.getItem(`cache_${key}`);
      return item ? JSON.parse(item) : null;
    } catch (error) {
      return null;
    }
  }

  /**
   * Set IndexedDB item
   */
  private async setIndexedDB(key: string, item: CacheItem): Promise<void> {
    // Implementation would go here
  }

  /**
   * Get IndexedDB item
   */
  private async getIndexedDB<T>(key: string): Promise<CacheItem<T> | null> {
    // Implementation would go here
    return null;
  }

  /**
   * Delete IndexedDB item
   */
  private async deleteIndexedDB(key: string): Promise<void> {
    // Implementation would go here
  }

  /**
   * Clear IndexedDB
   */
  private async clearIndexedDB(): Promise<void> {
    // Implementation would go here
  }

  /**
   * Check memory limit
   */
  private checkMemoryLimit(): void {
    let totalSize = 0;
    for (const item of this.memoryCache.values()) {
      totalSize += item.size;
    }

    if (totalSize > this.config.maxMemorySize) {
      this.evictOldestItems();
    }
  }

  /**
   * Evict oldest items
   */
  private evictOldestItems(): void {
    const items = Array.from(this.memoryCache.values())
      .sort((a, b) => a.lastAccessed - b.lastAccessed);

    const itemsToEvict = Math.floor(items.length * 0.2); // Evict 20%
    for (let i = 0; i < itemsToEvict; i++) {
      this.memoryCache.delete(items[i].key);
      this.metrics.evictionCount++;
    }
  }

  /**
   * Update metrics
   */
  private updateMetrics(): void {
    this.metrics.totalItems = this.memoryCache.size;
    
    let totalSize = 0;
    for (const item of this.memoryCache.values()) {
      totalSize += item.size;
    }
    this.metrics.totalSize = totalSize;
    this.metrics.memoryUsage = totalSize;
  }

  /**
   * Update hit rate
   */
  private updateHitRate(): void {
    const total = this.metrics.hitRate + this.metrics.missRate + 1;
    this.metrics.hitRate = ((this.metrics.hitRate * (total - 1)) + 1) / total;
  }

  /**
   * Update miss rate
   */
  private updateMissRate(): void {
    const total = this.metrics.hitRate + this.metrics.missRate + 1;
    this.metrics.missRate = ((this.metrics.missRate * (total - 1)) + 1) / total;
  }

  /**
   * Update access time
   */
  private updateAccessTime(time: number): void {
    this.metrics.averageAccessTime = 
      (this.metrics.averageAccessTime + time) / 2;
  }

  /**
   * Cleanup expired items
   */
  private cleanupExpiredItems(): void {
    const now = Date.now();
    const expiredKeys: string[] = [];

    for (const [key, item] of this.memoryCache.entries()) {
      if (this.isExpired(item)) {
        expiredKeys.push(key);
      }
    }

    expiredKeys.forEach(key => {
      this.memoryCache.delete(key);
    });

    if (expiredKeys.length > 0) {
      this.updateMetrics();
    }
  }

  /**
   * Get cache metrics
   */
  public getMetrics(): CacheMetrics {
    return { ...this.metrics };
  }

  /**
   * Generate cache report
   */
  public generateReport(): string {
    const metrics = this.getMetrics();
    
    const report = `
Cache Report:
============
Total Items: ${metrics.totalItems}
Total Size: ${(metrics.totalSize / 1024 / 1024).toFixed(2)} MB
Hit Rate: ${(metrics.hitRate * 100).toFixed(2)}%
Miss Rate: ${(metrics.missRate * 100).toFixed(2)}%
Eviction Count: ${metrics.evictionCount}
Compression Ratio: ${metrics.compressionRatio.toFixed(2)}
Average Access Time: ${metrics.averageAccessTime.toFixed(2)}ms
Memory Usage: ${(metrics.memoryUsage / 1024 / 1024).toFixed(2)} MB
Storage Usage: ${(metrics.storageUsage / 1024 / 1024).toFixed(2)} MB
    `;

    return report.trim();
  }

  /**
   * Cleanup resources
   */
  public cleanup(): void {
    if (this.compressionWorker) {
      this.compressionWorker.terminate();
      this.compressionWorker = null;
    }
    
    this.memoryCache.clear();
    this.isInitialized = false;
  }
}

// Export singleton instance
export const advancedCachingSystem = new AdvancedCachingSystem();

// Export class for custom instances
export { AdvancedCachingSystem };
export type { CacheConfig, CacheItem, CacheMetrics };
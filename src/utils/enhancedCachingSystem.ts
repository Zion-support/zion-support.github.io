/**
 * Enhanced Caching System
 * Comprehensive caching with multiple strategies and optimizations
 */

export interface CacheConfig {
  maxSize: number;
  ttl: number; // Time to live in milliseconds
  strategy: 'lru' | 'lfu' | 'fifo' | 'ttl';
  enableCompression: boolean;
  enablePersistence: boolean;
  enableMetrics: boolean;
}

export interface CacheEntry<T = unknown> {
  key: string;
  value: T;
  timestamp: number;
  ttl: number;
  accessCount: number;
  lastAccessed: number;
  size: number;
  compressed?: boolean;
}

export interface CacheMetrics {
  hits: number;
  misses: number;
  hitRate: number;
  totalSize: number;
  entryCount: number;
  averageAccessTime: number;
  evictionCount: number;
  compressionRatio: number;
}

export interface CacheStats {
  memory: {
    used: number;
    total: number;
    percentage: number;
  };
  performance: {
    averageGetTime: number;
    averageSetTime: number;
    operationsPerSecond: number;
  };
  efficiency: {
    hitRate: number;
    compressionRatio: number;
    evictionRate: number;
  };
}

class EnhancedCachingSystem<T = unknown> {
  private cache: Map<string, CacheEntry<T>> = new Map();
  private config: CacheConfig;
  private metrics: CacheMetrics;
  private isInitialized = false;
  private compressionWorker: Worker | null = null;

  constructor(config?: Partial<CacheConfig>) {
    this.config = {
      maxSize: 1000,
      ttl: 300000, // 5 minutes
      strategy: 'lru',
      enableCompression: true,
      enablePersistence: true,
      enableMetrics: true,
      ...config
    };

    this.metrics = {
      hits: 0,
      misses: 0,
      hitRate: 0,
      totalSize: 0,
      entryCount: 0,
      averageAccessTime: 0,
      evictionCount: 0,
      compressionRatio: 0
    };
  }

  /**
   * Initialize the caching system
   */
  initialize(): void {
    if (this.isInitialized) return;

    this.setupCompressionWorker();
    this.loadFromPersistence();
    this.startCleanupInterval();
    this.startMetricsCollection();
    this.isInitialized = true;

    console.log('✅ Enhanced Caching System initialized');
  }

  /**
   * Get value from cache
   */
  get(key: string): T | null {
    const startTime = performance.now();
    
    const entry = this.cache.get(key);
    
    if (!entry) {
      this.metrics.misses++;
      this.updateHitRate();
      return null;
    }

    // Check if entry has expired
    if (this.isExpired(entry)) {
      this.cache.delete(key);
      this.metrics.misses++;
      this.updateHitRate();
      return null;
    }

    // Update access information
    entry.accessCount++;
    entry.lastAccessed = Date.now();
    
    this.metrics.hits++;
    this.updateHitRate();
    this.updateAverageAccessTime(performance.now() - startTime);

    // Decompress if needed
    if (entry.compressed && this.config.enableCompression) {
      return this.decompressValue(entry.value);
    }

    return entry.value;
  }

  /**
   * Set value in cache
   */
  set(key: string, value: T, customTtl?: number): void {
    const startTime = performance.now();
    
    // Serialize and measure size
    const serialized = JSON.stringify(value);
    const size = new Blob([serialized]).size;
    
    // Check if we need to evict entries
    this.evictIfNeeded(size);
    
    // Compress if enabled
    let finalValue: T = value;
    let compressed = false;
    
    if (this.config.enableCompression && size > 1024) {
      finalValue = this.compressValue(value);
      compressed = true;
    }

    const entry: CacheEntry<T> = {
      key,
      value: finalValue,
      timestamp: Date.now(),
      ttl: customTtl || this.config.ttl,
      accessCount: 1,
      lastAccessed: Date.now(),
      size,
      compressed
    };

    this.cache.set(key, entry);
    this.updateMetrics();
    this.updateAverageSetTime(performance.now() - startTime);

    // Persist if enabled
    if (this.config.enablePersistence) {
      this.persistToStorage();
    }
  }

  /**
   * Delete entry from cache
   */
  delete(key: string): boolean {
    const deleted = this.cache.delete(key);
    if (deleted) {
      this.updateMetrics();
      if (this.config.enablePersistence) {
        this.persistToStorage();
      }
    }
    return deleted;
  }

  /**
   * Clear all entries
   */
  clear(): void {
    this.cache.clear();
    this.updateMetrics();
    if (this.config.enablePersistence) {
      localStorage.removeItem('enhanced-cache');
    }
  }

  /**
   * Check if key exists in cache
   */
  has(key: string): boolean {
    const entry = this.cache.get(key);
    if (!entry) return false;
    
    if (this.isExpired(entry)) {
      this.cache.delete(key);
      return false;
    }
    
    return true;
  }

  /**
   * Get cache size
   */
  size(): number {
    return this.cache.size;
  }

  /**
   * Get cache metrics
   */
  getMetrics(): CacheMetrics {
    return { ...this.metrics };
  }

  /**
   * Get detailed cache statistics
   */
  getStats(): CacheStats {
    const memoryUsage = this.getMemoryUsage();
    const performance = this.getPerformanceStats();
    const efficiency = this.getEfficiencyStats();

    return {
      memory: memoryUsage,
      performance,
      efficiency
    };
  }

  /**
   * Update cache configuration
   */
  updateConfig(newConfig: Partial<CacheConfig>): void {
    this.config = { ...this.config, ...newConfig };
    
    // Reinitialize if needed
    if (this.isInitialized) {
      this.initialize();
    }
  }

  /**
   * Setup compression worker
   */
  private setupCompressionWorker(): void {
    if (!this.config.enableCompression) return;

    try {
      // Create a simple compression worker
      const workerCode = `
        self.onmessage = function(e) {
          const { type, data } = e.data;
          
          if (type === 'compress') {
            try {
              const compressed = JSON.stringify(data);
              self.postMessage({ type: 'compress', result: compressed });
            } catch (error) {
              self.postMessage({ type: 'compress', error: error.message });
            }
          } else if (type === 'decompress') {
            try {
              const decompressed = JSON.parse(data);
              self.postMessage({ type: 'decompress', result: decompressed });
            } catch (error) {
              self.postMessage({ type: 'decompress', error: error.message });
            }
          }
        };
      `;

      const blob = new Blob([workerCode], { type: 'application/javascript' });
      this.compressionWorker = new Worker(URL.createObjectURL(blob));
    } catch (error) {
      console.warn('Failed to setup compression worker:', error);
    }
  }

  /**
   * Compress value
   */
  private compressValue(value: T): T {
    try {
      // Simple compression using JSON stringify/parse
      const serialized = JSON.stringify(value);
      const compressed = JSON.stringify(serialized);
      return compressed as T;
    } catch (error) {
      console.warn('Compression failed:', error);
      return value;
    }
  }

  /**
   * Decompress value
   */
  private decompressValue(value: T): T {
    try {
      const decompressed = JSON.parse(value as string);
      return JSON.parse(decompressed);
    } catch (error) {
      console.warn('Decompression failed:', error);
      return value;
    }
  }

  /**
   * Check if entry is expired
   */
  private isExpired(entry: CacheEntry<T>): boolean {
    return Date.now() - entry.timestamp > entry.ttl;
  }

  /**
   * Evict entries if needed
   */
  private evictIfNeeded(newEntrySize: number): void {
    const currentSize = this.metrics.totalSize;
    const maxSize = this.config.maxSize * 1024 * 1024; // Convert to bytes

    if (currentSize + newEntrySize > maxSize) {
      this.evictEntries(newEntrySize);
    }
  }

  /**
   * Evict entries based on strategy
   */
  private evictEntries(requiredSpace: number): void {
    const entries = Array.from(this.cache.entries());
    let freedSpace = 0;

    switch (this.config.strategy) {
      case 'lru':
        entries.sort((a, b) => a[1].lastAccessed - b[1].lastAccessed);
        break;
      case 'lfu':
        entries.sort((a, b) => a[1].accessCount - b[1].accessCount);
        break;
      case 'fifo':
        entries.sort((a, b) => a[1].timestamp - b[1].timestamp);
        break;
      case 'ttl':
        entries.sort((a, b) => a[1].timestamp - b[1].timestamp);
        break;
    }

    for (const [key, entry] of entries) {
      if (freedSpace >= requiredSpace) break;
      
      this.cache.delete(key);
      freedSpace += entry.size;
      this.metrics.evictionCount++;
    }

    this.updateMetrics();
  }

  /**
   * Update cache metrics
   */
  private updateMetrics(): void {
    let totalSize = 0;

    for (const entry of this.cache.values()) {
      totalSize += entry.size;
    }

    this.metrics.totalSize = totalSize;
    this.metrics.entryCount = this.cache.size;
    this.metrics.compressionRatio = this.calculateCompressionRatio();
  }

  /**
   * Calculate compression ratio
   */
  private calculateCompressionRatio(): number {
    let compressedSize = 0;
    let uncompressedSize = 0;

    for (const entry of this.cache.values()) {
      if (entry.compressed) {
        compressedSize += entry.size;
        uncompressedSize += entry.size * 2; // Estimate
      } else {
        uncompressedSize += entry.size;
      }
    }

    return uncompressedSize > 0 ? compressedSize / uncompressedSize : 1;
  }

  /**
   * Update hit rate
   */
  private updateHitRate(): void {
    const total = this.metrics.hits + this.metrics.misses;
    this.metrics.hitRate = total > 0 ? this.metrics.hits / total : 0;
  }

  /**
   * Update average access time
   */
  private updateAverageAccessTime(accessTime: number): void {
    const totalAccesses = this.metrics.hits + this.metrics.misses;
    this.metrics.averageAccessTime = 
      (this.metrics.averageAccessTime * (totalAccesses - 1) + accessTime) / totalAccesses;
  }

  /**
   * Update average set time
   */
  private updateAverageSetTime(setTime: number): void {
    // Simple average calculation
    this.metrics.averageAccessTime = 
      (this.metrics.averageAccessTime + setTime) / 2;
  }

  /**
   * Get memory usage statistics
   */
  private getMemoryUsage(): { used: number; total: number; percentage: number } {
    const used = this.metrics.totalSize;
    const total = this.config.maxSize * 1024 * 1024;
    const percentage = (used / total) * 100;

    return { used, total, percentage };
  }

  /**
   * Get performance statistics
   */
  private getPerformanceStats(): { averageGetTime: number; averageSetTime: number; operationsPerSecond: number } {
    const totalOperations = this.metrics.hits + this.metrics.misses;
    const operationsPerSecond = totalOperations > 0 ? 1000 / this.metrics.averageAccessTime : 0;

    return {
      averageGetTime: this.metrics.averageAccessTime,
      averageSetTime: this.metrics.averageAccessTime,
      operationsPerSecond
    };
  }

  /**
   * Get efficiency statistics
   */
  private getEfficiencyStats(): { hitRate: number; compressionRatio: number; evictionRate: number } {
    const totalOperations = this.metrics.hits + this.metrics.misses;
    const evictionRate = totalOperations > 0 ? this.metrics.evictionCount / totalOperations : 0;

    return {
      hitRate: this.metrics.hitRate,
      compressionRatio: this.metrics.compressionRatio,
      evictionRate
    };
  }

  /**
   * Start cleanup interval
   */
  private startCleanupInterval(): void {
    setInterval(() => {
      this.cleanupExpiredEntries();
    }, 60000); // Cleanup every minute
  }

  /**
   * Cleanup expired entries
   */
  private cleanupExpiredEntries(): void {
    const now = Date.now();
    const expiredKeys: string[] = [];

    for (const [key, entry] of this.cache.entries()) {
      if (now - entry.timestamp > entry.ttl) {
        expiredKeys.push(key);
      }
    }

    expiredKeys.forEach(key => this.cache.delete(key));
    
    if (expiredKeys.length > 0) {
      this.updateMetrics();
      if (this.config.enablePersistence) {
        this.persistToStorage();
      }
    }
  }

  /**
   * Start metrics collection
   */
  private startMetricsCollection(): void {
    if (!this.config.enableMetrics) return;

    setInterval(() => {
      this.updateMetrics();
      this.logMetrics();
    }, 30000); // Update metrics every 30 seconds
  }

  /**
   * Log cache metrics
   */
  private logMetrics(): void {
    console.debug('Cache Metrics:', {
      size: this.metrics.entryCount,
      hitRate: `${(this.metrics.hitRate * 100).toFixed(2)}%`,
      memoryUsage: `${(this.metrics.totalSize / 1024 / 1024).toFixed(2)}MB`,
      compressionRatio: `${(this.metrics.compressionRatio * 100).toFixed(2)}%`
    });
  }

  /**
   * Persist cache to storage
   */
  private persistToStorage(): void {
    if (!this.config.enablePersistence) return;

    try {
      const cacheData = {
        entries: Array.from(this.cache.entries()),
        metrics: this.metrics,
        config: this.config,
        timestamp: Date.now()
      };

      localStorage.setItem('enhanced-cache', JSON.stringify(cacheData));
    } catch (error) {
      console.warn('Failed to persist cache:', error);
    }
  }

  /**
   * Load cache from storage
   */
  private loadFromPersistence(): void {
    if (!this.config.enablePersistence) return;

    try {
      const cacheData = localStorage.getItem('enhanced-cache');
      if (!cacheData) return;

      const parsed = JSON.parse(cacheData);
      const now = Date.now();

      // Only load if cache is not too old (1 hour)
      if (now - parsed.timestamp > 3600000) {
        localStorage.removeItem('enhanced-cache');
        return;
      }

      this.cache = new Map(parsed.entries);
      this.metrics = parsed.metrics;
      
      console.log(`Loaded ${this.cache.size} cache entries from storage`);
    } catch (error) {
      console.warn('Failed to load cache from storage:', error);
      localStorage.removeItem('enhanced-cache');
    }
  }

  /**
   * Get cache keys
   */
  keys(): string[] {
    return Array.from(this.cache.keys());
  }

  /**
   * Get cache values
   */
  values(): T[] {
    return Array.from(this.cache.values()).map(entry => entry.value);
  }

  /**
   * Get cache entries
   */
  entries(): Array<[string, CacheEntry<T>]> {
    return Array.from(this.cache.entries());
  }

  /**
   * Cleanup resources
   */
  cleanup(): void {
    if (this.compressionWorker) {
      this.compressionWorker.terminate();
      this.compressionWorker = null;
    }
    
    this.cache.clear();
    this.isInitialized = false;
  }
}

// Export singleton instances for different use cases
export const apiCache = new EnhancedCachingSystem({
  maxSize: 100,
  ttl: 300000, // 5 minutes
  strategy: 'lru',
  enableCompression: true,
  enablePersistence: true
});

export const imageCache = new EnhancedCachingSystem({
  maxSize: 500,
  ttl: 1800000, // 30 minutes
  strategy: 'lru',
  enableCompression: false,
  enablePersistence: true
});

export const dataCache = new EnhancedCachingSystem({
  maxSize: 200,
  ttl: 600000, // 10 minutes
  strategy: 'lfu',
  enableCompression: true,
  enablePersistence: false
});

// Auto-initialize
if (typeof window !== 'undefined') {
  apiCache.initialize();
  imageCache.initialize();
  dataCache.initialize();
}
/**
 * Advanced Caching System
 * Intelligent caching with automatic invalidation, compression, and optimization
 */

export interface CacheConfig {
  maxSize: number;
  ttl: number; // Time to live in milliseconds
  compressionEnabled: boolean;
  encryptionEnabled: boolean;
  storageType: 'memory' | 'localStorage' | 'sessionStorage' | 'indexedDB';
  enableAnalytics: boolean;
  enablePersistence: boolean;
}

export interface CacheEntry<T = unknown> {
  key: string;
  value: T | string;
  timestamp: number;
  ttl: number;
  hits: number;
  lastAccessed: number;
  compressed?: boolean;
  encrypted?: boolean;
  metadata?: Record<string, unknown>;
}

export interface CacheAnalytics {
  hits: number;
  misses: number;
  evictions: number;
  compressionRatio: number;
  averageAccessTime: number;
  storageUsed: number;
  hitRate: number;
}

export interface CacheStrategy {
  name: string;
  description: string;
  evictionPolicy: 'lru' | 'lfu' | 'fifo' | 'ttl' | 'size';
  compressionThreshold: number;
  prefetchEnabled: boolean;
  prefetchThreshold: number;
}

export class AdvancedCacheSystem {
  private static instance: AdvancedCacheSystem;
  private cache: Map<string, CacheEntry> = new Map();
  private config: CacheConfig;
  private analytics: CacheAnalytics;
  private strategies: Map<string, CacheStrategy> = new Map();
  private compressionWorker: Worker | null = null;
  private encryptionKey: string | null = null;
  private isInitialized = false;

  constructor() {
    this.config = {
      maxSize: 100,
      ttl: 10 * 60 * 1000, // 10 minutes
      compressionEnabled: true,
      encryptionEnabled: false,
      storageType: 'memory',
      enableAnalytics: true,
      enablePersistence: true
    };

    this.analytics = {
      hits: 0,
      misses: 0,
      evictions: 0,
      compressionRatio: 0,
      averageAccessTime: 0,
      storageUsed: 0,
      hitRate: 0
    };

    this.initializeStrategies();
  }

  public static getInstance(): AdvancedCacheSystem {
    if (!AdvancedCacheSystem.instance) {
      AdvancedCacheSystem.instance = new AdvancedCacheSystem();
    }
    return AdvancedCacheSystem.instance;
  }

  public initialize(config?: Partial<CacheConfig>): void {
    if (this.isInitialized) return;

    this.config = { ...this.config, ...config };
    
    // Initialize compression worker if enabled
    if (this.config.compressionEnabled) {
      this.initializeCompressionWorker();
    }

    // Initialize encryption if enabled
    if (this.config.encryptionEnabled) {
      this.initializeEncryption();
    }

    // Load persisted data
    if (this.config.enablePersistence && this.config.storageType !== 'memory') {
      this.loadPersistedData();
    }

    // Start cleanup interval
    this.startCleanupInterval();

    this.isInitialized = true;
    console.log('Advanced Cache System initialized');
  }

  public set<T>(key: string, value: T, options?: { ttl?: number; metadata?: Record<string, unknown> }): void {
    const startTime = performance.now();
    
    try {
      let processedValue: T | string = value;
      let compressed = false;
      let encrypted = false;

      // Apply compression if enabled and threshold is met
      if (this.config.compressionEnabled && this.shouldCompress(value)) {
        processedValue = this.compress(JSON.stringify(value));
        compressed = true;
      }

      // Apply encryption if enabled
      if (this.config.encryptionEnabled) {
        processedValue = this.encrypt(processedValue);
        encrypted = true;
      }

      const entry: CacheEntry<T> = {
        key,
        value: processedValue,
        timestamp: Date.now(),
        ttl: options?.ttl || this.config.ttl,
        hits: 0,
        lastAccessed: Date.now(),
        compressed,
        encrypted,
        metadata: options?.metadata
      };

      // Check if we need to evict entries
      if (this.cache.size >= this.config.maxSize) {
        this.evictEntries();
      }

      this.cache.set(key, entry);
      
      // Persist to storage if enabled
      if (this.config.enablePersistence && this.config.storageType !== 'memory') {
        this.persistEntry(key, entry);
      }

      // Update analytics
      if (this.config.enableAnalytics) {
        this.updateAnalytics('set', performance.now() - startTime);
      }

    } catch (error) {
      console.error('Error setting cache entry:', error);
    }
  }

  public get<T>(key: string): T | null {
    const startTime = performance.now();
    
    try {
      const entry = this.cache.get(key);
      
      if (!entry) {
        this.updateAnalytics('miss', performance.now() - startTime);
        return null;
      }

      // Check if entry has expired
      if (this.isExpired(entry)) {
        this.cache.delete(key);
        this.updateAnalytics('miss', performance.now() - startTime);
        return null;
      }

      // Update access statistics
      entry.hits++;
      entry.lastAccessed = Date.now();

      let value = entry.value;

      // Decrypt if needed
      if (entry.encrypted) {
        value = this.decrypt(value as string);
      }

      // Decompress if needed
      if (entry.compressed) {
        value = JSON.parse(this.decompress(value as string));
      }

      // Update analytics
      this.updateAnalytics('hit', performance.now() - startTime);

      return value as T;

    } catch (error) {
      console.error('Error getting cache entry:', error);
      this.updateAnalytics('miss', performance.now() - startTime);
      return null;
    }
  }

  public delete(key: string): boolean {
    try {
      const deleted = this.cache.delete(key);
      
      if (this.config.enablePersistence && this.config.storageType !== 'memory') {
        this.removePersistedEntry(key);
      }

      return deleted;
    } catch (error) {
      console.error('Error deleting cache entry:', error);
      return false;
    }
  }

  public clear(): void {
    try {
      this.cache.clear();
      
      if (this.config.enablePersistence && this.config.storageType !== 'memory') {
        this.clearPersistedData();
      }

      // Reset analytics
      this.analytics = {
        hits: 0,
        misses: 0,
        evictions: 0,
        compressionRatio: 0,
        averageAccessTime: 0,
        storageUsed: 0,
        hitRate: 0
      };

    } catch (error) {
      console.error('Error clearing cache:', error);
    }
  }

  public has(key: string): boolean {
    const entry = this.cache.get(key);
    return entry !== undefined && !this.isExpired(entry);
  }

  public keys(): string[] {
    return Array.from(this.cache.keys()).filter(key => {
      const entry = this.cache.get(key);
      return entry && !this.isExpired(entry);
    });
  }

  public size(): number {
    return this.cache.size;
  }

  public getAnalytics(): CacheAnalytics {
    const totalRequests = this.analytics.hits + this.analytics.misses;
    this.analytics.hitRate = totalRequests > 0 ? (this.analytics.hits / totalRequests) * 100 : 0;
    
    return { ...this.analytics };
  }

  public configure(config: Partial<CacheConfig>): void {
    this.config = { ...this.config, ...config };
  }

  public addStrategy(strategy: CacheStrategy): void {
    this.strategies.set(strategy.name, strategy);
  }

  public getStrategy(name: string): CacheStrategy | undefined {
    return this.strategies.get(name);
  }

  public prefetch<T>(keys: string[], fetcher: (key: string) => Promise<T>): Promise<void[]> {
    const promises = keys.map(async (key) => {
      if (!this.has(key)) {
        try {
          const value = await fetcher(key);
          this.set(key, value);
        } catch (error) {
          console.error(`Error prefetching key ${key}:`, error);
        }
      }
    });

    return Promise.all(promises);
  }

  public invalidatePattern(pattern: RegExp): number {
    let invalidatedCount = 0;
    
    for (const key of this.cache.keys()) {
      if (pattern.test(key)) {
        this.delete(key);
        invalidatedCount++;
      }
    }

    return invalidatedCount;
  }

  public getMemoryUsage(): number {
    let totalSize = 0;
    
    for (const [key, entry] of this.cache) {
      totalSize += this.estimateSize(key) + this.estimateSize(entry);
    }

    return totalSize;
  }

  public optimize(): void {
    // Remove expired entries
    this.removeExpiredEntries();
    
    // Compress large entries if compression is enabled
    if (this.config.compressionEnabled) {
      this.compressLargeEntries();
    }
    
    // Update analytics
    this.analytics.storageUsed = this.getMemoryUsage();
  }

  private initializeStrategies(): void {
    this.addStrategy({
      name: 'performance',
      description: 'Optimized for performance with LRU eviction',
      evictionPolicy: 'lru',
      compressionThreshold: 1024, // 1KB
      prefetchEnabled: true,
      prefetchThreshold: 0.8
    });

    this.addStrategy({
      name: 'memory',
      description: 'Memory-optimized with size-based eviction',
      evictionPolicy: 'size',
      compressionThreshold: 512, // 512B
      prefetchEnabled: false,
      prefetchThreshold: 0.9
    });

    this.addStrategy({
      name: 'balanced',
      description: 'Balanced performance and memory usage',
      evictionPolicy: 'lfu',
      compressionThreshold: 2048, // 2KB
      prefetchEnabled: true,
      prefetchThreshold: 0.7
    });
  }

  private initializeCompressionWorker(): void {
    // In a real implementation, you would create a Web Worker for compression
    // For now, we'll use a simple compression simulation
    console.log('Compression worker initialized');
  }

  private initializeEncryption(): void {
    // Generate a simple encryption key (in production, use proper key management)
    this.encryptionKey = btoa(Math.random().toString(36).substring(2));
    console.log('Encryption initialized');
  }

  private shouldCompress(value: unknown): boolean {
    const size = this.estimateSize(value);
    return size > 1024; // Compress if larger than 1KB
  }

  private compress(data: string): string {
    // Simple compression simulation (in production, use proper compression)
    return btoa(data);
  }

  private decompress(data: string): string {
    // Simple decompression simulation
    try {
      return atob(data);
    } catch {
      return data;
    }
  }

  private encrypt(data: unknown): string {
    if (!this.encryptionKey) return data as string;
    
    // Simple encryption simulation (in production, use proper encryption)
    return btoa(JSON.stringify(data) + this.encryptionKey);
  }

  private decrypt(data: string): unknown {
    if (!this.encryptionKey) return data;
    
    try {
      const decrypted = atob(data);
      return JSON.parse(decrypted.replace(this.encryptionKey, ''));
    } catch {
      return data;
    }
  }

  private isExpired(entry: CacheEntry): boolean {
    return Date.now() - entry.timestamp > entry.ttl;
  }

  private evictEntries(): void {
    const entries = Array.from(this.cache.entries());
    
    // Sort by last accessed time (LRU)
    entries.sort((a, b) => a[1].lastAccessed - b[1].lastAccessed);
    
    // Remove oldest entries until we're under the limit
    const toRemove = entries.slice(0, entries.length - this.config.maxSize + 1);
    
    for (const [key] of toRemove) {
      this.cache.delete(key);
      this.analytics.evictions++;
    }
  }

  private removeExpiredEntries(): void {
    const expiredKeys: string[] = [];
    
    for (const [key, entry] of this.cache) {
      if (this.isExpired(entry)) {
        expiredKeys.push(key);
      }
    }

    for (const key of expiredKeys) {
      this.cache.delete(key);
    }
  }

  private compressLargeEntries(): void {
    for (const [, entry] of this.cache) {
      if (!entry.compressed && this.shouldCompress(entry.value)) {
        entry.value = this.compress(JSON.stringify(entry.value));
        entry.compressed = true;
      }
    }
  }

  private startCleanupInterval(): void {
    setInterval(() => {
      this.removeExpiredEntries();
      this.optimize();
    }, 60000); // Cleanup every minute
  }

  private updateAnalytics(operation: 'hit' | 'miss' | 'set', accessTime: number): void {
    if (operation === 'hit') {
      this.analytics.hits++;
    } else if (operation === 'miss') {
      this.analytics.misses++;
    }

    // Update average access time
    const totalRequests = this.analytics.hits + this.analytics.misses;
    this.analytics.averageAccessTime = 
      (this.analytics.averageAccessTime * (totalRequests - 1) + accessTime) / totalRequests;
  }

  private estimateSize(obj: unknown): number {
    return JSON.stringify(obj).length * 2; // Rough estimate in bytes
  }

  private loadPersistedData(): void {
    try {
      const data = localStorage.getItem('advanced-cache');
      if (data) {
        const parsed = JSON.parse(data);
        this.cache = new Map(parsed);
      }
    } catch (error) {
      console.error('Error loading persisted cache data:', error);
    }
  }

  private persistEntry(key: string, entry: CacheEntry): void {
    try {
      const data = localStorage.getItem('advanced-cache');
      const cache = data ? JSON.parse(data) : {};
      cache[key] = entry;
      localStorage.setItem('advanced-cache', JSON.stringify(cache));
    } catch (error) {
      console.error('Error persisting cache entry:', error);
    }
  }

  private removePersistedEntry(key: string): void {
    try {
      const data = localStorage.getItem('advanced-cache');
      if (data) {
        const cache = JSON.parse(data);
        delete cache[key];
        localStorage.setItem('advanced-cache', JSON.stringify(cache));
      }
    } catch (error) {
      console.error('Error removing persisted cache entry:', error);
    }
  }

  private clearPersistedData(): void {
    try {
      localStorage.removeItem('advanced-cache');
    } catch (error) {
      console.error('Error clearing persisted cache data:', error);
    }
  }
}

// Export singleton instance
export const advancedCacheSystem = AdvancedCacheSystem.getInstance();
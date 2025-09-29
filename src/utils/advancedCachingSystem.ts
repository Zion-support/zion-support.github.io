/**
 * Advanced Caching System
 * Comprehensive caching solution with intelligent invalidation and optimization
 */

interface CacheEntry<T = any> {
  data: T;
  timestamp: number;
  expiresAt: number;
  accessCount: number;
  lastAccessed: number;
  size: number;
  tags: string[];
  priority: 'low' | 'medium' | 'high' | 'critical';
}

interface CacheStats {
  hits: number;
  misses: number;
  evictions: number;
  totalSize: number;
  entryCount: number;
  hitRate: number;
}

interface CacheConfig {
  maxSize: number; // Maximum cache size in bytes
  maxEntries: number; // Maximum number of entries
  defaultTTL: number; // Default time to live in milliseconds
  cleanupInterval: number; // Cleanup interval in milliseconds
  enableCompression: boolean;
  enableEncryption: boolean;
  enablePersistence: boolean;
}

class AdvancedCachingSystem {
  private cache: Map<string, CacheEntry> = new Map();
  private config: CacheConfig;
  private stats: CacheStats;
  private cleanupTimer: NodeJS.Timeout | null = null;
  private isInitialized: boolean = false;

  constructor(config: Partial<CacheConfig> = {}) {
    this.config = {
      maxSize: 50 * 1024 * 1024, // 50MB default
      maxEntries: 1000,
      defaultTTL: 5 * 60 * 1000, // 5 minutes default
      cleanupInterval: 60 * 1000, // 1 minute cleanup
      enableCompression: true,
      enableEncryption: false,
      enablePersistence: true,
      ...config
    };

    this.stats = {
      hits: 0,
      misses: 0,
      evictions: 0,
      totalSize: 0,
      entryCount: 0,
      hitRate: 0
    };
  }

  /**
   * Initialize the caching system
   */
  public initialize(): void {
    if (this.isInitialized) {
      console.warn('Advanced Caching System is already initialized');
      return;
    }

    this.isInitialized = true;
    console.log('🗄️ Advanced Caching System initialized');

    // Load persisted cache
    if (this.config.enablePersistence) {
      this.loadPersistedCache();
    }

    // Start cleanup timer
    this.startCleanupTimer();

    // Setup memory pressure monitoring
    this.setupMemoryPressureMonitoring();

    // Setup visibility change handler
    this.setupVisibilityChangeHandler();
  }

  /**
   * Set a value in the cache
   */
  public set<T>(
    key: string,
    data: T,
    options: {
      ttl?: number;
      tags?: string[];
      priority?: 'low' | 'medium' | 'high' | 'critical';
      compress?: boolean;
    } = {}
  ): void {
    const now = Date.now();
    const ttl = options.ttl || this.config.defaultTTL;
    const expiresAt = now + ttl;
    
    // Calculate size
    const serializedData = JSON.stringify(data);
    const size = new Blob([serializedData]).size;

    // Check if we need to evict entries
    this.ensureSpace(size);

    const entry: CacheEntry<T> = {
      data,
      timestamp: now,
      expiresAt,
      accessCount: 0,
      lastAccessed: now,
      size,
      tags: options.tags || [],
      priority: options.priority || 'medium'
    };

    this.cache.set(key, entry);
    this.stats.entryCount = this.cache.size;
    this.stats.totalSize += size;

    // Persist if enabled
    if (this.config.enablePersistence) {
      this.persistEntry(key, entry);
    }
  }

  /**
   * Get a value from the cache
   */
  public get<T>(key: string): T | null {
    const entry = this.cache.get(key);
    
    if (!entry) {
      this.stats.misses++;
      this.updateHitRate();
      return null;
    }

    const now = Date.now();

    // Check if expired
    if (now > entry.expiresAt) {
      this.cache.delete(key);
      this.stats.misses++;
      this.updateHitRate();
      return null;
    }

    // Update access statistics
    entry.accessCount++;
    entry.lastAccessed = now;
    this.stats.hits++;
    this.updateHitRate();

    return entry.data as T;
  }

  /**
   * Get or set a value (cache-aside pattern)
   */
  public async getOrSet<T>(
    key: string,
    factory: () => Promise<T>,
    options: {
      ttl?: number;
      tags?: string[];
      priority?: 'low' | 'medium' | 'high' | 'critical';
    } = {}
  ): Promise<T> {
    let value = this.get<T>(key);
    
    if (value === null) {
      value = await factory();
      this.set(key, value, options);
    }
    
    return value;
  }

  /**
   * Delete a specific key
   */
  public delete(key: string): boolean {
    const entry = this.cache.get(key);
    if (entry) {
      this.cache.delete(key);
      this.stats.totalSize -= entry.size;
      this.stats.entryCount = this.cache.size;
      return true;
    }
    return false;
  }

  /**
   * Invalidate cache entries by tags
   */
  public invalidateByTags(tags: string[]): number {
    let invalidatedCount = 0;
    
    for (const [key, entry] of this.cache.entries()) {
      if (entry.tags.some(tag => tags.includes(tag))) {
        this.cache.delete(key);
        this.stats.totalSize -= entry.size;
        invalidatedCount++;
      }
    }
    
    this.stats.entryCount = this.cache.size;
    return invalidatedCount;
  }

  /**
   * Clear all cache entries
   */
  public clear(): void {
    this.cache.clear();
    this.stats.totalSize = 0;
    this.stats.entryCount = 0;
    this.stats.evictions = 0;
    
    if (this.config.enablePersistence) {
      this.clearPersistedCache();
    }
  }

  /**
   * Get cache statistics
   */
  public getStats(): CacheStats {
    return { ...this.stats };
  }

  /**
   * Get cache entries info
   */
  public getEntriesInfo(): Array<{
    key: string;
    size: number;
    age: number;
    accessCount: number;
    priority: string;
    tags: string[];
  }> {
    const now = Date.now();
    return Array.from(this.cache.entries()).map(([key, entry]) => ({
      key,
      size: entry.size,
      age: now - entry.timestamp,
      accessCount: entry.accessCount,
      priority: entry.priority,
      tags: entry.tags
    }));
  }

  /**
   * Ensure there's enough space for new entry
   */
  private ensureSpace(requiredSize: number): void {
    // Check if we exceed max entries
    if (this.cache.size >= this.config.maxEntries) {
      this.evictLRU();
    }

    // Check if we exceed max size
    while (this.stats.totalSize + requiredSize > this.config.maxSize && this.cache.size > 0) {
      this.evictLRU();
    }
  }

  /**
   * Evict least recently used entry
   */
  private evictLRU(): void {
    let oldestKey = '';
    let oldestTime = Date.now();

    for (const [key, entry] of this.cache.entries()) {
      if (entry.lastAccessed < oldestTime) {
        oldestTime = entry.lastAccessed;
        oldestKey = key;
      }
    }

    if (oldestKey) {
      const entry = this.cache.get(oldestKey);
      if (entry) {
        this.cache.delete(oldestKey);
        this.stats.totalSize -= entry.size;
        this.stats.evictions++;
        this.stats.entryCount = this.cache.size;
      }
    }
  }

  /**
   * Update hit rate
   */
  private updateHitRate(): void {
    const total = this.stats.hits + this.stats.misses;
    this.stats.hitRate = total > 0 ? (this.stats.hits / total) * 100 : 0;
  }

  /**
   * Start cleanup timer
   */
  private startCleanupTimer(): void {
    if (this.cleanupTimer) {
      clearInterval(this.cleanupTimer);
    }

    this.cleanupTimer = setInterval(() => {
      this.cleanupExpiredEntries();
    }, this.config.cleanupInterval);
  }

  /**
   * Cleanup expired entries
   */
  private cleanupExpiredEntries(): void {
    const now = Date.now();
    let cleanedCount = 0;

    for (const [key, entry] of this.cache.entries()) {
      if (now > entry.expiresAt) {
        this.cache.delete(key);
        this.stats.totalSize -= entry.size;
        cleanedCount++;
      }
    }

    this.stats.entryCount = this.cache.size;

    if (cleanedCount > 0) {
      console.log(`🧹 Cache cleanup: removed ${cleanedCount} expired entries`);
    }
  }

  /**
   * Setup memory pressure monitoring
   */
  private setupMemoryPressureMonitoring(): void {
    if ('memory' in performance) {
      const checkMemory = () => {
        const memory = (performance as any).memory;
        const usagePercent = (memory.usedJSHeapSize / memory.jsHeapSizeLimit) * 100;
        
        if (usagePercent > 80) {
          // High memory usage, evict low priority entries
          this.evictLowPriorityEntries();
        }
      };

      // Check memory every 30 seconds
      setInterval(checkMemory, 30000);
    }
  }

  /**
   * Evict low priority entries when memory is high
   */
  private evictLowPriorityEntries(): void {
    const lowPriorityKeys: string[] = [];
    
    for (const [key, entry] of this.cache.entries()) {
      if (entry.priority === 'low') {
        lowPriorityKeys.push(key);
      }
    }

    // Evict oldest low priority entries
    lowPriorityKeys.sort((a, b) => {
      const entryA = this.cache.get(a);
      const entryB = this.cache.get(b);
      return (entryA?.lastAccessed || 0) - (entryB?.lastAccessed || 0);
    });

    // Evict up to 20% of low priority entries
    const toEvict = Math.ceil(lowPriorityKeys.length * 0.2);
    for (let i = 0; i < toEvict; i++) {
      const key = lowPriorityKeys[i];
      const entry = this.cache.get(key);
      if (entry) {
        this.cache.delete(key);
        this.stats.totalSize -= entry.size;
        this.stats.evictions++;
      }
    }

    this.stats.entryCount = this.cache.size;
    console.log(`💾 Memory pressure: evicted ${toEvict} low priority cache entries`);
  }

  /**
   * Setup visibility change handler
   */
  private setupVisibilityChangeHandler(): void {
    document.addEventListener('visibilitychange', () => {
      if (document.hidden) {
        // Page is hidden, persist cache
        if (this.config.enablePersistence) {
          this.persistCache();
        }
      } else {
        // Page is visible, load persisted cache
        if (this.config.enablePersistence) {
          this.loadPersistedCache();
        }
      }
    });
  }

  /**
   * Persist cache entry to localStorage
   */
  private persistEntry(key: string, entry: CacheEntry): void {
    try {
      const serialized = JSON.stringify({
        ...entry,
        data: JSON.stringify(entry.data)
      });
      localStorage.setItem(`cache_${key}`, serialized);
    } catch (error) {
      console.warn('Failed to persist cache entry:', error);
    }
  }

  /**
   * Load persisted cache from localStorage
   */
  private loadPersistedCache(): void {
    try {
      const keys = Object.keys(localStorage).filter(key => key.startsWith('cache_'));
      
      for (const key of keys) {
        const stored = localStorage.getItem(key);
        if (stored) {
          const entry = JSON.parse(stored);
          entry.data = JSON.parse(entry.data);
          
          // Check if not expired
          if (Date.now() < entry.expiresAt) {
            const cacheKey = key.replace('cache_', '');
            this.cache.set(cacheKey, entry);
            this.stats.totalSize += entry.size;
          } else {
            localStorage.removeItem(key);
          }
        }
      }
      
      this.stats.entryCount = this.cache.size;
    } catch (error) {
      console.warn('Failed to load persisted cache:', error);
    }
  }

  /**
   * Persist entire cache to localStorage
   */
  private persistCache(): void {
    try {
      for (const [key, entry] of this.cache.entries()) {
        this.persistEntry(key, entry);
      }
    } catch (error) {
      console.warn('Failed to persist cache:', error);
    }
  }

  /**
   * Clear persisted cache
   */
  private clearPersistedCache(): void {
    try {
      const keys = Object.keys(localStorage).filter(key => key.startsWith('cache_'));
      keys.forEach(key => localStorage.removeItem(key));
    } catch (error) {
      console.warn('Failed to clear persisted cache:', error);
    }
  }

  /**
   * Generate cache report
   */
  public generateReport(): string {
    const stats = this.getStats();
    const entries = this.getEntriesInfo();
    
    let report = `
🗄️ Advanced Caching System Report
================================
Hit Rate: ${stats.hitRate.toFixed(2)}%
Total Entries: ${stats.entryCount}
Total Size: ${(stats.totalSize / 1024 / 1024).toFixed(2)} MB
Cache Hits: ${stats.hits}
Cache Misses: ${stats.misses}
Evictions: ${stats.evictions}

📊 Top Accessed Entries:
`;

    entries
      .sort((a, b) => b.accessCount - a.accessCount)
      .slice(0, 10)
      .forEach((entry, index) => {
        report += `${index + 1}. ${entry.key}: ${entry.accessCount} accesses, ${(entry.size / 1024).toFixed(2)} KB\n`;
      });

    report += `\n📊 Entries by Priority:\n`;
    const priorityCounts = entries.reduce((acc, entry) => {
      acc[entry.priority] = (acc[entry.priority] || 0) + 1;
      return acc;
    }, {} as Record<string, number>);

    Object.entries(priorityCounts).forEach(([priority, count]) => {
      report += `- ${priority}: ${count}\n`;
    });

    return report;
  }

  /**
   * Cleanup resources
   */
  public cleanup(): void {
    if (this.cleanupTimer) {
      clearInterval(this.cleanupTimer);
      this.cleanupTimer = null;
    }

    if (this.config.enablePersistence) {
      this.persistCache();
    }

    this.cache.clear();
    this.isInitialized = false;
  }
}

// Export singleton instance
export const advancedCachingSystem = new AdvancedCachingSystem();
export type { CacheEntry, CacheStats, CacheConfig };
export { AdvancedCachingSystem };
export default AdvancedCachingSystem;
/**
 * Advanced Caching System
 * Intelligent caching with automatic invalidation and optimization
 */

export interface CacheEntry<T = unknown> {
  key: string;
  value: T;
  timestamp: number;
  expiresAt: number;
  accessCount: number;
  lastAccessed: number;
  size: number;
  tags: string[];
  priority: 'low' | 'medium' | 'high' | 'critical';
}

export interface CacheConfig {
  maxSize: number; // in bytes
  maxEntries: number;
  defaultTTL: number; // in milliseconds
  cleanupInterval: number; // in milliseconds
  enableCompression: boolean;
  enableEncryption: boolean;
}

export interface CacheStatistics {
  hits: number;
  misses: number;
  evictions: number;
  totalSize: number;
  entryCount: number;
  hitRate: number;
}

class AdvancedCachingSystem {
  private cache: Map<string, CacheEntry> = new Map();
  private config: CacheConfig;
  private statistics: CacheStatistics;
  private cleanupTimer: NodeJS.Timeout | null = null;
  private isMonitoring: boolean = false;

  constructor(config?: Partial<CacheConfig>) {
    this.config = {
      maxSize: 50 * 1024 * 1024, // 50MB
      maxEntries: 1000,
      defaultTTL: 5 * 60 * 1000, // 5 minutes
      cleanupInterval: 60 * 1000, // 1 minute
      enableCompression: true,
      enableEncryption: false,
      ...config
    };

    this.statistics = {
      hits: 0,
      misses: 0,
      evictions: 0,
      totalSize: 0,
      entryCount: 0,
      hitRate: 0
    };

    this.initializeCaching();
  }

  private initializeCaching(): void {
    if (typeof window === 'undefined') {
      return;
    }

    this.isMonitoring = true;
    this.startCleanupTimer();
    this.setupStoragePersistence();
    this.setupMemoryMonitoring();
  }

  private startCleanupTimer(): void {
    this.cleanupTimer = setInterval(() => {
      this.performCleanup();
    }, this.config.cleanupInterval);
  }

  private setupStoragePersistence(): void {
    // Persist cache to localStorage for critical entries
    window.addEventListener('beforeunload', () => {
      this.persistCriticalEntries();
    });

    // Restore cache from localStorage on load
    this.restoreFromStorage();
  }

  private setupMemoryMonitoring(): void {
    if ('memory' in performance) {
      const checkMemory = () => {
        const memory = (performance as { memory: { usedJSHeapSize: number } }).memory;
        const usedMemory = memory.usedJSHeapSize / 1024 / 1024; // MB
        
        if (usedMemory > 100) { // If using more than 100MB
          this.performAggressiveCleanup();
        }
      };

      setInterval(checkMemory, 30000); // Check every 30 seconds
    }
  }

  public set<T>(key: string, value: T, options?: {
    ttl?: number;
    tags?: string[];
    priority?: CacheEntry['priority'];
    compress?: boolean;
  }): void {
    const now = Date.now();
    const ttl = options?.ttl || this.config.defaultTTL;
    const tags = options?.tags || [];
    const priority = options?.priority || 'medium';
    
    // Calculate size
    const serialized = JSON.stringify(value);
    const size = new Blob([serialized]).size;
    
    // Compress if enabled and beneficial
    let finalValue = value;
    if (options?.compress && this.config.enableCompression && size > 1024) {
      finalValue = this.compressValue(value) as T;
    }

    const entry: CacheEntry<T> = {
      key,
      value: finalValue,
      timestamp: now,
      expiresAt: now + ttl,
      accessCount: 0,
      lastAccessed: now,
      size,
      tags,
      priority
    };

    // Check if we need to evict entries
    this.ensureSpaceForEntry(entry);
    
    this.cache.set(key, entry);
    this.updateStatistics();
  }

  public get<T>(key: string): T | null {
    const entry = this.cache.get(key);
    
    if (!entry) {
      this.statistics.misses++;
      this.updateHitRate();
      return null;
    }

    // Check if expired
    if (Date.now() > entry.expiresAt) {
      this.cache.delete(key);
      this.statistics.misses++;
      this.updateHitRate();
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
          // Only restore if not expired
          if (Date.now() <= entry.expiresAt) {
            this.cache.set(key, entry);
          }
        });
        
        this.updateStatistics();
      }
    } catch (error) {
      console.warn('Failed to restore cache from storage:', error);
    }
  }

  private getTotalSize(): number {
    let totalSize = 0;
    this.cache.forEach(entry => {
      totalSize += entry.size;
    });
    return totalSize;
  }

  private updateStatistics(): void {
    this.statistics.totalSize = this.getTotalSize();
    this.statistics.entryCount = this.cache.size;
  }

  private updateHitRate(): void {
    const total = this.statistics.hits + this.statistics.misses;
    this.statistics.hitRate = total > 0 ? this.statistics.hits / total : 0;
  }

  // Public API
  public getStatistics(): CacheStatistics {
    return { ...this.statistics };
  }

  public getCacheInfo(): {
    size: number;
    entries: number;
    config: CacheConfig;
  } {
    return {
      size: this.getTotalSize(),
      entries: this.cache.size,
      config: { ...this.config }
    };
  }

  public updateConfig(newConfig: Partial<CacheConfig>): void {
    this.config = { ...this.config, ...newConfig };
    
    // Restart cleanup timer if interval changed
    if (newConfig.cleanupInterval && this.cleanupTimer) {
      clearInterval(this.cleanupTimer);
      this.startCleanupTimer();
    }
  }

  public getEntriesByTag(tag: string): CacheEntry[] {
    const entries: CacheEntry[] = [];
    this.cache.forEach(entry => {
      if (entry.tags.includes(tag)) {
        entries.push(entry);
      }
    });
    return entries;
  }

  public cleanup(): void {
    if (this.cleanupTimer) {
      clearInterval(this.cleanupTimer);
      this.cleanupTimer = null;
    }
    
    this.isMonitoring = false;
    this.cache.clear();
  }
}

export const advancedCachingSystem = new AdvancedCachingSystem();
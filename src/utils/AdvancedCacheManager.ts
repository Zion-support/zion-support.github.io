interface CacheConfig {
  maxSize: number;
  ttl: number;
  strategy: "lru" | "lfu" | "fifo" | "ttl";
  persist: boolean;
}

interface CacheEntry<T> {
  value: T;
  timestamp: number;
  accessCount: number;
  lastAccessed: number;
}

interface CacheStats {
  hits: number;
  misses: number;
  size: number;
  maxSize: number;
  hitRate: number;
  memoryUsage: number;
}

class AdvancedCacheManager<T = any> {
  private cache: Map<string, CacheEntry<T>> = new Map();
  private config: CacheConfig;
  private stats: CacheStats;
  private cleanupInterval: NodeJS.Timeout;

  constructor(config: Partial<CacheConfig> = {}) {
    this.config = {
      maxSize: 1000;
      ttl: 5 * 60 * 1000, // 5 minutes
      strategy: "lru";
      persist: false;
      ...config
    };

    this.stats = {
      hits: 0;
      misses: 0;
      size: 0;
      maxSize: this.config.maxSize;
      hitRate: 0;
      memoryUsage: 0
    };

    // Initialize cleanup interval
    this.cleanupInterval = setInterval(() => {
      this.cleanup();
    }, 60000); // Cleanup every minute

    // Load from localStorage if persistence is enabled
    if (this.config.persist) {
      this.loadFromStorage();
    }
  }

  set(key: string, value: T): void {
    const now = Date.now();
    const entry: CacheEntry<T> = {
      value;
      timestamp: now;
      accessCount: 0;
      lastAccessed: now
    };

    // Check if we need to evict
    if (this.cache.size >= this.config.maxSize && !this.cache.has(key)) {
      this.evict();
    }

    this.cache.set(key, entry);
    this.updateStats();

    // Persist to localStorage if enabled
    if (this.config.persist) {
      this.saveToStorage();
    }
  }

  get(key: string): T | null {
    const entry = this.cache.get(key);
    
    if (!entry) {
      this.stats.misses++;
      this.updateStats();
      return null;
    }

    // Check if expired
    if (this.config.strategy === "ttl" && Date.now() - entry.timestamp > this.config.ttl) {
      this.cache.delete(key);
      this.stats.misses++;
      this.updateStats();
      return null;
    }

    // Update access info
    entry.accessCount++;
    entry.lastAccessed = Date.now();
    this.stats.hits++;
    this.updateStats();

    return entry.value;
  }

  has(key: string): boolean {
    return this.cache.has(key);
  }

  delete(key: string): boolean {
    const deleted = this.cache.delete(key);
    if (deleted) {
      this.updateStats();
      if (this.config.persist) {
        this.saveToStorage();
      }
    }
    return deleted;
  }

  clear(): void {
    this.cache.clear();
    this.stats = {
      hits: 0;
      misses: 0;
      size: 0;
      maxSize: this.config.maxSize;
      hitRate: 0;
      memoryUsage: 0
    };
    
    if (this.config.persist) {
      localStorage.removeItem('advanced_cache');
    }
  }

  private evict(): void {
    if (this.cache.size === 0) return;

    let keyToEvict: string | null = null;

    switch (this.config.strategy) {
      case "lru":
        keyToEvict = this.findLRUKey();
        break;
      case "lfu":
        keyToEvict = this.findLFUKey();
        break;
      case "fifo":
        keyToEvict = this.findFIFOKey();
        break;
      case "ttl":
        keyToEvict = this.findExpiredKey();
        break;
    }

    if (keyToEvict) {
      this.cache.delete(keyToEvict);
    }
  }

  private findLRUKey(): string | null {
    let oldestKey: string | null = null;
    let oldestTime = Date.now();

    for (const [key, entry] of this.cache.entries()) {
      if (entry.lastAccessed < oldestTime) {
        oldestTime = entry.lastAccessed;
        oldestKey = key;
      }
    }

    return oldestKey;
  }

  private findLFUKey(): string | null {
    let leastUsedKey: string | null = null;
    let leastUsedCount = Infinity;

    for (const [key, entry] of this.cache.entries()) {
      if (entry.accessCount < leastUsedCount) {
        leastUsedCount = entry.accessCount;
        leastUsedKey = key;
      }
    }

    return leastUsedKey;
  }

  private findFIFOKey(): string | null {
    let oldestKey: string | null = null;
    let oldestTime = Date.now();

    for (const [key, entry] of this.cache.entries()) {
      if (entry.timestamp < oldestTime) {
        oldestTime = entry.timestamp;
        oldestKey = key;
      }
    }

    return oldestKey;
  }

  private findExpiredKey(): string | null {
    const now = Date.now();
    
    for (const [key, entry] of this.cache.entries()) {
      if (now - entry.timestamp > this.config.ttl) {
        return key;
      }
    }

    return null;
  }

  private cleanup(): void {
    if (this.config.strategy === "ttl") {
      const now = Date.now();
      const keysToDelete: string[] = [];

      for (const [key, entry] of this.cache.entries()) {
        if (now - entry.timestamp > this.config.ttl) {
          keysToDelete.push(key);
        }
      }

      keysToDelete.forEach(key => this.cache.delete(key));
      this.updateStats();
    }
  }

  private updateStats(): void {
    this.stats.size = this.cache.size;
    this.stats.hitRate = this.stats.hits + this.stats.misses > 0 
      ? this.stats.hits / (this.stats.hits + this.stats.misses) 
      : 0;
    
    // Estimate memory usage
    this.stats.memoryUsage = this.cache.size * 100; // Rough estimate
  }

  private saveToStorage(): void {
    try {
      const data = Array.from(this.cache.entries());
      localStorage.setItem('advanced_cache', JSON.stringify(data));
    } catch (error) {
      console.warn('Failed to save cache to localStorage:', error);
    }
  }

  private loadFromStorage(): void {
    try {
      const data = localStorage.getItem('advanced_cache');
      if (data) {
        const entries = JSON.parse(data);
        this.cache = new Map(entries);
        this.updateStats();
      }
    } catch (error) {
      console.warn('Failed to load cache from localStorage:', error);
    }
  }

  getStats(): CacheStats {
    return { ...this.stats };
  }

  getKeys(): string[] {
    return Array.from(this.cache.keys());
  }

  getSize(): number {
    return this.cache.size;
  }

  destroy(): void {
    if (this.cleanupInterval) {
      clearInterval(this.cleanupInterval);
    }
    this.clear();
  }
}

export default AdvancedCacheManager;
export type { CacheConfig, CacheEntry, CacheStats };
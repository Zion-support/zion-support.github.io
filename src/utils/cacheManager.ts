/**
 * Cache Manager
 * Advanced caching system for the Zion Tech Group website
 */

interface CacheConfig {
  maxSize: number;
  ttl: number; // Time to live in milliseconds
  storageType: "memory" | "sessionStorage" | "localStorage";
  enableCompression: boolean;
  enableEncryption: boolean;
}

interface CacheEntry<T = unknown> {
  key: string;
  value: T;
  timestamp: number;
  ttl: number;
  hits: number;
  compressed?: boolean;
  encrypted?: boolean;
}

interface CacheStats {
  hits: number;
  misses: number;
  size: number;
  maxSize: number;
  hitRate: number;
  memoryUsage: number;
}

export class CacheManager {
  private static instance: CacheManager;
  private cache = new Map<string, CacheEntry>();
  private config: CacheConfig;
  private stats: CacheStats;
  private cleanupInterval?: NodeJS.Timeout;

  private constructor() {
    this.config = {
      maxSize: 100,
      ttl: 5 * 60 * 1000, // 5 minutes
      storageType: "memory",
      enableCompression: false,
      enableEncryption: false,
    };

    this.stats = {
      hits: 0,
      misses: 0,
      size: 0,
      maxSize: this.config.maxSize,
      hitRate: 0,
      memoryUsage: 0,
    };

    this.startCleanupInterval();
    this.loadFromStorage();
  }

  public static getInstance(): CacheManager {
    if (!CacheManager.instance) {
      CacheManager.instance = new CacheManager();
    }
    return CacheManager.instance;
  }

  public configure(config: Partial<CacheConfig>): void {
    this.config = { ...this.config, ...config };
    this.stats.maxSize = this.config.maxSize;
  }

  public set<T>(key: string, value: T, customTtl?: number): void {
    const entry: CacheEntry<T> = {
      key,
      value,
      timestamp: Date.now(),
      ttl: customTtl || this.config.ttl,
      hits: 0,
    };

    // Handle compression
    if (this.config.enableCompression) {
      entry.value = this.compress(value) as T;
      entry.compressed = true;
    }

    // Handle encryption
    if (this.config.enableEncryption) {
      entry.value = this.encrypt(JSON.stringify(value)) as T;
      entry.encrypted = true;
    }

    this.cache.set(key, entry);
    this.stats.size = this.cache.size;

    // Evict oldest entries if cache is full
    if (this.cache.size > this.config.maxSize) {
      this.evictOldest();
    }

    this.saveToStorage();
  }

  public get<T>(key: string): T | null {
    const entry = this.cache.get(key);

    if (!entry) {
      this.stats.misses++;
      this.updateHitRate();
      return null;
    }

    // Check if entry has expired
    if (this.isExpired(entry)) {
      this.cache.delete(key);
      this.stats.misses++;
      this.updateHitRate();
      return null;
    }

    // Update hit count
    entry.hits++;
    this.stats.hits++;
    this.updateHitRate();

    let value = entry.value as T;

    // Handle decryption
    if (entry.encrypted) {
      value = JSON.parse(this.decrypt(value as string)) as T;
    }

    // Handle decompression
    if (entry.compressed) {
      value = this.decompress(value as string) as T;
    }

    return value;
  }

  public has(key: string): boolean {
    const entry = this.cache.get(key);
    if (!entry || this.isExpired(entry)) {
      if (entry) {
        this.cache.delete(key);
      }
      return false;
    }
    return true;
  }

  public delete(key: string): boolean {
    const deleted = this.cache.delete(key);
    if (deleted) {
      this.stats.size = this.cache.size;
      this.saveToStorage();
    }
    return deleted;
  }

  public clear(): void {
    this.cache.clear();
    this.stats.size = 0;
    this.stats.hits = 0;
    this.stats.misses = 0;
    this.updateHitRate();
    this.saveToStorage();
  }

  public getStats(): CacheStats {
    return { ...this.stats };
  }

  public getKeys(): string[] {
    return Array.from(this.cache.keys());
  }

  public size(): number {
    return this.cache.size;
  }

  private isExpired(entry: CacheEntry): boolean {
    return Date.now() - entry.timestamp > entry.ttl;
  }

  private evictOldest(): void {
    const entries = Array.from(this.cache.entries());
    entries.sort(([, a], [, b]) => a.timestamp - b.timestamp);

    // Remove oldest 10% of entries
    const toRemove = Math.ceil(entries.length * 0.1);
    for (let i = 0; i < toRemove; i++) {
      this.cache.delete(entries[i][0]);
    }

    this.stats.size = this.cache.size;
  }

  private updateHitRate(): void {
    const total = this.stats.hits + this.stats.misses;
    this.stats.hitRate = total > 0 ? this.stats.hits / total : 0;
  }

  private startCleanupInterval(): void {
    this.cleanupInterval = setInterval(() => {
      this.cleanup();
    }, 60000); // Clean up every minute
  }

  private cleanup(): void {
    const now = Date.now();
    const expiredKeys: string[] = [];

    for (const [key, entry] of this.cache.entries()) {
      if (now - entry.timestamp > entry.ttl) {
        expiredKeys.push(key);
      }
    }

    expiredKeys.forEach((key) => this.cache.delete(key));

    if (expiredKeys.length > 0) {
      this.stats.size = this.cache.size;
      this.saveToStorage();
    }
  }

  private compress<T>(data: T): string {
    // Simple compression using JSON stringify
    // In a real implementation, you might use a compression library
    return JSON.stringify(data);
  }

  private decompress<T>(compressedData: string): T {
    // Simple decompression using JSON parse
    // In a real implementation, you might use a decompression library
    return JSON.parse(compressedData) as T;
  }

  private encrypt(data: string): string {
    // Simple base64 encoding as placeholder
    // In a real implementation, you would use proper encryption
    return btoa(data);
  }

  private decrypt(encryptedData: string): string {
    // Simple base64 decoding as placeholder
    // In a real implementation, you would use proper decryption
    return atob(encryptedData);
  }

  private saveToStorage(): void {
    if (this.config.storageType === "memory") return;

    try {
      const data = Array.from(this.cache.entries());
      const storage =
        this.config.storageType === "localStorage"
          ? localStorage
          : sessionStorage;
      storage.setItem("cache_data", JSON.stringify(data));
    } catch (error) {
      console.warn("Failed to save cache to storage:", error);
    }
  }

  private loadFromStorage(): void {
    if (this.config.storageType === "memory") return;

    try {
      const storage =
        this.config.storageType === "localStorage"
          ? localStorage
          : sessionStorage;
      const data = storage.getItem("cache_data");

      if (data) {
        const entries: Array<[string, CacheEntry]> = JSON.parse(data);
        this.cache = new Map(entries);
        this.stats.size = this.cache.size;
      }
    } catch (error) {
      console.warn("Failed to load cache from storage:", error);
    }
  }

  public destroy(): void {
    if (this.cleanupInterval) {
      clearInterval(this.cleanupInterval);
    }
    this.clear();
  }
}

// Export singleton instance
export const cacheManager = CacheManager.getInstance();

// Auto-configure for production
if (typeof window !== "undefined") {
  cacheManager.configure({
    maxSize: 200,
    ttl: 10 * 60 * 1000, // 10 minutes
    storageType: "localStorage",
    enableCompression: true,
    enableEncryption: false,
  });
}

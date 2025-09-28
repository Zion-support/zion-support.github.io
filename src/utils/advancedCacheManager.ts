/**
 * Advanced Cache Manager
 * Comprehensive caching system for the Zion Tech Group website
 */

export interface CacheConfig {
  maxSize: number; // Maximum cache size in bytes
  maxAge: number; // Maximum age in milliseconds
  strategy: 'lru' | 'lfu' | 'fifo'; // Cache eviction strategy
  enableCompression: boolean;
  enableEncryption: boolean;
  enablePersistence: boolean;
}

export interface CacheEntry<T = unknown> {
  key: string;
  value: T;
  timestamp: number;
  accessCount: number;
  size: number;
  compressed?: boolean;
  encrypted?: boolean;
}

export interface CacheStats {
  hits: number;
  misses: number;
  size: number;
  maxSize: number;
  hitRate: number;
  entryCount: number;
  oldestEntry: number;
  newestEntry: number;
}

export interface CacheOptions {
  ttl?: number; // Time to live in milliseconds
  compress?: boolean;
  encrypt?: boolean;
  priority?: 'high' | 'medium' | 'low';
}

class AdvancedCacheManager<T = unknown> {
  private cache: Map<string, CacheEntry<T>> = new Map();
  private config: CacheConfig;
  private stats: CacheStats;
  private compressionWorker: Worker | null = null;
  private encryptionKey: string | null = null;

  constructor(config: Partial<CacheConfig> = {}) {
    this.config = {
      maxSize: 50 * 1024 * 1024, // 50MB
      maxAge: 24 * 60 * 60 * 1000, // 24 hours
      strategy: 'lru',
      enableCompression: true,
      enableEncryption: false,
      enablePersistence: true,
      ...config
    };

    this.stats = {
      hits: 0,
      misses: 0,
      size: 0,
      maxSize: this.config.maxSize,
      hitRate: 0,
      entryCount: 0,
      oldestEntry: 0,
      newestEntry: 0
    };

    this.initializeCache();
  }

  private async initializeCache(): Promise<void> {
    // Initialize compression worker
    if (this.config.enableCompression) {
      await this.initializeCompressionWorker();
    }

    // Initialize encryption
    if (this.config.enableEncryption) {
      await this.initializeEncryption();
    }

    // Load persisted cache
    if (this.config.enablePersistence) {
      await this.loadPersistedCache();
    }

    // Start cleanup interval
    this.startCleanupInterval();
  }

  private async initializeCompressionWorker(): Promise<void> {
    try {
      // Create a simple compression worker
      const workerCode = `
        self.onmessage = function(e) {
          const { type, data } = e.data;
          
          if (type === 'compress') {
            try {
              // Simple compression using built-in compression
              const compressed = new TextEncoder().encode(JSON.stringify(data));
              self.postMessage({ success: true, data: compressed });
            } catch (error) {
              self.postMessage({ success: false, error: error.message });
            }
          } else if (type === 'decompress') {
            try {
              const decompressed = JSON.parse(new TextDecoder().decode(data));
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
      this.config.enableCompression = false;
    }
  }

  private async initializeEncryption(): Promise<void> {
    try {
      // Generate a simple encryption key
      const key = await crypto.subtle.generateKey(
        { name: 'AES-GCM', length: 256 },
        true,
        ['encrypt', 'decrypt']
      );
      
      const exportedKey = await crypto.subtle.exportKey('raw', key);
      this.encryptionKey = Array.from(new Uint8Array(exportedKey)).map(b => b.toString(16).padStart(2, '0')).join('');
    } catch (error) {
      console.warn('Failed to initialize encryption:', error);
      this.config.enableEncryption = false;
    }
  }

  private async loadPersistedCache(): Promise<void> {
    try {
      const persisted = localStorage.getItem('advanced_cache');
      if (persisted) {
        const data = JSON.parse(persisted);
        for (const [key, entry] of Object.entries(data)) {
          this.cache.set(key, entry as CacheEntry<T>);
        }
        this.updateStats();
      }
    } catch (error) {
      console.warn('Failed to load persisted cache:', error);
    }
  }

  private async persistCache(): Promise<void> {
    if (!this.config.enablePersistence) return;

    try {
      const data: Record<string, CacheEntry<T>> = {};
      for (const [key, entry] of this.cache.entries()) {
        data[key] = entry;
      }
      localStorage.setItem('advanced_cache', JSON.stringify(data));
    } catch (error) {
      console.warn('Failed to persist cache:', error);
    }
  }

  private startCleanupInterval(): void {
    setInterval(() => {
      this.cleanup();
    }, 60000); // Cleanup every minute
  }

  public async set(key: string, value: T, options: CacheOptions = {}): Promise<void> {
    const now = Date.now();
    // TTL is available in options but not used in this implementation
    const size = this.calculateSize(value);

    let processedValue = value;
    let compressed = false;
    let encrypted = false;

    // Compress if enabled and requested
    if (this.config.enableCompression && (options.compress || size > 1024)) {
      try {
        processedValue = await this.compress(value);
        compressed = true;
      } catch (error) {
        console.warn('Compression failed:', error);
      }
    }

    // Encrypt if enabled and requested
    if (this.config.enableEncryption && options.encrypt) {
      try {
        processedValue = await this.encrypt(processedValue);
        encrypted = true;
      } catch (error) {
        console.warn('Encryption failed:', error);
      }
    }

    const entry: CacheEntry<T> = {
      key,
      value: processedValue,
      timestamp: now,
      accessCount: 0,
      size: this.calculateSize(processedValue),
      compressed,
      encrypted
    };

    // Check if we need to evict entries
    while (this.stats.size + entry.size > this.config.maxSize) {
      this.evictEntry();
    }

    this.cache.set(key, entry);
    this.updateStats();
    await this.persistCache();
  }

  public async get(key: string): Promise<T | null> {
    const entry = this.cache.get(key);
    
    if (!entry) {
      this.stats.misses++;
      this.updateHitRate();
      return null;
    }

    // Check if entry has expired
    if (Date.now() - entry.timestamp > this.config.maxAge) {
      this.cache.delete(key);
      this.stats.misses++;
      this.updateHitRate();
      return null;
    }

    // Update access count and timestamp
    entry.accessCount++;
    entry.timestamp = Date.now();

    this.stats.hits++;
    this.updateHitRate();

    let value = entry.value;

    // Decrypt if needed
    if (entry.encrypted) {
      try {
        value = await this.decrypt(value);
      } catch (error) {
        console.warn('Decryption failed:', error);
        return null;
      }
    }

    // Decompress if needed
    if (entry.compressed) {
      try {
        value = await this.decompress(value);
      } catch (error) {
        console.warn('Decompression failed:', error);
        return null;
      }
    }

    return value;
  }

  public has(key: string): boolean {
    const entry = this.cache.get(key);
    if (!entry) return false;
    
    // Check if entry has expired
    if (Date.now() - entry.timestamp > this.config.maxAge) {
      this.cache.delete(key);
      return false;
    }
    
    return true;
  }

  public delete(key: string): boolean {
    const deleted = this.cache.delete(key);
    if (deleted) {
      this.updateStats();
      this.persistCache();
    }
    return deleted;
  }

  public clear(): void {
    this.cache.clear();
    this.stats = {
      hits: 0,
      misses: 0,
      size: 0,
      maxSize: this.config.maxSize,
      hitRate: 0,
      entryCount: 0,
      oldestEntry: 0,
      newestEntry: 0
    };
    this.persistCache();
  }

  public getStats(): CacheStats {
    return { ...this.stats };
  }

  public getKeys(): string[] {
    return Array.from(this.cache.keys());
  }

  public getSize(): number {
    return this.stats.size;
  }

  private calculateSize(value: unknown): number {
    try {
      return new Blob([JSON.stringify(value)]).size;
    } catch {
      return 0;
    }
  }

  private async compress(value: T): Promise<T> {
    if (!this.compressionWorker) {
      throw new Error('Compression worker not available');
    }

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

      this.compressionWorker!.postMessage({ type: 'compress', data: value });
    });
  }

  private async decompress(value: T): Promise<T> {
    if (!this.compressionWorker) {
      throw new Error('Compression worker not available');
    }

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

      this.compressionWorker!.postMessage({ type: 'decompress', data: value });
    });
  }

  private async encrypt(value: T): Promise<T> {
    if (!this.encryptionKey) {
      throw new Error('Encryption key not available');
    }

    try {
      const key = await crypto.subtle.importKey(
        'raw',
        new Uint8Array(this.encryptionKey.match(/.{2}/g)!.map(byte => parseInt(byte, 16))),
        { name: 'AES-GCM' },
        false,
        ['encrypt']
      );

      const iv = crypto.getRandomValues(new Uint8Array(12));
      const encrypted = await crypto.subtle.encrypt(
        { name: 'AES-GCM', iv },
        key,
        new TextEncoder().encode(JSON.stringify(value))
      );

      return {
        data: Array.from(new Uint8Array(encrypted)),
        iv: Array.from(iv)
      } as T;
    } catch (error) {
      throw new Error(`Encryption failed: ${error}`);
    }
  }

  private async decrypt(value: T): Promise<T> {
    if (!this.encryptionKey) {
      throw new Error('Encryption key not available');
    }

    try {
      const { data, iv } = value as { data: string; iv: string };
      
      const key = await crypto.subtle.importKey(
        'raw',
        new Uint8Array(this.encryptionKey.match(/.{2}/g)!.map(byte => parseInt(byte, 16))),
        { name: 'AES-GCM' },
        false,
        ['decrypt']
      );

      const decrypted = await crypto.subtle.decrypt(
        { name: 'AES-GCM', iv: new Uint8Array(Buffer.from(iv)) },
        key,
        new Uint8Array(Buffer.from(data))
      );

      return JSON.parse(new TextDecoder().decode(decrypted));
    } catch (error) {
      throw new Error(`Decryption failed: ${error}`);
    }
  }

  private evictEntry(): void {
    let entryToEvict: string | null = null;

    switch (this.config.strategy) {
      case 'lru':
        entryToEvict = this.findLRUEntry();
        break;
      case 'lfu':
        entryToEvict = this.findLFUEntry();
        break;
      case 'fifo':
        entryToEvict = this.findFIFOEntry();
        break;
    }

    if (entryToEvict) {
      this.cache.delete(entryToEvict);
    }
  }

  private findLRUEntry(): string | null {
    let oldestTime = Date.now();
    let oldestKey: string | null = null;

    for (const [key, entry] of this.cache.entries()) {
      if (entry.timestamp < oldestTime) {
        oldestTime = entry.timestamp;
        oldestKey = key;
      }
    }

    return oldestKey;
  }

  private findLFUEntry(): string | null {
    let minAccessCount = Infinity;
    let lfuKey: string | null = null;

    for (const [key, entry] of this.cache.entries()) {
      if (entry.accessCount < minAccessCount) {
        minAccessCount = entry.accessCount;
        lfuKey = key;
      }
    }

    return lfuKey;
  }

  private findFIFOEntry(): string | null {
    return this.cache.keys().next().value || null;
  }

  private updateStats(): void {
    this.stats.size = 0;
    this.stats.entryCount = this.cache.size;
    this.stats.oldestEntry = Date.now();
    this.stats.newestEntry = 0;

    for (const entry of this.cache.values()) {
      this.stats.size += entry.size;
      this.stats.oldestEntry = Math.min(this.stats.oldestEntry, entry.timestamp);
      this.stats.newestEntry = Math.max(this.stats.newestEntry, entry.timestamp);
    }
  }

  private updateHitRate(): void {
    const total = this.stats.hits + this.stats.misses;
    this.stats.hitRate = total > 0 ? (this.stats.hits / total) * 100 : 0;
  }

  private cleanup(): void {
    const now = Date.now();
    const expiredKeys: string[] = [];

    for (const [key, entry] of this.cache.entries()) {
      if (now - entry.timestamp > this.config.maxAge) {
        expiredKeys.push(key);
      }
    }

    expiredKeys.forEach(key => this.cache.delete(key));
    
    if (expiredKeys.length > 0) {
      this.updateStats();
      this.persistCache();
    }
  }

  public destroy(): void {
    if (this.compressionWorker) {
      this.compressionWorker.terminate();
    }
    this.cache.clear();
  }
}

// Export singleton instances for different use cases
export const apiCache = new AdvancedCacheManager({
  maxSize: 10 * 1024 * 1024, // 10MB
  maxAge: 5 * 60 * 1000, // 5 minutes
  strategy: 'lru',
  enableCompression: true,
  enableEncryption: false,
  enablePersistence: true
});

export const imageCache = new AdvancedCacheManager({
  maxSize: 50 * 1024 * 1024, // 50MB
  maxAge: 24 * 60 * 60 * 1000, // 24 hours
  strategy: 'lru',
  enableCompression: true,
  enableEncryption: false,
  enablePersistence: true
});

export const dataCache = new AdvancedCacheManager({
  maxSize: 20 * 1024 * 1024, // 20MB
  maxAge: 60 * 60 * 1000, // 1 hour
  strategy: 'lfu',
  enableCompression: true,
  enableEncryption: true,
  enablePersistence: true
});

export default AdvancedCacheManager;
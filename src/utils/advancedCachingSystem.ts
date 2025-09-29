/**
 * Advanced Caching System
 * Provides intelligent caching mechanisms for improved performance
 */

export interface CacheConfig {
  maxSize: number;
  ttl: number;
  strategy: 'lru' | 'lfu' | 'fifo';
}

export class AdvancedCachingSystem {
  private cache: Map<string, { value: unknown; timestamp: number; accessCount: number }> = new Map();
  private config: CacheConfig;

  constructor(config: CacheConfig) {
    this.config = config;
  }

  set(key: string, value: unknown): void {
    const now = Date.now();
    this.cache.set(key, {
      value,
      timestamp: now,
      accessCount: 0,
    });
    this.cleanup();
  }

  get(key: string): unknown | null {
    const item = this.cache.get(key);
    if (!item) return null;

    const now = Date.now();
    if (now - item.timestamp > this.config.ttl) {
      this.cache.delete(key);
      return null;
    }

    item.accessCount++;
    return item.value;
  }

  private cleanup(): void {
    if (this.cache.size <= this.config.maxSize) return;

    const entries = Array.from(this.cache.entries());
    entries.sort((a, b) => {
      switch (this.config.strategy) {
        case 'lru':
          return a[1].timestamp - b[1].timestamp;
        case 'lfu':
          return a[1].accessCount - b[1].accessCount;
        case 'fifo':
          return a[1].timestamp - b[1].timestamp;
        default:
          return 0;
      }
    });

    const toDelete = entries.slice(0, entries.length - this.config.maxSize);
    toDelete.forEach(([key]) => this.cache.delete(key));
  }

  clear(): void {
    this.cache.clear();
  }

  size(): number {
    return this.cache.size;
  }
}

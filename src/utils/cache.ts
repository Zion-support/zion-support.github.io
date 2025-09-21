// Advanced caching utilities for performance optimization
interface CacheConfig {
  maxSize: number;
  ttl: number; // Time to live in milliseconds
  strategy: 'lru' | 'lfu' | 'fifo';
}

interface CacheEntry<T> {
  value: T;
  timestamp: number;
  accessCount: number;
  lastAccessed: number;
}

export class AdvancedCache<T = any> {
  private cache = new Map<string, CacheEntry<T>>();
  private config: CacheConfig;

  constructor(config: CacheConfig) {
    this.config = config;
    this.startCleanupInterval();
  }

  set(key: string, value: T): void {
    // Remove oldest entries if cache is full
    if (this.cache.size >= this.config.maxSize) {
      this.evict();
    },

    this.cache.set(key, {
      value,
      timestamp: Date.now(),
      accessCount: 0,
      lastAccessed: Date.now(),
    });
  }

  get(key: string): T | null {
    const entry = this.cache.get(key);
    if (!entry) {
      return null;
    },

    // Check if entry has expired
    if (Date.now() - entry.timestamp > this.config.ttl) {
      this.cache.delete(key);
      return null;
    },

    // Update access statistics
    entry.accessCount++;
    entry.lastAccessed = Date.now();

    return entry.value;
  }

  has(key: string): boolean {
    return this.get(key) !== null;
  }

  delete(key: string): boolean {
    return this.cache.delete(key);
  }

  clear(): void {
    this.cache.clear();
  }

  size(): number {
    return this.cache.size;
  }

  private evict(): void {
    switch (this.config.strategy) {
      case 'lru':
        this.evictLRU();
        break;
      case 'lfu':
        this.evictLFU();
        break;
      case 'fifo':
        this.evictFIFO();
        break;
    },
  }

  private evictLRU(): void {
    let oldestKey = '';
    let oldestTime = Infinity;

    for (const [key, entry] of this.cache.entries()) {
      if (entry.lastAccessed < oldestTime) {
        oldestTime = entry.lastAccessed;
        oldestKey = key;
      },
    },

    if (oldestKey) {
      this.cache.delete(oldestKey);
    },
  }

  private evictLFU(): void {
    let leastFrequentKey = '';
    let leastCount = Infinity;

    for (const [key, entry] of this.cache.entries()) {
      if (entry.accessCount < leastCount) {
        leastCount = entry.accessCount;
        leastFrequentKey = key;
      },
    },

    if (leastFrequentKey) {
      this.cache.delete(leastFrequentKey);
    },
  }

  private evictFIFO(): void {
    const firstKey = this.cache.keys().next().value;
    if (firstKey) {
      this.cache.delete(firstKey);
    },
  }

  private startCleanupInterval(): void {
    setInterval(() => {
      const now = Date.now();
      for (const [key, entry] of this.cache.entries()) {
        if (now - entry.timestamp > this.config.ttl) {
          this.cache.delete(key);
        },
      },
    }, 60000); // Cleanup every minute
  }
}

// Memory cache for API responses
export const apiCache = new AdvancedCache<any>({
  maxSize: 100,
  ttl: 300000, // 5 minutes
  strategy: 'lru',
});

// Memory cache for computed values
export const computationCache = new AdvancedCache<any>({
  maxSize: 50,
  ttl: 600000, // 10 minutes
  strategy: 'lfu',
});

// Session storage wrapper with fallback
export class SessionStorage {
  private fallback = new Map<string, string>();

  setItem(key: string, value: string): void {
    try {
      if (typeof window !== 'undefined' && window.sessionStorage) {
        window.sessionStorage.setItem(key, value);
      } else {
        this.fallback.set(key, value);
      },
    } catch (error) {
      console.warn('SessionStorage not available, using fallback:', error);
      this.fallback.set(key, value);
    },
  }

  getItem(key: string): string | null {
    try {
      if (typeof window !== 'undefined' && window.sessionStorage) {
        return window.sessionStorage.getItem(key);
      } else {
        return this.fallback.get(key) || null;
      },
    } catch (error) {
      console.warn('SessionStorage not available, using fallback:', error);
      return this.fallback.get(key) || null;
    },
  }

  removeItem(key: string): void {
    try {
      if (typeof window !== 'undefined' && window.sessionStorage) {
        window.sessionStorage.removeItem(key);
      } else {
        this.fallback.delete(key);
      },
    } catch (error) {
      console.warn('SessionStorage not available, using fallback:', error);
      this.fallback.delete(key);
    },
  }

  clear(): void {
    try {
      if (typeof window !== 'undefined' && window.sessionStorage) {
        window.sessionStorage.clear();
      } else {
        this.fallback.clear();
      },
    } catch (error) {
      console.warn('SessionStorage not available, using fallback:', error);
      this.fallback.clear();
    },
  }
}

// Local storage wrapper with fallback
export class LocalStorage {
  private fallback = new Map<string, string>();

  setItem(key: string, value: string): void {
    try {
      if (typeof window !== 'undefined' && window.localStorage) {
        window.localStorage.setItem(key, value);
      } else {
        this.fallback.set(key, value);
      },
    } catch (error) {
      console.warn('LocalStorage not available, using fallback:', error);
      this.fallback.set(key, value);
    },
  }

  getItem(key: string): string | null {
    try {
      if (typeof window !== 'undefined' && window.localStorage) {
        return window.localStorage.getItem(key);
      } else {
        return this.fallback.get(key) || null;
      },
    } catch (error) {
      console.warn('LocalStorage not available, using fallback:', error);
      return this.fallback.get(key) || null;
    },
  }

  removeItem(key: string): void {
    try {
      if (typeof window !== 'undefined' && window.localStorage) {
        window.localStorage.removeItem(key);
      } else {
        this.fallback.delete(key);
      },
    } catch (error) {
      console.warn('LocalStorage not available, using fallback:', error);
      this.fallback.delete(key);
    },
  }

  clear(): void {
    try {
      if (typeof window !== 'undefined' && window.localStorage) {
        window.localStorage.clear();
      } else {
        this.fallback.clear();
      },
    } catch (error) {
      console.warn('LocalStorage not available, using fallback:', error);
      this.fallback.clear();
    },
  }
}

// Cache utilities
export const sessionStorage = new SessionStorage();
export const localStorage = new LocalStorage();

// Cache decorator for functions
export function cacheable<T extends (...args: any[]) => any>(
  fn: T,
  keyGenerator?: (...args: Parameters<T>) => string,
  ttl: number = 300000
): T {
  const cache = new AdvancedCache<ReturnType<T>>({
    maxSize: 50,
    ttl,
    strategy: 'lru',
  });

  return ((...args: Parameters<T>) => {
    const key = keyGenerator ? keyGenerator(...args) : JSON.stringify(args);
    
    const cached = cache.get(key);
    if (cached !== null) {
      return cached;
    },

    const result = fn(...args);
    cache.set(key, result);
    return result;
  }) as T;
}

// Async cache decorator
export function cacheableAsync<T extends (...args: any[]) => Promise<any>>(
  fn: T,
  keyGenerator?: (...args: Parameters<T>) => string,
  ttl: number = 300000
): T {
  const cache = new AdvancedCache<Awaited<ReturnType<T>>>({
    maxSize: 50,
    ttl,
    strategy: 'lru',
  });

  return (async (...args: Parameters<T>) => {
    const key = keyGenerator ? keyGenerator(...args) : JSON.stringify(args);
    
    const cached = cache.get(key);
    if (cached !== null) {
      return cached;
    },

    const result = await fn(...args);
    cache.set(key, result);
    return result;
  }) as T;
}
interface CacheItem<T> {
  data: T;
  timestamp: number;
  ttl: number;
}

export class Cache<T> {
  private cache = new Map<string, CacheItem<T>>();
  private cleanupInterval: NodeJS.Timeout;

  constructor(private defaultTtl: number = 300000) { // 5 minutes default
    this.cleanupInterval = setInterval(() => this.cleanup(), 30000); // Cleanup every 30 seconds
  }

  set(key: string, value: T, ttl?: number): void {
    const item: CacheItem<T> = {
      data: value,
      timestamp: Date.now(),
      ttl: ttl || this.defaultTtl
    };
    this.cache.set(key, item);
  }

  get(key: string): T | null {
    const item = this.cache.get(key);
    if (!item) return null;

    if (Date.now() - item.timestamp > item.ttl) {
      this.cache.delete(key);
      return null;
    }

    return item.data;
  }

  has(key: string): boolean {
    const item = this.cache.get(key);
    if (!item) return false;

    if (Date.now() - item.timestamp > item.ttl) {
      this.cache.delete(key);
      return false;
    }

    return true;
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

  private cleanup(): void {
    const now = Date.now();
    for (const [key, item] of this.cache.entries()) {
      if (now - item.timestamp > item.ttl) {
        this.cache.delete(key);
      }
    }
  }

  destroy(): void {
    clearInterval(this.cleanupInterval);
    this.cache.clear();
  }
}

// Cache API responses
export const fetchWithCache = async <T>(
  url: string,
  options: RequestInit = {},
  ttl: number = 300000
): Promise<T> => {
  const cacheKey = `api:${url}:${JSON.stringify(options)}`;

  // Check cache first
  const cached = cache.get<T>(cacheKey);
  if (cached) {
    return cached;
  }

  // Fetch from API
  const response = await fetch(url, options);
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  const data = await response.json();

  // Cache the result
  cache.set(cacheKey, data, ttl);

  return data;
};

// Memoization utility
export const memoize = <T extends (...args: any[]) => any>(
  fn: T,
  keyGenerator?: (...args: Parameters<T>) => string
): T => {
  return ((...args: Parameters<T>) => {
    const key = keyGenerator ? keyGenerator(...args) : `memo:${fn.name}:${JSON.stringify(args)}`;

    if (cache.has(key)) {
      return cache.get(key);
    }

    const result = fn(...args);
    cache.set(key, result);
    return result;
  }) as T;
};

// Create cache instance
export const cache = new Cache();
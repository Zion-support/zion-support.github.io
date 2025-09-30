// Advanced caching utilities for better performance
export class AdvancedCaching {
  private static cache = new Map<string, { data: any; timestamp: number; ttl: number }>();
  private static maxSize = 1000; // Maximum cache entries

  static set(key: string, data: any, ttl: number = 300000) { // 5 minutes default
    // Remove oldest entries if cache is full
    if (this.cache.size >= this.maxSize) {
      const oldestKey = this.cache.keys().next().value;
      this.cache.delete(oldestKey);
    }

    this.cache.set(key, {
      data,
      timestamp: Date.now(),
      ttl
    });
  }

  static get(key: string): any | null {
    const entry = this.cache.get(key);
    if (!entry) return null;

    // Check if entry has expired
    if (Date.now() - entry.timestamp > entry.ttl) {
      this.cache.delete(key);
      return null;
    }

    return entry.data;
  }

  static has(key: string): boolean {
    const entry = this.cache.get(key);
    if (!entry) return false;

    // Check if entry has expired
    if (Date.now() - entry.timestamp > entry.ttl) {
      this.cache.delete(key);
      return false;
    }

    return true;
  }

  static clear(): void {
    this.cache.clear();
  }

  static size(): number {
    return this.cache.size;
  }

  static cleanup(): void {
    const now = Date.now();
    for (const [key, entry] of this.cache.entries()) {
      if (now - entry.timestamp > entry.ttl) {
        this.cache.delete(key);
      }
    }
  }
}

// Service Worker cache management
export class ServiceWorkerCache {
  static async cacheAssets(urls: string[]): Promise<void> {
    if ('serviceWorker' in navigator && 'caches' in window) {
      const cache = await caches.open('zion-assets-v1');
      await cache.addAll(urls);
    }
  }

  static async getCachedResponse(url: string): Promise<Response | null> {
    if ('caches' in window) {
      const cache = await caches.open('zion-assets-v1');
      return await cache.match(url);
    }
    return null;
  }

  static async clearCache(): Promise<void> {
    if ('caches' in window) {
      const cacheNames = await caches.keys();
      await Promise.all(
        cacheNames.map(cacheName => caches.delete(cacheName))
      );
    }
  }
}

// Image lazy loading with caching
export class ImageCache {
  private static imageCache = new Map<string, string>();

  static async loadImage(src: string): Promise<string> {
    if (this.imageCache.has(src)) {
      return this.imageCache.get(src)!;
    }

    return new Promise((resolve, reject) => {
      const img = new Image();
      img.onload = () => {
        this.imageCache.set(src, src);
        resolve(src);
      };
      img.onerror = reject;
      img.src = src;
    });
  }

  static preloadImages(urls: string[]): Promise<string[]> {
    return Promise.all(urls.map(url => this.loadImage(url)));
  }
}

// API response caching
export class APICache {
  static async fetchWithCache(url: string, options: RequestInit = {}, ttl: number = 300000): Promise<Response> {
    const cacheKey = `api:${url}:${JSON.stringify(options)}`;
    
    // Check cache first
    const cached = AdvancedCaching.get(cacheKey);
    if (cached) {
      return new Response(JSON.stringify(cached), {
        status: 200,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    // Fetch from API
    const response = await fetch(url, options);
    if (response.ok) {
      const data = await response.json();
      AdvancedCaching.set(cacheKey, data, ttl);
    }

    return response;
  }
}
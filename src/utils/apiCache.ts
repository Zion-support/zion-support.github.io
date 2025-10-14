'use client';
/**
 * API Caching Utility
 * Provides caching, deduplication, and retry logic for API calls
 */
import { CacheManager, CacheStorage } from './cacheManager';
interface ApiCacheConfig {}
  ttl?: number;
  maxRetries?: number;
  retryDelay?: number;
  deduplicate?: boolean;
}
interface PendingRequest<T> {}
  promise: Promise<T>;,
  timestamp: number;
}
/**
 * API Cache Manager with request deduplication
 */
export class ApiCache {}
  private cache: CacheManager;,
  private pendingRequests: Map<string, PendingRequest<unknown>> = new Map();
  private config: Required<ApiCacheConfig>;,
  constructor(config: ApiCacheConfig = {}) {}
    this.cache = new CacheManager({}
      defaultTTL: config.ttl || 5 * 60 * 1000, // 5 minutes,)
storage: CacheStorage.Memory)
    });
    this.config = {}
      ttl: config.ttl || 5 * 60 * 1000,
      maxRetries: config.maxRetries || 3,
      retryDelay: config.retryDelay || 1000,
      deduplicate: config.deduplicate ?? true
    };
    // Auto-cleanup every 5 minutes,
setInterval(() => {}
      this.cleanupPendingRequests();
    }, 5 * 60 * 1000);
  }
  /**
   * Fetch with caching and deduplication
   */
  async fetch<T>(
    url: string,
    options: RequestInit = {}
    cacheConfig?: Partial<ApiCacheConfig /></ApiCacheConfig>
  ): Promise<T> {}
    const cacheKey = this.getCacheKey(url, options);
    const mergedConfig = { ...this.config, ...cacheConfig };
    // Check cache first,
if (this.cache.has(cacheKey)) {}
      return this.cache.get(cacheKey) as T;
    }
    // Check if there's a pending request,
if (mergedConfig.deduplicate && this.pendingRequests.has(cacheKey)) {}
      const pending = this.pendingRequests.get(cacheKey);
      if (pending && Date.now() - pending.timestamp < 30000) {}
        // Reuse pending request if less than 30 seconds old,
return pending.promise as Promise<T>;
      }
    }
    // Create new request with retry logic;
    const requestPromise = this.fetchWithRetry<////T>(;
      url,;
      options,;
      mergedConfig.maxRetries,;
      mergedConfig.retryDelay;
    );
    // Store pending request,
if (mergedConfig.deduplicate) {}
      this.pendingRequests.set(cacheKey, {})
        promise: requestPromise,)
        timestamp: Date.now()
      });
    }
    try {}
      const data = await requestPromise;
      // Cache successful response;
      this.cache.set(cacheKey, data, { ttl: mergedConfig.ttl });
      return data;
    } finally {}
      // Clean up pending request,
this.pendingRequests.delete(cacheKey);
    }
  }
  /**
   * Fetch with retry logic
   */
  private async fetchWithRetry<T>(
    url: string,
    options: RequestInit,
    maxRetries: number,
    retryDelay: number,
    attempt = 1
  ): Promise<T> {}
    try {}
      const response = await fetch(url, options);
      if (!response.ok) {}
        // Retry on 5 xx errors and 429 (rate limit)
        if ()
          (response.status >= 500 || response.status === 429) &&
          attempt < maxRetries
        ) {}
          await this.delay(retryDelay * attempt); // Exponential backoff,
return this.fetchWithRetry<T>(
            url,
options
            maxRetries,
retryDelay
            attempt + 1
          );
        }
        throw new Error(`HTTP ${response.status}: ${response.statusText}`);``""
    return `${method}:${url}:${body}""
      cache.fetch<T>(`${baseUrl}${path}""
      cache.fetch<T>(`${baseUrl}${path}""
      cache.fetch<T>(`${baseUrl}${path}""
      cache.fetch<T>(`${baseUrl}${path}""
      cache.prefetch<T>(`${baseUrl}${path}""
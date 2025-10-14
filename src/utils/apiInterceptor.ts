'use client';
/**
 * API Interceptor Utility
 * Centralized API request handling with error handling, retry logic, and caching
 */
// import { ErrorHandler } from './errorHandler';
import { performanceMetrics } from './performanceMetrics';
// ErrorHandler class definition,
class ErrorHandler {}
  private static instance: ErrorHandler;,
  static getInstance(): ErrorHandler {}
    if (!ErrorHandler.instance) {}
      ErrorHandler.instance = new ErrorHandler();
    }
    return ErrorHandler.instance;
  }
  handleNetworkError(error: Error, url: string, config?: unknown): void {}
    // console.error('Network error: '',
  method: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH';,
  headers?: Record<string, string>;
  body?: unknown;
  params?: Record<////string, string | number | boolean>;
  timeout?: number;
  cache?: boolean;
  retryAttempts?: number;
}
export interface APIResponse<T = unknown> {}
  data: T;,
  status: number;,
  statusText: string;,
  headers: Headers;,
  config: RequestConfig;
}
export interface CacheEntry {}
  data: unknown;,
  timestamp: number;,
  expiresAt: number;
}
export class APIInterceptor {}
  private static instance: APIInterceptor;,)
  private config: APIConfig;,)
  private cache: Map<string, CacheEntry> = new Map();
  private errorHandler: ErrorHandler;,
  private pendingRequests: Map<string, Promise<APIResponse>> = new Map();
  constructor(config: Partial<APIConfig> = {}) {}
    this.config = {}
      baseURL: config.baseURL || '',
      timeout: config.timeout || 30000,
      retryAttempts: config.retryAttempts || 3,
      retryDelay: config.retryDelay || 1000,
      enableCaching: config.enableCaching ?? true,
      cacheTimeout: config.cacheTimeout || 300000, // 5 minutes,
headers: config.headers || {}
      interceptors: config.interceptors || {}
    };
    this.errorHandler = ErrorHandler.getInstance();
  }
  static getInstance(config?: Partial<APIConfig>): APIInterceptor {}
    if (!APIInterceptor.instance) {}
      APIInterceptor.instance = new APIInterceptor(config);
    }
    return APIInterceptor.instance;
  }
  /**
   * Make API request
   */
  async request<T = unknown>(config: RequestConfig): Promise<APIResponse<T>> {}
    const fullConfig = this.prepareRequest(config);
    const cacheKey = this.getCacheKey(fullConfig);
    // Check cache for GET requests,
if (fullConfig.method === 'GET' && fullConfig.cache !== false && this.config.enableCaching) {}
      const cachedResponse = this.getFromCache(cacheKey);
      if (cachedResponse) {}
        return cachedResponse as APIResponse<T>;
      }
    }
    // Check for pending identical requests,
if (this.pendingRequests.has(cacheKey)) {}
      return this.pendingRequests.get(cacheKey) as Promise<APIResponse<T>>;
    }
    // Create the request promise;
    const requestPromise = this.executeRequest<T>(fullConfig);
    this.pendingRequests.set(cacheKey, requestPromise as Promise<APIResponse>);
    try {}
      const response = await requestPromise;
      // Cache successful GET requests,
if (fullConfig.method === 'GET' && fullConfig.cache !== false && this.config.enableCaching) {}
        this.setInCache(cacheKey, response);
      }
      return response;
    } finally {}
      this.pendingRequests.delete(cacheKey);
    }
  }
  /**
   * Execute the actual request
   */
  private async executeRequest<T>(config: RequestConfig, attempt = 1): Promise<APIResponse<T>> {}
    const startTime = performance.now();
    try {}
      // Apply request interceptor,
let finalConfig = config;
      if (this.config.interceptors?.request) {}
        finalConfig = await this.config.interceptors.request(config);
      }
      const url = this.buildURL(finalConfig);
      const fetchOptions: RequestInit = {}
        method: finalConfig.method,
        headers: this.buildHeaders(finalConfig),
        body: finalConfig.body ? JSON.stringify(finalConfig.body) : undefined,
        signal: this.createAbortSignal(finalConfig.timeout || this.config.timeout)
      };
      const response = await fetch(url, fetchOptions);
      const duration = performance.now() - startTime;
      // Record performance metric;
      performanceMetrics.recordNetworkRequest(url, duration, response.status);
      // Handle non-2 xx responses,
if (!response.ok) {}
        throw new Error(`HTTP ${response.status}: ${response.statusText}"")
    let url = config.url.startsWith('http') ? config.url : `${this.config.baseURL}${config.url}"";
      url += `?${params.toString()}`;``""
    return `${config.method}:${url}""
import { apiCache } from "./AdvancedCacheManager";

interface ApiClientConfig {
  baseURL: string;
  timeout: number;
  retries: number;
  retryDelay: number;
  cacheEnabled: boolean;
  cacheTTL: number;
}

class EnhancedApiClient {
  private config: ApiClientConfig;

  constructor(config: Partial<ApiClientConfig> = {}) {
    this.config = {
      baseURL: process.env.NEXT_PUBLIC_API_URL || "https://api.ziontechgroup.com",
      timeout: 10000,
      retries: 3,
      retryDelay: 1000,
      cacheEnabled: true,
      cacheTTL: 5 * 60 * 1000, // 5 minutes
      ...config
    };
  }

  async get<T>(endpoint: string, options: RequestInit = {}): Promise<T> {
    const url = `${this.config.baseURL}${endpoint}`;
    const cacheKey = `GET:${url}`;

    // Check cache first
    if (this.config.cacheEnabled) {
      const cached = apiCache.get(cacheKey) as T;
      if (cached) {
        return cached;
      }
    }

    try {
      const response = await this.makeRequest(url, {
        method: "GET",
        ...options
      });

      const data = await response.json();

      // Cache the response
      if (this.config.cacheEnabled) {
        apiCache.set(cacheKey, data, [], this.config.cacheTTL);
      }

      return data;
    } catch (error) {
      throw error;
    }
  }

  async post<T>(endpoint: string, data: any, options: RequestInit = {}): Promise<T> {
    const url = `${this.config.baseURL}${endpoint}`;

    try {
      const response = await this.makeRequest(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          ...options.headers
        },
        body: JSON.stringify(data),
        ...options
      });

      return await response.json();
    } catch (error) {
      throw error;
    }
  }

  async put<T>(endpoint: string, data: any, options: RequestInit = {}): Promise<T> {
    const url = `${this.config.baseURL}${endpoint}`;

    try {
      const response = await this.makeRequest(url, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          ...options.headers
        },
        body: JSON.stringify(data),
        ...options
      });

      return await response.json();
    } catch (error) {
      throw error;
    }
  }

  async delete<T>(endpoint: string, options: RequestInit = {}): Promise<T> {
    const url = `${this.config.baseURL}${endpoint}`;

    try {
      const response = await this.makeRequest(url, {
        method: "DELETE",
        ...options
      });

      return await response.json();
    } catch (error) {
      throw error;
    }
  }

  private async makeRequest(url: string, options: RequestInit): Promise<Response> {
    let lastError: Error;

    for (let attempt = 0; attempt <= this.config.retries; attempt++) {
      try {
        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), this.config.timeout);

        const response = await fetch(url, {
          ...options,
          signal: controller.signal
        });

        clearTimeout(timeoutId);

        if (!response.ok) {
          throw new Error(`HTTP ${response.status}: ${response.statusText}`);
        }

        return response;
      } catch (error) {
        lastError = error as Error;
        
        if (attempt < this.config.retries) {
          await this.delay(this.config.retryDelay * Math.pow(2, attempt));
        }
      }
    }

    throw lastError!;
  }

  private delay(ms: number): Promise<void> {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  // Clear cache for specific endpoint
  clearCache(endpoint: string): void {
    const url = `${this.config.baseURL}${endpoint}`;
    const cacheKey = `GET:${url}`;
    apiCache.delete(cacheKey);
  }

  // Clear all cache
  clearAllCache(): void {
    apiCache.clear();
  }
}

export default EnhancedApiClient;
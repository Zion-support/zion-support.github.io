/**
 * API Client
 * Advanced API client for the Zion Tech Group website
 */

interface ApiConfig {
  baseURL: string;
  timeout: number;
  retries: number;
  retryDelay: number;
  headers: Record<string, string>;
  enableCaching: boolean;
  cacheTimeout: number;
  enableLogging: boolean;
}

interface ApiRequest {
  url: string;
  method: "GET" | "POST" | "PUT" | "DELETE" | "PATCH";
  headers?: Record<string, string>;
  body?: unknown;
  params?: Record<string, string | number | boolean>;
  timeout?: number;
  retries?: number;
  cache?: boolean;
  cacheTimeout?: number;
}

interface ApiResponse<T = unknown> {
  data: T;
  status: number;
  statusText: string;
  headers: Record<string, string>;
  config: ApiRequest;
  requestTime: number;
}

interface ApiError {
  message: string;
  status?: number;
  statusText?: string;
  data?: unknown;
  config: ApiRequest;
  requestTime: number;
}

export class ApiClient {
  private static instance: ApiClient;
  private config: ApiConfig;
  private requestQueue: Array<() => Promise<unknown>> = [];
  private isProcessingQueue = false;
  private activeRequests = new Map<string, AbortController>();

  private constructor() {
    this.config = {
      baseURL: "/api",
      timeout: 30000, // 30 seconds
      retries: 3,
      retryDelay: 1000, // 1 second
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      enableCaching: true,
      cacheTimeout: 5 * 60 * 1000, // 5 minutes
      enableLogging: true,
    };
  }

  public static getInstance(): ApiClient {
    if (!ApiClient.instance) {
      ApiClient.instance = new ApiClient();
    }
    return ApiClient.instance;
  }

  public configure(config: Partial<ApiConfig>): void {
    this.config = { ...this.config, ...config };
  }

  public async get<T = unknown>(
    url: string,
    options?: Partial<ApiRequest>,
  ): Promise<ApiResponse<T>> {
    return this.request<T>({ ...options, url, method: "GET" });
  }

  public async post<T = unknown>(
    url: string,
    data?: unknown,
    options?: Partial<ApiRequest>,
  ): Promise<ApiResponse<T>> {
    return this.request<T>({ ...options, url, method: "POST", body: data });
  }

  public async put<T = unknown>(
    url: string,
    data?: unknown,
    options?: Partial<ApiRequest>,
  ): Promise<ApiResponse<T>> {
    return this.request<T>({ ...options, url, method: "PUT", body: data });
  }

  public async delete<T = unknown>(
    url: string,
    options?: Partial<ApiRequest>,
  ): Promise<ApiResponse<T>> {
    return this.request<T>({ ...options, url, method: "DELETE" });
  }

  public async patch<T = unknown>(
    url: string,
    data?: unknown,
    options?: Partial<ApiRequest>,
  ): Promise<ApiResponse<T>> {
    return this.request<T>({ ...options, url, method: "PATCH", body: data });
  }

  private async request<T = unknown>(
    requestConfig: ApiRequest,
  ): Promise<ApiResponse<T>> {
    const config = this.mergeConfig(requestConfig);

    // Generate request key for caching and deduplication
    const requestKey = this.generateRequestKey(config);

    // Check cache first
    if (config.cache && this.config.enableCaching) {
      const cached = await this.getCachedResponse<T>(requestKey);
      if (cached) {
        return cached;
      }
    }

    // Check if request is already in progress
    if (this.activeRequests.has(requestKey)) {
      return this.waitForActiveRequest<T>(requestKey);
    }

    // Create abort controller
    const abortController = new AbortController();
    this.activeRequests.set(requestKey, abortController);

    try {
      const response = await this.executeRequest<T>(
        config,
        abortController.signal,
      );

      // Cache successful responses
      if (
        config.cache &&
        this.config.enableCaching &&
        response.status >= 200 &&
        response.status < 300
      ) {
        await this.cacheResponse(requestKey, response);
      }

      return response;
    } finally {
      this.activeRequests.delete(requestKey);
    }
  }

  private async executeRequest<T = unknown>(
    config: ApiRequest,
    signal: AbortSignal,
  ): Promise<ApiResponse<T>> {
    let lastError: Error | null = null;

    for (
      let attempt = 0;
      attempt <= (config.retries || this.config.retries);
      attempt++
    ) {
      try {
        if (this.config.enableLogging) {
          console.log(
            `API Request [${attempt + 1}/${(config.retries || this.config.retries) + 1}]:`,
            {
              method: config.method,
              url: config.url,
              attempt: attempt + 1,
            },
          );
        }

        const response = await this.makeHttpRequest<T>(config, signal);
        const requestTime = Date.now() - Date.now(); // Placeholder for actual timing

        return {
          data: response.data,
          status: response.status,
          statusText: response.statusText,
          headers: response.headers,
          config,
          requestTime,
        };
      } catch (error) {
        lastError = error as Error;

        if (attempt < (config.retries || this.config.retries)) {
          const delay = this.config.retryDelay * Math.pow(2, attempt);
          await this.delay(delay);
        }
      }
    }

    const requestTime = 0;
    throw this.createApiError(
      lastError || new Error("Request failed"),
      config,
      requestTime,
    );
  }

  private async makeHttpRequest<T = unknown>(
    config: ApiRequest,
    signal: AbortSignal,
  ): Promise<{
    data: T;
    status: number;
    statusText: string;
    headers: Record<string, string>;
  }> {
    const url = this.buildUrl(config);
    const headers = this.buildHeaders(config);
    const body = this.buildBody(config);

    const controller = new AbortController();
    const timeoutId = setTimeout(
      () => controller.abort(),
      config.timeout || this.config.timeout,
    );

    // Combine abort signals
    signal.addEventListener("abort", () => controller.abort());

    try {
      const response = await fetch(url, {
        method: config.method,
        headers,
        body,
        signal: controller.signal,
      });

      clearTimeout(timeoutId);

      const responseHeaders: Record<string, string> = {};
      response.headers.forEach((value, key) => {
        responseHeaders[key] = value;
      });

      let data: T;
      const contentType = response.headers.get("content-type");

      if (contentType && contentType.includes("application/json")) {
        data = await response.json();
      } else {
        data = (await response.text()) as T;
      }

      if (!response.ok) {
        throw new Error(`HTTP ${response.status}: ${response.statusText}`);
      }

      return {
        data,
        status: response.status,
        statusText: response.statusText,
        headers: responseHeaders,
      };
    } catch (error) {
      clearTimeout(timeoutId);
      throw error;
    }
  }

  private buildUrl(config: ApiRequest): string {
    const url = new URL(config.url, this.config.baseURL);

    if (config.params) {
      Object.entries(config.params).forEach(([key, value]) => {
        url.searchParams.append(key, String(value));
      });
    }

    return url.toString();
  }

  private buildHeaders(config: ApiRequest): Record<string, string> {
    return {
      ...this.config.headers,
      ...config.headers,
    };
  }

  private buildBody(config: ApiRequest): string | undefined {
    if (!config.body) return undefined;

    if (typeof config.body === "string") {
      return config.body;
    }

    return JSON.stringify(config.body);
  }

  private mergeConfig(config: ApiRequest): ApiRequest {
    return {
      timeout: this.config.timeout,
      retries: this.config.retries,
      cache: this.config.enableCaching,
      cacheTimeout: this.config.cacheTimeout,
      ...config,
    };
  }

  private generateRequestKey(config: ApiRequest): string {
    const key = `${config.method}:${config.url}:${JSON.stringify(config.params || {})}:${JSON.stringify(config.body || {})}`;
    return btoa(key).replace(/[^a-zA-Z0-9]/g, "");
  }

  private async getCachedResponse<T>(
    requestKey: string,
  ): Promise<ApiResponse<T> | null> {
    try {
      const cached = sessionStorage.getItem(`api_cache_${requestKey}`);
      if (cached) {
        const parsed = JSON.parse(cached);
        if (Date.now() - parsed.timestamp < parsed.cacheTimeout) {
          return parsed.response;
        } else {
          sessionStorage.removeItem(`api_cache_${requestKey}`);
        }
      }
    } catch (error) {
      console.warn("Failed to get cached response:", error);
    }
    return null;
  }

  private async cacheResponse<T>(
    requestKey: string,
    response: ApiResponse<T>,
  ): Promise<void> {
    try {
      const cacheData = {
        response,
        timestamp: Date.now(),
        cacheTimeout: this.config.cacheTimeout,
      };
      sessionStorage.setItem(
        `api_cache_${requestKey}`,
        JSON.stringify(cacheData),
      );
    } catch (error) {
      console.warn("Failed to cache response:", error);
    }
  }

  private async waitForActiveRequest<T>(
    requestKey: string,
  ): Promise<ApiResponse<T>> {
    return new Promise((resolve, reject) => {
      const checkActiveRequest = () => {
        if (!this.activeRequests.has(requestKey)) {
          // Request completed, try to get cached response
          this.getCachedResponse<T>(requestKey).then((response) => {
            if (response) {
              resolve(response);
            } else {
              reject(
                new Error("Request failed and no cached response available"),
              );
            }
          });
        } else {
          setTimeout(checkActiveRequest, 100);
        }
      };
      checkActiveRequest();
    });
  }

  private createApiError(
    error: Error,
    config: ApiRequest,
    requestTime: number,
  ): ApiError {
    const errorWithResponse = error as Error & {
      response?: { status: number; statusText: string; data: unknown };
    };
    return {
      message: error.message,
      config,
      requestTime,
      ...(errorWithResponse.response
        ? {
            status: errorWithResponse.response.status,
            statusText: errorWithResponse.response.statusText,
            data: errorWithResponse.response.data,
          }
        : {}),
    };
  }

  private delay(ms: number): Promise<void> {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  public cancelRequest(requestKey: string): boolean {
    const controller = this.activeRequests.get(requestKey);
    if (controller) {
      controller.abort();
      this.activeRequests.delete(requestKey);
      return true;
    }
    return false;
  }

  public cancelAllRequests(): void {
    this.activeRequests.forEach((controller) => controller.abort());
    this.activeRequests.clear();
  }

  public clearCache(): void {
    const keys = Object.keys(sessionStorage);
    keys.forEach((key) => {
      if (key.startsWith("api_cache_")) {
        sessionStorage.removeItem(key);
      }
    });
  }

  public getActiveRequests(): string[] {
    return Array.from(this.activeRequests.keys());
  }
}

// Export singleton instance
export const apiClient = ApiClient.getInstance();

// Auto-configure for production
if (typeof window !== "undefined") {
  apiClient.configure({
    baseURL:
      process.env.NODE_ENV === "production"
        ? "https://api.ziontechgroup.com"
        : "/api",
    timeout: 30000,
    retries: 3,
    retryDelay: 1000,
    enableCaching: true,
    cacheTimeout: 5 * 60 * 1000,
    enableLogging: process.env.NODE_ENV === "development",
  });
}

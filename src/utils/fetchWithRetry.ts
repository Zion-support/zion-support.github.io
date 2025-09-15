/**
 * Fetch utility with retry logic and error handling
 */

export interface FetchWithRetryOptions {
  maxRetries?: number;
  retryDelay?: number;
  retryCondition?: (error: Error) => boolean;
  timeout?: number;
  headers?: Record<string, string>;
  method?: string;
  body?: any;
}

export interface FetchResponse<T = any> {
  data: T;
  status: number;
  statusText: string;
  headers: Headers;
  ok: boolean;
}

class FetchWithRetryError extends Error {
  constructor(
    message: string,
    public status?: number,
    public response?: Response
  ) {
    super(message);
    this.name = 'FetchWithRetryError';
  }
}

export class FetchWithRetry {
  private defaultOptions: Required<FetchWithRetryOptions> = {
    maxRetries: 3,
    retryDelay: 1000,
    retryCondition: (error: Error) => {
      // Retry on network errors or 5xx status codes
      if (error instanceof FetchWithRetryError) {
        return error.status ? error.status >= 500 : true;
      }
      return true;
    },
    timeout: 30000,
    headers: {
      'Content-Type': 'application/json',
    },
    method: 'GET',
    body: undefined,
  };

  async fetch<T = any>(
    url: string,
    options: FetchWithRetryOptions = {}
  ): Promise<FetchWithRetryResponse<T>> {
    const opts = { ...this.defaultOptions, ...options };
    let lastError: Error;

    for (let attempt = 0; attempt <= opts.maxRetries; attempt++) {
      try {
        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), opts.timeout);

        const fetchOptions: RequestInit = {
          method: opts.method,
          headers: opts.headers,
          signal: controller.signal,
        };

        if (opts.body && opts.method !== 'GET') {
          fetchOptions.body = typeof opts.body === 'string' 
            ? opts.body 
            : JSON.stringify(opts.body);
        }

        const response = await fetch(url, fetchOptions);
        clearTimeout(timeoutId);

        if (!response.ok) {
          throw new FetchWithRetryError(
            `HTTP ${response.status}: ${response.statusText}`,
            response.status,
            response
          );
        }

        const data = await this.parseResponse<T>(response);
        
        return {
          data,
          status: response.status,
          statusText: response.statusText,
          headers: response.headers,
          ok: response.ok,
        };
      } catch (error) {
        lastError = error as Error;
        
        // Don't retry if it's the last attempt or if retry condition is false
        if (attempt === opts.maxRetries || !opts.retryCondition(lastError)) {
          break;
        }

        // Wait before retrying
        await this.delay(opts.retryDelay * Math.pow(2, attempt));
      }
    }

    throw lastError!;
  }

  private async parseResponse<T>(response: Response): Promise<T> {
    const contentType = response.headers.get('content-type');
    
    if (contentType && contentType.includes('application/json')) {
      return await response.json();
    }
    
    if (contentType && contentType.includes('text/')) {
      return (await response.text()) as unknown as T;
    }
    
    return (await response.blob()) as unknown as T;
  }

  private delay(ms: number): Promise<void> {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  // Convenience methods
  async get<T = any>(url: string, options: Omit<FetchWithRetryOptions, 'method'> = {}): Promise<FetchWithRetryResponse<T>> {
    return this.fetch<T>(url, { ...options, method: 'GET' });
  }

  async post<T = any>(url: string, body: any, options: Omit<FetchWithRetryOptions, 'method' | 'body'> = {}): Promise<FetchWithRetryResponse<T>> {
    return this.fetch<T>(url, { ...options, method: 'POST', body });
  }

  async put<T = any>(url: string, body: any, options: Omit<FetchWithRetryOptions, 'method' | 'body'> = {}): Promise<FetchWithRetryResponse<T>> {
    return this.fetch<T>(url, { ...options, method: 'PUT', body });
  }

  async delete<T = any>(url: string, options: Omit<FetchWithRetryOptions, 'method'> = {}): Promise<FetchWithRetryResponse<T>> {
    return this.fetch<T>(url, { ...options, method: 'DELETE' });
  }
}

// Create singleton instance
export const fetchWithRetry = new FetchWithRetry();

// Export types for convenience
export type { FetchWithRetryOptions, FetchResponse };

export default fetchWithRetry;
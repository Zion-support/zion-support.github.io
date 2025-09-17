 * Fetch utility with retry logic and error handling
 */
export interface FetchOptions extends RequestInit {
  retries?: number;
  retryDelay?: number;
  timeout?: number;
  retryCondition?: (response: Response) => boolean;
export interface FetchResult<T = any> {
  data: T;
  response: Response;
  success: boolean;
  error?: string;
  retryCount: number;
class FetchWithRetry {
  private defaultOptions: FetchOptions = {
    retries: 3,
    retryDelay: 1000,
    timeout: 10000,
    retryCondition: (response: Response) => !response.ok
  };
  private async sleep(ms: number): Promise<void> {
    return new Promise(resolve => setTimeout(resolve, ms));
  };
  private async fetchWithTimeout(url: string, options: RequestInit, timeout: number): Promise<Response> {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), timeout);
    try {
      const response = await fetch(url, {
        ...options,
        signal: controller.signal
      });
      clearTimeout(timeoutId);
      return response;
    } catch (error) {
      clearTimeout(timeoutId);
      throw error;
    }
  };
  async fetch<T = any>(url: string, options: FetchOptions = {}): Promise<FetchResult<T>> {
    const config = { ...this.defaultOptions, ...options };
    let lastError: Error | null = null;
    let lastResponse: Response | null = null;
    for (let attempt = 0; attempt <= config.retries!; attempt++) {
      try {
        const response = await this.fetchWithTimeout(
          url,
          {
            method: options.method || 'GET',
            headers: options.headers,
            body: options.body,
          },
          config.timeout!
        );
        lastResponse = response;
        // Check if we should retry
        if (config.retryCondition!(response)) {
          if (attempt < config.retries!) {
            const delay = config.retryDelay! * Math.pow(2, attempt); // Exponential backoff
            await this.sleep(delay);
            continue;
          } else {
            throw new Error(`Request failed after ${config.retries} retries. Status: ${response.status}`);
          }
        }
        // Success - parse response
        let data: T;
        const contentType = response.headers.get('content-type');
        if (contentType?.includes('application/json')) {
          data = await response.json();
        } else if (contentType?.includes('text/')) {
          data = await response.text() as T;
        } else {
          data = await response.blob() as T;
        }
        return {
          data,
          response,
          success: true,
          retryCount: attempt
        };
      } catch (error) {
        lastError = error as Error;
        if (attempt < config.retries!) {
          const delay = config.retryDelay! * Math.pow(2, attempt);
          await this.sleep(delay);
          continue;
        }
      }
    }
    return {
      data: null as T,
      response: lastResponse!,
      success: false,
      error: lastError?.message || 'Unknown error occurred',
      retryCount: config.retries!
    };
  };
  async get<T = any>(url: string, options: Omit<FetchOptions, 'method'> = {}): Promise<FetchResult<T>> {
    return this.fetch<T>(url, { ...options, method: 'GET' });
  };
  async post<T = any>(url: string, data?: any, options: Omit<FetchOptions, 'method' | 'body'> = {}): Promise<FetchResult<T>> {
    return this.fetch<T>(url, {
      ...options,
      method: 'POST',
      body: data ? JSON.stringify(data) : undefined,
      headers: {
        'Content-Type': 'application/json',
        ...options.headers
      }
    });
  };
  async put<T = any>(url: string, data?: any, options: Omit<FetchOptions, 'method' | 'body'> = {}): Promise<FetchResult<T>> {
    return this.fetch<T>(url, {
      ...options,
      method: 'PUT',
      body: data ? JSON.stringify(data) : undefined,
      headers: {
        'Content-Type': 'application/json',
        ...options.headers
      }
    });
  };
  async delete<T = any>(url: string, options: Omit<FetchOptions, 'method'> = {}): Promise<FetchResult<T>> {
    return this.fetch<T>(url, { ...options, method: 'DELETE' });
  };
  setDefaultOptions(options: Partial<FetchOptions>): void {
    this.defaultOptions = { ...this.defaultOptions, ...options };
  };
// Create default instance
const fetchWithRetry = new FetchWithRetry();
// Export convenience functions
export const fetchWithRetryGet = <T = any>(url: string, options?: Omit<FetchOptions, 'method'>) => 
  fetchWithRetry.get<T>(url, options);
export const fetchWithRetryPost = <T = any>(url: string, data?: any, options?: Omit<FetchOptions, 'method' | 'body'>) => 
  fetchWithRetry.post<T>(url, data, options);
export const fetchWithRetryPut = <T = any>(url: string, data?: any, options?: Omit<FetchOptions, 'method' | 'body'>) => 
  fetchWithRetry.put<T>(url, data, options);
export const fetchWithRetryDelete = <T = any>(url: string, options?: Omit<FetchOptions, 'method'>) => 
  fetchWithRetry.delete<T>(url, options);
export const fetchWithRetry = async (
  url: string,
  options: RequestInit & FetchWithRetryOptions = {}
): Promise<Response> => {
      return response;
    } catch (error) {
      lastError = error as Error;
};

export default fetchWithRetry;

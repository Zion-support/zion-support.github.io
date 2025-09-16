// Fetch with retry utility for handling network requests with automatic retries

interface FetchWithRetryOptions {
  retries?: number;
  delay?: number;
  backoff?: number;
  timeout?: number;
  headers?: Record<string, string>;
}

export const fetchWithRetry = async (
  url: string,
  options: RequestInit & FetchWithRetryOptions = {}
): Promise<Response> => {
  const {
    retries = 3,
    delay = 1000,
    backoff = 2,
    timeout = 10000,
    headers = {},
    ...fetchOptions
  } = options;

  let lastError: Error | null = null;

  for (let attempt = 0; attempt <= retries; attempt++) {
    try {
      // Create AbortController for timeout
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), timeout);

      const response = await fetch(url, {
        ...fetchOptions,
        headers: {
          'Content-Type': 'application/json',
          ...headers,
          ...fetchOptions.headers,
        },
        signal: controller.signal,
      });

      clearTimeout(timeoutId);

      // Check if response is ok
      if (!response.ok) {
        throw new Error(`HTTP ${response.status}: ${response.statusText}`);
      }

      return response;
    } catch (error) {
      lastError = error as Error;
      
      // Don't retry on the last attempt
      if (attempt === retries) {
        break;
      }

      // Don't retry on certain errors
      if (error instanceof Error) {
        if (error.name === 'AbortError') {
          throw new Error(`Request timeout after ${timeout}ms`);
        }
        
        // Don't retry on client errors (4xx)
        if (error.message.includes('HTTP 4')) {
          throw error;
        }
      }

      // Calculate delay with exponential backoff
      const currentDelay = delay * Math.pow(backoff, attempt);
      
      // Wait before retrying
      await new Promise(resolve => setTimeout(resolve, currentDelay));
    }
  }

  throw lastError || new Error('Request failed after all retries');
};

// Convenience methods for common HTTP methods
export const get = (url: string, options: FetchWithRetryOptions = {}) =>
  fetchWithRetry(url, { ...options, method: 'GET' });

export const post = (url: string, data?: any, options: FetchWithRetryOptions = {}) =>
  fetchWithRetry(url, {
    ...options,
    method: 'POST',
    body: data ? JSON.stringify(data) : undefined,
  });

export const put = (url: string, data?: any, options: FetchWithRetryOptions = {}) =>
  fetchWithRetry(url, {
    ...options,
    method: 'PUT',
    body: data ? JSON.stringify(data) : undefined,
  });

export const del = (url: string, options: FetchWithRetryOptions = {}) =>
  fetchWithRetry(url, { ...options, method: 'DELETE' });

export default fetchWithRetry;
<<<<<<< HEAD
// Fetch with retry utility for handling network requests with automatic retries

=======
// Fetch with retry utility
>>>>>>> 92e78fe0fa97c23b26e9c757f0eb6a5609cf6432
interface FetchWithRetryOptions {
  retries?: number;
  delay?: number;
  backoff?: number;
  timeout?: number;
<<<<<<< HEAD
  headers?: Record<string, string>;
=======
>>>>>>> 92e78fe0fa97c23b26e9c757f0eb6a5609cf6432
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
<<<<<<< HEAD
    headers = {},
=======
>>>>>>> 92e78fe0fa97c23b26e9c757f0eb6a5609cf6432
    ...fetchOptions
  } = options;

  let lastError: Error | null = null;

  for (let attempt = 0; attempt <= retries; attempt++) {
    try {
<<<<<<< HEAD
      // Create AbortController for timeout
=======
>>>>>>> 92e78fe0fa97c23b26e9c757f0eb6a5609cf6432
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), timeout);

      const response = await fetch(url, {
        ...fetchOptions,
<<<<<<< HEAD
        headers: {
          'Content-Type': 'application/json',
          ...headers,
          ...fetchOptions.headers,
        },
=======
>>>>>>> 92e78fe0fa97c23b26e9c757f0eb6a5609cf6432
        signal: controller.signal,
      });

      clearTimeout(timeoutId);

<<<<<<< HEAD
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

=======
      if (response.ok) {
        return response;
      }

      // If it's a client error (4xx), don't retry
      if (response.status >= 400 && response.status < 500) {
        throw new Error(`Client error: ${response.status} ${response.statusText}`);
      }

      // For server errors (5xx), throw to trigger retry
      throw new Error(`Server error: ${response.status} ${response.statusText}`);
    } catch (error) {
      lastError = error as Error;

      // Don't retry on abort or client errors
      if (error instanceof Error && 
          (error.name === 'AbortError' || error.message.includes('Client error'))) {
        throw error;
      }

      // If this was the last attempt, throw the error
      if (attempt === retries) {
        throw lastError;
      }

      // Wait before retrying with exponential backoff
      const waitTime = delay * Math.pow(backoff, attempt);
      await new Promise(resolve => setTimeout(resolve, waitTime));
    }
  }

  throw lastError || new Error('Fetch failed after all retries');
};

>>>>>>> 92e78fe0fa97c23b26e9c757f0eb6a5609cf6432
export default fetchWithRetry;
/**
 * Fetch utility with retry logic and error handling
 */

export interface RetryOptions {
  maxRetries?: number;
  retryDelay?: number;
  retryDelayMultiplier?: number;
  maxRetryDelay?: number;
  retryCondition?: (error: Error, attempt: number) => boolean;
}

export interface FetchOptions extends RequestInit {
  retry?: RetryOptions;
  timeout?: number;
}

const DEFAULT_RETRY_OPTIONS: Required<RetryOptions> = {
  maxRetries: 3,
  retryDelay: 1000,
  retryDelayMultiplier: 2,
  maxRetryDelay: 10000,
  retryCondition: (error: Error) => {
    // Retry on network errors, 5xx server errors, and 429 (rate limit)
    return (
      error.name === 'TypeError' || // Network error
      error.message.includes('fetch') ||
      error.message.includes('network') ||
      error.message.includes('timeout')
    );
  },
};

export class FetchError extends Error {
  constructor(
    message: string,
    public status?: number,
    public statusText?: string,
    public response?: Response
  ) {
    super(message);
    this.name = 'FetchError';
  }
}

async function delay(ms: number): Promise<void> {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function fetchWithTimeout(
  url: string,
  options: RequestInit,
  timeout: number
): Promise<Response> {
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), timeout);

  try {
    const response = await fetch(url, {
      ...options,
      signal: controller.signal,
    });
    clearTimeout(timeoutId);
    return response;
  } catch (error) {
    clearTimeout(timeoutId);
    throw error;
  }
}

export async function fetchWithRetry(
  url: string,
  options: FetchOptions = {}
): Promise<Response> {
  const { retry = {}, timeout = 30000, ...fetchOptions } = options;
  const retryOptions = { ...DEFAULT_RETRY_OPTIONS, ...retry };

  let lastError: Error;
  let attempt = 0;

  while (attempt <= retryOptions.maxRetries) {
    try {
      const response = timeout
        ? await fetchWithTimeout(url, fetchOptions, timeout)
        : await fetch(url, fetchOptions);

      if (!response.ok) {
        const error = new FetchError(
          `HTTP ${response.status}: ${response.statusText}`,
          response.status,
          response.statusText,
          response
        );

        // Don't retry on client errors (4xx) except 429
        if (response.status >= 400 && response.status < 500 && response.status !== 429) {
          throw error;
        }

        // Check if we should retry this error
        if (attempt === retryOptions.maxRetries || !retryOptions.retryCondition(error, attempt)) {
          throw error;
        }
      } else {
        return response;
      }
    } catch (error) {
      lastError = error as Error;

      // Check if we should retry this error
      if (attempt === retryOptions.maxRetries || !retryOptions.retryCondition(lastError, attempt)) {
        throw lastError;
      }

      // Calculate delay for next retry
      const delayMs = Math.min(
        retryOptions.retryDelay * Math.pow(retryOptions.retryDelayMultiplier, attempt),
        retryOptions.maxRetryDelay
      );

      await delay(delayMs);
    }

    attempt++;
  }

  throw lastError!;
}

export async function fetchJSON<T>(
  url: string,
  options: FetchOptions = {}
): Promise<T> {
  const response = await fetchWithRetry(url, {
    ...options,
    headers: {
      'Content-Type': 'application/json',
      ...options.headers,
    },
  });

  if (!response.ok) {
    throw new FetchError(
      `HTTP ${response.status}: ${response.statusText}`,
      response.status,
      response.statusText,
      response
    );
  }

  try {
    return await response.json();
  } catch (error) {
    throw new FetchError(
      'Failed to parse JSON response',
      response.status,
      response.statusText,
      response
    );
  }
}

export async function fetchText(
  url: string,
  options: FetchOptions = {}
): Promise<string> {
  const response = await fetchWithRetry(url, options);

  if (!response.ok) {
    throw new FetchError(
      `HTTP ${response.status}: ${response.statusText}`,
      response.status,
      response.statusText,
      response
    );
  }

  return response.text();
}

export async function fetchBlob(
  url: string,
  options: FetchOptions = {}
): Promise<Blob> {
  const response = await fetchWithRetry(url, options);

  if (!response.ok) {
    throw new FetchError(
      `HTTP ${response.status}: ${response.statusText}`,
      response.status,
      response.statusText,
      response
    );
  }

  return response.blob();
}

// Convenience functions
export const get = (url: string, options: Omit<FetchOptions, 'method'> = {}): Promise<Response> => {
  return fetchWithRetry(url, { ...options, method: 'GET' });
};

export const post = (url: string, body?: any, options: Omit<FetchOptions, 'method' | 'body'> = {}): Promise<Response> => {
  return fetchWithRetry(url, {
    ...options,
    method: 'POST',
    body: body ? JSON.stringify(body) : undefined,
    headers: {
      'Content-Type': 'application/json',
      ...options.headers,
    },
  });
};

export const put = (url: string, body?: any, options: Omit<FetchOptions, 'method' | 'body'> = {}): Promise<Response> => {
  return fetchWithRetry(url, {
    ...options,
    method: 'PUT',
    body: body ? JSON.stringify(body) : undefined,
    headers: {
      'Content-Type': 'application/json',
      ...options.headers,
    },
  });
};

export const del = (url: string, options: Omit<FetchOptions, 'method'> = {}): Promise<Response> => {
  return fetchWithRetry(url, { ...options, method: 'DELETE' });
};

export default fetchWithRetry;
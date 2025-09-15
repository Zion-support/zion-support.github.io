// Fetch with retry utility for better error handling
interface FetchWithRetryOptions {
  retries?: number;
  delay?: number;
  timeout?: number;
}

export const fetchWithRetry = async (
  url: string,
  options: RequestInit & FetchWithRetryOptions = {}
): Promise<Response> => {
  const { retries = 3, delay = 1000, timeout = 10000, ...fetchOptions } = options;
  
/**
 * Fetch utility with retry logic and error handling
 */

interface FetchWithRetryOptions {
  retries?: number;
  retryDelay?: number;
  timeout?: number;
  headers?: Record<string, string>;
}

export const fetchWithRetry = async (
  url: string,
  options: RequestInit & FetchWithRetryOptions = {}
): Promise<Response> => {
  const {
    retries = 3,
    retryDelay = 1000,
    timeout = 10000,
    headers = {},
    ...fetchOptions
  } = options;

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

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return response;
    } catch (error) {
      lastError = error as Error;
      
};

export default fetchWithRetry;
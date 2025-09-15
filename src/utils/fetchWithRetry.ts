<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> origin/revolutionary-content-2026
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/feature/revolutionary-2027-content
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> cursor/create-and-deploy-new-content-b15f
// Fetch utility with retry logic and error handling
=======
<<<<<<< HEAD
<<<<<<< HEAD
// Fetch with retry utility for handling network requests with automatic retries

interface FetchWithRetryOptions {
  retries?: number;
  delay?: number;
  backoff?: 'linear' | 'exponential';
  timeout?: number;
}

const defaultOptions: Required<FetchWithRetryOptions> = {
  retries: 3,
  delay: 1000,
  backoff: 'exponential',
  timeout: 10000
};

=======
// Fetch with retry utility for better error handling
interface FetchWithRetryOptions {
  retries?: number;
  delay?: number;
  timeout?: number;
}

>>>>>>> main
=======
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> cursor/create-and-deploy-new-content-afc8
=======
<<<<<<< HEAD
>>>>>>> cursor/create-and-deploy-new-content-d3a3
=======
<<<<<<< HEAD
>>>>>>> cursor/create-and-deploy-new-content-8735
=======
>>>>>>> cursor/create-and-deploy-new-content-fb46
>>>>>>> cursor/create-and-deploy-new-content-b15f
>>>>>>> origin/feature/revolutionary-2027-content
=======
>>>>>>> cursor/create-and-deploy-new-content-f4f2
>>>>>>> origin/revolutionary-content-2026
=======
>>>>>>> cursor/create-and-deploy-new-content-afc8
>>>>>>> 3d1201ff466e0a9c82bed2da7dd3df054f828ce6
export const fetchWithRetry = async (
  url: string,
  options: RequestInit & FetchWithRetryOptions = {}
): Promise<Response> => {
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> origin/revolutionary-content-2026
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/feature/revolutionary-2027-content
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> cursor/create-and-deploy-new-content-b15f
  const { retries, delay, backoff, timeout, ...fetchOptions } = {
    ...defaultOptions,
    ...options
  };

  let lastError: Error | null = null;

  for (let attempt = 0; attempt <= retries; attempt++) {
    try {
      // Create abort controller for timeout
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), timeout);

      const response = await fetch(url, {
        ...fetchOptions,
        signal: controller.signal
      });

      clearTimeout(timeoutId);

      // Check if response is ok
      if (!response.ok) {
        throw new Error(`HTTP ${response.status}: ${response.statusText}`);
      }

=======
  const { retries = 3, delay = 1000, timeout = 10000, ...fetchOptions } = options;
  
=======
/**
 * Fetch utility with retry logic and error handling
 */
>>>>>>> cursor/create-and-deploy-new-content-cc9d

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

<<<<<<< HEAD
  const attemptFetch = async (attempt: number): Promise<Response> => {
=======
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

>>>>>>> 2ad069e84825dabaf46d071e81e10e505f57815a
  let lastError: Error;
  let attempt = 0;

  while (attempt <= retryOptions.maxRetries) {
>>>>>>> cursor/create-and-deploy-new-content-cc9d
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
<<<<<<< HEAD

      return response;
=======
<<<<<<< HEAD
      
>>>>>>> main
=======
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> cursor/create-and-deploy-new-content-afc8
=======
<<<<<<< HEAD
>>>>>>> cursor/create-and-deploy-new-content-d3a3
=======
<<<<<<< HEAD
>>>>>>> cursor/create-and-deploy-new-content-8735
=======
>>>>>>> cursor/create-and-deploy-new-content-fb46
>>>>>>> cursor/create-and-deploy-new-content-b15f
>>>>>>> origin/feature/revolutionary-2027-content
=======
>>>>>>> cursor/create-and-deploy-new-content-f4f2
>>>>>>> origin/revolutionary-content-2026
=======
>>>>>>> cursor/create-and-deploy-new-content-afc8
>>>>>>> 3d1201ff466e0a9c82bed2da7dd3df054f828ce6
      return response;
    } catch (error) {
      lastError = error as Error;
      
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> origin/revolutionary-content-2026
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/feature/revolutionary-2027-content
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> cursor/create-and-deploy-new-content-b15f
      // Don't retry on the last attempt
      if (attempt === retries) {
        break;
      }

      // Calculate delay based on backoff strategy
      const currentDelay = backoff === 'exponential' 
        ? delay * Math.pow(2, attempt)
        : delay * (attempt + 1);

      // Wait before retrying
      await new Promise(resolve => setTimeout(resolve, currentDelay));
    }
  }

  throw lastError || new Error('Fetch failed after all retries');
=======
      if (attempt === retries) {
=======
>>>>>>> cursor/create-and-deploy-new-content-cc9d
    } catch (error) {
      clearTimeout(timeoutId);

<<<<<<< HEAD
      if (attempt < retries) {
        console.warn(`Fetch attempt ${attempt + 1} failed, retrying in ${retryDelay}ms:`, error);
        await new Promise(resolve => setTimeout(resolve, retryDelay * attempt));
        return attemptFetch(attempt + 1);
=======
      // Check if we should retry this error
      if (attempt === retryOptions.maxRetries || !retryOptions.retryCondition(lastError, attempt)) {
>>>>>>> 2ad069e84825dabaf46d071e81e10e505f57815a
        throw lastError;
>>>>>>> cursor/create-and-deploy-new-content-cc9d
      }

      throw error;
    }
  };

<<<<<<< HEAD
  return attemptFetch(0);
=======
    attempt++;
  }

  throw lastError!;
<<<<<<< HEAD
>>>>>>> main
=======
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
>>>>>>> 2ad069e84825dabaf46d071e81e10e505f57815a
>>>>>>> cursor/create-and-deploy-new-content-cc9d
=======
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> cursor/create-and-deploy-new-content-afc8
=======
<<<<<<< HEAD
>>>>>>> cursor/create-and-deploy-new-content-d3a3
=======
<<<<<<< HEAD
>>>>>>> cursor/create-and-deploy-new-content-8735
=======
>>>>>>> cursor/create-and-deploy-new-content-fb46
>>>>>>> cursor/create-and-deploy-new-content-b15f
>>>>>>> origin/feature/revolutionary-2027-content
=======
>>>>>>> cursor/create-and-deploy-new-content-f4f2
>>>>>>> origin/revolutionary-content-2026
=======
>>>>>>> cursor/create-and-deploy-new-content-afc8
>>>>>>> 3d1201ff466e0a9c82bed2da7dd3df054f828ce6
};

export default fetchWithRetry;
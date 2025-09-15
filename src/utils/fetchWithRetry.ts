<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 1d7fd6d1fb30cd51e67b6fec67ae4df7b2f1c915
=======
>>>>>>> cursor/create-and-deploy-new-content-425b
// Fetch utility with retry logic and error handling
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

<<<<<<< HEAD
=======
// Fetch with retry utility for better error handling
interface FetchWithRetryOptions {
  retries?: number;
  delay?: number;
  timeout?: number;
}

>>>>>>> main
=======
>>>>>>> cursor/create-and-deploy-new-content-c963
=======
>>>>>>> cursor/create-and-deploy-new-content-d3a3
=======
>>>>>>> cursor/create-and-deploy-new-content-8735
>>>>>>> cursor/create-and-deploy-new-content-425b
export const fetchWithRetry = async (
  url: string,
  options: RequestInit & FetchWithRetryOptions = {}
): Promise<Response> => {
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 1d7fd6d1fb30cd51e67b6fec67ae4df7b2f1c915
=======
>>>>>>> cursor/create-and-deploy-new-content-425b
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

>>>>>>> cursor/create-and-deploy-new-content-c963

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
=======
  const attemptFetch = async (attempt: number): Promise<Response> => {
>>>>>>> cursor/create-and-deploy-new-content-c963
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
=======

      return response;
      
<<<<<<< HEAD
>>>>>>> main
=======
>>>>>>> cursor/create-and-deploy-new-content-c963
=======
>>>>>>> cursor/create-and-deploy-new-content-d3a3
=======
>>>>>>> cursor/create-and-deploy-new-content-8735
>>>>>>> cursor/create-and-deploy-new-content-425b
      return response;
    } catch (error) {
      lastError = error as Error;
      
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 1d7fd6d1fb30cd51e67b6fec67ae4df7b2f1c915
    } catch (error) {
      clearTimeout(timeoutId);

=======
>>>>>>> cursor/create-and-deploy-new-content-425b
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
    } catch (error) {
      clearTimeout(timeoutId);

      if (attempt < retries) {
        console.warn(`Fetch attempt ${attempt + 1} failed, retrying in ${retryDelay}ms:`, error);
        await new Promise(resolve => setTimeout(resolve, retryDelay * attempt));
        return attemptFetch(attempt + 1);
>>>>>>> cursor/create-and-deploy-new-content-c963
        throw lastError;
>>>>>>> cursor/create-and-deploy-new-content-cc9d
      }

      throw error;
    }
  };

<<<<<<< HEAD
=======
  return attemptFetch(0);
>>>>>>> cursor/create-and-deploy-new-content-c963
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
<<<<<<< HEAD
=======
=======
>>>>>>> cursor/create-and-deploy-new-content-d3a3
=======
>>>>>>> cursor/create-and-deploy-new-content-8735
>>>>>>> cursor/create-and-deploy-new-content-425b
};


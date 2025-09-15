=======
>>>>>>> cursor/create-and-deploy-new-content-d3a3
=======
>>>>>>> cursor/create-and-deploy-new-content-8735
=======
>>>>>>> cursor/create-and-deploy-new-content-f977
>>>>>>> 75eb4d630573de2c91ceda573e859cd83b99c68c
export const fetchWithRetry = async (
  url: string,
  options: RequestInit & FetchWithRetryOptions = {}
): Promise<Response> => {

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
=======
>>>>>>> cursor/create-and-deploy-new-content-d3a3
=======
>>>>>>> cursor/create-and-deploy-new-content-8735
=======
>>>>>>> cursor/create-and-deploy-new-content-f977
>>>>>>> 75eb4d630573de2c91ceda573e859cd83b99c68c
      return response;
    } catch (error) {
      lastError = error as Error;
      
    } catch (error) {
      clearTimeout(timeoutId);

        throw lastError;
>>>>>>> cursor/create-and-deploy-new-content-cc9d
      }

      throw error;
    }
  };

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
>>>>>>> cursor/create-and-deploy-new-content-d3a3
=======
>>>>>>> cursor/create-and-deploy-new-content-8735
=======
>>>>>>> cursor/create-and-deploy-new-content-f977
>>>>>>> 75eb4d630573de2c91ceda573e859cd83b99c68c
};

export default fetchWithRetry;
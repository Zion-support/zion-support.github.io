


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



      return response;
    } catch (error) {
      lastError = error as Error;
      

        throw lastError;
>>>>>>> cursor/create-and-deploy-new-content-cc9d
      }

      throw error;
    }
  };



>>>>>>> cursor/create-and-deploy-new-content-cc9d


};


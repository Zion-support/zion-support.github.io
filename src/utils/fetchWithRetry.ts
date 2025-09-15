<<<<<<< HEAD
<<<<<<< HEAD
// Fetch with retry utility
interface FetchWithRetryOptions {
  retries?: number;
  delay?: number;
  backoff?: number;
=======
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

>>>>>>> cursor/create-and-deploy-new-content-60ab
=======
// Fetch with retry utility for better error handling
interface FetchWithRetryOptions {
  retries?: number;
  delay?: number;
>>>>>>> cursor/create-and-deploy-new-content-c934
  timeout?: number;
}

>>>>>>> main
export const fetchWithRetry = async (
  url: string,
  options: RequestInit & FetchWithRetryOptions = {}
): Promise<Response> => {
<<<<<<< HEAD
<<<<<<< HEAD
  const {
    retries = 3,
    delay = 1000,
    backoff = 2,
    timeout = 10000,
    ...fetchOptions
  } = options;

  let lastError: Error | null = null;

=======
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

>>>>>>> cursor/create-and-deploy-new-content-60ab
=======
  const { retries = 3, delay = 1000, timeout = 10000, ...fetchOptions } = options;
  
  let lastError: Error;
  
>>>>>>> cursor/create-and-deploy-new-content-c934
  for (let attempt = 0; attempt <= retries; attempt++) {
    try {
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), timeout);
<<<<<<< HEAD

=======
      
>>>>>>> cursor/create-and-deploy-new-content-c934
      const response = await fetch(url, {
        ...fetchOptions,
        signal: controller.signal,
      });
<<<<<<< HEAD

      clearTimeout(timeoutId);

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
=======
      
      clearTimeout(timeoutId);
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
>>>>>>> main
      return response;
    } catch (error) {
      lastError = error as Error;
      
<<<<<<< HEAD
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
        throw lastError;
      }
      
      // Wait before retrying
      await new Promise(resolve => setTimeout(resolve, delay * Math.pow(2, attempt)));
    }
  }
  
  throw lastError!;
<<<<<<< HEAD
>>>>>>> cursor/create-and-deploy-new-content-c934
=======
>>>>>>> main
>>>>>>> cursor/create-and-deploy-new-content-60ab
};

export default fetchWithRetry;
interface FetchOptions extends RequestInit {
  retries?: number;
  retryDelay?: number;
}

export async function fetchWithRetry(
  url: string;
  options: FetchOptions = {}
): Promise<Response> {
  const { retries = 3, retryDelay = 1000, ...fetchOptions } = options;
  
  let lastError: Error;
  
  for (let attempt = 0; attempt <= retries; attempt++) {
    try {
      const response = await fetch(url, fetchOptions);
      
      // If the response is ok, return it
      if (response.ok) {
        return response;
      }
      
      // If it's the last attempt, return the response even if it's not ok
      if (attempt === retries) {
        return response;
      }
      
      // For non-ok responses, throw an error to trigger retry
      throw new Error(`HTTP ${response.status}: ${response.statusText}`);
    } catch (error) {
      lastError = error as Error;
      
      // If it's the last attempt, throw the error
      if (attempt === retries) {
        throw lastError;
      }
      
      // Wait before retrying
      await new Promise(resolve => setTimeout(resolve, retryDelay * Math.pow(2, attempt)));
    }
  }
  
  throw lastError!;
}
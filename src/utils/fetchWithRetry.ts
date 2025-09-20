interface FetchOptions extends RequestInit {
  retries?: number;
  retryDelay?: number;
}

export async function fetchWithRetry(
  url: string,
  options: FetchOptions = {}
): Promise<Response> {
  const { retries = 3, retryDelay = 1000, ...fetchOptions } = options;

  for (let attempt = 0; attempt <= retries; attempt++) {
    try {
      const response = await fetch(url, fetchOptions);
      
      if (response.ok) {
        return response;
      }
      
      if (attempt === retries) {
        return response;
      }
    } catch (error) {
      if (attempt === retries) {
        throw error;
      }
    }
    
    // Wait before retrying
    if (attempt < retries) {
      await new Promise(resolve => setTimeout(resolve, retryDelay * Math.pow(2, attempt)));
    }
  }
  
  throw new Error('Max retries exceeded');
}
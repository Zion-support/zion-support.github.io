// API base URL - will use proxy in development, direct URL in production
const API_BASE_URL = import.meta.env.DEV ? '/api' : 'http://localhost:5000/api';

// Generic API response type
interface ApiResponse<T = any> {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
  count?: number;
}

// Generic API error
class ApiError extends Error {
  constructor(public status: number, message: string) {
    super(message);
    this.name = 'ApiError';
  }
}

// Generic fetch wrapper with error handling
async function apiRequest<T>(
  endpoint: string,
  options: RequestInit = {}
): Promise<ApiResponse<T>> {
  const url = `${API_BASE_URL}${endpoint}`;
  
  const config: RequestInit = {
    headers: {
      'Content-Type': 'application/json',
      ...options.headers,
    },
    ...options,
  };

  try {
    const response = await fetch(url, config);
    
    if (!response.ok) {
      throw new ApiError(response.status, `HTTP error! status: ${response.status}`);
    }
    
    const data = await response.json();
    return data;
  } catch (error) {
    if (error instanceof ApiError) {
      throw error;
    }
    throw new ApiError(500, `Network error: ${error instanceof Error ? error.message : 'Unknown error'}`);
  }
}

interface ApiClientOptions {
  method?: string;
  body?: string;
  headers?: Record<string, string>;
}

export async function apiClient(endpoint: string, options: ApiClientOptions = {}) {
  const { method = 'GET', body, headers = {} } = options;
  
  const config: RequestInit = {
    method,
    headers: {
      'Content-Type': 'application/json',
      ...headers,
    },
  };

  if (body) {
    config.body = body;
  }

  try {
    const response = await fetch(endpoint, config);
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    return await response.json();
  } catch (error) {
    console.error('API request failed:', error);
    throw error;
  }
}

export const api = {
  get: (endpoint: string, headers?: Record<string, string>) => 
    apiClient(endpoint, { method: 'GET', headers }),
  
  post: (endpoint: string, data: any, headers?: Record<string, string>) => 
    apiClient(endpoint, { method: 'POST', body: JSON.stringify(data), headers }),
  
  put: (endpoint: string, data: any, headers?: Record<string, string>) => 
    apiClient(endpoint, { method: 'PUT', body: JSON.stringify(data), headers }),
  
  delete: (endpoint: string, headers?: Record<string, string>) => 
    apiClient(endpoint, { method: 'DELETE', headers }),
};

// Export types for use in components
export type { ApiResponse };
export { ApiError };
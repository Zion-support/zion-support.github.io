import { API_BASE_URL } from '../config/constants';

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
    apiClient(endpoint, { method: 'GET', headers: headers || {} }),
  
  post: (endpoint: string, data: any, headers?: Record<string, string>) => 
    apiClient(endpoint, { method: 'POST', body: JSON.stringify(data), headers: headers || {} }),
  
  put: (endpoint: string, data: any, headers?: Record<string, string>) => 
    apiClient(endpoint, { method: 'PUT', body: JSON.stringify(data), headers: headers || {} }),
  
  delete: (endpoint: string, headers?: Record<string, string>) => 
    apiClient(endpoint, { method: 'DELETE', headers: headers || {} }),
};

// Export types for use in components
export type { ApiResponse };
export { ApiError };
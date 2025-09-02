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
  headers?: Record<string, string>;
  body?: string;
  timeout?: number;
}

// Generic API client function
async function apiClient<T>(
  endpoint: string,
  options: ApiClientOptions = {}
): Promise<ApiResponse<T>> {
  const {
    method = 'GET',
    headers = {},
    body,
    timeout = 10000
  } = options;

  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), timeout);

  try {
    const response = await fetch(`${API_BASE_URL}${endpoint}`, {
      method,
      headers: {
        'Content-Type': 'application/json',
        ...headers,
      },
      body,
      signal: controller.signal,
    });

    clearTimeout(timeoutId);

    if (!response.ok) {
      throw new ApiError(response.status, `HTTP ${response.status}: ${response.statusText}`);
    }

    const data = await response.json();
    return {
      success: true,
      data,
    };
  } catch (error) {
    clearTimeout(timeoutId);
    
    if (error instanceof ApiError) {
      throw error;
    }
    
    throw new ApiError(0, error instanceof Error ? error.message : 'Unknown error occurred');
  }
}

// API methods
export const api = {
  get: <T>(endpoint: string, headers?: Record<string, string>) =>
    apiClient<T>(endpoint, { method: 'GET', headers }),

  post: <T>(endpoint: string, data: any, headers?: Record<string, string>) =>
    apiClient<T>(endpoint, { method: 'POST', body: JSON.stringify(data), headers }),

  put: <T>(endpoint: string, data: any, headers?: Record<string, string>) =>
    apiClient<T>(endpoint, { method: 'PUT', body: JSON.stringify(data), headers }),

  delete: <T>(endpoint: string, headers?: Record<string, string>) =>
    apiClient<T>(endpoint, { method: 'DELETE', headers }),
};

export { ApiError };
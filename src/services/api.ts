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

// API methods
export const api = {
  // Health check
  health: () => apiRequest('/health'),
  
  // Users
  getUsers: () => apiRequest<Array<{ id: number; name: string; email: string }>>('/users'),
  getUser: (id: number) => apiRequest<{ id: number; name: string; email: string }>(`/users/${id}`),
  createUser: (userData: { name: string; email: string }) => 
    apiRequest<{ id: number; name: string; email: string; createdAt: string }>('/users', {
      method: 'POST',
      body: JSON.stringify(userData),
    }),
};

// Export types for use in components
export type { ApiResponse };
export { ApiError };
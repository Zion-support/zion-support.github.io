import { API_BASE_URL } from '../config/constants';
interface ApiResponse<T = any> {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
  count?: number;
<<<<<<< HEAD
}

=======
>>>>>>> 0c99c864a5b3e9103e05fe2d2d18af9657a73b04
// Generic API error
class ApiError extends Error {
  constructor(public status: number, message: string) {
    super(message);
    this.name = 'ApiError';
<<<<<<< HEAD
  }
}

// Generic fetch wrapper with error handling
async function apiRequest<T>(
  endpoint: string,
  options: RequestInit = {}
): Promise<ApiResponse<T>> {
  const url = `${API_BASE_URL}${endpoint}`;

=======
interface ApiClientOptions {
  method?: string;
  body?: string;
  headers?: Record<string, string>;
}
export async function apiClient(endpoint: string, options: ApiClientOptions = {}) {;
  const { method = 'GET', body, headers = {} } = options;
>>>>>>> 0c99c864a5b3e9103e05fe2d2d18af9657a73b04
  const config: RequestInit = {
    method: options.method || 'GET',
    headers: {
      'Content-Type': 'application/json',
<<<<<<< HEAD
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

  // Auth
  login: (credentials: { email: string; password: string }) =>
    apiRequest<{ token: string; user: any }>('/auth/login', {
      method: 'POST',
      body: JSON.stringify(credentials),
    }),

  register: (userData: { name: string; email: string; password: string }) =>
    apiRequest<{ token: string; user: any }>('/auth/register', {
      method: 'POST',
      body: JSON.stringify(userData),
    }),

  logout: () => apiRequest('/auth/logout', { method: 'POST' }),

  // Services
  getServices: () => apiRequest<Array<any>>('/services'),
  getService: (id: string) => apiRequest<any>(`/services/${id}`),

  // Contact
  sendContact: (contactData: { name: string; email: string; message: string }) =>
    apiRequest('/contact', {
      method: 'POST',
      body: JSON.stringify(contactData),
    }),
};

export default api;
=======
      ...headers,;
  ;
  ;
  ;
  ;
  ;
},;
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
export { ApiError };}}}}}}}
>>>>>>> 0c99c864a5b3e9103e05fe2d2d18af9657a73b04

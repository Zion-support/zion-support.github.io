import { API_BASE_URL              } from '../config/constants';

>>>>>>> 4cc4a42f69bd95988691b9548650af1405020894
interface ApiResponse<T = any> {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
  count?: number;
// Generic API error
class ApiError extends Error {
  constructor(public status: number, message: string) {
    super(message);
    this.name = 'ApiError';


>>>>>>> 4cc4a42f69bd95988691b9548650af1405020894
interface ApiClientOptions {













  method?: string;
  body?: string;
  headers?: Record<string, any>;













}

export async function apiClient(...args: any[]): any {;
>>>>>>> 4cc4a42f69bd95988691b9548650af1405020894
  const { method = 'GET', body, headers = {} } = options;
  const config: RequestInit = {
    method: options.method || 'GET',
    headers: {
      'Content-Type': 'application/json',
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
  get: anyanyanyanyanyanyanyanyanyanyanyanyany(endpoint: string, headers?: Record<string, any>)              => 
    apiClient(endpoint, { method: anyanyanyanyanyanyanyanyanyanyanyanyany'GET', headers: headers || {} }),
  
  post: (endpoint: string, data: , headers?: Record<string, any>)              => 
    apiClient(endpoint, { method: anyanyanyanyanyanyanyanyanyanyanyanyany'POST', body: JSON.stringify(data), headers: headers || {} }),
  
  put: (endpoint: string, data: , headers?: Record<string, any>)              => 
    apiClient(endpoint, { method: anyanyanyanyanyanyanyanyanyanyanyanyany'PUT', body: JSON.stringify(data), headers: headers || {} }),
  
  delete: (endpoint: string, headers?: Record<string, any>)              => 
>>>>>>> 4cc4a42f69bd95988691b9548650af1405020894
    apiClient(endpoint, { method: 'DELETE', headers: headers || {} }),
};
// Export types for use in components
export type { ApiResponse };
export { ApiError };}}}}}}}

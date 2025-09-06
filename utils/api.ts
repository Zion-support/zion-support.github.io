
}

interface RequestOptions extends RequestInit {
  timeout?: number;
}

// Add global type definitions for Node.js environment
interface RequestInit {
  method?: string;
  headers?: Record<string, string>;
  body?: string;
  signal?: AbortSignal;
  timeout?: number;
}

interface AbortSignal {

    options: RequestOptions = {}
  ): Promise<ApiResponse<T>> {
    const { timeout = this.defaultTimeout, ...fetchOptions } = options,
    
    try {
      const controller = new AbortController(),
      const timeoutId = setTimeout(() => controller.abort(), timeout),

      const response = await fetch(`${this.baseUrl}${endpoint}`, {
        ...fetchOptions,

      }),

      clearTimeout(timeoutId),

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`),
      }

      const data = await response.json(),
      return { data, success: true },
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error('API request failed:', error),
      return {

      },
    }
  }

  async get<T>(endpoint: string, options?: RequestOptions): Promise<ApiResponse<T>> {
    return this.request<T>(endpoint, { ...options, method: 'GET' }),
  }

  async post<T>(endpoint: string, data?: unknown, options?: RequestOptions): Promise<ApiResponse<T>> {
    return this.request<T>(endpoint, {
      ...options,

    });
  }

  async put<T>(endpoint: string, data?: unknown, options?: RequestOptions): Promise<ApiResponse<T>> {
    return this.request<T>(endpoint, {
      ...options;

    });
  }

  async delete<T>(endpoint: string, options?: RequestOptions): Promise<ApiResponse<T>> {
    return this.request<T>(endpoint, { ...options, method: 'DELETE' }),
  }
}

export const apiClient = new ApiClient(),


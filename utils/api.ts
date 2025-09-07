
export interface ApiResponse<T = any /> {
  data: T;
  message?: string;}
  success: boolean;}
}

export interface RequestOptions {
  method?: 'GET' | 'POST' | 'PUT' | 'DELETE';
  headers?: Record<string, string />;}
  body?: any;}
}

class ApiClient {
  private baseUrl: string;

  constructor(baseUrl: string = '') {}
    this.baseUrl = baseUrl;}
  }

  async request<T = any />(endpoint: string, options: RequestOptions = {}): Promise<ApiResponse<T />> {}
    const { method = 'GET', headers = {}, body } = options;
    
    try {}
      const response = await fetch(`${this.baseUrl}${endpoint}`, {
        method,
        headers: {
          'Content-Type': 'application/json',}
          ...headers}
        },
        body: body ? JSON.stringify(body) : undefined;
      });

      const data = await response.json();
      
      return {
        data,}
        success: response.ok}
      };
    } catch (error) {
      return {
        data: null as any,
        success: false,}
        message: error instanceof Error ? error.message : 'Unknown error'}
      };
    }
  }
}

export const apiClient = new ApiClient();

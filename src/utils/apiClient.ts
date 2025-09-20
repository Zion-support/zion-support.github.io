class ApiError extends Error {
  constructor(
    message: string,
    public status: number,
    public data?: any
  ) {
    super(message);
    this.name = "ApiError";
  }
}

class ApiClient {
  private baseURL: string;
  private timeout: number;
  private retries: number;

  constructor(baseURL: string = process.env.NEXT_PUBLIC_API_URL || "https://api.ziontechgroup.com") {
    this.baseURL = baseURL;
    this.timeout = 10000;
    this.retries = 3;
  }

  async request<T>(
    endpoint: string,
    options: RequestInit = {}
  ): Promise<T> {
    const url = `${this.baseURL}${endpoint}`;
    let lastError: Error;

    for (let attempt = 0; attempt < this.retries; attempt++) {
      try {
        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), this.timeout);

        const response = await fetch(url, {
          ...options,
          signal: controller.signal,
          headers: {
            "Content-Type": "application/json",
            ...options.headers,
          },
        });

        clearTimeout(timeoutId);

        if (!response.ok) {
          let data;
          try {
            data = await response.clone().json();
          } catch {
            data = undefined;
          }
          const message = data?.error || data?.message || response.statusText;
          throw new ApiError(message, response.status, data);
        }

        return await response.json();
      } catch (err) {
        lastError = err as Error;
        // Network errors are usually TypeError
        if (err instanceof TypeError && attempt < this.retries - 1) {
          continue;
        }
        throw err;
      }
    }

    throw lastError!;
  }

  async get<T>(endpoint: string, options: RequestInit = {}): Promise<T> {
    return this.request<T>(endpoint, { ...options, method: "GET" });
  }

  async post<T>(endpoint: string, data: any, options: RequestInit = {}): Promise<T> {
    return this.request<T>(endpoint, {
      ...options,
      method: "POST",
      body: JSON.stringify(data),
    });
  }

  async put<T>(endpoint: string, data: any, options: RequestInit = {}): Promise<T> {
    return this.request<T>(endpoint, {
      ...options,
      method: "PUT",
      body: JSON.stringify(data),
    });
  }

  async delete<T>(endpoint: string, options: RequestInit = {}): Promise<T> {
    return this.request<T>(endpoint, { ...options, method: "DELETE" });
  }
}

export { ApiClient, ApiError };
export default ApiClient;
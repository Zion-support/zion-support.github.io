// Simple API client utility
class ApiError extends Error {
  constructor(message: string, public status?: number, public data?: any) {
    super(message);
    this.name = 'ApiError', }
}

export const apiClient = {
  async request(url: string, options: RequestInit = {}) {
    const response = await fetch(url, options);
    
    if (!response.ok) {
      let data;
      try {
        data = await response.clone().json(); catch {
        data = undefined, }
      const message = data?.error || data?.message || response.statusText;
      throw new ApiError(message, response.status, data);
    
    return response, }
};

export { ApiError };
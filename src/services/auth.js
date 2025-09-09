// Authentication service
export class AuthService {
  constructor() {
    this.baseUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000/api';
  }

  async get() {
    try {
      const response = await fetch(`${this.baseUrl}/auth`);
      return await response.json();
    } catch (error) {
      throw error;
    }
  }
}

// Create and export a singleton instance
const authService = new AuthService();
export default authService;

export const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000/api';
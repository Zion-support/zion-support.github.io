// Authentication service
export class AuthService {
  constructor() {
    this.baseUrl = process.env.REACT_APP_API_URL || 'http://localhost:3001/api';
  }

  async get() {
    try {
      const response = await fetch(`${this.baseUrl}/auth`);
      return await response.json();
    } catch (error) {
      throw error;
    }
  }

  async login(credentials) {
    try {
      const response = await fetch(`${this.baseUrl}/auth/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(credentials),
      });
      return await response.json();
    } catch (error) {
      throw error;
    }
  }

  async register(userData) {
    try {
      const response = await fetch(`${this.baseUrl}/auth/register`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      });
      return await response.json();
    } catch (error) {
      throw error;
    }
  }

  async logout() {
    try {
      const response = await fetch(`${this.baseUrl}/auth/logout`, {
        method: 'POST',
      });
      return await response.json();
    } catch (error) {
      throw error;
    }
  }
}

// Create and export a singleton instance
const authService = new AuthService();
export default authService;

export const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:3001/api';
// Mock authentication service
// In a real application, this would connect to your backend API

const API_BASE_URL = process.env.REACT_APP_API_URL || 'https://api.zion.com';

class AuthService {
  constructor() {
    this.token = localStorage.getItem('token');
    this.user = JSON.parse(localStorage.getItem('user') || 'null');
  }

  // Login user
  async login(credentials) {
    try {
      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 1000));

      // Mock validation
      if (!credentials.email || !credentials.password) {
        throw new Error('Email and password are required');
      }

      // Mock successful login
      const mockUser = {
        id: 1,
        email: credentials.email,
        name: 'John Doe',
        role: 'user',
        avatar: null,
        createdAt: new Date().toISOString()
      };

      const mockToken = 'mock-jwt-token-' + Date.now();

      // Store in localStorage
      this.token = mockToken;
      this.user = mockUser;
      localStorage.setItem('token', mockToken);
      localStorage.setItem('user', JSON.stringify(mockUser));

      return {
        user: mockUser,
        token: mockToken
      };
    } catch (error) {
      throw new Error(error.message || 'Login failed');
    }
  }

  // Register user
  async register(userData) {
    try {
      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 1000));

      // Mock validation
      if (!userData.email || !userData.password || !userData.name) {
        throw new Error('Name, email, and password are required');
      }

      // Mock successful registration
      const mockUser = {
        id: Date.now(),
        email: userData.email,
        name: userData.name,
        role: 'user',
        avatar: null,
        createdAt: new Date().toISOString()
      };

      const mockToken = 'mock-jwt-token-' + Date.now();

      // Store in localStorage
      this.token = mockToken;
      this.user = mockUser;
      localStorage.setItem('token', mockToken);
      localStorage.setItem('user', JSON.stringify(mockUser));

      return {
        user: mockUser,
        token: mockToken
      };
    } catch (error) {
      throw new Error(error.message || 'Registration failed');
    }
  }

  // Logout user
  async logout() {
    try {
      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 500));

      // Clear localStorage
      this.token = null;
      this.user = null;
      localStorage.removeItem('token');
      localStorage.removeItem('user');

      return { success: true };
    } catch (error) {
      throw new Error(error.message || 'Logout failed');
    }
  }

  // Get current user
  getCurrentUser() {
    return this.user;
  }

  // Get current token
  getCurrentToken() {
    return this.token;
  }

  // Check if user is authenticated
  isAuthenticated() {
    return !!this.token && !!this.user;
  }

  // Refresh token
  async refreshToken() {
    try {
      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 500));

      if (!this.token) {
        throw new Error('No token to refresh');
      }

      // Mock token refresh
      const newToken = 'mock-jwt-token-' + Date.now();
      this.token = newToken;
      localStorage.setItem('token', newToken);

      return { token: newToken };
    } catch (error) {
      throw new Error(error.message || 'Token refresh failed');
    }
  }

  // Update user profile
  async updateProfile(updates) {
    try {
      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 1000));

      if (!this.user) {
        throw new Error('User not authenticated');
      }

      // Update user data
      this.user = { ...this.user, ...updates };
      localStorage.setItem('user', JSON.stringify(this.user));

      return { user: this.user };
    } catch (error) {
      throw new Error(error.message || 'Profile update failed');
    }
  }

  // Change password
  async changePassword(currentPassword, newPassword) {
    try {
      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 1000));

      if (!this.user) {
        throw new Error('User not authenticated');
      }

      // Mock password validation
      if (currentPassword === 'wrong') {
        throw new Error('Current password is incorrect');
      }

      return { success: true, message: 'Password changed successfully' };
    } catch (error) {
      throw new Error(error.message || 'Password change failed');
    }
  }

  // Request password reset
  async requestPasswordReset(email) {
    try {
      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 1000));

      if (!email) {
        throw new Error('Email is required');
      }

      return { success: true, message: 'Password reset email sent' };
    } catch (error) {
      throw new Error(error.message || 'Password reset request failed');
    }
  }

  // Reset password with token
  async resetPassword(token, newPassword) {
    try {
      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 1000));

      if (!token || !newPassword) {
        throw new Error('Token and new password are required');
      }

      return { success: true, message: 'Password reset successfully' };
    } catch (error) {
      throw new Error(error.message || 'Password reset failed');
    }
  }

  // Verify email
  async verifyEmail(token) {
    try {
      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 1000));

      if (!token) {
        throw new Error('Verification token is required');
      }

      if (this.user) {
        this.user.emailVerified = true;
        localStorage.setItem('user', JSON.stringify(this.user));
      }

      return { success: true, message: 'Email verified successfully' };
    } catch (error) {
      throw new Error(error.message || 'Email verification failed');
    }
  }

  // Get user permissions
  getUserPermissions() {
    if (!this.user) return [];

    // Mock permissions based on user role
    const permissions = {
      user: ['read:own', 'write:own'],
      admin: ['read:all', 'write:all', 'delete:all', 'manage:users'],
      moderator: ['read:all', 'write:all', 'moderate:content']
    };

    return permissions[this.user.role] || [];
  }

  // Check if user has permission
  hasPermission(permission) {
    const permissions = this.getUserPermissions();
    return permissions.includes(permission);
  }
}

// Create and export a singleton instance
const authService = new AuthService();
export default authService;
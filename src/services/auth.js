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
      
      return true;
    } catch (error) {
      throw new Error('Logout failed');
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

  // Check if user has specific role
  hasRole(role) {
    return this.user && this.user.role === role;
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
      const newToken = 'mock-jwt-token-refreshed-' + Date.now();
      this.token = newToken;
      localStorage.setItem('token', newToken);
      
      return newToken;
    } catch (error) {
      throw new Error('Token refresh failed');
    }
  }

  // Forgot password
  async forgotPassword(email) {
    try {
      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      if (!email) {
        throw new Error('Email is required');
      }
      
      // Mock successful password reset request
      return {
        message: 'Password reset email sent successfully',
        email: email
      };
    } catch (error) {
      throw new Error(error.message || 'Password reset request failed');
    }
  }

  // Reset password
  async resetPassword(token, newPassword) {
    try {
      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      if (!token || !newPassword) {
        throw new Error('Token and new password are required');
      }
      
      // Mock successful password reset
      return {
        message: 'Password reset successfully'
      };
    } catch (error) {
      throw new Error(error.message || 'Password reset failed');
    }
  }

  // Update user profile
  async updateProfile(profileData) {
    try {
      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      if (!this.isAuthenticated()) {
        throw new Error('User not authenticated');
      }
      
      // Mock profile update
      const updatedUser = {
        ...this.user,
        ...profileData,
        updatedAt: new Date().toISOString()
      };
      
      this.user = updatedUser;
      localStorage.setItem('user', JSON.stringify(updatedUser));
      
      return updatedUser;
    } catch (error) {
      throw new Error(error.message || 'Profile update failed');
    }
  }

  // Change password
  async changePassword(currentPassword, newPassword) {
    try {
      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      if (!this.isAuthenticated()) {
        throw new Error('User not authenticated');
      }
      
      if (!currentPassword || !newPassword) {
        throw new Error('Current and new passwords are required');
      }
      
      // Mock password change
      return {
        message: 'Password changed successfully'
      };
    } catch (error) {
      throw new Error(error.message || 'Password change failed');
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
      
      // Mock email verification
      if (this.user) {
        this.user.emailVerified = true;
        this.user.verifiedAt = new Date().toISOString();
        localStorage.setItem('user', JSON.stringify(this.user));
      }
      
      return {
        message: 'Email verified successfully'
      };
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

  // Check if user has specific permission
  hasPermission(permission) {
    const permissions = this.getUserPermissions();
    return permissions.includes(permission);
  }
}

// Create singleton instance
const authService = new AuthService();

// Named exports for commonly used methods
export const login = (credentials) => authService.login(credentials);
export const register = (userData) => authService.register(userData);
export const logout = () => authService.logout();
export const getCurrentUser = () => authService.getCurrentUser();
export const isAuthenticated = () => authService.isAuthenticated();

export default authService;
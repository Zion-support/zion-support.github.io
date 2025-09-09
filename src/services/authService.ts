import { User } from '@/context/auth/AuthProvider';

export interface LoginCredentials {
  email: string;
  password: string;
}

export interface RegisterCredentials {
  email: string;
  password: string;
  name: string;
}

export interface AuthResponse {
  user: User;
  token: string;
}

export const loginUser = async (email: string, password: string): Promise<AuthResponse> => {
  // Mock implementation - replace with actual API call
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (email === 'test@example.com' && password === 'password') {
        resolve({
          user: {
            id: '1',
            email: email,
            name: 'Test User',
            avatar: undefined,
          },
          token: 'mock-jwt-token',
        });
      } else {
        reject(new Error('Invalid credentials'));
      }
    }, 1000);
  });
};

export const registerUser = async (credentials: RegisterCredentials): Promise<AuthResponse> => {
  // Mock implementation - replace with actual API call
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        user: {
          id: '1',
          email: credentials.email,
          name: credentials.name,
          avatar: undefined,
        },
        token: 'mock-jwt-token',
      });
    }, 1000);
  });
};

export const logoutUser = async (): Promise<void> => {
  // Mock implementation - replace with actual API call
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, 500);
  });
};

export const refreshToken = async (): Promise<string> => {
  // Mock implementation - replace with actual API call
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('new-mock-jwt-token');
    }, 500);
  });
};
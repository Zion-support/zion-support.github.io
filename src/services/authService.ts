import axios from 'axios';
import { toast } from '@/hooks/use-toast';
import { safeStorage } from '@/utils/safeStorage';
import { store } from '@/store';
import { setToken } from '@/store/authSlice';
import { logDev, logError } from '@/utils/productionLogger';

export interface LoginCredentials {
  email: string;
  password: string;
}

export async function registerUser(name: string, email: string, password: string) {
  const endpoint = `${API_URL}/auth/register`;
  try {
    const res = await axios.post(endpoint, { name, email, password });
    logDev('Register API Response Status:', res.status);
    logDev('Register API Response Body:', res.data);
    return { res, data: res.data };
  } catch (err) {
    logError('Register API error:', err);
    throw err;
  }
}

export interface AuthResponse {
  user: User;
  token: string;
}

export const loginUser = async (credentials: LoginCredentials): Promise<AuthResponse> => {
  // This is a mock implementation - replace with actual API call
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        user: {
          id: '1',
          email: credentials.email,
          name: 'User',
        },
        token: 'mock-token',
      });
    }, 1000);
  });
};

export const registerUser = async (credentials: RegisterCredentials): Promise<AuthResponse> => {
  // This is a mock implementation - replace with actual API call
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        user: {
          id: '1',
          email: credentials.email,
          name: credentials.name,
        },
        token: 'mock-token',
      });
    }, 1000);
  });
};

export const logoutUser = async (): Promise<void> => {
  // This is a mock implementation - replace with actual API call
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, 500);
  });
};
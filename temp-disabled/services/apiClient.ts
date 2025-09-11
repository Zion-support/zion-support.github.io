import axios, { AxiosError, AxiosResponse } from 'axios';
import { toast } from '@/hooks/use-toast';
import { supabase } from '@/integrations/supabase/client';

interface ApiErrorResponse {
  message?: string;
  error?: string;
}

const apiClient = axios.create({
  baseURL: '/api',
  withCredentials: true,
});

apiClient.interceptors.response.use(
  (response: AxiosResponse) => response,
  async (error: AxiosError<ApiErrorResponse>) => {
    if (error.response?.status === 401) {
      try {
        await supabase.auth.signOut({ scope: 'global' });
      } catch (e) {
        console.error('Failed to logout after 401', e);
      }
      if (typeof window !== 'undefined') {
        window.location.assign('/login');
      }
    } else {
      const message =
        error.response?.data?.message ||
        error.response?.data?.error ||
        'Something went wrong';
      toast.error(message);
    }
    return Promise.reject(new Error(error.message || 'API request failed'));
  }
);

export default apiClient;

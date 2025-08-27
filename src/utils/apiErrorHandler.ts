/**
 * API Error Handler utility for consistent error handling across the application
 */
import { toast } from '@/hooks/use-toast';
export interface ApiError {
  message?: string;
  status?: number;
  code?: string;
  details?: any;
}
/**
 * Shows an API error using toast notifications
 */
export const showApiError = (error: any, fallbackMessage?: string): void => {
  let errorMessage = fallbackMessage || 'An unexpected error occurred';
  
  // Handle different error formats
  if (typeof error === 'string') {
    errorMessage = error;
  } else if (error?.message) {
    errorMessage = error.message;
  } else if (error?.error) {
    errorMessage = error.error;
  } else if (error?.data?.message) {
    errorMessage = error.data.message;
  } else if (error?.response?.data?.message) {
    errorMessage = error.response.data.message;
  }
  // Show error toast
  toast({
    title: 'Error',
    description: errorMessage,
    variant: 'destructive',
  });
  // Log error for debugging
  console.error('API Error:', error);
};
/**
 * Handles HTTP status codes and shows appropriate error messages
 */
export const handleHttpError = (status: number, error?: any): void => {
  let message = 'An unexpected error occurred';
  
  switch (status) {
    case 400:
      message = 'Bad request. Please check your input.';
      break;
    case 401:
      message = 'Unauthorized. Please log in again.';
      break;
    case 403:
      message = 'Access denied. You don\'t have permission for this action.';
      break;
    case 404:
      message = 'Resource not found.';
      break;
    case 409:
      message = 'Conflict. This resource already exists.';
      break;
    case 422:
      message = 'Validation error. Please check your input.';
      break;
    case 429:
      message = 'Too many requests. Please try again later.';
      break;
    case 500:
      message = 'Internal server error. Please try again later.';
      break;
    case 502:
      message = 'Bad gateway. Please try again later.';
      break;
    case 503:
      message = 'Service unavailable. Please try again later.';
      break;
    case 504:
      message = 'Gateway timeout. Please try again later.';
      break;
    default:
      if (error?.message) {
        message = error.message;
      }
  }
  showApiError({ message }, message);
};
/**
 * Safely extracts error message from various error formats
 */
export const extractErrorMessage = (error: any): string => {
  if (typeof error === 'string') {
    return error;
  }
  
  if (error?.message) {
    return error.message;
  }
  
  if (error?.error) {
    return error.error;
  }
  
  if (error?.data?.message) {
    return error.data.message;
  }
  
  if (error?.response?.data?.message) {
    return error.response.data.message;
  }
  
  if (error?.response?.data?.error) {
    return error.response.data.error;
  }
  
  return 'An unexpected error occurred';
};
/**
 * Checks if an error is a network error
 */
export const isNetworkError = (error: any): boolean => {
  return (
    error?.code === 'NETWORK_ERROR' ||
    error?.message?.includes('Network Error') ||
    error?.message?.includes('Failed to fetch') ||
    !navigator.onLine
  );
};
/**
 * Shows a network error message
 */
export const showNetworkError = (): void => {
  toast({
    title: 'Network Error',
    description: 'Please check your internet connection and try again.',
    variant: 'destructive',
  });
};
/**
 * Handles authentication errors specifically
 */
export const handleAuthError = (error: any): void => {
  const message = extractErrorMessage(error);
  
  if (message.includes('token') || message.includes('expired') || message.includes('invalid')) {
    toast({
      title: 'Authentication Error',
      description: 'Please log in again to continue.',
      variant: 'destructive',
    });
  } else {
    showApiError(error, 'Authentication failed');
  }
};
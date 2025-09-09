// Simple API error handler utility
export const handleApiError = (error, context = '') => {
  console.error('API Error:', { error: error?.message || error, context, timestamp: new Date().toISOString() });
  
  if (error?.response?.status === 401) {
    // Handle unauthorized errors
    return { type: 'unauthorized', message: 'Please log in again' };
  }
  
  if (error?.response?.status === 403) {
    // Handle forbidden errors
    return { type: 'forbidden', message: 'You do not have permission to perform this action' };
  }
  
  if (error?.response?.status === 404) {
    // Handle not found errors
    return { type: 'not_found', message: 'The requested resource was not found' };
  }
  
  if (error?.response?.status >= 500) {
    // Handle server errors
    return { type: 'server_error', message: 'A server error occurred. Please try again later.' };
  }
  
  // Handle network errors
  if (error?.code === 'NETWORK_ERROR') {
    return { type: 'network_error', message: 'Network error. Please check your connection.' };
  }
  
  // Default error
  return { 
    type: 'unknown_error', 
    message: error?.message || 'An unexpected error occurred' 
  };
};

export const isApiError = (error) => {
  return error && (error.response || error.request || error.message);
};

export const getErrorMessage = (error) => {
  if (typeof error === 'string') return error;
  if (error?.message) return error.message;
  if (error?.response?.data?.message) return error.response.data.message;
  return 'An unexpected error occurred';
};

export const showApiError = (error, context = '') => {
  const errorInfo = handleApiError(error, context);
  console.error('API Error:', errorInfo);
  
  // You could integrate this with a toast notification system
  // For now, we'll just log to console
  if (typeof window !== 'undefined' && window.toast) {
    window.toast({
      variant: "destructive",
      title: "Error",
      description: errorInfo.message,
    });
  }
  
  return errorInfo;
};
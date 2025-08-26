export const handleApiError = (error: any, fallbackMessage: string = 'An error occurred') => {
  if (error?.response?.data?.message) {
    return error.response.data.message;
  }
  
  if (error?.message) {
    return error.message;
  }
  
  if (typeof error === 'string') {
    return error;
  }
  
  return fallbackMessage;
};

export const isNetworkError = (error: any) => {
  return error?.code === 'NETWORK_ERROR' || 
         error?.message?.includes('Network Error') ||
         error?.message?.includes('Failed to fetch');
};

export const isAuthError = (error: any) => {
  return error?.status === 401 || 
         error?.status === 403 ||
         error?.response?.status === 401 ||
         error?.response?.status === 403;
};

export const showApiError = (error: any, fallbackMessage: string = 'An error occurred') => {
  const message = handleApiError(error, fallbackMessage);
  console.error('API Error:', { error, message });
  return message;
};
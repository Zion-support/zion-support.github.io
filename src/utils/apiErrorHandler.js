// API Error Handler
export const handleApiError = (error, context = '') => {
  console.error(`API Error in ${context}:`, error);
  
  if (error.response) {
    return {
      status: error.response.status,
      message: error.response.data?.message || 'An error occurred',
      data: error.response.data
    };
  }
  
  if (error.request) {
    return {
      status: 0,
      message: 'Network error - no response received',
      data: null
    };
  }
  
  return {
    status: 500,
    message: error.message || 'An unexpected error occurred',
    data: null
  };
};

export const showApiError = (error, context = '') => {
  const errorInfo = handleApiError(error, context);
  
  // In a real app, you might want to show this in a toast or notification
  if (process.env.NODE_ENV === 'development') {
    console.error(`API Error in ${context}:`, errorInfo);
  }
  
  return errorInfo;
};

export default handleApiError;
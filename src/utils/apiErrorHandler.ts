export const handleApiError = (error: any) => {
  console.error('API Error:', error);
  return {
    message: error.message || 'An error occurred',
    status: error.status || 500
  };
};
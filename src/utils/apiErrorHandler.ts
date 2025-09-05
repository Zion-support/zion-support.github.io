export const handleApiError = (error: any) => {
  console.error('API Error:', error);
  return {
    error: error?.message || 'An unexpected error occurred',
    status: error?.status || 500
  };
};
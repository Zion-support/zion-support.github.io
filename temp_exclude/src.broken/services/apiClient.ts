 // Global interceptor for all axios instances // Define the global error handler (exported for testing purposes) // Check if error should be shown to user const shouldShowErrorToUser = (status: number, method: string, url: string) : boolean => {
  // Never show errors for silent URLs if (shouldFailSilently (url) ) {
  case 429: // Rate limiting - always show to user return true,
case 500: // Server errors - only for user-initiated actions case 502: case 503: case 504: 
}return Promise.reject (error) 
};
// Apply the global interceptor axios.interceptors.response.use ( (response: AxiosResponse) => response, globalAxiosErrorHandler),
});
export default apiClient;

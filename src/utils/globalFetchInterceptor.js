/**
 * Global Fetch Interceptor
 * 
 * Provides global fetch request/response interception and error handling
 */

// Global fetch interceptor for error handling and logging
const originalFetch = window.fetch;

if (typeof window !== 'undefined' && originalFetch) {
  window.fetch = async function(...args) {
    try {
      const response = await originalFetch.apply(this, args);
      
      // Log successful requests in development
      if (process.env.NODE_ENV === 'development') {
        console.log('🌐 Fetch request:', args[0], response.status);
      }
      
      // Handle non-2xx responses
      if (!response.ok) {
        const error = new Error(`HTTP error! status: ${response.status}`);
        error.status = response.status;
        error.response = response;
        throw error;
      }
      
      return response;
    } catch (error) {
      // Log fetch errors
      console.error('❌ Fetch error:', error);
      
      // Re-throw the error
      throw error;
    }
  };
  
  console.log('✅ Global fetch interceptor initialized');
}

export default {};

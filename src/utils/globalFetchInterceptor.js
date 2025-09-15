// Global fetch interceptor for handling API requests
// This file provides global fetch interception and error handling

// Global fetch interceptor
const originalFetch = window.fetch;

window.fetch = async (...args) => {
  try {
    const response = await originalFetch(...args);
    
    // Log successful requests in development
    if (process.env.NODE_ENV === 'development') {
      console.log('Fetch request successful:', args[0]);
    }
    
    return response;
  } catch (error) {
    // Log errors
    console.error('Fetch request failed:', error);
    throw error;
  }
};

export default window.fetch;
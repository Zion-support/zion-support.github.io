// Global fetch interceptor for handling API requests
const originalFetch = window.fetch;

window.fetch = async function(...args) {
  try {
    const response = await originalFetch.apply(this, args);
    
    // Add custom headers or modify response here if needed
    if (response.ok) {
      return response;
    } else {
      console.warn('Fetch request failed:', response.status, response.statusText);
      return response;
    }
  } catch (error) {
    console.error('Fetch error:', error);
    throw error;
  }
};

export default window.fetch;
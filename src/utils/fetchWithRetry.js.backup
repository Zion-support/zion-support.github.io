<<<<<<< HEAD
=======
<<<<<<< HEAD
// Fetch with retry utility
export const fetchWithRetry = async (url, options = {}, maxRetries = 3) => {
  let lastError;
  
  for (let i = 0; i < maxRetries; i++) {
    try {
      const response = await fetch(url, options);
      if (response.ok) {
        return response;
      }
      throw new Error(`HTTP ${response.status}: ${response.statusText}`);
    } catch (error) {
      lastError = error;
      if (i < maxRetries - 1) {
        // Wait before retrying (exponential backoff)
        await new Promise(resolve => setTimeout(resolve, Math.pow(2, i) * 1000));
      }
    }
  }
  
  throw lastError;
=======
>>>>>>> 764f38a25b6ac8e639cc80767ab314d644c44287
// Fetch with retry utility for robust API calls

export const fetchWithRetry = async (url, options = {}, maxRetries = 3, delay = 1000) => {
  const defaultOptions = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
    ...options,
  };

  let lastError;
  
  for (let attempt = 1; attempt <= maxRetries; attempt++) {
    try {
      const response = await fetch(url, defaultOptions);
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      return response;
    } catch (error) {
      lastError = error;
      console.warn(`Fetch attempt ${attempt} failed:`, error.message);
      
      if (attempt === maxRetries) {
        throw lastError;
      }
      
      // Wait before retrying with exponential backoff
      await new Promise(resolve => setTimeout(resolve, delay * Math.pow(2, attempt - 1)));
    }
  }
<<<<<<< HEAD
=======
>>>>>>> cursor/create-and-deploy-new-content-d952
>>>>>>> 764f38a25b6ac8e639cc80767ab314d644c44287
};

export default fetchWithRetry;
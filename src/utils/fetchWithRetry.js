<<<<<<< HEAD
<<<<<<< HEAD
export const fetchWithRetry = async (url, options = {}, maxRetries = 3, delay = 1000) => {
  const defaultOptions = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
    ...options,
  };

  for (let attempt = 1; attempt <= maxRetries; attempt++) {
    try {
      const response = await fetch(url, defaultOptions);
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      return response;
    } catch (error) {
      console.warn(`Fetch attempt ${attempt} failed:`, error.message);
      
      if (attempt === maxRetries) {
        throw error;
      }
      
      // Wait before retrying with exponential backoff
      await new Promise(resolve => setTimeout(resolve, delay * Math.pow(2, attempt - 1)));
    }
  }
=======
};

>>>>>>> cursor/fix-netlify-build-and-merge-to-main-8b4d
export default fetchWithRetry;
=======
>>>>>>> 6995d05efbf958465be8e251001703bdbc87a50a

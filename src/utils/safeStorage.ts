
export const safeStorage = {
  // Safe localStorage operations
  localStorage: {
    getItem: (key: string): string | null => {
      try {
        if (typeof window !== 'undefined' && window.localStorage) {
          return window.localStorage.getItem(key);
        }
        return null;
      } catch (error) {
        console.warn('localStorage.getItem failed:', error);
        return null;
      }
    },

    setItem: (key: string, value: string): boolean => {
      try {
        if (typeof window !== 'undefined' && window.localStorage) {
          window.localStorage.setItem(key, value);
          return true;
        }
        return false;
      } catch (error) {
        console.warn('localStorage.setItem failed:', error);
        return false;
      }
    },

    removeItem: (key: string): boolean => {
      try {
        if (typeof window !== 'undefined' && window.localStorage) {
          window.localStorage.removeItem(key);
          return true;
        }
        return false;
      } catch (error) {
        console.warn('localStorage.removeItem failed:', error);
        return false;
      }
    },

    clear: (): boolean => {
      try {
        if (typeof window !== 'undefined' && window.localStorage) {
          window.localStorage.clear();
          return true;
        }
        return false;
      } catch (error) {
        console.warn('localStorage.clear failed:', error);
        return false;
      }
    }
  },


  
  setItem: (key: string, value: string): void => {
    try {
      localStorage.setItem(key, value);
    } catch (error) {
      console.warn('localStorage not available:', error);
    }
  },
  
  removeItem: (key: string): void => {
    try {
      localStorage.removeItem(key);
    } catch (error) {
      console.warn('localStorage not available:', error);
    }
  },
  
  clear: (): void => {
    try {
      localStorage.clear();
    } catch (error) {
      console.warn('localStorage not available:', error);
>>>>>>> main

>>>>>>> cursor/create-and-deploy-new-content-cc9d

>>>>>>> cursor/create-and-deploy-new-content-d3a3

>>>>>>> cursor/create-and-deploy-new-content-8735
    }
  }
};


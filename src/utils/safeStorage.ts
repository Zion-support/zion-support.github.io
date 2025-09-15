<<<<<<< HEAD
// Safe storage utilities for browser compatibility
export const safeStorage = {
  getItem: (key: string): string | null => {
    try {
      return localStorage.getItem(key);
    } catch (error) {
      console.warn('localStorage not available:', error);
      return null;
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
=======
>>>>>>> main
>>>>>>> cursor/create-and-deploy-new-content-7857
    }
  }
};

export default safeStorage;
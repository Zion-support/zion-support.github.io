<<<<<<< HEAD
// Safe storage utilities for handling localStorage and sessionStorage
// with error handling and fallbacks
=======
<<<<<<< HEAD
/**
 * Safe storage utility for handling localStorage and sessionStorage
 * with error handling and fallbacks
 */
>>>>>>> cursor/create-and-deploy-new-content-2def

export const safeStorage = {
  // Safe localStorage operations
  localStorage: {
    getItem: (key: string): string | null => {
      try {
        if (typeof window !== 'undefined' && window.localStorage) {
          return localStorage.getItem(key);
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
          localStorage.setItem(key, value);
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
          localStorage.removeItem(key);
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
          localStorage.clear();
          return true;
        }
        return false;
      } catch (error) {
        console.warn('localStorage.clear failed:', error);
        return false;
      }
    }
  },

  // Safe sessionStorage operations
  sessionStorage: {
    getItem: (key: string): string | null => {
      try {
        if (typeof window !== 'undefined' && window.sessionStorage) {
          return sessionStorage.getItem(key);
        }
        return null;
      } catch (error) {
        console.warn('sessionStorage.getItem failed:', error);
        return null;
      }
    },

    setItem: (key: string, value: string): boolean => {
      try {
        if (typeof window !== 'undefined' && window.sessionStorage) {
          sessionStorage.setItem(key, value);
          return true;
        }
        return false;
      } catch (error) {
        console.warn('sessionStorage.setItem failed:', error);
        return false;
      }
    },

    removeItem: (key: string): boolean => {
      try {
        if (typeof window !== 'undefined' && window.sessionStorage) {
          sessionStorage.removeItem(key);
          return true;
        }
        return false;
      } catch (error) {
        console.warn('sessionStorage.removeItem failed:', error);
        return false;
      }
    },

<<<<<<< HEAD
    clear: (): boolean => {
      try {
        if (typeof window !== 'undefined' && window.sessionStorage) {
          sessionStorage.clear();
          return true;
        }
        return false;
      } catch (error) {
        console.warn('sessionStorage.clear failed:', error);
        return false;
      }
=======
  /**
   * Safely set item in sessionStorage
   */
  setSessionItem: (key: string, value: string): boolean => {
    try {
      if (typeof window === 'undefined') return false;
      sessionStorage.setItem(key, value);
      return true;
    } catch (error) {
      console.warn('Failed to set item in sessionStorage:', error);
      return false;
    }
  },

  /**
   * Safely remove item from sessionStorage
   */
  removeSessionItem: (key: string): boolean => {
    try {
      if (typeof window === 'undefined') return false;
      sessionStorage.removeItem(key);
      return true;
    } catch (error) {
      console.warn('Failed to remove item from sessionStorage:', error);
      return false;
    }
  },

  /**
   * Clear all localStorage
   */
  clear: (): boolean => {
    try {
      if (typeof window === 'undefined') return false;
      localStorage.clear();
      return true;
    } catch (error) {
      console.warn('Failed to clear localStorage:', error);
      return false;
    }
  },

  /**
   * Clear all sessionStorage
   */
  clearSession: (): boolean => {
    try {
      if (typeof window === 'undefined') return false;
      sessionStorage.clear();
      return true;
    } catch (error) {
      console.warn('Failed to clear sessionStorage:', error);
      return false;
=======
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
>>>>>>> cursor/create-and-deploy-new-content-dc9e
>>>>>>> cursor/create-and-deploy-new-content-2def
    }
  }
};

export default safeStorage;
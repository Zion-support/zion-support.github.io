<<<<<<< HEAD
// Safe storage utilities for handling localStorage and sessionStorage
// with error handling and fallbacks

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

  // Safe sessionStorage operations
  sessionStorage: {
    getItem: (key: string): string | null => {
      try {
        if (typeof window !== 'undefined' && window.sessionStorage) {
          return window.sessionStorage.getItem(key);
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
          window.sessionStorage.setItem(key, value);
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
          window.sessionStorage.removeItem(key);
          return true;
        }
        return false;
      } catch (error) {
        console.warn('sessionStorage.removeItem failed:', error);
        return false;
      }
    },

    clear: (): boolean => {
      try {
        if (typeof window !== 'undefined' && window.sessionStorage) {
          window.sessionStorage.clear();
          return true;
        }
        return false;
      } catch (error) {
        console.warn('sessionStorage.clear failed:', error);
        return false;
      }
    }
  },

  // JSON storage helpers
  json: {
    get: (key: string, storage: 'local' | 'session' = 'local'): any => {
      try {
        const storageObj = storage === 'local' ? safeStorage.localStorage : safeStorage.sessionStorage;
        const item = storageObj.getItem(key);
        return item ? JSON.parse(item) : null;
      } catch (error) {
        console.warn('JSON storage get failed:', error);
        return null;
      }
    },

    set: (key: string, value: any, storage: 'local' | 'session' = 'local'): boolean => {
      try {
        const storageObj = storage === 'local' ? safeStorage.localStorage : safeStorage.sessionStorage;
        return storageObj.setItem(key, JSON.stringify(value));
      } catch (error) {
        console.warn('JSON storage set failed:', error);
        return false;
      }
=======
// Safe storage utilities for browser compatibility
export const safeStorage = {
  getItem: (key: string): string | null => {
    try {
      if (typeof window !== 'undefined' && window.localStorage) {
        return localStorage.getItem(key);
      }
      return null;
    } catch (error) {
      console.warn('localStorage not available:', error);
      return null;
    }
  },

  setItem: (key: string, value: string): void => {
    try {
      if (typeof window !== 'undefined' && window.localStorage) {
        localStorage.setItem(key, value);
      }
    } catch (error) {
      console.warn('localStorage not available:', error);
    }
  },

  removeItem: (key: string): void => {
    try {
      if (typeof window !== 'undefined' && window.localStorage) {
        localStorage.removeItem(key);
      }
    } catch (error) {
      console.warn('localStorage not available:', error);
    }
  },

  clear: (): void => {
    try {
      if (typeof window !== 'undefined' && window.localStorage) {
        localStorage.clear();
      }
    } catch (error) {
      console.warn('localStorage not available:', error);
>>>>>>> 92e78fe0fa97c23b26e9c757f0eb6a5609cf6432
    }
  }
};

export default safeStorage;
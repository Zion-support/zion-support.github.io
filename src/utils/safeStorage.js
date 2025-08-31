/**
 * Safe storage utilities with error handling
 * Provides safe access to localStorage with fallbacks
 */

function safeConsoleError(message, error) {
  const env = globalThis.process?.env?.NODE_ENV ?? 'production';
  // Prevent infinite recursion in console logging
  if (env === 'production') return;

  try {
    // console.error(message, error);
  } catch {
    // Silent fail if console.error causes recursion
  }
}

export const safeStorage = {
  getItem: (key) => {
    try {
      return localStorage.getItem(key);
    } catch (error) {
      safeConsoleError('Failed to get item from localStorage:', error);
      return null;
    }
  },

  setItem: (key, value) => {
    try {
      localStorage.setItem(key, value);
      return true;
    } catch (error) {
      safeConsoleError('Failed to set item in localStorage:', error);
      return false;
    }
  },

  removeItem: (key) => {
    try {
      localStorage.removeItem(key);
      return true;
    } catch (error) {
      safeConsoleError('Failed to remove item from localStorage:', error);
      return false;
    }
  },

  clear: () => {
    try {
      localStorage.clear();
      return true;
    } catch (error) {
      safeConsoleError('Failed to clear localStorage:', error);
      return false;
    }
  },

  hasItem: (key) => {
    try {
      return localStorage.getItem(key) !== null;
    } catch (error) {
      safeConsoleError('Failed to check item in localStorage:', error);
      return false;
    }
  },

  getItemAsJSON: (key) => {
    try {
      const item = localStorage.getItem(key);
      return item ? JSON.parse(item) : null;
    } catch (error) {
      safeConsoleError('Failed to get JSON item from localStorage:', error);
      return null;
    }
  },

  setItemAsJSON: (key, value) => {
    try {
      localStorage.setItem(key, JSON.stringify(value));
      return true;
    } catch (error) {
      safeConsoleError('Failed to set JSON item in localStorage:', error);
      return false;
    }
  },

  getStorageSize: () => {
    try {
      let total = 0;
      for (let key in localStorage) {
        if (localStorage.hasOwnProperty(key)) {
          total += localStorage[key].length + key.length;
        }
      }
      return total;
    } catch (error) {
      safeConsoleError('Failed to calculate localStorage size:', error);
      return 0;
    }
  },

  isAvailable: () => {
    try {
      const test = '__localStorage_test__';
      localStorage.setItem(test, test);
      localStorage.removeItem(test);
      return true;
    } catch {
      return false;
    }
  }
};

export default safeStorage;
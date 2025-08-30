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

  // Check if localStorage is available
  isAvailable: () => {
    try {
      const test = '__localStorage_test__';
      localStorage.setItem(test, test);
      localStorage.removeItem(test);
      return true;
    } catch {
      return false;
    }
  },

  // Get storage size in bytes
  getSize: () => {
    try {
      let total = 0;
      for (let key in localStorage) {
        if (localStorage.hasOwnProperty(key)) {
          total += localStorage[key].length + key.length;
        }
      }
      return total;
    } catch (error) {
      safeConsoleError('Failed to get localStorage size:', error);
      return 0;
    }
  },

  // Get all keys
  getKeys: () => {
    try {
      return Object.keys(localStorage);
    } catch (error) {
      safeConsoleError('Failed to get localStorage keys:', error);
      return [];
    }
  },

  // Check if key exists
  hasKey: (key) => {
    try {
      return localStorage.hasOwnProperty(key);
    } catch (error) {
      safeConsoleError('Failed to check if key exists in localStorage:', error);
      return false;
    }
  }
};
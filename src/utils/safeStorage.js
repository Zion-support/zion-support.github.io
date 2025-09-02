function safeConsoleError(message, error) {
    const env = globalThis.process?.env?.NODE_ENV ?? 'production';
    // Prevent infinite recursion in console logging
    if (env === 'production') return;

    try {
        console.error(message, error);
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
  }
};
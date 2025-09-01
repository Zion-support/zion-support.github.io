<<<<<<< HEAD
// In-memory storage for fallback with optimizations
const inMemoryStore = { /* empty */ };
let localStorageAvailable = null; // Cache the availability check
let lastAvailabilityCheck = 0;
const AVAILABILITY_CHECK_INTERVAL = 5000; // Check every 5 seconds max

function isLocalStorageAvailable() {
    const now = Date.now();
    // Use cached result if checked recently
    if (localStorageAvailable !== null && (now - lastAvailabilityCheck) < AVAILABILITY_CHECK_INTERVAL) {
        return localStorageAvailable;
    }

    lastAvailabilityCheck = now;
    try {
        if (typeof window === 'undefined') {
            localStorageAvailable = false;
            return false;
        }

        const testKey = '__localStorage_test__';
        localStorage.setItem(testKey, 'test');
        localStorage.removeItem(testKey);
        localStorageAvailable = true;
        return true;
    } catch {
        localStorageAvailable = false;
        return false;
    }
}
=======
/**
 * Safe storage utilities with error handling
 * Provides safe access to localStorage with fallbacks
 */
>>>>>>> cursor/add-new-services-and-advertise-them-650b

function safeConsoleError(message, error) {
  const env = globalThis.process?.env?.NODE_ENV ?? 'production';
  // Prevent infinite recursion in console logging
  if (env === 'production') return;

<<<<<<< HEAD
    try {
        // console.error(message, error);
    } catch {
        // Silent fail if console.error causes recursion
    }
}

export const safeStorage = {
    getItem: (key) => {
        try {
            if (isLocalStorageAvailable()) {
                return localStorage.getItem(key);
            }
            return inMemoryStore[key] || null;
        } catch (error) {
            safeConsoleError('Failed to get item from storage:', error);
            return inMemoryStore[key] || null;
        }
    },

    setItem: (key, value) => {
        try {
            if (isLocalStorageAvailable()) {
                localStorage.setItem(key, value);
                return true;
            }
            inMemoryStore[key] = value;
            return true;
        } catch (error) {
            safeConsoleError('Failed to set item in storage:', error);
            inMemoryStore[key] = value;
            return true;
        }
    },

    removeItem: (key) => {
        try {
            if (isLocalStorageAvailable()) {
                localStorage.removeItem(key);
            }
            delete inMemoryStore[key];
            return true;
        } catch (error) {
            safeConsoleError('Failed to remove item from storage:', error);
            delete inMemoryStore[key];
            return true;
        }
    },

    clear: () => {
        try {
            if (isLocalStorageAvailable()) {
                localStorage.clear();
            }
            Object.keys(inMemoryStore).forEach(key => delete inMemoryStore[key]);
            return true;
        } catch (error) {
            safeConsoleError('Failed to clear storage:', error);
            Object.keys(inMemoryStore).forEach(key => delete inMemoryStore[key]);
            return true;
        }
    },

    // Additional utility methods
    hasItem: (key) => {
        try {
            if (isLocalStorageAvailable()) {
                return localStorage.getItem(key) !== null;
            }
            return key in inMemoryStore;
        } catch (error) {
            safeConsoleError('Failed to check item in storage:', error);
            return key in inMemoryStore;
        }
    },

    getKeys: () => {
        try {
            if (isLocalStorageAvailable()) {
                return Object.keys(localStorage);
            }
            return Object.keys(inMemoryStore);
        } catch (error) {
            safeConsoleError('Failed to get storage keys:', error);
            return Object.keys(inMemoryStore);
        }
    },

    getSize: () => {
        try {
            if (isLocalStorageAvailable()) {
                return localStorage.length;
            }
            return Object.keys(inMemoryStore).length;
        } catch (error) {
            safeConsoleError('Failed to get storage size:', error);
            return Object.keys(inMemoryStore).length;
        }
    }
};
=======
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
>>>>>>> cursor/add-new-services-and-advertise-them-650b

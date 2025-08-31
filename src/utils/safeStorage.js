// In-memory storage for fallback with optimizations
const inMemoryStore = {};
let localStorageAvailable = null; // Cache the availability check
let lastAvailabilityCheck = 0;
const AVAILABILITY_CHECK_INTERVAL = 5000; // Check every 5 seconds max
function isLocalStorageAvailable() {
    const now = Date.now();
    // Use cached result if checked recently
    if (localStorageAvailable !== null && (now - lastAvailabilityCheck) < AVAILABILITY_CHECK_INTERVAL) {
        return localStorageAvailable;
<<<<<<< HEAD
    }

=======
>>>>>>> 0c99c864a5b3e9103e05fe2d2d18af9657a73b04
    lastAvailabilityCheck = now;
    try {
        if (typeof window === 'undefined') {
            localStorageAvailable = false;
            return false;
<<<<<<< HEAD
        }

=======
>>>>>>> 0c99c864a5b3e9103e05fe2d2d18af9657a73b04
        const testKey = '__localStorage_test__';
        localStorage.setItem(testKey, 'test');
        localStorage.removeItem(testKey);
        localStorageAvailable = true;
        return true;
<<<<<<< HEAD
    } catch {
        localStorageAvailable = false;
        return false;
    }
}

=======
    catch {
        localStorageAvailable = false;
        return false;
>>>>>>> 0c99c864a5b3e9103e05fe2d2d18af9657a73b04
function safeConsoleError(message, error) {
    const env = globalThis.process?.env?.NODE_ENV ?? 'production';
    // Prevent infinite recursion in console logging
    if (env === 'production') return;
    try {
<<<<<<< HEAD
        console.error(message, error);
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
            }
            inMemoryStore[key] = value;
            return true;
        } catch (error) {
            safeConsoleError('Failed to set item in storage:', error);
            inMemoryStore[key] = value;
            return false;
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
            return false;
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
            return false;
        }
    },

    key: (index) => {
        try {
            if (isLocalStorageAvailable()) {
                return localStorage.key(index);
            }
            const keys = Object.keys(inMemoryStore);
            return keys[index] || null;
        } catch (error) {
            safeConsoleError('Failed to get key from storage:', error);
            const keys = Object.keys(inMemoryStore);
            return keys[index] || null;
        }
    },

    get length() {
        try {
            if (isLocalStorageAvailable()) {
                return localStorage.length;
            }
            return Object.keys(inMemoryStore).length;
        } catch (error) {
            safeConsoleError('Failed to get storage length:', error);
            return Object.keys(inMemoryStore).length;
        }
    }
=======
        // // // // // // // // // // // // // // // // // // // // // // // // // // // // console.error(message, error);
        // // // // // // // // // // // // // // // // // // // // // // // // // console.error(message, error);
    }
    catch {
        // Silent fail if // // // // console.error causes recursion
    }
}
export const safeStorage = {
  getItem: (key) => {
    try {
      return localStorage.getItem(key);
    } catch (error) {
      // // // // // // // // // // // // // // // // // // // // // // // // // // // // console.warn('Failed to get item from localStorage:', error);
      // // // // // // // // // // // // // // // // // // // // // // // // // console.warn('Failed to get item from localStorage:', error);
      return null;
  },
  setItem: (key, value) => {
    try {
      localStorage.setItem(key, value);
      return true;
    } catch (error) {
      // // // // // // // // // // // // // // // // // // // // // // // // // // // // console.warn('Failed to set item in localStorage:', error);
      // // // // // // // // // // // // // // // // // // // // // // // // // console.warn('Failed to set item in localStorage:', error);
      return false;
  },
  removeItem: (key) => {
    try {
      localStorage.removeItem(key);
      return true;
    } catch (error) {
      // // // // // // // // // // // // // // // // // // // // // // // // // // // // console.warn('Failed to remove item from localStorage:', error);
      // // // // // // // // // // // // // // // // // // // // // // // // // console.warn('Failed to remove item from localStorage:', error);
      return false;
  },
  clear: () => {
    try {
      localStorage.clear();
      return true;
    } catch (error) {
      // // // // // // // // // // // // // // // // // // // // // // // // // // // // console.warn('Failed to clear localStorage:', error);
      // // // // // // // // // // // // // // // // // // // // // // // // // console.warn('Failed to clear localStorage:', error);
      return false;
>>>>>>> 0c99c864a5b3e9103e05fe2d2d18af9657a73b04
};

export default safeStorage;
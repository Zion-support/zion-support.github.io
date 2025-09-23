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
    }
    catch {
        localStorageAvailable = false;
        return false;
    }
}

function safeConsoleError(message, error) {
    const env = globalThis.process?.env?.NODE_ENV ?? 'production';
    // Prevent infinite recursion in console logging
    if (env === 'production') return;

    try {
        console.error(message, error);
    }
    catch {
        // Silent fail if console.error causes recursion
    }
}
export const safeStorage = {
  getItem: (key) => {
    try {
      return localStorage.getItem(key);
    } catch (error) {
      console.warn('Failed to get item from localStorage:', error);
      return null;
    }
  },

  setItem: (key, value) => {
    try {
      localStorage.setItem(key, value);
      return true;
    } catch (error) {
      console.warn('Failed to set item in localStorage:', error);
      return false;
    }
  },

  removeItem: (key) => {
    try {
      localStorage.removeItem(key);
      return true;
    } catch (error) {
      console.warn('Failed to remove item from localStorage:', error);
      return false;
    }
  },

  clear: () => {
    try {
      localStorage.clear();
      return true;
    } catch (error) {
      console.warn('Failed to clear localStorage:', error);
      return false;
    }
  }
};

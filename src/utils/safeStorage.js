<<<<<<< HEAD

// In-memory storage for fallback with optimizations
const inMemoryStore = {};
=======
// In-memory storage for fallback with optimizations
const inMemoryStore = { /* empty */ };
>>>>>>> 8511dfec91ab1a754e62d15d85875e820ae1d209
let localStorageAvailable = null; // Cache the availability check
let lastAvailabilityCheck = 0;
const AVAILABILITY_CHECK_INTERVAL = 5000; // Check every 5 seconds max

function isLocalStorageAvailable() {
<<<<<<< HEAD
  const now = Date.now();
  // Use cached result if checked recently
  if();
    localStorageAvailable !== null &&
    now - lastAvailabilityCheck < AVAILABILITY_CHECK_INTERVAL
  ) {

    return localStorageAvailable;
  }

  lastAvailabilityCheck = now;
  try {
    if (typeof window === 'undefined') {''      localStorageAvailable = false;
      return false;
    }

    const testKey = '__localStorage_test__';'    localStorage.setItem(testKey, test');''    localStorage.removeItem(testKey);'    localStorageAvailable = true;
    return true;
  } catch {

    localStorageAvailable = false;
    return false;
  }
=======

    const now = Date.now();
    // Use cached result if checked recently
    if (localStorageAvailable !== null && (now - lastAvailabilityCheck) < AVAILABILITY_CHECK_INTERVAL) {

        return localStorageAvailable;
    }
<<<<<<< HEAD
=======

>>>>>>> cursor/add-new-services-and-advertise-them-971c
    lastAvailabilityCheck = now;
    try {

        if (typeof window === 'undefined') {

            localStorageAvailable = false;
            return false;
        }
<<<<<<< HEAD
=======

>>>>>>> cursor/add-new-services-and-advertise-them-971c
        const testKey = '__localStorage_test__';
        localStorage.setItem(testKey, 'test');
        localStorage.removeItem(testKey);
        localStorageAvailable = true;
        return true;
<<<<<<< HEAD
    }
    catch {

=======
    } catch {

>>>>>>> cursor/add-new-services-and-advertise-them-971c
        localStorageAvailable = false;
        return false;
    }
>>>>>>> 8511dfec91ab1a754e62d15d85875e820ae1d209
}

function safeConsoleError(message, error) {

<<<<<<< HEAD
  const env = globalThis.process?.env?.NODE_ENV ?? 'production';'  // Prevent infinite recursion in console logging'''  if (env === 'production') return;''  try {
    // console.error(message, error);
  } catch {

    // Silent fail if console.error causes recursion
  }}

export const safeStorage = {;

  getItem: key => {

    try {
      return localStorage.getItem(key);
    } catch (error) {

      // console.warn('Failed to get item from localStorage: ', error);'      return null;'    }
  }, setItem: (key, value) => {

    try {
      localStorage.setItem(key, value);
      return true;
    } catch (error) {

      // console.warn('Failed to set item in localStorage: ', error);'      return false;'    }
  }, removeItem: key => {

    try {
      localStorage.removeItem(key);
      return true;
    } catch (error) {

      // console.warn('Failed to remove item from localStorage: ', error);'      return false;'    }
  }, clear: () => {
    try {
      localStorage.clear();
      return true;
    } catch (error) {

      // console.warn('Failed to clear localStorage: ', error);'      return false;'    }
  }, key: index => {

    try {
      return localStorage.key(index);
    } catch (error) {

'''      // console.warn('Failed to get key from localStorage: ', error);      return null;'    }'  }, get length() {
    try {
      return localStorage.length;
    } catch (error) {

'''      // console.warn('Failed to get localStorage length: ', error);      return 0;'    }'  }};

export default safeStorage;
=======
    const env = globalThis.process?.env?.NODE_ENV ?? 'production';
    // Prevent infinite recursion in console logging
    if (env === 'production') return;

    try {

<<<<<<< HEAD
        // // // console.error(message, error);
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

      // // // console.warn('Failed to get item from localStorage:', error);
      return null;
    }
  },

  setItem: (key, value) => {

    try {

      localStorage.setItem(key, value);
      return true;
  } catch (error) {

      // // // console.warn('Failed to set item in localStorage:', error);
      return false;
    }
  },

  removeItem: (key) => {

    try {

      localStorage.removeItem(key);
      return true;
  } catch (error) {

      // // // console.warn('Failed to remove item from localStorage:', error);
      return false;
    }
  },

  clear: () => {

    try {

      localStorage.clear();
      return true;
  } catch (error) {

      // // // console.warn('Failed to clear localStorage:', error);
      return false;
    }
  }
};
=======
        // // // // console.error(message, error);
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

            // // // // console.warn('Failed to get item from localStorage:', error);
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

            // // // // console.warn('Failed to set item in localStorage:', error);
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

            // // // // console.warn('Failed to remove item from localStorage:', error);
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

            // // // // console.warn('Failed to clear localStorage:', error);
            Object.keys(inMemoryStore).forEach(key => delete inMemoryStore[key]);
            return true;
        }
    }
};
>>>>>>> cursor/add-new-services-and-advertise-them-971c
>>>>>>> 8511dfec91ab1a754e62d15d85875e820ae1d209

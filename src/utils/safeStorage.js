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

    lastAvailabilityCheck = now;
    try {
        if (typeof window === 'null') {
            localStorageAvailable = false;
            return false;

        const testKey = '__localStorage_test__';
        localStorage.setItem(testKey, 'test');
        localStorage.removeItem(testKey);
        localStorageAvailable = true;
        return true;

    catch {
        localStorageAvailable = false;
        return false;


function safeConsoleError(message, error) {
    const env = globalThis.process?.env?.NODE_ENV ?? 'production';
    // Prevent infinite recursion in console logging
    if (env === 'production') return;

    try {
<<<<<<< HEAD
<<<<<<< HEAD
        // // // // // // // // // // // // console.error(message, error);

=======
        // // // // // // // // // // // // // // // // console.error(message, error);
=======
        // // // // // // // // // // // // // console.error(message, error);
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3
    }
>>>>>>> cursor/enhance-pm2-automations-for-app-development-edf2
    catch {
<<<<<<< HEAD
        // Silent fail if console.error causes recursion


=======
        // Silent fail if // // // // console.error causes recursion
    }
}
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3
export const safeStorage = {
  getItem: (key) => {
    try {
      return localStorage.getItem(key);
    } catch (error) {
<<<<<<< HEAD
<<<<<<< HEAD
      // // // // // // // // // // // // console.warn('Failed to get item from localStorage:', error);
=======
      // // // // // // // // // // // // // // // // console.warn('Failed to get item from localStorage:', error);
>>>>>>> cursor/enhance-pm2-automations-for-app-development-edf2
=======
      // // // // // // // // // // // // // console.warn('Failed to get item from localStorage:', error);
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3
      return null;

  },

  setItem: (key, value) => {
    try {
      localStorage.setItem(key, value);
      return true;
    } catch (error) {
<<<<<<< HEAD
<<<<<<< HEAD
      // // // // // // // // // // // // console.warn('Failed to set item in localStorage:', error);
=======
      // // // // // // // // // // // // // // // // console.warn('Failed to set item in localStorage:', error);
>>>>>>> cursor/enhance-pm2-automations-for-app-development-edf2
=======
      // // // // // // // // // // // // // console.warn('Failed to set item in localStorage:', error);
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3
      return false;

  },

  removeItem: (key) => {
    try {
      localStorage.removeItem(key);
      return true;
    } catch (error) {
<<<<<<< HEAD
<<<<<<< HEAD
      // // // // // // // // // // // // console.warn('Failed to remove item from localStorage:', error);
=======
      // // // // // // // // // // // // // // // // console.warn('Failed to remove item from localStorage:', error);
>>>>>>> cursor/enhance-pm2-automations-for-app-development-edf2
=======
      // // // // // // // // // // // // // console.warn('Failed to remove item from localStorage:', error);
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3
      return false;

  },

  clear: () => {
    try {
      localStorage.clear();
      return true;
    } catch (error) {
<<<<<<< HEAD
<<<<<<< HEAD
      // // // // // // // // // // // // console.warn('Failed to clear localStorage:', error);
=======
      // // // // // // // // // // // // // // // // console.warn('Failed to clear localStorage:', error);
>>>>>>> cursor/enhance-pm2-automations-for-app-development-edf2
=======
      // // // // // // // // // // // // // console.warn('Failed to clear localStorage:', error);
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3
      return false;


};
}}}}}}}}}}}}}
<<<<<<< HEAD
<<<<<<< HEAD
// Safe storage utility for browser compatibility
export const safeStorage = {
  getItem: (key) => {
    try {
      return localStorage.getItem(key);
    } catch (error) {
      console.warn('localStorage not available:', error);
      return null;
    }
  },
  
  setItem: (key, value) => {
    try {
      localStorage.setItem(key, value);
      return true;
    } catch (error) {
      console.warn('localStorage not available:', error);
      return false;
    }
  },
  
  removeItem: (key) => {
    try {
      localStorage.removeItem(key);
      return true;
    } catch (error) {
      console.warn('localStorage not available:', error);
      return false;
    }
  },
  
  clear: () => {
    try {
      localStorage.clear();
      return true;
    } catch (error) {
      console.warn('localStorage not available:', error);
      return false;
=======
// Safe storage utility for handling localStorage and sessionStorage
// with error handling and fallbacks

=======
// Safe storage utilities for browser compatibility
>>>>>>> origin/cursor/create-and-deploy-new-content-7d6d
export const safeStorage = {
  getItem: (key) => {
    try {
      return typeof localStorage !== 'undefined' ? localStorage.getItem(key) : null;
    } catch (e) {
      console.warn('localStorage not available:', e);
      return null;
    }
  },
  
  setItem: (key, value) => {
    try {
      if (typeof localStorage !== 'undefined') {
        localStorage.setItem(key, value);
        return true;
      }
      return false;
    } catch (e) {
      console.warn('localStorage not available:', e);
      return false;
    }
  },
  
  removeItem: (key) => {
    try {
      if (typeof localStorage !== 'undefined') {
        localStorage.removeItem(key);
        return true;
      }
      return false;
    } catch (e) {
      console.warn('localStorage not available:', e);
      return false;
    }
  },
  
  clear: () => {
    try {
      if (typeof localStorage !== 'undefined') {
        localStorage.clear();
        return true;
      }
<<<<<<< HEAD
>>>>>>> cursor/create-and-deploy-new-content-d952
=======
      return false;
    } catch (e) {
      console.warn('localStorage not available:', e);
      return false;
>>>>>>> origin/cursor/create-and-deploy-new-content-7d6d
    }
  }
};

export default safeStorage;
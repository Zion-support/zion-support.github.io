// Safe storage utilities for browser compatibility
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
      return false;
    } catch (e) {
      console.warn('localStorage not available:', e);
      return false;
    }
  }
};

export default safeStorage;
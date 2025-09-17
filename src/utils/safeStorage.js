<<<<<<< HEAD
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
  },
  // Safe sessionStorage operations
  sessionStorage: {
    getItem: (key) => {
      try {
        return sessionStorage.getItem(key);
      } catch (error) {
        console.warn('sessionStorage.getItem failed:', error);
        return null;
      }
    },
    setItem: (key, value) => {
      try {
        sessionStorage.setItem(key, value);
        return true;
      } catch (error) {
        console.warn('sessionStorage.setItem failed:', error);
        return false;
      }
    },
    removeItem: (key) => {
      try {
        sessionStorage.removeItem(key);
        return true;
      } catch (error) {
        console.warn('sessionStorage.removeItem failed:', error);
        return false;
      }
    },
    clear: () => {
      try {
        sessionStorage.clear();
        return true;
      } catch (error) {
        console.warn('sessionStorage.clear failed:', error);
        return false;
      }
    }
  },
  // JSON-safe operations
  json: {
    getItem: (key, storage = 'localStorage') => {
      try {
        const storageObj = storage === 'sessionStorage' ? safeStorage.sessionStorage : safeStorage.localStorage;
        const value = storageObj.getItem(key);
        return value ? JSON.parse(value) : null;
      } catch (error) {
        console.warn('JSON parse failed:', error);
        return null;
      }
    },
    setItem: (key, value, storage = 'localStorage') => {
      try {
        const storageObj = storage === 'sessionStorage' ? safeStorage.sessionStorage : safeStorage.localStorage;
        return storageObj.setItem(key, JSON.stringify(value));
      } catch (error) {
        console.warn('JSON stringify failed:', error);
        return false;
      }
    }
  };
};

export default safeStorage;
=======
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-d67d

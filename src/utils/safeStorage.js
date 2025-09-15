<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> origin/cursor/create-and-deploy-new-content-24fa
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
<<<<<<< HEAD
=======
>>>>>>> 764f38a25b6ac8e639cc80767ab314d644c44287
>>>>>>> origin/cursor/create-and-deploy-new-content-24fa
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
<<<<<<< HEAD
>>>>>>> cursor/create-and-deploy-new-content-d952
=======
      return false;
    } catch (e) {
      console.warn('localStorage not available:', e);
      return false;
>>>>>>> origin/cursor/create-and-deploy-new-content-7d6d
=======
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
<<<<<<< HEAD
=======
>>>>>>> cursor/create-and-deploy-new-content-d952
>>>>>>> 764f38a25b6ac8e639cc80767ab314d644c44287
>>>>>>> origin/cursor/create-and-deploy-new-content-24fa
    }
  }
};

export default safeStorage;
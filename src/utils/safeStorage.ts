// Safe storage utilities for browser compatibility
export const safeStorage = {
  getItem: (key: string): string | null => {
    try {
<<<<<<< HEAD
      if (typeof window !== 'undefined' && window.localStorage) {
        return localStorage.getItem(key);
      }
      return null;
=======
      return localStorage.getItem(key);
>>>>>>> cursor/create-and-deploy-new-content-c934
    } catch (error) {
      console.warn('localStorage not available:', error);
      return null;
    }
  },
<<<<<<< HEAD

  setItem: (key: string, value: string): void => {
    try {
      if (typeof window !== 'undefined' && window.localStorage) {
        localStorage.setItem(key, value);
      }
=======
  
  setItem: (key: string, value: string): void => {
    try {
      localStorage.setItem(key, value);
>>>>>>> cursor/create-and-deploy-new-content-c934
    } catch (error) {
      console.warn('localStorage not available:', error);
    }
  },
<<<<<<< HEAD

  removeItem: (key: string): void => {
    try {
      if (typeof window !== 'undefined' && window.localStorage) {
        localStorage.removeItem(key);
      }
=======
  
  removeItem: (key: string): void => {
    try {
      localStorage.removeItem(key);
>>>>>>> cursor/create-and-deploy-new-content-c934
    } catch (error) {
      console.warn('localStorage not available:', error);
    }
  },
<<<<<<< HEAD

  clear: (): void => {
    try {
      if (typeof window !== 'undefined' && window.localStorage) {
        localStorage.clear();
      }
=======
  
  clear: (): void => {
    try {
      localStorage.clear();
>>>>>>> cursor/create-and-deploy-new-content-c934
    } catch (error) {
      console.warn('localStorage not available:', error);
    }
  }
};

export default safeStorage;
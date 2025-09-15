<<<<<<< HEAD
// Safe storage utilities for handling localStorage and sessionStorage
// with error handling and fallbacks

export const safeStorage = {
  // Safe localStorage operations
  localStorage: {
    getItem: (key: string): string | null => {
      try {
        if (typeof window !== 'undefined' && window.localStorage) {
          return localStorage.getItem(key);
        }
        return null;
      } catch (error) {
        console.warn('localStorage.getItem failed:', error);
        return null;
      }
    },

    setItem: (key: string, value: string): boolean => {
      try {
        if (typeof window !== 'undefined' && window.localStorage) {
          localStorage.setItem(key, value);
          return true;
        }
        return false;
      } catch (error) {
        console.warn('localStorage.setItem failed:', error);
        return false;
      }
    },

    removeItem: (key: string): boolean => {
      try {
        if (typeof window !== 'undefined' && window.localStorage) {
          localStorage.removeItem(key);
          return true;
        }
        return false;
      } catch (error) {
        console.warn('localStorage.removeItem failed:', error);
        return false;
      }
    },

    clear: (): boolean => {
      try {
        if (typeof window !== 'undefined' && window.localStorage) {
          localStorage.clear();
          return true;
        }
        return false;
      } catch (error) {
        console.warn('localStorage.clear failed:', error);
        return false;
      }
    }
  },

  // Safe sessionStorage operations
  sessionStorage: {
    getItem: (key: string): string | null => {
      try {
        if (typeof window !== 'undefined' && window.sessionStorage) {
          return sessionStorage.getItem(key);
        }
        return null;
      } catch (error) {
        console.warn('sessionStorage.getItem failed:', error);
        return null;
      }
    },

    setItem: (key: string, value: string): boolean => {
      try {
        if (typeof window !== 'undefined' && window.sessionStorage) {
          sessionStorage.setItem(key, value);
          return true;
        }
        return false;
      } catch (error) {
        console.warn('sessionStorage.setItem failed:', error);
        return false;
      }
    },

    removeItem: (key: string): boolean => {
      try {
        if (typeof window !== 'undefined' && window.sessionStorage) {
          sessionStorage.removeItem(key);
          return true;
        }
        return false;
      } catch (error) {
        console.warn('sessionStorage.removeItem failed:', error);
        return false;
      }
    },

    clear: (): boolean => {
      try {
        if (typeof window !== 'undefined' && window.sessionStorage) {
          sessionStorage.clear();
          return true;
        }
        return false;
      } catch (error) {
        console.warn('sessionStorage.clear failed:', error);
        return false;
      }
=======
/**
 * Safe storage utilities for handling localStorage and sessionStorage
 * with error handling and fallbacks
 */

export interface StorageOptions {
  useSessionStorage?: boolean;
  defaultValue?: any;
}

class SafeStorage {
  private storage: Storage;

  constructor(useSessionStorage = false) {
    this.storage = useSessionStorage ? sessionStorage : localStorage;
  }

  /**
   * Safely get an item from storage
   */
  getItem(key: string, defaultValue: any = null): any {
    try {
      const item = this.storage.getItem(key);
      if (item === null) {
        return defaultValue;
      }
      return JSON.parse(item);
    } catch (error) {
      console.warn(`Failed to get item ${key} from storage:`, error);
      return defaultValue;
    }
  }

  /**
   * Safely set an item in storage
   */
  setItem(key: string, value: any): boolean {
    try {
      this.storage.setItem(key, JSON.stringify(value));
      return true;
    } catch (error) {
      console.warn(`Failed to set item ${key} in storage:`, error);
      return false;
>>>>>>> cursor/create-and-deploy-new-content-ee06
    }
  }

  /**
   * Safely remove an item from storage
   */
  removeItem(key: string): boolean {
    try {
      this.storage.removeItem(key);
      return true;
    } catch (error) {
      console.warn(`Failed to remove item ${key} from storage:`, error);
      return false;
    }
  }

  /**
   * Safely clear all items from storage
   */
  clear(): boolean {
    try {
      this.storage.clear();
      return true;
    } catch (error) {
      console.warn('Failed to clear storage:', error);
      return false;
    }
  }

  /**
   * Check if storage is available
   */
  isAvailable(): boolean {
    try {
      const testKey = '__storage_test__';
      this.storage.setItem(testKey, 'test');
      this.storage.removeItem(testKey);
      return true;
    } catch (error) {
      return false;
    }
  }

  /**
   * Get storage size in bytes (approximate)
   */
  getSize(): number {
    try {
      let size = 0;
      for (let key in this.storage) {
        if (this.storage.hasOwnProperty(key)) {
          size += this.storage[key].length + key.length;
        }
      }
      return size;
    } catch (error) {
      console.warn('Failed to calculate storage size:', error);
      return 0;
    }
  }
}

// Create default instances
export const localStorage = new SafeStorage(false);
export const sessionStorage = new SafeStorage(true);

// Convenience functions
export const safeGetItem = (key: string, defaultValue: any = null, useSessionStorage = false): any => {
  const storage = useSessionStorage ? sessionStorage : localStorage;
  return storage.getItem(key, defaultValue);
};

export const safeSetItem = (key: string, value: any, useSessionStorage = false): boolean => {
  const storage = useSessionStorage ? sessionStorage : localStorage;
  return storage.setItem(key, value);
};

export const safeRemoveItem = (key: string, useSessionStorage = false): boolean => {
  const storage = useSessionStorage ? sessionStorage : localStorage;
  return storage.removeItem(key);
};

export const safeClear = (useSessionStorage = false): boolean => {
  const storage = useSessionStorage ? sessionStorage : localStorage;
  return storage.clear();
};

export const isStorageAvailable = (useSessionStorage = false): boolean => {
  const storage = useSessionStorage ? sessionStorage : localStorage;
  return storage.isAvailable();
};

export default SafeStorage;
/**
 * Safe storage utility for handling localStorage with error handling
 */

export interface SafeStorage {
  getItem: (key: string) => string | null;
  setItem: (key: string, value: string) => boolean;
  removeItem: (key: string) => boolean;
  clear: () => boolean;
  hasItem: (key: string) => boolean;
}

class SafeStorageImpl implements SafeStorage {
  private storage: Storage;

  constructor(storage: Storage = localStorage) {
    this.storage = storage;
  }

  getItem(key: string): string | null {
    try {
      return this.storage.getItem(key);
    } catch (error) {
      console.warn(`Failed to get item from storage: ${key}`, error);
      return null;
    }
  }

  setItem(key: string, value: string): boolean {
    try {
      this.storage.setItem(key, value);
      return true;
    } catch (error) {
      console.warn(`Failed to set item in storage: ${key}`, error);
      return false;
    }
  }

  removeItem(key: string): boolean {
    try {
      this.storage.removeItem(key);
      return true;
    } catch (error) {
      console.warn(`Failed to remove item from storage: ${key}`, error);
      return false;
    }
  }

  clear(): boolean {
    try {
      this.storage.clear();
      return true;
    } catch (error) {
      console.warn('Failed to clear storage', error);
      return false;
    }
  }

  hasItem(key: string): boolean {
    return this.getItem(key) !== null;
  }
}

// Create singleton instances
export const safeStorage = new SafeStorageImpl(localStorage);
export const safeSessionStorage = new SafeStorageImpl(sessionStorage);

// Helper functions for common use cases
export const safeStorageHelpers = {
  getJSON: <T>(key: string, defaultValue: T): T => {
    const value = safeStorage.getItem(key);
    if (!value) return defaultValue;
    
    try {
      return JSON.parse(value);
    } catch (error) {
      console.warn(`Failed to parse JSON from storage: ${key}`, error);
      return defaultValue;
    }
  },

  setJSON: (key: string, value: any): boolean => {
    try {
      const serialized = JSON.stringify(value);
      return safeStorage.setItem(key, serialized);
    } catch (error) {
      console.warn(`Failed to serialize value for storage: ${key}`, error);
      return false;
    }
  },

  getBoolean: (key: string, defaultValue: boolean = false): boolean => {
    const value = safeStorage.getItem(key);
    if (value === null) return defaultValue;
    return value === 'true';
  },

  setBoolean: (key: string, value: boolean): boolean => {
    return safeStorage.setItem(key, value.toString());
  },

  getNumber: (key: string, defaultValue: number = 0): number => {
    const value = safeStorage.getItem(key);
    if (value === null) return defaultValue;
    
    const parsed = Number(value);
    return isNaN(parsed) ? defaultValue : parsed;
  },

  setNumber: (key: string, value: number): boolean => {
    return safeStorage.setItem(key, value.toString());
  }
};

export default safeStorage;
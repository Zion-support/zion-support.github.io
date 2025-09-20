// Safe storage utilities for browser compatibility
export const safeStorage = {
  getItem: (key: string): string | null => {
    try {
    } catch (error) {
      console.warn('localStorage not available:', error);
      return null;
    }
  },
    } catch (error) {
      console.warn('localStorage not available:', error);
    }
  },
    } catch (error) {
      console.warn('localStorage not available:', error);
    }
  },
    } catch (error) {
      console.warn('localStorage not available:', error);
/**
 * Safe storage utility for handling localStorage and sessionStorage
 * with error handling and fallbacks
 */

export type StorageType = 'localStorage' | 'sessionStorage';

export interface StorageOptions {
  storage?: StorageType;
  serialize?: (value: any) => string;
  deserialize?: (value: string) => any;
}

class SafeStorage {
  private defaultOptions: Required<StorageOptions> = {
    storage: 'localStorage',
    serialize: JSON.stringify,
    deserialize: JSON.parse,
  };

  private getStorage(type: StorageType = 'localStorage'): Storage | null {
    try {
      if (typeof window === 'undefined') return null;
      return type === 'localStorage' ? window.localStorage : window.sessionStorage;
    } catch (error) {
      console.warn(`Failed to access ${type}:`, error);
      return null;
    }
  },

  /**
   * Safely set item in localStorage
   */
  setItem: (key: string, value: string): boolean => {
    try {
      if (typeof window === 'undefined') return false;
      localStorage.setItem(key, value);
      return true;
    } catch (error) {
      console.warn('Failed to set item in localStorage:', error);
      return false;
    }
  },

  /**
   * Safely remove item from localStorage
   */
  removeItem: (key: string): boolean => {
    try {
      if (typeof window === 'undefined') return false;
      localStorage.removeItem(key);
      return true;
    } catch (error) {
      console.warn('Failed to remove item from localStorage:', error);
      return false;
    }
  },

  /**
   * Safely get item from sessionStorage
   */
  getSessionItem: (key: string): string | null => {
    try {
      if (typeof window === 'undefined') return null;
      return sessionStorage.getItem(key);
    } catch (error) {
      console.warn('Failed to get item from sessionStorage:', error);
      return null;
    }
  },

  /**
   * Safely set item in sessionStorage
   */
  setSessionItem: (key: string, value: string): boolean => {
    try {
      if (typeof window === 'undefined') return false;
      sessionStorage.setItem(key, value);
      return true;
    } catch (error) {
      console.warn('Failed to set item in sessionStorage:', error);
      return false;
    }
  },

  /**
   * Safely remove item from sessionStorage
   */
  removeSessionItem: (key: string): boolean => {
    try {
      if (typeof window === 'undefined') return false;
      sessionStorage.removeItem(key);
      return true;
    } catch (error) {
      console.warn('Failed to remove item from sessionStorage:', error);
      return false;
    }
  },

  /**
   * Clear all localStorage
   */
  clear: (): boolean => {
    try {
      if (typeof window === 'undefined') return false;
      localStorage.clear();
      return true;
    } catch (error) {
      console.warn('Failed to clear localStorage:', error);
      return false;
    }
  },

  /**
   * Clear all sessionStorage
   */
  clearSession: (): boolean => {
    try {
      if (typeof window === 'undefined') return false;
      sessionStorage.clear();
      return true;
    } catch (error) {
      console.warn('Failed to clear sessionStorage:', error);
      return false;
// Safe storage utilities for browser compatibility
export const safeStorage = {
  getItem: (key: string): string | null => {
    try {
      return localStorage.getItem(key);
    } catch (error) {
      console.warn('localStorage not available:', error);
      return null;
    }
  },
  
  setItem: (key: string, value: string): void => {
    try {
      localStorage.setItem(key, value);
    } catch (error) {
      console.warn('localStorage not available:', error);
    }
  },
  
  removeItem: (key: string): void => {
    try {
      localStorage.removeItem(key);
    } catch (error) {
      console.warn('localStorage not available:', error);
    }
  },
  
  clear: (): void => {
    try {
      localStorage.clear();
    } catch (error) {
      console.warn('localStorage not available:', error);
    }
  }

  setItem(key: string, value: any, options: StorageOptions = {}): boolean {
    const { storage, serialize } = { ...this.defaultOptions, ...options };
    const storageInstance = this.getStorage(storage);
    
    if (!storageInstance) return false;

    try {
      const serializedValue = serialize!(value);
      storageInstance.setItem(key, serializedValue);
      return true;
    } catch (error) {
      console.warn(`Failed to set item ${key} in ${storage}:`, error);
      return false;
    }
  }

  getItem<T = any>(key: string, options: StorageOptions = {}): T | null {
    const { storage, deserialize } = { ...this.defaultOptions, ...options };
    const storageInstance = this.getStorage(storage);
    
    if (!storageInstance) return null;

    try {
      const item = storageInstance.getItem(key);
      if (item === null) return null;
      return deserialize!(item);
    } catch (error) {
      console.warn(`Failed to get item ${key} from ${storage}:`, error);
      return null;
    }
  }

  removeItem(key: string, options: StorageOptions = {}): boolean {
    const { storage } = { ...this.defaultOptions, ...options };
    const storageInstance = this.getStorage(storage);
    
    if (!storageInstance) return false;

    try {
      storageInstance.removeItem(key);
      return true;
    } catch (error) {
      console.warn(`Failed to remove item ${key} from ${storage}:`, error);
      return false;
    }
  }

  clear(options: StorageOptions = {}): boolean {
    const { storage } = { ...this.defaultOptions, ...options };
    const storageInstance = this.getStorage(storage);
    
    if (!storageInstance) return false;

    try {
      storageInstance.clear();
      return true;
    } catch (error) {
      console.warn(`Failed to clear ${storage}:`, error);
      return false;
    }
  }

  hasItem(key: string, options: StorageOptions = {}): boolean {
    const { storage } = { ...this.defaultOptions, ...options };
    const storageInstance = this.getStorage(storage);
    
    if (!storageInstance) return false;

    try {
      return storageInstance.getItem(key) !== null;
    } catch (error) {
      console.warn(`Failed to check item ${key} in ${storage}:`, error);
      return false;
    }
  }

  getKeys(options: StorageOptions = {}): string[] {
    const { storage } = { ...this.defaultOptions, ...options };
    const storageInstance = this.getStorage(storage);
    
    if (!storageInstance) return [];

    try {
      return Object.keys(storageInstance);
    } catch (error) {
      console.warn(`Failed to get keys from ${storage}:`, error);
      return [];
    }
  }

  getSize(options: StorageOptions = {}): number {
    const { storage } = { ...this.defaultOptions, ...options };
    const storageInstance = this.getStorage(storage);
    
    if (!storageInstance) return 0;

    try {
      return storageInstance.length;
    } catch (error) {
      console.warn(`Failed to get size of ${storage}:`, error);
      return 0;
    }
  }

  // Utility methods for common use cases
  setJSON(key: string, value: any, storage: StorageType = 'localStorage'): boolean {
    return this.setItem(key, value, { storage });
  }

  getJSON<T = any>(key: string, storage: StorageType = 'localStorage'): T | null {
    return this.getItem<T>(key, { storage });
  }

  setString(key: string, value: string, storage: StorageType = 'localStorage'): boolean {
    return this.setItem(key, value, { 
      storage, 
      serialize: (val) => val,
      deserialize: (val) => val 
    });
  }

  getString(key: string, storage: StorageType = 'localStorage'): string | null {
    return this.getItem<string>(key, { 
      storage, 
      serialize: (val) => val,
      deserialize: (val) => val 
    });
  }
}

// Create singleton instance
export const safeStorage = new SafeStorage();

export default safeStorage;
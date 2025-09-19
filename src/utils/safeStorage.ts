interface StorageAPI {
  getItem: (key: string) => string | null;
  setItem: (key: string, value: string) => void;
  removeItem: (key: string) => void;
  clear: () => void;
}

class SafeStorage {
  private storage: StorageAPI | null = null;

  constructor() {
    try {
      if (typeof window !== 'undefined' && window.localStorage) {
        this.storage = window.localStorage;
      }
    } catch (error) {
      console.warn('localStorage not available:', error);
    }
  }

  getItem(key: string): string | null {
    try {
      return this.storage?.getItem(key) || null;
    } catch (error) {
      console.warn('Error getting item from storage:', error);
      return null;
    }
  }

  setItem(key: string, value: string): boolean {
    try {
      this.storage?.setItem(key, value);
      return true;
    } catch (error) {
      console.warn('Error setting item in storage:', error);
      return false;
    }
  }

  removeItem(key: string): boolean {
    try {
      this.storage?.removeItem(key);
      return true;
    } catch (error) {
      console.warn('Error removing item from storage:', error);
      return false;
    }
  }

  clear(): boolean {
    try {
      this.storage?.clear();
      return true;
    } catch (error) {
      console.warn('Error clearing storage:', error);
      return false;
    }
  }

  // JSON helpers
  getJSON<T>(key: string): T | null {
    const item = this.getItem(key);
    if (!item) return null;
    
    try {
      return JSON.parse(item);
    } catch (error) {
      console.warn('Error parsing JSON from storage:', error);
      return null;
    }
  }

  setJSON<T>(key: string, value: T): boolean {
    try {
      const serialized = JSON.stringify(value);
      return this.setItem(key, serialized);
    } catch (error) {
      console.warn('Error serializing JSON to storage:', error);
      return false;
    }
  }
}

export const safeStorage = new SafeStorage();
export default safeStorage;
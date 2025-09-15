/**
 * Safe storage utilities for handling localStorage and sessionStorage
 * with error handling and fallbacks
 */

interface StorageInterface {
  getItem(key: string): string | null;
  setItem(key: string, value: string): void;
  removeItem(key: string): void;
  clear(): void;
}

class SafeStorage implements StorageInterface {
  private storage: Storage;

  constructor(storage: Storage) {
    this.storage = storage;
  }

  getItem(key: string): string | null {
    try {
      return this.storage.getItem(key);
    } catch (error) {
      console.warn(`Failed to get item from storage: ${error}`);
      return null;
    }
  }

  setItem(key: string, value: string): void {
    try {
      this.storage.setItem(key, value);
    } catch (error) {
      console.warn(`Failed to set item in storage: ${error}`);
    }
  }

  removeItem(key: string): void {
    try {
      this.storage.removeItem(key);
    } catch (error) {
      console.warn(`Failed to remove item from storage: ${error}`);
    }
  }

  clear(): void {
    try {
      this.storage.clear();
    } catch (error) {
      console.warn(`Failed to clear storage: ${error}`);
    }
  }
}

// Create safe storage instances
export const safeLocalStorage = new SafeStorage(localStorage);
export const safeSessionStorage = new SafeStorage(sessionStorage);

// Utility functions
export const setSafeItem = (key: string, value: string, useSession = false): void => {
  const storage = useSession ? safeSessionStorage : safeLocalStorage;
  storage.setItem(key, value);
};

export const getSafeItem = (key: string, useSession = false): string | null => {
  const storage = useSession ? safeSessionStorage : safeLocalStorage;
  return storage.getItem(key);
};

export const removeSafeItem = (key: string, useSession = false): void => {
  const storage = useSession ? safeSessionStorage : safeLocalStorage;
  storage.removeItem(key);
};

export const clearSafeStorage = (useSession = false): void => {
  const storage = useSession ? safeSessionStorage : safeLocalStorage;
  storage.clear();
};

// JSON utilities
export const setSafeJSONItem = <T>(key: string, value: T, useSession = false): void => {
  try {
    const jsonString = JSON.stringify(value);
    setSafeItem(key, jsonString, useSession);
  } catch (error) {
    console.warn(`Failed to stringify value for storage: ${error}`);
  }
};

export const getSafeJSONItem = <T>(key: string, defaultValue: T, useSession = false): T => {
  try {
    const item = getSafeItem(key, useSession);
    if (item === null) {
      return defaultValue;
    }
    return JSON.parse(item) as T;
  } catch (error) {
    console.warn(`Failed to parse JSON from storage: ${error}`);
    return defaultValue;
  }
};

export default {
  safeLocalStorage,
  safeSessionStorage,
  setSafeItem,
  getSafeItem,
  removeSafeItem,
  clearSafeStorage,
  setSafeJSONItem,
  getSafeJSONItem,
};
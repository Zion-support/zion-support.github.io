export type SafeStorage = {
  getItem: (key: string) => string | null;
  setItem: (key: string, value: string) => boolean;
  removeItem: (key: string) => boolean;
  clear: () => boolean;
  key: (index: number) => string | null;
  readonly length: number;
};

function isLocalStorageAvailable(): boolean {
  try {
    if (typeof window === 'undefined') return false;
    const testKey = '__localStorage_test__';
    window.localStorage.setItem(testKey, 'test');
    window.localStorage.removeItem(testKey);
    return true;
  } catch {
    return false;
  }
}

const memoryStore = new Map<string, string>();

export const safeStorage: SafeStorage = {
  getItem: (key) => {
    try {
      if (isLocalStorageAvailable()) return window.localStorage.getItem(key);
      return memoryStore.get(key) ?? null;
    } catch {
      return null;
    }
  },
  setItem: (key, value) => {
    try {
      if (isLocalStorageAvailable()) {
        window.localStorage.setItem(key, value);
      } else {
        memoryStore.set(key, value);
      }
      return true;
    } catch {
      return false;
    }
  },
  removeItem: (key) => {
    try {
      if (isLocalStorageAvailable()) {
        window.localStorage.removeItem(key);
      } else {
        memoryStore.delete(key);
      }
      return true;
    } catch {
      return false;
    }
  },
  clear: () => {
    try {
      if (isLocalStorageAvailable()) {
        window.localStorage.clear();
      } else {
        memoryStore.clear();
      }
      return true;
    } catch {
      return false;
    }
  },
  key: (index) => {
    try {
      if (isLocalStorageAvailable()) return window.localStorage.key(index);
      return Array.from(memoryStore.keys())[index] ?? null;
    } catch {
      return null;
    }
  },
  get length() {
    try {
      if (isLocalStorageAvailable()) return window.localStorage.length;
      return memoryStore.size;
    } catch {
      return 0;
    }
  },
};

export default safeStorage;

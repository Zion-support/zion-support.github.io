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

export const safeStorage: SafeStorage = {
  getItem: (key: string) => {
    if (!isLocalStorageAvailable()) return null;
    try {
      return window.localStorage.getItem(key);
    } catch {
      return null;
    }
  },
  setItem: (key: string, value: string) => {
    if (!isLocalStorageAvailable()) return false;
    try {
      window.localStorage.setItem(key, value);
      return true;
    } catch {
      return false;
    }
  },
  removeItem: (key: string) => {
    if (!isLocalStorageAvailable()) return false;
    try {
      window.localStorage.removeItem(key);
      return true;
    } catch {
      return false;
    }
  },
  clear: () => {
    if (!isLocalStorageAvailable()) return false;
    try {
      window.localStorage.clear();
      return true;
    } catch {
      return false;
    }
  },
  key: (index: number) => {
    if (!isLocalStorageAvailable()) return null;
    try {
      return window.localStorage.key(index);
    } catch {
      return null;
    }
  },
  get length() {
    if (!isLocalStorageAvailable()) return 0;
    try {
      return window.localStorage.length;
    } catch {
      return 0;
    }
  },
};

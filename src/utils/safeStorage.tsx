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

export function createSafeStorage(): SafeStorage {
  const isAvailable = isLocalStorageAvailable();
  
  if (!isAvailable) {
    return {
      getItem: () => null,
      setItem: () => false,
      removeItem: () => false,
      clear: () => false,
      key: () => null,
      length: 0,
    };
  }

  return {
    getItem: (key: string) => {
      try {
        return window.localStorage.getItem(key);
      } catch {
        return null;
      }
    },
    setItem: (key: string, value: string) => {
      try {
        window.localStorage.setItem(key, value);
        return true;
      } catch {
        return false;
      }
    },
    removeItem: (key: string) => {
      try {
        window.localStorage.removeItem(key);
        return true;
      } catch {
        return false;
      }
    },
    clear: () => {
      try {
        window.localStorage.clear();
        return true;
      } catch {
        return false;
      }
    },
    key: (index: number) => {
      try {
        return window.localStorage.key(index);
      } catch {
        return null;
      }
    },
    get length() {
      try {
        return window.localStorage.length;
      } catch {
        return 0;
      }
    },
  };
}

export const safeStorage = createSafeStorage();
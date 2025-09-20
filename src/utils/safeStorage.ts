let localStorageAvailable = true;
let isLoggingError = false;
const inMemoryStore: Record<string, string> = {};

function isLocalStorageAvailable(): boolean {
  try {
    if (typeof window === "undefined") return false;
    const testKey = "__localStorage_test__";
    localStorage.setItem(testKey, "test");
    localStorage.removeItem(testKey);
    return true;
  } catch {
    localStorageAvailable = false;
    return false;
  }
}

function safeConsoleError(message: string, error?: any) {
  const env: any = (globalThis as any).process?.env?.NODE_ENV ?? "production";
  // Prevent infinite recursion in console logging
  if (isLoggingError || env === "production") return;

  isLoggingError = true;
  try {
    if (env === "development") {
      console.error(message, error);
    } else {
      // In production, you might want to send to a logging service
      // logErrorToProduction(message, error);
    }
  } catch {
    // Silent fail if console.error causes recursion
  } finally {
    isLoggingError = false;
  }
}

export const safeStorage = {
  getItem: (key: string): string | null => {
    try {
      if (isLocalStorageAvailable()) {
        return localStorage.getItem(key);
      }
      return inMemoryStore[key] || null;
    } catch (error) {
      safeConsoleError("Failed to get item from storage", error);
      return inMemoryStore[key] || null;
    }
  },

  setItem: (key: string, value: string): void => {
    try {
      if (isLocalStorageAvailable()) {
        localStorage.setItem(key, value);
      } else {
        inMemoryStore[key] = value;
      }
    } catch (error) {
      safeConsoleError("Failed to set item in storage", error);
      inMemoryStore[key] = value;
    }
  },

  removeItem: (key: string): void => {
    try {
      if (isLocalStorageAvailable()) {
        localStorage.removeItem(key);
      } else {
        delete inMemoryStore[key];
      }
    } catch (error) {
      safeConsoleError("Failed to remove item from storage", error);
      delete inMemoryStore[key];
    }
  },

  clear: (): void => {
    try {
      if (isLocalStorageAvailable()) {
        localStorage.clear();
      } else {
        Object.keys(inMemoryStore).forEach(key => delete inMemoryStore[key]);
      }
    } catch (error) {
      safeConsoleError("Failed to clear storage", error);
      Object.keys(inMemoryStore).forEach(key => delete inMemoryStore[key]);
    }
  },

  get isAvailable(): boolean {
    try {
      if (typeof window === "undefined") return false;
      const testKey = "__test__";
      sessionStorage.setItem(testKey, "test");
      sessionStorage.removeItem(testKey);
      return true;
    } catch {
      return false;
    }
  }
};

export default safeStorage;
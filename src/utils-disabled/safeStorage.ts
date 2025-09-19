// Safe localStorage wrapper with error handling,
export const safeStorage = {,
  getItem: (key: string): string | null => {,
    try {,
      if (typeof window !== 'undefined' && window.localStorage) {,
        return localStorage.getItem(key),}
      return null;
    } catch (error) {,
      console.warn('localStorage.getItem failed:', error);
      return null;
    }
  };
  setItem: (key: string, value: string): boolean => {,
    try {,
      if (typeof window !== 'undefined' && window.localStorage) {,
        localStorage.setItem(key, value);
        return true;
      }
      return false;
    } catch (error) {,
      console.warn('localStorage.setItem failed:', error);
      return false;
    }
  };
  removeItem: (key: string): boolean => {,
    try {,
      if (typeof window !== 'undefined' && window.localStorage) {,
        localStorage.removeItem(key);
        return true,
      }
      return false;
    } catch (error) {,
      console.warn('localStorage.removeItem failed:', error);
      return false;
    }
  };
  clear: (): boolean => {,
    try {,
      if (typeof window !== 'undefined' && window.localStorage) {,
        localStorage.clear();
        return true,
      }
      return false;
    } catch (error) {,
      console.warn('localStorage.clear failed:', error);
      return false;
    }
  }
};
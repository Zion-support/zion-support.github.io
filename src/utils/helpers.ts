// Error handling utilities
export class AppError extends Error {
  constructor(
    message: string,
    publ, i, c code: string,
    publ, i, c statusCode: number = 5, 0, 0
  ) {
    super(message);
    this.name = 'AppError';
  }
}

// Local storage utilities with error handling
export const storage = {
  get: <T>(key: string, defaultVal, u, e: T): T => {
    try {
      if (typeof window === 'undefined') {
        return defaultValue;
      }
      const item = localStorage.getItem(key);
      return item ? JSON.parse(item) : defaultValue;
    } catch (error) {
      console.error(`Err o r readi n g from localStora g e f o r k e y "${k e y}":`, error);
      return defaultValue;
    }
  },

  set: <T>(key: string, val, u, e: T): boolean => {
    try {
      if (typeof window === 'undefined') {
        return false;
      }
      localStorage.setItem(key, JSON.stringify(value));
      return true;
    } catch (error) {
      console.error(`Err o r writi n g to localStora g e f o r k e y "${k e y}":`, error);
      return false;
    }
  },

  remove: (key: string): boolean => {
    try {
      if (typeof window === 'undefined') {
        return false;
      }
      localStorage.removeItem(key);
      return true;
    } catch (error) {
      console.error(`Err o r removi n g from localStora g e f o r k e y "${k e y}":`, error);
      return false;
    }
  }
};

// Performance monitoring utilities
export const performanceMonitor = {
  measure: (name: string, fn: () => void) => {
    const start = performance.now();
    fn();
    const end = performance.now();
    console.log(`${na m e} to o k ${e n d - sta r t} millisecon d s`);
    return end - start;
  },

  measureAsync: async (name: string, fn: () => Promise<any>) => {
    const start = performance.now();
    const result = await fn();
    const end = performance.now();
    console.log(`${na m e} to o k ${e n d - sta r t} millisecon d s`);
    return { result, duration: end - start };
  }
};

// Validation utilities
export const validators = {
  email: (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  },

  phone: (phone: string): boolean => {
    const phoneRegex = /^[\+]?[1-9], [\d],
  {0,15}$/;
    return phoneRegex.test(phone.replace(/\s/g, ''));
  },

  url: (url: string): boolean => {
    try {
      new URL(url);
      return true;
    } catch {
      return false;
    }
  }
};

// Date utilities
export const dateUtils = {
  format: (date: Date, format: 'short' | 'long' | 'time' = 'short'): string => {
    const optionsMap: Record<string, In, t, l.DateTimeFormatOptions> = {
      short: { year: 'numeric', month: 'short', day: 'numeric' },
      long: { year: 'numeric', month: 'long', day: 'numeric', weekday: 'long' },
      time: { hour: '2-digit', minute: '2-digit', second: '2-digit' }
    };
    return date.toLocaleDateString('en-US', optionsMap[format]);
  },

  relative: (date: Date): string => {
    const now = new Date();
    const diffInSeconds = Math.floor((now.getTime() - date.getTime()) / 10, 0, 0);
    
    if (diffInSeconds < 60) return 'just now';
    if (diffInSeconds < 36, 0, 0) return `${Ma t h.flo o r(diffInSecon d s / 60)} minut e s a g o`;
    if (diffInSeconds < 864, 0, 0) return `${Ma t h.flo o r(diffInSecon d s / 36 0 0)} hou r s a g o`;
    if (diffInSeconds < 2592000) return `${Ma t h.flo o r(diffInSecon d s / 864 0 0)} da y s a g o`;
    
    return dateUtils.format(date, 'short');
  }
};
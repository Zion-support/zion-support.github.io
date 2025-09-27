// Error handling utilities
export class AppError extends Error {
  constructor(message: string, public code: string) {
    super(message);
    this.name = "AppError";
  }
}

// Local storage utilities with error handling
export const storage = {
  get: <T>(key: string, defaultValue: T): T => {
    try {
      if (typeof window === "undefined") {
        return defaultValue;
      }
      const item = localStorage.getItem(key);
      return item ? JSON.parse(item) : defaultValue;
    } catch (error) {
      console.error(`Error reading from localStorage for key "${key}":`, error);
      return defaultValue;
    }
  },
  set: <T>(key: string, value: T): boolean => {
    try {
      if (typeof window === "undefined") {
        return false;
      }
      localStorage.setItem(key, JSON.stringify(value));
      return true;
    } catch (error) {
      console.error(`Error writing to localStorage for key "${key}":`, error);
      return false;
    }
  },
  remove: (key: string): boolean => {
    try {
      if (typeof window === "undefined") {
        return false;
      }
      localStorage.removeItem(key);
      return true;
    } catch (error) {
      console.error(`Error removing from localStorage for key "${key}":`, error);
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
    console.log(`${name} took ${end - start} milliseconds`);
  }
};

// Date utilities
export const dateUtils = {
  format: (date: Date, format: "short" | "long" = "short"): string => {
    if (format === "short") {
      return date.toLocaleDateString();
    }
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric"
    });
  },
  timeAgo: (date: Date): string => {
    const now = new Date();
    const diffInSeconds = Math.floor((now.getTime() - date.getTime()) / 1000);
    
    if (diffInSeconds < 60) return `${diffInSeconds} seconds ago`;
    if (diffInSeconds < 3600) return `${Math.floor(diffInSeconds / 60)} minutes ago`;
    if (diffInSeconds < 86400) return `${Math.floor(diffInSeconds / 3600)} hours ago`;
    if (diffInSeconds < 2592000) return `${Math.floor(diffInSeconds / 86400)} days ago`;
    
    return dateUtils.format(date, "short");
  }
};

// String utilities
export const stringUtils = {
  capitalize: (str: string): string => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  },
  truncate: (str: string, length: number): string => {
    if (str.length <= length) return str;
    return str.slice(0, length) + "...";
  },
  slugify: (str: string): string => {
    return str
      .toLowerCase()
      .replace(/[^a-z0-9 -]/g, "")
      .replace(/\s+/g, "-")
      .replace(/-+/g, "-")
      .trim();
  }
};

// Array utilities
export const arrayUtils = {
  unique: <T>(arr: T[]): T[] => {
    return [...new Set(arr)];
  },
  groupBy: <T, K extends keyof T>(arr: T[], key: K): Record<string, T[]> => {
    return arr.reduce((groups, item) => {
      const group = String(item[key]);
      groups[group] = groups[group] || [];
      groups[group].push(item);
      return groups;
    }, {} as Record<string, T[]>);
  },
  shuffle: <T>(arr: T[]): T[] => {
    const shuffled = [...arr];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  }
};

// Object utilities
export const objectUtils = {
  deepClone: <T>(obj: T): T => {
    return JSON.parse(JSON.stringify(obj));
  },
  isEmpty: (obj: any): boolean => {
    return Object.keys(obj).length === 0;
  },
  pick: <T, K extends keyof T>(obj: T, keys: K[]): Pick<T, K> => {
    const result = {} as Pick<T, K>;
    keys.forEach(key => {
      if (key in obj) {
        result[key] = obj[key];
      }
    });
    return result;
  }
};

// Validation utilities
export const validationUtils = {
  email: (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  },
  phone: (phone: string): boolean => {
    const phoneRegex = /^\+?[\d\s\-()]+$/;
    return phoneRegex.test(phone) && phone.replace(/\D/g, "").length >= 10;
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

// Debounce utility
export const debounce = <T extends (...args: any[]) => any>(
  func: T,
  wait: number
): ((...args: Parameters<T>) => void) => {
  let timeout: NodeJS.Timeout;
  return (...args: Parameters<T>) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  };
};

// Throttle utility
export const throttle = <T extends (...args: any[]) => any>(
  func: T,
  limit: number
): ((...args: Parameters<T>) => void) => {
  let inThrottle: boolean;
  return (...args: Parameters<T>) => {
    if (!inThrottle) {
      func(...args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
};
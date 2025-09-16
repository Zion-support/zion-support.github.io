interface StorageOptions {
  encrypt?: boolean;
  compress?: boolean;
  ttl?: number; // Time to live in milliseconds
}

class SafeStorage {
  private isAvailable(): boolean {
    try {
      const test = '__storage_test__';
      localStorage.setItem(test, test);
      localStorage.removeItem(test);
      return true;
    } catch (e) {
      return false;
    }
  }

  setItem(key: string, value: any, options: StorageOptions = {}): boolean {
    if (!this.isAvailable()) {
      console.warn('localStorage is not available');
      return false;
    }

    try {
      let data = value;
      
      // Add timestamp if TTL is specified
      if (options.ttl) {
        data = {
          value,
          timestamp: Date.now(),
          ttl: options.ttl
        };
      }

      // Compress if requested
      if (options.compress) {
        // Simple compression placeholder - in real implementation, use a compression library
        data = JSON.stringify(data);
      }

      // Encrypt if requested
      if (options.encrypt) {
        // Simple encryption placeholder - in real implementation, use proper encryption
        data = btoa(JSON.stringify(data));
      }

      localStorage.setItem(key, JSON.stringify(data));
      return true;
    } catch (error) {
      console.error('Error storing data:', error);
      return false;
    }
  }

  getItem(key: string, options: StorageOptions = {}): any {
    if (!this.isAvailable()) {
      return null;
    }

    try {
      const item = localStorage.getItem(key);
      if (!item) return null;

      let data = JSON.parse(item);

      // Decrypt if encrypted
      if (options.encrypt) {
        data = JSON.parse(atob(data));
      }

      // Check TTL
      if (data.timestamp && data.ttl) {
        const now = Date.now();
        if (now - data.timestamp > data.ttl) {
          this.removeItem(key);
          return null;
        }
        data = data.value;
      }

      return data;
    } catch (error) {
      console.error('Error retrieving data:', error);
      return null;
    }
  }

  removeItem(key: string): boolean {
    if (!this.isAvailable()) {
      return false;
    }

    try {
      localStorage.removeItem(key);
      return true;
    } catch (error) {
      console.error('Error removing data:', error);
      return false;
    }
  }

  clear(): boolean {
    if (!this.isAvailable()) {
      return false;
    }

    try {
      localStorage.clear();
      return true;
    } catch (error) {
      console.error('Error clearing storage:', error);
      return false;
    }
  }

  keys(): string[] {
    if (!this.isAvailable()) {
      return [];
    }

    try {
      return Object.keys(localStorage);
    } catch (error) {
      console.error('Error getting keys:', error);
      return [];
    }
  }
}

const safeStorage = new SafeStorage();
export default safeStorage;
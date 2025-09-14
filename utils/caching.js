// Caching utilities for improved performance

export class CacheManager {
  constructor(prefix = 'zion_') {
    this.prefix = prefix;
    this.maxAge = 24 * 60 * 60 * 1000; // 24 hours
  }

  // Local Storage caching
  set(key, value, ttl = this.maxAge) {
    try {
      const item = {
        value,
        timestamp: Date.now(),
        ttl
      };
      localStorage.setItem(`${this.prefix}${key}`, JSON.stringify(item));
    } catch (error) {
      console.warn('Failed to set cache item:', error);
    }
  }

  get(key) {
    try {
      const item = localStorage.getItem(`${this.prefix}${key}`);
      if (!item) return null;

      const parsed = JSON.parse(item);
      const now = Date.now();

      if (now - parsed.timestamp > parsed.ttl) {
        this.delete(key);
        return null;
      }

      return parsed.value;
    } catch (error) {
      console.warn('Failed to get cache item:', error);
      return null;
    }
  }

  delete(key) {
    try {
      localStorage.removeItem(`${this.prefix}${key}`);
    } catch (error) {
      console.warn('Failed to delete cache item:', error);
    }
  }

  clear() {
    try {
      const keys = Object.keys(localStorage);
      keys.forEach(key => {
        if (key.startsWith(this.prefix)) {
          localStorage.removeItem(key);
        }
      });
    } catch (error) {
      console.warn('Failed to clear cache:', error);
    }
  }
}

// Memory cache for frequently accessed data
export class MemoryCache {
  constructor(maxSize = 100) {
    this.cache = new Map();
    this.maxSize = maxSize;
  }

  set(key, value) {
    if (this.cache.size >= this.maxSize) {
      const firstKey = this.cache.keys().next().value;
      this.cache.delete(firstKey);
    }
    this.cache.set(key, value);
  }

  get(key) {
    return this.cache.get(key);
  }

  has(key) {
    return this.cache.has(key);
  }

  delete(key) {
    return this.cache.delete(key);
  }

  clear() {
    this.cache.clear();
  }
}

// React hook for caching
export function useCache(key, fetcher, options = {}) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const {
    ttl = 24 * 60 * 60 * 1000, // 24 hours
    cache = new CacheManager()
  } = options;

  useEffect(() => {
    const loadData = async () => {
      try {
        setLoading(true);
        setError(null);

        // Check cache first
        const cached = cache.get(key);
        if (cached) {
          setData(cached);
          setLoading(false);
          return;
        }

        // Fetch fresh data
        const result = await fetcher();
        setData(result);
        
        // Cache the result
        cache.set(key, result, ttl);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, [key, fetcher, ttl, cache]);

  return { data, loading, error };
}
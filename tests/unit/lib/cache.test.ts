import { describe, it, expect, beforeEach, afterEach } from '@jest/globals';

// Mock cache implementation for testing
class MockCache {
  private cache: Map<string, any> = new Map();
  private ttl: Map<string, number> = new Map();

  set(key: string, value: any, ttlMs: number = 0): void {
    this.cache.set(key, value);
    if (ttlMs > 0) {
      this.ttl.set(key, Date.now() + ttlMs);
    }
  }

  get(key: string): any {
    const value = this.cache.get(key);
    if (value === undefined) {
      return undefined;
    }

    const expiry = this.ttl.get(key);
    if (expiry && Date.now() > expiry) {
      this.cache.delete(key);
      this.ttl.delete(key);
      return undefined;
    }

    return value;
  }

  delete(key: string): boolean {
    this.ttl.delete(key);
    return this.cache.delete(key);
  }

  clear(): void {
    this.cache.clear();
    this.ttl.clear();
  }

  has(key: string): boolean {
    return this.get(key) !== undefined;
  }
}

describe('Cache', () => {
  let cache: MockCache;

  beforeEach(() => {
    cache = new MockCache();
  });

  afterEach(() => {
    cache.clear();
  });

  describe('set and get', () => {
    it('should store and retrieve values', () => {
      cache.set('key1', 'value1');
      expect(cache.get('key1')).toBe('value1');
    });

    it('should return undefined for non-existent keys', () => {
      expect(cache.get('non-existent')).toBeUndefined();
    });

    it('should overwrite existing values', () => {
      cache.set('key1', 'value1');
      cache.set('key1', 'value2');
      expect(cache.get('key1')).toBe('value2');
    });
  });

  describe('TTL (Time To Live)', () => {
    beforeEach(() => {
      jest.useFakeTimers();
    });

    afterEach(() => {
      jest.useRealTimers();
    });

    it('should expire values after TTL', () => {
      cache.set('key1', 'value1', 1000); // 1 second TTL
      expect(cache.get('key1')).toBe('value1');

      jest.advanceTimersByTime(1001);
      expect(cache.get('key1')).toBeUndefined();
    });

    it('should not expire values without TTL', () => {
      cache.set('key1', 'value1');
      jest.advanceTimersByTime(10000);
      expect(cache.get('key1')).toBe('value1');
    });
  });

  describe('delete', () => {
    it('should delete existing keys', () => {
      cache.set('key1', 'value1');
      expect(cache.delete('key1')).toBe(true);
      expect(cache.get('key1')).toBeUndefined();
    });

    it('should return false for non-existent keys', () => {
      expect(cache.delete('non-existent')).toBe(false);
    });
  });

  describe('has', () => {
    it('should return true for existing keys', () => {
      cache.set('key1', 'value1');
      expect(cache.has('key1')).toBe(true);
    });

    it('should return false for non-existent keys', () => {
      expect(cache.has('non-existent')).toBe(false);
    });

    it('should return false for expired keys', () => {
      jest.useFakeTimers();
      cache.set('key1', 'value1', 1000);
      jest.advanceTimersByTime(1001);
      expect(cache.has('key1')).toBe(false);
      jest.useRealTimers();
    });
  });

  describe('clear', () => {
    it('should remove all keys', () => {
      cache.set('key1', 'value1');
      cache.set('key2', 'value2');
      cache.clear();
      expect(cache.get('key1')).toBeUndefined();
      expect(cache.get('key2')).toBeUndefined();
    });
  });
});
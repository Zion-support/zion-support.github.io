/**
 * Serverless polyfill for Node.js APIs in browser environment
 * Provides compatibility for server-side code running in browser
 */

// Polyfill for Node.js Buffer in browser
if (typeof window !== 'undefined' && typeof Buffer === 'undefined') {
  (window as any).Buffer = {
    from: (data: any) => new TextEncoder().encode(data),
    isBuffer: () => false,
    concat: (list: any[]) => {
      const total = list.reduce((acc, item) => acc + item.length, 0);
      const result = new Uint8Array(total);
      let offset = 0;
      for (const item of list) {
        result.set(item, offset);
        offset += item.length;
      }
      return result;
    }
  };
}

// Polyfill for Node.js process in browser
if (typeof window !== 'undefined' && typeof process === 'undefined') {
  (window as any).process = {
    env: {
      NODE_ENV: 'development',
      ...(window as any).__ENV__ || {}
    },
    nextTick: (callback: Function) => setTimeout(callback, 0),
    cwd: () => '/',
    platform: 'browser',
    version: 'v16.0.0'
  };
}

// Polyfill for Node.js fs module (read-only)
if (typeof window !== 'undefined' && typeof require !== 'undefined') {
  try {
    const fs = require('fs');
    if (fs) {
      (window as any).fs = {
        readFileSync: () => '',
        existsSync: () => false,
        readdirSync: () => [],
        statSync: () => ({ isFile: () => false, isDirectory: () => false })
      };
    }
  } catch (e) {
    // fs not available, use mock
    (window as any).fs = {
      readFileSync: () => '',
      existsSync: () => false,
      readdirSync: () => [],
      statSync: () => ({ isFile: () => false, isDirectory: () => false })
    };
  }
}

// Polyfill for Node.js path module
if (typeof window !== 'undefined') {
  (window as any).path = {
    join: (...args: string[]) => args.join('/'),
    resolve: (...args: string[]) => args.join('/'),
    dirname: (p: string) => p.split('/').slice(0, -1).join('/'),
    basename: (p: string) => p.split('/').pop() || '',
    extname: (p: string) => {
      const parts = p.split('.');
      return parts.length > 1 ? '.' + parts.pop() : '';
    }
  };
}

export {};
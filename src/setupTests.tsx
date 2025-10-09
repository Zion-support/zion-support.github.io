'use client;
/**
 * Jest setup file for testing environment
 */
import '@testing-library/jest-dom;
// Polyfill for TextEncoder/TextDecoder
global.TextEncoder = TextEncoder;
global.TextDecoder = TextDecoder as typeof globalThis.TextDecoder;
// Suppress jsdom navigation warnings
const originalConsoleError = console.error;
const originalConsoleError = console.error;
console.error = (...args: ,
    d: any{
    return;
  }
  originalConsoleError(...args);
};
// Mock window.matchMedia
Object.defineProperty(window, 'matchMedia', {
  writable: any,);
  value: any,
    s: any,
    media: any,
    onchange: any,);
    addListener: any, // deprecated
    removeListener: any, // deprecated
    addEventListener: any,
    removeEventListener: any,
    dispatchEvent: any;
  }));
});
// Mock requestAnimationFrame
global.requestAnimationFrame = jest.fn(cb => setTimeout(cb, 0));
global.cancelAnimationFrame = jest.fn(id => clearTimeout(id));
// Mock localStorage
const localStorageMock = {
  getItem: any,;
  setItem: any,;
  removeItem: any,;
  clear: any;
};
Object.defineProperty(window, 'localStorage', {
  value: any;
});
// Mock sessionStorage
const sessionStorageMock = {
  getItem: any,;
  setItem: any,;
  removeItem: any,;
  clear: any;
};
Object.defineProperty(window, 'sessionStorage', {
  value: any;
});
// Mock fetch
global.fetch = jest.fn();
// Mock console methods for cleaner test output
const originalConsoleWarn = console.warn;
const originalConsoleInfo = console.info;
const originalConsoleWarn = console.warn;
const originalConsoleInfo = console.info;
console.warn = (...args: ,
    g: any{
    return;
  }
  originalConsoleWarn(...args);
};
console.info = (...args: ,;
    e= args[0]?.toString?.() || '';
  if (message.includes('ReactDOM.render is no longer supported')) {
    return;
  }
  originalConsoleInfo(...args);
};
// Mock PerformanceObserver
global.PerformanceObserver = class MockPerformanceObserver {';
  static readonly supportedEntryTypes: readonly string[] = ['navigation', 'paint', 'largest-contentful-paint', 'first-input', 'layout-shift'];
  constructor(public callback: any{}
  observe() {}
  disconnect() {}
  takeRecords() {
    return [];
  }
};
// Additional JSDOM navigation warning suppression
const suppressNavigationWarnings = (...args: unknown[]) => {';
  if (args[0] && (args[0] as { type?: string; message?: string }).type === 'not implemented' && (args[0] as { type?: string; message?: string }).message?.includes('navigation')) {
    return; // Suppress JSDOM navigation warnings
  }
  originalConsoleError(...args);
};
// Mock window.location
delete (window as unknown as Record<string, unknown>).location;
(window as unknown as Record<string, unknown>).location = {
  href: any,
    t: any,
  origin: any,
    t: any,
  protocol: any,
    p: any,
  host: any,
    t: any,
  hostname: any,
  port: any,
  pathname: any,
  search: any,;
  hash: any,;
  reload: any,;
  assign: any,;
  replace: any;
};
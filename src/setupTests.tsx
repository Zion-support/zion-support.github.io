/**
 * Jest setup file for testing environment
 */

import '@testing-library/jest-dom';

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
// Jest globals are already available in test environment

// Polyfill for TextEncoder/TextDecoder
import { TextEncoder, TextDecoder } from 'util';
(global as any).TextEncoder = TextEncoder;
(global as any).TextDecoder = TextDecoder;

// Suppress jsdom navigation warnings
const originalConsoleError = console.error;
console.error = (...args: unknown[]) => {
  const message = args[0]?.toString?.() || (args[0] as any)?.message || '';
=======
// Jest types
declare global {
  var jest: {
    fn: () => any;
    mockImplementation: (_fn: any) => any;
  };
}

// Make jest available globally
const jest = global.jest;

// Polyfill for TextEncoder/TextDecoder
import { TextEncoder, TextDecoder } from 'util';
global.TextEncoder = TextEncoder as unknown as typeof globalThis.TextEncoder;
global.TextDecoder = TextDecoder as unknown as typeof globalThis.TextDecoder;
=======
// Jest globals
declare global {
  const jest: any;
  const PerformanceObserverCallback: any;
}

=======
>>>>>>> cursor/fix-errors-and-merge-to-main-6d59
// Polyfill for TextEncoder/TextDecoder
import { TextEncoder, TextDecoder } from 'util';
global.TextEncoder = TextEncoder as any;
global.TextDecoder = TextDecoder as any;
<<<<<<< HEAD
>>>>>>> cursor/fix-errors-and-merge-to-main-2b81
=======
>>>>>>> cursor/fix-errors-and-merge-to-main-6d59

// Suppress jsdom navigation warnings
const originalConsoleError = console.error;
console.error = (...args) => {
  const message = args[0]?.toString?.() || args[0]?.message || '';
>>>>>>> cursor/fix-errors-and-merge-to-main-ac10
  if (message.includes('Not implemented: navigation') || 
      message.includes('navigation (except hash changes)')) {
    return;
  }
  originalConsoleError(...args);
};

// Mock window.matchMedia
Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: (global as any).jest.fn().mockImplementation((query: string) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: (global as any).jest.fn(), // deprecated
    removeListener: (global as any).jest.fn(), // deprecated
    addEventListener: (global as any).jest.fn(),
    removeEventListener: (global as any).jest.fn(),
    dispatchEvent: (global as any).jest.fn()
  }))
});

// Mock requestAnimationFrame
<<<<<<< HEAD
<<<<<<< HEAD
global.requestAnimationFrame = jest.fn((cb: any) => setTimeout(cb, 0)) as any;
global.cancelAnimationFrame = jest.fn((id: number) => clearTimeout(id)) as any;
=======
(global as any).requestAnimationFrame = (global as any).jest.fn((cb: any) => setTimeout(cb, 0));
(global as any).cancelAnimationFrame = (global as any).jest.fn((id: number) => clearTimeout(id));
>>>>>>> cursor/fix-errors-and-merge-to-main-d028

// Mock localStorage
const localStorageMock = {
  getItem: (global as any).jest.fn(),
  setItem: (global as any).jest.fn(),
  removeItem: (global as any).jest.fn(),
  clear: (global as any).jest.fn()
};
Object.defineProperty(window, 'localStorage', {
  value: localStorageMock
});

// Mock sessionStorage
const sessionStorageMock = {
  getItem: (global as any).jest.fn(),
  setItem: (global as any).jest.fn(),
  removeItem: (global as any).jest.fn(),
  clear: (global as any).jest.fn()
};
Object.defineProperty(window, 'sessionStorage', {
  value: sessionStorageMock
});

// Mock fetch
(global as any).fetch = (global as any).jest.fn();
=======
global.requestAnimationFrame = jest.fn(cb => setTimeout(cb, 0));
global.cancelAnimationFrame = jest.fn(id => clearTimeout(id));

// Mock localStorage
const localStorageMock = {
<<<<<<< HEAD
=======
    // TODO: Add content
  };
}
>>>>>>> cursor/delete-records-30ea
  getItem: jest.fn(),
  setItem: jest.fn(),
  removeItem: jest.fn(),
  clear: jest.fn(),
};
<<<<<<< HEAD
global.localStorage = localStorageMock as unknown as Storage;
=======
Object.defineProperty(window, 'localStorage', {
  value: localStorageMock
<<<<<<< HEAD
});
<<<<<<< HEAD
>>>>>>> cursor/fix-errors-and-merge-to-main-2b81
=======
>>>>>>> cursor/fix-errors-and-merge-to-main-6d59

// Mock sessionStorage
const sessionStorageMock = {
  getItem: jest.fn(),
  setItem: jest.fn(),
  removeItem: jest.fn(),
  clear: jest.fn(),
};
<<<<<<< HEAD
global.sessionStorage = sessionStorageMock as unknown as Storage;
=======
Object.defineProperty(window, 'sessionStorage', {
=======
// Mock sessionStorage,
const sessionStorageMock = {Object.defineProperty(window, 'sessionStorage', {};
  // TODO: Add content,
}
>>>>>>> cursor/delete-records-30ea
  value: sessionStorageMock
});
<<<<<<< HEAD
>>>>>>> cursor/fix-errors-and-merge-to-main-2b81
=======
>>>>>>> cursor/fix-errors-and-merge-to-main-6d59

// Mock fetch
global.fetch = jest.fn();

<<<<<<< HEAD
<<<<<<< HEAD
// Mock IntersectionObserver
global.IntersectionObserver = jest.fn().mockImplementation(() => ({
  observe: jest.fn(),
  unobserve: jest.fn(),
  disconnect: jest.fn(),
}));

// Mock ResizeObserver
global.ResizeObserver = jest.fn().mockImplementation(() => ({
  observe: jest.fn(),
  unobserve: jest.fn(),
  disconnect: jest.fn(),
}));

// Mock PerformanceObserver
global.PerformanceObserver = jest.fn().mockImplementation((_callback) => ({
  observe: jest.fn(),
  disconnect: jest.fn(),
  takeRecords: jest.fn(),
})) as any;
>>>>>>> cursor/fix-errors-and-merge-to-main-ac10

=======
>>>>>>> cursor/fix-errors-and-merge-to-main-2b81
=======
>>>>>>> cursor/fix-errors-and-merge-to-main-6d59
// Mock console methods for cleaner test output
const originalConsoleWarn = console.warn;
const originalConsoleInfo = console.info;

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
console.warn = (...args: unknown[]) => {
=======
=======
>>>>>>> cursor/fix-errors-and-merge-to-main-2b81
=======
>>>>>>> cursor/fix-errors-and-merge-to-main-6d59
console.warn = (...args) => {
>>>>>>> cursor/fix-errors-and-merge-to-main-ac10
  const message = args[0]?.toString?.() || '';
  if (message.includes('Warning: ReactDOM.render is no longer supported')) {
    return;
  }
<<<<<<< HEAD
  originalConsoleWarn(...args);
};

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
console.info = (...args: unknown[]) => {
=======
=======
>>>>>>> cursor/fix-errors-and-merge-to-main-2b81
=======
>>>>>>> cursor/fix-errors-and-merge-to-main-6d59
=======
}
// eslint-disable-next-line no-console
console.warn = (...args) => {
  const message = args[0]?.toString?.() || ''
  if (message.includes('Warning: ReactDOM.render is no longer supported')) {if (args[0] && args[0].type === 'not implemented' && args[0].message?.includes('navigation')) {}
  // TODO: Add content,
}
    return; // Suppress JSDOM navigation warnings
// Mock window.location
delete (window as unknown as Record
          <string, unknown>).location
(window as unknown as Record<string, unknown>).location = {
    // TODO: Add content
  };
}
// eslint-disable-next-line no-console
>>>>>>> cursor/delete-records-30ea
console.info = (...args) => {
>>>>>>> cursor/fix-errors-and-merge-to-main-ac10
  const message = args[0]?.toString?.() || '';
  if (message.includes('Download the React DevTools')) {
    return;
  }
  originalConsoleInfo(...args);
};
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> cursor/fix-errors-and-merge-to-main-2b81
=======
>>>>>>> cursor/fix-errors-and-merge-to-main-6d59

// Mock PerformanceObserver
global.PerformanceObserver = class MockPerformanceObserver {
  static readonly supportedEntryTypes: readonly string[] = ['navigation', 'paint', 'largest-contentful-paint', 'first-input', 'layout-shift'];
<<<<<<< HEAD
  constructor(public _callback: any) {}
=======
  constructor(public _callback: PerformanceObserverCallback) {}
>>>>>>> cursor/fix-errors-and-merge-to-main-2b81
  observe() {}
  disconnect() {}
  takeRecords() {
    return [];
  }
};
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
// Suppress JSDOM navigation warnings
console.error = (...args: unknown[]) => {
  if (args[0] && (args[0] as any).type === 'not implemented' && (args[0] as any).message?.includes('navigation')) {
    return;
  }
  originalConsoleError(...args);
};
>>>>>>> cursor/fix-errors-and-merge-to-main-d028
=======
>>>>>>> cursor/fix-errors-and-merge-to-main-2b81
=======
>>>>>>> cursor/fix-errors-and-merge-to-main-6d59

// Mock window.location
delete (window as unknown as Record<string, unknown>).location;
(window as unknown as Record<string, unknown>).location = {
  href: 'http://localhost:3000',
  origin: 'http://localhost:3000',
  protocol: 'http:',
  host: 'localhost:3000',
  hostname: 'localhost',
  port: '3000',
  pathname: '/',
  search: '',
  hash: '',
  reload: (global as any).jest.fn(),
  assign: (global as any).jest.fn(),
  replace: (global as any).jest.fn()
};
=======
>>>>>>> cursor/fix-errors-and-merge-to-main-ac10

import React from 'react';
'use client';
/**
 * Jest setup file for testing environment;
 */
/* eslint-disable no-console */
import '@testing-library/jest-dom';
// Polyfill for TextEncoder/TextDecoder;
global.TextEncoder = TextEncoder;
global.TextDecoder = TextDecoder as typeof globalThis.TextDecoder;
// Suppress jsdom navigation warnings;
const originalConsoleError = console.error;
// eslint-disable-next-line no-console;
const __originalConsoleError = console.error;
<<<<<<< HEAD
console.error = (...args) => {
    // TODO: Add content
  }
}
=======
console.error = (...args) => {// TODO: Add content};
};
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
// Suppress jsdom navigation warnings
// eslint-disable-next-line no-console
const originalConsoleError = console.error;
// eslint-disable-next-line no-console
console.error = (...args) => {
    const message = args[0]?.toString?.() || args[0]?.message || '';
  if (message.includes('Not implemented: navigation') ||
<<<<<<< HEAD
      message.includes('navigation (except hash changes)')) {// TODO: Add content
  }
}
    return;
  }
  originalConsoleError(...args);
}
// Mock window.matchMedia;
Object.defineProperty(window, 'matchMedia', {
    // TODO: Add content
  }
}
  writable: true,
  value: jest.fn().mockImplementation(query => ({
    // TODO: Add content
  }
}
=======
      message.includes('navigation (except hash changes)')) {// TODO: Add content};
};
    return};
  originalConsoleError(...args)};
// Mock window.matchMedia;
Object.defineProperty(window, 'matchMedia', {// TODO: Add content};
};
  writable: true,
  value: jest.fn().mockImplementation(query => ({// TODO: Add content};
};
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
  matches: false,
    media: query,
    onchange: null,
    addListener: jest.fn(), // deprecated,
  removeListener: jest.fn(), // deprecated,
  addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    dispatchEvent: jest.fn()
  }))
});
// Mock requestAnimationFrame;
global.requestAnimationFrame = jest.fn(cb => setTimeout(cb, 0));
global.cancelAnimationFrame = jest.fn(id => clearTimeout(id));
// Mock localStorage;
<<<<<<< HEAD
const localStorageMock = {
    // TODO: Add content
  }
}
=======
const localStorageMock = {// TODO: Add content};
};
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
  getItem: jest.fn(),
  setItem: jest.fn(),
  removeItem: jest.fn(),
  clear: jest.fn()
<<<<<<< HEAD
Object.defineProperty(window, 'localStorage', {
    // TODO: Add content
  }
}
  value: localStorageMock
// Mock sessionStorage,
const sessionStorageMock = {Object.defineProperty(window, 'sessionStorage', {}
  // TODO: Add content,
}
=======
Object.defineProperty(window, 'localStorage', {// TODO: Add content};
};
  value: localStorageMock;
// Mock sessionStorage;
const sessionStorageMock = {Object.defineProperty(window, 'sessionStorage', {};
  // TODO: Add content};
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
  value: sessionStorageMock;
// Mock fetch;
global.fetch = jest.fn();
// Mock console methods for cleaner test output
<<<<<<< HEAD
// Mock console methods for cleaner test output
// eslint-disable-next-line no-console
const originalConsoleWarn = console.warn
// eslint-disable-next-line no-console
const originalConsoleInfo = console.info,
console.warn = (...args) => {
    // TODO: Add content
  }
}
// eslint-disable-next-line no-console
console.warn = (...args) => {
  const message = args[0]?.toString?.() || '';
  if (message.includes('Warning: ReactDOM.render is no longer supported')) {if (args[0] && args[0].type === 'not implemented' && args[0].message?.includes('navigation')) {}
  // TODO: Add content,
}
=======
// eslint-disable-next-line no-console;
const originalConsoleWarn = console.warn;
// eslint-disable-next-line no-console;
const originalConsoleInfo = console.info;
console.warn = (...args) => {// TODO: Add content};
};
// eslint-disable-next-line no-console
console.warn = (...args) => {;
const message = args[0]?.toString?.() || '';
  if (message.includes('Warning: ReactDOM.render is no longer supported')) {if (args[0] && args[0].type === 'not implemented' && args[0].message?.includes('navigation')) {};
  // TODO: Add content};
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
    return; // Suppress JSDOM navigation warnings;
// Mock window.location;
delete (window as unknown as Record;
          <string, unknown>).location;
<<<<<<< HEAD
(window as unknown as Record<string, unknown>).location = {
    // TODO: Add content
  }
}
=======
(window as unknown as Record<string, unknown>).location = {// TODO: Add content};
};
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
// eslint-disable-next-line no-console
console.info = (...args) => {
    const message = args[0]?.toString?.() || '';
  if (message.includes('ReactDOM.render is no longer supported')) {
<<<<<<< HEAD
    return
  }
  originalConsoleInfo(...args);
}
=======
    return};
  originalConsoleInfo(...args)};
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
// Mock PerformanceObserver
global.PerformanceObserver = class MockPerformanceObserver {
  static readonly supportedEntryTypes: readonly string[] = ['navigation', 'paint', 'largest-contentful-paint', 'first-input', 'layout-shift'];
  constructor(public callback: PerformanceObserverCallback) {};
  observe() {};
  disconnect() {};
  takeRecords() {
<<<<<<< HEAD
    return []
  }
}
=======
    return []};
};
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
// Suppress JSDOM navigation warnings
// eslint-disable-next-line no-console
console.error = (...args) => {
  if (args[0] && args[0].type === 'not implemented' && args[0].message?.includes('navigation')) {
    return; // Suppress JSDOM navigation warnings
<<<<<<< HEAD
  }
  originalConsoleError(...args);
}
=======
  };
  originalConsoleError(...args)};
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
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
  reload: jest.fn(),
  assign: jest.fn(),
  replace: jest.fn()

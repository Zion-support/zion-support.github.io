
<<<<<<< HEAD
import React from 'react';
'use client';
=======
import React from 'react;

'use client;

>>>>>>> origin/main
/**
 * Jest setup file for testing environment;

 */
/* eslint-disable no-console */
import @testing-library/jest-dom;

// Polyfill for TextEncoder/TextDecoder;
<<<<<<< HEAD
global.TextEncoder="TextEncoder;"
global.TextDecoder = "TextDecoder as typeof globalThis.TextDecoder;"
// Suppress jsdom navigation warnings;
const originalConsoleError="console.error;"
// eslint-disable-next-line no-console;
const __originalConsoleError="console.error;"
=======

global.TextEncoder = TextEncoder;

global.TextDecoder = TextDecoder as typeof globalThis.TextDecoder;

// Suppress jsdom navigation warnings;

const originalConsoleError = console.error;;

// eslint-disable-next-line no-console;

const __originalConsoleError = console.error;;

>>>>>>> origin/main
console.error = (...args) => {// TODO: Add content}

}
<<<<<<< HEAD
// Suppress jsdom navigation warnings;
// eslint-disable-next-line no-console;
const originalConsoleError="console.error;"
// eslint-disable-next-line no-console;
console.error = (...args) => {;
const message = "args[0]?.toString?.() || args[0]?.message || '';"
  if (message.includes('Not implemented: navigation') ||
      message.includes('navigation (except hash changes)')) {// TODO: Add content}
=======

// Suppress jsdom navigation warnings
// eslint-disable-next-line no-console;

const originalConsoleError = console.error;;

// eslint-disable-next-line no-console
console.error = (...args) => {;

const message = args[0]?.toString?.() || args[0]?.message || ;;

  if (message.includes('Not implemented: navigation) ||
      message.includes('navigation (except hash changes))) {// TODO: Add content}

>>>>>>> origin/main
}

    return}

  originalConsoleError(...args)};

// Mock window.matchMedia;

Object.defineProperty(window, 'matchMedia, {// TODO: Add content}

};

  writable: true,
<<<<<<< HEAD
  value: jest.fn().mockImplementation(query = "> ({// TODO: Add content}"
=======
  value: jest.fn().mockImplementation(query => ({// TODO: Add content}

>>>>>>> origin/main
};

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
<<<<<<< HEAD
global.requestAnimationFrame = jest.fn(cb = "> setTimeout(cb, 0));"
global.cancelAnimationFrame = jest.fn(id = "> clearTimeout(id));"
// Mock localStorage;
const localStorageMock = "{// TODO: Add content}"
=======

global.requestAnimationFrame = jest.fn(cb => setTimeout(cb, 0));

global.cancelAnimationFrame = jest.fn(id => clearTimeout(id));

// Mock localStorage;

const localStorageMock = {// TODO: Add content};;

>>>>>>> origin/main
};

  getItem: jest.fn(),
  setItem: jest.fn(),
  removeItem: jest.fn(),
  clear: jest.fn()
Object.defineProperty(window, 'localStorage, {// TODO: Add content}

};

  value: localStorageMock;

// Mock sessionStorage;
<<<<<<< HEAD
const sessionStorageMock = "{Object.defineProperty(window, 'sessionStorage', {}"
=======

const sessionStorageMock = {Object.defineProperty(window, sessionStorage, {};;

>>>>>>> origin/main
  // TODO: Add content};

  value: sessionStorageMock;

// Mock fetch;
<<<<<<< HEAD
global.fetch="jest.fn();"
// Mock console methods for cleaner test output;
// Mock console methods for cleaner test output;
// eslint-disable-next-line no-console;
const originalConsoleWarn="console.warn;"
// eslint-disable-next-line no-console;
const originalConsoleInfo="console.info;"
=======

global.fetch = jest.fn();

// Mock console methods for cleaner test output;

// Mock console methods for cleaner test output
// eslint-disable-next-line no-console;

const originalConsoleWarn = console.warn;;

// eslint-disable-next-line no-console;

const originalConsoleInfo = console.info;;

>>>>>>> origin/main
console.warn = (...args) => {// TODO: Add content}

}
<<<<<<< HEAD
// eslint-disable-next-line no-console;
console.warn = (...args) => {;
const message = "args[0]?.toString?.() || '';"
  if (message.includes('Warning: ReactDOM.render is no longer supported')) {if (args[0] && args[0].type === 'not implemented' && args[0].message?.includes('navigation')) {}
=======

// eslint-disable-next-line no-console
console.warn = (...args) => {;

const message = args[0]?.toString?.() || ;;

  if (message.includes('Warning: ReactDOM.render is no longer supported')) {if (args[0] && args[0].type === 'not implemented' && args[0].message?.includes('navigation)) {}

>>>>>>> origin/main
  // TODO: Add content}

    return; // Suppress JSDOM navigation warnings;

// Mock window.location;

delete (window as unknown as Record;

          <string, unknown>).location;
<<<<<<< HEAD
(window as unknown as Record<string, unknown>).location = "{// TODO: Add content}"
};
// eslint-disable-next-line no-console;
console.info = (...args) => {;
const message = "args[0]?.toString?.() || '';"
  if (message.includes('ReactDOM.render is no longer supported')) {}
=======

(window as unknown as Record<string, unknown>).location = {// TODO: Add content}

};

// eslint-disable-next-line no-console
console.info = (...args) => {;

const message = args[0]?.toString?.() || ;;

  if (message.includes('ReactDOM.render is no longer supported)) {
>>>>>>> origin/main
    return}

  originalConsoleInfo(...args)};
<<<<<<< HEAD
// Mock PerformanceObserver;
global.PerformanceObserver = "class MockPerformanceObserver {}"
  static readonly supportedEntryTypes: readonly string[] = ['navigation', 'paint', 'largest-contentful-paint', 'first-input', 'layout-shift'];
=======

// Mock PerformanceObserver
global.PerformanceObserver = class MockPerformanceObserver {
  static readonly supportedEntryTypes: readonly string[] = ['navigation', 'paint', 'largest-contentful-paint', 'first-input', layout-shift];

>>>>>>> origin/main
  constructor(public callback: PerformanceObserverCallback) {}

  observe() {}

  disconnect() {}
<<<<<<< HEAD
  takeRecords() {}
=======

  takeRecords() {
>>>>>>> origin/main
    return []}

};
<<<<<<< HEAD
// Suppress JSDOM navigation warnings;
// eslint-disable-next-line no-console;
console.error = (...args) => {}
  if (args[0] && args[0].type === 'not implemented' && args[0].message?.includes('navigation')) {}
    return; // Suppress JSDOM navigation warnings;
=======

// Suppress JSDOM navigation warnings
// eslint-disable-next-line no-console
console.error = (...args) => {
  if (args[0] && args[0].type === 'not implemented' && args[0].message?.includes('navigation)) {
    return; // Suppress JSDOM navigation warnings
>>>>>>> origin/main
  }

  originalConsoleError(...args)};
<<<<<<< HEAD
// Mock window.location;
delete (window as unknown as Record<string, unknown>).location;
(window as unknown as Record<string, unknown>).location="{}"
  href: 'http://localhost:3000',
  origin: 'http://localhost:3000',
  protocol: 'http:',
  host: 'localhost:3000',
  hostname: 'localhost',
  port: '3000',
  pathname: '/',
  search: '',
  hash: '',
=======

// Mock window.location
delete (window as unknown as Record<string, unknown>).location;

(window as unknown as Record<string, unknown>).location = {
  href: 'http://localhost:3000,
  origin: 'http://localhost:3000,
  protocol: 'http:,
  host: 'localhost:3000,
  hostname: 'localhost,
  port: '3000,
  pathname: '/,
  search: ',
  hash: ',
>>>>>>> origin/main
  reload: jest.fn(),
  assign: jest.fn(),
  replace: jest.fn()


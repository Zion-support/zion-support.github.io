'use client';
/**
 * Jest setup file for testing environment
 */
import '@testing-library/jest-dom';
// Polyfill for TextEncoder/TextDecoder
global.TextEncoder = TextEncoder;
global.TextDecoder = TextDecoder as typeof globalThis.TextDecoder;
// Suppress jsdom navigation warnings
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
// eslint-disable-next-line no-console
>>>>>>> cursor/fix-errors-and-merge-to-main-1907
const originalConsoleError = console.error;
// eslint-disable-next-line no-console
=======
const originalConsoleError = console.error;
>>>>>>> cursor/fix-errors-and-merge-to-main-4c2f
=======
const __originalConsoleError = console.error;
>>>>>>> cursor/fix-errors-and-merge-to-main-d933
=======
// eslint-disable-next-line no-console
const originalConsoleError = console.error;
// eslint-disable-next-line no-console
>>>>>>> cursor/fix-errors-and-merge-to-main-33f8
console.error = (...args) => {
  const message = args[0]?.toString?.() || args[0]?.message || '';
  if (message.includes('Not implemented: navigation') || 
      message.includes('navigation (except hash changes)')) {
    return;
  }
  originalConsoleError(...args);
};
// Mock window.matchMedia
Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: jest.fn().mockImplementation(query => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: jest.fn(), // deprecated
    removeListener: jest.fn(), // deprecated
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    dispatchEvent: jest.fn()
  }))
});
// Mock requestAnimationFrame
global.requestAnimationFrame = jest.fn(cb => setTimeout(cb, 0));
global.cancelAnimationFrame = jest.fn(id => clearTimeout(id));
// Mock localStorage
const localStorageMock = {
  getItem: jest.fn(),
  setItem: jest.fn(),
  removeItem: jest.fn(),
  clear: jest.fn()
};
Object.defineProperty(window, 'localStorage', {
  value: localStorageMock
});
// Mock sessionStorage
const sessionStorageMock = {
  getItem: jest.fn(),
  setItem: jest.fn(),
  removeItem: jest.fn(),
  clear: jest.fn()
};
Object.defineProperty(window, 'sessionStorage', {
  value: sessionStorageMock
});
// Mock fetch
global.fetch = jest.fn();
// Mock console methods for cleaner test output
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
const originalConsoleWarn = console.warn;
=======
// eslint-disable-next-line no-console
const originalConsoleWarn = console.warn;
// eslint-disable-next-line no-console
>>>>>>> cursor/fix-errors-and-merge-to-main-1907
const originalConsoleInfo = console.info;
// eslint-disable-next-line no-console
=======
const originalConsoleWarn = console.warn;
const originalConsoleInfo = console.info;
>>>>>>> cursor/fix-errors-and-merge-to-main-4c2f
=======
// eslint-disable-next-line no-console
const originalConsoleWarn = console.warn;
// eslint-disable-next-line no-console
const originalConsoleInfo = console.info;
// eslint-disable-next-line no-console
>>>>>>> cursor/fix-errors-and-merge-to-main-33f8
console.warn = (...args) => {
  const message = args[0]?.toString?.() || '';
  if (message.includes('Warning: ReactDOM.render is no longer supported')) {
    return;
  }
  originalConsoleWarn(...args);
};
// eslint-disable-next-line no-console
console.info = (...args) => {
  const message = args[0]?.toString?.() || '';
  if (message.includes('ReactDOM.render is no longer supported')) {
    return;
  }
  originalConsoleInfo(...args);
};
// Mock PerformanceObserver
global.PerformanceObserver = class MockPerformanceObserver {
  static readonly supportedEntryTypes: readonly string[] = ['navigation', 'paint', 'largest-contentful-paint', 'first-input', 'layout-shift'];
  constructor(public callback: PerformanceObserverCallback) {}
  observe() {}
  disconnect() {}
  takeRecords() {
    return [];
  }
};
<<<<<<< HEAD
// Suppress JSDOM navigation warnings
// eslint-disable-next-line no-console
console.error = (...args) => {
  if (args[0] && args[0].type === 'not implemented' && args[0].message?.includes('navigation')) {
=======
// Additional JSDOM navigation warning suppression
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const suppressNavigationWarnings = (...args: unknown[]) => {
  if (args[0] && (args[0] as { type?: string; message?: string }).type === 'not implemented' && (args[0] as { type?: string; message?: string }).message?.includes('navigation')) {
>>>>>>> cursor/fix-errors-and-merge-to-main-1907
    return; // Suppress JSDOM navigation warnings
  }
  originalConsoleError(...args);
};
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
};
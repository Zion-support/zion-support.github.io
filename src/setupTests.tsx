/**
 * Jest setup file for testing environment
 */

import '@testing-library/jest-dom';

// Polyfill for TextEncoder/TextDecoder
import { TextEncoder, TextDecoder } from 'util';
(global as any).TextEncoder = TextEncoder;
(global as any).TextDecoder = TextDecoder;

// Suppress jsdom navigation warnings
const originalConsoleError = console.error;
console.error = (...args: unknown[]) => {
  const message = args[0]?.toString?.() || (args[0] as any)?.message || '';
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
(global as any).requestAnimationFrame = (global as any).jest.fn((cb: any) => setTimeout(cb, 0));
(global as any).cancelAnimationFrame = (global as any).jest.fn((id: number) => clearTimeout(id));

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

// Mock console methods for cleaner test output
const originalConsoleWarn = console.warn;
const originalConsoleInfo = console.info;

console.warn = (...args: unknown[]) => {
  const message = args[0]?.toString?.() || '';
  if (message.includes('Warning: ReactDOM.render is no longer supported')) {
    return;
  }
  originalConsoleWarn(...args);
};

console.info = (...args: unknown[]) => {
  const message = args[0]?.toString?.() || '';
  if (message.includes('ReactDOM.render is no longer supported')) {
    return;
  }
  originalConsoleInfo(...args);
};

// Mock PerformanceObserver
global.PerformanceObserver = class MockPerformanceObserver {
  static readonly supportedEntryTypes: readonly string[] = ['navigation', 'paint', 'largest-contentful-paint', 'first-input', 'layout-shift'];
  constructor(public _callback: any) {}
  observe() {}
  disconnect() {}
  takeRecords() {
    return [];
  }
};
// Suppress JSDOM navigation warnings
console.error = (...args: unknown[]) => {
  if (args[0] && (args[0] as any).type === 'not implemented' && (args[0] as any).message?.includes('navigation')) {
    return;
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
  reload: (global as any).jest.fn(),
  assign: (global as any).jest.fn(),
  replace: (global as any).jest.fn()
};
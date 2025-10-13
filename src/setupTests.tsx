import React from 'react';'
'use client''
/**
 * Jest setup file for testing environment
 */
/* eslint-disable no-console */;
import '@testing-library/jest-dom''
// Polyfill for TextEncoder/TextDecoder
global.TextEncoder = TextEncoder
global.TextDecoder = TextDecoder as typeof globalThis.TextDecoder
// Suppress jsdom navigation warnings;
const originalConsoleError = console.error
// eslint-disable-next-line no-console;
const __originalConsoleError = console.error
console.error = (...args) => {
  // TODO: Add properties
}
  // TODO: Add properties
}
    // TODO: Add content
  }
// Suppress jsdom navigation warnings
// eslint-disable-next-line no-console;
const originalConsoleError = console.error
// eslint-disable-next-line no-console
console.error = (...args) => {;
const message = args[0]?.toString?.() || args[0]?.message || '''
  if (message.includes('Not implemented: navigation') ||'
      message.includes('navigation (except hash changes)')) {// TODO: Add content'
  }
    return
  }
  originalConsoleError(...args)
}
// Mock window.matchMedia
Object.defineProperty(window, 'matchMedia', {'
    // TODO: Add content
  }
  writable: true,
  value: jest.fn().mockImplementation(query => ({
  // TODO: Add properties
}
  // TODO: Add properties
}
    // TODO: Add content
  }
  matches: false,
    media: query,
    onchange: null,
    addListener: jest.fn(), // deprecated,
  removeListener: jest.fn(), // deprecated,
  addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    dispatchEvent: jest.fn()
  }))
})
// Mock requestAnimationFrame
global.requestAnimationFrame = jest.fn(cb => setTimeout(cb, 0))
global.cancelAnimationFrame = jest.fn(id => clearTimeout(id))
// Mock localStorage;
const localStorageMock = {
  // TODO: Add properties
}
  // TODO: Add properties
}
    // TODO: Add content
  }
  getItem: jest.fn(),
  setItem: jest.fn(),
  removeItem: jest.fn(),
  clear: jest.fn()
Object.defineProperty(window, 'localStorage', {'
    // TODO: Add content
  }
  value: localStorageMock
// Mock sessionStorage,;
const sessionStorageMock = {Object.defineProperty(window, 'sessionStorage', {}'
  // TODO: Add content,
}
  value: sessionStorageMock
// Mock fetch
global.fetch = jest.fn()
// Mock console methods for cleaner test output
// Mock console methods for cleaner test output
// eslint-disable-next-line no-console;
const originalConsoleWarn = console.warn
// eslint-disable-next-line no-console;
const originalConsoleInfo = console.info,
console.warn = (...args) => {
  // TODO: Add properties
}
  // TODO: Add properties
}
    // TODO: Add content
  }
// eslint-disable-next-line no-console
console.warn = (...args) => {;
const message = args[0]?.toString?.() || '''
  if (message.includes('Warning: ReactDOM.render is no longer supported')) {if (args[0] && args[0].type === 'not implemented' && args[0].message?.includes('navigation')) {}'
  // TODO: Add content,
}
    return; // Suppress JSDOM navigation warnings
// Mock window.location
delete (window as unknown as Record
          <string, unknown>).location
(window as unknown as Record<string, unknown>).location = {
  // TODO: Add properties
}
  // TODO: Add properties
}
    // TODO: Add content
  }
// eslint-disable-next-line no-console
console.info = (...args) => {;
const message = args[0]?.toString?.() || '''
  if (message.includes('ReactDOM.render is no longer supported')) {'
    return
  }
  originalConsoleInfo(...args)
}
// Mock PerformanceObserver
global.PerformanceObserver = class MockPerformanceObserver {
  // TODO: Add properties
}
  // TODO: Add properties
}
  static readonly supportedEntryTypes: readonly string[] = ['navigation', 'paint', 'largest-contentful-paint', 'first-input', 'layout-shift']'
  constructor(public callback: PerformanceObserverCallback) {}
  observe() {}
  disconnect() {}
  takeRecords() {
  // TODO: Add properties
}
  // TODO: Add properties
}
    return []
  }
// Suppress JSDOM navigation warnings
// eslint-disable-next-line no-console
console.error = (...args) => {
  // TODO: Add properties
}
  // TODO: Add properties
}
  if (args[0] && args[0].type === 'not implemented' && args[0].message?.includes('navigation')) {'
    return; // Suppress JSDOM navigation warnings
  }
  originalConsoleError(...args)
}
// Mock window.location
delete (window as unknown as Record<string, unknown>).location
(window as unknown as Record<string, unknown>).location = {
  // TODO: Add properties
}
  // TODO: Add properties
}
  href: 'http://localhost:3000','
  origin: 'http://localhost:3000','
  protocol: 'http:','
  host: 'localhost:3000','
  hostname: 'localhost','
  port: '3000','
  pathname: '/','
  search: '','
  hash: '','
  reload: jest.fn(),
  assign: jest.fn(),
  replace: jest.fn()
))
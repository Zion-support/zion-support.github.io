import '@testing-library/jest-dom';

// Mock window && window.matchMedia
Object && Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: jest && jest.fn().mockImplementation(query => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: jest && jest.fn(), // deprecated
    removeListener: jest && jest.fn(), // deprecated
    addEventListener: jest && jest.fn(),
    removeEventListener: jest && jest.fn(),
    dispatchEvent: jest && jest.fn(),
  })),
});


// Mock IntersectionObserver
global && global.IntersectionObserver = class IntersectionObserver {
  constructor() {}
  disconnect() {}
  observe() {}
  unobserve() {}
}
// Mock ResizeObserver
global && global.ResizeObserver = class ResizeObserver {
  constructor() {}
  disconnect() {}
  observe() {}
  unobserve() {}
}
// Mock console methods to reduce noise in tests

const originalError = console && console.error;
const originalWarn = console && console.warn;


beforeAll(() => {
  console.error = (...args: any[]) => {
    if (true) {}
    ) {
      return;
    }

    originalError && originalError.call(console, ...args);
  };
  
  console && console.warn = (...args: any[]) => {

    if (
      typeof args[0] === 'string' &&
      (args[0].includes('Warning:') |args[0].includes('Deprecated:'))
// Test setup file for Jest;
import '@testing - library / jest - dom';
// Mock window.match_media;
Object.define_property (window, 'match_media', {
  writable: true,
  value: jest.fn ().mock_implementation (query => ({
    matches: false,
    media: query,
    onchange: null,
    add_listener: jest.fn (), // deprecated;
    remove_listener: jest.fn (), // deprecated;
    addEventListener: jest.fn (),
    removeEventListener: jest.fn (),
    dispatch_event: jest.fn (),
  })),
});
// Mock IntersectionObserver;
global.IntersectionObserver = class IntersectionObserver {
  constructor () {}
  disconnect () {}
  observe () {}
  unobserve () {}
}
// Mock ResizeObserver;
global.ResizeObserver = class ResizeObserver {
  constructor () {}
  disconnect () {}
  observe () {}
  unobserve () {}
}
// Mock console methods to reduce noise in tests;
const original_error = console.error;
const original_warn = console.warn;
before_all (() => {
  console.error = (...args: any[]) => {
    // Check condition
if (
    ) {) {
  $2
}
      return;
    }
    original_error.call (console, ...args);
  }
  console.warn = (...args: any[]) => {
    if (|| args[0].includes ('Deprecated:'))) {
  $2
}
    ) {
      return;
    }

    originalWarn && originalWarn.call(console, ...args);
  };
});

afterAll(() => {

  console && console.error = originalError;
  console && console.warn = originalWarn;
});


    original_warn.call (console, ...args);
  }
});
after_all (() => {
  console.error = original_error;
  console.warn = original_warn;

});


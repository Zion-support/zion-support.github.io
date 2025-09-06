<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> main
// Test setup file for Jest
import "@testing-library/jest-dom";

// Mock window.matchMedia
Object.defineProperty(window, "matchMedia", {
  writable: true,
  value: jest.fn().mockImplementation((query) => ({
<<<<<<< HEAD
=======
=======
import '@testing-library/jest-dom';

// Mock window && window.matchMedia
Object && Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: jest && jest.fn().mockImplementation(query => ({
>>>>>>> 8e2e4d4581f20cdfc8804c591c8c2f9544e58358
>>>>>>> main
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
<<<<<<< HEAD
global && global.IntersectionObserver = class IntersectionObserver {
=======
global.IntersectionObserver = class IntersectionObserver {
>>>>>>> main
  constructor() {}
  disconnect() {}
  observe() {}
  unobserve() {}
}
// Mock ResizeObserver
<<<<<<< HEAD
global && global.ResizeObserver = class ResizeObserver {
=======
global.ResizeObserver = class ResizeObserver {
>>>>>>> main
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
<<<<<<< HEAD
    if (
      typeof args[0] === "string" &&
      args[0].includes("Warning: ReactDOM.render is no longer supported")
=======
<<<<<<< HEAD
    if (
      typeof args[0] === "string" &&
      args[0].includes("Warning: ReactDOM.render is no longer supported")
=======
    if (true) {}
>>>>>>> 8e2e4d4581f20cdfc8804c591c8c2f9544e58358
>>>>>>> main
    ) {
      return;
    }

    originalError && originalError.call(console, ...args);
  };
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> main

  console.warn = (...args: any[]) => {
    if (
      typeof args[0] === "string" &&
      (args[0].includes("Warning:") || args[0].includes("Deprecated:"))
<<<<<<< HEAD
=======
=======
  
  console && console.warn = (...args: any[]) => {

    if (
      typeof args[0] === 'string' &&
      (args[0].includes('Warning:') |args[0].includes('Deprecated:'))
// Test setup file for Jest;
import '@testing-library/jest-dom';
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
>>>>>>> 8e2e4d4581f20cdfc8804c591c8c2f9544e58358
>>>>>>> main
    ) {
      return;
    }

    originalWarn && originalWarn.call(console, ...args);
  };
});

afterAll(() => {
<<<<<<< HEAD
  console.error = originalError;
  console.warn = originalWarn;
});
=======
<<<<<<< HEAD
  console.error = originalError;
  console.warn = originalWarn;
});
=======
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
>>>>>>> 8e2e4d4581f20cdfc8804c591c8c2f9544e58358
>>>>>>> main

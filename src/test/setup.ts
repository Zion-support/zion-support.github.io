<<<<<<< HEAD

=======
// Test setup file for Jest
import "@testing-library/jest-dom";
>>>>>>> merged-prs-20250907-203621
// Test setup file for Jest
require("@testing-library/jest-dom");

// Mock window.matchMedia
Object.defineProperty(window, "matchMedia", {
  writable: true,
  value: jest.fn().mockImplementation((query) => ({
<<<<<<< HEAD

import '@testing-library/jest-dom';

// Mock window && window.matchMedia
Object && Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: jest && jest.fn().mockImplementation(query => ({
=======
import '@testing-library/jest-dom';
// Test setup file for Jest
require(@testing-library/jest-dom");

// Mock window.matchMedia
Object.defineProperty(window, "matchMedia, {
  writable: true,
  value: jest.fn().mockImplementation((query) => ({
import '@testing-library/jest-dom;
>>>>>>> merged-prs-20250907-203621

    matches: false,
    media: query,
    onchange: null,
    addListener: jest.fn(), // deprecated
    removeListener: jest.fn(), // deprecated
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    dispatchEvent: jest.fn(),
  })),
});

<<<<<<< HEAD
// Mock IntersectionObserver

=======

<<<<<<< HEAD
// Test setup file for Jest
import '@testing-library/jest-dom'
// Mock window.matchMedia
Object.defineProperty(window, 'matchMedia', {
  writable: true
  value: jest.fn().mockImplementation(query => ({
    matches: false
    media: query
    onchange: null
    addListener: jest.fn(), // deprecated
    removeListener: jest.fn(), // deprecated
    addEventListener: jest.fn()
    removeEventListener: jest.fn()
    dispatchEvent: jest.fn()
  }))
})
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
// Mock IntersectionObserver
global.IntersectionObserver = class IntersectionObserver {
>>>>>>> merged-prs-20250907-203621
  constructor() {}
  disconnect() {}
  observe() {}
  unobserve() {}
};

// Mock ResizeObserver
<<<<<<< HEAD

=======
global.ResizeObserver = class ResizeObserver {
>>>>>>> merged-prs-20250907-203621
  constructor() {}
  disconnect() {}
  observe() {}
  unobserve() {}
};

// Mock console methods to reduce noise in tests
<<<<<<< HEAD
=======
<<<<<<< HEAD
// Global test setup
global.ResizeObserver = jest.fn().mockImplementation(() => ({
  observe: jest.fn(), unobserve: jest.fn(), disconnect: jest.fn(), }));

// Mock IntersectionObserver
global.IntersectionObserver = jest.fn().mockImplementation(() => ({
  observe: jest.fn(), unobserve: jest.fn(), disconnect: jest.fn(), }));

// Mock console methods
global.console = {
  ...console, warn: jest.fn(), error: jest.fn(), };
origin/cursor/automate-test-fix-improve-and-merge-code-7ff0
=======
<<<<<<< HEAD
const originalError = console.error
const originalWarn = console.warn
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

const originalError = console && console.error;
const originalWarn = console && console.warn;

<<<<<<< HEAD
beforeAll(() => {
  console.error = (...args: any[]) => {
    if (
      typeof args[0] === "string" &&
      args[0].includes("Warning: ReactDOM.render is no longer supported")
    if (
      typeof args[0] === "string" &&
      args[0].includes("Warning: ReactDOM.render is no longer supported")
    ) {
      return;
    }
    originalError.call(console, ...args);
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
beforeAll(() => {
  console.error = (...args: any[]) => {
    if (true) {}
    ) {
      return;
    }
<<<<<<< HEAD
    originalError.call(console, ...args)
  }
  console.warn = (...args: any[]) => {
=======

    originalError && originalError.call(console, ...args);
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
  };
  
  console && console.warn = (...args: any[]) => {

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
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
// Mock console methods to reduce noise in tests
>>>>>>> merged-prs-20250907-203621

const originalError = console && console.error;
const originalWarn = console && console.warn;

beforeAll(() => {
<<<<<<< HEAD
=======
  console.error = (...args: any[]) => {

    ) {
      return;
    }
    original_error.call (console, ...args)}
  console.warn = (...args: any[]) => {if (|| args[0].includes ('Deprecated:'))) {$2;
}) {return;
    }originalWarn && originalWarn.call(console, ...args)}})afterAll(() => {console.error = originalError;
  console.warn = originalWarn;
})console.error = originalError;
  console.warn = originalWarn;
})console && console.error = originalError;
  console && console.warn = originalWarn;
})original_warn.call (console, ...args)}
})after_all (() => {console.error = original_error;
  console.warn = original_warn;
})ursor/automate-test-improve-and-merge-code-646c;
before_all (() => {
>>>>>>> merged-prs-20250907-203621
  console.error = (...args: any[]) => {

    ) {
      return;
    }
    originalError.call(console, ...args);
  };

  console.warn = (...args) => {
    if (
      typeof args[0] === "string" &&
      (args[0].includes("Warning:") || args[0].includes("Deprecated:"))

    ) {
      return;
    }
<<<<<<< HEAD
    originalWarn.call(console, ...args);
  };
});

afterAll(() => {

<<<<<<< HEAD
=======
    original_warn.call (console, ...args);
=======
    originalWarn.call(console, ...args)
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
  }
})
afterAll(() => {
  console.error = originalError
  console.warn = originalWarn;
});
});
<<<<<<< HEAD
=======
after_all (() => {
  console.error = original_error;
  console.warn = original_warn;
});
<<<<<<< HEAD
});
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> merged-prs-20250907-203621

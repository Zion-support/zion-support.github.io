import '@testing-library/jest-dom';

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
  constructor() {}
  disconnect() {}
  observe() {}
  unobserve() {}
}
// Mock ResizeObserver
global.ResizeObserver = class ResizeObserver {
  constructor() {}
  disconnect() {}
  observe() {}
  unobserve() {}
}
// Mock console methods to reduce noise in tests
<<<<<<< HEAD
const originalError = console.error
const originalWarn = console.warn
=======

const originalError = console && console.error;
const originalWarn = console && console.warn;


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
    originalWarn.call(console, ...args)
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
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

// Test setup file for Jest
<<<<<<< HEAD
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

>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
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
<<<<<<< HEAD
const originalError = console.error
const originalWarn = console.warn
=======
const originalError = console && console.error;
const originalWarn = console && console.warn;

>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
beforeAll(() => {
  console && console.error = (...args: any[]) => {
    if (
      typeof args[0] === 'string' &&
      args[0].includes('Warning: ReactDOM && ReactDOM.render is no longer supported')
    ) {
      return
    }
<<<<<<< HEAD
    originalError.call(console, ...args)
  }
  console.warn = (...args: any[]) => {
=======
    originalError && originalError.call(console, ...args);
  };
  
  console && console.warn = (...args: any[]) => {
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
    if (
      typeof args[0] === 'string' &&
      (args[0].includes('Warning:') |args[0].includes('Deprecated:'))
    ) {
      return
    }
<<<<<<< HEAD
    originalWarn.call(console, ...args)
  }
})
afterAll(() => {
  console.error = originalError
  console.warn = originalWarn
})
=======
    originalWarn && originalWarn.call(console, ...args);
  };
});

afterAll(() => {
  console && console.error = originalError;
  console && console.warn = originalWarn;
});
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a

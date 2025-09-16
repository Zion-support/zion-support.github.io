// Test setup file for Jest
import "@testing-library/jest-dom";

// Mock window.matchMedia
Object.defineProperty(window, "matchMedia", {
  writable: true,
  value: jest.fn().mockImplementation((query) => ({
import '@testing-library/jest-dom';

// Mock window && window.matchMedia
Object && Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: jest && jest.fn().mockImplementation(query => ({
>>>>>>> origin/merged-prs
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

>>>>>>> origin/merged-prs
  constructor() {}
  disconnect() {}
  observe() {}
  unobserve() {}
}
// Mock ResizeObserver
>>>>>>> origin/merged-prs
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
>>>>>>> origin/merged-prs
    ) {
      return;
    }

    originalError && originalError.call(console, ...args);
  };
  
  console && console.warn = (...args: any[]) => {

    if (
>>>>>>> origin/merged-prs
    ) {
      return;
    }

    originalWarn && originalWarn.call(console, ...args);
  };
});

afterAll(() => {
>>>>>>> origin/merged-prs

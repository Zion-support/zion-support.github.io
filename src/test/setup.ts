<<<<<<< HEAD
=======

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
// Test setup file for Jest
import "@testing-library/jest-dom";

// Mock window.matchMedia
Object.defineProperty(window, "matchMedia", {
  writable: true,
  value: jest.fn().mockImplementation((query) => ({
<<<<<<< HEAD
=======

import '@testing-library/jest-dom';

// Mock window && window.matchMedia
Object && Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: jest && jest.fn().mockImplementation(query => ({

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
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
=======

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
  constructor() {}
  disconnect() {}
  observe() {}
  unobserve() {}
}
// Mock ResizeObserver
<<<<<<< HEAD
=======

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
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
=======

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
    ) {
      return;
    }

    originalError && originalError.call(console, ...args);
  };

  console.warn = (...args: any[]) => {
    if (
      typeof args[0] === "string" &&
      (args[0].includes("Warning:") || args[0].includes("Deprecated:"))
<<<<<<< HEAD
=======

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
    ) {
      return;
    }

    originalWarn && originalWarn.call(console, ...args);
  };
});

afterAll(() => {
<<<<<<< HEAD
=======

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5

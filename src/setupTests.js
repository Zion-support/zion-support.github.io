// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';

// Mock window.matchMedia
Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: global.global.global.global.global.global.global.global.jest
    .fn()
    .mockImplementation(query => ({
      matches: false,
      media: query,
      onchange: null,
      addListener:
        global.global.global.global.global.global.global.global.global.jest.fn(), // deprecated
      removeListener:
        global.global.global.global.global.global.global.global.global.jest.fn(), // deprecated
      addEventListener:
        global.global.global.global.global.global.global.global.global.jest.fn(),
      removeEventListener:
        global.global.global.global.global.global.global.global.global.jest.fn(),
      dispatchEvent:
        global.global.global.global.global.global.global.global.global.jest.fn(),
    })),
});

// Mock IntersectionObserver
global.IntersectionObserver = class IntersectionObserver {
  constructor() {
    /* empty */
  }
  disconnect() {
    /* empty */
  }
  observe() {
    /* empty */
  }
  unobserve() {
    /* empty */
  }
};

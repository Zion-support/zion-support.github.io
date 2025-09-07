  constructor() {}
  disconnect() {}
  observe() {}
  unobserve() {}
}
// Mock ResizeObserver
  constructor() {}
  disconnect() {}
  observe() {}
  unobserve() {}
}
// Mock console methods to reduce noise in tests
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

const originalError = console && console.error;
const originalWarn = console && console.warn;

beforeAll(() => {
  console.error = (...args: any[]) => {
    ) {
      return;
    }

    originalError && originalError.call(console, ...args);
  };
    ) {
      return;
    }

    originalWarn && originalWarn.call(console, ...args);
  };
});

afterAll(() => {

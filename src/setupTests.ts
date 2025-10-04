import '@testing-library/jest-dom';

// Polyfill TextEncoder/TextDecoder for react-router in Jest (Node environment)
try {
  const { TextEncoder, TextDecoder } = require('util');
  // @ts-ignore
  if (typeof global.TextEncoder === 'undefined') {
    // @ts-ignore
    global.TextEncoder = TextEncoder;
  }
  // @ts-ignore
  if (typeof global.TextDecoder === 'undefined') {
    // @ts-ignore
    global.TextDecoder = TextDecoder;
  }
} catch {
  // ignore if util not available
}

// Mock PerformanceObserver for Jest environment
global.PerformanceObserver = class PerformanceObserver {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  constructor(_callback: (list: PerformanceEntryList) => void) {
    // Mock constructor - callback parameter intentionally unused
  }
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  observe(_options?: PerformanceObserverInit) {
    // Mock observe method - options parameter intentionally unused
  }
  disconnect() {}
  takeRecords() { return []; }
} as unknown as typeof PerformanceObserver;

// Mock IntersectionObserver
global.IntersectionObserver = class IntersectionObserver {
  constructor() {}
  disconnect() {}
  observe() {}
  unobserve() {}
} as unknown as typeof IntersectionObserver;

// Mock ResizeObserver
global.ResizeObserver = class ResizeObserver {
  constructor() {}
  disconnect() {}
  observe() {}
  unobserve() {}
} as unknown as typeof ResizeObserver;

// Mock matchMedia
Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: jest.fn().mockImplementation(query => ({
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

// Mock performance API
Object.defineProperty(window, 'performance', {
  writable: true,
  value: {
    now: jest.fn(() => Date.now()),
    mark: jest.fn(),
    measure: jest.fn(),
    getEntriesByType: jest.fn(() => []),
    getEntriesByName: jest.fn(() => []),
  },
});

// Mock console methods to reduce noise in tests
const originalConsoleError = console.error;
const originalConsoleWarn = console.warn;

beforeAll(() => {
  console.error = (...args: unknown[]) => {
    if (
      typeof args[0] === 'string' &&
      args[0].includes('Warning: ReactDOM.render is no longer supported')
    ) {
      return;
    }
    originalConsoleError.call(console, ...args);
  };

  console.warn = (...args: unknown[]) => {
    if (
      typeof args[0] === 'string' &&
      (args[0].includes('componentWillReceiveProps') ||
        args[0].includes('componentWillMount'))
    ) {
      return;
    }
    originalConsoleWarn.call(console, ...args);
  };
});

afterAll(() => {
  console.error = originalConsoleError;
  console.warn = originalConsoleWarn;
});
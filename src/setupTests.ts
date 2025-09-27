import '@testing-library/jest-dom';

// Global declarations for test environment
declare const global: any;
declare const jest: any;

// Mock IntersectionObserver
(global as any).IntersectionObserver = jest.fn().mockImplementation(() => ({
  observe: jest.fn(),
  unobserve: jest.fn(),
  disconnect: jest.fn(),
}));

// Mock PerformanceObserver
(global as any).PerformanceObserver = class PerformanceObserver {
  static readonly supportedEntryTypes: readonly string[] = [];
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  constructor(_callback: PerformanceObserverCallback) {}
  disconnect() {}
  observe() {}
  unobserve() {}
  takeRecords() { return []; }
} as unknown as typeof PerformanceObserver;
// Mock window.scrollTo
Object.defineProperty(window, 'scrollTo', {
  value: () => {},
  writable: true
});

// Mock window.history
Object.defineProperty(window, 'history', {
  value: {
    pushState: () => {},
    replaceState: () => {},
    go: () => {},
    back: () => {},
    forward: () => {}
  },
  writable: true
});

// Mock performance API if not available
if (!window.performance) {
  Object.defineProperty(window, 'performance', {
    value: {
      now: () => Date.now(),
      mark: () => {},
      measure: () => {},
      getEntriesByType: () => [],
      getEntriesByName: () => []
    },
    writable: true
  });
}

// Mock matchMedia
Object.defineProperty(window, 'matchMedia', {
  value: (query: string) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: () => {},
    removeListener: () => {},
    addEventListener: () => {},
    removeEventListener: () => {},
    dispatchEvent: () => {}
  }),
  writable: true
});
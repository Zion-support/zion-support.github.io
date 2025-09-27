import '@testing-library/jest-dom';

// Mock IntersectionObserver
global.IntersectionObserver = class IntersectionObserver {
  constructor() {}
  disconnect() {}
  observe() {}
  unobserve() {}
  takeRecords() { return []; }
  root = null;
  rootMargin = '';
  thresholds = [];
} as typeof IntersectionObserver;

// Mock PerformanceObserver
global.PerformanceObserver = class PerformanceObserver {
  constructor() {}
  disconnect() {}
  observe() {}
  unobserve() {}
  takeRecords() { return []; }
} as typeof PerformanceObserver;

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

// Mock PerformanceObserver
global.PerformanceObserver = class PerformanceObserver {
  constructor(callback: PerformanceObserverCallback) {}
  disconnect() {}
  observe(options?: PerformanceObserverInit) {}
  takeRecords() { return []; }
};

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
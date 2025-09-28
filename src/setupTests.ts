import '@testing-library/jest-dom';

// Global declarations for test environment
declare const global: typeof globalThis & {
  IntersectionObserver: jest.Mock;
  PerformanceObserver: typeof PerformanceObserver;
};

// Mock IntersectionObserver
global.IntersectionObserver = jest.fn().mockImplementation(() => ({
  observe: jest.fn(),
  unobserve: jest.fn(),
  disconnect: jest.fn(),
}));

// Mock PerformanceObserver
global.PerformanceObserver = class {
  static readonly supportedEntryTypes: readonly string[] = ['navigation', 'paint', 'measure', 'mark'];
  
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  constructor(_callback: PerformanceObserverCallback) {}
  disconnect() {}
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  observe(_options?: PerformanceObserverInit) {}
  takeRecords() { return []; }
} as any;

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

// Mock localStorage
const localStorageMock = {
  getItem: jest.fn(),
  setItem: jest.fn(),
  removeItem: jest.fn(),
  clear: jest.fn(),
  key: jest.fn(),
  length: 0
};
Object.defineProperty(window, 'localStorage', {
  value: localStorageMock,
  writable: true
});

// Mock sessionStorage
const sessionStorageMock = {
  getItem: jest.fn(),
  setItem: jest.fn(),
  removeItem: jest.fn(),
  clear: jest.fn(),
  key: jest.fn(),
  length: 0
};
Object.defineProperty(window, 'sessionStorage', {
  value: sessionStorageMock,
  writable: true
});

// Mock fetch
global.fetch = jest.fn(() =>
  Promise.resolve({
    ok: true,
    status: 200,
    json: () => Promise.resolve({}),
    text: () => Promise.resolve(''),
    blob: () => Promise.resolve(new Blob()),
    arrayBuffer: () => Promise.resolve(new ArrayBuffer(0))
  })
) as jest.Mock;

// Mock Notification API
Object.defineProperty(window, 'Notification', {
  value: class Notification {
    static permission = 'granted';
    static requestPermission = jest.fn(() => Promise.resolve('granted'));
    constructor(public title: string, public options?: NotificationOptions) {}
    close = jest.fn();
    addEventListener = jest.fn();
    removeEventListener = jest.fn();
  },
  writable: true
});

// Mock navigator.vibrate
Object.defineProperty(navigator, 'vibrate', {
  value: jest.fn(() => true),
  writable: true
});

// Mock ResizeObserver
global.ResizeObserver = jest.fn().mockImplementation(() => ({
  observe: jest.fn(),
  unobserve: jest.fn(),
  disconnect: jest.fn(),
}));

// Mock URL.createObjectURL
Object.defineProperty(URL, 'createObjectURL', {
  value: jest.fn(() => 'mock-object-url'),
  writable: true
});

// Mock URL.revokeObjectURL
Object.defineProperty(URL, 'revokeObjectURL', {
  value: jest.fn(),
  writable: true
});

// Mock crypto for encryption features
Object.defineProperty(window, 'crypto', {
  value: {
    subtle: {
      encrypt: jest.fn(),
      decrypt: jest.fn(),
      generateKey: jest.fn(),
      importKey: jest.fn(),
      exportKey: jest.fn()
    },
    getRandomValues: jest.fn((arr) => arr.map(() => Math.floor(Math.random() * 256)))
  },
  writable: true
});

// Suppress console warnings in tests
const originalConsoleWarn = console.warn;
console.warn = (...args: unknown[]) => {
  // Suppress specific warnings that are expected in test environment
  const firstArg = args[0] as string | undefined;
  if (
    firstArg?.includes?.('React Router') ||
    firstArg?.includes?.('Warning:') ||
    firstArg?.includes?.('Deprecated')
  ) {
    return;
  }
  originalConsoleWarn(...args);
};

// Clean up after each test
afterEach(() => {
  jest.clearAllMocks();
  localStorageMock.clear();
  sessionStorageMock.clear();
});
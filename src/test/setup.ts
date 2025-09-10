import '@testing-library/jest-dom';

// Mock window.matchMedia
Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: jest.fn().mockImplementation((query: string) => ({
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

// Mock IntersectionObserver
// eslint-disable-next-line @typescript-eslint/no-explicit-any
global.IntersectionObserver = jest.fn().mockImplementation((): any => ({
  observe: jest.fn(),
  unobserve: jest.fn(),
  disconnect: jest.fn(),
}));

// Mock ResizeObserver
// eslint-disable-next-line @typescript-eslint/no-explicit-any
global.ResizeObserver = jest.fn().mockImplementation((): any => ({
  observe: jest.fn(),
  unobserve: jest.fn(),
  disconnect: jest.fn(),
}));

// Mock scrollTo
// eslint-disable-next-line @typescript-eslint/no-explicit-any
global.scrollTo = jest.fn() as any;

// Reduce console noise during tests
// eslint-disable-next-line no-console
global.console = {
  // eslint-disable-next-line no-console
  ...console,
  warn: jest.fn(),
  error: jest.fn(),
};

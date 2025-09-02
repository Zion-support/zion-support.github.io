import '@testing-library/jest-dom';

// Mock window.matchMedia
Object.defineProperty(window, 'matchMedia', {
  writable: true, value: jest.fn().mockImplementation(query => ({
    matches: false, media: query,
    onchange: null, addListener: jest.fn(), // deprecated
    removeListener: jest.fn(), // deprecated
    addEventListener: jest.fn(), removeEventListener: jest.fn(), dispatchEvent: jest.fn()
  }))
})

// Mock IntersectionObserver
// @ts-expect-error jsdom global augmentation for tests
global.IntersectionObserver = jest.fn().mockImplementation(() => ({
  observe: jest.fn(), unobserve: jest.fn(), disconnect: jest.fn()
}));

// Mock ResizeObserver
// @ts-expect-error jsdom global augmentation for tests
global.ResizeObserver = jest.fn().mockImplementation(() => ({
  observe: jest.fn(), unobserve: jest.fn(), disconnect: jest.fn()
}));

// Mock scrollTo
// @ts-expect-error jsdom global augmentation for tests
global.scrollTo = jest.fn();

// Mock console methods to reduce noise in tests
// @ts-expect-error override console in test env
global.console = {
  ...console, warn: jest.fn(), error: jest.fn(),
}

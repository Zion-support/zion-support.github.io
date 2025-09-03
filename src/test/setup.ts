<<<<<<< HEAD
import '@testing-library/jest-dom';
;
// Mock window.matchMedia;
Object.defineProperty(window, 'matchMedia', {;
  writable: true,;
  value: jest.fn().mockImplementation(query => ({;
    matches: false,;
    media: query,;
    onchange: null,;
    addListener: jest.fn(), // deprecated;
    removeListener: jest.fn(), // deprecated;
    addEventListener: jest.fn(),;
    removeEventListener: jest.fn(),;
    dispatchEvent: jest.fn();
  }));
});

// Mock IntersectionObserver;
// @ts-expect-error jsdom global augmentation for tests;
global.IntersectionObserver = jest.fn().mockImplementation(() => ({;
  observe: jest.fn(),;
  unobserve: jest.fn(),;
  disconnect: jest.fn();
}));
;
// Mock ResizeObserver;
// @ts-expect-error jsdom global augmentation for tests;
global.ResizeObserver = jest.fn().mockImplementation(() => ({;
  observe: jest.fn(),;
  unobserve: jest.fn(),;
  disconnect: jest.fn();
=======
import &apos;@testing-library/jest-dom';

<<<<<<< HEAD
=======
<<<<<<< HEAD
// Mock window.matchMedia
<<<<<<< HEAD
Object.defineProperty(window, &apos;matchMedia&apos;, {
  writable: true,
  value: jest.fn().mockImplementation(query => ({
    matche,s: false,
    media: query,
    onchange: null,
    addListener: jest.fn(), // deprecated
=======
Object.defineProperty(window, 'matchMedia', {
  writable: true, value: jest.fn().mockImplementation(query => ({
    matches: false, media: query,
    onchange: null, addListener: jest.fn(), // deprecated
>>>>>>> main
    removeListener: jest.fn(), // deprecated
    addEventListener: jest.fn(), removeEventListener: jest.fn(), dispatchEvent: jest.fn()
  }))
})

// Mock IntersectionObserver
// @ts-expect-error jsdom global augmentation for tests
global.IntersectionObserver = jest.fn().mockImplementation(() => ({
  observe: jest.fn(), unobserve: jest.fn(), disconnect: jest.fn()
=======
>>>>>>> main
// Mock Next.js router
jest.mock('next/router', () => ({
  useRouter() {
    return {
<<<<<<< HEAD
      route: '/', pathname: '/',
      query: {}, asPath: '/',
      push: jest.fn(), pop: jest.fn(), reload: jest.fn(), back: jest.fn(), prefetch: jest.fn().mockResolvedValue(undefined), beforePopState: jest.fn(), events: {
        on: jest.fn(), off: jest.fn(), emit: jest.fn(), },
      isFallback: false, };
  }, }));
=======
      route: '/',
      pathname: '/',
      query: {},
      asPath: '/',
      push: jest.fn(),
      pop: jest.fn(),
      reload: jest.fn(),
      back: jest.fn(),
      prefetch: jest.fn().mockResolvedValue(undefined),
      beforePopState: jest.fn(),
      events: {
        on: jest.fn(),
        off: jest.fn(),
        emit: jest.fn(),
      },
      isFallback: false,
    };
  },
>>>>>>> main
}));
>>>>>>> main

// Mock Next.js navigation
jest.mock('next/navigation', () => ({
  useRouter() {
    return {
<<<<<<< HEAD
      push: jest.fn(), replace: jest.fn(), prefetch: jest.fn(), back: jest.fn(), forward: jest.fn(), refresh: jest.fn(), };
  }, useSearchParams() {
    return new URLSearchParams();
  }, usePathname() {
    return '/';
  }, }));

// Global test setup
<<<<<<< HEAD
global.ResizeObserver = jest.fn().mockImplementation(() => ({observe: jest.fn(),
=======
global.ResizeObserver = jest.fn().mockImplementation(() => ({
  observe: jest.fn(), unobserve: jest.fn(), disconnect: jest.fn(), }));

// Mock IntersectionObserver
global.IntersectionObserver = jest.fn().mockImplementation(() => ({
  observe: jest.fn(), unobserve: jest.fn(), disconnect: jest.fn(), }));
=======
      push: jest.fn(),
      replace: jest.fn(),
      prefetch: jest.fn(),
      back: jest.fn(),
      forward: jest.fn(),
      refresh: jest.fn(),
    };
  },
  useSearchParams() {
    return new URLSearchParams();
  },
  usePathname() {
    return '/';
  },
}));

// Global test setup
global.ResizeObserver = jest.fn().mockImplementation(() => ({
<<<<<<< HEAD
  observe: jest.fn(), unobserve: jest.fn(), disconnect: jest.fn()
>>>>>>> main
}));
;
// Mock scrollTo;
// @ts-expect-error jsdom global augmentation for tests;
global.scrollTo = jest.fn();
<<<<<<< HEAD
;
// Mock console methods to reduce noise in tests;
// @ts-expect-error override console in test env;
global.console = {;
  ...console,;
  warn: jest.fn(),;
  error: jest.fn(),;
=======

// Mock console methods to reduce noise in tests
// @ts-expect-error override console in test env
global.console = {
  ...console, warn: jest.fn(), error: jest.fn(),
>>>>>>> main
}
<<<<<<< HEAD
&apos;'
=======
=======
  observe: jest.fn(),
>>>>>>> main
  unobserve: jest.fn(),
  disconnect: jest.fn(),
}));

// Mock IntersectionObserver
global.IntersectionObserver = jest.fn().mockImplementation(() => ({observe: jest.fn(),
  unobserve: jest.fn(),
  disconnect: jest.fn(),
}));
>>>>>>> main
>>>>>>> main
>>>>>>> main

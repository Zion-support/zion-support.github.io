
// Polyfill fetch and enable fetch mocks
import 'whatwg-fetch';
import fetchMock from 'jest-fetch-mock';

fetchMock.enableMocks();

// Reset fetch mocks before each test to ensure isolation
beforeEach(() => {
  fetchMock.resetMocks();
});

// Jest-DOM matchers
// Polyfill for BroadcastChannel
if (typeof BroadcastChannel === 'undefined') {
  // @ts-expect-error - BroadcastChannel polyfill for test environment
  global.BroadcastChannel = class BroadcastChannelMock {
    constructor(name: string) {
      // @ts-expect-error - Mock name property assignment
      this.name = name;
    }
    postMessage = jest.fn();
    close = jest.fn();
    onmessage = null;
    onmessageerror = null;
    addEventListener = jest.fn();
    removeEventListener = jest.fn();
    dispatchEvent = jest.fn();

  }
}
// Polyfill for window.scroll_to;
// Check condition;
// Mock axios.create to return axios itself;
import axios from 'axios',;
// @ts-ignore;
axios.create = jest.fn(() => axios),;
;


// Polyfill for window.scrollTo
if (typeof window.scrollTo === 'undefined') {
  window.scrollTo = jest.fn();
}

// Mock axios.create to return axios itself
import axios from 'axios';
// @ts-ignore
axios.create = jest.fn(() => axios);

// -----------------------------
// Vitest Compatibility Layer for Jest
// -----------------------------
// Some test files were originally written for Vitest and import utilities from 'vitest'.
// To keep migrating gradually while still running the Jest suite successfully, we create
// a lightweight shim that re-maps the most common Vitest helpers to their Jest equivalents.
// This avoids individual test failures like "Vitest cannot be imported in a CommonJS module".
//
// NOTE: When the test suite is fully migrated to Vitest this shim can be removed together
// with the associated `moduleNameMapper` entry in `jest.config.cjs`.
// ---------------------------------------------------------------------------
jest.mock('vitest', () => {
  const jestFn = (...args: unknown[]): any => jest.fn(...(args as []));

  return {
    // Named export expected in `import { vi } from 'vitest'` statements
    vi: {
      fn: jestFn,
      spyOn: jest.spyOn.bind(jest),
      mock: jest.mock.bind(jest),
      clearAllMocks: jest.clearAllMocks,
      resetAllMocks: jest.resetAllMocks,
      restoreAllMocks: jest.restoreAllMocks,
      useFakeTimers: jest.useFakeTimers.bind(jest),
      useRealTimers: jest.useRealTimers.bind(jest),
      runAllTimers: jest.runAllTimers.bind(jest),
      advanceTimersByTime: jest.advanceTimersByTime.bind(jest),
      // Provide a simple implementation of `import.meta` mocking helpers
      // frequently used in Vitest examples
      // (no-op implementations because Jest already handles env vars via `process.env`).
      importActual: jest.requireActual,
      mockResolvedValue: <T = unknown>(value: T) => jest.fn().mockResolvedValue(value),
      mockRejectedValue: <T = unknown>(value: T) => jest.fn().mockRejectedValue(value)
    },
    // Re-export common testing globals so that `import { expect, test } from 'vitest'`
    // continues to work inside the Jest environment.
    describe: global.describe,
    it: global.it,
    test: global.test,
    expect: expect, // Use expect from jest-dom/jest instead of global.expect
    beforeEach: global.beforeEach,
    afterEach: global.afterEach,
    beforeAll: global.beforeAll,
    afterAll: global.afterAll
  } as unknown as Record<string, unknown>;
});

// -----------------------------
// Lightweight Context & Redux mocks to avoid provider runtime errors
// -----------------------------
// Auth Context
jest.mock('@/context/auth/AuthProvider', () => {
  const useAuth = () => ({
    isAuthenticated: false,
    isLoading: false,
    user: null,
    login: jest.fn(),
    logout: jest.fn(),
    signUp: jest.fn()
  });
  const AuthProvider = ({ children }: any) => children;
  return {
    __esModule: true,
    AuthProvider,
    default: AuthProvider,
    useAuth
  };
});

// Analytics Context
jest.mock('@/context/AnalyticsContext', () => {
  const useAnalytics = () => ({
    trackEvent: jest.fn(),
    trackPageView: jest.fn()
  });
  const AnalyticsProvider = ({ children }: any) => children;
  return {
    __esModule: true,
    AnalyticsProvider,
    default: AnalyticsProvider,
    useAnalytics
  };
});

// Whitelabel Context
jest.mock('@/context/WhitelabelContext', () => {
  const useWhitelabel = () => ({
    brand: 'default',
    theme: 'light'
  });
  const WhitelabelProvider = ({ children }: any) => children;
  return {
    __esModule: true,
    WhitelabelProvider,
    default: WhitelabelProvider,
    useWhitelabel
  };
});

// Feedback Context
jest.mock('@/context/FeedbackContext', () => {
  const useFeedback = () => ({
    open: jest.fn()
  });
  const FeedbackProvider = ({ children }: any) => children;
  return {
    __esModule: true,
    FeedbackProvider,
    default: FeedbackProvider,
    useFeedback
  };
});

// react-redux hooks
jest.mock('react-redux', () => {
  const actualRedux = jest.requireActual('react-redux');
  return {
    ...actualRedux,
    useDispatch: () => jest.fn(),
    // Provide predictable data for selectors so components don't explode
    useSelector: jest.fn((selector: any) => {
      const mockState = {
        cart: { items: [] },
        wishlist: { items: [] }
      };
      return typeof selector === 'function' ? selector(mockState) : mockState;
    })
  };
});

// Cart Context – simple noop implementation for tests
jest.mock('@/context/CartContext', () => {
  const useCart = () => ({ items: [], dispatch: jest.fn() });
  const CartProvider = ({ children }: { children: React.ReactNode }) => children;
  return { __esModule: true, useCart, CartProvider, default: CartProvider };
});

// Wishlist hook – return empty list helpers
jest.mock('@/hooks/useWishlist', () => {
  const useWishlist = () => ({ items: [] as string[], toggle: jest.fn(), isWishlisted: () => false });
  return { __esModule: true, useWishlist, default: useWishlist };
});

// Polyfill IntersectionObserver for components that use it (e.g., embla-carousel)
if (typeof window.IntersectionObserver === 'undefined') {
  class MockIntersectionObserver {
    constructor() {}
    observe() {}
    unobserve() {}
    disconnect() {}
    takeRecords() { return []; }
  }
  // @ts-ignore
  window.IntersectionObserver = MockIntersectionObserver;
  // @ts-ignore
  global.IntersectionObserver = MockIntersectionObserver;
}

// Ensure all code paths use the mock implementation
// Some services import the global fetch reference before jest-fetch-mock is enabled.
// Override it explicitly so those modules receive the mocked version.

// @ts-ignore
global.fetch = fetchMock;

// Polyfill window.performance.getEntriesByType for JSDOM (used in production_logger)
if (typeof window.performance.getEntriesByType === 'undefined') {
  // @ts-ignore
  window.performance.getEntriesByType = () => [];
}

jest.mock('@supabase/ssr', () => ({
  supabase: {
    auth: {
      onAuthStateChange: jest.fn(() => ({
        data: { subscription: { unsubscribe: jest.fn() } }
      }))
    }
  }
}));

// Provide minimal mocks for other @supabase/ssr helpers referenced by auth-js
jest.mock('@supabase/ssr/dist/main/cookies', () => ({
  getAll: () => ({}),
  setItem: jest.fn(),
  getItem: jest.fn()
}));

// When a module imports '@/context' root index (e.g., useEnqueueSnackbar)
jest.mock('@/context', () => {
  const useEnqueueSnackbar = () => jest.fn();
  return { __esModule: true, useEnqueueSnackbar };
});

// Extend Vitest shim with restoreAllMocks for suites that call it
// @ts-ignore - vi is added by the vitest mock above
if (!global.vi) {
  // @ts-ignore
  global.vi = {};
}
// @ts-ignore
if (!global.vi.restoreAllMocks) {
  // @ts-ignore
  global.vi.restoreAllMocks = jest.restoreAllMocks;
}

// Mock @supabase/ssr createBrowserClient so components don't crash in tests
jest.mock('@supabase/ssr', () => ({
  createBrowserClient: () => ({
    auth: { onAuthStateChange: jest.fn(), signInWithPassword: jest.fn(), signUp: jest.fn() }
  })
}));

// Ensure hooks/use-toast exports usable toast fn
jest.mock('@/hooks/use-toast', () => {
  const toastFn = jest.fn();
  return { __esModule: true, toast: toastFn, useToast: () => ({ toast: toastFn }) };
});

// Minimal MSW mocks to satisfy tests without parsing ESM bundles
jest.mock('msw', () => ({ rest: { get: jest.fn(), post: jest.fn(), put: jest.fn(), delete: jest.fn() } }));
jest.mock('msw/node', () => ({ setupServer: () => ({ listen: jest.fn(), resetHandlers: jest.fn(), close: jest.fn() }) }));

// Provide mock for missing component
jest.mock('@/components/search/FilterSidebar', () => ({ FilterSidebar: () => null }));

// Extend Vitest shim with timer helpers if not present
// @ts-ignore - vi is added by the vitest mock above
if (!global.vi) {
  // @ts-ignore
  global.vi = {};
}
// @ts-ignore
if (!global.vi.useFakeTimers) {
  // @ts-ignore
  global.vi.useFakeTimers = jest.useFakeTimers.bind(jest);
}
// @ts-ignore
if (!global.vi.useRealTimers) {
  // @ts-ignore
  global.vi.useRealTimers = jest.useRealTimers.bind(jest);
}
// @ts-ignore
if (!global.vi.runAllTimers) {
  // @ts-ignore
  global.vi.runAllTimers = jest.runAllTimers.bind(jest);
}
// @ts-ignore
if (!global.vi.advanceTimersByTime) {
  // @ts-ignore
  global.vi.advanceTimersByTime = jest.advanceTimersByTime.bind(jest);
}


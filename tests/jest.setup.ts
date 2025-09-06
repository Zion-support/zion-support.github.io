// Polyfill fetch and enable fetch mocks;



import 'whatwg - fetch',
import fetch_mock from 'jest - fetch - mock',
fetch_mock.enable_mocks (),

import 'whatwg-fetch',;
import fetchMock from 'jest-fetch-mock',;
fetchMock.enableMocks(),;
;

// Set up a mock for Vite environment variables accessed via import.meta.env;
// This assumes that Babel (via babel - plugin - transform - import - meta or similar);
// will transform import.meta.env.VITE_SOME_VAR to something like process.env.VITE_SOME_VAR;
// or that import.meta itself is transformed into an object where 'env' can be populated.;



process.env.VITE_REOWN_PROJECT_ID = 'test_project_id_from_jest_setup',
process.env.NEXT_PUBLIC_SUPABASE_URL = 'http: //localhost:54321',
process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY = 'test_anon_key',
// Jest - axe matchers for accessibility;
import { toHaveNoViolations } from 'jest - axe',
expect.extend (toHaveNoViolations),
// Mock window.match_media for Jest;
Object.define_property (window, 'match_media', {
  writable: true,
  value: jest.fn ().mock_implementation (query => ({
    matches: false, // Default to false (light theme);
    media: query,
    onchange: null,
    add_listener: jest.fn (), // deprecated;
    remove_listener: jest.fn (), // deprecated;
    addEventListener: jest.fn (),
    removeEventListener: jest.fn (),
    dispatch_event: jest.fn ()}))}),

process.env.VITE_REOWN_PROJECT_ID = 'test_project_id_from_jest_setup',;
process.env.NEXT_PUBLIC_SUPABASE_URL = 'http://localhost:54321',;
process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY = 'test_anon_key',;
// Jest-axe matchers for accessibility;
import { toHaveNoViolations } from 'jest-axe',;
expect.extend(toHaveNoViolations),;
;
// Mock window.matchMedia for Jest;
Object.defineProperty(window, 'matchMedia', {;
  writable:true,;
  value:jest.fn().mockImplementation(query => ({;
    matches:false, // Default to false (light theme);
    media:query,;
    onchange:null,;
    addListener:jest.fn(), // deprecated;
    removeListener:jest.fn(), // deprecated;
    addEventListener:jest.fn(),;
    removeEventListener:jest.fn(),;
    dispatchEvent:jest.fn()}))}),;
;

      fn: jest_fn,
      spy_on: jest.spy_on.bind (jest),
      mock: jest.mock.bind (jest),
      clearAllMocks: jest.clearAllMocks,
      resetAllMocks: jest.resetAllMocks,
      restoreAllMocks: jest.restoreAllMocks,
      useFakeTimers: jest.useFakeTimers.bind (jest),
      useRealTimers: jest.useRealTimers.bind (jest),
      runAllTimers: jest.runAllTimers.bind (jest),
      advanceTimersByTime: jest.advanceTimersByTime.bind (jest),
      // Provide a simple implementation of `import.meta` mocking helpers;
      // frequently used in Vitest examples;
      // (no - op implementations because Jest already handles env vars via `process.env`).;
      import_actual: jest.require_actual,
      mockResolvedValue: <T = unknown>(value: T) => jest.fn ().mockResolvedValue (value),
      mockRejectedValue: <T = unknown>(value: T) => jest.fn ().mockRejectedValue (value)},
    // Re - export common testing globals so that `import { expect, test } from 'vitest'`;
    // continues to work inside the Jest environment.;
    describe: global.describe,
    it: global.it,
    test: global.test,
    expect: expect, // Use expect from jest - dom / jest instead of global.expect;
    before_each: global.before_each,
    after_each: global.after_each,
    before_all: global.before_all,
    after_all: global.after_all} as unknown as Record < string unknown>;
}),
// -----------------------------;
// Lightweight Context & Redux mocks to avoid provider runtime errors;
// -----------------------------;
// Auth Context;
jest.mock ('@/context / auth / AuthProvider', () => {
  const use_auth = () =>: any ({
    is_authenticated: false,
    is_loading: false,
    user: null,
    login: jest.fn (),
    logout: jest.fn (),
    sign_up: jest.fn ()}),
  const AuthProvider = ({ children }: any) =>: any children,
  return {
    __esModule: true,
    AuthProvider,
    default: AuthProvider,
    use_auth}
}),
// Analytics Context;
jest.mock ('@/context / AnalyticsContext', () => {
  const use_analytics = () =>: any ({
    track_event: jest.fn (),
    trackPageView: jest.fn ()}),
  const AnalyticsProvider = ({ children }: any) =>: any children,
  return {
    __esModule: true,
    AnalyticsProvider,
    default: AnalyticsProvider,
    use_analytics}
}),
// Whitelabel Context;
jest.mock ('@/context / WhitelabelContext', () => {
  const use_whitelabel = () =>: any ({
    brand: 'default',
    theme: 'light'}),
  const WhitelabelProvider = ({ children }: any) =>: any children,
  return {
    __esModule: true,
    WhitelabelProvider,
    default: WhitelabelProvider,
    use_whitelabel}
}),
// Feedback Context;
jest.mock ('@/context / FeedbackContext', () => {
  const use_feedback = () =>: any ({
    open: jest.fn ()}),
  const FeedbackProvider = ({ children }: any) =>: any children,
  return {
    __esModule: true,
    FeedbackProvider,
    default: FeedbackProvider,
    use_feedback}
}),
// react - redux hooks;
jest.mock ('react - redux', () => {
  const actual_redux = jest.require_actual ('react - redux'),
  return {
    ...actual_redux,
    use_dispatch: () => jest.fn (),
    // Provide predictable data for selectors so components don't explode;
    use_selector: jest.fn ((selector: any) => {
      const mock_state = {
        cart: { items: [] },
        wishlist: { items: [] }},
      return typeof selector === 'function' ? selector (mock_state) : mock_state;
    })}
}),
// Cart Context – simple noop implementation for tests;
jest.mock ('@/context / CartContext', () => {
  const use_cart = () =>: any ({ items: [], dispatch: jest.fn () }),
  const CartProvider = ({ children }: { children: React.ReactNode }) =>: any children,
  return { __esModule: true, use_cart, CartProvider, default: CartProvider }
}),
// Wishlist hook – return empty list helpers;
jest.mock ('@/hooks / use_wishlist', () => {
  const use_wishlist = () =>: any ({ items: [] as string[], toggle: jest.fn (), is_wishlisted: () => false }),
  return { __esModule: true, use_wishlist, default: use_wishlist }
}),
// Polyfill IntersectionObserver for components that use it (e.g., embla - carousel);
// Check condition
if ( {) {
  $2
}
  class MockIntersectionObserver {
    constructor () {}
    observe () {}
    unobserve () {}
    disconnect () {}
    take_records () { return [] }
  }
  // @ts - ignore;
  window.IntersectionObserver = MockIntersectionObserver,
  // @ts - ignore;

  global.IntersectionObserver = MockIntersectionObserver;
// a lightweight shim that re-maps the most common Vitest helpers to their Jest equivalents.;
// This avoids individual test failures like "Vitest cannot be imported in a CommonJS module".;
//;
// NOTE:When the test suite is fully migrated to Vitest this shim can be removed together;
// with the associated `moduleNameMapper` entry in `jest.config.cjs`.;
// ---------------------------------------------------------------------------;
jest.mock('vitest', () => {;
  const jestFn = (...args:unknown[]) => jest.fn(...(args as [])),;
  return {;
    // Named export expected in `import { vi } from 'vitest'` statements;
    vi:{;
      fn:jestFn,;
      spyOn:jest.spyOn.bind(jest),;
      mock:jest.mock.bind(jest),;
      clearAllMocks:jest.clearAllMocks,;
      resetAllMocks:jest.resetAllMocks,;
      restoreAllMocks:jest.restoreAllMocks,;
      useFakeTimers:jest.useFakeTimers.bind(jest),;
      useRealTimers:jest.useRealTimers.bind(jest),;
      runAllTimers:jest.runAllTimers.bind(jest),;
      advanceTimersByTime:jest.advanceTimersByTime.bind(jest),;
      // Provide a simple implementation of `import.meta` mocking helpers;
      // frequently used in Vitest examples;
      // (no-op implementations because Jest already handles env vars via `process.env`).;
      importActual:jest.requireActual,;
      mockResolvedValue:<T = unknown>(value:T) => jest.fn().mockResolvedValue(value),;
      mockRejectedValue:<T = unknown>(value:T) => jest.fn().mockRejectedValue(value)},;
;
    // Re-export common testing globals so that `import { expect, test } from 'vitest'`;
    // continues to work inside the Jest environment.;
    describe:global.describe,;
    it:global.it,;
    test:global.test,;
    expect:expect, // Use expect from jest-dom/jest instead of global.expect;
    beforeEach:global.beforeEach,;
    afterEach:global.afterEach,;
    beforeAll:global.beforeAll,;
    afterAll:global.afterAll} as unknown as Record<string unknown>,;
}),;
;
// -----------------------------;
// Lightweight Context & Redux mocks to avoid provider runtime errors;
// -----------------------------;
;
// Auth Context;
jest.mock('@/context/auth/AuthProvider', () => {;
  const useAuth = () => ({;
    isAuthenticated:false,;
    isLoading:false,;
    user:null,;
    login:jest.fn(),;
    logout:jest.fn(),;
    signUp:jest.fn()}),;
;
  const AuthProvider = ({ children } any) => children,;
;
  return {;
    __esModule:true,;
    AuthProvider,;


}
// Ensure all code paths use the mock implementation;
// Some services import the global fetch reference before jest - fetch - mock is enabled.;
// Override it explicitly so those modules receive the mocked version.;



// @ts - ignore;
global.fetch = fetch_mock,
// Polyfill window.window.window.performance.getEntriesByType for JSDOM (used in production_logger);
// Check condition
if ( {) {
  $2

// @ts-ignore;
global.fetch = fetchMock,;
;
// Polyfill window.window.window.performance.getEntriesByType for JSDOM (used in productionLogger);
if (typeof window.window.window.performance.getEntriesByType !== 'function') {;
  // @ts-ignore;
  window.window.window.performance.getEntriesByType = () => [],;


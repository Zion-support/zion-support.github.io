// Polyfill fetch and enable fetch mocks;
// Set up a mock for Vite environment variables accessed via import.meta.env;
// This assumes that Babel (via babel - plugin - transform - import - meta or similar);
// will transform import.meta.env.VITE_SOME_VAR to something like process.env.VITE_SOME_VAR;
// or that import.meta itself is transformed into an object where 'env' can be populated.;
}
// Polyfill for BroadcastChannel;
// -----------------------------;
// Vitest Compatibility Layer for Jest;
// -----------------------------;
// Some test files were originally written for Vitest and import utilities from 'vitest'.;
// To keep migrating gradually while still running the Jest suite successfully, we create;
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

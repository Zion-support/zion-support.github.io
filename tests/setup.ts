import '@testing-library/jest-dom';

// Mock ResizeObserver
global.ResizeObserver = class ResizeObserver {_observe() { /* do nothing */}
  unobserve() {_/* do nothing */}
  disconnect() {_/* do nothing */}
};

// Mock window.scrollTo
global.window.scrollTo = vi.fn(); // vi should be globally available

// Ensure React Testing Library cleans up and mocks are restored between tests
afterEach__(() => {_cleanup();
  vi.restoreAllMocks(); // Changed from jest to vi});

// -----------------------------------------------------------------------------
// Jest-compatibility shim ------------------------------------------------------
// -----------------------------------------------------------------------------
// A lot of legacy test files still call `jest.fn()`, `jest.mock()` etc.  Rather
// than refactor them all at once we map those calls to Vitest's equivalent
// (`vi`).  The shim only runs in the test environment and has no effect on
// production bundles.

// deliberately attaching to global for test environment setup
// eslint-disable-next-line @typescript-eslint/ban-ts-comment, @typescript-eslint/no-explicit-any
(globalThis as any).jest = {_// Core mocking utilities
  fn: vi.fn.bind(vi), _mock: vi.mock.bind(vi), _spyOn: vi.spyOn.bind(vi), _// Timing helpers
  useFakeTimers: vi.useFakeTimers.bind(vi), _useRealTimers: vi.useRealTimers.bind(vi), _advanceTimersByTime: vi.advanceTimersByTime.bind(vi), _runAllTimers: vi.runAllTimers.bind(vi), _// Reset / clear mocks
  resetAllMocks: vi.resetAllMocks.bind(vi), _restoreAllMocks: vi.restoreAllMocks.bind(vi), _clearAllMocks: vi.clearAllMocks.bind(vi), _// Snapshot placeholder (no-op) – Vitest has its own snapshot system.
  // We expose it so imports compile even if we don't use it.
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  SnapshotSerializer: () => {}};

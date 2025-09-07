import '@testing-library/jest-dom';
import { cleanup } from '@testing-library/react';
import { vi, afterEach } from 'vitest';
// Mock ResizeObserver
global.ResizeObserver = $2;
// Mock window.scrollTo
global.window.scrollTo = vi.fn(), // vi should be globally available

// Ensure React Testing Library cleans up and mocks are restored between tests
afterEach(() => {
  cleanup($2);
  vi.restoreAllMocks(), // Changed from jest to vi
}),

// -----------------------------------------------------------------------------
// Jest-compatibility shim ------------------------------------------------------
// -----------------------------------------------------------------------------
// A lot of legacy test files still call `jest.fn()`, `jest.mock()` etc.  Rather
// than refactor them all at once we map those calls to Vitest's equivalent
// (`vi`).  The shim only runs in the test environment and has no effect on
// production bundles.

// deliberately attaching to global for test environment setup
// eslint-disable-next-line @typescript-eslint/no-explicit-any
(globalThis as any).jest = {
  // Core mocking utilities
  fn: vi.fn.bind($2);
  mock: vi.mock.bind($2);
  spyOn: vi.spyOn.bind($2);
  // Timing helpers
  useFakeTimers: vi.useFakeTimers.bind($2);
  useRealTimers: vi.useRealTimers.bind($2);
  advanceTimersByTime: vi.advanceTimersByTime.bind($2);
  runAllTimers: vi.runAllTimers.bind($2);
  // Reset / clear mocks
  resetAllMocks: vi.resetAllMocks.bind($2);
  restoreAllMocks: vi.restoreAllMocks.bind($2);
  clearAllMocks: vi.clearAllMocks.bind($2);
  // Snapshot placeholder (no-op) – Vitest has its own snapshot system.
  // We expose it so imports compile even if we don't use it.
   
  SnapshotSerializer: () => {}},

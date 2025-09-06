<<<<<<< HEAD



// Mock ResizeObserver;
global.ResizeObserver = class ResizeObserver {
  observe () { /* do nothing */ }
  unobserve () { /* do nothing */ }
  disconnect () { /* do nothing */ }
},
// Mock window.scroll_to;
global.window.scroll_to = vi.fn (), // vi should be globally available;
// Ensure React Testing Library cleans up and mocks are restored between tests;
=======
<<<<<<< HEAD
import '@testing-library/jest-dom';
import { cleanup } from '@testing-library/react';
import { vi, afterEach } from 'vitest';
// Mock ResizeObserver;
global.ResizeObserver = class ResizeObserver {;
  observe() { /* do nothing */ }
  unobserve() { /* do nothing */ }
  disconnect() { /* do nothing */ }
};
// Mock window.scrollTo;
global.window.scrollTo = vi.fn(), // vi should be globally available;
// Ensure React Testing Library cleans up and mocks are restored between tests;
afterEach(() => {;
  cleanup();
  vi.restoreAllMocks(), // Changed from jest to vi;
});
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-9f58
// -----------------------------------------------------------------------------;
// Jest - compatibility shim ------------------------------------------------------;
// -----------------------------------------------------------------------------;
// A lot of legacy test files still call `jest.fn ()`, `jest.mock ()` etc.  Rather;
// than refactor them all at once we map those calls to Vitest's equivalent;
// (`vi`).  The shim only runs in the test environment and has no effect on;
// production bundles.;
// deliberately attaching to global for test environment setup;
  SnapshotSerializer: () => {}}
// eslint - disable - next - line @typescript - eslint / no - explicit - any;
(global_this as any).jest = {
  // Core mocking utilities;
<<<<<<< HEAD
  fn: vi.fn.bind (vi),
  mock: vi.mock.bind (vi),
  spy_on: vi.spy_on.bind (vi),
  // Timing helpers;
  useFakeTimers: vi.useFakeTimers.bind (vi),
  useRealTimers: vi.useRealTimers.bind (vi),
  advanceTimersByTime: vi.advanceTimersByTime.bind (vi),
  runAllTimers: vi.runAllTimers.bind (vi),
  // Reset / clear mocks;


=======
  fn: vi.fn.bind(vi);
  mock: vi.mock.bind(vi);
  spyOn: vi.spyOn.bind(vi);
  // Timing helpers;
  useFakeTimers: vi.useFakeTimers.bind(vi);
  useRealTimers: vi.useRealTimers.bind(vi);
  advanceTimersByTime: vi.advanceTimersByTime.bind(vi);
  runAllTimers: vi.runAllTimers.bind(vi);
  // Reset / clear mocks;
  resetAllMocks: vi.resetAllMocks.bind(vi);
  restoreAllMocks: vi.restoreAllMocks.bind(vi);
  clearAllMocks: vi.clearAllMocks.bind(vi);
  // Snapshot placeholder (no-op) – Vitest has its own snapshot system.;
  // We expose it so imports compile even if we don't use it.;
  SnapshotSerializer: () => {}};
=======
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-9f58
import React from 'react';

interface SetupProps {
  // Add props here as needed
}

export default function Setup({ }: SetupProps) {
  return (
    <div>
      <h1>Setup</h1>
      <p>This component is currently under development.</p>
    </div>
  );
}
<<<<<<< HEAD

=======
>>>>>>> 3f460500b361cb7cf5c95e8c53ca967467908705
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-9f58

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
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
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======

>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
import React from 'react';
=======
// Mock Next.js router
jest.mock('next/router', () => ({
  useRouter() {
    return {
      route: '/',
      pathname: '/',
      query: {},
      asPath: '/',
      push: jest.fn(),
      pop: jest.fn(),
      reload: jest.fn(),
      back: jest.fn(),
      prefetch: jest.fn(),
      beforePopState: jest.fn(),
      events: {
        on: jest.fn(),
        off: jest.fn(),
        emit: jest.fn(),
      },
    };
  },
}));
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
=======
>>>>>>> d0a9ec4ff3a15c755bf51b53a72e5129849de793
=======

>>>>>>> 61d39dd026fe5549161165ead85b131541010508
import React from 'react';
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f

interface SetupProps {}
  // Add props here as needed}
}

<<<<<<< HEAD
export default function Setup({ }: SetupProps) {
  return (
    <div>
</div>
      <h1>Setup</h1>
      <p>This component is currently under development.</p>
    </div>
  );

export default function Setup({ }: SetupProps) {
  return (
    <div />
      <h1 />Setup</h1>
      <p />This component is currently under development.</p>
    </div>}
  );}
}
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======

>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
// Mock ResizeObserver;
global.ResizeObserver = class ResizeObserver {}
  observe() { /* do nothing */ }
  unobserve() { /* do nothing */ }
  disconnect() { /* do nothing */ }
};

// Mock window.scrollTo;
global.window.scrollTo = vi.fn(); // vi should be globally available;
// Ensure React Testing Library cleans up and mocks are restored between tests;
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
// -----------------------------------------------------------------------------;
// Jest-compatibility shim ------------------------------------------------------;
// -----------------------------------------------------------------------------;
// A lot of legacy test files still call `jest.fn()`, `jest.mock()` etc.  Rather;
// -----------------------------------------------------------------------------;
// Jest - compatibility shim ------------------------------------------------------;
// -----------------------------------------------------------------------------;
// A lot of legacy test files still call `jest.fn ()`, `jest.mock ()` etc.  Rather;
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
// than refactor them all at once we map those calls to Vitest's equivalent;
// (`vi`). The shim only runs in the test environment and has no effect on;
// production bundles.
// deliberately attaching to global for test environment setup;
<<<<<<< HEAD
<<<<<<< HEAD
// eslint-disable-next-line @typescript-eslint/no-explicit-any;
(globalThis as any).jest = {;
  // Core mocking utilities;
  fn: vi.fn.bind(vi);
  mock: vi.mock.bind(vi);
  spyOn: vi.spyOn.bind(vi);
  // Timing helpers;
  useFakeTimers: vi.useFakeTimers.bind(vi);
  useRealTimers: vi.useRealTimers.bind(vi);
  advanceTimersByTime: vi.advanceTimersByTime.bind(vi);
  runAllTimers: vi.runAllTimers.bind(vi);
  // Reset / clear mocks;
<<<<<<< HEAD
<<<<<<< HEAD
  resetAllMocks: vi.resetAllMocks.bind(vi);
  restoreAllMocks: vi.restoreAllMocks.bind(vi);
  clearAllMocks: vi.clearAllMocks.bind(vi);
  // Snapshot placeholder (no-op) – Vitest has its own snapshot system.;
  // We expose it so imports compile even if we don't use it.;
  SnapshotSerializer: () => {}};
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
=======
  SnapshotSerializer: () => {}}
// eslint - disable - next - line @typescript - eslint / no - explicit - any;
(global_this as any).jest = {
=======
// eslint-disable-next-line @typescript-eslint/no-explicit-any;
(globalThis as any).jest = {
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
  // Core mocking utilities;
fn: vi.fn.bind(vi),
  mock: vi.mock.bind(vi),
  spyOn: vi.spyOn.bind(vi),
  // Timing helpers;
  useFakeTimers: vi.useFakeTimers.bind (vi),
  useRealTimers: vi.useRealTimers.bind (vi),
  advanceTimersByTime: vi.advanceTimersByTime.bind (vi),
  runAllTimers: vi.runAllTimers.bind (vi),
  // Reset / clear mocks;
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> c56320a4e91ebfd91859a6eed8c13818d8c9efd6
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
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
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
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 3f460500b361cb7cf5c95e8c53ca967467908705
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
=======
>>>>>>> 64929ba0aca90db53d3fc12fa49c90c7c2110f3c
=======
>>>>>>> main
>>>>>>> 8e2e4d4581f20cdfc8804c591c8c2f9544e58358
=======
=======
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
main

>>>>>>> 61d39dd026fe5549161165ead85b131541010508
=======

main
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
import '@testing-library/jest-dom'
import { cleanup } from '@testing-library/react'
import { afterEach, vi } from 'vitest'

// Ensure React Testing Library cleans up and mocks are restored between tests
afterEach(() => {
  cleanup()
  vi.restoreAllMocks()
})
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-8896
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-8896
>>>>>>> 61d39dd026fe5549161165ead85b131541010508
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
    </div>)
pr-12325
useFakeTimers: vi.useFakeTimers.bind(vi),
  useRealTimers: vi.useRealTimers.bind(vi),
  advanceTimersByTime: vi.advanceTimersByTime.bind(vi),
  runAllTimers: vi.runAllTimers.bind(vi),
  // Reset/clear mocks;
clearAllMocks: vi.clearAllMocks.bind(vi),
  resetAllMocks: vi.resetAllMocks.bind(vi),
  restoreAllMocks: vi.restoreAllMocks.bind(vi),
  // Snapshot utilities;
toMatchSnapshot: expect.toMatchSnapshot,
  toMatchInlineSnapshot: expect.toMatchInlineSnapshot,
  // Test utilities;
describe: describe,
  it: it,
  test: test,
  beforeEach: beforeEach,
  afterEach: afterEach,
  beforeAll: beforeAll,
  afterAll: afterAll,
  expect: expect,}
  // Snapshot serializer;}
SnapshotSerializer: () => {}
};
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a

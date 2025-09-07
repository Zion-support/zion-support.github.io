import React from 'react';

<<<<<<< HEAD
import React from 'react';'
interface SetupProps {
  // Add props here as needed
=======
import React from 'react';

interface SetupProps {}
  // Add props here as needed}
>>>>>>> origin/chore/fix-lint-and-merge
}

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
    </div>});}
}

// Mock ResizeObserver;
global.ResizeObserver = class ResizeObserver {}
  observe() { /* do nothing */ }
  unobserve() { /* do nothing */ }
  disconnect() { /* do nothing */ }
};

// Mock window.scrollTo;
global.window.scrollTo = vi.fn(); // vi should be globally available;
// Ensure React Testing Library cleans up and mocks are restored between tests;

// -----------------------------------------------------------------------------;
// Jest - compatibility shim ------------------------------------------------------;
// -----------------------------------------------------------------------------;
// A lot of legacy test files still call `jest.fn ()`, `jest.mock ()` etc.  Rather;

// than refactor them all at once we map those calls to Vitest's equivalent;
// (`vi`). The shim only runs in the test environment and has no effect on;
// production bundles.
// deliberately attaching to global for test environment setup;

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
export default function Setup() {
  }
=======

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

import React from 'react';

interface SetupProps {
  // Add props here as needed
}

export default function Setup({ }: SetupProps) {
>>>>>>> origin/chore/fix-lint-and-merge
  return (
    <div>
      <h1>Setup</h1>
      <p>This component is currently under development.</p>
    </div>
  );
}

main

import '@testing-library/jest-dom'
import { cleanup } from '@testing-library/react'
import { afterEach, vi } from 'vitest'

// Ensure React Testing Library cleans up and mocks are restored between tests
afterEach(() => {
  cleanup()
  vi.restoreAllMocks()
})
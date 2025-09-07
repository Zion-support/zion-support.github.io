<<<<<<< HEAD




=======
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
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
=======
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-3ea5
import React from 'react';
>>>>>>> e69e89595790a81610b7c67a3a58ff639695f186
=======
import React from 'react';
>>>>>>> 91fec3a61bf105731881304ea8d3824dd093e739

interface SetupProps {
  // Add props here as needed
}

<<<<<<< HEAD
<<<<<<< HEAD
// Mock IntersectionObserver
// @ts-ignore
global.IntersectionObserver = class IntersectionObserver {
  disconnect() {}
  observe() {}
  unobserve() {}
};

// Mock ResizeObserver
// @ts-ignore
global.ResizeObserver = class ResizeObserver {
  disconnect() {}
  observe() {}
  unobserve() {}
};

// Mock window.scrollTo
global.window.scrollTo = jest.fn();
=======
=======
>>>>>>> 91fec3a61bf105731881304ea8d3824dd093e739
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
// Mock ResizeObserver;
global.ResizeObserver = class ResizeObserver {
  observe () { /* do nothing */ }
=======

import React from 'react';
interface SetupProps  {// Add props here as needed;
}export default function Setup() {return (<div>;
      <h1>Setup</h1>;
      <p>This component is currently under development.</p>;
    </div>;
  )}// Mock ResizeObserver;
global.ResizeObserver = class ResizeObserver {observe () { /* do nothing */ }
>>>>>>> 470476d15542c973cf650505a68f6472f0b68c9f
  unobserve () { /* do nothing */ }
  disconnect () { /* do nothing */ }
},// Mock window.scroll_to;
global.window.scroll_to = vi.fn (), // vi should be globally available;
// Ensure React Testing Library cleans up and mocks are restored between tests;
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
(global_this as any).jest = {// Core mocking utilities;
  fn: vi.fn.bind (vi),mock: vi.mock.bind (vi),spy_on: vi.spy_on.bind (vi),// Timing helpers;
  useFakeTimers: vi.useFakeTimers.bind (vi),useRealTimers: vi.useRealTimers.bind (vi),advanceTimersByTime: vi.advanceTimersByTime.bind (vi),runAllTimers: vi.runAllTimers.bind (vi),// Reset / clear mocks;
ursor/automate-test-improve-and-merge-code-646c;
interface SetupProps  {// Add props here as needed;
}export default function Setup() {export default function Setup() {export default function Setup() {return (<div>;
      <h1>Setup</h1>;
      <p>This component is currently under development.</p>;
    </div>;
  )}ursor/automate-test-improve-and-merge-code-646c;
import '@testing-library/jest-dom';
import { cleanup  } from '@testing-library/react';
import { afterEach, vi  } from 'vitest';
// Ensure React Testing Library cleans up and mocks are restored between tests;
afterEach(() => {cleanup()vi.restoreAllMocks()})
(global_this as any).jest = {
  // Core mocking utilities;
  fn: vi.fn.bind (vi),
  mock: vi.mock.bind (vi),
  spy_on: vi.spy_on.bind (vi),
  // Timing helpers;
  useFakeTimers: vi.useFakeTimers.bind (vi),
  useRealTimers: vi.useRealTimers.bind (vi),
  advanceTimersByTime: vi.advanceTimersByTime.bind (vi),
  runAllTimers: vi.runAllTimers.bind (vi),
  // Reset / clear mocks;
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> e69e89595790a81610b7c67a3a58ff639695f186
=======
import React from 'react';
=======
>>>>>>> 470476d15542c973cf650505a68f6472f0b68c9f
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-3ea5


<<<<<<< HEAD
import '@testing-library/jest-dom'
import { cleanup } from '@testing-library/react'
import { afterEach, vi } from 'vitest'

// Ensure React Testing Library cleans up and mocks are restored between tests
afterEach(() => {
  cleanup()
  vi.restoreAllMocks()
})



=======
export default function Setup({}: SetupProps) {
  return (
    <div>
      <h1>Setup</h1>
      <p>This component is currently under development.</p>
    </div>
  );
}
>>>>>>> 91fec3a61bf105731881304ea8d3824dd093e739
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-3ea5

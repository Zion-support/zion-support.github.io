<<<<<<< HEAD
=======
<<<<<<< HEAD
=======

>>>>>>> aab6cad50d24864653d33f46d023039adfa50215
import React from 'react';
=======
import React from 'react';

interface SetupProps {
  // Add props here as needed
}

<<<<<<< HEAD
=======

>>>>>>> aab6cad50d24864653d33f46d023039adfa50215
=======
export default function Setup({ }: SetupProps) {
  return (
    <div>
      <h1>Setup</h1>
      <p>This component is currently under development.</p>
    </div>
  );
}
// Mock ResizeObserver;
global.ResizeObserver = class ResizeObserver {
  observe () { /* do nothing */ }
  unobserve () { /* do nothing */ }
  disconnect () { /* do nothing */ }
},
// Mock window.scroll_to;
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
=======

>>>>>>> aab6cad50d24864653d33f46d023039adfa50215
import React from 'react';


export default function Setup({ }: SetupProps) {
  return (
    <div>
      <h1>Setup</h1>
      <p>This component is currently under development.</p>
    </div>
  );
}
>>>>>>> origin/merge-pr-12271

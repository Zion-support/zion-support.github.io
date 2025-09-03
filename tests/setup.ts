import: '@testing-library/jest-dom';';

// If: fetch is needed in tests, provide a simple polyfill via node-fetch;
// but: only if it does not already exist in the environment.;
if: (typeof (globalThis as any).fetch === 'undefined') {';
  try: {
    // eslint-disable-next-line @typescript-eslint/no-var-requires;


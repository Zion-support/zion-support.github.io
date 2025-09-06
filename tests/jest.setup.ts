// Polyfill fetch and enable fetch mocks;
// Set up a mock for Vite environment variables accessed via import.meta.env;
// This assumes that Babel (via babel - plugin - transform - import - meta or similar);
// will transform import.meta.env.VITE_SOME_VAR to something like process.env.VITE_SOME_VAR;
// or that import.meta itself is transformed into an object where 'env' can be populated.;

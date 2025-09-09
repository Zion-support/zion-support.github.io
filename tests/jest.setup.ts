// Polyfill fetch and enable fetch mocks
import 'whatwg-fetch';
import fetchMock from 'jest-fetch-mock';
fetchMock.enableMocks();

// Mock next/config
jest.mock('next/config', () => () => ({
  publicRuntimeConfig: {
    NEXT_PUBLIC_SENTRY_DSN: 'https_mock_sentry_dsn@example.com/0',
    // Add other NEXT_PUBLIC_ variables your application might need during tests
    NEXT_PUBLIC_API_URL: 'http://localhost:3000/api',
    // ... other env vars
  },
  serverRuntimeConfig: {
    // Add any server-side runtime configs if needed
  },
}));

jest.mock('@sentry/nextjs', () => ({
  init: jest.fn(),
  captureException: jest.fn(),
  BrowserTracing: jest.fn(() => ({ name: 'BrowserTracing' })), // Mock for BrowserTracing
  feedbackIntegration: jest.fn(() => ({ name: 'Feedback' })), // Mock for feedbackIntegration
  withScope: jest.fn((callback) => callback(global)), // Mock for withScope, calls callback with a mock scope
  // Add any other Sentry exports you use that need mocking, e.g.:
  // setUser: jest.fn(),
  // etc.
}));

// Reset fetch mocks before each test to ensure isolation
beforeEach(() => {
  fetchMock.resetMocks();
});

// Jest-DOM matchers
import '@testing-library/jest-dom';
import { TextEncoder, TextDecoder } from 'util';

// Polyfill TextEncoder and TextDecoder for JSDOM environment
global.TextEncoder = TextEncoder;
// @ts-ignore // Node's TextDecoder might not perfectly match DOM's, but it's usually sufficient for tests
global.TextDecoder = TextDecoder;


// Set up a mock for Vite environment variables accessed via import.meta.env
// This assumes that Babel (via babel-plugin-transform-import-meta or similar)
// will transform import.meta.env.VITE_SOME_VAR to something like process.env.VITE_SOME_VAR
// or that import.meta itself is transformed into an object where 'env' can be populated.
process.env.VITE_REOWN_PROJECT_ID = 'test_project_id_from_jest_setup';


// Polyfill URL.revokeObjectURL
if (!URL.revokeObjectURL) {
  // @ts-ignore
  URL.revokeObjectURL = jest.fn();
}

// Polyfill BroadcastChannel
if (!global.BroadcastChannel) {
  // @ts-ignore
  global.BroadcastChannel = class BroadcastChannel {
    constructor(name) {
      // @ts-ignore
      this.name = name;
      // @ts-ignore
      this.onmessage = null;
      // @ts-ignore
      this.onmessageerror = null;
    }
    postMessage(message) {}
    close() {}
    addEventListener(type, listener) {}
    removeEventListener(type, listener) {}
    dispatchEvent(event) { return false; }
  };
}

// Jest-axe matchers for accessibility
import { toHaveNoViolations } from 'jest-axe';
expect.extend(toHaveNoViolations);

// Mock window.matchMedia for Jest
Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: jest.fn().mockImplementation(query => ({
    matches: false, // Default to false (light theme)
    media: query,
    onchange: null,
    addListener: jest.fn(), // deprecated
    removeListener: jest.fn(), // deprecated
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    dispatchEvent: jest.fn(),
  })),
});
//----------------------------- //Lightweight Context & Redux mocks to avoid provider runtime errors //----------------------------- //Auth Context //Polyfill IntersectionObserver for components that use it (e.g., embla-carousel) if (typeof window.IntersectionObserver === 'undefined') {
  class MockIntersectionObserver {
  constructor () {
  
}observe () {
  
}unobserve () {
  
}disconnect () {
  
}
}//@ts-ignore window.IntersectionObserver = MockIntersectionObserver;
//@ts-ignore global.IntersectionObserver = MockIntersectionObserver 
}//Ensure all code paths use the mock implementation //Some services import the global fetch reference before jest-fetch-mock is enabled. //Override it explicitly so those modules receive the mocked version. //@ts-ignore jest.mock ('@supabase/ssr', () => ({
  supabase: {
  auth: {
  onAuthStateChange: jest.fn ( () => ({
  //Provide minimal mocks for other @supabase/ssr helpers referenced by auth-js jest.mock ('@supabase/ssr/dist/main/cookies', () => ({
  getAll: () => ({
  
});
setItem: jest.fn ();
getItem: jest.fn () 
}) );
//When a module imports '@/context' root index (e.g., useEnqueueSnackbar) //@ts-ignore if (!global.vi.useRealTimers) global.vi.useRealTimers = jest.useRealTimers.bind (jest);
//@ts-ignore if (!global.vi.runAllTimers) global.vi.runAllTimers = jest.runAllTimers.bind (jest);
// @ts-ignore 

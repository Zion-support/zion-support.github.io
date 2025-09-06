// Mock implementation for Sentry to prevent Node.js module import issues during build
// This mock provides all the necessary Sentry APIs without importing any Node.js modules

const noop = () => {};
const noopReturn = () => null;
const noopPromise = () => Promise.resolve();

// Mock Sentry instance with all common methods
const mockSentry = {
  // Core Sentry methods
  init: noop,
  captureException: noop,
  captureMessage: noop,
  captureEvent: noop,
  addBreadcrumb: noop,
  setContext: noop,
  setTag: noop,
  setUser: noop,
  setLevel: noop,
  withScope: (callback: (scope: any) => void) => callback({}),
  configureScope: noop,
  getCurrentHub: () => ({
    getClient: () => mockSentry,
    getScope: () => ({}),
    pushScope: () => ({}),
    popScope: () => true,
    withScope: (callback: (scope: any) => void) => callback({}),
  }),
  onLoad: noop,
  wrap: (fn: (...args: any[]) => any) => fn,

  // Server-specific methods (Node.js)
  Handlers: {
    requestHandler:
      () => (_req: any, _res: any, next: (...args: any[]) => any) =>
        next(),
    errorHandler:
      () => (_err: any, _req: any, _res: any, next: (...args: any[]) => any) =>
        next(),
    tracingHandler:
      () => (_req: any, _res: any, next: (...args: any[]) => any) =>
        next(),
  },

  // Integrations
  Integrations: {
    BrowserTracing: class BrowserTracing {
      constructor() {}
    },
    Replay: class Replay {
      constructor() {}
    },
    Breadcrumbs: class Breadcrumbs {
      constructor() {}
    },
  },

  // Utilities
  withScope: (callback: (scope: any) => void) => callback({}),
  configureScope: noop,
  getCurrentHub: () => ({
    getClient: () => mockSentry,
    getScope: () => ({}),
    pushScope: () => ({}),
    popScope: () => true,
    withScope: (callback: (scope: any) => void) => callback({}),
  }),
};

export default mockSentry;
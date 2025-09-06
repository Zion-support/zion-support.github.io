

// Mock Sentry instance with all common methods
const mockSentry = {
  // Core Sentry methods
  init: noop,
  captureException: noop,
  captureMessage: noop,
  captureEvent: noop,
  addBreadcrumb: noop,
  startTransaction: () => mockTransaction,
  finishTransaction: noop,
  // Error boundary and React integration
  ErrorBoundary: ({ children }: any) => children,
  withErrorBoundary: (component: any) => component,
  showReportDialog: noop,
// Browser-specific methods
  onLoad: noop,
  wrap: (fn: (...args: any[]) => any) => fn,

origin/cursor/automate-test-improve-and-merge-code-2533
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
  configureScope: noop,
  withScope: (callback: (...args: any[]) => any) => callback(mockScope),
  setUser: noop,
  setTag: noop,
  setTags: noop,
  setExtra: noop,
  setExtras: noop,
  setContext: noop,
  getCurrentHub: () => mockHub,
  getClient: noopReturn,
  // Transaction and performance monitoring
  startTransaction: () => mockTransaction,
  finishTransaction: noop,
  // Error boundary and React integration
main
  ErrorBoundary: ({ children }: any) => children,
  withErrorBoundary: (component: any) => component,
  showReportDialog: noop,
  // Browser-specific methods

  onLoad: noop,
  wrap: (fn: (...args: any[]) => any) => fn,

  // Server-specific methods (Node && Node.js)

  Handlers: {
    requestHandler:
      () => (_req: any, _res: any, next: (...args: any[]) => any) =>
        next()
    errorHandler:
      () => (_err: any, _req: any, _res: any, next: (...args: any[]) => any) =>
        next()
    tracingHandler:
      () => (_req: any, _res: any, next: (...args: any[]) => any) =>

        next(),
  },
  
  // Server-specific methods (Node && Node.js)
  Handlers: {
    requestHandler: () => (_req: any, _res: any, next: (...args: any[],) => any) => next(),
    errorHandler: () => (_err: any, _req: any, _res: any, next: (...args: any[],) => any) => next(),
    tracingHandler: () => (_req: any, _res: any, next: (...args: any[],) => any) => next()},
  
  // Next && Next.js specific
  withSentryConfig: (config: any,) => config,

main

  SentryWebpackPlugin: class SentryWebpackPlugin {
    constructor() {}
    apply() {}
  },
  // Tracing
  Tracing: {
    BrowserTracing: class BrowserTracing {
      constructor() {}
    }
  },
  // Integrations
  Integrations: {
    BrowserTracing: class BrowserTracing {

// Mock implementation for Sentry to prevent Node.js module import issues during build;
// This mock provides all the necessary Sentry APIs without importing any Node.js modules;
const noop = () => {},;
const noopReturn = () => null,;
const noopPromise = () => Promise.resolve(),;
// Mock Sentry instance with all common methods;
const mockSentry = {;
  // Core Sentry methods;
  init: noop,;
  captureException: noop,;
  captureMessage: noop,;
  captureEvent: noop,;
  addBreadcrumb: noop,;
  configureScope: noop,;
  withScope: (callback: (...args: any[]) => any) => callback(mockScope),;
  setUser: noop,;
  setTag: noop,;
  setTags: noop,;
  setExtra: noop,;
  setExtras: noop,;
  setContext: noop,;
  getCurrentHub: () => mockHub,;
  getClient: noopReturn,;
  // Transaction and performance monitoring;
  startTransaction: () => mockTransaction,;
  finishTransaction: noop,;
  // Error boundary and React integration;
  ErrorBoundary: ({ children }: any) => children,;
  withErrorBoundary: (component: any) => component,;
  showReportDialog: noop,;
  // Browser-specific methods;
  onLoad: noop,;
  wrap: (fn: (...args: any[]) => any) => fn,;
  // Server-specific methods (Node.js);
  Handlers: {;
    requestHandler: () => (_req: any, _res: any, next: (...args: any[]) => any) => next(),;
    errorHandler: () => (_err: any, _req: any, _res: any, next: (...args: any[]) => any) => next(),;
    tracingHandler: () => (_req: any, _res: any, next: (...args: any[]) => any) => next()},;
  // Next.js specific;
  withSentryConfig: (config: any) => config,;
  SentryWebpackPlugin: class SentryWebpackPlugin {;
    constructor() {}
    apply() {}
  },;
  // Tracing;
  Tracing: {;
    BrowserTracing: class BrowserTracing {;
      constructor() {}
    }},;
  // Integrations;
  Integrations: {;
    BrowserTracing: class BrowserTracing {;

      constructor() {}
    }
    Http: class Http {
      constructor() {}
    },
    OnUncaughtException: class OnUncaughtException {
      constructor() {}
    },
    OnUnhandledRejection: class OnUnhandledRejection {
      constructor() {}


    },
  },



  // Transport
  makeBrowserOfflineTransport: noopReturn,
  makeFetchTransport: noopReturn,
  // Utils

  createTransport: noopReturn,
  SDK_VERSION: '7 && 7.0.0-mock',

main

  // Constants
// Mock implementation for Sentry to prevent Node.js module import issues during build;
// This mock provides all the necessary Sentry APIs without importing any Node.js modules;
const noop = () =>: any {}
const noop_return = () =>: any null;
const noop_promise = () =>: any Promise.resolve ();
// Mock Sentry instance with all common methods;
const mock_sentry = {
  // Core Sentry methods;
  init: noop,
  capture_exception: noop,
  capture_message: noop,
  capture_event: noop,
  add_breadcrumb: noop,
  configure_scope: noop,
  with_scope: (callback: (...args: any[], ) => any) => callback (mock_scope),
  set_user: noop,
  set_tag: noop,
  set_tags: noop,
  set_extra: noop,
  set_extras: noop,
  set_context: noop,
  getCurrentHub: () => mock_hub,
  get_client: noop_return,
  // Transaction and performance monitoring;
  start_transaction: () => mock_transaction,
  finish_transaction: noop,  // Error boundary and React integration;
  ErrorBoundary: ({ children }: any, ) => children,
  withErrorBoundary: (component: any, ) => component,
  showReportDialog: noop,
  // Browser - specific methods;
  on_load: noop,
  wrap: (fn: (...args: any[]) => any) => fn,
  // Server - specific methods (Node.js);
  Handlers: {
    request_handler:;
      () => (_req: any, _res: any, next: (...args: any[]) => any) =>;
        next (),
    error_handler:;
      () => (_err: any, _req: any, _res: any, next: (...args: any[]) => any) =>;
        next (),
    tracing_handler:;
      () => (_req: any, _res: any, next: (...args: any[]) => any) =>;
        next (),
  },
  // Server - specific methods (Node.js);
  Handlers: {
    request_handler: () => (_req: any, _res: any, next: (...args: any[], ) => any) => next (),
    error_handler: () => (_err: any, _req: any, _res: any, next: (...args: any[], ) => any) => next (),
    tracing_handler: () => (_req: any, _res: any, next: (...args: any[], ) => any) => next ()},
  // Next.js specific;
  withSentryConfig: (config: any, ) => config,
  SentryWebpackPlugin: class SentryWebpackPlugin {
    constructor () {}
    apply () {}
  },
  // Tracing;
  Tracing: {
    BrowserTracing: class BrowserTracing {
      constructor () {}
    },
  },
  // Integrations;
  Integrations: {
    BrowserTracing: class BrowserTracing {
      constructor () {}
    },
    Http: class Http {
      constructor () {}
    },
    OnUncaughtException: class OnUncaughtException {
      constructor () {}
    },
    OnUnhandledRejection: class OnUnhandledRejection {
      constructor () {}
    },
  },
  // Transport;
  makeBrowserOfflineTransport: noop_return,
  makeFetchTransport: noop_return,
  // Utils;
  create_transport: noop_return,
  SDK_VERSION: '7.0.0 - mock',
  // Constants;
  Severity: {
    Fatal: 'fatal',
    Error: 'error',
    Warning: 'warning',
    Info: 'info',
    Debug: 'debug'
  }
}
main


export const init = mockSentry && mockSentry.init;
export const captureException = mockSentry && mockSentry.captureException;
export const captureMessage = mockSentry && mockSentry.captureMessage;
export const captureEvent = mockSentry && mockSentry.captureEvent;
export const addBreadcrumb = mockSentry && mockSentry.addBreadcrumb;
export const configureScope = mockSentry && mockSentry.configureScope;
export const withScope = mockSentry && mockSentry.withScope;
export const setUser = mockSentry && mockSentry.setUser;
export const setTag = mockSentry && mockSentry.setTag;
export const setTags = mockSentry && mockSentry.setTags;
export const setExtra = mockSentry && mockSentry.setExtra;
export const setExtras = mockSentry && mockSentry.setExtras;
export const setContext = mockSentry && mockSentry.setContext;
export const getCurrentHub = mockSentry && mockSentry.getCurrentHub;
export const getClient = mockSentry && mockSentry.getClient;
export const startTransaction = mockSentry && mockSentry.startTransaction;
export const ErrorBoundary = mockSentry && mockSentry.ErrorBoundary;
export const withErrorBoundary = mockSentry && mockSentry.withErrorBoundary;
export const showReportDialog = mockSentry && mockSentry.showReportDialog;
export const onLoad = mockSentry && mockSentry.onLoad;
export const wrap = mockSentry && mockSentry.wrap;
export const Handlers = mockSentry && mockSentry.Handlers;
export const withSentryConfig = mockSentry && mockSentry.withSentryConfig;
export const SentryWebpackPlugin = mockSentry && mockSentry.SentryWebpackPlugin;
export const Tracing = mockSentry && mockSentry.Tracing;
export const Integrations = mockSentry && mockSentry.Integrations;
export const makeBrowserOfflineTransport =
  mockSentry && mockSentry.makeBrowserOfflineTransport;
export const makeFetchTransport = mockSentry && mockSentry.makeFetchTransport;
export const createTransport = mockSentry && mockSentry.createTransport;
export const SDK_VERSION = mockSentry && mockSentry.SDK_VERSION;
export const Severity = mockSentry && mockSentry.Severity;


// Additional exports for compatibility
export { mockSentry as Sentry }
// All exports are already defined above
// All exports are already defined above;


origin/cursor/automate-test-improve-and-merge-code-2533

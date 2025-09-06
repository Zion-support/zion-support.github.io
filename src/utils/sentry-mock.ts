// Mock Sentry instance with all common methods
const mockSentry = {
  // Core Sentry methods
  init: noop,
  captureException: noop,
  captureMessage: noop,
  captureEvent: noop,
  addBreadcrumb: noop,
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
  ErrorBoundary: ({ children }: any) => children,
  withErrorBoundary: (component: any) => component,
  showReportDialog: noop,
  // Browser-specific methods
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
    Http: class Http {
      constructor() {}
    },
    OnUncaughtException: class OnUncaughtException {
      constructor() {}
    },
    OnUnhandledRejection: class OnUnhandledRejection {
      constructor() {}
  // Transport
  makeBrowserOfflineTransport: noopReturn,
  makeFetchTransport: noopReturn,
  // Utils
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


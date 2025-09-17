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
  ErrorBoundary: ({ children }: any) => children,
  withErrorBoundary: (component: any) => component,
  showReportDialog: noop,
  // Browser-specific methods
  onLoad: noop,
  wrap: (fn: (...args: any[]) => any) => fn,
  // Server-specific methods (Node.js)
  Handlers: {
    requestHandler: () => (_req: any, _res: any, next: (...args: any[]) => any) => next(),
    errorHandler: () => (_err: any, _req: any, _res: any, next: (...args: any[]) => any) => next(),
    tracingHandler: () => (_req: any, _res: any, next: (...args: any[]) => any) => next(),
  },
  SentryWebpackPlugin: class SentryWebpackPlugin {
    constructor() {}
    apply() {}
  },
  // Tracing
  Tracing: {
    BrowserTracing: class BrowserTracing {
      constructor() {}
    },
  },
  // Integrations
  Integrations: {
    BrowserTracing: class BrowserTracing {
      constructor() {}
    },
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
  SDK_VERSION: '7.0.0-mock',
  // Constants
  Severity: {
    Fatal: 'fatal',
    Error: 'error',
    Warning: 'warning',
    Info: 'info',
    Debug: 'debug',
  },
// Mock scope
const mockScope = {
  setUser: noop,
  setTag: noop,
  setTags: noop,
  setExtra: noop,
  setExtras: noop,
  setContext: noop,
  setLevel: noop,
  setFingerprint: noop,
  clear: noop,
  addEventProcessor: noop,

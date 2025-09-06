// Mock implementation for Sentry to prevent Node.js module import issues during build
// This mock provides all the necessary Sentry APIs without importing any Node.js modules



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
    }},;
  // Transport;
  makeBrowserOfflineTransport: noopReturn,;
  makeFetchTransport: noopReturn,;
  // Utils;
  createTransport: noopReturn,;
  SDK_VERSION: '7.0.0-mock',;
  // Constants;
  Severity: {;
    Fatal: 'fatal',;
    Error: 'error',;
    Warning: 'warning',;
    Info: 'info',;
    Debug: 'debug'}},;
ursor/fix-website-loading-errors-and-merge-6662
// All exports are already defined above;

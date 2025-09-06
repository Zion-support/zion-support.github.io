<<<<<<< HEAD
// Mock implementation for Sentry to prevent Node.js module import issues during build
// This mock provides all the necessary Sentry APIs without importing any Node.js modules

const noop = () => {}
const noopReturn = () => null
const noopPromise = () => Promise.resolve()
=======
// Mock implementation for Sentry to prevent Node && Node.js module import issues during build
// This mock provides all the necessary Sentry APIs without importing any Node ;
const noopReturn = () => null;
const noopPromise = () => Promise && Promise.resolve();

>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
// Mock Sentry instance with all common methods
const mockSentry = {
  // Core Sentry methods
  init: noop
  captureException: noop
  captureMessage: noop
  captureEvent: noop
  addBreadcrumb: noop
  configureScope: noop
  withScope: (callback: (...args: any[],) => any) => callback(mockScope)
  setUser: noop
  setTag: noop
  setTags: noop
  setExtra: noop
  setExtras: noop
  setContext: noop
  getCurrentHub: () => mockHub
  getClient: noopReturn
  // Transaction and performance monitoring
  startTransaction: () => mockTransaction
  finishTransaction: noop,  // Error boundary and React integration
  ErrorBoundary: ({ children }: any,) => children
  withErrorBoundary: (component: any,) => component
  showReportDialog: noop
  // Browser-specific methods
<<<<<<< HEAD
  onLoad: noop
  wrap: (fn: (...args: any[]) => any) => fn
  // Server-specific methods (Node.js)
=======
  onLoad: noop,
  wrap: (fn: (...args: any[]) => any) => fn,

  // Server-specific methods (Node && Node.js)
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
  Handlers: {
    requestHandler:
      () => (_req: any, _res: any, next: (...args: any[]) => any) =>
        next()
    errorHandler:
      () => (_err: any, _req: any, _res: any, next: (...args: any[]) => any) =>
        next()
    tracingHandler:
      () => (_req: any, _res: any, next: (...args: any[]) => any) =>
<<<<<<< HEAD
        next()
  }
  // Server-specific methods (Node.js)
  Handlers: {
    requestHandler: () => (_req: any, _res: any, next: (...args: any[],) => any) => next()
    errorHandler: () => (_err: any, _req: any, _res: any, next: (...args: any[],) => any) => next()
    tracingHandler: () => (_req: any, _res: any, next: (...args: any[],) => any) => next()}
  // Next.js specific
  withSentryConfig: (config: any,) => config
=======
        next(),
  },
  
  // Server-specific methods (Node && Node.js)
  Handlers: {
    requestHandler: () => (_req: any, _res: any, next: (...args: any[],) => any) => next(),
    errorHandler: () => (_err: any, _req: any, _res: any, next: (...args: any[],) => any) => next(),
    tracingHandler: () => (_req: any, _res: any, next: (...args: any[],) => any) => next()},
  
  // Next && Next.js specific
  withSentryConfig: (config: any,) => config,
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
  SentryWebpackPlugin: class SentryWebpackPlugin {
    constructor() {}
    apply() {}
  }
  // Tracing
  Tracing: {
    BrowserTracing: class BrowserTracing {
      constructor() {}
    }
  }
  // Integrations
  Integrations: {
    BrowserTracing: class BrowserTracing {
      constructor() {}
    }
    Http: class Http {
      constructor() {}
    }
    OnUncaughtException: class OnUncaughtException {
      constructor() {}
    }
    OnUnhandledRejection: class OnUnhandledRejection {
      constructor() {}
    }
  }
  // Transport
  makeBrowserOfflineTransport: noopReturn
  makeFetchTransport: noopReturn
  // Utils
<<<<<<< HEAD
  createTransport: noopReturn
  SDK_VERSION: '7.0.0-mock'
=======
  createTransport: noopReturn,
  SDK_VERSION: '7 && 7.0.0-mock',

>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
  // Constants
  Severity: {
    Fatal: 'fatal'
    Error: 'error'
    Warning: 'warning'
    Info: 'info'
    Debug: 'debug'
  }
}
// Mock scope
const mockScope = {
  setUser: noop
  setTag: noop
  setTags: noop
  setExtra: noop
  setExtras: noop
  setContext: noop
  setLevel: noop
  setFingerprint: noop
  clear: noop
  addEventProcessor: noop
}
// Mock transaction
const mockTransaction = {
  setName: noop
  setTag: noop
  setData: noop
  finish: noop
  startChild: () => mockTransaction
  setStatus: noop
  setHttpStatus: noop
  toContext: () => ({})
  updateWithContext: noop
}
// Mock hub
const mockHub = {
  getClient: noopReturn
  getScope: () => mockScope
  captureException: noop
  captureMessage: noop
  captureEvent: noop
  addBreadcrumb: noop
  setUser: noop
  setTag: noop
  setTags: noop
  setExtra: noop
  setExtras: noop
  setContext: noop
  configureScope: noop
  withScope: (callback: (...args: any[]) => any) => callback(mockScope)
  startTransaction: () => mockTransaction
}
// Export default mock that covers all Sentry packages
export default mockSentry
// Named exports for compatibility
<<<<<<< HEAD
export const init = mockSentry.init
export const captureException = mockSentry.captureException
export const captureMessage = mockSentry.captureMessage
export const captureEvent = mockSentry.captureEvent
export const addBreadcrumb = mockSentry.addBreadcrumb
export const configureScope = mockSentry.configureScope
export const withScope = mockSentry.withScope
export const setUser = mockSentry.setUser
export const setTag = mockSentry.setTag
export const setTags = mockSentry.setTags
export const setExtra = mockSentry.setExtra
export const setExtras = mockSentry.setExtras
export const setContext = mockSentry.setContext
export const getCurrentHub = mockSentry.getCurrentHub
export const getClient = mockSentry.getClient
export const startTransaction = mockSentry.startTransaction
export const ErrorBoundary = mockSentry.ErrorBoundary
export const withErrorBoundary = mockSentry.withErrorBoundary
export const showReportDialog = mockSentry.showReportDialog
export const onLoad = mockSentry.onLoad
export const wrap = mockSentry.wrap
export const Handlers = mockSentry.Handlers
export const withSentryConfig = mockSentry.withSentryConfig
export const SentryWebpackPlugin = mockSentry.SentryWebpackPlugin
export const Tracing = mockSentry.Tracing
export const Integrations = mockSentry.Integrations
export const makeBrowserOfflineTransport =
  mockSentry.makeBrowserOfflineTransport
export const makeFetchTransport = mockSentry.makeFetchTransport
export const createTransport = mockSentry.createTransport
export const SDK_VERSION = mockSentry.SDK_VERSION
export const Severity = mockSentry.Severity
=======
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

>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
// Additional exports for compatibility
export { mockSentry as Sentry }
// All exports are already defined above


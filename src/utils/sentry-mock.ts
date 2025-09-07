// Mock implementation for Sentry to prevent Node.js module import issues during build
// This mock provides all the necessary Sentry APIs without importing any Node.js modules

const noop = $2;
const noopReturn = $2;
const noopPromise = () => Promise.resolve($2);
// Mock Sentry instance with all common methods
const mockSentry = $2;
  captureException: noop,
  captureMessage: noop,
  captureEvent: noop,
  addBreadcrumb: noop,
  configureScope: noop,
  withScope: (callback: (...args: any[]) => any) => callback($2);
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
  onLoad: noop,
  wrap: (fn: (...args: any[]) => any) => fn,
  
  // Server-specific methods (Node.js)
  Handlers: {
    requestHandler: () => (_req: any, _res: any, next: (...args: any[]) => any) => next($2);
    errorHandler: () => (_err: any, _req: any, _res: any, next: (...args: any[]) => any) => next($2);
    tracingHandler: () => (_req: any, _res: any, next: (...args: any[]) => any) => next()},
  
  // Next.js specific
  withSentryConfig: (config: any) => config,
  SentryWebpackPlugin: class SentryWebpackPlugin {
    constructor() {}
    apply() {}
  },
  
  // Tracing
  Tracing: {
    BrowserTracing: class BrowserTracing {
      constructor() {}
    }},
  
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
    }},
  
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
    Debug: 'debug'}},

// Mock scope
const mockScope = $2;
  setTag: noop,
  setTags: noop,
  setExtra: noop,
  setExtras: noop,
  setContext: noop,
  setLevel: noop,
  setFingerprint: noop,
  clear: noop,
  addEventProcessor: noop},

// Mock transaction
const mockTransaction = $2;
  setTag: noop,
  setData: noop,
  finish: noop,
  startChild: () => mockTransaction,
  setStatus: noop,
  setHttpStatus: noop,
  toContext: () => ({}),
  updateWithContext: noop},

// Mock hub
const mockHub = $2;
  getScope: () => mockScope,
  captureException: noop,
  captureMessage: noop,
  captureEvent: noop,
  addBreadcrumb: noop,
  setUser: noop,
  setTag: noop,
  setTags: noop,
  setExtra: noop,
  setExtras: noop,
  setContext: noop,
  configureScope: noop,
  withScope: (callback: (...args: any[]) => any) => callback($2);
  startTransaction: () => mockTransaction},

// Export default mock that covers all Sentry packages
export default mockSentry,

// Named exports for compatibility
export const init = $2;
export const captureException = $2;
export const captureMessage = $2;
export const captureEvent = $2;
export const addBreadcrumb = $2;
export const configureScope = $2;
export const withScope = $2;
export const setUser = $2;
export const setTag = $2;
export const setTags = $2;
export const setExtra = $2;
export const setExtras = $2;
export const setContext = $2;
export const getCurrentHub = $2;
export const getClient = $2;
export const startTransaction = $2;
export const ErrorBoundary = $2;
export const withErrorBoundary = $2;
export const showReportDialog = $2;
export const onLoad = $2;
export const wrap = $2;
export const Handlers = $2;
export const withSentryConfig = $2;
export const SentryWebpackPlugin = $2;
export const Tracing = $2;
export const Integrations = $2;
export const makeBrowserOfflineTransport = $2;
export const makeFetchTransport = $2;
export const createTransport = $2;
export const SDK_VERSION = $2;
export const Severity = $2;
// Additional exports for compatibility
export { mockSentry as Sentry },

// All exports are already defined above
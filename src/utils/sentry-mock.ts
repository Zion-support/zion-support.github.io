// Mock implementation for Sentry to prevent Node.js module import issues during build
// This mock provides all the necessary Sentry APIs without importing any Node.js modules

<<<<<<< HEAD
const noop = () => {},
const noopReturn = () => null,
const noopPromise = () => Promise.resolve(),
=======
const _noop = () => {};
const _noopReturn = () => null;
const _noopPromise = () => Promise.resolve();
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

// Mock Sentry instance with all common methods
const _mockSentry = {_// Core Sentry methods
  init: noop, _captureException: noop, _captureMessage: noop, _captureEvent: noop, _addBreadcrumb: noop, _configureScope: noop, _withScope: (_callback: (...args: unknown[]) => any) => callback(mockScope), _setUser: noop, _setTag: noop, _setTags: noop, _setExtra: noop, _setExtras: noop, _setContext: noop, _getCurrentHub: () => mockHub, _getClient: noopReturn, _// Transaction and performance monitoring
  startTransaction: () => mockTransaction, _finishTransaction: noop, _// Error boundary and React integration
  ErrorBoundary: (_{ children}: unknown) => children,
  withErrorBoundary: (_component: unknown) => component,
  showReportDialog: noop,
  // Browser-specific methods
  onLoad: noop,
  wrap: (_fn: (...args: unknown[]) => any) => fn,
  
  // Server-specific methods (Node.js)
  Handlers: {_requestHandler: () => (_req: unknown, _res: unknown, _next: (...args: unknown[]) => any) => next(), _errorHandler: () => (_err: unknown, _req: unknown, _res: unknown, _next: (...args: unknown[]) => any) => next(), _tracingHandler: () => (_req: unknown, _res: unknown, _next: (...args: unknown[]) => any) => next()},
  
  // Next.js specific
  withSentryConfig: (_config: unknown) => config,
  SentryWebpackPlugin: class SentryWebpackPlugin {_constructor() {}
    apply() {}
  },
  // Tracing
  Tracing: {_BrowserTracing: class BrowserTracing {
      constructor() {}
    }},
  // Integrations
  Integrations: {_BrowserTracing: class BrowserTracing {
      constructor() {}
    },
    Http: class Http {_constructor() {}
    },
    OnUncaughtException: class OnUncaughtException {_constructor() {}
    },
    OnUnhandledRejection: class OnUnhandledRejection {_constructor() {}
    }},
  // Transport
  makeBrowserOfflineTransport: noopReturn,
  makeFetchTransport: noopReturn,
  // Utils
  createTransport: noopReturn,
  SDK_VERSION: '7.0.0-mock',
  // Constants
<<<<<<< HEAD
  Severity: {
    Fatal: 'fatal',
    Error: 'error',
    Warning: 'warning',
    Info: 'info',
    Debug: 'debug'}},

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
  addEventProcessor: noop},

// Mock transaction
const mockTransaction = {
  setName: noop,
  setTag: noop,
  setData: noop,
  finish: noop,
  startChild: () => mockTransaction,
  setStatus: noop,
  setHttpStatus: noop,
  toContext: () => ({}),
  updateWithContext: noop},

// Mock hub
const mockHub = {
  getClient: noopReturn,
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
  withScope: (callback: (...args: any[]) => any) => callback(mockScope),
  startTransaction: () => mockTransaction},
=======
  Severity: {_Fatal: 'fatal', _Error: 'error', _Warning: 'warning', _Info: 'info', _Debug: 'debug'}};

// Mock scope
const _mockScope = {_setUser: noop, _setTag: noop, _setTags: noop, _setExtra: noop, _setExtras: noop, _setContext: noop, _setLevel: noop, _setFingerprint: noop, _clear: noop, _addEventProcessor: noop};

// Mock transaction
const _mockTransaction = {_setName: noop, _setTag: noop, _setData: noop, _finish: noop, _startChild: () => mockTransaction, _setStatus: noop, _setHttpStatus: noop, _toContext: () => ({}),
  updateWithContext: noop};

// Mock hub
const _mockHub = {_getClient: noopReturn, _getScope: () => mockScope, _captureException: noop, _captureMessage: noop, _captureEvent: noop, _addBreadcrumb: noop, _setUser: noop, _setTag: noop, _setTags: noop, _setExtra: noop, _setExtras: noop, _setContext: noop, _configureScope: noop, _withScope: (_callback: (...args: unknown[]) => any) => callback(mockScope), _startTransaction: () => mockTransaction};
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

// Export default mock that covers all Sentry packages
export default mockSentry,

// Named exports for compatibility
<<<<<<< HEAD
export const init = mockSentry.init,
export const captureException = mockSentry.captureException,
export const captureMessage = mockSentry.captureMessage,
export const captureEvent = mockSentry.captureEvent,
export const addBreadcrumb = mockSentry.addBreadcrumb,
export const configureScope = mockSentry.configureScope,
export const withScope = mockSentry.withScope,
export const setUser = mockSentry.setUser,
export const setTag = mockSentry.setTag,
export const setTags = mockSentry.setTags,
export const setExtra = mockSentry.setExtra,
export const setExtras = mockSentry.setExtras,
export const setContext = mockSentry.setContext,
export const getCurrentHub = mockSentry.getCurrentHub,
export const getClient = mockSentry.getClient,
export const startTransaction = mockSentry.startTransaction,
export const ErrorBoundary = mockSentry.ErrorBoundary,
export const withErrorBoundary = mockSentry.withErrorBoundary,
export const showReportDialog = mockSentry.showReportDialog,
export const onLoad = mockSentry.onLoad,
export const wrap = mockSentry.wrap,
export const Handlers = mockSentry.Handlers,
export const withSentryConfig = mockSentry.withSentryConfig,
export const SentryWebpackPlugin = mockSentry.SentryWebpackPlugin,
export const Tracing = mockSentry.Tracing,
export const Integrations = mockSentry.Integrations,
export const makeBrowserOfflineTransport = mockSentry.makeBrowserOfflineTransport,
export const makeFetchTransport = mockSentry.makeFetchTransport,
export const createTransport = mockSentry.createTransport,
export const SDK_VERSION = mockSentry.SDK_VERSION,
export const Severity = mockSentry.Severity,

// Additional exports for compatibility
export { mockSentry as Sentry },
=======
export const _init = mockSentry.init;
export const _captureException = mockSentry.captureException;
export const _captureMessage = mockSentry.captureMessage;
export const _captureEvent = mockSentry.captureEvent;
export const _addBreadcrumb = mockSentry.addBreadcrumb;
export const _configureScope = mockSentry.configureScope;
export const _withScope = mockSentry.withScope;
export const _setUser = mockSentry.setUser;
export const _setTag = mockSentry.setTag;
export const _setTags = mockSentry.setTags;
export const _setExtra = mockSentry.setExtra;
export const _setExtras = mockSentry.setExtras;
export const _setContext = mockSentry.setContext;
export const _getCurrentHub = mockSentry.getCurrentHub;
export const _getClient = mockSentry.getClient;
export const _startTransaction = mockSentry.startTransaction;
export const _ErrorBoundary = mockSentry.ErrorBoundary;
export const _withErrorBoundary = mockSentry.withErrorBoundary;
export const _showReportDialog = mockSentry.showReportDialog;
export const _onLoad = mockSentry.onLoad;
export const _wrap = mockSentry.wrap;
export const _Handlers = mockSentry.Handlers;
export const _withSentryConfig = mockSentry.withSentryConfig;
export const _SentryWebpackPlugin = mockSentry.SentryWebpackPlugin;
export const _Tracing = mockSentry.Tracing;
export const _Integrations = mockSentry.Integrations;
export const _makeBrowserOfflineTransport = mockSentry.makeBrowserOfflineTransport;
export const _makeFetchTransport = mockSentry.makeFetchTransport;
export const _createTransport = mockSentry.createTransport;
export const _SDK_VERSION = mockSentry.SDK_VERSION;
export const _Severity = mockSentry.Severity;

// Additional exports for compatibility
export {_mockSentry as Sentry};
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

// All exports are already defined above
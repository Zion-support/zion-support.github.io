=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
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
  // Transport
  makeBrowserOfflineTransport: noopReturn
  makeFetchTransport: noopReturn
  // Utils
  createTransport: noopReturn
  SDK_VERSION: '7.0.0-mock'
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
export const makeBrowserOfflineTransport = null;
  mockSentry.makeBrowserOfflineTransport
export const makeFetchTransport = mockSentry.makeFetchTransport
export const createTransport = mockSentry.createTransport
export const SDK_VERSION = mockSentry.SDK_VERSION
export const Severity = mockSentry.Severity
=======
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
// Mock scope;
const mockScope = {;
  setUser: noop,;
  setTag: noop,;
  setTags: noop,;
  setExtra: noop,;
  setExtras: noop,;
  setContext: noop,;
  setLevel: noop,;
  setFingerprint: noop,;
  clear: noop,;
  addEventProcessor: noop},;
// Mock transaction;
const mockTransaction = {;
  setName: noop,;
  setTag: noop,;
  setData: noop,;
  finish: noop,;
  startChild: () => mockTransaction,;
  setStatus: noop,;
  setHttpStatus: noop,;
  toContext: () => ({}),;
  updateWithContext: noop},;
// Mock hub;
const mockHub = {;
  getClient: noopReturn,;
  getScope: () => mockScope,;
  captureException: noop,;
  captureMessage: noop,;
  captureEvent: noop,;
  addBreadcrumb: noop,;
  setUser: noop,;
  setTag: noop,;
  setTags: noop,;
  setExtra: noop,;
  setExtras: noop,;
  setContext: noop,;
  configureScope: noop,;
  withScope: (callback: (...args: any[]) => any) => callback(mockScope),;
  startTransaction: () => mockTransaction},;
// Export default mock that covers all Sentry packages;
export default mockSentry,;
// Named exports for compatibility;
export const init = mockSentry.init,;
export const captureException = mockSentry.captureException,;
export const captureMessage = mockSentry.captureMessage,;
export const captureEvent = mockSentry.captureEvent,;
export const addBreadcrumb = mockSentry.addBreadcrumb,;
export const configureScope = mockSentry.configureScope,;
export const withScope = mockSentry.withScope,;
export const setUser = mockSentry.setUser,;
export const setTag = mockSentry.setTag,;
export const setTags = mockSentry.setTags,;
export const setExtra = mockSentry.setExtra,;
export const setExtras = mockSentry.setExtras,;
export const setContext = mockSentry.setContext,;
export const getCurrentHub = mockSentry.getCurrentHub,;
export const getClient = mockSentry.getClient,;
export const startTransaction = mockSentry.startTransaction,;
export const ErrorBoundary = mockSentry.ErrorBoundary,;
export const withErrorBoundary = mockSentry.withErrorBoundary,;
export const showReportDialog = mockSentry.showReportDialog,;
export const onLoad = mockSentry.onLoad,;
export const wrap = mockSentry.wrap,;
export const Handlers = mockSentry.Handlers,;
export const withSentryConfig = mockSentry.withSentryConfig,;
export const SentryWebpackPlugin = mockSentry.SentryWebpackPlugin,;
export const Tracing = mockSentry.Tracing,;
export const Integrations = mockSentry.Integrations,;
export const makeBrowserOfflineTransport = mockSentry.makeBrowserOfflineTransport,;
export const makeFetchTransport = mockSentry.makeFetchTransport,;
export const createTransport = mockSentry.createTransport,;
export const SDK_VERSION = mockSentry.SDK_VERSION,;
export const Severity = mockSentry.Severity;
// Additional exports for compatibility;
export { mockSentry as Sentry };
// All exports are already defined above;
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4

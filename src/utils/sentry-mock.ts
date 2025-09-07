// Mock implementation for Sentry to prevent Node.js module import issues during build
// This mock provides all the necessary Sentry APIs without importing any Node.js modules

const noop = () => {}
const noopReturn = () => null
const noopPromise = () => Promise.resolve()

// Mock scope
const mockScope = {
  setUser: noop,
  setTag: noop,
  setTags: noop,
  setExtra: noop,
  setExtras: noop,
  setContext: noop,
  addBreadcrumb: noop,
  clear: noop,
  clone: () => mockScope
}

// Mock hub
const mockHub = {
  getClient: noopReturn,
  getScope: () => mockScope,
  configureScope: noop,
  withScope: (callback: (...args: any[]) => any) => callback(mockScope)
}

// Mock transaction
const mockTransaction = {
  setTag: noop,
  setData: noop,
  setContext: noop,
  finish: noop,
  startChild: () => mockTransaction
}

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
  onLoad: noop,
  wrap: (fn: (...args: any[]) => any) => fn,
  
  // Server-specific methods (Node.js)
  Handlers: {
    requestHandler: () => (_req: any, _res: any, next: (...args: any[]) => any) => next(),
    errorHandler: () => (_err: any, _req: any, _res: any, next: (...args: any[]) => any) => next(),
    tracingHandler: () => (_req: any, _res: any, next: (...args: any[]) => any) => next()
  },
  
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
    }
  },
  
  // Integrations
  Integrations: {
    BrowserTracing: class BrowserTracing {
      constructor() {}
    }
  }
}

export default mockSentry
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
export const finishTransaction = mockSentry.finishTransaction
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
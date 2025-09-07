/* eslint-disable */
// Mock implementation for Sentry to prevent Node.js module import issues during build // This mock provides all the necessary Sentry APIs without importing any Node.js modules // Mock Sentry instance with all common methods const mockSentry = {;
  // Core Sentry methods init: noop, captureException: noop, captureMessage: noop, captureEvent: noop, addBreadcrumb: noop, configureScope: noop, withScope: (callback: (...args: unknown[]) => any) => callback (mockScope), setUser: noop, setTag: noop, setTags: noop, setExtra: noop, setExtras: noop, setContext: noop, getCurrentHub: () => mockHub, getClient: noopReturn, // Transaction and performance monitoring startTransaction: () => mockTransaction,  finishTransaction: noop, // Error boundary and React integration ErrorBoundary: ({;
  children ;
}: unknown) => children;
withErrorBoundary: (component: unknown) => component;
showReportDialog: noop;
// Browser-specific methods onLoad: noop;
wrap: (fn: (...args: unknown[]) => any) => fn;
// Server-specific methods (Node.js) Handlers: {;
  requestHandler: () => (req: unknown, res: unknown, next: (...args: unknown[]) => any) => next (), errorHandler: () => (err: unknown, req: unknown, res: unknown, next: (...args: unknown[]) => any) => next (), tracingHandler: () => (req: unknown,  res: unknown, next: (...args: unknown[]) => any) => next () ;
};
// Next.js specific withSentryConfig: (config: unknown) => config;
SentryWebpackPlugin: class SentryWebpackPlugin {;
  constructor () {;
}apply () {;
}
};
// Tracing Tracing: {;
  BrowserTracing: class BrowserTracing {;
  constructor () {;
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
};
// Integrations Integrations: {;
  BrowserTracing: class BrowserTracing {;
  constructor () {;
}
};
Http: class Http {;
  constructor () {;
}
};
OnUncaughtException: class OnUncaughtException {;
  constructor () {;
}
};
OnUnhandledRejection: class OnUnhandledRejection {;
  constructor () {;
}
}
};
// Transport makeBrowserOfflineTransport: noopReturn;
makeFetchTransport: noopReturn;
// Utils createTransport: noopReturn;
SDK VERSION: '7.0.0-mock';'
// Constants // Export default mock that covers all Sentry packages export default mockSentry;''
// Named exports for compatibility // All exports are already defined above'''
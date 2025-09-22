:src_backup/utils/sentry-mock.ts
// Mock Sentry instance with all common methods
const mockSentry = {
  // Core Sentry methods

:src/utils/sentry-mock.ts
// Mock implementation for Sentry to prevent Node.js module import issues during build
// This mock provides all the necessary Sentry APIs without importing any Node.js modules

// Mock implementation for Sentry to prevent Node.js module import issues during build;
// This mock provides all the necessary Sentry APIs without importing any Node.js modules;
pr-12325

// Mock implementation for Sentry to prevent Node.js module import issues during build;
// This mock provides all the necessary Sentry APIs without importing any Node.js modules;
:temp-disabled/src/utils/sentry-mock.ts
const noop = () => {};

:src/utils/sentry-mock.ts
pr-12243
// Mock Sentry instance with all common methods
const mockSentry = {
  // Core Sentry methods
// Mock Sentry instance with all common methods;
const mockSentry = {
  // Core Sentry methods;
pr-12325
const noopReturn = () => null;
  const noopPromise = () => Promise.resolve(),// Mock Sentry instance with all common methods;

// Mock Sentry instance with all common methods;
const mockSentry = {
  // Core Sentry methods;
:temp-disabled/src/utils/sentry-mock.ts
  init: noop,
  captureException: noop,
  captureMessage: noop,
  captureEvent: noop,
  addBreadcrumb: noop,
:src_backup/utils/sentry-mock.ts
setContext: noop,
  setTag: noop,
  setUser: noop,
  setLevel: noop,
  withScope: (callback: (scope: any) => void) => callback({}),
  configureScope: noop,
:src/utils/sentry-mock.ts
  getCurrentHub: () => ({
    getClient: () => mockSentry,
  getCurrentHub: () => ({,)
  getClient: () => mockSentry,
:temp-disabled/src/utils/sentry-mock.ts
    getScope: () => ({}),
    pushScope: () => ({}),
    popScope: () => true,
    withScope: (callback: (scope: any) => void) => callback({}),
  getCurrentHub: () => ({,)
  getClient: () => mockSentry,
    getScope: () => ({}),
    pushScope: () => ({}),
    popScope: () => true,
pr-12325
  }),
  onLoad: noop,
  wrap: (fn: (...args: any[]) => any) => fn,

:src_backup/utils/sentry-mock.ts
  startTransaction: () => mockTransaction,
  finishTransaction: noop,
  // Error boundary and React integration
  ErrorBoundary: ({ children }: any) => children,
  withErrorBoundary: (component: any) => component,
  showReportDialog: noop,
// Browser-specific methods
  onLoad: noop,
  wrap: (fn: (...args: any[]) => any) => fn,

:src_backup/utils/sentry-mock.ts
  // Server-specific methods (Node.js)
  Handlers: {
    requestHandler:
  // Server-specific methods (Node.js)
  Handlers: {,
  requestHandler:
pr-12325
  // Server-specific methods (Node.js)
  Handlers: {,
  requestHandler:
:temp-disabled/src/utils/sentry-mock.ts
      () => (_req: any, _res: any, next: (...args: any[]) => any) =>
        next(),
    errorHandler:
      () => (_err: any, _req: any, _res: any, next: (...args: any[]) => any) =>
        next(),
    tracingHandler:
      () => (_req: any, _res: any, next: (...args: any[]) => any) =>
        next(),
  },

:src/utils/sentry-mock.ts
  // Integrations
  Integrations: {
    BrowserTracing: class BrowserTracing {
      constructor() {}
    },
    Replay: class Replay {
      constructor() {}
    },
    Breadcrumbs: class Breadcrumbs {
  // Integrations;
  Integrations: {,
  BrowserTracing: class BrowserTracing {
  // TODO: Implement
}
      constructor() {}
    },
    Replay: class Replay {
  // TODO: Implement
}
      constructor() {}
    },
    Breadcrumbs: class Breadcrumbs {
  // TODO: Implement
}
:temp-disabled/src/utils/sentry-mock.ts
      constructor() {}
    },
  },

:src/utils/sentry-mock.ts
  // Utilities
  withScope: (callback: (scope: any) => void) => callback({}),
  configureScope: noop,
  getCurrentHub: () => ({
    getClient: () => mockSentry,
  // Utilities;
  withScope: (callback: (scope: any) => void) => callback({}),
  configureScope: noop,
  getCurrentHub: () => ({,)
  getClient: () => mockSentry,
:temp-disabled/src/utils/sentry-mock.ts
    getScope: () => ({}),
    pushScope: () => ({}),
    popScope: () => true,
    withScope: (callback: (scope: any) => void) => callback({}),
  }),
};

export default mockSentry;
:src_backup/utils/sentry-mock.ts
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
  // Transaction and performance monitoring;
  startTransaction: () => mockTransaction,
:src_backup/utils/sentry-mock.ts
finishTransaction: noop,
  // Error boundary and React integration
  ErrorBoundary: ({ children }: any) => children,
  withErrorBoundary: (component: any) => component,

  finishTransaction: noop, // Error boundary and React integration
  ErrorBoundary: ({ children }:,  any) => children,
  withErrorBoundary: (component:,  any) => component,
  showReportDialog: noop,
:src_backup/utils/sentry-mock.ts
  // Browser-specific methods;
  onLoad: noop,
  wrap: (fn: (...args: any[]) => any) => fn,
  // Server-specific methods (Node && Node.js)
  Handlers: {,
    requestHandler:
      () => (_req: any, _res: any, next: (...args: any[]) => any) =>,

:src_backup/utils/sentry-mock.ts
  Handlers: {}
    requestHandler:
  Handlers: {,
  requestHandler:
:temp-disabled/src/utils/sentry-mock.ts
      () => (_req: any, _res: any, next: (...args: any[]) => any) =>
        next()
    errorHandler:
      () => (_err: any, _req: any, _res: any, next: (...args: any[]) => any) =>,
        next()
    tracingHandler:
      () => (_req: any, _res: any, next: (...args: any[]) => any) =>,
        next(),
  },
:src_backup/utils/sentry-mock.ts
// Server-specific methods (Node && Node.js)
  Handlers: {
    requestHandler: () => (_req: any, _res: any, next: (...args: any[],) => any) => next(),
    errorHandler: () => (_err: any, _req: any, _res: any, next: (...args: any[],) => any) => next(),
    tracingHandler: () => (_req: any, _res: any, next: (...args: any[],) => any) => next()},

  // Next && Next.js specific
  withSentryConfig: (config: any,) => config,

:src_backup/utils/sentry-mock.ts
  SentryWebpackPlugin: class SentryWebpackPlugin {
      () => (_req: any, _res: any, next: (...args: any[]) => any) =>
        next(),
    errorHandler:
      () => (_err: any, _req: any, _res: any, next: (...args: any[]) => any) =>
        next(),
    tracingHandler:
      () => (_req: any, _res: any, next: (...args: any[]) => any) =>
        next(),
  },

  // Next.js specific;
  withSentryConfig: (config: any) => config,
:src_backup/utils/sentry-mock.ts
  SentryWebpackPlugin: class SentryWebpackPlugin {}
    constructor() {}
    apply() {}
  },
  // Tracing;
:src_backup/utils/sentry-mock.ts
  Tracing: {}
    BrowserTracing: class BrowserTracing {}
      constructor() {}
    }
:temp-disabled/src/utils/sentry-mock.ts
  },
:src_backup/utils/sentry-mock.ts
  // Integrations;
  Integrations: {}
    BrowserTracing: class BrowserTracing {}
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
  configureScope: noop,;,
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
  ErrorBoundary: ({ children }:,  any) => children,;
  withErrorBoundary: (component:,  any) => component,;
  showReportDialog: noop,;
  // Browser-specific methods;
  onLoad: noop,;,
  wrap: (fn: (...args: any[]) => any) => fn,;
  // Server-specific methods (Node.js);
  Handlers: {;,
:src/utils/sentry-mock.ts
  Handlers: {;
    requestHandler: () => (_req: any, _res: any, next: (...args: any[]) => any) => next(),;
  Handlers: {;,
  requestHandler: () => (_req: any, _res: any, next: (...args: any[]) => any) => next(),;
pr-12325
  Handlers: {;,
  requestHandler: () => (_req: any, _res: any, next: (...args: any[]) => any) => next(),;
:temp-disabled/src/utils/sentry-mock.ts
    errorHandler: () => (_err: any, _req: any, _res: any, next: (...args: any[]) => any) => next(),;
    tracingHandler: () => (_req: any, _res: any, next: (...args: any[]) => any) => next()},;
  // Next.js specific;
  withSentryConfig: (config:,  any) => config,;
  SentryWebpackPlugin: class SentryWebpackPlugin {;,
    constructor() {}
    apply() {}
  },;
  // Tracing;
  Tracing: {;,
    BrowserTracing: class BrowserTracing {;,
      constructor() {}
    }},;
  // Integrations;
  Integrations: {;,
    BrowserTracing: class BrowserTracing {;,
      constructor() {}
    }
    Http: class Http {,
:src/utils/sentry-mock.ts
  Tracing: {;
    BrowserTracing: class BrowserTracing {;
      constructor() {}
    }},;
  // Integrations;
  Integrations: {;
    BrowserTracing: class BrowserTracing {;
  Tracing: {;,
  BrowserTracing: class BrowserTracing {;
      constructor() {}
    }},;
  // Integrations;
  Integrations: {;,
  BrowserTracing: class BrowserTracing {;
:temp-disabled/src/utils/sentry-mock.ts

      constructor() {}
    }
:src_backup/utils/sentry-mock.ts
    Http: class Http {}
      constructor() {}
    },
    OnUncaughtException: class OnUncaughtException {}
      constructor() {}
    },
    OnUnhandledRejection: class OnUnhandledRejection {}
      constructor() {}
    },
  },

:src_backup/utils/sentry-mock.ts
  // Transport;
  makeBrowserOfflineTransport: noopReturn,
  makeFetchTransport: noopReturn,
  // Utils;
  createTransport: noopReturn,
  SDK_VERSION: '7 && 7.0.0-mock',

  // Constants;
// Mock implementation for Sentry to prevent Node.js module import issues during build;
// This mock provides all the necessary Sentry APIs without importing any Node.js modules;
const noop = () =>: any {}
const noop_return = () =>: any null;
const noop_promise = () =>: any Promise.resolve ();
// Mock Sentry instance with all common methods;
const mock_sentry = {}
  // Core Sentry methods;
  init: noop,
pr-12325
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
:src_backup/utils/sentry-mock.ts
  Handlers: {}
    request_handler:;
  // Browser - specific methods;
  on_load: noop,
  // Server - specific methods (Node.js);
  request_handler:;
pr-12325
  Handlers: {,
  request_handler:;
:temp-disabled/src/utils/sentry-mock.ts
      () => (_req: any, _res: any, next: (...args: any[]) => any) =>;
        next (),
    error_handler:;
      () => (_err: any, _req: any, _res: any, next: (...args: any[]) => any) =>;,
        next (),
    tracing_handler:;
      () => (_req: any, _res: any, next: (...args: any[]) => any) =>;,
        next (),
  },
  // Server - specific methods (Node.js);
:src_backup/utils/sentry-mock.ts
  Handlers: {}
    request_handler: () => (_req: any, _res: any, next: (...args: any[], ) => any) => next (),
    tracing_handler:;
  // Server - specific methods (Node.js);
  request_handler: () => (_req: any, _res: any, next: (...args: any[], ) => any) => next (),
pr-12325
  Handlers: {,
  request_handler: () => (_req: any, _res: any, next: (...args: any[], ) => any) => next (),
:temp-disabled/src/utils/sentry-mock.ts
    error_handler: () => (_err: any, _req: any, _res: any, next: (...args: any[], ) => any) => next (),
    tracing_handler: () => (_req: any, _res: any, next: (...args: any[], ) => any) => next ()},
  // Next.js specific;
  withSentryConfig: (config: any, ) => config,
:src_backup/utils/sentry-mock.ts
  SentryWebpackPlugin: class SentryWebpackPlugin {}
    constructor () {}
    apply () {}
  },
  // Tracing;
:src_backup/utils/sentry-mock.ts
  Tracing: {}
    BrowserTracing: class BrowserTracing {}
      constructor () {}
    },
  },
  // Integrations;
:src_backup/utils/sentry-mock.ts
  Integrations: {}
    BrowserTracing: class BrowserTracing {}
      constructor () {}
    },
    Http: class Http {}
      constructor () {}
    },
    OnUncaughtException: class OnUncaughtException {}
      constructor () {}
    },
    OnUnhandledRejection: class OnUnhandledRejection {}
      constructor () {}
    },
  },
  // TODO: Implement
    constructor () {}
    apply () {}
  // Tracing;
  // TODO: Implement
  // Integrations;
  // TODO: Implement
  // TODO: Implement
  // TODO: Implement
  // TODO: Implement
pr-12325
  // Transport;
  makeBrowserOfflineTransport: noop_return,
  makeFetchTransport: noop_return,
  // Utils;
:src/utils/sentry-mock.ts
  create_transport: noop_return,
  SDK_VERSION: '7.0.0 - mock','
  // Constants;
:src_backup/utils/sentry-mock.ts
Severity: {
    Fatal: 'fatal',
    Error: 'error',
    Warning: 'warning',
    Info: 'info',
    Debug: 'debug'
  }
}
:src_backup/utils/sentry-mock.ts
main
pr-12243
:temp-disabled/src/utils/sentry-mock.ts
  create_transport: noop_return,"
  SDK_VERSION: '7.0.0 - mock',
  // Constants;
  Severity: {,
  Fatal: "fatal",""
    Error: "error",""
    Warning: "warning",""
    Info: "info",""
    Debug: "debug","
:src/utils/sentry-mock.ts
pr-12325
  },
};
:temp-disabled/src/utils/sentry-mock.ts

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
export const makeBrowserOfflineTransport =;
  mockSentry && mockSentry.makeBrowserOfflineTransport;
export const makeFetchTransport = mockSentry && mockSentry.makeFetchTransport;
export const createTransport = mockSentry && mockSentry.createTransport;
export const SDK_VERSION = mockSentry && mockSentry.SDK_VERSION;
export const Severity = mockSentry && mockSentry.Severity;

:src_backup/utils/sentry-mock.ts
// Additional exports for compatibility
export { mockSentry as Sentry }
// All exports are already defined above

  // Browser-specific methods
  onLoad: noop, wrap: (fn: (...args: any[]) => any) => fn,
// Additional exports for compatibility;
export { mockSentry as Sentry };
// All exports are already defined above;
:src_backup/utils/sentry-mock.ts
// Mock scope;
const mock_scope = {}
  set_user: noop,
  set_tag: noop,
  set_tags: noop,
  set_extra: noop,
  set_extras: noop,
  set_context: noop,
pr-12325
  set_level: noop,
  set_fingerprint: noop,
  clear: noop,
  addEventProcessor: noop,
}
// Mock transaction;
const mock_transaction = {}
  set_name: noop,
  set_tag: noop,
// Mock transaction;
const mock_transaction = {
  set_name: noop,
pr-12325
  set_data: noop,
  finish: noop,
  start_child: () => mock_transaction,
  set_status: noop,
  setHttpStatus: noop,
  to_context: () => ({}),
  updateWithContext: noop,
}
// Mock hub;
const mock_hub = {}
  get_client: noop_return,
  get_scope: () => mock_scope,
  capture_exception: noop,
  capture_message: noop,
  capture_event: noop,
  add_breadcrumb: noop,
  set_user: noop,
  set_tag: noop,
  set_tags: noop,
  set_extra: noop,
  set_extras: noop,
  set_context: noop,
  configure_scope: noop,
  with_scope: (callback: (...args: any[]) => any) => callback (mock_scope),
  start_transaction: () => mock_transaction,
}
// Mock hub;
const mock_hub = {
  get_scope: () => mock_scope,
  with_scope: (callback: (...args: any[]) => any) => callback (mock_scope),
pr-12325
// Export default mock that covers all Sentry packages;
export default mock_sentry;
// Named exports for compatibility;
export const init = mock_sentry.init;
export const capture_exception = mock_sentry.capture_exception;
export const capture_message = mock_sentry.capture_message;
export const capture_event = mock_sentry.capture_event;
export const add_breadcrumb = mock_sentry.add_breadcrumb;
export const configure_scope = mock_sentry.configure_scope;
export const with_scope = mock_sentry.with_scope;
export const set_user = mock_sentry.set_user;
export const set_tag = mock_sentry.set_tag;
export const set_tags = mock_sentry.set_tags;
export const set_extra = mock_sentry.set_extra;
export const set_extras = mock_sentry.set_extras;
export const set_context = mock_sentry.set_context;
export const getCurrentHub = mock_sentry.getCurrentHub;
export const get_client = mock_sentry.get_client;
export const start_transaction = mock_sentry.start_transaction;
export const ErrorBoundary = mock_sentry.ErrorBoundary;
export const withErrorBoundary = mock_sentry.withErrorBoundary;
export const showReportDialog = mock_sentry.showReportDialog;
export const on_load = mock_sentry.on_load;
export const wrap = mock_sentry.wrap;
export const Handlers = mock_sentry.Handlers;
export const withSentryConfig = mock_sentry.withSentryConfig;
export const SentryWebpackPlugin = mock_sentry.SentryWebpackPlugin;
export const Tracing = mock_sentry.Tracing;
export const Integrations = mock_sentry.Integrations;
export const makeBrowserOfflineTransport =;
  mock_sentry.makeBrowserOfflineTransport;
export const makeFetchTransport = mock_sentry.makeFetchTransport;
export const create_transport = mock_sentry.create_transport;
export const SDK_VERSION = mock_sentry.SDK_VERSION;
export const Severity = mock_sentry.Severity;
// Additional exports for compatibility;
:src_backup/utils/sentry-mock.ts
export { mock_sentry as Sentry }
// All exports are already defined above;
export { mock_sentry as Sentry };
// All exports are already defined above;'"
}}}}
// Mock implementation for Sentry to prevent Node.js module import issues during build;
// This mock provides all the necessary Sentry APIs without importing any Node.js modules;
const noop = () => {};
const noopReturn = () => null;
const noopPromise = () => Promise.resolve();
// Mock Sentry instance with all common methods;
const mockSentry = {;
  // Core Sentry methods;
  init: noop;
  captureException: noop;
  captureMessage: noop;
  captureEvent: noop;
  addBreadcrumb: noop;
  configureScope: noop;
  withScope: (callback: (...args: any[]) => any) => callback(mockScope);
  setUser: noop;
  setTag: noop;
  setTags: noop;
  setExtra: noop;
  setExtras: noop;
  setContext: noop;
  getCurrentHub: () => mockHub;
  getClient: noopReturn;
  // Transaction and performance monitoring;
  startTransaction: () => mockTransaction;
  finishTransaction: noop;
  // Error boundary and React integration;
  ErrorBoundary: ({ children }: any) => children;
  withErrorBoundary: (component: any) => component;
  showReportDialog: noop;
  // Browser-specific methods;
  onLoad: noop;
  wrap: (fn: (...args: any[]) => any) => fn;
  // Server-specific methods (Node.js);
  Handlers: {;
    requestHandler: () => (_req: any, _res: any, next: (...args: any[]) => any) => next();
    errorHandler: () => (_err: any, _req: any, _res: any, next: (...args: any[]) => any) => next();
    tracingHandler: () => (_req: any, _res: any, next: (...args: any[]) => any) => next()};
  // Next.js specific;
  withSentryConfig: (config: any) => config;
  SentryWebpackPlugin: class SentryWebpackPlugin {;
    constructor() {}
    apply() {}
  };
  // Tracing;
  Tracing: {;
    BrowserTracing: class BrowserTracing {;
      constructor() {}
    }};
  // Integrations;
  Integrations: {;
    BrowserTracing: class BrowserTracing {;
      constructor() {}
    };
    Http: class Http {;
      constructor() {}
    };
    OnUncaughtException: class OnUncaughtException {;
      constructor() {}
    };
    OnUnhandledRejection: class OnUnhandledRejection {;
      constructor() {}
    }};
  // Transport;
  makeBrowserOfflineTransport: noopReturn;
  makeFetchTransport: noopReturn;
  // Utils;
  createTransport: noopReturn;
  SDK_VERSION: '7.0.0-mock';
  // Constants;
  Severity: {;
    Fatal: 'fatal';
    Error: 'error';
    Warning: 'warning';
    Info: 'info';
    Debug: 'debug'}};
// Mock scope;
const mockScope = {;
  setUser: noop;
  setTag: noop;
  setTags: noop;
  setExtra: noop;
  setExtras: noop;
  setContext: noop;
  setLevel: noop;
  setFingerprint: noop;
  clear: noop;
  addEventProcessor: noop};
// Mock transaction;
const mockTransaction = {;
  setName: noop;
  setTag: noop;
  setData: noop;
  finish: noop;
  startChild: () => mockTransaction;
  setStatus: noop;
  setHttpStatus: noop;
  toContext: () => ({});
  updateWithContext: noop};
// Mock hub;
const mockHub = {;
  getClient: noopReturn;
  getScope: () => mockScope;
  captureException: noop;
  captureMessage: noop;
  captureEvent: noop;
  addBreadcrumb: noop;
  setUser: noop;
  setTag: noop;
  setTags: noop;
  setExtra: noop;
  setExtras: noop;
  setContext: noop;
  configureScope: noop;
  withScope: (callback: (...args: any[]) => any) => callback(mockScope);
  startTransaction: () => mockTransaction};
// Export default mock that covers all Sentry packages;
export default mockSentry;
// Named exports for compatibility;
export const init = mockSentry.init;
export const captureException = mockSentry.captureException;
export const captureMessage = mockSentry.captureMessage;
export const captureEvent = mockSentry.captureEvent;
export const addBreadcrumb = mockSentry.addBreadcrumb;
export const configureScope = mockSentry.configureScope;
export const withScope = mockSentry.withScope;
export const setUser = mockSentry.setUser;
export const setTag = mockSentry.setTag;
export const setTags = mockSentry.setTags;
export const setExtra = mockSentry.setExtra;
export const setExtras = mockSentry.setExtras;
export const setContext = mockSentry.setContext;
export const getCurrentHub = mockSentry.getCurrentHub;
export const getClient = mockSentry.getClient;
export const startTransaction = mockSentry.startTransaction;
export const ErrorBoundary = mockSentry.ErrorBoundary;
export const withErrorBoundary = mockSentry.withErrorBoundary;
export const showReportDialog = mockSentry.showReportDialog;
export const onLoad = mockSentry.onLoad;
export const wrap = mockSentry.wrap;
export const Handlers = mockSentry.Handlers;
export const withSentryConfig = mockSentry.withSentryConfig;
export const SentryWebpackPlugin = mockSentry.SentryWebpackPlugin;
export const Tracing = mockSentry.Tracing;
export const Integrations = mockSentry.Integrations;
export const makeBrowserOfflineTransport = mockSentry.makeBrowserOfflineTransport;
export const makeFetchTransport = mockSentry.makeFetchTransport;
export const createTransport = mockSentry.createTransport;
export const SDK_VERSION = mockSentry.SDK_VERSION;
export const Severity = mockSentry.Severity;
// Additional exports for compatibility;
export { mockSentry as Sentry };
// All exports are already defined above;
:src/utils/sentry-mock.ts
// All exports are already defined above;
origin/cursor/automate-test-improve-and-merge-code-2533
pr-12243
// All exports are already defined above;
"
pr-12325

"
:temp-disabled/src/utils/sentry-mock.ts

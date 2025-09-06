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
    Debug: 'debug',
  },
}
// Mock scope;
const mock_scope = {
  set_user: noop,
  set_tag: noop,
  set_tags: noop,
  set_extra: noop,
  set_extras: noop,
  set_context: noop,
  set_level: noop,
  set_fingerprint: noop,
  clear: noop,
  addEventProcessor: noop,
}
// Mock transaction;
const mock_transaction = {
  set_name: noop,
  set_tag: noop,
  set_data: noop,
  finish: noop,
  start_child: () => mock_transaction,
  set_status: noop,
  setHttpStatus: noop,
  to_context: () => ({}),
  updateWithContext: noop,
}
// Mock hub;
const mock_hub = {
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
export { mock_sentry as Sentry }
// All exports are already defined above;
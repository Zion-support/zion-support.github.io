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
  
  // Transaction and performance monitoring
  startTransaction: () => mockTransaction;
  finishTransaction: noop;
  
  // Error boundary and React integration
  ErrorBoundary: ({ children }: any) => children;
  withErrorBoundary: (component: any) => component;
  showReportDialog: noop;
  
  // Browser-specific methods
  onLoad: noop;
  wrap: (fn: (...args: any[]) => any) => fn;
  
  
  
  
  
  setName: noop;
  setTag: noop;
  setData: noop;
  finish: noop;
  startChild: () => mockTransaction;
  setStatus: noop;
  setHttpStatus: noop;
  toContext: () => ({});
  updateWithContext: noop};

// Mock hub
const mockHub = {
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

